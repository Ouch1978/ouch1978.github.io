---
title: 透過 Python 取得 Skype 群組的 ID
description: "最近在整理部門 Skype 機器人的程式，發現原來透過程式發送訊息給某個群組時只能透過它的 ID 來發送。前人都是透過 Skype Web 搭配開發者工具來擷取 Group ID，我就好奇，難道沒有更聰明一點的方法嗎?"
authors: ouch1978
tags: 
   - Windows
   - Skype
   - Python
keywords: 
   - SkPy
   - SkypeChats
   - VSCode
---

## 前言

最近在整理部門 Skype 機器人的程式，發現原來透過程式發送訊息給某個群組時只能透過它的 ID 來發送。

前人都是透過 Skype Web 搭配開發者工具來擷取 Group ID，我就好奇，難道沒有更聰明一點的方法嗎?

<!--truncate-->

## 透過 Python 取得所有群組名稱與 ID

這邊可以直接透過 VSCode 進行操作，先建立一個資料夾之後，以 VSCode 開啟。

接著透過終端機(開啟終端機的熱鍵為 <kbd>Ctrl</kbd> + <kbd>`</kbd>)安裝 SkPy 這個套件：

```python
pip3 install SkPy
```

接著建立一個新檔案如下：

```python title="SkypeChats.py"
# 引用 skpy 套件裡的 Skype 和 SkypeChats
from skpy import Skype, SkypeChats

# 建立 Skype 連線
sk = Skype("Skype 帳號", "Skype 密碼")

# 建立對話物件
skc = SkypeChats(sk)

# 取得最近對話記錄(預設一批只會拿出 10 筆)
chats = skc.recent()

# 如果對話記錄筆數 > 0 就執行
while len(chats) > 0:

    for chat in chats.values():

        # 取得群組名稱
        group_name = getattr(chat, 'topic', 'no attr')

        # 取得群組 ID
        group_id = getattr(chat, 'id', 'no id')

        if group_name != 'no attr':
            
            # 如果抓得到群組名稱的話就印出名稱和 ID
            print('Group Name:', group_name, ', Group Id:', group_id)

    # 取得下一批對話記錄
    chats = skc.recent()
```

直接給它執行下去，就會把帳號有加入的所有群組名稱和 ID 都列出來囉!!

以上。
