"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[2345],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=t.createContext({}),k=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=k(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),b=k(r),m=s,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return r?t.createElement(d,o(o({ref:n},c),{},{components:r})):t.createElement(d,o({ref:n},c))}));function m(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=b;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var k=2;k<i;k++)o[k]=r[k];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5348:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>k});var t=r(7462),s=(r(7294),r(3905));const i={id:"checkboxID",title:"Avmerkningsbokser",description:"Oversikt over avmerkningsbokser som blir brukt i Kartverket sine l\xf8sninger.",slug:"/designsystem/komponenter/checkbox",displayed_sidebar:"designsystemSidebar",sidebar_position:2},o=void 0,a={unversionedId:"designsystems/Komponenter/checkboxID",id:"designsystems/Komponenter/checkboxID",title:"Avmerkningsbokser",description:"Oversikt over avmerkningsbokser som blir brukt i Kartverket sine l\xf8sninger.",source:"@site/docs/designsystems/Komponenter/checkbox.mdx",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/checkbox",permalink:"/kvib/designsystem/komponenter/checkbox",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"checkboxID",title:"Avmerkningsbokser",description:"Oversikt over avmerkningsbokser som blir brukt i Kartverket sine l\xf8sninger.",slug:"/designsystem/komponenter/checkbox",displayed_sidebar:"designsystemSidebar",sidebar_position:2},sidebar:"designsystemSidebar",previous:{title:"Komponenter",permalink:"/kvib/designsystem/Komponenter"},next:{title:"Inputfelt",permalink:"/kvib/designsystem/komponenter/inputfelt"}},l={},k=[{value:"Normal avkryssningsboks",id:"normal-avkryssningsboks",level:2},{value:"Feilmelding avkryssningsboks",id:"feilmelding-avkryssningsboks",level:2}],c={toc:k};function p(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"En avmerkningsboks gir brukeren muligheten til flervalg. Avmerkningsbokser skal f\xf8lges av en prim\xe6rknapp. Feilmelding avkrysningsboks skal brukes for \xe5 visualisere feil i avkrysningen, dersom dette har skjedd (f.eks. ikke krysset av for et alternativ)."),(0,s.kt)("p",null,"For \xe5 style <label",">","-elementet, skal egne\n",(0,s.kt)("a",{parentName:"p",href:"/kvib/designsystems/designtokens/typografi#label"},"CSS-klasser fra ",(0,s.kt)("em",{parentName:"a"},"Typografi")," benyttes.")),(0,s.kt)("h2",{id:"normal-avkryssningsboks"},"Normal avkryssningsboks"),(0,s.kt)("p",null,"Avkryssningsboks f\xe5r opp fokus rundt n\xe5r de velges med tastaturet."),(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_1"}),(0,s.kt)("label",{for:"checkbox_1"},"Input tekst")),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},'<div class="checkbox">\n    <input type="checkbox" id="checkbox_1"/>\n    <label for="checkbox_1">Input tekst</label>\n</div>\n')),(0,s.kt)("h2",{id:"feilmelding-avkryssningsboks"},"Feilmelding avkryssningsboks"),(0,s.kt)("p",null,"F\xf8lgende avkryssningsboks f\xe5r feilmeldingsfarge hvis ett av alternativene m\xe5 v\xe6re valgt f\xf8r bruker kan g\xe5 videre."),(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_2",required:!0}),(0,s.kt)("label",{for:"checkbox_2"},"Input tekst")),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},'<div class="checkbox">\n    <input type="checkbox" id="checkbox_2" required/>\n    <label for="checkbox_2">Input tekst</label>\n</div>\n')))}p.isMDXComponent=!0}}]);