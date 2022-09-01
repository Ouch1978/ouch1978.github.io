"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[263],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,d=m["".concat(l,".").concat(p)]||m[p]||b[p]||o;return n?a.createElement(d,u(u({ref:t},s),{},{components:n})):a.createElement(d,u({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var c=2;c<o;c++)u[c]=n[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39705:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return b}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),u=["components"],i={title:"\u5728 Ubuntu \u4e2d\u5feb\u901f\u5efa\u7acb Samba \u670d\u52d9",description:"\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u5efa\u7acb Samba \u670d\u52d9\u3002",author:"ouch1978",tags:["Container","Docker","Ubuntu"],keywords:["Ubuntu","\u6307\u4ee4","Samba"]},l=void 0,c={unversionedId:"containerization/linux-cheatsheet/enabled-samba-on-ubuntu/index",id:"containerization/linux-cheatsheet/enabled-samba-on-ubuntu/index",title:"\u5728 Ubuntu \u4e2d\u5feb\u901f\u5efa\u7acb Samba \u670d\u52d9",description:"\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u5efa\u7acb Samba \u670d\u52d9\u3002",source:"@site/docs/03-containerization/01-linux-cheatsheet/03-enabled-samba-on-ubuntu/index.md",sourceDirName:"03-containerization/01-linux-cheatsheet/03-enabled-samba-on-ubuntu",slug:"/containerization/linux-cheatsheet/enabled-samba-on-ubuntu/",permalink:"/docs/containerization/linux-cheatsheet/enabled-samba-on-ubuntu/",draft:!1,editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/docs/03-containerization/01-linux-cheatsheet/03-enabled-samba-on-ubuntu/index.md",tags:[{label:"Container",permalink:"/docs/tags/container"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Ubuntu",permalink:"/docs/tags/ubuntu"}],version:"current",lastUpdatedAt:1662046507,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",frontMatter:{title:"\u5728 Ubuntu \u4e2d\u5feb\u901f\u5efa\u7acb Samba \u670d\u52d9",description:"\u7c21\u55ae\u4ecb\u7d39\u5982\u4f55\u900f\u904e\u547d\u4ee4\u6a21\u5f0f\u4f86\u5728 Ubuntu \u4e2d\u5efa\u7acb Samba \u670d\u52d9\u3002",author:"ouch1978",tags:["Container","Docker","Ubuntu"],keywords:["Ubuntu","\u6307\u4ee4","Samba"]},sidebar:"tutorialSidebar",previous:{title:"\u5728 Ubuntu \u4e2d\u900f\u904e\u6307\u4ee4\u8abf\u6574\u78c1\u789f\u5927\u5c0f",permalink:"/docs/containerization/linux-cheatsheet/adjust-disk-size-on-ubuntu/"},next:{title:"\u5728 Ubuntu \u4e2d\u8a2d\u5b9a\u5168\u57df\u7684 Proxy",permalink:"/docs/containerization/linux-cheatsheet/set-system-proxy-on-ubuntu/"}},s={},b=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u900f\u904e apt-get \u5b89\u88dd Samba \u670d\u52d9",id:"\u900f\u904e-apt-get-\u5b89\u88dd-samba-\u670d\u52d9",level:2},{value:"\u8a2d\u5b9a Samba \u670d\u52d9\u7684\u5167\u5bb9",id:"\u8a2d\u5b9a-samba-\u670d\u52d9\u7684\u5167\u5bb9",level:2}],m={toc:b};function p(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528 VM \u7684\u6642\u5019\uff0c\u5f80\u5f80\u9700\u8981\u5728\u4e0d\u540c\u7684\u6a5f\u5668\u4e4b\u9593\u5171\u7528\u6a94\u6848\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6709 Samba \u7684\u52a0\u6301\uff0c\u4e0d\u7528\u900f\u904e FTP \uff0c\u76f4\u63a5\u5728 Windows \u4e2d\u5c31\u80fd\u4f7f\u7528\u6a94\u6848\u7e3d\u7ba1\u4f86\u5c0d Ubuntu \u7684\u76ee\u9304\u548c\u6a94\u6848\u9032\u884c\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u5c31\u4f86\u5206\u4eab\u600e\u9ebc\u5728 Ubuntu \u5feb\u901f\u7684\u5efa\u7acb\u5177\u5099\u6700\u57fa\u672c\u529f\u80fd\u7684 Samba \u670d\u52d9\u3002"),(0,o.kt)("h2",{id:"\u900f\u904e-apt-get-\u5b89\u88dd-samba-\u670d\u52d9"},"\u900f\u904e apt-get \u5b89\u88dd Samba \u670d\u52d9"),(0,o.kt)("p",null,"\u5b89\u88dd Samba \u670d\u52d9\u7684\u6307\u4ee4\u5f88\u7c21\u55ae\uff0c\u53ea\u8981\u5728 Console \u8f38\u5165\u4e0b\u5217\u6307\u4ee4\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"apt-get install samba\n")),(0,o.kt)("h2",{id:"\u8a2d\u5b9a-samba-\u670d\u52d9\u7684\u5167\u5bb9"},"\u8a2d\u5b9a Samba \u670d\u52d9\u7684\u5167\u5bb9"),(0,o.kt)("p",null,"\u5b89\u88dd\u5b8c Samba \u670d\u52d9\u4e4b\u5f8c\uff0c\u53ef\u4ee5\u900f\u904e\u7de8\u8f2f\u5b83\u7684\u8a2d\u5b9a\u6a94\uff0c\u4f86\u6c7a\u5b9a\u8981\u5206\u4eab\u54ea\u4e9b\u76ee\u9304\u51fa\u53bb\uff0c\u4ee5\u53ca\u76f8\u95dc\u7684\u6b0a\u9650\u3002"),(0,o.kt)("p",null,"\u9019\u908a\u7531\u65bc\u90fd\u662f\u5167\u90e8\u4f7f\u7528\uff0c\u6240\u4ee5\u57fa\u672c\u4e0a\u5c31\u4e0d\u9396\u6b0a\u9650\u4e86\u3002"),(0,o.kt)("p",null,"\u7de8\u8f2f\u8a2d\u5b9a\u6a94\u7684\u6307\u4ee4\u70ba\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nano /etc/samba/smb.conf\n")),(0,o.kt)("p",null,"\u5047\u8a2d\u6211\u5011\u5df2\u7d93\u5efa\u597d\u4e86 /home/shared \u9019\u500b\u76ee\u9304\uff0c\u4e5f\u900f\u904e chmod \u8a2d\u597d\u4e86\u6b0a\u9650\uff0c\u63a5\u4e0b\u4f86\u8981\u8b93\u5b83\u900f\u904e Samba \u5171\u4eab\u3002"),(0,o.kt)("p",null,"\u90a3\u6211\u5011\u7684\u8a2d\u5b9a\u6a94\u53ef\u4ee5\u53c3\u8003\u4e0b\u9762\u7684\u5167\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf",metastring:'title="/etc/samba/smb.conf"',title:'"/etc/samba/smb.conf"'},"[global]\n   workgroup = WORKGROUP\n   server string = %h server (Samba, Ubuntu)\n   map to guest = bad user\n   usershare allow guests = yes\n   security = user\n\n[Shared]\n   path = /home/shared\n   writable = yes\n   guest ok = yes\n   read only = no\n   force user = nobody\n   browseable = yes\n   create mask = 777\n   directory mask = 777\n")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0a\u9762\u6307\u4ee4\u7bc4\u4f8b\u6703\u628a /home/shared \u8cc7\u6599\u593e\u900f\u904e Samba \u670d\u52d9\u5171\u4eab\u51fa\u53bb\uff0c\u4e14\u4e0d\u9396\u5e33\u865f\u548c\u6b0a\u9650\uff0c\u8acb\u5c0f\u5fc3\u670d\u7528\u3002")),(0,o.kt)("p",null,"\u7de8\u8f2f\u5b8c\u7562\u4e4b\u5f8c\u6309\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + X")," \u5b58\u6a94\u9000\u51fa\u4e4b\u5f8c\uff0c\u8f38\u5165\u4e0b\u5217\u6307\u4ee4\u91cd\u555f Samba \u670d\u52d9\uff0c\u5c31\u53ef\u4ee5\u5728\u5176\u4ed6\u96fb\u8166\u4e0a\u958b\u5fc3\u7684\u4f7f\u7528 Samba \u4f86\u5b58\u53d6\u5b83\u56c9!!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl restart smbd\n")))}p.isMDXComponent=!0}}]);