---
title: 解決 Python 在 VSCode 中執行時輸出的中文為亂碼的問題
description: "在使用 VSCode 撰寫 Python 抓取 Skype 對話群組的時候，發現當群組名稱有中文時會噴 UnicodeEncodeError: 'cp950' codec can't encode 這個錯誤訊息，就算在程式中調整了編碼，顯示出來的也還是亂碼..."
authors: ouch1978
tags: 
   - Windows
   - VSCode
   - Python
keywords: 
   - VSCode
   - Python
   - 亂碼
---

## 前言

在使用 VSCode 撰寫 Python 抓取 Skype 對話群組的時候，發現當群組名稱有中文時會噴 UnicodeEncodeError: 'cp950' codec can't encode 這個錯誤訊息。

就算在程式中調整了編碼，顯示出來的也還是亂碼...

<!--truncate-->

## 症狀

程式就以下短短一行：

```python title="UnicodeTest.py"
print('☠我只是想顯示中文啊!!☠')
```

一開始什麼都不作的執行結果如下：
![出現 cp950 無法編碼的錯誤](python-unicode-cp950-encode-error.png "出現 cp950 無法編碼的錯誤")

在網路上找到有人說可以在程式中指定編碼：

```python title="UnicodeTest.py"
print('☠我只是想顯示中文啊!!☠').encode("utf-8").decode("cp950", "ignore")
```

指定編碼之後的執行結果如下：
![看來還是亂碼啊](python-cannot-display-utf8-correctly.png "看來還是亂碼啊")

## 解法

開啟 Windows 11 的`設定` -> `時間與語言` -> `系統管理語言設定` -> `變更系統地區設定`。

![勾選"Beta:使用 Unicode UTF-8 提供全球語言支援"](enable-utf-8-worldwide-support.png "勾選'Beta:使用 Unicode UTF-8 提供全球語言支援'")

勾選之後要需要重新啟動，重新啟動之後到`設定` -> `系統` -> `系統內容` -> `環境變數`。

在系統變數中新增一組名稱為 `PYTHONIOENCODING` 的系統變數，值為 `UTF8`。

![新增 PYTHONIOENCODING 環境變數](add-python-io-encoding-environment-variable.png "新增 PYTHONIOENCODING 環境變數")

新增完畢之後，重新開啟 VSCode，再執行原來的程式，就可以正常的顯示中文了!!

![總算可以正常顯示中文了](display-utf8-correctly.png "總算可以正常顯示中文了")
