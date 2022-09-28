---
title: 在部落格文章下方加上 Disqus 留言區
description: 介紹在 Docusaurus 的部落格文章中加入 Disqus 留言區的方法。
author: ouch1978
tags:
  - Docusaurus
keywords:
  - Docusaurus
  - 留言
  - 客製
  - Disqus
  - Blog
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 前言

之前介紹過 [在文件庫文章下方加上 Disqus 留言區](./add-disqus-to-docusaurus-doc "在文件庫文章下方加上 Disqus 留言區") 的方法，不過對我來說，部落格文章也有相同的需求，所以我也研究了一下。

這篇就來分享一下怎麼在部落格文章下方加掛 Disqus 留言區。

:::warning 注意
本文所描述的方法儘適用於 Docusaurus 2.0.0 正式版之後的版本， Beta 版不一定適用，請小心服用。
:::

## 引用 disqus-react 套件

在 Console 中輸入下列指令以安裝 disqus-react 套件：

```powershell
yarn add disqus-react
```

## Swizzle BlogPostPage

要在部落格文章加上 Disqus 的作法和在文章加 Disqus 的作法有點差異，因為元件切法的關係，這邊我們得用 Eject 的方式來抽出原始碼。

指令如下：

```powershell
yarn run swizzle @docusaurus/theme-classic BlogPostPage --eject --typescript
```

抽取出原始碼之後，應該可以看到 BlogPostItem 元件下面會接著 BlogPostPaginator 元件。

而我們就是要把 Disqus 留言區插在兩者的中間，所以我們可以接著進行下面的調整：

```jsx title="src/theme/BlogPostPage/index.tsx"
import React, { type ReactNode } from "react";
import clsx from "clsx";
import { HtmlClassNameProvider, ThemeClassNames } from "@docusaurus/theme-common";
import { BlogPostProvider, useBlogPost } from "@docusaurus/theme-common/internal";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import TOC from "@theme/TOC";
import type { Props } from "@theme/BlogPostPage";
import type { BlogSidebar } from "@docusaurus/plugin-content-blog";

{/* highlight-next-line */}
import { DiscussionEmbed } from "disqus-react";

function BlogPostPageContent({ sidebar, children }: { sidebar: BlogSidebar; children: ReactNode }): JSX.Element {
  const { metadata, toc } = useBlogPost();
  const { nextItem, prevItem, frontMatter } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
    {/* highlight-start */}
    slug,
    title,
    no_comments
    {/* highlight-end */}
  } = frontMatter;
  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC toc={toc} minHeadingLevel={tocMinHeadingLevel} maxHeadingLevel={tocMaxHeadingLevel} />
        ) : undefined
      }
    >
      <BlogPostItem>{children}</BlogPostItem>

      {/* highlight-start */}
      {!no_comments && (
        <DiscussionEmbed
          shortname="ouch1978"
          config={{
            identifier: slug,
            title: title,
            language: "zh-TW",
          }}
        />
      )}
      {/* highlight-end */}

      {(nextItem || prevItem) && <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />}
    </BlogLayout>
  );
}

export default function BlogPostPage(props: Props): JSX.Element {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogPostPage)}>
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
```

就這麼簡單。

:::tip 小提示
可以透過文章 front matter 中的 `no_comments` 這個屬性來決定是否要顯示 Disqus 留言區。
:::

以上。
