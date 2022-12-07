"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[4029],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},S=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),S=i(n),h=l,d=S["".concat(s,".").concat(h)]||S[h]||p[h]||o;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,u=new Array(o);u[0]=S;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,u[1]=a;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}S.displayName="MDXCreateElement"},64163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(83117),l=n(80102),o=(n(67294),n(3905)),u=["components"],a={title:"\u555f\u7528 WSL2 \u4e0b Ubuntu \u7684 SSH \u9060\u7aef\u9023\u7dda\u529f\u80fd",description:"Windows Subsystem for Linux (WSL) \u4e0b\u7684 Ubuntu \u539f\u672c\u5c31\u6709\u5167\u5efa SSH \u670d\u52d9\uff0c\u4f46\u662f\u9810\u8a2d\u662f\u95dc\u9589\u7684\uff0c\u6240\u4ee5\u7121\u6cd5\u5f9e\u5916\u90e8\u9023\u9032\u53bb\u3002 \u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u5206\u4eab\u600e\u9ebc\u8a2d\u5b9a SSH \u670d\u52d9\uff0c\u8b93\u5b83\u652f\u63f4\u5f9e\u5916\u90e8\u900f\u904e SSH \u9060\u7aef\u9023\u7dda\u9032\u53bb\u64cd\u4f5c\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7","WSL2"],keywords:["WSL","Ubuntu","SSH"]},s=void 0,i={permalink:"/blog/2022/12/07/enable-ssh-in-ubuntu-on-wsl2",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-12-07-enable-ssh-in-ubuntu-on-wsl2/index.md",source:"@site/blog/2022-12-07-enable-ssh-in-ubuntu-on-wsl2/index.md",title:"\u555f\u7528 WSL2 \u4e0b Ubuntu \u7684 SSH \u9060\u7aef\u9023\u7dda\u529f\u80fd",description:"Windows Subsystem for Linux (WSL) \u4e0b\u7684 Ubuntu \u539f\u672c\u5c31\u6709\u5167\u5efa SSH \u670d\u52d9\uff0c\u4f46\u662f\u9810\u8a2d\u662f\u95dc\u9589\u7684\uff0c\u6240\u4ee5\u7121\u6cd5\u5f9e\u5916\u90e8\u9023\u9032\u53bb\u3002 \u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u5206\u4eab\u600e\u9ebc\u8a2d\u5b9a SSH \u670d\u52d9\uff0c\u8b93\u5b83\u652f\u63f4\u5f9e\u5916\u90e8\u900f\u904e SSH \u9060\u7aef\u9023\u7dda\u9032\u53bb\u64cd\u4f5c\u3002",date:"2022-12-07T00:00:00.000Z",formattedDate:"2022\u5e7412\u67087\u65e5",tags:[{label:"Windows",permalink:"/blog/tags/windows"},{label:"\u5c0f\u6280\u5de7",permalink:"/blog/tags/\u5c0f\u6280\u5de7"},{label:"WSL2",permalink:"/blog/tags/wsl-2"}],readingTime:3.455,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u555f\u7528 WSL2 \u4e0b Ubuntu \u7684 SSH \u9060\u7aef\u9023\u7dda\u529f\u80fd",description:"Windows Subsystem for Linux (WSL) \u4e0b\u7684 Ubuntu \u539f\u672c\u5c31\u6709\u5167\u5efa SSH \u670d\u52d9\uff0c\u4f46\u662f\u9810\u8a2d\u662f\u95dc\u9589\u7684\uff0c\u6240\u4ee5\u7121\u6cd5\u5f9e\u5916\u90e8\u9023\u9032\u53bb\u3002 \u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u5206\u4eab\u600e\u9ebc\u8a2d\u5b9a SSH \u670d\u52d9\uff0c\u8b93\u5b83\u652f\u63f4\u5f9e\u5916\u90e8\u900f\u904e SSH \u9060\u7aef\u9023\u7dda\u9032\u53bb\u64cd\u4f5c\u3002",authors:"ouch1978",tags:["Windows","\u5c0f\u6280\u5de7","WSL2"],keywords:["WSL","Ubuntu","SSH"]},nextItem:{title:"\u5728 Windows \u522a\u9664\u6a94\u6848\u6216\u8cc7\u6599\u593e\u6642\u51fa\u73fe Source Path Too Long \u932f\u8aa4\u7684\u56e0\u61c9\u63aa\u65bd",permalink:"/blog/2022/12/06/workaround-for-source-path-too-long-when-deleting-folder"}},c={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u555f\u7528 SSH \u670d\u52d9",id:"\u555f\u7528-ssh-\u670d\u52d9",level:2},{value:"\u8abf\u6574 SSH \u670d\u52d9\u7684\u8a2d\u5b9a",id:"\u8abf\u6574-ssh-\u670d\u52d9\u7684\u8a2d\u5b9a",level:2},{value:"\u900f\u904e SSH Client \u767b\u5165",id:"\u900f\u904e-ssh-client-\u767b\u5165",level:2},{value:"\u5f8c\u8a18",id:"\u5f8c\u8a18",level:2}],S={toc:p};function h(e){var t=e.components,a=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},S,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"Windows Subsystem for Linux (WSL) \u4e0b\u7684 Ubuntu \u539f\u672c\u5c31\u6709\u5167\u5efa SSH \u670d\u52d9\uff0c\u4f46\u662f\u9810\u8a2d\u662f\u95dc\u9589\u7684\uff0c\u6240\u4ee5\u7121\u6cd5\u5f9e\u5916\u90e8\u9023\u9032\u53bb\u3002"),(0,o.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u5206\u4eab\u600e\u9ebc\u8a2d\u5b9a SSH \u670d\u52d9\uff0c\u8b93\u5b83\u652f\u63f4\u5f9e\u5916\u90e8\u900f\u904e SSH \u9060\u7aef\u9023\u7dda\u9032\u53bb\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u555f\u7528-ssh-\u670d\u52d9"},"\u555f\u7528 SSH \u670d\u52d9"),(0,o.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u900f\u904e\u9019\u500b\u6307\u4ee4\u4f86\u5bdf\u770b SSH \u670d\u52d9\u7684\u72c0\u614b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"service ssh status\n")),(0,o.kt)("p",null,"WSL \u4e0b\u7684 Ubuntu \u9810\u8a2d\u662f\u95dc\u9589\u7684\uff0c\u6240\u4ee5\u6211\u5011\u61c9\u8a72\u6703\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"* sshd is not running")," \u9019\u500b\u8a0a\u606f\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u53ef\u4ee5\u900f\u904e\u4e0b\u9762\u9019\u500b\u6307\u4ee4\u4f86\u958b\u555f SSH \u670d\u52d9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"service ssh start\n")),(0,o.kt)("p",null,"\u5982\u679c\u6c92\u6709\u610f\u5916\u7684\u8a71\uff0c\u5b83\u61c9\u8a72\u6703\u56e0\u70ba\u6c92\u6709\u73fe\u6210\u7684 SSH Key \u5b58\u5728\uff0c\u6240\u4ee5\u6703\u51fa\u73fe ",(0,o.kt)("inlineCode",{parentName:"p"},"sshd: no hostkeys available -- exiting.")," \u9019\u500b\u932f\u8aa4\u8a0a\u606f\u3002"),(0,o.kt)("p",null,"\u65e2\u7136\u6c92\u6709 SSH Key\uff0c\u90a3\u5c31\u7528\u4e0b\u9762\u7684\u6307\u4ee4\u4f86\u7522\u4e00\u7d44\u5427\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ssh-keygen -A\n")),(0,o.kt)("p",null,"\u7522\u5b8c SSH Key \u4e4b\u5f8c\uff0c\u518d\u6b21\u8f38\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"service ssh start")," \u958b\u555f SSH \u670d\u52d9\uff0c\u670d\u52d9\u61c9\u8a72\u5c31\u53ef\u4ee5\u6b63\u5e38\u88ab\u555f\u7528\u4e86\u3002"),(0,o.kt)("p",null,"\u4e0d\u904e\uff0c\u5982\u679c\u9019\u6642\u5019\u76f4\u63a5\u900f\u904e SSH Client \u53bb\u9023\u7684\u8a71\uff0c\u6703\u767c\u73fe\u7121\u6cd5\u4f7f\u7528\u5e33\u865f\u5bc6\u78bc\u767b\u5165\u3002"),(0,o.kt)("p",null,"\u539f\u4f86\u900f\u904e\u5e33\u865f\u5bc6\u78bc\u767b\u5165\u7684\u529f\u80fd\u9810\u8a2d\u53c8\u662f\u88ab\u95dc\u6389\u7684\uff0c\u6240\u4ee5\u6211\u5011\u5f97\u8981\u518d\u8abf\u6574 SSH \u7684\u8a2d\u5b9a\u4f86\u555f\u7528\u5b83\u3002"),(0,o.kt)("h2",{id:"\u8abf\u6574-ssh-\u670d\u52d9\u7684\u8a2d\u5b9a"},"\u8abf\u6574 SSH \u670d\u52d9\u7684\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u63a5\u8457\u6211\u5011\u53ef\u4ee5\u8f38\u5165\u4e0b\u9762\u7684\u6307\u4ee4\u4f86\u7de8\u8f2f SSH \u670d\u52d9\u7684\u8a2d\u5b9a\u6a94\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nano /etc/ssh/sshd_config\n")),(0,o.kt)("p",null,"\u4f9d\u7167\u4e0d\u540c\u7684\u9700\u6c42\u8abf\u6574\u8a2d\u5b9a\u6a94\u7684\u5167\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/etc/ssh/sshd_config"',title:'"/etc/ssh/sshd_config"'},"# \u5141\u8a31\u4f7f\u7528 Root \u5e33\u865f\u9032\u884c\u767b\u5165\nPermitRootLogin yes\n\n# \u5141\u8a31\u4f7f\u7528\u516c\u9470\u9032\u884c\u767b\u5165\nPubkeyAuthentication yes\n\n# \u5141\u8a31\u4f7f\u7528\u5e33\u865f\u5bc6\u78bc\u9032\u884c\u767b\u5165\nPasswordAuthentication yes\n")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u5141\u8a31\u4f7f\u7528 Root \u5e33\u865f\u9032\u884c\u767b\u5165\u6703\u6709\u4e00\u5b9a\u7684\u98a8\u96aa\uff0c\u958b\u555f\u524d\u8acb\u8a73\u95b1 ",(0,o.kt)("a",{parentName:"p",href:"https://askubuntu.com/questions/16178/why-is-it-bad-to-log-in-as-root",title:"Why is it bad to log in as root?"},"\u516c\u958b\u8aaa\u660e\u66f8"))),(0,o.kt)("p",null,"\u8abf\u6574\u5b8c\u8a2d\u5b9a\u4e4b\u5f8c\uff0c\u8acb\u4f7f\u7528\u4e0b\u9762\u7684\u6307\u4ee4\u91cd\u65b0\u555f\u52d5 SSH \u670d\u52d9\uff0c\u8b93\u8a2d\u5b9a\u751f\u6548\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"service ssh restart\n")),(0,o.kt)("h2",{id:"\u900f\u904e-ssh-client-\u767b\u5165"},"\u900f\u904e SSH Client \u767b\u5165"),(0,o.kt)("p",null,"\u91cd\u555f\u670d\u52d9\u4e4b\u5f8c\uff0c\u5c31\u53ef\u4ee5\u7528\u81ea\u5df1\u9806\u624b\u7684 SSH Client \u767b\u5165\u770b\u770b\u5566!!"),(0,o.kt)("p",null,"\u9019\u908a\u4ee5 XsHell 7 \u70ba\u4f8b\uff0c\u5efa\u7acb\u4e00\u500b\u65b0\u7684 Session\uff0cIP \u7528\u9810\u8a2d\u7684 127.0.0.1\uff0cPort \u7dad\u6301\u9810\u8a2d\u7684 22\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5728 Xshell \u5efa\u7acb\u65b0\u7684\u9023\u7dda",src:n(12210).Z,title:"\u5728 Xshell \u5efa\u7acb\u65b0\u7684\u9023\u7dda",width:"860",height:"829"})),(0,o.kt)("p",null,"\u8f38\u5165\u5b8c\u5e33\u865f\u5bc6\u78bc\u4e4b\u5f8c\u6309\u4e0b Connect \u9215\uff0c\u5679\u5679~~  \u641e\u5b9a!!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u6210\u529f\u4ee5 SSH Client \u767b\u5165 WSL2 \u4e0b\u7684 Ubuntu",src:n(76108).Z,title:"\u6210\u529f\u4ee5 SSH Client \u767b\u5165 WSL2 \u4e0b\u7684 Ubuntu",width:"1431",height:"1215"})),(0,o.kt)("h2",{id:"\u5f8c\u8a18"},"\u5f8c\u8a18"),(0,o.kt)("p",null,"\u5176\u5be6\u672c\u6587\u4e2d\u95dc\u65bc SSH \u670d\u52d9\u7684\u8a2d\u5b9a\u8abf\u6574\u4e26\u4e0d\u53ea\u9650\u5b9a\u53ea\u80fd\u7528\u5728 WSL \u4e0b\u7684 Ubuntu\uff0c\u4e00\u822c\u7684 Ubuntu \u4e5f\u662f\u9069\u7528\u7684\u5594!!"),(0,o.kt)("p",null,"\u5982\u679c\u6709\u767c\u73fe\u7121\u6cd5\u5f9e\u9060\u7aef\u900f\u904e SSH Public Key \u767b\u5165\u7684\u8a71\uff0c\u901a\u5e38\u4e5f\u662f\u56e0\u70ba\u6c92\u6709\u555f\u7528\u7684\u95dc\u4fc2\uff0c\u8abf\u6574\u4e00\u4e0b\u8a2d\u5b9a\u518d\u91cd\u555f SSH \u670d\u52d9\u5c31\u53ef\u4ee5\u56c9!!"),(0,o.kt)("p",null,"\u4ee5\u4e0a!!"))}h.isMDXComponent=!0},12210:function(e,t,n){t.Z=n.p+"assets/images/create-new-session-with-xshell-88083949ecfe41fe667275d70bb6f7c4.png"},76108:function(e,t,n){t.Z=n.p+"assets/images/login-ubuntu-on-wsl2-over-ssh-e9959b08a0feb3ad720ddcf8db0a292d.png"}}]);