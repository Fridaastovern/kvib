"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8965],{876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(2784);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),k=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=k(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=k(r),d=s,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var k=2;k<i;k++)o[k]=r[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>k});var n=r(7896),s=(r(2784),r(876));const i={id:"checkboxID",title:"Avmerkingsbokser",description:"Avmerkingsbokser som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/checkbox",displayed_sidebar:"designsystemSidebar",sidebar_position:2},o=void 0,a={unversionedId:"designsystems/Komponenter/checkboxID",id:"designsystems/Komponenter/checkboxID",title:"Avmerkingsbokser",description:"Avmerkingsbokser som blir brukt i Kartverket sine l\xf8sninger",source:"@site/docs/designsystems/Komponenter/checkbox.md",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/checkbox",permalink:"/kvib/designsystem/komponenter/checkbox",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"checkboxID",title:"Avmerkingsbokser",description:"Avmerkingsbokser som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/checkbox",displayed_sidebar:"designsystemSidebar",sidebar_position:2},sidebar:"designsystemSidebar",previous:{title:"Komponenter",permalink:"/kvib/designsystem/Komponenter"},next:{title:"Inputfelt",permalink:"/kvib/designsystem/komponenter/inputfelt"}},l={},k=[{value:"Normal avmerkingsboks",id:"normal-avmerkingsboks",level:2},{value:"Feilmelding avmerkingsboks",id:"feilmelding-avmerkingsboks",level:2}],c={toc:k};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"OBS! NVDA har en bug som gj\xf8r at skjermleseren ikke klarer \xe5 lese av riktig state p\xe5 avmerkingsboksen. Den er derfor testet med Chromevox der riktig state blir lest"))),(0,s.kt)("hr",null),(0,s.kt)("p",null,"En avmerkingsboks gir brukeren muligheten til flervalg. Avmerkingsbokser skal f\xf8lges av en prim\xe6rknapp. Feilmelding avmerkingsboks skal brukes for \xe5 visualisere feil i avmerkingen, dersom dette har skjedd (f.eks. ikke krysset av for et alternativ)."),(0,s.kt)("p",null,"For \xe5 style ",(0,s.kt)("code",null,"<label",">"),"-elementet, skal egne\n",(0,s.kt)("a",{parentName:"p",href:"/kvib/designsystems/designtokens/typografi#label"},"CSS-klasser fra ",(0,s.kt)("em",{parentName:"a"},"Typografi")," benyttes.")),(0,s.kt)("h2",{id:"normal-avmerkingsboks"},"Normal avmerkingsboks"),(0,s.kt)("p",null,"Avmerkingsboksen f\xe5r fokus n\xe5r den velges med tastaturet."),(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_1"}),(0,s.kt)("label",{class:"detail detail--sml",for:"checkbox_1"},"Input tekst")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},'<div class="checkbox">\n    <input type="checkbox" id="checkbox_1"/>\n    <label class="detail detail--sml" for="checkbox_1">Input tekst</label>\n</div>\n')),(0,s.kt)("h2",{id:"feilmelding-avmerkingsboks"},"Feilmelding avmerkingsboks"),(0,s.kt)("p",null,"F\xf8lgende avmerkingsboks f\xe5r feilmeldingsfarge hvis ett av alternativene m\xe5 v\xe6re valgt f\xf8r bruker kan g\xe5 videre."),(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_2",required:!0}),(0,s.kt)("label",{class:"detail detail--sml",for:"checkbox_2"},"Input tekst")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},'<div class="checkbox">\n    <input type="checkbox" id="checkbox_2" required/>\n    <label class="detail detail--sml" for="checkbox_2">Input tekst</label>\n</div>\n')))}m.isMDXComponent=!0}}]);