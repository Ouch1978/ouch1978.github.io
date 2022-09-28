---
title: 消除在數學公式裡使用中文時出現的警告
description: 解決在數學公式中使用中文，編譯時會出現 LaTeX-incompatible input and strict mode is set to 'warn' 警告的方法。
author: ouch1978
tags:
  - Docusaurus
keywords:
  - Docusaurus
  - Latex
  - Katex
  - warn
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 前言

使用 Docusaurus 寫文件撰寫數學公式的過程中，原本一切都很美好。

不過，就從寫出下面這段語法之後：

```markdown
$$
 \thinspace A - B \thinspace 或 A \setminus B
$$
```

Docusaurus 在編譯的過程中，就一直拋出下面這段警告：

> LaTeX-incompatible input and strict mode is set to 'warn': Unicode text character "或" used in math mode [unicodeTextInMathMode]

雖然不影響編譯的結果，數學公式也能正常的顯示。

不過，身為工程師，看到警告就是會很不舒服啊!! 不消滅它的話會有損工程師的驕傲。

## 原因

簡單的說，這個警告是因為 katax 這個套件 `strict` 參數的預設值是 `warn`，也就是在它進行轉換的過程中如果發現它認為不合使用規範的文字，就會拋出警告。

而 unicode 文字剛剛好就是不符合使用規範的文字，也就是說，所有中文、漢字...都不能用。

## 解法

要避開這個警告的解法有兩種：

第一種是不要在兩個 `$$` 區段中出現 unicode 文字。(這不是廢話嗎?)

例如說，把：

```markdown
$$
 \thinspace A - B \thinspace 或 A \setminus B
$$
```

拆成：

```markdown
$$
 \thinspace A - B \thinspace
$$

或

$$
 A \setminus B
$$
```

另一種是直接調整 strict 參數的值，把它調整成 `false` 就不會再出現警告了。

調整的方法是直接在 docusaurus.config 中修改 presets 裡 docs 和 blog 與 rehypePlugins 有關的部份：

```js title="docusaurus.config" {8,16}
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math, remarkGridTables],
          rehypePlugins: [[katex, { strict: false }]],
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          blogSidebarCount: 0,
          showReadingTime: true,
          remarkPlugins: [math, remarkGridTables],
          rehypePlugins: [[katex, { strict: false }]],
        },
      },
    ],
  ],
```

就這麼簡單，然後就可以讓煩人的警告從此消失啦!!

## 參考資料

- [Katax Options](https://katex.org/docs/options.html "Katax Options")

- [How to add custom KaTeX options?](https://github.com/facebook/docusaurus/discussions/7073 "How to add custom KaTeX options?")
