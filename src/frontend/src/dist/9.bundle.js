(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{105:function(e,n,a){"use strict";n.a=a.p+"assets/clock-58e45098.png"},106:function(e,n,a){"use strict";n.a=a.p+"assets/served-94bba821.png"},108:function(e,n,a){"use strict";a.d(n,"c",(function(){return t})),a.d(n,"b",(function(){return r})),a.d(n,"a",(function(){return i})),a.d(n,"d",(function(){return l}));var t=function(){return{type:"REQUIRE"}},r=function(e){return{type:"MINLENGTH",val:e}},i=function(){return{type:"EMAIL"}},l=function(e,n){var a=!0,t=!0,r=!1,i=void 0;try{for(var l,c=n[Symbol.iterator]();!(t=(l=c.next()).done);t=!0){var o=l.value;"REQUIRE"===o.type&&(a=a&&e.trim().length>0),"MINLENGTH"===o.type&&(a=a&&e.trim().length>=o.val),"MAXLENGTH"===o.type&&(a=a&&e.trim().length<=o.val),"MIN"===o.type&&(a=a&&+e>=o.val),"MAX"===o.type&&(a=a&&+e<=o.val),"EMAIL"===o.type&&(a=a&&/^\S+@\S+\.\S+$/.test(e))}}catch(e){r=!0,i=e}finally{try{t||null==c.return||c.return()}finally{if(r)throw i}}return a}},109:function(e,n,a){(e.exports=a(40)(!1)).push([e.i,".errorMesage{\r\n    color: red;\r\n}",""])},118:function(e,n,a){"use strict";var t=a(19),r=a.n(t),i=a(42),l=a.n(i),c=a(0),o=a.n(c),s=a(182),d=a(108);a(128);function m(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?m(a,!0).forEach((function(n){l()(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var p=function(e,n){switch(n.type){case"CHANGE":return u({},e,{value:n.val,isValid:Object(d.d)(n.val,n.validators)});case"TOUCH":return u({},e,{isTouched:!0});default:return e}};n.a=function(e){var n=Object(c.useReducer)(p,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),a=r()(n,2),t=a[0],i=a[1],l=e.id,d=e.onInput,m=t.value,u=t.isValid;Object(c.useEffect)((function(){d(l,m,u)}),[l,m,u,d]);var v,f=function(n){i({type:"CHANGE",val:n.target.value,validators:e.validators})},E=function(){i({type:"TOUCH"})};return"input"===e.element?v=o.a.createElement(s.a.Group,{id:e.id},o.a.createElement(s.a.Label,null,e.label),o.a.createElement(s.a.Control,{id:e.id,as:e.element,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:E,value:t.value}),o.a.createElement(s.a.Text,{className:"text-muted"},!t.isValid&&t.isTouched&&o.a.createElement("p",{className:"errorMesage"},e.errorText," "))):"select"===e.element?v=o.a.createElement(s.a.Group,{id:e.id},o.a.createElement(s.a.Label,null,e.label),o.a.createElement(s.a.Control,{id:e.id,as:e.element,onChange:f,onBlur:E,value:t.value},e.options.map((function(e,n){return o.a.createElement("option",{key:n,value:e},e)}))),o.a.createElement(s.a.Text,{className:"text-muted"},!t.isValid&&t.isTouched&&o.a.createElement("p",{className:"errorMesage"},e.errorText," "))):"textarea"===e.element&&(v=o.a.createElement(s.a.Group,{id:e.id},o.a.createElement(s.a.Label,null,e.label),o.a.createElement(s.a.Control,{id:e.id,as:e.element,rows:e.rows,onChange:f,onBlur:E,value:t.value}),o.a.createElement(s.a.Text,{className:"text-muted"},!t.isValid&&t.isTouched&&o.a.createElement("p",{className:"errorMesage"},e.errorText," ")))),o.a.createElement(o.a.Fragment,null,v)}},119:function(e,n,a){(e.exports=a(40)(!1)).push([e.i,".div-buttons{\r\n    display: flex;\r\n    align-items:flex-end;\r\n    justify-content: flex-end;\r\n}\r\n.accordion-item{\r\n    margin-bottom: 0.4rem;\r\n    margin-top: 0.4rem;\r\n}\r\n.accordion-card-item{\r\n    height: 100%;\r\n}\r\n.new-recipe-container {\r\n    width: 100%;\r\n    max-width: 80rem;\r\n    margin:   auto;\r\n  \r\n}\r\n.recipe-main h3{\r\n  color:white;\r\n}\r\n.form-container{\r\n  \r\n    margin: 1.4rem;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n   \r\n}\r\n.recipe-form{\r\n  background-color: #eff0f3;\r\n}\r\n\r\n.submit-btn{\r\n  margin-top: 1rem;\r\n \r\n}\r\n.increment-btn{\r\n  margin-bottom: 1rem;\r\n  background-color: #ff8e3c;\r\n  color: #0d0d0d;\r\n}\r\n.increment-btn:hover{\r\n  background-color: #ff8e3c;\r\n}\r\n.btn-left-submit{\r\n  margin-right: 1.1rem;\r\n}\r\n.date-picker{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.plan-container{\r\n  margin-top: 2rem;\r\n  \r\n  \r\n}\r\n.nutrients-container{\r\n  margin-top: 2rem;\r\n  padding: 1.2rem;\r\n}\r\n.meals-container{\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin: auto;\r\n  padding: 1.2rem;\r\n}\r\n.btn-see-more{\r\n  text-align: center;\r\n}\r\nh4{\r\n  text-align: center;\r\n}\r\n.btn-date-container{\r\n  display: flex;\r\n  flex-direction: row;\r\n justify-content: space-between;\r\n align-items: center;\r\n}\r\n.accordion-title-main-container{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n}\r\n.accordion-title-icon-container{\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  flex-direction: row;\r\n}\r\n.accordion-title-icon-img{\r\n  width: 1.6rem;\r\n  height: 1.6rem;\r\n}\r\n.accordion-title{\r\n  margin-top: 0.1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.accordion-title-completed-icon{\r\n\r\n\r\n}\r\n.results-container{\r\n  background-color: white;\r\n}\r\n\r\n\r\n/* ----------- iPhone 4 and 4S ----------- */\r\n\r\n/* Portrait and Landscape */\r\n@media only screen \r\n  and (min-device-width: 320px) \r\n  and (max-device-width: 480px)\r\n  and (-webkit-min-device-pixel-ratio: 2) {\r\n    .btn-date-container {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      align-items: flex-start;\r\n      margin: 1rem auto;\r\n  }\r\n  .btn-success {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n    width: 100%;\r\n}\r\n.meals-container{\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin: auto;\r\n  padding: 0.8rem;\r\n}\r\n\r\n.meals-container .card{\r\n  width: 15.8rem !important;\r\n}\r\n\r\n}\r\n\r\n/* Portrait */\r\n@media only screen \r\n  and (min-device-width: 320px) \r\n  and (max-device-width: 480px)\r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (orientation: portrait) {\r\n}\r\n\r\n/* Landscape */\r\n@media only screen \r\n  and (min-device-width: 320px) \r\n  and (max-device-width: 480px)\r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (orientation: landscape) {\r\n\r\n}\r\n\r\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\r\n\r\n/* Portrait and Landscape */\r\n@media only screen \r\n  and (min-device-width: 320px) \r\n  and (max-device-width: 568px)\r\n  and (-webkit-min-device-pixel-ratio: 2) {\r\n\r\n}\r\n\r\n/* Portrait */\r\n@media only screen \r\n  and (min-device-width: 320px) \r\n  and (max-device-width: 568px)\r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (orientation: portrait) {\r\n}\r\n.recipe-form {\r\n  background-color: #eff0f3;\r\n  margin: 1.5rem auto;\r\n}\r\n\r\n/* Landscape */\r\n@media only screen \r\n  and (min-device-width: 320px) \r\n  and (max-device-width: 568px)\r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (orientation: landscape) {\r\n\r\n}\r\n\r\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\r\n\r\n/* Portrait and Landscape */\r\n@media only screen \r\n  and (min-device-width: 375px) \r\n  and (max-device-width: 667px) \r\n  and (-webkit-min-device-pixel-ratio: 2) { \r\n\r\n}\r\n\r\n/* Portrait */\r\n@media only screen \r\n  and (min-device-width: 375px) \r\n  and (max-device-width: 667px) \r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (orientation: portrait) { \r\n    .recipe-form {\r\n      background-color: #eff0f3;\r\n      margin: 1.5rem auto;\r\n  }\r\n}\r\n\r\n/* Landscape */\r\n@media only screen \r\n  and (min-device-width: 375px) \r\n  and (max-device-width: 667px) \r\n  and (-webkit-min-device-pixel-ratio: 2)\r\n  and (orientation: landscape) { \r\n\r\n}\r\n\r\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\r\n\r\n/* Portrait and Landscape */\r\n@media only screen \r\n  and (min-device-width: 414px) \r\n  and (max-device-width: 736px) \r\n  and (-webkit-min-device-pixel-ratio: 3) { \r\n    .recipe-form {\r\n      background-color: #eff0f3;\r\n      margin: 1.5rem auto;\r\n  }\r\n}\r\n\r\n/* Portrait */\r\n@media only screen \r\n  and (min-device-width: 414px) \r\n  and (max-device-width: 736px) \r\n  and (-webkit-min-device-pixel-ratio: 3)\r\n  and (orientation: portrait) { \r\n\r\n}\r\n\r\n/* Landscape */\r\n@media only screen \r\n  and (min-device-width: 414px) \r\n  and (max-device-width: 736px) \r\n  and (-webkit-min-device-pixel-ratio: 3)\r\n  and (orientation: landscape) { \r\n\r\n}\r\n\r\n/* ----------- iPhone X ----------- */\r\n\r\n/* Portrait and Landscape */\r\n@media only screen \r\n  and (min-device-width: 375px) \r\n  and (max-device-width: 812px) \r\n  and (-webkit-min-device-pixel-ratio: 3) { \r\n    .recipe-form {\r\n      background-color: #eff0f3;\r\n      margin: 1.5rem auto;\r\n    }\r\n}\r\n\r\n/* Portrait */\r\n@media only screen \r\n  and (min-device-width: 375px) \r\n  and (max-device-width: 812px) \r\n  and (-webkit-min-device-pixel-ratio: 3)\r\n  and (orientation: portrait) { \r\n\r\n}",""])},122:function(e,n,a){"use strict";a.d(n,"a",(function(){return m}));var t=a(19),r=a.n(t),i=a(42),l=a.n(i),c=a(0);function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(a,!0).forEach((function(n){l()(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var d=function(e,n){switch(n.type){case"INPUT_CHANGE":var a=!0;for(var t in e.inputs)e.inputs[t]&&(a=t===n.inputId?a&&n.isValid:a&&e.inputs[t].isValid);return s({},e,{inputs:s({},e.inputs,l()({},n.inputId,{value:n.value,isValid:n.isValid})),isValid:a});case"SET_DATA":return{inputs:n.inputs,isValid:n.formIsValid};default:return e}},m=function(e,n){var a=Object(c.useReducer)(d,{inputs:e,isValid:n}),t=r()(a,2),i=t[0],l=t[1];return[i,Object(c.useCallback)((function(e,n,a){l({type:"INPUT_CHANGE",value:n,isValid:a,inputId:e})}),[]),Object(c.useCallback)((function(e,n){l({type:"SET_DATA",inputs:e,formIsValid:n})}),[])]}},128:function(e,n,a){var t=a(109);"string"==typeof t&&(t=[[e.i,t,""]]);var r={insert:"head",singleton:!1},i=a(41)(t,r);t.locals&&(e.exports=t.locals),t.locals||e.hot.accept(109,(function(){var n=a(109);"string"==typeof n&&(n=[[e.i,n,""]]),i(n)})),e.hot.dispose((function(){i()}))},131:function(e,n,a){var t=a(119);"string"==typeof t&&(t=[[e.i,t,""]]);var r={insert:"head",singleton:!1},i=a(41)(t,r);t.locals&&(e.exports=t.locals),t.locals||e.hot.accept(119,(function(){var n=a(119);"string"==typeof n&&(n=[[e.i,n,""]]),i(n)})),e.hot.dispose((function(){i()}))},133:function(e,n,a){(e.exports=a(40)(!1)).push([e.i,".clock-icon{\r\n    width: 2.1rem;\r\n    height: 2.1rem;\r\n    margin-right: 0.4rem;\r\n}\r\n.served-icon{\r\n    width: 2.1rem;\r\n    height: 2.1rem;\r\n    margin-right: 0.4rem;\r\n}",""])},134:function(e,n,a){(e.exports=a(40)(!1)).push([e.i,".meal-plan-container{\r\n    margin: 2.4rem auto;\r\n    background-color: white;\r\n   \r\n}\r\nh4{\r\n    text-align: center;\r\n}\r\n.more-btn{\r\n    display: flex;\r\n    justify-content:center;\r\n    align-items: flex-end;\r\n    margin: 10px  auto  5px auto;\r\n }\r\n tr{\r\n     text-align:center ;\r\n }",""])},142:function(e,n,a){"use strict";var t=a(0),r=a.n(t),i=a(95),l=a(89),c=a(97),o=a(91),s=a(66),d=a(88),m=a(92),u=a(153),p=a(105),v=a(106),f=(a(170),["calories","carbohydrates","fat","protein"]);n.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"meals-container"},r.a.createElement(l.a,{sm:12},r.a.createElement(i.a,{className:"meals-container"},void 0===e.data.meals&&r.a.createElement(Spinner,{animation:"border",variant:"primary"}),void 0!==e.data.meals&&e.data.meals.map((function(e,n){return r.a.createElement(l.a,{key:n,sm:4},r.a.createElement(c.a,{key:e.id,style:{width:"18rem"}},r.a.createElement(c.a.Body,null,r.a.createElement(c.a.Title,null,e.title),r.a.createElement(o.a,{className:"list-group-flush details"},r.a.createElement(s.a,null,r.a.createElement("span",null,r.a.createElement(d.a,{className:"clock-icon",src:p.a})),r.a.createElement("strong",null,"ReadyInMinutes:")," ",e.readyInMinutes),r.a.createElement(s.a,null,r.a.createElement("span",null,r.a.createElement(d.a,{className:"served-icon",src:v.a})),r.a.createElement("strong",null,"Servings:")," ",e.servings)),r.a.createElement("div",{className:"more-btn"},r.a.createElement(m.a,{variant:"primary",className:"btn-see-more",target:"_blank",href:e.sourceUrl},"See more")))))}))))),r.a.createElement(i.a,null,void 0===e.data&&r.a.createElement("p",null),void 0!==e.data&&r.a.createElement(l.a,{sm:12,className:"nutrients-container"},r.a.createElement("div",null,r.a.createElement(u.a,{responsive:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,f.map((function(e){return r.a.createElement("th",{key:e},e," ")})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,void 0===e.data.nutrients&&r.a.createElement("div",null),void 0!==e.data.nutrients&&r.a.createElement(r.a.Fragment,null,void 0!==e.data.nutrients[0]&&r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,e.data.nutrients[0].calories,"cal"),r.a.createElement("td",null,e.data.nutrients[0].carbohydrates),r.a.createElement("td",null,e.data.nutrients[0].fat),r.a.createElement("td",null,e.data.nutrients[0].protein)),void 0===e.data.nutrients[0]&&r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,e.data.nutrients.calories,"cal"),r.a.createElement("td",null,e.data.nutrients.carbohydrates),r.a.createElement("td",null,e.data.nutrients.fat),r.a.createElement("td",null,e.data.nutrients.protein))))))))))}},146:function(e,n,a){"use strict";n.a=a.p+"assets/plus-f373aad6.png"},147:function(e,n,a){"use strict";n.a=a.p+"assets/minus-f162c0ae.png"},148:function(e,n,a){"use strict";n.a=a.p+"assets/submit-d5a7b61d.png"},170:function(e,n,a){var t=a(133);"string"==typeof t&&(t=[[e.i,t,""]]);var r={insert:"head",singleton:!1},i=a(41)(t,r);t.locals&&(e.exports=t.locals),t.locals||e.hot.accept(133,(function(){var n=a(133);"string"==typeof n&&(n=[[e.i,n,""]]),i(n)})),e.hot.dispose((function(){i()}))},171:function(e,n,a){var t=a(134);"string"==typeof t&&(t=[[e.i,t,""]]);var r={insert:"head",singleton:!1},i=a(41)(t,r);t.locals&&(e.exports=t.locals),t.locals||e.hot.accept(134,(function(){var n=a(134);"string"==typeof n&&(n=[[e.i,n,""]]),i(n)})),e.hot.dispose((function(){i()}))},183:function(e,n,a){"use strict";var t=a(19),r=a.n(t),i=a(0),l=a.n(i),c=a(96),o=(a(131),a(93)),s=a(95),d=a(89),m=a(97),u=a(91),p=a(66),v=a(88),f=a(92),E=a(153),h=(a(171),a(105)),y=a(106),b=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],g=["calories","carbohydrates","fat","protein"],x=function(e){return l.a.createElement(l.a.Fragment,null,void 0===e.data&&l.a.createElement("div",null),void 0!==e.data&&l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{className:"meal-plan-container"},e.data.meals.map((function(n,a){return l.a.createElement("div",{key:a},l.a.createElement("h4",null,b[a]),l.a.createElement(s.a,{className:"meals-container"},n.map((function(e,n){return l.a.createElement(d.a,{key:e.id,sm:4},l.a.createElement(m.a,{key:e.id,style:{width:"18rem"}},l.a.createElement(m.a.Body,null,l.a.createElement(m.a.Title,null,e.title),l.a.createElement(u.a,{className:"list-group-flush details"},l.a.createElement(p.a,null,l.a.createElement("span",null,l.a.createElement(v.a,{className:"clock-icon",src:h.a})),l.a.createElement("strong",null,"ReadyInMinutes:")," ",e.readyInMinutes),l.a.createElement(p.a,null,l.a.createElement("span",null,l.a.createElement(v.a,{className:"served-icon",src:y.a})),l.a.createElement("strong",null,"Servings:")," ",e.servings)),l.a.createElement("div",{className:"more-btn"},l.a.createElement(f.a,{className:"btn-see-more",target:"_blank",href:e.sourceUrl},"See more")))))}))),l.a.createElement(s.a,null,l.a.createElement(d.a,{sm:12,className:"nutrients-container"},l.a.createElement(E.a,{responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,g.map((function(e){return l.a.createElement("th",{key:e},e," ")})))),l.a.createElement("tbody",null,l.a.createElement("tr",null,void 0===e.data.nutrients&&l.a.createElement("div",null),void 0!==e.data.nutrients&&l.a.createElement(l.a.Fragment,null,l.a.createElement("td",null,e.data.nutrients[a].calories,"cal"),l.a.createElement("td",null,e.data.nutrients[a].carbohydrates),l.a.createElement("td",null,e.data.nutrients[a].fat),l.a.createElement("td",null,e.data.nutrients[a].protein))))))),l.a.createElement("hr",null))})))))},w=a(142);n.a=function(e){var n=Object(i.useState)(),a=r()(n,2),t=a[0],o=a[1];return Object(i.useEffect)((function(){if(!0!==e.week){var n=function(e,n){var a=0,t=e.length,r=[];for(a=0;a<t;a+=n){var i=e.slice(a,a+n);r.push(i)}return r}(e.data.meals,3);o({meals:n,nutrients:e.data.nutrients})}}),[]),l.a.createElement("div",null,void 0===e.data&&l.a.createElement(c.a,{animation:"border",variant:"primary"}),void 0!==e.data.week&&l.a.createElement("div",null,l.a.createElement("h4",null,"Monday"),void 0!==e.data.week.monday&&l.a.createElement(w.a,{data:e.data.week.monday}),l.a.createElement("hr",null),l.a.createElement("h4",null,"Tuesday"),void 0!==e.data.week.tuesday&&l.a.createElement(w.a,{data:e.data.week.tuesday}),l.a.createElement("hr",null),l.a.createElement("h4",null,"Wednesday"),void 0!==e.data.week.wednesday&&l.a.createElement(w.a,{data:e.data.week.wednesday}),l.a.createElement("hr",null),l.a.createElement("h4",null,"Thursday"),void 0!==e.data.week.thursday&&l.a.createElement(w.a,{data:e.data.week.thursday}),l.a.createElement("hr",null),l.a.createElement("h4",null,"Friday"),void 0!==e.data.week.friday&&l.a.createElement(w.a,{data:e.data.week.friday}),l.a.createElement("hr",null),l.a.createElement("h4",null,"Saturday"),void 0!==e.data.week.saturday&&l.a.createElement(w.a,{data:e.data.week.saturday}),l.a.createElement("hr",null),l.a.createElement("h4",null,"Sunday"),void 0!==e.data.week.sunday&&l.a.createElement(w.a,{data:e.data.week.sunday})),null==e.data.week&&l.a.createElement("div",{className:"result-container"},l.a.createElement(x,{data:t})))}},337:function(e,n,a){"use strict";a.r(n);var t=a(145),r=a.n(t),i=a(101),l=a.n(i),c=a(102),o=a.n(c),s=a(19),d=a.n(s),m=a(0),u=a.n(m),p=a(331),v=a(92),f=a(93),E=a(97),h=a(182),y=a(95),b=a(89),g=a(118),x=a(122),w=a(108),k=a(20),O=a(107),j=a.n(O),N=a(10),P=a(257),S=a.n(P),T=(a(253),a(131),a(88)),C=a(320),I=a(146),V=a(147),F=a(135),M=a(148),L=function(e){var n=e.isSaved,a=e.eventKey,t=Object(m.useState)(!1),r=d()(t,2),i=r[0],l=r[1];console.log(n);var c=Object(F.b)(a,(function(){l(!i)}));return u.a.createElement("div",{className:"accordion-title-main-container",onClick:c},u.a.createElement("div",{className:"accordion-title-icon-container"},u.a.createElement("div",{className:"accordion-title-icon"},u.a.createElement(T.a,{src:i?V.a:I.a,className:"accordion-title-icon-img"})),u.a.createElement("div",{className:"accordion-title"},"Exclude")),u.a.createElement("div",{className:"accordion-title-completed-icon"},n?u.a.createElement(T.a,{src:M.a,className:"accordion-title-icon-img"}):""))},D=function(e){return u.a.createElement(C.a,{className:"accordion-item"},u.a.createElement(E.a,null,u.a.createElement(E.a.Header,null,u.a.createElement(L,{eventKey:e.iId,isSaved:e.isSaved})),u.a.createElement(C.a.Collapse,{eventKey:e.iId},u.a.createElement(E.a.Body,{className:"accordion-card-item"},u.a.createElement(g.a,{element:"input",type:"text",id:"exclude",name:"exclude",label:"Exclude",validators:[Object(w.c)()],errorText:"Please enter an exclude name...",placeholder:"Please enter an exclude name...",onInput:e.onInputHandler}),u.a.createElement("div",{className:"div-buttons"},u.a.createElement(v.a,{variant:"success",className:"btn-left-submit",onClick:e.addExcludeHandler},"Submit"),u.a.createElement(v.a,{variant:"danger",className:"btn-right-remove",onClick:e.deleteExcludeHandler},"Remove  "))))))},H=a(142),A=a(183),G=(a(254),["Choose your diet","Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Pescetarian","Paleo","Primal","Whole30"]),B=["Choose timeframe","Day","Week"];n.default=function(e){var n=Object(m.useContext)(k.a),a=Object(N.g)(),t=Object(m.useState)([]),i=d()(t,2),c=i[0],s=i[1],O=Object(m.useState)(0),P=d()(O,2),T=P[0],C=P[1],I=Object(m.useState)([]),V=d()(I,2),F=V[0],M=V[1],L=Object(m.useState)(new Date),R=d()(L,2),U=R[0],_=R[1],z=Object(m.useState)(!1),K=d()(z,2),W=K[0],X=K[1],J=Object(m.useState)(!1),Q=d()(J,2),$=Q[0],q=Q[1],Y=Object(m.useState)({}),Z=d()(Y,2),ee=Z[0],ne=Z[1],ae=Object(m.useState)({}),te=d()(ae,2),re=te[0],ie=te[1],le=Object(m.useState)(!1),ce=d()(le,2),oe=ce[0],se=ce[1],de=Object(m.useState)(""),me=d()(de,2),ue=me[0],pe=me[1],ve=Object(m.useState)(!0),fe=d()(ve,2),Ee=fe[0],he=(fe[1],Object(m.useState)([])),ye=d()(he,2),be=ye[0],ge=ye[1],xe=Object(m.useState)(!1),we=d()(xe,2),ke=we[0],Oe=we[1],je=function(){return Oe(!1)},Ne=Object(m.useState)(""),Pe=d()(Ne,2),Se=Pe[0],Te=Pe[1],Ce=Object(x.a)({title:{value:"",isValid:!1},targetCalories:{value:"",isValid:!1},diet:{value:"Gluten Free",isValid:!1},timeFrame:{value:"Day",isValid:!1},exclude:{value:"",isValid:!1}},!1),Ie=d()(Ce,3),Ve=Ie[0],Fe=Ie[1],Me=(Ie[2],function(){var e=o()(l.a.mark((function e(t){var r,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!Ee){e.next=19;break}return r="Day"===Ve.inputs.timeFrame.value?re:ee,i={title:Ve.inputs.title.value,date:U,timeFrame:Ve.inputs.timeFrame.value,targetCalories:Ve.inputs.targetCalories.value,diet:Ve.inputs.diet.value,exclude:F.join(),myPlan:r,creator:n.userId},e.prev=5,e.next=8,j.a.post("http://localhost:5000/api/mealplans/new",i,{headers:{Authorization:"Bearer ".concat(n.token)}});case 8:c=e.sent,pe(c.data.mealplan.id),a.push("/mealplans/all"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),Te(e.t0.response.data.message),Oe(!0);case 17:e.next=29;break;case 19:return e.prev=19,e.next=22,j.a.delete("http://localhost:5000/api"+"/mealplans/".concat(ue),{headers:{Authorization:"Bearer ".concat(n.token)}});case 22:e.sent,e.next=29;break;case 25:e.prev=25,e.t1=e.catch(19),Te(e.t1.message),Oe(!0);case 29:e.next=35;break;case 31:e.prev=31,e.t2=e.catch(1),Te(e.t2.message),Oe(!0);case 35:case"end":return e.stop()}}),e,null,[[1,31],[5,13],[19,25]])})));return function(n){return e.apply(this,arguments)}}()),Le=function(){var e=o()(l.a.mark((function e(n){var a,t,r,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=Ve.inputs.timeFrame.value,t=Ve.inputs.diet.value,r=Ve.inputs.targetCalories.value,i=F.join(),e.prev=5,e.next=8,j.a.get("https://api.spoonacular.com/mealplanner/generate?timeFrame=".concat(a,"&apiKey=").concat("cd8ec2abad1246dc89143625833db935","&diet=").concat(t,"&targetCalories=").concat(r,"&exclude=").concat(i));case 8:c=e.sent,console.log(c),c.data.meals?(ie(c.data),X(!0),q(!1)):(q(!0),X(!1),ne(c.data)),se(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),Te(e.t0.response.data.message),Oe(!0);case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(n){return e.apply(this,arguments)}}();return u.a.createElement("div",{className:"recipe-main"},u.a.createElement("h3",null,"-"),ke&&u.a.createElement(p.a,{show:ke,onHide:je},u.a.createElement(p.a.Header,{closeButton:!0},u.a.createElement(p.a.Title,null,"Error Message")),u.a.createElement(p.a.Body,null,Se),u.a.createElement(p.a.Footer,null,u.a.createElement(v.a,{variant:"secondary",onClick:je},"Close"))),u.a.createElement(f.a,{className:"new-recipe-container"},u.a.createElement(E.a,{border:"secondary",className:"recipe-form"},u.a.createElement(h.a,{className:"form-container",onSubmit:Me},u.a.createElement(y.a,null,u.a.createElement(b.a,{sm:6},u.a.createElement(g.a,{element:"input",type:"text",id:"title",name:"title",label:"Title",validators:[Object(w.c)()],errorText:"Please enter a title...",placeholder:"Please enter a title...",onInput:Fe}),u.a.createElement(g.a,{element:"select",id:"diet",label:"Diet",name:"diet",validators:[Object(w.c)()],errorText:"Please choose your diet..",placeholder:"Please choose your diet..",options:G,onInput:Fe}),u.a.createElement("div",{className:"btn-date-container"},u.a.createElement(h.a.Group,{controlId:"exampleForm.SelectCustom",className:"date-picker"},u.a.createElement(h.a.Label,null,"Date"),u.a.createElement(S.a,{showPopperArrow:!1,selected:U,onChange:function(e){return _(e)}})),oe&&n.token&&u.a.createElement(v.a,{type:"submit",variant:Ee?"success":"danger",size:"lg"},Ee?" Add Meal Plan":"Remove Meal Plan"))),u.a.createElement(b.a,{sm:6},u.a.createElement(g.a,{element:"input",type:"number",id:"targetCalories",name:"targetCalories",label:"Target Calories",validators:[Object(w.c)()],errorText:"Please enter a Target calories for a day...",placeholder:"Please enter a Target calories for a day...",onInput:Fe}),u.a.createElement(g.a,{element:"select",id:"timeFrame",label:"Time Frame",name:"timeFrame",validators:[Object(w.c)()],errorText:"Please choose your time frame..",placeholder:"Please choose your time frame..",options:B,onInput:Fe}),u.a.createElement(v.a,{className:"increment-btn",variant:"warning",size:"lg",block:!0,onClick:function(){s((function(e){return[].concat(r()(e),[T])})),C((function(e){return e+1}))}},"Add Exclude"),c.map((function(e){return u.a.createElement(D,{key:e,addExcludeHandler:function(){return function(e){var n=r()(F),a=r()(be);""!==Ve.inputs.exclude.value?(n[e]=Ve.inputs.exclude.value,M(n),a[e]=!0,ge(a)):(Te("Make sure fill all inputs ..."),a[e]=!1,ge(a),Oe(!0))}(e)},onInputHandler:Fe,deleteExcludeHandler:function(){return function(e){var n=r()(be);s(c.filter((function(n){return n!==e}))),C((function(e){return e-1})),n[e]=!1,ge(n)}(e)},iId:e,isSaved:be[e]})})))),u.a.createElement(v.a,{className:"submit-btn",size:"lg",block:!0,onClick:Le}," Search Meal Plan")))),oe&&u.a.createElement(f.a,{className:"new-recipe-container plan-container"},u.a.createElement(E.a,{border:"secondary",className:"recipe-form results-container"},W&&void 0!==re&&u.a.createElement(H.a,{data:re}),$&&void 0!==ee&&u.a.createElement(A.a,{data:ee,week:!0}))))}}}]);
//# sourceMappingURL=9.bundle.js.map