"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[6766],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,d=m["".concat(a,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),l=["components"],p={title:"\u57f7\u884c npm login \u6642\u51fa\u73fe Web login not supported \u932f\u8aa4\u7684\u56e0\u61c9\u63aa\u65bd",description:"\u4eca\u5929\u5728\u8655\u7406\u628a npm \u9810\u8a2d\u7684 registry \u6539\u70ba\u516c\u53f8\u5167\u90e8\u7684 Nexus Repository \u4f3a\u670d\u5668\u6642\uff0c\u57f7\u884c\u5230 npm login \u9019\u500b\u6307\u4ee4\u5c31\u5674\u4e86 `Web login not supported` \u9019\u500b\u932f\u8aa4\u3002\u4e0a\u7db2\u4e00\u67e5\uff0c\u539f\u4f86\u82e6\u4e3b\u53c8\u4e0d\u53ea\u6211\u4e00\u500b\uff0c\u770b\u8d77\u4f86\u662f\u56e0\u70ba npm 9 \u4e4b\u5f8c\u76f8\u5bb9\u6027\u4e0d\u540c\u9020\u6210\u7684\u3002",authors:"ouch1978",tags:["Windows","Trouble Shooting","npm"],keywords:["npm login","npm ERR!","code ENYI"]},a=void 0,u={permalink:"/blog/2022/12/05/workaround-for-npm-web-login-not-support-error",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-12-05-workaround-for-npm-web-login-not-support-error/index.md",source:"@site/blog/2022-12-05-workaround-for-npm-web-login-not-support-error/index.md",title:"\u57f7\u884c npm login \u6642\u51fa\u73fe Web login not supported \u932f\u8aa4\u7684\u56e0\u61c9\u63aa\u65bd",description:"\u4eca\u5929\u5728\u8655\u7406\u628a npm \u9810\u8a2d\u7684 registry \u6539\u70ba\u516c\u53f8\u5167\u90e8\u7684 Nexus Repository \u4f3a\u670d\u5668\u6642\uff0c\u57f7\u884c\u5230 npm login \u9019\u500b\u6307\u4ee4\u5c31\u5674\u4e86 `Web login not supported` \u9019\u500b\u932f\u8aa4\u3002\u4e0a\u7db2\u4e00\u67e5\uff0c\u539f\u4f86\u82e6\u4e3b\u53c8\u4e0d\u53ea\u6211\u4e00\u500b\uff0c\u770b\u8d77\u4f86\u662f\u56e0\u70ba npm 9 \u4e4b\u5f8c\u76f8\u5bb9\u6027\u4e0d\u540c\u9020\u6210\u7684\u3002",date:"2022-12-05T00:00:00.000Z",formattedDate:"2022\u5e7412\u67085\u65e5",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"Trouble Shooting",permalink:"/blog/tags/trouble-shooting"},{label:"npm",permalink:"/blog/tags/npm"}],readingTime:1.305,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u57f7\u884c npm login \u6642\u51fa\u73fe Web login not supported \u932f\u8aa4\u7684\u56e0\u61c9\u63aa\u65bd",description:"\u4eca\u5929\u5728\u8655\u7406\u628a npm \u9810\u8a2d\u7684 registry \u6539\u70ba\u516c\u53f8\u5167\u90e8\u7684 Nexus Repository \u4f3a\u670d\u5668\u6642\uff0c\u57f7\u884c\u5230 npm login \u9019\u500b\u6307\u4ee4\u5c31\u5674\u4e86 `Web login not supported` \u9019\u500b\u932f\u8aa4\u3002\u4e0a\u7db2\u4e00\u67e5\uff0c\u539f\u4f86\u82e6\u4e3b\u53c8\u4e0d\u53ea\u6211\u4e00\u500b\uff0c\u770b\u8d77\u4f86\u662f\u56e0\u70ba npm 9 \u4e4b\u5f8c\u76f8\u5bb9\u6027\u4e0d\u540c\u9020\u6210\u7684\u3002",authors:"ouch1978",tags:["Windows","Trouble Shooting","npm"],keywords:["npm login","npm ERR!","code ENYI"]},prevItem:{title:"\u5728 Windows \u522a\u9664\u6a94\u6848\u6216\u8cc7\u6599\u593e\u6642\u51fa\u73fe Source Path Too Long \u932f\u8aa4\u7684\u56e0\u61c9\u63aa\u65bd",permalink:"/blog/2022/12/06/workaround-for-source-path-too-long-when-deleting-folder"},nextItem:{title:"\u9023\u7dda\u5230\u9060\u7aef Windows Server \u6642\u51fa\u73fe There are no Remote Desktop License Servers available to provide a license \u7684\u56e0\u61c9\u63aa\u65bd",permalink:"/blog/2022/11/23/rdp-no-license-server-error-workaround"}},s={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u56e0\u61c9\u63aa\u65bd",id:"\u56e0\u61c9\u63aa\u65bd",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u624b\u52d5\u7de8\u8f2f .npmrc \u6a94",id:"\u65b9\u6cd5\u4e00\u624b\u52d5\u7de8\u8f2f-npmrc-\u6a94",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u52a0\u4e0a --auth-type=legacy \u53c3\u6578",id:"\u65b9\u6cd5\u4e8c\u52a0\u4e0a---auth-typelegacy-\u53c3\u6578",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u4eca\u5929\u5728\u8655\u7406\u628a npm \u9810\u8a2d\u7684 registry \u6539\u70ba\u516c\u53f8\u5167\u90e8\u7684 Nexus Repository \u4f3a\u670d\u5668\u6642\uff0c\u57f7\u884c\u5230 npm login \u9019\u500b\u6307\u4ee4\u5c31\u5674\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Web login not supported")," \u9019\u500b\u932f\u8aa4\u3002"),(0,i.kt)("p",null,"\u4e0a\u7db2\u4e00\u67e5\uff0c\u539f\u4f86\u82e6\u4e3b\u53c8\u4e0d\u53ea\u6211\u4e00\u500b\uff0c\u770b\u8d77\u4f86\u662f\u56e0\u70ba Nexus Repository \u548c npm 9 \u4e4b\u5f8c\u76f8\u5bb9\u6027\u4e0d\u540c\u9020\u6210\u7684\u3002"),(0,i.kt)("h2",{id:"\u56e0\u61c9\u63aa\u65bd"},"\u56e0\u61c9\u63aa\u65bd"),(0,i.kt)("p",null,"\u6551\u52a9 Google \u5927\u795e\u4e4b\u5f8c\uff0c\u627e\u5230\u5169\u500b\u89e3\u6cd5\uff0c\u4e0d\u904e\u6211\u76ee\u524d\u7528\u7b2c\u4e00\u500b\u65b9\u6cd5\u5c31\u6210\u529f\u4e86\u3002"),(0,i.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u624b\u52d5\u7de8\u8f2f-npmrc-\u6a94"},"\u65b9\u6cd5\u4e00\uff1a\u624b\u52d5\u7de8\u8f2f .npmrc \u6a94"),(0,i.kt)("p",null,"\u4ee5\u6587\u5b57\u7de8\u8f2f\u5668\u7de8\u8f2f ",(0,i.kt)("inlineCode",{parentName:"p"},"%UserProfile%\\.npmrc")," \u6a94\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="%UserProfile%\\.npmrc"',title:'"%UserProfile%\\.npmrc"'},'registry=https://{\u4f60\u7684\u79c1\u6709 Repository \u8def\u5f91}\nalways-auth=true\n//{\u4f60\u7684\u79c1\u6709 Repository \u8def\u5f91}:_auth="{\u4f60\u7684\u5e33\u865f:\u4f60\u7684\u5bc6\u78bc \u7684 base64 \u7de8\u78bc\u5b57\u4e32}"\n')),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="%UserProfile%\\.npmrc"',title:'"%UserProfile%\\.npmrc"'},'registry=https://registry.ouch1978.io/repository/npm/\nalways-auth=true\n//registry.ouch1978.io/repository/npm/:_auth="b3VjaDE5Nzg6bXlUZXN0cGFzc3dvcmQ="\n')),(0,i.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u52a0\u4e0a---auth-typelegacy-\u53c3\u6578"},"\u65b9\u6cd5\u4e8c\uff1a\u52a0\u4e0a --auth-type=legacy \u53c3\u6578"),(0,i.kt)("p",null,"\u5728\u539f\u4f86\u7684\u6307\u4ee4\u5f8c\u9762\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"--auth-type=legacy")," \u53c3\u6578\u5373\u53ef\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-pwsh"},"npm login --registry https://registry.ouch1978.io/repository/npm/ --auth-type=legacy\n")),(0,i.kt)("p",null,"\u9019\u500b\u65b9\u6cd5\u6bd4\u7b2c\u4e00\u500b\u65b9\u6cd5\u4f86\u5f97\u76f4\u89ba\u5f97\u591a\uff0c\u4e5f\u65b9\u4fbf\u4e86\u8a31\u591a\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0a\u3002"),(0,i.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://clavinjune.dev/en/blogs/npm-login-not-working/",title:"NPM Login Not Working"},"NPM Login Not Working"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/74482745/npm-login-not-allowing-login-to-github",title:"npm login not allowing login to github"},"npm login not allowing login to github")))))}g.isMDXComponent=!0}}]);