(self["webpackChunkvue_ecshop"]=self["webpackChunkvue_ecshop"]||[]).push([[545],{1560:function(t,e,s){
/*!
  * Bootstrap toast.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,a){t.exports=a(s(6e3),s(1617),s(4755),s(1752))})(0,(function(t,e,s,a){"use strict";const n="toast",i="bs.toast",o=`.${i}`,r=`mouseover${o}`,c=`mouseout${o}`,l=`focusin${o}`,u=`focusout${o}`,d=`hide${o}`,h=`hidden${o}`,m=`show${o}`,g=`shown${o}`,b="fade",f="hide",p="show",_="showing",v={animation:"boolean",autohide:"boolean",delay:"number"},k={animation:!0,autohide:!0,delay:5e3};class L extends t{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return k}static get DefaultType(){return v}static get NAME(){return n}show(){const t=e.trigger(this._element,m);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(b);const s=()=>{this._element.classList.remove(_),e.trigger(this._element,g),this._maybeScheduleHide()};this._element.classList.remove(f),a.reflow(this._element),this._element.classList.add(p,_),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,d);if(t.defaultPrevented)return;const s=()=>{this._element.classList.add(f),this._element.classList.remove(_,p),e.trigger(this._element,h)};this._element.classList.add(_),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(p),super.dispose()}isShown(){return this._element.classList.contains(p)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,r,(t=>this._onInteraction(t,!0))),e.on(this._element,c,(t=>this._onInteraction(t,!1))),e.on(this._element,l,(t=>this._onInteraction(t,!0))),e.on(this._element,u,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=L.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return s.enableDismissTrigger(L),a.defineJQueryPlugin(L),L}))},7649:function(t,e,s){"use strict";var a=s(4373),n=s(5234),i=s(4161);const o=(0,i.A)();e.A=(0,n.nY)("cartState",{state:()=>({carts:[],total:"",finalTotal:""}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/ecshop-api/cart";o.isLoading=!0,a.A.get(t).then((t=>{o.isLoading=!1,console.log("getCart",t),t.data.success&&(this.carts=t.data.data.carts,this.total=t.data.data.total,this.finalTotal=t.data.data.final_total)}))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/ecshop-api/cart/${t.id}`,s={product_id:t.product_id,qty:t.qty};o.isLoading=!0,o.cartLoadingItem=t.id,a.A.put(e,{data:s}).then((t=>{console.log("updateCart",t),o.isLoading=!1,o.cartLoadingItem="",this.getCart()}))}}})},4161:function(t,e,s){"use strict";var a=s(5234);e.A=(0,a.nY)("statusState",{state:()=>({isLoading:!1,cartLoadingItem:""})})},4146:function(t,e,s){"use strict";s.d(e,{A:function(){return T}});var a=s(6768),n=s(4232);const i={class:"navbar navbar-expand-lg navbar-light bg-light mb-4 py-3"},o={class:"container-fluid"},r=(0,a.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a.Lk)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarText"},l={class:"navbar-nav me-auto mb-2 mb-lg-0"},u={class:"nav-item mx-2 fw-bold"},d={class:"nav-item mx-2 fw-bold"},h={class:"nav-item mx-2 fw-bold"},m={class:"text-end me-4"},g=(0,a.Lk)("i",{class:"bi bi-cart4 fs-3"},null,-1),b={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},f={class:"container-fluid"};function p(t,e,s,p,_,v){const k=(0,a.g2)("router-link"),L=(0,a.g2)("ToastList"),y=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("nav",i,[(0,a.Lk)("div",o,[(0,a.bF)(k,{class:"navbar-brand fs-2 fw-bold text-warning mx-3",to:"/"},{default:(0,a.k6)((()=>[(0,a.eW)("Hokii Poke")])),_:1}),r,(0,a.Lk)("div",c,[(0,a.Lk)("ul",l,[(0,a.Lk)("li",u,[(0,a.bF)(k,{class:"nav-link",to:"/"},{default:(0,a.k6)((()=>[(0,a.eW)("首頁")])),_:1})]),(0,a.Lk)("li",d,[(0,a.bF)(k,{class:"nav-link",to:"/about"},{default:(0,a.k6)((()=>[(0,a.eW)("關於 Hokii")])),_:1})]),(0,a.Lk)("li",h,[(0,a.bF)(k,{class:"nav-link",to:"/products"},{default:(0,a.k6)((()=>[(0,a.eW)("全店商品")])),_:1})])])]),(0,a.Lk)("div",m,[(0,a.bF)(k,{class:"text-warning py-2 position-relative",to:"/cart"},{default:(0,a.k6)((()=>[g,(0,a.Lk)("span",b,(0,n.v_)(t.carts.length),1)])),_:1})])])]),(0,a.Lk)("div",f,[(0,a.bF)(L),(0,a.bF)(y)])],64)}var _=s(1600),v=s(673),k=s(7649),L=s(5234),y={components:{ToastList:v.A},provide(){return{emitter:_.A}},computed:{...(0,L.aH)(k.A,["carts"])}},w=s(1241);const x=(0,w.A)(y,[["render",p]]);var T=x},673:function(t,e,s){"use strict";s.d(e,{A:function(){return L}});var a=s(6768);const n={class:"toast-container position-fixed top-0 end-0 p-3",style:{"z-index":"1050"}};function i(t,e,s,i,o,r){const c=(0,a.g2)("ToastMsg");return(0,a.uX)(),(0,a.CE)("div",n,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.messages,((t,e)=>((0,a.uX)(),(0,a.Wv)(c,{key:e,msg:t},null,8,["msg"])))),128))])}s(4114);var o=s(4232);const r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},c={class:"toast-header"},l={class:"me-auto"},u=(0,a.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),d={key:0,class:"toast-body"};function h(t,e,s,n,i,h){return(0,a.uX)(),(0,a.CE)("div",r,[(0,a.Lk)("div",c,[(0,a.Lk)("span",{class:(0,o.C4)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,a.Lk)("strong",l,(0,o.v_)(s.msg.title),1),u]),s.msg.content?((0,a.uX)(),(0,a.CE)("div",d,(0,o.v_)(s.msg.content),1)):(0,a.Q3)("",!0)],512)}var m=s(1560),g=s.n(m),b={name:"ToastMsg",props:["msg"],mounted(){const t=this.$refs.toast,e=new(g())(t,{delay:2e3});e.show()}},f=s(1241);const p=(0,f.A)(b,[["render",h]]);var _=p,v={components:{ToastMsg:_},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:a}=t;this.messages.push({style:e,title:s,content:a})}))}};const k=(0,f.A)(v,[["render",i]]);var L=k},2396:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return g}});var a=s(6768),n=s.p+"img/poko-logo.d43c1a0d.jpg",i=s.p+"img/poke_bn.1d9a00b5.jpg";const o=(0,a.Lk)("div",{class:"container d-flex flex-column justify-content-center"},[(0,a.Lk)("h1",{class:"text-center text-warning fw-bold mb-4"},"Welcome to Hokii poke!"),(0,a.Lk)("img",{class:"img-fluid mb-3",src:n,alt:""}),(0,a.Lk)("img",{class:"img-fluid",src:i,alt:""})],-1);function r(t,e,s,n,i,r){const c=(0,a.g2)("ShopNavbar");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(c),o],64)}var c=s(4146),l=s(7649),u=s(5234),d={components:{ShopNavbar:c.A},computed:{...(0,u.aH)(l.A,["carts"])},methods:{...(0,u.i0)(l.A,["getCart"])},created(){this.getCart()}},h=s(1241);const m=(0,h.A)(d,[["render",r]]);var g=m}}]);
//# sourceMappingURL=545.ba814905.js.map