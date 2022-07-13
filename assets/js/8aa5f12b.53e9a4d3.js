"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[345],{3905:(e,n,r)=>{r.d(n,{Zo:()=>k,kt:()=>b});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},k=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,k=a(e,["components","mdxType","originalType","parentName"]),d=c(r),b=s,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return r?t.createElement(m,i(i({ref:n},k),{},{components:r})):t.createElement(m,i({ref:n},k))}));function b(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5348:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(7462),s=(r(7294),r(3905));const o={id:"checkboxID",title:"Avmerkningsbokser",description:"Avmerkningsbokser",slug:"/designsystem/komponenter/checkbox",displayed_sidebar:"designsystemSidebar",sidebar_position:2},i=void 0,a={unversionedId:"designsystems/Komponenter/checkboxID",id:"designsystems/Komponenter/checkboxID",title:"Avmerkningsbokser",description:"Avmerkningsbokser",source:"@site/docs/designsystems/Komponenter/checkbox.mdx",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/checkbox",permalink:"/kvib/designsystem/komponenter/checkbox",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"checkboxID",title:"Avmerkningsbokser",description:"Avmerkningsbokser",slug:"/designsystem/komponenter/checkbox",displayed_sidebar:"designsystemSidebar",sidebar_position:2},sidebar:"designsystemSidebar",previous:{title:"Ikoner",permalink:"/kvib/designsystems/Design Tokens/designsystems/designtokens/ikoner"},next:{title:"Sliderknapp",permalink:"/kvib/designsystem/komponenter/sliderbutton"}},l={},c=[{value:"Normal avkryssningsboks",id:"normal-avkryssningsboks",level:2},{value:"Feilmelding avkryssningsboks",id:"feilmelding-avkryssningsboks",level:2}],k={toc:c};function p(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},k,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"En avmerkningsboks gir brukeren muligheten for flervalg. Avkryssningsbokser skal f\xf8lges av en prim\xe6rknapp. Feilmelding avkrysningsboks skal brukes for \xe5 visualisere feil i avkrysningen, dersom dette har skjedd (eks. ikke krysset av for et alternativ)."),(0,s.kt)("h2",{id:"normal-avkryssningsboks"},"Normal avkryssningsboks"),(0,s.kt)("p",null,"Avkryssningsboks f\xe5r opp fokus rundt n\xe5r de velges med tastaturet."),(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_1"}),(0,s.kt)("label",{for:"checkbox_1"},"Input tekst")),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},'<div class="checkbox">\n    <input type="checkbox" id="checkbox_1"/>\n    <label for="checkbox_1">Input tekst</label>\n</div>\n')),(0,s.kt)("h2",{id:"feilmelding-avkryssningsboks"},"Feilmelding avkryssningsboks"),(0,s.kt)("p",null,"F\xf8lgende Avkryssningsboks f\xe5r feilmeldings farge hvis et av alternativene m\xe5 v\xe6re valgt f\xf8r bruker kan g\xe5 videre."),(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_2",required:!0}),(0,s.kt)("label",{for:"checkbox_2"},"Input tekst")),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},'<div class="checkbox">\n    <input type="checkbox" id="checkbox_2" required/>\n    <label for="checkbox_2">Input tekst</label>\n</div>\n')))}p.isMDXComponent=!0}}]);