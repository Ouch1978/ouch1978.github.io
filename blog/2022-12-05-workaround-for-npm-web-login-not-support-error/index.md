---
title: 執行 npm login 時出現 Web login not supported 錯誤的因應措施
description: "今天在處理把 npm 預設的 registry 改為公司內部的 Nexus Repository 伺服器時，執行到 npm login 這個指令就噴了 `Web login not supported` 這個錯誤。上網一查，原來苦主又不只我一個，看起來是因為 npm 9 之後相容性不同造成的。"
authors: ouch1978
tags: 
   - Windows
   - Trouble Shooting
   - npm
keywords: 
   - npm login
   - npm ERR!
   - code ENYI
---

## 前言

今天在處理把 npm 預設的 registry 改為公司內部的 Nexus Repository 伺服器時，執行到 npm login 這個指令就噴了 `Web login not supported` 這個錯誤。

上網一查，原來苦主又不只我一個，看起來是因為 Nexus Repository 和 npm 9 之後相容性不同造成的。

<!--truncate-->

## 因應措施

救助 Google 大神之後，找到兩個解法，不過我目前用第一個方法就成功了。

### 方法一：手動編輯 .npmrc 檔

以文字編輯器編輯 `%UserProfile%\.npmrc` 檔：

```toml title="%UserProfile%\\.npmrc"
registry=https://{你的私有 Repository 路徑}
always-auth=true
//{你的私有 Repository 路徑}:_auth="{你的帳號:你的密碼 的 base64 編碼字串}"
```

例如：

```toml title="%UserProfile%\\.npmrc"
registry=https://registry.ouch1978.io/repository/npm/
always-auth=true
//registry.ouch1978.io/repository/npm/:_auth="b3VjaDE5Nzg6bXlUZXN0cGFzc3dvcmQ="
```

### 方法二：加上 --auth-type=legacy 參數

在原來的指令後面加上 `--auth-type=legacy` 參數即可，例如：

```pwsh
npm login --registry https://registry.ouch1978.io/repository/npm/ --auth-type=legacy
```

這個方法比第一個方法來得直覺得多，也方便了許多。

以上。

## 參考資料

* [NPM Login Not Working](https://clavinjune.dev/en/blogs/npm-login-not-working/ "NPM Login Not Working")

* [npm login not allowing login to github](https://stackoverflow.com/questions/74482745/npm-login-not-allowing-login-to-github "npm login not allowing login to github")
