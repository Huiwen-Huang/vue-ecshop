(function(){"use strict";var e={9944:function(e,t,n){var o=n(5130),r=n(4373),i=n(6942),a=n(6768);function c(e,t){const n=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(n)}var u=n(1241);const s={},l=(0,u.A)(s,[["render",c]]);var d=l,f=n(1387);const p=[{path:"/",name:"home",component:()=>Promise.all([n.e(462),n.e(843)]).then(n.bind(n,4672))},{path:"/products",component:()=>Promise.all([n.e(462),n.e(212)]).then(n.bind(n,1212))},{path:"/product/:productId",component:()=>Promise.all([n.e(462),n.e(728)]).then(n.bind(n,6728))},{path:"/cart",component:()=>Promise.all([n.e(462),n.e(957),n.e(709)]).then(n.bind(n,7178))},{path:"/checkout/:orderId",component:()=>n.e(980).then(n.bind(n,9980))},{path:"/orders",component:()=>Promise.all([n.e(462),n.e(108)]).then(n.bind(n,108))},{path:"/about",name:"about",component:()=>Promise.all([n.e(462),n.e(378)]).then(n.bind(n,5184))},{path:"/login",component:()=>n.e(929).then(n.bind(n,4929))},{path:"/admin",component:()=>Promise.all([n.e(462),n.e(480)]).then(n.bind(n,4480)),children:[{path:"products",component:()=>Promise.all([n.e(462),n.e(957),n.e(27)]).then(n.bind(n,6027))},{path:"orders",component:()=>Promise.all([n.e(462),n.e(957),n.e(526)]).then(n.bind(n,5526))},{path:"promotions",component:()=>Promise.all([n.e(462),n.e(957),n.e(693)]).then(n.bind(n,5693))}]}],h=(0,f.aE)({history:(0,f.Bt)(),routes:p,linkActiveClass:"active",scrollBehavior(e,t,n){if(e.fullPath.match("newPage"))return{top:0}}});var m=h,v=n(4249),b=(0,v.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),g=n(5756);function y(e){const t=parseInt(e,10);return`${t.toFixed(0).replace(/./g,((e,t,n)=>t&&"."!==e&&(n.length-t)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function P(e){const t=new Date(1e3*e);return t.toLocaleDateString()}var O=n(1600);function w(e,t="更新"){if(e.data.success)O.A.emit("push-message",{style:"success",title:`${t}成功`});else{let n;n="string"===typeof e.data.message?[e.data.message]:e.data.message,O.A.emit("push-message",{style:"danger",title:`${t}失敗`,content:n.join("、")})}}var j=n(5234);const k=(0,o.Ef)(d);k.config.globalProperties.$filters={currency:y,date:P},k.config.globalProperties.$httpMsgState=w;const A=(0,j.Ey)();k.use(A),k.use(b),k.use(m),k.component("LoadingOverlay",g.A),k.use(i.A,r.A),k.mount("#app")},1600:function(e,t,n){var o=n(595);const r=(0,o.A)();t.A=r}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{27:"d619bc0a",108:"5627fd08",212:"d105edb4",378:"c0dc0a03",462:"e21c72a3",480:"88880ad9",526:"5631e9a1",693:"e4b88c22",709:"e9e6dd4f",728:"cfaa55ca",843:"93b21e70",929:"4de94e64",957:"2a25348e",980:"a9500143"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-ecshop:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[r];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue-ecshop/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),c=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],u=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var l=u(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkvue_ecshop"]=self["webpackChunkvue_ecshop"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(9944)}));o=n.O(o)})();
//# sourceMappingURL=app.ffc9a2fb.js.map