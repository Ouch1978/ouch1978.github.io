---
title: 讓你的 Markdown 有更漂亮的鍵盤按鍵表示方式
description: 介紹在 Docusaurus 的 Markdown 中運用 HTML 的 kbd 標籤搭配自訂 CSS 樣式來呈現鍵盤按鍵的方法。
author: ouch1978
tags:
  - Docusaurus
keywords:
  - Docusaurus
  - 客製
  - kbd
  - css
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 前言

在寫技術文章的時候，常常會需要呈現一些鍵盤上的按鍵組合，例如 Ctrl + C、 Ctrl + V 等等...

比較常見的作法是直接用 `Ctrl + C`、 `Ctrl + V` 這樣的方法表示，但是實在是不怎麼美觀。

GitHub 原生就有支援 kbd 這個標籤，那 Docusaurus 呢?

答案是--當然也有，只是它預設沒被套上美美的 CSS。

這篇文章就來跟大家介紹怎麼透過自訂 CSS 來讓 kbd 標籤美美的。

## 作法

只需要在自訂的 css 檔中加入下列樣式即可：

```css title=src/css/custom.css
kbd {
  margin: 0px 0.2em;
  padding: 0.1em 0.6em;
  border-radius: 3px;
  border: 1px solid #ccc;
  color: rgb(51, 51, 51);
  font-family: "Arial Black", Impact;
  display: inline-block;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
  background-color: rgb(247, 247, 247);
  -moz-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
  -webkit-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}
```

接著在 markdown 裡面就可以直接使用囉!!

例如：

```markdown
<kbd>F1</kbd> <kbd>F2</kbd> <kbd>F3</kbd> <kbd>F4</kbd>

<kbd>Ctrl</kbd> + <kbd>C</kbd>

<kbd>🡄</kbd> <kbd>🡆</kbd> <kbd>🡅</kbd> <kbd>🡇</kbd>

<kbd>PrtScn</kbd> <kbd>Tab ↹</kbd>

<kbd>Enter</kbd>

<kbd>⊞ Win</kbd>

<kbd>😆</kbd>
```

就會顯示成：

<kbd>F1</kbd> <kbd>F2</kbd> <kbd>F3</kbd> <kbd>F4</kbd>

<br/><br/>

<kbd>Ctrl</kbd> + <kbd>C</kbd>

<br/><br/>

<kbd>🡄</kbd> <kbd>🡆</kbd> <kbd>🡅</kbd> <kbd>🡇</kbd>

<br/><br/>

<kbd>PrtScn</kbd> <kbd>Tab ↹</kbd>

<br/><br/>

<kbd>Enter</kbd>

<br/><br/>

<kbd>⊞ Win</kbd>

<br/><br/>

<kbd>😆</kbd>

<br/><br/>

是不是好看多了呢!?

:::tip 小提示
kbd 標籤除了可以搭配 Unicode 符號之外，也可以搭配 Emoji 使用喔!!
:::

## 參考資料

- [<kbd\> does not work.](https://github.com/facebook/docusaurus/issues/2742 "<kbd> does not work.")

- [Nice effect with the KBD tag](https://www.rgagnon.com/jsdetails/js-nice-effect-the-KBD-tag.html "Nice effect with the KBD tag")
