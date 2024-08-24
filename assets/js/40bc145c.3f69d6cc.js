"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[6249],{66860:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var l=i(74848),r=i(28453);const c={title:"\u5ef6\u9577 MSDTC \u5206\u6563\u5f0f\u4ea4\u6613\u9023\u7dda\u5feb\u53d6\u7684\u6642\u9593\uff0c\u63d0\u5347\u7cfb\u7d71\u6548\u80fd",description:"\u4e4b\u524d\u6709\u540c\u4e8b\u8dd1\u4f86\u554f\u6211\uff0c\u70ba\u4ec0\u9ebc\u6211\u5011\u7684 ASP.NET WebAPI \u9592\u7f6e\u4e00\u6bb5\u6642\u9593\u4e4b\u5f8c\uff0c\u88ab\u547c\u53eb\u7684\u7b2c\u4e00\u500b API Call \u90fd\u6703\u56e0\u70ba\u8d85\u6642\u800c\u5931\u6557? \u7576\u4e0b\u6211\u4e00\u958b\u59cb\u5f88\u76f4\u89ba\u7684\u8a8d\u70ba\uff0c\u61c9\u8a72\u662f\u7cfb\u7d71\u6c92\u6709\u4f5c\u597d\u9810\u8f09(Preload)\u7684\u52d5\u4f5c\uff0c\u5c0e\u81f4 Application Pool \u88ab\u56de\u6536\u4e4b\u5f8c\u91cd\u555f\u7684\u904e\u7a0b\u82b1\u8cbb\u592a\u591a\u6642\u9593\u3002 \u4f46\u662f\u4eba\u751f\u5f80\u5f80\u4e0d\u662f\u9019\u9ebc\u7c21\u55ae\uff0c\u5728\u6211\u5011\u5c0d\u7cfb\u7d71\u52a0\u4e0a\u9810\u8f09\u76f8\u95dc\u8a2d\u5b9a\u4e4b\u5f8c\uff0c\u9694\u4e00\u6bb5\u6642\u9593\u7684\u7b2c\u4e00\u500b API \u547c\u53eb\u90fd\u9084\u662f\u6703\u8d85\u6642\u3002 \u7d93\u904e\u4e00\u756a\u62bd\u7d72\u525d\u7e6d\u4e4b\u5f8c\uff0c\u624d\u767c\u73fe\u539f\u4f86\u771f\u5147\u662f MSDTC\u2026",authors:"ouch1978",tags:["Programming","MSDTC","SQL Server"],keywords:["MSDTC","\u6162","\u91cd\u5efa","\u6548\u80fd","CmMaxIdlePings"]},s=void 0,d={permalink:"/blog/2022/09/24/prevent-msdtc-connection-being-recycled",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-09-24-prevent-msdtc-connection-being-recycled/index.md",source:"@site/blog/2022-09-24-prevent-msdtc-connection-being-recycled/index.md",title:"\u5ef6\u9577 MSDTC \u5206\u6563\u5f0f\u4ea4\u6613\u9023\u7dda\u5feb\u53d6\u7684\u6642\u9593\uff0c\u63d0\u5347\u7cfb\u7d71\u6548\u80fd",description:"\u4e4b\u524d\u6709\u540c\u4e8b\u8dd1\u4f86\u554f\u6211\uff0c\u70ba\u4ec0\u9ebc\u6211\u5011\u7684 ASP.NET WebAPI \u9592\u7f6e\u4e00\u6bb5\u6642\u9593\u4e4b\u5f8c\uff0c\u88ab\u547c\u53eb\u7684\u7b2c\u4e00\u500b API Call \u90fd\u6703\u56e0\u70ba\u8d85\u6642\u800c\u5931\u6557? \u7576\u4e0b\u6211\u4e00\u958b\u59cb\u5f88\u76f4\u89ba\u7684\u8a8d\u70ba\uff0c\u61c9\u8a72\u662f\u7cfb\u7d71\u6c92\u6709\u4f5c\u597d\u9810\u8f09(Preload)\u7684\u52d5\u4f5c\uff0c\u5c0e\u81f4 Application Pool \u88ab\u56de\u6536\u4e4b\u5f8c\u91cd\u555f\u7684\u904e\u7a0b\u82b1\u8cbb\u592a\u591a\u6642\u9593\u3002 \u4f46\u662f\u4eba\u751f\u5f80\u5f80\u4e0d\u662f\u9019\u9ebc\u7c21\u55ae\uff0c\u5728\u6211\u5011\u5c0d\u7cfb\u7d71\u52a0\u4e0a\u9810\u8f09\u76f8\u95dc\u8a2d\u5b9a\u4e4b\u5f8c\uff0c\u9694\u4e00\u6bb5\u6642\u9593\u7684\u7b2c\u4e00\u500b API \u547c\u53eb\u90fd\u9084\u662f\u6703\u8d85\u6642\u3002 \u7d93\u904e\u4e00\u756a\u62bd\u7d72\u525d\u7e6d\u4e4b\u5f8c\uff0c\u624d\u767c\u73fe\u539f\u4f86\u771f\u5147\u662f MSDTC\u2026",date:"2022-09-24T00:00:00.000Z",tags:[{inline:!0,label:"Programming",permalink:"/blog/tags/programming"},{inline:!0,label:"MSDTC",permalink:"/blog/tags/msdtc"},{inline:!0,label:"SQL Server",permalink:"/blog/tags/sql-server"}],readingTime:7.6,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978",page:null}],frontMatter:{title:"\u5ef6\u9577 MSDTC \u5206\u6563\u5f0f\u4ea4\u6613\u9023\u7dda\u5feb\u53d6\u7684\u6642\u9593\uff0c\u63d0\u5347\u7cfb\u7d71\u6548\u80fd",description:"\u4e4b\u524d\u6709\u540c\u4e8b\u8dd1\u4f86\u554f\u6211\uff0c\u70ba\u4ec0\u9ebc\u6211\u5011\u7684 ASP.NET WebAPI \u9592\u7f6e\u4e00\u6bb5\u6642\u9593\u4e4b\u5f8c\uff0c\u88ab\u547c\u53eb\u7684\u7b2c\u4e00\u500b API Call \u90fd\u6703\u56e0\u70ba\u8d85\u6642\u800c\u5931\u6557? \u7576\u4e0b\u6211\u4e00\u958b\u59cb\u5f88\u76f4\u89ba\u7684\u8a8d\u70ba\uff0c\u61c9\u8a72\u662f\u7cfb\u7d71\u6c92\u6709\u4f5c\u597d\u9810\u8f09(Preload)\u7684\u52d5\u4f5c\uff0c\u5c0e\u81f4 Application Pool \u88ab\u56de\u6536\u4e4b\u5f8c\u91cd\u555f\u7684\u904e\u7a0b\u82b1\u8cbb\u592a\u591a\u6642\u9593\u3002 \u4f46\u662f\u4eba\u751f\u5f80\u5f80\u4e0d\u662f\u9019\u9ebc\u7c21\u55ae\uff0c\u5728\u6211\u5011\u5c0d\u7cfb\u7d71\u52a0\u4e0a\u9810\u8f09\u76f8\u95dc\u8a2d\u5b9a\u4e4b\u5f8c\uff0c\u9694\u4e00\u6bb5\u6642\u9593\u7684\u7b2c\u4e00\u500b API \u547c\u53eb\u90fd\u9084\u662f\u6703\u8d85\u6642\u3002 \u7d93\u904e\u4e00\u756a\u62bd\u7d72\u525d\u7e6d\u4e4b\u5f8c\uff0c\u624d\u767c\u73fe\u539f\u4f86\u771f\u5147\u662f MSDTC\u2026",authors:"ouch1978",tags:["Programming","MSDTC","SQL Server"],keywords:["MSDTC","\u6162","\u91cd\u5efa","\u6548\u80fd","CmMaxIdlePings"]},unlisted:!1,prevItem:{title:"\u4e00\u5f35\u5716\u770b\u61c2\u540c\u6b65\u3001\u975e\u540c\u6b65\u8207\u591a\u57f7\u884c\u7dd2\u7684\u5dee\u5225",permalink:"/blog/2022/09/25/understand-sync-async-and-multi-thread-with-one-pic"},nextItem:{title:"\u4e00\u5f35\u5716\u770b\u61c2\u5beb\u7a0b\u5f0f\u6642\u5e38\u898b\u7684\u5e7e\u7a2e\u9396",permalink:"/blog/2022/09/21/common-locks-in-programming-world"}},t={authorsImageUrls:[void 0]},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u554f\u984c\u91cd\u73fe\u8207\u9a57\u8b49",id:"\u554f\u984c\u91cd\u73fe\u8207\u9a57\u8b49",level:2},{value:"\u9b54\u9b3c\u85cf\u5728\u7d30\u7bc0\u88e1",id:"\u9b54\u9b3c\u85cf\u5728\u7d30\u7bc0\u88e1",level:2},{value:"\u95dc\u65bc\u90a3\u795e\u79d8\u7684\u5341\u5206\u9418\u5462?",id:"\u95dc\u65bc\u90a3\u795e\u79d8\u7684\u5341\u5206\u9418\u5462",level:3},{value:"\u6240\u4ee5\u6211\u8aaa\uff0c\u90a3\u500b\u89e3\u6cd5\u662f\u4ec0\u9ebc?",id:"\u6240\u4ee5\u6211\u8aaa\u90a3\u500b\u89e3\u6cd5\u662f\u4ec0\u9ebc",level:2},{value:"\u95dc\u65bc\u90a3\u50b3\u8aaa\u4e2d\u7684 KB \u5099\u4efd",id:"\u95dc\u65bc\u90a3\u50b3\u8aaa\u4e2d\u7684-kb-\u5099\u4efd",level:3},{value:"\u5f8c\u8a18",id:"\u5f8c\u8a18",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,l.jsx)(n.p,{children:"\u4e4b\u524d\u6709\u540c\u4e8b\u8dd1\u4f86\u554f\u6211\uff0c\u70ba\u4ec0\u9ebc\u6211\u5011\u7684 ASP.NET WebAPI \u9592\u7f6e\u4e00\u6bb5\u6642\u9593\u4e4b\u5f8c\uff0c\u88ab\u547c\u53eb\u7684\u7b2c\u4e00\u500b API \u547c\u53eb\u90fd\u6703\u56e0\u70ba\u8d85\u6642\u800c\u5931\u6557?"}),"\n",(0,l.jsx)(n.p,{children:"(\u9019\u88e1\u6307\u7684\u8d85\u6642\u662f\u547c\u53eb\u7aef\u8a2d\u5b9a\u4e86\u5169\u79d2\u6c92\u6536\u5230\u56de\u61c9\u5c31\u6703\u76f4\u63a5\u7576\u4f5c\u8d85\u6642\u8655\u7406)"}),"\n",(0,l.jsx)(n.p,{children:"\u800c\u4e14\u5f88\u6709\u8da3\u7684\u662f\uff0c\u7576\u628a Load Balancer \u5f8c\u9762\u7684\u4f3a\u670d\u5668\u79fb\u5230\u53ea\u5269\u4e00\u53f0\u7684\u6642\u5019\uff0c\u9019\u500b\u554f\u984c\u5c31\u4e0d\u6703\u767c\u751f\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u65e6\u639b\u4e0a\u5169\u53f0\u4ee5\u4e0a\u7684\u6a5f\u5668\uff0c\u6bd4\u8f03\u4e0d\u90a3\u9ebc\u5fd9\u7684\u90a3\u53f0\u5c31\u5f88\u5bb9\u6613\u91cd\u73fe\u9019\u500b\u554f\u984c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7576\u4e0b\u6211\u4e00\u958b\u59cb\u5f88\u76f4\u89ba\u7684\u8a8d\u70ba\uff0c\u61c9\u8a72\u662f\u7cfb\u7d71\u6c92\u6709\u4f5c\u597d\u9810\u8f09(Preload)\u7684\u52d5\u4f5c\uff0c\u5c0e\u81f4 Application Pool \u88ab\u56de\u6536\u4e4b\u5f8c\u91cd\u555f\u7684\u904e\u7a0b\u82b1\u8cbb\u592a\u591a\u6642\u9593\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4f46\u662f\u4eba\u751f\u5f80\u5f80\u4e0d\u662f\u9019\u9ebc\u7c21\u55ae\uff0c\u5728\u6211\u5011\u5c0d\u7cfb\u7d71\u52a0\u4e0a\u9810\u8f09\u76f8\u95dc\u8a2d\u5b9a\u4e4b\u5f8c\uff0c\u9694\u4e00\u6bb5\u6642\u9593\u7684\u7b2c\u4e00\u500b API \u547c\u53eb\u90fd\u9084\u662f\u6703\u8d85\u6642\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7d93\u904e\u4e00\u756a\u62bd\u7d72\u525d\u7e6d\u4e4b\u5f8c\uff0c\u624d\u767c\u73fe\u539f\u4f86\u771f\u5147\u662f MSDTC\u2026"}),"\n",(0,l.jsx)(n.h2,{id:"\u554f\u984c\u91cd\u73fe\u8207\u9a57\u8b49",children:"\u554f\u984c\u91cd\u73fe\u8207\u9a57\u8b49"}),"\n",(0,l.jsx)(n.p,{children:"\u7576\u521d\u9084\u6709\u4e00\u500b\u5f88\u6709\u8da3\u7684\u73fe\u8c61\uff0c\u53ea\u8981\u7cfb\u7d71\u9592\u7f6e\u5927\u7d04\u5341\u5206\u9418\u5de6\u53f3\uff0c\u9019\u500b\u554f\u984c\u5c31\u6703\u91cd\u73fe\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6240\u4ee5\u770b\u8d77\u4f86\u66f4\u4e0d\u50cf\u662f\u56e0\u70ba\u6c92\u505a\u9810\u8f09\u9020\u6210\u7684\u554f\u984c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6240\u4ee5\u6211\u7528 WPF \u5beb\u4e86\u4e00\u500b\u5c0f\u6e2c\u8a66\u7a0b\u5f0f(\u9019\u6a23\u5c31\u53ef\u4ee5\u8b49\u660e\u4e0d\u662f\u56e0\u70ba\u6c92\u6709\u9810\u8f09\u9020\u6210\u7684)\uff0c\u60c5\u5883\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u4e00\u500b Transaction Scope \u88e1\u9762\u4f7f\u7528\u540c\u4e00\u500b SQL Server Instance \u88e1\u4e09\u500b\u4e0d\u540c\u7684\u8cc7\u6599\u5eab\uff0c\u7528\u4e0d\u540c\u9806\u5e8f\u7684\u6392\u5217\u7d44\u5408\u53bb\u9023\u5b83\u5011\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u9023\u4e0a\u8cc7\u6599\u5eab\u4e4b\u5f8c\u53ea\u57f7\u884c\u7c21\u55ae\u7684 ",(0,l.jsx)(n.code,{children:"SELECT GETDATE()"})," \u6307\u4ee4\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u89c0\u5bdf\u548c\u6bcf\u500b\u8cc7\u6599\u5eab\u9032\u884c\u9023\u7dda\u6240\u82b1\u8cbb\u7684\u6642\u9593\u4ee5\u53ca\u57f7\u884c\u547d\u4ee4\u6240\u82b1\u8cbb\u7684\u6642\u9593\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u7a0b\u5f0f\u958b\u8457\u653e\u5341\u5206\u9418\u4ee5\u4e0a\uff0c\u518d\u6e2c\u4e00\u8f2a\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u6211\u7684\u6e2c\u8a66\u7d50\u679c",src:i(38517).A+"",title:"\u6211\u7684\u6e2c\u8a66\u7d50\u679c",width:"1255",height:"802"})}),"\n",(0,l.jsx)(n.p,{children:"\u800c\u6211\u5f97\u5230\u7684\u7d50\u8ad6\u662f\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"\u4e0d\u7ba1\u662f\u54ea\u7a2e\u6392\u5217\u7d44\u5408\uff0c\u5728\u9023\u5230\u7b2c\u4e00\u9846\u8cc7\u6599\u5eab\u7684\u6642\u5019\u90fd\u5f88\u5feb\uff0c\u53ea\u6703\u82b1\u8cbb\u5341\u5e7e\u6beb\u79d2\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4f46\u662f\u7576\u5728\u5efa\u7acb\u548c\u7b2c\u4e8c\u9846\u8cc7\u6599\u5eab\u7684\u9023\u7dda\u6642\u5c31\u6703\u82b1\u8cbb\u5f88\u9577\u7684\u6642\u9593\uff0c\u751a\u81f3\u53ef\u80fd\u9577\u5230\u8d85\u904e\u5169\u5343\u6beb\u79d2\u4ee5\u4e0a\uff0c\u5728\u9023\u7b2c\u4e09\u9846\u7684\u6642\u5019\u53c8\u5f88\u5feb\uff0c\u901a\u5e38\u4e5f\u5728\u5341\u6beb\u79d2\u4e4b\u5167\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7b2c\u4e00\u8f2a\u57f7\u884c\u5b8c\u7562\u4e4b\u5f8c\u5982\u679c\u99ac\u4e0a\u57f7\u884c\u7b2c\u4e8c\u8f2a\u7684\u8a71\uff0c\u5728 Transaction Scope \u88e1\u4f7f\u7528\u9019\u4e09\u9846\u8cc7\u6599\u5eab\u7684\u4efb\u610f\u6392\u5217\u7d44\u5408\uff0c\u90fd\u9084\u662f\u53ef\u4ee5\u5f88\u5feb\u7684\u8dd1\u5b8c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4f46\u662f\u4e00\u65e6\u653e\u4e86\u8d85\u904e\u5341\u5206\u9418\uff0c\u5c31\u6703\u518d\u6162\u4e00\u6b21\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6709\u8208\u8da3\u7684\u8a71\u4e5f\u4e0d\u59a8\u5728\u81ea\u5df1\u7684\u96fb\u8166\u8a66\u770b\u770b\u662f\u4e0d\u662f\u548c\u6211\u770b\u5230\u7684\u7d50\u679c\u662f\u4e00\u81f4\u7684\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u9b54\u9b3c\u85cf\u5728\u7d30\u7bc0\u88e1",children:"\u9b54\u9b3c\u85cf\u5728\u7d30\u7bc0\u88e1"}),"\n",(0,l.jsx)(n.p,{children:"\u7d93\u904e\u4e00\u756a\u9a57\u8b49\u4e4b\u5f8c\uff0c\u78ba\u8a8d\u662f\u56e0\u70ba\u5728\u9023\u5230\u7b2c\u4e8c\u9846\u8cc7\u6599\u5eab\u6642\uff0c\u7cfb\u7d71\u6703\u591a\u4e00\u500b\u5224\u65b7\u662f\u5426\u8981\u5c07\u4ea4\u6613\u63d0\u5347\u70ba\u5206\u6563\u5f0f\u4ea4\u6613\u7684\u52d5\u4f5c\u3002"}),"\n",(0,l.jsx)(n.admonition,{title:"\u8a3b\u8a18",type:"note",children:(0,l.jsx)(n.p,{children:"\u5728 SQL Server 2008 \u4e4b\u524d\u7684\u7248\u672c\uff0c\u53ea\u8981\u662f Transaction Scope \u5305\u542b\u4e00\u689d\u4ee5\u4e0a\u7684\u8cc7\u6599\u5eab\u9023\u7dda\uff0c\u7cfb\u7d71\u5c31\u6703\u628a\u5b83\u5224\u5b9a\u70ba\u5206\u6563\u5f0f\u4ea4\u6613\u3002\n\u4f46\u662f\u5f9e SQL Server 2008 \u4e4b\u5f8c\uff0c\u8981\u9023\u5230\u4e00\u500b\u4ee5\u4e0a\u7684\u8cc7\u6599\u5eab\u624d\u6703\u88ab\u5224\u5b9a\u70ba\u5206\u6563\u5f0f\u4ea4\u6613\u3002"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u662f\u5206\u6563\u5f0f\u4ea4\u6613\uff0cMSDTC Client \u5c31\u6703\u53bb\u78ba\u8a8d\u662f\u5426\u6709\u73fe\u6210\u7684\u9023\u7dda\u53ef\u7528\uff0c\u5982\u679c\u6c92\u6709\uff0c\u5c31\u6703\u91cd\u65b0\u5efa\u7acb\u9023\u7dda\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5c31\u662f\u9019\u500b\u807d\u8d77\u4f86\u5f88\u7c21\u55ae\u7684\u5c0f\u52d5\u4f5c\uff0c\u9020\u6210\u5efa\u7acb\u9023\u7dda\u7684\u6642\u9593\u6bd4\u5e73\u5e38\u591a\u4e86 100 \u500d\u4ee5\u4e0a\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u95dc\u65bc\u90a3\u795e\u79d8\u7684\u5341\u5206\u9418\u5462",children:"\u95dc\u65bc\u90a3\u795e\u79d8\u7684\u5341\u5206\u9418\u5462?"}),"\n",(0,l.jsx)(n.p,{children:"\u70ba\u4e86\u627e\u51fa\u5230\u5e95\u70ba\u4ec0\u9ebc\u662f\u5341\u5206\u9418\u9019\u4ef6\u4e8b\uff0c\u9084\u771f\u7684\u82b1\u4e86\u4e0d\u5c11\u6642\u9593\u548c\u5fc3\u529b\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u9664\u4e86\u7528\u5404\u7a2e\u76f8\u95dc\u7684\u95dc\u9375\u5b57\u554f Google \u5927\u795e\u4e4b\u5916\uff0c\u4e5f\u8acb\u6559\u4e86\u53f0\u7063\u5fae\u8edf\u7684\u6280\u8853\u5ba2\u670d\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u9304\u5c01\u5305\u3001DTC Ping \u9019\u4e9b\u62db\u5f0f\u4e5f\u90fd\u642c\u51fa\u4f86\u4e86\uff0c\u53ef\u662f\u9084\u662f\u770b\u4e0d\u51fa\u500b\u6240\u4ee5\u7136\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5f8c\u4f86\u56e0\u70ba\u7576\u6642\u6709\u4e00\u500b\u61c9\u6025\u63aa\u65bd\u53ef\u4ee5\u907f\u514d\u9019\u500b\u554f\u984c\uff0c\u6211\u5c31\u6c92\u628a\u5b83\u653e\u5fc3\u4e0a\u4e86\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u76f4\u5230\u67d0\u4e00\u5929\u6211\u5fc3\u8840\u4f86\u6f6e\uff0c\u60f3\u8aaa\u518d\u67e5\u770b\u770b\u6709\u6c92\u6709\u76f8\u95dc\u7684\u8cc7\u6599\uff0c\u7e3d\u7b97\u8b93\u6211\u627e\u5230\u4e00\u7bc7\u5fae\u8edf\u7684 KB \u5099\u4efd\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u88e1\u9762\u63d0\u5230\u4e00\u500b\u95dc\u9375\uff1a"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4ea4\u6613\u7ba1\u7406\u5668\u9810\u8a2d\u6bcf",(0,l.jsx)(n.code,{children:"\u516d\u79d2"}),"\u6703\u6aa2\u67e5\u4e00\u6b21\u9023\u7dda\u72c0\u614b\uff0c\u5982\u679c\u9023\u7e8c",(0,l.jsx)(n.code,{children:"\u4e00\u767e\u6b21"}),"\u5f97\u5230\u7684\u72c0\u614b\u90fd\u662f\u9592\u7f6e\u7684\uff0c\u5c31\u6703\u5c07\u9023\u7dda\u95dc\u9589\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u9019\u4e0d\u5c31\u662f\u90a3\u795e\u79d8\u7684\u5341\u5206\u9418\u55ce!?"}),"\n",(0,l.jsxs)(n.p,{children:["\u90a3\u4efd KB \u88e1\u9762\u4e5f\u63d0\u5230",(0,l.jsx)(n.code,{children:"\u516d\u79d2"}),"\u548c",(0,l.jsx)(n.code,{children:"\u4e00\u767e\u6b21"}),"\u9019\u5169\u500b\u9810\u8a2d\u503c\u7684\u6539\u6cd5\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6240\u4ee5\u6211\u8aaa\u90a3\u500b\u89e3\u6cd5\u662f\u4ec0\u9ebc",children:"\u6240\u4ee5\u6211\u8aaa\uff0c\u90a3\u500b\u89e3\u6cd5\u662f\u4ec0\u9ebc?"}),"\n",(0,l.jsx)(n.p,{children:"\u53c8\u904e\u4e86\u4e00\u6bb5\u6642\u9593\u4e4b\u5f8c\uff0c\u6536\u5230\u5fae\u8edf\u7684\u6280\u8853\u5ba2\u670d\u7684\u4f86\u4fe1\uff0c\u4fe1\u88e1\u7684\u5efa\u8b70\u548c\u6211\u7576\u521d\u770b\u5230\u7684 KB \u5099\u4efd\u63d0\u5230\u7684\u4fee\u6539\u65b9\u6cd5\u4e00\u6a21\u4e00\u6a23\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u679c\u7136\u539f\u5ee0\u9084\u662f\u539f\u5ee0\u554a!!"}),"\n",(0,l.jsx)(n.p,{children:"\u89e3\u6c7a\u7684\u65b9\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6240\u6709\u7684 Application Server \u4e2d\u90fd\u65b0\u589e\u4e0b\u5217\u767b\u9304\u6a5f\u78bc\uff1a"}),"\n",(0,l.jsxs)(n.p,{children:["\u6a5f\u78bc Key\uff1a ",(0,l.jsx)(n.code,{children:"HKLM\\SOFTWARE\\Microsoft\\MSDTC"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u540d\u7a31\uff1a ",(0,l.jsx)(n.code,{children:"CmMaxIdlePings"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u578b\u5225\uff1a ",(0,l.jsx)(n.code,{children:"REG_DWORD"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u6578\u503c\uff1a ",(0,l.jsx)(n.code,{children:"0xFFFFFFFF"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6240\u6709\u7684 SQL Server \u4e2d\u90fd\u65b0\u589e\u4e0b\u5217\u767b\u9304\u6a5f\u78bc\uff1a"}),"\n",(0,l.jsxs)(n.p,{children:["\u6a5f\u78bc Key\uff1a ",(0,l.jsx)(n.code,{children:"HKLM\\CLUSTER\\Resources\\<MSDTC resource GUID>\\MSDTCPRIVATE\\MSDTC"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u540d\u7a31\uff1a ",(0,l.jsx)(n.code,{children:"CmMaxIdlePings"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u578b\u5225\uff1a ",(0,l.jsx)(n.code,{children:"REG_DWORD"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u6578\u503c\uff1a ",(0,l.jsx)(n.code,{children:"0xFFFFFFFF"})]}),"\n",(0,l.jsx)(n.p,{children:"\u4fee\u6539\u5b8c\u7562\u4e4b\u5f8c\u8a18\u5f97\u8981\u91cd\u65b0\u555f\u52d5 Server\uff0c\u7136\u5f8c\u4e4b\u5f8c\u7684 MSDTC \u9023\u7dda\u4e00\u65e6\u5efa\u7acb\u8d77\u4f86\u5c31\u518d\u4e5f\u4e0d\u6703\u88ab\u95dc\u6389\u4e86\u3002"}),"\n",(0,l.jsx)(n.admonition,{title:"\u8a3b\u8a18",type:"note",children:(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u9019\u908a\u4f7f\u7528\u7684\u6539\u6cd5\u662f\u53bb\u4fee\u6539\u90a3\u500b\u4e00\u767e\u6b21\uff0c\u8b93\u5b83\u4e00\u76f4\u6aa2\u67e5\u4e0b\u53bb\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u4e0d\u5efa\u8b70\u4fee\u6539\u516d\u79d2 (",(0,l.jsx)(n.code,{children:"CmPingFreqSecs"}),") \u7684\u503c\uff0c\u56e0\u70ba\u6839\u64da\u5fae\u8edf\u7684\u8aaa\u6cd5\uff0c\u66f4\u6539\u5b83\u53ef\u80fd\u6703\u9020\u6210 DTC \u4e0d\u7a69\u5b9a\u3002"]}),"\n"]})}),"\n",(0,l.jsx)(n.h3,{id:"\u95dc\u65bc\u90a3\u50b3\u8aaa\u4e2d\u7684-kb-\u5099\u4efd",children:"\u95dc\u65bc\u90a3\u50b3\u8aaa\u4e2d\u7684 KB \u5099\u4efd"}),"\n",(0,l.jsxs)(n.p,{children:["\u90a3\u7bc7\u7684\u7de8\u865f\u662f ",(0,l.jsx)(n.code,{children:"KB197810"}),"\uff0c\u4e0d\u904e\u73fe\u5728\u61c9\u8a72\u5df2\u7d93\u5c4d\u9aa8\u7121\u5b58\u4e86\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0d\u904e\u9084\u597d",(0,l.jsx)(n.a,{href:"https://www.betaarchive.com/wiki/index.php/Microsoft_KB_Archive/197810",title:"Microsoft KB Archive/197810",children:"\u9019\u908a"}),"\u6709\u5b83\u7684\u5099\u4efd\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5f8c\u8a18",children:"\u5f8c\u8a18"}),"\n",(0,l.jsx)(n.p,{children:"\u4eba\u5bb6\u7576\u521d\u662f\u70ba\u4e86\u7e2e\u77ed\u9023\u7dda\u88ab\u4f54\u7528\u7684\u6642\u9593\u4ee5\u53ca\u964d\u4f4e\u91cd\u8907\u6aa2\u67e5\u9023\u7dda\u72c0\u614b\u6240\u6d88\u8017\u7684\u8cc7\u6e90\uff0c\u624d\u628a\u6642\u9593\u5f9e\u5341\u5c0f\u6642\u7e2e\u77ed\u5230\u5341\u5206\u9418\u3002"}),"\n",(0,l.jsx)(n.p,{children:"KB \u7684\u5167\u5bb9\u4e5f\u662f\u6559\u6211\u5011\u600e\u9ebc\u628a\u6642\u9593\u7e2e\u5230\u66f4\u77ed\uff0c\u6c92\u60f3\u5230\u6211\u5011\u537b\u60f3\u628a\u5b83\u62c9\u9577\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u9084\u662f\u65e9\u9ede\u64fa\u812b\u7528 Transaction Scope \u9054\u5230\u5206\u6563\u5f0f\u4ea4\u6613\u7684\u76ee\u7684\uff0c\u624d\u4e0d\u7528\u8001\u662f\u5728\u901a\u9748\u6216\u662f\u6539\u9019\u4e9b\u767b\u9304\u6a5f\u78bc\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u53e6\u5916\uff0c\u5341\u4e03\u5e74\u524d\u7684 KB\uff0c\u771f\u7684\u662f\u6642\u4ee3\u7684\u773c\u6dda\u554a~~"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},38517:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/transaction-scope-test-result-0254943eb68a2519f6fa85703b44185a.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var l=i(96540);const r={},c=l.createContext(r);function s(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);