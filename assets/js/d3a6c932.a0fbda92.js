"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[9849],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),g=c(n),f=o,m=g["".concat(p,".").concat(f)]||g[f]||s[f]||i;return n?r.createElement(m,a(a({ref:e},u),{},{components:n})):r.createElement(m,a({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92755:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"\u66f4\u6539 UWP PowerPoint \u8a2d\u8a08\u7bc4\u672c\u4e2d\u5167\u5efa\u7684 AppBar \u5716\u793a\u984f\u8272",slug:"2016-12-28-change-built-in-icon-color-in-uwp-ppt-template",authors:"ouch1978",tags:["UWP","\u8a2d\u8a08","PowerPoint"]},p=void 0,c={permalink:"/blog/2016-12-28-change-built-in-icon-color-in-uwp-ppt-template",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/website/blog/2016-12-28-change-built-in-icon-color-in-uwp-ppt-template/2016-12-28-change-built-in-icon-color-in-uwp-ppt-template.md",source:"@site/blog/2016-12-28-change-built-in-icon-color-in-uwp-ppt-template/2016-12-28-change-built-in-icon-color-in-uwp-ppt-template.md",title:"\u66f4\u6539 UWP PowerPoint \u8a2d\u8a08\u7bc4\u672c\u4e2d\u5167\u5efa\u7684 AppBar \u5716\u793a\u984f\u8272",description:"\u4e4b\u524d\u4ecb\u7d39\u7684 UWP \u7684 PowerPoint \u8a2d\u8a08\u7bc4\u672c\u88e1\u9762\u5167\u5efa\u4e86\u4e0d\u5c11\u8a2d\u8a08 App \u6642\u6240\u9700\u8981\u7684\u5716\u793a\u3002\u7136\u800c\uff0c\u5b83\u5011\u6709\u90e8\u4efd\u662f\u5716\u5f62\u5143\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u984f\u8272\uff1b\u4f46\u662f\u6709\u4e9b\u662f\u5716\u7247\uff0c\u6c92\u6709\u8fa6\u6cd5\u76f4\u63a5\u900f\u904e\u586b\u8272\u529f\u80fd\u4f86\u6539\u8b8a\u5b83\u7684\u984f\u8272\u3002",date:"2016-12-28T00:00:00.000Z",formattedDate:"2016\u5e7412\u670828\u65e5",tags:[{label:"UWP",permalink:"/blog/tags/uwp"},{label:"\u8a2d\u8a08",permalink:"/blog/tags/\u8a2d\u8a08"},{label:"PowerPoint",permalink:"/blog/tags/power-point"}],readingTime:2.645,truncated:!1,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u5de5\u7a0b\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u66f4\u6539 UWP PowerPoint \u8a2d\u8a08\u7bc4\u672c\u4e2d\u5167\u5efa\u7684 AppBar \u5716\u793a\u984f\u8272",slug:"2016-12-28-change-built-in-icon-color-in-uwp-ppt-template",authors:"ouch1978",tags:["UWP","\u8a2d\u8a08","PowerPoint"]},prevItem:{title:"\u521d\u63a2 Visual Studio 2017 RC - \u5b89\u88dd\u7bc7",permalink:"/blog/2017-01-19-first-look-on-vs2017-rc-installation"},nextItem:{title:"\u4f7f\u7528 Dev Center \u63d0\u4f9b\u7684 PowerPoint \u8a2d\u8a08\u7bc4\u672c\u88fd\u4f5c UWP \u7684 UI \u96db\u578b",permalink:"/blog/2016-12-14-using-powerpoint-template-for-designing-uwp-app"}},u={authorsImageUrls:[void 0]},s=[],g={toc:s};function f(t){var e=t.components,l=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e4b\u524d\u4ecb\u7d39\u7684 UWP \u7684 PowerPoint \u8a2d\u8a08\u7bc4\u672c\u88e1\u9762\u5167\u5efa\u4e86\u4e0d\u5c11\u8a2d\u8a08 App \u6642\u6240\u9700\u8981\u7684\u5716\u793a\u3002\u7136\u800c\uff0c\u5b83\u5011\u6709\u90e8\u4efd\u662f\u5716\u5f62\u5143\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u984f\u8272\uff1b\u4f46\u662f\u6709\u4e9b\u662f\u5716\u7247\uff0c\u6c92\u6709\u8fa6\u6cd5\u76f4\u63a5\u900f\u904e\u586b\u8272\u529f\u80fd\u4f86\u6539\u8b8a\u5b83\u7684\u984f\u8272\u3002"),(0,i.kt)("p",null,"\u5167\u5efa\u7684\u5716\u793a\u90fd\u662f\u9ed1\u8272\u7684\uff0c\u4f46\u662f\u5f88\u4e0d\u5e78\u7684\uff0c\u9810\u8a2d\u7684 AppBar \u662f\u9ed1\u5e95\uff0c\u6240\u4ee5\u5f97\u642d\u914d\u767d\u8272\u7684\u5716\u793a\u3002"),(0,i.kt)("p",null,"\u9019\u500b\u6642\u5019\uff0c\u600e\u9ebc\u628a\u5716\u7247\u5f9e\u9ed1\u8f49\u767d\uff0c\u6216\u662f\u5f9e\u767d\u8f49\u9ed1\uff0c\u751a\u81f3\u6539\u6210\u5176\u5b83\u7684\u8272\u5f69\uff0c\u8003\u9a57\u7684\u5c31\u662f\u4f7f\u7528 PowerPoint \u7684\u529f\u529b\u5566\u3002"),(0,i.kt)("p",null,"\u8aaa\u7a7f\u4e86\uff0c\u53ea\u8981\u628a\u5716\u7247\u91cd\u65b0\u4e0a\u8272\uff0c\u518d\u8abf\u6574\u5b83\u7684\u4eae\u5ea6\u548c\u5c0d\u6bd4\u5c31\u53ef\u4ee5\u9054\u5230\u6211\u5011\u7684\u76ee\u7684\uff0c\u800c\u4e14\u9019\u4e9b\u529f\u80fd PowerPoint \u90fd\u6709\u5167\u5efa\uff0c\u4e0d\u7528\u900f\u904e\u5176\u4ed6\u7684\u7e6a\u5716\u8edf\u9ad4\u5c31\u80fd\u8fa6\u5230\u56c9\u3002"),(0,i.kt)("p",null,"\u9019\u908a\u5c31\u900f\u904e\u4e0b\u9762\u7684\u4f8b\u5b50\u4f86\u4f5c\u793a\u7bc4\uff0c\u770b\u770b\u600e\u9ebc\u628a\u4e00\u500b\u9ed1\u8272\u7684\u5716\u793a\u6539\u6210\u767d\u7684\uff1a"),(0,i.kt)("p",null,"\u5148\u5f9e Storyboad \u5167\u5efa\u7684 Windows App Icon \u5716\u793a\u4e2d\u62c9\u51fa\u8a0a\u606f\u548c\u522a\u9664\u9019\u5169\u500b\u5716\u793a\u3002\n[",(0,i.kt)("img",{loading:"lazy",alt:"\u5de6\u908a\u7684\u5716\u793a\u662f\u5716\u5f62\u5143\u4ef6\uff0c\u53f3\u908a\u5247\u662f\u5716\u7247",src:n(80546).Z,width:"2160",height:"1394"})),(0,i.kt)("p",null,"\u5de6\u908a\u7684\u8a0a\u606f\u5716\u793a\u662f\u5716\u5f62\u5143\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u900f\u904e\u5716\u6848\u586b\u6eff\u7684\u529f\u80fd\u4f86\u4fee\u6539\u5b83\u7684\u984f\u8272\u3002\n[",(0,i.kt)("img",{loading:"lazy",alt:"\u5de6\u908a\u7684\u5716\u793a\u662f\u5716\u5f62\u5143\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u984f\u8272",src:n(91728).Z,width:"2160",height:"1394"})),(0,i.kt)("p",null,"\u53f3\u908a\u7684\u662f\u5716\u7247\uff0c\u76f4\u63a5\u4f7f\u7528\u5716\u6848\u586b\u6eff\u7684\u529f\u80fd\u7684\u8a71\u53ea\u6703\u6539\u5230\u80cc\u666f\u8272\u3002\n[",(0,i.kt)("img",{loading:"lazy",alt:"\u53f3\u908a\u7684\u5716\u793a\u662f\u5716\u7247\uff0c\u7121\u6cd5\u76f4\u63a5\u4fee\u6539\u984f\u8272",src:n(83156).Z,width:"2160",height:"1394"})),(0,i.kt)("p",null,"\u9019\u6642\u5019\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u958b\u555f\u5de5\u5177\u5217\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u683c\u5f0f")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8272\u5f69")," \u9078\u55ae\u4f86\u9032\u884c\u521d\u6b65\u7684\u984f\u8272\u8abf\u6574\uff0c\u9ede\u9078\u4e0b\u9762\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u5716\u7247\u8272\u5f69\u9078\u9805"),"\u3002(\u4e5f\u53ef\u4ee5\u900f\u904e\u91cd\u65b0\u8457\u8272\u7684\u529f\u80fd\u6539\u8b8a\u6210\u5176\u5b83\u984f\u8272\u5594!!)\n[",(0,i.kt)("img",{loading:"lazy",alt:"\u984f\u8272\u9078\u55ae",src:n(88730).Z,width:"2160",height:"1394"})),(0,i.kt)("p",null,"\u63a5\u8457\u5728\u8a2d\u5b9a\u5716\u7247\u683c\u5f0f\u9762\u677f\u4e2d\u8abf\u6574\u5716\u7247\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u4eae\u5ea6"),"\uff0c\u628a\u4eae\u5ea6\u8abf\u6574\u70ba",(0,i.kt)("inlineCode",{parentName:"p"},"100"),"\u5c31\u662f\u767d\u8272\u5566!!\n[",(0,i.kt)("img",{loading:"lazy",alt:"\u8abf\u6574\u5716\u7247\u7684\u4eae\u5ea6",src:n(28191).Z,width:"2160",height:"1394"})),(0,i.kt)("p",null,"\u5679\u5679\uff0c\u5927\u529f\u544a\u6210!!\n[",(0,i.kt)("img",{loading:"lazy",alt:"\u5927\u529f\u544a\u6210",src:n(24057).Z,width:"2160",height:"1394"})),(0,i.kt)("p",null,"\u662f\u4e0d\u662f\u5f88\u7c21\u55ae\u554a!?"),(0,i.kt)("p",null,"\u9019\u500b\u5c0f\u6280\u5de7\u4e0d\u53ea\u80fd\u4f7f\u7528\u5728\u8a2d\u8a08 App \u7684\u968e\u6bb5\uff0c\u5e73\u5e38\u88fd\u4f5c\u6295\u5f71\u7247\u7684\u6642\u5019\u4e5f\u662f\u5f88\u5be6\u7528\u7684\u5594!!~"))}f.isMDXComponent=!0},80546:function(t,e,n){e.Z=n.p+"assets/images/01-two-icons-with-different-types-e10a28b56a410b8944fcafe7795efc28.png"},91728:function(t,e,n){e.Z=n.p+"assets/images/02-the-left-one-could-edit-the-color-directly-40b0573b3963f53a13e1dcfc639e2b14.png"},83156:function(t,e,n){e.Z=n.p+"assets/images/03-the-right-one-could-not-edit-the-color-directly-7d237084fbbf6e0df4ca0a7667833c15.png"},88730:function(t,e,n){e.Z=n.p+"assets/images/04-the-recolor-options-4b14145a563a454b1f22f0143510d095.png"},28191:function(t,e,n){e.Z=n.p+"assets/images/05-the-picture-color-options-panel-a96146c6a67735639ba945e2724676ff.png"},24057:function(t,e,n){e.Z=n.p+"assets/images/06-here-we-are-b516787cc7891956c547577dcb9d1729.png"}}]);