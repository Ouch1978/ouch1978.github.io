---
title: .NET Framework 專案出現找不到 SQLite.Interop.dll 的因應措施
description: "同一個有引用 System.Data.SQLite 的專案，在某些人的電腦會出現找不到 SQLite.Interop.dll 的問題，有的人不會。這篇就來分享如果電腦出現找不到 SQLite.Interop.dll 錯誤訊息的因應之道。"
authors: ouch1978
tags: 
   - .NET
   - NuGet
   - C#
keywords: 
   - SQLite.Interop
   - Visual Studio
   - NuGet
---

## 前言

之前有同事問我一個問題，說都是同一個 Repo，在某些人的電腦會出現找不到 SQLite.Interop.dll，但是其他人就正常。

而且印象中這種問題很久之前好像出現過，然後最近又出現了。

<!--truncate-->

## 原因

簡單的說，當我們透過 NuGet 安裝 System.Data.SQLite.Core 時，我們的 csproj 會自動被加上下面這幾行：

```xml title="xxx.csproj"
  <Import Project="..\packages\Stub.System.Data.SQLite.Core.NetFramework.1.0.115.5\build\net46\Stub.System.Data.SQLite.Core.NetFramework.targets" Condition="Exists('..\packages\Stub.System.Data.SQLite.Core.NetFramework.1.0.115.5\build\net46\Stub.System.Data.SQLite.Core.NetFramework.targets')" />
  <Target Name="EnsureNuGetPackageBuildImports" BeforeTargets="PrepareForBuild">
    <PropertyGroup>
      <ErrorText>This project references NuGet package(s) that are missing on this computer. Use NuGet Package Restore to download them.  For more information, see http://go.microsoft.com/fwlink/?LinkID=322105. The missing file is {0}.</ErrorText>
    </PropertyGroup>
    <Error Condition="!Exists('..\packages\Stub.System.Data.SQLite.Core.NetFramework.1.0.115.5\build\net46\Stub.System.Data.SQLite.Core.NetFramework.targets')" Text="$([System.String]::Format('$(ErrorText)', '..\packages\Stub.System.Data.SQLite.Core.NetFramework.1.0.115.5\build\net46\Stub.System.Data.SQLite.Core.NetFramework.targets'))" />
  </Target>
```

在正常的情況下，這幾行會在進行建置的時候，連結到 `..\packages\Stub.System.Data.SQLite.Core.NetFramework.1.0.115.5\build\net46\Stub.System.Data.SQLite.Core.NetFramework.targets` 檔。

MSBuild 會透過 Stub.System.Data.SQLite.Core.NetFramework.targets 裡面已經定義好的內容，自動把 x86\SQLite.Interop.dll 或是 x64\SQLite.Interop.dll 複製到 bin 資料夾下。

不過，如果我們的電腦環境或是 VS 沒有乖乖照著作，那兩個檔自然就不會出現了。

造成不如預期的可能性有很多，例如權限不足、檔案損毀、微軟的 Bug、MSBuild 安裝不完整... 等等，就先不一一深究了。

## 解法

### 解法一：將專案的 Platform target 改為 x86 或 x64，而不要使用 Any CPU

這個是比較暴力一點的解法，而且網路上還真的不少人建議用這個解法，不過我個人比較不建議用這個方法。

除非我們很確定我們的程式永遠只會在同一種架構上跑。

### 解法二：直接把 SQLite.Interop.dll 視為 Content 並且加到專案中

第二個方法就很直覺了，直接把 packages\Stub.System.Data.SQLite.Core.NetFramework.1.0.115.5\build\net46 下的 x86 和 x64 資料夾複製到我們的專案下，並且把檔案的類型設為 `Content`， CopyToOutputDirectory 屬性設為 `Always`。

也就直接把原本會自動完成的事改成手動解決，但是升版 SQLite 的時候就得要再手動作一次。

### 解法三：修改 csproj 檔，強制觸發 System.Data.SQLite.Core.targets 中定義的內容

這個方法是我個人比較建議的作法，在 csproj 檔中加入下面的內容：

```xml title="xxx.csproj"
<PropertyGroup> 
    <ContentSQLiteInteropFiles>true</ContentSQLiteInteropFiles>
    <CopySQLiteInteropFiles>false</CopySQLiteInteropFiles>
    <CleanSQLiteInteropFiles>false</CleanSQLiteInteropFiles>
    <CollectSQLiteInteropFiles>false</CollectSQLiteInteropFiles>
</PropertyGroup>
```

這樣 MSBuild 就會在進行專案建置的時候，自動進行解法二的動作。

:::tip
其實上面這幾個動作都被定義在 System.Data.SQLite.Core.targets 裡面，有興趣的話也不妨撥空看看裡面的內容喔。
:::

以上。
