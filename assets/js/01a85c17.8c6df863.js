"use strict";(self.webpackChunkouch1978_at_github=self.webpackChunkouch1978_at_github||[]).push([[4013],{78665:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(63366),r=a(67294),l=a(86010),c=a(32600),i=a(39960),s="sidebar_a9qW",m="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",E=a(95999);function b(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,E.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var v=["sidebar","toc","children"];function f(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,n.Z)(e,v),m=t&&t.items.length>0;return r.createElement(c.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(b,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},a))))}},70094:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(67294),r=a(78665),l=a(73306),c=a(5979),i=a(14739),s=a(86010);function m(e){var t=e.tags,a=e.sidebar,m=(0,c.MA)();return n.createElement(c.FG,{className:(0,s.Z)(c.kM.wrapper.blogPages,c.kM.page.blogTagsListPage)},n.createElement(c.d,{title:m}),n.createElement(i.Z,{tag:"blog_tags_list"}),n.createElement(r.Z,{sidebar:a},n.createElement("h1",null,m),n.createElement(l.Z,{tags:Object.values(t)})))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r=a(86010),l=a(39960),c="tag_hD8n",i="tagRegular_D6E_",s="tagWithCount_i0QQ";function m(e){var t=e.permalink,a=e.name,m=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(c,m?s:i)},a,m&&n.createElement("span",null,m))}},73306:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(7774),l=a(5979),c="tag_Shcx";function i(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(r.Z,e))}))),n.createElement("hr",null))}function s(e){var t=e.tags,a=(0,l.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(i,{key:e.letter,letterEntry:e})})))}}}]);