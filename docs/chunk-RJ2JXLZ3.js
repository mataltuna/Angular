import{b as V,l as G,n as h,r as M,s as m}from"./chunk-RZD7PGSG.js";import{F as y,G as S,I as D,M as x,N,P as $,Qa as U,R as k,U as I,X as P,a as C,i as w,ka as d,l as A,la as l,na as f,pa as o,qa as E,wa as p,x as a,z as F}from"./chunk-THA4BGIW.js";var R="__@ngrx/effects_create__";function ne(e){return Object.getOwnPropertyNames(e).filter(t=>e[t]&&e[t].hasOwnProperty(R)?e[t][R].hasOwnProperty("dispatch"):!1).map(t=>{let i=e[t][R];return C({propertyName:t},i)})}function re(e){return ne(e)}function K(e){return Object.getPrototypeOf(e)}function oe(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function L(e){return typeof e=="function"}function H(e){return e.filter(L)}function se(e){return e instanceof f||L(e)}function ie(e,r,n){let t=K(e),s=!!t&&t.constructor.name!=="Object"?t.constructor.name:null,u=re(e).map(({propertyName:c,dispatch:O,useEffectsErrorHandler:v})=>{let _=typeof e[c]=="function"?e[c]():e[c],b=v?n(_,r):_;return O===!1?b.pipe(N()):b.pipe(P()).pipe(a(te=>({effect:e[c],notification:te,propertyName:c,sourceName:s,sourceInstance:e})))});return y(...u)}var fe=10;function Y(e,r,n=fe){return e.pipe(D(t=>(r&&r.handleError(t),n<=1?e:Y(e,r,n-1))))}var He=(()=>{class e extends w{constructor(n){super(),n&&(this.source=n)}lift(n){let t=new e;return t.source=this,t.operator=n,t}static{this.\u0275fac=function(t){return new(t||e)(o(G))}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var J=new f("@ngrx/effects Internal Root Guard"),g=new f("@ngrx/effects User Provided Effects"),T=new f("@ngrx/effects Internal Root Effects"),X=new f("@ngrx/effects Internal Root Effects Instances"),B=new f("@ngrx/effects Internal Feature Effects"),Z=new f("@ngrx/effects Internal Feature Effects Instance Groups"),ce=new f("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Y}),q="@ngrx/effects/init",Be=V(q);function ue(e,r){if(e.notification.kind==="N"){let n=e.notification.value;!ae(n)&&r.handleError(new Error(`Effect ${de(e)} dispatched an invalid action: ${le(n)}`))}}function ae(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function de({propertyName:e,sourceInstance:r,sourceName:n}){let t=typeof r[e]=="function";return!!n?`"${n}.${String(e)}${t?"()":""}"`:`"${String(e)}()"`}function le(e){try{return JSON.stringify(e)}catch{return e}}var Ee="ngrxOnIdentifyEffects";function pe(e){return j(e,Ee)}var he="ngrxOnRunEffects";function ge(e){return j(e,he)}var ve="ngrxOnInitEffects";function Fe(e){return j(e,ve)}function j(e,r){return e&&r in e&&typeof e[r]=="function"}var Q=(()=>{class e extends A{constructor(n,t){super(),this.errorHandler=n,this.effectsErrorHandler=t}addEffects(n){this.next(n)}toActions(){return this.pipe(I(n=>oe(n)?K(n):n),F(n=>n.pipe(I(ye))),F(n=>{let t=n.pipe(k(s=>Se(this.errorHandler,this.effectsErrorHandler)(s)),a(s=>(ue(s,this.errorHandler),s.notification)),S(s=>s.kind==="N"&&s.value!=null),$()),i=n.pipe(x(1),S(Fe),a(s=>s.ngrxOnInitEffects()));return y(t,i)}))}static{this.\u0275fac=function(t){return new(t||e)(o(U),o(ce))}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function ye(e){return pe(e)?e.ngrxOnIdentifyEffects():""}function Se(e,r){return n=>{let t=ie(n,e,r);return ge(n)?n.ngrxOnRunEffects(t):t}}var W=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(n,t){this.effectSources=n,this.store=t,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(t){return new(t||e)(o(Q),o(h))}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ee=(()=>{class e{constructor(n,t,i,s,u,c,O){this.sources=n,t.start();for(let v of s)n.addEffects(v);i.dispatch({type:q})}addEffects(n){this.sources.addEffects(n)}static{this.\u0275fac=function(t){return new(t||e)(o(Q),o(W),o(h),o(X),o(M,8),o(m,8),o(J,8))}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=l({})}}return e})(),Ie=(()=>{class e{constructor(n,t,i,s){let u=t.flat();for(let c of u)n.addEffects(c)}static{this.\u0275fac=function(t){return new(t||e)(o(ee),o(Z),o(M,8),o(m,8))}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=l({})}}return e})(),ze=(()=>{class e{static forFeature(...n){let t=n.flat(),i=H(t);return{ngModule:Ie,providers:[i,{provide:B,multi:!0,useValue:t},{provide:g,multi:!0,useValue:[]},{provide:Z,multi:!0,useFactory:z,deps:[B,g]}]}}static forRoot(...n){let t=n.flat(),i=H(t);return{ngModule:ee,providers:[i,{provide:T,useValue:[t]},{provide:J,useFactory:Me},{provide:g,multi:!0,useValue:[]},{provide:X,useFactory:z,deps:[T,g]}]}}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=l({})}}return e})();function z(e,r){let n=[];for(let t of e)n.push(...t);for(let t of r)n.push(...t);return n.map(t=>se(t)?E(t):t)}function Me(){let e=E(W,{optional:!0,skipSelf:!0}),r=E(T,{self:!0});if(!(r.length===1&&r[0].length===0)&&e)throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");return"guarded"}export{He as a,ze as b};
