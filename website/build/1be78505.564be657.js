(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{182:function(e,a,t){"use strict";t.r(a);t(197),t(209);var n=t(0),l=t.n(n),r=t(185),c=t(187),i=t(62),o=t(190),s=(t(28),t(73),t(72),t(186)),u=t.n(s),m=t(188),d=t(140),b=t.n(d);function f(e){var a=e.item,t=e.onItemClick,r=e.collapsible,c=a.items,i=a.href,o=a.label,s=a.type,d=Object(n.useState)(a.collapsed),b=d[0],p=d[1],h=Object(n.useState)(null),v=h[0],E=h[1];a.collapsed!==v&&(E(a.collapsed),p(a.collapsed));var k=Object(n.useCallback)((function(e){e.preventDefault(),p((function(e){return!e}))}));switch(s){case"category":return c.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":b}),key:o},l.a.createElement("a",{className:u()("menu__link",{"menu__link--sublist":r,"menu__link--active":r&&!a.collapsed}),href:"#!",onClick:r?k:void 0},o),l.a.createElement("ul",{className:"menu__list"},c.map((function(e){return l.a.createElement(f,{key:e.label,item:e,onItemClick:t,collapsible:r})}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(m.a,{activeClassName:"menu__link--active",className:"menu__link",exact:!0,to:i,onClick:t},o))}}var p=function(e){var a=Object(n.useState)(!1),t=a[0],r=a[1],c=e.docsSidebars,i=e.location,o=e.sidebar,s=e.sidebarCollapsible;if(!o)return null;var m=c[o];if(!m)throw new Error('Cannot find the sidebar "'+o+'" in the sidebar config!');return s&&m.forEach((function(e){return function e(a,t){var n=a.items,l=a.href;switch(a.type){case"category":var r=n.map((function(a){return e(a,t)})).filter((function(e){return e})).length>0;return a.collapsed=!r,r;case"link":default:return l===t.pathname.replace(/\/$/,"")}}(e,i)})),l.a.createElement("div",{className:b.a.sidebar},l.a.createElement("div",{className:u()("menu","menu--responsive",{"menu--show":t})},l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){r(!t)}},t?l.a.createElement("span",{className:u()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},m.map((function(e){return l.a.createElement(f,{key:e.label,item:e,onItemClick:function(){r(!1)},collapsible:s})})))))},h=t(199),v=t(200),E=t(38),k=t(144),_=t.n(k);a.default=function(e){var a,t,n=e.route,s=e.docsMetadata,u=e.location,m=s.permalinkToSidebar,d=s.docsSidebars,b=s.version,f=m[u.pathname.replace(/\/$/,"")],k=Object(c.a)().siteConfig,w=(k=void 0===k?{}:k).themeConfig,N=(void 0===w?{}:w).sidebarCollapsible,C=void 0===N||N;return a=n.routes,t=u.pathname,a.some((function(e){return Object(E.c)(t,e)}))?l.a.createElement(o.a,{version:b},l.a.createElement("div",{className:_.a.docPage},f&&l.a.createElement("div",{className:_.a.docSidebarContainer},l.a.createElement(p,{docsSidebars:d,location:u,sidebar:f,sidebarCollapsible:C})),l.a.createElement("main",{className:_.a.docMainContainer},l.a.createElement(r.a,{components:h.a},Object(i.a)(n.routes))))):l.a.createElement(v.default,e)}},200:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(190);a.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},209:function(e,a,t){"use strict";var n=t(8),l=t(39)(3);n(n.P+n.F*!t(21)([].some,!0),"Array",{some:function(e){return l(this,e,arguments[1])}})}}]);