"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,f=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,tags:["Templates","OneDesign"]},s="Base",i={unversionedId:"Tutorial - templates/oneDesign/base",id:"Tutorial - templates/oneDesign/base",title:"Base",description:"Create a file at src/pages/my-react-page.js:",source:"@site/docs/Tutorial - templates/oneDesign/base.md",sourceDirName:"Tutorial - templates/oneDesign",slug:"/Tutorial - templates/oneDesign/base",permalink:"/WebAppTemplateDoc/docs/Tutorial - templates/oneDesign/base",draft:!1,tags:[{label:"Templates",permalink:"/WebAppTemplateDoc/docs/tags/templates"},{label:"OneDesign",permalink:"/WebAppTemplateDoc/docs/tags/one-design"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Templates","OneDesign"]},sidebar:"tutorialSidebar",previous:{title:"Code structure",permalink:"/WebAppTemplateDoc/docs/Tutorial - templates/oneDesign/code-structure"},next:{title:"User Management",permalink:"/WebAppTemplateDoc/docs/Tutorial - templates/oneDesign/user-management"}},p={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"base"},"Base"),(0,a.kt)("p",null,"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,a.kt)("p",null,"A new page is now available at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."))}m.isMDXComponent=!0}}]);