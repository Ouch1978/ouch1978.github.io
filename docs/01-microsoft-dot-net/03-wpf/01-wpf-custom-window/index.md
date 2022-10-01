---
title: WPF 透明背景自訂視窗分享
description: 分享一個我自製的透明背景自訂視窗 WPF 應用程式樣版，具備拖拉移動視窗、拖拉縮放視窗、縮小視窗、放大/還原視和關閉視窗功能。
author: ouch1978
image: ./custom-window-with-transparent-background.png
tags:
  - WPF
  - C#
  - .NET
keywords:
  - 透明
  - 不規則
  - 拖拉
last_update:
  date: 2022/09/04 GMT+8
  author: Ouch Liu
---

## 前言

平常我在寫 POC 的時候，除了使用 LinqPad 之外，如果是比較需要有個 UI 來呈現結果的話，都會選用 WPF 作為開發的框架。

一來繼續保持 XAML 的手感，二來用它來處理一些資料繫結或是 UI 執行緒方面的工作相對的輕鬆。

最近把一個我已經使用好幾年的一個專案樣版轉到了 .NET 6，就順便來分享一下。

## 這個樣版已經實作的功能

這個樣版具備以下功能和特色：

1. 背景透明、不規則視窗。
   ![透明背景，不規則形狀](custom-window-with-transparent-background.png "透明背景，不規則形狀")

2. 可以拖拉移動、縮放視窗。
   ![支援拖拉移動](drag-n-drop-move-supported.gif "支援拖拉移動")

   ![支援拖拉縮放](drag-n-drop-resize-supported.gif "支援拖拉縮放")

3. 已實作縮小、放大/還原、關閉按鈕。(這個部份我就不附圖了。)

基本上我只拿來它作一些小 POC，所以在上面幾個功能上並沒有下太多的功夫，能動就好。

有興趣的朋友也不妨自己把它改得更完善。

## 原始碼在哪?

本文的範例原始碼連結如下，請自行取用：

[![Sample](/img/source-code.png)](https://github.com/Ouch1978/WpfCustomWindow)
