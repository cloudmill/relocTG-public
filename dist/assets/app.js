(()=>{var e,t={72:(e,t,n)=>{"use strict";function o(){document.referrer.includes("main")&&window.Telegram.WebApp.BackButton.hide(),window.Telegram.WebApp.MainButton.hide(),history.go(-1)}document.addEventListener("DOMContentLoaded",(function(){var e=window.Telegram.WebApp.BackButton;console.log(1213),window.location.pathname.includes("main")?e.hide():e.show(),e.onClick(o)}));var a=n(592),c=n(638);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}c(window).on("load",(function(){var e;(e=c("[data-slider-id]")).length&&e.each((function(){var e=c(this),t=e.data("slider-id"),n=c("[data-slider-buttons]");n.length&&e.find(".swiper-slide").length<+n.data("slider-buttons")&&n.addClass("hidden");var o={slidesPerView:"auto",spaceBetween:10,speed:500};switch(t){case 2:o=i(i({},o),{},{loop:!0});break;case"centered":o=i(i({},o),{},{spaceBetween:0,loop:!0,centeredSlides:!0})}new a.Z(e[0],o)}))}));n(304);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-search]");if(e){var t=e.getAttribute("data-search"),n=window.Telegram.WebApp;if(t){var a=function t(){document.body.classList.remove("body--hidden"),e.classList.add("hide"),n.BackButton.offClick(t),n.BackButton.onClick(o)};document.querySelector("[data-search-btn]").onclick=function(){e.classList.remove("hide"),document.body.classList.add("body--hidden"),n.BackButton.offClick(o),n.BackButton.onClick(a),n.BackButton.show()}}else{var c=document.querySelector("[data-search-input]"),r=e.querySelector("input");c.onfocus=function(){document.body.classList.add("body--hidden"),e.classList.add("active"),n.BackButton.show(),r.focus()},n.BackButton.onClick((function(){document.body.classList.remove("body--hidden"),e.classList.remove("active"),n.BackButton.hide(),r.blur()}))}window.addEventListener("click",(function(e){e.target.closest("[data-search-clear]")&&(document.querySelector("[data-search-container]").innerHTML="")}))}})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-filters]");if(e){var t=function t(){e.classList.remove("active"),document.body.classList.remove("body--hidden"),l.hide(),s.offClick(t),s.onClick(o),console.log(s)},n=document.querySelectorAll("[data-filters-btn]"),a=document.querySelectorAll("[data-filters-checkbox]"),c=[],r=document.querySelector("[data-filters-container]"),i=document.querySelector("[data-filters-list]"),d=window.Telegram.WebApp,s=d.BackButton,l=d.MainButton;n.forEach((function(n){n.onclick=function(){e.classList.contains("active")?(e.classList.remove("active"),document.body.classList.remove("body--hidden"),l.hide()):(e.classList.add("active"),document.body.classList.add("body--hidden"),s.offClick(o),s.onClick(t),console.log(s),c.length&&l.show())}})),a.forEach((function(e){e.onchange=function(){var e=this;this.checked?c.push({name:this.name,id:this.id,node:this}):c=c.filter((function(t){return t.name!==e.name})),c.length?l.show():l.hide()}})),l.text="Применить фильтры",l.textColor="#fff",l.color="#007AFF",l.onClick((function(){r.classList.remove("hidden");var t="";c.forEach((function(e){var n='\n          <div class="catalog-page__filters-item" data-prop="'.concat(e.name,'">\n          <div class="catalog-page__filters-text">').concat(e.name,'</div>\n          <div class="catalog-page__filters-icon" data-prop-delete=""></div>\n          </div>\n        ');t+=n})),i.innerHTML=t,l.hide(),e.classList.remove("active"),document.body.classList.remove("body--hidden")})),window.addEventListener("click",(function(e){var t=e.target;if(t.hasAttribute("data-prop-delete")){var n=t.closest("[data-prop]"),o=n.getAttribute("data-prop");n.remove(),(c=c.filter((function(e){return e.name!==o||(e.node.checked=!1,!1)}))).length||r.classList.add("hidden")}}))}}));n(818),n(563);var s=n(638);s((function(){s("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Заполните данные",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru")}));var l=n(638);document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){document.body.classList.remove("body--notransition")}),10);var e=window.Telegram.WebApp;if(e.expand(),e.enableClosingConfirmation(),document.querySelector(".card-page")){var t=e.MainButton;t.text="Добавить в корзину",t.textColor="#fff",t.color="#007AFF",t.show(),t.onClick((function(){"Добавить в корзину"===t.text?(t.text="Перейти в корзину",t.color="#34C759"):window.location.assign("cart")}))}if(document.querySelector(".cart-page")){var n=e.MainButton;n.text="Оплатить через СБП",n.textColor="#fff",n.color="#007AFF",n.show(),n.onClick((function(){var e=document.querySelector("[data-tabs-block].active").querySelector("form");console.log(e),l(e).parsley().validate()}))}})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-choice]").forEach((function(e){e.querySelectorAll("[data-choice-item]").forEach((function(t){t.onclick=function(){t.classList.contains("active")||(e.querySelector("[data-choice-item].active").classList.remove("active"),t.classList.add("active"))}}))}))})),document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("click",(function(e){var t=e.target.closest("[data-cart-delete]");t&&(t.closest("[data-cart-item]").remove(),document.querySelectorAll("[data-cart-item]").length||(document.querySelector("[data-cart]").classList.add("empty"),document.querySelector("[data-cart-price]").textContent="0 ₽"))}))}))},818:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-header]");if(e){var t=function(){var t=window.scrollY;Math.abs(n-t)>=1&&(t>n?e.classList.add("hidden"):e.classList.remove("hidden")),n>1&&e.classList.add("active"),t<1&&(e.classList.remove("hidden"),e.classList.remove("active")),n=t},n=window.scrollY;t(),window.addEventListener("scroll",t)}}))},304:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-tabs]");e.length&&e.forEach((function(e){var t=e.querySelectorAll("[data-tabs-item]"),n=e.querySelectorAll("[data-tabs-block]");t.forEach((function(t,o){t.onclick=function(){if(!t.classList.contains("active")){var a=e.querySelector("[data-tabs-item].active"),c=e.querySelector("[data-tabs-block].active");a.classList.remove("active"),c.classList.remove("active"),t.classList.add("active"),n[o].classList.add("active")}}}))}))}))}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var c=n[e]={exports:{}};return t[e].call(c.exports,c,c.exports,o),c.exports}o.m=t,e=[],o.O=(t,n,a,c)=>{if(!n){var r=1/0;for(l=0;l<e.length;l++){for(var[n,a,c]=e[l],i=!0,d=0;d<n.length;d++)(!1&c||r>=c)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(i=!1,c<r&&(r=c));if(i){e.splice(l--,1);var s=a();void 0!==s&&(t=s)}}return t}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[n,a,c]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,c,[r,i,d]=n,s=0;if(r.some((t=>0!==e[t]))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(d)var l=d(o)}for(t&&t(n);s<r.length;s++)c=r[s],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(l)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[366,532],(()=>o(72)));a=o.O(a)})();