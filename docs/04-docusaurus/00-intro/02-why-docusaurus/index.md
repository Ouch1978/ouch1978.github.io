---
title: 為什麼我選用 Docusaurus?
description: 說明我選用 Docusaurus 的過程，以及它和幾個熱門靜態網站產生器的功能比較。
author: ouch1978
tags:
  - Docusaurus
keywords:
  - Docusaurus
  - 功能介紹
  - 比較
  - 靜態網站產生器
  - 團隊
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 契機

在轉換到 Docusaurus 之前，我用了好一陣子的 Jekyll，而且除了個人使用之外，我也把 Jekyll 介紹給公司部門裡的其它同事，用它來打造部門的部落格。

不過，後來因為以下幾個原因，我開始研究有沒有比 Jekyll 更適合團隊使用的框架：

1. Jekyll 依賴 Ruby，要在 Windows 上安裝、設定完能編譯出 Jekyll 網站的所有工具的話會很花時間，也很花硬碟空間。
   - 雖然有免安裝版的 [Portable Jekyll for Windows](https://github.com/madhur/PortableJekyll "Portable Jekyll for Windows") 但是它還是很吃硬碟空間和人品。
   - 雖然可以透過 Docker 在本機建置 Jekyll 網站並且預覽，但是並不是每個人都會使用或是願意使用 Docker。
2. Jekyll 的樣版雖然可以客製化，但是畢竟它還是比較適合用來打造部落格，而不是知識庫或是文件庫。
3. Jekyll 比較難作到多語系和多版本的支援。
4. Jekyll 使用 Liquid 樣版語言來處理樣版，但是一旦脫離了 Jekyll 或是更改樣版， Markdown 的內容可能就會壞掉。

## 挑選團隊知識庫平台/工具時應該考慮哪些條件?

以下簡單的分享一下我的經驗和考量：

1. 能搭配版控工具使用：既然是團隊共用的，版控的支援自然不能少。
2. 具備全文檢索的功能：能用關鍵字找到相關聯的文章。
3. 高度可客製化：版面、配色、樣式等等可以客製化，至少要可以放上團隊的 Logo。
4. 支援 Plugin：有時候工具本身不一定會內建我們需要的功能，至少要能在日後擴充功能，如果能透過 plugin 擴充功能的話更好。
5. 簡單易用、容易編輯：團隊中會有不同角色，需要考慮到不寫 Code 的同事能不能輕鬆的編輯。
6. 文章分類方式容易，且容易組織：團隊的業務可能會跨不同的領域，要能有效的對文章進行分類。
7. 支援線上/離線多人同時編輯：通常會鼓勵團隊成員儘量把知識放進知識庫裡，隨時都能編寫很重要。
8. 支援企業內部署：知識庫中難免包含一些比較機敏的資訊，能部署在公司裡面為佳。
9. 權限控管：最好能做到依不同的角色、權限可以看到的資訊不同。
10. 工具更新頻率：知識庫通常會跟著團隊很長一段時間，挑選的工具得要活得夠久，而且有持續在維護才行。否則可能會有被放生的風險。
11. 費用：公司、部門願不願意花錢在上面也是個問題，如果免費當然比較有機會讓公司、部門買單。
12. 平台轉換成本：若團隊原本已有其它平台，或是之後可能會轉換到其它平台，需要考慮是否有匯入/匯出工具，或是有其它無痛轉移的方法。

### 進一步的遴選條件

基於上述幾點考量，加上先前使用的平台是 Jekyll，所以我可以很快的得到下面的條件：

1. 版控工具：團隊原本使用 Jekyll 搭建的部落格原本就使用 Git 當作版控工具，基本上就會繼續沿用。
2. 全文檢索功能：原先使用的 Jekyll 樣版原本就內建離線全文檢索的功能，為了不讓機敏資料外流，全文檢索的功能也以支援離線為首選。
3. 可客製化：團隊對於客製化沒有太大的需求，只要能透過 JavaScript/CSS 進行客製化即可。
4. 支援 Plugin：至少要包含一些基本的功能，如圖片縮放、數學公式呈現、Mermaid 流程圖繪製...等等。
5. 簡單易用：工程師們大多已經習慣使用 Markdown 編輯文章，需要額外替非工程師尋找比較好用的編輯器，最好連 Git 操作都不用學。
6. 文章分類：用 Jekyll 架設的部落格原本就支援標籤，但是如果能加上使用資料夾來替文章進行更有結構的安排的話會更好。
7. 線上/離線多人同時編輯：基本上離線編輯的部份可以透過 Git 版控來追蹤，線上編輯的話則可以直接使用 GitLab 或是 GitHub 線上編輯器。
8. 部署方式：能直接佈署在 GitLab Pages 或是 GitHub Pages 為佳，或是佈署在自建的網頁伺服器。
9. 權限控管：原本以 Jekyll 搭配的部落格其實不支援權限控管，Git 也是有權限就能看到內容。故權限這塊考慮透過 O365 來達成。
10. 工具更新頻率：基本上只要是還沒被放生的平台都可以考慮，當然，有持續在更新的話是最好不過了。
11. 費用：嗯...要免費。要錢的話免談。
12. 平台轉換成本：最好能無痛從 Jekyll 轉移。至少 Markdown 的部份不用改寫太多，但是 Liquid 標籤的部份可能就得手動調整了。

## 超級比一比

接下來就是把所有可能可行的方案一個一個拿出來比較，以下分兩個部份來比較。

第一個部份是比較目前市面上比較主流的一些靜態網站產生器，第二個部份則是針對幾個挑選過後幾個口袋名單來作功能面上的比較。

### 主流靜態網站產生器比較

:::note 註記
以下資料統計至 2022/08/25 為止。
:::

<table style={{fontSize: '0.8em', width: '100%', tableLayout: 'fixed', overflow: 'unset', display:'inline-table'}}>
    <tr align="center">
        <td>比較項目/框架</td>
        <td><a href="https://nextjs.org/">Next.js</a></td>
        <td><a href="https://gohugo.io/">Hugo</a></td>
        <td><a href="https://www.gatsbyjs.com/">Gatsby</a></td>
        <td><a href="https://jekyllrb.com/">Jekyll</a></td>
        <td><a href="https://nuxtjs.org/">NuxtJS</a></td>
        <td><a href="https://hexo.io/zh-tw/">Hexo</a></td>
        <td><a href="https://docs.slatejs.org/">Slate</a></td>
        <td><a href="https://docusaurus.io/">Docusaurus</a></td>
    </tr>
    <tr align="center">
        <td>GitHub Stars</td>
        <td>91,578</td>
        <td>61,395</td>
        <td>53,427</td>
        <td>45,180</td>
        <td>8,617</td>
        <td>35,288</td>
        <td>34,420</td>
        <td>37,220</td>
    </tr>
    <tr align="center">
        <td>GitHub Issues</td>
        <td>1,100</td>
        <td>581</td>
        <td>82</td>
        <td>87</td>
        <td>385</td>
        <td>73</td>
        <td>42</td>
        <td>185</td>
    </tr>
    <tr align="center">
        <td>贊助/維護者</td>
        <td>Vercel, Inc.</td>
        <td>Steve Francia</td>
        <td>Gatsby, Inc.</td>
        <td>N/A</td>
        <td>NuxtLabs</td>
        <td>Abner Chou</td>
        <td>Slate Docs</td>
        <td>Facebook</td>
    </tr>
    <tr align="center">
        <td>版本</td>
        <td>12.2.5</td>
        <td>0.101.0</td>
        <td>4.21</td>
        <td>4.2.2</td>
        <td>3.3.0-rc.8</td>
        <td>6.2.0</td>
        <td>2.13.0</td>
        <td>2.0.1</td>
    </tr>
    <tr align="center">
        <td>更新日期</td>
        <td>2022/08/12</td>
        <td>2022/06/12</td>
        <td>2022/08/17</td>
        <td>2022/03/28</td>
        <td>2022/08/12</td>
        <td>2022/05/11</td>
        <td>2022/04/23</td>
        <td>2022/08/08</td>
    </tr>
    <tr align="center">
        <td>使用語言</td>
        <td>JavaScript</td>
        <td>Go</td>
        <td>JavaScript</td>
        <td>Ruby</td>
        <td>JavaScript</td>
        <td>JavaScript</td>
        <td>Ruby</td>
        <td>JavaScript</td>
    </tr>
    <tr align="center">
        <td>樣版框架</td>
        <td>React</td>
        <td>Go</td>
        <td>JSX<br/>(React)</td>
        <td>Liquid</td>
        <td>Vue</td>
        <td>EJS, Pug, Haml</td>
        <td>Markdown</td>
        <td>JSX<br/>(React)</td>
    </tr>
    <tr align="center">
        <td>Markdown<br/>風格</td>
        <td>自訂<br/>(第三方)</td>
        <td>CommonMark</td>
        <td>自訂</td>
        <td>kramdown</td>
        <td>自訂</td>
        <td>GitHub</td>
        <td>GitHub</td>
        <td>GitHub</td>
    </tr>
    <tr align="center">
        <td>階層式文章分類</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>多語系支援</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅<br/>(plugin)</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>多版本支援</td>
        <td>❌</td>
        <td>✅<br/>(第三方)</td>
        <td>✅<br/>(需客製)</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>圖片最佳化</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅<br/>(第三方)</td>
        <td>❌</td>
        <td>✅<br/>(plugin)</td>
    </tr>
    <tr align="center">
        <td>特長</td>
        <td>應用程式</td>
        <td>快速<br/>彈性高</td>
        <td>CMS</td>
        <td>部落格</td>
        <td>Serverless</td>
        <td>快速<br/>簡單</td>
        <td>API 文件</td>
        <td>文件<br/>部落格</td>
    </tr>
    <tr>
    </tr>
</table>

### 口袋名單功能比較

因為公司主要使用的版控工具是 GitLab，協作工具是 Office 365，所以上面內建的工具和能在上面跑的工具就先被列入口袋名單了。

<table style={{fontSize: '0.8em', width: '100%', tableLayout: 'fixed', overflow: 'unset', display:'inline-table'}}>
    <tr align="center">
        <td>功能/解決方案</td>
        <td>OneNote</td>
        <td>Jekyll</td>
        <td>GitBook
  Legacy</td>
        <td>O365
  Wiki</td>
        <td>Teams
  Wiki</td>
        <td>GitLab
  Wiki</td>
        <td>Docusaurus</td>
    </tr>
    <tr align="center">
        <td>架設平台</td>
        <td>O365</td>
        <td>GitLab Pages</td>
        <td>GitLab Pages</td>
        <td>O365</td>
        <td>O365</td>
        <td>GitLab Pages</td>
        <td>GitLab Pages</td>
    </tr>
    <tr align="center">
        <td>更新日期</td>
        <td>N/A</td>
        <td>2022/03/28</td>
        <td>10/2/2016</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>2022/08/08</td>
    </tr>
    <tr align="center">
        <td>版本控管</td>
        <td>🔶<br/>(O365 版控)</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>階層式文章分類</td>
        <td>✅</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>圖床</td>
        <td>Built-in</td>
        <td>GitLab</td>
        <td>GitLab</td>
        <td>SharePoint</td>
        <td>O365</td>
        <td>GitLab</td>
        <td>GitLab</td>
    </tr>
    <tr align="center">
        <td>程式碼高亮</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>🔶</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>離線編輯器</td>
        <td>✅</td>
        <td>❌</td>
        <td>✅</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>全文檢索</td>
        <td>✅<br/>(O365)</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>O365 整合</td>
        <td>✅</td>
        <td>✅<br/>(客製)</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>✅<br/>(客製)</td>
    </tr>
    <tr align="center">
        <td>自訂版面</td>
        <td>❌</td>
        <td>✅</td>
        <td>🔶</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>使用範圍</td>
        <td>全團隊</td>
        <td>全團隊</td>
        <td>全團隊</td>
        <td>全團隊</td>
        <td>全團隊</td>
        <td>專案/Repo</td>
        <td>全團隊</td>
    </tr>
    <tr align="center">
        <td>Markdown 語法支援</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>Plugins 支援</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>多版本支援</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>多語系支援</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>❌</td>
        <td>🔶</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>所視即所得表格編輯</td>
        <td>✅</td>
        <td>🔶<br/>(編輯器外掛)</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>🔶<br/>(編輯器外掛)</td>
    </tr>
    <tr align="center">
        <td>可直接貼上圖片</td>
        <td>✅</td>
        <td>🔶<br/>(編輯器外掛)</td>
        <td>✅</td>
        <td>❌</td>
        <td>✅</td>
        <td>❌</td>
        <td>🔶<br/>(編輯器外掛)</td>
    </tr>
    <tr align="center">
        <td>圖表支援</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr align="center">
        <td>不需建置即可更新內容</td>
        <td>✅</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>❌</td>
    </tr>
</table>

## 結論

最後的大 PK 重點放在下列幾個項目上：

1. 是否支援階層式的資料夾結構和文章呈現方式。
2. 是否支援版控。
3. 編輯體驗。
4. 是否能和 O365 整合(例如能搜尋得到 O365 的文件)。

整個比較下來之後，其實原本 GitBook Legacy 是最符合需求的，因為以下幾個原因：

1. 它原生就支援階層式的資料夾結構來整理文件。
2. GitBook Legacy 可以使用 GitLab 做為版控工具，並且可以發佈到 GitLab Pages。
3. 它的離線編輯器使用起來相對接近 Word 的使用體驗，而且把 Git 的指令也都包在裡面了，對不寫 Code 的人來說接受度相對的高。

- 它原生的設計就是用來寫書用的，所以很適合用在技術文件或是規格書上，還可以直接列印成一本實體書或是轉成 PDF 檔。

不過， GitBook Legacy 的致命傷就是它早就被放生了，連離線編輯器都沒在維護了，加上它生成的網站相對不容易客製化(畢竟是書嘛，是要多炫炮?)。

之後經過一段時間的研究，發現其實用 VSCode 配合一些 Extension 來編輯 Docusaurus 的文章也是可以達到不錯的使用者體驗。

加上如果在本機安裝 Node.JS 之後的即時預覽體驗對工程師們是大大加分的(尤其是前端工程師，他們本來就是這樣在工作的)。

所以依照一樣的條件來比較，Docusaurus 得出的結論如下：

1. 它也原生就支援階層式的資料夾結構，而且比 GitBook Legacy 強的是原生就支援多語系和多版本。 (👍👍👍)
2. 一樣可以使用 GitLab 作為版控工具，也可以發佈到 GitLab Pages。 (🤝)
3. 編輯體驗對工程師來說大勝，對不寫 Code 的人來說就差不多。 (👍)
4. Docusaurus 的離線全文檢索套件可以透過客製，讓它可以搜尋得到 O365 的文章。 (👍👍👍)

- 另外，也有第三方的套件可以把 Docusaurus 的文章輸出成 PDF。

所以最後出線的當然是 Docusaurus 啦!!

好框架，不用嗎?
