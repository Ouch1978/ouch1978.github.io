"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[3322],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,u(u({ref:e},s),{},{components:n})):r.createElement(f,u({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,u=new Array(i);u[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,u[1]=o;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67e3:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),u=["components"],o={title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8a2d\u5b9a\u56fa\u5b9a IP",author:"ouch1978",tags:["ubuntu","command","cli","static ip"],slug:"set-fixed-ip-on-ubuntu"},l=void 0,c={unversionedId:"containerization/linux-cheatsheet/set-static-ip-on-ubuntu/set-static-ip-on-buuntu",id:"containerization/linux-cheatsheet/set-static-ip-on-ubuntu/set-static-ip-on-buuntu",title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8a2d\u5b9a\u56fa\u5b9a IP",description:"\u524d\u8a00",source:"@site/docs/03-containerization/01-linux-cheatsheet/01-set-static-ip-on-ubuntu/set-static-ip-on-buuntu.md",sourceDirName:"03-containerization/01-linux-cheatsheet/01-set-static-ip-on-ubuntu",slug:"/containerization/linux-cheatsheet/set-static-ip-on-ubuntu/set-fixed-ip-on-ubuntu",permalink:"/docs/containerization/linux-cheatsheet/set-static-ip-on-ubuntu/set-fixed-ip-on-ubuntu",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/website/docs/03-containerization/01-linux-cheatsheet/01-set-static-ip-on-ubuntu/set-static-ip-on-buuntu.md",tags:[{label:"ubuntu",permalink:"/docs/tags/ubuntu"},{label:"command",permalink:"/docs/tags/command"},{label:"cli",permalink:"/docs/tags/cli"},{label:"static ip",permalink:"/docs/tags/static-ip"}],version:"current",lastUpdatedAt:1646982648,formattedLastUpdatedAt:"2022/3/11",frontMatter:{title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8a2d\u5b9a\u56fa\u5b9a IP",author:"ouch1978",tags:["ubuntu","command","cli","static ip"],slug:"set-fixed-ip-on-ubuntu"},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/docs/intro/docs-intro"},next:{title:"\u4e00\u6b21\u522a\u9664\u6240\u6709\u5bb9\u5668\u7684\u6307\u4ee4",permalink:"/docs/containerization/docker-cheatsheet/prune-all-containers/prune-all-containers"}},s={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u7de8\u8f2f Netplan \u8a2d\u5b9a\u6a94",id:"\u7de8\u8f2f-netplan-\u8a2d\u5b9a\u6a94",level:2},{value:"\u9a57\u8b49\u4e26\u4e14\u522a\u9664\u4e0d\u5fc5\u8981\u7684 IP",id:"\u9a57\u8b49\u4e26\u4e14\u522a\u9664\u4e0d\u5fc5\u8981\u7684-ip",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u5728\u865b\u64ec\u5316/\u5bb9\u5668\u5316\u7684\u4e16\u754c\u88e1\uff0c\u5efa\u7acb\u548c\u7ba1\u7406 VM \u61c9\u8a72\u662f\u6700\u57fa\u672c\u4e2d\u7684\u57fa\u672c\u3002"),(0,i.kt)("p",null,"\u800c\u8a2d\u5b9a\u548c\u7ba1\u7406\u773e\u591a VM \u7684 IP \u5c31\u66f4\u662f\u6240\u6709\u5de5\u4f5c\u88e1\u9762\u6700\u57fa\u672c\u7684\u4e00\u9805\u4e86\u3002"),(0,i.kt)("p",null,"\u5728\u9084\u6c92\u4f7f\u7528\u81ea\u52d5\u5efa\u7f6e VM \u7684\u5de5\u5177\u4e4b\u524d\uff0c\u4e00\u5207\u90fd\u53ea\u80fd\u5148\u9760\u7d14\u624b\u5de5\u3002"),(0,i.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u5c31\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u8a2d\u5b9a\u56fa\u5b9a IP\u3002"),(0,i.kt)("h2",{id:"\u7de8\u8f2f-netplan-\u8a2d\u5b9a\u6a94"},"\u7de8\u8f2f Netplan \u8a2d\u5b9a\u6a94"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u900f\u904e nano \u7de8\u8f2f\u5668\u4f86\u958b\u555f /etc/netplan/01-netcfg.yaml \u6a94\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo nano /etc/netplan/01-netcfg.yaml\n")),(0,i.kt)("p",null,"\u63a5\u8457\u7de8\u8f2f\u88e1\u9762\u7684\u5167\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/etc/netplan/01-netcfg.yaml"',title:'"/etc/netplan/01-netcfg.yaml"'},"network: \n  version: 2 \n  renderer: networkd \n  ethernets: \n    ens3: \n      dhcp4: no \n      addresses: \n          - 192.168.1.199/24 #\u8981\u6307\u5b9a\u7684 IP \u548c\u7db2\u6bb5\n      gateway4: 192.168.1.254 #\u8981\u4f7f\u7528\u7684 Gateway IP\n      nameservers: \n          addresses: [192.18.41.6, 192.18.48.2] #\u9810\u8a2d\u7684 DNS \u4f3a\u670d\u5668\n")),(0,i.kt)("p",null,"\u5b58\u6a94\u4e26\u9000\u51fa\u4e4b\u5f8c\uff0c\u8f38\u5165\u4e0b\u5217\u6307\u4ee4\u8b93\u8a2d\u5b9a\u751f\u6548\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo netplan apply\n")),(0,i.kt)("h2",{id:"\u9a57\u8b49\u4e26\u4e14\u522a\u9664\u4e0d\u5fc5\u8981\u7684-ip"},"\u9a57\u8b49\u4e26\u4e14\u522a\u9664\u4e0d\u5fc5\u8981\u7684 IP"),(0,i.kt)("p",null,"\u78ba\u8a8d IP \u7684\u8a2d\u5b9a\u662f\u5426\u751f\u6548\uff0c\u53ef\u4ee5\u900f\u904e\u4e0b\u9762\u7684\u6307\u4ee4\u4f86\u6aa2\u67e5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ip a\n")),(0,i.kt)("p",null,"\u5982\u679c\u5b58\u5728\u4e0d\u9700\u8981\u7684 IP\uff0c\u5247\u53ef\u900f\u904e\u4e0b\u5217\u6307\u4ee4\u4f86\u522a\u9664\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ip addr del 192.168.1.200/24 dev ens3\n")))}m.isMDXComponent=!0}}]);