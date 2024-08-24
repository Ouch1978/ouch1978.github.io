"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[2601],{73863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var i=t(74848),a=t(28453);const s={title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8a2d\u5b9a\u56fa\u5b9a IP",description:"\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u8a2d\u5b9a\u56fa\u5b9a IP\u3002",author:"ouch1978",tags:["Container","Docker","Ubuntu"],keywords:["Ubuntu","static ip"],last_update:{date:"2022/08/25 GMT+8",author:"Ouch Liu"}},c=void 0,r={id:"containerization/linux-cheatsheet/set-static-ip-on-ubuntu/index",title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8a2d\u5b9a\u56fa\u5b9a IP",description:"\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u8a2d\u5b9a\u56fa\u5b9a IP\u3002",source:"@site/docs/03-containerization/01-linux-cheatsheet/01-set-static-ip-on-ubuntu/index.md",sourceDirName:"03-containerization/01-linux-cheatsheet/01-set-static-ip-on-ubuntu",slug:"/containerization/linux-cheatsheet/set-static-ip-on-ubuntu/",permalink:"/docs/containerization/linux-cheatsheet/set-static-ip-on-ubuntu/",draft:!1,unlisted:!1,editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/docs/03-containerization/01-linux-cheatsheet/01-set-static-ip-on-ubuntu/index.md",tags:[{inline:!0,label:"Container",permalink:"/docs/tags/container"},{inline:!0,label:"Docker",permalink:"/docs/tags/docker"},{inline:!0,label:"Ubuntu",permalink:"/docs/tags/ubuntu"}],version:"current",lastUpdatedBy:"Ouch Liu",lastUpdatedAt:16613568e5,frontMatter:{title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8a2d\u5b9a\u56fa\u5b9a IP",description:"\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u8a2d\u5b9a\u56fa\u5b9a IP\u3002",author:"ouch1978",tags:["Container","Docker","Ubuntu"],keywords:["Ubuntu","static ip"],last_update:{date:"2022/08/25 GMT+8",author:"Ouch Liu"}},sidebar:"tutorialSidebar",previous:{title:"\u5bb9\u5668\u5316\u76f8\u95dc",permalink:"/docs/category/\u5bb9\u5668\u5316\u76f8\u95dc"},next:{title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8abf\u6574\u78c1\u789f\u5927\u5c0f",permalink:"/docs/containerization/linux-cheatsheet/adjust-disk-size-on-ubuntu/"}},u={},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u7de8\u8f2f Netplan \u8a2d\u5b9a\u6a94",id:"\u7de8\u8f2f-netplan-\u8a2d\u5b9a\u6a94",level:2},{value:"\u9a57\u8b49\u4e26\u4e14\u522a\u9664\u4e0d\u5fc5\u8981\u7684 IP",id:"\u9a57\u8b49\u4e26\u4e14\u522a\u9664\u4e0d\u5fc5\u8981\u7684-ip",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u865b\u64ec\u5316/\u5bb9\u5668\u5316\u7684\u4e16\u754c\u88e1\uff0c\u5efa\u7acb\u548c\u7ba1\u7406 VM \u61c9\u8a72\u662f\u6700\u57fa\u672c\u4e2d\u7684\u57fa\u672c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u800c\u8a2d\u5b9a\u548c\u7ba1\u7406\u773e\u591a VM \u7684 IP \u5c31\u66f4\u662f\u6240\u6709\u5de5\u4f5c\u88e1\u9762\u6700\u57fa\u672c\u7684\u4e00\u9805\u4e86\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u9084\u6c92\u4f7f\u7528\u81ea\u52d5\u5efa\u7f6e VM \u7684\u5de5\u5177\u4e4b\u524d\uff0c\u4e00\u5207\u90fd\u53ea\u80fd\u5148\u9760\u7d14\u624b\u5de5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9019\u7bc7\u6587\u7ae0\u5c31\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u8a2d\u5b9a\u56fa\u5b9a IP\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7de8\u8f2f-netplan-\u8a2d\u5b9a\u6a94",children:"\u7de8\u8f2f Netplan \u8a2d\u5b9a\u6a94"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uff0c\u900f\u904e nano \u7de8\u8f2f\u5668\u4f86\u958b\u555f /etc/netplan/01-netcfg.yaml \u6a94\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"sudo nano /etc/netplan/01-netcfg.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u8457\u7de8\u8f2f\u88e1\u9762\u7684\u5167\u5bb9\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="/etc/netplan/01-netcfg.yaml"',children:"network:\n  version: 2\n  renderer: networkd\n  ethernets:\n    ens3:\n      dhcp4: no\n      addresses:\n        - 192.168.1.199/24 #\u8981\u6307\u5b9a\u7684 IP \u548c\u7db2\u6bb5\n      gateway4: 192.168.1.254 #\u8981\u4f7f\u7528\u7684 Gateway IP\n      nameservers:\n        addresses: [192.18.41.6, 192.18.48.2] #\u9810\u8a2d\u7684 DNS \u4f3a\u670d\u5668\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5b58\u6a94\u4e26\u9000\u51fa\u4e4b\u5f8c\uff0c\u8f38\u5165\u4e0b\u5217\u6307\u4ee4\u8b93\u8a2d\u5b9a\u751f\u6548\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"sudo netplan apply\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9a57\u8b49\u4e26\u4e14\u522a\u9664\u4e0d\u5fc5\u8981\u7684-ip",children:"\u9a57\u8b49\u4e26\u4e14\u522a\u9664\u4e0d\u5fc5\u8981\u7684 IP"}),"\n",(0,i.jsx)(n.p,{children:"\u78ba\u8a8d IP \u7684\u8a2d\u5b9a\u662f\u5426\u751f\u6548\uff0c\u53ef\u4ee5\u900f\u904e\u4e0b\u9762\u7684\u6307\u4ee4\u4f86\u6aa2\u67e5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"ip a\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u5b58\u5728\u4e0d\u9700\u8981\u7684 IP\uff0c\u5247\u53ef\u900f\u904e\u4e0b\u5217\u6307\u4ee4\u4f86\u522a\u9664\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"ip addr del 192.168.1.200/24 dev ens3\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(96540);const a={},s=i.createContext(a);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);