---
title: 透過 Docker 執行 Jekyll 產出部落格文章
description: "很久很久之前，我把個人部落格從點部落搬家到 GitHub Pages，並且選擇了 Jekyll 作為產出靜態網站的框架。 雖然 GitHub 原生就支援透過 Jekyll 來產生靜態網站，但是如果想要在 push 之前先預覽文章的話，就得要在本機裝 Jekyll。 懶得裝 Ruby 開發環境的代價是得要讓它吃掉硬碟好幾 GB 的空間，而且每要在其他電腦撰寫文章的話就得要重新下載一次，對於電腦常常掛掉的我來說，這個點真的是很痛。"
authors: ouch1978
tags: 
    - jekyll
    - docker
keywords:
    - 部落格
    - Docker
    - Jekyll
    - 免安裝
---

## 古早之前的故事

很久很久之前，我把個人部落格從點部落搬家到 GitHub Pages，並且選擇了 Jekyll 作為產出靜態網站的框架。

雖然 GitHub 原生就支援透過 Jekyll 來產生靜態網站，但是如果想要在 push 之前先預覽文章的話，就得要在本機裝 Jekyll。

由於 Jekyll 是基於 Ruby 開發出來的框架，所以想在本機執行的話就得先裝好 Ruby 的開發環境才行。

因為我和 Ruby 不熟，再加上很懶~~不求甚解~~的關係，後來我選擇了 [Portable Jekyll for Windows](https://github.com/madhur/PortableJekyll "Portable Jekyll for Windows") ，還很開心的用了好一陣子。

懶得裝 Ruby 開發環境的代價是得要讓它吃掉硬碟好幾 GB 的空間，而且每要在其他電腦撰寫文章的話就得要重新下載一次，對於電腦常常掛掉的我來說，這個點真的是很痛。

不過，因為前一陣子電腦比較穩定了~~比較沒空寫文章~~的關係，這個痛好像也就可以繼續將就下去了。

<!--truncate-->

## 轉機

基於工作上的需求，讓我有機會使用 GitLab Pages 來作為部門的部落格平台。

然而，GitLab Pages 並不像 GitHub Pages 原生就支援 Jekyll ，而是得要透過 GitLab Runner ，在每次 push 之後自動觸發一個工作，透過 Docker 執行 Jekyll，來產出部落格文章。

考量到應該大多數人都會有在本機預覽的需求，如果要求每個人都裝 Portable Jekyll for Windows 的話，應該會引起不小的反彈，甚至會降低大家寫文章的意願。

所以我直接把腦筋動到了 Docker 上，直接把 GitLab Pages 那套搬到 Windows 上使用。

## 實作

原理就不多解釋了，簡單的說，就是透過 DockerCompose 來建立兩組不同環境的 Profile(一個是正式環境，另一個是本機預覽)。

我建立出來的設定檔如下：

``` yaml title="docker-compose.yml"
version: "2"
services:
build:
environment: - JEKYLL_ENV=docker - TZ=Asia/Taiwan - LANG=zh_TW.UTF-8 - LANGUAGE=zh_TW - LC_ALL=zh_TW.UTF-8
image: jekyll/jekyll:latest
volumes: - .:/srv/jekyll
ports: - 4000:4000
command: jekyll s
local:
extends: build
command: jekyll s --config \_config.yml,\_config_local.yml
```

如此一來，我們就能針對兩種環境來分別進行產生靜態網站的動作了。

想要產出正式環境使用的網站時，只需要輸入 `docker-compose up "build"`，如果是要在本機預覽的話，則是輸入 `docker-compose up "local"`。

和使用 Portable Jekyll for Windows 相比，使用 Docker 的話也不用自已手動透過 Gem 去安裝 plugin

是不是很方便呢?
