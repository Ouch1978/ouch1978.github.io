"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[5150],{2195:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>r});var s=t(85893),n=t(11151);const d={title:"\u5728 VSCode \u88e1\u986f\u793a\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848",description:"VSCode \u9810\u8a2d\u4e0d\u6703\u986f\u793a\u67d0\u4e9b\u7279\u5b9a\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848\uff0c\u4f8b\u5982 .git \u8cc7\u6599\u593e\u3001 .svn \u8cc7\u6599\u593e\u7b49\u7b49\u3002 \u4ee5\u4e00\u500b IDE \u4f86\u8b1b\uff0c\u4e0d\u986f\u793a\u9019\u4e9b\u8cc7\u6599\u593e\u90fd\u662f\u5f88\u5408\u60c5\u5408\u7406\u7684\uff0c\u4f46\u662f\u4f5c\u70ba\u4e00\u500b\u6587\u5b57\u7de8\u8f2f\u5668\u4f86\u770b\u7684\u8a71\uff0c\u9019\u4e9b\u8cc7\u6599\u593e\u4e0d\u986f\u793a\u7684\u8a71\u5c31\u602a\u602a\u7684\u4e86\u3002 \u6240\u4ee5\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u8b93 VSCode \u986f\u793a\u9810\u8a2d\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u6216\u6a94\u6848\u7684\u65b9\u6cd5\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7","VSCode"],keywords:["Windows","VSCode","\u986f\u793a\u96b1\u85cf\u8cc7\u6599\u593e"]},o=void 0,l={permalink:"/blog/2022/10/10/show-hidden-items-in-vscode",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-10-10-show-hidden-items-in-vscode/index.md",source:"@site/blog/2022-10-10-show-hidden-items-in-vscode/index.md",title:"\u5728 VSCode \u88e1\u986f\u793a\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848",description:"VSCode \u9810\u8a2d\u4e0d\u6703\u986f\u793a\u67d0\u4e9b\u7279\u5b9a\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848\uff0c\u4f8b\u5982 .git \u8cc7\u6599\u593e\u3001 .svn \u8cc7\u6599\u593e\u7b49\u7b49\u3002 \u4ee5\u4e00\u500b IDE \u4f86\u8b1b\uff0c\u4e0d\u986f\u793a\u9019\u4e9b\u8cc7\u6599\u593e\u90fd\u662f\u5f88\u5408\u60c5\u5408\u7406\u7684\uff0c\u4f46\u662f\u4f5c\u70ba\u4e00\u500b\u6587\u5b57\u7de8\u8f2f\u5668\u4f86\u770b\u7684\u8a71\uff0c\u9019\u4e9b\u8cc7\u6599\u593e\u4e0d\u986f\u793a\u7684\u8a71\u5c31\u602a\u602a\u7684\u4e86\u3002 \u6240\u4ee5\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u8b93 VSCode \u986f\u793a\u9810\u8a2d\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u6216\u6a94\u6848\u7684\u65b9\u6cd5\u3002",date:"2022-10-10T00:00:00.000Z",formattedDate:"2022\u5e7410\u670810\u65e5",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"\u5c0f\u6280\u5de7",permalink:"/blog/tags/\u5c0f\u6280\u5de7"},{label:"VSCode",permalink:"/blog/tags/vs-code"}],readingTime:2.075,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u5728 VSCode \u88e1\u986f\u793a\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848",description:"VSCode \u9810\u8a2d\u4e0d\u6703\u986f\u793a\u67d0\u4e9b\u7279\u5b9a\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848\uff0c\u4f8b\u5982 .git \u8cc7\u6599\u593e\u3001 .svn \u8cc7\u6599\u593e\u7b49\u7b49\u3002 \u4ee5\u4e00\u500b IDE \u4f86\u8b1b\uff0c\u4e0d\u986f\u793a\u9019\u4e9b\u8cc7\u6599\u593e\u90fd\u662f\u5f88\u5408\u60c5\u5408\u7406\u7684\uff0c\u4f46\u662f\u4f5c\u70ba\u4e00\u500b\u6587\u5b57\u7de8\u8f2f\u5668\u4f86\u770b\u7684\u8a71\uff0c\u9019\u4e9b\u8cc7\u6599\u593e\u4e0d\u986f\u793a\u7684\u8a71\u5c31\u602a\u602a\u7684\u4e86\u3002 \u6240\u4ee5\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u8b93 VSCode \u986f\u793a\u9810\u8a2d\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u6216\u6a94\u6848\u7684\u65b9\u6cd5\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7","VSCode"],keywords:["Windows","VSCode","\u986f\u793a\u96b1\u85cf\u8cc7\u6599\u593e"]},unlisted:!1,prevItem:{title:"\u7be9\u9078 Redis Key \u7684\u6b63\u78ba\u59ff\u52e2",permalink:"/blog/2022/10/29/correct-way-to-fileter-redis-key"},nextItem:{title:"\u5feb\u901f\u641e\u5b9a\u5728 Windows \u88e1\u900f\u904e SSH \u901a\u8a0a\u5354\u5b9a\u5b58\u53d6 GitLab \u7684 Repository",permalink:"/blog/2022/10/09/quick-guide-to-use-git-with-ssh"}},c={authorsImageUrls:[void 0]},r=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4fee\u6539\u6392\u9664\u6a94\u6848\u6e05\u55ae",id:"\u4fee\u6539\u6392\u9664\u6a94\u6848\u6e05\u55ae",level:2},{value:"\u900f\u904e\u64f4\u5145\u5957\u4ef6\u52d5\u614b\u8abf\u6574\u986f\u793a/\u96b1\u85cf\u7279\u5b9a\u8cc7\u6599\u593e\u548c\u6a94\u6848",id:"\u900f\u904e\u64f4\u5145\u5957\u4ef6\u52d5\u614b\u8abf\u6574\u986f\u793a\u96b1\u85cf\u7279\u5b9a\u8cc7\u6599\u593e\u548c\u6a94\u6848",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,s.jsx)(i.p,{children:"VSCode \u9810\u8a2d\u4e0d\u6703\u986f\u793a\u67d0\u4e9b\u7279\u5b9a\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848\uff0c\u4f8b\u5982 .git \u8cc7\u6599\u593e\u3001 .svn \u8cc7\u6599\u593e\u7b49\u7b49\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u4ee5\u4e00\u500b IDE \u4f86\u8b1b\uff0c\u4e0d\u986f\u793a\u9019\u4e9b\u8cc7\u6599\u593e\u90fd\u662f\u5f88\u5408\u60c5\u5408\u7406\u7684\uff0c\u4f46\u662f\u4f5c\u70ba\u4e00\u500b\u6587\u5b57\u7de8\u8f2f\u5668\u4f86\u770b\u7684\u8a71\uff0c\u9019\u4e9b\u8cc7\u6599\u593e\u4e0d\u986f\u793a\u7684\u8a71\u5c31\u602a\u602a\u7684\u4e86\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u6240\u4ee5\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u8b93 VSCode \u986f\u793a\u9810\u8a2d\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u6216\u6a94\u6848\u7684\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"\u4fee\u6539\u6392\u9664\u6a94\u6848\u6e05\u55ae",children:"\u4fee\u6539\u6392\u9664\u6a94\u6848\u6e05\u55ae"}),"\n",(0,s.jsxs)(i.p,{children:["\u6309\u4e0b ",(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:","})," \u958b\u555f\u8a2d\u5b9a\u9801\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u63a5\u8457\u5728\u641c\u5c0b\u6846\u4e2d\u8f38\u5165 ",(0,s.jsx)(i.code,{children:"files.exclude"}),"\uff0c\u5c31\u6703\u51fa\u73fe\u6392\u9664\u7684\u6a94\u6848\u6e05\u55ae\uff1a"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"\u641c\u5c0b\u6392\u9664\u6a94\u6848\u6e05\u55ae",src:t(96270).Z+"",title:"\u641c\u5c0b\u6392\u9664\u6a94\u6848\u6e05\u55ae",width:"1755",height:"639"})}),"\n",(0,s.jsx)(i.p,{children:"\u7136\u5f8c\u628a\u6211\u5011\u60f3\u8981\u986f\u793a\u7684\u9805\u76ee\u5f9e\u6e05\u55ae\u88e1\u522a\u9664\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u4f8b\u5982\u6211\u5e0c\u671b .git \u8cc7\u6599\u593e\u4e0d\u8981\u88ab\u96b1\u85cf\uff0c\u5c31\u6309\u4e0b ",(0,s.jsx)(i.code,{children:"**/.git"})," \u9805\u76ee\u53f3\u908a\u7684 ",(0,s.jsx)(i.code,{children:"X"})," \u865f\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u5982\u6b64\u4e00\u4f86\uff0c .git \u8cc7\u6599\u593e\u5c31\u6703\u986f\u793a\u51fa\u4f86\u4e86\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"\u8abf\u6574\u8a2d\u5b9a\u5f8c\uff0c.git \u8cc7\u6599\u593e\u986f\u793a\u51fa\u4f86\u4e86",src:t(7032).Z+"",title:"\u8abf\u6574\u8a2d\u5b9a\u5f8c\uff0c.git \u8cc7\u6599\u593e\u986f\u793a\u51fa\u4f86\u4e86",width:"2400",height:"1554"})}),"\n",(0,s.jsx)(i.p,{children:"\u5c31\u9019\u9ebc\u7c21\u55ae\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"\u900f\u904e\u64f4\u5145\u5957\u4ef6\u52d5\u614b\u8abf\u6574\u986f\u793a\u96b1\u85cf\u7279\u5b9a\u8cc7\u6599\u593e\u548c\u6a94\u6848",children:"\u900f\u904e\u64f4\u5145\u5957\u4ef6\u52d5\u614b\u8abf\u6574\u986f\u793a/\u96b1\u85cf\u7279\u5b9a\u8cc7\u6599\u593e\u548c\u6a94\u6848"}),"\n",(0,s.jsx)(i.p,{children:"\u5982\u679c\u6211\u5011\u5e0c\u671b\u80fd\u900f\u904e UI \u958b\u95dc\u662f\u5426\u986f\u793a\u96b1\u85cf\u8cc7\u6599\u593e\u6216\u662f\u6a94\u6848\u5462?"}),"\n",(0,s.jsx)(i.p,{children:"\u4f8b\u5982\u6709\u6642\u5019\u6211\u5c31\u662f\u4e0d\u60f3\u770b\u5230 node_modules\u3001build \u548c .docusaurus \u8cc7\u6599\u593e\uff0c\u6709\u6642\u5019\u53c8\u60f3\u770b\u5230\u5b83\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u90a3 ",(0,s.jsx)(i.a,{href:"https://marketplace.visualstudio.com/items?itemName=amodio.toggle-excluded-files",title:"Toggle Excluded Files",children:"Toggle Excluded Files"})," \u9019\u500b\u64f4\u5145\u5957\u4ef6\u5c31\u5f88\u9069\u5408\u6211\u5011\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u5b83\u7528\u8d77\u4f86\u7684\u6548\u679c\u50cf\u4e0b\u5716\u9019\u6a23\uff1a"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"\u958b\u555f/\u95dc\u9589\u6392\u9664\u6a94\u6848\u6548\u679c",src:t(90844).Z+"",title:"\u958b\u555f/\u95dc\u9589\u6392\u9664\u6a94\u6848\u6548\u679c",width:"1546",height:"1160"})}),"\n",(0,s.jsx)(i.p,{children:"\u662f\u4e0d\u662f\u5f88\u65b9\u4fbf\u554a?"}),"\n",(0,s.jsx)(i.p,{children:"\u4ee5\u4e0a\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://linuxpip.org/vscode-show-hidden-files/",title:"Show hidden files in VSCode",children:"Show hidden files in VSCode"})}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7032:(e,i,t)=>{t.d(i,{Z:()=>s});const s=t.p+"assets/images/git-foler-appearing-after-settings-changed-c718d7183f1c46aea67a38837305b456.png"},96270:(e,i,t)=>{t.d(i,{Z:()=>s});const s=t.p+"assets/images/search-for-files-exclude-settings-64c9ed11d0e0bbd9e9771f4edd8cc26e.png"},90844:(e,i,t)=>{t.d(i,{Z:()=>s});const s=t.p+"assets/images/toggle-excluded-files-effect-1e510bf85b5d29bb89bcabfdc24b321a.gif"},11151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>o});var s=t(67294);const n={},d=s.createContext(n);function o(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);