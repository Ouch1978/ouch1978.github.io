---
title: 強化 SEO - 為所有文章加上 max-image-preview 中繼標記
description: 依據 Google 搜尋中心的說明文件中所述，在內容中加入吸引人的高畫質圖片會有助於個人內容更有機會顯示在探索專區上，這篇文章就來分享在 Docusaurus 中可以怎麼允許爬蟲爬到高畫質圖片的方法。
author: ouch1978
tags:
  - Docusaurus
keywords:
  - Docusaurus
  - meta tag
  - google discover
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 前言

最近在優化網站 SEO 的過程中，無意間看到 Google 搜尋中心的一段文字：

> 如果您希望個人內容更有機會顯示在探索專區上，建議您採取下列做法：
>
> - 網頁標題力求傳達內容精髓，不追求誘餌式點擊。
> - 在內容中加入吸引人的高畫質圖片，特別是較可能從探索專區產生造訪次數的大型圖片，尤為首選。大型圖片的寬度至少要有 1,200 像素，並透過 max-image-preview:large 設定或 AMP 格式顯示。請避免以網站標誌做為圖片。

咦!? 原來有圖除了有真相，還可以提升 SEO!?

不過，max-image-preview 這個 meta tag 的預設值是 standard，不是 large 啊~

只好再問問 Google 大神有沒有懶人包。

結果還真的讓我找到一篇文章：[Docusaurus, meta tags and Google Discover](https://blog.johnnyreilly.com/2021/10/18/docusaurus-meta-tags-and-google-discover "Docusaurus, meta tags and Google Discover")

原來早就有高手發現，而且解決了這個問題。

這篇就簡單記錄一下作法。

## 解法

原來只需要在 docusaurus.config.js 中動一些手腳，就可以一次幫所有的文章都加上 max-image-preview:large 這個 meta tag。

方法如下：

```js title="docusaurus.config.js" {5}
module.exports = {
  //...
  themeConfig: {
    //...
    metadata: [{ name: "robots", content: "max-image-preview:large" }],
    //...
  },
  //...
};
```

如果只想在某些特定頁面上加上這個 meta tag，也可以直接用 html 標籤來實現，方法如下：

```markdown title="test.md" {3-5}
# 文章標題

<head>
  <meta name="robots" content="max-image-preview:large">
</head>
```

就這麼簡單，還不快加起來!?

## 參考資料

- [Google 探索和您的網站](https://developers.google.com/search/docs/advanced/mobile/google-discover "Google 探索和您的網站")

- [漫遊器中繼標記、data-nosnippet 和 X-Robots-Tag 規格](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#max-image-preview "漫遊器中繼標記、data-nosnippet 和 X-Robots-Tag 規格")

- [Search engine optimization (SEO)](https://docusaurus.io/docs/seo "Search engine optimization (SEO)")
