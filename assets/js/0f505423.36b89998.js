"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,g=p["".concat(i,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(g,c(c({ref:t},d),{},{components:n})):o.createElement(g,c({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},c="MongoDB",s={unversionedId:"storage/mongodb",id:"storage/mongodb",title:"MongoDB",description:"",source:"@site/docs/02-storage/mongodb.md",sourceDirName:"02-storage",slug:"/storage/mongodb",permalink:"/docs/storage/mongodb",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Apache CouchDB",permalink:"/docs/storage/apache-couchdb"},next:{title:"Lab: Getting started with Cassandra",permalink:"/docs/storage/lab-getting-started-with-cassandra/"}},i={},l=[],d={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongodb"},"MongoDB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-makefile"},'install:\n    wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu1804-x86_64-100.3.1.tgz\n    tar -xf mongodb-database-tools-ubuntu1804-x86_64-100.3.1.tgz\n    export PATH=$PATH:/home/project/mongodb-database-tools-ubuntu1804-x86_64-100.3.1/bin\n\nstart_server:\n    start_mongo\n\nconnect:\n    mongo -u <username> -p <password> --authenticationDatabase admin local\n    mongosh "mongodb+srv://cluster0.mongodb.net/myFirstDatabase" --apiVersion 1 --username admin\n\nversion:\n    db.version()\n    mongoimport --version\n    mongoexport --version\n\nlist_databases:\n    show dbs\n\ncreate_database:\n    use training\n\ncreate_collection:\n    db.createCollection("mycollection")\n\nlist_collections:\n    show collections\n\ninsert_record:\n    db.mycollection.insert({"color":"white","example":"milk"})\n\nimport_data:\n    mongoimport -u <username> --authenticationDatabase admin --db catalog --collection <collection_name> --file <filename>\n\n    mongoimport --uri "mongodb+srv://admin:@cluster0.mongodb.net/catalog?retryWrites=true&w=majority" --collection electronics --drop --file data/catalog.json\n\nexport_data:\n    mongoexport -u <username> --authenticationDatabase admin --db=catalog --collection=<collection_name> --type=csv --fields=_id,type,model --out=<filename.csv>\n')))}m.isMDXComponent=!0}}]);