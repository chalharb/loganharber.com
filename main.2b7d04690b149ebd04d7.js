!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o,i=n(1),r=(o=i)&&o.__esModule?o:{default:o};n(3),n(4),window.onload=function(){(0,r.default)(document.getElementById("main-menu"),{sectionClass:".main-section",menuActiveTarget:".nav-link",activeClass:"is-active",offset:100})}},function(t,e,n){t.exports=((t,e={})=>{const{ScrollSpy:o}=n(2),i=new o(t,e);return window.onload=i.onScroll(),window.addEventListener("scroll",()=>i.onScroll()),i})},function(t,e,n){"use strict";n.r(e),n.d(e,"ScrollSpy",function(){return o});class o{constructor(t,e={}){if(!t)throw new Error("First argument is query selector to your navigation.");if("object"!=typeof e)throw new Error("Second argument must be instance of Object.");this.menuList=t instanceof HTMLElement?t:document.querySelector(t),this.options=Object.assign({},{sectionClass:".scrollspy",menuActiveTarget:"li > a",offset:0,hrefAttribute:"href",activeClass:"active"},e),this.sections=document.querySelectorAll(this.options.sectionClass)}onScroll(){const t=this.getSectionInView(),e=this.getMenuItemBySection(t);e&&(this.removeCurrentActive({ignore:e}),this.setActive(e))}getMenuItemBySection(t){if(!t)return;const e=t.getAttribute("id");return this.menuList.querySelector(`[${this.options.hrefAttribute}="#${e}"]`)}getSectionInView(){for(let t=0;t<this.sections.length;t++){const e=this.sections[t].offsetTop,n=e+this.sections[t].offsetHeight,o=(document.documentElement.scrollTop||document.body.scrollTop)+this.options.offset;if(o>e&&o<=n)return this.sections[t]}}setActive(t){t.classList.contains(this.options.activeClass)||t.classList.add(this.options.activeClass)}removeCurrentActive({ignore:t}){const{hrefAttribute:e,menuActiveTarget:n}=this.options,o=`${n}.active:not([${e}="${t.getAttribute(e)}"])`;this.menuList.querySelectorAll(o).forEach(t=>t.classList.remove(this.options.activeClass))}}},function(t,e,n){},function(t,e,n){}]);
//# sourceMappingURL=main.2b7d04690b149ebd04d7.js.map