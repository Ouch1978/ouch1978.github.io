---
title: 排除 npm install 時出現 Unexpected Token '.' 的問題
description: 介紹由 Facebook 所開發的 Docusaurus 這個靜態網站產生器。
author: ouch1978
tags:
  - Docusaurus
  - Trouble Shooting
keywords:
  - Docusaurus
  - Unexpeted Token
  - npm
  - nvm
  - node.js
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 症狀

在 Windows 裡透過 npm 安裝某些 package (例如 yarn) 的時候，在某些電腦會出現下面這個錯誤：

> npm ERR! Unexpected token '.'

通常比較容易遇到這個問題的環境應該都有安裝 NVM for Windows 1.1.9 以下的版本，搭配各種花式組合的 node.js + npm。

發生這個問題的原因，簡單來說，是因為舊版的 NVM for Windows 和某些版本的 npm 會不相容。

## 排除方法

既然是 NVM for Windows 的鍋，基本上把它更新到不會有問題的版本就行了。

可以選擇：

1. 下載 [NVM for Windows 1.1.9 installer](https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.exe "NVM for Windows 1.1.9 installer") 進行安裝。

或是

2. 下載 [NVM for Windows 1.1.9 updater](https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-update.zip "NVM for Windows 1.1.9 updater") 更新舊有的版本。

安裝/更新完成之後，請務必要透過 `nvm uninstall` 指令把先前裝好的 node.js 版本先移除、再透過 `nvm install` 重新安裝。

:::tip 小提示
請務必要透過 `nvm uninstall` 指令把先前裝好的 node.js 版本先移除、再透過 `nvm install` 重新安裝。

請務必要透過 `nvm uninstall` 指令把先前裝好的 node.js 版本先移除、再透過 `nvm install` 重新安裝。

請務必要透過 `nvm uninstall` 指令把先前裝好的 node.js 版本先移除、再透過 `nvm install` 重新安裝。

很重要，所以要說三次。
:::

沒意外的話，應該透過 NVM for Windows 1.1.9 安裝完 node.js 之後就可以讓 npm install 正常運作啦!!

## 參考資料

- [Unexpected token '.' when trying to run 'npm install'](https://stackoverflow.com/questions/70958371/unexpected-token-when-trying-to-run-npm-install "Unexpected token '.' when trying to run 'npm install'")

- [libnpmfund - npm ERR! Unexpected token '.'](https://github.com/coreybutler/nvm-windows/issues/814 "libnpmfund - npm ERR! Unexpected token '.'")
