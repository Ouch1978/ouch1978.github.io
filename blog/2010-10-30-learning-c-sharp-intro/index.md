---
title: 跟著 Ouch 寫程式 - 前言
description: "最近身邊有些朋友正在學習寫程式，算是新手中的新手，想想我也曾是過來人，就在這邊順便一下分享我小小的經驗，希望能對剛起步的朋友們有所幫助。 其實寫程式真的沒那麼難，真的!!"
authors: ouch1978
tags: 
    - C#
keywords:
    - C#
    - class
    - 類別
    - field
    - 欄位
    - property
    - 屬性
    - method
    - 方法
---

最近身邊有些朋友正在學習寫程式，算是新手中的新手，想想我也曾是過來人，就在這邊順便一下分享我小小的經驗，希望能對剛起步的朋友們有所幫助。
其實寫程式真的沒那麼難，真的!!

<!--truncate-->

尤其是近年來比較熱門的語言，像是 C#、VB.Net、JAVA、Action Script 3.0 之類，比較偏向是物件導向的程式語言，只要先學會一種，再學別的就相對的快了。

在接下來的章節裡，我會以 C#當主要的使用語言，用儘量簡單的方式，來幫助大家進入程式設計的世界。

> 俗話說：工欲善其事，必先利其器。

要寫 C#，首推的工具當然是 Visual Studio，目前最新版的 Visual Studio 是 2010 版，因為現在是學習階段，所以先下載免費的版本來用就行了。

