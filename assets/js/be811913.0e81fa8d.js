"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78201],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=c(a),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},45442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},s="Lab: SQLite Basics",i={unversionedId:"foundations/language/sql/lab-sqlite-basics/index",id:"foundations/language/sql/lab-sqlite-basics/index",title:"Lab: SQLite Basics",description:"Working with Book dataset on SQLite database",source:"@site/docs/01-foundations/language/sql/lab-sqlite-basics/index.md",sourceDirName:"01-foundations/language/sql/lab-sqlite-basics",slug:"/foundations/language/sql/lab-sqlite-basics/",permalink:"/docs/foundations/language/sql/lab-sqlite-basics/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681451444,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Postgres Sales",permalink:"/docs/foundations/language/sql/lab-postgres-sales/"},next:{title:"Challenge - Yammer Advanced Analytics",permalink:"/docs/foundations/language/sql/challenges/yammer/"}},l={},c=[{value:"Notebooks",id:"notebooks",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab-sqlite-basics"},"Lab: SQLite Basics"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Working with Book dataset on SQLite database")),(0,r.kt)("p",null,"The following entity-relationship- (ER) diagram for the books database shows the database\u2019s tables and the relationships among them:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214046007-fdd1f654-bc02-4d0f-a2f9-ca6e41ab6803.png",alt:null})),(0,r.kt)("p",null,"The first compartment in each box contains the table\u2019s name, and the remaining compartments contain the table\u2019s columns. The names in italic are primary keys. A table\u2019s primary key uniquely identifies each row in the table. Every row must have a primary-key value, and that value must be unique in the table. This is known as the Rule of Entity Integrity. Again, for the author_ISBN table, the primary key is the combination of both columns\u2014this is known as a composite primary key."),(0,r.kt)("p",null,"The line between the titles and author_ISBN tables illustrates a one-to-many relationship\u2014one book can be written by many authors. The line links the primary key isbn in table titles to the corresponding foreign key in table author_ISBN. The relationships in the entity-relationship diagram illustrate that the sole purpose of the author_ISBN table is to provide a many-to-many relationship between the authors and titles tables\u2014an author can write many books, and a book can have many authors."),(0,r.kt)("h2",{id:"notebooks"},"Notebooks"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nbviewer.org/github/sparsh-ai/recohut/tree/main/docs/01-foundations/04-programming-languages/sql/lab-sqlite-basics/"},"https://nbviewer.org/github/sparsh-ai/recohut/tree/main/docs/01-foundations/04-programming-languages/sql/lab-sqlite-basics/")))}p.isMDXComponent=!0}}]);