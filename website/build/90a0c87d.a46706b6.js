(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(10),o=(n(0),n(185)),c={id:"toggle",title:"toggle",hide_title:!0,sidebar_label:"toggle"},l={id:"defaults/toggle",title:"toggle",description:"# `toggle()`",source:"@site/../docs/defaults/toggle.md",permalink:"/docs/defaults/toggle",sidebar_label:"toggle",sidebar:"docs",previous:{title:"on",permalink:"/docs/defaults/on"},next:{title:"increment",permalink:"/docs/defaults/increment"}},i=[{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[{value:"Calling <code>create.toggle</code>",id:"calling-createtoggle",children:[]},{value:"Calling <code>create(actionType).toggle</code>",id:"calling-createactiontypetoggle",children:[]}]}],p={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"toggle"},Object(o.b)("inlineCode",{parentName:"h1"},"toggle()")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"create.toggle")),"\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"create(actionType).toggle")),"\n",Object(o.b)("em",{parentName:"p"},"Appropriate leaf state: boolean")),Object(o.b)("p",null,"Returns an (action) object that the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/redux-leaves"}),"reduxLeaves")," reducer uses to update the leaf's state to ",Object(o.b)("inlineCode",{parentName:"p"},"!leafState"),"."),Object(o.b)("h2",{id:"returns"},"Returns"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"action")," ",Object(o.b)("em",{parentName:"p"},"(object)"),": an object to dispatch to the store"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { createStore } from 'redux'\nimport reduxLeaves from 'reduxLeaves'\n\nconst initialState = {\n  foo: true,\n  bar: false\n}\n\nconst [reducer, actions] = reduxLeaves(initialState)\nconst store = createStore(reducer)\n")),Object(o.b)("h3",{id:"calling-createtoggle"},"Calling ",Object(o.b)("inlineCode",{parentName:"h3"},"create.toggle")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const toggleFoo = actions.foo.create.toggle\nstore.dispatch(toggleFoo())\nconsole.log(store.getState().foo) // false\n")),Object(o.b)("h3",{id:"calling-createactiontypetoggle"},"Calling ",Object(o.b)("inlineCode",{parentName:"h3"},"create(actionType).toggle")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const toggleBar = actions.bar.create('TOGGLE_BAR').toggle\nstore.dispatch(toggleBar())\nconsole.log(store.getState().bar) // true\n")))}s.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(n),g=r,d=b["".concat(c,".").concat(g)]||b[g]||u[g]||o;return n?a.a.createElement(d,l({ref:t},p,{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);