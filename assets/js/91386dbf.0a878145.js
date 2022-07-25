"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[5589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),A=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=A(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),g=A(r),c=s,k=g["".concat(o,".").concat(c)]||g[c]||m[c]||i;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function c(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,l=new Array(i);l[0]=g;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:s,l[1]=a;for(var A=2;A<i;A++)l[A]=r[A];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>A});var n=r(7462),s=(r(7294),r(3905));const i={id:"sliderID",title:"Slider",description:"Oversikt over sliders som blir brukt i Kartverket sine l\xf8sninger.",slug:"/designsystem/komponenter/slider",displayed_sidebar:"designsystemSidebar"},l=void 0,a={unversionedId:"designsystems/Komponenter/sliderID",id:"designsystems/Komponenter/sliderID",title:"Slider",description:"Oversikt over sliders som blir brukt i Kartverket sine l\xf8sninger.",source:"@site/docs/designsystems/Komponenter/slider.mdx",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/slider",permalink:"/kvib/designsystem/komponenter/slider",draft:!1,tags:[],version:"current",frontMatter:{id:"sliderID",title:"Slider",description:"Oversikt over sliders som blir brukt i Kartverket sine l\xf8sninger.",slug:"/designsystem/komponenter/slider",displayed_sidebar:"designsystemSidebar"},sidebar:"designsystemSidebar",previous:{title:"S\xf8kefelt",permalink:"/kvib/designsystem/komponenter/s\xf8kefelt"},next:{title:"Radioknapp",permalink:"/kvib/designsystem/komponenter/radiobutton"}},o={},A=[{value:"Extra small og small",id:"extra-small-og-small",level:2},{value:"Medium og large",id:"medium-og-large",level:2}],d={toc:A};function m(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Kartverket har to st\xf8rrelser p\xe5 en slider; extra small/small og medium/large.\nImplementasjon av denne komponenten krever Javascript, i tillegg til CSS-klassene fra KVIB, for \xe5 h\xe5ndtere verdi-endringer. Animasjonen under viser riktig oppf\xf8rsel til komponenten. Eksempelkode for dette ligger i ",(0,s.kt)("em",{parentName:"p"},"src/html/slider.html"),".\nUnder f\xf8lger statiske bilder av slideren for \xe5 vise forskjell p\xe5 de ulike st\xf8rrelsene, sammen med eksempelkode. Bredden til ",(0,s.kt)("em",{parentName:"p"},".slider")," er satt til 100%, slik at slider-bredden tilpasses ved \xe5 legge elementene i f.eks. et <div",">","-element."),(0,s.kt)("p",null,"For \xe5 style <label",">","-elementet, skal egne\n",(0,s.kt)("a",{parentName:"p",href:"/kvib/designsystems/designtokens/typografi#label"},"CSS-klasser fra ",(0,s.kt)("em",{parentName:"a"},"Typografi")," benyttes.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"sliderGif",src:r(3945).Z,width:"800",height:"304"})),(0,s.kt)("h2",{id:"extra-small-og-small"},"Extra small og small"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"slider-xs-s",src:r(460).Z,width:"408",height:"42"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markup"},'  <label for="range-slider"> Skriv tekst her</label>\n  <input type="range" id="range-slider" name="range-slider" class="slider slider--xs-s"\n           min="0" max="100" />\n')),(0,s.kt)("h2",{id:"medium-og-large"},"Medium og large"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"slider-m-l",src:r(4301).Z,width:"407",height:"43"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markup"},' <label for="range-slider">Skriv tekst her</label>\n <input type="range" id="range-slider" name="range-slider" class="slider slider--m-l"\n        min="0" max="100" />\n')))}m.isMDXComponent=!0},3945:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/slider-0ede081046abda7f87a42666e3e848f9.gif"},4301:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},460:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);