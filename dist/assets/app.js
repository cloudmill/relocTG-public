(()=>{var e,t={6064:(e,t,o)=>{"use strict";function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function a(){var e=JSON.parse(localStorage.getItem("history")),t=e[e.length-2];e.pop(),e.length>1?localStorage.setItem("history",JSON.stringify(e)):(localStorage.removeItem("history"),window.Telegram.WebApp.BackButton.hide()),window.location.assign(t)}document.addEventListener("DOMContentLoaded",(function(){var e=window.Telegram.WebApp.BackButton;window.location.pathname.includes("main")&&(localStorage.removeItem("history"),localStorage.removeItem("offsets")),e.onClick(a),window.onpageshow=function(){var t=window.location.pathname;if(null===localStorage.getItem("history"))localStorage.setItem("history",JSON.stringify([t]));else{var o=JSON.parse(localStorage.getItem("history"));o.includes(t)||localStorage.setItem("history",JSON.stringify([].concat(n(o),[t])))}JSON.parse(localStorage.getItem("history")).length>1&&e.show()},window.addEventListener("beforeunload",(function(){var e=localStorage.getItem("offsets");if(null===e)localStorage.setItem("offsets",JSON.stringify([window.scrollY]));else{var t=JSON.parse(e);localStorage.setItem("offsets",JSON.stringify([].concat(n(t),[window.scrollY])))}}))}));var s=o(2592),c=o(5638);function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){d(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}c(window).on("load",(function(){var e;(e=c("[data-slider-id]")).length&&e.each((function(){var e=c(this),t=e.data("slider-id"),o=c("[data-slider-buttons]");o.length&&e.find(".swiper-slide").length<+o.data("slider-buttons")&&o.addClass("hidden");var n={slidesPerView:"auto",spaceBetween:10,speed:500};switch(t){case 2:n=l(l({},n),{},{loop:!0});break;case"centered":n=l(l({},n),{},{spaceBetween:0,loop:!0,centeredSlides:!0})}new s.Z(e[0],n)}))}));o(6304);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-search]");if(e){var t=e.getAttribute("data-search"),o=window.Telegram.WebApp;if(t){var n=function t(){document.body.classList.remove("body--hidden"),e.classList.add("hide"),o.BackButton.offClick(t),o.BackButton.onClick(a)};document.querySelector("[data-search-btn]").onclick=function(){e.classList.remove("hide"),document.body.classList.add("body--hidden"),o.BackButton.offClick(a),o.BackButton.onClick(n),o.BackButton.show()}}else{var r=function t(){document.body.classList.remove("body--hidden"),e.classList.remove("active"),o.BackButton.hide(),c.blur(),o.BackButton.offClick(t),o.BackButton.onClick(a)},s=document.querySelector("[data-search-input]"),c=e.querySelector("input");s.onfocus=function(){document.body.classList.add("body--hidden"),e.classList.add("active"),o.BackButton.show(),c.focus(),o.BackButton.offClick(a),o.BackButton.onClick(r)}}window.addEventListener("click",(function(e){e.target.closest("[data-search-clear]")&&(document.querySelector("[data-search-container]").innerHTML="")}))}})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-filters]");if(e){var t=function t(){e.classList.remove("active"),document.body.classList.remove("body--hidden"),d.hide(),l.offClick(t),l.onClick(a)},o=document.querySelectorAll("[data-filters-btn]"),n=document.querySelectorAll("[data-filters-checkbox]"),r=[],s=document.querySelector("[data-filters-container]"),c=document.querySelector("[data-filters-list]"),i=window.Telegram.WebApp,l=i.BackButton,d=i.MainButton;o.forEach((function(o){o.onclick=function(){e.classList.contains("active")?(e.classList.remove("active"),document.body.classList.remove("body--hidden"),d.hide()):(e.classList.add("active"),document.body.classList.add("body--hidden"),l.offClick(a),l.onClick(t),console.log(l),r.length&&d.show())}})),n.forEach((function(e){e.onchange=function(){var e=this;this.checked?r.push({name:this.name,id:this.id,node:this}):r=r.filter((function(t){return t.name!==e.name})),r.length?d.show():d.hide()}})),d.text="Применить фильтры",d.textColor="#fff",d.color="#9736D7",d.onClick((function(){s.classList.remove("hidden");var t="";r.forEach((function(e){var o='\n          <div class="catalog-page__filters-item" data-prop="'.concat(e.name,'">\n          <div class="catalog-page__filters-text">').concat(e.name,'</div>\n          <div class="catalog-page__filters-icon" data-prop-delete=""></div>\n          </div>\n        ');t+=o})),c.innerHTML=t,d.hide(),e.classList.remove("active"),document.body.classList.remove("body--hidden"),c.querySelectorAll("[data-prop-delete]").forEach((function(e){var t=e.closest("[data-prop]"),o=t.getAttribute("data-prop");e.onclick=function(){t.remove(),(r=r.filter((function(e){return e.name!==o||(e.node.checked=!1,!1)}))).length||s.classList.add("hidden")}}))}))}}));o(5818);var u=o(1320),m=o.n(u);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-timer-container]");if(e){var t=m()(e.getAttribute("data-timer-container"),"DD.MM.YYYY HH:mm:ss"),o=m()(),n=t.valueOf()-o.valueOf(),r={d:Math.floor(n/864e5),h:Math.floor(n%864e5/36e5),m:Math.floor(n%36e5/6e4),s:Math.floor(n%6e4/1e3)};for(var a in r)document.querySelector('[data-timer="'.concat(a,'"]')).textContent=r[a];var s=setInterval((function(){var e=m()(),o=t.valueOf()-e.valueOf(),n={d:Math.floor(o/864e5),h:Math.floor(o%864e5/36e5),m:Math.floor(o%36e5/6e4),s:Math.floor(o%6e4/1e3)};for(var r in n)document.querySelector('[data-timer="'.concat(r,'"]')).textContent=n[r];o<1e3&&clearInterval(s)}),1e3)}}));o(4563);var f=o(5638);f((function(){f("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Заполните данные",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru")}));o(8301);var h=o(5638);document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){document.body.classList.remove("body--notransition")}),10);var e=window.Telegram.WebApp;if(e.ready(),console.log(e),e.expand(),e.enableClosingConfirmation(),"dark"===e.colorScheme){var t=e.themeParams;document.documentElement.style.setProperty("--color-white","#1C1C1C"),document.documentElement.style.setProperty("--color-white-second",t.bg_color),document.documentElement.style.setProperty("--color-white-third","#000000"),document.documentElement.style.setProperty("--color-bg",t.bg_color),document.documentElement.style.setProperty("--color-bg-second","255, 255, 255"),document.documentElement.style.setProperty("--color-tabs-bg","#1C1C1C"),document.documentElement.style.setProperty("--color-black","white"),document.documentElement.style.setProperty("--color-header-svg","white"),document.documentElement.style.setProperty("--opacity-rate","0.1"),document.documentElement.style.setProperty("--opacity-rate-second","0.08")}if(document.querySelector(".card-page")){var o=e.MainButton;o.text="Добавить в корзину",o.textColor="#fff",o.color="#9736D7",o.show(),o.onClick((function(){"Добавить в корзину"===o.text?(o.text="Перейти в корзину",o.color="#34C759"):window.location.assign("cart")}))}if(document.querySelector(".cart-page")){var n=function(){c.value=this.value},r=window.Telegram.WebApp.MainButton;r.setParams({text:"Оплатить через СБП",color:"#34C759",textColor:"#fff",is_visible:!0});r.onClick((function(){var e=document.querySelector("[data-tabs-block].active").querySelector("[data-cart-form]");h(e).parsley().validate()})),window.addEventListener("resize",(function(e){var t=document.activeElement.getBoundingClientRect().top+document.documentElement.scrollTop;window.scrollTo({top:t,behavior:"smooth"})}));var a=document.querySelector("[data-cart-checkbox]"),s=document.querySelector("[data-cart-email]"),c=document.querySelector("[data-cart-check]");a.onchange=function(){this.checked?(c.value=s.value,s.addEventListener("input",n)):s.removeEventListener("input",n)}}})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-choice]").forEach((function(e){e.querySelectorAll("[data-choice-item]").forEach((function(t){t.onclick=function(){t.classList.contains("active")||(e.querySelector("[data-choice-item].active").classList.remove("active"),t.classList.add("active"))}}))}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-cart-item]").forEach((function(e){e.querySelector("[data-cart-delete]").onclick=function(){e.remove(),document.querySelectorAll("[data-cart-item]").length||(document.querySelector("[data-cart]").classList.add("empty"),document.querySelector("[data-cart-price]").textContent="0 ₽")}}))}))},5818:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-header]");if(e){var t=function(){var t=window.scrollY;Math.abs(o-t)>=1&&(t>o?e.classList.add("hidden"):e.classList.remove("hidden")),o>1&&e.classList.add("active"),t<1&&(e.classList.remove("hidden"),e.classList.remove("active")),o=t},o=window.scrollY;t(),window.addEventListener("scroll",t)}}))},8301:()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-price-btn]").forEach((function(e,t){e.addEventListener("click",(function(){document.querySelectorAll("[data-price]").forEach((function(e){return e.classList.remove("active")})),document.querySelectorAll('[data-price="'.concat(t,'"]')).forEach((function(e){return e.classList.add("active")}))}))}))}))},6304:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-tabs]");e.length&&e.forEach((function(e){var t=e.querySelectorAll("[data-tabs-item]"),o=e.querySelectorAll("[data-tabs-block]");t.forEach((function(t,n){t.onclick=function(){if(!t.classList.contains("active")){var r=e.querySelector("[data-tabs-item].active"),a=e.querySelector("[data-tabs-block].active");r.classList.remove("active"),a.classList.remove("active"),t.classList.add("active"),o[n].classList.add("active")}}}))}))}))},5126:(e,t,o)=>{var n={"./af":1009,"./af.js":1009,"./ar":8769,"./ar-dz":3739,"./ar-dz.js":3739,"./ar-kw":3745,"./ar-kw.js":3745,"./ar-ly":9576,"./ar-ly.js":9576,"./ar-ma":7408,"./ar-ma.js":7408,"./ar-sa":8781,"./ar-sa.js":8781,"./ar-tn":7856,"./ar-tn.js":7856,"./ar.js":8769,"./az":2030,"./az.js":2030,"./be":6476,"./be.js":6476,"./bg":5304,"./bg.js":5304,"./bm":8125,"./bm.js":8125,"./bn":34,"./bn-bd":9835,"./bn-bd.js":9835,"./bn.js":34,"./bo":4082,"./bo.js":4082,"./br":8317,"./br.js":8317,"./bs":3107,"./bs.js":3107,"./ca":8272,"./ca.js":8272,"./cs":8567,"./cs.js":8567,"./cv":1583,"./cv.js":1583,"./cy":76,"./cy.js":76,"./da":1760,"./da.js":1760,"./de":8973,"./de-at":3214,"./de-at.js":3214,"./de-ch":4728,"./de-ch.js":4728,"./de.js":8973,"./dv":4053,"./dv.js":4053,"./el":7499,"./el.js":7499,"./en-au":7876,"./en-au.js":7876,"./en-ca":7010,"./en-ca.js":7010,"./en-gb":4239,"./en-gb.js":4239,"./en-ie":9830,"./en-ie.js":9830,"./en-il":8438,"./en-il.js":8438,"./en-in":5322,"./en-in.js":5322,"./en-nz":3264,"./en-nz.js":3264,"./en-sg":5449,"./en-sg.js":5449,"./eo":9486,"./eo.js":9486,"./es":2430,"./es-do":6310,"./es-do.js":6310,"./es-mx":7038,"./es-mx.js":7038,"./es-us":3099,"./es-us.js":3099,"./es.js":2430,"./et":4975,"./et.js":4975,"./eu":7063,"./eu.js":7063,"./fa":8073,"./fa.js":8073,"./fi":957,"./fi.js":957,"./fil":8764,"./fil.js":8764,"./fo":1775,"./fo.js":1775,"./fr":4179,"./fr-ca":4306,"./fr-ca.js":4306,"./fr-ch":3791,"./fr-ch.js":3791,"./fr.js":4179,"./fy":7014,"./fy.js":7014,"./ga":6911,"./ga.js":6911,"./gd":2958,"./gd.js":2958,"./gl":7344,"./gl.js":7344,"./gom-deva":3161,"./gom-deva.js":3161,"./gom-latn":5798,"./gom-latn.js":5798,"./gu":8485,"./gu.js":8485,"./he":7917,"./he.js":7917,"./hi":2159,"./hi.js":2159,"./hr":5842,"./hr.js":5842,"./hu":5,"./hu.js":5,"./hy-am":1312,"./hy-am.js":1312,"./id":781,"./id.js":781,"./is":4101,"./is.js":4101,"./it":3467,"./it-ch":4759,"./it-ch.js":4759,"./it.js":3467,"./ja":4164,"./ja.js":4164,"./jv":79,"./jv.js":79,"./ka":7036,"./ka.js":7036,"./kk":2022,"./kk.js":2022,"./km":3418,"./km.js":3418,"./kn":3655,"./kn.js":3655,"./ko":986,"./ko.js":986,"./ku":1902,"./ku.js":1902,"./ky":4604,"./ky.js":4604,"./lb":9026,"./lb.js":9026,"./lo":537,"./lo.js":537,"./lt":2288,"./lt.js":2288,"./lv":1495,"./lv.js":1495,"./me":690,"./me.js":690,"./mi":2571,"./mi.js":2571,"./mk":3959,"./mk.js":3959,"./ml":7225,"./ml.js":7225,"./mn":88,"./mn.js":88,"./mr":6622,"./mr.js":6622,"./ms":1070,"./ms-my":8899,"./ms-my.js":8899,"./ms.js":1070,"./mt":3931,"./mt.js":3931,"./my":5393,"./my.js":5393,"./nb":4274,"./nb.js":4274,"./ne":8914,"./ne.js":8914,"./nl":3114,"./nl-be":8479,"./nl-be.js":8479,"./nl.js":3114,"./nn":4513,"./nn.js":4513,"./oc-lnc":6549,"./oc-lnc.js":6549,"./pa-in":8264,"./pa-in.js":8264,"./pl":2848,"./pl.js":2848,"./pt":899,"./pt-br":5077,"./pt-br.js":5077,"./pt.js":899,"./ro":2512,"./ro.js":2512,"./ru":1753,"./ru.js":1753,"./sd":6840,"./sd.js":6840,"./se":8362,"./se.js":8362,"./si":464,"./si.js":464,"./sk":6324,"./sk.js":6324,"./sl":1963,"./sl.js":1963,"./sq":3039,"./sq.js":3039,"./sr":3454,"./sr-cyrl":466,"./sr-cyrl.js":466,"./sr.js":3454,"./ss":5158,"./ss.js":5158,"./sv":8859,"./sv.js":8859,"./sw":7594,"./sw.js":7594,"./ta":6915,"./ta.js":6915,"./te":5677,"./te.js":5677,"./tet":2154,"./tet.js":2154,"./tg":4098,"./tg.js":4098,"./th":9071,"./th.js":9071,"./tk":9381,"./tk.js":9381,"./tl-ph":1869,"./tl-ph.js":1869,"./tlh":2346,"./tlh.js":2346,"./tr":1483,"./tr.js":1483,"./tzl":266,"./tzl.js":266,"./tzm":3138,"./tzm-latn":2960,"./tzm-latn.js":2960,"./tzm.js":3138,"./ug-cn":9456,"./ug-cn.js":9456,"./uk":805,"./uk.js":805,"./ur":1127,"./ur.js":1127,"./uz":9628,"./uz-latn":840,"./uz-latn.js":840,"./uz.js":9628,"./vi":6962,"./vi.js":6962,"./x-pseudo":9257,"./x-pseudo.js":9257,"./yo":2423,"./yo.js":2423,"./zh-cn":1002,"./zh-cn.js":1002,"./zh-hk":6046,"./zh-hk.js":6046,"./zh-mo":6903,"./zh-mo.js":6903,"./zh-tw":4710,"./zh-tw.js":4710};function r(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=5126}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,e=[],n.O=(t,o,r,a)=>{if(!o){var s=1/0;for(d=0;d<e.length;d++){for(var[o,r,a]=e[d],c=!0,i=0;i<o.length;i++)(!1&a||s>=a)&&Object.keys(n.O).every((e=>n.O[e](o[i])))?o.splice(i--,1):(c=!1,a<s&&(s=a));if(c){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[s,c,i]=o,l=0;if(s.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(i)var d=i(n)}for(t&&t(o);l<s.length;l++)a=s[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[424,532],(()=>n(6064)));r=n.O(r)})();