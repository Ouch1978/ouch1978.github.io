"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[4671],{46527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=t(74848),r=t(28453);const a={title:"\u4e00\u6b21\u522a\u9664\u6240\u6709\u8cc7\u6e90\u7684\u6307\u4ee4",description:"\u6536\u9304\u6e05\u7406\u548c\u5bb9\u5668\u76f8\u95dc\u8cc7\u6e90\u7684\u5404\u7a2e\u6307\u4ee4\u3002",author:"ouch1978",tags:["Container","Docker"],keywords:["Docker","CLI","\u6307\u4ee4","\u522a\u9664","\u5bb9\u5668"],last_update:{date:"2022/08/25 GMT+8",author:"Ouch Liu"}},i=void 0,c={id:"containerization/docker-cheatsheet/prune-all-containers/index",title:"\u4e00\u6b21\u522a\u9664\u6240\u6709\u8cc7\u6e90\u7684\u6307\u4ee4",description:"\u6536\u9304\u6e05\u7406\u548c\u5bb9\u5668\u76f8\u95dc\u8cc7\u6e90\u7684\u5404\u7a2e\u6307\u4ee4\u3002",source:"@site/docs/03-containerization/02-docker-cheatsheet/01-prune-all-containers/index.md",sourceDirName:"03-containerization/02-docker-cheatsheet/01-prune-all-containers",slug:"/containerization/docker-cheatsheet/prune-all-containers/",permalink:"/docs/containerization/docker-cheatsheet/prune-all-containers/",draft:!1,unlisted:!1,editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/docs/03-containerization/02-docker-cheatsheet/01-prune-all-containers/index.md",tags:[{label:"Container",permalink:"/docs/tags/container"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",lastUpdatedBy:"Ouch Liu",lastUpdatedAt:16613568e5,frontMatter:{title:"\u4e00\u6b21\u522a\u9664\u6240\u6709\u8cc7\u6e90\u7684\u6307\u4ee4",description:"\u6536\u9304\u6e05\u7406\u548c\u5bb9\u5668\u76f8\u95dc\u8cc7\u6e90\u7684\u5404\u7a2e\u6307\u4ee4\u3002",author:"ouch1978",tags:["Container","Docker"],keywords:["Docker","CLI","\u6307\u4ee4","\u522a\u9664","\u5bb9\u5668"],last_update:{date:"2022/08/25 GMT+8",author:"Ouch Liu"}},sidebar:"tutorialSidebar",previous:{title:"\u5728 Ubuntu \u4e2d\u4fee\u6539\u6642\u5340\u4ee5\u53ca\u555f\u7528\u81ea\u52d5\u6642\u9593\u6821\u6b63\u670d\u52d9",permalink:"/docs/containerization/linux-cheatsheet/adjust-timezone-and-sync-time/"},next:{title:"\u8b93\u5bb9\u5668\u900f\u904e\u4ee3\u7406\u4f3a\u670d\u5668(Proxy)\u5b58\u53d6\u7db2\u8def",permalink:"/docs/containerization/docker-cheatsheet/make-container-access-network-through-proxy/"}},s={},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",level:2},{value:"\u522a\u9664\u6240\u6709\u5bb9\u5668",id:"\u522a\u9664\u6240\u6709\u5bb9\u5668",level:2},{value:"\u522a\u9664\u6240\u6709\u6620\u50cf\u6a94",id:"\u522a\u9664\u6240\u6709\u6620\u50cf\u6a94",level:2},{value:"\u522a\u9664\u6240\u6709 Volume",id:"\u522a\u9664\u6240\u6709-volume",level:2},{value:"\u522a\u9664\u6240\u6709\u7db2\u8def",id:"\u522a\u9664\u6240\u6709\u7db2\u8def",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u73a9\u5bb9\u5668\u5316\u7684\u6642\u5019\uff0c\u5f80\u5f80\u4e00\u4e0d\u5c0f\u5fc3\u5c31\u5efa\u4e86\u4e00\u5927\u5806\u7684\u5bb9\u5668\uff0c\u62c9\u4e86\u4e00\u5927\u5806\u7684 Image\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u9019\u7bc7\u5c31\u8a18\u9304\u4e00\u4e0b\u6e05\u7406\u548c\u5bb9\u5668\u76f8\u95dc\u8cc7\u6e90\u7684\u5404\u7a2e\u6307\u4ee4\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",children:"\u505c\u6b62\u6240\u6709\u5bb9\u5668"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"docker container stop $(docker container ls -aq)\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsx)(n.p,{children:"\u6ce8\u610f!! \u4e0b\u5217\u7684\u6307\u4ee4\u90fd\u6703\u9020\u6210\u7269\u7406\u4e0a\u7684\u5f71\u97ff\uff0c\u8acb\u5c0f\u5fc3\u670d\u7528\u3002"})}),"\n",(0,o.jsx)(n.h2,{id:"\u522a\u9664\u6240\u6709\u5bb9\u5668",children:"\u522a\u9664\u6240\u6709\u5bb9\u5668"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"docker container rm $(docker container ls -aq)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u522a\u9664\u6240\u6709\u6620\u50cf\u6a94",children:"\u522a\u9664\u6240\u6709\u6620\u50cf\u6a94"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"docker image prune -a -f\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u522a\u9664\u6240\u6709-volume",children:"\u522a\u9664\u6240\u6709 Volume"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"docker volume prune -f\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u522a\u9664\u6240\u6709\u7db2\u8def",children:"\u522a\u9664\u6240\u6709\u7db2\u8def"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"docker network prune -f\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);