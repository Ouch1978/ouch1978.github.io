"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[2170],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=l(n),k=o,h=s["".concat(u,".").concat(k)]||s[k]||y[k]||p;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},90870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return y}});var r=n(83117),o=n(80102),p=(n(67294),n(3905)),a=["components"],i={title:"\u900f\u904e Python \u53d6\u5f97 Skype \u7fa4\u7d44\u7684 ID",description:"\u6700\u8fd1\u5728\u6574\u7406\u90e8\u9580 Skype \u6a5f\u5668\u4eba\u7684\u7a0b\u5f0f\uff0c\u767c\u73fe\u539f\u4f86\u900f\u904e\u7a0b\u5f0f\u767c\u9001\u8a0a\u606f\u7d66\u67d0\u500b\u7fa4\u7d44\u6642\u53ea\u80fd\u900f\u904e\u5b83\u7684 ID \u4f86\u767c\u9001\u3002\u524d\u4eba\u90fd\u662f\u900f\u904e Skype Web \u642d\u914d\u958b\u767c\u8005\u5de5\u5177\u4f86\u64f7\u53d6 Group ID\uff0c\u6211\u5c31\u597d\u5947\uff0c\u96e3\u9053\u6c92\u6709\u66f4\u8070\u660e\u4e00\u9ede\u7684\u65b9\u6cd5\u55ce?",authors:"ouch1978",tags:["Windows","Skype","Python"],keywords:["SkPy","SkypeChats","VSCode"]},u=void 0,l={permalink:"/blog/2022/12/30/get-skype-group-id-with-python",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-12-30-get-skype-group-id-with-python/index.md",source:"@site/blog/2022-12-30-get-skype-group-id-with-python/index.md",title:"\u900f\u904e Python \u53d6\u5f97 Skype \u7fa4\u7d44\u7684 ID",description:"\u6700\u8fd1\u5728\u6574\u7406\u90e8\u9580 Skype \u6a5f\u5668\u4eba\u7684\u7a0b\u5f0f\uff0c\u767c\u73fe\u539f\u4f86\u900f\u904e\u7a0b\u5f0f\u767c\u9001\u8a0a\u606f\u7d66\u67d0\u500b\u7fa4\u7d44\u6642\u53ea\u80fd\u900f\u904e\u5b83\u7684 ID \u4f86\u767c\u9001\u3002\u524d\u4eba\u90fd\u662f\u900f\u904e Skype Web \u642d\u914d\u958b\u767c\u8005\u5de5\u5177\u4f86\u64f7\u53d6 Group ID\uff0c\u6211\u5c31\u597d\u5947\uff0c\u96e3\u9053\u6c92\u6709\u66f4\u8070\u660e\u4e00\u9ede\u7684\u65b9\u6cd5\u55ce?",date:"2022-12-30T00:00:00.000Z",formattedDate:"2022\u5e7412\u670830\u65e5",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"Skype",permalink:"/blog/tags/skype"},{label:"Python",permalink:"/blog/tags/python"}],readingTime:1.76,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u900f\u904e Python \u53d6\u5f97 Skype \u7fa4\u7d44\u7684 ID",description:"\u6700\u8fd1\u5728\u6574\u7406\u90e8\u9580 Skype \u6a5f\u5668\u4eba\u7684\u7a0b\u5f0f\uff0c\u767c\u73fe\u539f\u4f86\u900f\u904e\u7a0b\u5f0f\u767c\u9001\u8a0a\u606f\u7d66\u67d0\u500b\u7fa4\u7d44\u6642\u53ea\u80fd\u900f\u904e\u5b83\u7684 ID \u4f86\u767c\u9001\u3002\u524d\u4eba\u90fd\u662f\u900f\u904e Skype Web \u642d\u914d\u958b\u767c\u8005\u5de5\u5177\u4f86\u64f7\u53d6 Group ID\uff0c\u6211\u5c31\u597d\u5947\uff0c\u96e3\u9053\u6c92\u6709\u66f4\u8070\u660e\u4e00\u9ede\u7684\u65b9\u6cd5\u55ce?",authors:"ouch1978",tags:["Windows","Skype","Python"],keywords:["SkPy","SkypeChats","VSCode"]},nextItem:{title:"\u89e3\u6c7a Python \u5728 VSCode \u4e2d\u57f7\u884c\u6642\u8f38\u51fa\u7684\u4e2d\u6587\u70ba\u4e82\u78bc\u7684\u554f\u984c",permalink:"/blog/2022/12/29/solve-vscode-python-utf8-display"}},c={authorsImageUrls:[void 0]},y=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u900f\u904e Python \u53d6\u5f97\u6240\u6709\u7fa4\u7d44\u540d\u7a31\u8207 ID",id:"\u900f\u904e-python-\u53d6\u5f97\u6240\u6709\u7fa4\u7d44\u540d\u7a31\u8207-id",level:2}],s={toc:y};function k(e){var t=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,p.kt)("p",null,"\u6700\u8fd1\u5728\u6574\u7406\u90e8\u9580 Skype \u6a5f\u5668\u4eba\u7684\u7a0b\u5f0f\uff0c\u767c\u73fe\u539f\u4f86\u900f\u904e\u7a0b\u5f0f\u767c\u9001\u8a0a\u606f\u7d66\u67d0\u500b\u7fa4\u7d44\u6642\u53ea\u80fd\u900f\u904e\u5b83\u7684 ID \u4f86\u767c\u9001\u3002"),(0,p.kt)("p",null,"\u524d\u4eba\u90fd\u662f\u900f\u904e Skype Web \u642d\u914d\u958b\u767c\u8005\u5de5\u5177\u4f86\u64f7\u53d6 Group ID\uff0c\u6211\u5c31\u597d\u5947\uff0c\u96e3\u9053\u6c92\u6709\u66f4\u8070\u660e\u4e00\u9ede\u7684\u65b9\u6cd5\u55ce?"),(0,p.kt)("h2",{id:"\u900f\u904e-python-\u53d6\u5f97\u6240\u6709\u7fa4\u7d44\u540d\u7a31\u8207-id"},"\u900f\u904e Python \u53d6\u5f97\u6240\u6709\u7fa4\u7d44\u540d\u7a31\u8207 ID"),(0,p.kt)("p",null,"\u9019\u908a\u53ef\u4ee5\u76f4\u63a5\u900f\u904e VSCode \u9032\u884c\u64cd\u4f5c\uff0c\u5148\u5efa\u7acb\u4e00\u500b\u8cc7\u6599\u593e\u4e4b\u5f8c\uff0c\u4ee5 VSCode \u958b\u555f\u3002"),(0,p.kt)("p",null,"\u63a5\u8457\u900f\u904e\u7d42\u7aef\u6a5f(\u958b\u555f\u7d42\u7aef\u6a5f\u7684\u71b1\u9375\u70ba ",(0,p.kt)("kbd",null,"Ctrl")," + ",(0,p.kt)("kbd",null,"`"),")\u5b89\u88dd SkPy \u9019\u500b\u5957\u4ef6\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pip3 install SkPy\n")),(0,p.kt)("p",null,"\u63a5\u8457\u5efa\u7acb\u4e00\u500b\u65b0\u6a94\u6848\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="SkypeChats.py"',title:'"SkypeChats.py"'},"# \u5f15\u7528 skpy \u5957\u4ef6\u88e1\u7684 Skype \u548c SkypeChats\nfrom skpy import Skype, SkypeChats\n\n# \u5efa\u7acb Skype \u9023\u7dda\nsk = Skype(\"Skype \u5e33\u865f\", \"Skype \u5bc6\u78bc\")\n\n# \u5efa\u7acb\u5c0d\u8a71\u7269\u4ef6\nskc = SkypeChats(sk)\n\n# \u53d6\u5f97\u6700\u8fd1\u5c0d\u8a71\u8a18\u9304(\u9810\u8a2d\u4e00\u6279\u53ea\u6703\u62ff\u51fa 10 \u7b46)\nchats = skc.recent()\n\n# \u5982\u679c\u5c0d\u8a71\u8a18\u9304\u7b46\u6578 > 0 \u5c31\u57f7\u884c\nwhile len(chats) > 0:\n\n    for chat in chats.values():\n\n        # \u53d6\u5f97\u7fa4\u7d44\u540d\u7a31\n        group_name = getattr(chat, 'topic', 'no attr')\n\n        # \u53d6\u5f97\u7fa4\u7d44 ID\n        group_id = getattr(chat, 'id', 'no id')\n\n        if group_name != 'no attr':\n            \n            # \u5982\u679c\u6293\u5f97\u5230\u7fa4\u7d44\u540d\u7a31\u7684\u8a71\u5c31\u5370\u51fa\u540d\u7a31\u548c ID\n            print('Group Name:', group_name, ', Group Id:', group_id)\n\n    # \u53d6\u5f97\u4e0b\u4e00\u6279\u5c0d\u8a71\u8a18\u9304\n    chats = skc.recent()\n")),(0,p.kt)("p",null,"\u76f4\u63a5\u7d66\u5b83\u57f7\u884c\u4e0b\u53bb\uff0c\u5c31\u6703\u628a\u5e33\u865f\u6709\u52a0\u5165\u7684\u6240\u6709\u7fa4\u7d44\u540d\u7a31\u548c ID \u90fd\u5217\u51fa\u4f86\u56c9!!"),(0,p.kt)("p",null,"\u4ee5\u4e0a\u3002"))}k.isMDXComponent=!0}}]);