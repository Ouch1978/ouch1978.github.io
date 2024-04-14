"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[3057],{86684:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=o(74848),r=o(28453);const i={title:"\u57f7\u884c npm login \u6642\u51fa\u73fe Web login not supported \u932f\u8aa4\u7684\u56e0\u61c9\u63aa\u65bd",description:"\u4eca\u5929\u5728\u8655\u7406\u628a npm \u9810\u8a2d\u7684 registry \u6539\u70ba\u516c\u53f8\u5167\u90e8\u7684 Nexus Repository \u4f3a\u670d\u5668\u6642\uff0c\u57f7\u884c\u5230 npm login \u9019\u500b\u6307\u4ee4\u5c31\u5674\u4e86 `Web login not supported` \u9019\u500b\u932f\u8aa4\u3002\u4e0a\u7db2\u4e00\u67e5\uff0c\u539f\u4f86\u82e6\u4e3b\u53c8\u4e0d\u53ea\u6211\u4e00\u500b\uff0c\u770b\u8d77\u4f86\u662f\u56e0\u70ba npm 9 \u4e4b\u5f8c\u76f8\u5bb9\u6027\u4e0d\u540c\u9020\u6210\u7684\u3002",authors:"ouch1978",tags:["Windows","Trouble Shooting","npm"],keywords:["npm login","npm ERR!","code ENYI"]},l=void 0,s={permalink:"/blog/2022/12/05/workaround-for-npm-web-login-not-support-error",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-12-05-workaround-for-npm-web-login-not-support-error/index.md",source:"@site/blog/2022-12-05-workaround-for-npm-web-login-not-support-error/index.md",title:"\u57f7\u884c npm login \u6642\u51fa\u73fe Web login not supported \u932f\u8aa4\u7684\u56e0\u61c9\u63aa\u65bd",description:"\u4eca\u5929\u5728\u8655\u7406\u628a npm \u9810\u8a2d\u7684 registry \u6539\u70ba\u516c\u53f8\u5167\u90e8\u7684 Nexus Repository \u4f3a\u670d\u5668\u6642\uff0c\u57f7\u884c\u5230 npm login \u9019\u500b\u6307\u4ee4\u5c31\u5674\u4e86 `Web login not supported` \u9019\u500b\u932f\u8aa4\u3002\u4e0a\u7db2\u4e00\u67e5\uff0c\u539f\u4f86\u82e6\u4e3b\u53c8\u4e0d\u53ea\u6211\u4e00\u500b\uff0c\u770b\u8d77\u4f86\u662f\u56e0\u70ba npm 9 \u4e4b\u5f8c\u76f8\u5bb9\u6027\u4e0d\u540c\u9020\u6210\u7684\u3002",date:"2022-12-05T00:00:00.000Z",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"Trouble Shooting",permalink:"/blog/tags/trouble-shooting"},{label:"npm",permalink:"/blog/tags/npm"}],readingTime:1.305,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u57f7\u884c npm login \u6642\u51fa\u73fe Web login not supported \u932f\u8aa4\u7684\u56e0\u61c9\u63aa\u65bd",description:"\u4eca\u5929\u5728\u8655\u7406\u628a npm \u9810\u8a2d\u7684 registry \u6539\u70ba\u516c\u53f8\u5167\u90e8\u7684 Nexus Repository \u4f3a\u670d\u5668\u6642\uff0c\u57f7\u884c\u5230 npm login \u9019\u500b\u6307\u4ee4\u5c31\u5674\u4e86 `Web login not supported` \u9019\u500b\u932f\u8aa4\u3002\u4e0a\u7db2\u4e00\u67e5\uff0c\u539f\u4f86\u82e6\u4e3b\u53c8\u4e0d\u53ea\u6211\u4e00\u500b\uff0c\u770b\u8d77\u4f86\u662f\u56e0\u70ba npm 9 \u4e4b\u5f8c\u76f8\u5bb9\u6027\u4e0d\u540c\u9020\u6210\u7684\u3002",authors:"ouch1978",tags:["Windows","Trouble Shooting","npm"],keywords:["npm login","npm ERR!","code ENYI"]},unlisted:!1,prevItem:{title:"\u5728 Windows \u522a\u9664\u6a94\u6848\u6216\u8cc7\u6599\u593e\u6642\u51fa\u73fe Source Path Too Long \u932f\u8aa4\u7684\u56e0\u61c9\u63aa\u65bd",permalink:"/blog/2022/12/06/workaround-for-source-path-too-long-when-deleting-folder"},nextItem:{title:"\u9023\u7dda\u5230\u9060\u7aef Windows Server \u6642\u51fa\u73fe There are no Remote Desktop License Servers available to provide a license \u7684\u56e0\u61c9\u63aa\u65bd",permalink:"/blog/2022/11/23/rdp-no-license-server-error-workaround"}},p={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u56e0\u61c9\u63aa\u65bd",id:"\u56e0\u61c9\u63aa\u65bd",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u624b\u52d5\u7de8\u8f2f .npmrc \u6a94",id:"\u65b9\u6cd5\u4e00\u624b\u52d5\u7de8\u8f2f-npmrc-\u6a94",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u52a0\u4e0a --auth-type=legacy \u53c3\u6578",id:"\u65b9\u6cd5\u4e8c\u52a0\u4e0a---auth-typelegacy-\u53c3\u6578",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,t.jsxs)(n.p,{children:["\u4eca\u5929\u5728\u8655\u7406\u628a npm \u9810\u8a2d\u7684 registry \u6539\u70ba\u516c\u53f8\u5167\u90e8\u7684 Nexus Repository \u4f3a\u670d\u5668\u6642\uff0c\u57f7\u884c\u5230 npm login \u9019\u500b\u6307\u4ee4\u5c31\u5674\u4e86 ",(0,t.jsx)(n.code,{children:"Web login not supported"})," \u9019\u500b\u932f\u8aa4\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u7db2\u4e00\u67e5\uff0c\u539f\u4f86\u82e6\u4e3b\u53c8\u4e0d\u53ea\u6211\u4e00\u500b\uff0c\u770b\u8d77\u4f86\u662f\u56e0\u70ba Nexus Repository \u548c npm 9 \u4e4b\u5f8c\u76f8\u5bb9\u6027\u4e0d\u540c\u9020\u6210\u7684\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u56e0\u61c9\u63aa\u65bd",children:"\u56e0\u61c9\u63aa\u65bd"}),"\n",(0,t.jsx)(n.p,{children:"\u6551\u52a9 Google \u5927\u795e\u4e4b\u5f8c\uff0c\u627e\u5230\u5169\u500b\u89e3\u6cd5\uff0c\u4e0d\u904e\u6211\u76ee\u524d\u7528\u7b2c\u4e00\u500b\u65b9\u6cd5\u5c31\u6210\u529f\u4e86\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e00\u624b\u52d5\u7de8\u8f2f-npmrc-\u6a94",children:"\u65b9\u6cd5\u4e00\uff1a\u624b\u52d5\u7de8\u8f2f .npmrc \u6a94"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u6587\u5b57\u7de8\u8f2f\u5668\u7de8\u8f2f ",(0,t.jsx)(n.code,{children:"%UserProfile%\\.npmrc"})," \u6a94\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="%UserProfile%\\.npmrc"',children:'registry=https://{\u4f60\u7684\u79c1\u6709 Repository \u8def\u5f91}\nalways-auth=true\n//{\u4f60\u7684\u79c1\u6709 Repository \u8def\u5f91}:_auth="{\u4f60\u7684\u5e33\u865f:\u4f60\u7684\u5bc6\u78bc \u7684 base64 \u7de8\u78bc\u5b57\u4e32}"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="%UserProfile%\\.npmrc"',children:'registry=https://registry.ouch1978.io/repository/npm/\nalways-auth=true\n//registry.ouch1978.io/repository/npm/:_auth="b3VjaDE5Nzg6bXlUZXN0cGFzc3dvcmQ="\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e8c\u52a0\u4e0a---auth-typelegacy-\u53c3\u6578",children:"\u65b9\u6cd5\u4e8c\uff1a\u52a0\u4e0a --auth-type=legacy \u53c3\u6578"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u539f\u4f86\u7684\u6307\u4ee4\u5f8c\u9762\u52a0\u4e0a ",(0,t.jsx)(n.code,{children:"--auth-type=legacy"})," \u53c3\u6578\u5373\u53ef\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pwsh",children:"npm login --registry https://registry.ouch1978.io/repository/npm/ --auth-type=legacy\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u9019\u500b\u65b9\u6cd5\u6bd4\u7b2c\u4e00\u500b\u65b9\u6cd5\u4f86\u5f97\u76f4\u89ba\u5f97\u591a\uff0c\u4e5f\u65b9\u4fbf\u4e86\u8a31\u591a\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0a\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://clavinjune.dev/en/blogs/npm-login-not-working/",title:"NPM Login Not Working",children:"NPM Login Not Working"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/74482745/npm-login-not-allowing-login-to-github",title:"npm login not allowing login to github",children:"npm login not allowing login to github"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>s});var t=o(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);