"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[7017],{70408:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var n=o(74848),i=o(28453);const s={title:"\u5728 VSCode \u88e1\u986f\u793a\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848",description:"VSCode \u9810\u8a2d\u4e0d\u6703\u986f\u793a\u67d0\u4e9b\u7279\u5b9a\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848\uff0c\u4f8b\u5982 .git \u8cc7\u6599\u593e\u3001 .svn \u8cc7\u6599\u593e\u7b49\u7b49\u3002 \u4ee5\u4e00\u500b IDE \u4f86\u8b1b\uff0c\u4e0d\u986f\u793a\u9019\u4e9b\u8cc7\u6599\u593e\u90fd\u662f\u5f88\u5408\u60c5\u5408\u7406\u7684\uff0c\u4f46\u662f\u4f5c\u70ba\u4e00\u500b\u6587\u5b57\u7de8\u8f2f\u5668\u4f86\u770b\u7684\u8a71\uff0c\u9019\u4e9b\u8cc7\u6599\u593e\u4e0d\u986f\u793a\u7684\u8a71\u5c31\u602a\u602a\u7684\u4e86\u3002 \u6240\u4ee5\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u8b93 VSCode \u986f\u793a\u9810\u8a2d\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u6216\u6a94\u6848\u7684\u65b9\u6cd5\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7","VSCode"],keywords:["Windows","VSCode","\u986f\u793a\u96b1\u85cf\u8cc7\u6599\u593e"]},d=void 0,r={permalink:"/blog/2022/10/10/show-hidden-items-in-vscode",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-10-10-show-hidden-items-in-vscode/index.md",source:"@site/blog/2022-10-10-show-hidden-items-in-vscode/index.md",title:"\u5728 VSCode \u88e1\u986f\u793a\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848",description:"VSCode \u9810\u8a2d\u4e0d\u6703\u986f\u793a\u67d0\u4e9b\u7279\u5b9a\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848\uff0c\u4f8b\u5982 .git \u8cc7\u6599\u593e\u3001 .svn \u8cc7\u6599\u593e\u7b49\u7b49\u3002 \u4ee5\u4e00\u500b IDE \u4f86\u8b1b\uff0c\u4e0d\u986f\u793a\u9019\u4e9b\u8cc7\u6599\u593e\u90fd\u662f\u5f88\u5408\u60c5\u5408\u7406\u7684\uff0c\u4f46\u662f\u4f5c\u70ba\u4e00\u500b\u6587\u5b57\u7de8\u8f2f\u5668\u4f86\u770b\u7684\u8a71\uff0c\u9019\u4e9b\u8cc7\u6599\u593e\u4e0d\u986f\u793a\u7684\u8a71\u5c31\u602a\u602a\u7684\u4e86\u3002 \u6240\u4ee5\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u8b93 VSCode \u986f\u793a\u9810\u8a2d\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u6216\u6a94\u6848\u7684\u65b9\u6cd5\u3002",date:"2022-10-10T00:00:00.000Z",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"\u5c0f\u6280\u5de7",permalink:"/blog/tags/\u5c0f\u6280\u5de7"},{label:"VSCode",permalink:"/blog/tags/vs-code"}],readingTime:2.075,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u5728 VSCode \u88e1\u986f\u793a\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848",description:"VSCode \u9810\u8a2d\u4e0d\u6703\u986f\u793a\u67d0\u4e9b\u7279\u5b9a\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848\uff0c\u4f8b\u5982 .git \u8cc7\u6599\u593e\u3001 .svn \u8cc7\u6599\u593e\u7b49\u7b49\u3002 \u4ee5\u4e00\u500b IDE \u4f86\u8b1b\uff0c\u4e0d\u986f\u793a\u9019\u4e9b\u8cc7\u6599\u593e\u90fd\u662f\u5f88\u5408\u60c5\u5408\u7406\u7684\uff0c\u4f46\u662f\u4f5c\u70ba\u4e00\u500b\u6587\u5b57\u7de8\u8f2f\u5668\u4f86\u770b\u7684\u8a71\uff0c\u9019\u4e9b\u8cc7\u6599\u593e\u4e0d\u986f\u793a\u7684\u8a71\u5c31\u602a\u602a\u7684\u4e86\u3002 \u6240\u4ee5\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u8b93 VSCode \u986f\u793a\u9810\u8a2d\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u6216\u6a94\u6848\u7684\u65b9\u6cd5\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7","VSCode"],keywords:["Windows","VSCode","\u986f\u793a\u96b1\u85cf\u8cc7\u6599\u593e"]},unlisted:!1,prevItem:{title:"\u7be9\u9078 Redis Key \u7684\u6b63\u78ba\u59ff\u52e2",permalink:"/blog/2022/10/29/correct-way-to-fileter-redis-key"},nextItem:{title:"\u5feb\u901f\u641e\u5b9a\u5728 Windows \u88e1\u900f\u904e SSH \u901a\u8a0a\u5354\u5b9a\u5b58\u53d6 GitLab \u7684 Repository",permalink:"/blog/2022/10/09/quick-guide-to-use-git-with-ssh"}},c={authorsImageUrls:[void 0]},a=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}];function u(e){const t={h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,n.jsx)(t.p,{children:"VSCode \u9810\u8a2d\u4e0d\u6703\u986f\u793a\u67d0\u4e9b\u7279\u5b9a\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848\uff0c\u4f8b\u5982 .git \u8cc7\u6599\u593e\u3001 .svn \u8cc7\u6599\u593e\u7b49\u7b49\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u4ee5\u4e00\u500b IDE \u4f86\u8b1b\uff0c\u4e0d\u986f\u793a\u9019\u4e9b\u8cc7\u6599\u593e\u90fd\u662f\u5f88\u5408\u60c5\u5408\u7406\u7684\uff0c\u4f46\u662f\u4f5c\u70ba\u4e00\u500b\u6587\u5b57\u7de8\u8f2f\u5668\u4f86\u770b\u7684\u8a71\uff0c\u9019\u4e9b\u8cc7\u6599\u593e\u4e0d\u986f\u793a\u7684\u8a71\u5c31\u602a\u602a\u7684\u4e86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u6240\u4ee5\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u8b93 VSCode \u986f\u793a\u9810\u8a2d\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u6216\u6a94\u6848\u7684\u65b9\u6cd5\u3002"})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>r});var n=o(96540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);