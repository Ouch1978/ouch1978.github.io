---
title: 在 Sidebar 中隱藏最後一層的資料夾名稱
description: 介紹透過程式碼來讓 Docusaurus 不要把文件的最後一層資料夾顯示在 Sidebar 中的方法。
author: ouch1978
tags:
  - Docusaurus
keywords:
  - Docusaurus
  - 客製
  - 隱藏
  - 資料夾
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 前言

在之前版本的 Docusaurus 中(其實我也忘記是哪個版本了...)，自動產生的 Sidebar 會將每一層的資料夾都當成一個項目輸出。

舉例來說，如果我想要把和同一篇文章相關的 markdown 檔和圖片放在同一個資料夾下，像下面這樣：

```
docs
└── category1
    └── document1
        ├── document1.md
        ├── image01.png
        └── image02.png
```

那它輸出的時候就會長成下面這個樣子：

```
docs
└── category1
    └── document1 (透過資料夾自動產生)
        └── document1 (透過 markdown 檔自動產生)
```

雖然說現在的版本(2.0.0-beta.18)已經支援當 markdown 檔和資料夾名稱相同時，不會再多產生一層相同名稱的目錄了，不過還是記錄一下當時的解法。

## 解法

只需要自己刻一個自訂的方法，然後替換掉原來的 sidebarItemsGenerator 就可以了。

範例如下：

```jsx title="docusaurus.config.js"
function unwrapCategory(items) {
  const newItems = [];

  items.forEach((item) => {
    const isDoc = item.type === "doc";
    const isCategory = item.type === "category";
    const hasOnlyOneDocItem = isCategory && item.items.length === 1 && item.items[0].type === "doc";
    if (isDoc) {
      newItems.push(item);
      return;
    }

    if (hasOnlyOneDocItem) {
      newItems.push(item.items[0]);
      return;
    }

    item.items = unwrapCategory(item.items);
    newItems.push(item);
  });

  return newItems;
}
```

```jsx title="docusaurus.config.js"
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          breadcrumbs: true,
          {/* highlight-start */}
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return unwrapCategory(sidebarItems);
          },
        },
        {/* highlight-end */}
```

## 講古時間

在之前版本的 Docusaurus 中，原本連用資料夾把部落格文章的 markdown 檔和圖檔放一起都不支援。

雖然說官方建議把靜態檔都放在 static 資料夾下，但是對於有多人共編的環境來說，不能用資料夾整理同一篇文章的檔案真的很不方便。

之前使用 Jekyll 撰寫部落格的時候，就習慣把同一篇文章的 markdown 檔和圖檔都放在同一個資料夾下，一來是好整理，二來是 markdown 檔也比較好撰寫，不同去管圖片路徑的問題。

像是我習慣使用 VSCode 作為編寫的工具，它所提供的外掛就會自動把貼進來的圖片放到目前編輯中 markdown 檔相同的資料夾下，然後我就得再手動把檔案搬到 static 資料夾下，真的很不方便。

另外，Docusaurus 支援線上編輯的功能，如果把圖片檔放在 static 資料夾下的話，使用 GitHub 或是 GitLab 線上編輯器時也無法即時預覽圖片。

不過後來官方總算支援在部落格的部份使用資料夾了，主打的文件庫卻不支援這樣的功能，所以我就到官方[提問](https://github.com/facebook/docusaurus/discussions/5327 "Is it possible to ignore the last level of folder when using autogenerated sidebars?")啦。

雖然說官方很快的回覆說這個需求應該很常見，會在之後的版本支援這個功能，也提供我應急解法的範例程式碼，不過當時我怎麼試都試不出來。

過了幾個月之後，比較有空才研究出有可能可行的寫法。

後來又經過強者我同事 -- [Alber Lin](https://gitlab.com/Albert-Lin) 的幫忙，才有了上面這個版本。

## 補充說明

目前的版本中，如果你的文件命名像下面這樣：

```
docs
└── category1
    └── 01-document1
        ├── document1.md
        ├── image01.png
        └── image02.png
```

那 Docusaurus 還是會自動多幫你產生一層目錄(markdown 檔和資料夾名稱一定要一模模一樣樣才不會多一層)。

如果懶得每個檔案都再重新命名的話，一樣可以用這篇文章的解法來讓最後一層資料夾不要被當成目錄顯示出來喔!!

## 特別感謝 Albert Lin

最後，除了感謝官方已經實現了我當初的願望之外，一定要再次特別感謝強者我同事~~ [Alber Lin](https://gitlab.com/Albert-Lin)。

當初還好有他幫我 Code Review，幫把我破破的 JavaScript 調整得成現在這個漂亮的樣子，也幫我找到我當初沒想到的一個 Case。

如果不是他，就不會有今天這篇文章。

感恩 [Alber Lin](https://gitlab.com/Albert-Lin)，讚嘆 [Alber Lin](https://gitlab.com/Albert-Lin) !!
