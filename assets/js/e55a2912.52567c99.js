"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[2605],{14676:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>u,toc:()=>a});var t=n(74848),o=n(28453);const r={title:"\u5728\u6587\u4ef6\u5eab\u7684\u6587\u7ae0\u4e0b\u65b9\u52a0\u4e0a Disqus \u7559\u8a00\u5340",description:"\u4ecb\u7d39\u5728 Docusaurus \u7684\u6587\u7ae0\u4e2d\u52a0\u5165 Disqus \u7559\u8a00\u5340\u7684\u65b9\u6cd5\u3002",author:"ouch1978",tags:["Docusaurus"],keywords:["Docusaurus","\u7559\u8a00","\u5ba2\u88fd","Disqus","Docs"],last_update:{date:"2022/08/25 GMT+8",author:"Ouch Liu"}},i=void 0,u={id:"docusaurus/customization/add-disqus-to-docusaurus-doc/index",title:"\u5728\u6587\u4ef6\u5eab\u7684\u6587\u7ae0\u4e0b\u65b9\u52a0\u4e0a Disqus \u7559\u8a00\u5340",description:"\u4ecb\u7d39\u5728 Docusaurus \u7684\u6587\u7ae0\u4e2d\u52a0\u5165 Disqus \u7559\u8a00\u5340\u7684\u65b9\u6cd5\u3002",source:"@site/docs/04-docusaurus/03-customization/01-add-disqus-to-docusaurus-doc/index.md",sourceDirName:"04-docusaurus/03-customization/01-add-disqus-to-docusaurus-doc",slug:"/docusaurus/customization/add-disqus-to-docusaurus-doc/",permalink:"/docs/docusaurus/customization/add-disqus-to-docusaurus-doc/",draft:!1,unlisted:!1,editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/docs/04-docusaurus/03-customization/01-add-disqus-to-docusaurus-doc/index.md",tags:[{label:"Docusaurus",permalink:"/docs/tags/docusaurus"}],version:"current",lastUpdatedBy:"Ouch Liu",lastUpdatedAt:16613568e5,frontMatter:{title:"\u5728\u6587\u4ef6\u5eab\u7684\u6587\u7ae0\u4e0b\u65b9\u52a0\u4e0a Disqus \u7559\u8a00\u5340",description:"\u4ecb\u7d39\u5728 Docusaurus \u7684\u6587\u7ae0\u4e2d\u52a0\u5165 Disqus \u7559\u8a00\u5340\u7684\u65b9\u6cd5\u3002",author:"ouch1978",tags:["Docusaurus"],keywords:["Docusaurus","\u7559\u8a00","\u5ba2\u88fd","Disqus","Docs"],last_update:{date:"2022/08/25 GMT+8",author:"Ouch Liu"}},sidebar:"tutorialSidebar",previous:{title:"\u5f37\u5316 SEO - \u70ba\u6240\u6709\u6587\u7ae0\u52a0\u4e0a max-image-preview \u4e2d\u7e7c\u6a19\u8a18",permalink:"/docs/docusaurus/configuration/add-max-image-preview-meta-tag/"},next:{title:"\u5728\u90e8\u843d\u683c\u6587\u7ae0\u4e0b\u65b9\u52a0\u4e0a Disqus \u7559\u8a00\u5340",permalink:"/docs/docusaurus/customization/add-disqus-to-docusaurus-blog-post/"}},c={},a=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5f15\u7528 disqus-react \u5957\u4ef6",id:"\u5f15\u7528-disqus-react-\u5957\u4ef6",level:2},{value:"Swizzle DocItemFooter",id:"swizzle-docitemfooter",level:2},{value:"Docusaurus 2.0.0 \u6b63\u5f0f\u7248\u4e4b\u5f8c\u7684\u4f5c\u6cd5",id:"docusaurus-200-\u6b63\u5f0f\u7248\u4e4b\u5f8c\u7684\u4f5c\u6cd5",level:3},{value:"Docusaurus 2.0.0 Beta \u7248\u4e4b\u524d\u7684\u4f5c\u6cd5",id:"docusaurus-200-beta-\u7248\u4e4b\u524d\u7684\u4f5c\u6cd5",level:3},{value:"\u5f8c\u8a18",id:"\u5f8c\u8a18",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,t.jsx)(s.p,{children:"\u4e4b\u524d\u5728\u4f7f\u7528 Jekyll \u5beb\u90e8\u843d\u683c\u7684\u6642\u5019\uff0c\u6bcf\u7bc7\u6587\u7ae0\u7684\u4e0b\u65b9\u90fd\u6709\u639b\u4e0a Disqus \u7559\u8a00\u5340\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u4e0d\u904e\u76ee\u524d Docusaurus \u9084\u6c92\u5167\u5efa\u76f8\u95dc\u7684\u529f\u80fd\uff0c\u53ea\u80fd\u624b\u52d5\u5ba2\u88fd\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u9019\u7bc7\u5c31\u4f86\u5206\u4eab\u4e00\u4e0b\u600e\u9ebc\u5728\u6587\u7ae0\u4e0b\u65b9\u52a0\u639b Disqus \u7559\u8a00\u5340\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u5f15\u7528-disqus-react-\u5957\u4ef6",children:"\u5f15\u7528 disqus-react \u5957\u4ef6"}),"\n",(0,t.jsx)(s.p,{children:"\u5728 Console \u4e2d\u8f38\u5165\u4e0b\u5217\u6307\u4ee4\u4ee5\u5b89\u88dd disqus-react \u5957\u4ef6\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-powershell",children:"yarn add disqus-react\n"})}),"\n",(0,t.jsx)(s.h2,{id:"swizzle-docitemfooter",children:"Swizzle DocItemFooter"}),"\n",(0,t.jsx)(s.p,{children:"\u63a5\u4e0b\u4f86\u6211\u5011\u5c31\u8981\u4f86\u5ba2\u88fd\u5316 Docusaurus \u4f86\u9054\u5230\u6211\u5011\u7684\u76ee\u7684\u4e86\u3002"}),"\n",(0,t.jsx)(s.admonition,{title:"\u8a3b\u8a18",type:"note",children:(0,t.jsx)(s.p,{children:"\u56e0\u70ba\u6211\u5df2\u7d93\u6709 Disqus \u5e33\u865f\u4e86\uff0c\u9019\u908a\u5c31\u4e0d\u518d\u91dd\u5c0d\u8a3b\u518a Disqus \u5e33\u865f\u591a\u4f5c\u8aaa\u660e\u3002"})}),"\n",(0,t.jsx)(s.p,{children:"\u4e4b\u524d\u6211\u672c\u4f86\u662f\u900f\u904e\u6539\u5beb DocItem \u9019\u500b\u7269\u4ef6\u4f86\u5728\u6587\u7ae0\u4e0b\u65b9\u52a0\u5165 Disqus \u7684\uff0c\u4e0d\u904e\u5f8c\u4f86\u767c\u73fe\u539f\u4f86\u53ea\u8981\u6539\u5beb DocItemFooter \u5c31\u884c\u4e86\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u800c\u4e14\uff0c\u6539\u5beb DocItemFooter \u7684\u8a71\uff0c\u53ea\u9700\u8981\u4f7f\u7528 Wrapping \u7684\u65b9\u6cd5\u5c31\u597d\uff0c\u5c0d\u4e4b\u5f8c Docusaurus \u5347\u7248\u7684\u5f71\u97ff\u6703\u76f8\u5c0d\u7684\u5c0f\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u6240\u4ee5\u6211\u5011\u63a5\u4e0b\u4f86\u5c31\u8981\u900f\u904e\u4e0b\u9762\u7684\u6307\u4ee4\u628a DocItemFooter \u7684\u539f\u59cb\u78bc\u62bd\u53d6\u51fa\u4f86\uff1a"}),"\n",(0,t.jsx)(s.h3,{id:"docusaurus-200-\u6b63\u5f0f\u7248\u4e4b\u5f8c\u7684\u4f5c\u6cd5",children:"Docusaurus 2.0.0 \u6b63\u5f0f\u7248\u4e4b\u5f8c\u7684\u4f5c\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-powershell",children:"yarn run swizzle @docusaurus/theme-classic DocItem/Footer --wrap --typescript\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u62bd\u53d6\u51fa\u539f\u59cb\u78bc\u4e4b\u5f8c\uff0c\u9032\u884c\u4e0b\u5217\u7684\u8abf\u6574\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",metastring:'title="src/theme/DocItem/Footer/index.tsx"',children:'import React from "react";\nimport Footer from "@theme-original/DocItem/Footer";\nimport type FooterType from "@theme/DocItem/Footer";\nimport type { WrapperProps } from "@docusaurus/types";\n\n{\n  /* highlight-start */\n}\nimport { DiscussionEmbed } from "disqus-react";\nimport { useDoc } from "@docusaurus/theme-common/internal";\n{\n  /* highlight-end */\n}\n\ntype Props = WrapperProps<typeof FooterType>;\n\nexport default function FooterWrapper(props: Props): JSX.Element {\n  {\n    /* highlight-start */\n  }\n  const { metadata, frontMatter, assets } = useDoc();\n  const { no_comments } = frontMatter;\n  const { title, slug } = metadata;\n  {\n    /* highlight-end */\n  }\n  return (\n    <>\n      <Footer {...props} />\n      {/* highlight-start */}\n      {!no_comments && (\n        <DiscussionEmbed\n          shortname="ouch1978"\n          config={{\n            identifier: slug,\n            title: title,\n            language: "zh-TW",\n          }}\n        />\n      )}\n      {/* highlight-end */}\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"docusaurus-200-beta-\u7248\u4e4b\u524d\u7684\u4f5c\u6cd5",children:"Docusaurus 2.0.0 Beta \u7248\u4e4b\u524d\u7684\u4f5c\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-powershell",children:"yarn swizzle @docusaurus/theme-classic DocItemFooter -- --wrap\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u62bd\u53d6\u51fa\u539f\u59cb\u78bc\u4e4b\u5f8c\uff0c\u9032\u884c\u4e0b\u5217\u7684\u8abf\u6574\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",metastring:'title="src/theme/DocItemFooter/index.tsx"',children:'import React, { ComponentProps } from "react";\nimport type DocItemFooterType from "@theme/DocItemFooter";\nimport DocItemFooter from "@theme-original/DocItemFooter";\n\n{\n  /* highlight-next-line */\n}\nimport { DiscussionEmbed } from "disqus-react";\n\ntype Props = ComponentProps<typeof DocItemFooterType>;\n\nexport default function DocItemFooterWrapper(props: Props): JSX.Element {\n  const { content: DocContent } = props;\n  const { metadata, frontMatter } = DocContent;\n  {\n    /* highlight-next-line */\n  }\n  const { no_comments } = frontMatter;\n  const { title, slug } = metadata;\n  return (\n    <>\n      <DocItemFooter {...props} />\n      {/* highlight-start */}\n      {!no_comments && (\n        <DiscussionEmbed\n          shortname="ouch1978"\n          config={{\n            identifier: slug,\n            title: title,\n            language: "zh-TW",\n          }}\n        />\n      )}\n      {/* highlight-end */}\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"\u5c31\u9019\u9ebc\u7c21\u55ae\u3002"}),"\n",(0,t.jsx)(s.admonition,{title:"\u5c0f\u63d0\u793a",type:"tip",children:(0,t.jsxs)(s.p,{children:["\u53ef\u4ee5\u900f\u904e\u6587\u7ae0 front matter \u4e2d\u7684 ",(0,t.jsx)(s.code,{children:"no_comments"})," \u9019\u500b\u5c6c\u6027\u4f86\u6c7a\u5b9a\u662f\u5426\u8981\u986f\u793a Disqus \u7559\u8a00\u5340\u3002"]})}),"\n",(0,t.jsx)(s.h2,{id:"\u5f8c\u8a18",children:"\u5f8c\u8a18"}),"\n",(0,t.jsx)(s.p,{children:"\u96d6\u7136 Disqus \u7b97\u662f\u76ee\u524d\u5e02\u9762\u4e0a\u5e02\u4f54\u7387\u4e0d\u4f4e\u7684\u514d\u8cbb\u7559\u8a00\u5de5\u5177\uff0c\u4f46\u662f\u5b83\u5c0d\u7db2\u7ad9\u7684\u512a\u5316\u548c\u9ad4\u9a57\u5b58\u5728\u8457\u4e0d\u5c11\u81f4\u547d\u50b7\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u6709\u8208\u8da3\u7684\u540c\u5b78\u53ef\u4ee5\u53c3\u8003\u4e0b\u5217\u5e7e\u7bc7\u6587\u7ae0\uff1a"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://medium.com/@gaunteweb/im-killing-disqus-comments-on-my-blog-here-s-why-d6054f731341",children:"I\u2019m killing Disqus comments on my blog. Here\u2019s why."})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://supunkavinda.blog/disqus",children:"Disqus, the dark commenting system"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://sitebee.co.uk/blog/disqus-is-slowing-down-your-website-heres-proof/",children:"Disqus is slowing down your website, Here\u2019s Proof"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://medium.com/patrickleenyc/beware-of-disqus-17fb58cfab10",children:"Beware of Disqus!"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.del,{children:"\u8b0e\u4e4b\u97f3\uff1a\u9019\u9ebc\u721b\u4f60\u9084\u7528!?"})}),"\n",(0,t.jsx)(s.p,{children:"\u53e6\u5916\uff0c\u6211\u5728\u639b\u4e0a Disqus \u4e4b\u5f8c\uff0c\u4e5f\u767c\u73fe\u5b83\u5728\u5b58\u53d6\u67d0\u4e9b API \u7684\u6642\u5019\u6703\u62cb\u51fa CORS \u932f\u8aa4\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u5f88\u8981\u6c42\u5b8c\u7f8e\u7684\u540c\u5b78\u4e0d\u59a8\u8003\u616e\u5148\u4f7f\u7528 Github Comments \u4f86\u53d6\u4ee3 Disqus\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u4e0d\u904e\uff0c\u6211\u76ee\u524d\u5c31\u66ab\u4e14\u5148\u4e0d\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u7b49 Docusaurus \u5b98\u65b9\u91cb\u51fa\u5b98\u65b9\u7248\u7684\u7559\u8a00\u5340\u5957\u4ef6\u518d\u4f86\u628a\u5b83\u63db\u6389\u5427\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["\u4e5f\u9080\u8acb\u5927\u5bb6\u4e00\u8d77",(0,t.jsx)(s.a,{href:"https://docusaurus.io/feature-requests/p/comments-in-documents-or-blogs",children:"\u5411\u5b98\u65b9\u6572\u7897"}),"\uff0c\u50ac\u751f\u5b98\u65b9\u7248\u7684\u7559\u8a00\u5340\u5594!!"]})]})}function l(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>u});var t=n(96540);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function u(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);