"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[6418],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),y=l,f=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(83117),l=n(80102),i=(n(67294),n(3905)),a=["components"],o={title:"\u7be9\u9078 Redis Key \u7684\u6b63\u78ba\u59ff\u52e2",description:"\u9084\u8a18\u5f97\u5f88\u4e45\u5f88\u4e45\u4e4b\u524d\uff0c\u66fe\u7d93\u6709\u4e00\u500b\u540c\u4e8b\u4f86\u554f\u6211\uff1a\u70ba\u4ec0\u9ebc\u6211\u53ea\u662f\u4e00\u53e5\u53bb\u67e5 Redis Key \u7684\u8a9e\u6cd5\uff0c\u7a0b\u5f0f\u90fd\u6c92\u6539\u904e\uff0c\u4f46\u662f\u537b\u8d8a\u8dd1\u8d8a\u6162?  \u4e00\u770b\u4ed6\u7684\u7a0b\u5f0f\u78bc\uff0c\u767c\u73fe\u539f\u4f86\u4ed6\u7528 LINQ \u4f86\u904e\u6ffe Redis \u7684 Key...",authors:"ouch1978",tags:["C#","Redis","\u7a0b\u5f0f\u8a2d\u8a08"],keywords:["Redis","Search Keys","Pattern"]},c=void 0,u={permalink:"/blog/2022/10/29/correct-way-to-fileter-redis-key",editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/blog/2022-10-29-correct-way-to-fileter-redis-key/index.md",source:"@site/blog/2022-10-29-correct-way-to-fileter-redis-key/index.md",title:"\u7be9\u9078 Redis Key \u7684\u6b63\u78ba\u59ff\u52e2",description:"\u9084\u8a18\u5f97\u5f88\u4e45\u5f88\u4e45\u4e4b\u524d\uff0c\u66fe\u7d93\u6709\u4e00\u500b\u540c\u4e8b\u4f86\u554f\u6211\uff1a\u70ba\u4ec0\u9ebc\u6211\u53ea\u662f\u4e00\u53e5\u53bb\u67e5 Redis Key \u7684\u8a9e\u6cd5\uff0c\u7a0b\u5f0f\u90fd\u6c92\u6539\u904e\uff0c\u4f46\u662f\u537b\u8d8a\u8dd1\u8d8a\u6162?  \u4e00\u770b\u4ed6\u7684\u7a0b\u5f0f\u78bc\uff0c\u767c\u73fe\u539f\u4f86\u4ed6\u7528 LINQ \u4f86\u904e\u6ffe Redis \u7684 Key...",date:"2022-10-29T00:00:00.000Z",formattedDate:"2022\u5e7410\u670829\u65e5",tags:[{label:"C#",permalink:"/blog/tags/c"},{label:"Redis",permalink:"/blog/tags/redis"},{label:"\u7a0b\u5f0f\u8a2d\u8a08",permalink:"/blog/tags/\u7a0b\u5f0f\u8a2d\u8a08"}],readingTime:3.895,hasTruncateMarker:!0,authors:[{name:"Ouch Liu",title:"\u4e0d\u52d9\u6b63\u696d\u7684\u67b6\u69cb\u5e2b",url:"https://github.com/ouch1978",imageURL:"https://avatars.githubusercontent.com/u/18132883?v=4",key:"ouch1978"}],frontMatter:{title:"\u7be9\u9078 Redis Key \u7684\u6b63\u78ba\u59ff\u52e2",description:"\u9084\u8a18\u5f97\u5f88\u4e45\u5f88\u4e45\u4e4b\u524d\uff0c\u66fe\u7d93\u6709\u4e00\u500b\u540c\u4e8b\u4f86\u554f\u6211\uff1a\u70ba\u4ec0\u9ebc\u6211\u53ea\u662f\u4e00\u53e5\u53bb\u67e5 Redis Key \u7684\u8a9e\u6cd5\uff0c\u7a0b\u5f0f\u90fd\u6c92\u6539\u904e\uff0c\u4f46\u662f\u537b\u8d8a\u8dd1\u8d8a\u6162?  \u4e00\u770b\u4ed6\u7684\u7a0b\u5f0f\u78bc\uff0c\u767c\u73fe\u539f\u4f86\u4ed6\u7528 LINQ \u4f86\u904e\u6ffe Redis \u7684 Key...",authors:"ouch1978",tags:["C#","Redis","\u7a0b\u5f0f\u8a2d\u8a08"],keywords:["Redis","Search Keys","Pattern"]},nextItem:{title:"\u5728 VSCode \u88e1\u986f\u793a\u96b1\u85cf\u7684\u8cc7\u6599\u593e\u548c\u6a94\u6848",permalink:"/blog/2022/10/10/show-hidden-items-in-vscode"}},s={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"\u6709\u554f\u984c\u7684\u7a0b\u5f0f\u78bc",id:"\u6709\u554f\u984c\u7684\u7a0b\u5f0f\u78bc",level:2},{value:"\u554f\u984c\u5728\u54ea\u5152?",id:"\u554f\u984c\u5728\u54ea\u5152",level:2},{value:"\u6b63\u78ba\u7684\u59ff\u52e2",id:"\u6b63\u78ba\u7684\u59ff\u52e2",level:2},{value:"\u5f8c\u8a18",id:"\u5f8c\u8a18",level:2}],d={toc:p};function y(e){var t=e.components,o=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u9084\u8a18\u5f97\u5f88\u4e45\u5f88\u4e45\u4e4b\u524d\uff0c\u66fe\u7d93\u6709\u4e00\u500b\u540c\u4e8b\u4f86\u554f\u6211\uff1a\u70ba\u4ec0\u9ebc\u6211\u53ea\u662f\u4e00\u53e5\u53bb\u67e5 Redis Key \u7684\u8a9e\u6cd5\uff0c\u7a0b\u5f0f\u90fd\u6c92\u6539\u904e\uff0c\u4f46\u662f\u537b\u8d8a\u8dd1\u8d8a\u6162?"),(0,i.kt)("p",null,"\u4e00\u770b\u4ed6\u7684\u7a0b\u5f0f\u78bc\uff0c\u767c\u73fe\u539f\u4f86\u4ed6\u7528 LINQ \u4f86\u904e\u6ffe Redis \u7684 Key..."),(0,i.kt)("p",null,"\u6709\u7d93\u9a57\u7684\u670b\u53cb\u61c9\u8a72\u770b\u5230\u9019\u908a\u5c31\u77e5\u9053\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u3002"),(0,i.kt)("h2",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,i.kt)("p",null,"\u7576\u521d\u53ea\u662f\u5f88\u55ae\u7d14\u7684\u8981\u5be6\u4f5c\u4e00\u500b\u900f\u904e Redis \u4e2d\u7684 Key \u4f86\u5224\u65b7\u8cc7\u6599\u662f\u5426\u5b58\u5728\u7684\u7c21\u55ae\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528 Redis \u5b58\u653e Session Key \u7684\u8a71\u61c9\u8a72\u4e5f\u6703\u4f7f\u7528\u5230\u985e\u4f3c\u7684\u529f\u80fd\u3002"),(0,i.kt)("h2",{id:"\u6709\u554f\u984c\u7684\u7a0b\u5f0f\u78bc"},"\u6709\u554f\u984c\u7684\u7a0b\u5f0f\u78bc"),(0,i.kt)("p",null,"\u7a0b\u5f0f\u78bc\u5f88\u7c21\u55ae\uff0c\u5c31\u53ea\u6709\u77ed\u77ed\u5e7e\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MainWindow.xaml.cs"',title:'"MainWindow.xaml.cs"'},'   var keys = _server.Keys()\n         .Where(x => Regex.IsMatch(x, "Test_By_Ouch_*"))\n         .ToList();\n')),(0,i.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u5148\u4f86\u770b\u770b\u539f\u672c\u7684\u5beb\u6cd5\u548c\u4fee\u6539\u904e\u5f8c\u5beb\u6cd5\u7684\u6548\u80fd\u6bd4\u8f03\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u4fee\u6539\u7a0b\u5f0f\u78bc\u524d\u5f8c\u7684\u6548\u80fd\u6bd4\u8f03",src:n(15010).Z,title:"\u4fee\u6539\u7a0b\u5f0f\u78bc\u524d\u5f8c\u7684\u6548\u80fd\u6bd4\u8f03",width:"1220",height:"695"})),(0,i.kt)("p",null,"\u8b80\u53d6\u63a5\u8fd1\u5341\u4e8c\u842c\u7b46\u7684 Key \u6642\uff0c\u4f7f\u7528\u539f\u4f86\u7684\u7a0b\u5f0f\u78bc\u5927\u7d04\u6703\u82b1\u4e0a 0.52 \u79d2\u7684\u6642\u9593\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u5982\u679c\u6539\u7528 Filter \u7684\u4f5c\u6cd5\uff0c\u5247\u53ef\u4ee5\u7e2e\u77ed\u5230 0.15 \u79d2\u4ee5\u5167\u5b8c\u6210\uff0c\u6548\u80fd\u5dee\u5230\u4e09\u500d\u4ee5\u4e0a"),(0,i.kt)("p",null,"\u6211\u4e4b\u524d\u6e2c\u51fa\u4f86\u7684\u7d50\u679c\uff0c\u9084\u66fe\u7d93\u5dee\u5230\u5341\u4e94\u500d\u4ee5\u4e0a\u3002"),(0,i.kt)("h2",{id:"\u554f\u984c\u5728\u54ea\u5152"},"\u554f\u984c\u5728\u54ea\u5152?"),(0,i.kt)("p",null,"\u7c21\u55ae\u7684\u8aaa\uff0c\u539f\u672c\u7684\u5beb\u6cd5\u6703\u628a\u6240\u6709\u7684 Key \u4e00\u6b21\u6488\u56de\u672c\u6a5f\uff0c\u518d\u900f\u904e LINQ \u9032\u884c\u904e\u6ffe\u3002"),(0,i.kt)("p",null,"\u7576\u8cc7\u6599\u91cf\u8b8a\u5927\uff0c\u8b8a\u6162\u7684\u60c5\u6cc1\u5c31\u6703\u8d8a\u660e\u986f\u3002"),(0,i.kt)("h2",{id:"\u6b63\u78ba\u7684\u59ff\u52e2"},"\u6b63\u78ba\u7684\u59ff\u52e2"),(0,i.kt)("p",null,"\u5176\u5be6 StackExchange.Redis \u7684 IServer.Keys API \u539f\u672c\u5c31\u5167\u5efa Key filter \u7684\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u6211\u5011\u53ea\u8981\u7c21\u55ae\u7684\u628a\u7a0b\u5f0f\u6539\u6210\u4e0b\u9762\u9019\u6a23\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MainWindow.xaml.cs"',title:'"MainWindow.xaml.cs"'},'   var keys = _server.Keys(pattern: "Test_By_Ouch_*", pageSize: pageSize)\n         .ToList();\n')),(0,i.kt)("p",null,"\u5c31\u53ef\u4ee5\u6bd4\u539f\u4f86\u7684\u5beb\u6cd5\u6548\u80fd\u597d\u4e09\u500d\u4ee5\u4e0a\u3002"),(0,i.kt)("p",null,"\u56e0\u70ba\u5b83\u6703\u76f4\u63a5\u5728 Server \u4e0a\u5c31\u9032\u884c\u7be9\u9078\uff0c\u800c\u4e0d\u662f\u628a\u5168\u90e8\u7684 Key \u90fd\u6488\u4e0b\u4f86\u624d\u9032\u884c\u7be9\u9078\u3002"),(0,i.kt)("p",null,"\u9019\u908a\u9700\u8981\u518d\u7279\u5225\u6ce8\u610f\u7684\u662f page size \u53c3\u6578\uff0c\u56e0\u70ba Keys API \u5be6\u969b\u4e0a\u6703\u900f\u904e Key Scan \u4f86\u5c0b\u627e\u7b26\u5408\u689d\u4ef6\u7684 Key\u3002"),(0,i.kt)("p",null,"Page size \u7684\u9810\u8a2d\u503c\u662f 10\uff0c\u5728\u8cc7\u6599\u7b46\u6578\u8d8a\u591a\u7684\u60c5\u6cc1\u4e0b\uff0c\u4f7f\u7528\u9810\u8a2d\u503c\u5c31\u6703\u8b93\u6574\u500b\u67e5\u8a62\u8b8a\u5f97\u66f4\u6162\u3002"),(0,i.kt)("p",null,"\u81f3\u65bc Page size \u6709\u6c92\u6709\u4ec0\u9ebc\u6700\u4f73\u7684\u8a2d\u5b9a\u503c\u5462?"),(0,i.kt)("p",null,"\u4f5c\u8005\u8aaa\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e0d\u8981\u4f7f\u7528 Key Scan!!\n\u4e0d\u8981\u4f7f\u7528 Key Scan!!\n\u4e0d\u8981\u4f7f\u7528 Key Scan!!")),(0,i.kt)("p",null,"(\u5f88\u91cd\u8981\uff0c\u6240\u4ee5\u8981\u8aaa\u4e09\u6b21)"),(0,i.kt)("p",null,"\u9664\u975e\u4f60\u5f88\u6e05\u695a\u7684\u77e5\u9053\u4f7f\u7528 Key Scan \u5c0d Server \u7684\u5f71\u97ff\uff0c\u4e0d\u7136\u9019\u7a2e\u5beb\u6cd5\u9084\u662f\u5118\u91cf\u907f\u958b\u70ba\u5999\u3002"),(0,i.kt)("h2",{id:"\u5f8c\u8a18"},"\u5f8c\u8a18"),(0,i.kt)("p",null,"\u7576\u521d\uff0c\u554f\u6211\u7684\u540c\u4e8b\u4e00\u518d\u5f37\u8abf\uff0c\u9019\u500b\u529f\u80fd\u672c\u4f86\u90fd\u662f\u597d\u7684\uff0c\u4f46\u662f\u4e0d\u77e5\u9053\u70ba\u4ec0\u9ebc\u5c31\u8d8a\u4f86\u8d8a\u6162\u4e86\u3002"),(0,i.kt)("p",null,"\u6211\u53ea\u80fd\u8aaa\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u7528\u5c0d\u7684\u65b9\u6cd5\u505a\u4e8b\u6bd4\u628a\u4e8b\u60c5\u505a\u5c0d\u9084\u91cd\u8981"),"\u3002(\u96d6\u7136\u6211\u4e5f\u5e38\u5e38\u72af\u8822\u5566~~)"),(0,i.kt)("p",null,"\u518d\u4f86\uff0c\u5373\u4fbf LINQ \u5df2\u7d93\u4e0d\u662f\u4ec0\u9ebc\u65b0\u73a9\u610f\u5152\u4e86\uff0c\u4e0d\u904e\u5c0d\u65bc\u65b0\u624b\u4f86\u8aaa\uff0c\u9084\u662f\u5f88\u5bb9\u6613\u8e29\u5230\u96f7(\u6211\u4ee5\u524d\u4e5f\u66fe\u7d93\u8e29\u5f97\u5ad1\u5ad1\u7684\u554a~~)\u3002"),(0,i.kt)("p",null,"\u4e4b\u5f8c\u518d\u4f86\u6574\u7406\u4e00\u7bc7\u4f7f\u7528 LINQ \u6642\u8a72\u6ce8\u610f\u7684\u4e8b\u9805\u8ddf\u5927\u5bb6\u5206\u4eab\u3002"),(0,i.kt)("p",null,"\u6700\u5f8c\u4e00\u6a23\u9644\u4e0a\u7bc4\u4f8b\u7684\u7a0b\u5f0f\u78bc\uff0c\u6b61\u8fce\u6709\u8208\u8da3\u7684\u540c\u5b78\u81ea\u884c\u53d6\u7528\uff1a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Ouch1978/RedisKeyFilterSample",title:"Redis Key \u641c\u5c0b\u7bc4\u4f8b"},(0,i.kt)("img",{alt:"Redis Key \u641c\u5c0b\u7bc4\u4f8b",src:n(4638).Z,width:"320",height:"128"}))))}y.isMDXComponent=!0},15010:function(e,t,n){t.Z=n.p+"assets/images/the-performance-before-and-after-using-filter-fe08645dca340809bb4041c1dcd7ef4a.png"},4638:function(e,t,n){t.Z=n.p+"assets/images/source-code-153869134bfab34cdb0cca6222a56300.png"}}]);