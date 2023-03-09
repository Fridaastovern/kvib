"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2637],{876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(2784);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(r),m=s,d=k["".concat(l,".").concat(m)]||k[m]||c[m]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[k]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7896),s=(r(2784),r(876));const a={id:"searchbarID",title:"(!)S\xf8kefelt",description:"S\xf8kefelt som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/s\xf8kefelt",displayed_sidebar:"designsystemSidebar"},o=void 0,i={unversionedId:"designsystems/Komponenter/searchbarID",id:"designsystems/Komponenter/searchbarID",title:"(!)S\xf8kefelt",description:"S\xf8kefelt som blir brukt i Kartverket sine l\xf8sninger",source:"@site/docs/designsystems/Komponenter/searchbar.md",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/s\xf8kefelt",permalink:"/kvib/designsystem/komponenter/s\xf8kefelt",draft:!1,tags:[],version:"current",frontMatter:{id:"searchbarID",title:"(!)S\xf8kefelt",description:"S\xf8kefelt som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/s\xf8kefelt",displayed_sidebar:"designsystemSidebar"},sidebar:"designsystemSidebar",previous:{title:"(!)Nedtrekksmeny",permalink:"/kvib/designsystem/komponenter/nedtrekksmeny"},next:{title:"Slider",permalink:"/kvib/designsystem/komponenter/slider"}},l={},p=[],u={toc:p},k="wrapper";function c(e){let{components:t,...r}=e;return(0,s.kt)(k,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"OBS! Under konstruksjon:"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"}," Ikke design for dette i Figma-KVIB "))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"N\xe5v\xe6rende komponent er bygget opp av inputfelt fra KVIB, med en s\xf8keknapp (utgangspunkt i kartverket.no) inni\nfeltet "))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Ikke tatt h\xf8yde for fokus og hover-funksjoner p\xe5 hverken knapp eller inputfelt "))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Kartverket.no har enda ikke et felles design for s\xf8kefelt, men dette kommer etterhvert ")))),(0,s.kt)("hr",null),(0,s.kt)("p",null,"For \xe5 endre lengden til s\xf8kefeltet, m\xe5 det legges inn i et ",(0,s.kt)("code",null,"<div",">"),"-element, deretter kan st\xf8rrelsen endres\nved \xe5 sette bredde p\xe5 ",(0,s.kt)("code",null,"<div",">"),"-elementet."),(0,s.kt)("div",{class:"kv-searchbar__wrapper"},(0,s.kt)("div",{class:"kv-form__input__wrapper"},(0,s.kt)("input",{class:"kv-form__input",type:"text",id:"inputFieldID",placeholder:"S\xf8k..."})),(0,s.kt)("button",{class:"kv-button kv-searchbar__button"},(0,s.kt)("span",{class:"material-symbols-outlined"},"search"))),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markup"},'<div class="kv-searchbar__wrapper">\n<div class="kv-form__input__wrapper">\n    <input class="kv-form__input" type="text" id="inputFieldID" placeholder="S\xf8k..."/>\n</div>\n    <button class="kv-button kv-searchbar__button">\n        <span class="material-symbols-outlined">search</span>\n    </button>\n</div>\n')))}c.isMDXComponent=!0}}]);