(()=>{var e,t={176:(e,t,o)=>{"use strict";var r=o(592),n=o(638);function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}n(window).on("load",(function(){var e;(e=n("[data-slider-id]")).length&&e.each((function(){var e=n(this),t=e.data("slider-id"),o=n("[data-slider-buttons]");o.length&&e.find(".swiper-slide").length<+o.data("slider-buttons")&&o.addClass("hidden");var a={slidesPerView:"auto",spaceBetween:10,speed:500};switch(t){case 2:a=c(c({},a),{},{loop:!0});break;case"centered":a=c(c({},a),{},{spaceBetween:0,loop:!0,centeredSlides:!0})}new r.Z(e[0],a)}))}));o(304);document.addEventListener("DOMContentLoaded",(function(){document.body.classList.remove("body--notransition");var e=window.Telegram.WebApp;if(e.expand(),document.querySelector(".card-page")){var t=e.MainButton;t.text="Добавить в корзину",t.textColor="#fff",t.color="#007AFF",t.show(),t.onClick((function(){"Добавить в корзину"===t.text?(t.text="Перейти в корзину",t.color="#34C759"):window.location.assign("cart")}))}var o=document.querySelector("[data-search]");if(o){var r=o.querySelector("[data-search-input]");r.onfocus=function(){document.body.classList.add("body--hidden"),o.classList.add("active")},r.onblur=function(){r.value||(document.body.classList.remove("body--hidden"),o.classList.remove("active"))}}})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-filters]");e&&document.querySelectorAll("[data-filters-btn]").forEach((function(t){t.onclick=function(){e.classList.toggle("active"),document.body.classList.toggle("body--hidden")}}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-choice]").forEach((function(e){e.querySelectorAll("[data-choice-item]").forEach((function(t){t.onclick=function(){t.classList.contains("active")||(e.querySelector("[data-choice-item].active").classList.remove("active"),t.classList.add("active"))}}))}))}))},304:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-tabs]");e.length&&e.forEach((function(e){var t=e.querySelectorAll("[data-tabs-item]"),o=e.querySelectorAll("[data-tabs-block]");t.forEach((function(t,r){t.onclick=function(){if(!t.classList.contains("active")){var n=e.querySelector("[data-tabs-item].active"),a=e.querySelector("[data-tabs-block].active");n.classList.remove("active"),a.classList.remove("active"),t.classList.add("active"),o[r].classList.add("active")}}}))}))}))}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,n,a)=>{if(!o){var c=1/0;for(l=0;l<e.length;l++){for(var[o,n,a]=e[l],i=!0,s=0;s<o.length;s++)(!1&a||c>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(i=!1,a<c&&(c=a));if(i){e.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,n,a]},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[c,i,s]=o,d=0;if(c.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(s)var l=s(r)}for(t&&t(o);d<c.length;d++)a=c[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[761,532],(()=>r(176)));n=r.O(n)})();