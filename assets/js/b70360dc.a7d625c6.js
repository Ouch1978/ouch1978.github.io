"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[317],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=c(n),m=a,g=b["".concat(p,".").concat(m)]||b[m]||u[m]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},62583:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"\u9084\u5728\u4e00\u500b\u4e00\u500b\u5c08\u6848 Clone \u55ce? \u7528\u9019\u62db\u4e00\u6b21 Clone \u6240\u6709\u5728 GitLab \u4e0a\u7684 Repo!!",authors:"ouch1978",tags:["GitLab"],keywords:["Python","GitLab","\u4e00\u6b21","Clone","\u61f6\u4eba\u5305"]},p=void 0,c={permalink:"/blog/2022/03/18/clone-all-repositories-in-gitlab-at-once",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-03-18-clone-all-repositories-in-gitlab-at-once/index.md",source:"@site/blog/2022-03-18-clone-all-repositories-in-gitlab-at-once/index.md",title:"\u9084\u5728\u4e00\u500b\u4e00\u500b\u5c08\u6848 Clone \u55ce? \u7528\u9019\u62db\u4e00\u6b21 Clone \u6240\u6709\u5728 GitLab \u4e0a\u7684 Repo!!",description:"\u524d\u8a00",date:"2022-03-18T00:00:00.000Z",formattedDate:"2022\u5e743\u670818\u65e5",tags:[{label:"GitLab",permalink:"/blog/tags/git-lab"}],readingTime:3.165,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u9084\u5728\u4e00\u500b\u4e00\u500b\u5c08\u6848 Clone \u55ce? \u7528\u9019\u62db\u4e00\u6b21 Clone \u6240\u6709\u5728 GitLab \u4e0a\u7684 Repo!!",authors:"ouch1978",tags:["GitLab"],keywords:["Python","GitLab","\u4e00\u6b21","Clone","\u61f6\u4eba\u5305"]},prevItem:{title:"\u555f\u7528 SQL Server Management Studio \u7684\u6df1\u8272\u4e3b\u984c",permalink:"/blog/2022/03/23/enable-smss-18-dark-theme"},nextItem:{title:"\u9060\u7aef\u684c\u9762\u9023\u7dda\u51fa\u73fe\u56e0\u70ba CredSSP \u52a0\u5bc6 Oracle \u88dc\u6551\u9020\u6210\u7121\u6cd5\u9023\u7dda\u7684\u61c9\u6025\u89e3\u6cd5",permalink:"/blog/2022/03/17/rdp-credssp-error-workaround"}},s={authorsImageUrls:[void 0]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u524d\u7f6e\u689d\u4ef6",id:"\u524d\u7f6e\u689d\u4ef6",level:2},{value:"\u900f\u904e PyPi \u5b89\u88dd gitlabber",id:"\u900f\u904e-pypi-\u5b89\u88dd-gitlabber",level:3},{value:"\u5728 GitLab \u4e0a\u5efa\u7acb Access Token",id:"\u5728-gitlab-\u4e0a\u5efa\u7acb-access-token",level:3},{value:"\u900f\u904e gitlabber Clone \u6240\u6709 Repo",id:"\u900f\u904e-gitlabber-clone-\u6240\u6709-repo",level:2},{value:"\u900f\u904e gitlabber \u4e00\u6b21 Clone \u6240\u6709 Repo",id:"\u900f\u904e-gitlabber-\u4e00\u6b21-clone-\u6240\u6709-repo",level:3}],b={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u6bcf\u7576\u63db\u96fb\u8166\u6216\u662f\u52a0\u5165\u4e00\u500b\u65b0\u7684\u5718\u968a\u7684\u6642\u5019\uff0c\u628a\u6240\u6709\u548c\u81ea\u5df1\u76f8\u95dc\u7684 Repo \u90fd Clone \u4e00\u4efd\u5230\u672c\u6a5f\u662f\u5c11\u4e0d\u4e86\u7684\u5de5\u4f5c\u4e4b\u4e00\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5c08\u6848\u5c11\u7684\u8a71\u662f\u53ef\u4ee5\u4e56\u4e56\u7684\u4e00\u500b\u4e00\u500b Repo \u6162\u6162 Clone\u3002"),(0,l.kt)("p",null,"\u4e0d\u904e\uff0c\u5982\u679c\u548c\u81ea\u5df1\u6709\u95dc\u7684\u5c08\u6848\u500b\u6578\u91cf\u4e0d\u662f\u5169\u96bb\u624b\u6578\u5f97\u51fa\u4f86\u7684\u6578\u91cf\uff0c\u53c8\u6216\u662f\u81ea\u5df1\u7684 Repo \u904d\u4f48\u5728\u591a\u500b\u7fa4\u7d44\u88e1\u9762\u7684\u8a71\uff0c\u4e00\u500b\u4e00\u500b Clone \u53ef\u80fd\u5c31\u6c92\u90a3\u9ebc\u6709\u8da3\u4e86\u3002"),(0,l.kt)("p",null,"\u9019\u908a\u5c31\u4f86\u5206\u4eab\u53ef\u4ee5\u4e00\u6b21\u628a\u6240\u6709\u548c\u81ea\u5df1\u76f8\u95dc\u7684 Repo Clone \u4e0b\u4f86\u7684\u4f5c\u6cd5\u3002"),(0,l.kt)("h2",{id:"\u524d\u7f6e\u689d\u4ef6"},"\u524d\u7f6e\u689d\u4ef6"),(0,l.kt)("p",null,"\u4eca\u5929\u8981\u4ecb\u7d39\u7684\u5de5\u5177 -- gitlabber \u57fa\u672c\u4e0a\u662f\u900f\u904e Python \u64cd\u4f5c GitLab API \u4f86\u8b93\u6211\u5011\u9054\u5230\u6279\u6b21\u8907\u88fd GitLab Repo \u7684\u4e00\u500b\u5de5\u5177\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u8981\u80fd\u9806\u57f7\u884c\u5b83\uff0c\u5c31\u5f97\u5148\u88dd\u597d Python\u3002"),(0,l.kt)("h3",{id:"\u900f\u904e-pypi-\u5b89\u88dd-gitlabber"},"\u900f\u904e PyPi \u5b89\u88dd gitlabber"),(0,l.kt)("p",null,"\u88dd\u597d Python \u4e4b\u5f8c\u5462\uff0c\u5c31\u53ef\u4ee5\u900f\u904e pip \u6307\u4ee4\u4f86\u5b89\u88dd gitlabber \u4e86\uff0c\u5b89\u88dd\u7684\u8a9e\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"pip install gitlabber\n")),(0,l.kt)("p",null,"\u57f7\u884c\u7d50\u679c\u5982\u679c\u6c92\u6709\u610f\u5916\u7684\u8a71\uff0c\u61c9\u8a72\u6703\u5982\u4e0b\u5716\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u900f\u904e pip \u6307\u4ee4\u5b89\u88dd gitlabber",src:n(15746).Z,title:"\u900f\u904e pip \u6307\u4ee4\u5b89\u88dd gitlabber",width:"1103",height:"939"})),(0,l.kt)("h3",{id:"\u5728-gitlab-\u4e0a\u5efa\u7acb-access-token"},"\u5728 GitLab \u4e0a\u5efa\u7acb Access Token"),(0,l.kt)("p",null,"\u5982\u540c\u524d\u9762\u63cf\u8ff0\u7684\uff0c gitlabber \u6703\u53bb\u5b58\u53d6 GitLab \u7684 API\uff0c\u6240\u4ee5\u6211\u5011\u5fc5\u9700\u5efa\u7acb\u4e00\u7d44\u7d66 API \u4f7f\u7528\u7684 Access Token \u8b93\u5b83\u4f7f\u7528\uff0c\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u767b\u5165 GitLab\uff0c\u9ede\u9078\u53f3\u4e0a\u89d2\u982d\u50cf\u7684\u4e0b\u62c9\u9078\u55ae\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Edit profile"),"\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u9ede\u9078 Edit profile",src:n(39038).Z,title:"\u9ede\u9078 Edit profile",width:"1920",height:"979"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9ede\u9078\u5de6\u908a\u9078\u55ae\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Access Tokens"),"\uff0c\u63a5\u8457\u5728\u53f3\u908a\u7684 Token name \u8207 Select scopes \u8f38\u5165\u5fc5\u8981\u7684\u8cc7\u6599\uff0c\u5982\u4e0b\u5716\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u8f38\u5165\u5fc5\u8981\u7684\u8cc7\u6599",src:n(80279).Z,title:"\u8f38\u5165\u5fc5\u8981\u7684\u8cc7\u6599",width:"1920",height:"977"})),(0,l.kt)("admonition",{parentName:"li",title:"\u5c0f\u63d0\u793a",type:"tip"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"Token name \u53ef\u4ee5\u8f38\u5165\u81ea\u5df1\u559c\u6b61\u6216\u662f\u597d\u8a18\u3001\u597d\u8faf\u8b58\u7684\u540d\u5b57\uff0c\u4e4b\u5f8c\u8a8d\u5f97\u51fa\u4f86\u5c31\u597d\u3002"),(0,l.kt)("li",{parentName:"ol"},"read_api \u548c read_repository \u5169\u500b\u6b0a\u9650\u52d9\u5fc5\u52fe\u9078\uff0c\u5176\u5b83\u53ef\u4ee5\u4e0d\u52fe\u3002")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8f38\u5165\u5b8c\u7562\u4e4b\u5f8c\uff0c\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"Create personal access token")," \u6309\u9215\uff0c\u7136\u5f8c\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"Your new personal access token")," \u6b04\u4f4d\u4e2d\u7684\u5167\u5bb9\u8907\u88fd\u4e0b\u4f86\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u8907\u88fd Your new personal access token \u6b04\u4f4d\u7684\u5167\u5bb9",src:n(16086).Z,title:"\u8907\u88fd Your new personal access token \u6b04\u4f4d\u7684\u5167\u5bb9",width:"1920",height:"981"})))),(0,l.kt)("h2",{id:"\u900f\u904e-gitlabber-clone-\u6240\u6709-repo"},"\u900f\u904e gitlabber Clone \u6240\u6709 Repo"),(0,l.kt)("p",null,"\u6e96\u5099\u5de5\u4f5c\u5b8c\u6210\u4e4b\u5f8c\uff0c\u5c31\u53ef\u4ee5\u52d5\u624b\u628a\u5c08\u6848\u62c9\u4e0b\u4f86\u5566!!"),(0,l.kt)("h3",{id:"\u900f\u904e-gitlabber-\u4e00\u6b21-clone-\u6240\u6709-repo"},"\u900f\u904e gitlabber \u4e00\u6b21 Clone \u6240\u6709 Repo"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u4e00\u6b21\u628a\u81ea\u5df1\u6240\u6709\u7684 Repo \u62c9\u4e0b\u4f86\u7684\u8a71\uff0c\u6307\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"gitlabber -t {\u4f60\u7684 access token} -u {GitLab \u7684\u7db2\u5740} -r {\u672c\u5730\u76ee\u6a19\u8def\u5f91}\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"gitlabber -t REo7Nvm5UHmmFR8sqCcz -u https://mygitlab.ouch1978.idv -r d:\\my_repo\n")),(0,l.kt)("p",null,"\u7b49\u5b83\u8dd1\u5b8c\uff0c\u4f60\u6240\u6709\u7684 Repo \u5c31\u90fd\u8907\u88fd\u5230\u672c\u6a5f\u56c9!!"),(0,l.kt)("p",null,"\u662f\u4e0d\u662f\u5f88\u65b9\u4fbf\u5feb\u901f\u5462!?"))}m.isMDXComponent=!0},39038:function(e,t,n){t.Z=n.p+"assets/images/click-edit-profile-107531200d32015852dfbabab114a9ab.png"},16086:function(e,t,n){t.Z=n.p+"assets/images/copy-the-content-of-your-new-personal-access-token-field-842c1d70c196e59c6368c079bb93af58.png"},80279:function(e,t,n){t.Z=n.p+"assets/images/fill-token-name-and-select-scopes-a15be42fc5644ff9da73b7436fee29a0.png"},15746:function(e,t,n){t.Z=n.p+"assets/images/install-gitlabber-with-pip-74ce4143f364a3bf753b0ff067b9a5e0.png"}}]);