"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[7020],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),p=n,m=f["".concat(i,".").concat(p)]||f[p]||d[p]||a;return r?o.createElement(m,u(u({ref:t},s),{},{components:r})):o.createElement(m,u({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var l=2;l<a;l++)u[l]=r[l];return o.createElement.apply(null,u)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53005:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),u=["components"],c={title:"\u4f7f\u7528 Visual Studio \u9032\u884c Source Code \u81ea\u52d5\u683c\u5f0f\u5316 - \u52a0\u5f37\u7248",slug:"2010-10-25-vs2010-format-source-code-automatically-advanced",authors:"ouch1978",tags:["Visual Studio"]},i=void 0,l={permalink:"/blog/2010-10-25-vs2010-format-source-code-automatically-advanced",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2010-10-25-vs2010-format-source-code-automatically-advanced/2010-10-25-vs2010-format-source-code-automatically-advanced.md",source:"@site/blog/2010-10-25-vs2010-format-source-code-automatically-advanced/2010-10-25-vs2010-format-source-code-automatically-advanced.md",title:"\u4f7f\u7528 Visual Studio \u9032\u884c Source Code \u81ea\u52d5\u683c\u5f0f\u5316 - \u52a0\u5f37\u7248",description:"\u4e0a\u7bc7\u8b1b\u5230\u4e86\u600e\u9ebc\u505a Source Code \u7684\u81ea\u52d5\u683c\u5f0f\u5316\uff0c\u4f46\u662f\u7528\u5167\u5efa\u7684\u529f\u80fd\uff0c\u5176\u5be6\u6709\u500b\u4e0d\u592a\u65b9\u4fbf\u7684\u5730\u65b9 -- \u4e00\u6b21\u53ea\u80fd\u683c\u5f0f\u5316\u4e00\u500b\u6a94\u6848\uff0c\u9019\u500b\u554f\u984c\u5c0d\u65bc\u6211\u4f86\u8aaa\u5c31\u982d\u5f88\u5927\u4e86\uff0c\u901a\u5e38\u4e00\u500b\u5c08\u6848\u4e0d\u592a\u53ef\u80fd\u53ea\u6709\u5169\u4e09\u500b\u6a94\uff0c\u52d5\u4e0d\u52d5\u5c31\u8981\u6bcf\u500b\u6a94\u6848\u90fd\u958b\u4f86\u81ea\u52d5\u683c\u5f0f\u5316\u4e00\u4e0b\u4e5f\u662f\u5f88\u7d2f\u4eba\u800c\u4e14\u6d6a\u8cbb\u6642\u9593\u7684\u4e00\u4ef6\u4e8b\uff0c\u9019\u6642\u5019\uff0c\u6574\u500b\u5c08\u6848\u88e1\u9762\u7684\u6a94\u6848\u90fd\u53ef\u4ee5\u81ea\u52d5\u683c\u5f0f\u5316\u7684\u529f\u80fd\u5c31\u8b8a\u6210\u662f\u5fc5\u5099\u7684\u4e86!!",date:"2010-10-25T00:00:00.000Z",formattedDate:"2010\u5e7410\u670825\u65e5",tags:[{label:"Visual Studio",permalink:"/blog/tags/visual-studio"}],readingTime:2.855,truncated:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u5de5\u7a0b\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u4f7f\u7528 Visual Studio \u9032\u884c Source Code \u81ea\u52d5\u683c\u5f0f\u5316 - \u52a0\u5f37\u7248",slug:"2010-10-25-vs2010-format-source-code-automatically-advanced",authors:"ouch1978",tags:["Visual Studio"]},prevItem:{title:"\u4f7f\u7528 Visual Studio \u9032\u884c Source Code \u81ea\u52d5\u683c\u5f0f\u5316",permalink:"/blog/2010-10-25-vs2010-format-source-code-automatically"}},s={authorsImageUrls:[void 0]},d=[],f={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u7bc7\u8b1b\u5230\u4e86\u600e\u9ebc\u505a Source Code \u7684\u81ea\u52d5\u683c\u5f0f\u5316\uff0c\u4f46\u662f\u7528\u5167\u5efa\u7684\u529f\u80fd\uff0c\u5176\u5be6\u6709\u500b\u4e0d\u592a\u65b9\u4fbf\u7684\u5730\u65b9 -- \u4e00\u6b21\u53ea\u80fd\u683c\u5f0f\u5316\u4e00\u500b\u6a94\u6848\uff0c\u9019\u500b\u554f\u984c\u5c0d\u65bc\u6211\u4f86\u8aaa\u5c31\u982d\u5f88\u5927\u4e86\uff0c\u901a\u5e38\u4e00\u500b\u5c08\u6848\u4e0d\u592a\u53ef\u80fd\u53ea\u6709\u5169\u4e09\u500b\u6a94\uff0c\u52d5\u4e0d\u52d5\u5c31\u8981\u6bcf\u500b\u6a94\u6848\u90fd\u958b\u4f86\u81ea\u52d5\u683c\u5f0f\u5316\u4e00\u4e0b\u4e5f\u662f\u5f88\u7d2f\u4eba\u800c\u4e14\u6d6a\u8cbb\u6642\u9593\u7684\u4e00\u4ef6\u4e8b\uff0c\u9019\u6642\u5019\uff0c\u6574\u500b\u5c08\u6848\u88e1\u9762\u7684\u6a94\u6848\u90fd\u53ef\u4ee5\u81ea\u52d5\u683c\u5f0f\u5316\u7684\u529f\u80fd\u5c31\u8b8a\u6210\u662f\u5fc5\u5099\u7684\u4e86!!"))}p.isMDXComponent=!0}}]);