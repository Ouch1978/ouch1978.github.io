"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[4367],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},32484:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"\u9060\u7aef\u684c\u9762\u9023\u7dda\u51fa\u73fe\u56e0\u70ba CredSSP \u52a0\u5bc6 Oracle \u88dc\u6551\u9020\u6210\u7121\u6cd5\u9023\u7dda\u7684\u61c9\u6025\u89e3\u6cd5",slug:"2022-03-17-rdp-credssp-error-workaround",authors:"ouch1978",tags:["windows 10","CredSSP","rdp","remote desktop"]},p=void 0,c={permalink:"/blog/2022-03-17-rdp-credssp-error-workaround",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-03-17-rdp-credssp-error-workaround/2022-03-17-rdp-credssp-error-workaround.md",source:"@site/blog/2022-03-17-rdp-credssp-error-workaround/2022-03-17-rdp-credssp-error-workaround.md",title:"\u9060\u7aef\u684c\u9762\u9023\u7dda\u51fa\u73fe\u56e0\u70ba CredSSP \u52a0\u5bc6 Oracle \u88dc\u6551\u9020\u6210\u7121\u6cd5\u9023\u7dda\u7684\u61c9\u6025\u89e3\u6cd5",description:"\u524d\u8a00",date:"2022-03-17T00:00:00.000Z",formattedDate:"2022\u5e743\u670817\u65e5",tags:[{label:"windows 10",permalink:"/blog/tags/windows-10"},{label:"CredSSP",permalink:"/blog/tags/cred-ssp"},{label:"rdp",permalink:"/blog/tags/rdp"},{label:"remote desktop",permalink:"/blog/tags/remote-desktop"}],readingTime:3.715,truncated:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u5de5\u7a0b\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u9060\u7aef\u684c\u9762\u9023\u7dda\u51fa\u73fe\u56e0\u70ba CredSSP \u52a0\u5bc6 Oracle \u88dc\u6551\u9020\u6210\u7121\u6cd5\u9023\u7dda\u7684\u61c9\u6025\u89e3\u6cd5",slug:"2022-03-17-rdp-credssp-error-workaround",authors:"ouch1978",tags:["windows 10","CredSSP","rdp","remote desktop"]},prevItem:{title:"\u9084\u5728\u4e00\u500b\u4e00\u500b\u5c08\u6848 Clone \u55ce? \u7528\u9019\u62db\u4e00\u6b21 Clone \u6240\u6709\u5728 GitLab \u4e0a\u7684 Repo!!",permalink:"/blog/2022-03-18-clone-all-repositories-in-gitlab-at-once"},nextItem:{title:"\u900f\u904e Docker \u57f7\u884c Jekyll \u7522\u51fa\u90e8\u843d\u683c\u6587\u7ae0",permalink:"/blog/2018-11-08-blog-with-jekyll-and-docker"}},d={authorsImageUrls:[void 0]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u539f\u56e0\u8207\u89e3\u6cd5",id:"\u539f\u56e0\u8207\u89e3\u6cd5",level:2},{value:"\u61c9\u6025\u89e3\u6cd5",id:"\u61c9\u6025\u89e3\u6cd5",level:2},{value:"\u4fee\u6539\u7fa4\u7d44\u539f\u5247",id:"\u4fee\u6539\u7fa4\u7d44\u539f\u5247",level:3},{value:"\u4fee\u6539\u672c\u5730\u7aef\u7684\u767b\u9304\u6a5f\u78bc",id:"\u4fee\u6539\u672c\u5730\u7aef\u7684\u767b\u9304\u6a5f\u78bc",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],s={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u6700\u8fd1\u8981\u4f7f\u7528\u9060\u7aef\u684c\u9762\u9023\u7dda\u5230\u67d0\u53f0 Windows Server \u7684\u6642\u5019\uff0c\u51fa\u73fe\u4e86\u4ee5\u4e0b\u9019\u500b\u932f\u8aa4\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u51fa\u73fe\u56e0 CredSSP \u52a0\u5bc6 Oracle \u88dc\u6551\u9020\u6210\u7684\u932f\u8aa4",src:r(95291).Z,title:"\u51fa\u73fe\u56e0 CredSSP \u52a0\u5bc6 Oracle \u88dc\u6551\u9020\u6210\u7684\u932f\u8aa4",width:"585",height:"235"})),(0,o.kt)("p",null,"\u96d6\u7136\u8aaa\u9019\u5df2\u7d93\u4e0d\u662f\u7b2c\u4e00\u6b21\u770b\u5230\u4e86\uff0c\u4e0d\u904e\u53ea\u8981\u4e00\u63db\u96fb\u8166\u5c31\u53c8\u5f97\u8981\u518d\u649e\u5230\u4e00\u6b21\uff0c\u5c31\u9084\u662f\u9806\u624b\u5beb\u500b\u7b46\u8a18\u8a18\u9304\u4e00\u4e0b\u3002"),(0,o.kt)("h2",{id:"\u539f\u56e0\u8207\u89e3\u6cd5"},"\u539f\u56e0\u8207\u89e3\u6cd5"),(0,o.kt)("p",null,"\u7c21\u55ae\u7684\u8aaa\uff0c\u9019\u500b\u554f\u984c\u6703\u767c\u751f\uff0c\u662f\u56e0\u70ba\u5fae\u8edf\u5728 2018 \u5e74\u56db\u6708\u91dd\u5c0d\u9060\u7aef\u684c\u9762\u9023\u7dda\u529f\u80fd\u91cb\u51fa\u4e86\u4e00\u500b\u5b89\u5168\u6027\u7684\u66f4\u65b0\uff0c\u4ee5\u89e3\u6c7a CredSSP \u5728\u9023\u7dda\u904e\u7a0b\u4e2d\u53ef\u80fd\u7522\u751f\u7684\u5f31\u9ede\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u9019\u500b\u5b89\u5168\u66f4\u65b0\u5f97\u8981\u540c\u6642\u5b58\u5728\u65bc\u672c\u5730\u7aef\u96fb\u8166\u548c\u9060\u7aef\u96fb\u8166\uff0c\u672c\u5730\u7aef\u624d\u80fd\u6b63\u5e38\u7684\u9023\u7dda\u5230\u9060\u7aef\uff0c\u53ea\u8981\u6709\u4e00\u908a\u6c92\u5b89\u88dd\u9019\u500b\u66f4\u65b0\uff0c\u90a3\u5c31\u6703\u51fa\u73fe\u9019\u500b\u932f\u8aa4\u3002"),(0,o.kt)("p",null,"\u800c\u901a\u5e38\u90fd\u662f\u9060\u7aef(Server)\u6c92\u88dd\u66f4\u65b0\u9020\u6210\u9019\u500b\u932f\u8aa4\u8a0a\u606f\u8dd1\u51fa\u4f86\uff0c\u6240\u4ee5\u6700\u4f73\u89e3\u7576\u7136\u5c31\u662f\u5927\u5bb6\u90fd\u4e56\u4e56\u7684\u5b89\u88dd\u8a72\u66f4\u65b0\u6a94\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u624b\u908a\u525b\u597d\u6709\u96fb\u8166\u9084\u6c92\u5b89\u88dd\u8a72\u66f4\u65b0\u6a94\u7684\u8a71\uff0c\u53ef\u4ee5\u900f\u904e",(0,o.kt)("a",{parentName:"p",href:"https://www.catalog.update.microsoft.com/Search.aspx?q=KB4093120",title:"KB4093120"},"\u9019\u500b\u7db2\u5740"),"\u4e0b\u8f09\u3002"),(0,o.kt)("h2",{id:"\u61c9\u6025\u89e3\u6cd5"},"\u61c9\u6025\u89e3\u6cd5"),(0,o.kt)("p",null,"\u96d6\u7136\u8aaa\u6709\u5b98\u65b9\u5efa\u8b70\u7684\u6700\u4f73\u89e3\uff0c\u4f46\u662f\u6211\u5011\u90fd\u9023\u4e0d\u4e0a Server \u4e86\uff0c\u600e\u9ebc\u5e6b Server \u66f4\u65b0\u54a7?"),(0,o.kt)("p",null,"\u6c92\u95dc\u4fc2\uff0c\u5c71\u4e0d\u8f49\u8def\u8f49!! \u63a5\u4e0b\u4f86\u5c31\u5206\u4eab\u5169\u62db\u61c9\u6025\u63aa\u65bd\uff1a"),(0,o.kt)("h3",{id:"\u4fee\u6539\u7fa4\u7d44\u539f\u5247"},"\u4fee\u6539\u7fa4\u7d44\u539f\u5247"),(0,o.kt)("p",null,"\u5982\u679c\u5f88\u4e0d\u5e78\u7684\uff0c\u4f60\u7684\u96fb\u8166\u6709\u52a0\u5165\u7db2\u57df\uff0c\u53c8\u78b0\u5de7\u4f60\u4e0d\u662f\u7ba1\u7406\u54e1\u3001\u4e0d\u80fd\u4fee\u6539\u7fa4\u7d44\u539f\u5247\u7684\u8a71\uff0c\u8acb\u76f4\u63a5\u8df3\u5230\u4e0b\u4e00\u500b\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u53ef\u4ee5\u8abf\u6574\u7fa4\u7d44\u539f\u5247\u7684\u8a71\uff0c\u5c31\u53ef\u4ee5\u4f9d\u7167",(0,o.kt)("a",{parentName:"p",href:"https://support.microsoft.com/zh-tw/topic/cve-2018-0886-%E7%9A%84-credssp-%E6%9B%B4%E6%96%B0-5cbf9e5f-dc6d-744f-9e97-7ba400d6d3ea",title:"CVE-2018-0886 \u7684 CredSSP \u66f4\u65b0"},"\u5fae\u8edf\u5b98\u65b9\u6587\u4ef6"),"\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e92\u901a\u6027\u77e9\u9663"),"\u4e00\u7bc0\u4e2d\u7684\u5167\u5bb9\u4f86\u8abf\u6574\u8a2d\u5b9a\uff0c\u8b93\u672c\u6a5f\u53ef\u4ee5\u9023\u5230\u9060\u7aef\u4f3a\u670d\u5668\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u4e92\u901a\u6027\u77e9\u9663",src:r(81446).Z,title:"\u4e92\u901a\u6027\u77e9\u9663",width:"790",height:"611"})),(0,o.kt)("p",null,"\u4fee\u6539\u7fa4\u7d44\u539f\u5247\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6309\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"<kbd>\u229e Win</kbd> + <kbd>R</kbd>")," \u9375\uff0c\u8f38\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"gpedit.msc")," \u958b\u555f\u7fa4\u7d44\u539f\u5247\u7de8\u8f2f\u5668\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9ede\u9078 ",(0,o.kt)("inlineCode",{parentName:"p"},"Computer Configuration"),"(\u96fb\u8166\u8a2d\u5b9a)\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9ede\u9078 ",(0,o.kt)("inlineCode",{parentName:"p"},"Administrative Templates"),"(\u7cfb\u7d71\u7ba1\u7406\u7bc4\u672c)\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9ede\u9078 ",(0,o.kt)("inlineCode",{parentName:"p"},"System"),"(\u7cfb\u7d71)\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9ede\u9078 ",(0,o.kt)("inlineCode",{parentName:"p"},"Credentials Delegation"),"(\u8a8d\u8b49\u59d4\u6d3e)\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u96d9\u64ca\u53f3\u908a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Encryption Oracle Remediation"),"(\u52a0\u5bc6 Oracle \u88dc\u6551) \u958b\u555f\u8a2d\u5b9a\u756b\u9762\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9ede\u9078 Encryption Oracle Remediation \u8996\u7a97\u88e1\u7684\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Enabled"),"(\u5df2\u555f\u7528) \u9078\u9805\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u4e0b\u65b9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Protection Level"),"(\u4fdd\u8b77\u5c64\u7d1a) \u4e0b\u62c9\u9078\u55ae\u4e2d\u9078\u64c7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Vulnerable"),"(\u6613\u53d7\u653b\u64ca)\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6309\u4e0b\u53f3\u4e0b\u89d2\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u78ba\u5b9a"),"(OK) \u6309\u9215\u3002"))),(0,o.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9a5f\u4e4b\u5f8c\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u7528"),"\u91cd\u65b0\u958b\u6a5f\uff0c\u5c31\u53ef\u4ee5\u9806\u5229\u9023\u4e0a\u9060\u7aef\u7684\u6a5f\u5668\u56c9!!"),(0,o.kt)("h3",{id:"\u4fee\u6539\u672c\u5730\u7aef\u7684\u767b\u9304\u6a5f\u78bc"},"\u4fee\u6539\u672c\u5730\u7aef\u7684\u767b\u9304\u6a5f\u78bc"),(0,o.kt)("p",null,"\u9019\u500b\u65b9\u6cd5\u76f8\u8f03\u65bc\u4fee\u6539\u7fa4\u7d44\u539f\u5247\u4f86\u5f97\u7c21\u55ae\u5f97\u591a\uff0c\u53ea\u9700\u8981\u958b\u555f\u547d\u4ee4\u63d0\u793a\u5b57\u5143\uff0c\u8f38\u5165\u4e0b\u5217\u6307\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'reg add "HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\CredSSP\\Parameters" /f /v AllowEncryptionOracle /t REG_DWORD /d 2\n')),(0,o.kt)("p",null,"\u57f7\u884c\u5b8c\u7562\u5f8c\uff0c\u4e5f",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u7528"),"\u91cd\u65b0\u958b\u6a5f\uff0c\u5c31\u53ef\u4ee5\u9806\u5229\u9023\u4e0a\u9060\u7aef\u7684\u6a5f\u5668\u56c9!!"),(0,o.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.microsoft.com/zh-tw/topic/cve-2018-0886-%E7%9A%84-credssp-%E6%9B%B4%E6%96%B0-5cbf9e5f-dc6d-744f-9e97-7ba400d6d3ea",title:"CVE-2018-0886 \u7684 CredSSP \u66f4\u65b0"},"CVE-2018-0886 \u7684 CredSSP \u66f4\u65b0")))}m.isMDXComponent=!0},95291:function(e,t,r){t.Z=r.p+"assets/images/credssp-encryption-oracle-remediation-error-fe082b107a601c9dd021d8e633b1df67.png"},81446:function(e,t,r){t.Z=r.p+"assets/images/cve-2018-0886-interoperability-matrix-f7572bcece9898b9f2b3b25beeaa48da.png"}}]);