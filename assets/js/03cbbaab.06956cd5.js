"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[7411],{21935:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var o=n(85893),i=n(11151);const s={title:"\u4e94\u5206\u9418\u770b\u5b8c C# 7.2",description:"\u5fae\u8edf\u5728 2017 \u5e74 12 \u6708\u767c\u4f48\u4e86 Visual Studio 2017 \u7684 15.5 \u7248\uff0c\u88e1\u9762\u6709\u4e00\u9805\u5f88\u91cd\u8981\u7684\u529f\u80fd\u5c31\u662f C# \u7de8\u8b6f\u5668\u52a0\u5165\u4e86\u5c0d C# 7.2 \u7684\u652f\u63f4\u3002 \u6240\u4ee5\uff0c\u5c31\u8b93\u6211\u5011\u4f86\u5feb\u901f\u7684\u4e86\u89e3\u4e00\u4e0b C# 7.2 \u70ba\u6211\u5011\u5e36\u4f86\u4e86\u54ea\u4e9b\u5be6\u7528\u7684\u65b0\u529f\u80fd\u5427!!~",authors:"ouch1978",tags:["C#"],keywords:["\u61f6\u4eba\u5305","C# 7.2"]},r=void 0,u={permalink:"/blog/2018/01/31/understand-csharp-7.2-in-5-minutes",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2018-01-31-understand-csharp-7.2-in-5-minutes/index.md",source:"@site/blog/2018-01-31-understand-csharp-7.2-in-5-minutes/index.md",title:"\u4e94\u5206\u9418\u770b\u5b8c C# 7.2",description:"\u5fae\u8edf\u5728 2017 \u5e74 12 \u6708\u767c\u4f48\u4e86 Visual Studio 2017 \u7684 15.5 \u7248\uff0c\u88e1\u9762\u6709\u4e00\u9805\u5f88\u91cd\u8981\u7684\u529f\u80fd\u5c31\u662f C# \u7de8\u8b6f\u5668\u52a0\u5165\u4e86\u5c0d C# 7.2 \u7684\u652f\u63f4\u3002 \u6240\u4ee5\uff0c\u5c31\u8b93\u6211\u5011\u4f86\u5feb\u901f\u7684\u4e86\u89e3\u4e00\u4e0b C# 7.2 \u70ba\u6211\u5011\u5e36\u4f86\u4e86\u54ea\u4e9b\u5be6\u7528\u7684\u65b0\u529f\u80fd\u5427!!~",date:"2018-01-31T00:00:00.000Z",formattedDate:"2018\u5e741\u670831\u65e5",tags:[{label:"C#",permalink:"/blog/tags/c"}],readingTime:7.31,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u4e94\u5206\u9418\u770b\u5b8c C# 7.2",description:"\u5fae\u8edf\u5728 2017 \u5e74 12 \u6708\u767c\u4f48\u4e86 Visual Studio 2017 \u7684 15.5 \u7248\uff0c\u88e1\u9762\u6709\u4e00\u9805\u5f88\u91cd\u8981\u7684\u529f\u80fd\u5c31\u662f C# \u7de8\u8b6f\u5668\u52a0\u5165\u4e86\u5c0d C# 7.2 \u7684\u652f\u63f4\u3002 \u6240\u4ee5\uff0c\u5c31\u8b93\u6211\u5011\u4f86\u5feb\u901f\u7684\u4e86\u89e3\u4e00\u4e0b C# 7.2 \u70ba\u6211\u5011\u5e36\u4f86\u4e86\u54ea\u4e9b\u5be6\u7528\u7684\u65b0\u529f\u80fd\u5427!!~",authors:"ouch1978",tags:["C#"],keywords:["\u61f6\u4eba\u5305","C# 7.2"]},unlisted:!1,prevItem:{title:"\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u5011\u4e0d\u53ef\u4e0d\u77e5\u9053\u7684 Windows 10 \u8a2d\u5b9a\u5c0f\u6487\u6b65",permalink:"/blog/2018/03/16/windows-10-configuration-tips-for-developers"},nextItem:{title:"\u8ab0\u8aaa\u9b5a\u8207\u718a\u638c\u4e0d\u53ef\u517c\u5f97? \u8b93\u4f60\u7684\u5b89\u5353\u6a21\u64ec\u5668\u8207 Hyper-V \u53ef\u4ee5\u548c\u5e73\u5171\u8655",permalink:"/blog/2018/01/22/co-existing-android-emulator-and-hyper-v"}},a={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}];function l(t){const e={blockquote:"blockquote",h2:"h2",p:"p",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,o.jsx)(e.p,{children:"\u5fae\u8edf\u5728 2017 \u5e74 12 \u6708\u767c\u4f48\u4e86 Visual Studio 2017 \u7684 15.5 \u7248\uff0c\u88e1\u9762\u6709\u4e00\u9805\u5f88\u91cd\u8981\u7684\u529f\u80fd\u5c31\u662f C# \u7de8\u8b6f\u5668\u52a0\u5165\u4e86\u5c0d C# 7.2 \u7684\u652f\u63f4\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u6240\u4ee5\uff0c\u5c31\u8b93\u6211\u5011\u4f86\u5feb\u901f\u7684\u4e86\u89e3\u4e00\u4e0b C# 7.2 \u70ba\u6211\u5011\u5e36\u4f86\u4e86\u54ea\u4e9b\u5be6\u7528\u7684\u65b0\u529f\u80fd\u5427!!~"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"P.S. \u5f8c\u9762\u7684\u5ee2\u8a71\u5f88\u591a\uff0c\u5982\u679c\u60f3\u8981\u5728\u4e94\u5206\u9418\u88e1\u9762\u770b\u5b8c\u6240\u6709\u65b0\u529f\u80fd\u7684\u8a71\uff0c\u4e0d\u59a8\u76f4\u63a5\u770b\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\u7684\u90e8\u4efd\u5c31\u597d\u3002"}),"\n"]})]})}function d(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>u,a:()=>r});var o=n(67294);const i={},s=o.createContext(i);function r(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function u(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);