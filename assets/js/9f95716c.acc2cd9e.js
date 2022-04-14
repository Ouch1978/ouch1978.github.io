"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[8917],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19320:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],u={title:"\u89e3\u6c7a Visual Studio 2017 \u5728\u6709\u624b\u5beb\u7b46\u7684\u88dd\u7f6e\u4e0a\u6c92\u6709\u56de\u61c9\u53ca\u91cd\u555f\u7684\u554f\u984c",slug:"2017/08/29/fix-visual-studio-2017-crash-on-pen-enabled-devices",authors:"ouch1978",tags:["Visual Studio","PenIMC_v0400.dll"]},l=void 0,c={permalink:"/blog/2017/08/29/fix-visual-studio-2017-crash-on-pen-enabled-devices",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2017-08-29-fix-visual-studio-2017-crash-on-pen-enabled-devices/2017-08-29-fix-visual-studio-2017-crash-on-pen-enabled-devices.md",source:"@site/blog/2017-08-29-fix-visual-studio-2017-crash-on-pen-enabled-devices/2017-08-29-fix-visual-studio-2017-crash-on-pen-enabled-devices.md",title:"\u89e3\u6c7a Visual Studio 2017 \u5728\u6709\u624b\u5beb\u7b46\u7684\u88dd\u7f6e\u4e0a\u6c92\u6709\u56de\u61c9\u53ca\u91cd\u555f\u7684\u554f\u984c",description:"\u524d\u8a00",date:"2017-08-29T00:00:00.000Z",formattedDate:"2017\u5e748\u670829\u65e5",tags:[{label:"Visual Studio",permalink:"/blog/tags/visual-studio"},{label:"PenIMC_v0400.dll",permalink:"/blog/tags/pen-imc-v-0400-dll"}],readingTime:2.47,truncated:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u89e3\u6c7a Visual Studio 2017 \u5728\u6709\u624b\u5beb\u7b46\u7684\u88dd\u7f6e\u4e0a\u6c92\u6709\u56de\u61c9\u53ca\u91cd\u555f\u7684\u554f\u984c",slug:"2017/08/29/fix-visual-studio-2017-crash-on-pen-enabled-devices",authors:"ouch1978",tags:["Visual Studio","PenIMC_v0400.dll"]},prevItem:{title:"\u900f\u904e Xamarin.Forms \u4f86\u73a9\u73a9\u50b3\u8aaa\u4e2d\u7684 XAML Standard (preview) \u5427!!",permalink:"/blog/2018/01/08/xaml-standard-preview-in-xamarin-forms"},nextItem:{title:"\u89e3\u6c7a Visual Studio 2017 \u9996\u6b21\u57f7\u884c\u6642\u5361\u5728 We are getting things ready \u7684\u554f\u984c",permalink:"/blog/2017/08/15/fix-visual-studio-2017-first-launch-stucking"}},s={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u9019\u6b21\u91cd\u704c\u5b8c\u96fb\u8166\uff0c\u4e26\u4e14\u5b89\u88dd\u597d\u4e86 Visual Studio 2017 \u4e4b\u5f8c\uff0c\u4e00\u76f4\u6c92\u4ec0\u9ebc\u6642\u9593\u628a\u5b83\u6253\u958b\u4f86\u52d5\u624b\u5beb\u7a0b\u5f0f\u3002"),(0,o.kt)("p",null,"\u6628\u5929\u7d22\u6027\u6253\u958b\u4f86\u66f4\u65b0\u5230\u6700\u65b0\u7684\u7248\u672c\u4e4b\u5f8c\uff0c\u96a8\u4fbf\u958b\u4e86\u4e00\u500b\u4e4b\u524d\u5beb\u597d\u73a9\u7684\u5c08\u6848\u60f3\u8aaa\u4f86\u8dd1\u770b\u770b\uff0c\u7d50\u679c\u4e00\u958b\u6c92\u591a\u4e45\uff0cVisual Studio \u99ac\u4e0a\u6c92\u6709\u56de\u61c9\uff0c\u518d\u904e\u6c92\u591a\u4e45\uff0c\u5c31\u76f4\u63a5\u5d29\u6f70\u91cd\u958b\u4e86\u3002"),(0,o.kt)("p",null,"![image-01]",' (01-visual-studio-2017-is-restarting.png "Visual Studio 2017 \u91cd\u8907\u81ea\u52d5\u91cd\u555f")'))}f.isMDXComponent=!0}}]);