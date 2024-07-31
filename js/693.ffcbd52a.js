(self["webpackChunkvue_ecshop"]=self["webpackChunkvue_ecshop"]||[]).push([[693],{2894:function(t,e,s){
/*!
  * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(6e3),s(1617),s(4822),s(7100),s(4755),s(2888),s(1752),s(6714))})(0,(function(t,e,s,i,n,o,a,l){"use strict";const d="modal",c="bs.modal",r=`.${c}`,u=".data-api",h="Escape",p=`hide${r}`,m=`hidePrevented${r}`,_=`hidden${r}`,g=`show${r}`,f=`shown${r}`,b=`resize${r}`,k=`click.dismiss${r}`,v=`mousedown.dismiss${r}`,L=`keydown.dismiss${r}`,y=`click${r}${u}`,C="modal-open",w="fade",A="show",E="modal-static",x=".modal.show",$=".modal-dialog",T=".modal-body",M='[data-bs-toggle="modal"]',D={backdrop:!0,focus:!0,keyboard:!0},P={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class N extends t{constructor(t,e){super(t,e),this._dialog=s.findOne($,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new l,this._addEventListeners()}static get Default(){return D}static get DefaultType(){return P}static get NAME(){return d}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const s=e.trigger(this._element,g,{relatedTarget:t});s.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(C),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=e.trigger(this._element,p);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(A),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){e.off(window,r),e.off(this._dialog,r),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new i({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new o({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const i=s.findOne(T,this._dialog);i&&(i.scrollTop=0),a.reflow(this._element),this._element.classList.add(A);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,e.trigger(this._element,f,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){e.on(this._element,L,(t=>{t.key===h&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),e.on(window,b,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),e.on(this._element,v,(t=>{e.one(this._element,k,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(C),this._resetAdjustments(),this._scrollBar.reset(),e.trigger(this._element,_)}))}_isAnimated(){return this._element.classList.contains(w)}_triggerBackdropTransition(){const t=e.trigger(this._element,m);if(t.defaultPrevented)return;const s=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;"hidden"===i||this._element.classList.contains(E)||(s||(this._element.style.overflowY="hidden"),this._element.classList.add(E),this._queueCallback((()=>{this._element.classList.remove(E),this._queueCallback((()=>{this._element.style.overflowY=i}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),s=e>0;if(s&&!t){const t=a.isRTL()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!s&&t){const t=a.isRTL()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const s=N.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof s[t])throw new TypeError(`No method named "${t}"`);s[t](e)}}))}}return e.on(document,y,M,(function(t){const i=s.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),e.one(i,g,(t=>{t.defaultPrevented||e.one(i,_,(()=>{a.isVisible(this)&&this.focus()}))}));const n=s.findOne(x);n&&N.getInstance(n).hide();const o=N.getOrCreateInstance(i);o.toggle(this)})),n.enableDismissTrigger(N),a.defineJQueryPlugin(N),N}))},7100:function(t,e,s){
/*!
  * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(1617),s(540),s(1752))})(0,(function(t,e,s){"use strict";const i="backdrop",n="fade",o="show",a=`mousedown.bs.${i}`,l={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},d={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class c extends e{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return l}static get DefaultType(){return d}static get NAME(){return i}show(t){if(!this._config.isVisible)return void s.execute(t);this._append();const e=this._getElement();this._config.isAnimated&&s.reflow(e),e.classList.add(o),this._emulateAnimation((()=>{s.execute(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(o),this._emulateAnimation((()=>{this.dispose(),s.execute(t)}))):s.execute(t)}dispose(){this._isAppended&&(t.off(this._element,a),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(n),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=s.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),t.on(e,a,(()=>{s.execute(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){s.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return c}))},2888:function(t,e,s){
/*!
  * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(1617),s(4822),s(540))})(0,(function(t,e,s){"use strict";const i="focustrap",n="bs.focustrap",o=`.${n}`,a=`focusin${o}`,l=`keydown.tab${o}`,d="Tab",c="forward",r="backward",u={autofocus:!0,trapElement:null},h={autofocus:"boolean",trapElement:"element"};class p extends s{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return u}static get DefaultType(){return h}static get NAME(){return i}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),t.off(document,o),t.on(document,a,(t=>this._handleFocusin(t))),t.on(document,l,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,t.off(document,o))}_handleFocusin(t){const{trapElement:s}=this._config;if(t.target===document||t.target===s||s.contains(t.target))return;const i=e.focusableChildren(s);0===i.length?s.focus():this._lastTabNavDirection===r?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===d&&(this._lastTabNavDirection=t.shiftKey?r:c)}}return p}))},6714:function(t,e,s){
/*!
  * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(7492),s(4822),s(1752))})(0,(function(t,e,s){"use strict";const i=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",n=".sticky-top",o="padding-right",a="margin-right";class l{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,o,(e=>e+t)),this._setElementAttributes(i,o,(e=>e+t)),this._setElementAttributes(n,a,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,o),this._resetElementAttributes(i,o),this._resetElementAttributes(n,a)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,s){const i=this.getWidth(),n=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+i)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${s(Number.parseFloat(n))}px`)};this._applyManipulationCallback(t,n)}_saveInitialAttribute(e,s){const i=e.style.getPropertyValue(s);i&&t.setDataAttribute(e,s,i)}_resetElementAttributes(e,s){const i=e=>{const i=t.getDataAttribute(e,s);null!==i?(t.removeDataAttribute(e,s),e.style.setProperty(s,i)):e.style.removeProperty(s)};this._applyManipulationCallback(e,i)}_applyManipulationCallback(t,i){if(s.isElement(t))i(t);else for(const s of e.find(t,this._element))i(s)}}return l}))},957:function(t,e,s){"use strict";var i=s(2894),n=s.n(i);e.A={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(n())(this.$refs.modal)}}},4324:function(t,e,s){"use strict";s.d(e,{A:function(){return b}});var i=s(6768),n=s(4232),o=s(5130);const a={class:"d-flex justify-content-center"},l={"aria-label":"Page navigation example"},d={class:"pagination"},c=(0,i.Lk)("span",{"aria-hidden":"true"},"«",-1),r=[c],u=["onClick"],h=(0,i.Lk)("span",{"aria-hidden":"true"},"»",-1),p=[h];function m(t,e,s,c,h,m){return(0,i.uX)(),(0,i.CE)("div",a,[(0,i.Lk)("nav",l,[(0,i.Lk)("ul",d,[(0,i.Lk)("li",{class:(0,n.C4)(["page-item text-warning",{disabled:!1===s.pages.has_pre}])},[(0,i.Lk)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,o.D$)((t=>m.updatePage(s.pages.current_page-1)),["prevent"]))},r)],2),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.pages.total_pages,(t=>((0,i.uX)(),(0,i.CE)("li",{class:(0,n.C4)(["page-item",{active:t===s.pages.current_page}]),key:t},[(0,i.Lk)("a",{class:"page-link",href:"#",onClick:(0,o.D$)((e=>m.updatePage(t)),["prevent"])},(0,n.v_)(t),9,u)],2)))),128)),(0,i.Lk)("li",{class:(0,n.C4)(["page-item",{disabled:!1===s.pages.has_next}])},[(0,i.Lk)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,o.D$)((t=>m.updatePage(s.pages.current_page+1)),["prevent"]))},p)],2)])])])}var _={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},g=s(1241);const f=(0,g.A)(_,[["render",m]]);var b=f},5693:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return q}});var i=s(6768),n=s(4232);const o={class:"container"},a={class:"text-end mt-4"},l={class:"table mt-4"},d=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",{class:"ps-4",style:{width:"300px"}},"優惠名稱"),(0,i.Lk)("th",{class:"text-center",width:"120"},"優惠代碼"),(0,i.Lk)("th",{class:"text-center",width:"120"},"折扣 %"),(0,i.Lk)("th",{class:"text-center",width:"120"},"到期日"),(0,i.Lk)("th",{class:"text-center",width:"120"},"是否上架"),(0,i.Lk)("th",{class:"text-center",width:"120"},"編輯")])],-1),c={class:"ps-4"},r={class:"text-center"},u={class:"text-center"},h={class:"text-center"},p={class:"text-center"},m={key:0,class:"text-success"},_={key:1,class:"text-muted"},g={class:"text-center"},f={class:"btn-group"},b=["onClick"],k=["disabled","onClick"];function v(t,e,s,v,L,y){const C=(0,i.g2)("LoadingOverlay"),w=(0,i.g2)("CouponModal"),A=(0,i.g2)("PaginationCard");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(C,{active:L.isLoading},null,8,["active"]),(0,i.Lk)("div",o,[(0,i.Lk)("div",a,[(0,i.Lk)("button",{class:"btn btn-success",type:"button",onClick:e[0]||(e[0]=t=>y.openModal(!0))}," 新增優惠卷 ")]),(0,i.Lk)("table",l,[d,(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(L.coupons,(e=>((0,i.uX)(),(0,i.CE)("tr",{key:e.id},[(0,i.Lk)("td",c,(0,n.v_)(e.title),1),(0,i.Lk)("td",r,(0,n.v_)(e.code),1),(0,i.Lk)("td",u,(0,n.v_)(e.percent)+" %",1),(0,i.Lk)("td",h,(0,n.v_)(t.$filters.date(e.due_date)),1),(0,i.Lk)("td",p,[e.is_enabled?((0,i.uX)(),(0,i.CE)("span",m,"上架")):((0,i.uX)(),(0,i.CE)("span",_,"未上架"))]),(0,i.Lk)("td",g,[(0,i.Lk)("div",f,[(0,i.Lk)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>y.openModal(!1,e)},"編輯",8,b),(0,i.Lk)("button",{class:"btn btn-outline-danger btn-sm",disabled:this.status.loadingItem===e.id,onClick:t=>y.delCoupon(e.id)},"刪除",8,k)])])])))),128))])])]),(0,i.bF)(w,{ref:"couponModal",coupon:L.tempCoupon,onUpdateCoupon:y.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,i.bF)(A,{pages:L.pagination,onEmitPages:y.getCoupons},null,8,["pages","onEmitPages"])],64)}var L=s(5130);const y={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},C={class:"modal-dialog",role:"document"},w={class:"modal-content"},A=(0,i.Lk)("div",{class:"modal-header"},[(0,i.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),(0,i.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),E={class:"modal-body"},x={class:"mb-3"},$=(0,i.Lk)("label",{for:"title"},"優惠名稱",-1),T={class:"mb-3"},M=(0,i.Lk)("label",{for:"coupon_code"},"優惠代碼",-1),D={class:"mb-3"},P=(0,i.Lk)("label",{for:"price"},"折扣 %",-1),N={class:"mb-3"},F=(0,i.Lk)("label",{for:"due_date"},"活動到期日",-1),I={class:"mb-3"},V={class:"form-check"},S=(0,i.Lk)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),B={class:"modal-footer"},O=(0,i.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function j(t,e,s,n,o,a){return(0,i.uX)(),(0,i.CE)("div",y,[(0,i.Lk)("div",C,[(0,i.Lk)("div",w,[A,(0,i.Lk)("div",E,[(0,i.Lk)("div",x,[$,(0,i.bo)((0,i.Lk)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>o.tempCoupon.title=t),placeholder:"請輸入優惠名稱"},null,512),[[L.Jo,o.tempCoupon.title]])]),(0,i.Lk)("div",T,[M,(0,i.bo)((0,i.Lk)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=t=>o.tempCoupon.code=t),placeholder:"請輸入優惠代碼"},null,512),[[L.Jo,o.tempCoupon.code]])]),(0,i.Lk)("div",D,[P,(0,i.bo)((0,i.Lk)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[2]||(e[2]=t=>o.tempCoupon.percent=t),placeholder:"請輸入折扣%"},null,512),[[L.Jo,o.tempCoupon.percent,void 0,{number:!0}]])]),(0,i.Lk)("div",N,[F,(0,i.bo)((0,i.Lk)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[3]||(e[3]=t=>o.due_date=t)},null,512),[[L.Jo,o.due_date]])]),(0,i.Lk)("div",I,[(0,i.Lk)("div",V,[(0,i.bo)((0,i.Lk)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=t=>o.tempCoupon.is_enabled=t),id:"is_enabled"},null,512),[[L.lH,o.tempCoupon.is_enabled]]),S])])]),(0,i.Lk)("div",B,[O,(0,i.Lk)("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=e=>t.$emit("update-coupon",o.tempCoupon))},"保存 ")])])])],512)}var W=s(957),X={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const t=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=t},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[W.A]},U=s(1241);const K=(0,U.A)(X,[["render",j]]);var R=K,z=s(4324),H={data(){return{coupons:[],tempCoupon:{},isLoading:!1,isNew:!1,status:{loadingItem:""},pagination:{}}},components:{CouponModal:R,PaginationCard:z.A},inject:["emitter"],methods:{getCoupons(t=1){const e=`https://vue3-course-api.hexschool.io/api/ecshop-api/admin/coupons/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,console.log(t.data),this.coupons=t.data.coupons,this.pagination=t.data.pagination}))},openModal(t,e){this.tempCoupon=t?{due_date:(new Date).getTime()/1e3}:{...e},this.isNew=t;const s=this.$refs.couponModal;s.showModal()},updateCoupon(t){this.tempCoupon=t;const e=this.$refs.couponModal;let s="https://vue3-course-api.hexschool.io/api/ecshop-api/admin/coupon",i="post";this.isNew||(s=`https://vue3-course-api.hexschool.io/api/ecshop-api/admin/coupon/${t.id}`,i="put"),this.$http[i](s,{data:this.tempCoupon}).then((t=>{console.log(t),e.hideModal(),this.getCoupons(),this.$httpMsgState(t,"更新")}))},delCoupon(t){const e=`https://vue3-course-api.hexschool.io/api/ecshop-api/admin/coupon/${t}`;this.status.loadingItem=t,this.$http.delete(e).then((t=>{this.status.loadingItem="",this.getCoupons(),console.log(t)}))}},created(){this.getCoupons()}};const J=(0,U.A)(H,[["render",v]]);var q=J}}]);
//# sourceMappingURL=693.ffcbd52a.js.map