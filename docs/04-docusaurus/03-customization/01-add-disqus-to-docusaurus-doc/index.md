---
title: 在文件庫的文章下方加上 Disqus 留言區
description: 介紹在 Docusaurus 的文章中加入 Disqus 留言區的方法。
author: ouch1978
tags:
  - Docusaurus
keywords:
  - Docusaurus
  - 留言
  - 客製
  - Disqus
  - Docs
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 前言

之前在使用 Jekyll 寫部落格的時候，每篇文章的下方都有掛上 Disqus 留言區。

不過目前 Docusaurus 還沒內建相關的功能，只能手動客製。

這篇就來分享一下怎麼在文章下方加掛 Disqus 留言區。

## 引用 disqus-react 套件

在 Console 中輸入下列指令以安裝 disqus-react 套件：

```powershell
yarn add disqus-react
```

## Swizzle DocItemFooter

接下來我們就要來客製化 Docusaurus 來達到我們的目的了。

:::note 註記
因為我已經有 Disqus 帳號了，這邊就不再針對註冊 Disqus 帳號多作說明。
:::

之前我本來是透過改寫 DocItem 這個物件來在文章下方加入 Disqus 的，不過後來發現原來只要改寫 DocItemFooter 就行了。

而且，改寫 DocItemFooter 的話，只需要使用 Wrapping 的方法就好，對之後 Docusaurus 升版的影響會相對的小。

所以我們接下來就要透過下面的指令把 DocItemFooter 的原始碼抽取出來：

### Docusaurus 2.0.0 正式版之後的作法

```powershell
yarn run swizzle @docusaurus/theme-classic DocItem/Footer --wrap --typescript
```

抽取出原始碼之後，進行下列的調整：

```jsx title="src/theme/DocItem/Footer/index.tsx"
import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import type { WrapperProps } from "@docusaurus/types";

{
  /* highlight-start */
}
import { DiscussionEmbed } from "disqus-react";
import { useDoc } from "@docusaurus/theme-common/internal";
{
  /* highlight-end */
}

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  {
    /* highlight-start */
  }
  const { metadata, frontMatter, assets } = useDoc();
  const { no_comments } = frontMatter;
  const { title, slug } = metadata;
  {
    /* highlight-end */
  }
  return (
    <>
      <Footer {...props} />
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
    </>
  );
}
```

### Docusaurus 2.0.0 Beta 版之前的作法

```powershell
yarn swizzle @docusaurus/theme-classic DocItemFooter -- --wrap
```

抽取出原始碼之後，進行下列的調整：

```jsx title="src/theme/DocItemFooter/index.tsx"
import React, { ComponentProps } from "react";
import type DocItemFooterType from "@theme/DocItemFooter";
import DocItemFooter from "@theme-original/DocItemFooter";

{
  /* highlight-next-line */
}
import { DiscussionEmbed } from "disqus-react";

type Props = ComponentProps<typeof DocItemFooterType>;

export default function DocItemFooterWrapper(props: Props): JSX.Element {
  const { content: DocContent } = props;
  const { metadata, frontMatter } = DocContent;
  {
    /* highlight-next-line */
  }
  const { no_comments } = frontMatter;
  const { title, slug } = metadata;
  return (
    <>
      <DocItemFooter {...props} />
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
    </>
  );
}
```

就這麼簡單。

:::tip 小提示
可以透過文章 front matter 中的 `no_comments` 這個屬性來決定是否要顯示 Disqus 留言區。
:::

## 後記

雖然 Disqus 算是目前市面上市佔率不低的免費留言工具，但是它對網站的優化和體驗存在著不少致命傷。

有興趣的同學可以參考下列幾篇文章：

- [I’m killing Disqus comments on my blog. Here’s why.](https://medium.com/@gaunteweb/im-killing-disqus-comments-on-my-blog-here-s-why-d6054f731341)

- [Disqus, the dark commenting system](https://supunkavinda.blog/disqus)

- [Disqus is slowing down your website, Here’s Proof](https://sitebee.co.uk/blog/disqus-is-slowing-down-your-website-heres-proof/)

- [Beware of Disqus!](https://medium.com/patrickleenyc/beware-of-disqus-17fb58cfab10)

~~謎之音：這麼爛你還用!?~~

另外，我在掛上 Disqus 之後，也發現它在存取某些 API 的時候會拋出 CORS 錯誤。

很要求完美的同學不妨考慮先使用 Github Comments 來取代 Disqus。

不過，我目前就暫且先不解決這個問題，等 Docusaurus 官方釋出官方版的留言區套件再來把它換掉吧。

也邀請大家一起[向官方敲碗](https://docusaurus.io/feature-requests/p/comments-in-documents-or-blogs)，催生官方版的留言區喔!!
