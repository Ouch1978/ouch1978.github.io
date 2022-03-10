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
import EditThisPage from '@theme/EditThisPage';
import BlogPostAuthors from "@theme/BlogPostAuthors"; // Very simple pluralization: probably good enough for now
import Translate, { translate } from '@docusaurus/Translate';
import { usePluralForm, useColorMode } from '@docusaurus/theme-common';

import styles from "./styles.module.css";
import { MarkdownSection, StyledBlogItem } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faClock, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";


// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        { readingTime },
      ),
    );
  };
}

export default function BlogPostItem(props: Props): JSX.Element {
  const readingTimePlural = useReadingTimePlural();
  const { children, frontMatter, assets, metadata, truncated, isBlogPostPage = false, views } = props;
  const { date,
    formattedDate,
    permalink,
    tags,
    readingTime,
    title,
    editUrl,
    authors, } = metadata;

  const { slug: postId, image } = frontMatter;

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
    dateStr = ` ${year} - ${month}`;
  }

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? "h1" : "h2";

    return (
      <header>
        <TitleHeading className={styles.blogPostTitle} itemProp="headline">
          {isBlogPostPage ? (
            title
          ) : (
            <Link itemProp="url" to={permalink}>
              {title}
            </Link>
          )}
        </TitleHeading>
        <BlogPostAuthors authors={authors} assets={assets} />
      </header>
    );
  };

  const renderTags = () => {
    return (
      (tags.length > 0 || truncated) && (
        <div className="post__tags-container margin-bottom--md">
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

  const renderPostDateAndReadingTime = () => {
    return (
      <p className={`single-post--date text--center`}>
        <FontAwesomeIcon icon={faCalendarPlus} className="margin-right--md" />
        <time dateTime={date} itemProp="datePublished">
          {formattedDate}
        </time>
        <br/>
        <br />
        <FontAwesomeIcon icon={faClock} className="margin-right--md" />
        {typeof readingTime !== 'undefined' && (
          <>
            {readingTimePlural(readingTime)}
          </>
        )}
      </p>
    );
  };

  const renderReadingTime = () => {
    return (
      <p className={`reading-time`}>
        <FontAwesomeIcon icon={faClock} className="margin-right--md" />
        {typeof readingTime !== 'undefined' && (
          <>
            {readingTimePlural(readingTime)}
          </>
        )}
      </p>
    );
  };

  return (
    <StyledBlogItem isDark={isDarkTheme} isBlogPostPage={isBlogPostPage}>
      <Head>
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta property="twitter:image" content={imageUrl} />}
        {image && <meta name="twitter:image:alt" content={`Image for ${title}`} />}
      </Head>

      <div className={`row ${!isBlogPostPage ? "blog-list--item" : ""}`} style={{ margin: "0px" }}>
        {/* 列表頁日期 */}
        {!isBlogPostPage && (
          <div className="post__date-container col col--3 padding-right--lg margin-bottom--lg">
            <div className="post__date">
              <div className="post__year_month">{dateStr}</div>
              <div className="post__day">{day}</div>
            </div>
            <div className="line__decor"></div>
          </div>
        )}
        <div className={`col ${isBlogPostPage ? `col--12 article__details` : `col--9`}`}>
          {/* 部落格文章 */}
          <article className={!isBlogPostPage ? "margin-bottom--md" : undefined}>
            {/* 標題 */}
            {renderPostHeader()}
            {/* 列表頁閱讀時間 */}
            {!isBlogPostPage && renderReadingTime()}
            {/* 列表頁標籤 */}
            {!isBlogPostPage && renderTags()}
            {/* 發佈日期與閱讀時間 */}
            {isBlogPostPage && renderPostDateAndReadingTime()}
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
              </span>
            )}
            {isBlogPostPage && editUrl && (
              <div className="col margin-top--sm">
                <EditThisPage editUrl={editUrl} />
              </div>
            )}
            {truncated && (
              <Link
                to={metadata.permalink}
                aria-label={translate(
                  {
                    message: 'Read more about {title}',
                    id: 'theme.blog.post.readMoreLabel',
                    description:
                      'The ARIA label for the link to full blog posts from excerpts',
                  },
                  { title },
                )}>
                <b>
                  <Translate
                    id="theme.blog.post.readMore"
                    description="The label used in blog post item excerpts to link to full blog posts">
                    Read More
                  </Translate>
                </b>
              </Link>
            )}
          </footer>
        </div>
      </div>
    </StyledBlogItem>
  );
}
