"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[3362],{4221:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=n(74848),i=n(28453);const t={title:"\u6392\u9664\u4f7f\u7528 node-gyp \u6642\u51fa\u73fe\u7684 gyp ERR! \u76f8\u95dc\u932f\u8aa4\u8a0a\u606f",description:"\u4e4b\u524d\u70ba\u4e86\u8b93 Docusaurus \u5177\u5099\u672c\u5730\u641c\u5c0b\u529f\u80fd\u7684\u6642\u5019\uff0c\u4f7f\u7528\u4e86 @easyops-cn/docusaurus-search-local \u9019\u500b\u5957\u4ef6\uff0c\u800c\u5b83\u88e1\u9762\u53c8\u5f15\u7528\u4e86 nodejieba \u9019\u500b\u5957\u4ef6\u3002\u6709\u8da3\u7684\u662f\uff0c\u8981\u8b93 nodejieba \u4e56\u4e56\u904b\u4f5c\u597d\u50cf\u4e0d\u662f\u90a3\u9ebc\u55ae\u7d14\u7684\u4e00\u4ef6\u4e8b\uff0c\u800c\u4e14\u53ef\u80fd\u6703\u883b\u5403\u4eba\u54c1\u7684\u3002\u6211\u5728\u516c\u53f8\u5c31\u5e6b\u4e0d\u5c11\u540c\u4e8b\u8655\u7406\u904e\u9b3c\u6253\u7246\u7684\u72c0\u6cc1\uff0c\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u89e3\u6cd5\u3002",author:"ouch1978",tags:["Docusaurus","Trouble Shooting"],keywords:["nodejieba","easyops-cn/docusaurus-search-local","gyp ERR!","jieba","Python"],last_update:{date:"2022/08/28 GMT+8",author:"Ouch Liu"}},d=void 0,l={id:"docusaurus/trouble-shooting/fix-node-gyp-error/index",title:"\u6392\u9664\u4f7f\u7528 node-gyp \u6642\u51fa\u73fe\u7684 gyp ERR! \u76f8\u95dc\u932f\u8aa4\u8a0a\u606f",description:"\u4e4b\u524d\u70ba\u4e86\u8b93 Docusaurus \u5177\u5099\u672c\u5730\u641c\u5c0b\u529f\u80fd\u7684\u6642\u5019\uff0c\u4f7f\u7528\u4e86 @easyops-cn/docusaurus-search-local \u9019\u500b\u5957\u4ef6\uff0c\u800c\u5b83\u88e1\u9762\u53c8\u5f15\u7528\u4e86 nodejieba \u9019\u500b\u5957\u4ef6\u3002\u6709\u8da3\u7684\u662f\uff0c\u8981\u8b93 nodejieba \u4e56\u4e56\u904b\u4f5c\u597d\u50cf\u4e0d\u662f\u90a3\u9ebc\u55ae\u7d14\u7684\u4e00\u4ef6\u4e8b\uff0c\u800c\u4e14\u53ef\u80fd\u6703\u883b\u5403\u4eba\u54c1\u7684\u3002\u6211\u5728\u516c\u53f8\u5c31\u5e6b\u4e0d\u5c11\u540c\u4e8b\u8655\u7406\u904e\u9b3c\u6253\u7246\u7684\u72c0\u6cc1\uff0c\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u89e3\u6cd5\u3002",source:"@site/docs/04-docusaurus/09-trouble-shooting/03-fix-node-gyp-error/index.md",sourceDirName:"04-docusaurus/09-trouble-shooting/03-fix-node-gyp-error",slug:"/docusaurus/trouble-shooting/fix-node-gyp-error/",permalink:"/docs/docusaurus/trouble-shooting/fix-node-gyp-error/",draft:!1,unlisted:!1,editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/docs/04-docusaurus/09-trouble-shooting/03-fix-node-gyp-error/index.md",tags:[{label:"Docusaurus",permalink:"/docs/tags/docusaurus"},{label:"Trouble Shooting",permalink:"/docs/tags/trouble-shooting"}],version:"current",lastUpdatedBy:"Ouch Liu",lastUpdatedAt:1661616e6,frontMatter:{title:"\u6392\u9664\u4f7f\u7528 node-gyp \u6642\u51fa\u73fe\u7684 gyp ERR! \u76f8\u95dc\u932f\u8aa4\u8a0a\u606f",description:"\u4e4b\u524d\u70ba\u4e86\u8b93 Docusaurus \u5177\u5099\u672c\u5730\u641c\u5c0b\u529f\u80fd\u7684\u6642\u5019\uff0c\u4f7f\u7528\u4e86 @easyops-cn/docusaurus-search-local \u9019\u500b\u5957\u4ef6\uff0c\u800c\u5b83\u88e1\u9762\u53c8\u5f15\u7528\u4e86 nodejieba \u9019\u500b\u5957\u4ef6\u3002\u6709\u8da3\u7684\u662f\uff0c\u8981\u8b93 nodejieba \u4e56\u4e56\u904b\u4f5c\u597d\u50cf\u4e0d\u662f\u90a3\u9ebc\u55ae\u7d14\u7684\u4e00\u4ef6\u4e8b\uff0c\u800c\u4e14\u53ef\u80fd\u6703\u883b\u5403\u4eba\u54c1\u7684\u3002\u6211\u5728\u516c\u53f8\u5c31\u5e6b\u4e0d\u5c11\u540c\u4e8b\u8655\u7406\u904e\u9b3c\u6253\u7246\u7684\u72c0\u6cc1\uff0c\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u89e3\u6cd5\u3002",author:"ouch1978",tags:["Docusaurus","Trouble Shooting"],keywords:["nodejieba","easyops-cn/docusaurus-search-local","gyp ERR!","jieba","Python"],last_update:{date:"2022/08/28 GMT+8",author:"Ouch Liu"}},sidebar:"tutorialSidebar",previous:{title:"\u6392\u9664\u57f7\u884c yarn \u6642\u51fa\u73fe yarn.ps1 cannot be loaded \u7684\u554f\u984c",permalink:"/docs/docusaurus/trouble-shooting/fix-yarn-ps1-cannot-be-loaded-error/"}},r={},a=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u75c7\u72c0",id:"\u75c7\u72c0",level:2},{value:"\u6392\u9664\u65b9\u6cd5",id:"\u6392\u9664\u65b9\u6cd5",level:2},{value:"1. \u4f7f\u7528\u4e0d\u9700\u8981\u4f9d\u8cf4 node-gyp \u7684\u5957\u4ef6",id:"1-\u4f7f\u7528\u4e0d\u9700\u8981\u4f9d\u8cf4-node-gyp-\u7684\u5957\u4ef6",level:3},{value:"2. \u4e56\u4e56\u5b89\u88dd node-gyp \u6240\u9700\u8981\u7684\u5de5\u5177",id:"2-\u4e56\u4e56\u5b89\u88dd-node-gyp-\u6240\u9700\u8981\u7684\u5de5\u5177",level:3},{value:"\u5b89\u88dd Python",id:"\u5b89\u88dd-python",level:4},{value:"\u900f\u904e Microsoft Store \u5b89\u88dd",id:"\u900f\u904e-microsoft-store-\u5b89\u88dd",level:5},{value:"\u900f\u904e Visual Studio Installer \u5b89\u88dd",id:"\u900f\u904e-visual-studio-installer-\u5b89\u88dd",level:5},{value:"\u5b89\u88dd VS Build Tools",id:"\u5b89\u88dd-vs-build-tools",level:4},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function u(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,s.jsx)(o.p,{children:"\u4e4b\u524d\u70ba\u4e86\u8b93 Docusaurus \u5177\u5099\u672c\u5730\u641c\u5c0b\u529f\u80fd\u7684\u6642\u5019\uff0c\u4f7f\u7528\u4e86 @easyops-cn/docusaurus-search-local \u9019\u500b\u5957\u4ef6\uff0c\u800c\u5b83\u88e1\u9762\u53c8\u5f15\u7528\u4e86 nodejieba(\u7d50\u5df4\u5206\u8a5e) \u9019\u500b\u5957\u4ef6\uff0c\u7136\u5f8c nodejieba \u53c8\u5f97\u4f9d\u8cf4\u65bc node-gyp \u4e4b\u4e0a\u904b\u4f5c\u3002"}),"\n",(0,s.jsx)(o.p,{children:"\u6709\u8da3\u7684\u662f\uff0c\u8981\u8b93 node-gyp \u4e56\u4e56\u904b\u4f5c\u597d\u50cf\u4e0d\u662f\u90a3\u9ebc\u55ae\u7d14\u7684\u4e00\u4ef6\u4e8b\uff0c\u800c\u4e14\u53ef\u80fd\u6703\u883b\u5403\u4eba\u54c1\u7684\u3002"}),"\n",(0,s.jsx)(o.p,{children:"\u56e0\u70ba\u53ef\u80fd\u5728\u4e0d\u540c\u7684\u74b0\u5883\u51fa\u73fe\u4e0d\u540c\u7684\u72c0\u6cc1\uff0c\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u89e3\u6cd5\u3002"}),"\n",(0,s.jsx)(o.h2,{id:"\u75c7\u72c0",children:"\u75c7\u72c0"}),"\n",(0,s.jsx)(o.p,{children:"\u901a\u5e38\u5728\u4f7f\u7528 Docusaurus \u6703\u649e\u5230\u9019\u500b\u554f\u984c\u90fd\u662f\u5728\u57f7\u884c yarn start \u6216\u662f yarn build \u7684\u6642\u5019\u6703\u9047\u5230\uff0c\u53ef\u80fd\u7684\u932f\u8aa4\u8a0a\u606f\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["gyp ERR! find Python Python is not set from command line or npm configuration.",(0,s.jsx)("br",{}),"\ngyp ERR! find Python Python is not set from environment variable PYTHON.",(0,s.jsx)("br",{}),"\ngyp ERR! find Python You need to install the latest version of Python.",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"\u5982\u679c\u662f\u4e0a\u9762\u9019\u4e32\uff0c\u57fa\u672c\u4e0a\u5c31\u662f npm \u627e\u4e0d\u5230 Python \u76f8\u95dc\u7684\u8a2d\u5b9a\u3002"}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["gyp ERR! find VS msvs_version not set from command line or npm config",(0,s.jsx)("br",{}),"\ngyp ERR! find VS VCINSTALLDIR not set, not running in VS Command Prompt ",(0,s.jsx)("br",{}),'\ngyp ERR! find VS You need to install the latest version of Visual Studio including the "Desktop development with C++" workload.',(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"\u5982\u679c\u662f\u4e0a\u9762\u9019\u4e32\uff0c\u57fa\u672c\u4e0a\u5c31\u662f npm \u627e\u4e0d\u5230 VS Build Tools\u3002"}),"\n",(0,s.jsxs)(o.p,{children:["\u5224\u65b7\u662f\u4e0d\u662f node-gyp \u9020\u6210\u7684\u554f\u984c\u7684\u95dc\u9375\u5b57\u662f ",(0,s.jsx)(o.code,{children:"gyp ERR!"})," \u3001 ",(0,s.jsx)(o.code,{children:"Python"})," \u548c ",(0,s.jsx)(o.code,{children:"msvs_version"}),"\uff0c\u57fa\u672c\u4e0a\u5982\u679c\u932f\u8aa4\u8a0a\u606f\u51fa\u73fe\u9019\u5e7e\u500b\u5b57\uff0c\u61c9\u8a72\u5c31\u516b\u4e5d\u4e0d\u96e2\u5341\u4e86\u3002"]}),"\n",(0,s.jsx)(o.h2,{id:"\u6392\u9664\u65b9\u6cd5",children:"\u6392\u9664\u65b9\u6cd5"}),"\n",(0,s.jsx)(o.p,{children:"\u65e2\u7136\u554f\u984c\u662f node-gyp \u9020\u6210\u7684\uff0c\u90a3\u89e3\u6c7a\u65b9\u6cd5\u53ef\u4ee5\u7c21\u55ae\u5206\u6210\u5169\u7a2e\uff1b\u4e00\u662f\u4e0d\u8981\u7528\u5b83\uff0c\u4e8c\u662f\u628a\u74b0\u5883\u88dd\u5230\u80fd\u8b93\u5b83\u597d\u597d\u57f7\u884c\u7684\u5f62\u72c0\u3002"}),"\n",(0,s.jsx)(o.h3,{id:"1-\u4f7f\u7528\u4e0d\u9700\u8981\u4f9d\u8cf4-node-gyp-\u7684\u5957\u4ef6",children:"1. \u4f7f\u7528\u4e0d\u9700\u8981\u4f9d\u8cf4 node-gyp \u7684\u5957\u4ef6"}),"\n",(0,s.jsx)(o.p,{children:"\u4ee5\u6211\u4e4b\u524d\u9047\u5230\u7684\u72c0\u6cc1\u70ba\u4f8b\uff0c\u6211\u5011\u662f\u56e0\u70ba\u4f7f\u7528\u4e86\u820a\u7248\u7684 easyops-cn/docusaurus-search-local \u4f86\u4f5c\u5230\u672c\u5730\u641c\u5c0b\u7684\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(o.p,{children:"\u57fa\u65bc nodejieba \u7684\u57f7\u884c\u6548\u7387\u4e0d\u662f\u90a3\u9ebc\u7406\u60f3\uff0c\u52a0\u4e0a\u74b0\u5883\u8a2d\u5b9a\u4e0a\u76f8\u5c0d\u7684\u8907\u96dc\uff0c\u6240\u4ee5\u5f8c\u4f86\u6709\u4eba\u5efa\u8b70\u4f5c\u8005\u4ee5 @node-rs/jieba \u53d6\u4ee3\u539f\u4f86\u7684 nodejieba\u3002"}),"\n",(0,s.jsx)(o.p,{children:"\u5f8c\u4f86\u4f5c\u8005\u4e5f\u5f9e\u5584\u5982\u6d41\uff0c\u6240\u4ee5 easyops-cn/docusaurus-search-local \u4e4b\u5f8c\u5c31\u6399\u812b\u4e86\u5c0d nodejieba\u3002\u7684\u4f9d\u8cf4\u3002"}),"\n",(0,s.jsx)(o.p,{children:"\u53ea\u8981\u628a easyops-cn/docusaurus-search-local \u66f4\u65b0\u5230 v0.23.0 \u4e4b\u5f8c\u7684\u7248\u672c\uff0c\u5c31\u53ef\u4ee5\u4e0d\u9700\u8981\u5b89\u88dd Python \u548c VS Build Tools \u9019\u4e9b\u5de5\u5177\u4e86\u3002"}),"\n",(0,s.jsx)(o.h3,{id:"2-\u4e56\u4e56\u5b89\u88dd-node-gyp-\u6240\u9700\u8981\u7684\u5de5\u5177",children:"2. \u4e56\u4e56\u5b89\u88dd node-gyp \u6240\u9700\u8981\u7684\u5de5\u5177"}),"\n",(0,s.jsx)(o.p,{children:"\u5176\u5be6\u932f\u8aa4\u8a0a\u606f\u88e1\u9762\u4e5f\u90fd\u591a\u5c11\u6703\u7d66\u4e00\u4e9b\u89e3\u6c7a\u65b9\u6cd5\u7684\u63d0\u793a\uff0c\u4e0d\u904e\u57fa\u65bc\u6bcf\u500b\u4eba\u96fb\u8166\u88e1\u74b0\u5883\u4e0d\u76e1\u76f8\u540c\uff0c\u6240\u4ee5\u4e0d\u898b\u5f97\u53ef\u4ee5\u4e00\u9ad4\u9069\u7528\u3002"}),"\n",(0,s.jsx)(o.p,{children:"\u5982\u540c\u75c7\u72c0\u4e2d\u63d0\u5230\u7684\uff0cnode-gyp \u6703\u4f9d\u8cf4 Python \u548c VS Build Tools \u9019\u5169\u500b\u5957\u4ef6\uff0c\u7f3a\u4e00\u4e0d\u53ef\u3002"}),"\n",(0,s.jsxs)(o.p,{children:["\u9019\u908a\u5c31\u4ee5 ",(0,s.jsx)(o.a,{href:"https://github.com/nodejs/node-gyp#on-windows",title:"node-gyp on Windows",children:"node-gyp \u5b98\u65b9\u6587\u4ef6"})," \u4f5c\u70ba\u57fa\u790e\u4f86\u63d0\u4f9b\u89e3\u6cd5\u3002"]}),"\n",(0,s.jsx)(o.h4,{id:"\u5b89\u88dd-python",children:"\u5b89\u88dd Python"}),"\n",(0,s.jsx)(o.h5,{id:"\u900f\u904e-microsoft-store-\u5b89\u88dd",children:"\u900f\u904e Microsoft Store \u5b89\u88dd"}),"\n",(0,s.jsxs)(o.p,{children:["\u53ef\u4ee5\u9078\u64c7\u900f\u904e ",(0,s.jsx)(o.a,{href:"https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5?hl=en-us&gl=US",title:"Python 3.10",children:"Microsoft Store"})," \u9019\u500b\u9023\u7d50\u4f86\u53d6\u5f97\u4e26\u4e14\u5b89\u88dd Python\u3002"]}),"\n",(0,s.jsx)(o.p,{children:"\u6216\u662f\u76f4\u63a5\u5728 PowerShell \u4e2d\u8f38\u5165\uff1a"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-powershell",children:"Python\n"})}),"\n",(0,s.jsx)(o.p,{children:"\u4e5f\u53ef\u4ee5\u9054\u5230\u4e00\u6a23\u7684\u6548\u679c\u3002"}),"\n",(0,s.jsx)(o.h5,{id:"\u900f\u904e-visual-studio-installer-\u5b89\u88dd",children:"\u900f\u904e Visual Studio Installer \u5b89\u88dd"}),"\n",(0,s.jsx)(o.p,{children:'\u5982\u679c\u6a5f\u5668\u4e0a\u5df2\u7d93\u6709\u5b89\u88dd\u904e Visual Studio 2017 \u4ee5\u4e0a\u7248\u672c\u7684\u8a71\uff0c\u4e5f\u53ef\u4ee5\u900f\u904e Visual Studio Installer \u9078\u53d6 "Python \u958b\u767c" \u9019\u500b\u5de5\u4f5c\u8ca0\u8f09\uff0c\u4ee5\u53ca\u9078\u64c7\u6027\u9805\u76ee\u4e2d\u7684 Python\u3002'}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"\u5b89\u88dd Python \u958b\u767c\u5de5\u4f5c",src:n(9105).A+"",title:"\u5b89\u88dd Python \u958b\u767c\u5de5\u4f5c",width:"1920",height:"1080"})}),"\n",(0,s.jsxs)(o.p,{children:["\u7576\u7136\uff0c\u4e5f\u53ef\u4ee5\u9078\u64c7\u76f4\u63a5\u5230 ",(0,s.jsx)(o.a,{href:"https://www.python.org/downloads/",title:"Download Python",children:"Python \u5b98\u7db2"}),"\u4e0b\u8f09\u5b89\u88dd\u5305\u9032\u884c\u5b89\u88dd\u3002"]}),"\n",(0,s.jsx)(o.p,{children:"\u5b89\u88dd\u5b8c\u7562\u4e4b\u5f8c\uff0c\u8acb\u8a18\u5f97\u78ba\u8a8d Python \u7684\u8def\u5f91\u662f\u5426\u6709\u88ab\u52a0\u5230\u74b0\u5883\u8b8a\u6578\u4e2d\uff0c\u5982\u679c\u6c92\u6709\u7684\u8a71\u8a18\u5f97\u624b\u52d5\u5e6b\u5b83\u52a0\u4e00\u4e0b\u3002"}),"\n",(0,s.jsx)(o.h4,{id:"\u5b89\u88dd-vs-build-tools",children:"\u5b89\u88dd VS Build Tools"}),"\n",(0,s.jsx)(o.p,{children:"\u81f3\u65bc VS Build Tools \u7684\u5b89\u88dd\uff0c\u5247\u53ef\u4ee5\u770b\u96fb\u8166\u88e1\u662f\u5426\u5df2\u7d93\u6709\u5b89\u88dd Visual Studio \u6216\u662f Visual Studio Build Tools\u3002"}),"\n",(0,s.jsx)(o.p,{children:'\u5982\u679c\u5df2\u7d93\u6709\u5b89\u88dd\u904e Visual Studio 2017 \u6216\u662f Visual Studio Build Tools 2017 \u4ee5\u4e0a\u7684\u7248\u672c\u7684\u8a71\uff0c\u53ef\u4ee5\u900f\u904e Visual Studio Installer \u4f86\u5b89\u88dd "C++ Build Tools \u6838\u5fc3\u529f\u80fd" \u9019\u500b\u500b\u5225\u5143\u4ef6\uff0c\u5982\u4e0b\u5716\uff1a'}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"\u5b89\u88dd C++ Build Tools \u6838\u5fc3\u529f\u80fd",src:n(16382).A+"",title:"\u5b89\u88dd C++ Build Tools \u6838\u5fc3\u529f\u80fd",width:"1859",height:"940"})}),"\n",(0,s.jsx)(o.p,{children:'\u6216\u662f\u6bd4\u8f03\u61f6\u7684\u8a71\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5b89\u88dd "\u4f7f\u7528 C++ \u7684\u684c\u9762\u958b\u767c" \u9019\u500b\u5de5\u4f5c\u8ca0\u8f09\uff0c\u88e1\u9762\u5c31\u6703\u5305\u542b VS Build Tools\u3002'}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"&quot;\u5b89\u88dd\u4f7f\u7528 C++ \u7684\u684c\u9762\u958b\u767c&quot;",src:n(76940).A+"",title:"\u4f7f\u7528 C++ \u7684\u684c\u9762\u958b\u767c",width:"1920",height:"1080"})}),"\n",(0,s.jsxs)(o.p,{children:["\u5982\u679c\u6c92\u6709\u5b89\u88dd\u904e Visual Studio \u7684\u8a71\uff0c\u5247\u53ef\u4ee5\u4e0b\u8f09\u5b89\u88dd ",(0,s.jsx)(o.a,{href:"https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community",title:"Visual Studio Community",children:"Visual Studio Community"}),'\uff0c\u4e26\u4e14\u9078\u53d6\u5b89\u88dd "\u4f7f\u7528 C++ \u7684\u684c\u9762\u958b\u767c" \u9019\u500b\u5de5\u4f5c\u8ca0\u8f09\u3002']}),"\n",(0,s.jsx)(o.p,{children:"\u5b89\u88dd\u5b8c\u7562\u4e4b\u5f8c\uff0c\u6253\u958b\u4ee4\u547d\u63d0\u793a\u5b57\u5143\uff0c\u8f38\u5165\u4e0b\u5217\u6307\u4ee4\uff1a"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"npm config set msvs_version 2017\n"})}),"\n",(0,s.jsx)(o.admonition,{title:"\u5c0f\u63d0\u793a",type:"tip",children:(0,s.jsx)(o.p,{children:"\u8acb\u914d\u5408\u4f60\u5b89\u88dd\u7684 Visual Studio \u7248\u865f\u8abf\u6574\u6307\u4ee4\u3002"})}),"\n",(0,s.jsx)(o.p,{children:"\u4ee5\u4e0a\u3002"}),"\n",(0,s.jsx)(o.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://skychang.github.io/2020/03/10/npm-Fix%20node-gyp%20and%20canvas%20dependence/",title:"\u61f7\u5ff5 Sky Chang \u9577\u5b98",children:"\u5929\u7a7a\u7684\u5783\u573e\u5834 v3\uff1anpm - \u8655\u7406 node-gyp \u548c canvas \u7684\u76f8\u4f9d\u6027"})}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://github.com/easyops-cn/docusaurus-search-local/issues/140",title:"Use wasm version of jieba to avoid build nodejieba",children:"Use wasm version of jieba to avoid build nodejieba"})}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://github.com/nodejs/node-gyp#on-windows",title:"node-gyp on Windowss",children:"node-gyp on Windows"})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9105:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/install-python-development-workload-407b8068f09f788863f813651d5bb6ff.png"},16382:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/install-visual-c++-build-tools-core-features-5ce9e129f49b5ad54c39927618243e47.png"},76940:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/install-visual-c++-desktop-development-workload-ca3ad90f1ed069a9f48d7606d9ff57c5.png"},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>l});var s=n(96540);const i={},t=s.createContext(i);function d(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);