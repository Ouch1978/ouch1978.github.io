/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { MDXProvider } from "@mdx-js/react";

import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import MDXComponents from "@theme/MDXComponents";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { useColorMode } from "@docusaurus/theme-common";

import styles from "./styles.module.css";
import { MarkdownSection, StyledBlogItem } from "./style";

import Eye from "@site/static/img/eye.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

import Translate from "@docusaurus/Translate";
import dayjs from 'dayjs';

function BlogPostItem(props) {
  const { children, frontMatter, metadata, truncated, isBlogPostPage = false, views } = props;
  const { date, permalink, tags, readingTime } = metadata;

  const { slug: postId, author, title, image } = frontMatter;

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL = frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image, { absolute: true });

  // 是否為深色主題：
  const { isDarkTheme } = useColorMode();

  // 目前語言
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  const dateObj = new Date(date);

  const year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  let dateStr = `${year} 年 ${month} 月`;

  if (currentLocale === "en") {
    month = dateObj.toLocaleString("default", { month: "long" });
    dateStr = `${month}, ${year}`;
  }

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? "h1" : "h2";

    return (
      <header>
        <TitleHeading className={styles.blogPostTitle} itemProp='headline'>
          {isBlogPostPage ? (
            title
          ) : (
            <Link itemProp='url' to={permalink}>
              {title}
            </Link>
          )}
        </TitleHeading>

        {/*{isBlogPostPage && authors && <BlogPostAuthors authors={authors} assets={assets} />}*/}
      </header>
    );
  };

  const renderTags = () => {
    return (
      (tags.length > 0 || truncated) && (
        <div className="post__tags-container margin-top--none margin-bottom--md">
          {tags.length > 0 && (
            <>
              <FontAwesomeIcon icon={faTags} className="margin-right--md" />
              {tags.slice(0, 4).map(({ label, permalink: tagPermalink }, index) => (
                <Link
                  key={tagPermalink}
                  className={`post__tags ${index > 0 ? "margin-horiz--sm" : "margin-right--sm"}`}
                  to={tagPermalink}
                  style={{ fontSize: "0.75em", fontWeight: 500 }}
                >
                  {label}
                </Link>
              ))}
            </>
          )}
        </div>
      )
    );
  };

  return (
    <StyledBlogItem isDark={isDarkTheme} isBlogPostPage={isBlogPostPage}>
      <Head>
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta property="twitter:image" content={imageUrl} />}
        {image && <meta name="twitter:image:alt" content={`Image for ${title}`} />}
      </Head>

      {/* 統計 */}
      {isBlogPostPage}

      <div className={`row ${!isBlogPostPage ? "blog-list--item" : ""}`} style={{ margin: "0px" }}>
        {/* 列表頁日期 */}
        {!isBlogPostPage && (
          <div className="post__date-container col col--3 padding-right--lg margin-bottom--lg">
            <div className="post__date">
              <div className="post__day">{day}</div>
              <div className="post__year_month">{dateStr}</div>
            </div>
            <div className="line__decor"></div>
          </div>
        )}
        <div className={`col ${isBlogPostPage ? `col--12 article__details` : `col--9`}`}>
          {/* 部落格文章 */}
          <article className={!isBlogPostPage ? "margin-bottom--md" : undefined}>
            {/* 標題 */}
            {renderPostHeader()}
            {/* 列表頁標籤 */}
            {!isBlogPostPage && renderTags()}
            {/* 發佈日期與閱讀時間 */}
            {isBlogPostPage && (
              <p className={`single-post--date text--center`}>
                {dateStr} ·{" "}
                <Translate id="blogpage.estimated.time" description="blog page estimated time">
                  預計閱讀時間：
                </Translate>
                {readingTime && (
                  <>
                    {" "}
                    {Math.ceil(readingTime)}{" "}
                    <Translate id="blogpage.estimated.time.label" description="blog page estimated time label">
                      分鐘
                    </Translate>
                  </>
                )}
              </p>
            )}
            {/* 標籤 */}
            {isBlogPostPage && (
              <>
                <div className="text--center margin-bottom--xs padding-bottom--xs">{renderTags()}</div>
              </>
            )}

            {/* 正文 */}
            <MarkdownSection isBlogPostPage={isBlogPostPage} isDark={isDarkTheme} className="markdown">
              <MDXProvider components={MDXComponents}>{children}</MDXProvider>
            </MarkdownSection>
          </article>
          <footer className="article__footer padding-top--md margin-top--lg margin-bottom--lg">
            {!isBlogPostPage && (
              <span className="footer__read_count">
                <Eye className="footer__eye" style={{ verticalAlign: "middle" }} /> {views}
              </span>
            )}
            {truncated && (
              <Link to={metadata.permalink} aria-label={`閱讀 ${title} 的全文`}>
                <strong className={styles.readMore}>
                  <Translate description="read full text">閱讀全文</Translate>
                </strong>
              </Link>
            )}
          </footer>
        </div>
      </div>
    </StyledBlogItem>
  );
}

export default BlogPostItem;
