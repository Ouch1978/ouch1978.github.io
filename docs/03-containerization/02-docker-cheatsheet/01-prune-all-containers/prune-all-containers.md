---
title: 一次刪除所有容器的指令
author: ouch1978
tags: [ubuntu,command,docker,prune,cli]
slug: prune-all-containers

---

## 前言

在玩容器化的時候，往往一不小心就建了一大堆的容器，拉了一大堆的 Image。

這篇就記錄一下清理和容器相關資源的各種指令。

## 停止所有容器

```shell
docker container stop $(docker container ls -aq)
```

:::danger
注意!! 下列的指令都會造成物理上的影響，請小心服用。
:::

## 刪除所有容器

```shell
docker container rm $(docker container ls -aq)
```

## 刪除所有映像檔

```shell
docker image prune -a -f
```

## 刪除所有 Volume

```shell
docker volume prune -f
```

## 刪除所有網路

```shell
docker network prune -f
```
