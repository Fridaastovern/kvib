"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[3308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),o=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=o(n),m=i,c=k["".concat(p,".").concat(m)]||k[m]||u[m]||r;return n?l.createElement(c,a(a({ref:t},d),{},{components:n})):l.createElement(c,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var o=2;o<r;o++)a[o]=n[o];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var l=n(7462),i=(n(7294),n(3905));const r={id:"inputfeltID",title:"Inputfelt",description:"Oversikt over inputfelt som blir brukt i Kartverket sine l\xf8sninger.",slug:"/designsystem/komponenter/inputfelt",displayed_sidebar:"designsystemSidebar",sidebar_position:4},a=void 0,s={unversionedId:"designsystems/Komponenter/inputfeltID",id:"designsystems/Komponenter/inputfeltID",title:"Inputfelt",description:"Oversikt over inputfelt som blir brukt i Kartverket sine l\xf8sninger.",source:"@site/docs/designsystems/Komponenter/inputfield.mdx",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/inputfelt",permalink:"/kvib/designsystem/komponenter/inputfelt",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"inputfeltID",title:"Inputfelt",description:"Oversikt over inputfelt som blir brukt i Kartverket sine l\xf8sninger.",slug:"/designsystem/komponenter/inputfelt",displayed_sidebar:"designsystemSidebar",sidebar_position:4},sidebar:"designsystemSidebar",previous:{title:"Avmerkningsbokser",permalink:"/kvib/designsystem/komponenter/checkbox"},next:{title:"Nedtrekksmeny",permalink:"/kvib/designsystem/komponenter/nedtrekksmeny"}},p={},o=[{value:"Aktivt inputfelt",id:"aktivt-inputfelt",level:2},{value:"Deaktivert inputfelt",id:"deaktivert-inputfelt",level:2}],d={toc:o};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Inputfeltene i KVIB bruker CSS-klassen ",(0,i.kt)("em",{parentName:"p"},".input"),". Denne klassen har en bredde satt til 100%, slik at bredden p\xe5 inputfeltet tilpasses ved \xe5 legge <input",">","-og <label",">","-elementene  i f.eks. et <div",">","-element med en bestemt lengde.\nFor \xe5 style <label",">","-elementet, skal egne ",(0,i.kt)("a",{parentName:"p",href:"/kvib/designsystems/designtokens/typografi#label"},"CSS-klasser fra ",(0,i.kt)("em",{parentName:"a"},"Typografi")," benyttes.")),(0,i.kt)("h2",{id:"aktivt-inputfelt"},"Aktivt inputfelt"),(0,i.kt)("p",null,"Under er et eksempel p\xe5 et aktivt inputfelt. Brukeren skal f\xe5 feilmelding dersom det gis feil input, samtidig som utseende skal endres til \xe5 v\xe6re slik som nederste inputfeltet viser.\nDette kan eksempelsvis l\xf8ses med Javascript. Det er forel\xf8pig ingen eksempelkode p\xe5 dette i KVIB. I eksempelet under er det ikke lagt til styling av det \xf8verste <div",">","-elementet."),(0,i.kt)("div",null,(0,i.kt)("label",{class:"label label--sml input-label",for:"textField"},"Skriv heia "),(0,i.kt)("input",{class:"input",type:"text",id:"textField",placeholder:"Aktivt tekstfelt"})),(0,i.kt)("div",null,(0,i.kt)("label",{class:"label label--sml input-label input-label--error",for:"textFieldInvalid"},"Skriv heia "),(0,i.kt)("div",{class:"inputError-container"},(0,i.kt)("input",{class:"input input__error",type:"text",id:"textFieldInvalid",placeholder:"Feilmelding",required:!0}),(0,i.kt)("span",{class:"material-symbols-outlined exclamation"},"exclamation"))),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<div>\n    <label class="label label--sml input-label" for="textField">Skriv heia </label>\n    <input class="input" type="text" id="textField" placeholder="Aktivt tekstfelt"/>\n</div>\n\n\n<div>\n    <label class="label label--sml input-label input-label--error" for="textFieldInvalid">Skriv heia </label>\n    <div class="inputError-container">\n        <input class="input input__error" type="text" id="textFieldInvalid" placeholder="Feilmelding" required/>\n        <span class="material-symbols-outlined exclamation">exclamation</span>\n    </div>\n</div>\n\n')),(0,i.kt)("h2",{id:"deaktivert-inputfelt"},"Deaktivert inputfelt"),(0,i.kt)("p",null,"Her er et eksempel p\xe5 et deaktivert inputfelt, b\xe5de med og uten hjelpetekst."),(0,i.kt)("div",null,(0,i.kt)("label",{class:"label label--sml input-label",for:"disabledTextField"},"Skriv heia "),(0,i.kt)("input",{class:"input input__disabled",type:"text",id:"disabledTextField",disabled:!0})),(0,i.kt)("div",null,(0,i.kt)("label",{class:"label label--sml input-label",for:"disabledTextField"},"Skriv heia  "),(0,i.kt)("input",{class:"input input__disabled",type:"text",id:"disabledTextField",disabled:!0,placeholder:"Jeg er deaktivert"})),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<div>\n<label class="label label--sml input-label input-label--error" for="textFieldInvalid">Skriv heia </label>\n<input class="input input__error" type="text" id="textFieldInvalid" placeholder="Feilmelding" required/>\n<span class="material-symbols-outlined exclamation">exclamation</span>\n</div>\n')))}u.isMDXComponent=!0}}]);