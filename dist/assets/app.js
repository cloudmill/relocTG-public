(()=>{"use strict";var e,t={176:(e,t,r)=>{var n=r(592),a=r(638);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}a(window).on("load",(function(){var e;(e=a("[data-slider-id]")).length&&e.each((function(){var e,t,r=a(this),o=r.data("slider-id"),l=r.data("slider-prev"),s=r.data("slider-next"),d=a('[data-slider-button="'.concat(l,'"]')),u=a('[data-slider-button="'.concat(s,'"]')),f=a("[data-slider-buttons]");if(f.length&&r.find(".swiper-slide").length<+f.data("slider-buttons")&&f.addClass("hidden"),r[0].hasAttribute("data-thumbs-slider")){var p=a('[data-thumbs-id="'.concat(o,'"]'));e=new n.Z(p[0],{direction:"vertical",slidesPerView:"auto",on:{init:function(e){e.el.querySelectorAll("[data-thumb]").forEach((function(e,r){e.onclick=function(){t.slideTo(r)}}))}}})}var b={slidesPerView:"auto",spaceBetween:12,speed:500,breakpoints:c({},1280,{spaceBetween:40})};switch(o){case 2:b=i(i({},b),{},{loop:!0});break;case 11:case"m11":b={pagination:{el:'[data-swiper-pagination="'.concat(o,'"]'),type:"bullets"},on:{slideChange:function(t){var r=t.realIndex,n=e.el.querySelectorAll("[data-thumb]");e.el.querySelector("[data-thumb].active").classList.remove("active"),n[r].classList.add("active"),e.slideTo(r)}}}}t=new n.Z(r[0],b),d.on("click",(function(){t.slidePrev()})),u.on("click",(function(){t.slideNext()}))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=window.Telegram.WebApp;document.querySelector("[data-btn]"),document.querySelector("[data-error]");console.log(e.initDataUnsafe.user.id)}))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,c,l]=r,s=0;if(i.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(l)var d=l(n)}for(t&&t(r);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[761,532],(()=>n(176)));a=n.O(a)})();