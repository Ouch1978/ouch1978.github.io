"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[6903],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24937:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return d},default:function(){return k}});var i=n(83117),l=n(80102),a=(n(67294),n(3905)),o=["components"],r={title:"\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u5011\u4e0d\u53ef\u4e0d\u77e5\u9053\u7684 Windows 10 \u8a2d\u5b9a\u5c0f\u6487\u6b65",slug:"2018-03-16-windows-10-configuration-tips-for-developers",authors:"ouch1978",tags:["Windows 10","\u5be6\u7528\u5c0f\u6280\u5de7","extension"]},p=void 0,s={permalink:"/blog/2018-03-16-windows-10-configuration-tips-for-developers",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/website/blog/2018-03-16-windows-10-configuration-tips-for-developers/2018-03-16-windows-10-configuration-tips-for-developers.md",source:"@site/blog/2018-03-16-windows-10-configuration-tips-for-developers/2018-03-16-windows-10-configuration-tips-for-developers.md",title:"\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u5011\u4e0d\u53ef\u4e0d\u77e5\u9053\u7684 Windows 10 \u8a2d\u5b9a\u5c0f\u6487\u6b65",description:"\u524d\u8a00",date:"2018-03-16T00:00:00.000Z",formattedDate:"2018\u5e743\u670816\u65e5",tags:[{label:"Windows 10",permalink:"/blog/tags/windows-10"},{label:"\u5be6\u7528\u5c0f\u6280\u5de7",permalink:"/blog/tags/\u5be6\u7528\u5c0f\u6280\u5de7"},{label:"extension",permalink:"/blog/tags/extension"}],readingTime:10.535,truncated:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u5de5\u7a0b\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u5011\u4e0d\u53ef\u4e0d\u77e5\u9053\u7684 Windows 10 \u8a2d\u5b9a\u5c0f\u6487\u6b65",slug:"2018-03-16-windows-10-configuration-tips-for-developers",authors:"ouch1978",tags:["Windows 10","\u5be6\u7528\u5c0f\u6280\u5de7","extension"]},prevItem:{title:'\u89e3\u6c7a\u50b3\u7d71\u684c\u9762\u7248 Skype \u5728\u66f4\u65b0\u6642\u51fa\u73fe 1603 "The specified Account already exists" \u932f\u8aa4',permalink:"/blog/2018-04-10-fix-skype-update-error-1603"},nextItem:{title:"\u4e94\u5206\u9418\u770b\u5b8c C# 7.2",permalink:"/blog/2018-01-31-understand-csharp-7.2-in-5-minutes"}},u={authorsImageUrls:[void 0]},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5c07\u7a0b\u5f0f\u8a2d\u5b9a\u70ba\u81ea\u52d5\u555f\u52d5",id:"\u5c07\u7a0b\u5f0f\u8a2d\u5b9a\u70ba\u81ea\u52d5\u555f\u52d5",level:2},{value:"\u5728\u7db2\u57df\u4e0b\u555f\u7528 PIN \u5bc6\u78bc\u8207 Windows Hello \u6307\u7d0b\u89e3\u9396\u529f\u80fd",id:"\u5728\u7db2\u57df\u4e0b\u555f\u7528-pin-\u5bc6\u78bc\u8207-windows-hello-\u6307\u7d0b\u89e3\u9396\u529f\u80fd",level:2},{value:"\u70ba\u591a\u87a2\u5e55\u8a2d\u5b9a\u4e0d\u540c\u7684\u684c\u5e03",id:"\u70ba\u591a\u87a2\u5e55\u8a2d\u5b9a\u4e0d\u540c\u7684\u684c\u5e03",level:2},{value:"\u6a94\u6848\u7e3d\u7ba1\u76f8\u95dc",id:"\u6a94\u6848\u7e3d\u7ba1\u76f8\u95dc",level:2},{value:"\u4fee\u6539\u9810\u8a2d\u7684\u4e0b\u8f09(Downloads)\u548c\u684c\u9762(Desktop)\u8cc7\u6599\u593e\u8def\u5f91",id:"\u4fee\u6539\u9810\u8a2d\u7684\u4e0b\u8f09downloads\u548c\u684c\u9762desktop\u8cc7\u6599\u593e\u8def\u5f91",level:3},{value:"\u4fee\u6539\u6a94\u6848\u7e3d\u7ba1\u8d77\u59cb\u7684\u4f4d\u7f6e\u70ba\u672c\u6a5f\uff0c\u800c\u4e0d\u662f\u5feb\u901f\u5b58\u53d6",id:"\u4fee\u6539\u6a94\u6848\u7e3d\u7ba1\u8d77\u59cb\u7684\u4f4d\u7f6e\u70ba\u672c\u6a5f\u800c\u4e0d\u662f\u5feb\u901f\u5b58\u53d6",level:3},{value:"\u4fee\u6539\u5de5\u4f5c\u5217\u7684\u6a94\u6848\u7e3d\u7ba1\u6377\u5f91\u8d77\u59cb\u7684\u4f4d\u7f6e\u70ba\u67d0\u4e00\u78c1\u789f\u69fd\u6216\u8def\u5f91",id:"\u4fee\u6539\u5de5\u4f5c\u5217\u7684\u6a94\u6848\u7e3d\u7ba1\u6377\u5f91\u8d77\u59cb\u7684\u4f4d\u7f6e\u70ba\u67d0\u4e00\u78c1\u789f\u69fd\u6216\u8def\u5f91",level:3},{value:"\u4e0d\u5728\u5feb\u901f\u5b58\u53d6\u4e2d\u986f\u793a\u6700\u8fd1\u4f7f\u7528\u7684\u6a94\u6848\u548c\u8cc7\u6599\u593e",id:"\u4e0d\u5728\u5feb\u901f\u5b58\u53d6\u4e2d\u986f\u793a\u6700\u8fd1\u4f7f\u7528\u7684\u6a94\u6848\u548c\u8cc7\u6599\u593e",level:3},{value:"\u96b1\u85cf\u5728\u672c\u6a5f\u5e95\u4e0b\u5167\u5efa\u7684\u8cc7\u6599\u593e(\u5982\u97f3\u6a02\u3001\u5f71\u7247\u7b49)",id:"\u96b1\u85cf\u5728\u672c\u6a5f\u5e95\u4e0b\u5167\u5efa\u7684\u8cc7\u6599\u593e\u5982\u97f3\u6a02\u5f71\u7247\u7b49",level:3}],c={toc:d};function k(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5c0d\u65bc\u9760\u96fb\u8166\u5403\u98ef\u7684\u5de5\u7a0b\u5e2b\u4f86\u8aaa\uff0c\u91cd\u704c\u96fb\u8166\u61c9\u8a72\u662f\u4e00\u4ef6\u907f\u514d\u4e0d\u4e86\u7684\u5c0f\u4e8b(?)\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u5e73\u5e38\u597d\u597d\u71d2\u9999\u62dc\u62dc\u548c\u52e4\u4f5c\u5099\u4efd\u4e4b\u5916\uff0c\u5118\u53ef\u80fd\u6c72\u53d6\u548c Windows \u74b0\u5883\u76f8\u95dc\u8a2d\u5b9a\u7684\u77e5\u8b58\u5728\u91cd\u704c\u7684\u6642\u5019\u4e5f\u662f\u5f88\u6709\u5e6b\u52a9\u7684\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u5e38\u5e38\u52d5\u4e0d\u52d5\u5c31\u6703\u8e29\u5230\u83ab\u540d\u5730\u96f7\u800c\u5f97\u91cd\u704c\u96fb\u8166\u7684\u6211\u5c31\u628a\u5728\u91cd\u704c\u7684\u6642\u5019\u6703\u7528\u5230\u7684\u5c0f\u6280\u5de7\u62ff\u51fa\u4f86\u548c\u5927\u5bb6\u5206\u4eab\u5566!!"),(0,a.kt)("h2",{id:"\u5c07\u7a0b\u5f0f\u8a2d\u5b9a\u70ba\u81ea\u52d5\u555f\u52d5"},"\u5c07\u7a0b\u5f0f\u8a2d\u5b9a\u70ba\u81ea\u52d5\u555f\u52d5"),(0,a.kt)("p",null,"\u5728 Windows \u88e1\u9762\u6709\u4e00\u500b\u8cc7\u6599\u593e\uff0c\u53ea\u8981\u6211\u5011\u628a\u61c9\u7528\u7a0b\u5f0f\u7684\u6377\u5f91\u653e\u9032\u53bb\uff0c\u5728\u958b\u6a5f\u7684\u6642\u5019\u5c31\u53ef\u4ee5\u8b93\u5b83\u81ea\u52d5\u555f\u52d5\u3002"),(0,a.kt)("p",null,"\u9019\u500b\u8cc7\u6599\u593e\u7684\u8def\u5f91\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"%UserProfile%\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"),"\u3002"),(0,a.kt)("p",null,"\u4e0d\u904e\u6211\u5011\u4e5f\u53ef\u4ee5\u900f\u904e\u6309\u4e0b Windows \u6309\u9215 + R \u9375\uff0c\u4e26\u4e14\u8f38\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"shell:startup")," \u4f86\u53eb\u51fa\u3002"),(0,a.kt)("p",null,"\u53ea\u8981\u628a\u60f3\u8981\u5728\u4e00\u958b\u59cb\u5c31\u81ea\u52d5\u57f7\u884c\u7684\u7a0b\u5f0f\u6377\u5f91\u4e1f\u9032\u53bb\u5c31\u884c\u56c9\u3002"),(0,a.kt)("h2",{id:"\u5728\u7db2\u57df\u4e0b\u555f\u7528-pin-\u5bc6\u78bc\u8207-windows-hello-\u6307\u7d0b\u89e3\u9396\u529f\u80fd"},"\u5728\u7db2\u57df\u4e0b\u555f\u7528 PIN \u5bc6\u78bc\u8207 Windows Hello \u6307\u7d0b\u89e3\u9396\u529f\u80fd"),(0,a.kt)("p",null,"\u81ea\u5f9e Windows 10 1607 (\u5e74\u5ea6\u66f4\u65b0\u7248)\u4e4b\u5f8c\uff0c Windows 10 \u5c31\u628a\u52a0\u5165\u7db2\u57df\u7684\u4f7f\u7528\u8005\u4f7f\u7528 PIN \u767b\u5165 Windows \u7684\u529f\u80fd\u95dc\u6389\u4e86\u3002"),(0,a.kt)("p",null,"(\u65b0\u589e PIN \u6309\u9215\u6703\u88ab\u53cd\u7070\uff0c\u65c1\u908a\u53ef\u80fd\u9084\u6703\u51fa\u73fe\u56e0\u70ba\u7fa4\u7d44\u539f\u5247\uff0c\u8a72\u529f\u80fd\u5df2\u88ab\u95dc\u9595\uff0c\u8acb\u6d3d\u7cfb\u7d71\u7ba1\u7406\u54e1\u4e4b\u985e\u7684\u8a0a\u606f\u3002\u4e0d\u904e\u6211\u4f86\u4e0d\u53ca\u64f7\u5716\u4e86...)"),(0,a.kt)("p",null,"\u56e0\u70ba PIN \u88ab\u7981\u6b62\u4f7f\u7528\uff0c\u6240\u4ee5\u9023\u5e36\u7684\u4f7f\u5f97\u6307\u7d0b\u89e3\u9396\u7684\u529f\u80fd\u4e5f\u6c92\u8fa6\u6cd5\u88ab\u555f\u7528\u3002"),(0,a.kt)("p",null,"\u8981\u628a PIN \u91cd\u65b0\u6253\u958b\u7684\u8a71\uff0c\u6709\u5169\u500b\u53ef\u4ee5\u9078\u64c7\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e00\u500b\u65b9\u5f0f\u662f\u900f\u904e\u7fa4\u7d44\u539f\u5247\u88e1\u9762\u7684\u8a2d\u5b9a\u4f86\u9032\u884c\u4fee\u6539\uff0c\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u6309\u4e0b Windows \u6309\u9215 + R \u9375\uff0c\u8f38\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"gpedit.msc")," \u4f86\u958b\u555f Windows 10 \u7684\u672c\u6a5f\u7fa4\u7d44\u539f\u5247\u7de8\u8f2f\u5668\u3002"),(0,a.kt)("p",null,"\u518d\u4f86\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"\u96fb\u8166\u8a2d\u5b9a")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"\u7cfb\u7d71\u7ba1\u7406\u7bc4\u672c")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"\u7cfb\u7d71")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"\u767b\u5165")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"\u958b\u555f\u65b9\u4fbf\u7684 PIN \u767b\u5165")," \u9805\u76ee\uff0c\u628a\u72c0\u614b\u6539\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"\u5df2\u555f\u7528"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-01",src:n(17232).Z,title:"\u900f\u904e\u672c\u6a5f\u7fa4\u7d44\u539f\u5247\u7de8\u8f2f\u5668\u555f\u7528 PIN",width:"1086",height:"701"})),(0,a.kt)("p",null,"\u7b2c\u4e8c\u500b\u65b9\u5f0f\u662f\u76f4\u63a5\u4fee\u6539\u767b\u9304\u6a5f\u78bc\uff0c\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u6309\u4e0b Windows \u6309\u9215 + R \u9375\uff0c\u8f38\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"regedit")," \u4f86 \u958b\u555f\u767b\u9304\u7de8\u8f2f\u7a0b\u5f0f\u3002"),(0,a.kt)("p",null,"\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\System")," \u6a5f\u78bc\uff0c\u4e26\u4e14\u5c07 ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowDomainPINLogon")," \u7684\u503c\u6539\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-02",src:n(15663).Z,title:"\u900f\u904e\u4fee\u6539\u767b\u9304\u6a5f\u78bc\u555f\u7528 PIN",width:"801",height:"625"})),(0,a.kt)("p",null,"\u6c92\u6709\u610f\u5916\u7684\u8a71\uff0c\u539f\u672c\u88ab\u7981\u7528\u7684 PIN \u61c9\u8a72\u5c31\u53ef\u4ee5\u4f7f\u7528\u56c9!!"),(0,a.kt)("h2",{id:"\u70ba\u591a\u87a2\u5e55\u8a2d\u5b9a\u4e0d\u540c\u7684\u684c\u5e03"},"\u70ba\u591a\u87a2\u5e55\u8a2d\u5b9a\u4e0d\u540c\u7684\u684c\u5e03"),(0,a.kt)("p",null,"\u4e4b\u524d\u7684 Windows \u5728\u684c\u5e03\u8a2d\u5b9a\u7684\u529f\u80fd\u88e1\uff0c\u53ea\u8981\u91dd\u5c0d\u5716\u7247\u6309\u4e0b\u6ed1\u9f20\u53f3\u9375\uff0c\u5c31\u53ef\u4ee5\u9078\u64c7\u5c0d\u7279\u5b9a\u7684\u87a2\u5e55\u5957\u7528\u3002"),(0,a.kt)("p",null,"\u800c\u5728 Windows 10 \u88e1\u9762\uff0c\u96d6\u7136\u81ea\u8a02\u684c\u5e03\u7684\u529f\u80fd\u5df2\u7d93\u548c\u8a2d\u5b9a\u4e00\u8d77\u88ab\u91cd\u65b0\u8a2d\u8a08\u70ba\u66f4\u7b26\u5408 Fluent Design Language \u7684\u4f7f\u7528\u8005\u754c\u9762\uff0c\u4e0d\u904e\u9019\u500b\u529f\u80fd\u9084\u662f\u5b8c\u6574\u7684\u88ab\u4fdd\u5b58\u4e86\u4e0b\u4f86\u5594!!"),(0,a.kt)("p",null,"\u6211\u5011\u4e00\u6a23\u53ef\u4ee5\u5728\u5716\u7247\u4e0a\u6309\u4e0b\u6ed1\u9f20\u53f3\u9375\uff0c\u5f9e\u5f48\u51fa\u7684\u9078\u55ae\u4e2d\u9078\u64c7\u8981\u5c07\u684c\u5e03\u5957\u7528\u5230\u54ea\u4e00\u9846\u87a2\u5e55\u4e0a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-03",src:n(55594).Z,title:"\u900f\u904e\u53f3\u9375\u9078\u55ae\u9078\u64c7\u8981\u5957\u7528\u684c\u5e03\u7684\u87a2\u5e55",width:"1920",height:"1080"})),(0,a.kt)("p",null,"\u90a3\u5982\u679c\u60f3\u8981\u4e00\u9846\u87a2\u5e55\u7528\u5716\u7247\u7576\u684c\u5e03\uff0c\u53e6\u4e00\u500b\u87a2\u5e55\u7528\u7d14\u8272\u80cc\u666f\u5462?"),(0,a.kt)("p",null,"\u5f88\u7c21\u55ae\uff0c\u4f5c\u4e00\u5f35\u7d14\u8272\u7684\u5716\u7247\u5c31\u884c\u5566!!"),(0,a.kt)("h2",{id:"\u6a94\u6848\u7e3d\u7ba1\u76f8\u95dc"},"\u6a94\u6848\u7e3d\u7ba1\u76f8\u95dc"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u7684\u90e8\u4efd\u53ef\u4ee5\u8b93\u6211\u5011\u81ea\u8a02\u4e00\u4e9b\u548c\u6a94\u6848\u7e3d\u7ba1\u76f8\u95dc\u7684\u8a2d\u5b9a\uff0c\u50cf\u6211\u81ea\u5df1\u662f\u5f88\u4e0d\u559c\u6b61\u5de6\u908a\u7684\u700f\u89bd\u7a97\u683c\u88e1\u9762\u51fa\u73fe\u4e00\u5927\u5806\u6771\u897f\uff0c\u6240\u4ee5\u7279\u5225\u628a\u9019\u500b\u90e8\u4efd\u4e5f\u5206\u4eab\u51fa\u4f86\u3002"),(0,a.kt)("h3",{id:"\u4fee\u6539\u9810\u8a2d\u7684\u4e0b\u8f09downloads\u548c\u684c\u9762desktop\u8cc7\u6599\u593e\u8def\u5f91"},"\u4fee\u6539\u9810\u8a2d\u7684\u4e0b\u8f09(Downloads)\u548c\u684c\u9762(Desktop)\u8cc7\u6599\u593e\u8def\u5f91"),(0,a.kt)("p",null,"\u6709\u52e4\u4f5c\u5099\u4efd\u7684\u540c\u5b78\u5011\u61c9\u8a72\u90fd\u4e0d\u6703\u5fd8\u8a18",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e0b\u8f09"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u684c\u9762"),"\u9019\u5169\u500b\u8cc7\u6599\u593e\u5427?"),(0,a.kt)("p",null,"\u50cf\u6211\u81ea\u5df1\u7684\u7fd2\u6163\u662f\u628a\u9019\u5169\u500b\u8cc7\u6599\u593e\u90fd\u5b58\u653e\u5728\u7cfb\u7d71\u789f\u4e4b\u5916\u7684\u5730\u65b9\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"D:\\Downloads")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"D:\\Desktop"),"\u3002"),(0,a.kt)("p",null,"\u9019\u6a23\u7684\u597d\u8655\u662f\uff0c\u5728\u91cd\u704c\u5b8c Windows 10 \u4e4b\u5f8c\uff0c\u4e0d\u9700\u8981\u900f\u904e\u8907\u88fd\u8cbc\u4e0a\u4f86\u642c\u79fb\u6a94\u6848\uff0c\u53ea\u9700\u8981\u628a\u7cfb\u7d71\u9810\u8a2d\u7684\u8def\u5f91\u6539\u904e\u53bb\u5c31\u884c\u4e86\u3002"),(0,a.kt)("p",null,"\u4fee\u6539 Windows 10 \u5167\u5efa\u7684\u4e0b\u8f09\u8cc7\u6599\u593e\u8def\u5f91\u7684\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u9996\u5148\u958b\u555f\u6a94\u6848\u7e3d\u7ba1\uff0c\u5728\u4e0b\u8f09\u8cc7\u6599\u593e\u4e0a\u6309\u4e0b\u6ed1\u9f20\u53f3\u9375\uff0c\u9ede\u9078",(0,a.kt)("inlineCode",{parentName:"p"},"\u5167\u5bb9"),"\u3002"),(0,a.kt)("p",null,"\u63a5\u8457\u9ede\u9078\u5c6c\u6027\u8996\u7a97\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u4f4d\u7f6e"),"\u9801\u7c64\uff0c\u6309\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"\u79fb\u52d5(M)..."),"\u6309\u9215\u5f8c\uff0c\u9078\u53d6\u65b0\u7684\u8cc7\u6599\u593e\u4f4d\u7f6e\u5f8c\u6309\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"\u78ba\u5b9a"),"\u6309\u9215\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-04",src:n(34635).Z,title:"\u4fee\u6539\u4e0b\u8f09\u8cc7\u6599\u593e\u7684\u8def\u5f91",width:"421",height:"548"})),(0,a.kt)("p",null,"\u7136\u5f8c Windows 10 \u5c31\u6703\u5f88\u8cbc\u5fc3\u7684\u554f\u4f60\u8981\u4e0d\u8981\u628a\u6a94\u6848\u5f9e\u820a\u7684\u4f4d\u7f6e\u79fb\u5230\u65b0\u4f4d\u7f6e\uff0c\u9019\u908a\u7576\u7136\u9078\u8981\u56c9!!"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-05",src:n(25347).Z,title:"\u79fb\u52d5\u8cc7\u6599\u593e\u5c0d\u8a71\u8996\u7a97",width:"422",height:"193"})),(0,a.kt)("p",null,"\u81f3\u65bc\u684c\u9762\u8cc7\u6599\u593e\u4e5f\u662f\u4f9d\u6a23\u756b\u846b\u8606\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("h3",{id:"\u4fee\u6539\u6a94\u6848\u7e3d\u7ba1\u8d77\u59cb\u7684\u4f4d\u7f6e\u70ba\u672c\u6a5f\u800c\u4e0d\u662f\u5feb\u901f\u5b58\u53d6"},"\u4fee\u6539\u6a94\u6848\u7e3d\u7ba1\u8d77\u59cb\u7684\u4f4d\u7f6e\u70ba\u672c\u6a5f\uff0c\u800c\u4e0d\u662f\u5feb\u901f\u5b58\u53d6"),(0,a.kt)("p",null,"\u5982\u679c\u6c92\u7d93\u904e\u4efb\u4f55\u8abf\u6574\u7684\u8a71\uff0c\u9810\u8a2d\u958b\u555f\u6a94\u6848\u7e3d\u7ba1\u7684\u6642\u5019\u6703\u76f4\u63a5\u770b\u5230\u7684\u61c9\u8a72\u662f\u5feb\u901f\u5b58\u53d6\u88e1\u9762\u7684\u5167\u5bb9\u3002"),(0,a.kt)("p",null,"\u4e0d\u904e\u5fae\u8edf\u5176\u5be6\u63d0\u4f9b\u4e86\u53e6\u4e00\u500b\u9078\u9805\uff0c\u53ea\u9700\u8981\u5728\u6a94\u6848\u7e3d\u7ba1\u88e1\u9762\u8a2d\u5b9a\u4e00\u4e0b\uff0c\u5c31\u53ef\u4ee5\u628a\u8d77\u59cb\u7684\u4f4d\u7f6e\u63db\u6210\u672c\u6a5f\u3002"),(0,a.kt)("p",null,"\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u5728\u6a94\u6848\u7e3d\u7ba1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u6aa2\u8996"),"\u9801\u7c64\u4e2d\u9ede\u9078",(0,a.kt)("inlineCode",{parentName:"p"},"\u9078\u9805"),"\uff0c\u518d\u900f\u904e",(0,a.kt)("inlineCode",{parentName:"p"},"\u958b\u555f\u6a94\u6848\u7ba1\u4ee5\uff1a"),"\u9019\u500b\u4e0b\u62c9\u9078\u55ae\u9078\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"\u672c\u6a5f"),"\u5f8c\u6309\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"\u78ba\u5b9a"),"\u9215\u5c31\u641e\u5b9a\u5566!"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-06",src:n(35008).Z,title:"\u4fee\u6539\u6a94\u6848\u7e3d\u7ba1\u8d77\u59cb\u7684\u8def\u5f91\u70ba\u672c\u6a5f",width:"444",height:"540"})),(0,a.kt)("h3",{id:"\u4fee\u6539\u5de5\u4f5c\u5217\u7684\u6a94\u6848\u7e3d\u7ba1\u6377\u5f91\u8d77\u59cb\u7684\u4f4d\u7f6e\u70ba\u67d0\u4e00\u78c1\u789f\u69fd\u6216\u8def\u5f91"},"\u4fee\u6539\u5de5\u4f5c\u5217\u7684\u6a94\u6848\u7e3d\u7ba1\u6377\u5f91\u8d77\u59cb\u7684\u4f4d\u7f6e\u70ba\u67d0\u4e00\u78c1\u789f\u69fd\u6216\u8def\u5f91"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u6309\u4e0b\u5de5\u4f5c\u5217\u91d8\u9078\u7684\u6a94\u6848\u7e3d\u7ba1\u6377\u5f91\u4e4b\u5f8c\u5c31\u76f4\u63a5\u700f\u89bd\u5230\u67d0\u4e00\u500b\u78c1\u789f\u69fd\u6216\u662f\u7279\u5b9a\u7684\u8def\u5f91(\u4f8b\u5982 C:",")","\u5462?"),(0,a.kt)("p",null,"\u9019\u500b\u5c31\u7a0d\u5fae\u8907\u96dc\u4e00\u9ede\u9ede\u4e86\uff0c\u9996\u5148\u5f97\u8981\u5148\u5efa\u7acb\u8a72\u78c1\u789f\u69fd\u6216\u662f\u8def\u5f91\u7684\u6377\u5f91\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-07",src:n(58149).Z,title:"\u5efa\u7acb\u78c1\u789f\u7684\u6377\u5f91",width:"763",height:"753"})),(0,a.kt)("p",null,"\u63a5\u8457\u6211\u5011\u8981\u4f86\u66f4\u6539\u6377\u5f91\u7684\u5716\u793a\uff0c\u9996\u5148\u5728\u5efa\u7acb\u51fa\u4f86\u7684\u6377\u5f91\u4e0a\u6309\u4e0b\u6ed1\u9f20\u53f3\u9375 -> \u9ede\u9078 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5167\u5bb9")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8b8a\u66f4\u5716\u793a"),"\u3002"),(0,a.kt)("p",null,"\u63a5\u8457\u5728\u8b8a\u66f4\u5716\u793a\u5c0d\u8a71\u8996\u7a97\u88e1\u7684\u6587\u5b57\u6b04\u4f4d\u8f38\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"%SystemRoot%\\Explorer.exe"),"\uff0c\u4e26\u4e14\u9078\u53d6\u6a94\u6848\u7e3d\u7ba1\u7684\u5716\u793a\u5f8c\u6309\u4e0b\u78ba\u5b9a\u9215\uff0c\u518d\u6309\u4e0b\u6a94\u6848\u7e3d\u7ba1-\u5167\u5bb9\u8996\u7a97\u7684\u78ba\u5b9a\u9215\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-08",src:n(29474).Z,title:"\u66f4\u6539\u6377\u5f91\u7684\u5716\u793a\u70ba\u6a94\u6848\u7e3d\u7ba1\u7684\u5716\u793a",width:"601",height:"647"})),(0,a.kt)("p",null,"\u5c07\u6377\u5f91\u7684\u540d\u7a31\u66f4\u6539\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"File Explorer"),"(\u6ce8\u610f\uff0c\u4e00\u5b9a\u8981\u4e00\u6a21\u4e00\u6a23\u5594!!)"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-09",src:n(32383).Z,title:"\u5c07\u6377\u5f91\u7684\u540d\u7a31\u6539\u70ba File Explorer",width:"424",height:"351"})),(0,a.kt)("p",null,"\u6700\u5f8c\u526a\u4e0b\u6377\u5f91\uff0c\u4e26\u4e14\u8cbc\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"%UserProfile%\\AppData\\Roaming\\Microsoft\\Internet Explorer\\Quick Launch\\User Pinned\\TaskBar")," \u88e1\uff0c\u51fa\u73fe\u662f\u5426\u53d6\u4ee3\u539f\u4f86\u6a94\u6848\u7684\u6642\u5019\u7528\u529b\u6309\u4e0b\u53d6\u4ee3\u5c31\u884c\u4e86!!"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-10",src:n(19200).Z,title:"\u5c07\u6377\u5f91\u7684\u540d\u7a31\u6539\u70ba File Explorer",width:"796",height:"577"})),(0,a.kt)("h3",{id:"\u4e0d\u5728\u5feb\u901f\u5b58\u53d6\u4e2d\u986f\u793a\u6700\u8fd1\u4f7f\u7528\u7684\u6a94\u6848\u548c\u8cc7\u6599\u593e"},"\u4e0d\u5728\u5feb\u901f\u5b58\u53d6\u4e2d\u986f\u793a\u6700\u8fd1\u4f7f\u7528\u7684\u6a94\u6848\u548c\u8cc7\u6599\u593e"),(0,a.kt)("p",null,"\u6a94\u6848\u7e3d\u7ba1\u9810\u8a2d\u7684\u8a2d\u5b9a\u6703\u628a\u6700\u8fd1\u5b58\u53d6\u7684\u6a94\u6848\u548c\u8cc7\u6599\u593e\u90fd\u986f\u793a\u5728\u5feb\u901f\u5b58\u53d6\u5340\uff0c\u4f46\u662f\u6211\u500b\u4eba\u4e26\u4e0d\u662f\u5f88\u559c\u6b61\u9019\u500b\u529f\u80fd\uff0c\u6240\u4ee5\u90fd\u6703\u628a\u5b83\u95dc\u4e86\u3002"),(0,a.kt)("p",null,"\u95dc\u9589\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u5728\u5feb\u901f\u5b58\u53d6\u4e0a\u6309\u4e0b\u6ed1\u9f20\u53f3\u9375\uff0c\u9ede\u9078",(0,a.kt)("inlineCode",{parentName:"p"},"\u9078\u9805"),"\uff0c\u7136\u5f8c\u628a\u4e00\u822c\u9801\u7c64\u4e2d\u96b1\u79c1\u6b0a\u5340\u88e1\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u5728\u300c\u5feb\u901f\u5b58\u53d6\u300d\u4e2d\u986f\u793a\u6700\u8fd1\u4f7f\u7528\u7684\u6a94\u6848"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u5728\u300c\u5feb\u901f\u5b58\u53d6\u300d\u4e2d\u986f\u793a\u7d93\u5e38\u4f7f\u7528\u7684\u8cc7\u6599\u593e"),"\u9019\u5169\u500b\u9805\u76ee\u53d6\u6d88\u52fe\u9078\u518d\u6309\u4e0b\u78ba\u5b9a\u6309\u9215\u5c31\u884c\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-11",src:n(64688).Z,title:"\u505c\u6b62\u628a\u6700\u8fd1\u4f7f\u7528\u7684\u6a94\u6848\u548c\u8cc7\u6599\u593e\u52a0\u5165\u5feb\u901f\u5b58\u53d6",width:"444",height:"540"})),(0,a.kt)("p",null,"\u5982\u679c\u5feb\u901f\u5b58\u53d6\u4e0b\u9762\u5df2\u7d93\u6709\u4e00\u5806\u9805\u76ee\u7684\u8a71\uff0c\u4e5f\u53ef\u4ee5\u6309\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"\u6e05\u9664"),"\u6309\u9215\u628a\u88e1\u9762\u7684\u9805\u76ee\u6e05\u5149\u5594!!"),(0,a.kt)("h3",{id:"\u96b1\u85cf\u5728\u672c\u6a5f\u5e95\u4e0b\u5167\u5efa\u7684\u8cc7\u6599\u593e\u5982\u97f3\u6a02\u5f71\u7247\u7b49"},"\u96b1\u85cf\u5728\u672c\u6a5f\u5e95\u4e0b\u5167\u5efa\u7684\u8cc7\u6599\u593e(\u5982\u97f3\u6a02\u3001\u5f71\u7247\u7b49)"),(0,a.kt)("p",null,"\u96a8\u8457 Windows 10 \u4e0d\u540c\u7248\u672c\u7684\u6f14\u9032\uff0c\u5728\u672c\u6a5f\u4e0b\u9810\u8a2d\u6703\u986f\u793a\u7684\u9805\u76ee\u4e5f\u8ddf\u8457\u8d8a\u4f86\u8d8a\u591a\uff0c\u9664\u4e86\u5e38\u898b\u7684\u4e0b\u8f09\u3001\u6587\u4ef6\u3001\u5716\u7247\u3001\u5f71\u7247\u4e4b\u5916\uff0c\u6700\u8fd1\u53c8\u591a\u4e86\u4e00\u500b 3D \u7269\u4ef6\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u9664\u4e86\u4e0b\u8f09\u4e4b\u5916\uff0c\u50cf\u662f\u97f3\u6a02\u3001\u5716\u7247\u548c\u5f71\u7247\u9019\u5e7e\u500b\u8cc7\u6599\u593e\u6211\u5e7e\u4e4e\u90fd\u662f\u6c92\u5728\u7528\u7684\uff0c\u4f46\u662f\u5b83\u5c31\u662f\u6703\u51fa\u73fe\u5728\u90a3\u908a\u4f54\u4f4d\u7f6e\uff0c\u6240\u4ee5\u6211\u4e5f\u90fd\u6703\u9078\u64c7\u628a\u5b83\u5011\u96b1\u85cf\u8d77\u4f86\u3002"),(0,a.kt)("p",null,"\u8981\u96b1\u85cf\u9019\u4e9b\u8cc7\u6599\u593e\uff0c\u5f97\u900f\u904e\u4fee\u6539\u6a5f\u78bc\u503c\u4f86\u9054\u6210\u3002"),(0,a.kt)("p",null,"\u4e0d\u904e\u5982\u679c\u4e0d\u60f3\u624b\u52d5\u53bb\u4fee\u6539\u767b\u9304\u6a5f\u78bc\u7684\u8a71\uff0c\u4e5f\u662f\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("a",{parentName:"p",href:"https://winaero.com/request.php?1796",title:"\u4e0b\u8f09 Winaero Tweaker"},"Winaero Tweaker")," \u9019\u500b\u514d\u8cbb\u7684\u5c0f\u5de5\u5177\u4f86\u5e6b\u6211\u5011\u4f5c\u5230\u9019\u4ef6\u4e8b\u3002"),(0,a.kt)("p",null,"Winaero Tweaker \u88e1\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"File Explorer")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Customize This PC Folders")," \u63d0\u4f9b\u4e86\u4e00\u500b\u76f4\u89ba\u53c8\u65b9\u4fbf\u7684\u4f7f\u7528\u8005\u754c\u9762\u4f86\u8b93\u6211\u5011\u6c7a\u5b9a\u8981\u986f\u793a/\u96b1\u85cf\u54ea\u4e9b\u8cc7\u6599\u593e\u3002"),(0,a.kt)("p",null,"\u53ea\u9700\u8981\u9078\u53d6\u8981\u96b1\u85cf\u7684\u8cc7\u6599\u593e(\u53ef\u591a\u9078)\u4e4b\u5f8c\uff0c\u6309\u4e0b Remove Selected \u6309\u9215\u5c31\u5927\u529f\u544a\u6210\u5566!!"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image-12",src:n(77790).Z,title:"\u900f\u904e Winaero Tweaker \u96b1\u85cf\u672c\u6a5f\u4e0b\u9762\u7684\u8cc7\u6599\u593e",width:"1198",height:"723"})))}k.isMDXComponent=!0},17232:function(e,t,n){t.Z=n.p+"assets/images/01-enable-pin-with-group-policy-editor-aa2b22f93f3e3ff190e84a96395d405b.png"},15663:function(e,t,n){t.Z=n.p+"assets/images/02-enable-pin-with-registry-editor-db042dba28061cbfe3789f3f34aa3ab9.png"},55594:function(e,t,n){t.Z=n.p+"assets/images/03-choose-which-monitor-to-be-applied-with-context-menu-ef795433c3c722da63b67c040779c466.png"},34635:function(e,t,n){t.Z=n.p+"assets/images/04-modify-the-path-of-downloads-folder-db04b813540c270a7154b56faace952b.png"},25347:function(e,t,n){t.Z=n.p+"assets/images/05-confirm-if-move-files-or-not-e6d913ee236a3c47a482e6539edacfaa.png"},35008:function(e,t,n){t.Z=n.p+"assets/images/06-change-the-value-of-open-explorer-to-55416eee5ce7a277049fbbeafbe6d792.png"},58149:function(e,t,n){t.Z=n.p+"assets/images/07-create-a-shortcut-of-a-drive-7eb67bc9af3bef27165ff28ad8618050.png"},29474:function(e,t,n){t.Z=n.p+"assets/images/08-change-the-icon-of-the-shortcut-edc700d7a8c6666d91a77b948836af58.png"},32383:function(e,t,n){t.Z=n.p+"assets/images/09-rename-the-shortcut-to-file-explorer-fa5744927d08aeca1fe0be90a9b8acc8.png"},19200:function(e,t,n){t.Z=n.p+"assets/images/10-cut-and-paste-the-shortcut-to-user-pinned-taskbar-folder-20c53e3274628aa1f076f835da7b54b2.png"},64688:function(e,t,n){t.Z=n.p+"assets/images/11-stop-adding-recent-used-files-and-folders-to-quick-access-13f58e1a48defc2cc11ff531550ca0ce.png"},77790:function(e,t,n){t.Z=n.p+"assets/images/12-use-winaero-tweaker-to-hide-folders-under-this-pc-d1291973f364623a2411226d2b298140.png"}}]);