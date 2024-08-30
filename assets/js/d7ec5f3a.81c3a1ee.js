"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[8697],{81670:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(74848),s=o(28453);const i={title:"\u5f9e\u9060\u7aef\u4fee\u6539 Windows \u672c\u6a5f\u5e33\u865f\u7684\u5bc6\u78bc\uff0c\u9084\u53ef\u4ee5\u4e00\u6b21\u6539\u591a\u53f0!!",description:"\u5728\u7ba1\u7406 Server \u7684\u6642\u5019\uff0c\u5076\u723e\u6703\u51fa\u73fe\u9700\u8981\u66f4\u6539\u67d0\u53f0\u6a5f\u5668\u7ba1\u7406\u8005\u5bc6\u78bc\u7684\u60c5\u6cc1\u3002\u5982\u679c\u8981\u6539\u7684\u6a5f\u5668\u53ea\u6709\u4e00\u5169\u53f0\u7684\u8a71\uff0c\u9084\u53ef\u4ee5\u8f9b\u82e6\u4e00\u9ede\u76f4\u63a5\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u7684\u65b9\u5f0f\u9023\u904e\u53bb\u6539\u3002\u4f46\u662f\uff0c\u5982\u679c\u4e00\u6b21\u8981\u6539\u4e94\u53f0\u4ee5\u4e0a\uff0c\u751a\u81f3\u662f\u5341\u53f0\u4ee5\u4e0a\uff0c\u53ef\u80fd\u5c31\u6703\u9700\u8981\u66f4\u8070\u660e\u4e00\u9ede\u7684\u65b9\u6cd5\u4e86\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7","PsTools"],keywords:["Windows","Change local administrator password","PsTools","PsPasswd"]},r=void 0,a={permalink:"/blog/2022/09/14/change-windows-local-admin-password-remotely",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-09-14-change-windows-local-admin-password-remotely/index.md",source:"@site/blog/2022-09-14-change-windows-local-admin-password-remotely/index.md",title:"\u5f9e\u9060\u7aef\u4fee\u6539 Windows \u672c\u6a5f\u5e33\u865f\u7684\u5bc6\u78bc\uff0c\u9084\u53ef\u4ee5\u4e00\u6b21\u6539\u591a\u53f0!!",description:"\u5728\u7ba1\u7406 Server \u7684\u6642\u5019\uff0c\u5076\u723e\u6703\u51fa\u73fe\u9700\u8981\u66f4\u6539\u67d0\u53f0\u6a5f\u5668\u7ba1\u7406\u8005\u5bc6\u78bc\u7684\u60c5\u6cc1\u3002\u5982\u679c\u8981\u6539\u7684\u6a5f\u5668\u53ea\u6709\u4e00\u5169\u53f0\u7684\u8a71\uff0c\u9084\u53ef\u4ee5\u8f9b\u82e6\u4e00\u9ede\u76f4\u63a5\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u7684\u65b9\u5f0f\u9023\u904e\u53bb\u6539\u3002\u4f46\u662f\uff0c\u5982\u679c\u4e00\u6b21\u8981\u6539\u4e94\u53f0\u4ee5\u4e0a\uff0c\u751a\u81f3\u662f\u5341\u53f0\u4ee5\u4e0a\uff0c\u53ef\u80fd\u5c31\u6703\u9700\u8981\u66f4\u8070\u660e\u4e00\u9ede\u7684\u65b9\u6cd5\u4e86\u3002",date:"2022-09-14T00:00:00.000Z",tags:[{inline:!0,label:"Windows",permalink:"/blog/tags/windows"},{inline:!0,label:"\u5c0f\u6280\u5de7",permalink:"/blog/tags/\u5c0f\u6280\u5de7"},{inline:!0,label:"PsTools",permalink:"/blog/tags/ps-tools"}],readingTime:4.21,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978",page:null}],frontMatter:{title:"\u5f9e\u9060\u7aef\u4fee\u6539 Windows \u672c\u6a5f\u5e33\u865f\u7684\u5bc6\u78bc\uff0c\u9084\u53ef\u4ee5\u4e00\u6b21\u6539\u591a\u53f0!!",description:"\u5728\u7ba1\u7406 Server \u7684\u6642\u5019\uff0c\u5076\u723e\u6703\u51fa\u73fe\u9700\u8981\u66f4\u6539\u67d0\u53f0\u6a5f\u5668\u7ba1\u7406\u8005\u5bc6\u78bc\u7684\u60c5\u6cc1\u3002\u5982\u679c\u8981\u6539\u7684\u6a5f\u5668\u53ea\u6709\u4e00\u5169\u53f0\u7684\u8a71\uff0c\u9084\u53ef\u4ee5\u8f9b\u82e6\u4e00\u9ede\u76f4\u63a5\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u7684\u65b9\u5f0f\u9023\u904e\u53bb\u6539\u3002\u4f46\u662f\uff0c\u5982\u679c\u4e00\u6b21\u8981\u6539\u4e94\u53f0\u4ee5\u4e0a\uff0c\u751a\u81f3\u662f\u5341\u53f0\u4ee5\u4e0a\uff0c\u53ef\u80fd\u5c31\u6703\u9700\u8981\u66f4\u8070\u660e\u4e00\u9ede\u7684\u65b9\u6cd5\u4e86\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7","PsTools"],keywords:["Windows","Change local administrator password","PsTools","PsPasswd"]},unlisted:!1,prevItem:{title:"\u4e00\u5f35\u5716\u770b\u61c2\u5beb\u7a0b\u5f0f\u6642\u5e38\u898b\u7684\u5e7e\u7a2e\u9396",permalink:"/blog/2022/09/21/common-locks-in-programming-world"},nextItem:{title:"\u4fee\u5fa9 Windows 11 \u958b\u59cb\u529f\u80fd\u8868\u53f3\u9375\u9078\u55ae\u6d88\u5931\u7684\u554f\u984c",permalink:"/blog/2022/09/01/fix-windows-11-missing-context-menu-on-start-button"}},l={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u7ba1\u7406 Server \u7684\u6642\u5019\uff0c\u5076\u723e\u6703\u51fa\u73fe\u9700\u8981\u66f4\u6539\u67d0\u53f0\u6a5f\u5668\u7ba1\u7406\u8005\u5bc6\u78bc\u7684\u60c5\u6cc1\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u8981\u6539\u7684\u6a5f\u5668\u53ea\u6709\u4e00\u5169\u53f0\u7684\u8a71\uff0c\u9084\u53ef\u4ee5\u8f9b\u82e6\u4e00\u9ede\u76f4\u63a5\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u7684\u65b9\u5f0f\u9023\u904e\u53bb\u6539\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u5982\u679c\u4e00\u6b21\u8981\u6539\u4e94\u53f0\u4ee5\u4e0a\uff0c\u751a\u81f3\u662f\u5341\u53f0\u4ee5\u4e0a\uff0c\u4e00\u53f0\u4e00\u53f0\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u6162\u6162\u6539\u53ef\u80fd\u5c31\u6c92\u90a3\u9ebc\u6709\u6548\u7387\u4e86\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u5206\u4eab\u900f\u904e ",(0,t.jsx)(n.code,{children:"PsPasswd.exe"})," \u4f86\u66f4\u6539\u9060\u7aef Windows \u88e1\u67d0\u500b\u5e33\u865f\u7684\u5bc6\u78bc\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u91cd\u8981\u7684\u662f\uff0c\u5b83\u9084\u652f\u63f4\u4e00\u6b21\u5c0d\u4e00\u6574\u6279\u7684\u6a5f\u5668\u9032\u884c\u4fee\u6539!!"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var t=o(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);