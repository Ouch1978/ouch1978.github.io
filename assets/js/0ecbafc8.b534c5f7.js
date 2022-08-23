"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[9492],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],l={title:"\u81ea\u88fd Modal \u5143\u4ef6",description:"\u6709\u4f7f\u7528\u904e Silverlight/WPF \u7684\u670b\u53cb\u5011\u4e0d\u77e5\u9053\u6709\u6c92\u6709\u9047\u904e\u4e00\u500b\u554f\u984c\uff1a\u6709\u6642\u5019\u60f3\u8981\u8df3\u51fa\u4e00\u500b\u5143\u4ef6\u8ddf\u4f7f\u7528\u8005\u4e92\u52d5\uff0c\u800c\u4e14\u8981\u9396\u4f4f\u539f\u4f86\u7684\u4e3b\u756b\u9762\uff0c\u7b49\u4f7f\u7528\u8005\u64cd\u4f5c\u5b8c\u624d\u80fd\u7e7c\u7e8c\u64cd\u4f5c\u4e3b\u756b\u9762\uff0c\u53ef\u662f\u7528 MessageBox \u7684\u8a71\u529f\u80fd\u4e0d\u5920\uff0c\u7528 ChildWindow \u7684\u8a71\u529f\u80fd\u53c8\u592a\u591a\u6216\u662f\u592a\u8907\u96dc\u4e4b\u985e\u7684\u554f\u984c...",authors:"ouch1978",tags:["Silverlight"],keywords:["Silverlight","modal","control","dialog"]},c=void 0,u={permalink:"/blog/2010/10/26/silverlight-fake-modal-dialog",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2010-10-26-silverlight-fake-modal-dialog/index.md",source:"@site/blog/2010-10-26-silverlight-fake-modal-dialog/index.md",title:"\u81ea\u88fd Modal \u5143\u4ef6",description:"\u6709\u4f7f\u7528\u904e Silverlight/WPF \u7684\u670b\u53cb\u5011\u4e0d\u77e5\u9053\u6709\u6c92\u6709\u9047\u904e\u4e00\u500b\u554f\u984c\uff1a\u6709\u6642\u5019\u60f3\u8981\u8df3\u51fa\u4e00\u500b\u5143\u4ef6\u8ddf\u4f7f\u7528\u8005\u4e92\u52d5\uff0c\u800c\u4e14\u8981\u9396\u4f4f\u539f\u4f86\u7684\u4e3b\u756b\u9762\uff0c\u7b49\u4f7f\u7528\u8005\u64cd\u4f5c\u5b8c\u624d\u80fd\u7e7c\u7e8c\u64cd\u4f5c\u4e3b\u756b\u9762\uff0c\u53ef\u662f\u7528 MessageBox \u7684\u8a71\u529f\u80fd\u4e0d\u5920\uff0c\u7528 ChildWindow \u7684\u8a71\u529f\u80fd\u53c8\u592a\u591a\u6216\u662f\u592a\u8907\u96dc\u4e4b\u985e\u7684\u554f\u984c...",date:"2010-10-26T00:00:00.000Z",formattedDate:"2010\u5e7410\u670826\u65e5",tags:[{label:"Silverlight",permalink:"/blog/tags/silverlight"}],readingTime:3.345,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u81ea\u88fd Modal \u5143\u4ef6",description:"\u6709\u4f7f\u7528\u904e Silverlight/WPF \u7684\u670b\u53cb\u5011\u4e0d\u77e5\u9053\u6709\u6c92\u6709\u9047\u904e\u4e00\u500b\u554f\u984c\uff1a\u6709\u6642\u5019\u60f3\u8981\u8df3\u51fa\u4e00\u500b\u5143\u4ef6\u8ddf\u4f7f\u7528\u8005\u4e92\u52d5\uff0c\u800c\u4e14\u8981\u9396\u4f4f\u539f\u4f86\u7684\u4e3b\u756b\u9762\uff0c\u7b49\u4f7f\u7528\u8005\u64cd\u4f5c\u5b8c\u624d\u80fd\u7e7c\u7e8c\u64cd\u4f5c\u4e3b\u756b\u9762\uff0c\u53ef\u662f\u7528 MessageBox \u7684\u8a71\u529f\u80fd\u4e0d\u5920\uff0c\u7528 ChildWindow \u7684\u8a71\u529f\u80fd\u53c8\u592a\u591a\u6216\u662f\u592a\u8907\u96dc\u4e4b\u985e\u7684\u554f\u984c...",authors:"ouch1978",tags:["Silverlight"],keywords:["Silverlight","modal","control","dialog"]},prevItem:{title:"\u8f15\u9b06\u88fd\u4f5c\u7368\u4e00\u7121\u4e8c\u7684\u6295\u5f71\u7247",permalink:"/blog/2010/10/27/ppt-make-your-own-ptt-template"},nextItem:{title:"\u4f7f\u7528 Visual Studio \u9032\u884c Source Code \u81ea\u52d5\u683c\u5f0f\u5316",permalink:"/blog/2010/10/25/vs2010-format-source-code-automatically"}},s={authorsImageUrls:[void 0]},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6709\u4f7f\u7528\u904e Silverlight/WPF \u7684\u670b\u53cb\u5011\u4e0d\u77e5\u9053\u6709\u6c92\u6709\u9047\u904e\u4e00\u500b\u554f\u984c\uff1a\u6709\u6642\u5019\u60f3\u8981\u8df3\u51fa\u4e00\u500b\u5143\u4ef6\u8ddf\u4f7f\u7528\u8005\u4e92\u52d5\uff0c\u800c\u4e14\u8981\u9396\u4f4f\u539f\u4f86\u7684\u4e3b\u756b\u9762\uff0c\u7b49\u4f7f\u7528\u8005\u64cd\u4f5c\u5b8c\u624d\u80fd\u7e7c\u7e8c\u64cd\u4f5c\u4e3b\u756b\u9762\uff0c\u53ef\u662f\u7528 MessageBox \u7684\u8a71\u529f\u80fd\u4e0d\u5920\uff0c\u7528 ChildWindow \u7684\u8a71\u529f\u80fd\u53c8\u592a\u591a\u6216\u662f\u592a\u8907\u96dc\u4e4b\u985e\u7684\u554f\u984c..."))}f.isMDXComponent=!0}}]);