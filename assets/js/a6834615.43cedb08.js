"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[3473],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(g,u(u({ref:t},s),{},{components:a})):r.createElement(g,u({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var c=2;c<o;c++)u[c]=a[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61036:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),u=["components"],i={title:"\u5f37\u5316 SEO - \u70ba\u6240\u6709\u6587\u7ae0\u52a0\u4e0a max-image-preview \u4e2d\u7e7c\u6a19\u8a18",description:"\u4f9d\u64da Google \u641c\u5c0b\u4e2d\u5fc3\u7684\u8aaa\u660e\u6587\u4ef6\u4e2d\u6240\u8ff0\uff0c\u5728\u5167\u5bb9\u4e2d\u52a0\u5165\u5438\u5f15\u4eba\u7684\u9ad8\u756b\u8cea\u5716\u7247\u6703\u6709\u52a9\u65bc\u500b\u4eba\u5167\u5bb9\u66f4\u6709\u6a5f\u6703\u986f\u793a\u5728\u63a2\u7d22\u5c08\u5340\u4e0a\uff0c\u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u5206\u4eab\u5728 Docusaurus \u4e2d\u53ef\u4ee5\u600e\u9ebc\u5141\u8a31\u722c\u87f2\u722c\u5230\u9ad8\u756b\u8cea\u5716\u7247\u7684\u65b9\u6cd5\u3002",author:"ouch1978",tags:["Docusaurus"],keywords:["Docusaurus","meta tag","google discover"]},l=void 0,c={unversionedId:"docusaurus/configuration/add-max-image-preview-meta-tag/index",id:"docusaurus/configuration/add-max-image-preview-meta-tag/index",title:"\u5f37\u5316 SEO - \u70ba\u6240\u6709\u6587\u7ae0\u52a0\u4e0a max-image-preview \u4e2d\u7e7c\u6a19\u8a18",description:"\u4f9d\u64da Google \u641c\u5c0b\u4e2d\u5fc3\u7684\u8aaa\u660e\u6587\u4ef6\u4e2d\u6240\u8ff0\uff0c\u5728\u5167\u5bb9\u4e2d\u52a0\u5165\u5438\u5f15\u4eba\u7684\u9ad8\u756b\u8cea\u5716\u7247\u6703\u6709\u52a9\u65bc\u500b\u4eba\u5167\u5bb9\u66f4\u6709\u6a5f\u6703\u986f\u793a\u5728\u63a2\u7d22\u5c08\u5340\u4e0a\uff0c\u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u5206\u4eab\u5728 Docusaurus \u4e2d\u53ef\u4ee5\u600e\u9ebc\u5141\u8a31\u722c\u87f2\u722c\u5230\u9ad8\u756b\u8cea\u5716\u7247\u7684\u65b9\u6cd5\u3002",source:"@site/docs/04-docusaurus/02-configuration/05-add-max-image-preview-meta-tag/index.md",sourceDirName:"04-docusaurus/02-configuration/05-add-max-image-preview-meta-tag",slug:"/docusaurus/configuration/add-max-image-preview-meta-tag/",permalink:"/docs/docusaurus/configuration/add-max-image-preview-meta-tag/",draft:!1,editUrl:"https://github.com/ouch1978/ouch1978.github.io/edit/main/docs/04-docusaurus/02-configuration/05-add-max-image-preview-meta-tag/index.md",tags:[{label:"Docusaurus",permalink:"/docs/tags/docusaurus"}],version:"current",lastUpdatedAt:1663174533,formattedLastUpdatedAt:"2022\u5e749\u670814\u65e5",frontMatter:{title:"\u5f37\u5316 SEO - \u70ba\u6240\u6709\u6587\u7ae0\u52a0\u4e0a max-image-preview \u4e2d\u7e7c\u6a19\u8a18",description:"\u4f9d\u64da Google \u641c\u5c0b\u4e2d\u5fc3\u7684\u8aaa\u660e\u6587\u4ef6\u4e2d\u6240\u8ff0\uff0c\u5728\u5167\u5bb9\u4e2d\u52a0\u5165\u5438\u5f15\u4eba\u7684\u9ad8\u756b\u8cea\u5716\u7247\u6703\u6709\u52a9\u65bc\u500b\u4eba\u5167\u5bb9\u66f4\u6709\u6a5f\u6703\u986f\u793a\u5728\u63a2\u7d22\u5c08\u5340\u4e0a\uff0c\u9019\u7bc7\u6587\u7ae0\u5c31\u4f86\u5206\u4eab\u5728 Docusaurus \u4e2d\u53ef\u4ee5\u600e\u9ebc\u5141\u8a31\u722c\u87f2\u722c\u5230\u9ad8\u756b\u8cea\u5716\u7247\u7684\u65b9\u6cd5\u3002",author:"ouch1978",tags:["Docusaurus"],keywords:["Docusaurus","meta tag","google discover"]},sidebar:"tutorialSidebar",previous:{title:"\u6d88\u9664\u5728\u6578\u5b78\u516c\u5f0f\u88e1\u4f7f\u7528\u4e2d\u6587\u6642\u51fa\u73fe\u7684\u8b66\u544a",permalink:"/docs/docusaurus/configuration/fix-latex-incompatible-input-warning/"},next:{title:"\u5728\u6587\u4ef6\u5eab\u7684\u6587\u7ae0\u4e0b\u65b9\u52a0\u4e0a Disqus \u7559\u8a00\u5340",permalink:"/docs/docusaurus/customization/add-disqus-to-docusaurus-doc/"}},s={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u89e3\u6cd5",id:"\u89e3\u6cd5",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u6700\u8fd1\u5728\u512a\u5316\u7db2\u7ad9 SEO \u7684\u904e\u7a0b\u4e2d\uff0c\u7121\u610f\u9593\u770b\u5230 Google \u641c\u5c0b\u4e2d\u5fc3\u7684\u4e00\u6bb5\u6587\u5b57\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u5e0c\u671b\u500b\u4eba\u5167\u5bb9\u66f4\u6709\u6a5f\u6703\u986f\u793a\u5728\u63a2\u7d22\u5c08\u5340\u4e0a\uff0c\u5efa\u8b70\u60a8\u63a1\u53d6\u4e0b\u5217\u505a\u6cd5\uff1a"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u7db2\u9801\u6a19\u984c\u529b\u6c42\u50b3\u9054\u5167\u5bb9\u7cbe\u9ad3\uff0c\u4e0d\u8ffd\u6c42\u8a98\u990c\u5f0f\u9ede\u64ca\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u5167\u5bb9\u4e2d\u52a0\u5165\u5438\u5f15\u4eba\u7684\u9ad8\u756b\u8cea\u5716\u7247\uff0c\u7279\u5225\u662f\u8f03\u53ef\u80fd\u5f9e\u63a2\u7d22\u5c08\u5340\u7522\u751f\u9020\u8a2a\u6b21\u6578\u7684\u5927\u578b\u5716\u7247\uff0c\u5c24\u70ba\u9996\u9078\u3002\u5927\u578b\u5716\u7247\u7684\u5bec\u5ea6\u81f3\u5c11\u8981\u6709 1,200 \u50cf\u7d20\uff0c\u4e26\u900f\u904e max-image-preview:large \u8a2d\u5b9a\u6216 AMP \u683c\u5f0f\u986f\u793a\u3002\u8acb\u907f\u514d\u4ee5\u7db2\u7ad9\u6a19\u8a8c\u505a\u70ba\u5716\u7247\u3002"))),(0,o.kt)("p",null,"\u54a6!? \u539f\u4f86\u6709\u5716\u9664\u4e86\u6709\u771f\u76f8\uff0c\u9084\u53ef\u4ee5\u63d0\u5347 SEO!?"),(0,o.kt)("p",null,"\u4e0d\u904e\uff0cmax-image-preview \u9019\u500b meta tag \u7684\u9810\u8a2d\u503c\u662f standard\uff0c\u4e0d\u662f large \u554a~"),(0,o.kt)("p",null,"\u53ea\u597d\u518d\u554f\u554f Google \u5927\u795e\u6709\u6c92\u6709\u61f6\u4eba\u5305\u3002"),(0,o.kt)("p",null,"\u7d50\u679c\u9084\u771f\u7684\u8b93\u6211\u627e\u5230\u4e00\u7bc7\u6587\u7ae0\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2021/10/18/docusaurus-meta-tags-and-google-discover",title:"Docusaurus, meta tags and Google Discover"},"Docusaurus, meta tags and Google Discover")),(0,o.kt)("p",null,"\u539f\u4f86\u65e9\u5c31\u6709\u9ad8\u624b\u767c\u73fe\uff0c\u800c\u4e14\u89e3\u6c7a\u4e86\u9019\u500b\u554f\u984c\u3002"),(0,o.kt)("p",null,"\u9019\u7bc7\u5c31\u7c21\u55ae\u8a18\u9304\u4e00\u4e0b\u4f5c\u6cd5\u3002"),(0,o.kt)("h2",{id:"\u89e3\u6cd5"},"\u89e3\u6cd5"),(0,o.kt)("p",null,"\u539f\u4f86\u53ea\u9700\u8981\u5728 docusaurus.config.js \u4e2d\u52d5\u4e00\u4e9b\u624b\u8173\uff0c\u5c31\u53ef\u4ee5\u4e00\u6b21\u5e6b\u6240\u6709\u7684\u6587\u7ae0\u90fd\u52a0\u4e0a max-image-preview:large \u9019\u500b meta tag\u3002"),(0,o.kt)("p",null,"\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {5}',title:'"docusaurus.config.js"',"{5}":!0},"module.exports = {\n  //...\n  themeConfig: {\n    //...\n    metadata: [{ name: 'robots', content: 'max-image-preview:large' }],\n    //...\n  },\n  //...\n};\n")),(0,o.kt)("p",null,"\u5982\u679c\u53ea\u60f3\u5728\u67d0\u4e9b\u7279\u5b9a\u9801\u9762\u4e0a\u52a0\u4e0a\u9019\u500b meta tag\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528 html \u6a19\u7c64\u4f86\u5be6\u73fe\uff0c\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="test.md" {3-5}',title:'"test.md"',"{3-5}":!0},'# \u6587\u7ae0\u6a19\u984c\n\n<head>\n  <meta name="robots" content="max-image-preview:large">\n</head>\n')),(0,o.kt)("p",null,"\u5c31\u9019\u9ebc\u7c21\u55ae\uff0c\u9084\u4e0d\u5feb\u52a0\u8d77\u4f86!?"),(0,o.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/search/docs/advanced/mobile/google-discover",title:"Google \u63a2\u7d22\u548c\u60a8\u7684\u7db2\u7ad9"},"Google \u63a2\u7d22\u548c\u60a8\u7684\u7db2\u7ad9"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#max-image-preview",title:"\u6f2b\u904a\u5668\u4e2d\u7e7c\u6a19\u8a18\u3001data-nosnippet \u548c X-Robots-Tag \u898f\u683c"},"\u6f2b\u904a\u5668\u4e2d\u7e7c\u6a19\u8a18\u3001data-nosnippet \u548c X-Robots-Tag \u898f\u683c"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/seo",title:"Search engine optimization (SEO)"},"Search engine optimization (SEO)")))))}d.isMDXComponent=!0}}]);