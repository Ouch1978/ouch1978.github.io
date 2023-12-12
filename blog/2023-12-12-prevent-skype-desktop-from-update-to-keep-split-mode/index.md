---
title: 救回桌面版 Skype 的分割模式 
description: "Skype 自動更新之後... 咦!? 分割模式怎麼又不見了咧!?(為什麼我說又?) 沒了分割模式的 Skype 用起來真的很不習慣，就讓我們把熟悉的分割模式救回來吧!!"
authors: ouch1978
tags: 
   - Windows
   - 偷吃步
keywords: 
   - Skype
   - 桌面版
   - 分割模式
---

## 前言

最近心血來潮，想說開一下 Skype 來看看還有沒有什麼朋友在線上。

結果 Skype 自動更新之後... 咦!? 分割模式怎麼又不見了咧!?(為什麼我說又?)

看看隔壁棚的親兒子 Microsoft Teams 都從善如流的加入了分割模式了， Skype 卻是大逆其道而行。

難不成是為了反串，好讓大家跳槽去用 Microsoft Teams 嗎?

沒了分割模式的 Skype 用起來真的很不習慣，就讓我們把熟悉的分割模式救回來吧!!

<!--truncate-->

## 降版到 Skype 8.96.0.409 版

目前還殘留著分割模式的 Skype 是 8.96.0.409 版，之後的版本就不再支援分割模式了。

所以第一步當然就是把 Skype 裝回 8.96.0.409 版啦!!

目前 8.96.0.409 版可以透過下面的連結下載：

[Skype-8.96.0.409.exe](https://download.skype.com/s4l/download/win/Skype-8.96.0.409.exe "Skype-8.96.0.409.exe")

下載安裝之後，就可以找回分割模式囉!!

## 讓 Skype 的自動更新失效

但是!!~ 先別高興得太早，一旦觸發到 Skype 的自動更新機制，它就又會更新到不支援分割模式的版本。

所以我們得要多作些事讓 Skype 的自動更新失效：

1. 以檔案總管開啟 `%AppData%\Microsoft\Skype for Desktop`。

2. 把資料夾裡面的 `Skype-Setup.exe` 更名為 `Skype-Setup.exe.bak`。

3. 建立一個新的資料夾，取名為 `Skype-Setup.exe.bak`。

重新啟動 Skype 之後，應該會發現更新的功能壞掉了，就算手動按下重試也是會繼續失敗的。

喔耶!! 分割模式真的回來啦!!

## 參考資料

* [Has Skype AGAIN removed the "split view" option?](https://answers.microsoft.com/en-us/skype/forum/all/has-skype-again-removed-the-split-view-option/70427fca-f240-43ec-9500-2ed5ffbcc1f0?page=1 'Has Skype AGAIN removed the "split view" option?')
