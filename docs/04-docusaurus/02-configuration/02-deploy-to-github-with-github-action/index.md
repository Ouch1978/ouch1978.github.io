---
title: 透過 GitHub Action 把網站發佈到 GitHub.io
description: 輕鬆使用別人寫好的 GitHub Action 把 Docusaurus 網站發佈到 GitHub.io 的方法介紹。
author: ouch1978
tags:
  - Docusaurus
keywords:
  - Docusaurus
  - 佈署
  - GitHub
  - 自動
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 前言

辛苦用 Docusaurus 寫了文章和部落格之後，當然是希望能快點和大家分享。

既然 Source Code 都放在 GitHub，發佈到 GitHub.io 應該就是首選啦~

有趣的是，如果拿 `Docusaurus Github.io` 去餵狗的話，應該會找到不少非官方的資料。

更有趣的是，如果照著找到的資料去實際操作的話，應該會走不少冤枉路(咦!?...)

什麼要在 GitHub 上設定環境變數啊、Deploy Key 啊... **通!!通!!不!!用!!**

![不需要在 GitHub 上作任何其它設定](no-need-to-setup-manually.png "不需要在 GitHub 上作任何其它設定")

這邊就來分享一下官方目前推薦的作法。

## 調整 docusaurus.config.js 的內容

這個步驟主要是要確保我們發佈時使用的網址和名稱等等相關設定是對的。

主要需要確認的屬性如下：

```js title="docusaurus.config.js"
module.exports = {
  // ...
  title: "OUCH1978@GITHUB", //網站的標題名稱
  tagline: "不務正業的架構師", //網站的副標
  url: "https://ouch1978.github.io", //要發佈的網址
  baseUrl: "/", //起始 URL
  projectName: "OUCH1978@GITHUB", //專案名稱，通常就是 Repo 的名字
  organizationName: "Ouch1978", //組織名稱，通常就是 GitHub 上的帳號
  trailingSlash: false, //網址的結尾是不是要自動加斜線
  // ...
};
```

## 在專案中加入 GitHub Workflow 檔

接著在專案中建立如下的檔案(檔案內容我是直接照抄官方範例的)：

```yml title=".github\workflows\deploy-docusaurus.yml"
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Build slides
        run: yarn reveal
      - name: Build website
        run: yarn build

      # Popular action to deploy to GitHub Pages:
      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # Build output to publish to the `gh-pages` branch:
          publish_dir: ./build
          # The following lines assign commit authorship to the official
          # GH-Actions bot for deploys to `gh-pages` branch:
          # https://github.com/actions/checkout/issues/13#issuecomment-724415212
          # The GH actions bot is used by default if you didn't specify the two fields.
          # You can swap them out with your own user credentials.
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

之後，只要我們把程式碼推到 main 這個分支的時候，就會觸發 Workflow，執行 docusaurus build 指令，並且把建置出來的內容推到 `gh-pages` 這個分支。

沒意外的話，子彈飛一會兒之後，我們的網站就可以被大家看到囉!!

:::note 註記
如果在建置的過程中有其它的動作要執行的話，可以自行調整 package.json 中 scripts.build 的內容，讓它符合需求喔!!
:::
