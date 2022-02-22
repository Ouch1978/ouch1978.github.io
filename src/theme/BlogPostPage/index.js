/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Seo from "@theme/Seo";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import { ThemeClassNames } from "@docusaurus/theme-common";
import TOC from "@theme/TOC";

import { DiscussionEmbed } from "disqus-react";

function BlogPostPage(props) {
  const { content: BlogPostContents, sidebar } = props;
  const { assets, metadata } = BlogPostContents;
  const { title, description, nextItem, prevItem, date, tags, authors, frontMatter, slug } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    keywords,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
    no_comments,
  } = frontMatter;
  const image = assets.image ?? frontMatter.image;

  const WindowLocation = () => {
    return (
      <BrowserOnly>
        {() => {
          window.location.href;
        }}
      </BrowserOnly>
    );
  };

  return (
    <BlogLayout
      wrapperClassName={ThemeClassNames.wrapper.blogPages}
      pageClassName={ThemeClassNames.page.blogPostPage}
      sidebar={sidebar}
      toc={
        !hideTableOfContents && BlogPostContents.toc && BlogPostContents.toc.length > 0 ? (
          <TOC toc={BlogPostContents.toc} minHeadingLevel={tocMinHeadingLevel} maxHeadingLevel={tocMaxHeadingLevel} />
        ) : undefined
      }
    >
      <Seo // TODO refactor needed: it's a bit annoying but Seo MUST be inside BlogLayout
        // otherwise  default image (set by BlogLayout) would shadow the custom blog post image
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      >
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={date} />

        {/* TODO double check those article meta array syntaxes, see https://ogp.me/#array */}
        {authors.some((author) => author.url) && (
          <meta
            property="article:author"
            content={authors
              .map((author) => author.url)
              .filter(Boolean)
              .join(",")}
          />
        )}
        {tags.length > 0 && <meta property="article:tag" content={tags.map((tag) => tag.label).join(",")} />}
      </Seo>

      <BlogPostItem frontMatter={frontMatter} assets={assets} metadata={metadata} isBlogPostPage>
        <BlogPostContents />
      </BlogPostItem>

      {!no_comments && (
        <DiscussionEmbed
          shortname="ouch1978"
          config={{
            url: WindowLocation,
            identifier: slug,
            title: title,
            language: "zh-TW",
          }}
        />
      )}

      {(nextItem || prevItem) && <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />}
    </BlogLayout>
  );
}

export default BlogPostPage;
