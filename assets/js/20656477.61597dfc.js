"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[5743],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),s=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(d.Provider,{value:r},e.children)},k={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,c=u["".concat(d,".").concat(m)]||u[m]||k[m]||a;return n?t.createElement(c,o(o({ref:r},p),{},{components:n})):t.createElement(c,o({ref:r},p))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9035:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=n(7462),i=(n(7294),n(3905));const a={id:"radiobuttonID",title:"Radioknapp",description:"Oversikt over radioknapper som blir brukt i Kartverket sine l\xf8sninger.",slug:"/designsystem/komponenter/radiobutton",displayed_sidebar:"designsystemSidebar",sidebar_position:3},o=void 0,l={unversionedId:"designsystems/Komponenter/radiobuttonID",id:"designsystems/Komponenter/radiobuttonID",title:"Radioknapp",description:"Oversikt over radioknapper som blir brukt i Kartverket sine l\xf8sninger.",source:"@site/docs/designsystems/Komponenter/radiobuttons.mdx",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/radiobutton",permalink:"/designsystem/komponenter/radiobutton",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"radiobuttonID",title:"Radioknapp",description:"Oversikt over radioknapper som blir brukt i Kartverket sine l\xf8sninger.",slug:"/designsystem/komponenter/radiobutton",displayed_sidebar:"designsystemSidebar",sidebar_position:3},sidebar:"designsystemSidebar",previous:{title:"Slider",permalink:"/designsystem/komponenter/slider"},next:{title:"Sideelementer",permalink:"/designsystem/komponenter/sideelementer"}},d={},s=[{value:"Normal radio knapp",id:"normal-radio-knapp",level:2},{value:"Feilmelding radio knapp",id:"feilmelding-radio-knapp",level:2}],p={toc:s};function k(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Radioknapper skal benyttes hvor en bruker kun skal kunne gj\xf8re ett enkelt valg, og ikke flervalg. Ved et nytt valg, skal eventuelle tidligere valg fjernes automatisk. Feilmelding avkrysningsknapp skal brukes for \xe5 visualisere feil i avkrysningen, dersom dette har skjedd (f.eks. ikke krysset av for et alternativ)."),(0,i.kt)("p",null,"For \xe5 style <label",">","-elementet, skal egne CSS-klasser fra\n",(0,i.kt)("a",{parentName:"p",href:"/designsystems/designtokens/typografi#label"},(0,i.kt)("em",{parentName:"a"},"Typografi")),"\nbenyttes. I tillegg skal hver gruppe med radioknapper ligge i <fieldset",">",", og ha en <legend",">"," for \xe5 vise at elementene h\xf8rer sammen. Dette er for at skjermleser skal kunne identifisere beskrivelsen til knappene. Se eksempelbruk under."),(0,i.kt)("h2",{id:"normal-radio-knapp"},"Normal radio knapp"),(0,i.kt)("p",null,"Radio knapp f\xe5r fokus sirkel rundt n\xe5r de velges med tastaturet."),(0,i.kt)("fieldset",null,(0,i.kt)("legend",null,"Eksempel p\xe5 gruppe med radioknapper"),(0,i.kt)("div",{class:"radio"},(0,i.kt)("input",{type:"radio",id:"radioBtn_1",name:"radioGroup1"}),(0,i.kt)("label",{for:"radioBtn_1"},"Input tekst")),(0,i.kt)("br",null),(0,i.kt)("div",{class:"radio"},(0,i.kt)("input",{type:"radio",id:"radioBtn_2",name:"radioGroup1"}),(0,i.kt)("label",{for:"radioBtn_2"},"Input tekst"))),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'<fieldset>\n    <legend>Eksempel p\xe5 gruppe med radioknapper</legend>\n    <div class="radio">\n        <input type="radio" id="radioBtn_1" name="radioGroup1"/>\n        <label for="radioBtn_1">Input tekst</label>\n    </div><br/>\n    <div class="radio">\n        <input type="radio" id="radioBtn_2" name="radioGroup1"/>\n        <label for="radioBtn_2">Input tekst</label>\n    </div>\n</fieldset>\n')),(0,i.kt)("h2",{id:"feilmelding-radio-knapp"},"Feilmelding radio knapp"),(0,i.kt)("p",null,"F\xf8lgende radio knapp f\xe5r feilmeldings farge hvis et av alternativene m\xe5 v\xe6re valgt f\xf8r bruker kan g\xe5 videre. Merk at i dette eksempelet er ",(0,i.kt)("em",{parentName:"p"},"checked={false}")," brukt for \xe5 tvinge frem en feilmelding som demonstrasjon."),(0,i.kt)("fieldset",null,(0,i.kt)("legend",null,"Eksempel p\xe5 gruppe med radioknapper som har feilmelding"),(0,i.kt)("div",{class:"radio"},(0,i.kt)("input",{type:"radio",id:"invalidRadioBtn_1",name:"radioGroup2",required:!0,checked:!1}),(0,i.kt)("label",{for:"invalidRadioBtn_1"},"Feilmelding")),(0,i.kt)("br",null),(0,i.kt)("div",{class:"radio"},(0,i.kt)("input",{type:"radio",id:"invalidRadioBtn_2",name:"radioGroup2"}),(0,i.kt)("label",{for:"invalidRadioBtn_2"},"Input tekst"))),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'<fieldset>\n    <legend>Eksempel p\xe5 gruppe med radioknapper som har feilmelding</legend>\n    <div class="radio">\n        <input type="radio" id="invalidRadioBtn_1" name="radioGroup2" required checked={false}/>\n        <label for="invalidRadioBtn_1">Feilmelding</label>\n    </div><br/>\n    <div class="radio">\n        <input type="radio" id="invalidRadioBtn_2" name="radioGroup2"/>\n        <label for="invalidRadioBtn_2">Input tekst</label>\n    </div>\n</fieldset>\n')))}k.isMDXComponent=!0}}]);