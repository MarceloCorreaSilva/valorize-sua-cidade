(this["webpackJsonpvalorize-sua-cidade"]=this["webpackJsonpvalorize-sua-cidade"]||[]).push([[0],{15:function(e,a,l){"use strict";l.r(a);var t=l(0),i=l.n(t),r=l(1),n=l.n(r);var u=function(){return i.a.createElement("section",{className:"uk-section uk-section-small uk-section-primary",style:{background:"#305183"}},i.a.createElement("div",{className:"uk-container"},i.a.createElement("h2",{className:"uk-margin-remove uk-text-bold"},"Mapa de Figueir\xe3o-MS")))};var o=function(){return i.a.createElement(i.a.Fragment,null)};var c=function(e){var a=e.children;return i.a.createElement("div",{className:"uk-offcanvas-content"},i.a.createElement("div",{"uk-height-viewport":"expand: true"},i.a.createElement(u,null),a,i.a.createElement(o,null)))},s=l(7);var m=function(e){var a=e.options,l=e.placeholder,t=e.isMulti,r=e.id,n=e.name;return i.a.createElement("div",{className:"uk-form-controls"},i.a.createElement(s.a,{options:a,placeholder:l,isMulti:t,id:r,name:n}))},d=l(2);var v=function(){return i.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},i.a.createElement("fieldset",{className:"uk-fieldset"},i.a.createElement("legend",{className:"uk-legend"},"Selecione o que voc\xea procura:"),i.a.createElement("div",{className:"uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid uk-grid-stack","uk-grid":""},i.a.createElement("div",{className:"uk-width-expand uk-first-column"},i.a.createElement("div",{id:"filter_atividades"},i.a.createElement(m,{className:"uk-select",placeholder:"Selecione a estrutura geogr\xe1fica...",isMulti:!0,id:"marcadores",name:"marcadores",options:d.geographic_structure}))),i.a.createElement("div",{className:"uk-width-1-2@s uk-grid-margin uk-first-column"},i.a.createElement("div",{id:"filter_atividades"},i.a.createElement(m,{placeholder:"Selecione a sazonalidade...",isMulti:!0,id:"comercializacao",name:"meses",options:d.months})))),i.a.createElement("div",{className:"uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid","uk-grid":""},i.a.createElement("div",{className:"uk-width-expand uk-first-column"},i.a.createElement("div",{id:"filter_atividades"},i.a.createElement(m,{placeholder:"Selecione a pecu\xe1ria...",isMulti:!0,id:"marcadores",name:"pecuaria",options:d.livestock}))),i.a.createElement("div",{className:"uk-width-expand"},i.a.createElement("div",{id:"filter_producao"},i.a.createElement(m,{placeholder:"Selecione os g\xeaneros aliment\xedcios...",isMulti:!0,id:"producao",name:"producao",options:d.production})))),i.a.createElement("div",{className:"uk-child-width-expand@s uk-child-width-1-3@m uk-margin uk-grid-small uk-grid","uk-grid":""},i.a.createElement("div",{className:"uk-width-1-2@s uk-first-column"},i.a.createElement("div",{id:"filter_atividades"},i.a.createElement(m,{placeholder:"Selecione os canais de comercializa\xe7\xe3o...",isMulti:!0,id:"comercializacao",name:"comercializacao",options:d.commercialization}))),i.a.createElement("div",{className:"uk-width-1-2@s uk-grid-margin uk-first-column"},i.a.createElement("div",{className:"uk-child-width-expand uk-grid","uk-grid":""},i.a.createElement("div",{className:"uk-first-column"},i.a.createElement("label",null,i.a.createElement("input",{name:"protegido",value:"1",className:"uk-checkbox",type:"checkbox"})," ","Plantio coberto")),i.a.createElement("div",null,i.a.createElement("label",null,i.a.createElement("input",{name:"irrigado",value:"fevereiro",className:"uk-checkbox",type:"checkbox"})," ","Irriga\xe7\xe3o")))),i.a.createElement("div",{className:"uk-width-expand uk-grid-margin uk-first-column"},i.a.createElement("button",{type:"submit",id:"",className:"form_submit uk-button uk-button-primary uk-width-expand uk-button-small uk-border-rounded"},"Filtrar")),i.a.createElement("div",{className:"uk-width-auto uk-grid-margin"},i.a.createElement("a",{href:"#",className:"uk-icon-link uk-icon","uk-icon":"close"},i.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-svg":"close"},i.a.createElement("path",{fill:"none",stroke:"#000","stroke-width":"1.06",d:"M16,16 L4,4"}),i.a.createElement("path",{fill:"none",stroke:"#000","stroke-width":"1.06",d:"M16,4 L4,16"})))))))};var b=function(){return i.a.createElement("div",{id:"map"})};var k=function(){return i.a.createElement("div",{className:"lista uk-margin"})};var h=function(){return i.a.createElement(c,null,i.a.createElement("section",{className:"uk-section uk-section-small"},i.a.createElement("div",{className:"uk-container"},i.a.createElement(v,null),i.a.createElement(b,null),i.a.createElement(k,null))))};n.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('{"months":[{"value":"janeiro","label":"Janeiro"},{"value":"fevereiro","label":"Fevereiro"},{"value":"marco","label":"Mar\xe7o"},{"value":"abril","label":"Abril"},{"value":"maio","label":"Maio"},{"value":"junho","label":"Junho"},{"value":"julho","label":"Julho"},{"value":"agosto","label":"Agosto"},{"value":"setembro","label":"Setembro"},{"value":"outubro","label":"Outubro"},{"value":"novembro","label":"Novembro"},{"value":"dezembro","label":"Dezembro"}],"commercialization":[{"value":"PAA","label":"PAA"},{"value":"PNAE","label":"PNAE"},{"value":"Feira","label":"Feira"}],"livestock":[{"value":"Bovino","label":"Bovino"},{"value":"Ovino","label":"Ovino"},{"value":"Caprino","label":"Caprino"},{"value":"Su\xedno","label":"Su\xedno"},{"value":"Piscicultura","label":"Piscicultura"}],"geographic_structure":[{"value":"Propriedade","label":"Propriedades"},{"value":"Ponte","label":"Pontes"},{"value":"Mata-burro","label":"Mata-burros"},{"value":"Porteira","label":"Porteiras"},{"value":"Silo","label":"Silos"},{"value":"Tanque represa","label":"Tanques"},{"value":"Tanque represa","label":"Represas"},{"value":"Agroind\xfastria","label":"Agroind\xfastrias"}],"production":[{"value":"Abobrinhas diversas","label":"Abobrinhas diversas"},{"value":"Abobrinha verde","label":"Abobrinha verde"},{"value":"Alface","label":"Alface"},{"value":"Batat doce","label":"Batata Doce"},{"value":"Berinjela","label":"Berinjela"},{"value":"Cebolinha","label":"Cebolinha"},{"value":"Couve","label":"Couve"},{"value":"Couve flor","label":"Couve flor"},{"value":"Melancia","label":"Melancia"},{"value":"Laranja pera","label":"Laranja pera"},{"value":"Mandioca descascada","label":"Mandioca descascada"},{"value":"Maxixe","label":"Maxixe"},{"value":"Abacax\xed","label":"Abacax\xed"},{"value":"Polpa de fruta","label":"Polpa} de fruta"},{"value":"Babana ma\xe7\xe3","label":"Banana ma\xe7\xe3"},{"value":"Banana nanica","label":"Banana nanica"},{"value":"Mam\xe3o formosa","label":"Mam\xe3o formosa"},{"value":"Manga","label":"Manga"},{"value":"Tomate","label":"Tomate"},{"value":"Salsa","label":"Salsa"},{"value":"Lim\xe3o","label":"Lim\xe3o"},{"value":"Maracuj\xe1","label":"Maracuj\xe1"},{"value":"Milho verde","label":"Milho verde"},{"value":"Quiabo","label":"Quiabo"},{"value":"Chuchu","label":"Chuchu"},{"value":"Cenoura","label":"Cenoura"}]}')},8:function(e,a,l){e.exports=l(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c9722d44.chunk.js.map