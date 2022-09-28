---
title: 排除執行 yarn 時出現 yarn.ps1 cannot be loaded 的問題
description: "在 Windows 裡要透過 yarn 來完成某些動作(例如 `yarn install`)的時候可能會出現這個錯誤：yarn : File C:\\Program Files\\nodejs\\yarn.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1 + yarn + ~~~~ + CategoryInfo : SecurityError: (:) [], PSSecurityException + FullyQualifiedErrorId : UnauthorizedAccess
這篇就來分享一下這個問題的解法。"
author: ouch1978
tags: 
   - Docusaurus
   - Trouble Shooting
keywords: 
   - Docusaurus
   - yarn
   - UnauthorizedAccess
   - yarn.ps1
   - node.js
last_update:
  date: 2022/08/26 GMT+8
  author: Ouch Liu
---

## 症狀

在 Windows 裡要透過 yarn 來完成某些動作(例如 `yarn install`)的時候可能會出現這個錯誤：

> yarn : File C:\Program Files\nodejs\yarn.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.<br/>
> At line:1 char:1<br/>
> \+ yarn install<br/>
> \+ \~~~~<br/>

      &emsp;\+ CategoryInfo : SecurityError: (:) [], PSSecurityException<br/>
      &emsp;\+ FullyQualifiedErrorId : UnauthorizedAccess

從訊息上來看，是因為從遠端下載的 PowerShell Script 沒被授權執行造成的，所以只要允許它執行就行了。

這篇就來分享一下這個問題的解法。

## 排除方法

其實從錯誤訊息裡面提供的[連結](https:/go.microsoft.com/fwlink/?LinkID=135170 "About Execution Policies")就可以找到解法。

解法很簡單，只要以系統管理員身份開啟 PowerShell，然後輸入下面的指令：

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

再執行 yarn 就行了。

以上。
