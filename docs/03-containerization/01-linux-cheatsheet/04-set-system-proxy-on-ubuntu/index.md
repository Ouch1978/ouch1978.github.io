---
title: 在 Ubuntu 中設定全域的 Proxy
description: 簡單介紹如何透過命令模式來在 Ubuntu 中設定全域的 Proxy。
author: ouch1978
tags:
  - Container
  - Docker
  - Ubuntu
keywords:
  - Ubuntu
  - 指令
  - Proxy
last_update:
  date: 2022/09/21 GMT+8
  author: Ouch Liu
---

## 前言

在使用 VM 的時候，不見得所有的 VM 都能拿到可以連上 Internet 的 IP。

不過無論是安裝軟體、安裝更新或是下載映像檔，都得透過網路。

比較常見的作法是讓 VM 透過 Proxy Server 上網。

這篇就簡單分享在 Ubuntu 中要怎麼指定透過哪台 Proxy Server 來上網。

## 編輯 /etc/environment 檔

在 Console 輸入下列指令透過 nano 來編輯 /etc/environment 檔，來把 Proxy 相關設定寫入環境變數：

```sh
sudo nano /etc/environment
```

接著在裡面加上下列內容：

```toml title="/etc/environment" {3-6}
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"

http_proxy="http://account:password@192.168.178.2:8080/"
https_proxy="http://account:password@192.168.178.2:8080/"
ftp_proxy="http://account:password@192.168.178.2:8080/"
no_prxoy="127.0.0.1,localhost"
```

:::warning 注意

1. 請自行將上面範例的帳號、密碼、IP 和 Port 替換為你的 Proxy 的設定。
2. 完成之後，請重新登入讓 Ubuntu 自動讀取環境變數。
   :::

我們也可以透過下面這個指令來確認加入的值是不是有生效：

```sh
sudo env | grep proxy
```

沒意外的話，應該大部份透過系統來存取網路的軟體就都能上網囉。

## 針對特定的軟體設定 Proxy

除了設定全域的 Proxy 之外，我們也可以為特定的軟體單獨作設定。

抑或，有些軟體不吃系統的 Proxy，也得單獨進行設定(例如 Docker)。

### 讓 APT Package Manager 透過 Proxy 上網

在 Console 輸入下列指令透過 nano 來編輯 /etc/apt/apt.conf.d/80proxy 檔：

```sh
sudo nano /etc/apt/apt.conf.d/80proxy
```

在裡面加上下列內容：

```txt title="/etc/apt/apt.conf.d/80proxy" {1-3}
Acquire::http::proxy "http://account:password@192.168.178.2:8080/";
Acquire::https::proxy "http://account:password@192.168.178.2:8080/";
Acquire::ftp::proxy "http://account:password@192.168.178.2:8080/";
```

按下 <kbd>Ctrl</kbd> + <kbd>X</kbd> 存檔退出就行囉。

### 讓 wget 透過 Proxy 上網

在 Console 輸入下列指令透過 nano 來編輯 ~/.wgetrc 檔：

```sh
sudo nano ~/.wgetrc
```

在裡面加上下列內容：

```toml title="~/.wgetrc" {1-4}
use_proxy = on
http_proxy = http://account:password@192.168.178.2:8080/
https_proxy = http://account:password@192.168.178.2:8080/
ftp_proxy = http://account:password@192.168.178.2:8080/
```

按下 <kbd>Ctrl</kbd> + <kbd>X</kbd> 存檔退出就行囉。

### 讓 Docker 透過 Proxy 上網

:::warning 注意

1. 這邊指的 Docker 是指 Docker Deamon，也就是讓 Docker 可以透過 Proxy 去拉映像檔，和 Container 使用 Proxy 是兩回事喔!!
2. 下列動作請務必在安裝完 Docker 之後再執行。
   :::

首先請先透過下面的指令建立設定檔的資料夾：

```sh
sudo mkdir -p /etc/systemd/system/docker.service.d
```

接著透過下面的指令編輯設定檔：

```sh
sudo nano /etc/systemd/system/docker.service.d/proxy.conf
```

設定檔的格式請參考如下：

```toml title="/etc/systemd/system/docker.service.d/proxy.conf" {1-4}
[Service]
Environment="HTTP_PROXY=http://account:password@192.168.178.2:8080/"
Environment="HTTPS_PROXY=http://account:password@192.168.178.2:8080/"
Environment="NO_PROXY="localhost,127.0.0.1,::1"
```

按下 <kbd>Ctrl</kbd> + <kbd>X</kbd> 存檔退出之後，繼續輸入下列指令重新載入 Docker Daemon：

```sh
sudo systemctl daemon-reload
```

最後透過下面的指令重啟 Docker Service，就可以套用囉!!

```sh
sudo systemctl restart docker.service
```
