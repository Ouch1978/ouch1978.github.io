"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[5848],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=l(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:e},c),{},{components:n})):r.createElement(g,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63212:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],p={title:"\u4f7f\u7528 Visual Studio \u9032\u884c Source Code \u81ea\u52d5\u683c\u5f0f\u5316 - \u52a0\u5f37\u7248",authors:"ouch1978",tags:["Visual Studio"],keywords:["Visual Studio","Auto Format","\u81ea\u52d5","\u6392\u7248","\u5de8\u96c6","Macro"]},s=void 0,l={permalink:"/blog/2010/10/25/vs2010-format-source-code-automatically-advanced",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2010-10-25-vs2010-format-source-code-automatically-advanced/index.md",source:"@site/blog/2010-10-25-vs2010-format-source-code-automatically-advanced/index.md",title:"\u4f7f\u7528 Visual Studio \u9032\u884c Source Code \u81ea\u52d5\u683c\u5f0f\u5316 - \u52a0\u5f37\u7248",description:"\u4e0a\u7bc7\u8b1b\u5230\u4e86\u600e\u9ebc\u505a Source Code \u7684\u81ea\u52d5\u683c\u5f0f\u5316\uff0c\u4f46\u662f\u7528\u5167\u5efa\u7684\u529f\u80fd\uff0c\u5176\u5be6\u6709\u500b\u4e0d\u592a\u65b9\u4fbf\u7684\u5730\u65b9 -- \u4e00\u6b21\u53ea\u80fd\u683c\u5f0f\u5316\u4e00\u500b\u6a94\u6848\uff0c\u9019\u500b\u554f\u984c\u5c0d\u65bc\u6211\u4f86\u8aaa\u5c31\u982d\u5f88\u5927\u4e86\uff0c\u901a\u5e38\u4e00\u500b\u5c08\u6848\u4e0d\u592a\u53ef\u80fd\u53ea\u6709\u5169\u4e09\u500b\u6a94\uff0c\u52d5\u4e0d\u52d5\u5c31\u8981\u6bcf\u500b\u6a94\u6848\u90fd\u958b\u4f86\u81ea\u52d5\u683c\u5f0f\u5316\u4e00\u4e0b\u4e5f\u662f\u5f88\u7d2f\u4eba\u800c\u4e14\u6d6a\u8cbb\u6642\u9593\u7684\u4e00\u4ef6\u4e8b\uff0c\u9019\u6642\u5019\uff0c\u6574\u500b\u5c08\u6848\u88e1\u9762\u7684\u6a94\u6848\u90fd\u53ef\u4ee5\u81ea\u52d5\u683c\u5f0f\u5316\u7684\u529f\u80fd\u5c31\u8b8a\u6210\u662f\u5fc5\u5099\u7684\u4e86!!",date:"2010-10-25T00:00:00.000Z",formattedDate:"2010\u5e7410\u670825\u65e5",tags:[{label:"Visual Studio",permalink:"/blog/tags/visual-studio"}],readingTime:2.855,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u4f7f\u7528 Visual Studio \u9032\u884c Source Code \u81ea\u52d5\u683c\u5f0f\u5316 - \u52a0\u5f37\u7248",authors:"ouch1978",tags:["Visual Studio"],keywords:["Visual Studio","Auto Format","\u81ea\u52d5","\u6392\u7248","\u5de8\u96c6","Macro"]},prevItem:{title:"\u4f7f\u7528 Visual Studio \u9032\u884c Source Code \u81ea\u52d5\u683c\u5f0f\u5316",permalink:"/blog/2010/10/25/vs2010-format-source-code-automatically"}},c={authorsImageUrls:[void 0]},m=[],u={toc:m};function d(t){var e=t.components,p=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0a\u7bc7\u8b1b\u5230\u4e86\u600e\u9ebc\u505a Source Code \u7684\u81ea\u52d5\u683c\u5f0f\u5316\uff0c\u4f46\u662f\u7528\u5167\u5efa\u7684\u529f\u80fd\uff0c\u5176\u5be6\u6709\u500b\u4e0d\u592a\u65b9\u4fbf\u7684\u5730\u65b9 -- \u4e00\u6b21\u53ea\u80fd\u683c\u5f0f\u5316\u4e00\u500b\u6a94\u6848\uff0c\u9019\u500b\u554f\u984c\u5c0d\u65bc\u6211\u4f86\u8aaa\u5c31\u982d\u5f88\u5927\u4e86\uff0c\u901a\u5e38\u4e00\u500b\u5c08\u6848\u4e0d\u592a\u53ef\u80fd\u53ea\u6709\u5169\u4e09\u500b\u6a94\uff0c\u52d5\u4e0d\u52d5\u5c31\u8981\u6bcf\u500b\u6a94\u6848\u90fd\u958b\u4f86\u81ea\u52d5\u683c\u5f0f\u5316\u4e00\u4e0b\u4e5f\u662f\u5f88\u7d2f\u4eba\u800c\u4e14\u6d6a\u8cbb\u6642\u9593\u7684\u4e00\u4ef6\u4e8b\uff0c\u9019\u6642\u5019\uff0c\u6574\u500b\u5c08\u6848\u88e1\u9762\u7684\u6a94\u6848\u90fd\u53ef\u4ee5\u81ea\u52d5\u683c\u5f0f\u5316\u7684\u529f\u80fd\u5c31\u8b8a\u6210\u662f\u5fc5\u5099\u7684\u4e86!!"),(0,o.kt)("p",null,"\u6709\u9019\u7a2e\u6771\u897f\u55ce??\u7576\u7136\u6709\uff0c\u4e0d\u7136\u5beb\u9019\u7bc7\u5e79\u561b\uff0c\u4e0d\u904e Visual Studio \u4e26\u6c92\u6709\u5167\u5efa\u9019\u500b\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u5f88\u597d\u904b\u7684\uff0c\u6709\u500b\u4f5b\u5fc3\u4f86\u7684\u5916\u570b\u4eba\u5e6b\u6211\u5011\u5beb\u597d\u9019\u500b\u529f\u80fd\u7684\u5de8\u96c6\uff0c\u8a72\u5de8\u96c6\u7684\u7db2\u5740\u70ba\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://github.com/timabell/vs-formatter-macro"},"http://github.com/timabell/vs-formatter-macro")),(0,o.kt)("p",null,"\u53ea\u8981\u4e0b\u8f09 Formatting.vb \u6a94\uff0c\u4e26\u4e14\u4f7f\u7528 Visual Studio \u7684\u5de8\u96c6\u7de8\u8f2f\u529f\u80fd\uff0c\u5c07\u5176\u532f\u5165\uff0c\u5c31\u53ef\u4ee5\u66f4\u8f15\u9b06\u7684\u505a Source Code \u81ea\u52d5\u683c\u5f0f\u5316\u7684\u5de5\u4f5c\u5566\uff0c\u64cd\u4f5c\u6b65\u9a5f\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9ede\u9078 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Tools"))," -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Macros"))," -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Macros IDE*")),"\n",(0,o.kt)("img",{alt:"\u53eb\u51fa Marcros IDE",src:n(61931).Z,title:"\u53eb\u51fa Marcros IDE",width:"1920",height:"1080"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9ede\u9078 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Project Explorer"))," \u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"MyMacors"))," \uff0c\u518d\u9ede\u9078 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Project"))," -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Add Existing Item")),"\n",(0,o.kt)("img",{alt:"\u9ede\u9078 Add Existing Item",src:n(32617).Z,title:"\u9ede\u9078 Add Existing Item",width:"1920",height:"1080"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u65bc\u6a94\u6848\u9078\u53d6\u8996\u7a97\u4e2d\u9078\u64c7 Formatting.vb \u6a94\uff0c\u4e26\u6309\u4e0b Add \u9215\uff0c\u5b8c\u7562\u4e4b\u5f8c\uff0c\u9ede\u9078 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Tools"))," -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Macros"))," -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Macro Explorer"))," (\u5feb\u6377\u9375 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Alt+F8"))," )\uff0c\u5982\u679c\u770b\u5230 Macro Explorer \u4e2d\u6709\u51fa\u73fe\u525b\u525b\u65b0\u589e\u7684\u5de8\u96c6\uff0c\u5c31\u4ee3\u8868\u6210\u529f\u532f\u5165\u5de8\u96c6\u4e86\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8981\u57f7\u884c\u8a72\u5de8\u96c6\uff0c\u53ea\u9700\u8981\u5728\u5de8\u96c6\u4e0a\u6309\u4e0b\u53f3\u9375\uff0c\u9078\u64c7 Run \u5373\u53ef\u3002\n",(0,o.kt)("img",{alt:"\u57f7\u884c\u5de8\u96c6",src:n(18618).Z,title:"\u57f7\u884c\u5de8\u96c6",width:"205",height:"179"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u984d\u5916\u9644\u9001\uff0c\u5229\u7528\u81ea\u8a02\u5de5\u5177\u5217\u7684\u529f\u80fd\u57f7\u884c\u8a72\u5de8\u96c6\uff1a\u9ede\u9078 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Tools"))," -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Customize"))," -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Commands"))," \u9801\u7c64 -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Toolbar"))," -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Text Editor")),"\n",(0,o.kt)("img",{alt:"\u81ea\u8a02\u5de5\u5177\u5217",src:n(13589).Z,title:"\u81ea\u8a02\u5de5\u5177\u5217",width:"535",height:"550"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9ede\u9078 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Add Command"))," \u6309\u9215\uff0c\u5728 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Categories\u6e05\u55ae"))," \u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Macros"))," \uff0c\u4e26\u9078\u53d6 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Commands\u6e05\u55ae"))," \u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Macros.MyMacros.Formatting.FormatProject"))," \u9805\u76ee\uff0c\u518d\u4f86\u6309\u4e0b OK\u3002\n",(0,o.kt)("img",{alt:"\u5c07\u81ea\u52d5\u683c\u5f0f\u5de8\u96c6\u52a0\u5165",src:n(76931).Z,title:"\u5c07\u81ea\u52d5\u683c\u5f0f\u5de8\u96c6\u52a0\u5165",width:"585",height:"370"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6700\u5f8c\u53ef\u4f9d\u500b\u4eba\u559c\u597d\u4f7f\u7528 Move Up/Move Down \u6216 Modify Selection \u6309\u9215\u4f86\u8abf\u6574\u5de8\u96c6\u6309\u9215\u7684\u4f4d\u7f6e\uff0c\u5c31\u5927\u529f\u544a\u6210\u5566!!\u4ee5\u5f8c\u53ea\u8981\u6309\u4e0b\u8a72\u6309\u9215\uff0c\u5c31\u53ef\u4ee5\u4e00\u6b21\u683c\u5f0f\u5316\u6574\u500b\u5c08\u6848\u5594!!\n",(0,o.kt)("img",{alt:"\u900f\u904e\u6309\u9215\u9032\u884c\u683c\u5f0f\u5316",src:n(95460).Z,title:"\u900f\u904e\u6309\u9215\u9032\u884c\u683c\u5f0f\u5316",width:"1920",height:"1080"})))))}d.isMDXComponent=!0},76931:function(t,e,n){e.Z=n.p+"assets/images/add-auto-format-macro-36e5c999120a48efd57ed7293a86e9d2.png"},32617:function(t,e,n){e.Z=n.p+"assets/images/click-add-existing-item-b423b2d077198b3dc84ea831aa06feca.png"},95460:function(t,e,n){e.Z=n.p+"assets/images/click-button-to-auto-format-2ce9390394d4d6cf46a0318dd3d0c134.png"},13589:function(t,e,n){e.Z=n.p+"assets/images/customize-toolbar-8fecc6d5b04ef7006d0ffbaa4ecf46f8.png"},61931:function(t,e,n){e.Z=n.p+"assets/images/open-macros-ide-2d1cdbeeeeefeb82aebcb31a12d08431.png"},18618:function(t,e,n){e.Z=n.p+"assets/images/run-the-macro-6bb1dee0540f59080574bb335c9f0d5f.png"}}]);