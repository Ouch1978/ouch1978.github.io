"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[6966],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23011:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={title:"\u4e00\u6b21\u522a\u9664\u6240\u6709\u8cc7\u6e90\u7684\u6307\u4ee4",description:"\u6536\u9304\u6e05\u7406\u548c\u5bb9\u5668\u76f8\u95dc\u8cc7\u6e90\u7684\u5404\u7a2e\u6307\u4ee4\u3002",author:"ouch1978",tags:["Container","Docker"],keywords:["Docker","CLI","\u6307\u4ee4","\u522a\u9664","\u5bb9\u5668"]},l=void 0,u={unversionedId:"containerization/docker-cheatsheet/prune-all-containers/index",id:"containerization/docker-cheatsheet/prune-all-containers/index",title:"\u4e00\u6b21\u522a\u9664\u6240\u6709\u8cc7\u6e90\u7684\u6307\u4ee4",description:"\u6536\u9304\u6e05\u7406\u548c\u5bb9\u5668\u76f8\u95dc\u8cc7\u6e90\u7684\u5404\u7a2e\u6307\u4ee4\u3002",source:"@site/docs/03-containerization/02-docker-cheatsheet/01-prune-all-containers/index.md",sourceDirName:"03-containerization/02-docker-cheatsheet/01-prune-all-containers",slug:"/containerization/docker-cheatsheet/prune-all-containers/",permalink:"/docs/containerization/docker-cheatsheet/prune-all-containers/",draft:!1,editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/docs/03-containerization/02-docker-cheatsheet/01-prune-all-containers/index.md",tags:[{label:"Container",permalink:"/docs/tags/container"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",lastUpdatedAt:1663692393,formattedLastUpdatedAt:"2022\u5e749\u670820\u65e5",frontMatter:{title:"\u4e00\u6b21\u522a\u9664\u6240\u6709\u8cc7\u6e90\u7684\u6307\u4ee4",description:"\u6536\u9304\u6e05\u7406\u548c\u5bb9\u5668\u76f8\u95dc\u8cc7\u6e90\u7684\u5404\u7a2e\u6307\u4ee4\u3002",author:"ouch1978",tags:["Container","Docker"],keywords:["Docker","CLI","\u6307\u4ee4","\u522a\u9664","\u5bb9\u5668"]},sidebar:"tutorialSidebar",previous:{title:"\u5728 Ubuntu \u4e2d\u4fee\u6539\u6642\u5340\u4ee5\u53ca\u555f\u7528\u81ea\u52d5\u6642\u9593\u6821\u6b63\u670d\u52d9",permalink:"/docs/containerization/linux-cheatsheet/adjust-timezone-and-sync-time/"},next:{title:"\u8b93\u5bb9\u5668\u900f\u904e\u4ee3\u7406\u4f3a\u670d\u5668(Proxy)\u5b58\u53d6\u7db2\u8def",permalink:"/docs/containerization/docker-cheatsheet/make-container-access-network-through-proxy/"}},p={},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",level:2},{value:"\u522a\u9664\u6240\u6709\u5bb9\u5668",id:"\u522a\u9664\u6240\u6709\u5bb9\u5668",level:2},{value:"\u522a\u9664\u6240\u6709\u6620\u50cf\u6a94",id:"\u522a\u9664\u6240\u6709\u6620\u50cf\u6a94",level:2},{value:"\u522a\u9664\u6240\u6709 Volume",id:"\u522a\u9664\u6240\u6709-volume",level:2},{value:"\u522a\u9664\u6240\u6709\u7db2\u8def",id:"\u522a\u9664\u6240\u6709\u7db2\u8def",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5728\u73a9\u5bb9\u5668\u5316\u7684\u6642\u5019\uff0c\u5f80\u5f80\u4e00\u4e0d\u5c0f\u5fc3\u5c31\u5efa\u4e86\u4e00\u5927\u5806\u7684\u5bb9\u5668\uff0c\u62c9\u4e86\u4e00\u5927\u5806\u7684 Image\u3002"),(0,a.kt)("p",null,"\u9019\u7bc7\u5c31\u8a18\u9304\u4e00\u4e0b\u6e05\u7406\u548c\u5bb9\u5668\u76f8\u95dc\u8cc7\u6e90\u7684\u5404\u7a2e\u6307\u4ee4\u3002"),(0,a.kt)("h2",{id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668"},"\u505c\u6b62\u6240\u6709\u5bb9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker container stop $(docker container ls -aq)\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f!! \u4e0b\u5217\u7684\u6307\u4ee4\u90fd\u6703\u9020\u6210\u7269\u7406\u4e0a\u7684\u5f71\u97ff\uff0c\u8acb\u5c0f\u5fc3\u670d\u7528\u3002")),(0,a.kt)("h2",{id:"\u522a\u9664\u6240\u6709\u5bb9\u5668"},"\u522a\u9664\u6240\u6709\u5bb9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker container rm $(docker container ls -aq)\n")),(0,a.kt)("h2",{id:"\u522a\u9664\u6240\u6709\u6620\u50cf\u6a94"},"\u522a\u9664\u6240\u6709\u6620\u50cf\u6a94"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker image prune -a -f\n")),(0,a.kt)("h2",{id:"\u522a\u9664\u6240\u6709-volume"},"\u522a\u9664\u6240\u6709 Volume"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker volume prune -f\n")),(0,a.kt)("h2",{id:"\u522a\u9664\u6240\u6709\u7db2\u8def"},"\u522a\u9664\u6240\u6709\u7db2\u8def"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker network prune -f\n")))}m.isMDXComponent=!0}}]);