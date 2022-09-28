---
title: 在 Ubuntu 中快速建立 Samba 服務
description: 簡單介紹如何透過命令模式來在 Ubuntu 中建立 Samba 服務。
author: ouch1978
tags:
  - Container
  - Docker
  - Ubuntu
keywords:
  - Ubuntu
  - 指令
  - Samba
last_update:
  date: 2022/08/25 GMT+8
  author: Ouch Liu
---

## 前言

在使用 VM 的時候，往往需要在不同的機器之間共用檔案。

如果有 Samba 的加持，不用透過 FTP ，直接在 Windows 中就能使用檔案總管來對 Ubuntu 的目錄和檔案進行操作。

下面就來分享怎麼在 Ubuntu 快速的建立具備最基本功能的 Samba 服務。

## 透過 apt-get 安裝 Samba 服務

安裝 Samba 服務的指令很簡單，只要在 Console 輸入下列指令即可：

```sh
apt-get install samba
```

## 設定 Samba 服務的內容

安裝完 Samba 服務之後，可以透過編輯它的設定檔，來決定要分享哪些目錄出去，以及相關的權限。

這邊由於都是內部使用，所以基本上就不鎖權限了。

編輯設定檔的指令為：

```sh
nano /etc/samba/smb.conf
```

假設我們已經建好了 /home/shared 這個目錄，也透過 chmod 設好了權限，接下來要讓它透過 Samba 共享。

那我們的設定檔可以參考下面的內容：

```conf title="/etc/samba/smb.conf"
[global]
   workgroup = WORKGROUP
   server string = %h server (Samba, Ubuntu)
   map to guest = bad user
   usershare allow guests = yes
   security = user

[Shared]
   path = /home/shared
   writable = yes
   guest ok = yes
   read only = no
   force user = nobody
   browseable = yes
   create mask = 777
   directory mask = 777
```

:::warning 注意
上面指令範例會把 /home/shared 資料夾透過 Samba 服務共享出去，且不鎖帳號和權限，請小心服用。
:::

編輯完畢之後按下 `Ctrl + X` 存檔退出之後，輸入下列指令重啟 Samba 服務，就可以在其他電腦上開心的使用 Samba 來存取它囉!!

```sh
systemctl restart smbd
```
