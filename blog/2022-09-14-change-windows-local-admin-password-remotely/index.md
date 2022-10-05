---
title: 從遠端修改 Windows 本機帳號的密碼，還可以一次改多台!!
description: "在管理 Server 的時候，偶爾會出現需要更改某台機器管理者密碼的情況。如果要改的機器只有一兩台的話，還可以辛苦一點直接用遠端桌面連線的方式連過去改。但是，如果一次要改五台以上，甚至是十台以上，可能就會需要更聰明一點的方法了。"
authors: ouch1978
tags: 
   - Windows
   - 小技巧
   - PsTools
keywords: 
   - Windows
   - Change local administrator password
   - PsTools
   - PsPasswd
---

## 前言

在管理 Server 的時候，偶爾會出現需要更改某台機器管理者密碼的情況。

如果要改的機器只有一兩台的話，還可以辛苦一點直接用遠端桌面連線的方式連過去改。

但是，如果一次要改五台以上，甚至是十台以上，一台一台用遠端桌面連線慢慢改可能就沒那麼有效率了。

這篇文章就來分享透過 `PsPasswd.exe` 來更改遠端 Windows 裡某個帳號的密碼的方法。

最重要的是，它還支援一次對一整批的機器進行修改!!

<!--truncate-->

## 取得 PsPasswd.exe

PsPasswd.exe 是 PsTools 裡的一個工具。

PsTools 是由微軟 Azure CTO - Mark Russinovich 所開發的一系列小工具的集合。

之所以會取名叫 PsTools，是因為它的第一個小工具 PsList(用來顯示目前執行中的程序清單) 致敬了標準 UNIX 作業系統裡顯示目前執行中的程序清單的指令就叫 `PS`，而他把所有小工具都加上 Ps 這個前綴詞來讓它們看起來是一個同捆包的概念，整個套裝就叫 PsTools。

說完故事，PsTools 的下載點在 [這裡](https://download.sysinternals.com/files/PSTools.zip "Download PsTools Suite")。

下載並且解壓縮之後，你應該就會看到裡面包含了今天的主角 - `PsPasswd.exe`。

## 所以我該怎麼使用呢?

我們可以透過命令提示字元切換到 PsPasswd.exe 的所在目錄，然後透過下面的指令來執行它：

```powershell
pspasswd {\\遠端機器的名稱或 IP} -u {擁有遠端管理者權限的帳號} -p {擁有遠端管理者權限帳號的密碼} {要被更改密碼的遠端帳號} {新密碼}
```

:::tip 小提示
1. 如果忽略遠端機器的名稱或 IP 的話，指令會在本機執行，也就是會修改到本機中指定帳號的密碼。
2. 如果沒輸入 -p 參數的話，屆時會跳出一個視窗讓我們輸入密碼。
3. 如果沒輸入新密碼的話，預設會使用 NULL 作為新的密碼，也就是不用密碼的意思。
:::

### 修改一台機器的密碼

```powershell
pspasswd \\192.168.173.101 -u ouch1978 -p ILoveOuch1978 Administrator MyNewPassword
```

### 修改多台機器的密碼

#### 用逗號分隔多台機器

如果需要改多台的話，可以用逗號分隔多台電腦的名稱或是 IP，例如：

```powershell
pspasswd \\192.168.173.101,\\192.168.173.102,\\192.168.173.103 -u ouch1978 -p ILoveOuch1978 Administrator MyNewPassword
```

#### 使用機器清單檔

我們也可以把所有的機器名稱或 IP 放到一個文字檔裡，再把它餵給 PsPasswd.exe，例如：

```plain title=C:\ServerList.txt
192.168.173.101
192.168.173.102
192.168.173.103
MyWindows11
```

然後執行：

```powershell
pspasswd @C:\ServerList.txt -u ouch1978 -p ILoveOuch1978 Administrator MyNewPassword
```

就可以一次針對 ServerList.txt 裡面包含的所有電腦進行修改。

:::tip 小提示
清單檔裡面的每筆機器名稱或 IP 前面都不用加上 `\\`。
:::

### 修改整個網域所有機器的密碼

如果需要一次針對整個網域中所有電腦進行修改的話，可以使用萬用字元來達成目的：

```powershell
pspasswd \\* -u ouch1978 -p ILoveOuch1978 Administrator MyNewPassword
```

:::danger 警告
修改整個網域中所有電腦的密碼是一件非常具有風險的行為，請務必重複確認自己知道自己在幹嘛再送出指令。
:::

以上。
