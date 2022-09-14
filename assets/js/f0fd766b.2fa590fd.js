"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[8319],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,w=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(w,l(l({ref:t},u),{},{components:n})):r.createElement(w,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],s={title:"\u5f9e\u9060\u7aef\u4fee\u6539 Windows \u672c\u6a5f\u5e33\u865f\u7684\u5bc6\u78bc\uff0c\u9084\u53ef\u4ee5\u4e00\u6b21\u6539\u591a\u53f0!!",description:"\u5728\u7ba1\u7406 Server \u7684\u6642\u5019\uff0c\u5076\u723e\u6703\u51fa\u73fe\u9700\u8981\u66f4\u6539\u67d0\u53f0\u6a5f\u5668\u7ba1\u7406\u8005\u5bc6\u78bc\u7684\u60c5\u6cc1\u3002\u5982\u679c\u8981\u6539\u7684\u6a5f\u5668\u53ea\u6709\u4e00\u5169\u53f0\u7684\u8a71\uff0c\u9084\u53ef\u4ee5\u8f9b\u82e6\u4e00\u9ede\u76f4\u63a5\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u7684\u65b9\u5f0f\u9023\u904e\u53bb\u6539\u3002\u4f46\u662f\uff0c\u5982\u679c\u4e00\u6b21\u8981\u6539\u4e94\u53f0\u4ee5\u4e0a\uff0c\u751a\u81f3\u662f\u5341\u53f0\u4ee5\u4e0a\uff0c\u53ef\u80fd\u5c31\u6703\u9700\u8981\u66f4\u8070\u660e\u4e00\u9ede\u7684\u65b9\u6cd5\u4e86\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7"],keywords:["Windows","Change local administrator password","PsTools","PsPasswd"]},i=void 0,p={permalink:"/blog/2022/09/14/change-windows-local-admin-password-remotely",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-09-14-change-windows-local-admin-password-remotely/index.md",source:"@site/blog/2022-09-14-change-windows-local-admin-password-remotely/index.md",title:"\u5f9e\u9060\u7aef\u4fee\u6539 Windows \u672c\u6a5f\u5e33\u865f\u7684\u5bc6\u78bc\uff0c\u9084\u53ef\u4ee5\u4e00\u6b21\u6539\u591a\u53f0!!",description:"\u5728\u7ba1\u7406 Server \u7684\u6642\u5019\uff0c\u5076\u723e\u6703\u51fa\u73fe\u9700\u8981\u66f4\u6539\u67d0\u53f0\u6a5f\u5668\u7ba1\u7406\u8005\u5bc6\u78bc\u7684\u60c5\u6cc1\u3002\u5982\u679c\u8981\u6539\u7684\u6a5f\u5668\u53ea\u6709\u4e00\u5169\u53f0\u7684\u8a71\uff0c\u9084\u53ef\u4ee5\u8f9b\u82e6\u4e00\u9ede\u76f4\u63a5\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u7684\u65b9\u5f0f\u9023\u904e\u53bb\u6539\u3002\u4f46\u662f\uff0c\u5982\u679c\u4e00\u6b21\u8981\u6539\u4e94\u53f0\u4ee5\u4e0a\uff0c\u751a\u81f3\u662f\u5341\u53f0\u4ee5\u4e0a\uff0c\u53ef\u80fd\u5c31\u6703\u9700\u8981\u66f4\u8070\u660e\u4e00\u9ede\u7684\u65b9\u6cd5\u4e86\u3002",date:"2022-09-14T00:00:00.000Z",formattedDate:"2022\u5e749\u670814\u65e5",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"\u5c0f\u6280\u5de7",permalink:"/blog/tags/\u5c0f\u6280\u5de7"}],readingTime:4.22,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u5f9e\u9060\u7aef\u4fee\u6539 Windows \u672c\u6a5f\u5e33\u865f\u7684\u5bc6\u78bc\uff0c\u9084\u53ef\u4ee5\u4e00\u6b21\u6539\u591a\u53f0!!",description:"\u5728\u7ba1\u7406 Server \u7684\u6642\u5019\uff0c\u5076\u723e\u6703\u51fa\u73fe\u9700\u8981\u66f4\u6539\u67d0\u53f0\u6a5f\u5668\u7ba1\u7406\u8005\u5bc6\u78bc\u7684\u60c5\u6cc1\u3002\u5982\u679c\u8981\u6539\u7684\u6a5f\u5668\u53ea\u6709\u4e00\u5169\u53f0\u7684\u8a71\uff0c\u9084\u53ef\u4ee5\u8f9b\u82e6\u4e00\u9ede\u76f4\u63a5\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u7684\u65b9\u5f0f\u9023\u904e\u53bb\u6539\u3002\u4f46\u662f\uff0c\u5982\u679c\u4e00\u6b21\u8981\u6539\u4e94\u53f0\u4ee5\u4e0a\uff0c\u751a\u81f3\u662f\u5341\u53f0\u4ee5\u4e0a\uff0c\u53ef\u80fd\u5c31\u6703\u9700\u8981\u66f4\u8070\u660e\u4e00\u9ede\u7684\u65b9\u6cd5\u4e86\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7"],keywords:["Windows","Change local administrator password","PsTools","PsPasswd"]},nextItem:{title:"\u4fee\u5fa9 Windows 11 \u958b\u59cb\u529f\u80fd\u8868\u53f3\u9375\u9078\u55ae\u6d88\u5931\u7684\u554f\u984c",permalink:"/blog/2022/09/01/fix-windows-11-missing-context-menu-on-start-button"}},u={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u53d6\u5f97 PsPasswd.exe",id:"\u53d6\u5f97-pspasswdexe",level:2},{value:"\u6240\u4ee5\u6211\u8a72\u600e\u9ebc\u4f7f\u7528\u5462?",id:"\u6240\u4ee5\u6211\u8a72\u600e\u9ebc\u4f7f\u7528\u5462",level:2},{value:"\u4fee\u6539\u4e00\u53f0\u6a5f\u5668\u7684\u5bc6\u78bc",id:"\u4fee\u6539\u4e00\u53f0\u6a5f\u5668\u7684\u5bc6\u78bc",level:3},{value:"\u4fee\u6539\u591a\u53f0\u6a5f\u5668\u7684\u5bc6\u78bc",id:"\u4fee\u6539\u591a\u53f0\u6a5f\u5668\u7684\u5bc6\u78bc",level:3},{value:"\u7528\u9017\u865f\u5206\u9694\u591a\u53f0\u6a5f\u5668",id:"\u7528\u9017\u865f\u5206\u9694\u591a\u53f0\u6a5f\u5668",level:4},{value:"\u4f7f\u7528\u6a5f\u5668\u6e05\u55ae\u6a94",id:"\u4f7f\u7528\u6a5f\u5668\u6e05\u55ae\u6a94",level:4},{value:"\u4fee\u6539\u6574\u500b\u7db2\u57df\u6240\u6709\u6a5f\u5668\u7684\u5bc6\u78bc",id:"\u4fee\u6539\u6574\u500b\u7db2\u57df\u6240\u6709\u6a5f\u5668\u7684\u5bc6\u78bc",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5728\u7ba1\u7406 Server \u7684\u6642\u5019\uff0c\u5076\u723e\u6703\u51fa\u73fe\u9700\u8981\u66f4\u6539\u67d0\u53f0\u6a5f\u5668\u7ba1\u7406\u8005\u5bc6\u78bc\u7684\u60c5\u6cc1\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u6539\u7684\u6a5f\u5668\u53ea\u6709\u4e00\u5169\u53f0\u7684\u8a71\uff0c\u9084\u53ef\u4ee5\u8f9b\u82e6\u4e00\u9ede\u76f4\u63a5\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u7684\u65b9\u5f0f\u9023\u904e\u53bb\u6539\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u4e00\u6b21\u8981\u6539\u4e94\u53f0\u4ee5\u4e0a\uff0c\u751a\u81f3\u662f\u5341\u53f0\u4ee5\u4e0a\uff0c\u4e00\u53f0\u4e00\u53f0\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u6162\u6162\u6539\u53ef\u80fd\u5c31\u6c92\u90a3\u9ebc\u6709\u6548\u7387\u4e86\u3002"),(0,a.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u5206\u4eab\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"PsPasswd.exe")," \u4f86\u66f4\u6539\u9060\u7aef Windows \u88e1\u67d0\u500b\u5e33\u865f\u7684\u5bc6\u78bc\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u6700\u91cd\u8981\u7684\u662f\uff0c\u5b83\u9084\u652f\u63f4\u4e00\u6b21\u5c0d\u4e00\u6574\u6279\u7684\u6a5f\u5668\u9032\u884c\u4fee\u6539!!"),(0,a.kt)("h2",{id:"\u53d6\u5f97-pspasswdexe"},"\u53d6\u5f97 PsPasswd.exe"),(0,a.kt)("p",null,"PsPasswd.exe \u662f PsTools \u88e1\u7684\u4e00\u500b\u5de5\u5177\u3002"),(0,a.kt)("p",null,"\u800c PsTools \u5247\u662f\u7531\u5fae\u8edf Azure CTO - Mark Russinovich \u6240\u958b\u767c\u7684\u4e00\u7cfb\u5217\u5c0f\u5de5\u5177\u7684\u96c6\u5408\u3002"),(0,a.kt)("p",null,"\u4e4b\u6240\u4ee5\u6703\u53d6\u540d\u53eb PsTools\uff0c\u662f\u56e0\u70ba\u5b83\u7684\u7b2c\u4e00\u500b\u5c0f\u5de5\u5177 PsList(\u7528\u4f86\u986f\u793a\u76ee\u524d\u57f7\u884c\u4e2d\u7684\u7a0b\u5e8f\u6e05\u55ae) \u81f4\u656c\u4e86\u6a19\u6e96 UNIX \u4f5c\u696d\u7cfb\u7d71\u88e1\u986f\u793a\u76ee\u524d\u57f7\u884c\u4e2d\u7684\u7a0b\u5e8f\u6e05\u55ae\u7684\u6307\u4ee4\u5c31\u53eb ",(0,a.kt)("inlineCode",{parentName:"p"},"PS"),"\uff0c\u800c\u4ed6\u628a\u6240\u6709\u5c0f\u5de5\u5177\u90fd\u52a0\u4e0a Ps \u9019\u500b\u524d\u7db4\u8a5e\u4f86\u8b93\u5b83\u5011\u770b\u8d77\u4f86\u662f\u4e00\u500b\u540c\u6346\u5305\u7684\u6982\u5ff5\uff0c\u6574\u500b\u5957\u88dd\u5c31\u53eb PsTools\u3002"),(0,a.kt)("p",null,"\u8aaa\u5b8c\u6545\u4e8b\uff0cPsTools \u7684\u4e0b\u8f09\u9ede\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://download.sysinternals.com/files/PSTools.zip",title:"Download PsTools Suite"},"\u9019\u88e1"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u8f09\u4e26\u4e14\u89e3\u58d3\u7e2e\u4e4b\u5f8c\uff0c\u4f60\u61c9\u8a72\u5c31\u6703\u770b\u5230\u88e1\u9762\u5305\u542b\u4e86\u4eca\u5929\u7684\u4e3b\u89d2 - ",(0,a.kt)("inlineCode",{parentName:"p"},"PsPasswd.exe"),"\u3002"),(0,a.kt)("h2",{id:"\u6240\u4ee5\u6211\u8a72\u600e\u9ebc\u4f7f\u7528\u5462"},"\u6240\u4ee5\u6211\u8a72\u600e\u9ebc\u4f7f\u7528\u5462?"),(0,a.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u900f\u904e\u547d\u4ee4\u63d0\u793a\u5b57\u5143\u5207\u63db\u5230 PsPasswd.exe \u7684\u6240\u5728\u76ee\u9304\uff0c\u7136\u5f8c\u900f\u904e\u4e0b\u9762\u7684\u6307\u4ee4\u4f86\u57f7\u884c\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"pspasswd {\\\\\u9060\u7aef\u6a5f\u5668\u7684\u540d\u7a31\u6216 IP} -u {\u64c1\u6709\u9060\u7aef\u7ba1\u7406\u8005\u6b0a\u9650\u7684\u5e33\u865f} -p {\u64c1\u6709\u9060\u7aef\u7ba1\u7406\u8005\u6b0a\u9650\u5e33\u865f\u7684\u5bc6\u78bc} {\u8981\u88ab\u66f4\u6539\u5bc6\u78bc\u7684\u9060\u7aef\u5e33\u865f} {\u65b0\u5bc6\u78bc}\n")),(0,a.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5ffd\u7565\u9060\u7aef\u6a5f\u5668\u7684\u540d\u7a31\u6216 IP \u7684\u8a71\uff0c\u6307\u4ee4\u6703\u5728\u672c\u6a5f\u57f7\u884c\uff0c\u4e5f\u5c31\u662f\u6703\u4fee\u6539\u5230\u672c\u6a5f\u4e2d\u6307\u5b9a\u5e33\u865f\u7684\u5bc6\u78bc\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6c92\u8f38\u5165 -p \u53c3\u6578\u7684\u8a71\uff0c\u5c46\u6642\u6703\u8df3\u51fa\u4e00\u500b\u8996\u7a97\u8b93\u6211\u5011\u8f38\u5165\u5bc6\u78bc\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6c92\u8f38\u5165\u65b0\u5bc6\u78bc\u7684\u8a71\uff0c\u9810\u8a2d\u6703\u4f7f\u7528 NULL \u4f5c\u70ba\u65b0\u7684\u5bc6\u78bc\uff0c\u4e5f\u5c31\u662f\u4e0d\u7528\u5bc6\u78bc\u7684\u610f\u601d\u3002"))),(0,a.kt)("h3",{id:"\u4fee\u6539\u4e00\u53f0\u6a5f\u5668\u7684\u5bc6\u78bc"},"\u4fee\u6539\u4e00\u53f0\u6a5f\u5668\u7684\u5bc6\u78bc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"pspasswd \\\\192.168.173.101 -u ouch1978 -p ILoveOuch1978 Administrator MyNewPassword\n")),(0,a.kt)("h3",{id:"\u4fee\u6539\u591a\u53f0\u6a5f\u5668\u7684\u5bc6\u78bc"},"\u4fee\u6539\u591a\u53f0\u6a5f\u5668\u7684\u5bc6\u78bc"),(0,a.kt)("h4",{id:"\u7528\u9017\u865f\u5206\u9694\u591a\u53f0\u6a5f\u5668"},"\u7528\u9017\u865f\u5206\u9694\u591a\u53f0\u6a5f\u5668"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u6539\u591a\u53f0\u7684\u8a71\uff0c\u53ef\u4ee5\u7528\u9017\u865f\u5206\u9694\u591a\u53f0\u96fb\u8166\u7684\u540d\u7a31\u6216\u662f IP\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"pspasswd \\\\192.168.173.101,\\\\192.168.173.102,\\\\192.168.173.103 -u ouch1978 -p ILoveOuch1978 Administrator MyNewPassword\n")),(0,a.kt)("h4",{id:"\u4f7f\u7528\u6a5f\u5668\u6e05\u55ae\u6a94"},"\u4f7f\u7528\u6a5f\u5668\u6e05\u55ae\u6a94"),(0,a.kt)("p",null,"\u6211\u5011\u4e5f\u53ef\u4ee5\u628a\u6240\u6709\u7684\u6a5f\u5668\u540d\u7a31\u6216 IP \u653e\u5230\u4e00\u500b\u6587\u5b57\u6a94\u88e1\uff0c\u518d\u628a\u5b83\u9935\u7d66 PsPasswd.exe\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain",metastring:"title=C:\\ServerList.txt",title:"C:\\ServerList.txt"},"192.168.173.101\n192.168.173.102\n192.168.173.103\nMyWindows11\n")),(0,a.kt)("p",null,"\u7136\u5f8c\u57f7\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"pspasswd @C:\\ServerList.txt -u ouch1978 -p ILoveOuch1978 Administrator MyNewPassword\n")),(0,a.kt)("p",null,"\u5c31\u53ef\u4ee5\u4e00\u6b21\u91dd\u5c0d ServerList.txt \u88e1\u9762\u5305\u542b\u7684\u6240\u6709\u96fb\u8166\u9032\u884c\u4fee\u6539\u3002"),(0,a.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6e05\u55ae\u6a94\u88e1\u9762\u7684\u6bcf\u7b46\u6a5f\u5668\u540d\u7a31\u6216 IP \u524d\u9762\u90fd\u4e0d\u7528\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"\\\\"),"\u3002")),(0,a.kt)("h3",{id:"\u4fee\u6539\u6574\u500b\u7db2\u57df\u6240\u6709\u6a5f\u5668\u7684\u5bc6\u78bc"},"\u4fee\u6539\u6574\u500b\u7db2\u57df\u6240\u6709\u6a5f\u5668\u7684\u5bc6\u78bc"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u4e00\u6b21\u91dd\u5c0d\u6574\u500b\u7db2\u57df\u4e2d\u6240\u6709\u96fb\u8166\u9032\u884c\u4fee\u6539\u7684\u8a71\uff0c\u53ef\u4ee5\u4f7f\u7528\u842c\u7528\u5b57\u5143\u4f86\u9054\u6210\u76ee\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"pspasswd \\\\* -u ouch1978 -p ILoveOuch1978 Administrator MyNewPassword\n")),(0,a.kt)("admonition",{title:"\u8b66\u544a",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u4fee\u6539\u6574\u500b\u7db2\u57df\u4e2d\u6240\u6709\u96fb\u8166\u7684\u5bc6\u78bc\u662f\u4e00\u4ef6\u975e\u5e38\u5177\u6709\u98a8\u96aa\u7684\u884c\u70ba\uff0c\u8acb\u52d9\u5fc5\u91cd\u8907\u78ba\u8a8d\u81ea\u5df1\u77e5\u9053\u81ea\u5df1\u5728\u5e79\u561b\u518d\u9001\u51fa\u6307\u4ee4\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u3002"))}m.isMDXComponent=!0}}]);