---
title: 從 GitHub 公開 Repository 中引用範例程式碼的方法 
description: 介紹如何在 Docusaurus 中引用 GitHub 公開 Repository 裡的範例程式碼。
author: ouch1978
tags:
  - Docusaurus
keywords:
  - Docusaurus
  - 留言
  - 客製
  - github
  - Docs
  - Blog
last_update:
  date: 2024/04/14 GMT+8
  author: Ouch Liu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 前言

原本在 Docusaurus 2.x 版就有一個第三方套件 [docusaurus-theme-github-codeblock](https://github.com/saucelabs/docusaurus-theme-github-codeblock "@saucelabs/theme-github-codeblock") 可以讓我們輕鬆的在 Docusaurus 裡面引用 GitHub 公開 Repository 中的範例程式碼。

不過它畢竟是專為 2.x 版撰寫的，將 Docusaurus 升版到 3.x 之後，它就壞掉了。

:::note 註記
雖然 docusaurus-theme-github-codeblock 只適用於 Docusaurus 2.x 版，但是在 Docusaurus 的官網上還是沒特別標示它不適用於 3.x 版。
:::

從 2023 年 11 月，就有人開始向 docusaurus-theme-github-codeblock 的作者敲碗，請它讓 docusaurus-theme-github-codeblock 也能支援 Docusaurus 3.x 版。

不過不知道是不是作者太忙的關係，後來是由另一位大大跳出來 fork 了 docusaurus-theme-github-codeblock，並且改了一版同時支援 Docusaurus 2.x 和 3.x 版的版本。

接下來，就來簡單介紹一下怎麼使用這個套件吧。

## 安裝

可以透過 yarn 或是 npm 安裝這個套件：

<Tabs>
  <TabItem value="yarn" label="Yarn" default>
    ```shell
    yarn add docusaurus-theme-github-codeblock
    ```
  </TabItem>
  <TabItem value="npm" label="npm">
    ```shell
    npm install docusaurus-theme-github-codeblock
    ```
  </TabItem>
</Tabs>

## 設定

安裝完之後，還不會馬上生效。

得要在 docusaurus.config.js 裡再動一些手腳：

```js title="docusaurus.config.js"
    // ...
    themes: [
        'docusaurus-theme-github-codeblock'
    ],
    // ...
```

有用過 @saucelabs/theme-github-codeblock 的同學應該一點都不陌生才對，畢竟是 fork 過來改的。

## 使用

之後要在 Docusaurus 的文件庫或是部落格文章裡引用 GitHub 上的範例程式碼，只需要簡單的像下面這樣：

`````markdown
  ```js reference title="src/pages/index.jsx"
  https://github.com/Ouch1978/ouch1978.github.io/blob/main/src/pages/index.jsx
  ```
`````

這樣就可以輕鬆的把範例程式嵌到頁面裡囉!!

成品的範例如下：

```js reference title="src/pages/index.jsx"
https://github.com/Ouch1978/ouch1978.github.io/blob/main/src/pages/index.jsx
```

## 後記

這個套件其實還有一些提供客製化的參數，有興趣的同學不妨直接參考該套件的 [官網](https://github.com/christian-bromann/docusaurus-theme-github-codeblock)，同時也給作者按個星星鼓勵他一下。

以上。
