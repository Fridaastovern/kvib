"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[8977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=i,k=b["".concat(s,".").concat(m)]||b[m]||u[m]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"installationID",title:"Ta i bruk Kvib",description:"Ta i bruk Kvib",slug:"/omKvib/installation",displayed_sidebar:"OmKvibSidebar",sidebar_label:"Ta i bruk Kvib",sidebar_position:2},o=void 0,l={unversionedId:"omKvib/installationID",id:"omKvib/installationID",title:"Ta i bruk Kvib",description:"Ta i bruk Kvib",source:"@site/docs/omKvib/installation.mdx",sourceDirName:"omKvib",slug:"/omKvib/installation",permalink:"/kvib/omKvib/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"installationID",title:"Ta i bruk Kvib",description:"Ta i bruk Kvib",slug:"/omKvib/installation",displayed_sidebar:"OmKvibSidebar",sidebar_label:"Ta i bruk Kvib",sidebar_position:2},sidebar:"OmKvibSidebar",previous:{title:"Om KVIB",permalink:"/kvib/"},next:{title:"Utvide Kvib",permalink:"/kvib/omKvib/expandKvib"}},s={},p=[{value:"Installasjon av KVIB-CSS Github Package",id:"installasjon-av-kvib-css-github-package",level:2},{value:"Github",id:"github",level:3},{value:"npm",id:"npm",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installasjon-av-kvib-css-github-package"},"Installasjon av KVIB-CSS Github Package"),(0,i.kt)("h3",{id:"github"},"Github"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Opprett et Personal Access Token (PAT).\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Se Github dokumentasjon for \xe5 opprette PAT")),(0,i.kt)("li",{parentName:"ol"},"Autoriser PAT for bruk med organisasjonen. ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on"},"Se Github dokumentasjon for PAT autentisering"))),(0,i.kt)("h3",{id:"npm"},"npm"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Opprett et .npmrc fil i prosjekt mappen og legg til f\xf8lgende:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"@kartverket:registry=https://npm.pkg.github.com\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"I prosjekt mappen som inneholder .npmrc filen, logg p\xe5 npm med Github brukernavn og PAT ved \xe5 bruke f\xf8lgende kommando:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm login --scope=@kartverket --registry=https://npm.pkg.github.com\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Skriv npm install og da skal biblioteket v\xe6re klar til bruk.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install\n")))}u.isMDXComponent=!0}}]);