"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[4754],{5921:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=n(85893),s=n(11151);const r={title:"\u900f\u904e Visual Studio 2017 \u8207 Appium \u6e2c\u8a66\u5b89\u5353\u624b\u6a5f\u4e0a\u7684\u884c\u52d5\u7248\u7db2\u9801",description:"\u5728\u958b\u767c\u884c\u52d5\u7248\u7db2\u7ad9\u7684\u904e\u7a0b\u4e2d\uff0c\u6e2c\u8a66\u4ecd\u7136\u662f\u5f88\u91cd\u8981\u7684\u4e00\u74b0\uff0c\u4f46\u662f\u57fa\u65bc\u9700\u8981\u6e2c\u8a66\u7684\u88dd\u7f6e\u7a2e\u985e\u7e41\u591a\uff0c\u6240\u4ee5\u5f80\u5f80\u8b93\u4eba\u53c8\u611b\u53c8\u6015\u53d7\u50b7\u5bb3\u3002 \u96d6\u7136\u8aaa\uff0c\u53ef\u4ee5\u900f\u904e Selemium \u642d\u914d Chrome \u9032\u884c\u5c0d\u4e0d\u540c\u88dd\u7f6e\u7684\u81ea\u52d5\u5316\u6e2c\u8a66\uff0c\u4f46\u662f\uff0c\u652f\u63f4\u7684\u88dd\u7f6e\u7a2e\u985e\u4ecd\u7136\u6709\u9650\uff0c\u800c\u4e14\u76f4\u63a5\u900f\u904e Chrome \u9032\u884c\u6a21\u64ec\uff0c\u771f\u5be6\u5ea6\u4e5f\u548c\u771f\u7684\u5728\u624b\u6a5f\u4e0a\u9032\u884c\u6e2c\u8a66\u6709\u4e0d\u5c0f\u7684\u5dee\u8ddd\u3002 \u53e6\u5916\uff0c\u4ee5\u4f01\u696d\u7684\u89e3\u6c7a\u65b9\u6848\u9019\u500b\u89d2\u5ea6\u4f86\u770b\uff0c\u5982\u679c\u80fd\u900f\u904e\u4e00\u500b\u6a19\u6e96\u5316\u7684\u6846\u67b6\uff0c\u4f7f\u7528\u5927\u90e8\u4efd\u958b\u767c\u8005\u539f\u672c\u5c31\u719f\u6089\u7684\u5de5\u5177\u53ca\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u5c31\u53ef\u4ee5\u540c\u6642\u6eff\u8db3\u884c\u52d5\u88dd\u7f6e\u7db2\u7ad9\u8207\u539f\u751f App \u7684\u6e2c\u8a66\uff0c\u90a3\u5c31\u66f4\u6709\u50f9\u503c\u4e86\u3002",authors:"ouch1978",tags:["Visual Studio","Automation Testing"],keywords:["Appium","Android","\u7db2\u9801"]},a=void 0,d={permalink:"/blog/2017/04/17/mobile-web-automation-testing-with-vs2017-and-appium",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2017-04-17-mobile-web-automation-testing-with-vs2017-and-appium/index.md",source:"@site/blog/2017-04-17-mobile-web-automation-testing-with-vs2017-and-appium/index.md",title:"\u900f\u904e Visual Studio 2017 \u8207 Appium \u6e2c\u8a66\u5b89\u5353\u624b\u6a5f\u4e0a\u7684\u884c\u52d5\u7248\u7db2\u9801",description:"\u5728\u958b\u767c\u884c\u52d5\u7248\u7db2\u7ad9\u7684\u904e\u7a0b\u4e2d\uff0c\u6e2c\u8a66\u4ecd\u7136\u662f\u5f88\u91cd\u8981\u7684\u4e00\u74b0\uff0c\u4f46\u662f\u57fa\u65bc\u9700\u8981\u6e2c\u8a66\u7684\u88dd\u7f6e\u7a2e\u985e\u7e41\u591a\uff0c\u6240\u4ee5\u5f80\u5f80\u8b93\u4eba\u53c8\u611b\u53c8\u6015\u53d7\u50b7\u5bb3\u3002 \u96d6\u7136\u8aaa\uff0c\u53ef\u4ee5\u900f\u904e Selemium \u642d\u914d Chrome \u9032\u884c\u5c0d\u4e0d\u540c\u88dd\u7f6e\u7684\u81ea\u52d5\u5316\u6e2c\u8a66\uff0c\u4f46\u662f\uff0c\u652f\u63f4\u7684\u88dd\u7f6e\u7a2e\u985e\u4ecd\u7136\u6709\u9650\uff0c\u800c\u4e14\u76f4\u63a5\u900f\u904e Chrome \u9032\u884c\u6a21\u64ec\uff0c\u771f\u5be6\u5ea6\u4e5f\u548c\u771f\u7684\u5728\u624b\u6a5f\u4e0a\u9032\u884c\u6e2c\u8a66\u6709\u4e0d\u5c0f\u7684\u5dee\u8ddd\u3002 \u53e6\u5916\uff0c\u4ee5\u4f01\u696d\u7684\u89e3\u6c7a\u65b9\u6848\u9019\u500b\u89d2\u5ea6\u4f86\u770b\uff0c\u5982\u679c\u80fd\u900f\u904e\u4e00\u500b\u6a19\u6e96\u5316\u7684\u6846\u67b6\uff0c\u4f7f\u7528\u5927\u90e8\u4efd\u958b\u767c\u8005\u539f\u672c\u5c31\u719f\u6089\u7684\u5de5\u5177\u53ca\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u5c31\u53ef\u4ee5\u540c\u6642\u6eff\u8db3\u884c\u52d5\u88dd\u7f6e\u7db2\u7ad9\u8207\u539f\u751f App \u7684\u6e2c\u8a66\uff0c\u90a3\u5c31\u66f4\u6709\u50f9\u503c\u4e86\u3002",date:"2017-04-17T00:00:00.000Z",formattedDate:"2017\u5e744\u670817\u65e5",tags:[{label:"Visual Studio",permalink:"/blog/tags/visual-studio"},{label:"Automation Testing",permalink:"/blog/tags/automation-testing"}],readingTime:8.59,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u900f\u904e Visual Studio 2017 \u8207 Appium \u6e2c\u8a66\u5b89\u5353\u624b\u6a5f\u4e0a\u7684\u884c\u52d5\u7248\u7db2\u9801",description:"\u5728\u958b\u767c\u884c\u52d5\u7248\u7db2\u7ad9\u7684\u904e\u7a0b\u4e2d\uff0c\u6e2c\u8a66\u4ecd\u7136\u662f\u5f88\u91cd\u8981\u7684\u4e00\u74b0\uff0c\u4f46\u662f\u57fa\u65bc\u9700\u8981\u6e2c\u8a66\u7684\u88dd\u7f6e\u7a2e\u985e\u7e41\u591a\uff0c\u6240\u4ee5\u5f80\u5f80\u8b93\u4eba\u53c8\u611b\u53c8\u6015\u53d7\u50b7\u5bb3\u3002 \u96d6\u7136\u8aaa\uff0c\u53ef\u4ee5\u900f\u904e Selemium \u642d\u914d Chrome \u9032\u884c\u5c0d\u4e0d\u540c\u88dd\u7f6e\u7684\u81ea\u52d5\u5316\u6e2c\u8a66\uff0c\u4f46\u662f\uff0c\u652f\u63f4\u7684\u88dd\u7f6e\u7a2e\u985e\u4ecd\u7136\u6709\u9650\uff0c\u800c\u4e14\u76f4\u63a5\u900f\u904e Chrome \u9032\u884c\u6a21\u64ec\uff0c\u771f\u5be6\u5ea6\u4e5f\u548c\u771f\u7684\u5728\u624b\u6a5f\u4e0a\u9032\u884c\u6e2c\u8a66\u6709\u4e0d\u5c0f\u7684\u5dee\u8ddd\u3002 \u53e6\u5916\uff0c\u4ee5\u4f01\u696d\u7684\u89e3\u6c7a\u65b9\u6848\u9019\u500b\u89d2\u5ea6\u4f86\u770b\uff0c\u5982\u679c\u80fd\u900f\u904e\u4e00\u500b\u6a19\u6e96\u5316\u7684\u6846\u67b6\uff0c\u4f7f\u7528\u5927\u90e8\u4efd\u958b\u767c\u8005\u539f\u672c\u5c31\u719f\u6089\u7684\u5de5\u5177\u53ca\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u5c31\u53ef\u4ee5\u540c\u6642\u6eff\u8db3\u884c\u52d5\u88dd\u7f6e\u7db2\u7ad9\u8207\u539f\u751f App \u7684\u6e2c\u8a66\uff0c\u90a3\u5c31\u66f4\u6709\u50f9\u503c\u4e86\u3002",authors:"ouch1978",tags:["Visual Studio","Automation Testing"],keywords:["Appium","Android","\u7db2\u9801"]},unlisted:!1,prevItem:{title:"\u900f\u904e Gorilla Player \u5728\u88dd\u7f6e\u4e0a\u5373\u6642\u9810\u89bd Xamarin Forms \u4ecb\u9762",permalink:"/blog/2017/05/08/design-xamarin-forms-with-gorilla-player"},nextItem:{title:"\u56de\u4f86\u5427!! Creator Update \u958b\u59cb\u6309\u9215\u53f3\u9375\u9078\u55ae\u88e1\u7684\u63a7\u5236\u53f0\u9078\u9805!!",permalink:"/blog/2017/04/07/add-control-panel-back-after-creator-update"}},l={authorsImageUrls:[void 0]},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u74b0\u5883\u6e96\u5099",id:"\u74b0\u5883\u6e96\u5099",level:2},{value:"Android \u6a21\u64ec\u5668\u8a2d\u5b9a",id:"android-\u6a21\u64ec\u5668\u8a2d\u5b9a",level:2},{value:"\u64b0\u5beb\u81ea\u52d5\u5316\u6e2c\u8a66\u7a0b\u5f0f\u78bc",id:"\u64b0\u5beb\u81ea\u52d5\u5316\u6e2c\u8a66\u7a0b\u5f0f\u78bc",level:2},{value:"\u57f7\u884c\u6e2c\u8a66",id:"\u57f7\u884c\u6e2c\u8a66",level:2},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}];function p(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u958b\u767c\u884c\u52d5\u7248\u7db2\u7ad9\u7684\u904e\u7a0b\u4e2d\uff0c\u6e2c\u8a66\u4ecd\u7136\u662f\u5f88\u91cd\u8981\u7684\u4e00\u74b0\uff0c\u4f46\u662f\u57fa\u65bc\u9700\u8981\u6e2c\u8a66\u7684\u88dd\u7f6e\u7a2e\u985e\u7e41\u591a\uff0c\u6240\u4ee5\u5f80\u5f80\u8b93\u4eba\u53c8\u611b\u53c8\u6015\u53d7\u50b7\u5bb3\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u96d6\u7136\u8aaa\uff0c\u53ef\u4ee5\u900f\u904e Selemium \u642d\u914d Chrome \u9032\u884c\u5c0d\u4e0d\u540c\u88dd\u7f6e\u7684\u81ea\u52d5\u5316\u6e2c\u8a66\uff0c\u4f46\u662f\uff0c\u652f\u63f4\u7684\u88dd\u7f6e\u7a2e\u985e\u4ecd\u7136\u6709\u9650\uff0c\u800c\u4e14\u76f4\u63a5\u900f\u904e Chrome \u9032\u884c\u6a21\u64ec\uff0c\u771f\u5be6\u5ea6\u4e5f\u548c\u771f\u7684\u5728\u624b\u6a5f\u4e0a\u9032\u884c\u6e2c\u8a66\u6709\u4e0d\u5c0f\u7684\u5dee\u8ddd\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u53e6\u5916\uff0c\u4ee5\u4f01\u696d\u7684\u89e3\u6c7a\u65b9\u6848\u9019\u500b\u89d2\u5ea6\u4f86\u770b\uff0c\u5982\u679c\u80fd\u900f\u904e\u4e00\u500b\u6a19\u6e96\u5316\u7684\u6846\u67b6\uff0c\u4f7f\u7528\u5927\u90e8\u4efd\u958b\u767c\u8005\u539f\u672c\u5c31\u719f\u6089\u7684\u5de5\u5177\u53ca\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u5c31\u53ef\u4ee5\u540c\u6642\u6eff\u8db3\u884c\u52d5\u88dd\u7f6e\u7db2\u7ad9\u8207\u539f\u751f App \u7684\u6e2c\u8a66\uff0c\u90a3\u5c31\u66f4\u6709\u50f9\u503c\u4e86\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u5728\u548c ",(0,t.jsx)(i.a,{href:"http://blackie1019.github.io/",title:"\u5f37\u8005\u6211\u540c\u4e8b - \u5c0f\u9ed1",children:"\u5f37\u8005\u6211\u540c\u4e8b - \u5c0f\u9ed1"})," \u8a0e\u8ad6\u884c\u52d5\u88dd\u7f6e\u4e0a\u7684\u7db2\u7ad9\u548c\u539f\u751f App \u6e2c\u8a66\u76f8\u95dc\u7684\u89e3\u6c7a\u65b9\u6848\u7684\u6642\u5019\uff0c\u4ed6\u63d0\u5230\u4e86 Appium \u9019\u500b\u6e2c\u8a66\u6846\u67b6\u3002"]}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"\u7c21\u55ae\u4f86\u8aaa\uff0cAppium \u5c31\u662f\u7d66\u884c\u52d5\u88dd\u7f6e\u4f7f\u7528\u7684 Selenium\u3002"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u57fa\u65bc\u4e0a\u8ff0\u5e7e\u500b\u539f\u56e0\uff0c\u6211\u60f3\u8a66\u770b\u770b Appium \u662f\u4e0d\u662f\u771f\u7684\u548c Selenium \u4e4b\u9593\u7684\u5b78\u7fd2\u66f2\u7dda\u662f\u4e0d\u662f\u771f\u7684\u5982\u5176\u5b83\u4eba\u6240\u8aaa\u7684\u90a3\u9ebc\u5e73\u7de9\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u9644\u5e36\u4e00\u63d0\uff0cAppium \u7684\u904b\u4f5c\u67b6\u69cb\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-00",src:n(19993).Z+"",title:"Appium \u7684\u904b\u4f5c\u67b6\u69cb",width:"1280",height:"720"})}),"\n",(0,t.jsx)(i.h2,{id:"\u74b0\u5883\u6e96\u5099",children:"\u74b0\u5883\u6e96\u5099"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u6211\u5011\u52d5\u624b\u958b\u59cb\u5beb\u7a0b\u5f0f\u4e4b\u524d\uff0c\u5f97\u8981\u5148\u78ba\u8a8d\u4e0b\u5217\u9805\u76ee\u90fd\u5df2\u7d93\u5b89\u88dd/\u8a2d\u5b9a\u597d\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"\u5b89\u88dd Visual Studio 2017 \u7684\u884c\u52d5\u88dd\u7f6e\u76f8\u95dc\u958b\u767c\u529f\u80fd(\u9019\u6a23\u624d\u80fd\u4f7f\u7528 VS2017 \u9644\u7684\u5b89\u5353\u6a21\u64ec\u5668)"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["\u5b89\u88dd ",(0,t.jsx)(i.a,{href:"https://github.com/appium/appium-desktop/releases/latest",title:"\u4e0b\u8f09 Appium",children:"Appium"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["\u5b89\u88dd ",(0,t.jsx)(i.a,{href:"https://github.com/appium/appium-desktop/releases/latest",title:"\u4e0b\u8f09 Java SDK",children:"Java SDK"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["\u5728 Windows \u7684\u7cfb\u7d71\u8b8a\u6578\u4e2d\u52a0\u5165 ",(0,t.jsx)(i.code,{children:"ANDROID_HOME"}),"\uff0c\u4e26\u4e14\u5c07\u5b83\u6307\u5230 Android SDK \u7684\u5b89\u88dd\u8def\u5f91(\u9810\u8a2d\u70ba C:\\Program Files (x86)\\Android\\android-sdk)"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["\u5728 Windows \u7684\u7cfb\u7d71\u8b8a\u6578\u4e2d\u52a0\u5165 ",(0,t.jsx)(i.code,{children:"JAVA_HOME"})," \uff0c\u4e26\u4e14\u4e26\u5c07\u5b83\u6307\u5b9a\u5230 Java SDK \u7684 bin \u8cc7\u6599\u593e"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-01",src:n(46545).Z+"",title:"\u8a2d\u5b9a JAVA_HOME \u8def\u5f91",width:"618",height:"585"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"\u5728 Windows \u7cfb\u7d71\u8b8a\u6578\u4e2d\u7684 Path \u9805\u76ee\u4e2d\u52a0\u4e0a\u4ee5\u4e0b\u5e7e\u500b\u8def\u5f91\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"%JAVA_HOME%"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"%ANDROID_HOME%"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"%ANDROID_HOME%\\tools\\"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"%ANDROID_HOME%\\platform-tools\\"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-02",src:n(8353).Z+"",title:"\u8a2d\u5b9a Path \u4e2d\u7684\u8def\u5f91",width:"527",height:"501"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"android-\u6a21\u64ec\u5668\u8a2d\u5b9a",children:"Android \u6a21\u64ec\u5668\u8a2d\u5b9a"}),"\n",(0,t.jsx)(i.p,{children:"\u900f\u904e VS \u958b\u767c\u6700\u5927\u7684\u597d\u8655\u5c31\u662f\u53ef\u4ee5\u5728 VS \u88e1\u9762\u7ba1\u7406\u6240\u6709\u76f8\u95dc\u7684\u529f\u80fd\uff0c\u5305\u542b Android SDK \u548c\u6a21\u64ec\u5668\u3002\n\u5b89\u88dd\u597d VS \u4e4b\u5f8c\uff0c\u4e0d\u59a8\u5148\u900f\u904e Android SDK Manager (Tools -> Android -> Android SDK Manager...)\u4f86\u66f4\u65b0 Android SDK \u5230\u6700\u65b0\u7684\u7248\u672c\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u53e6\u5916\uff0c\u5982\u679c\u4f60\u4f7f\u7528 Intel \u7684 CPU \u7684\u8a71\uff0c\u4e5f\u5efa\u8b70\u91dd\u5c0d Android 4.4.2 \u5b89\u88dd ",(0,t.jsx)(i.code,{children:"Google APIs Intel x86 Atom System Image"}),"\uff0c\u4e26\u4e14\u5b89\u88dd ",(0,t.jsx)(i.a,{href:"https://software.intel.com/en-us/android/articles/intel-hardware-accelerated-execution-manager",title:"Intel\xae Hardware Accelerated Execution Manager",children:(0,t.jsx)(i.code,{children:"Intel\xae Hardware Accelerated Execution Manager"})})," \u4ee5\u7372\u5f97\u66f4\u597d\u7684\u6548\u80fd\u3002"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-03",src:n(73241).Z+"",title:"\u5b89\u88ddGoogle APIs Intel x86 Atom System Image",width:"686",height:"493"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["\u82e5\u6709\u555f\u7528 Hyper-V \u7684\u8a71\uff0cHAXM \u53ef\u80fd\u6703\u548c\u5b83\u76f8\u885d\uff0c\u9019\u6642\u5019\u53ef\u4ee5\u900f\u904e\u5728\u547d\u4ee4\u63d0\u793a\u5b57\u5143\u8f38\u5165 ",(0,t.jsx)(i.code,{children:"bcdedit /set hypervisorlaunchtype off"})," \u4e4b\u5f8c\u91cd\u65b0\u958b\u6a5f\u4ee5\u95dc\u9589 Hyper-V \u3002"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["SDK \u66f4\u65b0\u5b8c\u4e4b\u5f8c\uff0c\u5c31\u53ef\u4ee5\u900f\u904e Tools -> Android -> Android Emulator Manager... \u4f86\u7ba1\u7406\u865b\u64ec\u6a5f\u56c9\u3002\u5728\u9019\u908a\uff0c\u6211\u9078\u64c7\u4fee\u6539\u539f\u4f86\u5167\u5efa\u7684 AVD_GalaxyNexus_ToolsForApacheCordova\uff0c\u4e26\u4e14\u8abf\u6574 CPU/ABI \u70ba ",(0,t.jsx)(i.code,{children:"Google APIs Intel Atom (x86)"}),"\u3001Skin \u70ba ",(0,t.jsx)(i.code,{children:"Skin with dynamic hardware controls"}),"\u3001\u52fe\u9078 ",(0,t.jsx)(i.code,{children:"Use Host GPU"}),"\u3002"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-04",src:n(75895).Z+"",title:"\u7de8\u8f2f\u5b89\u5353\u6a21\u64ec\u5668\u8a2d\u5b9a",width:"397",height:"689"})}),"\n",(0,t.jsx)(i.p,{children:"\u8a2d\u5b9a\u5b8c\u6210\u4e4b\u5f8c\uff0c\u5c31\u53ef\u4ee5\u6309\u4e0b Android Virtual Device (AVD) Manager \u88e1\u9762\u7684\u555f\u52d5\u6309\u9215\u4f86\u958b\u555f\u6a21\u64ec\u5668\u5566~"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-05",src:n(79005).Z+"",title:"\u6309\u4e0bStart\u9215\u555f\u52d5\u6a21\u64ec\u5668",width:"951",height:"554"})}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u679c\u770b\u5230\u6a21\u64ec\u5668\u6b63\u5e38\u57f7\u884c\uff0c\u5c31\u53ef\u4ee5\u958b\u59cb\u52d5\u624b\u5beb\u6e2c\u8a66\u7a0b\u5f0f\u56c9\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"\u64b0\u5beb\u81ea\u52d5\u5316\u6e2c\u8a66\u7a0b\u5f0f\u78bc",children:"\u64b0\u5beb\u81ea\u52d5\u5316\u6e2c\u8a66\u7a0b\u5f0f\u78bc"}),"\n",(0,t.jsx)(i.p,{children:"\u900f\u904e Visual Studio 2017 \u5efa\u7acb\u51fa Unit Test \u5c08\u6848\u4e4b\u5f8c\uff0c\u9996\u5148\u8981\u4f5c\u7684\u662f\u900f\u904e NuGet Package Manager \u5728\u5c08\u6848\u4e2d\u52a0\u5165 Appium.WebDriver \u7684\u53c3\u8003\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-06",src:n(48046).Z+"",title:"\u900f\u904e NuGet \u52a0\u5165\u5c0d Appium \u7684\u53c3\u8003",width:"1366",height:"738"})}),"\n",(0,t.jsx)(i.p,{children:"\u518d\u4f86\u5c31\u53ef\u4ee5\u958b\u5fc3\u7684\u5beb\u7a0b\u5f0f\u5566!!~"}),"\n",(0,t.jsx)(i.p,{children:"\u6211\u7684\u7bc4\u4f8b\u7a0b\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",metastring:'title="UnitTest1.cs"',children:'using System;\nusing Microsoft.VisualStudio.TestTools.UnitTesting;\nusing OpenQA.Selenium.Appium;\nusing OpenQA.Selenium.Appium.Android;\nusing OpenQA.Selenium.Remote;\nusing OpenQA.Selenium.Appium.Enums;\nusing OpenQA.Selenium;\n\nnamespace MobileWebUnitTestWithAppium\n{\n[TestClass]\npublic class UnitTest1\n{\n//\u5ba3\u544a Appium Driver\uff0c\u4e26\u6307\u5b9a\u4f7f\u7528 Android Element\nAppiumDriver<AndroidElement> \\_driver;\n\n        [TestMethod]\n        public void TestSearchOuchMvpProfile()\n        {\n            //\u5b9a\u7fa9\u76f8\u5bb9\u6027\n            DesiredCapabilities desiredCapabilities = new DesiredCapabilities();\n\n            //\u6307\u5b9a\u5e73\u53f0\u70ba\u5b89\u5353\n            desiredCapabilities.SetCapability( MobileCapabilityType.PlatformName , MobilePlatform.Android );\n\n            //\u6307\u5b9a\u4f7f\u7528\u7684\u5e73\u53f0\u7248\u672c\u70ba 4.4.2\n            desiredCapabilities.SetCapability( MobileCapabilityType.PlatformVersion , "4.4.2" );\n\n            //\u6307\u5b9a\u88dd\u7f6e\u540d\u7a31\uff0c\u88dd\u7f6e\u540d\u7a31\u53ef\u4ee5\u900f\u904e\u5728 Tools -> Android Adb Command Prompt... \u4e2d\u8f38\u5165 adb devices -l \u53d6\u5f97\n            desiredCapabilities.SetCapability( MobileCapabilityType.DeviceName , "generic_x86" );\n\n            //\u6307\u5b9a\u700f\u89bd\u5668\u540d\u7a31\u70ba Browser(\u4e5f\u53ef\u4ee5\u4f7f\u7528 Chrome\uff0c\u6307\u5b9a\u70ba Browser \u5247\u6703\u4f7f\u7528\u9810\u8a2d\u7684\u700f\u89bd\u5668)\n            desiredCapabilities.SetCapability( MobileCapabilityType.BrowserName , "Browser" );\n\n            //\u6307\u5b9a\u4e0d\u958b\u555f\u4efb\u4f55 App(\u6709\u7684\u7bc4\u4f8b\u4e26\u6c92\u6709\u9019\u884c\uff0c\u4f46\u662f\u6211\u5982\u679c\u628a\u9019\u884c\u62ff\u6389\u7684\u8a71\u6703\u51fa\u932f)\n            desiredCapabilities.SetCapability( MobileCapabilityType.App , null );\n\n            //\u5efa\u7acb AppiumDriver \u7684 Instance \uff0c\u4e26\u6307\u5b9a Appium Server \u7684\u8def\u5f91\n            _driver = new AndroidDriver<AndroidElement>( new Uri( "http://127.0.0.1:4723/wd/hub" ) , desiredCapabilities );\n\n            //\u6307\u5b9a\u700f\u89bd\u5668\u958b\u555f\u7db2\u5740\n            _driver.Navigate().GoToUrl( "https://mvp.microsoft.com/zh-tw/" );\n\n            //\u627e\u51fa\u95dc\u9375\u5b57\u641c\u5c0b\u6846\n            AndroidElement searchBox = _driver.FindElementByName( "kw" );\n\n            //\u5728\u641c\u5c0b\u6846\u4e2d\u8f38\u5165\u6587\u5b57\n            searchBox.SendKeys( "Ouch Liu" );\n\n            //\u6309\u4e0b Enter\n            searchBox.SendKeys( Keys.Enter );\n\n            //\u627e\u51fa\u5167\u6587\u70ba\u6307\u5b9a\u6587\u5b57\u7684\u8d85\u9023\u7d50\n            AndroidElement profileLink = _driver.FindElementByLinkText( "Ouch Liu" );\n\n            //\u6309\u4e0b\u8d85\u9023\u7d50\n            profileLink.Click();\n\n            //\u53d6\u51fa class \u70ba title \u7269\u4ef6\u4e2d\u7684\u6587\u5b57\n            string titleText = _driver.FindElementByClassName( "title" ).Text;\n\n            //\u5b9a\u7fa9\u9810\u671f\u503c\n            string expectedTitle = "Ouch Liu (\u5289\u8000\u7fa4)";\n\n            //\u6bd4\u5c0d\u5be6\u969b\u503c\u8207\u9810\u671f\u503c\u662f\u5426\u76f8\u540c\n            Assert.AreEqual( expectedTitle , titleText );\n        }\n    }\n\n}\n'})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["DeviceName \u53ef\u4ee5\u900f\u904e Visual Studio \u4e3b\u9078\u55ae\u7684 Tools -> Android Adb Command Prompt... \u4e2d\u8f38\u5165 ",(0,t.jsx)(i.code,{children:"adb devices -l"})," \u53d6\u5f97\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"\u57f7\u884c\u6e2c\u8a66",children:"\u57f7\u884c\u6e2c\u8a66"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u9032\u884c\u6e2c\u8a66\u4e4b\u524d\uff0c\u8acb\u5148\u6253\u958b\u684c\u4e0a\u9762\u7684 Appium \u5716\u793a\u4f86\u555f\u52d5 Appium Server\u3002\n\u57fa\u672c\u4e0a\uff0c\u5b8c\u5168\u4e0d\u9700\u8981\u66f4\u6539\u4efb\u4f55\u8a2d\u5b9a\uff0c\u53ea\u9700\u8981\u6309\u4e0b Start Server 1.6.4 \u6309\u9215\u5c31\u884c\u4e86\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-07",src:n(69282).Z+"",title:"\u6309\u4e0b Start Server 1.6.4 \u6309\u9215",width:"636",height:"593"})}),"\n",(0,t.jsx)(i.p,{children:"Appium Server \u555f\u52d5\u4e4b\u5f8c\u7684\u756b\u9762\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-08",src:n(42202).Z+"",title:"Appium Server \u555f\u52d5\u5f8c\u7684\u756b\u9762",width:"636",height:"593"})}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u958b\u59cb\u57f7\u884c\u6e2c\u8a66\u4e4b\u524d\uff0c\u8acb\u52d9\u5fc5\u5148\u78ba\u8a8d Appium Server \u5df2\u7d93\u6b63\u5e38\u555f\u52d5\uff0c\u800c\u4e14 Android \u6a21\u64ec\u5668\u4e5f\u80fd\u6b63\u5e38\u904b\u4f5c\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u63a5\u8457\u5c31\u53ef\u4ee5\u900f\u904e Test Explorer \u4f86\u57f7\u884c\u6211\u5011\u7684\u6e2c\u8a66\u7a0b\u5f0f\uff0c\u9a57\u8b49\u770b\u770b Appium \u662f\u4e0d\u662f\u771f\u7684\u6709\u90a3\u9ebc\u53b2\u5bb3\u56c9\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-09",src:n(94316).Z+"",title:"\u5be6\u969b\u57f7\u884c\u756b\u9762",width:"324",height:"611"})}),"\n",(0,t.jsx)(i.p,{children:"\u56e0\u70ba\u6211\u6700\u5f8c\u9a57\u8b49\u7684\u689d\u4ef6\u53ea\u6709\u6aa2\u67e5\u6587\u5b57\uff0c\u53ea\u8981\u700f\u89bd\u5668\u4e2d\u7684 Dom \u7269\u4ef6\u627e\u5f97\u5230\u8a72\u6587\u5b57\u5c31\u7b97\u6e2c\u8a66\u6210\u529f\u4e86\uff0c\u6240\u4ee5\u4e26\u4e0d\u9700\u8981\u5c07\u756b\u9762\u5f80\u4e0b\u6372\uff0c\u4e5f\u662f\u53ef\u4ee5\u901a\u904e\u6e2c\u8a66\u7684\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u53e6\u5916\uff0c\u5728\u57f7\u884c\u7684\u904e\u7a0b\u4e2d\uff0c\u6211\u5011\u4e5f\u53ef\u4ee5\u770b\u5230 Appium Server \u8996\u7a97\u4e2d\u8655\u7406\u6e2c\u8a66\u7a0b\u5f0f\u4e2d\u5404\u500b\u52d5\u4f5c\u7684 Log\u3002"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-10",src:n(13230).Z+"",title:"Appium Server \u6e2c\u8a66\u671f\u9593\u7684 Log",width:"636",height:"593"})}),"\n",(0,t.jsx)(i.h2,{id:"\u7d50\u8a9e",children:"\u7d50\u8a9e"}),"\n",(0,t.jsx)(i.p,{children:"\u4e0a\u9762\u7684\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u61c9\u8a72\u5c0d\u65bc\u5e73\u5e38\u5c31\u6709\u5728\u4f7f\u7528 Selenium \u7684\u670b\u53cb\u5011\u5145\u6eff\u4e86\u89aa\u5207\u611f\u5427\uff0c\u5c31\u6211\u500b\u4eba\u7684\u611f\u89ba\uff0c\u771f\u7684\u662f\u5f88\u5bb9\u6613\u4e0a\u624b\u7684\u4e00\u500b\u6846\u67b6\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u52a0\u4e0a Appium Server Desktop \u6700\u8fd1\u4e5f\u66f4\u65b0\u5230\u4e86\u65b0\u7248\uff0c\u514d\u9664\u4e86\u820a\u7248\u8a31\u591a\u7e41\u5197\u7684\u8a2d\u5b9a\uff0c\u73fe\u5728\u5e7e\u4e4e\u662f\u6253\u958b\u4e4b\u5f8c\u53ea\u8981\u6309\u4e0b Start Server \u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\uff0c\u771f\u7684\u662f\u8d85\u7d1a\u65b9\u4fbf\u7684\u554a!!~~"}),"\n",(0,t.jsx)(i.p,{children:"\u6709\u76f8\u95dc\u9700\u6c42\u7684\u670b\u53cb\u5011\u4e0d\u59a8\u4e5f\u4e00\u8d77\u73a9\u770b\u770b\u5594!!"}),"\n",(0,t.jsx)(i.p,{children:"\u6700\u5f8c\uff0c\u9644\u4e0a\u5c08\u6848\u7684\u539f\u59cb\u78bc\uff0c\u8acb\u81ea\u884c\u53d6\u7528\uff1a"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/Ouch1978/MobileWebUnitTestWithAppium/",children:(0,t.jsx)(i.img,{alt:"Sample",src:n(4638).Z+"",width:"320",height:"128"})})})]})}function c(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19993:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/00-the-architecture-of-appium-811a2bb80f9a5bcf6e11d6326b94c05b.png"},46545:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/01-set-android-home-and-java-home-29a0903914d2c23883db9eeab3bbbc14.png"},8353:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/02-add-paths-16a54cc265fbbe3e7031f1452c3e3f64.png"},73241:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/03-install-google-apis-intel-x86-atom-system-image-d405ed6ef61ccb6a4983afb9634c4cfc.png"},75895:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/04-edit-android-virtual-device-c6bd892aae0df3a3c71b2b841159023a.png"},79005:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/05-press-start-button-to-launch-android-emulator-dd434f0ad1fccdce833d57cc996442ba.png"},48046:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/06-add-appium-webdriver-reference-through-nuget-a36e8b487b1f6c8f888c999584e06918.png"},69282:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/07-start-appium-server-7d19af8fc014921816759627bea82ea8.png"},42202:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/08-appium-server-started-d8bd5c900a66121d7e9ab628faf87286.png"},94316:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/09-automation-running-eab2fcfeca0f4e810b1fc290b75ec1b1.gif"},13230:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/10-appium-server-console-log-2159c09df08b0afadc14f523adf0eb9e.png"},4638:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/source-code-153869134bfab34cdb0cca6222a56300.png"},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>a});var t=n(67294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);