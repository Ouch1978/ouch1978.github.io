---
title: 一次從遠端新增使用者帳號到多台 Windows Server 的本機群組
description: "在管理 Widows Server 的時候，偶爾會因為團隊成員異動或是其它因素，得要將新的帳號加入 Windows Server 的本機群組。當 Server 一多起來，改起來就很花時間。這邊就來分享一個蠻有效率的方式，可以一次把帳號加到多台 Windows Server 裡。"
authors: ouch1978
tags: 
   - Windows
   - 小技巧
   - PsTools
keywords: 
   - Windows
   - Add user to local administrator group
   - PsTools
   - PsExec
---

## 前言

在管理 Widows Server 的時候，偶爾會因為團隊成員異動或是其它因素，得要將新的帳號加入 Windows Server 的本機群組。

當 Server 一多起來，改起來就很花時間。

這邊就來分享一個蠻有效率的方式，可以一次把帳號加到多台 Windows Server 的本機群組裡。

<!--truncate-->

## 取得 PsExec.exe

這次我們要使用的工具是 PsExec，和之前介紹過的 [PsPasswd](../2022-09-14-change-windows-local-admin-password-remotely/index.md "PsPasswd") 一樣都是 PsTools 裡的一個工具。

PsTools 是由微軟 Azure CTO - Mark Russinovich 所開發的一系列小工具的集合。

之所以會取名叫 PsTools，是因為它的第一個小工具 PsList(用來顯示目前執行中的程序清單) 致敬了標準 UNIX 作業系統裡顯示目前執行中的程序清單的指令就叫 `PS`，而他把所有小工具都加上 Ps 這個前綴詞來讓它們看起來是一個同捆包的概念，整個套裝就叫 PsTools。

說完故事，PsTools 的下載點在 [這裡](https://download.sysinternals.com/files/PSTools.zip "Download PsTools Suite")。

下載並且解壓縮之後，你應該就會看到裡面包含了今天的主角 - `PsExec.exe`。

## 所以我該怎麼下指令呢?

這邊以新增使用者到遠端 Server 的本機系統管理員群組為例。

我們可以透過命令提示字元切換到 PsExec.exe 的所在目錄，然後透過下面的指令來執行它：

```powershell
psexec {\\遠端機器的名稱或 IP} -u {擁有遠端管理者權限的帳號} -p {擁有遠端管理者權限帳號的密碼} net localgroup {群組名稱} "{要新增的帳號}" /add
```

:::tip 小提示
1. 如果沒輸入 -p 參數的話，會跳出一個視窗讓我們輸入密碼。
2. 如果目前登入的帳號擁有遠端系統管理者權限的話可以不用輸入 -u 和 -p 參數。
3. PsExec 在執行的時候預設會跳出終端使用者授權視窗，如果想直接接受的話，可以多下一個 -accepteula 參數略過。
:::

### 將使用者加入遠端系統管理員群組

假設我目前本機登入的帳號已經有遠端 Server 的系統管理員權限，所以可以省略 -u 和 -p 兩個參數，那我就可以這樣下指令：

```powershell
psexec \\192.168.173.101 net localgroup administrators "my-domain\ouch1978-test" /add
```

### 將使用者加入多台機器的系統管理員群組

#### 用逗號分隔多台機器

如果需要改多台的話，可以用逗號分隔多台電腦的名稱或是 IP，例如：

```powershell
psexec \\192.168.173.101,\\192.168.173.102,\\192.168.173.103 net localgroup administrators "my-domain\ouch1978-test" /add
```

#### 使用機器清單檔

我們也可以把所有的機器名稱或 IP 放到一個文字檔裡，再把它餵給 PsExec.exe，例如：

```plain title=C:\ServerList.txt
192.168.173.101
192.168.173.102
192.168.173.103
MyWindows11
```

然後執行：

```powershell
psexec @C:\ServerList.txt net localgroup administrators "my-domain\ouch1978-test" /add
```

就可以一次把 my-domain\ouch1978-test 這個帳號加到 ServerList.txt 裡面包含的所有機器的系統管理員群組中。

:::tip 小提示
清單檔裡面的每筆機器名稱或 IP 前面都不用加上 `\\`。
:::

### 將帳號加到整個網域裡所有電腦的系統管理員群組

如果需要一次把帳號加到整個網域中所有電腦的系統管理員群組的話，可以使用萬用字元來達成目的：

```powershell
psexec \\* net localgroup administrators "my-domain\ouch1978-test" /add
```

## 再來說說 PsExec 的功能

其實 PsExec 並不單單只是能讓我們拿來加帳號到遠端電腦的使用者群組而已。

它真正的功能是讓我們執行遠端電腦的程式。

舉例來說，我們可以透過它來幫遠端的電腦設定系統環境變數：

```powershell
psexec \\* setx %PATH%;%ProgramFiles%
```

上面這個指令就可以讓我們幫整個網域的所有電腦在系統環境變數的預設路徑清單裡加上系統預設的 Program Files 資料夾。

當然，複製檔案、刪除檔案之類的指令也都是可以輕鬆辦到的。

只要你知道指令怎麼下，就都難不倒它喔!!

:::danger 警告
還是要再次叮嚀，一次對整個網域的電腦進行操作有好有壞，使用前請務必三思再按下 <kbd>Enter</kbd>。
:::

## 參考資料

- [PsExec v2.40](https://learn.microsoft.com/zh-tw/sysinternals/downloads/psexec)

- [PsExec Explainer by Mark Russinovich](https://www.itprotoday.com/windows-server/psexec-explainer-mark-russinovich "PsExec Explainer by Mark Russinovich")

- [Add a user to the local Administrators group on a remote computer](https://4sysops.com/archives/add-a-user-to-the-local-administrators-group-on-a-remote-computer/#psexec-and-net-localgroup)
