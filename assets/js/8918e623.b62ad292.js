"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33994],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},23379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},s="Data Vault Modeling",i={unversionedId:"data-modeling/data-vault-modeling",id:"data-modeling/data-vault-modeling",title:"Data Vault Modeling",description:"A hybrid between 3NF and dimensional modeling, the Data Vault model is much closer to 3NF than to the dimensional model. It tries to keep the best features of 3NF, such as ease of querying highly granular, historical data, and still restructures the data into new types of tables, such as satellites, links, hubs, bridges, and PITs. A Data Vault is a more recent data modeling design pattern used to build data warehouses for enterprise-scale analytics compared to Kimball and Inmon methods. Data Vaults organize data into three different types:  hubs ,  links , and  satellites . Hubs represent core business entities, links represent relationships between hubs, and satellites store attributes about hubs or links. Data Vault focuses on agile data warehouse development where scalability, data integration/ETL and development speed are important.",source:"@site/docs/04-data-modeling/data-vault-modeling.md",sourceDirName:"04-data-modeling",slug:"/data-modeling/data-vault-modeling",permalink:"/docs/data-modeling/data-vault-modeling",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Dimensional Modeling",permalink:"/docs/data-modeling/dimensional-modeling"},next:{title:"Steps of Building Data Models",permalink:"/docs/data-modeling/data-modeling-steps"}},l={},d=[],u={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-vault-modeling"},"Data Vault Modeling"),(0,r.kt)("p",null,"A hybrid between 3NF and dimensional modeling, the Data Vault model is much closer to 3NF than to the dimensional model. It tries to keep the best features of 3NF, such as ease of querying highly granular, historical data, and still restructures the data into new types of tables, such as satellites, links, hubs, bridges, and PITs. A ",(0,r.kt)("a",{parentName:"p",href:"https://www.databricks.com/glossary/data-vault"},"Data Vault")," is a more recent data modeling design pattern used to build data warehouses for enterprise-scale analytics compared to Kimball and Inmon methods. Data Vaults organize data into three different types: ",(0,r.kt)("strong",{parentName:"p"}," hubs")," ,  ",(0,r.kt)("strong",{parentName:"p"},"links")," , and  ",(0,r.kt)("strong",{parentName:"p"},"satellites")," . Hubs represent core business entities, links represent relationships between hubs, and satellites store attributes about hubs or links. Data Vault focuses on agile data warehouse development where scalability, data integration/ETL and development speed are important."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/216759991-593de2e9-2777-4ba1-8915-1674b97cbf37.png",alt:"data-vault-datamodel"})))}c.isMDXComponent=!0}}]);