---
title: 強制 OneDrive 立刻與伺服器的檔案進行同步
description: "把 OneDrive 當作主要雲端備份方案的我，常常遇到它不聽話的狀況，得要重新啟動它才能讓它乖乖同步，這邊就來記錄一下透過命令列讓它醒來的方法。 有的時候 OneDrive 同步到一半就會突然卡住不動，但是檢查網路明明沒有任何問題。 有個不錯的方法，我還蠻喜歡的。"
authors: ouch1978
tags:
  - Windows 10
  - OneDrive
keywords:
  - Onedrive
  - 同步
  - 立刻
---

把 OneDrive 當作主要雲端備份方案的我，常常遇到它不聽話的狀況，得要重新啟動它才能讓它乖乖同步，這邊就來記錄一下透過命令列讓它醒來的方法。

<!--truncate-->

有的時候 OneDrive 同步到一半就會突然卡住不動，像是下圖的狀況，但是檢查網路明明沒有任何問題。
![OneDrive的傳輸速度卡在0.0KB](onedrive-stops-transfer.png "OneDrive的傳輸速度卡在0.0KB")

之前遇到這種狀況的時候，我都會在 OneDrive 圖示上按下滑鼠右鍵把它關閉，再透過檔案總管瀏覽本機 OneDrive 繫結的資料夾來喚醒它。

(我記得之前在 Windows 8 的時代，Windows Store App 版的 OneDrive 裡面有一個同步的按鈕可以按，可是現在 Windows 10 的 App 裡好像找不到那個按鈕了，哭哭~~)

不過，[這篇文章](http://andreklein.net/how-to-force-microsoft-onedrive-to-sync/ "How To Force Microsoft OneDrive To Sync More Often")裡面有個不錯的方法，我還蠻喜歡的：

> sync.bat
> {:.filename}

```shell
@echo off
taskkill /f /im onedrive.exe
start %localappdata%\Microsoft\OneDrive\OneDrive.exe /background
```

將上面幾行儲存成為 sync.bat 檔，然後在 OneDrive 不乖的時候點個兩下，就可以叫他乖乖的醒來繼續工作啦~

(雖然它時不時還是會很任性的罷工啊~~ XD)

另外，該文章的作者也提到，可以在 OneDrive 的根目錄放一個文字檔，在它偵測不到檔案變更的時候把該文字檔打開來編輯再儲存，也可以有效的讓 OneDrive 回神喔!!

以上。
