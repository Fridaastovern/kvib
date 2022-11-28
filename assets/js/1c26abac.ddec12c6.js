"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2673],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,c=b["".concat(i,".").concat(d)]||b[d]||m[d]||s;return n?r.createElement(c,a(a({ref:t},p),{},{components:n})):r.createElement(c,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(7896),o=(n(2784),n(876));const s={id:"ikonknappID",sidebar_position:4,title:"Knapper med ikon",description:"Knapper med ikon"},a=void 0,l={unversionedId:"designsystems/Komponenter/Knapper/ikonknappID",id:"designsystems/Komponenter/Knapper/ikonknappID",title:"Knapper med ikon",description:"Knapper med ikon",source:"@site/docs/designsystems/Komponenter/Knapper/buttonWithIcon.md",sourceDirName:"designsystems/Komponenter/Knapper",slug:"/designsystems/Komponenter/Knapper/ikonknappID",permalink:"/kvib/designsystems/Komponenter/Knapper/ikonknappID",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"ikonknappID",sidebar_position:4,title:"Knapper med ikon",description:"Knapper med ikon"},sidebar:"designsystemSidebar",previous:{title:"Bl\xe5 knapper (sekund\xe6rsett)",permalink:"/kvib/designsystems/Komponenter/Knapper/bl\xe5knappID"},next:{title:"Disabled",permalink:"/kvib/designsystems/Komponenter/Knapper/disabledknappID"}},i={},u=[{value:"Ikon venstre",id:"ikon-venstre",level:2},{value:"Ikon h\xf8yre",id:"ikon-h\xf8yre",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Knapper som best\xe5r av tekst og ikon skal ha ikonet plassert p\xe5 venstre eller h\xf8yre side av teksten.\nEn knapp med st\xf8rrelse extra small benytter et ikon av mindre st\xf8rrelse enn de \xf8vrige knappest\xf8rrelsene, men dette endres automatisk ettersom st\xf8rrelsen settes for ",(0,o.kt)("code",null,"<button",">"),"-elementet."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/kvib/designsystems/designTokens/designsystems/designtokens/ikoner"},"Se dokumentasjonssiden for ikoner")," for \xe5 designe ",(0,o.kt)("code",null,"<span",">"),"-elementet."),(0,o.kt)("h2",{id:"ikon-venstre"},"Ikon venstre"),(0,o.kt)("button",{class:"button button__green--primary button--xs button--icon-left"},(0,o.kt)("span",{class:"material-symbols-outlined material-symbols-outlined--filled"},"favorite"),"Extra small"),(0,o.kt)("button",{class:"button button__green--primary button--sm button--icon-left"},(0,o.kt)("span",{class:"material-symbols-outlined--filled material-symbols-outlined"},"favorite"),"Small/medium"),(0,o.kt)("button",{class:"button button__green--primary button--l button--icon-left"},(0,o.kt)("span",{class:"material-symbols-outlined--filled material-symbols-outlined"},"favorite"),"Large"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<button class="button button__green--primary button--xs button--icon-left">\n    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Extra small\n</button>\n\n<button class="button button__green--primary button--sm button--icon-left">\n    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Small/medium\n</button>\n\n<button class="button button__green--primary button--l button--icon-left">\n    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Large\n</button>\n')),(0,o.kt)("h2",{id:"ikon-h\xf8yre"},"Ikon h\xf8yre"),(0,o.kt)("button",{class:"button button__green--primary button--xs button--icon-right"},"Extra small",(0,o.kt)("span",{class:"material-symbols-outlined--filled material-symbols-outlined "},"favorite")),(0,o.kt)("button",{class:"button button__green--primary button--sm button--icon-right"},"Small/medium",(0,o.kt)("span",{class:"material-symbols-outlined--filled material-symbols-outlined "},"favorite")),(0,o.kt)("button",{class:"button button__green--primary button--l button--icon-right"},"Large",(0,o.kt)("span",{class:"material-symbols-outlined--filled material-symbols-outlined"},"favorite")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<button class="button button__green--primary button--xs button--icon-right">Extra small\n    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>\n</button>\n\n<button class="button button__green--primary button--sm button--icon-right">Small/medium\n    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>\n</button>\n\n<button class="button button__green--primary button--l button--icon-right">Large\n    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>\n</button>\n')))}m.isMDXComponent=!0}}]);