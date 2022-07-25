"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[3928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),k=p(n),m=a,c=k["".concat(l,".").concat(m)]||k[m]||i[m]||o;return n?r.createElement(c,u(u({ref:t},b),{},{components:n})):r.createElement(c,u({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var p=2;p<o;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>i,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"bl\xe5knappID",title:"Bl\xe5 knapper",description:"Bl\xe5 kanpper (sekund\xe6rsett)"},u=void 0,s={unversionedId:"designsystems/Komponenter/Knapper/bl\xe5knappID",id:"designsystems/Komponenter/Knapper/bl\xe5knappID",title:"Bl\xe5 knapper",description:"Bl\xe5 kanpper (sekund\xe6rsett)",source:"@site/docs/designsystems/Komponenter/Knapper/blueButton.mdx",sourceDirName:"designsystems/Komponenter/Knapper",slug:"/designsystems/Komponenter/Knapper/bl\xe5knappID",permalink:"/designsystems/Komponenter/Knapper/bl\xe5knappID",draft:!1,tags:[],version:"current",frontMatter:{id:"bl\xe5knappID",title:"Bl\xe5 knapper",description:"Bl\xe5 kanpper (sekund\xe6rsett)"},sidebar:"designsystemSidebar",previous:{title:"Gr\xf8nne knapper",permalink:"/designsystems/Komponenter/Knapper/gr\xf8nnknappID"},next:{title:"Knapper med ikon",permalink:"/designsystems/Komponenter/Knapper/ikonknappID"}},l={},p=[{value:"Prim\xe6rknapp",id:"prim\xe6rknapp",level:2},{value:"Sekund\xe6rknapp",id:"sekund\xe6rknapp",level:2},{value:"Terti\xe6rknapp",id:"terti\xe6rknapp",level:2}],b={toc:p};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bl\xe5 knapper (sekund\xe6rsettet) brukes i kartvisning og andre steder der det er behov for kontrast med bakgrunnsfarge.\nSekund\xe6rsettet best\xe5r av prim\xe6rknapp, sekund\xe6rknapp og terti\xe6rknapp."),(0,a.kt)("p",null,"B\xe5de prim\xe6r-, sekund\xe6r- og terti\xe6r-knappene har tre ulike st\xf8rrelser; ",(0,a.kt)("em",{parentName:"p"},"extra small"),", ",(0,a.kt)("em",{parentName:"p"},"small/medium")," og ",(0,a.kt)("em",{parentName:"p"},"large"),".\nGenerelt brukes large p\xe5 desktop, small/medium for mobil og tablets og extra small for apper og kartl\xf8sninger. "),(0,a.kt)("h2",{id:"prim\xe6rknapp"},"Prim\xe6rknapp"),(0,a.kt)("p",null,"Prim\xe6rknappen brukes for \xe5 avslutte en handling (f. eks send inn skjema). Handlingen skal skje umiddelbart etter at knappen er trykket p\xe5."),(0,a.kt)("button",{class:"button button__blue--primary button--xs"},"Extra small"),(0,a.kt)("button",{class:"button button__blue--primary button--sm"},"Small/Medium"),(0,a.kt)("button",{class:"button button__blue--primary button--l"},"Large"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<button class="button button__blue--primary button--xs">Extra small</button>\n<button class="button button__blue--primary button--sm">Small/Medium</button>\n<button class="button button__blue--primary button--l">Large</button>\n')),(0,a.kt)("h2",{id:"sekund\xe6rknapp"},"Sekund\xe6rknapp"),(0,a.kt)("p",null,'Sekund\xe6rknapper brukes til handlinger som er sekund\xe6re til hovedhensikten med siden, men fremdeles er viktige for brukerflyten p\xe5 siden.\nDette kan for eksempel v\xe6re s\xf8keknapper eller "neste steg".'),(0,a.kt)("button",{class:"button button__blue--secondary button--xs"},"Extra small"),(0,a.kt)("button",{class:"button button__blue--secondary button--sm"},"Small/Medium"),(0,a.kt)("button",{class:"button button__blue--secondary button--l"},"Large"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<button class="button button__blue--secondary button--xs">Extra small</button>\n<button class="button button__blue--secondary button--sm">Small/Medium</button>\n<button class="button button__blue--secondary button--l">Large</button>\n')),(0,a.kt)("h2",{id:"terti\xe6rknapp"},"Terti\xe6rknapp"),(0,a.kt)("p",null,"Brukes der brukeren har behov for en trykkbar lenke som ikke st\xe5r i en tekst.\nKan brukes ved siden av en prim\xe6r og sekund\xe6rknapp, men skal ikke st\xe5 alene."),(0,a.kt)("button",{class:"button button__blue--tertiary button--xs"},"Extra small"),(0,a.kt)("button",{class:"button button__blue--tertiary button--sm"},"Small/Medium"),(0,a.kt)("button",{class:"button button__blue--tertiary button--l"},"Large"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<button class="button button__blue--tertiary button--xs">Extra small</button>\n<button class="button button__blue--tertiary button--sm">Small/Medium</button>\n<button class="button button__blue--tertiary button--l">Large</button>\n')))}i.isMDXComponent=!0}}]);