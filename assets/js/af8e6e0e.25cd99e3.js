"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[322],{876:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>m});var n=l(2784);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=o(l),m=i,c=k["".concat(p,".").concat(m)]||k[m]||u[m]||r;return l?n.createElement(c,a(a({ref:t},d),{},{components:l})):n.createElement(c,a({ref:t},d))}));function m(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=l.length,a=new Array(r);a[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var o=2;o<r;o++)a[o]=l[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},9078:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=l(7896),i=(l(2784),l(876));const r={id:"inputfeltID",title:"Inputfelt",description:"Inputfelter som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/inputfelt",displayed_sidebar:"designsystemSidebar",sidebar_position:4},a=void 0,s={unversionedId:"designsystems/Komponenter/inputfeltID",id:"designsystems/Komponenter/inputfeltID",title:"Inputfelt",description:"Inputfelter som blir brukt i Kartverket sine l\xf8sninger",source:"@site/docs/designsystems/Komponenter/inputfield.md",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/inputfelt",permalink:"/kvib/designsystem/komponenter/inputfelt",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"inputfeltID",title:"Inputfelt",description:"Inputfelter som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/inputfelt",displayed_sidebar:"designsystemSidebar",sidebar_position:4},sidebar:"designsystemSidebar",previous:{title:"Avmerkingsbokser",permalink:"/kvib/designsystem/komponenter/checkbox"},next:{title:"(!)Nedtrekksmeny",permalink:"/kvib/designsystem/komponenter/nedtrekksmeny"}},p={},o=[{value:"Aktivt inputfelt",id:"aktivt-inputfelt",level:2},{value:"Deaktivert inputfelt",id:"deaktivert-inputfelt",level:2}],d={toc:o};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Inputfeltene i KVIB bruker CSS-klassen ",(0,i.kt)("code",null,".inputField"),". Denne klassen har en bredde satt til 100%, slik at bredden p\xe5 inputfeltet tilpasses ved \xe5 legge ",(0,i.kt)("code",null,"<div",">"),"-klasse ",(0,i.kt)("em",{parentName:"p"},"inputField__wrapper")," sammen med ",(0,i.kt)("code",null,"<input",">"),", ",(0,i.kt)("code",null,"<label",">"),", ",(0,i.kt)("code",null,"<span",">")," og ",(0,i.kt)("code",null,"<small",">")," i et ",(0,i.kt)("code",null,"<div",">"),"-element med en bestemt lengde.\nFor \xe5 style ",(0,i.kt)("code",null,"<label",">")," og ",(0,i.kt)("code",null,"<small",">"),"-elementet, skal egne ",(0,i.kt)("a",{parentName:"p",href:"/kvib/designsystems/designtokens/typografi#label"},"CSS-klasser fra ",(0,i.kt)("em",{parentName:"a"},"Typografi")," benyttes.")),(0,i.kt)("h2",{id:"aktivt-inputfelt"},"Aktivt inputfelt"),(0,i.kt)("p",null,"Under er et eksempel p\xe5 et aktivt inputfelt. Brukeren skal f\xe5 feilmelding dersom feil input mottas, samtidig som utseende skal endres til \xe5 v\xe6re slik som nederste inputfeltet.\nDette kan l\xf8ses med blant annet Javascript. Det er forel\xf8pig ingen eksempelkode p\xe5 dette i KVIB."),(0,i.kt)("div",{class:"kv-form__input__wrapper"},(0,i.kt)("label",{class:"label label--sml",for:"inputFieldID"},"Skriv heia"),(0,i.kt)("input",{class:"kv-form__input",type:"text",id:"inputFieldID",placeholder:"Aktivt tekstfelt"})),(0,i.kt)("br",null),(0,i.kt)("div",{class:"kv-form__input__wrapper"},(0,i.kt)("label",{class:"label label--sml",for:"invalidInputFieldID"},"Skriv heia"),(0,i.kt)("input",{class:"kv-form__input",type:"text",id:"invalidInputFieldID",placeholder:"Feilmelding",required:!0}),(0,i.kt)("span",{class:"kv-exclamation"},(0,i.kt)("i",{class:"material-symbols-outlined"},"exclamation")),(0,i.kt)("small",{class:"kv-form__input__helper__text detail detail--sml"},"Feilmelding tekst")),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<div class="kv-form__input__wrapper">\n    <label class="label label--sml" for="inputFieldID">Skriv heia</label>\n    <input class="kv-form__input" type="text" id="inputFieldID" placeholder="Aktivt tekstfelt"/>\n</div>\n\n<div class="kv-form__input__wrapper">\n    <label class="label label--sml" for="invalidInputFieldID">Skriv heia</label>\n    <input class="kv-form__input" type="text" id="invalidInputFieldID" placeholder="Feilmelding" required/>\n    <span class="kv-exclamation"><i class="material-symbols-outlined">exclamation</i></span>\n    <small class="kv-form__input__helper__text detail detail--sml">Feilmelding tekst</small>\n</div>\n')),(0,i.kt)("h2",{id:"deaktivert-inputfelt"},"Deaktivert inputfelt"),(0,i.kt)("p",null,"Her er et eksempel p\xe5 et deaktivert inputfelt, b\xe5de med og uten hjelpetekst."),(0,i.kt)("div",{class:"kv-form__input__wrapper"},(0,i.kt)("label",{class:"label label--sml",for:"disabledInputFieldText"},"Skriv heia"),(0,i.kt)("input",{class:"kv-form__input",type:"text",id:"disabledInputFieldText",placeholder:"Jeg er deaktivert",disabled:!0})),(0,i.kt)("br",null),(0,i.kt)("div",{class:"kv-form__input__wrapper"},(0,i.kt)("label",{class:"label label--sml",for:"disabledInputFieldNoText"},"Skriv heia"),(0,i.kt)("input",{class:"kv-form__input",type:"text",id:"disabledInputFieldNoText",disabled:!0})),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<div class="kv-form__input__wrapper">\n     <label class="label label--sml" for="disabledInputFieldText">Skriv heia</label>\n    <input class="kv-form__input" type="text" id="disabledInputFieldText" placeholder="Jeg er deaktivert" disabled/>\n</div>\n\n<div class="kv-form__input__wrapper">\n     <label class="label label--sml" for="disabledInputFieldNoText">Skriv heia</label>\n    <input class="kv-form__input" type="text" id="disabledInputFieldNoText" disabled/>\n</div>\n')))}u.isMDXComponent=!0}}]);