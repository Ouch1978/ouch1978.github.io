"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[4676],{71536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(74848),s=n(28453);const i={title:"\u771f\u6b63\u514d\u8cbb!!\u53ea\u8981\u6703\u8907\u88fd\u8cbc\u4e0a\u5c31\u80fd\u7522\u751f\u514d\u8cbb\u7684 HTTPS \u6191\u8b49!!",description:"\u6709\u6c92\u6709\u771f\u7684\u4e0d\u7528\u9322\uff0c\u53c8\u4e0d\u9650\u5236\u6191\u8b49\u6578\u91cf\u7684\u7db2\u7ad9\u5462? \u6709\u5594!!\u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u8ddf\u5927\u5bb6\u5206\u4eab~",authors:"ouch1978",tags:["\u5c0f\u6280\u5de7"],keywords:["SSL","\u514d\u8cbb","\u6191\u8b49"]},o=void 0,c={permalink:"/blog/2022/04/06/get-free-ssl-certificate",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-04-06-get-free-ssl-certificate/index.md",source:"@site/blog/2022-04-06-get-free-ssl-certificate/index.md",title:"\u771f\u6b63\u514d\u8cbb!!\u53ea\u8981\u6703\u8907\u88fd\u8cbc\u4e0a\u5c31\u80fd\u7522\u751f\u514d\u8cbb\u7684 HTTPS \u6191\u8b49!!",description:"\u6709\u6c92\u6709\u771f\u7684\u4e0d\u7528\u9322\uff0c\u53c8\u4e0d\u9650\u5236\u6191\u8b49\u6578\u91cf\u7684\u7db2\u7ad9\u5462? \u6709\u5594!!\u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u8ddf\u5927\u5bb6\u5206\u4eab~",date:"2022-04-06T00:00:00.000Z",tags:[{inline:!0,label:"\u5c0f\u6280\u5de7",permalink:"/blog/tags/\u5c0f\u6280\u5de7"}],readingTime:9.73,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978",page:null}],frontMatter:{title:"\u771f\u6b63\u514d\u8cbb!!\u53ea\u8981\u6703\u8907\u88fd\u8cbc\u4e0a\u5c31\u80fd\u7522\u751f\u514d\u8cbb\u7684 HTTPS \u6191\u8b49!!",description:"\u6709\u6c92\u6709\u771f\u7684\u4e0d\u7528\u9322\uff0c\u53c8\u4e0d\u9650\u5236\u6191\u8b49\u6578\u91cf\u7684\u7db2\u7ad9\u5462? \u6709\u5594!!\u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u8ddf\u5927\u5bb6\u5206\u4eab~",authors:"ouch1978",tags:["\u5c0f\u6280\u5de7"],keywords:["SSL","\u514d\u8cbb","\u6191\u8b49"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528 Microsoft Teams \u7684 Chat with Self \u529f\u80fd",permalink:"/blog/2022/07/08/ms-teams-chat-with-self"},nextItem:{title:"\u555f\u7528 SQL Server Management Studio \u7684\u6df1\u8272\u4e3b\u984c",permalink:"/blog/2022/03/23/enable-smss-18-dark-theme"}},a={authorsImageUrls:[void 0]},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}];function u(e){const t={a:"a",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,r.jsx)(t.p,{children:"\u96d6\u7136 Let's Encrypt \u5b98\u65b9\u63d0\u4f9b ACME \u7b49\u7b49\u5de5\u5177\u8b93\u6211\u5011\u80fd\u81ea\u52a9\u7522\u751f\u514d\u8cbb\u7684\u6191\u8b49\uff0c\u751a\u81f3\u53ef\u4ee5\u81ea\u52d5\u66f4\u65b0\u6191\u8b49\uff0c\u4e0d\u904e\u5c0d\u65bc\u975e\u5b85\u5b85\u4f86\u8aaa\uff0c\u8981\u7522\u51fa\u4e00\u96bb\u6191\u8b49\u9084\u662f\u883b\u9ebb\u7169\u7684\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u53ef\u80fd\u70ba\u4e86\u80fd\u5438\u6536\u4e0d\u65b9\u4fbf\u4f7f\u7528 ACME \u7b49\u7b49\u5de5\u5177\u7684\u65cf\u7fa4\uff0c\u8d8a\u4f86\u8d8a\u591a\u865f\u7a31\u514d\u8cbb\u7522\u751f HTTPS \u6191\u8b49\u7684\u7db2\u7ad9\u4e5f\u5982\u96e8\u5f8c\u6625\u7b4d\u822c\u7684\u4e00\u500b\u4e00\u500b\u5192\u51fa\u4f86\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4f46\u662f\uff0c\u5728\u865f\u7a31\u514d\u8cbb\u7684\u80cc\u5f8c\uff0c\u5176\u5be6\u5927\u90e8\u4efd\u9084\u662f\u8981\u6536\u8cbb\u7684\u3002(\u4e0d\u7136\u4ed6\u5011\u8981\u8cfa\u4ec0\u9ebc\u5462?)"}),"\n",(0,r.jsxs)(t.p,{children:["\u4f8b\u5982\u6211\u4e4b\u524d\u89ba\u5f97\u9084\u883b\u65b9\u4fbf\u7684 ",(0,r.jsx)(t.a,{href:"https://zerossl.com",children:"ZeroSSL"})," \u9019\u500b\u7db2\u7ad9\uff0c\u514d\u8cbb\u7684\u4f7f\u7528\u8005\u5c31\u53ea\u80fd\u7522\u4e09\u6b21\u6191\u8b49(renew \u4e5f\u7b97\u4e00\u6b21)\uff0c\u8d85\u904e\u5c31\u5f97\u4ed8\u8cbb\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u90a3\u6709\u6c92\u6709\u771f\u7684\u4e0d\u7528\u9322\uff0c\u53c8\u4e0d\u9650\u5236\u6191\u8b49\u6578\u91cf\u7684\u7db2\u7ad9\u5462?"}),"\n",(0,r.jsx)(t.p,{children:"\u6709\u5594!!\u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u8ddf\u5927\u5bb6\u5206\u4eab~"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);