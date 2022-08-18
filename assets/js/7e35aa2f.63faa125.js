"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[3575],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||s[m]||i;return n?r.createElement(g,o(o({ref:e},d),{},{components:n})):r.createElement(g,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46036:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],u={title:"\u900f\u904e Visual Studio \u5c0d Xamarin Android \u5c08\u6848\u9032\u884c\u9664\u932f",authors:"ouch1978",tags:["Visual Studio","Xamarin"],keywords:["Visual Studio","Xamarin","Android","Hyper-V","debug","\u9664\u932f"]},l=void 0,p={permalink:"/blog/2016/06/30/debugging-xamarin-android-app-in-vs",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2016-06-30-debugging-xamarin-android-app-in-vs/index.md",source:"@site/blog/2016-06-30-debugging-xamarin-android-app-in-vs/index.md",title:"\u900f\u904e Visual Studio \u5c0d Xamarin Android \u5c08\u6848\u9032\u884c\u9664\u932f",description:"\u5f88\u958b\u5fc3\u7684\u53ef\u4ee5\u6210\u529f\u5efa\u7f6e\u51faAndroid\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5f8c...\u54a6!? \u600e\u9ebc\u4e0d\u80fdDebug!!??Visual Studio\u628a\u61c9\u7528\u7a0b\u5f0f\u4f48\u7f72\u5230\u6a21\u64ec\u5668\u4e4b\u5f8c\u5c31\u4e0d\u7ba1\u4e86??\u54ea\u62db\u554a!?",date:"2016-06-30T00:00:00.000Z",formattedDate:"2016\u5e746\u670830\u65e5",tags:[{label:"Visual Studio",permalink:"/blog/tags/visual-studio"},{label:"Xamarin",permalink:"/blog/tags/xamarin"}],readingTime:1.745,hasTruncateMarker:!1,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u900f\u904e Visual Studio \u5c0d Xamarin Android \u5c08\u6848\u9032\u884c\u9664\u932f",authors:"ouch1978",tags:["Visual Studio","Xamarin"],keywords:["Visual Studio","Xamarin","Android","Hyper-V","debug","\u9664\u932f"]},prevItem:{title:"\u89e3\u6c7a\u904a\u6232\u5728 Windows 10 \u57f7\u884c\u6642\u51fa\u73fe XAudio2_7.dll_unloaded \u932f\u8aa4\u9020\u6210\u7684\u9583\u9000",permalink:"/blog/2016/07/02/solve-xaudio2_7.dll-unloaded-error"},nextItem:{title:"Hello Xamarin",permalink:"/blog/2016/06/30/hello-xamarin"}},d={authorsImageUrls:[void 0]},s=[],c={toc:s};function m(t){var e=t.components,u=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5f88\u958b\u5fc3\u7684\u53ef\u4ee5\u6210\u529f\u5efa\u7f6e\u51faAndroid\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5f8c...\u54a6!? \u600e\u9ebc\u4e0d\u80fdDebug!!??Visual Studio\u628a\u61c9\u7528\u7a0b\u5f0f\u4f48\u7f72\u5230\u6a21\u64ec\u5668\u4e4b\u5f8c\u5c31\u4e0d\u7ba1\u4e86??\u54ea\u62db\u554a!?"),(0,i.kt)("p",null,"\u76f8\u4fe1\u5927\u5bb6\u61c9\u8a72\u90fd\u77e5\u9053Visual Studio 2015\u88e1\u9762\u5f88\u4f5b\u5fc3\u7684\u5305\u542b\u4e86\u591a\u7a2eAndroid\u88dd\u7f6e\u7684\u6a21\u64ec\u5668\uff0c\u8b93\u6211\u5011\u5728\u958b\u767cAndroid\u61c9\u7528\u7a0b\u5f0f\u7684\u6642\u5019\u4e5f\u53ef\u4ee5\u900f\u904e\u5b83\u4f86\u9032\u884c\u9664\u932f\u3002"),(0,i.kt)("p",null,"\u6211\u5011\u4e5f\u53ef\u4ee5\u900f\u904eVisual Studio\u9078\u55ae\u88e1\u7684 -> ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Tools"))," -> ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Android"))," -> ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Android Emulator Manager"))," \u4f86\u5efa\u7acb\u865b\u64ec\u7684Android\u88dd\u7f6e\u4ee5\u4fbf\u65bc\u9032\u884c\u9664\u932f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Android Emulator Manager",src:n(71932).Z,width:"686",height:"493"})),(0,i.kt)("p",null,"\u6b63\u5e38\u7684\u60c5\u6cc1\u4e0b\uff0c\u61c9\u7528\u7a0b\u5f0f\u88ab\u4f48\u7f72\u5230\u6a21\u64ec\u5668\u4e4b\u5f8c\uff0cVisual Studio\u61c9\u8a72\u9084\u662f\u6703\u8655\u65bc\u5728\u9664\u932f\u7684\u6a21\u5f0f\u4e0b\uff0c\u4f46\u662f\u6211\u9047\u5230\u7684\u795e\u5947\u72c0\u6cc1\u662f\u9019\u6a23\uff1a\u61c9\u7528\u7a0b\u5f0f\u7684\u78ba\u6709\u88ab\u4f48\u7f72\u5230\u6a21\u64ec\u5668\u4e2d\uff0c\u4f46\u662fVisual Studio\u5c31\u81ea\u52d5\u7d50\u675f\u4e86\u9664\u932f\u6a21\u5f0f\u4e86\uff0c\u800c\u4e14\u6a21\u64ec\u5668\u88e1\u7684\u61c9\u7528\u7a0b\u5f0f\u4e5f\u6703\u81ea\u52d5\u88ab\u9001\u5230\u80cc\u666f\u53bb\u3002"),(0,i.kt)("p",null,"\u7d93\u904eGoogle\u5927\u795e\u7684\u5354\u52a9\uff0c\u539f\u4f86\u9019\u500b\u554f\u984c\u662f\u51fa\u5728Hyper-V\u88e1\u865b\u64ec\u6a5f\u5668\u7684\u8a2d\u5b9a\u4e0a\u3002"),(0,i.kt)("p",null,"\u53ea\u9700\u8981\u958b\u555f ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Hyper-V Manager"))," \uff0c\u5728Android\u865b\u64ec\u6a5f\u4e0a\u6309\u4e0b\u6ed1\u9f20\u53f3\u9375\uff0c\u9ede\u9078 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Settings...")),"\uff0c\u7136\u5f8c\u9032\u5165 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Processor"))," \u7684 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Compatibility"))," \u8a2d\u5b9a\u9805\u76ee\u4e2d\uff0c\u628a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Migrate to a physical computer with a different processor version"))," \u52fe\u9078\u8d77\u4f86\u5c31\u884c\u5566\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compatibility Setting",src:n(51543).Z,width:"722",height:"687"})),(0,i.kt)("p",null,"\u5594\u8036\uff0c\u9664\u932f\u6a21\u5f0f\u56de\u4f86\u4e86\uff0c\u8a2d\u597d\u7684\u4e2d\u65b7\u9ede\u4e5f\u4e0d\u6703\u518d\u88ab\u7121\u8996\u4e86\uff0cHappy Coding~"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Break Point Is Back",src:n(65540).Z,width:"1366",height:"768"})))}m.isMDXComponent=!0},71932:function(t,e,n){e.Z=n.p+"assets/images/Android-Emulator-Manager-39611b4d711dcdbd3383736aedc0caff.png"},65540:function(t,e,n){e.Z=n.p+"assets/images/BreakPoint-Is-Back-1a46f498069fa0579873f30052889472.png"},51543:function(t,e,n){e.Z=n.p+"assets/images/Compatibility-Setting-4551ccf9e522d50842fb6fdc779166d9.png"}}]);