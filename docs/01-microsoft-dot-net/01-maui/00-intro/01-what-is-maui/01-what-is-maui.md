---
title: 什麼是 MAUI? - 一探 MAUI 的前世今生
description: 分別從懶人包以及考古的角度介紹 MAUI。
author: ouch1978
slug: ../what-is-maui
tags: 
   - MAUI
keywords: 
   - 歷史
   - 考古
   - XAML
draft: true
---

## 前言

微軟在 .NET 6 中推出了 MAUI 的正式版，這系列就帶大家來認識一下什麼是 MAUI。

而這篇就從 MAUI 的身世開始說起。

## 懶人包

### MAUI 是什麼? 可以吃嗎?

MAUI 是 `.NET Multi-platform App UI` 這幾個字的縮寫。

都說是跨平台了，所以可以一魚多吃 (Write Once, Run Anywhere 的概念)。

### 支援的平台

MAUI 支援的平台如下：

* Android - 5.0 (API 21) 以上的版本。
* iOS - 10 以上的版本。
* macOS - 10.15 以上的版本(透過 Mac Catalyst)。
* Windows 10 - Build 1809 以上的版本。
* Windows 11
* Tizen - 由三星維護，可參考 [Tizen.NET](https://github.com/Samsung/Tizen.NET "Tizen.NET")
* Linux - 由第三方社群維護，目前還在開發中，可參考 [.NET Multi-platform App UI (MAUI) for Linux](https://github.com/jsuarezruiz/maui-linux ".NET Multi-platform App UI (MAUI) for Linux")

### 開發工具

微軟在 Visual Studio 2022 17.3 中正式以 MAUI 取代原來的 Xamarin.Forms。

只需要在 Visual Studio Installer 中選取 `NET Multi-platform App UI development` workload 安裝，就會出現 MAUI 專案樣版。

### 與 Xamarin 在專案結構上的差異

先前的 Xamarin.Forms 除了共用的專案之外，還會為每個平台 (Android、 iOS) 各建立一個專案，如果再加上 UWP、Win 8.1、WP 8.1 就會有六個專案。

![在 Xamarin.Forms 中，每個平台有獨立的專案](one-project-for-one-platform-in-xamarin-forms.png "在 Xamarin.Forms 中，每個平台有獨立的專案")

而 MAUI 則精簡成只剩一個專案，各平台專屬的程式碼以子資料夾的方式各別存放在 Platforms 資料夾下。

![MAUI 精簡為單一專案](only-one-project-in-maui.png "MAUI 精簡為單一專案")

### 與 Xamarin 在編輯使用者介面的差異

不像 Xamarin.Forms 有 Previewer 可以提供所視即所得的 UI 編輯摸式，目前要預覽 MAUI 的 XAML 刻出來的畫面只能透過熱重載 (Hot Reload) 功能來實現。

就連用 Blend for Visual Studio 編輯 MAUI 的 XAML 檔也[沒有提供即時預覽](https://github.com/dotnet/maui/discussions/153 "What about Blend for Visual Studio Support MAUI")的功能。

目前[也有一些人](https://techcommunity.microsoft.com/t5/app-development/is-there-a-visual-editor-for-maui/m-p/2997712 "https://techcommunity.microsoft.com/t5/app-development/is-there-a-visual-editor-for-maui/m-p/2997712")跟我一樣崩潰中，希望微軟能早點讓視覺化編輯的功能復活。

另一件有趣的事是： Blend for Visual Studio 裡面也不包含 MAUI 的專案樣版，所以不能透過它來建立 MAUI 專案。

### 其它限制

目前 MAUI 雖然已經釋出正式版了，不過還有一些功能得要等到 .NET 7 才會提供，例如：

* 地圖控制項(可以暫時使用 Xamarin.Forms 的地圖控制項作為替代方案)
* 雙螢幕支援
* 提升啟動速度
* 降低程式容量

## 技術宅的說故事時間

## 未完待續