微軟有免費的精簡版可以下載使用: [網址在此](http://www.microsoft.com/express/Downloads/#2010-Visual-Web-Developer "http://www.microsoft.com/express/Downloads/#2010-Visual-Web-Developer")

可以選擇下載[Visual C# 2010 Express](http://www.microsoft.com/express/Downloads/#2010-Visual-CS)(可撰寫 C#應用程式)，或是[Visual Web Developer 2010 Express](http://www.microsoft.com/express/Downloads/#2010-Visual-Web-Developer)(可以開發網站)

注意：無論如何，請下載英文版，因為以後的教學都會使用英文版，而且英文版的更新與支援速度，通常都比中文快，加上寫程式用的語言也是英文，所以，無論如何，請逼自己習慣看英文。

利用下載和安裝的空檔，這邊先跟各位講解一下一般物件導向程式的基本小常識。

通常在物件導向程式設計裡面，最常見，也最基本的元素，叫做 **`class`** (類別)
我們通常會用 class 來定義一件事物，就以我們常見的 RPG 線上遊戲的角色為例，我們要怎麼用類別來描述一個角色呢?

通常，一個角色，會有他基本的「屬性」，例如角色的名稱、等級、血量、攻擊力等等。還有他可以執行的「動作」，例如移動、攻擊、坐下、跳舞。

而在程式的世界裡面呢，屬性就會被區分成「**`Property`**」(屬性)和「**`Field`**」(欄位)，欄位通常和屬性會做為搭配，需要透過屬性來存取欄位，而動作就會以「**`Method`**」(方法)來實現。

將上述的角色寫成程式的話，會寫成這樣：

```csharp title="Character.cs"
public class Character
{
//建構子
public Character()
{
}

    //角色編號
    private int _id;
    public int Id
    {
        get
        {
            return _id;
        }
        set
        {
            _id = value;
        }
    }

    //角色名稱
    private string _name;
    public string Name
    {
        get
        {
            return _name;
        }
        set
        {
            _name = value;
        }
    }

    //等級
    private int _level;
    public int Level
    {
        get
        {
            return _level;
        }
        set
        {
            _level = value;
        }
    }

    //血量
    //只允許外部讀取，不允許寫入
    private int _healthPoint;
    public int HealthPoint
    {
        get
        {
            return _healthPoint;
        }
    }

    //攻擊力 只允許外部讀取，不允許寫入
    private double _attackPower;
    public double AttactkPower
    {
        get
        {
            return _attackPower;
        }
    }

    //防禦力 只允許外部讀取，不允許寫入
    private double _defensePower;
    public double DefensePower
    {
        get
        {
            return _defensePower;
        }
    }

    //跳舞
    public void Dance()
    {
        //Do dance
    }

    //坐下
    public void Sit()
    {
        //Do sit
    }

    //攻擊
    public void Attack()
    {
        //Do attack
    }

}
```

嗯，看起來有點複雜對吧?其實有比較簡單一點的寫法，不過這個是比較傳統的寫法，為了幫助大家進入狀況，也為了方便講解，所以先用這種寫法。

首先要先有幾個小觀念：

- 在程式語言中，去做出「定義一個值」這個動作，我們稱為「**`宣告`**」；而在 C#中，一般宣告的寫法會是「**`修飾詞`**」 「**`型別`**」 「**`名稱`**」，中間以空白隔開。(關於 C#的型別可以參考[內建型別列表](http://msdn.microsoft.com/zh-tw/library/ya5y69ds.aspx)和[型別、變數和值](http://msdn.microsoft.com/zh-tw/library/ms173104.aspx))

- 在程式裡面常常會看到 `public` 和 `private` 這兩個修飾詞，這兩個字可以直接從字面上來看，就可以猜出他的差別：

  - `public`指的是允許公開給外部看得到，而且用得到的東西。
  - `private`指的則是只有在定義該物件的裡才看得到、能使用的東西，例如我們在上面的例子裡有不少地方都加了 `private` 關鍵字，那就只有在這個 class 裡面才看得到、能存取這些東西。
    <br/><br/>

- 程式裡面的段落和範圍的定義，通常會使用大括弧 **`{`** 和 **`}`** 來界定。

- 在程式裡面要寫註解的話有兩種寫法，一種是在註解前面加上 **`//`** (兩個斜線)，或是以 **`/*`** (斜線加星號)和 **`*/`** (星號加斜線)把註解的範圍標示出來，兩者的差別為，若註解的內容為多行，則每行的前面都要加上 `//` ，若使用 `/*` 和 `*/` ，則只需放在頭和尾，內容有幾行都可以。

- 在許多程式語言裡，大小寫是有區隔的，例如 name 和 Name 會被視為是不一樣的東西。

- 每種程式語言有它不同的關鍵字，要做命名的時候要避免使用到關鍵字(關於 C#的關鍵字可以參考[C#關鍵字列表](http://msdn.microsoft.com/zh-tw/library/x53a06bb.aspx))

Ok,有了上面的小觀念之後，上面的程式碼看起來應該就不再那麼複雜了，以下來做個簡單的講解：

- 前面有講過，我們通常會用 class 來定義一件事物，所以，程式的第一行，就是我們利用 class 這個關鍵字去定義出一個叫做 Character(角色)的 class，並且把它設為是公開的，而第二行的大括弧和第 98 行的大括弧是成對的，裡面的內容都會被視為 Character 這個 class 的成員。

- 第 4 行的建構子，是用來提供被部創建該 class 實體的入口，我們可以想像成說，class 被定義出來之後，只是一個軀殼，必需透過呼叫它的建構子，幫它注入靈魂，創造它的實體；通常每個 class 至少會有一個建構子，如果你沒寫的話，會使用預設的建構子，而建構子的名稱，必需和 class 名稱相同。

- 第 9 到 79 行就是我們提到的「**`Property`**」和「**`Field`**」的組合，我們拿角色名稱來做說明，你會看到，有個 private string \_name，這個就是所謂的屬性，通常屬性會被定義為 private，必需透過下面的 public string Name 來存取它，而在 Property 裡面則定義了該 Property 是否可以供存取，有 get 的表示可以供讀取，set 則表示可以提供寫入，所以，如果該屬性是唯讀的，我們就可以透過 Property 的定義來達成，例如「血量」這個屬性。

- 最後，第 82 到 97 行，則是定義了 Character 這個類別所提供的「方法」，通常凡是要和使用者進行互動，或是比較大量運算的動作，我們都會透過定義「方法」來被外部呼叫，為了不要搞得太複雜，範例的三個方法中都沒做任何的事。

以上就是 C#語言很基本很基本的結構，既然是前言，我想就到這邊為止，我們下次見!!
