(()=>{var e,t={176:(e,t,r)=>{"use strict";var n=r(592),o=r(638);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}o(window).on("load",(function(){var e;(e=o("[data-slider-id]")).length&&e.each((function(){var e=o(this),t=e.data("slider-id"),r=o("[data-slider-buttons]");r.length&&e.find(".swiper-slide").length<+r.data("slider-buttons")&&r.addClass("hidden");var a={slidesPerView:"auto",spaceBetween:10,speed:500};switch(t){case 2:a=c(c({},a),{},{loop:!0});break;case"centered":a=c(c({},a),{},{spaceBetween:0,loop:!0,centeredSlides:!0})}new n.Z(e[0],a)}))}));r(304);document.addEventListener("DOMContentLoaded",(function(){document.body.classList.remove("body--notransition");window.Telegram.WebApp;var e=document.querySelector("[data-search]");if(e){var t=e.querySelector("[data-search-input]");t.onfocus=function(){document.body.classList.add("body--hidden"),e.classList.add("active")},t.onblur=function(){t.value||(document.body.classList.remove("body--hidden"),e.classList.remove("active"))}}})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-filters]");e&&document.querySelectorAll("[data-filters-btn]").forEach((function(t){t.onclick=function(){e.classList.toggle("active"),document.body.classList.toggle("body--hidden")}}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-choice]").forEach((function(e){e.querySelectorAll("[data-choice-item]").forEach((function(t){t.onclick=function(){t.classList.contains("active")||(e.querySelector("[data-choice-item].active").classList.remove("active"),t.classList.add("active"))}}))}))}))},304:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-tabs]");e.length&&e.forEach((function(e){var t=e.querySelectorAll("[data-tabs-item]"),r=e.querySelectorAll("[data-tabs-block]");t.forEach((function(t,n){t.onclick=function(){if(!t.classList.contains("active")){var o=e.querySelector("[data-tabs-item].active"),a=e.querySelector("[data-tabs-block].active");o.classList.remove("active"),a.classList.remove("active"),t.classList.add("active"),r[n].classList.add("active")}}}))}))}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var c=1/0;for(l=0;l<e.length;l++){for(var[r,o,a]=e[l],i=!0,s=0;s<r.length;s++)(!1&a||c>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(i=!1,a<c&&(c=a));if(i){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[c,i,s]=r,d=0;if(c.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var l=s(n)}for(t&&t(r);d<c.length;d++)a=c[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[761,532],(()=>n(176)));o=n.O(o)})();