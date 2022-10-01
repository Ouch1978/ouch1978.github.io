"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[2300],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(n),d=i,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,a(a({ref:e},p),{},{components:n})):r.createElement(f,a({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,a=new Array(l);a[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},84751:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=n(83117),i=n(80102),l=(n(67294),n(3905)),a=["components"],o={title:"\u4e00\u5f35\u5716\u770b\u61c2\u540c\u6b65\u3001\u975e\u540c\u6b65\u8207\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u5225",description:"\u540c\u6b65\u3001\u975e\u540c\u6b65\u548c\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u5225\u5e38\u5e38\u662f\u9762\u8a66\u7684\u5fc5\u8003\u984c\u4e4b\u4e00\u3002\u61c9\u8a72\u4e5f\u6709\u5f88\u591a\u4eba\u4e0d\u53ea\u770b\u904e\u3001\u7528\u904e\uff0c\u751a\u81f3\u5df2\u7d93\u5beb\u5230\u7528\u8d77\u4f86\u50cf\u5403\u98ef\u559d\u6c34\u4e00\u6a23\u7684\u81ea\u7136\u3002\u4f46\u662f\uff0c\u7576\u9047\u5230\u6709\u4eba\u8981\u6c42\u7528\u6bd4\u8f03\u6dfa\u986f\u6613\u61c2\u7684\u65b9\u5f0f\u4f86\u89e3\u91cb\u9019\u4e09\u8005\u7684\u5dee\u5225\u6642\uff0c\u6211\u6562\u8aaa\uff0c\u6709\u5f88\u591a\u4eba\u5c31\u662f\u8b1b\u4e0d\u51fa\u4f86\u3002\u6211\u5e7e\u4e4e\u6562\u9019\u6a23\u8b1b\uff0c\u4f46\u6211\u4e5f\u4e0d\u6562\u5b8c\u5168\u5426\u8a8d\uff0c\u9084\u662f\u6709\u4e9b\u4eba\u53ef\u4ee5\u56de\u7b54\u5f97\u51fa\u4f86\u3002",authors:"ouch1978",image:"./difference-between-sync-async-and-multi-thread.png",tags:["Programming","\u4e00\u5f35\u5716\u770b\u61c2\u7cfb\u5217"],keywords:["\u9762\u8a66","\u57fa\u672c\u89c0\u5ff5","\u591a\u57f7\u884c\u7dd2","\u540c\u6b65","\u975e\u540c\u6b65"]},u=void 0,c={permalink:"/blog/2022/09/25/understand-sync-async-and-multi-thread-with-one-pic",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-09-25-understand-sync-async-and-multi-thread-with-one-pic/index.md",source:"@site/blog/2022-09-25-understand-sync-async-and-multi-thread-with-one-pic/index.md",title:"\u4e00\u5f35\u5716\u770b\u61c2\u540c\u6b65\u3001\u975e\u540c\u6b65\u8207\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u5225",description:"\u540c\u6b65\u3001\u975e\u540c\u6b65\u548c\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u5225\u5e38\u5e38\u662f\u9762\u8a66\u7684\u5fc5\u8003\u984c\u4e4b\u4e00\u3002\u61c9\u8a72\u4e5f\u6709\u5f88\u591a\u4eba\u4e0d\u53ea\u770b\u904e\u3001\u7528\u904e\uff0c\u751a\u81f3\u5df2\u7d93\u5beb\u5230\u7528\u8d77\u4f86\u50cf\u5403\u98ef\u559d\u6c34\u4e00\u6a23\u7684\u81ea\u7136\u3002\u4f46\u662f\uff0c\u7576\u9047\u5230\u6709\u4eba\u8981\u6c42\u7528\u6bd4\u8f03\u6dfa\u986f\u6613\u61c2\u7684\u65b9\u5f0f\u4f86\u89e3\u91cb\u9019\u4e09\u8005\u7684\u5dee\u5225\u6642\uff0c\u6211\u6562\u8aaa\uff0c\u6709\u5f88\u591a\u4eba\u5c31\u662f\u8b1b\u4e0d\u51fa\u4f86\u3002\u6211\u5e7e\u4e4e\u6562\u9019\u6a23\u8b1b\uff0c\u4f46\u6211\u4e5f\u4e0d\u6562\u5b8c\u5168\u5426\u8a8d\uff0c\u9084\u662f\u6709\u4e9b\u4eba\u53ef\u4ee5\u56de\u7b54\u5f97\u51fa\u4f86\u3002",date:"2022-09-25T00:00:00.000Z",formattedDate:"2022\u5e749\u670825\u65e5",tags:[{label:"Programming",permalink:"/blog/tags/programming"},{label:"\u4e00\u5f35\u5716\u770b\u61c2\u7cfb\u5217",permalink:"/blog/tags/\u4e00\u5f35\u5716\u770b\u61c2\u7cfb\u5217"}],readingTime:4.835,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u4e00\u5f35\u5716\u770b\u61c2\u540c\u6b65\u3001\u975e\u540c\u6b65\u8207\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u5225",description:"\u540c\u6b65\u3001\u975e\u540c\u6b65\u548c\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u5225\u5e38\u5e38\u662f\u9762\u8a66\u7684\u5fc5\u8003\u984c\u4e4b\u4e00\u3002\u61c9\u8a72\u4e5f\u6709\u5f88\u591a\u4eba\u4e0d\u53ea\u770b\u904e\u3001\u7528\u904e\uff0c\u751a\u81f3\u5df2\u7d93\u5beb\u5230\u7528\u8d77\u4f86\u50cf\u5403\u98ef\u559d\u6c34\u4e00\u6a23\u7684\u81ea\u7136\u3002\u4f46\u662f\uff0c\u7576\u9047\u5230\u6709\u4eba\u8981\u6c42\u7528\u6bd4\u8f03\u6dfa\u986f\u6613\u61c2\u7684\u65b9\u5f0f\u4f86\u89e3\u91cb\u9019\u4e09\u8005\u7684\u5dee\u5225\u6642\uff0c\u6211\u6562\u8aaa\uff0c\u6709\u5f88\u591a\u4eba\u5c31\u662f\u8b1b\u4e0d\u51fa\u4f86\u3002\u6211\u5e7e\u4e4e\u6562\u9019\u6a23\u8b1b\uff0c\u4f46\u6211\u4e5f\u4e0d\u6562\u5b8c\u5168\u5426\u8a8d\uff0c\u9084\u662f\u6709\u4e9b\u4eba\u53ef\u4ee5\u56de\u7b54\u5f97\u51fa\u4f86\u3002",authors:"ouch1978",image:"./difference-between-sync-async-and-multi-thread.png",tags:["Programming","\u4e00\u5f35\u5716\u770b\u61c2\u7cfb\u5217"],keywords:["\u9762\u8a66","\u57fa\u672c\u89c0\u5ff5","\u591a\u57f7\u884c\u7dd2","\u540c\u6b65","\u975e\u540c\u6b65"]},nextItem:{title:"\u5ef6\u9577 MSDTC \u5206\u6563\u5f0f\u4ea4\u6613\u9023\u7dda\u5feb\u53d6\u7684\u6642\u9593\uff0c\u63d0\u5347\u7cfb\u7d71\u6548\u80fd",permalink:"/blog/2022/09/24/prevent-msdtc-connection-being-recycled"}},p={image:n(49481).Z,authorsImageUrls:[void 0]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6240\u4ee5\uff0c\u6211\u8aaa\u90a3\u5f35\u5716\u5462?",id:"\u6240\u4ee5\u6211\u8aaa\u90a3\u5f35\u5716\u5462",level:2},{value:"\u540c\u6b65",id:"\u540c\u6b65",level:3},{value:"\u975e\u540c\u6b65",id:"\u975e\u540c\u6b65",level:3},{value:"\u591a\u57f7\u884c\u7dd2",id:"\u591a\u57f7\u884c\u7dd2",level:3},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}],s={toc:m};function d(t){var e=t.components,o=(0,i.Z)(t,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u540c\u6b65\u3001\u975e\u540c\u6b65\u548c\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u5225\u5e38\u5e38\u662f\u9762\u8a66\u7684\u5fc5\u8003\u984c\u4e4b\u4e00\u3002"),(0,l.kt)("p",null,"\u61c9\u8a72\u4e5f\u6709\u5f88\u591a\u4eba\u4e0d\u53ea\u770b\u904e\u3001\u7528\u904e\uff0c\u751a\u81f3\u5df2\u7d93\u5beb\u5230\u7528\u8d77\u4f86\u50cf\u5403\u98ef\u559d\u6c34\u4e00\u6a23\u7684\u81ea\u7136\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u7576\u9047\u5230\u6709\u4eba\u8981\u6c42\u7528\u6bd4\u8f03\u6dfa\u986f\u6613\u61c2\u7684\u65b9\u5f0f\u4f86\u89e3\u91cb\u9019\u4e09\u8005\u7684\u5dee\u5225\u6642\uff0c\u6211\u6562\u8aaa\uff0c\u6709\u5f88\u591a\u4eba\u5c31\u662f\u8b1b\u4e0d\u51fa\u4f86\u3002"),(0,l.kt)("p",null,"\u6211\u5e7e\u4e4e\u6562\u9019\u6a23\u8b1b\uff0c\u4f46\u6211\u4e5f\u4e0d\u6562\u5b8c\u5168\u5426\u8a8d\uff0c\u9084\u662f\u6709\u4e9b\u4eba\u53ef\u4ee5\u56de\u7b54\u5f97\u51fa\u4f86\u3002(\u5582!~)"),(0,l.kt)("h2",{id:"\u6240\u4ee5\u6211\u8aaa\u90a3\u5f35\u5716\u5462"},"\u6240\u4ee5\uff0c\u6211\u8aaa\u90a3\u5f35\u5716\u5462?"),(0,l.kt)("p",null,"\u9019\u908a\u5c31\u4ee5\u5e38\u898b\u7684\u901f\u98df\u5e97\u7576\u4f8b\u5b50\uff0c\u4f86\u8aaa\u660e\u540c\u6b65\u3001\u975e\u540c\u6b65\u548c\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u7570\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u540c\u6b65\u3001\u975e\u540c\u6b65\u8207\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u7570",src:n(49481).Z,title:"\u540c\u6b65\u3001\u975e\u540c\u6b65\u8207\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u7570 - \u4ee5\u901f\u98df\u5e97\u70ba\u4f8b",width:"2197",height:"955"})),(0,l.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"tip"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u628a\u5e97\u54e1\u770b\u4f5c\u662f\u57f7\u884c\u7dd2\uff0c\u5c31\u53ef\u4ee5\u548c\u7a0b\u5f0f\u904b\u4f5c\u7684\u65b9\u5f0f\u4e92\u76f8\u5c0d\u61c9\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5012\u98f2\u6599\u3001\u70b8\u85af\u689d\u548c\u714e\u8089\u6392\u7b49\u7b49\u52d5\u4f5c\u53ef\u4ee5\u5c0d\u61c9\u5230\u7a0b\u5f0f\u4e2d\u9700\u8981\u7b49\u5f85 I/O \u7684\u5404\u7a2e\u52d5\u4f5c\u3002"))),(0,l.kt)("h3",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,l.kt)("p",null,"\u540c\u6b65\u7684\u904b\u4f5c\u65b9\u5f0f\u61c9\u8a72\u662f\u6700\u5e38\u898b\u7684\u7a0b\u5f0f\u904b\u4f5c\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u5f9e\u5716\u88e1\u6211\u5011\u53ef\u4ee5\u770b\u5230\uff0c\u7576\u5e97\u54e1\u4f5c\u4e86\u4e00\u500b\u52d5\u4f5c\u4e4b\u5f8c\uff0c\u4e00\u5b9a\u5f97\u8981\u7b49\u5230\u8a72\u52d5\u4f5c\u5b8c\u6210\u3001\u53d6\u5f97\u56de\u61c9\u4e4b\u5f8c\uff0c\u624d\u80fd\u7e7c\u7e8c\u4e0b\u4e00\u500b\u52d5\u4f5c\u3002"),(0,l.kt)("p",null,"\u5728\u9019\u6a23\u7684\u904b\u4f5c\u65b9\u5f0f\u4e0b\uff0c\u6703\u82b1\u6975\u5927\u7684\u6642\u9593\u5728\u7a7a\u8f49\u548c\u7b49\u5f85\u4e0a\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u5728\u5927\u90e8\u4efd\u7684\u540c\u6b65\u8655\u7406\u4e0b\uff0c\u6548\u7387\u90fd\u662f\u76f8\u5c0d\u5dee\u7684\u3002"),(0,l.kt)("h3",{id:"\u975e\u540c\u6b65"},"\u975e\u540c\u6b65"),(0,l.kt)("p",null,"\u975e\u540c\u6b65\u548c\u540c\u6b65\u6700\u5927\u7684\u5dee\u5225\uff0c\u5c31\u662f\u5e97\u54e1\u4e0d\u7528\u50bb\u50bb\u7684\u7b49\u5f85\u4e0a\u4e00\u500b\u52d5\u4f5c\u5b8c\u6210\uff0c\u5c31\u53ef\u4ee5\u958b\u59cb\u53bb\u8655\u7406\u4e0b\u4e00\u500b\u52d5\u4f5c\u3002"),(0,l.kt)("p",null,"\u7b49\u5230\u524d\u9762\u7684\u5de5\u4f5c\u5b8c\u6210\uff0c\u4ed6\u518d\u7e7c\u7e8c\u5f80\u5f8c\u8655\u7406\u5c31\u597d\u3002"),(0,l.kt)("p",null,"\u5f9e\u5716\u88e1\u53ef\u4ee5\u660e\u986f\u7684\u770b\u5f97\u51fa\u4f86\uff0c\u975e\u540c\u6b65\u548c\u540c\u6b65\u76f8\u6bd4\uff0c\u96d6\u7136\u90fd\u662f\u53ea\u6709\u4e00\u500b\u5e97\u54e1\uff0c\u4f46\u662f\u6574\u500b\u51fa\u9910\u901f\u5ea6\u5feb\u4e86\u8a31\u591a\u3002"),(0,l.kt)("p",null,"\u4e5f\u56e0\u70ba\u7b49\u5f85\u7684\u6642\u9593\u9084\u53ef\u4ee5\u8655\u7406\u5176\u5b83\u5de5\u4f5c\u7684\u95dc\u4fc2\uff0c\u771f\u6b63\u9592\u7f6e\u7684\u6642\u9593\u4e5f\u5927\u5e45\u7684\u7e2e\u77ed\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u90fd\u5728\u55ae\u4e00\u54e1\u5de5\u7684\u60c5\u6cc1\u4e0b\uff0c\u975e\u540c\u6b65\u7684\u6548\u7387\u662f\u76f8\u5c0d\u9ad8\u7684\u3002"),(0,l.kt)("admonition",{title:"\u8b66\u544a",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"\u975e\u540c\u6b65\u4e26\u4e0d\u6703\u591a\u751f\u51fa\u4e00\u500b\u57f7\u884c\u7dd2!!",(0,l.kt)("br",null),"\n\u975e\u540c\u6b65\u4e26\u4e0d\u6703\u591a\u751f\u51fa\u4e00\u500b\u57f7\u884c\u7dd2!!",(0,l.kt)("br",null),"\n\u975e\u540c\u6b65\u4e26\u4e0d\u6703\u591a\u751f\u51fa\u4e00\u500b\u57f7\u884c\u7dd2!!",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"admonition"},"\u5f88\u91cd\u8981\uff0c\u6240\u4ee5\u8981\u8aaa\u4e09\u6b21\u3002")),(0,l.kt)("h3",{id:"\u591a\u57f7\u884c\u7dd2"},"\u591a\u57f7\u884c\u7dd2"),(0,l.kt)("p",null,"\u591a\u57f7\u884c\u7dd2\u6700\u63a5\u8fd1\u73fe\u5be6\u751f\u6d3b\u4e2d\u5feb\u9910\u5e97\u7684\u904b\u4f5c\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u7531\u4e00\u500b\u6ac3\u6aaf\u8ca0\u8cac\u9ede\u9910\u548c\u6536\u96c6\u6240\u6709\u9910\u9ede\uff0c\u5176\u5b83\u5de5\u4f5c\u5247\u7531\u5176\u4ed6\u7684\u4eba\u8ca0\u8cac\uff0c\u800c\u4e14\u4e09\u500b\u4eba\u90fd\u662f\u540c\u6642\u5e73\u884c\u8655\u7406\u7684\u3002"),(0,l.kt)("p",null,"\u5728\u5927\u591a\u6578\u7684\u6b63\u5e38\u60c5\u6cc1\u4e0b\uff0c\u591a\u57f7\u884c\u7dd2\u7684\u6548\u7387\u6703\u662f\u4e09\u8005\u88e1\u9762\u6700\u597d\u7684\u3002"),(0,l.kt)("p",null,"\u4e0d\u904e\uff0c\u5728\u5e97\u54e1\u8d8a\u591a\u7684\u60c5\u6cc1\u4e0b\uff0c\u6e9d\u901a\u7684\u6210\u672c\u5c31\u8d8a\u9ad8\uff0c\u4e00\u500b\u4eba\u51fa\u932f\u5c31\u53ef\u80fd\u5f71\u97ff\u5230\u6574\u500b\u51fa\u9910\u7684\u6d41\u7a0b\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u591a\u57f7\u884c\u7dd2\u6642\u4e5f\u4e00\u6a23\uff0c\u57f7\u884c\u7dd2\u8d8a\u591a\uff0cContext switch \u7684\u6210\u672c\u4e5f\u8d8a\u9ad8\uff0c\u5c0d\u5354\u8abf\u5404\u57f7\u884c\u7dd2\u7684\u8981\u6c42\u5c31\u8d8a\u56b4\u683c\uff0c\u5404\u57f7\u884c\u7dd2\u7684\u5bb9\u932f\u7387\u4e5f\u8d8a\u4f4e\u3002"),(0,l.kt)("p",null,"\u5728\u73fe\u5be6\u751f\u6d3b\u4e2d\u7684\u901f\u98df\u5e97\u88e1\uff0c\u4e5f\u5e38\u5e38\u53ef\u4ee5\u770b\u5230\u7576\u5e97\u88e1\u4e00\u5fd9\u8d77\u4f86\u4e4b\u5f8c\uff0c\u6709\u4eba\u958b\u59cb\u4ecb\u5165\u5176\u4ed6\u4eba\u7684\u5de5\u4f5c\uff0c\u63a5\u8457\u5c31\u6574\u500b\u5834\u9762\u958b\u59cb\u5927\u4e82\uff0c\u6709\u6253\u5de5\u904e\u7684\u670b\u53cb\u61c9\u8a72\u5f88\u80fd\u9ad4\u6703\u3002"),(0,l.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0a\u9762\u7684\u5716\u5f88\u523b\u610f\u7684\u907f\u958b\u8cc7\u6e90\u5171\u7528\u7684\u554f\u984c\uff0c\u4f46\u662f\u5728\u73fe\u5be6\u7684\u7a0b\u5f0f\u88e1\u9762\uff0c\u89e3\u6c7a\u5404\u8cc7\u6e90\u4e4b\u9593\u7684\u885d\u7a81\u4e5f\u662f\u5f88\u91cd\u8981\u7684\u4e00\u74b0\u3002")),(0,l.kt)("h2",{id:"\u7d50\u8a9e"},"\u7d50\u8a9e"),(0,l.kt)("p",null,"\u5e0c\u671b\u9019\u7bc7\u6587\u7ae0\u53ef\u4ee5\u5e6b\u52a9\u5230\u5df2\u7d93\u7528\u5230\u9ebb\u6728\uff0c\u4f46\u662f\u9084\u60f3\u4e0d\u51fa\u4e00\u500b\u7c21\u55ae\u89e3\u91cb\u9019\u4e09\u8005\u7684\u670b\u53cb\u3002"),(0,l.kt)("p",null,"\u5c24\u5176\u662f\u9700\u8981\u9762\u8a66\u7684\u670b\u53cb\uff0c\u7e3d\u4e0d\u80fd\u56de\u9762\u8a66\u5b98\u518d\u554f\u5c31\u662f\u5c45\u5fc3\u53f5\u6e2c\uff0c\u7562\u7adf\u6a5f\u6703\u53ef\u80fd\u53ea\u6709\u4e00\u6b21\uff0c\u665a\u4e86\u4eba\u5bb6\u5c31\u4e0d\u8981\u4e86\u3002(\u9003~~)"))}d.isMDXComponent=!0},49481:function(t,e,n){e.Z=n.p+"assets/images/difference-between-sync-async-and-multi-thread-3e2596569ce293b96b8b38c99fe67078.png"}}]);