"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[3042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,b=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return n?r.createElement(b,l(l({ref:t},m),{},{components:n})):r.createElement(b,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"installationID",title:"Implementering av KVIB",description:"Ta i bruk Kvib",slug:"/omKvib/implementering",displayed_sidebar:"OmKvibSidebar"},l=void 0,o={unversionedId:"omKvib/installationID",id:"omKvib/installationID",title:"Implementering av KVIB",description:"Ta i bruk Kvib",source:"@site/docs/omKvib/installation.md",sourceDirName:"omKvib",slug:"/omKvib/implementering",permalink:"/kvib/omKvib/implementering",draft:!1,tags:[],version:"current",frontMatter:{id:"installationID",title:"Implementering av KVIB",description:"Ta i bruk Kvib",slug:"/omKvib/implementering",displayed_sidebar:"OmKvibSidebar"},sidebar:"OmKvibSidebar",previous:{title:"Om KVIB",permalink:"/kvib/"},next:{title:"Utvide KVIB",permalink:"/kvib/utvideKvib"}},p={},s=[{value:"Installasjon av KVIB-CSS GitHub Package",id:"installasjon-av-kvib-css-github-package",level:2},{value:"GitHub",id:"github",level:3},{value:"npm",id:"npm",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installasjon-av-kvib-css-github-package"},"Installasjon av KVIB-CSS GitHub Package"),(0,a.kt)("h3",{id:"github"},"GitHub"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Opprett et Personal Access Token (PAT).\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Se Github dokumentasjon for \xe5 opprette PAT")),(0,a.kt)("li",{parentName:"ol"},"Autoriser PAT for bruk med organisasjonen. ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on"},"Se Github dokumentasjon for PAT autentisering"))),(0,a.kt)("h3",{id:"npm"},"npm"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Opprett en ",(0,a.kt)("em",{parentName:"li"},".npmrc")," fil i prosjektmappen og legg til f\xf8lgende:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"@kartverket:registry=https://npm.pkg.github.com\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"I prosjektmappen som inneholder ",(0,a.kt)("em",{parentName:"li"},".npmrc")," filen, logg p\xe5 npm med GitHub brukernavn og PAT ved \xe5 bruke f\xf8lgende kommando:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"npm login --scope=@kartverket --registry=https://npm.pkg.github.com\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Kj\xf8r npm install. Biblioteket er n\xe5 klart til bruk.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"npm install\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Importer eller legg til link til biblioteket i CSS eller HTML filen i prosjektet.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I HTML fil:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'<link rel="stylesheet" href="PATH/node_modules/@kartverket/kvib/main.css">\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I CSS fil:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"@import 'PATH/node_modules/@kartverket/kvib/main.css';\n")))}u.isMDXComponent=!0}}]);