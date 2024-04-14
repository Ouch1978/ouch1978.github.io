"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[6640],{25878:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=n(74848),r=n(28453);const t={title:"\u89e3\u6c7a\u900f\u904e Docker Compose \u555f\u52d5\u5bb9\u5668\u6642\u51fa\u73fe\u7684 Error response from daemon: i/o timeout \u932f\u8aa4",description:"\u6709\u4e00\u6b21\u5728\u900f\u904e Docker Compose up \u555f\u52d5\u5bb9\u5668\u7684\u6642\u5019\uff0c\u76f4\u63a5\u56de\u50b3\u4e86 Error response from daemon: i/o timeout \u932f\u8aa4\u3002 \u6211\u7684 Compose File \u88e1\u9762\u6709\u5169\u500b\u5bb9\u5668\uff0c\u5176\u4e2d\u4e00\u500b\u6709\u9806\u5229\u8d77\u4f86\uff0c\u53e6\u4e00\u500b\u5c31\u662f\u600e\u6a23\u90fd\u8d77\u4e0d\u4f86\u3002 \u8a66\u4e86\u628a\u5bb9\u5668\u90fd\u780d\u6389\u91cd\u5efa\uff0c\u9084\u662f\u51fa\u73fe\u4e00\u6a23\u7684\u932f\u8aa4\u3002 \u751a\u81f3\u9084\u51fa\u73fe\u904e\u5169\u500b\u5bb9\u5668\u90fd\u8d77\u4e0d\u4f86\u7684\u60c5\u6cc1\u3002",author:"ouch1978",tags:["Container","Docker","Trouble Shooting"],keywords:["Docker Compose","CLI","Docker Desktop"],last_update:{date:"2022/10/07 GMT+8",author:"Ouch Liu"}},s=void 0,c={id:"containerization/trouble-shooting/solve-error-response-from-daemon-io-timeout/index",title:"\u89e3\u6c7a\u900f\u904e Docker Compose \u555f\u52d5\u5bb9\u5668\u6642\u51fa\u73fe\u7684 Error response from daemon: i/o timeout \u932f\u8aa4",description:"\u6709\u4e00\u6b21\u5728\u900f\u904e Docker Compose up \u555f\u52d5\u5bb9\u5668\u7684\u6642\u5019\uff0c\u76f4\u63a5\u56de\u50b3\u4e86 Error response from daemon: i/o timeout \u932f\u8aa4\u3002 \u6211\u7684 Compose File \u88e1\u9762\u6709\u5169\u500b\u5bb9\u5668\uff0c\u5176\u4e2d\u4e00\u500b\u6709\u9806\u5229\u8d77\u4f86\uff0c\u53e6\u4e00\u500b\u5c31\u662f\u600e\u6a23\u90fd\u8d77\u4e0d\u4f86\u3002 \u8a66\u4e86\u628a\u5bb9\u5668\u90fd\u780d\u6389\u91cd\u5efa\uff0c\u9084\u662f\u51fa\u73fe\u4e00\u6a23\u7684\u932f\u8aa4\u3002 \u751a\u81f3\u9084\u51fa\u73fe\u904e\u5169\u500b\u5bb9\u5668\u90fd\u8d77\u4e0d\u4f86\u7684\u60c5\u6cc1\u3002",source:"@site/docs/03-containerization/09-trouble-shooting/01-solve-error-response-from-daemon-io-timeout/index.md",sourceDirName:"03-containerization/09-trouble-shooting/01-solve-error-response-from-daemon-io-timeout",slug:"/containerization/trouble-shooting/solve-error-response-from-daemon-io-timeout/",permalink:"/docs/containerization/trouble-shooting/solve-error-response-from-daemon-io-timeout/",draft:!1,unlisted:!1,editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/docs/03-containerization/09-trouble-shooting/01-solve-error-response-from-daemon-io-timeout/index.md",tags:[{label:"Container",permalink:"/docs/tags/container"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Trouble Shooting",permalink:"/docs/tags/trouble-shooting"}],version:"current",lastUpdatedBy:"Ouch Liu",lastUpdatedAt:1665072e6,frontMatter:{title:"\u89e3\u6c7a\u900f\u904e Docker Compose \u555f\u52d5\u5bb9\u5668\u6642\u51fa\u73fe\u7684 Error response from daemon: i/o timeout \u932f\u8aa4",description:"\u6709\u4e00\u6b21\u5728\u900f\u904e Docker Compose up \u555f\u52d5\u5bb9\u5668\u7684\u6642\u5019\uff0c\u76f4\u63a5\u56de\u50b3\u4e86 Error response from daemon: i/o timeout \u932f\u8aa4\u3002 \u6211\u7684 Compose File \u88e1\u9762\u6709\u5169\u500b\u5bb9\u5668\uff0c\u5176\u4e2d\u4e00\u500b\u6709\u9806\u5229\u8d77\u4f86\uff0c\u53e6\u4e00\u500b\u5c31\u662f\u600e\u6a23\u90fd\u8d77\u4e0d\u4f86\u3002 \u8a66\u4e86\u628a\u5bb9\u5668\u90fd\u780d\u6389\u91cd\u5efa\uff0c\u9084\u662f\u51fa\u73fe\u4e00\u6a23\u7684\u932f\u8aa4\u3002 \u751a\u81f3\u9084\u51fa\u73fe\u904e\u5169\u500b\u5bb9\u5668\u90fd\u8d77\u4e0d\u4f86\u7684\u60c5\u6cc1\u3002",author:"ouch1978",tags:["Container","Docker","Trouble Shooting"],keywords:["Docker Compose","CLI","Docker Desktop"],last_update:{date:"2022/10/07 GMT+8",author:"Ouch Liu"}},sidebar:"tutorialSidebar",previous:{title:"\u53d6\u5f97 GitLab \u5bb9\u5668\u7ba1\u7406\u8005\u5bc6\u78bc\u7684\u6b63\u78ba\u59ff\u52e2",permalink:"/docs/containerization/docker-cheatsheet/gitlab-container-admin-password/"},next:{title:"\u89e3\u6c7a ElasticSearch \u5bb9\u5668\u4e2d\u51fa\u73fe\u7684 max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144] \u932f\u8aa4",permalink:"/docs/containerization/trouble-shooting/fix-vm-max-map-count-is-too-low/"}},d={},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6211\u7684\u5690\u767e\u8349\u4e4b\u8def",id:"\u6211\u7684\u5690\u767e\u8349\u4e4b\u8def",level:2},{value:"1. \u4e0b\u4e00\u6b21\u6307\u4ee4\u8d77\u4e0d\u4f86\uff0c\u90a3\u5c31\u4e0b\u7b2c\u4e8c\u6b21",id:"1-\u4e0b\u4e00\u6b21\u6307\u4ee4\u8d77\u4e0d\u4f86\u90a3\u5c31\u4e0b\u7b2c\u4e8c\u6b21",level:3},{value:"2. \u4ee5\u7cfb\u7d71\u7ba1\u7406\u54e1\u8eab\u4efd\u555f\u52d5 Docker Desktop",id:"2-\u4ee5\u7cfb\u7d71\u7ba1\u7406\u54e1\u8eab\u4efd\u555f\u52d5-docker-desktop",level:3},{value:"3. \u91cd\u958b\u6a5f",id:"3-\u91cd\u958b\u6a5f",level:3},{value:"4. \u8abf\u6574 vmcompute \u7684\u5b89\u5168\u8a2d\u5b9a",id:"4-\u8abf\u6574-vmcompute-\u7684\u5b89\u5168\u8a2d\u5b9a",level:3},{value:"\u5f8c\u8a18",id:"\u5f8c\u8a18",level:2},{value:"\u788e\u788e\u5538",id:"\u788e\u788e\u5538",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function a(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,i.jsx)(o.p,{children:"\u6709\u4e00\u6b21\u5728\u900f\u904e Docker Compose up \u555f\u52d5\u5bb9\u5668\u7684\u6642\u5019\uff0c\u76f4\u63a5\u56de\u50b3\u4e86 Error response from daemon: i/o timeout \u932f\u8aa4\u3002"}),"\n",(0,i.jsx)(o.p,{children:"\u6211\u7684 Compose File \u88e1\u9762\u6709\u5169\u500b\u5bb9\u5668\uff0c\u5176\u4e2d\u4e00\u500b\u6709\u9806\u5229\u8d77\u4f86\uff0c\u53e6\u4e00\u500b\u5c31\u662f\u600e\u6a23\u90fd\u8d77\u4e0d\u4f86\u3002"}),"\n",(0,i.jsx)(o.p,{children:"\u8a66\u4e86\u628a\u5bb9\u5668\u90fd\u780d\u6389\u91cd\u5efa\uff0c\u9084\u662f\u51fa\u73fe\u4e00\u6a23\u7684\u932f\u8aa4\u3002"}),"\n",(0,i.jsx)(o.p,{children:"\u751a\u81f3\u9084\u51fa\u73fe\u904e\u5169\u500b\u5bb9\u5668\u90fd\u8d77\u4e0d\u4f86\u7684\u60c5\u6cc1\u3002"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"\u555f\u52d5\u5bb9\u5668\u6642\u51fa\u73fe Error response from daemon: i/o timeout \u932f\u8aa4",src:n(10549).A+"",title:"\u555f\u52d5\u5bb9\u5668\u6642\u51fa\u73fe Error response from daemon: i/o timeout \u932f\u8aa4",width:"1830",height:"857"})}),"\n",(0,i.jsx)(o.p,{children:"\u4e0a\u7db2\u722c\u4e86\u4e00\u4e0b\uff0c\u767c\u73fe\u539f\u4f86\u6211\u53c8\u4e0d\u662f\u7b2c\u4e00\u500b\u9047\u5230\u9019\u500b\u554f\u984c\u7684\u4eba\u3002"}),"\n",(0,i.jsx)(o.p,{children:"\u770b\u4e86\u7db2\u8def\u4e0a\u7684\u89e3\u6cd5\u5c45\u7136\u4e0d\u53ea\u4e00\u7a2e\uff0c\u6211\u53ea\u597d\u4e00\u500b\u4e00\u500b\u8a66\u770b\u770b\u4e86..."}),"\n",(0,i.jsx)(o.h2,{id:"\u6211\u7684\u5690\u767e\u8349\u4e4b\u8def",children:"\u6211\u7684\u5690\u767e\u8349\u4e4b\u8def"}),"\n",(0,i.jsx)(o.p,{children:"\u4e0b\u9762\u5217\u51fa\u6211\u8a66\u904e\u7684\u5404\u7a2e\u7db2\u8def\u4e0a\u6709\u63d0\u5230\u7684\u53ef\u80fd\u89e3\u6cd5\u548c\u7d50\u679c\u3002"}),"\n",(0,i.jsx)(o.h3,{id:"1-\u4e0b\u4e00\u6b21\u6307\u4ee4\u8d77\u4e0d\u4f86\u90a3\u5c31\u4e0b\u7b2c\u4e8c\u6b21",children:"1. \u4e0b\u4e00\u6b21\u6307\u4ee4\u8d77\u4e0d\u4f86\uff0c\u90a3\u5c31\u4e0b\u7b2c\u4e8c\u6b21"}),"\n",(0,i.jsx)(o.p,{children:"\u6709\u4eba\u8aaa\u904e\u300c\u4e00\u500b\u4fbf\u7576\u5403\u4e0d\u98fd\uff0c\u90a3\u5c31\u5403\u7b2c\u4e8c\u500b\u300d\u3002"}),"\n",(0,i.jsx)(o.p,{children:"\u90a3\u6307\u4ee4\u4e0b\u4e00\u6b21\u4e0d\u6210\u529f\uff0c\u5c31\u591a\u4e0b\u5e7e\u6b21\u554a\uff0c\u53cd\u6b63\u4e0b\u6307\u4ee4\u4e0d\u7528\u9322\u3002(\u54a6?)"}),"\n",(0,i.jsx)(o.p,{children:"\u4f46\u662f\uff0c\u4eba\u5728\u904b\u6c23\u5dee\u7684\u6642\u5019\uff0c\u597d\u50cf\u4e0b\u5e7e\u6b21\u90fd\u662f\u4e00\u6a23\u7684\u7d50\u679c\u3002"}),"\n",(0,i.jsx)(o.p,{children:"\u5931\u6557..."}),"\n",(0,i.jsx)(o.h3,{id:"2-\u4ee5\u7cfb\u7d71\u7ba1\u7406\u54e1\u8eab\u4efd\u555f\u52d5-docker-desktop",children:"2. \u4ee5\u7cfb\u7d71\u7ba1\u7406\u54e1\u8eab\u4efd\u555f\u52d5 Docker Desktop"}),"\n",(0,i.jsx)(o.p,{children:"\u6709\u4eba\u8aaa\u7528\u7cfb\u7d71\u7ba1\u7406\u54e1\u8eab\u4efd\u555f\u52d5 Docker Desktop \u5c31\u89e3\u6c7a\u4e86\uff0c\u90a3\u6211\u4e5f\u4f86\u8a66\u770b\u770b\u3002"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"\u4ee5\u7d71\u7ba1\u7406\u54e1\u8eab\u4efd\u555f\u52d5 Docker Desktop",src:n(40262).A+"",title:"\u7d71\u7ba1\u7406\u54e1\u8eab\u4efd\u555f\u52d5 Docker Desktop",width:"662",height:"885"})}),"\n",(0,i.jsx)(o.p,{children:"\u55ef... \u9084\u662f\u4e0d\u884c\u554a~~"}),"\n",(0,i.jsx)(o.h3,{id:"3-\u91cd\u958b\u6a5f",children:"3. \u91cd\u958b\u6a5f"}),"\n",(0,i.jsx)(o.p,{children:"\u300c\u91cd\u958b\u6cbb\u767e\u75c5!!\u300d"}),"\n",(0,i.jsx)(o.p,{children:"\u6211\u91cd\u958b\u6a5f\u7e3d\u884c\u4e86\u5427!?"}),"\n",(0,i.jsx)(o.p,{children:"\u91cd\u958b\u6a5f\u4e4b\u5f8c\uff0c\u66fe\u7d93\u6709\u6210\u529f\u4e00\u6b21\u9806\u5229\u7684\u555f\u52d5\u4e86\u5169\u500b\u5bb9\u5668\u3002"}),"\n",(0,i.jsx)(o.p,{children:"\u4f46\u662f\u5728\u6211\u95dc\u6389\u5bb9\u5668\u8981\u91cd\u65b0\u555f\u52d5\u5b83\u5011\u7684\u6642\u5019\uff0c\u7136\u5f8c\u9019\u500b\u932f\u8aa4\u5c31\u53c8\u8dd1\u51fa\u4f86\u4e86..."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"\u6293\u72c2\u4e2d",src:n(70726).A+"",title:"\u6293\u72c2\u4e2d",width:"370",height:"320"})}),"\n",(0,i.jsx)(o.h3,{id:"4-\u8abf\u6574-vmcompute-\u7684\u5b89\u5168\u8a2d\u5b9a",children:"4. \u8abf\u6574 vmcompute \u7684\u5b89\u5168\u8a2d\u5b9a"}),"\n",(0,i.jsx)(o.p,{children:"\u4f7f\u7528 Windows 11 \u7684\u6b65\u9a5f\u5982\u4e0b(Windows 10 \u53ef\u80fd\u6703\u6709\u4e00\u4e9b\u5dee\u7570)\uff1a"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\u5728 Windows \u7684\u8a2d\u5b9a(\u71b1\u9375\u70ba ",(0,i.jsx)("kbd",{children:"\u229e Win"})," + ",(0,i.jsx)("kbd",{children:"I"}),")\u4e2d\u9ede\u9078 ",(0,i.jsx)(o.code,{children:"Windows \u5b89\u5168\u6027"}),"(\u96b1\u79c1\u6b0a\u8207\u5b89\u5168\u6027 -> Windows \u5b89\u5168\u6027)\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\u9ede\u9078 ",(0,i.jsx)(o.code,{children:"\u61c9\u7528\u7a0b\u5f0f\u8207\u700f\u89bd\u5668\u63a7\u5236"}),"\uff0c\u61c9\u8a72\u5c31\u6703\u518d\u958b\u555f Windows Security \u61c9\u7528\u7a0b\u5f0f(\u5f88\u795e\u5947\u7684\u662f\u5728\u6211\u4e2d\u6587\u7248\u7684 Windows 11 22H2 \u88e1\u5b83\u5c45\u7136\u6c92\u88ab\u4e2d\u6587\u5316)\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\u9ede\u9078 ",(0,i.jsx)(o.code,{children:"Exploit protection settings"}),"\u3002\n",(0,i.jsx)(o.img,{alt:"\u9ede\u9078 Exploit protection settings",src:n(90222).A+"",title:"\u9ede\u9078 Exploit protection settings",width:"1733",height:"1297"})]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\u5207\u63db\u5230 ",(0,i.jsx)(o.code,{children:"Program settings"})," \u9801\u7c64\u3002(\u6211\u5728\u9019\u4e00\u6b65\u9084\u9047\u5230\u795e\u5947\u7684 Bug\uff0c\u4e00\u9023\u8df3\u4e86\u597d\u5e7e\u500b\u932f\u8aa4\u8a0a\u606f\u51fa\u4f86\uff0c\u91cd\u958b Windows Security \u5c31\u53c8\u597d\u4e86\u3002)\n",(0,i.jsx)(o.img,{alt:"\u5207\u63db\u5230 Program settings \u9801\u7c64",src:n(64875).A+"",title:"\u5207\u63db\u5230 Program settings \u9801\u7c64",width:"1733",height:"1297"})]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\u5728\u6e05\u55ae\u88e1\u5c0b\u627e ",(0,i.jsx)(o.code,{children:"C:\\WINDOWS\\System32\\vmcompute.exe"}),"\uff0c\u5982\u679c\u5b58\u5728\u7684\u8a71\u8acb\u9ede\u9078\u4e0b\u65b9\u7684 ",(0,i.jsx)(o.code,{children:"Edit"})," \u4e26\u63a5\u7b2c\u516d\u6b65\uff0c\u4e0d\u5b58\u5728\u7684\u8a71\u53ef\u4ee5\u76f4\u63a5\u8df3\u5230\u7b2c\u4e03\u6b65\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\u5f80\u4e0b\u6372\u627e\u5230 ",(0,i.jsx)(o.code,{children:"Code flow guard (CFG)"}),"\uff0c\u7136\u5f8c\u5c07 ",(0,i.jsx)(o.code,{children:"Override system settings"})," \u53d6\u6d88\u52fe\u9078\uff0c\u7136\u5f8c\u6309\u4e0b Apply \u6309\u9215\u3002\n",(0,i.jsx)(o.img,{alt:"\u53d6\u6d88\u52fe\u9078 Code flow guard (CFG)",src:n(86125).A+"",title:"\u53d6\u6d88\u52fe\u9078 Code flow guard (CFG)",width:"1733",height:"1297"})]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\u522a\u9664 ",(0,i.jsx)(o.code,{children:"%UserProfile%\\AppData\\Roaming\\Docker"})," \u88e1\u9762\u6240\u6709\u7684\u6a94\u6848\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"\u91cd\u65b0\u958b\u6a5f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"\u6211\u4f9d\u7167\u4e0a\u9762\u7684\u6b65\u9a5f\uff0c\u8a66\u4e86\u4e00\u6b21\u5c31\u89e3\u6c7a\u554f\u984c\u4e86\u3002"}),"\n",(0,i.jsx)(o.h2,{id:"\u5f8c\u8a18",children:"\u5f8c\u8a18"}),"\n",(0,i.jsx)(o.admonition,{title:"\u5c0f\u8a23\u7ac5",type:"tip",children:(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u628a C:\\WINDOWS\\System32\\vmcompute.exe \u7684\u5b89\u5168\u6027\u8a2d\u5b9a\u6574\u500b\u522a\u6389\uff0c\u6211\u5728\u81ea\u5df1\u7684\u96fb\u8166\u8a66\u8d77\u4f86\u662f\u53ef\u884c\u7684\u3002"}),"\n",(0,i.jsx)(o.li,{children:"\u61f6\u4eba\u5305\u5c31\u662f\u522a\u9664 vmcompute \u7684\u5b89\u5168\u6027\u8a2d\u5b9a\u3001\u522a Docker \u8cc7\u6599\u593e\u4e0b\u6240\u6709\u6a94\u6848\uff0c\u7136\u5f8c\u91cd\u958b\u6a5f\u3002"}),"\n"]})}),"\n",(0,i.jsx)(o.h2,{id:"\u788e\u788e\u5538",children:"\u788e\u788e\u5538"}),"\n",(0,i.jsx)(o.p,{children:"\u6bcf\u6b21\u9047\u5230\u554f\u984c\u7684\u6642\u5019\uff0c\u5f80\u5f80\u6211\u90fd\u5f97\u8981\u8a66\u5230\u6700\u5f8c\u4e00\u500b\u65b9\u6cd5\u624d\u6703\u6210\u529f\u3002"}),"\n",(0,i.jsx)(o.p,{children:"\u4e0b\u6b21\u53cd\u904e\u4f86\u8a66\u597d\u4e86\uff0c\u53ef\u60e1!!"}),"\n",(0,i.jsx)(o.p,{children:"\u5e0c\u671b\u5927\u5bb6\u4e0d\u8981\u8ddf\u6211\u4e00\u6a23\u5012\u6963\u554a~~~"}),"\n",(0,i.jsx)(o.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://github.com/docker/for-win/issues/4413",title:"Cannot start docker - Error response from daemon: i/o timeout",children:"Cannot start docker - Error response from daemon: i/o timeout"})}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://bobcares.com/blog/docker-error-response-from-daemon-i-o-timeout/",title:"How we tackle Docker Error response from daemon I/O timeout",children:"How we tackle Docker Error response from daemon I/O timeout"})}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://stackoverflow.com/questions/68483576/docker-compose-build-fails-with-io-timeout",title:"docker compose build fails with IO timeout",children:"docker compose build fails with IO timeout"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},90222:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/click-exploit-protection-settings-ef302e9257abd1574ae8c31d51d96cb1.png"},10549:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/error-response-from-daemon-io-timeout-00d4c78f7b9d003fb9448cf8808e1d93.png"},70726:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/nicolas-get-crazy-49025cd8c75765eced07629e28797b66.png"},40262:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/run-docker-desktop-as-administrator-db0fd88e5d6f7266e01dc2c9150a1272.png"},64875:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/switch-to-program-settings-tab-513b7eb83d5d0cd9ca2be338269bb19f.png"},86125:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/unckeck-code-flow-guard-checkbox-667f49acbebf4bde294c89ceb890c9a0.png"},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>c});var i=n(96540);const r={},t=i.createContext(r);function s(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);