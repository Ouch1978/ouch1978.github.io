"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[786],{64588:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>r,frontMatter:()=>u,metadata:()=>c,toc:()=>o});var i=t(85893),s=t(11151);const u={title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8abf\u6574\u78c1\u789f\u5927\u5c0f",description:"\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u8abf\u6574\u78c1\u789f\u5927\u5c0f\u3002",author:"ouch1978",tags:["Container","Docker","Ubuntu"],keywords:["Ubuntu","\u6307\u4ee4","Overlay"],last_update:{date:"2022/08/25 GMT+8",author:"Ouch Liu"}},d=void 0,c={id:"containerization/linux-cheatsheet/adjust-disk-size-on-ubuntu/index",title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8abf\u6574\u78c1\u789f\u5927\u5c0f",description:"\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u8abf\u6574\u78c1\u789f\u5927\u5c0f\u3002",source:"@site/docs/03-containerization/01-linux-cheatsheet/02-adjust-disk-size-on-ubuntu/index.md",sourceDirName:"03-containerization/01-linux-cheatsheet/02-adjust-disk-size-on-ubuntu",slug:"/containerization/linux-cheatsheet/adjust-disk-size-on-ubuntu/",permalink:"/docs/containerization/linux-cheatsheet/adjust-disk-size-on-ubuntu/",draft:!1,unlisted:!1,editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/docs/03-containerization/01-linux-cheatsheet/02-adjust-disk-size-on-ubuntu/index.md",tags:[{label:"Container",permalink:"/docs/tags/container"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Ubuntu",permalink:"/docs/tags/ubuntu"}],version:"current",lastUpdatedBy:"Ouch Liu",lastUpdatedAt:1661356800,formattedLastUpdatedAt:"2022\u5e748\u670824\u65e5",frontMatter:{title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8abf\u6574\u78c1\u789f\u5927\u5c0f",description:"\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u8abf\u6574\u78c1\u789f\u5927\u5c0f\u3002",author:"ouch1978",tags:["Container","Docker","Ubuntu"],keywords:["Ubuntu","\u6307\u4ee4","Overlay"],last_update:{date:"2022/08/25 GMT+8",author:"Ouch Liu"}},sidebar:"tutorialSidebar",previous:{title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8a2d\u5b9a\u56fa\u5b9a IP",permalink:"/docs/containerization/linux-cheatsheet/set-static-ip-on-ubuntu/"},next:{title:"\u5728 Ubuntu \u4e2d\u5feb\u901f\u5efa\u7acb Samba \u670d\u52d9",permalink:"/docs/containerization/linux-cheatsheet/enabled-samba-on-ubuntu/"}},a={},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u8abf\u6574 /dev/sdaX \u7684\u5927\u5c0f",id:"\u8abf\u6574-devsdax-\u7684\u5927\u5c0f",level:2},{value:"\u8abf\u6574 ubuntu--vg-ubuntu--lv (overlay) \u7684\u5927\u5c0f",id:"\u8abf\u6574-ubuntu--vg-ubuntu--lv-overlay-\u7684\u5927\u5c0f",level:2}];function l(n){const e={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4f7f\u7528 VM \u7684\u6642\u5019\uff0c\u5404\u7a2e\u8cc7\u6e90\u5f80\u5f80\u80fd\u7701\u5c31\u7701\uff0c\u6240\u4ee5\u4e00\u958b\u59cb\u53ef\u80fd\u90fd\u4e0d\u6703\u958b\u592a\u5927\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u904e\u53ef\u80fd\u4e00\u4e0d\u5c0f\u5fc3\uff0c\u5c31\u4e0d\u77e5\u4e0d\u89ba\u628a\u78c1\u789f\u7d66\u5403\u6eff\u4e86\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5c31\u7b97\u624b\u52d5\u8abf\u6574 Ubuntu VM \u7684\u78c1\u789f\u7a7a\u9593\uff0c\u4e5f\u4e0d\u6703\u5728 Ubuntu VM \u88e1\u99ac\u4e0a\u751f\u6548\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u7bc7\u6587\u7ae0\u5c31\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u8abf\u6574\u78c1\u789f\u5927\u5c0f\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8abf\u6574-devsdax-\u7684\u5927\u5c0f",children:"\u8abf\u6574 /dev/sdaX \u7684\u5927\u5c0f"}),"\n",(0,i.jsx)(e.admonition,{title:"\u5c0f\u63d0\u793a",type:"tip",children:(0,i.jsx)(e.p,{children:"sdaX \u7684 X \u70ba\u6211\u5011\u8981\u8abf\u6574\u7684\u78c1\u789f\u7de8\u865f\u3002"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8981\u8abf\u6574 /dev/sda \u7684\u5bb9\u91cf\u5f88\u7c21\u55ae\uff0c\u500b\u4eba\u6bd4\u8f03\u63a8\u85a6\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"cfdisk"}),"\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 console \u4e2d\u8f38\u5165 ",(0,i.jsx)(e.code,{children:"cfdisk"}),"\u3002"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9078\u64c7\u8981\u8abf\u6574\u7684\u78c1\u789f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u9078\u53d6 ",(0,i.jsx)(e.code,{children:"Resize"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8f38\u5165\u65b0\u7684\u5bb9\u91cf\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u9078\u64c7 ",(0,i.jsx)(e.code,{children:"Write"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u9078\u64c7 ",(0,i.jsx)(e.code,{children:"Quit"})," \u9000\u51fa\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u4f7f\u7528 cfdisk \u8abf\u6574\u78c1\u789f\u5927\u5c0f",src:t(33278).Z+"",title:"\u4f7f\u7528 cfdisk \u8abf\u6574\u78c1\u789f\u5927\u5c0f",width:"1545",height:"827"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6700\u5f8c\u5728 console \u4e2d\u7e7c\u7e8c\u8f38\u5165 ",(0,i.jsx)(e.code,{children:"resize2fs /dev/sdaX"})," \u5373\u53ef\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8abf\u6574-ubuntu--vg-ubuntu--lv-overlay-\u7684\u5927\u5c0f",children:"\u8abf\u6574 ubuntu--vg-ubuntu--lv (overlay) \u7684\u5927\u5c0f"}),"\n",(0,i.jsx)(e.p,{children:"Ubuntu 18.04 \u4e4b\u5f8c\u51fa\u73fe\u4e86 LVM (Logical Volume Management)\uff0c\u8abf\u6574\u5bb9\u91cf\u7684\u65b9\u6cd5\u548c\u76f4\u63a5\u8abf\u6574 sdaX \u53c8\u6709\u4e00\u9ede\u9ede\u5dee\u7570\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u57fa\u672c\u4e0a\u9084\u662f\u8981\u5148\u5b8c\u6210 sdaX \u5bb9\u91cf\u7684\u8abf\u6574\uff0c\u63a5\u8457\u8f38\u5165 ",(0,i.jsx)(e.code,{children:"pvresize /dev/sdaX"}),"\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7136\u5f8c\u8f38\u5165 ",(0,i.jsx)(e.code,{children:"lvresize -A n -l +100%FREE /dev/ubuntu-vg/ubuntu-lv"}),"\u3002"]}),"\n",(0,i.jsx)(e.admonition,{title:"\u5c0f\u63d0\u793a",type:"tip",children:(0,i.jsx)(e.p,{children:"\u4e0a\u9762\u6307\u4ee4\u7684 +100%FREE \u6307\u7684\u662f\u628a\u6240\u6709\u5269\u9918\u7684\u7a7a\u9593\u90fd\u5206\u914d\u7d66 Logical Volume\u3002"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6700\u5f8c\u8f38\u5165 ",(0,i.jsx)(e.code,{children:"resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv"})," \u5373\u53ef\u3002"]})]})}function r(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},33278:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/adjust-disk-size-with-cfdisk-a57759e2149816b9226f79d9536ccd55.png"},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>d});var i=t(67294);const s={},u=i.createContext(s);function d(n){const e=i.useContext(u);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),i.createElement(u.Provider,{value:e},n.children)}}}]);