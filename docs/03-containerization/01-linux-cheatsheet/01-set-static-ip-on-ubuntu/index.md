---
title: 在 Ubuntu 中透過指令設定固定 IP
description: 簡單介紹如何透過命令模式來在 Ubuntu 中設定固定 IP。
author: ouch1978
tags:
  - Container
  - Docker
  - Ubuntu
keywords:
  - Ubuntu
  - static ip
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 前言

在虛擬化/容器化的世界裡，建立和管理 VM 應該是最基本中的基本。

而設定和管理眾多 VM 的 IP 就更是所有工作裡面最基本的一項了。

在還沒使用自動建置 VM 的工具之前，一切都只能先靠純手工。

這篇文章就簡單介紹如何透過命令模式來在 Ubuntu 中設定固定 IP。

## 編輯 Netplan 設定檔

首先，透過 nano 編輯器來開啟 /etc/netplan/01-netcfg.yaml 檔。

```powershell
sudo nano /etc/netplan/01-netcfg.yaml
```

接著編輯裡面的內容：

```yaml title="/etc/netplan/01-netcfg.yaml"
network:
  version: 2
  renderer: networkd
  ethernets:
    ens3:
      dhcp4: no
      addresses:
        - 192.168.1.199/24 #要指定的 IP 和網段
      gateway4: 192.168.1.254 #要使用的 Gateway IP
      nameservers:
        addresses: [192.18.41.6, 192.18.48.2] #預設的 DNS 伺服器
```

存檔並退出之後，輸入下列指令讓設定生效：

```powershell
sudo netplan apply
```

## 驗證並且刪除不必要的 IP

確認 IP 的設定是否生效，可以透過下面的指令來檢查。

```powershell
ip a
```

如果存在不需要的 IP，則可透過下列指令來刪除：

```powershell
ip addr del 192.168.1.200/24 dev ens3
```
