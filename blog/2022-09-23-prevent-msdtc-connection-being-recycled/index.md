---
title: 延長 MSDTC 分散式交易連線快取的時間，提升系統效能
description: "之前有同事跑來問我，為什麼我們的 ASP.NET WebAPI 閒置一段時間之後，被呼叫的第一個 API Call 都會因為 Timeout 而失敗?
當下我一開始很直覺的認為，應該是系統沒有作好 Preload 的動作，導致 Application Pool 被回收之後重啟的過程花費太多時間。
但是現實往往不是這麼簡單，在我們對系統加上 Preload 相關設定之後，隔一段時間的第一個 API Call 都還是會 Timeout。
經過一番抽絲剝繭之後，才發現原來真兇是 MSDTC…"
authors: ouch1978
tags: 
  - Programming
  - MSDTC
  - SQL Server
keywords:
  - MSDTC
  - 慢
  - 重建 
  - 效能
draft: true
---

## 前言

之前有同事跑來問我，為什麼我們的 ASP.NET WebAPI 閒置一段時間之後，被呼叫的第一個 API Call 都會因為 Timeout 而失敗?

(這裡指的 Timeout 是呼叫端設定了兩秒沒收到 Response 就會直接當作 Timeout 處理)

當下我一開始很直覺的認為，應該是系統沒有作好 Preload 的動作，導致 Application Pool 被回收之後重啟的過程花費太多時間。

但是現實往往不是這麼簡單，在我們對系統加上 Preload 相關設定之後，隔一段時間的第一個 API Call 都還是會 Timeout。

經過一番抽絲剝繭之後，才發現原來真兇是 MSDTC…

<!--truncate-->

## 問題重現與驗證

當初我作了一個小實驗，情境如下：

1. 在一個 Transaction Scope 裡面使用三個不同的資料庫，用不同順序的排列組合去連它們。

2. 觀察和每個資料庫進行連線所花費的時間。

而我得到的結論是：

不管是哪種排列組合，在連到第一顆資料庫的時候都很快。

但是當在建立和第二顆資料庫的連線時就會花費很長的時間，在連第三顆的時候又很快。

有興趣的話也不妨在自己的電腦試看看是不是和我看到的結果是一致的。

經過一番驗證之後，確認是因為在連到第二顆資料庫時，系統會多一個判斷是否要將交易提升為分散式交易的動作。

如果是的話，它還會去 MSDTC 服務裡看有沒有現成的 MSDTC Session 可用，如果沒有，就會再建立一個新的 MSDTC Session。

## 那，問題在哪?

簡單的說，當程式中有使用到 Transaction Scope，而且裡面會跨及超過一個以上的 SQL Server 資料庫連線時，系統就會把這個交易提升為分散式交易。

:::note 註記
在 SQL Server 2008 之前的版本，只要是 Transaction Scope 包含一條以上的資料庫連線，系統就會把它判定為分散式交易。
但是從 SQL Server 2008 之後，要連到一個以上的資料庫才會被判定為分散式交易。
:::

透過 MSDTC 在 SQL Server 進行分散式交易時的成本是很高的。

特別是系統在判斷是否需要將 Transaction Scope 提升成為分散式交易的時候，以及建立分散式交易這個動作本身。