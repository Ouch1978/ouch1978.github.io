"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[1432],{52016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var a=n(74848),r=n(28453);const i={title:"\u8ab0\u8aaa\u9b5a\u8207\u718a\u638c\u4e0d\u53ef\u517c\u5f97? \u8b93\u4f60\u7684\u5b89\u5353\u6a21\u64ec\u5668\u8207 Hyper-V \u53ef\u4ee5\u548c\u5e73\u5171\u8655",description:"\u6709\u5728\u4f7f\u7528 Visual Studio 2017 \u548c Xamarin \u9032\u884c\u958b\u767c\u7684\u670b\u53cb\u5011\u53ef\u80fd\u6703\u8ddf\u6211\u4e00\u6a23\u9047\u904e\u540c\u6a23\u7684\u554f\u984c\uff1a\u5982\u679c\u4f7f\u7528 Visual Studio 2017 \u88e1\u9762\u5167\u5efa\u7684\u5b89\u5353\u6a21\u64ec\u5668\uff0c\u5c31\u5f97\u628a Hyper-V \u7d66\u95dc\u6389\uff0c\u4e0d\u7136\u5c31\u7121\u6cd5\u555f\u7528 Intel\xae Hardware Accelerated Execution Manager \u4f86\u66ff\u5b89\u5353\u6a21\u64ec\u5668\u52a0\u901f\u3002 \u5728\u7db2\u8def\u4e0a\u722c\u4e86\u4e00\u4e9b\u6587\u7ae0\u4e4b\u5f8c\uff0c\u6b78\u7d0d\u51fa\u4e86\u4e0b\u9762\u5169\u7a2e\u89e3\u6cd5\u3002",authors:"ouch1978",tags:["Visual Studio","Xamarin"],keywords:["Intel HAXM","\u6a21\u64ec\u5668","Hyper-V","\u5171\u5b58"]},o=void 0,u={permalink:"/blog/2018/01/22/co-existing-android-emulator-and-hyper-v",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2018-01-22-co-existing-android-emulator-and-hyper-v/index.md",source:"@site/blog/2018-01-22-co-existing-android-emulator-and-hyper-v/index.md",title:"\u8ab0\u8aaa\u9b5a\u8207\u718a\u638c\u4e0d\u53ef\u517c\u5f97? \u8b93\u4f60\u7684\u5b89\u5353\u6a21\u64ec\u5668\u8207 Hyper-V \u53ef\u4ee5\u548c\u5e73\u5171\u8655",description:"\u6709\u5728\u4f7f\u7528 Visual Studio 2017 \u548c Xamarin \u9032\u884c\u958b\u767c\u7684\u670b\u53cb\u5011\u53ef\u80fd\u6703\u8ddf\u6211\u4e00\u6a23\u9047\u904e\u540c\u6a23\u7684\u554f\u984c\uff1a\u5982\u679c\u4f7f\u7528 Visual Studio 2017 \u88e1\u9762\u5167\u5efa\u7684\u5b89\u5353\u6a21\u64ec\u5668\uff0c\u5c31\u5f97\u628a Hyper-V \u7d66\u95dc\u6389\uff0c\u4e0d\u7136\u5c31\u7121\u6cd5\u555f\u7528 Intel\xae Hardware Accelerated Execution Manager \u4f86\u66ff\u5b89\u5353\u6a21\u64ec\u5668\u52a0\u901f\u3002 \u5728\u7db2\u8def\u4e0a\u722c\u4e86\u4e00\u4e9b\u6587\u7ae0\u4e4b\u5f8c\uff0c\u6b78\u7d0d\u51fa\u4e86\u4e0b\u9762\u5169\u7a2e\u89e3\u6cd5\u3002",date:"2018-01-22T00:00:00.000Z",tags:[{inline:!0,label:"Visual Studio",permalink:"/blog/tags/visual-studio"},{inline:!0,label:"Xamarin",permalink:"/blog/tags/xamarin"}],readingTime:5.45,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978",page:null}],frontMatter:{title:"\u8ab0\u8aaa\u9b5a\u8207\u718a\u638c\u4e0d\u53ef\u517c\u5f97? \u8b93\u4f60\u7684\u5b89\u5353\u6a21\u64ec\u5668\u8207 Hyper-V \u53ef\u4ee5\u548c\u5e73\u5171\u8655",description:"\u6709\u5728\u4f7f\u7528 Visual Studio 2017 \u548c Xamarin \u9032\u884c\u958b\u767c\u7684\u670b\u53cb\u5011\u53ef\u80fd\u6703\u8ddf\u6211\u4e00\u6a23\u9047\u904e\u540c\u6a23\u7684\u554f\u984c\uff1a\u5982\u679c\u4f7f\u7528 Visual Studio 2017 \u88e1\u9762\u5167\u5efa\u7684\u5b89\u5353\u6a21\u64ec\u5668\uff0c\u5c31\u5f97\u628a Hyper-V \u7d66\u95dc\u6389\uff0c\u4e0d\u7136\u5c31\u7121\u6cd5\u555f\u7528 Intel\xae Hardware Accelerated Execution Manager \u4f86\u66ff\u5b89\u5353\u6a21\u64ec\u5668\u52a0\u901f\u3002 \u5728\u7db2\u8def\u4e0a\u722c\u4e86\u4e00\u4e9b\u6587\u7ae0\u4e4b\u5f8c\uff0c\u6b78\u7d0d\u51fa\u4e86\u4e0b\u9762\u5169\u7a2e\u89e3\u6cd5\u3002",authors:"ouch1978",tags:["Visual Studio","Xamarin"],keywords:["Intel HAXM","\u6a21\u64ec\u5668","Hyper-V","\u5171\u5b58"]},unlisted:!1,prevItem:{title:"\u4e94\u5206\u9418\u770b\u5b8c C# 7.2",permalink:"/blog/2018/01/31/understand-csharp-7.2-in-5-minutes"},nextItem:{title:"\u900f\u904e Xamarin.Forms \u4f86\u73a9\u73a9\u50b3\u8aaa\u4e2d\u7684 XAML Standard (preview) \u5427!!",permalink:"/blog/2018/01/08/xaml-standard-preview-in-xamarin-forms"}},s={authorsImageUrls:[void 0]},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}];function c(e){const t={h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,a.jsx)(t.p,{children:"\u6709\u5728\u4f7f\u7528 Visual Studio 2017 \u548c Xamarin \u9032\u884c\u958b\u767c\u7684\u670b\u53cb\u5011\u53ef\u80fd\u6703\u8ddf\u6211\u4e00\u6a23\u9047\u904e\u540c\u6a23\u7684\u554f\u984c\uff1a\u5982\u679c\u4f7f\u7528 Visual Studio 2017 \u88e1\u9762\u5167\u5efa\u7684\u5b89\u5353\u6a21\u64ec\u5668\uff0c\u5c31\u5f97\u628a Hyper-V \u7d66\u95dc\u6389\uff0c\u4e0d\u7136\u5c31\u7121\u6cd5\u555f\u7528 Intel\xae Hardware Accelerated Execution Manager \u4f86\u66ff\u5b89\u5353\u6a21\u64ec\u5668\u52a0\u901f\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u7562\u7adf\uff0c\u8981\u652f\u63f4 Intel\xae Hardware Accelerated Execution Manager \uff0c\u624d\u80fd\u555f\u7528 Visual Studio 2017 \u4e2d\u5167\u5efa\u6a21\u64ec\u5668\u5de5\u5177\u88e1\u7684 Atom x86 \u67b6\u69cb\u5b89\u5353\u865b\u64ec\u6a5f\uff0c\u4ee5\u9054\u5230\u5ab2\u7f8e\u771f\u6a5f\u7684\u6548\u80fd(\u5b98\u65b9\u8aaa\u6cd5\u662f\u6548\u80fd\u6703\u5dee\u4e0a\u5341\u500d\uff0c\u4e0d\u4fe1\u90aa\u7684\u670b\u53cb\u4e5f\u53ef\u4ee5\u8a66\u8457\u958b\u555f ARM \u67b6\u69cb\u7684\u6a21\u64ec\u5668\u4f86\u6bd4\u8f03\u770b\u770b\uff0c\u6548\u80fd\u771f\u7684\u6703\u8b93\u4eba\u5f88\u60f3\u54ed)\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u4f46\u662f\u8eab\u70ba\u4e00\u500b\u5de5\u7a0b\u5e2b\uff0c\u900f\u904e VM \u4f86\u67b6\u8a2d\u5be6\u9a57\u74b0\u5883\u61c9\u8a72\u662f\u5bb6\u5e38\u4fbf\u98ef\u7684\u4e8b\u3002\u5f9e\u5fae\u8edf\u5728 Windows 8 \u5167\u5efa\u4e86 Hyper-V \u4e4b\u5f8c\uff0c\u5b83\u5c31\u4e00\u76f4\u662f\u6211\u67b6\u8a2d VM \u7684\u9996\u9078\u5de5\u5177\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u6240\u4ee5\u7576\u770b\u5230 Hyper-V \u548c Intel\xae Hardware Accelerated Execution Manager \u7121\u6cd5\u5171\u5b58\u7684\u8a0a\u606f\u51fa\u73fe\uff0c\u6211\u5c31\u4e00\u76f4\u5728\u60f3\uff1a\u300c\u5230\u5e95\u6709\u4ec0\u9ebc\u5176\u5b83\u7684\u65b9\u5f0f\u80fd\u8b93\u6211\u4e0d\u7528\u6bcf\u6b21\u90fd\u5f97\u8981\u70ba\u4e86\u958b\u555f\u5b89\u5353\u6a21\u64ec\u5668\u5c31\u5f97\u5148\u624b\u52d5\u95dc\u9589 Hypervisor \u529f\u80fd\uff1b\u800c\u5728\u8981\u4f7f\u7528\u865b\u64ec\u6a5f\u5668\u7684\u6642\u5019\u53c8\u5f97\u5148\u624b\u52d5\u958b\u555f Hypervisor?\u300d\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u5728\u7db2\u8def\u4e0a\u722c\u4e86\u4e00\u4e9b\u6587\u7ae0\u4e4b\u5f8c\uff0c\u6b78\u7d0d\u51fa\u4e86\u4e0b\u9762\u5169\u7a2e\u89e3\u6cd5\u3002"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>u});var a=n(96540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);