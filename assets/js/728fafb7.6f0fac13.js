"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[3402],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"\u4e94\u5206\u9418\u770b\u5b8c C# 7.2",description:"\u5fae\u8edf\u5728 2017 \u5e74 12 \u6708\u767c\u4f48\u4e86 Visual Studio 2017 \u7684 15.5 \u7248\uff0c\u88e1\u9762\u6709\u4e00\u9805\u5f88\u91cd\u8981\u7684\u529f\u80fd\u5c31\u662f C# \u7de8\u8b6f\u5668\u52a0\u5165\u4e86\u5c0d C# 7.2 \u7684\u652f\u63f4\u3002 \u6240\u4ee5\uff0c\u5c31\u8b93\u6211\u5011\u4f86\u5feb\u901f\u7684\u4e86\u89e3\u4e00\u4e0b C# 7.2 \u70ba\u6211\u5011\u5e36\u4f86\u4e86\u54ea\u4e9b\u5be6\u7528\u7684\u65b0\u529f\u80fd\u5427!!~",authors:"ouch1978",tags:["C#"],keywords:["\u61f6\u4eba\u5305","C# 7.2"]},u=void 0,p={permalink:"/blog/2018/01/31/understand-csharp-7.2-in-5-minutes",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2018-01-31-understand-csharp-7.2-in-5-minutes/index.md",source:"@site/blog/2018-01-31-understand-csharp-7.2-in-5-minutes/index.md",title:"\u4e94\u5206\u9418\u770b\u5b8c C# 7.2",description:"\u5fae\u8edf\u5728 2017 \u5e74 12 \u6708\u767c\u4f48\u4e86 Visual Studio 2017 \u7684 15.5 \u7248\uff0c\u88e1\u9762\u6709\u4e00\u9805\u5f88\u91cd\u8981\u7684\u529f\u80fd\u5c31\u662f C# \u7de8\u8b6f\u5668\u52a0\u5165\u4e86\u5c0d C# 7.2 \u7684\u652f\u63f4\u3002 \u6240\u4ee5\uff0c\u5c31\u8b93\u6211\u5011\u4f86\u5feb\u901f\u7684\u4e86\u89e3\u4e00\u4e0b C# 7.2 \u70ba\u6211\u5011\u5e36\u4f86\u4e86\u54ea\u4e9b\u5be6\u7528\u7684\u65b0\u529f\u80fd\u5427!!~",date:"2018-01-31T00:00:00.000Z",formattedDate:"2018\u5e741\u670831\u65e5",tags:[{label:"C#",permalink:"/blog/tags/c"}],readingTime:7.31,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u4e94\u5206\u9418\u770b\u5b8c C# 7.2",description:"\u5fae\u8edf\u5728 2017 \u5e74 12 \u6708\u767c\u4f48\u4e86 Visual Studio 2017 \u7684 15.5 \u7248\uff0c\u88e1\u9762\u6709\u4e00\u9805\u5f88\u91cd\u8981\u7684\u529f\u80fd\u5c31\u662f C# \u7de8\u8b6f\u5668\u52a0\u5165\u4e86\u5c0d C# 7.2 \u7684\u652f\u63f4\u3002 \u6240\u4ee5\uff0c\u5c31\u8b93\u6211\u5011\u4f86\u5feb\u901f\u7684\u4e86\u89e3\u4e00\u4e0b C# 7.2 \u70ba\u6211\u5011\u5e36\u4f86\u4e86\u54ea\u4e9b\u5be6\u7528\u7684\u65b0\u529f\u80fd\u5427!!~",authors:"ouch1978",tags:["C#"],keywords:["\u61f6\u4eba\u5305","C# 7.2"]},prevItem:{title:"\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u5011\u4e0d\u53ef\u4e0d\u77e5\u9053\u7684 Windows 10 \u8a2d\u5b9a\u5c0f\u6487\u6b65",permalink:"/blog/2018/03/16/windows-10-configuration-tips-for-developers"},nextItem:{title:"\u8ab0\u8aaa\u9b5a\u8207\u718a\u638c\u4e0d\u53ef\u517c\u5f97? \u8b93\u4f60\u7684\u5b89\u5353\u6a21\u64ec\u5668\u8207 Hyper-V \u53ef\u4ee5\u548c\u5e73\u5171\u8655",permalink:"/blog/2018/01/22/co-existing-android-emulator-and-hyper-v"}},s={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6e96\u5099\u5de5\u4f5c",id:"\u6e96\u5099\u5de5\u4f5c",level:2},{value:"C# 7.2 \u65b0\u529f\u80fd\u4ecb\u7d39",id:"c-72-\u65b0\u529f\u80fd\u4ecb\u7d39",level:2},{value:"Readonly Ref (in \u53c3\u6578)",id:"readonly-ref-in-\u53c3\u6578",level:3},{value:"Non-Trailing Named Arguments",id:"non-trailing-named-arguments",level:3},{value:"Leading Separator",id:"leading-separator",level:3},{value:"Private Protected",id:"private-protected",level:3},{value:"\u5f8c\u8a18",id:"\u5f8c\u8a18",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u5fae\u8edf\u5728 2017 \u5e74 12 \u6708\u767c\u4f48\u4e86 Visual Studio 2017 \u7684 15.5 \u7248\uff0c\u88e1\u9762\u6709\u4e00\u9805\u5f88\u91cd\u8981\u7684\u529f\u80fd\u5c31\u662f C# \u7de8\u8b6f\u5668\u52a0\u5165\u4e86\u5c0d C# 7.2 \u7684\u652f\u63f4\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u5c31\u8b93\u6211\u5011\u4f86\u5feb\u901f\u7684\u4e86\u89e3\u4e00\u4e0b C# 7.2 \u70ba\u6211\u5011\u5e36\u4f86\u4e86\u54ea\u4e9b\u5be6\u7528\u7684\u65b0\u529f\u80fd\u5427!!~"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"P.S. \u5f8c\u9762\u7684\u5ee2\u8a71\u5f88\u591a\uff0c\u5982\u679c\u60f3\u8981\u5728\u4e94\u5206\u9418\u88e1\u9762\u770b\u5b8c\u6240\u6709\u65b0\u529f\u80fd\u7684\u8a71\uff0c\u4e0d\u59a8\u76f4\u63a5\u770b\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\u7684\u90e8\u4efd\u5c31\u597d\u3002")),(0,i.kt)("h2",{id:"\u6e96\u5099\u5de5\u4f5c"},"\u6e96\u5099\u5de5\u4f5c"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5982\u679c\u8981\u5728 Visual Studio 2017 \u88e1\u9762\u4f7f\u7528 C# 7.2 \u9032\u884c\u958b\u767c\u7684\u8a71\uff0c\u5f97\u8981\u5148\u5728\u5c08\u6848\u4e2d\u6307\u5b9a\u4f7f\u7528\u7684\u8a9e\u8a00\u7248\u672c\u3002"),(0,i.kt)("p",null,"\u65b9\u6cd5\u662f\uff1a\u9ede\u9078 ",(0,i.kt)("inlineCode",{parentName:"p"},"Project"),"(\u5c08\u6848) -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Properties"),"(\u5c6c\u6027) -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Build"),"(\u5efa\u7f6e) -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced..."),"(\u9032\u968e...)"),(0,i.kt)("p",null,"\u63a5\u8457\u5728\u5f48\u51fa\u4f86\u7684 Advanced Build Settings(\u9032\u968e\u5efa\u7f6e\u8a2d\u5b9a) \u8996\u7a97\u4e2d\u7684 Language version(\u8a9e\u8a00\u7248\u672c) \u4e0b\u62c9\u9078\u55ae\u4e2d\u6311\u9078 C# 7.2 \u5f8c\u6309\u4e0b OK \u6309\u9215\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-01",src:n(98077).Z,title:"\u8a2d\u5b9a\u5c08\u6848\u652f\u63f4\u7684\u8a9e\u8a00\u7248\u672c\u70ba C# 7.2",width:"548",height:"321"})),(0,i.kt)("p",null,"\u4e4b\u5f8c\u5c31\u53ef\u4ee5\u5728\u5c08\u6848\u4e2d\u4f7f\u7528 C# 7.2 \u9032\u884c\u958b\u767c\u56c9!!"),(0,i.kt)("h2",{id:"c-72-\u65b0\u529f\u80fd\u4ecb\u7d39"},"C# 7.2 \u65b0\u529f\u80fd\u4ecb\u7d39"),(0,i.kt)("h3",{id:"readonly-ref-in-\u53c3\u6578"},"Readonly Ref (in \u53c3\u6578)"),(0,i.kt)("p",null,"\u901a\u5e38\u5728\u50b3\u905e\u67d0\u500b\u8b8a\u6578\u5230\u67d0\u500b\u65b9\u6cd5\u7684\u6642\u5019\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e\u5728\u8b8a\u6578\u524d\u9762\u52a0\u4e0a ref \u95dc\u9375\u5b57\uff0c\u76f4\u63a5\u5c07\u8a72\u8b8a\u6578\u50b3\u5230\u65b9\u6cd5\u4e2d\u64cd\u4f5c(Passing an argument by reference)\u800c\u4e0d\u662f\u53e6\u5916\u8907\u88fd\u4e00\u4efd(Pass by value)\uff0c\u9032\u800c\u80fd\u5f9e\u8a72\u65b9\u6cd5\u4e2d\u5c0d\u8b8a\u6578\u7684\u503c\u9032\u884c\u4fee\u6539\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u5728\u67d0\u4e9b\u72c0\u6cc1\u4e0b\uff0c\u6211\u5011\u53ef\u80fd\u6703\u5e0c\u671b\u5c07\u8b8a\u6578\u76f4\u63a5\u50b3\u905e\u7d66\u65b9\u6cd5\uff0c\u4f46\u662f\u53c8\u4e0d\u5e0c\u671b\u5b83\u7684\u503c\u5728\u8a72\u65b9\u6cd5\u4e2d\u88ab\u4fee\u6539\u3002"),(0,i.kt)("p",null,"\u9019\u6642\u5019\uff0c\u8070\u660e\u7684\u5de5\u7a0b\u5e2b\u53ef\u80fd\u6703\u806f\u60f3\u5230\u53ef\u4ee5\u628a readonly \u9019\u500b\u95dc\u9375\u5b57\u62ff\u51fa\u4f86\u7528\uff0c\u7d44\u6210 readonly ref\uff1b\u9019\u6a23\u4e00\u4f86\uff0c\u5c31\u65e2\u53ef\u4ee5\u5c07\u8b8a\u6578\u76f4\u63a5\u50b3\u905e\u5230\u65b9\u6cd5\u4e2d\u4f7f\u7528\uff0c\u800c\u4e14\u53c8\u53ef\u4ee5\u9632\u6b62\u5b83\u7684\u503c\u5728\u65b9\u6cd5\u4e2d\u88ab\u4fee\u6539\u3002"),(0,i.kt)("p",null,"\u6c92\u932f\uff0c\u5c31\u662f\u9019\u500b\u6982\u5ff5!! \u6240\u4ee5\u5728 C# \u672a\u4f86\u767c\u5c55\u7684\u8a0e\u8ad6\u4e2d\u5c31\u6709\u4eba\u63d0\u51fa\u9019\u6a23\u7684\u60f3\u6cd5\u3002"),(0,i.kt)("p",null,"\u7136\u5f8c\u7d93\u904e\u4e86\u4e00\u756a\u8a0e\u8ad6\u4e4b\u5f8c\uff0c\u6700\u7d42\u5f97\u5230\u7684\u7d50\u679c\u662f\u65b0\u589e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"in")," \u9019\u500b\u95dc\u9375\u5b57\uff0c\u53d6\u4ee3\u539f\u4f86 readonly ref \u7684\u69cb\u60f3\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u5011\u53ef\u4ee5\u85c9\u7531\u4e0b\u9762\u9019\u6bb5\u7a0b\u5f0f\u78bc\u4f86\u5feb\u901f\u4e86\u89e3\u4e00\u4e0b in \u9019\u500b\u95dc\u9375\u5b57\u5e36\u4f86\u7684\u65b0\u7279\u6027\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Readonly Ref (in \u53c3\u6578) \u7bc4\u4f8b"',title:'"Readonly',Ref:!0,"(in":!0,"\u53c3\u6578)":!0,'\u7bc4\u4f8b"':!0},"static Point AddPoints( in Point v1 , in Point v2 )\n{\n//\u975e\u6cd5\uff0c\u6703\u51fa\u73fe\u7de8\u8b6f\u932f\u8aa4!!\nv1 = default( Point );\n\n    //\u975e\u6cd5\uff0c\u6703\u51fa\u73fe\u7de8\u8b6f\u932f\u8aa4!!\n    v1.X = 0;\n\n    //\u975e\u6cd5\uff0c\u6703\u51fa\u73fe\u7de8\u8b6f\u932f\u8aa4!!\n    Foo( ref v1.X );\n\n    //\u5408\u6cd5\n    return new Point( v1.X + v2.X , v1.Y + v2.Y );\n\n}\n\n")),(0,i.kt)("h3",{id:"non-trailing-named-arguments"},"Non-Trailing Named Arguments"),(0,i.kt)("p",null,"\u81ea\u5f9e C# 4.0 \u4e4b\u5f8c\uff0c\u6211\u5011\u958b\u59cb\u53ef\u4ee5\u4f7f\u7528\u5177\u540d\u8207\u975e\u5177\u540d\u53c3\u6578\u4f86\u547c\u53eb\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u4f7f\u7528\u4e0a\u6709\u4e00\u500b\u9650\u5236\uff0c\u5c31\u662f\u5177\u540d\u7684\u53c3\u6578\u4e00\u5b9a\u5f97\u8981\u653e\u5728\u5f8c\u9762\uff0c\u5982\u679c\u6c92\u7167\u4f5c\u7684\u8a71\uff0c\u9032\u884c\u7de8\u8b6f\u6642\u5c31\u6703\u51fa\u73fe ",(0,i.kt)("inlineCode",{parentName:"p"},"CS1738 - Named argument specifications must appear after all fixed arguments have been specified")," \u932f\u8aa4\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u5230\u4e86 C# 7.2\uff0c\u9019\u500b\u9650\u5236\u5c31\u4e0d\u518d\u5b58\u5728\u4e86\uff0c\u4e4b\u5f8c\u6211\u5011\u5c31\u53ef\u4ee5\u5728\u547c\u53eb\u65b9\u6cd5\u7684\u6642\u5019\uff0c\u5728\u4efb\u610f\u4f4d\u7f6e\u4f7f\u7528\u5177\u540d\u53c3\u6578\u56c9!!"),(0,i.kt)("p",null,"\u8a73\u7d30\u7684\u72c0\u6cc1\u53ef\u4ee5\u53c3\u8003\u4e0b\u9762\u7684\u7bc4\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Non-Trailing Named Arguments \u7bc4\u4f8b"',title:'"Non-Trailing',Named:!0,Arguments:!0,'\u7bc4\u4f8b"':!0},'public void DoSomething( bool isEmployed , string personName , int personAge )\n{\n//do something\n}\n\nvoid Test()\n{\nDoSomething( false , "Ouch Liu" , 38 ); //\u5408\u6cd5\n DoSomething( true , personAge: 38 , personName: "Ouch Liu" ); //\u5408\u6cd5\nDoSomething( personAge: 38 , personName: "Ouch Liu" , isEmployed: false ); //\u5408\u6cd5\n//DoSomething( isEmployed: false , "Ouch Liu" , 38 ); //C# 7.2 \u4e4b\u524d\u6703\u51fa\u73fe CS1738 \u932f\u8aa4\uff0cC# 7.2 \u4e4b\u5f8c\u6703\u8b8a\u5408\u6cd5\n//DoSomething( true , personName: "Ouch Liu" , 38 ); //C# 7.2 \u4e4b\u524d\u6703\u51fa\u73fe CS1738 \u932f\u8aa4\uff0cC# 7.2 \u4e4b\u5f8c\u6703\u8b8a\u5408\u6cd5\n//DoSomething( "Ouch Liu" , isEmployed: true , 38 ); //\u4f9d\u7136\u4e0d\u5408\u6cd5\n//DoSomething( "Ouch Liu" , 38 , isEmployed: true ); //\u4f9d\u7136\u4e0d\u5408\u6cd5\n}\n')),(0,i.kt)("h3",{id:"leading-separator"},"Leading Separator"),(0,i.kt)("p",null,"\u5728 C# 7.0 \u7684\u6642\u5019\uff0c\u6709\u4e00\u500b\u65b0\u589e\u7684\u5c0f\u529f\u80fd\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u5728\u4f7f\u7528\u4f4d\u5143\u6216\u662f\u4e8c\u9032\u5236\u503c\u7684\u6642\u5019\u7528\u5e95\u7dda\u4f86\u5340\u9694\uff0c\u4ee5\u65b9\u4fbf\u95b1\u8b80\uff0c\u5982\u4e0b\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C# 7.0 Leading Separator \u7bc4\u4f8b"',title:'"C#',"7.0":!0,Leading:!0,Separator:!0,'\u7bc4\u4f8b"':!0},"//Binary Literal\nprivate int[] \\_binaryNumbers = { 0b1 , 0b10 , 0b100 , 0b1000 , 0b100000 , 0b1000000 };\n\n//Digit Separators\nprivate int[] \\_binaryWithSeparaters = { 0b0000_0001 , 0b0000_0010 , 0b0000_0100 , 0b0000_1000 , 0b0010_0000 , 0b1000_0000 };\n\n")),(0,i.kt)("p",null,"\u4f46\u662f\u773c\u5c16\u7684\u670b\u53cb\u6216\u662f\u6bd4\u8f03\u8b39\u614e\u7684\u670b\u53cb\u5011\u53ef\u80fd\u6703\u767c\u73fe\uff0c\u5728 prefix(\u5982 0b) \u7684\u5f8c\u9762\u5c31\u76f4\u63a5\u63a5\u8457\u6578\u503c\u9084\u662f\u6709\u4e00\u9ede\u96e3\u8b80\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\u5728 C# 7.2 \u5c31\u91dd\u5c0d Leading Separator \u53c8\u518d\u4f5c\u4e86\u591a\u4e00\u6b21\u7684\u512a\u5316\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u5728 prefix \u4e4b\u5f8c\u5c31\u76f4\u63a5\u52a0\u5165\u4e00\u500b\u5e95\u7dda\u3002\u5982\u4e0b\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C# 7.2 Leading Separator \u7bc4\u4f8b"',title:'"C#',7.2:!0,Leading:!0,Separator:!0,'\u7bc4\u4f8b"':!0},"//Binary Literal\nprivate int[] \\_binaryNumbers = { 0b_1 , 0b_10 , 0b_100 , 0b_1000 , 0b_100000 , 0b_1000000 };\n\n//Digit Separators\nprivate int[] \\_binaryWithSeparaters = { 0b_0000_0001 , 0b_0000_0010 , 0b_0000_0100 , 0b_0000_1000 , 0b_0010_0000 , 0b_1000_0000 };\n")),(0,i.kt)("p",null,"\u548c C# 7.0 \u7684\u5beb\u6cd5\u6bd4\u8d77\u4f86\uff0c\u9019\u6a23\u662f\u4e0d\u662f\u66f4\u597d\u8b80\u4e86\u4e0d\u5c11\u5462?"),(0,i.kt)("h3",{id:"private-protected"},"Private Protected"),(0,i.kt)("p",null,"\u6700\u5f8c\u4e00\u500b\u8981\u4ecb\u7d39\u5728 C# 7.2 \u4e2d\u65b0\u589e\u7684\u529f\u80fd\u5247\u662f\u5f9e C++ \u6284\u4f86\u7684\u6982\u5ff5 - private protected\u3002"),(0,i.kt)("p",null,"\u539f\u672c\u5728 C# \u4e2d\u5c31\u6709 protected \u6216\u662f internal \u9019\u5169\u500b\u4fee\u98fe\u8a5e\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u7136\u800c\uff0cinternal \u4fee\u98fe\u8a5e\u53ef\u4ee5\u8b93\u6211\u5011\u9650\u5236\u8a72\u985e\u5225\u53ea\u80fd\u88ab\u540c\u4e00\u500b\u7d44\u4ef6\u4e2d\u7684\u985e\u5225\u7e7c\u627f\uff1b\u800c protected \u4fee\u98fe\u8a5e\u5247\u53ef\u4ee5\u8b93\u6211\u5011\u9650\u5236\u8a72\u985e\u5225\u53ea\u80fd\u5728\u540c\u985e\u5225\u6216\u884d\u751f\u985e\u5225\u4e2d\u88ab\u5b58\u53d6\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60f3\u8981\u540c\u6642\u9054\u5230\u5169\u500b\u9700\u6c42\u5462\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u65b0\u589e\u7684 private protected \u4fee\u98fe\u8a5e\u4e86\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\u76ee\u524d C# 7.2 \u6240\u652f\u63f4\u7684\u5404\u7a2e\u4fee\u98fe\u8a5e\u548c\u63d0\u4f9b\u7684\u7d44\u5408\u53ca\u6548\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-02",src:n(14431).Z,title:"\u8a2d\u5b9a\u5c08\u6848\u652f\u63f4\u7684\u8a9e\u8a00\u7248\u672c\u70ba C# 7.2",width:"1227",height:"519"})),(0,i.kt)("h2",{id:"\u5f8c\u8a18"},"\u5f8c\u8a18"),(0,i.kt)("p",null,"\u5c0f\u5f1f\u6709\u5e78\u5728 2018 \u5e74\u7684 1 \u6708 8 \u865f\u5728 Study4 \u6240\u8209\u8fa6\u7684\u8207\u5927\u5e2b\u5c0d\u8ac7\u6d3b\u52d5\u5f8c\u7684 Light Talk \u968e\u6bb5\u5206\u4eab\u9019\u500b\u4e3b\u984c\u3002\n\u5728\u6b64\u4e5f\u5c07\u7576\u5929\u7684",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Study4/study4love-2018/blob/master/light%20talk/%E4%BA%94%E5%88%86%E9%90%98%E7%9C%8B%E5%AE%8C%20C%23%207.2.pptx",title:"\u4e94\u5206\u9418\u770b\u5b8c C# 7.2 \u6295\u5f71\u7247"},"\u6295\u5f71\u7247"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Study4/study4love-2018",title:"Study4.TW Study4Love - \u8207\u5927\u5e2b\u5c0d\u8ac7 \u6295\u5f71\u7247"},"\u6d3b\u52d5\u6295\u5f71\u7247\u9023\u7d50"),"\u5206\u4eab\u51fa\u4f86\uff0c\u6709\u8208\u8da3\u7684\u670b\u53cb\u4e0d\u59a8\u4e5f\u4e0b\u8f09\u4f86\u770b\u770b\u3002"))}m.isMDXComponent=!0},98077:function(e,t,n){t.Z=n.p+"assets/images/01-set-language-version-to-csharp-7.2-c44e8d7c5f66399ddfaf66eca4b3aed6.png"},14431:function(e,t,n){t.Z=n.p+"assets/images/02-modifiers-in-csharp-7.2-789adbca0fe719312e1b0c55f547d922.png"}}]);