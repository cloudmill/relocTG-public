(()=>{var e,t={72:(e,t,o)=>{"use strict";function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function a(){var e=JSON.parse(localStorage.getItem("history")),t=e[e.length-2];e.pop(),e.length>1?localStorage.setItem("history",JSON.stringify(e)):(localStorage.removeItem("history"),window.Telegram.WebApp.BackButton.hide()),window.location.assign(t)}document.addEventListener("DOMContentLoaded",(function(){var e=window.Telegram.WebApp.BackButton;window.Telegram.WebApp.ready(),window.location.pathname.includes("main")&&localStorage.removeItem("history"),e.onClick(a),window.onpageshow=function(t){var o=window.location.pathname;if(null===localStorage.getItem("history"))localStorage.setItem("history",JSON.stringify([o]));else{var r=JSON.parse(localStorage.getItem("history"));r.includes(o)||localStorage.setItem("history",JSON.stringify([].concat(n(r),[o])))}var a=JSON.parse(localStorage.getItem("history"));console.log(a),a.length>1&&e.show()}}));var c=o(592),i=o(638);function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){d(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}i(window).on("load",(function(){var e;(e=i("[data-slider-id]")).length&&e.each((function(){var e=i(this),t=e.data("slider-id"),o=i("[data-slider-buttons]");o.length&&e.find(".swiper-slide").length<+o.data("slider-buttons")&&o.addClass("hidden");var n={slidesPerView:"auto",spaceBetween:10,speed:500};switch(t){case 2:n=s(s({},n),{},{loop:!0});break;case"centered":n=s(s({},n),{},{spaceBetween:0,loop:!0,centeredSlides:!0})}new c.Z(e[0],n)}))}));o(304);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-search]");if(e){var t=e.getAttribute("data-search"),o=window.Telegram.WebApp;if(t){var n=function t(){document.body.classList.remove("body--hidden"),e.classList.add("hide"),o.BackButton.offClick(t),o.BackButton.onClick(a)};document.querySelector("[data-search-btn]").onclick=function(){e.classList.remove("hide"),document.body.classList.add("body--hidden"),o.BackButton.offClick(a),o.BackButton.onClick(n),o.BackButton.show()}}else{var r=document.querySelector("[data-search-input]"),c=e.querySelector("input");r.onfocus=function(){document.body.classList.add("body--hidden"),e.classList.add("active"),o.BackButton.show(),c.focus()},o.BackButton.onClick((function(){document.body.classList.remove("body--hidden"),e.classList.remove("active"),o.BackButton.hide(),c.blur()}))}window.addEventListener("click",(function(e){e.target.closest("[data-search-clear]")&&(document.querySelector("[data-search-container]").innerHTML="")}))}})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-filters]");if(e){var t=function t(){e.classList.remove("active"),document.body.classList.remove("body--hidden"),d.hide(),s.offClick(t),s.onClick(a)},o=document.querySelectorAll("[data-filters-btn]"),n=document.querySelectorAll("[data-filters-checkbox]"),r=[],c=document.querySelector("[data-filters-container]"),i=document.querySelector("[data-filters-list]"),l=window.Telegram.WebApp,s=l.BackButton,d=l.MainButton;o.forEach((function(o){o.onclick=function(){e.classList.contains("active")?(e.classList.remove("active"),document.body.classList.remove("body--hidden"),d.hide()):(e.classList.add("active"),document.body.classList.add("body--hidden"),s.offClick(a),s.onClick(t),console.log(s),r.length&&d.show())}})),n.forEach((function(e){e.onchange=function(){var e=this;this.checked?r.push({name:this.name,id:this.id,node:this}):r=r.filter((function(t){return t.name!==e.name})),r.length?d.show():d.hide()}})),d.text="Применить фильтры",d.textColor="#fff",d.color="#9736D7",d.onClick((function(){c.classList.remove("hidden");var t="";r.forEach((function(e){var o='\n          <div class="catalog-page__filters-item" data-prop="'.concat(e.name,'">\n          <div class="catalog-page__filters-text">').concat(e.name,'</div>\n          <div class="catalog-page__filters-icon" data-prop-delete=""></div>\n          </div>\n        ');t+=o})),i.innerHTML=t,d.hide(),e.classList.remove("active"),document.body.classList.remove("body--hidden"),i.querySelectorAll("[data-prop-delete]").forEach((function(e){var t=e.closest("[data-prop]"),o=t.getAttribute("data-prop");e.onclick=function(){t.remove(),(r=r.filter((function(e){return e.name!==o||(e.node.checked=!1,!1)}))).length||c.classList.add("hidden")}}))}))}}));o(818),o(493),o(563);var u=o(638);u((function(){u("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Заполните данные",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru")})),document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){document.body.classList.remove("body--notransition")}),10);var e=window.Telegram.WebApp;console.log(e),e.expand(),e.enableClosingConfirmation();var t=getComputedStyle(document.documentElement).getPropertyValue("--tg-theme-text-color");try{t.includes("#fff")&&(document.documentElement.style.setProperty("--color-white","#1C1C1C"),document.documentElement.style.setProperty("--color-white-second","#000"),document.documentElement.style.setProperty("--color-bg","#000"),document.documentElement.style.setProperty("--color-bg-second","#1C1C1C"),document.documentElement.style.setProperty("--color-tabs-bg","#1C1C1C"),document.documentElement.style.setProperty("--color-borders","#3B3B3D"),document.documentElement.style.setProperty("--color-black","white"))}catch(e){console.log(e)}if(document.querySelector(".card-page")){var o=e.MainButton;o.text="Добавить в корзину",o.textColor="#fff",o.color="#9736D7",o.show(),o.onClick((function(){"Добавить в корзину"===o.text?(o.text="Перейти в корзину",o.color="#34C759"):window.location.assign("cart")}))}})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-choice]").forEach((function(e){e.querySelectorAll("[data-choice-item]").forEach((function(t){t.onclick=function(){t.classList.contains("active")||(e.querySelector("[data-choice-item].active").classList.remove("active"),t.classList.add("active"))}}))}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-cart-item]").forEach((function(e){e.querySelector("[data-cart-delete]").onclick=function(){e.remove(),document.querySelectorAll("[data-cart-item]").length||(document.querySelector("[data-cart]").classList.add("empty"),document.querySelector("[data-cart-price]").textContent="0 ₽")}}))}))},493:(e,t,o)=>{var n=o(638);window.addEventListener("load",(function(){if(document.querySelector(".cart-page")){var e=function(){c.value=this.value},t=window.Telegram.WebApp.MainButton,o=t.setParams({text:"Оплатить через СБП",color:"#9736D7",textColor:"#fff",is_visible:!0});console.log(o),t.onClick((function(){var e=document.querySelector("[data-tabs-block].active").querySelector("[data-cart-form]");n(e).parsley().validate()})),document.querySelectorAll("[data-cart-form]").forEach((function(e){var t=e.querySelectorAll("input");window.addEventListener("resize",(function(e){var t=document.activeElement.getBoundingClientRect().top+document.documentElement.scrollTop;console.log(t),window.scrollTo({top:t,behavior:"smooth"})})),t.forEach((function(e){}))}));var r=document.querySelector("[data-cart-checkbox]"),a=document.querySelector("[data-cart-email]"),c=document.querySelector("[data-cart-check]");r.onchange=function(){this.checked?(c.value=a.value,a.addEventListener("input",e)):a.removeEventListener("input",e)}}}))},818:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-header]");if(e){var t=function(){var t=window.scrollY;Math.abs(o-t)>=1&&(t>o?e.classList.add("hidden"):e.classList.remove("hidden")),o>1&&e.classList.add("active"),t<1&&(e.classList.remove("hidden"),e.classList.remove("active")),o=t},o=window.scrollY;t(),window.addEventListener("scroll",t)}}))},304:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-tabs]");e.length&&e.forEach((function(e){var t=e.querySelectorAll("[data-tabs-item]"),o=e.querySelectorAll("[data-tabs-block]");t.forEach((function(t,n){t.onclick=function(){if(!t.classList.contains("active")){var r=e.querySelector("[data-tabs-item].active"),a=e.querySelector("[data-tabs-block].active");r.classList.remove("active"),a.classList.remove("active"),t.classList.add("active"),o[n].classList.add("active")}}}))}))}))}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,o,r,a)=>{if(!o){var c=1/0;for(d=0;d<e.length;d++){for(var[o,r,a]=e[d],i=!0,l=0;l<o.length;l++)(!1&a||c>=a)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(i=!1,a<c&&(c=a));if(i){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[c,i,l]=o,s=0;if(c.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var d=l(n)}for(t&&t(o);s<c.length;s++)a=c[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[366,532],(()=>n(72)));r=n.O(r)})();