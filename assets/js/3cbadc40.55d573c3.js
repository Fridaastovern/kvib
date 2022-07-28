"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[9519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var k=r.createContext({}),o=function(e){var t=r.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(k.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,k=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=o(n),p=l,c=u["".concat(k,".").concat(p)]||u[p]||m[p]||a;return n?r.createElement(c,s(s({ref:t},d),{},{components:n})):r.createElement(c,s({ref:t},d))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var o=2;o<a;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=n(7462),l=(n(7294),n(3905));const a={id:"tableID",title:"(!)Listevisning",description:"Lister som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/table",displayed_sidebar:"designsystemSidebar",sidebar_position:7},s=void 0,i={unversionedId:"designsystems/Komponenter/tableID",id:"designsystems/Komponenter/tableID",title:"(!)Listevisning",description:"Lister som blir brukt i Kartverket sine l\xf8sninger",source:"@site/docs/designsystems/Komponenter/table.md",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/table",permalink:"/kvib/designsystem/komponenter/table",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"tableID",title:"(!)Listevisning",description:"Lister som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/table",displayed_sidebar:"designsystemSidebar",sidebar_position:7},sidebar:"designsystemSidebar",previous:{title:"(!)Sideelementer",permalink:"/kvib/designsystem/komponenter/sideelementer"},next:{title:"Knapper",permalink:"/kvib/designsystems/Komponenter/Knapper"}},k={},o=[],d={toc:o};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"OBS! Under konstruksjon"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Merk at eksempelet lenket nedenfor, samt malen under, er under konstruksjon. De kan dermed ikke tas i bruk p\xe5 grunn av f\xf8lgende feil og mangler:"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},"Komponenten er ikke testet etter KVIBs rutine for kvalitetskontroll"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},"Vertikal scroll forekommer ikke etter 12 rader. Det er n\xe5 h\xf8yden p\xe5 containeren rundt listen som bestemmer n\xe5r scroll settes inn"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},"Det er ikke testet om horistontal scroll forekommer ved for mange tegn. Det er heller ikke tatt hensyn til hvordan en eventuell overflyt skal h\xe5ndteres"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},"Avmerkingsboksens label er ikke fjernet i eksempelet"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},'Hvis man huker av "Slett alle"-boksen, skal alle avmerkingsboksene markeres. Hvis man s\xe5 avhuker "Slett alle"-boksen, skal alle avmerkingsbokser g\xe5 tilbake til tilstanden de var i f\xf8r boksen ble huket av. Det vil si at en avmerkingsboks som var markert f\xf8r "Slett alle"-boksen ble huket av, skal forbli markert n\xe5r "Slett alle"-boksen avhukes. Se Figma-KVIB for demonstrasjon. Denne oppf\xf8rselen er ikke implementert enda')),(0,l.kt)("hr",null))),(0,l.kt)("p",null,"KVIBs listevisning har en standard mal, som vist under. Det vil si at utvikler m\xe5 endre innholdet og tilpasse st\xf8rrelsen til eget design. Det stilles likevel felles krav til alle listevisninger:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Listen skal vise maks 12 rader. Etter 12 rader skal scroll brukes"),(0,l.kt)("li",{parentName:"ul"},"Horisontal scroll skal ",(0,l.kt)("em",{parentName:"li"},"aldri")," brukes!"),(0,l.kt)("li",{parentName:"ul"},"Celler med tall skal ha h\xf8yrestilt innhold"),(0,l.kt)("li",{parentName:"ul"},"Celler med tekst skal ha venstrestilt innhold"),(0,l.kt)("li",{parentName:"ul"},"Celler med ikoner skal alltid ha ikonet p\xe5 venstre side av teksten"),(0,l.kt)("li",{parentName:"ul"},"Blanke celler brukes der det er behov for celler uten innhold"),(0,l.kt)("li",{parentName:"ul"},'Celle med avsjekksliste skal ha en "Slett alle"-funksjon'),(0,l.kt)("li",{parentName:"ul"},"Sticky header skal benyttes"),(0,l.kt)("li",{parentName:"ul"},"Listen skal aldri g\xe5 utover designets maks grid bredde")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"pathname:///html/table.html"},"Et eksempel som demonstrerer oppf\xf8rselen til en listevisning og hvordan denne kan se ut finnes her"),'. Ettersom "Slett alle"-funksjonen krever Javascript, kan eksempelet ikke vises p\xe5 denne siden. Se ellers standard malen under.'),(0,l.kt)("table",{id:"data-input"},(0,l.kt)("tr",null,(0,l.kt)("th",null,"\xa0\xa0\xa0\xa0\xa0"),(0,l.kt)("th",null,"\xa0\xa0\xa0\xa0\xa0"),(0,l.kt)("th",null,"\xa0\xa0\xa0\xa0\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",null),(0,l.kt)("td",null),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null),(0,l.kt)("td",null),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null),(0,l.kt)("td",null),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null),(0,l.kt)("td",null),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null),(0,l.kt)("td",null),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null),(0,l.kt)("td",null),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null),(0,l.kt)("td",null),(0,l.kt)("td",null))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},'<table id="data-input">\n  <tr>\n      <th></th>\n      <th></th>\n      <th></th>\n  </tr>\n  <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n  </tr>\n  <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n  </tr>\n  <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n  </tr>\n  <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n  </tr>\n  <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n  </tr>\n  <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n  </tr>\n  <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n  </tr>\n</table>\n')))}m.isMDXComponent=!0}}]);