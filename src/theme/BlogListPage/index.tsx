/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogListPaginator from "@theme/BlogListPaginator";
import type { Props } from "@theme/BlogListPage";
import { ThemeClassNames } from "@docusaurus/theme-common";

import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.css";
import ListFilter from "./img/list.svg";
import CardFilter from "./img/card.svg";

import Link from "@docusaurus/Link";

import { useViewType } from "./useViewType";

export default function BlogListPage(props: Props): JSX.Element {
  const { metadata, items, sidebar } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  const isPaginated = metadata.page > 1;

  const { viewType, toggleViewType } = useViewType();

  const isCardView = viewType === "card";
  const isListView = viewType === "list";

  return (
    <Layout title={title} wrapperClassName="blog-list__page">
      <Head>
        <title>部落格 | OUCH1978@GITHUB</title>
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
                  <div className="bloghome__posts-card">
                    {items.map(({ content: BlogPostContent }, index) => (
                      <Fade key={BlogPostContent.metadata.permalink}>
                        <React.Fragment key={BlogPostContent.metadata.permalink}>
                          <BlogPostItem
                            key={BlogPostContent.metadata.permalink}
                            frontMatter={BlogPostContent.frontMatter}
                            assets={BlogPostContent.assets}
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
