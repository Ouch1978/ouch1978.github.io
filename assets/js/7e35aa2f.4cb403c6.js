"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[9309],{82427:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var t=e(74848),o=e(28453);const d={title:"\u900f\u904e Visual Studio \u5c0d Xamarin Android \u5c08\u6848\u9032\u884c\u9664\u932f",description:"\u5f88\u958b\u5fc3\u7684\u53ef\u4ee5\u6210\u529f\u5efa\u7f6e\u51faAndroid\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5f8c...\u54a6!? \u600e\u9ebc\u4e0d\u80fdDebug!!??Visual Studio\u628a\u61c9\u7528\u7a0b\u5f0f\u4f48\u7f72\u5230\u6a21\u64ec\u5668\u4e4b\u5f8c\u5c31\u4e0d\u7ba1\u4e86??\u54ea\u62db\u554a!? \u76f8\u4fe1\u5927\u5bb6\u61c9\u8a72\u90fd\u77e5\u9053Visual Studio 2015\u88e1\u9762\u5f88\u4f5b\u5fc3\u7684\u5305\u542b\u4e86\u591a\u7a2eAndroid\u88dd\u7f6e\u7684\u6a21\u64ec\u5668\uff0c\u8b93\u6211\u5011\u5728\u958b\u767cAndroid\u61c9\u7528\u7a0b\u5f0f\u7684\u6642\u5019\u4e5f\u53ef\u4ee5\u900f\u904e\u5b83\u4f86\u9032\u884c\u9664\u932f\u3002",authors:"ouch1978",tags:["Visual Studio","Xamarin"],keywords:["Visual Studio","Xamarin","Android","Hyper-V","debug","\u9664\u932f"]},r=void 0,s={permalink:"/blog/2016/06/30/debugging-xamarin-android-app-in-vs",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2016-06-30-debugging-xamarin-android-app-in-vs/index.md",source:"@site/blog/2016-06-30-debugging-xamarin-android-app-in-vs/index.md",title:"\u900f\u904e Visual Studio \u5c0d Xamarin Android \u5c08\u6848\u9032\u884c\u9664\u932f",description:"\u5f88\u958b\u5fc3\u7684\u53ef\u4ee5\u6210\u529f\u5efa\u7f6e\u51faAndroid\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5f8c...\u54a6!? \u600e\u9ebc\u4e0d\u80fdDebug!!??Visual Studio\u628a\u61c9\u7528\u7a0b\u5f0f\u4f48\u7f72\u5230\u6a21\u64ec\u5668\u4e4b\u5f8c\u5c31\u4e0d\u7ba1\u4e86??\u54ea\u62db\u554a!? \u76f8\u4fe1\u5927\u5bb6\u61c9\u8a72\u90fd\u77e5\u9053Visual Studio 2015\u88e1\u9762\u5f88\u4f5b\u5fc3\u7684\u5305\u542b\u4e86\u591a\u7a2eAndroid\u88dd\u7f6e\u7684\u6a21\u64ec\u5668\uff0c\u8b93\u6211\u5011\u5728\u958b\u767cAndroid\u61c9\u7528\u7a0b\u5f0f\u7684\u6642\u5019\u4e5f\u53ef\u4ee5\u900f\u904e\u5b83\u4f86\u9032\u884c\u9664\u932f\u3002",date:"2016-06-30T00:00:00.000Z",tags:[{label:"Visual Studio",permalink:"/blog/tags/visual-studio"},{label:"Xamarin",permalink:"/blog/tags/xamarin"}],readingTime:1.75,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u900f\u904e Visual Studio \u5c0d Xamarin Android \u5c08\u6848\u9032\u884c\u9664\u932f",description:"\u5f88\u958b\u5fc3\u7684\u53ef\u4ee5\u6210\u529f\u5efa\u7f6e\u51faAndroid\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5f8c...\u54a6!? \u600e\u9ebc\u4e0d\u80fdDebug!!??Visual Studio\u628a\u61c9\u7528\u7a0b\u5f0f\u4f48\u7f72\u5230\u6a21\u64ec\u5668\u4e4b\u5f8c\u5c31\u4e0d\u7ba1\u4e86??\u54ea\u62db\u554a!? \u76f8\u4fe1\u5927\u5bb6\u61c9\u8a72\u90fd\u77e5\u9053Visual Studio 2015\u88e1\u9762\u5f88\u4f5b\u5fc3\u7684\u5305\u542b\u4e86\u591a\u7a2eAndroid\u88dd\u7f6e\u7684\u6a21\u64ec\u5668\uff0c\u8b93\u6211\u5011\u5728\u958b\u767cAndroid\u61c9\u7528\u7a0b\u5f0f\u7684\u6642\u5019\u4e5f\u53ef\u4ee5\u900f\u904e\u5b83\u4f86\u9032\u884c\u9664\u932f\u3002",authors:"ouch1978",tags:["Visual Studio","Xamarin"],keywords:["Visual Studio","Xamarin","Android","Hyper-V","debug","\u9664\u932f"]},unlisted:!1,prevItem:{title:"\u89e3\u6c7a\u904a\u6232\u5728 Windows 10 \u57f7\u884c\u6642\u51fa\u73fe XAudio2_7.dll_unloaded \u932f\u8aa4\u9020\u6210\u7684\u9583\u9000",permalink:"/blog/2016/07/02/solve-xaudio2_7.dll-unloaded-error"},nextItem:{title:"Hello Xamarin",permalink:"/blog/2016/06/30/hello-xamarin"}},a={authorsImageUrls:[void 0]},l=[];function u(i){const n={code:"code",img:"img",p:"p",strong:"strong",...(0,o.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5f88\u958b\u5fc3\u7684\u53ef\u4ee5\u6210\u529f\u5efa\u7f6e\u51faAndroid\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5f8c...\u54a6!? \u600e\u9ebc\u4e0d\u80fdDebug!!??Visual Studio\u628a\u61c9\u7528\u7a0b\u5f0f\u4f48\u7f72\u5230\u6a21\u64ec\u5668\u4e4b\u5f8c\u5c31\u4e0d\u7ba1\u4e86??\u54ea\u62db\u554a!?"}),"\n",(0,t.jsx)(n.p,{children:"\u76f8\u4fe1\u5927\u5bb6\u61c9\u8a72\u90fd\u77e5\u9053Visual Studio 2015\u88e1\u9762\u5f88\u4f5b\u5fc3\u7684\u5305\u542b\u4e86\u591a\u7a2eAndroid\u88dd\u7f6e\u7684\u6a21\u64ec\u5668\uff0c\u8b93\u6211\u5011\u5728\u958b\u767cAndroid\u61c9\u7528\u7a0b\u5f0f\u7684\u6642\u5019\u4e5f\u53ef\u4ee5\u900f\u904e\u5b83\u4f86\u9032\u884c\u9664\u932f\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u5011\u4e5f\u53ef\u4ee5\u900f\u904eVisual Studio\u9078\u55ae\u88e1\u7684 -> ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Tools"})})," -> ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Android"})})," -> ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Android Emulator Manager"})})," \u4f86\u5efa\u7acb\u865b\u64ec\u7684Android\u88dd\u7f6e\u4ee5\u4fbf\u65bc\u9032\u884c\u9664\u932f\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Android Emulator Manager",src:e(16177).A+"",width:"686",height:"493"})}),"\n",(0,t.jsx)(n.p,{children:"\u6b63\u5e38\u7684\u60c5\u6cc1\u4e0b\uff0c\u61c9\u7528\u7a0b\u5f0f\u88ab\u4f48\u7f72\u5230\u6a21\u64ec\u5668\u4e4b\u5f8c\uff0cVisual Studio\u61c9\u8a72\u9084\u662f\u6703\u8655\u65bc\u5728\u9664\u932f\u7684\u6a21\u5f0f\u4e0b\uff0c\u4f46\u662f\u6211\u9047\u5230\u7684\u795e\u5947\u72c0\u6cc1\u662f\u9019\u6a23\uff1a\u61c9\u7528\u7a0b\u5f0f\u7684\u78ba\u6709\u88ab\u4f48\u7f72\u5230\u6a21\u64ec\u5668\u4e2d\uff0c\u4f46\u662fVisual Studio\u5c31\u81ea\u52d5\u7d50\u675f\u4e86\u9664\u932f\u6a21\u5f0f\u4e86\uff0c\u800c\u4e14\u6a21\u64ec\u5668\u88e1\u7684\u61c9\u7528\u7a0b\u5f0f\u4e5f\u6703\u81ea\u52d5\u88ab\u9001\u5230\u80cc\u666f\u53bb\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7d93\u904eGoogle\u5927\u795e\u7684\u5354\u52a9\uff0c\u539f\u4f86\u9019\u500b\u554f\u984c\u662f\u51fa\u5728Hyper-V\u88e1\u865b\u64ec\u6a5f\u5668\u7684\u8a2d\u5b9a\u4e0a\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u53ea\u9700\u8981\u958b\u555f ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Hyper-V Manager"})})," \uff0c\u5728Android\u865b\u64ec\u6a5f\u4e0a\u6309\u4e0b\u6ed1\u9f20\u53f3\u9375\uff0c\u9ede\u9078 ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Settings..."})}),"\uff0c\u7136\u5f8c\u9032\u5165 ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Processor"})})," \u7684 ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Compatibility"})})," \u8a2d\u5b9a\u9805\u76ee\u4e2d\uff0c\u628a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Migrate to a physical computer with a different processor version"})})," \u52fe\u9078\u8d77\u4f86\u5c31\u884c\u5566\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Compatibility Setting",src:e(63137).A+"",width:"722",height:"687"})}),"\n",(0,t.jsx)(n.p,{children:"\u5594\u8036\uff0c\u9664\u932f\u6a21\u5f0f\u56de\u4f86\u4e86\uff0c\u8a2d\u597d\u7684\u4e2d\u65b7\u9ede\u4e5f\u4e0d\u6703\u518d\u88ab\u7121\u8996\u4e86\uff0cHappy Coding~"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Break Point Is Back",src:e(74966).A+"",width:"1366",height:"768"})})]})}function c(i={}){const{wrapper:n}={...(0,o.R)(),...i.components};return n?(0,t.jsx)(n,{...i,children:(0,t.jsx)(u,{...i})}):u(i)}},16177:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/Android-Emulator-Manager-39611b4d711dcdbd3383736aedc0caff.png"},74966:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/BreakPoint-Is-Back-1a46f498069fa0579873f30052889472.png"},63137:(i,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/Compatibility-Setting-4551ccf9e522d50842fb6fdc779166d9.png"},28453:(i,n,e)=>{e.d(n,{R:()=>r,x:()=>s});var t=e(96540);const o={},d=t.createContext(o);function r(i){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function s(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:r(i.components),t.createElement(d.Provider,{value:n},i.children)}}}]);