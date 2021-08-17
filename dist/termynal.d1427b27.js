parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jY56":[function(require,module,exports) {
"use strict";function t(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=i(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw o}}}}function e(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,a)}function r(t){return function(){var r=this,n=arguments;return new Promise(function(a,i){var o=t.apply(r,n);function s(t){e(o,a,i,s,c,"next",t)}function c(t){e(o,a,i,s,c,"throw",t)}s(void 0)})}}function n(t){return s(t)||o(t)||i(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function s(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,r){return e&&h(t.prototype,e),r&&h(t,r),t}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#termynal",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(this,e),this.container="string"==typeof t?document.querySelector(t):t,this.pfx="data-".concat(r.prefix||"ty"),this.startDelay=r.startDelay||parseFloat(this.container.getAttribute("".concat(this.pfx,"-startDelay")))||600,this.typeDelay=r.typeDelay||parseFloat(this.container.getAttribute("".concat(this.pfx,"-typeDelay")))||90,this.lineDelay=r.lineDelay||parseFloat(this.container.getAttribute("".concat(this.pfx,"-lineDelay")))||1500,this.progressLength=r.progressLength||parseFloat(this.container.getAttribute("".concat(this.pfx,"-progressLength")))||40,this.progressChar=r.progressChar||this.container.getAttribute("".concat(this.pfx,"-progressChar"))||"█",this.progressPercent=r.progressPercent||parseFloat(this.container.getAttribute("".concat(this.pfx,"-progressPercent")))||100,this.cursor=r.cursor||this.container.getAttribute("".concat(this.pfx,"-cursor"))||"▋",this.lineData=this.lineDataToElements(r.lineData||[]),r.noInit||this.init()}return l(e,[{key:"init",value:function(){this.lines=n(this.container.querySelectorAll("[".concat(this.pfx,"]"))).concat(this.lineData);var t=getComputedStyle(this.container);this.container.style.width="0px"!==t.width?t.width:void 0,this.container.style.minHeight="0px"!==t.height?t.height:void 0,this.container.setAttribute("data-termynal",""),this.container.innerHTML="",this.start()}},{key:"start",value:function(){var e=r(regeneratorRuntime.mark(function e(){var r,n,a,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._wait(this.startDelay);case 2:r=t(this.lines),e.prev=3,r.s();case 5:if((n=r.n()).done){e.next=30;break}if(a=n.value,i=a.getAttribute(this.pfx),o=a.getAttribute("".concat(this.pfx,"-delay"))||this.lineDelay,"input"!=i){e.next=17;break}return a.setAttribute("".concat(this.pfx,"-cursor"),this.cursor),e.next=13,this.type(a);case 13:return e.next=15,this._wait(o);case 15:e.next=27;break;case 17:if("progress"!=i){e.next=24;break}return e.next=20,this.progress(a);case 20:return e.next=22,this._wait(o);case 22:e.next=27;break;case 24:return this.container.appendChild(a),e.next=27,this._wait(o);case 27:a.removeAttribute("".concat(this.pfx,"-cursor"));case 28:e.next=5;break;case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(3),r.e(e.t0);case 35:return e.prev=35,r.f(),e.finish(35);case 38:case"end":return e.stop()}},e,this,[[3,32,35,38]])}));return function(){return e.apply(this,arguments)}}()},{key:"type",value:function(){var e=r(regeneratorRuntime.mark(function e(r){var a,i,o,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=n(r.textContent),i=r.getAttribute("".concat(this.pfx,"-typeDelay"))||this.typeDelay,r.textContent="",this.container.appendChild(r),o=t(a),e.prev=5,o.s();case 7:if((s=o.n()).done){e.next=14;break}return c=s.value,e.next=11,this._wait(i);case 11:r.textContent+=c;case 12:e.next=7;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),o.e(e.t0);case 19:return e.prev=19,o.f(),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[5,16,19,22]])}));return function(t){return e.apply(this,arguments)}}()},{key:"progress",value:function(){var t=r(regeneratorRuntime.mark(function t(e){var r,n,a,i,o,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e.getAttribute("".concat(this.pfx,"-progressLength"))||this.progressLength,n=e.getAttribute("".concat(this.pfx,"-progressChar"))||this.progressChar,a=n.repeat(r),i=e.getAttribute("".concat(this.pfx,"-progressPercent"))||this.progressPercent,e.textContent="",this.container.appendChild(e),o=1;case 7:if(!(o<a.length+1)){t.next=17;break}return t.next=10,this._wait(this.typeDelay);case 10:if(s=Math.round(o/a.length*100),e.textContent="".concat(a.slice(0,o)," ").concat(s,"%"),!(s>i)){t.next=14;break}return t.abrupt("break",17);case 14:o++,t.next=7;break;case 17:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"_wait",value:function(t){return new Promise(function(e){return setTimeout(e,t)})}},{key:"lineDataToElements",value:function(t){var e=this;return t.map(function(t){var r=document.createElement("div");return r.innerHTML="<span ".concat(e._attributes(t),">").concat(t.value||"","</span>"),r.firstElementChild})}},{key:"_attributes",value:function(t){var e="";for(var r in t)e+=this.pfx,"type"===r?e+='="'.concat(t[r],'" '):"value"!==r&&(e+="-".concat(r,'="').concat(t[r],'" '));return e}}]),e}();if(document.currentScript.hasAttribute("data-termynal-container")){var f=document.currentScript.getAttribute("data-termynal-container");f.split("|").forEach(function(t){return new p(t)})}
},{}]},{},["jY56"], null)
//# sourceMappingURL=/termynal.d1427b27.js.map