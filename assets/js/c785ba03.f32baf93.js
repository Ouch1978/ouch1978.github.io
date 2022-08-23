"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[6110],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8645:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],s={title:"\u89e3\u6c7a\u5b89\u88dd SQL Server Management Studio \u6642\u767c\u751f xxx.msi \u627e\u4e0d\u5230\u7684\u554f\u984c",descrition:"\u6700\u8fd1\u5728\u66f4\u65b0 SQL Server Management Studio \u7684\u6642\u5019\uff0c\u88dd\u5230\u4e00\u534a\u7a81\u7136\u8df3\u51fa\u627e\u4e0d\u5230 sql_smss.msi \u7684\u7684\u8a0a\u606f\u3002\u672c\u4f86\u4ee5\u70ba\u662f\u56e0\u70ba\u820a\u7684\u5b89\u88dd\u54ac\u4f4f\u4e86\u4ec0\u9ebc\uff0c\u4f46\u662f\u5c31\u9023\u628a\u820a\u7684\u7248\u672c\u53cd\u5b89\u88dd\u4e86\uff0c\u9084\u662f\u6703\u51fa\u73fe\u4e00\u6a23\u7684\u554f\u984c\u3002\u9664\u4e86\u6b63\u898f\u7684\u53cd\u5b89\u88dd\u4e4b\u5916\uff0c\u4e0d\u7ba1\u6211\u76f4\u63a5\u522a\u6a94\u6848\u3001\u522a\u767b\u9304\u6a94\uff0c\u4e5f\u90fd\u7121\u6fdf\u65bc\u4e8b\u3002",authors:"ouch1978",tags:["Windows","Trouble Shooting"],keywords:["Windows","SMSS","\u5b89\u88dd","\u5931\u6557","\u627e\u4e0d\u5230"]},u=void 0,c={permalink:"/blog/2022/08/23/solve-smss-installation-package-missing-issue",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-08-23-solve-smss-installation-package-missing-issue/index.md",source:"@site/blog/2022-08-23-solve-smss-installation-package-missing-issue/index.md",title:"\u89e3\u6c7a\u5b89\u88dd SQL Server Management Studio \u6642\u767c\u751f xxx.msi \u627e\u4e0d\u5230\u7684\u554f\u984c",description:"\u524d\u8a00",date:"2022-08-23T00:00:00.000Z",formattedDate:"2022\u5e748\u670823\u65e5",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"Trouble Shooting",permalink:"/blog/tags/trouble-shooting"}],readingTime:3.49,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u89e3\u6c7a\u5b89\u88dd SQL Server Management Studio \u6642\u767c\u751f xxx.msi \u627e\u4e0d\u5230\u7684\u554f\u984c",descrition:"\u6700\u8fd1\u5728\u66f4\u65b0 SQL Server Management Studio \u7684\u6642\u5019\uff0c\u88dd\u5230\u4e00\u534a\u7a81\u7136\u8df3\u51fa\u627e\u4e0d\u5230 sql_smss.msi \u7684\u7684\u8a0a\u606f\u3002\u672c\u4f86\u4ee5\u70ba\u662f\u56e0\u70ba\u820a\u7684\u5b89\u88dd\u54ac\u4f4f\u4e86\u4ec0\u9ebc\uff0c\u4f46\u662f\u5c31\u9023\u628a\u820a\u7684\u7248\u672c\u53cd\u5b89\u88dd\u4e86\uff0c\u9084\u662f\u6703\u51fa\u73fe\u4e00\u6a23\u7684\u554f\u984c\u3002\u9664\u4e86\u6b63\u898f\u7684\u53cd\u5b89\u88dd\u4e4b\u5916\uff0c\u4e0d\u7ba1\u6211\u76f4\u63a5\u522a\u6a94\u6848\u3001\u522a\u767b\u9304\u6a94\uff0c\u4e5f\u90fd\u7121\u6fdf\u65bc\u4e8b\u3002",authors:"ouch1978",tags:["Windows","Trouble Shooting"],keywords:["Windows","SMSS","\u5b89\u88dd","\u5931\u6557","\u627e\u4e0d\u5230"]},nextItem:{title:"Windows \u7684\u8996\u7a97\u9003\u5230\u87a2\u5e55\u5916\u9ede\u4e0d\u5230\u4e86!? \u53eb\u5b83\u4e56\u4e56\u56de\u4f86!!",permalink:"/blog/2022/08/19/move-window-out-of-screen-back"}},l={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u6700\u8fd1\u5728\u66f4\u65b0 SQL Server Management Studio \u7684\u6642\u5019\uff0c\u88dd\u5230\u4e00\u534a\u7a81\u7136\u8df3\u51fa\u627e\u4e0d\u5230 sql_smss.msi \u7684\u7684\u8a0a\u606f\u3002"),(0,i.kt)("p",null,"\u672c\u4f86\u4ee5\u70ba\u662f\u56e0\u70ba\u820a\u7684\u5b89\u88dd\u54ac\u4f4f\u4e86\u4ec0\u9ebc\uff0c\u4f46\u662f\u5c31\u9023\u628a\u820a\u7684\u7248\u672c\u53cd\u5b89\u88dd\u4e86\uff0c\u9084\u662f\u6703\u51fa\u73fe\u4e00\u6a23\u7684\u554f\u984c\u3002"),(0,i.kt)("p",null,"\u9664\u4e86\u6b63\u898f\u7684\u53cd\u5b89\u88dd\u4e4b\u5916\uff0c\u4e0d\u7ba1\u6211\u76f4\u63a5\u522a\u6a94\u6848\u3001\u522a\u767b\u9304\u6a94\uff0c\u4e5f\u90fd\u7121\u6fdf\u65bc\u4e8b\u3002"),(0,i.kt)("p",null,"\u9019\u7bc7\u5c31\u4f86\u8a18\u9304\u4e00\u4e0b\u6211\u89e3\u6c7a\u7684\u65b9\u6cd5\u3002"))}f.isMDXComponent=!0}}]);