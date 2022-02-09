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

import Translate from "@docusaurus/Translate";
import Head from "@docusaurus/Head";

import ListFilter from "./img/list.svg";
import CardFilter from "./img/card.svg";

import Link from "@docusaurus/Link";
import { useViewType } from "./useViewType";

function BlogListPage(props) {
  const { metadata, items } = props;

  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const isBlogOnlyMode = metadata.permalink === "/";
  const isPaginated = metadata.page > 1;

  let title = siteTitle + " - Blog";

  // list or card view
  const { viewType, toggleViewType } = useViewType();

  const isCardView = viewType === "card";
  const isListView = viewType === "list";

  return (
    <Layout
      title={title}
      wrapperClassName="blog-list__page"
    >
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
                  className={
                    viewType === "card"
                      ? "bloghome__switch--selected"
                      : "bloghome__switch"
                  }
                />
                <ListFilter
                  onClick={() => toggleViewType("list")}
                  className={
                    viewType === "list"
                      ? "bloghome__switch--selected"
                      : "bloghome__switch"
                  }
                />
              </div>
              <div className="bloghome__posts">
                {isCardView && (
                  <div className="bloghome__posts-card">
                    {items.map(({ content: BlogPostContent }, index) => (
                      <React.Fragment key={BlogPostContent.metadata.permalink}>
                        <BlogPostItem
                          key={BlogPostContent.metadata.permalink}
                          frontMatter={BlogPostContent.frontMatter}
                          metadata={BlogPostContent.metadata}
                          truncated={BlogPostContent.metadata.truncated}
                          /*
                          views={
                            views.find(
                              (v) => v.slug == BlogPostContent.frontMatter.slug
                            )?.views
                          }
                          */
                        >
                          <BlogPostContent />
                        </BlogPostItem>
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {isListView && (
                  <div className="bloghome__posts-list">
                    {items.map(({ content: BlogPostContent }, index) => {
                      const { metadata: blogMetaData, frontMatter } =
                        BlogPostContent;
                      const { title } = frontMatter;
                      const { permalink, date, tags } = blogMetaData;

                      const dateObj = new Date(date);

                      const year = dateObj.getFullYear();
                      let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
                      const day = ("0" + dateObj.getDate()).slice(-2);

                      return (
                        <React.Fragment key={blogMetaData.permalink}>
                          {(index + 1) % 4 === 3 && (
                            <div className="post__list-style-ad">
                            </div>
                          )}
                          <div
                            className="post__list-item"
                            key={blogMetaData.permalink}
                          >
                            <Link to={permalink} className="post__list-title">
                              {title}
                            </Link>
                            <div className="post__list-tags">
                              {tags.length > 0 &&
                                tags
                                  .slice(0, 2)
                                  .map(
                                    (
                                      { label, permalink: tagPermalink },
                                      index
                                    ) => (
                                      <Link
                                        key={tagPermalink}
                                        className={`post__tags ${index < tags.length
                                          ? "margin-right--sm"
                                          : ""
                                          }`}
                                        to={tagPermalink}
                                        style={{
                                          fontSize: "0.75em",
                                          fontWeight: 500,
                                        }}
                                      >
                                        {label}
                                      </Link>
                                    )
                                  )}
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