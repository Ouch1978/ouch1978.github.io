/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogListPaginator from "@theme/BlogListPaginator";

import styles from "./styles.module.css";
import Fade from "react-reveal/Fade";

import Translate from "@docusaurus/Translate";
import Head from "@docusaurus/Head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faHistory } from "@fortawesome/free-solid-svg-icons";

import ListFilter from "./img/list.svg";
import CardFilter from "./img/card.svg";

import Link from "@docusaurus/Link";
import { useViewType } from "./useViewType";

function BlogListPage(props) {
  const { metadata, items, tags, sidebar } = props;

  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();

  const isPaginated = metadata.page > 1;
  const isBlogPage = metadata.permalink === "/";

  const title = siteTitle + " - Blog";

  // list or card view
  const { viewType, toggleViewType } = useViewType();

  const isCardView = viewType === "card";
  const isListView = viewType === "list";

  /*
  const InfoCard = () => {
    function getCategoryOfTag(tag) {
      return tag[0].toUpperCase();
    }

    const tagCategories: { [category: string]: string[] } = {};
    Object.keys(tags).forEach((tag) => {
      const category = getCategoryOfTag(tag);
      tagCategories[category] = tagCategories[category] || [];
      tagCategories[category].push(tag);
    });

    const tagsList = Object.entries(tagCategories).sort(([a], [b]) => a.localeCompare(b));
    const tagsSection = tagsList
      .map(([category, tagsForCategory]) => (
        <div key={category} style={{ display: "flex", flexWrap: "wrap" }}>
          {tagsForCategory.map((tag, index) => (
            <Link className={`post__tags margin-right--sm margin-bottom--sm`} href={tags[tag].permalink} key={tag}>
              {tags[tag].name}({tags[tag].count})
            </Link>
          ))}
        </div>
      ))
      .filter((item) => item != null);

    const { totalCount: blogCount } = metadata;
    const tagCount = Object.values(tagCategories["/"]).length;

    return (
      <div
        className={viewType === "card" ? `col col--3 ${styles["info-wrapper"]}` : ""}
        style={{ display: `${viewType === "card" && isBlogPage ? "" : "none"}` }}
      >
        <div className="bloghome__posts">
          <div className={`bloghome__posts-card ${styles["info-wrapper"]}`}>
            <div className={`row ${styles.card}`}>
              <div className={styles["personal-info-wrapper"]}>
                <img className={styles["personal-img"]} src="/img/logo.webp" alt="logo"></img>
                <h3 className={styles["personal-name"]}>{siteConfig.organizationName}</h3>
                <h3 className={styles["personal-name"]}>
                  文章數 {blogCount} | 標籤數 {tagCount}
                </h3>
              </div>
            </div>
          </div>
          <div className={`bloghome__posts-card ${styles["info-wrapper"]}`}>
            <div className={`row ${styles.card}`}>
              <div className={styles["personal-info-wrapper"]}>
                <FontAwesomeIcon icon={faTags} color="#c4d3e0" />
                <Link className={`margin-horiz--sm`} href={"./tags"}>
                  標籤
                </Link>
                <div className="margin-bottom--md"></div>
                <div>{tagsSection}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
*/

  return (
    <Layout title={title} wrapperClassName="blog-list__page">
      <Head>
        <title>{title}</title>
      </Head>

      <div className="container-wrapper">
        <div className="container padding-vert--sm">
          <div className="row">
            <div className="col col--12">
              {!isPaginated}
              {/* switch list and card */}
              <div className="bloghome__swith-view">
                <CardFilter
                  onClick={() => toggleViewType("card")}
                  className={viewType === "card" ? "bloghome__switch--selected" : "bloghome__switch"}
                />
                <ListFilter
                  onClick={() => toggleViewType("list")}
                  className={viewType === "list" ? "bloghome__switch--selected" : "bloghome__switch"}
                />
              </div>
              <div className="bloghome__posts">
                {isCardView && (
                  <div className='bloghome__posts-card'>
                    {items.map(({ content: BlogPostContent }, index) => (
                      <Fade key={BlogPostContent.metadata.permalink}>
                        <React.Fragment key={BlogPostContent.metadata.permalink}>
                          <BlogPostItem
                            key={BlogPostContent.metadata.permalink}
                            frontMatter={BlogPostContent.frontMatter}
                            metadata={BlogPostContent.metadata}
                            truncated={BlogPostContent.metadata.truncated}
                          >
                            <BlogPostContent />
                          </BlogPostItem>
                        </React.Fragment>
                      </Fade>
                    ))}
                  </div>
                )}

                {isListView && (
                  <div className="bloghome__posts-list">
                    {items.map(({ content: BlogPostContent }, index) => {
                      const { metadata: blogMetaData, frontMatter } = BlogPostContent;
                      const { title } = frontMatter;
                      const { permalink, date, tags } = blogMetaData;

                      const dateObj = new Date(date);

                      const year = dateObj.getFullYear();
                      const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
                      const day = ("0" + dateObj.getDate()).slice(-2);

                      return (
                        <React.Fragment key={blogMetaData.permalink}>
                          <div className="post__list-item" key={blogMetaData.permalink}>
                            <Link to={permalink} className="post__list-title">
                              {title}
                            </Link>
                            <div className="post__list-tags">
                              {tags.length > 0 &&
                                tags.slice(0, 2).map(({ label, permalink: tagPermalink }, index) => (
                                  <Link
                                    key={tagPermalink}
                                    className={`post__tags ${index < tags.length ? "margin-right--sm" : ""}`}
                                    to={tagPermalink}
                                    style={{
                                      fontSize: "0.75em",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {label}
                                  </Link>
                                ))}
                            </div>
                            <div className="post__list-date">
                              {year}-{month}-{day}
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}
                <BlogListPaginator metadata={metadata} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;
