"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[8930],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(n),k=s,b=d["".concat(l,".").concat(k)]||d[k]||p[k]||o;return n?r.createElement(b,a(a({ref:e},c),{},{components:n})):r.createElement(b,a({ref:e},c))}));function k(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5869:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const o={id:"histkart",title:"Historiske kart",description:"Testknapper til historiske kart"},a=void 0,i={unversionedId:"designsystems/histkart",id:"designsystems/histkart",title:"Historiske kart",description:"Testknapper til historiske kart",source:"@site/docs/designsystems/histkart-testknapper.mdx",sourceDirName:"designsystems",slug:"/designsystems/histkart",permalink:"/designsystems/histkart",draft:!1,tags:[],version:"current",frontMatter:{id:"histkart",title:"Historiske kart",description:"Testknapper til historiske kart"},sidebar:"designsystemSidebar",previous:{title:"Disabled",permalink:"/designsystems/Komponenter/Knapper/disabledknappID"}},l={},u=[{value:"Vis/Skjul",id:"visskjul",level:2},{value:"Tilh\xf8rende terti\xe6rknapper med ikon",id:"tilh\xf8rende-terti\xe6rknapper-med-ikon",level:3},{value:"Zoom",id:"zoom",level:2},{value:"S\xf8keknapp",id:"s\xf8keknapp",level:2},{value:"Kort",id:"kort",level:2}],c={toc:u};function p(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Knapper p\xe5 siden"),(0,s.kt)("h2",{id:"visskjul"},"Vis/Skjul"),(0,s.kt)("button",{class:"button button__blue--secondary button--xs"},"Vis info",(0,s.kt)("span",{class:"material-symbols-outlined button__icon--xs-left"},"chevron_right")),(0,s.kt)("button",{class:"button button__blue--secondary button--xs"},"Skjul info",(0,s.kt)("span",{class:"material-symbols-outlined button__icon--xs-left"},"chevron_left")),(0,s.kt)("button",{class:"button button__blue--secondary button--xs"},"Vis filter",(0,s.kt)("span",{class:"material-symbols-outlined button__icon--xs-right"},"chevron_left")),(0,s.kt)("button",{class:"button button__blue--secondary button--xs"},"Skjul filter",(0,s.kt)("span",{class:"material-symbols-outlined button__icon--xs-right"},"chevron_right")),(0,s.kt)("h3",{id:"tilh\xf8rende-terti\xe6rknapper-med-ikon"},"Tilh\xf8rende terti\xe6rknapper med ikon"),(0,s.kt)("button",{class:"button button__blue--tertiary button--xs"},"Fjern valgt kart",(0,s.kt)("span",{class:"material-symbols-outlined--filled material-symbols-outlined button__icon--xs-right"},"cancel")),(0,s.kt)("button",{class:"button button__blue--tertiary button--xs"},"Nullstill filter",(0,s.kt)("span",{class:"material-symbols-outlined--filled material-symbols-outlined button__icon--xs-left"},"cancel")),(0,s.kt)("h2",{id:"zoom"},"Zoom"),(0,s.kt)("p",null,"Merk at denne ikke er UU-godkjent eller sjekket av Wanni enda!"),(0,s.kt)("button",{class:"button zoom"},(0,s.kt)("span",{class:"material-symbols-outlined material-symbols-outlined--center zoom__icon-padding"},"add")),(0,s.kt)("button",{class:"button zoom"},(0,s.kt)("span",{class:"material-symbols-outlined material-symbols-outlined--center zoom__icon-padding"},"remove")),(0,s.kt)("h2",{id:"s\xf8keknapp"},"S\xf8keknapp"),(0,s.kt)("button",{class:"button searchbar"},(0,s.kt)("span",{class:"material-symbols-outlined material-symbols-outlined--center searchbar__icon-padding"},"search")),(0,s.kt)("h2",{id:"kort"},"Kort"),(0,s.kt)("div",{class:"result__content__container"},(0,s.kt)("img",{class:"result__image",src:"https://source.unsplash.com/random",alt:"random unsplash"}),(0,s.kt)("div",{class:"result__content__desc"},(0,s.kt)("h3",{class:"result__title"},"Tittel"),(0,s.kt)("span",{class:"result__desc"},"\xc5rstall"))))}p.isMDXComponent=!0}}]);