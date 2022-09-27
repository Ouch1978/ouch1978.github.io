---
title: C# 命名方針
description: "寫程式其實也是有規矩在的，尤其是要團體協同開發的時候，如果每個人使用的規則都不一樣，那要求每個人看得懂別人的程式碼，真的是會要了人的命。像是命名空間、類別、變數、檔案命名、控制項命名，其實都要去訂下命名的規則，對團隊來說才會容易溝通。"
authors: ouch1978
tags: 
  - C#
keywords: 
  - C# 
  - naming convention
  - 命名方針
---

寫程式其實也是有規矩在的，尤其是要團體協同開發的時候，如果每個人使用的規則都不一樣，那要求每個人看得懂別人的程式碼，真的是會要了人的命。
像是命名空間、類別、變數、檔案命名、控制項命名，其實都要去訂下命名的規則，對團隊來說才會容易溝通。

<!--truncate-->

當然，規則很多，我在這邊只先列出和比較基本的命名相關的規則；而關於完整的 C#的程式撰寫規範建議，則可以參考[MSDN 上的設計方針](http://msdn.microsoft.com/zh-tw/library/ms229042.aspx)，再配合 FXCop 做程式碼撰寫後的規範驗證。

以下為 C#命名的**`一般原則`**：

- 使用**`Pascal`**( 如 : "VirtualDesign" )及**'Camel'**( 如 : "virtualDesign" )兩種命名方式，並建議避免使用分隔符號( 例如底線 "\_" 或連字號 "-" )來做命名 - [CA1702](<http://msdn.microsoft.com/library/bb264474(VS.100).aspx>)。
- `可讀性優先於簡潔性`( CanScrollHorizontally 優於 ScrollableX )，並參考常用的命名( HorizontalAlignment 優於 AlignmentHorizontal )。
- `避免使用匈牙利命名法`( 如 : "strName" )，並正確的使用前置及後置詞命名 - [CA1720](<http://msdn.microsoft.com/library/bb531486(VS.100).aspx>)、[CA1710](http://msdn.microsoft.com/zh-tw/library/ms182244.aspx)。
- 正確的使用縮寫，`縮寫字為兩個字母以內，則兩字皆為大寫`( 如 : "IO" )，`三個字以上，則使用Pascal命名規則`( 如 : "Xml" )，且縮寫字不得高於五個字母 - [CA1709](<http://msdn.microsoft.com/library/ms182240(VS.100).aspx>)。

## C# 物件命名原則

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

| 種類                                   | 命名規則                            | 範例                                                    | 注意事項                                   |
| -------------------------------------- | ----------------------------------- | ------------------------------------------------------- | ------------------------------------------ | ----------------- | ------------------- |
| Project File                           | <Highlight color="#9bbb59">Pascal</Highlight> | Math.Algorithm.csproj                                   |
| Source File                            | <Highlight color="#9bbb59">Pascal</Highlight> | RuleSetup.cs                                            | 保持檔案名稱與 Class 名稱一致              |
| Resource or Embedded File              | <Highlight color="#9bbb59">Pascal</Highlight> | TestPicture.jpg                                         |
| Namespace                              | <Highlight color="#9bbb59">Pascal</Highlight> | MyCompany.Wpf.Controls                                  | 儘量使用"公司名稱.專案名稱                 | 技術名稱.功能分類 | 子類別"做為命名準則 |
| Class or Struct                        | <Highlight color="#9bbb59">Pascal</Highlight> | CustomAttribute                                         | 使用名詞命名，並使用基底類別名稱做為後置詞 |
| Interface                              | <Highlight color="#9bbb59">Pascal</Highlight> | ICustomer                                               | 使用前置詞"I"                              |
| Generic Class & Generic Parameter Type | <Highlight color="#9bbb59">Pascal</Highlight> | TKey,TValue                                             | 使用前置詞"T"或"K"                         |
| Method                                 | <Highlight color="#9bbb59">Pascal</Highlight> | ValidateUser                                            | 使用動詞作為開頭                           |
| Property                               | <Highlight color="#9bbb59">Pascal</Highlight> | Name                                                    | 避免使用"Get"或"Set"當前置詞               |
| Field (Public, Protected, or Internal) | <Highlight color="#9bbb59">Pascal</Highlight> | Name                                                    |
| Field (Private)                        | <Highlight color="#809ec2">Camel</Highlight>  | \_name                                                  | 字首加上底線做為區隔                       |
| Constant or Static Field               | <Highlight color="#9bbb59">Pascal</Highlight> | Name                                                    | 與 Field 處理方式相同                      |
| Enum                                   | <Highlight color="#9bbb59">Pascal</Highlight> | EncodeType                                              | 裡面包含選項也是使用 Pascal 命名法         |
| Delegate or Event                      | <Highlight color="#9bbb59">Pascal</Highlight> | public event EventHandler LoadPlugin                    | 全都使用 Pascal 命名規則                   |
| Local Variable (inline)                | <Highlight color="#809ec2">Camel</Highlight>  | string name                                             | 避免使用單一字元和列舉的名稱               |
| Parameter                              | <Highlight color="#809ec2">Camel</Highlight>  | public void Execute(string commandText, int iterations) |

其他注意事項：

- 不要在列舉項目中使用"Reserved"做為命名 - [CA1700](http://msdn.microsoft.com/zh-tw/library/ms182236.aspx)。
- 不要使用型別名稱做為列舉值的前置字元 - [CA1712](http://msdn.microsoft.com/zh-tw/library/ms182237.aspx)。
