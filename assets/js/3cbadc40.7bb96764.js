"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9519],{876:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>b});var a=l(2784);function s(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){s(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,a,s=function(e,t){if(null==e)return{};var l,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(s[l]=e[l]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(s[l]=e[l])}return s}var d=a.createContext({}),k=function(e){var t=a.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=k(e.components);return a.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,s=e.mdxType,n=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=k(l),b=s,p=m["".concat(d,".").concat(b)]||m[b]||o[b]||n;return l?a.createElement(p,i(i({ref:t},c),{},{components:l})):a.createElement(p,i({ref:t},c))}));function b(e,t){var l=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=l.length,i=new Array(n);i[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var k=2;k<n;k++)i[k]=l[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},700:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>r,toc:()=>k});var a=l(7896),s=(l(2784),l(876));const n={id:"tableID",title:"(!)Listevisning",description:"Lister som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/table",displayed_sidebar:"designsystemSidebar",sidebar_position:7},i=void 0,r={unversionedId:"designsystems/Komponenter/tableID",id:"designsystems/Komponenter/tableID",title:"(!)Listevisning",description:"Lister som blir brukt i Kartverket sine l\xf8sninger",source:"@site/docs/designsystems/Komponenter/table.md",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/table",permalink:"/kvib/designsystem/komponenter/table",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"tableID",title:"(!)Listevisning",description:"Lister som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/table",displayed_sidebar:"designsystemSidebar",sidebar_position:7},sidebar:"designsystemSidebar",previous:{title:"Navigasjon",permalink:"/kvib/designsystem/komponenter/navigasjon"},next:{title:"Utvidbart panel",permalink:"/kvib/designsystem/komponenter/utvidbar-panel"}},d={},k=[],c={toc:k};function o(e){let{components:t,...l}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"OBS! Under konstruksjon"))),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"Merk at eksempelet lenket nedenfor, samt malen under, er under konstruksjon. De kan dermed ikke tas i bruk p\xe5 grunn av f\xf8lgende feil og mangler:"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("strong",{parentName:"em"},"Komponenten er ikke testet etter KVIBs rutine for kvalitetskontroll"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("strong",{parentName:"em"},"Vertikal scroll forekommer ikke etter 12 rader. Det er n\xe5 h\xf8yden p\xe5 containeren rundt listen som bestemmer n\xe5r scroll settes inn"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("strong",{parentName:"em"},"Det er ikke testet om horistontal scroll forekommer ved for mange tegn. Det er heller ikke tatt hensyn til hvordan en eventuell overflyt skal h\xe5ndteres"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("strong",{parentName:"em"},"Avmerkingsboksens label er ikke fjernet i eksempelet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("strong",{parentName:"em"},'Hvis man huker av "Slett alle"-boksen, skal alle avmerkingsboksene markeres. Hvis man s\xe5 avhuker "Slett alle"-boksen, skal alle avmerkingsbokser g\xe5 tilbake til tilstanden de var i f\xf8r boksen ble huket av. Det vil si at en avmerkingsboks som var markert f\xf8r "Slett alle"-boksen ble huket av, skal forbli markert n\xe5r "Slett alle"-boksen avhukes. Se Figma-KVIB for demonstrasjon. Denne oppf\xf8rselen er ikke implementert enda')),(0,s.kt)("hr",null))),(0,s.kt)("p",null,"KVIBs listevisning har en standard mal, som vist under. Det vil si at utvikler m\xe5 endre innholdet og tilpasse st\xf8rrelsen til eget design. Det stilles likevel felles krav til alle listevisninger:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Listen skal vise maks 12 rader. Etter 12 rader skal scroll brukes"),(0,s.kt)("li",{parentName:"ul"},"Horisontal scroll skal ",(0,s.kt)("em",{parentName:"li"},"aldri")," brukes!"),(0,s.kt)("li",{parentName:"ul"},"Celler med tall skal ha h\xf8yrestilt innhold"),(0,s.kt)("li",{parentName:"ul"},"Celler med tekst skal ha venstrestilt innhold"),(0,s.kt)("li",{parentName:"ul"},"Celler med ikoner skal alltid ha ikonet p\xe5 venstre side av teksten"),(0,s.kt)("li",{parentName:"ul"},"Blanke celler brukes der det er behov for celler uten innhold"),(0,s.kt)("li",{parentName:"ul"},'Celle med avsjekksliste skal ha en "Slett alle"-funksjon'),(0,s.kt)("li",{parentName:"ul"},"Sticky header skal benyttes"),(0,s.kt)("li",{parentName:"ul"},"Listen skal aldri g\xe5 utover designets maks grid bredde")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"pathname:///html/table.html"},"Et eksempel som demonstrerer oppf\xf8rselen til en listevisning og hvordan denne kan se ut finnes her ",(0,s.kt)("span",{class:"material-symbols-outlined"},"open_in_new")),'. Ettersom "Slett alle"-funksjonen krever Javascript, kan eksempelet ikke vises p\xe5 denne siden. Se ellers standard malen under.'),(0,s.kt)("div",{class:"table__container--large"},(0,s.kt)("table",{id:"data-input"},(0,s.kt)("tbody",null,(0,s.kt)("tr",{class:"detail detail--sml",name:"table-header"},(0,s.kt)("th",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"select-all",name:"checkbox-list"}),(0,s.kt)("label",{for:"select-all"}))),(0,s.kt)("th",{class:"detail detail--sml"},"Slett"),(0,s.kt)("th",{class:"detail detail--sml"},"TEKST INNHOLD"),(0,s.kt)("th",{class:"detail detail--sml"},"TALL INNHOLD"),(0,s.kt)("th",{class:"detail detail--sml"},"TEKST INNHOLD")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_1",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_1"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"1"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_2",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_2"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"2"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_3",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_3"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"3"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_4",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_4"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"4"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_5",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_5"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"5"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_6",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_6"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"6"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_7",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_7"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"7"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_8",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_8"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"8"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_9",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_9"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"9"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_10",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_10"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"10"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_11",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_11"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"11"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{class:"checkbox"},(0,s.kt)("input",{type:"checkbox",id:"checkbox_12",name:"checkbox-list"}),(0,s.kt)("label",{for:"checkbox_12"}))),(0,s.kt)("td",{class:"detail detail--sml"}),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL VENSTRE"),(0,s.kt)("td",{class:"detail detail--sml"},"12"),(0,s.kt)("td",{class:"detail detail--sml"},"TEKST TIL H\xd8YRE"))))),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},'<table id="data-input">\n   <tbody>\n  <tr class="detail detail--sml" name="table-header">\n      <th>\n          <div class="checkbox">\n              <input type="checkbox" id="select-all" name="checkbox-list"/>\n              <label for="select-all"></label>\n          </div>\n      </th>\n      <th class="detail detail--sml">Slett</th>\n      <th class="detail detail--sml">TEKST INNHOLD</th>\n      <th class="detail detail--sml">TALL INNHOLD</th>\n      <th class="detail detail--sml">TEKST INNHOLD</th>\n  </tr>\n  <tr>\n      <td>\n          <div class="checkbox">\n              <input type="checkbox" id="checkbox_1" name="checkbox-list"/>\n              <label for="checkbox_1"></label>\n          </div>\n      </td>\n      <td class="detail detail--sml"></td>\n      <td class="detail detail--sml">TEKST TIL VENSTRE</td>\n      <td class="detail detail--sml">1</td>\n      <td class="detail detail--sml">TEKST TIL H\xd8YRE</td>\n  </tr>\n</tbody>\n</table>\n')))}o.isMDXComponent=!0}}]);