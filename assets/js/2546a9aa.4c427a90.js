"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[950],{10860:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=i(74848),n=i(28453);const r={title:"\u89e3\u6c7a\u900f\u904e Appium \u6e2c\u8a66\u5b89\u5353\u88dd\u7f6e\u4e0a\u7684\u884c\u52d5\u7db2\u7ad9\u767c\u751f ChromeDriver \u7248\u672c\u4e0d\u76f8\u5bb9\u7684\u554f\u984c",description:"\u539f\u672c\u4ee5\u70ba\uff0c\u53ea\u8981\u628a\u76f8\u540c\u7684\u6e2c\u8a66\u653e\u5230\u4e0d\u540c\u7248\u672c\u7684\u6a21\u64ec\u5668\u88e1\u9762\u8dd1\uff0c\u61c9\u8a72\u4ec0\u9ebc\u90fd\u4e0d\u7528\u591a\u4f5c\uff0c\u5c31\u53ef\u4ee5\u4e00\u4e00\u901a\u904e\u6e2c\u8a66\u624d\u5c0d\u3002 \u4f46\u662f\u300c\u4ee3\u8a8c\u5638\u89aa\u50cf\u61a8\u4eba\u6240\u60f3\u7684\u67b6\u64ec\u7c21\u55ae\u300d\uff0c\u6211\u5149\u662f\u628a\u6a21\u64ec\u5668\u7684\u4f5c\u696d\u7cfb\u7d71\u5f9e 4.4.2 \u63db\u5230 6.0 \u800c\u5df2\uff0c\u7136\u5f8c\u4ed6\u5c31\u6b7b\u6389\u4e86...",authors:"ouch1978",tags:["Visual Studio","Appium","Automation Testing"],keywords:["Appium","ChromeDriver","Chrome version must be"]},u=void 0,a={permalink:"/blog/2017/05/11/fix-appium-chrome-driver-error",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2017-05-11-fix-appium-chrome-driver-error/index.md",source:"@site/blog/2017-05-11-fix-appium-chrome-driver-error/index.md",title:"\u89e3\u6c7a\u900f\u904e Appium \u6e2c\u8a66\u5b89\u5353\u88dd\u7f6e\u4e0a\u7684\u884c\u52d5\u7db2\u7ad9\u767c\u751f ChromeDriver \u7248\u672c\u4e0d\u76f8\u5bb9\u7684\u554f\u984c",description:"\u539f\u672c\u4ee5\u70ba\uff0c\u53ea\u8981\u628a\u76f8\u540c\u7684\u6e2c\u8a66\u653e\u5230\u4e0d\u540c\u7248\u672c\u7684\u6a21\u64ec\u5668\u88e1\u9762\u8dd1\uff0c\u61c9\u8a72\u4ec0\u9ebc\u90fd\u4e0d\u7528\u591a\u4f5c\uff0c\u5c31\u53ef\u4ee5\u4e00\u4e00\u901a\u904e\u6e2c\u8a66\u624d\u5c0d\u3002 \u4f46\u662f\u300c\u4ee3\u8a8c\u5638\u89aa\u50cf\u61a8\u4eba\u6240\u60f3\u7684\u67b6\u64ec\u7c21\u55ae\u300d\uff0c\u6211\u5149\u662f\u628a\u6a21\u64ec\u5668\u7684\u4f5c\u696d\u7cfb\u7d71\u5f9e 4.4.2 \u63db\u5230 6.0 \u800c\u5df2\uff0c\u7136\u5f8c\u4ed6\u5c31\u6b7b\u6389\u4e86...",date:"2017-05-11T00:00:00.000Z",tags:[{inline:!0,label:"Visual Studio",permalink:"/blog/tags/visual-studio"},{inline:!0,label:"Appium",permalink:"/blog/tags/appium"},{inline:!0,label:"Automation Testing",permalink:"/blog/tags/automation-testing"}],readingTime:3.01,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978",page:null}],frontMatter:{title:"\u89e3\u6c7a\u900f\u904e Appium \u6e2c\u8a66\u5b89\u5353\u88dd\u7f6e\u4e0a\u7684\u884c\u52d5\u7db2\u7ad9\u767c\u751f ChromeDriver \u7248\u672c\u4e0d\u76f8\u5bb9\u7684\u554f\u984c",description:"\u539f\u672c\u4ee5\u70ba\uff0c\u53ea\u8981\u628a\u76f8\u540c\u7684\u6e2c\u8a66\u653e\u5230\u4e0d\u540c\u7248\u672c\u7684\u6a21\u64ec\u5668\u88e1\u9762\u8dd1\uff0c\u61c9\u8a72\u4ec0\u9ebc\u90fd\u4e0d\u7528\u591a\u4f5c\uff0c\u5c31\u53ef\u4ee5\u4e00\u4e00\u901a\u904e\u6e2c\u8a66\u624d\u5c0d\u3002 \u4f46\u662f\u300c\u4ee3\u8a8c\u5638\u89aa\u50cf\u61a8\u4eba\u6240\u60f3\u7684\u67b6\u64ec\u7c21\u55ae\u300d\uff0c\u6211\u5149\u662f\u628a\u6a21\u64ec\u5668\u7684\u4f5c\u696d\u7cfb\u7d71\u5f9e 4.4.2 \u63db\u5230 6.0 \u800c\u5df2\uff0c\u7136\u5f8c\u4ed6\u5c31\u6b7b\u6389\u4e86...",authors:"ouch1978",tags:["Visual Studio","Appium","Automation Testing"],keywords:["Appium","ChromeDriver","Chrome version must be"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528 Visual Studio 2017 \u642d\u914d Xamarin.UITest \u9032\u884c\u5b89\u5353\u61c9\u7528\u7a0b\u5f0f\u7684\u81ea\u52d5\u5316\u6e2c\u8a66",permalink:"/blog/2017/05/25/mobile-ui-automation-with-xamarin-uitest"},nextItem:{title:"\u900f\u904e Visual Studio 2017 \u8207 Appium \u6e2c\u8a66\u5b89\u5353\u624b\u6a5f\u4e0a\u7684 App",permalink:"/blog/2017/05/10/mobile-app-automation-testing-with-vs2017-and-appium"}},s={authorsImageUrls:[void 0]},p=[];function m(t){const e={code:"code",p:"p",...(0,n.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"\u4e4b\u524d\u5728\u4f7f\u7528 Appium \u6e2c\u8a66\u5b89\u5353\u88dd\u7f6e\u4e0a\u7684\u884c\u52d5\u7db2\u7ad9\u7684\u6642\u5019\uff0c\u4e00\u5207\u90fd\u5f88\u958b\u5fc3\u6109\u5feb\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u4f46\u662f\uff0c\u5b89\u5353\u88dd\u7f6e\u7684\u7248\u672c\u773e\u591a\uff0c\u7e3d\u4e0d\u53ef\u80fd\u53ea\u6e2c\u55ae\u4e00\u7248\u672c\uff1b\u70ba\u4e86\u78ba\u4fdd\u7db2\u7ad9\u5728\u4e0d\u540c\u7684\u88dd\u7f6e\u4e0a\u90fd\u80fd\u6b63\u5e38\u904b\u4f5c\uff0c\u4f7f\u7528\u4e0d\u540c\u7248\u672c\u7684\u5b89\u5353\u4f5c\u696d\u7cfb\u7d71\u4f86\u9032\u884c\u6e2c\u8a66\u4e5f\u662f\u514d\u4e0d\u4e86\u5f97\u8981\u4f5c\u7684\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u539f\u672c\u4ee5\u70ba\uff0c\u53ea\u8981\u628a\u76f8\u540c\u7684\u6e2c\u8a66\u653e\u5230\u4e0d\u540c\u7248\u672c\u7684\u6a21\u64ec\u5668\u88e1\u9762\u8dd1\uff0c\u61c9\u8a72\u4ec0\u9ebc\u90fd\u4e0d\u7528\u591a\u4f5c\uff0c\u5c31\u53ef\u4ee5\u4e00\u4e00\u901a\u904e\u6e2c\u8a66\u624d\u5c0d\u3002"}),"\n",(0,o.jsxs)(e.p,{children:["\u4f46\u662f\u300c",(0,o.jsx)(e.code,{children:"\u4ee3\u8a8c\u5638\u89aa\u50cf\u61a8\u4eba\u6240\u60f3\u7684\u67b6\u64ec\u7c21\u55ae"}),"\u300d\uff0c\u6211\u5149\u662f\u628a\u6a21\u64ec\u5668\u7684\u4f5c\u696d\u7cfb\u7d71\u5f9e 4.4.2 \u63db\u5230 6.0 \u800c\u5df2\uff0c\u7136\u5f8c\u4ed6\u5c31\u6b7b\u6389\u4e86..."]})]})}function l(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(m,{...t})}):m(t)}},28453:(t,e,i)=>{i.d(e,{R:()=>u,x:()=>a});var o=i(96540);const n={},r=o.createContext(n);function u(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:u(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);