(()=>{"use strict";var e,t,r,n={5687:(e,t,r)=>{var n=r(7294),o=r(745),c=r(8561);class a extends c.XY{get quickTypes(){let e;return function(e){e[e.UPDATE=0]="UPDATE"}(e||(e={})),Object.assign({},e)}get reducers(){const e=this.types;return{stamp:(0,c.B6)(e.UPDATE,Date.now()),version:(e="1.0")=>e}}watchUpdate(e){const t=this;return e.pipe((0,c.Ot)(t.types.UPDATE)).subscribe((()=>{t.getState(),console.log("App Updated!")}))}}let l;!function(e,t,r,n){var o,c=arguments.length,a=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(c<3?o(a):c>3?o(t,r,a):o(t,r))||a);c>3&&a&&Object.defineProperty(t,r,a)}([(0,c.Q8)()],a.prototype,"watchUpdate",null),l=()=>e=>t=>e(t);const s=l;var i;(i=console.log)&&i instanceof Function&&r.e(736).then(r.bind(r,8085)).then((({onCLS:e,onFID:t,onFCP:r,onLCP:n,onTTFB:o})=>{e(i),t(i),r(i),n(i),o(i)}));const u=c.r_.create(class extends a{get quickTypes(){let e;return function(e){e[e.UPDATE=0]="UPDATE"}(e||(e={})),Object.assign(Object.assign({},super.quickTypes),e)}},{middlewares:[s]}).connect((function(e){const{duck:t,store:r,dispatch:o}=e;return n.createElement(n.Fragment,null,n.createElement("h2",null,"version: ",r.version,"（",new Date(r.stamp).getDate(),"）"),n.createElement("main",null,"main page content"),n.createElement("footer",null,"page footer"))}));o.s(document.querySelector("#duck-app")).render(n.createElement(u,null))}},o={};function c(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e].call(r.exports,r,r.exports,c),r.exports}c.m=n,e=[],c.O=(t,r,n,o)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],l=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(c.O).every((e=>c.O[e](r[s])))?r.splice(s--,1):(l=!1,o<a&&(a=o));if(l){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(o,a),o},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.e=()=>Promise.resolve(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};c.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,l,s]=r,i=0;if(a.some((t=>0!==e[t]))){for(n in l)c.o(l,n)&&(c.m[n]=l[n]);if(s)var u=s(c)}for(t&&t(r);i<a.length;i++)o=a[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=c.O(void 0,[514,348,736],(()=>c(5687)));a=c.O(a)})();