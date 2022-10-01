---
title: 在首頁加上最新文章列表
description: 介紹在 Docusaurus 的首頁加上最新文章列表的方法。
author: ouch1978
tags:
  - Docusaurus
  - 客製
keywords:
  - Docusaurus
  - 文章列表
  - 自製元件
  - css
last_update:
  date: 2022/10/01 GMT+8
  author: Ouch Liu
---

## 前言

以前在使用其它部落格平台或是框架的時候，都會習慣在首頁顯示最新文章的列表。

不過，很可惜的是， Docusaurus 目前還沒內建這個功能。

雖然也有不少人跟官方敲碗，不過因為每個人的需求可能不盡相同，所以官方目前還是比較傾向讓使用者自己客製化來實作這個功能。

## 官方建議的解決方案

官方建議的解決方案是透過擴充 plugin-content-blog 這個套件來讀取文章列表，並且在首頁顯示。

整個實作的思路簡單來說，就是透過官方 API 提供的 Hook，在原來部落格啟動的生命周期裡面加入自己的程式碼。

透過程式碼讓部落格文章被解析的時候，順便讀取相關的變數，然後丟給首頁生成最新文章列表。

相關的討論可以參考下列連結：

- [Get latest blog/docs programmatically?](https://github.com/facebook/docusaurus/discussions/6423 "Get latest blog/docs programmatically?")

- [Extend existing content plugins (CMS integration, middleware, doc gen...)](https://github.com/facebook/docusaurus/issues/4138#issuecomment-771042127 "Extend existing content plugins (CMS integration, middleware, doc gen...)")

而且有人真的照著官方的建議，把這個功能實作了出來，有興趣的話也以參考下面這篇文章：

[Display Recent Blog Posts on Home Page with Docusaurus 2.0.0-beta.16](https://www.kgajera.com/blog/display-recent-blog-posts-on-home-page-with-docusaurus/ "Display Recent Blog Posts on Home Page with Docusaurus 2.0.0-beta.16")

但是因為這個不是我想介紹的方法，所以就先跳過不詳述了。

## 非官方的解決方案

除了官方推薦的解決方案之外，目前也有不少神人自己魔改出了變形的版本，例如：

- [愧怍的小站](https://kuizuo.cn/ "愧怍的小站")

  - 魔改的 plug-in 在此：[plugin-content-blog](https://github.com/kuizuo/blog/tree/main/src/plugin/plugin-content-blog "plugin-content-blog")

  愧怍的魔改主要是針對部落格文章的所有標籤多作一層萃取，以便把它們也放在首頁中呈現。

- [前端大刘](https://lzwdot.com/ "前端大刘")

  - 產生最新文章清單的 js 檔在此：[new.js](https://github.com/lzwdot/lzwdot.github.io/blob/main/src/bin/new.js "new.js")

  前端大刘則是透過 Node.js 手動去爬取所有 Markdown 檔的 Front Matter，以作為最新文章列表的資料來源。

## 我使用的解決方案

我的解決方案比較像是前端大刘使用方法的變形，一樣是透過手動去產生新文章列表，但是我不是直接爬 Markdown 檔，而是 JSON 檔。

當我們透過 yarn start 在本機預覽撰寫中的文章時，在 .docusaurus 資料夾下會有 Docusaurus 透過 Markdown 轉出來的 JSON 檔。

我的思路是直接去讀取那些 JSON 檔，轉成新文章列表，當作自製元件的資料來源，把新文件列表 JSON 檔透過 Raact 顯示在首頁上。

用來產生新文章列表的幾個檔案如下：

1. src/bin/latestPostsListGenerator.js：用來產生新部落格文章列表和新文件庫文章列表的 js 檔，可以手動執行去爬取 .docusaurus 下的 JSON 檔。

```js reference title="src/bin/latestPostsListGenerator.js"
  https://github.com/Ouch1978/ouch1978.github.io/blob/main/src/bin/latestPostsListGenerator.js
```

2. src/components/LatestPosts/index.jsx：用來顯示新文章列表的元件，會讀取 latestPostsListGenerator.js 生成的兩個 JSON 檔。

   ```js reference title="src/bin/latestPostsListGenerator.js"
   https://github.com/Ouch1978/ouch1978.github.io/blob/main/src/components/LatestPosts/index.jsx
   ```

3. src/components/LatestPosts/LatestPosts.module.css：給 LatestPosts 元件使用的 css 樣式檔。

   ```js reference title="src/bin/latestPostsListGenerator.js"
   https://github.com/Ouch1978/ouch1978.github.io/blob/main/src/components/LatestPosts/LatestPosts.module.css
   ```

4. src/pages/index.jsx：在首頁裡加上最新文章元件。

   ```js reference title="src/pages/index.jsx"
   https://github.com/Ouch1978/ouch1978.github.io/blob/main/src/pages/index.jsx
   ```

最後，要在 package.json 的 scripts 區塊裡加入下面這行：

  ```diff title="package.json" 
  {
    "name": "ouch1978-at-github",
    "version": "0.0.0",
    "license": "UNLICENSED",
    "private": true,
    "scripts": {
      "docusaurus": "docusaurus",
      "start": "set TZ=Asia/Taipei && set URL=http://localhost&& set BASE_URL=/&& docusaurus start -p 8080",
      "build": "set TZ=Asia/Taipei && set URL=https://ouch1978.github.io&& set BASE_URL=/&&docusaurus build",
  +    "new": "node ./src/bin/latestPostsListGenerator.js"
    },
  }
  ```

之後就可以透過下面的指令產生最新文章的資料檔給最新文章元件讀取呈現囉!!

```shell
yarn new
```

以上。
