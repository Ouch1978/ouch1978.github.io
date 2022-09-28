---
title: 一次刪除所有資源的指令
description: 收錄清理和容器相關資源的各種指令。
author: ouch1978
tags:
  - Container
  - Docker
keywords:
  - Docker
  - CLI
  - 指令
  - 刪除
  - 容器
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 前言

在玩容器化的時候，往往一不小心就建了一大堆的容器，拉了一大堆的 Image。

這篇就記錄一下清理和容器相關資源的各種指令。

## 停止所有容器

```powershell
docker container stop $(docker container ls -aq)
```

:::danger
注意!! 下列的指令都會造成物理上的影響，請小心服用。
:::

## 刪除所有容器

```powershell
docker container rm $(docker container ls -aq)
```

## 刪除所有映像檔

```powershell
docker image prune -a -f
```

## 刪除所有 Volume

```powershell
docker volume prune -f
```

## 刪除所有網路

```powershell
docker network prune -f
```
