(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function O_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Wf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function Uy(){if(mg)return To;mg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return To.Fragment=e,To.jsx=i,To.jsxs=i,To}var gg;function Ny(){return gg||(gg=1,Wf.exports=Uy()),Wf.exports}var O=Ny(),qf={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function Ly(){if(_g)return ae;_g=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function _(U,J,xt){this.props=U,this.context=J,this.refs=S,this.updater=xt||E}_.prototype.isReactComponent={},_.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function I(){}I.prototype=_.prototype;function L(U,J,xt){this.props=U,this.context=J,this.refs=S,this.updater=xt||E}var D=L.prototype=new I;D.constructor=L,b(D,_.prototype),D.isPureReactComponent=!0;var j=Array.isArray;function H(){}var z={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function w(U,J,xt){var W=xt.ref;return{$$typeof:r,type:U,key:J,ref:W!==void 0?W:null,props:xt}}function C(U,J){return w(U.type,J,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function ut(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xt){return J[xt]})}var nt=/\/+/g;function dt(U,J){return typeof U=="object"&&U!==null&&U.key!=null?ut(""+U.key):J.toString(36)}function pt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function P(U,J,xt,W,ft){var Et=typeof U;(Et==="undefined"||Et==="boolean")&&(U=null);var vt=!1;if(U===null)vt=!0;else switch(Et){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(U.$$typeof){case r:case e:vt=!0;break;case g:return vt=U._init,P(vt(U._payload),J,xt,W,ft)}}if(vt)return ft=ft(U),vt=W===""?"."+dt(U,0):W,j(ft)?(xt="",vt!=null&&(xt=vt.replace(nt,"$&/")+"/"),P(ft,J,xt,"",function(Zt){return Zt})):ft!=null&&(G(ft)&&(ft=C(ft,xt+(ft.key==null||U&&U.key===ft.key?"":(""+ft.key).replace(nt,"$&/")+"/")+vt)),J.push(ft)),1;vt=0;var zt=W===""?".":W+":";if(j(U))for(var kt=0;kt<U.length;kt++)W=U[kt],Et=zt+dt(W,kt),vt+=P(W,J,xt,Et,ft);else if(kt=M(U),typeof kt=="function")for(U=kt.call(U),kt=0;!(W=U.next()).done;)W=W.value,Et=zt+dt(W,kt++),vt+=P(W,J,xt,Et,ft);else if(Et==="object"){if(typeof U.then=="function")return P(pt(U),J,xt,W,ft);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return vt}function F(U,J,xt){if(U==null)return U;var W=[],ft=0;return P(U,W,"","",function(Et){return J.call(xt,Et,ft++)}),W}function q(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(xt){(U._status===0||U._status===-1)&&(U._status=1,U._result=xt)},function(xt){(U._status===0||U._status===-1)&&(U._status=2,U._result=xt)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var lt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},rt={map:F,forEach:function(U,J,xt){F(U,function(){J.apply(this,arguments)},xt)},count:function(U){var J=0;return F(U,function(){J++}),J},toArray:function(U){return F(U,function(J){return J})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ae.Activity=v,ae.Children=rt,ae.Component=_,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=L,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ae.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},ae.cache=function(U){return function(){return U.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(U,J,xt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var W=b({},U.props),ft=U.key;if(J!=null)for(Et in J.key!==void 0&&(ft=""+J.key),J)!k.call(J,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&J.ref===void 0||(W[Et]=J[Et]);var Et=arguments.length-2;if(Et===1)W.children=xt;else if(1<Et){for(var vt=Array(Et),zt=0;zt<Et;zt++)vt[zt]=arguments[zt+2];W.children=vt}return w(U.type,ft,W)},ae.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ae.createElement=function(U,J,xt){var W,ft={},Et=null;if(J!=null)for(W in J.key!==void 0&&(Et=""+J.key),J)k.call(J,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ft[W]=J[W]);var vt=arguments.length-2;if(vt===1)ft.children=xt;else if(1<vt){for(var zt=Array(vt),kt=0;kt<vt;kt++)zt[kt]=arguments[kt+2];ft.children=zt}if(U&&U.defaultProps)for(W in vt=U.defaultProps,vt)ft[W]===void 0&&(ft[W]=vt[W]);return w(U,Et,ft)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(U){return{$$typeof:d,render:U}},ae.isValidElement=G,ae.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:q}},ae.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},ae.startTransition=function(U){var J=z.T,xt={};z.T=xt;try{var W=U(),ft=z.S;ft!==null&&ft(xt,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(H,lt)}catch(Et){lt(Et)}finally{J!==null&&xt.types!==null&&(J.types=xt.types),z.T=J}},ae.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ae.use=function(U){return z.H.use(U)},ae.useActionState=function(U,J,xt){return z.H.useActionState(U,J,xt)},ae.useCallback=function(U,J){return z.H.useCallback(U,J)},ae.useContext=function(U){return z.H.useContext(U)},ae.useDebugValue=function(){},ae.useDeferredValue=function(U,J){return z.H.useDeferredValue(U,J)},ae.useEffect=function(U,J){return z.H.useEffect(U,J)},ae.useEffectEvent=function(U){return z.H.useEffectEvent(U)},ae.useId=function(){return z.H.useId()},ae.useImperativeHandle=function(U,J,xt){return z.H.useImperativeHandle(U,J,xt)},ae.useInsertionEffect=function(U,J){return z.H.useInsertionEffect(U,J)},ae.useLayoutEffect=function(U,J){return z.H.useLayoutEffect(U,J)},ae.useMemo=function(U,J){return z.H.useMemo(U,J)},ae.useOptimistic=function(U,J){return z.H.useOptimistic(U,J)},ae.useReducer=function(U,J,xt){return z.H.useReducer(U,J,xt)},ae.useRef=function(U){return z.H.useRef(U)},ae.useState=function(U){return z.H.useState(U)},ae.useSyncExternalStore=function(U,J,xt){return z.H.useSyncExternalStore(U,J,xt)},ae.useTransition=function(){return z.H.useTransition()},ae.version="19.2.8",ae}var vg;function Sd(){return vg||(vg=1,qf.exports=Ly()),qf.exports}var $t=Sd();const Oy=O_($t);var Yf={exports:{}},Ao={},Zf={exports:{}},Kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function Py(){return xg||(xg=1,(function(r){function e(P,F){var q=P.length;P.push(F);t:for(;0<q;){var lt=q-1>>>1,rt=P[lt];if(0<l(rt,F))P[lt]=F,P[q]=rt,q=lt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var F=P[0],q=P.pop();if(q!==F){P[0]=q;t:for(var lt=0,rt=P.length,U=rt>>>1;lt<U;){var J=2*(lt+1)-1,xt=P[J],W=J+1,ft=P[W];if(0>l(xt,q))W<rt&&0>l(ft,xt)?(P[lt]=ft,P[W]=q,lt=W):(P[lt]=xt,P[J]=q,lt=J);else if(W<rt&&0>l(ft,q))P[lt]=ft,P[W]=q,lt=W;else break t}}return F}function l(P,F){var q=P.sortIndex-F.sortIndex;return q!==0?q:P.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,y=3,M=!1,E=!1,b=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=P)s(p),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(p)}}function j(P){if(b=!1,D(P),!E)if(i(m)!==null)E=!0,H||(H=!0,ut());else{var F=i(p);F!==null&&pt(j,F.startTime-P)}}var H=!1,z=-1,k=5,w=-1;function C(){return S?!0:!(r.unstable_now()-w<k)}function G(){if(S=!1,H){var P=r.unstable_now();w=P;var F=!0;try{t:{E=!1,b&&(b=!1,I(z),z=-1),M=!0;var q=y;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&C());){var lt=v.callback;if(typeof lt=="function"){v.callback=null,y=v.priorityLevel;var rt=lt(v.expirationTime<=P);if(P=r.unstable_now(),typeof rt=="function"){v.callback=rt,D(P),F=!0;break e}v===i(m)&&s(m),D(P)}else s(m);v=i(m)}if(v!==null)F=!0;else{var U=i(p);U!==null&&pt(j,U.startTime-P),F=!1}}break t}finally{v=null,y=q,M=!1}F=void 0}}finally{F?ut():H=!1}}}var ut;if(typeof L=="function")ut=function(){L(G)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,dt=nt.port2;nt.port1.onmessage=G,ut=function(){dt.postMessage(null)}}else ut=function(){_(G,0)};function pt(P,F){z=_(function(){P(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(P){switch(y){case 1:case 2:case 3:var F=3;break;default:F=y}var q=y;y=F;try{return P()}finally{y=q}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=y;y=P;try{return F()}finally{y=q}},r.unstable_scheduleCallback=function(P,F,q){var lt=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?lt+q:lt):q=lt,P){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=q+rt,P={id:g++,callback:F,priorityLevel:P,startTime:q,expirationTime:rt,sortIndex:-1},q>lt?(P.sortIndex=q,e(p,P),i(m)===null&&P===i(p)&&(b?(I(z),z=-1):b=!0,pt(j,q-lt))):(P.sortIndex=rt,e(m,P),E||M||(E=!0,H||(H=!0,ut()))),P},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(P){var F=y;return function(){var q=y;y=F;try{return P.apply(this,arguments)}finally{y=q}}}})(Kf)),Kf}var yg;function zy(){return yg||(yg=1,Zf.exports=Py()),Zf.exports}var Qf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function Iy(){if(Sg)return Rn;Sg=1;var r=Sd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.8",Rn}var Mg;function By(){if(Mg)return Qf.exports;Mg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qf.exports=Iy(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function Fy(){if(Eg)return Ao;Eg=1;var r=zy(),e=Sd(),i=By();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,o=f;break}if(T===o){x=!0,o=u,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,o=u;break}if(T===o){x=!0,o=f,a=u;break}T=T.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case j:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case k:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var pt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},lt=[],rt=-1;function U(t){return{current:t}}function J(t){0>rt||(t.current=lt[rt],lt[rt]=null,rt--)}function xt(t,n){rt++,lt[rt]=t.current,t.current=n}var W=U(null),ft=U(null),Et=U(null),vt=U(null);function zt(t,n){switch(xt(Et,n),xt(ft,t),xt(W,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?B0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=B0(n),t=F0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(W),xt(W,t)}function kt(){J(W),J(ft),J(Et)}function Zt(t){t.memoizedState!==null&&xt(vt,t);var n=W.current,a=F0(n,t.type);n!==a&&(xt(ft,t),xt(W,a))}function Oe(t){ft.current===t&&(J(W),J(ft)),vt.current===t&&(J(vt),So._currentValue=q)}var Ge,fe;function V(t){if(Ge===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ge=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ge+t+fe}var Tn=!1;function ue(t,n){if(!t||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ct){var et=ct}Reflect.construct(t,[],St)}else{try{St.call()}catch(ct){et=ct}t.call(St.prototype)}}else{try{throw Error()}catch(ct){et=ct}(St=t())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ct){if(ct&&et&&typeof ct.stack=="string")return[ct.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var B=x.split(`
`),tt=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===tt.length)for(o=B.length-1,u=tt.length-1;1<=o&&0<=u&&B[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==tt[u]){var mt=`
`+B[o].replace(" at new "," at ");return t.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",t.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?V(a):""}function pe(t,n){switch(t.tag){case 26:case 27:case 5:return V(t.type);case 16:return V("Lazy");case 13:return t.child!==n&&n!==null?V("Suspense Fallback"):V("Suspense");case 19:return V("SuspenseList");case 0:case 15:return ue(t.type,!1);case 11:return ue(t.type.render,!1);case 1:return ue(t.type,!0);case 31:return V("Activity");default:return""}}function jt(t){try{var n="",a=null;do n+=pe(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ue=Object.prototype.hasOwnProperty,Xt=r.unstable_scheduleCallback,N=r.unstable_cancelCallback,A=r.unstable_shouldYield,it=r.unstable_requestPaint,gt=r.unstable_now,bt=r.unstable_getCurrentPriorityLevel,yt=r.unstable_ImmediatePriority,Gt=r.unstable_UserBlockingPriority,wt=r.unstable_NormalPriority,It=r.unstable_LowPriority,me=r.unstable_IdlePriority,At=r.log,Bt=r.unstable_setDisableYieldValue,Wt=null,Vt=null;function Ot(t){if(typeof At=="function"&&Bt(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Wt,t)}catch{}}var Jt=Math.clz32?Math.clz32:Z,se=Math.log,Pe=Math.LN2;function Z(t){return t>>>=0,t===0?32:31-(se(t)/Pe|0)|0}var Rt=256,ht=262144,Mt=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Ct(o):(x&=T,x!==0?u=Ct(x):a||(a=T&~t,a!==0&&(u=Ct(a))))):(T=o&~f,T!==0?u=Ct(T):x!==0?u=Ct(x):a||(a=o&~t,a!==0&&(u=Ct(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function We(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var t=Mt;return Mt<<=1,(Mt&62914560)===0&&(Mt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pi(t,n,a,o,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,tt=t.hiddenUpdates;for(a=x&~a;0<a;){var mt=31-Jt(a),St=1<<mt;T[mt]=0,B[mt]=-1;var et=tt[mt];if(et!==null)for(tt[mt]=null,mt=0;mt<et.length;mt++){var ct=et[mt];ct!==null&&(ct.lane&=-536870913)}a&=~St}o!==0&&Nr(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Nr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Jt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Lr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Jt(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Ri(t,n){var a=n&-n;return a=(a&42)!==0?1:Xa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Xa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Or(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:lg(t.type))}function ja(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var mi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+mi,xn="__reactProps$"+mi,zi="__reactContainer$"+mi,Pr="__reactEvents$"+mi,Fc="__reactListeners$"+mi,Hc="__reactHandles$"+mi,Vo="__reactResources$"+mi,Wa="__reactMarker$"+mi;function zr(t){delete t[Ke],delete t[xn],delete t[Pr],delete t[Fc],delete t[Hc]}function R(t){var n=t[Ke];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=W0(t);t!==null;){if(a=t[Ke])return a;t=W0(t)}return n}t=a,a=t.parentNode}return null}function K(t){if(t=t[Ke]||t[zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function at(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ot(t){var n=t[Vo];return n||(n=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(t){t[Wa]=!0}var Tt=new Set,Ut={};function Lt(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(Ut[t]=n,t=0;t<n.length;t++)Tt.add(n[t])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},qt={};function ve(t){return Ue.call(qt,t)?!0:Ue.call(ne,t)?!1:ee.test(t)?qt[t]=!0:(ne[t]=!0,!1)}function xe(t,n,a){if(ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ke(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Te(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ie(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function un(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Me(t){if(!t._valueTracker){var n=Kt(t)?"checked":"value";t._valueTracker=un(t,n,""+t[n])}}function Pn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Kt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function pn(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(t,n,a,o,u,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ie(n)):t.value!==""+ie(n)&&(t.value=""+ie(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?An(t,x,ie(n)):a!=null?An(t,x,ie(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ie(T):t.removeAttribute("name")}function Nn(t,n,a,o,u,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Me(t);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Me(t)}function An(t,n,a){n==="number"&&gi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qe(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+ie(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ie(a):""}function Ts(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(pt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Me(t)}function zn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Av=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Av.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function zd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Pd(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Pd(t,f,n[f])}function Gc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return Cv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var Vc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var As=null,Rs=null;function Id(t){var n=K(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(s(90));ze(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Pn(o)}break t;case"textarea":yn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(t,!!a.multiple,n,!1)}}}var Xc=!1;function Bd(t,n,a){if(Xc)return t(n,a);Xc=!0;try{var o=t(n);return o}finally{if(Xc=!1,(As!==null||Rs!==null)&&(Dl(),As&&(n=As,t=Rs,Rs=As=null,Id(n),t)))for(n=0;n<t.length;n++)Id(t[n])}}function Ir(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(Bi)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{jc=!1}var ua=null,Wc=null,Xo=null;function Fd(){if(Xo)return Xo;var t,n=Wc,a=n.length,o,u="value"in ua?ua.value:ua.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return Xo=u.slice(t,1<o?1-o:void 0)}function jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Hd(){return!1}function In(t){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Hd,this.isPropagationStopped=Hd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=In(qa),Fr=v({},qa,{view:0,detail:0}),wv=In(Fr),qc,Yc,Hr,Yo=v({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hr&&(Hr&&t.type==="mousemove"?(qc=t.screenX-Hr.screenX,Yc=t.screenY-Hr.screenY):Yc=qc=0,Hr=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),Gd=In(Yo),Dv=v({},Yo,{dataTransfer:0}),Uv=In(Dv),Nv=v({},Fr,{relatedTarget:0}),Zc=In(Nv),Lv=v({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=In(Lv),Pv=v({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zv=In(Pv),Iv=v({},qa,{data:0}),Vd=In(Iv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Hv[t])?!!n[t]:!1}function Kc(){return Gv}var Vv=v({},Fr,{key:function(t){if(t.key){var n=Bv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kv=In(Vv),Xv=v({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=In(Xv),jv=v({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),Wv=In(jv),qv=v({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=In(qv),Zv=v({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kv=In(Zv),Qv=v({},qa,{newState:0,oldState:0}),Jv=In(Qv),$v=[9,13,27,32],Qc=Bi&&"CompositionEvent"in window,Gr=null;Bi&&"documentMode"in document&&(Gr=document.documentMode);var tx=Bi&&"TextEvent"in window&&!Gr,Xd=Bi&&(!Qc||Gr&&8<Gr&&11>=Gr),jd=" ",Wd=!1;function qd(t,n){switch(t){case"keyup":return $v.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function ex(t,n){switch(t){case"compositionend":return Yd(n);case"keypress":return n.which!==32?null:(Wd=!0,jd);case"textInput":return t=n.data,t===jd&&Wd?null:t;default:return null}}function nx(t,n){if(Cs)return t==="compositionend"||!Qc&&qd(t,n)?(t=Fd(),Xo=Wc=ua=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xd&&n.locale!=="ko"?null:n.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ix[t.type]:n==="textarea"}function Kd(t,n,a,o){As?Rs?Rs.push(o):Rs=[o]:As=o,n=Il(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Vr=null,kr=null;function ax(t){N0(t,0)}function Zo(t){var n=at(t);if(Pn(n))return t}function Qd(t,n){if(t==="change")return n}var Jd=!1;if(Bi){var Jc;if(Bi){var $c="oninput"in document;if(!$c){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),$c=typeof $d.oninput=="function"}Jc=$c}else Jc=!1;Jd=Jc&&(!document.documentMode||9<document.documentMode)}function tp(){Vr&&(Vr.detachEvent("onpropertychange",ep),kr=Vr=null)}function ep(t){if(t.propertyName==="value"&&Zo(kr)){var n=[];Kd(n,kr,t,kc(t)),Bd(ax,n)}}function sx(t,n,a){t==="focusin"?(tp(),Vr=n,kr=a,Vr.attachEvent("onpropertychange",ep)):t==="focusout"&&tp()}function rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(kr)}function ox(t,n){if(t==="click")return Zo(n)}function lx(t,n){if(t==="input"||t==="change")return Zo(n)}function cx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:cx;function Xr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ue.call(n,u)||!Wn(t[u],n[u]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,n){var a=np(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=np(a)}}function ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gi(t.document)}return n}function tu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ux=Bi&&"documentMode"in document&&11>=document.documentMode,ws=null,eu=null,jr=null,nu=!1;function rp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||ws==null||ws!==gi(o)||(o=ws,"selectionStart"in o&&tu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jr&&Xr(jr,o)||(jr=o,o=Il(eu,"onSelect"),0<o.length&&(n=new qo("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=ws)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ds={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},iu={},op={};Bi&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Za(t){if(iu[t])return iu[t];if(!Ds[t])return t;var n=Ds[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return iu[t]=n[a];return t}var lp=Za("animationend"),cp=Za("animationiteration"),up=Za("animationstart"),fx=Za("transitionrun"),hx=Za("transitionstart"),dx=Za("transitioncancel"),fp=Za("transitionend"),hp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function _i(t,n){hp.set(t,n),Lt(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Us=0,su=0;function Qo(){for(var t=Us,n=su=Us=0;n<t;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&dp(a,u,f)}}function Jo(t,n,a,o){ai[Us++]=t,ai[Us++]=n,ai[Us++]=a,ai[Us++]=o,su|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ru(t,n,a,o){return Jo(t,n,a,o),$o(t)}function Ka(t,n){return Jo(t,null,null,n),$o(t)}function dp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Jt(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<po)throw po=0,gf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ns={};function px(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,o){return new px(t,n,a,o)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function pp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,o,u,f){var x=0;if(o=t,typeof t=="function")ou(t)&&(x=1);else if(typeof t=="string")x=xy(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=qn(31,a,n,u),t.elementType=w,t.lanes=f,t;case b:return Qa(a.children,u,f,n);case S:x=8,u|=24;break;case _:return t=qn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case j:return t=qn(13,a,n,u),t.elementType=j,t.lanes=f,t;case H:return t=qn(19,a,n,u),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:x=10;break t;case I:x=9;break t;case D:x=11;break t;case z:x=14;break t;case k:x=16,o=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=qn(x,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Qa(t,n,a,o){return t=qn(7,t,o,n),t.lanes=a,t}function lu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function mp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function cu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var gp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:jt(n)},gp.set(t,n),n)}return{value:t,source:n,stack:jt(n)}}var Ls=[],Os=0,el=null,Wr=0,ri=[],oi=0,fa=null,Ci=1,wi="";function Hi(t,n){Ls[Os++]=Wr,Ls[Os++]=el,el=t,Wr=n}function _p(t,n,a){ri[oi++]=Ci,ri[oi++]=wi,ri[oi++]=fa,fa=t;var o=Ci;t=wi;var u=32-Jt(o)-1;o&=~(1<<u),a+=1;var f=32-Jt(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ci=1<<32-Jt(n)+u|a<<u|o,wi=f+t}else Ci=1<<f|a<<u|o,wi=t}function uu(t){t.return!==null&&(Hi(t,1),_p(t,1,0))}function fu(t){for(;t===el;)el=Ls[--Os],Ls[Os]=null,Wr=Ls[--Os],Ls[Os]=null;for(;t===fa;)fa=ri[--oi],ri[oi]=null,wi=ri[--oi],ri[oi]=null,Ci=ri[--oi],ri[oi]=null}function vp(t,n){ri[oi++]=Ci,ri[oi++]=wi,ri[oi++]=fa,Ci=n.id,wi=n.overflow,fa=t}var Sn=null,Xe=null,ye=!1,ha=null,li=!1,hu=Error(s(519));function da(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qr(si(n,t)),hu}function xp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Ke]=t,n[xn]=o,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)de(go[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Ts(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||z0(n.textContent,a)?(o.popover!=null&&(de("beforetoggle",n),de("toggle",n)),o.onScroll!=null&&de("scroll",n),o.onScrollEnd!=null&&de("scrollend",n),o.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||da(t,!0)}function yp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Sn=Sn.return}}function Ps(t){if(t!==Sn)return!1;if(!ye)return yp(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Uf(t.type,t.memoizedProps)),a=!a),a&&Xe&&da(t),yp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=j0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=j0(t)}else n===27?(n=Xe,Ra(t.type)?(t=zf,zf=null,Xe=t):Xe=n):Xe=Sn?ui(t.stateNode.nextSibling):null;return!0}function Ja(){Xe=Sn=null,ye=!1}function du(){var t=ha;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),ha=null),t}function qr(t){ha===null?ha=[t]:ha.push(t)}var pu=U(null),$a=null,Gi=null;function pa(t,n,a){xt(pu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=pu.current,J(pu)}function mu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function gu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),mu(f.return,a,t),o||(x=null);break t}f=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),mu(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function zs(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var T=u.type;Wn(u.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(u===vt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}u=u.return}t!==null&&gu(n,t,a,o),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ts(t){$a=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Sp($a,t)}function il(t,n){return $a===null&&ts(t),Sp(t,n)}function Sp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(s(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var mx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gx=r.unstable_scheduleCallback,_x=r.unstable_NormalPriority,an={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new mx,data:new Map,refCount:0}}function Yr(t){t.refCount--,t.refCount===0&&gx(_x,function(){t.controller.abort()})}var Zr=null,vu=0,Is=0,Bs=null;function vx(t,n){if(Zr===null){var a=Zr=[];vu=0,Is=Mf(),Bs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return vu++,n.then(Mp,Mp),n}function Mp(){if(--vu===0&&Zr!==null){Bs!==null&&(Bs.status="fulfilled");var t=Zr;Zr=null,Is=0,Bs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Ep=P.S;P.S=function(t,n){r0=gt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vx(t,n),Ep!==null&&Ep(t,n)};var es=U(null);function xu(){var t=es.current;return t!==null?t:Ve.pooledCache}function al(t,n){n===null?xt(es,es.current):xt(es,n.pool)}function bp(){var t=xu();return t===null?null:{parent:an._currentValue,pool:t}}var Fs=Error(s(460)),yu=Error(s(474)),sl=Error(s(542)),rl={then:function(){}};function Tp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ap(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t}throw is=n,Fs}}function ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(is=a,Fs):a}}var is=null;function Rp(){if(is===null)throw Error(s(459));var t=is;return is=null,t}function Cp(t){if(t===Fs||t===sl)throw Error(s(483))}var Hs=null,Kr=0;function ol(t){var n=Kr;return Kr+=1,Hs===null&&(Hs=[]),Ap(Hs,t,n)}function Qr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function wp(t){function n(Q,X){if(t){var $=Q.deletions;$===null?(Q.deletions=[X],Q.flags|=16):$.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=Fi(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,$){return Q.index=$,t?($=Q.alternate,$!==null?($=$.index,$<X?(Q.flags|=67108866,X):$):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function x(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function T(Q,X,$,_t){return X===null||X.tag!==6?(X=lu($,Q.mode,_t),X.return=Q,X):(X=u(X,$),X.return=Q,X)}function B(Q,X,$,_t){var Yt=$.type;return Yt===b?mt(Q,X,$.props.children,_t,$.key):X!==null&&(X.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===k&&ns(Yt)===X.type)?(X=u(X,$.props),Qr(X,$),X.return=Q,X):(X=tl($.type,$.key,$.props,null,Q.mode,_t),Qr(X,$),X.return=Q,X)}function tt(Q,X,$,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=cu($,Q.mode,_t),X.return=Q,X):(X=u(X,$.children||[]),X.return=Q,X)}function mt(Q,X,$,_t,Yt){return X===null||X.tag!==7?(X=Qa($,Q.mode,_t,Yt),X.return=Q,X):(X=u(X,$),X.return=Q,X)}function St(Q,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=lu(""+X,Q.mode,$),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return $=tl(X.type,X.key,X.props,null,Q.mode,$),Qr($,X),$.return=Q,$;case E:return X=cu(X,Q.mode,$),X.return=Q,X;case k:return X=ns(X),St(Q,X,$)}if(pt(X)||ut(X))return X=Qa(X,Q.mode,$,null),X.return=Q,X;if(typeof X.then=="function")return St(Q,ol(X),$);if(X.$$typeof===L)return St(Q,il(Q,X),$);ll(Q,X)}return null}function et(Q,X,$,_t){var Yt=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Yt!==null?null:T(Q,X,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===Yt?B(Q,X,$,_t):null;case E:return $.key===Yt?tt(Q,X,$,_t):null;case k:return $=ns($),et(Q,X,$,_t)}if(pt($)||ut($))return Yt!==null?null:mt(Q,X,$,_t,null);if(typeof $.then=="function")return et(Q,X,ol($),_t);if($.$$typeof===L)return et(Q,X,il(Q,$),_t);ll(Q,$)}return null}function ct(Q,X,$,_t,Yt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get($)||null,T(X,Q,""+_t,Yt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return Q=Q.get(_t.key===null?$:_t.key)||null,B(X,Q,_t,Yt);case E:return Q=Q.get(_t.key===null?$:_t.key)||null,tt(X,Q,_t,Yt);case k:return _t=ns(_t),ct(Q,X,$,_t,Yt)}if(pt(_t)||ut(_t))return Q=Q.get($)||null,mt(X,Q,_t,Yt,null);if(typeof _t.then=="function")return ct(Q,X,$,ol(_t),Yt);if(_t.$$typeof===L)return ct(Q,X,$,il(X,_t),Yt);ll(X,_t)}return null}function Ft(Q,X,$,_t){for(var Yt=null,Ae=null,Ht=X,oe=X=0,_e=null;Ht!==null&&oe<$.length;oe++){Ht.index>oe?(_e=Ht,Ht=null):_e=Ht.sibling;var Re=et(Q,Ht,$[oe],_t);if(Re===null){Ht===null&&(Ht=_e);break}t&&Ht&&Re.alternate===null&&n(Q,Ht),X=f(Re,X,oe),Ae===null?Yt=Re:Ae.sibling=Re,Ae=Re,Ht=_e}if(oe===$.length)return a(Q,Ht),ye&&Hi(Q,oe),Yt;if(Ht===null){for(;oe<$.length;oe++)Ht=St(Q,$[oe],_t),Ht!==null&&(X=f(Ht,X,oe),Ae===null?Yt=Ht:Ae.sibling=Ht,Ae=Ht);return ye&&Hi(Q,oe),Yt}for(Ht=o(Ht);oe<$.length;oe++)_e=ct(Ht,Q,oe,$[oe],_t),_e!==null&&(t&&_e.alternate!==null&&Ht.delete(_e.key===null?oe:_e.key),X=f(_e,X,oe),Ae===null?Yt=_e:Ae.sibling=_e,Ae=_e);return t&&Ht.forEach(function(Na){return n(Q,Na)}),ye&&Hi(Q,oe),Yt}function Qt(Q,X,$,_t){if($==null)throw Error(s(151));for(var Yt=null,Ae=null,Ht=X,oe=X=0,_e=null,Re=$.next();Ht!==null&&!Re.done;oe++,Re=$.next()){Ht.index>oe?(_e=Ht,Ht=null):_e=Ht.sibling;var Na=et(Q,Ht,Re.value,_t);if(Na===null){Ht===null&&(Ht=_e);break}t&&Ht&&Na.alternate===null&&n(Q,Ht),X=f(Na,X,oe),Ae===null?Yt=Na:Ae.sibling=Na,Ae=Na,Ht=_e}if(Re.done)return a(Q,Ht),ye&&Hi(Q,oe),Yt;if(Ht===null){for(;!Re.done;oe++,Re=$.next())Re=St(Q,Re.value,_t),Re!==null&&(X=f(Re,X,oe),Ae===null?Yt=Re:Ae.sibling=Re,Ae=Re);return ye&&Hi(Q,oe),Yt}for(Ht=o(Ht);!Re.done;oe++,Re=$.next())Re=ct(Ht,Q,oe,Re.value,_t),Re!==null&&(t&&Re.alternate!==null&&Ht.delete(Re.key===null?oe:Re.key),X=f(Re,X,oe),Ae===null?Yt=Re:Ae.sibling=Re,Ae=Re);return t&&Ht.forEach(function(Dy){return n(Q,Dy)}),ye&&Hi(Q,oe),Yt}function Fe(Q,X,$,_t){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var Yt=$.key;X!==null;){if(X.key===Yt){if(Yt=$.type,Yt===b){if(X.tag===7){a(Q,X.sibling),_t=u(X,$.props.children),_t.return=Q,Q=_t;break t}}else if(X.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===k&&ns(Yt)===X.type){a(Q,X.sibling),_t=u(X,$.props),Qr(_t,$),_t.return=Q,Q=_t;break t}a(Q,X);break}else n(Q,X);X=X.sibling}$.type===b?(_t=Qa($.props.children,Q.mode,_t,$.key),_t.return=Q,Q=_t):(_t=tl($.type,$.key,$.props,null,Q.mode,_t),Qr(_t,$),_t.return=Q,Q=_t)}return x(Q);case E:t:{for(Yt=$.key;X!==null;){if(X.key===Yt)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Q,X.sibling),_t=u(X,$.children||[]),_t.return=Q,Q=_t;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}_t=cu($,Q.mode,_t),_t.return=Q,Q=_t}return x(Q);case k:return $=ns($),Fe(Q,X,$,_t)}if(pt($))return Ft(Q,X,$,_t);if(ut($)){if(Yt=ut($),typeof Yt!="function")throw Error(s(150));return $=Yt.call($),Qt(Q,X,$,_t)}if(typeof $.then=="function")return Fe(Q,X,ol($),_t);if($.$$typeof===L)return Fe(Q,X,il(Q,$),_t);ll(Q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Q,X.sibling),_t=u(X,$),_t.return=Q,Q=_t):(a(Q,X),_t=lu($,Q.mode,_t),_t.return=Q,Q=_t),x(Q)):a(Q,X)}return function(Q,X,$,_t){try{Kr=0;var Yt=Fe(Q,X,$,_t);return Hs=null,Yt}catch(Ht){if(Ht===Fs||Ht===sl)throw Ht;var Ae=qn(29,Ht,null,Q.mode);return Ae.lanes=_t,Ae.return=Q,Ae}finally{}}}var as=wp(!0),Dp=wp(!1),ma=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=$o(t),dp(t,null,a),n}return Jo(t,o,n,a),$o(t)}function Jr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Lr(t,a)}}function Eu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var bu=!1;function $r(){if(bu){var t=Bs;if(t!==null)throw t}}function to(t,n,a,o){bu=!1;var u=t.updateQueue;ma=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,tt=B.next;B.next=null,x===null?f=tt:x.next=tt,x=B;var mt=t.alternate;mt!==null&&(mt=mt.updateQueue,T=mt.lastBaseUpdate,T!==x&&(T===null?mt.firstBaseUpdate=tt:T.next=tt,mt.lastBaseUpdate=B))}if(f!==null){var St=u.baseState;x=0,mt=tt=B=null,T=f;do{var et=T.lane&-536870913,ct=et!==T.lane;if(ct?(ge&et)===et:(o&et)===et){et!==0&&et===Is&&(bu=!0),mt!==null&&(mt=mt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ft=t,Qt=T;et=n;var Fe=a;switch(Qt.tag){case 1:if(Ft=Qt.payload,typeof Ft=="function"){St=Ft.call(Fe,St,et);break t}St=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=Qt.payload,et=typeof Ft=="function"?Ft.call(Fe,St,et):Ft,et==null)break t;St=v({},St,et);break t;case 2:ma=!0}}et=T.callback,et!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[et]:ct.push(et))}else ct={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},mt===null?(tt=mt=ct,B=St):mt=mt.next=ct,x|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ct=T,T=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);mt===null&&(B=St),u.baseState=B,u.firstBaseUpdate=tt,u.lastBaseUpdate=mt,f===null&&(u.shared.lanes=0),Ma|=x,t.lanes=x,t.memoizedState=St}}function Up(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Np(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Up(a[t],n)}var Gs=U(null),cl=U(0);function Lp(t,n){t=Qi,xt(cl,t),xt(Gs,n),Qi=t|n.baseLanes}function Tu(){xt(cl,Qi),xt(Gs,Gs.current)}function Au(){Qi=cl.current,J(Gs),J(cl)}var Yn=U(null),ci=null;function va(t){var n=t.alternate;xt(en,en.current&1),xt(Yn,t),ci===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(ci=t)}function Ru(t){xt(en,en.current),xt(Yn,t),ci===null&&(ci=t)}function Op(t){t.tag===22?(xt(en,en.current),xt(Yn,t),ci===null&&(ci=t)):xa()}function xa(){xt(en,en.current),xt(Yn,Yn.current)}function Zn(t){J(Yn),ci===t&&(ci=null),J(en)}var en=U(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||Pf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,re=null,Ie=null,sn=null,fl=!1,Vs=!1,ss=!1,hl=0,eo=0,ks=null,yx=0;function Je(){throw Error(s(321))}function Cu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function wu(t,n,a,o,u,f){return ki=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?_m:Xu,ss=!1,f=a(o,u),ss=!1,Vs&&(f=zp(n,a,o,u)),Pp(t),f}function Pp(t){P.H=ao;var n=Ie!==null&&Ie.next!==null;if(ki=0,sn=Ie=re=null,fl=!1,eo=0,ks=null,n)throw Error(s(300));t===null||rn||(t=t.dependencies,t!==null&&nl(t)&&(rn=!0))}function zp(t,n,a,o){re=t;var u=0;do{if(Vs&&(ks=null),eo=0,Vs=!1,25<=u)throw Error(s(301));if(u+=1,sn=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=vm,f=n(a,o)}while(Vs);return f}function Sx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?no(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(re.flags|=1024),n}function Du(){var t=hl!==0;return hl=0,t}function Uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Nu(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}ki=0,sn=Ie=re=null,Vs=!1,eo=hl=0,ks=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?re.memoizedState=sn=t:sn=sn.next=t,sn}function nn(){if(Ie===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=sn===null?re.memoizedState:sn.next;if(n!==null)sn=n,Ie=t;else{if(t===null)throw re.alternate===null?Error(s(467)):Error(s(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},sn===null?re.memoizedState=sn=t:sn=sn.next=t}return sn}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(t){var n=eo;return eo+=1,ks===null&&(ks=[]),t=Ap(ks,t,n),n=re,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?_m:Xu),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return no(t);if(t.$$typeof===L)return Mn(t)}throw Error(s(438,String(t)))}function Lu(t){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=re.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Xi(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=nn();return Ou(n,Ie,t)}function Ou(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=x=null,B=null,tt=n,mt=!1;do{var St=tt.lane&-536870913;if(St!==tt.lane?(ge&St)===St:(ki&St)===St){var et=tt.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),St===Is&&(mt=!0);else if((ki&et)===et){tt=tt.next,et===Is&&(mt=!0);continue}else St={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(T=B=St,x=f):B=B.next=St,re.lanes|=et,Ma|=et;St=tt.action,ss&&a(f,St),f=tt.hasEagerState?tt.eagerState:a(f,St)}else et={lane:St,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(T=B=et,x=f):B=B.next=et,re.lanes|=St,Ma|=St;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?x=f:B.next=T,!Wn(f,t.memoizedState)&&(rn=!0,mt&&(a=Bs,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Pu(t){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);Wn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Ip(t,n,a){var o=re,u=nn(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Wn((Ie||u).memoizedState,a);if(x&&(u.memoizedState=a,rn=!0),u=u.queue,Bu(Hp.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Xs(9,{destroy:void 0},Fp.bind(null,o,u,a,n),null),Ve===null)throw Error(s(349));f||(ki&127)!==0||Bp(o,n,a)}return a}function Bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=dl(),re.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Fp(t,n,a,o){n.value=a,n.getSnapshot=o,Gp(n)&&Vp(t)}function Hp(t,n,a){return a(function(){Gp(n)&&Vp(t)})}function Gp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Vp(t){var n=Ka(t,2);n!==null&&Vn(n,t,2)}function zu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ss){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},n}function kp(t,n,a,o){return t.baseState=a,Ou(t,Ie,typeof o=="function"?o:Xi)}function Mx(t,n,a,o,u){if(vl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Xp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Xp(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var T=a(u,o),B=P.S;B!==null&&B(x,T),jp(t,n,T)}catch(tt){Iu(t,n,tt)}finally{f!==null&&x.types!==null&&(f.types=x.types),P.T=f}}else try{f=a(u,o),jp(t,n,f)}catch(tt){Iu(t,n,tt)}}function jp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Wp(t,n,o)},function(o){return Iu(t,n,o)}):Wp(t,n,a)}function Wp(t,n,a){n.status="fulfilled",n.value=a,qp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Xp(t,a)))}function Iu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,qp(n),n=n.next;while(n!==o)}t.action=null}function qp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yp(t,n){return n}function Zp(t,n){if(ye){var a=Ve.formState;if(a!==null){t:{var o=re;if(ye){if(Xe){e:{for(var u=Xe,f=li;u.nodeType!==8;){if(!f){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Xe=ui(u.nextSibling),o=u.data==="F!";break t}}da(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yp,lastRenderedState:n},a.queue=o,a=pm.bind(null,re,o),o.dispatch=a,o=zu(!1),f=ku.bind(null,re,!1,o.queue),o=Ln(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Mx.bind(null,re,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Kp(t){var n=nn();return Qp(n,Ie,t)}function Qp(t,n,a){if(n=Ou(t,n,Yp)[0],t=ml(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=no(n)}catch(x){throw x===Fs?sl:x}else o=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Xs(9,{destroy:void 0},Ex.bind(null,u,a),null)),[o,f,t]}function Ex(t,n){t.action=n}function Jp(t){var n=nn(),a=Ie;if(a!==null)return Qp(n,a,t);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Xs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=re.updateQueue,n===null&&(n=dl(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function $p(){return nn().memoizedState}function gl(t,n,a,o){var u=Ln();re.flags|=t,u.memoizedState=Xs(1|n,{destroy:void 0},a,o===void 0?null:o)}function _l(t,n,a,o){var u=nn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ie!==null&&o!==null&&Cu(o,Ie.memoizedState.deps)?u.memoizedState=Xs(n,f,a,o):(re.flags|=t,u.memoizedState=Xs(1|n,f,a,o))}function tm(t,n){gl(8390656,8,t,n)}function Bu(t,n){_l(2048,8,t,n)}function bx(t){re.flags|=4;var n=re.updateQueue;if(n===null)n=dl(),re.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function em(t){var n=nn().memoizedState;return bx({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function nm(t,n){return _l(4,2,t,n)}function im(t,n){return _l(4,4,t,n)}function am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sm(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,am.bind(null,n,t),a)}function Fu(){}function rm(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Cu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function om(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Cu(n,o[1]))return o[0];if(o=t(),ss){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function Hu(t,n,a){return a===void 0||(ki&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=l0(),re.lanes|=t,Ma|=t,a)}function lm(t,n,a,o){return Wn(a,n)?a:Gs.current!==null?(t=Hu(t,a,o),Wn(t,n)||(rn=!0),t):(ki&42)===0||(ki&1073741824)!==0&&(ge&261930)===0?(rn=!0,t.memoizedState=a):(t=l0(),re.lanes|=t,Ma|=t,n)}function cm(t,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var x=P.T,T={};P.T=T,ku(t,!1,n,a);try{var B=u(),tt=P.S;if(tt!==null&&tt(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var mt=xx(B,o);io(t,n,mt,Jn(t))}else io(t,n,o,Jn(t))}catch(St){io(t,n,{then:function(){},status:"rejected",reason:St},Jn())}finally{F.p=f,x!==null&&T.types!==null&&(x.types=T.types),P.T=x}}function Tx(){}function Gu(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=um(t).queue;cm(t,u,n,q,a===null?Tx:function(){return fm(t),a(o)})}function um(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function fm(t){var n=um(t);n.next===null&&(n=t.alternate.memoizedState),io(t,n.next.queue,{},Jn())}function Vu(){return Mn(So)}function hm(){return nn().memoizedState}function dm(){return nn().memoizedState}function Ax(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=ga(a);var o=_a(n,t,a);o!==null&&(Vn(o,n,a),Jr(o,n,a)),n={cache:_u()},t.payload=n;return}n=n.return}}function Rx(t,n,a){var o=Jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?mm(n,a):(a=ru(t,n,a,o),a!==null&&(Vn(a,t,o),gm(a,n,o)))}function pm(t,n,a){var o=Jn();io(t,n,a,o)}function io(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))mm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(u.hasEagerState=!0,u.eagerState=T,Wn(T,x))return Jo(t,n,u,0),Ve===null&&Qo(),!1}catch{}finally{}if(a=ru(t,n,u,o),a!==null)return Vn(a,t,o),gm(a,n,o),!0}return!1}function ku(t,n,a,o){if(o={lane:2,revertLane:Mf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(s(479))}else n=ru(t,a,o,2),n!==null&&Vn(n,t,2)}function vl(t){var n=t.alternate;return t===re||n!==null&&n===re}function mm(t,n){Vs=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function gm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Lr(t,a)}}var ao={readContext:Mn,use:pl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};ao.useEffectEvent=Je;var _m={readContext:Mn,use:pl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var o=t();if(ss){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Ln();if(a!==void 0){var u=a(n);if(ss){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Rx.bind(null,re,t),[o.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=zu(t);var n=t.queue,a=pm.bind(null,re,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Ln();return Hu(a,t,n)},useTransition:function(){var t=zu(!1);return t=cm.bind(null,re,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=re,u=Ln();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(ge&127)!==0||Bp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,tm(Hp.bind(null,o,f,t),[t]),o.flags|=2048,Xs(9,{destroy:void 0},Fp.bind(null,o,f,a,n),null),a},useId:function(){var t=Ln(),n=Ve.identifierPrefix;if(ye){var a=wi,o=Ci;a=(o&~(1<<32-Jt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:Zp,useActionState:Zp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,re,!0,a),a.dispatch=n,[t,n]},useMemoCache:Lu,useCacheRefresh:function(){return Ln().memoizedState=Ax.bind(null,re)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:Mn,use:pl,useCallback:rm,useContext:Mn,useEffect:Bu,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:ml,useRef:$p,useState:function(){return ml(Xi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=nn();return lm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=ml(Xi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Ip,useId:hm,useHostTransitionStatus:Vu,useFormState:Kp,useActionState:Kp,useOptimistic:function(t,n){var a=nn();return kp(a,Ie,t,n)},useMemoCache:Lu,useCacheRefresh:dm};Xu.useEffectEvent=em;var vm={readContext:Mn,use:pl,useCallback:rm,useContext:Mn,useEffect:Bu,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Pu,useRef:$p,useState:function(){return Pu(Xi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=nn();return Ie===null?Hu(a,t,n):lm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Pu(Xi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Ip,useId:hm,useHostTransitionStatus:Vu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=nn();return Ie!==null?kp(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:dm};vm.useEffectEvent=em;function ju(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wu={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Jn(),u=ga(o);u.payload=n,a!=null&&(u.callback=a),n=_a(t,u,o),n!==null&&(Vn(n,t,o),Jr(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Jn(),u=ga(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=_a(t,u,o),n!==null&&(Vn(n,t,o),Jr(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),o=ga(a);o.tag=2,n!=null&&(o.callback=n),n=_a(t,o,a),n!==null&&(Vn(n,t,a),Jr(n,t,a))}};function xm(t,n,a,o,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!Xr(a,o)||!Xr(u,f):!0}function ym(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Wu.enqueueReplaceState(n,n.state,null)}function rs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Sm(t){Ko(t)}function Mm(t){console.error(t)}function Em(t){Ko(t)}function xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function bm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function qu(t,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(t,n)},a}function Tm(t){return t=ga(t),t.tag=3,t}function Am(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){bm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){bm(n,a,o),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Cx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Ul():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),xf(t,o,u)),!1;case 22:return a.flags|=65536,o===rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),xf(t,o,u)),!1}throw Error(s(435,a.tag))}return xf(t,o,u),Ul(),!1}if(ye)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==hu&&(t=Error(s(422),{cause:o}),qr(si(t,a)))):(o!==hu&&(n=Error(s(423),{cause:o}),qr(si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=si(o,a),u=qu(t.stateNode,o,u),Eu(t,u),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:o});if(f=si(f,a),ho===null?ho=[f]:ho.push(f),$e!==4&&($e=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=qu(a.stateNode,o,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Tm(u),Am(u,t,a,o),Eu(a,u),!1}a=a.return}while(a!==null);return!1}var Yu=Error(s(461)),rn=!1;function En(t,n,a,o){n.child=t===null?Dp(n,null,a,o):as(n,t.child,a,o)}function Rm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var T in o)T!=="ref"&&(x[T]=o[T])}else x=o;return ts(n),o=wu(t,n,a,x,f,u),T=Du(),t!==null&&!rn?(Uu(t,n,u),ji(t,n,u)):(ye&&T&&uu(n),n.flags|=1,En(t,n,o,u),n.child)}function Cm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wm(t,n,f,o,u)):(t=tl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!nf(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xr,a(x,o)&&t.ref===n.ref)return ji(t,n,u)}return n.flags|=1,t=Fi(f,o),t.ref=n.ref,t.return=n,n.child=t}function wm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Xr(f,o)&&t.ref===n.ref)if(rn=!1,n.pendingProps=o=f,nf(t,u))(t.flags&131072)!==0&&(rn=!0);else return n.lanes=t.lanes,ji(t,n,u)}return Zu(t,n,a,o,u)}function Dm(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Um(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?Lp(n,f):Tu(),Op(n);else return o=n.lanes=536870912,Um(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(al(n,f.cachePool),Lp(n,f),xa(),n.memoizedState=null):(t!==null&&al(n,null),Tu(),xa());return En(t,n,u,a),n.child}function so(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Um(t,n,a,o,u){var f=xu();return f=f===null?null:{parent:an._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),Tu(),Op(n),t!==null&&zs(t,n,o,!0),n.childLanes=u,null}function yl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Nm(t,n,a){return as(n,t.child,null,a),t=yl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function wx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(o.mode==="hidden")return t=yl(n,o),n.lanes=536870912,so(null,t);if(Ru(n),(t=Xe)?(t=X0(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,Sn=n,Xe=null)):t=null,t===null)throw da(n);return n.lanes=536870912,null}return yl(n,o)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Ru(n),u)if(n.flags&256)n.flags&=-257,n=Nm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(rn||zs(t,n,a,!1),u=(a&t.childLanes)!==0,rn||u){if(o=Ve,o!==null&&(x=Ri(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Ka(t,x),Vn(o,t,x),Yu;Ul(),n=Nm(t,n,a)}else t=f.treeContext,Xe=ui(x.nextSibling),Sn=n,ye=!0,ha=null,li=!1,t!==null&&vp(n,t),n=yl(n,o),n.flags|=4096;return n}return t=Fi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zu(t,n,a,o,u){return ts(n),a=wu(t,n,a,o,void 0,u),o=Du(),t!==null&&!rn?(Uu(t,n,u),ji(t,n,u)):(ye&&o&&uu(n),n.flags|=1,En(t,n,a,u),n.child)}function Lm(t,n,a,o,u,f){return ts(n),n.updateQueue=null,a=zp(n,o,a,u),Pp(t),o=Du(),t!==null&&!rn?(Uu(t,n,f),ji(t,n,f)):(ye&&o&&uu(n),n.flags|=1,En(t,n,a,f),n.child)}function Om(t,n,a,o,u){if(ts(n),n.stateNode===null){var f=Ns,x=a.contextType;typeof x=="object"&&x!==null&&(f=Mn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Wu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Su(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Mn(x):Ns,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(ju(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Wu.enqueueReplaceState(f,f.state,null),to(n,o,f,u),$r(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=rs(a,T);f.props=B;var tt=f.context,mt=a.contextType;x=Ns,typeof mt=="object"&&mt!==null&&(x=Mn(mt));var St=a.getDerivedStateFromProps;mt=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==x)&&ym(n,f,o,x),ma=!1;var et=n.memoizedState;f.state=et,to(n,o,f,u),$r(),tt=n.memoizedState,T||et!==tt||ma?(typeof St=="function"&&(ju(n,a,St,o),tt=n.memoizedState),(B=ma||xm(n,a,B,o,et,tt,x))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=x,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Mu(t,n),x=n.memoizedProps,mt=rs(a,x),f.props=mt,St=n.pendingProps,et=f.context,tt=a.contextType,B=Ns,typeof tt=="object"&&tt!==null&&(B=Mn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==St||et!==B)&&ym(n,f,o,B),ma=!1,et=n.memoizedState,f.state=et,to(n,o,f,u),$r();var ct=n.memoizedState;x!==St||et!==ct||ma||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof T=="function"&&(ju(n,a,T,o),ct=n.memoizedState),(mt=ma||xm(n,a,mt,o,et,ct,B)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ct,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ct,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),f.props=o,f.state=ct,f.context=B,o=mt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Sl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=as(n,t.child,null,u),n.child=as(n,null,a,u)):En(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ji(t,n,u),t}function Pm(t,n,a,o){return Ja(),n.flags|=256,En(t,n,a,o),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(t){return{baseLanes:t,cachePool:bp()}}function Ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function zm(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(u?va(n):xa(),(t=Xe)?(t=X0(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,Sn=n,Xe=null)):t=null,t===null)throw da(n);return Pf(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(xa(),u=n.mode,T=Ml({mode:"hidden",children:T},u),o=Qa(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Qu(a),o.childLanes=Ju(t,x,a),n.memoizedState=Ku,so(null,o)):(va(n),$u(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=tf(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),T=o.fallback,u=n.mode,o=Ml({mode:"visible",children:o.children},u),T=Qa(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,as(n,t.child,null,a),o=n.child,o.memoizedState=Qu(a),o.childLanes=Ju(t,x,a),n.memoizedState=Ku,n=so(null,o));else if(va(n),Pf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var tt=x.dgst;x=tt,o=Error(s(419)),o.stack="",o.digest=x,qr({value:o,source:null,stack:null}),n=tf(t,n,a)}else if(rn||zs(t,n,a,!1),x=(a&t.childLanes)!==0,rn||x){if(x=Ve,x!==null&&(o=Ri(x,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,Ka(t,o),Vn(x,t,o),Yu;Of(T)||Ul(),n=tf(t,n,a)}else Of(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Xe=ui(T.nextSibling),Sn=n,ye=!0,ha=null,li=!1,t!==null&&vp(n,t),n=$u(n,o.children),n.flags|=4096);return n}return u?(xa(),T=o.fallback,u=n.mode,B=t.child,tt=B.sibling,o=Fi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,tt!==null?T=Fi(tt,T):(T=Qa(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,so(null,o),o=n.child,T=t.child.memoizedState,T===null?T=Qu(a):(u=T.cachePool,u!==null?(B=an._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=bp(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=Ju(t,x,a),n.memoizedState=Ku,so(t.child,o)):(va(n),a=t.child,t=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function $u(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function tf(t,n,a){return as(n,t.child,null,a),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Im(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),mu(t.return,n,a)}function ef(t,n,a,o,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function Bm(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=en.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,xt(en,x),En(t,n,o,a),o=ye?Wr:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Im(t,a,n);else if(t.tag===19)Im(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ef(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&ul(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}ef(n,!0,a,null,f,o);break;case"together":ef(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(zs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function Dx(t,n,a){switch(n.tag){case 3:zt(n,n.stateNode.containerInfo),pa(n,an,t.memoizedState.cache),Ja();break;case 27:case 5:Zt(n);break;case 4:zt(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zm(t,n,a):(va(n),t=ji(t,n,a),t!==null?t.sibling:null);va(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(zs(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Bm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(en,en.current),o)break;return null;case 22:return n.lanes=0,Dm(t,n,a,n.pendingProps);case 24:pa(n,an,t.memoizedState.cache)}return ji(t,n,a)}function Fm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)rn=!0;else{if(!nf(t,a)&&(n.flags&128)===0)return rn=!1,Dx(t,n,a);rn=(t.flags&131072)!==0}else rn=!1,ye&&(n.flags&1048576)!==0&&_p(n,Wr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=ns(n.elementType),n.type=t,typeof t=="function")ou(t)?(o=rs(t,o),n.tag=1,n=Om(null,n,t,o,a)):(n.tag=0,n=Zu(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Rm(null,n,t,o,a);break t}else if(u===z){n.tag=14,n=Cm(null,n,t,o,a);break t}}throw n=dt(t)||t,Error(s(306,n,""))}}return n;case 0:return Zu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=rs(o,n.pendingProps),Om(t,n,o,u,a);case 3:t:{if(zt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Mu(t,n),to(n,o,null,a);var x=n.memoizedState;if(o=x.cache,pa(n,an,o),o!==f.cache&&gu(n,[an],a,!0),$r(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Pm(t,n,o,a);break t}else if(o!==u){u=si(Error(s(424)),n),qr(u),n=Pm(t,n,o,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=ui(t.firstChild),Sn=n,ye=!0,ha=null,li=!0,a=Dp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),o===u){n=ji(t,n,a);break t}En(t,n,o,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=K0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,o=Bl(Et.current).createElement(a),o[Ke]=n,o[xn]=t,bn(o,a,t),Y(o),n.stateNode=o):n.memoizedState=K0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&ye&&(o=n.stateNode=q0(n.type,n.pendingProps,Et.current),Sn=n,li=!0,u=Xe,Ra(n.type)?(zf=u,Xe=ui(o.firstChild)):Xe=u),En(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((u=o=Xe)&&(o=ry(o,n.type,n.pendingProps,li),o!==null?(n.stateNode=o,Sn=n,Xe=ui(o.firstChild),li=!1,u=!0):u=!1),u||da(n)),Zt(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,Uf(u,f)?o=null:x!==null&&Uf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=wu(t,n,Sx,null,null,a),So._currentValue=u),Sl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&ye&&((t=a=Xe)&&(a=oy(a,n.pendingProps,li),a!==null?(n.stateNode=a,Sn=n,Xe=null,t=!0):t=!1),t||da(n)),null;case 13:return zm(t,n,a);case 4:return zt(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=as(n,null,o,a):En(t,n,o,a),n.child;case 11:return Rm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ts(n),u=Mn(u),o=o(u),n.flags|=1,En(t,n,o,a),n.child;case 14:return Cm(t,n,n.type,n.pendingProps,a);case 15:return wm(t,n,n.type,n.pendingProps,a);case 19:return Bm(t,n,a);case 31:return wx(t,n,a);case 22:return Dm(t,n,a,n.pendingProps);case 24:return ts(n),o=Mn(an),t===null?(u=xu(),u===null&&(u=Ve,f=_u(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Su(n),pa(n,an,u)):((t.lanes&a)!==0&&(Mu(t,n),to(n,null,null,a),$r()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),pa(n,an,o)):(o=f.cache,pa(n,an,o),o!==u.cache&&gu(n,[an],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Wi(t){t.flags|=4}function af(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(h0())t.flags|=8192;else throw is=rl,yu}else t.flags&=-16777217}function Hm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!eg(n))if(h0())t.flags|=8192;else throw is=rl,yu}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?cn():536870912,t.lanes|=n,Ys|=n)}function ro(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ux(t,n,a){var o=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(an),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ps(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),je(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Wi(n),f!==null?(je(n),Hm(n,f)):(je(n),af(n,u,null,o,a))):f?f!==t.memoizedState?(Wi(n),je(n),Hm(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Wi(n),je(n),af(n,u,t,o,a)),null;case 27:if(Oe(n),a=Et.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}t=W.current,Ps(n)?xp(n):(t=q0(u,o,a),n.stateNode=t,Wi(n))}return je(n),null;case 5:if(Oe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(f=W.current,Ps(n))xp(n);else{var x=Bl(Et.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[Ke]=n,f[xn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(bn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Wi(n)}}return je(n),af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Et.current,Ps(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Ke]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||z0(t.nodeValue,a)),t||da(n,!0)}else t=Bl(t).createTextNode(o),t[Ke]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Ps(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ke]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ps(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Ke]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),je(n),null);case 4:return kt(),t===null&&Af(n.stateNode.containerInfo),je(n),null;case 10:return Vi(n.type),je(n),null;case 19:if(J(en),o=n.memoizedState,o===null)return je(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)ro(o,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,ro(o,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)pp(a,t),a=a.sibling;return xt(en,en.current&1|2),ye&&Hi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&gt()>Cl&&(n.flags|=128,u=!0,ro(o,!1),n.lanes=4194304)}else{if(!u)if(t=ul(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!ye)return je(n),null}else 2*gt()-o.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,u=!0,ro(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=gt(),t.sibling=null,a=en.current,xt(en,u?a&1|2:a&1),ye&&Hi(n,o.treeForkCount),t):(je(n),null);case 22:case 23:return Zn(n),Au(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&J(es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(an),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Nx(t,n){switch(fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(an),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Oe(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(en),null;case 4:return kt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Zn(n),Au(),t!==null&&J(es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(an),null;case 25:return null;default:return null}}function Gm(t,n){switch(fu(n),n.tag){case 3:Vi(an),kt();break;case 26:case 27:case 5:Oe(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:J(en);break;case 10:Vi(n.type);break;case 22:case 23:Zn(n),Au(),t!==null&&J(es);break;case 24:Vi(an)}}function oo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(T){Le(n,n.return,T)}}function ya(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var x=o.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var B=a,tt=T;try{tt()}catch(mt){Le(u,B,mt)}}}o=o.next}while(o!==f)}}catch(mt){Le(n,n.return,mt)}}function Vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Np(n,a)}catch(o){Le(t,t.return,o)}}}function km(t,n,a){a.props=rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Le(t,n,o)}}function lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Le(t,n,u)}}function Di(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Le(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Le(t,n,u)}else a.current=null}function Xm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Le(t,t.return,u)}}function sf(t,n,a){try{var o=t.stateNode;ty(o,t.type,a,n),o[xn]=n}catch(u){Le(t,t.return,u)}}function jm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function rf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||jm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(o!==4&&(o===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(of(t,n,a),t=t.sibling;t!==null;)of(t,n,a),t=t.sibling}function bl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(bl(t,n,a),t=t.sibling;t!==null;)bl(t,n,a),t=t.sibling}function Wm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[Ke]=t,n[xn]=a}catch(f){Le(t,t.return,f)}}var qi=!1,on=!1,lf=!1,qm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Lx(t,n){if(t=t.containerInfo,wf=jl,t=sp(t),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,B=-1,tt=0,mt=0,St=t,et=null;e:for(;;){for(var ct;St!==a||u!==0&&St.nodeType!==3||(T=x+u),St!==f||o!==0&&St.nodeType!==3||(B=x+o),St.nodeType===3&&(x+=St.nodeValue.length),(ct=St.firstChild)!==null;)et=St,St=ct;for(;;){if(St===t)break e;if(et===a&&++tt===u&&(T=x),et===f&&++mt===o&&(B=x),(ct=St.nextSibling)!==null)break;St=et,et=St.parentNode}St=ct}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:t,selectionRange:a},jl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ft=rs(a.type,u);t=o.getSnapshotBeforeUpdate(Ft,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Qt){Le(a,a.return,Qt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Lf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Ym(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),o&4&&oo(5,a);break;case 1:if(Zi(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Le(a,a.return,x)}else{var u=rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Le(a,a.return,x)}}o&64&&Vm(a),o&512&&lo(a,a.return);break;case 3:if(Zi(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Np(t,n)}catch(x){Le(a,a.return,x)}}break;case 27:n===null&&o&4&&Wm(a);case 26:case 5:Zi(t,a),n===null&&o&4&&Xm(a),o&512&&lo(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),o&4&&Qm(t,a);break;case 13:Zi(t,a),o&4&&Jm(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vx.bind(null,a),ly(t,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||on,u=qi;var f=on;qi=o,(on=n)&&!f?Ki(t,a,(a.subtreeFlags&8772)!==0):Zi(t,a),qi=u,on=f}break;case 30:break;default:Zi(t,a)}}function Zm(t){var n=t.alternate;n!==null&&(t.alternate=null,Zm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,Bn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)Km(t,n,a),a=a.sibling}function Km(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Wt,a)}catch{}switch(a.tag){case 26:on||Di(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Di(a,n);var o=qe,u=Bn;Ra(a.type)&&(qe=a.stateNode,Bn=!1),Yi(t,n,a),vo(a.stateNode),qe=o,Bn=u;break;case 5:on||Di(a,n);case 6:if(o=qe,u=Bn,qe=null,Yi(t,n,a),qe=o,Bn=u,qe!==null)if(Bn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:qe!==null&&(Bn?(t=qe,V0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),nr(t)):V0(qe,a.stateNode));break;case 4:o=qe,u=Bn,qe=a.stateNode.containerInfo,Bn=!0,Yi(t,n,a),qe=o,Bn=u;break;case 0:case 11:case 14:case 15:ya(2,a,n),on||ya(4,a,n),Yi(t,n,a);break;case 1:on||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&km(a,n,o)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,Yi(t,n,a),on=o;break;default:Yi(t,n,a)}}function Qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{nr(t)}catch(a){Le(n,n.return,a)}}}function Jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nr(t)}catch(a){Le(n,n.return,a)}}function Ox(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new qm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new qm),n;default:throw Error(s(435,t.tag))}}function Tl(t,n){var a=Ox(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=kx.bind(null,t,o);o.then(u,u)}})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(Ra(T.type)){qe=T.stateNode,Bn=!1;break t}break;case 5:qe=T.stateNode,Bn=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(qe===null)throw Error(s(160));Km(f,x,u),qe=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,t),n=n.sibling}var vi=null;function $m(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Hn(t),o&4&&(ya(3,t,t.return),oo(3,t),ya(5,t,t.return));break;case 1:Fn(n,t),Hn(t),o&512&&(on||a===null||Di(a,a.return)),o&64&&qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(Fn(n,t),Hn(t),o&512&&(on||a===null||Di(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Wa]||f[Ke]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,o,a),f[Ke]=t,Y(f),o=f;break t;case"link":var x=$0("link","href",u).get(o+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=u.createElement(o),bn(f,o,a),u.head.appendChild(f);break;case"meta":if(x=$0("meta","content",u).get(o+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=u.createElement(o),bn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Ke]=t,Y(f),o=f}t.stateNode=o}else tg(u,t.type,t.stateNode);else t.stateNode=J0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?tg(u,t.type,t.stateNode):J0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Hn(t),o&512&&(on||a===null||Di(a,a.return)),a!==null&&o&4&&sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Hn(t),o&512&&(on||a===null||Di(a,a.return)),t.flags&32){u=t.stateNode;try{zn(u,"")}catch(Ft){Le(t,t.return,Ft)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,sf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(lf=!0);break;case 6:if(Fn(n,t),Hn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ft){Le(t,t.return,Ft)}}break;case 3:if(Gl=null,u=vi,vi=Fl(n.containerInfo),Fn(n,t),vi=u,Hn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{nr(n.containerInfo)}catch(Ft){Le(t,t.return,Ft)}lf&&(lf=!1,t0(t));break;case 4:o=vi,vi=Fl(t.stateNode.containerInfo),Fn(n,t),Hn(t),vi=o;break;case 12:Fn(n,t),Hn(t);break;case 31:Fn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tl(t,o)));break;case 13:Fn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=gt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tl(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=qi,mt=on;if(qi=tt||u,on=mt||B,Fn(n,t),on=mt,qi=tt,Hn(t),o&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||qi||on||os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=B.stateNode;var St=B.memoizedProps.style,et=St!=null&&St.hasOwnProperty("display")?St.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ft){Le(B,B.return,Ft)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ft){Le(B,B.return,Ft)}}}else if(n.tag===18){if(a===null){B=n;try{var ct=B.stateNode;u?k0(ct,!0):k0(B.stateNode,!1)}catch(Ft){Le(B,B.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Tl(t,a))));break;case 19:Fn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tl(t,o)));break;case 30:break;case 21:break;default:Fn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(jm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=rf(t);bl(t,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(zn(x,""),a.flags&=-33);var T=rf(t);bl(t,T,x);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=rf(t);of(t,tt,B);break;default:throw Error(s(161))}}catch(mt){Le(t,t.return,mt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function t0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;t0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ym(t,n.alternate,n),n=n.sibling}function os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),os(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),os(n);break;case 27:vo(n.stateNode);case 26:case 5:Di(n,n.return),os(n);break;case 22:n.memoizedState===null&&os(n);break;case 30:os(n);break;default:os(n)}t=t.sibling}}function Ki(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(u,f,a),oo(4,f);break;case 1:if(Ki(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Le(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Up(B[u],T)}catch(tt){Le(o,o.return,tt)}}a&&x&64&&Vm(f),lo(f,f.return);break;case 27:Wm(f);case 26:case 5:Ki(u,f,a),a&&o===null&&x&4&&Xm(f),lo(f,f.return);break;case 12:Ki(u,f,a);break;case 31:Ki(u,f,a),a&&x&4&&Qm(u,f);break;case 13:Ki(u,f,a),a&&x&4&&Jm(u,f);break;case 22:f.memoizedState===null&&Ki(u,f,a),lo(f,f.return);break;case 30:break;default:Ki(u,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Yr(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yr(t))}function xi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)e0(t,n,a,o),n=n.sibling}function e0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,o),u&2048&&oo(9,n);break;case 1:xi(t,n,a,o);break;case 3:xi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yr(t)));break;case 12:if(u&2048){xi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Le(n,n.return,B)}}else xi(t,n,a,o);break;case 31:xi(t,n,a,o);break;case 13:xi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,o):co(t,n):f._visibility&2?xi(t,n,a,o):(f._visibility|=2,js(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&cf(x,n);break;case 24:xi(t,n,a,o),u&2048&&uf(n.alternate,n);break;default:xi(t,n,a,o)}}function js(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,T=a,B=o,tt=x.flags;switch(x.tag){case 0:case 11:case 15:js(f,x,T,B,u),oo(8,x);break;case 23:break;case 22:var mt=x.stateNode;x.memoizedState!==null?mt._visibility&2?js(f,x,T,B,u):co(f,x):(mt._visibility|=2,js(f,x,T,B,u)),u&&tt&2048&&cf(x.alternate,x);break;case 24:js(f,x,T,B,u),u&&tt&2048&&uf(x.alternate,x);break;default:js(f,x,T,B,u)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:co(a,o),u&2048&&cf(o.alternate,o);break;case 24:co(a,o),u&2048&&uf(o.alternate,o);break;default:co(a,o)}n=n.sibling}}var uo=8192;function Ws(t,n,a){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)n0(t,n,a),t=t.sibling}function n0(t,n,a){switch(t.tag){case 26:Ws(t,n,a),t.flags&uo&&t.memoizedState!==null&&yy(a,vi,t.memoizedState,t.memoizedProps);break;case 5:Ws(t,n,a);break;case 3:case 4:var o=vi;vi=Fl(t.stateNode.containerInfo),Ws(t,n,a),vi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=uo,uo=16777216,Ws(t,n,a),uo=o):Ws(t,n,a));break;default:Ws(t,n,a)}}function i0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,s0(o,t)}i0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)a0(t),t=t.sibling}function a0(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&ya(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):fo(t);break;default:fo(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,s0(o,t)}i0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function s0(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Yr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=t;mn!==null;){o=mn;var u=o.sibling,f=o.return;if(Zm(o),o===a){mn=null;break t}if(u!==null){u.return=f,mn=u;break t}mn=f}}}var Px={getCacheForType:function(t){var n=Mn(an),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(an).controller.signal}},zx=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,he=null,ge=0,Ne=0,Kn=null,Sa=!1,qs=!1,ff=!1,Qi=0,$e=0,Ma=0,ls=0,hf=0,Qn=0,Ys=0,ho=null,Gn=null,df=!1,Rl=0,r0=0,Cl=1/0,wl=null,Ea=null,fn=0,ba=null,Zs=null,Ji=0,pf=0,mf=null,o0=null,po=0,gf=null;function Jn(){return(we&2)!==0&&ge!==0?ge&-ge:P.T!==null?Mf():Or()}function l0(){if(Qn===0)if((ge&536870912)===0||ye){var t=ht;ht<<=1,(ht&3932160)===0&&(ht=262144),Qn=t}else Qn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Qn}function Vn(t,n,a){(t===Ve&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)&&(Ks(t,0),Ta(t,ge,Qn,!1)),vn(t,a),((we&2)===0||t!==Ve)&&(t===Ve&&((we&2)===0&&(ls|=a),$e===4&&Ta(t,ge,Qn,!1)),Ui(t))}function c0(t,n,a){if((we&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||te(t,n),u=o?Fx(t,n):vf(t,n,!0),f=o;do{if(u===0){qs&&!o&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ix(a)){u=vf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;u=ho;var B=T.current.memoizedState.isDehydrated;if(B&&(Ks(T,x).flags|=256),x=vf(T,x,!1),x!==2){if(ff&&!B){T.errorRecoveryDisabledLanes|=f,ls|=f,u=4;break t}f=Gn,Gn=u,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){Ks(t,0),Ta(t,n,0,!0);break}t:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ta(o,n,Qn,!Sa);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Rl+300-gt(),10<u)){if(Ta(o,n,Qn,!Sa),Dt(o,0,!0)!==0)break t;Ji=n,o.timeoutHandle=H0(u0.bind(null,o,a,Gn,wl,df,n,Qn,ls,Ys,Sa,f,"Throttled",-0,0),u);break t}u0(o,a,Gn,wl,df,n,Qn,ls,Ys,Sa,f,null,-0,0)}}break}while(!0);Ui(t)}function u0(t,n,a,o,u,f,x,T,B,tt,mt,St,et,ct){if(t.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},n0(n,f,St);var Ft=(f&62914560)===f?Rl-gt():(f&4194048)===f?r0-gt():0;if(Ft=Sy(St,Ft),Ft!==null){Ji=f,t.cancelPendingCommit=Ft(v0.bind(null,t,n,f,a,o,u,x,T,B,mt,St,null,et,ct)),Ta(t,f,x,!tt);return}}v0(t,n,f,a,o,u,x,T,B)}function Ix(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,o){n&=~hf,n&=~ls,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Jt(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&Nr(t,a,n)}function Dl(){return(we&6)===0?(mo(0),!1):!0}function _f(){if(he!==null){if(Ne===0)var t=he.return;else t=he,Gi=$a=null,Nu(t),Hs=null,Kr=0,t=he;for(;t!==null;)Gm(t.alternate,t),t=t.return;he=null}}function Ks(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,iy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,_f(),Ve=t,he=a=Fi(t.current,null),ge=n,Ne=0,Kn=null,Sa=!1,qs=te(t,n),ff=!1,Ys=Qn=hf=ls=Ma=$e=0,Gn=ho=null,df=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Jt(o),f=1<<u;n|=t[u],o&=~f}return Qi=n,Qo(),a}function f0(t,n){re=null,P.H=ao,n===Fs||n===sl?(n=Rp(),Ne=3):n===yu?(n=Rp(),Ne=4):Ne=n===Yu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,he===null&&($e=1,xl(t,si(n,t.current)))}function h0(){var t=Yn.current;return t===null?!0:(ge&4194048)===ge?ci===null:(ge&62914560)===ge||(ge&536870912)!==0?t===ci:!1}function d0(){var t=P.H;return P.H=ao,t===null?ao:t}function p0(){var t=P.A;return P.A=Px,t}function Ul(){$e=4,Sa||(ge&4194048)!==ge&&Yn.current!==null||(qs=!0),(Ma&134217727)===0&&(ls&134217727)===0||Ve===null||Ta(Ve,ge,Qn,!1)}function vf(t,n,a){var o=we;we|=2;var u=d0(),f=p0();(Ve!==t||ge!==n)&&(wl=null,Ks(t,n)),n=!1;var x=$e;t:do try{if(Ne!==0&&he!==null){var T=he,B=Kn;switch(Ne){case 8:_f(),x=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var tt=Ne;if(Ne=0,Kn=null,Qs(t,T,B,tt),a&&qs){x=0;break t}break;default:tt=Ne,Ne=0,Kn=null,Qs(t,T,B,tt)}}Bx(),x=$e;break}catch(mt){f0(t,mt)}while(!0);return n&&t.shellSuspendCounter++,Gi=$a=null,we=o,P.H=u,P.A=f,he===null&&(Ve=null,ge=0,Qo()),x}function Bx(){for(;he!==null;)m0(he)}function Fx(t,n){var a=we;we|=2;var o=d0(),u=p0();Ve!==t||ge!==n?(wl=null,Cl=gt()+500,Ks(t,n)):qs=te(t,n);t:do try{if(Ne!==0&&he!==null){n=he;var f=Kn;e:switch(Ne){case 1:Ne=0,Kn=null,Qs(t,n,f,1);break;case 2:case 9:if(Tp(f)){Ne=0,Kn=null,g0(n);break}n=function(){Ne!==2&&Ne!==9||Ve!==t||(Ne=7),Ui(t)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Tp(f)?(Ne=0,Kn=null,g0(n)):(Ne=0,Kn=null,Qs(t,n,f,7));break;case 5:var x=null;switch(he.tag){case 26:x=he.memoizedState;case 5:case 27:var T=he;if(x?eg(x):T.stateNode.complete){Ne=0,Kn=null;var B=T.sibling;if(B!==null)he=B;else{var tt=T.return;tt!==null?(he=tt,Nl(tt)):he=null}break e}}Ne=0,Kn=null,Qs(t,n,f,5);break;case 6:Ne=0,Kn=null,Qs(t,n,f,6);break;case 8:_f(),$e=6;break t;default:throw Error(s(462))}}Hx();break}catch(mt){f0(t,mt)}while(!0);return Gi=$a=null,P.H=o,P.A=u,we=a,he!==null?0:(Ve=null,ge=0,Qo(),$e)}function Hx(){for(;he!==null&&!A();)m0(he)}function m0(t){var n=Fm(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?Nl(t):he=n}function g0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Lm(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Lm(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Nu(n);default:Gm(a,n),n=he=pp(n,Qi),n=Fm(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?Nl(t):he=n}function Qs(t,n,a,o){Gi=$a=null,Nu(n),Hs=null,Kr=0;var u=n.return;try{if(Cx(t,u,n,a,ge)){$e=1,xl(t,si(a,t.current)),he=null;return}}catch(f){if(u!==null)throw he=u,f;$e=1,xl(t,si(a,t.current)),he=null;return}n.flags&32768?(ye||o===1?t=!0:qs||(ge&536870912)!==0?t=!1:(Sa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),_0(n,t)):Nl(n)}function Nl(t){var n=t;do{if((n.flags&32768)!==0){_0(n,Sa);return}t=n.return;var a=Ux(n.alternate,n,Qi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);$e===0&&($e=5)}function _0(t,n){do{var a=Nx(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);$e=6,he=null}function v0(t,n,a,o,u,f,x,T,B){t.cancelPendingCommit=null;do Ll();while(fn!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=su,pi(t,a,f,x,T,B),t===Ve&&(he=Ve=null,ge=0),Zs=n,ba=t,Ji=a,pf=f,mf=u,o0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xx(wt,function(){return E0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=F.p,F.p=2,x=we,we|=4;try{Lx(t,n,a)}finally{we=x,F.p=u,P.T=o}}fn=1,x0(),y0(),S0()}}function x0(){if(fn===1){fn=0;var t=ba,n=Zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=F.p;F.p=2;var u=we;we|=4;try{$m(n,t);var f=Df,x=sp(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&ap(T.ownerDocument.documentElement,T)){if(B!==null&&tu(T)){var tt=B.start,mt=B.end;if(mt===void 0&&(mt=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(mt,T.value.length);else{var St=T.ownerDocument||document,et=St&&St.defaultView||window;if(et.getSelection){var ct=et.getSelection(),Ft=T.textContent.length,Qt=Math.min(B.start,Ft),Fe=B.end===void 0?Qt:Math.min(B.end,Ft);!ct.extend&&Qt>Fe&&(x=Fe,Fe=Qt,Qt=x);var Q=ip(T,Qt),X=ip(T,Fe);if(Q&&X&&(ct.rangeCount!==1||ct.anchorNode!==Q.node||ct.anchorOffset!==Q.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var $=St.createRange();$.setStart(Q.node,Q.offset),ct.removeAllRanges(),Qt>Fe?(ct.addRange($),ct.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ct.addRange($))}}}}for(St=[],ct=T;ct=ct.parentNode;)ct.nodeType===1&&St.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<St.length;T++){var _t=St[T];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}jl=!!wf,Df=wf=null}finally{we=u,F.p=o,P.T=a}}t.current=n,fn=2}}function y0(){if(fn===2){fn=0;var t=ba,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=F.p;F.p=2;var u=we;we|=4;try{Ym(t,n.alternate,n)}finally{we=u,F.p=o,P.T=a}}fn=3}}function S0(){if(fn===4||fn===3){fn=0,it();var t=ba,n=Zs,a=Ji,o=o0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Zs=ba=null,M0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ea=null),bs(a),n=n.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Wt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=F.p,F.p=2,P.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var T=o[x];f(T.value,{componentStack:T.stack})}}finally{P.T=n,F.p=u}}(Ji&3)!==0&&Ll(),Ui(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===gf?po++:(po=0,gf=t):po=0,mo(0)}}function M0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Yr(n)))}function Ll(){return x0(),y0(),S0(),E0()}function E0(){if(fn!==5)return!1;var t=ba,n=pf;pf=0;var a=bs(Ji),o=P.T,u=F.p;try{F.p=32>a?32:a,P.T=null,a=mf,mf=null;var f=ba,x=Ji;if(fn=0,Zs=ba=null,Ji=0,(we&6)!==0)throw Error(s(331));var T=we;if(we|=4,a0(f.current),e0(f,f.current,x,a),we=T,mo(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Wt,f)}catch{}return!0}finally{F.p=u,P.T=o,M0(t,n)}}function b0(t,n,a){n=si(a,n),n=qu(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(vn(t,2),Ui(t))}function Le(t,n,a){if(t.tag===3)b0(t,t,a);else for(;n!==null;){if(n.tag===3){b0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ea===null||!Ea.has(o))){t=si(a,t),a=Tm(2),o=_a(n,a,2),o!==null&&(Am(a,o,n,t),vn(o,2),Ui(o));break}}n=n.return}}function xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new zx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(ff=!0,u.add(a),t=Gx.bind(null,t,n,a),n.then(t,t))}function Gx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(ge&a)===a&&($e===4||$e===3&&(ge&62914560)===ge&&300>gt()-Rl?(we&2)===0&&Ks(t,0):hf|=a,Ys===ge&&(Ys=0)),Ui(t)}function T0(t,n){n===0&&(n=cn()),t=Ka(t,n),t!==null&&(vn(t,n),Ui(t))}function Vx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),T0(t,a)}function kx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),T0(t,a)}function Xx(t,n){return Xt(t,n)}var Ol=null,Js=null,yf=!1,Pl=!1,Sf=!1,Aa=0;function Ui(t){t!==Js&&t.next===null&&(Js===null?Ol=Js=t:Js=Js.next=t),Pl=!0,yf||(yf=!0,Wx())}function mo(t,n){if(!Sf&&Pl){Sf=!0;do for(var a=!1,o=Ol;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Jt(42|t)+1)-1,f&=u&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,w0(o,f))}else f=ge,f=Dt(o,o===Ve?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||te(o,f)||(a=!0,w0(o,f));o=o.next}while(a);Sf=!1}}function jx(){A0()}function A0(){Pl=yf=!1;var t=0;Aa!==0&&ny()&&(t=Aa);for(var n=gt(),a=null,o=Ol;o!==null;){var u=o.next,f=R0(o,n);f===0?(o.next=null,a===null?Ol=u:a.next=u,u===null&&(Js=a)):(a=o,(t!==0||(f&3)!==0)&&(Pl=!0)),o=u}fn!==0&&fn!==5||mo(t),Aa!==0&&(Aa=0)}function R0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Jt(f),T=1<<x,B=u[x];B===-1?((T&a)===0||(T&o)!==0)&&(u[x]=We(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ve,a=ge,a=Dt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&N(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&N(o),bs(a)){case 2:case 8:a=Gt;break;case 32:a=wt;break;case 268435456:a=me;break;default:a=wt}return o=C0.bind(null,t),a=Xt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&N(o),t.callbackPriority=2,t.callbackNode=null,2}function C0(t,n){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var o=ge;return o=Dt(t,t===Ve?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(c0(t,o,n),R0(t,gt()),t.callbackNode!=null&&t.callbackNode===a?C0.bind(null,t):null)}function w0(t,n){if(Ll())return null;c0(t,n,!0)}function Wx(){ay(function(){(we&6)!==0?Xt(yt,jx):A0()})}function Mf(){if(Aa===0){var t=Is;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Aa=t}return Aa}function D0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function U0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function qx(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=D0((u[xn]||null).action),x=o.submitter;x&&(n=(n=x[xn]||null)?D0(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new qo("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Aa!==0){var B=x?U0(u,x):new FormData(u);Gu(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=x?U0(u,x):new FormData(u),Gu(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Ef=0;Ef<au.length;Ef++){var bf=au[Ef],Yx=bf.toLowerCase(),Zx=bf[0].toUpperCase()+bf.slice(1);_i(Yx,"on"+Zx)}_i(lp,"onAnimationEnd"),_i(cp,"onAnimationIteration"),_i(up,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(fx,"onTransitionRun"),_i(hx,"onTransitionStart"),_i(dx,"onTransitionCancel"),_i(fp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function N0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var T=o[x],B=T.instance,tt=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(mt){Ko(mt)}u.currentTarget=null,f=B}else for(x=0;x<o.length;x++){if(T=o[x],B=T.instance,tt=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(mt){Ko(mt)}u.currentTarget=null,f=B}}}}function de(t,n){var a=n[Pr];a===void 0&&(a=n[Pr]=new Set);var o=t+"__bubble";a.has(o)||(L0(n,t,2,!1),a.add(o))}function Tf(t,n,a){var o=0;n&&(o|=4),L0(a,t,o,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[zl]){t[zl]=!0,Tt.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Tf(a,!1,t),Tf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,Tf("selectionchange",!1,n))}}function L0(t,n,a,o){switch(lg(n)){case 2:var u=by;break;case 8:u=Ty;break;default:u=Gf}a=u.bind(null,n,a,t),u=void 0,!jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Rf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var T=o.stateNode.containerInfo;if(T===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;T!==null;){if(x=R(T),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=f=x;continue t}T=T.parentNode}}o=o.return}Bd(function(){var tt=f,mt=kc(a),St=[];t:{var et=hp.get(t);if(et!==void 0){var ct=qo,Ft=t;switch(t){case"keypress":if(jo(a)===0)break t;case"keydown":case"keyup":ct=kv;break;case"focusin":Ft="focus",ct=Zc;break;case"focusout":Ft="blur",ct=Zc;break;case"beforeblur":case"afterblur":ct=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Wv;break;case lp:case cp:case up:ct=Ov;break;case fp:ct=Yv;break;case"scroll":case"scrollend":ct=wv;break;case"wheel":ct=Kv;break;case"copy":case"cut":case"paste":ct=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=kd;break;case"toggle":case"beforetoggle":ct=Jv}var Qt=(n&4)!==0,Fe=!Qt&&(t==="scroll"||t==="scrollend"),Q=Qt?et!==null?et+"Capture":null:et;Qt=[];for(var X=tt,$;X!==null;){var _t=X;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||Q===null||(_t=Ir(X,Q),_t!=null&&Qt.push(_o(X,_t,$))),Fe)break;X=X.return}0<Qt.length&&(et=new ct(et,Ft,null,a,mt),St.push({event:et,listeners:Qt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",et&&a!==Vc&&(Ft=a.relatedTarget||a.fromElement)&&(R(Ft)||Ft[zi]))break t;if((ct||et)&&(et=mt.window===mt?mt:(et=mt.ownerDocument)?et.defaultView||et.parentWindow:window,ct?(Ft=a.relatedTarget||a.toElement,ct=tt,Ft=Ft?R(Ft):null,Ft!==null&&(Fe=c(Ft),Qt=Ft.tag,Ft!==Fe||Qt!==5&&Qt!==27&&Qt!==6)&&(Ft=null)):(ct=null,Ft=tt),ct!==Ft)){if(Qt=Gd,_t="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=kd,_t="onPointerLeave",Q="onPointerEnter",X="pointer"),Fe=ct==null?et:at(ct),$=Ft==null?et:at(Ft),et=new Qt(_t,X+"leave",ct,a,mt),et.target=Fe,et.relatedTarget=$,_t=null,R(mt)===tt&&(Qt=new Qt(Q,X+"enter",Ft,a,mt),Qt.target=$,Qt.relatedTarget=Fe,_t=Qt),Fe=_t,ct&&Ft)e:{for(Qt=Qx,Q=ct,X=Ft,$=0,_t=Q;_t;_t=Qt(_t))$++;_t=0;for(var Yt=X;Yt;Yt=Qt(Yt))_t++;for(;0<$-_t;)Q=Qt(Q),$--;for(;0<_t-$;)X=Qt(X),_t--;for(;$--;){if(Q===X||X!==null&&Q===X.alternate){Qt=Q;break e}Q=Qt(Q),X=Qt(X)}Qt=null}else Qt=null;ct!==null&&O0(St,et,ct,Qt,!1),Ft!==null&&Fe!==null&&O0(St,Fe,Ft,Qt,!0)}}t:{if(et=tt?at(tt):window,ct=et.nodeName&&et.nodeName.toLowerCase(),ct==="select"||ct==="input"&&et.type==="file")var Ae=Qd;else if(Zd(et))if(Jd)Ae=lx;else{Ae=rx;var Ht=sx}else ct=et.nodeName,!ct||ct.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?tt&&Gc(tt.elementType)&&(Ae=Qd):Ae=ox;if(Ae&&(Ae=Ae(t,tt))){Kd(St,Ae,a,mt);break t}Ht&&Ht(t,et,tt),t==="focusout"&&tt&&et.type==="number"&&tt.memoizedProps.value!=null&&An(et,"number",et.value)}switch(Ht=tt?at(tt):window,t){case"focusin":(Zd(Ht)||Ht.contentEditable==="true")&&(ws=Ht,eu=tt,jr=null);break;case"focusout":jr=eu=ws=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,rp(St,a,mt);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":rp(St,a,mt)}var oe;if(Qc)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Cs?qd(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Xd&&a.locale!=="ko"&&(Cs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Cs&&(oe=Fd()):(ua=mt,Wc="value"in ua?ua.value:ua.textContent,Cs=!0)),Ht=Il(tt,_e),0<Ht.length&&(_e=new Vd(_e,t,null,a,mt),St.push({event:_e,listeners:Ht}),oe?_e.data=oe:(oe=Yd(a),oe!==null&&(_e.data=oe)))),(oe=tx?ex(t,a):nx(t,a))&&(_e=Il(tt,"onBeforeInput"),0<_e.length&&(Ht=new Vd("onBeforeInput","beforeinput",null,a,mt),St.push({event:Ht,listeners:_e}),Ht.data=oe)),qx(St,t,tt,a,mt)}N0(St,n)})}function _o(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Il(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ir(t,a),u!=null&&o.unshift(_o(t,u,f)),u=Ir(t,n),u!=null&&o.push(_o(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Qx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function O0(t,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var T=a,B=T.alternate,tt=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||tt===null||(B=tt,u?(tt=Ir(a,f),tt!=null&&x.unshift(_o(a,tt,B))):u||(tt=Ir(a,f),tt!=null&&x.push(_o(a,tt,B)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function P0(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace($x,"")}function z0(t,n){return n=P0(n),P0(t)===n}function Be(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(t,""+o);break;case"className":ke(t,"class",o);break;case"tabIndex":ke(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(t,a,o);break;case"style":zd(t,o,f);break;case"data":if(n!=="object"){ke(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ko(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",u.name,u,null),Be(t,n,"formEncType",u.formEncType,u,null),Be(t,n,"formMethod",u.formMethod,u,null),Be(t,n,"formTarget",u.formTarget,u,null)):(Be(t,n,"encType",u.encType,u,null),Be(t,n,"method",u.method,u,null),Be(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ko(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ii);break;case"onScroll":o!=null&&de("scroll",t);break;case"onScrollEnd":o!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":de("beforetoggle",t),de("toggle",t),xe(t,"popover",o);break;case"xlinkActuate":Te(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Te(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Te(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Te(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Te(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Te(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Te(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Te(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Te(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":xe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rv.get(a)||a,xe(t,a,o))}}function Cf(t,n,a,o,u,f){switch(a){case"style":zd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?zn(t,o):(typeof o=="number"||typeof o=="bigint")&&zn(t,""+o);break;case"onScroll":o!=null&&de("scroll",t);break;case"onScrollEnd":o!=null&&de("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):xe(t,a,o)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,x,a,null)}}u&&Be(t,n,"srcSet",a.srcSet,a,null),o&&Be(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var T=f=x=u=null,B=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":x=mt;break;case"checked":B=mt;break;case"defaultChecked":tt=mt;break;case"value":f=mt;break;case"defaultValue":T=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Be(t,n,o,mt,a,null)}}Nn(t,f,T,B,tt,x,u,!1);return;case"select":de("invalid",t),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":o=T;default:Be(t,n,u,T,a,null)}n=f,a=x,t.multiple=!!o,n!=null?Qe(t,!!o,n,!1):a!=null&&Qe(t,!!o,a,!0);return;case"textarea":de("invalid",t),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Be(t,n,x,T,a,null)}Ts(t,o,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(t,n,B,o,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(o=0;o<go.length;o++)de(go[o],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,tt,o,a,null)}return;default:if(Gc(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Cf(t,n,mt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Be(t,n,T,o,a,null))}function ty(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,T=null,B=null,tt=null,mt=null;for(ct in a){var St=a[ct];if(a.hasOwnProperty(ct)&&St!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":B=St;default:o.hasOwnProperty(ct)||Be(t,n,ct,null,o,St)}}for(var et in o){var ct=o[et];if(St=a[et],o.hasOwnProperty(et)&&(ct!=null||St!=null))switch(et){case"type":f=ct;break;case"name":u=ct;break;case"checked":tt=ct;break;case"defaultChecked":mt=ct;break;case"value":x=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==St&&Be(t,n,et,ct,o,St)}}ze(t,x,T,B,tt,mt,f,u);return;case"select":ct=x=T=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ct=B;default:o.hasOwnProperty(f)||Be(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==B&&Be(t,n,u,f,o,B)}n=T,a=x,o=ct,et!=null?Qe(t,!!a,et,!1):!!o!=!!a&&(n!=null?Qe(t,!!a,n,!0):Qe(t,!!a,a?[]:"",!1));return;case"textarea":ct=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(t,n,T,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":et=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Be(t,n,x,u,o,f)}yn(t,et,ct);return;case"option":for(var Ft in a)if(et=a[Ft],a.hasOwnProperty(Ft)&&et!=null&&!o.hasOwnProperty(Ft))switch(Ft){case"selected":t.selected=!1;break;default:Be(t,n,Ft,null,o,et)}for(B in o)if(et=o[B],ct=a[B],o.hasOwnProperty(B)&&et!==ct&&(et!=null||ct!=null))switch(B){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Be(t,n,B,et,o,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)et=a[Qt],a.hasOwnProperty(Qt)&&et!=null&&!o.hasOwnProperty(Qt)&&Be(t,n,Qt,null,o,et);for(tt in o)if(et=o[tt],ct=a[tt],o.hasOwnProperty(tt)&&et!==ct&&(et!=null||ct!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Be(t,n,tt,et,o,ct)}return;default:if(Gc(n)){for(var Fe in a)et=a[Fe],a.hasOwnProperty(Fe)&&et!==void 0&&!o.hasOwnProperty(Fe)&&Cf(t,n,Fe,void 0,o,et);for(mt in o)et=o[mt],ct=a[mt],!o.hasOwnProperty(mt)||et===ct||et===void 0&&ct===void 0||Cf(t,n,mt,et,o,ct);return}}for(var Q in a)et=a[Q],a.hasOwnProperty(Q)&&et!=null&&!o.hasOwnProperty(Q)&&Be(t,n,Q,null,o,et);for(St in o)et=o[St],ct=a[St],!o.hasOwnProperty(St)||et===ct||et==null&&ct==null||Be(t,n,St,et,o,ct)}function I0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ey(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,T=u.duration;if(f&&T&&I0(x)){for(x=0,T=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],tt=B.startTime;if(tt>T)break;var mt=B.transferSize,St=B.initiatorType;mt&&I0(St)&&(B=B.responseEnd,x+=mt*(B<T?1:(T-tt)/(B-tt)))}if(--o,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wf=null,Df=null;function Bl(t){return t.nodeType===9?t:t.ownerDocument}function B0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function F0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nf=null;function ny(){var t=window.event;return t&&t.type==="popstate"?t===Nf?!1:(Nf=t,!0):(Nf=null,!1)}var H0=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,G0=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof G0<"u"?function(t){return G0.resolve(null).then(t).catch(sy)}:H0;function sy(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function V0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),nr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,vo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[Wa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&vo(t.ownerDocument.body);a=u}while(a);nr(n)}function k0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Lf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ry(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Wa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function oy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function X0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Of(t){return t.data==="$?"||t.data==="$~"}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ly(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var zf=null;function j0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function W0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function q0(t,n,a){switch(n=Bl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zr(t)}var fi=new Map,Y0=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=F.d;F.d={f:cy,r:uy,D:fy,C:hy,L:dy,m:py,X:gy,S:my,M:_y};function cy(){var t=$i.f(),n=Dl();return t||n}function uy(t){var n=K(t);n!==null&&n.tag===5&&n.type==="form"?fm(n):$i.r(t)}var $s=typeof document>"u"?null:document;function Z0(t,n,a){var o=$s;if(o&&typeof n=="string"&&n){var u=pn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Y0.has(u)||(Y0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",t),Y(n),o.head.appendChild(n)))}}function fy(t){$i.D(t),Z0("dns-prefetch",t,null)}function hy(t,n){$i.C(t,n),Z0("preconnect",t,n)}function dy(t,n,a){$i.L(t,n,a);var o=$s;if(o&&t&&n){var u='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pn(a.imageSizes)+'"]')):u+='[href="'+pn(t)+'"]';var f=u;switch(n){case"style":f=tr(t);break;case"script":f=er(t)}fi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(xo(f))||n==="script"&&o.querySelector(yo(f))||(n=o.createElement("link"),bn(n,"link",t),Y(n),o.head.appendChild(n)))}}function py(t,n){$i.m(t,n);var a=$s;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=er(t)}if(!fi.has(f)&&(t=v({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}o=a.createElement("link"),bn(o,"link",t),Y(o),a.head.appendChild(o)}}}function my(t,n,a){$i.S(t,n,a);var o=$s;if(o&&t){var u=ot(o).hoistableStyles,f=tr(t);n=n||"default";var x=u.get(f);if(!x){var T={loading:0,preload:null};if(x=o.querySelector(xo(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&If(t,a);var B=x=o.createElement("link");Y(B),bn(B,"link",t),B._p=new Promise(function(tt,mt){B.onload=tt,B.onerror=mt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Hl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(f,x)}}}function gy(t,n){$i.X(t,n);var a=$s;if(a&&t){var o=ot(a).hoistableScripts,u=er(t),f=o.get(u);f||(f=a.querySelector(yo(u)),f||(t=v({src:t,async:!0},n),(n=fi.get(u))&&Bf(t,n),f=a.createElement("script"),Y(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function _y(t,n){$i.M(t,n);var a=$s;if(a&&t){var o=ot(a).hoistableScripts,u=er(t),f=o.get(u);f||(f=a.querySelector(yo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=fi.get(u))&&Bf(t,n),f=a.createElement("script"),Y(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function K0(t,n,a,o){var u=(u=Et.current)?Fl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tr(a.href),a=ot(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=tr(a.href);var f=ot(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(xo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||vy(u,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=er(a),a=ot(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function tr(t){return'href="'+pn(t)+'"'}function xo(t){return'link[rel="stylesheet"]['+t+"]"}function Q0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function vy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),Y(n),t.head.appendChild(n))}function er(t){return'[src="'+pn(t)+'"]'}function yo(t){return"script[async]"+t}function J0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+pn(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Y(o),bn(o,"style",u),Hl(o,a.precedence,t),n.instance=o;case"stylesheet":u=tr(a.href);var f=t.querySelector(xo(u));if(f)return n.state.loading|=4,n.instance=f,Y(f),f;o=Q0(a),(u=fi.get(u))&&If(o,u),f=(t.ownerDocument||t).createElement("link"),Y(f);var x=f;return x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),bn(f,"link",o),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=er(a.src),(u=t.querySelector(yo(f)))?(n.instance=u,Y(u),u):(o=a,(u=fi.get(f))&&(o=v({},a),Bf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Y(u),bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Hl(o,a.precedence,t));return n.instance}function Hl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var T=o[x];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function $0(t,n,a){if(Gl===null){var o=new Map,u=Gl=new Map;u.set(a,o)}else u=Gl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Wa]||f[Ke]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=o.get(x);T?T.push(f):o.set(x,[f])}}return o}function tg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function eg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=tr(o.href),f=n.querySelector(xo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Y(f);return}f=n.ownerDocument||n,o=Q0(o),(u=fi.get(u))&&If(o,u),f=f.createElement("link"),Y(f);var x=f;x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),bn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function Sy(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*ey());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(My,t),kl=null,Vl.call(t))}function My(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var o=a.get(null);else{a=new Map,kl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=Vl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var So={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Ey(t,n,a,o,u,f,x,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function ng(t,n,a,o,u,f,x,T,B,tt,mt,St){return t=new Ey(t,n,a,x,B,tt,mt,St,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=_u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Su(f),t}function ig(t){return t?(t=Ns,t):Ns}function ag(t,n,a,o,u,f){u=ig(u),o.context===null?o.context=u:o.pendingContext=u,o=ga(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=_a(t,o,n),a!==null&&(Vn(a,t,n),Jr(a,t,n))}function sg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Hf(t,n){sg(t,n),(t=t.alternate)&&sg(t,n)}function rg(t){if(t.tag===13||t.tag===31){var n=Ka(t,67108864);n!==null&&Vn(n,t,67108864),Hf(t,67108864)}}function og(t){if(t.tag===13||t.tag===31){var n=Jn();n=Xa(n);var a=Ka(t,n);a!==null&&Vn(a,t,n),Hf(t,n)}}var jl=!0;function by(t,n,a,o){var u=P.T;P.T=null;var f=F.p;try{F.p=2,Gf(t,n,a,o)}finally{F.p=f,P.T=u}}function Ty(t,n,a,o){var u=P.T;P.T=null;var f=F.p;try{F.p=8,Gf(t,n,a,o)}finally{F.p=f,P.T=u}}function Gf(t,n,a,o){if(jl){var u=Vf(o);if(u===null)Rf(t,n,o,Wl,a),cg(t,o);else if(Ry(u,t,n,a,o))o.stopPropagation();else if(cg(t,o),n&4&&-1<Ay.indexOf(t)){for(;u!==null;){var f=K(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ct(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var B=1<<31-Jt(x);T.entanglements[1]|=B,x&=~B}Ui(f),(we&6)===0&&(Cl=gt()+500,mo(0))}}break;case 31:case 13:T=Ka(f,2),T!==null&&Vn(T,f,2),Dl(),Hf(f,2)}if(f=Vf(o),f===null&&Rf(t,n,o,Wl,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Rf(t,n,o,null,a)}}function Vf(t){return t=kc(t),kf(t)}var Wl=null;function kf(t){if(Wl=null,t=R(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wl=t,null}function lg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case yt:return 2;case Gt:return 8;case wt:case It:return 32;case me:return 268435456;default:return 32}default:return 32}}var Xf=!1,Ca=null,wa=null,Da=null,Mo=new Map,Eo=new Map,Ua=[],Ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cg(t,n){switch(t){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function bo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=K(n),n!==null&&rg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ry(t,n,a,o,u){switch(n){case"focusin":return Ca=bo(Ca,t,n,a,o,u),!0;case"dragenter":return wa=bo(wa,t,n,a,o,u),!0;case"mouseover":return Da=bo(Da,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Mo.set(f,bo(Mo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Eo.set(f,bo(Eo.get(f)||null,t,n,a,o,u)),!0}return!1}function ug(t){var n=R(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ja(t.priority,function(){og(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ja(t.priority,function(){og(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Vf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Vc=o,a.target.dispatchEvent(o),Vc=null}else return n=K(a),n!==null&&rg(n),t.blockedOn=a,!1;n.shift()}return!0}function fg(t,n,a){ql(t)&&a.delete(n)}function Cy(){Xf=!1,Ca!==null&&ql(Ca)&&(Ca=null),wa!==null&&ql(wa)&&(wa=null),Da!==null&&ql(Da)&&(Da=null),Mo.forEach(fg),Eo.forEach(fg)}function Yl(t,n){t.blockedOn===n&&(t.blockedOn=null,Xf||(Xf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cy)))}var Zl=null;function hg(t){Zl!==t&&(Zl=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(kf(o||a)===null)continue;break}var f=K(a);f!==null&&(t.splice(n,3),n-=3,Gu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function nr(t){function n(B){return Yl(B,t)}Ca!==null&&Yl(Ca,t),wa!==null&&Yl(wa,t),Da!==null&&Yl(Da,t),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<Ua.length;a++){var o=Ua[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)ug(a),a.blockedOn===null&&Ua.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[xn]||null;if(typeof f=="function")x||hg(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[xn]||null)T=x.formAction;else if(kf(u)!==null)continue}else T=x.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),hg(a)}}}function dg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function jf(t){this._internalRoot=t}Kl.prototype.render=jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Jn();ag(a,o,t,n,null,null)},Kl.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ag(t.current,2,null,t,null,null),Dl(),n[zi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Or();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,t),a===0&&ug(t)}};var pg=e.version;if(pg!=="19.2.8")throw Error(s(527,pg,"19.2.8"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var wy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Wt=Ql.inject(wy),Vt=Ql}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Sm,f=Mm,x=Em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=ng(t,1,!1,null,null,a,o,null,u,f,x,dg),t[zi]=n.current,Af(t),new jf(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Sm,x=Mm,T=Em,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=ng(t,1,!0,n,a??null,o,u,B,f,x,T,dg),n.context=ig(null),a=n.current,o=Jn(),o=Xa(o),u=ga(o),u.callback=null,_a(a,u,o),a=o,n.current.lanes=a,vn(n,a),Ui(n),t[zi]=n.current,Af(t),new Kl(n)},Ao.version="19.2.8",Ao}var bg;function Hy(){if(bg)return Yf.exports;bg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Yf.exports=Fy(),Yf.exports}var Gy=Hy();const Vy=O_(Gy),Jf=[{id:"CH3_TMC2_SHIV_SHAKTI_SP",mission:"Chandrayaan-3",instrument:"TMC-2 (Terrain Mapping Camera-2)",productUri:"URN:ISRO:CH3:TMC2:RAW:L1:20230823T124218_SHIV_SHAKTI_V01.ZIP",targetFeature:"Shiv Shakti Point (Lunar South Pole - Prime Landing Zone)",targetCoordinates:{lat:-69.373,lon:32.348,latStr:"69.373° S",lonStr:"32.348° E"},footprintPolygon:[[-68.8,31.2],[-68.9,33.6],[-69.8,33.4],[-69.7,31]],acquisitionTimeUtc:"2023-08-23T12:34:28.412Z",geometry:{incidenceDeg:64.28,emissionDeg:21.82,phaseDeg:45.1,solarAzimuthDeg:124.6,spacecraftAltitudeKm:100.2,groundSamplingDistanceM:5,solarElevationDeg:18.4},initialHapke:{w:.342,thetaBar:24.5,g:-.21,b0:1.45,h:.065},currentHapke:{w:.342,thetaBar:24.5,g:-.21,b0:1.45,h:.065},signalToNoiseRatioDb:148.5,subSolarPoint:{lat:-1.2,lon:45.8},subSpacecraftPoint:{lat:-69.3,lon:32.2},waterIceAbsorptionIndex:.14,meanReflectance:.088,spectralBands:["Band-1 (Pan: 500-850 nm)"],pds4XmlLabel:`<?xml version="1.0" encoding="UTF-8"?>
<Product_Observational xmlns="http://pds.nasa.gov/pds4/pds/v1"
  xmlns:isro="http://isro.gov.in/pds4/mission/ch3">
  <Identification_Area>
    <logical_identifier>urn:isro:pds:ch3_tmc2_shiv_shakti_calibrated</logical_identifier>
    <version_id>1.0</version_id>
    <title>Chandrayaan-3 TMC-2 Calibrated Radiance Swath - Shiv Shakti Point</title>
    <information_model_version>1.16.0.0</information_model_version>
    <product_class>Product_Observational</product_class>
  </Identification_Area>
  <Observation_Area>
    <Time_Coordinates>
      <start_date_time>2023-08-23T12:34:28.412Z</start_date_time>
      <stop_date_time>2023-08-23T12:35:12.180Z</stop_date_time>
    </Time_Coordinates>
    <Target_Identification>
      <name>Moon</name>
      <type>Satellite</type>
    </Target_Identification>
    <Mission_Area>
      <isro:Mission_Information>
        <isro:mission_name>CHANDRAYAAN-3</isro:mission_name>
        <isro:spacecraft_clock_start_count>1/428919201.218</isro:spacecraft_clock_start_count>
        <isro:detector_temperature unit="degC">-14.2</isro:detector_temperature>
      </isro:Mission_Information>
    </Mission_Area>
  </Observation_Area>
  <File_Area_Observational>
    <File>
      <file_name>CH3_TMC2_SHIV_SHAKTI_L2C.IMG</file_name>
      <records>4096</records>
    </File>
    <Array_2D_Image>
      <axes>2</axes>
      <axis_index_order>Last_Index_Fastest</axis_index_order>
      <Element_Array>
        <data_type>IEEE754MSBSingle</data_type>
        <unit>W/(m**2.sr.um)</unit>
      </Element_Array>
    </Array_2D_Image>
  </File_Area_Observational>
</Product_Observational>`},{id:"CH2_OHRC_ARISTARCHUS",mission:"Chandrayaan-2",instrument:"OHRC (Orbiter High Resolution Camera)",productUri:"URN:ISRO:CH2:OHRC:RAW:L1:20240103T100517_ARISTARCHUS_V02.ZIP",targetFeature:"Aristarchus Plateau & Pyroclastic Deposit",targetCoordinates:{lat:23.73,lon:-47.49,latStr:"23.730° N",lonStr:"47.490° W"},footprintPolygon:[[24.4,-48.2],[24.5,-46.7],[23,-46.6],[22.9,-48.1]],acquisitionTimeUtc:"2024-01-03T10:05:17.645Z",geometry:{incidenceDeg:52.14,emissionDeg:8.41,phaseDeg:46.22,solarAzimuthDeg:88.3,spacecraftAltitudeKm:104.8,groundSamplingDistanceM:.25,solarElevationDeg:37.8},initialHapke:{w:.485,thetaBar:18.2,g:-.18,b0:1.62,h:.058},currentHapke:{w:.485,thetaBar:18.2,g:-.18,b0:1.62,h:.058},signalToNoiseRatioDb:154.2,subSolarPoint:{lat:.8,lon:-35.2},subSpacecraftPoint:{lat:23.6,lon:-47.3},waterIceAbsorptionIndex:.02,meanReflectance:.165,spectralBands:["Panchromatic (450-900 nm) Super-Res 0.25m"],pds4XmlLabel:`<?xml version="1.0" encoding="UTF-8"?>
<Product_Observational xmlns="http://pds.nasa.gov/pds4/pds/v1"
  xmlns:isro="http://isro.gov.in/pds4/mission/ch2">
  <Identification_Area>
    <logical_identifier>urn:isro:pds:ch2_ohrc_aristarchus_sr_025m</logical_identifier>
    <version_id>2.0</version_id>
    <title>Chandrayaan-2 OHRC Super-Resolution 0.25m Mosaic - Aristarchus</title>
  </Identification_Area>
  <Observation_Area>
    <Time_Coordinates>
      <start_date_time>2024-01-03T10:05:17.645Z</start_date_time>
      <stop_date_time>2024-01-03T10:05:42.912Z</stop_date_time>
    </Time_Coordinates>
  </Observation_Area>
</Product_Observational>`},{id:"CH3_IIRS_SHACKLETON_ICE",mission:"Chandrayaan-3",instrument:"IIRS (Imaging Infrared Spectrometer)",productUri:"URN:ISRO:CH3:IIRS:RAW:L1:20230914T031852_SHACKLETON_PSR.ZIP",targetFeature:"Shackleton Crater Rim (Permanently Shadowed Volatiles)",targetCoordinates:{lat:-89.9,lon:0,latStr:"89.900° S",lonStr:"0.000° E"},footprintPolygon:[[-89.6,-15],[-89.6,15],[-90,45],[-90,-45]],acquisitionTimeUtc:"2023-09-14T03:18:52.102Z",geometry:{incidenceDeg:88.75,emissionDeg:14.1,phaseDeg:78.4,solarAzimuthDeg:210.4,spacecraftAltitudeKm:98.6,groundSamplingDistanceM:8,solarElevationDeg:1.25},initialHapke:{w:.215,thetaBar:31.8,g:-.28,b0:1.28,h:.082},currentHapke:{w:.215,thetaBar:31.8,g:-.28,b0:1.28,h:.082},signalToNoiseRatioDb:139.6,subSolarPoint:{lat:-.4,lon:110.5},subSpacecraftPoint:{lat:-89.8,lon:2.1},waterIceAbsorptionIndex:.78,meanReflectance:.042,spectralBands:["0.8 - 5.0 µm (256 Spectral Channels, 2.9µm H2O Band Focus)"],pds4XmlLabel:`<?xml version="1.0" encoding="UTF-8"?>
<Product_Observational xmlns="http://pds.nasa.gov/pds4/pds/v1">
  <Identification_Area>
    <logical_identifier>urn:isro:pds:ch3_iirs_shackleton_h2o_ice</logical_identifier>
    <version_id>1.0</version_id>
    <title>Chandrayaan-3 IIRS Hyperspectral Cube - Shackleton 2.9um Band</title>
  </Identification_Area>
</Product_Observational>`},{id:"CH2_TMC2_TYCHO_EJECTA",mission:"Chandrayaan-2",instrument:"TMC-2 (Stereo Triplet Mode)",productUri:"URN:ISRO:CH2:TMC2:RAW:L1:20231108T182245_TYCHO_STEREO.ZIP",targetFeature:"Tycho Crater (Central Peak & Impact Melt Sheet)",targetCoordinates:{lat:-43.31,lon:-11.36,latStr:"43.310° S",lonStr:"11.360° W"},footprintPolygon:[[-42.5,-12.5],[-42.6,-10.2],[-44.1,-10.4],[-44,-12.6]],acquisitionTimeUtc:"2023-11-08T18:22:45.890Z",geometry:{incidenceDeg:38.6,emissionDeg:12.3,phaseDeg:28.5,solarAzimuthDeg:45.2,spacecraftAltitudeKm:101.4,groundSamplingDistanceM:5,solarElevationDeg:51.4},initialHapke:{w:.412,thetaBar:21,g:-.23,b0:1.85,h:.052},currentHapke:{w:.412,thetaBar:21,g:-.23,b0:1.85,h:.052},signalToNoiseRatioDb:161,subSolarPoint:{lat:-.2,lon:-20.4},subSpacecraftPoint:{lat:-43.1,lon:-11.1},waterIceAbsorptionIndex:.04,meanReflectance:.138,spectralBands:["Fore (Pan)","Nadir (Pan)","Aft (Pan) Stereo Triplet"],pds4XmlLabel:`<?xml version="1.0" encoding="UTF-8"?>
<Product_Observational xmlns="http://pds.nasa.gov/pds4/pds/v1">
  <Identification_Area>
    <logical_identifier>urn:isro:pds:ch2_tmc2_tycho_stereo_triplet</logical_identifier>
    <title>Chandrayaan-2 TMC-2 Stereo DEM - Tycho Central Peak</title>
  </Identification_Area>
</Product_Observational>`}];/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=$t.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>$t.createElement("svg",{ref:m,...Xy,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:P_("lucide",l),...d},[...h.map(([p,g])=>$t.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(r,e)=>{const i=$t.forwardRef(({className:s,...l},c)=>$t.createElement(jy,{ref:c,iconNode:e,className:P_(`lucide-${ky(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qy=Ze("ArrowRight",Wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Zy=Ze("Check",Yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Qy=Ze("ChevronDown",Ky);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],$y=Ze("ChevronUp",Jy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Tg=Ze("CircleAlert",tS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nS=Ze("CircleCheck",eS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aS=Ze("Compass",iS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],rS=Ze("Copy",sS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],lS=Ze("Download",oS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",key:"gkbcor"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}]],uS=Ze("FileArchive",cS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],hS=Ze("FileJson",fS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],z_=Ze("FileText",dS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],mS=Ze("Globe",pS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],_S=Ze("Info",gS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],xS=Ze("LoaderCircle",vS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],SS=Ze("Orbit",yS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ES=Ze("RefreshCw",MS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],I_=Ze("RotateCcw",bS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],AS=Ze("ShieldCheck",TS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],CS=Ze("Upload",RS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],B_=Ze("X",wS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],US=Ze("ZoomIn",DS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],LS=Ze("ZoomOut",NS),OS=({appState:r,dataset:e,onReset:i,onOpenPds4Modal:s})=>O.jsx("header",{className:"sticky top-0 z-40 w-full bg-[#030303]/80 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3",children:O.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-4",children:[O.jsxs("div",{className:"flex items-center gap-3",children:[O.jsx("div",{className:"w-8 h-8 rounded-full bg-stone-200 text-stone-900 flex items-center justify-center font-bold text-[9px] tracking-wider",children:"ISRO"}),O.jsx("div",{children:O.jsxs("div",{className:"text-sm font-medium text-stone-100 flex items-center gap-2",children:[O.jsx("span",{children:"Lunar Data Platform"}),O.jsx("span",{className:"text-[11px] font-normal text-stone-500",children:"/ Chandrayaan"})]})})]}),r==="DASHBOARD"&&O.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300",children:[O.jsx(mS,{className:"w-3.5 h-3.5 text-slate-400"}),O.jsx("span",{className:"text-slate-400",children:"Target:"}),O.jsx("span",{className:"text-slate-200 font-medium",children:e.targetFeature}),O.jsxs("span",{className:"text-slate-500 font-mono text-[11px]",children:["(",e.targetCoordinates.latStr,")"]})]}),O.jsx("div",{className:"flex items-center gap-2.5",children:r==="DASHBOARD"&&O.jsxs(O.Fragment,{children:[O.jsxs("button",{onClick:s,className:"px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors",children:[O.jsx(z_,{className:"w-3.5 h-3.5 text-slate-400"}),O.jsx("span",{children:"PDS4 Info"})]}),O.jsxs("button",{onClick:i,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors",children:[O.jsx(ES,{className:"w-3.5 h-3.5"}),O.jsx("span",{children:"New Dataset"})]})]})})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="173",PS=0,Ag=1,zS=2,F_=1,IS=2,sa=3,Va=0,Xn=1,Li=2,Ha=0,xr=1,Rg=2,Cg=3,wg=4,BS=5,_s=100,FS=101,HS=102,GS=103,VS=104,kS=200,XS=201,jS=202,WS=203,Uh=204,Nh=205,qS=206,YS=207,ZS=208,KS=209,QS=210,JS=211,$S=212,tM=213,eM=214,Lh=0,Oh=1,Ph=2,Er=3,zh=4,Ih=5,Bh=6,Fh=7,H_=0,nM=1,iM=2,Ga=0,aM=1,sM=2,rM=3,oM=4,lM=5,cM=6,uM=7,G_=300,br=301,Tr=302,Hh=303,Gh=304,Pc=306,Vh=1e3,xs=1001,kh=1002,Ti=1003,fM=1004,Jl=1005,Oi=1006,$f=1007,ys=1008,ca=1009,V_=1010,k_=1011,Oo=1012,Ed=1013,Ss=1014,ra=1015,zo=1016,bd=1017,Td=1018,Ar=1020,X_=35902,j_=1021,W_=1022,bi=1023,q_=1024,Y_=1025,yr=1026,Rr=1027,Z_=1028,Ad=1029,K_=1030,Rd=1031,Cd=1033,Tc=33776,Ac=33777,Rc=33778,Cc=33779,Xh=35840,jh=35841,Wh=35842,qh=35843,Yh=36196,Zh=37492,Kh=37496,Qh=37808,Jh=37809,$h=37810,td=37811,ed=37812,nd=37813,id=37814,ad=37815,sd=37816,rd=37817,od=37818,ld=37819,cd=37820,ud=37821,wc=36492,fd=36494,hd=36495,Q_=36283,dd=36284,pd=36285,md=36286,hM=3200,dM=3201,J_=0,pM=1,Fa="",ei="srgb",Cr="srgb-linear",Uc="linear",He="srgb",ir=7680,Dg=519,mM=512,gM=513,_M=514,$_=515,vM=516,xM=517,yM=518,SM=519,Ug=35044,Ng="300 es",oa=2e3,Nc=2001;class Dr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=Math.PI/180,gd=180/Math.PI;function Io(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Se(r,e,i){return Math.max(e,Math.min(i,r))}function MM(r,e){return(r%e+e)%e}function eh(r,e,i){return(1-i)*r+i*e}function Ro(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,i=0){De.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(e,i,s,l,c,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],y=s[2],M=s[5],E=s[8],b=l[0],S=l[3],_=l[6],I=l[1],L=l[4],D=l[7],j=l[2],H=l[5],z=l[8];return c[0]=h*b+d*I+m*j,c[3]=h*S+d*L+m*H,c[6]=h*_+d*D+m*z,c[1]=p*b+g*I+v*j,c[4]=p*S+g*L+v*H,c[7]=p*_+g*D+v*z,c[2]=y*b+M*I+E*j,c[5]=y*S+M*L+E*H,c[8]=y*_+M*D+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,y=d*m-g*c,M=p*c-h*m,E=i*v+s*y+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(l*p-g*s)*b,e[2]=(d*s-l*h)*b,e[3]=y*b,e[4]=(g*i-l*m)*b,e[5]=(l*c-d*i)*b,e[6]=M*b,e[7]=(s*m-p*i)*b,e[8]=(h*i-s*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(nh.makeScale(e,i)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,i){return this.premultiply(nh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nh=new le;function tv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Po(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function EM(){const r=Po("canvas");return r.style.display="block",r}const Lg={};function _r(r){r in Lg||(Lg[r]=!0,console.warn(r))}function bM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function TM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function AM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Og=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RM(){const r={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Sr(l.r),l.g=Sr(l.g),l.b=Sr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Uc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Cr]:{primaries:e,whitePoint:s,transfer:Uc,toXYZ:Og,fromXYZ:Pg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:s,transfer:He,toXYZ:Og,fromXYZ:Pg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const Ce=RM();function la(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ar;class CM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ar===void 0&&(ar=Po("canvas")),ar.width=e.width,ar.height=e.height;const s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ar}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Po("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=la(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wM=0;class ev{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(ih(l[h].image)):c.push(ih(l[h]))}else c=ih(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function ih(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?CM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DM=0;class Dn extends Dr{constructor(e=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,s=xs,l=xs,c=Oi,h=ys,d=bi,m=ca,p=Dn.DEFAULT_ANISOTROPY,g=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Io(),this.name="",this.source=new ev(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vh:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vh:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=G_;Dn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],g=m[4],v=m[8],y=m[1],M=m[5],E=m[9],b=m[2],S=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,j=(_+1)/2,H=(g+y)/4,z=(v+b)/4,k=(E+S)/4;return L>D&&L>j?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=H/s,c=z/s):D>j?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=H/l,c=k/l):j<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(j),s=z/c,l=k/c),this.set(s,l,c,i),this}let I=Math.sqrt((S-E)*(S-E)+(v-b)*(v-b)+(y-g)*(y-g));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(v-b)/I,this.z=(y-g)/I,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UM extends Dr{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Dn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new ev(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends UM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class nv extends Dn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends Dn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const y=c[h+0],M=c[h+1],E=c[h+2],b=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=E,e[i+3]=b;return}if(v!==b||m!==y||p!==M||g!==E){let S=1-d;const _=m*y+p*M+g*E+v*b,I=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const j=Math.sqrt(L),H=Math.atan2(j,_*I);S=Math.sin(S*H)/j,d=Math.sin(d*H)/j}const D=d*I;if(m=m*S+y*D,p=p*S+M*D,g=g*S+E*D,v=v*S+b*D,S===1-d){const j=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=j,p*=j,g*=j,v*=j}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[h],y=c[h+1],M=c[h+2],E=c[h+3];return e[i]=d*E+g*v+m*M-p*y,e[i+1]=m*E+g*y+p*v-d*M,e[i+2]=p*E+g*M+d*y-m*v,e[i+3]=g*E-d*v-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(c/2),y=m(s/2),M=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=y*g*v+p*M*E,this._y=p*M*v-y*g*E,this._z=p*g*E+y*M*v,this._w=p*g*v-y*M*E;break;case"YXZ":this._x=y*g*v+p*M*E,this._y=p*M*v-y*g*E,this._z=p*g*E-y*M*v,this._w=p*g*v+y*M*E;break;case"ZXY":this._x=y*g*v-p*M*E,this._y=p*M*v+y*g*E,this._z=p*g*E+y*M*v,this._w=p*g*v-y*M*E;break;case"ZYX":this._x=y*g*v-p*M*E,this._y=p*M*v+y*g*E,this._z=p*g*E-y*M*v,this._w=p*g*v+y*M*E;break;case"YZX":this._x=y*g*v+p*M*E,this._y=p*M*v+y*g*E,this._z=p*g*E-y*M*v,this._w=p*g*v-y*M*E;break;case"XZY":this._x=y*g*v-p*M*E,this._y=p*M*v-y*g*E,this._z=p*g*E+y*M*v,this._w=p*g*v+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],y=s+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,s=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(zg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(zg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),g=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+m*p+h*v-d*g,this.y=s+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ah=new st,zg=new Bo;class Fo{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,yi):yi.fromBufferAttribute(c,h),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$l.copy(s.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),tc.subVectors(this.max,Co),sr.subVectors(e.a,Co),rr.subVectors(e.b,Co),or.subVectors(e.c,Co),La.subVectors(rr,sr),Oa.subVectors(or,rr),cs.subVectors(sr,or);let i=[0,-La.z,La.y,0,-Oa.z,Oa.y,0,-cs.z,cs.y,La.z,0,-La.x,Oa.z,0,-Oa.x,cs.z,0,-cs.x,-La.y,La.x,0,-Oa.y,Oa.x,0,-cs.y,cs.x,0];return!sh(i,sr,rr,or,tc)||(i=[1,0,0,0,1,0,0,0,1],!sh(i,sr,rr,or,tc))?!1:(ec.crossVectors(La,Oa),i=[ec.x,ec.y,ec.z],sh(i,sr,rr,or,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ta=[new st,new st,new st,new st,new st,new st,new st,new st],yi=new st,$l=new Fo,sr=new st,rr=new st,or=new st,La=new st,Oa=new st,cs=new st,Co=new st,tc=new st,ec=new st,us=new st;function sh(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){us.fromArray(r,c);const d=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),m=e.dot(us),p=i.dot(us),g=s.dot(us);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const LM=new Fo,wo=new st,rh=new st;class Ho{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):LM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(rh)),this.expandByPoint(wo.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new st,oh=new st,nc=new st,Pa=new st,lh=new st,ic=new st,ch=new st;class wd{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){oh.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(oh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(nc),d=Pa.dot(this.direction),m=-Pa.dot(nc),p=Pa.lengthSq(),g=Math.abs(1-h*h);let v,y,M,E;if(g>0)if(v=h*m-d,y=h*d-m,E=c*g,v>=0)if(y>=-E)if(y<=E){const b=1/g;v*=b,y*=b,M=v*(v+h*y+2*d)+y*(h*v+y+2*m)+p}else y=c,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y=-c,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y<=-E?(v=Math.max(0,-(-h*c+d)),y=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+y*(y+2*m)+p):y<=E?(v=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(v=Math.max(0,-(h*c+d)),y=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+y*(y+2*m)+p);else y=h>0?-c:c,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(oh).addScaledVector(nc,y),M}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const s=ea.dot(this.direction),l=ea.dot(ea)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),g>=0?(c=(e.min.y-y.y)*g,h=(e.max.y-y.y)*g):(c=(e.max.y-y.y)*g,h=(e.min.y-y.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,s,l,c){lh.subVectors(i,e),ic.subVectors(s,e),ch.crossVectors(lh,ic);let h=this.direction.dot(ch),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,e);const m=d*this.direction.dot(ic.crossVectors(Pa,ic));if(m<0)return null;const p=d*this.direction.dot(lh.cross(Pa));if(p<0||m+p>h)return null;const g=-d*Pa.dot(ch);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,i,s,l,c,h,d,m,p,g,v,y,M,E,b,S){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,g,v,y,M,E,b,S)}set(e,i,s,l,c,h,d,m,p,g,v,y,M,E,b,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=y,_[3]=M,_[7]=E,_[11]=b,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/lr.setFromMatrixColumn(e,0).length(),c=1/lr.setFromMatrixColumn(e,1).length(),h=1/lr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=h*g,M=h*v,E=d*g,b=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=y-b*p,i[9]=-d*m,i[2]=b-y*p,i[6]=E+M*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*g,M=m*v,E=p*g,b=p*v;i[0]=y+b*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=b+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*g,M=m*v,E=p*g,b=p*v;i[0]=y-b*d,i[4]=-h*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=b-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*g,M=h*v,E=d*g,b=d*v;i[0]=m*g,i[4]=E*p-M,i[8]=y*p+b,i[1]=m*v,i[5]=b*p+y,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,M=h*p,E=d*m,b=d*p;i[0]=m*g,i[4]=b-y*v,i[8]=E*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+E,i[10]=y-b*v}else if(e.order==="XZY"){const y=h*m,M=h*p,E=d*m,b=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=y*v+b,i[5]=h*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*g,i[10]=b*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OM,e,PM)}lookAt(e,i,s){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),za.crossVectors(s,$n),za.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),za.crossVectors(s,$n)),za.normalize(),ac.crossVectors($n,za),l[0]=za.x,l[4]=ac.x,l[8]=$n.x,l[1]=za.y,l[5]=ac.y,l[9]=$n.y,l[2]=za.z,l[6]=ac.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],y=s[9],M=s[13],E=s[2],b=s[6],S=s[10],_=s[14],I=s[3],L=s[7],D=s[11],j=s[15],H=l[0],z=l[4],k=l[8],w=l[12],C=l[1],G=l[5],ut=l[9],nt=l[13],dt=l[2],pt=l[6],P=l[10],F=l[14],q=l[3],lt=l[7],rt=l[11],U=l[15];return c[0]=h*H+d*C+m*dt+p*q,c[4]=h*z+d*G+m*pt+p*lt,c[8]=h*k+d*ut+m*P+p*rt,c[12]=h*w+d*nt+m*F+p*U,c[1]=g*H+v*C+y*dt+M*q,c[5]=g*z+v*G+y*pt+M*lt,c[9]=g*k+v*ut+y*P+M*rt,c[13]=g*w+v*nt+y*F+M*U,c[2]=E*H+b*C+S*dt+_*q,c[6]=E*z+b*G+S*pt+_*lt,c[10]=E*k+b*ut+S*P+_*rt,c[14]=E*w+b*nt+S*F+_*U,c[3]=I*H+L*C+D*dt+j*q,c[7]=I*z+L*G+D*pt+j*lt,c[11]=I*k+L*ut+D*P+j*rt,c[15]=I*w+L*nt+D*F+j*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],y=e[10],M=e[14],E=e[3],b=e[7],S=e[11],_=e[15];return E*(+c*m*v-l*p*v-c*d*y+s*p*y+l*d*M-s*m*M)+b*(+i*m*M-i*p*y+c*h*y-l*h*M+l*p*g-c*m*g)+S*(+i*p*v-i*d*M-c*h*v+s*h*M+c*d*g-s*p*g)+_*(-l*d*g-i*m*v+i*d*y+l*h*v-s*h*y+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],y=e[10],M=e[11],E=e[12],b=e[13],S=e[14],_=e[15],I=v*S*p-b*y*p+b*m*M-d*S*M-v*m*_+d*y*_,L=E*y*p-g*S*p-E*m*M+h*S*M+g*m*_-h*y*_,D=g*b*p-E*v*p+E*d*M-h*b*M-g*d*_+h*v*_,j=E*v*m-g*b*m-E*d*y+h*b*y+g*d*S-h*v*S,H=i*I+s*L+l*D+c*j;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return e[0]=I*z,e[1]=(b*y*c-v*S*c-b*l*M+s*S*M+v*l*_-s*y*_)*z,e[2]=(d*S*c-b*m*c+b*l*p-s*S*p-d*l*_+s*m*_)*z,e[3]=(v*m*c-d*y*c-v*l*p+s*y*p+d*l*M-s*m*M)*z,e[4]=L*z,e[5]=(g*S*c-E*y*c+E*l*M-i*S*M-g*l*_+i*y*_)*z,e[6]=(E*m*c-h*S*c-E*l*p+i*S*p+h*l*_-i*m*_)*z,e[7]=(h*y*c-g*m*c+g*l*p-i*y*p-h*l*M+i*m*M)*z,e[8]=D*z,e[9]=(E*v*c-g*b*c-E*s*M+i*b*M+g*s*_-i*v*_)*z,e[10]=(h*b*c-E*d*c+E*s*p-i*b*p-h*s*_+i*d*_)*z,e[11]=(g*d*c-h*v*c-g*s*p+i*v*p+h*s*M-i*d*M)*z,e[12]=j*z,e[13]=(g*b*l-E*v*l+E*s*y-i*b*y-g*s*S+i*v*S)*z,e[14]=(E*d*l-h*b*l-E*s*m+i*b*m+h*s*S-i*d*S)*z,e[15]=(h*v*l-g*d*l+g*s*m-i*v*m-h*s*y+i*d*y)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,y=c*p,M=c*g,E=c*v,b=h*g,S=h*v,_=d*v,I=m*p,L=m*g,D=m*v,j=s.x,H=s.y,z=s.z;return l[0]=(1-(b+_))*j,l[1]=(M+D)*j,l[2]=(E-L)*j,l[3]=0,l[4]=(M-D)*H,l[5]=(1-(y+_))*H,l[6]=(S+I)*H,l[7]=0,l[8]=(E+L)*z,l[9]=(S-I)*z,l[10]=(1-(y+b))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=lr.set(l[0],l[1],l[2]).length();const h=lr.set(l[4],l[5],l[6]).length(),d=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/c,g=1/h,v=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,i.setFromRotationMatrix(Si),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=oa){const m=this.elements,p=2*c/(i-e),g=2*c/(s-l),v=(i+e)/(i-e),y=(s+l)/(s-l);let M,E;if(d===oa)M=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Nc)M=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=oa){const m=this.elements,p=1/(i-e),g=1/(s-l),v=1/(h-c),y=(i+e)*p,M=(s+l)*g;let E,b;if(d===oa)E=(h+c)*v,b=-2*v;else if(d===Nc)E=c*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const lr=new st,Si=new Ye,OM=new st(0,0,0),PM=new st(1,1,1),za=new st,ac=new st,$n=new st,Ig=new Ye,Bg=new Bo;class Pi{constructor(e=0,i=0,s=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Ig.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ig,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Bg.setFromEuler(this),this.setFromQuaternion(Bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class iv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zM=0;const Fg=new st,cr=new Bo,na=new Ye,sc=new st,Do=new st,IM=new st,BM=new Bo,Hg=new st(1,0,0),Gg=new st(0,1,0),Vg=new st(0,0,1),kg={type:"added"},FM={type:"removed"},ur={type:"childadded",child:null},uh={type:"childremoved",child:null};class _n extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new st,i=new Pi,s=new Bo,l=new st(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new le}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cr.setFromAxisAngle(e,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,i){return cr.setFromAxisAngle(e,i),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Hg,e)}rotateY(e){return this.rotateOnAxis(Gg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,i){return Fg.copy(e).applyQuaternion(this.quaternion),this.position.add(Fg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Hg,e)}translateY(e){return this.translateOnAxis(Gg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?sc.copy(e):sc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Do,sc,this.up):na.lookAt(sc,Do,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(na),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kg),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(FM),uh.child=e,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kg),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,IM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,BM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),y=h(e.skeletons),M=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}_n.DEFAULT_UP=new st(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new st,ia=new st,fh=new st,aa=new st,fr=new st,hr=new st,Xg=new st,hh=new st,dh=new st,ph=new st,mh=new tn,gh=new tn,_h=new tn;class Ei{constructor(e=new st,i=new st,s=new st){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Mi.subVectors(e,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Mi.subVectors(l,i),ia.subVectors(s,i),fh.subVectors(e,i);const h=Mi.dot(Mi),d=Mi.dot(ia),m=Mi.dot(fh),p=ia.dot(ia),g=ia.dot(fh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,M=(p*m-d*g)*y,E=(h*g-d*m)*y;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return mh.setScalar(0),gh.setScalar(0),_h.setScalar(0),mh.fromBufferAttribute(e,i),gh.fromBufferAttribute(e,s),_h.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(mh,c.x),h.addScaledVector(gh,c.y),h.addScaledVector(_h,c.z),h}static isFrontFacing(e,i,s,l){return Mi.subVectors(s,i),ia.subVectors(e,i),Mi.cross(ia).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Mi.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ei.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;fr.subVectors(l,s),hr.subVectors(c,s),hh.subVectors(e,s);const m=fr.dot(hh),p=hr.dot(hh);if(m<=0&&p<=0)return i.copy(s);dh.subVectors(e,l);const g=fr.dot(dh),v=hr.dot(dh);if(g>=0&&v<=g)return i.copy(l);const y=m*v-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(fr,h);ph.subVectors(e,c);const M=fr.dot(ph),E=hr.dot(ph);if(E>=0&&M<=E)return i.copy(c);const b=M*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(hr,d);const S=g*E-M*v;if(S<=0&&v-g>=0&&M-E>=0)return Xg.subVectors(c,l),d=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector(Xg,d);const _=1/(S+b+y);return h=b*_,d=y*_,i.copy(s).addScaledVector(fr,h).addScaledVector(hr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},rc={h:0,s:0,l:0};function vh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class be{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ce.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ce.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ce.workingColorSpace){if(e=MM(e,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=vh(h,c,e+1/3),this.g=vh(h,c,e),this.b=vh(h,c,e-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(e,i=ei){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const s=av[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Ce.fromWorkingColorSpace(wn.copy(this),e),Math.round(Se(wn.r*255,0,255))*65536+Math.round(Se(wn.g*255,0,255))*256+Math.round(Se(wn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,c=wn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ei){Ce.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+e,Ia.s+i,Ia.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ia),e.getHSL(rc);const s=eh(Ia.h,rc.h,i),l=eh(Ia.s,rc.s,i),c=eh(Ia.l,rc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new be;be.NAMES=av;let HM=0;class Es extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=xr,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Nh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(s.blending=this.blending),this.side!==Va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Uh&&(s.blendSrc=this.blendSrc),this.blendDst!==Nh&&(s.blendDst=this.blendDst),this.blendEquation!==_s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dd extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new st,oc=new De;let GM=0;class Ai{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Ug,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ug&&(e.usage=this.usage),e}}class sv extends Ai{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class rv extends Ai{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class jn extends Ai{constructor(e,i,s){super(new Float32Array(e),i,s)}}let VM=0;const hi=new Ye,xh=new _n,dr=new st,ti=new Fo,Uo=new Fo,gn=new st;class ii extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tv(e)?rv:sv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new le().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,s){return hi.makeTranslation(e,i,s),this.applyMatrix4(hi),this}scale(e,i,s){return hi.makeScale(e,i,s),this.applyMatrix4(hi),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new jn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(ti.min,Uo.min),ti.expandByPoint(gn),gn.addVectors(ti.max,Uo.max),ti.expandByPoint(gn)):(ti.expandByPoint(Uo.min),ti.expandByPoint(Uo.max))}ti.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)gn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(dr.fromBufferAttribute(e,p),gn.add(dr)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<s.count;k++)d[k]=new st,m[k]=new st;const p=new st,g=new st,v=new st,y=new De,M=new De,E=new De,b=new st,S=new st;function _(k,w,C){p.fromBufferAttribute(s,k),g.fromBufferAttribute(s,w),v.fromBufferAttribute(s,C),y.fromBufferAttribute(c,k),M.fromBufferAttribute(c,w),E.fromBufferAttribute(c,C),g.sub(p),v.sub(p),M.sub(y),E.sub(y);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(G),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(G),d[k].add(b),d[w].add(b),d[C].add(b),m[k].add(S),m[w].add(S),m[C].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let k=0,w=I.length;k<w;++k){const C=I[k],G=C.start,ut=C.count;for(let nt=G,dt=G+ut;nt<dt;nt+=3)_(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const L=new st,D=new st,j=new st,H=new st;function z(k){j.fromBufferAttribute(l,k),H.copy(j);const w=d[k];L.copy(w),L.sub(j.multiplyScalar(j.dot(w))).normalize(),D.crossVectors(H,w);const G=D.dot(m[k])<0?-1:1;h.setXYZW(k,L.x,L.y,L.z,G)}for(let k=0,w=I.length;k<w;++k){const C=I[k],G=C.start,ut=C.count;for(let nt=G,dt=G+ut;nt<dt;nt+=3)z(e.getX(nt+0)),z(e.getX(nt+1)),z(e.getX(nt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new st,c=new st,h=new st,d=new st,m=new st,p=new st,g=new st,v=new st;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),b=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,y=new p.constructor(m.length*g);let M=0,E=0;for(let b=0,S=m.length;b<S;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*g;for(let _=0;_<g;_++)y[E++]=p[M++]}return new Ai(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const y=p[g],M=e(y,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,y=p.length;v<y;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let y=0,M=v.length;y<M;y++)g.push(v[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jg=new Ye,fs=new wd,lc=new Ho,Wg=new st,cc=new st,uc=new st,fc=new st,yh=new st,hc=new st,qg=new st,dc=new st;class di extends _n{constructor(e=new ii,i=new Dd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){hc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(yh.fromBufferAttribute(v,e),h?hc.addScaledVector(yh,g):hc.addScaledVector(yh.sub(i),g))}i.add(hc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),lc.copy(s.boundingSphere),lc.applyMatrix4(c),fs.copy(e.ray).recast(e.near),!(lc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(lc,Wg)===null||fs.origin.distanceToSquared(Wg)>(e.far-e.near)**2))&&(jg.copy(c).invert(),fs.copy(e.ray).applyMatrix4(jg),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,fs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const S=y[E],_=h[S.materialIndex],I=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let D=I,j=L;D<j;D+=3){const H=d.getX(D),z=d.getX(D+1),k=d.getX(D+2);l=pc(this,_,e,s,p,g,v,H,z,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let S=E,_=b;S<_;S+=3){const I=d.getX(S),L=d.getX(S+1),D=d.getX(S+2);l=pc(this,h,e,s,p,g,v,I,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const S=y[E],_=h[S.materialIndex],I=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=I,j=L;D<j;D+=3){const H=D,z=D+1,k=D+2;l=pc(this,_,e,s,p,g,v,H,z,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let S=E,_=b;S<_;S+=3){const I=S,L=S+1,D=S+2;l=pc(this,h,e,s,p,g,v,I,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function kM(r,e,i,s,l,c,h,d){let m;if(e.side===Xn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===Va,d),m===null)return null;dc.copy(d),dc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:r}}function pc(r,e,i,s,l,c,h,d,m,p){r.getVertexPosition(d,cc),r.getVertexPosition(m,uc),r.getVertexPosition(p,fc);const g=kM(r,e,i,s,cc,uc,fc,qg);if(g){const v=new st;Ei.getBarycoord(qg,cc,uc,fc,v),l&&(g.uv=Ei.getInterpolatedAttribute(l,d,m,p,v,new De)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,d,m,p,v,new De)),h&&(g.normal=Ei.getInterpolatedAttribute(h,d,m,p,v,new st),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new st,materialIndex:0};Ei.getNormal(cc,uc,fc,y.normal),g.face=y,g.barycoord=v}return g}class Go extends ii{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let y=0,M=0;E("z","y","x",-1,-1,s,i,e,h,c,0),E("z","y","x",1,-1,s,i,-e,h,c,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new jn(p,3)),this.setAttribute("normal",new jn(g,3)),this.setAttribute("uv",new jn(v,2));function E(b,S,_,I,L,D,j,H,z,k,w){const C=D/z,G=j/k,ut=D/2,nt=j/2,dt=H/2,pt=z+1,P=k+1;let F=0,q=0;const lt=new st;for(let rt=0;rt<P;rt++){const U=rt*G-nt;for(let J=0;J<pt;J++){const xt=J*C-ut;lt[b]=xt*I,lt[S]=U*L,lt[_]=dt,p.push(lt.x,lt.y,lt.z),lt[b]=0,lt[S]=0,lt[_]=H>0?1:-1,g.push(lt.x,lt.y,lt.z),v.push(J/z),v.push(1-rt/k),F+=1}}for(let rt=0;rt<k;rt++)for(let U=0;U<z;U++){const J=y+U+pt*rt,xt=y+U+pt*(rt+1),W=y+(U+1)+pt*(rt+1),ft=y+(U+1)+pt*rt;m.push(J,xt,ft),m.push(xt,W,ft),q+=6}d.addGroup(M,q,w),M+=q,y+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(r){const e={};for(let i=0;i<r.length;i++){const s=wr(r[i]);for(const l in s)e[l]=s[l]}return e}function XM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function ov(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const jM={clone:wr,merge:On};var WM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WM,this.fragmentShader=qM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=XM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class lv extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=oa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new st,Yg=new De,Zg=new De;class ni extends lv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=gd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gd*2*Math.atan(Math.tan(th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,Yg,Zg),i.subVectors(Zg,Yg)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(th*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class YM extends _n{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ni(pr,mr,e,i);l.layers=this.layers,this.add(l);const c=new ni(pr,mr,e,i);c.layers=this.layers,this.add(c);const h=new ni(pr,mr,e,i);h.layers=this.layers,this.add(h);const d=new ni(pr,mr,e,i);d.layers=this.layers,this.add(d);const m=new ni(pr,mr,e,i);m.layers=this.layers,this.add(m);const p=new ni(pr,mr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(v,y,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class cv extends Dn{constructor(e,i,s,l,c,h,d,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:br,super(e,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZM extends Ms{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new cv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Oi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Go(5,5,5),c=new ka({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Ha});c.uniforms.tEquirect.value=i;const h=new di(l,c),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=Oi),new YM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class mc extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class Sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const b of e.hand.values()){const S=i.getJointPose(b,s),_=this._getHandJoint(p,b);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new mc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class uv extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Mh=new st,QM=new st,JM=new le;class ms{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Mh.subVectors(s,i).cross(QM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||JM.getNormalMatrix(e),l=this.coplanarPoint(Mh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Ho,gc=new st;class Ud{constructor(e=new ms,i=new ms,s=new ms,l=new ms,c=new ms,h=new ms){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=oa){const s=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],y=l[7],M=l[8],E=l[9],b=l[10],S=l[11],_=l[12],I=l[13],L=l[14],D=l[15];if(s[0].setComponents(m-c,y-p,S-M,D-_).normalize(),s[1].setComponents(m+c,y+p,S+M,D+_).normalize(),s[2].setComponents(m+h,y+g,S+E,D+I).normalize(),s[3].setComponents(m-h,y-g,S-E,D-I).normalize(),s[4].setComponents(m-d,y-v,S-b,D-L).normalize(),i===oa)s[5].setComponents(m+d,y+v,S+b,D+L).normalize();else if(i===Nc)s[5].setComponents(d,v,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fv extends Es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new st,Oc=new st,Kg=new Ye,No=new wd,_c=new Ho,Eh=new st,Qg=new st;class $M extends _n{constructor(e=new ii,i=new fv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Lc.fromBufferAttribute(i,l-1),Oc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Lc.distanceTo(Oc);e.setAttribute("lineDistance",new jn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(l),_c.radius+=c,e.ray.intersectsSphere(_c)===!1)return;Kg.copy(l).invert(),No.copy(e.ray).applyMatrix4(Kg);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let b=M,S=E-1;b<S;b+=p){const _=g.getX(b),I=g.getX(b+1),L=vc(this,e,No,m,_,I,b);L&&i.push(L)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(M),_=vc(this,e,No,m,b,S,E-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let b=M,S=E-1;b<S;b+=p){const _=vc(this,e,No,m,b,b+1,b);_&&i.push(_)}if(this.isLineLoop){const b=vc(this,e,No,m,E-1,M,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function vc(r,e,i,s,l,c,h){const d=r.geometry.attributes.position;if(Lc.fromBufferAttribute(d,l),Oc.fromBufferAttribute(d,c),i.distanceSqToSegment(Lc,Oc,Eh,Qg)>s)return;Eh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Eh);if(!(p<e.near||p>e.far))return{distance:p,point:Qg.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}class hv extends Es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jg=new Ye,_d=new wd,xc=new Ho,yc=new st;class tE extends _n{constructor(e=new ii,i=new hv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(l),xc.radius+=c,e.ray.intersectsSphere(xc)===!1)return;Jg.copy(l).invert(),_d.copy(e.ray).applyMatrix4(Jg);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=y,b=M;E<b;E++){const S=p.getX(E);yc.fromBufferAttribute(v,S),$g(yc,S,m,l,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let E=y,b=M;E<b;E++)yc.fromBufferAttribute(v,E),$g(yc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function $g(r,e,i,s,l,c,h){const d=_d.distanceSqToPoint(r);if(d<i){const m=new st;_d.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class eE extends Dn{constructor(e,i,s,l,c,h,d,m,p){super(e,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dv extends Dn{constructor(e,i,s,l,c,h,d,m,p,g=yr){if(g!==yr&&g!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===yr&&(s=Ss),s===void 0&&g===Rr&&(s=Ar),super(null,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ti,this.minFilter=m!==void 0?m:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zc extends ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=e/d,y=i/m,M=[],E=[],b=[],S=[];for(let _=0;_<g;_++){const I=_*y-h;for(let L=0;L<p;L++){const D=L*v-c;E.push(D,-I,0),b.push(0,0,1),S.push(L/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const L=I+p*_,D=I+p*(_+1),j=I+1+p*(_+1),H=I+1+p*_;M.push(L,D,H),M.push(D,j,H)}this.setIndex(M),this.setAttribute("position",new jn(E,3)),this.setAttribute("normal",new jn(b,3)),this.setAttribute("uv",new jn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nd extends ii{constructor(e=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],g=[];let v=e;const y=(i-e)/l,M=new st,E=new De;for(let b=0;b<=l;b++){for(let S=0;S<=s;S++){const _=c+S/s*h;M.x=v*Math.cos(_),M.y=v*Math.sin(_),m.push(M.x,M.y,M.z),p.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,g.push(E.x,E.y)}v+=y}for(let b=0;b<l;b++){const S=b*(s+1);for(let _=0;_<s;_++){const I=_+S,L=I,D=I+s+1,j=I+s+2,H=I+1;d.push(L,D,H),d.push(D,j,H)}}this.setIndex(d),this.setAttribute("position",new jn(m,3)),this.setAttribute("normal",new jn(p,3)),this.setAttribute("uv",new jn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ic extends ii{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new st,y=new st,M=[],E=[],b=[],S=[];for(let _=0;_<=s;_++){const I=[],L=_/s;let D=0;_===0&&h===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let j=0;j<=i;j++){const H=j/i;v.x=-e*Math.cos(l+H*c)*Math.sin(h+L*d),v.y=e*Math.cos(h+L*d),v.z=e*Math.sin(l+H*c)*Math.sin(h+L*d),E.push(v.x,v.y,v.z),y.copy(v).normalize(),b.push(y.x,y.y,y.z),S.push(H+D,1-L),I.push(p++)}g.push(I)}for(let _=0;_<s;_++)for(let I=0;I<i;I++){const L=g[_][I+1],D=g[_][I],j=g[_+1][I],H=g[_+1][I+1];(_!==0||h>0)&&M.push(L,D,H),(_!==s-1||m<Math.PI)&&M.push(D,j,H)}this.setIndex(M),this.setAttribute("position",new jn(E,3)),this.setAttribute("normal",new jn(b,3)),this.setAttribute("uv",new jn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pv extends Es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=J_,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nE extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iE extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t_={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class aE{constructor(e,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,y=p.length;v<y;v+=2){const M=p[v],E=p[v+1];if(M.global&&(M.lastIndex=0),M.test(g))return E}return null}}}const sE=new aE;class Ld{constructor(e){this.manager=e!==void 0?e:sE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,c){s.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ld.DEFAULT_MATERIAL_NAME="__DEFAULT";class rE extends Ld{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=t_.get(e);if(h!==void 0)return c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0),h;const d=Po("img");function m(){g(),t_.add(e,this),i&&i(this),c.manager.itemEnd(e)}function p(v){g(),l&&l(v),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),c.manager.itemStart(e),d.src=e,d}}class oE extends Ld{constructor(e){super(e)}load(e,i,s,l){const c=new Dn,h=new rE(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class mv extends _n{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const bh=new Ye,e_=new st,n_=new st;class lE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ud,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;e_.setFromMatrixPosition(e.matrixWorld),i.position.copy(e_),n_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(n_),i.updateMatrixWorld(),bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gv extends lv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class cE extends lE{constructor(){super(new gv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _v extends mv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new cE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vv extends mv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class uE extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class fE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=i_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=i_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function i_(){return performance.now()}function a_(r,e,i,s){const l=hE(s);switch(i){case j_:return r*e;case q_:return r*e;case Y_:return r*e*2;case Z_:return r*e/l.components*l.byteLength;case Ad:return r*e/l.components*l.byteLength;case K_:return r*e*2/l.components*l.byteLength;case Rd:return r*e*2/l.components*l.byteLength;case W_:return r*e*3/l.components*l.byteLength;case bi:return r*e*4/l.components*l.byteLength;case Cd:return r*e*4/l.components*l.byteLength;case Tc:case Ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jh:case qh:return Math.max(r,16)*Math.max(e,8)/4;case Xh:case Wh:return Math.max(r,8)*Math.max(e,8)/2;case Yh:case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $h:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case td:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ed:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case rd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case od:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wc:case fd:case hd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Q_:case dd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hE(r){switch(r){case ca:case V_:return{byteLength:1,components:1};case Oo:case k_:case zo:return{byteLength:2,components:1};case bd:case Td:return{byteLength:2,components:4};case Ss:case Ed:case ra:return{byteLength:4,components:1};case X_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xv(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function dE(r){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,g);else{v.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<v.length;M++){const E=v[y],b=v[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,v[y]=b)}v.length=y+1;for(let M=0,E=v.length;M<E;M++){const b=v[M];r.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,EE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XE="gl_FragColor = linearToOutputTexel( gl_FragColor );",jE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ab=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ob=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Db=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ob=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:_E,alphatest_fragment:vE,alphatest_pars_fragment:xE,aomap_fragment:yE,aomap_pars_fragment:SE,batching_pars_vertex:ME,batching_vertex:EE,begin_vertex:bE,beginnormal_vertex:TE,bsdfs:AE,iridescence_fragment:RE,bumpmap_pars_fragment:CE,clipping_planes_fragment:wE,clipping_planes_pars_fragment:DE,clipping_planes_pars_vertex:UE,clipping_planes_vertex:NE,color_fragment:LE,color_pars_fragment:OE,color_pars_vertex:PE,color_vertex:zE,common:IE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:FE,displacementmap_pars_vertex:HE,displacementmap_vertex:GE,emissivemap_fragment:VE,emissivemap_pars_fragment:kE,colorspace_fragment:XE,colorspace_pars_fragment:jE,envmap_fragment:WE,envmap_common_pars_fragment:qE,envmap_pars_fragment:YE,envmap_pars_vertex:ZE,envmap_physical_pars_fragment:r1,envmap_vertex:KE,fog_vertex:QE,fog_pars_vertex:JE,fog_fragment:$E,fog_pars_fragment:t1,gradientmap_pars_fragment:e1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:a1,lights_pars_begin:s1,lights_toon_fragment:o1,lights_toon_pars_fragment:l1,lights_phong_fragment:c1,lights_phong_pars_fragment:u1,lights_physical_fragment:f1,lights_physical_pars_fragment:h1,lights_fragment_begin:d1,lights_fragment_maps:p1,lights_fragment_end:m1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:_1,logdepthbuf_pars_vertex:v1,logdepthbuf_vertex:x1,map_fragment:y1,map_pars_fragment:S1,map_particle_fragment:M1,map_particle_pars_fragment:E1,metalnessmap_fragment:b1,metalnessmap_pars_fragment:T1,morphinstance_vertex:A1,morphcolor_vertex:R1,morphnormal_vertex:C1,morphtarget_pars_vertex:w1,morphtarget_vertex:D1,normal_fragment_begin:U1,normal_fragment_maps:N1,normal_pars_fragment:L1,normal_pars_vertex:O1,normal_vertex:P1,normalmap_pars_fragment:z1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:H1,opaque_fragment:G1,packing:V1,premultiplied_alpha_fragment:k1,project_vertex:X1,dithering_fragment:j1,dithering_pars_fragment:W1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:K1,shadowmap_vertex:Q1,shadowmask_pars_fragment:J1,skinbase_vertex:$1,skinning_pars_vertex:tb,skinning_vertex:eb,skinnormal_vertex:nb,specularmap_fragment:ib,specularmap_pars_fragment:ab,tonemapping_fragment:sb,tonemapping_pars_fragment:rb,transmission_fragment:ob,transmission_pars_fragment:lb,uv_pars_fragment:cb,uv_pars_vertex:ub,uv_vertex:fb,worldpos_vertex:hb,background_vert:db,background_frag:pb,backgroundCube_vert:mb,backgroundCube_frag:gb,cube_vert:_b,cube_frag:vb,depth_vert:xb,depth_frag:yb,distanceRGBA_vert:Sb,distanceRGBA_frag:Mb,equirect_vert:Eb,equirect_frag:bb,linedashed_vert:Tb,linedashed_frag:Ab,meshbasic_vert:Rb,meshbasic_frag:Cb,meshlambert_vert:wb,meshlambert_frag:Db,meshmatcap_vert:Ub,meshmatcap_frag:Nb,meshnormal_vert:Lb,meshnormal_frag:Ob,meshphong_vert:Pb,meshphong_frag:zb,meshphysical_vert:Ib,meshphysical_frag:Bb,meshtoon_vert:Fb,meshtoon_frag:Hb,points_vert:Gb,points_frag:Vb,shadow_vert:kb,shadow_frag:Xb,sprite_vert:jb,sprite_frag:Wb},Nt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ni={basic:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:On([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:On([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:On([Nt.points,Nt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:On([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:On([Nt.common,Nt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:On([Nt.sprite,Nt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:On([Nt.common,Nt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:On([Nt.lights,Nt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ni.physical={uniforms:On([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Sc={r:0,b:0,g:0},ds=new Pi,qb=new Ye;function Yb(r,e,i,s,l,c,h){const d=new be(0);let m=c===!0?0:1,p,g,v=null,y=0,M=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function b(L){let D=!1;const j=E(L);j===null?_(d,m):j&&j.isColor&&(_(j,1),D=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,D){const j=E(D);j&&(j.isCubeTexture||j.mapping===Pc)?(g===void 0&&(g=new di(new Go(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:wr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ds.copy(D.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),g.material.uniforms.envMap.value=j,g.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(qb.makeRotationFromEuler(ds)),g.material.toneMapped=Ce.getTransfer(j.colorSpace)!==He,(v!==j||y!==j.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,v=j,y=j.version,M=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new di(new zc(2,2),new ka({name:"BackgroundMaterial",uniforms:wr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(j.colorSpace)!==He,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(v!==j||y!==j.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,v=j,y=j.version,M=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(Sc,ov(r)),s.buffers.color.setClear(Sc.r,Sc.g,Sc.b,D,h)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:b,addToRenderList:S,dispose:I}}function Zb(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(C,G,ut,nt,dt){let pt=!1;const P=v(nt,ut,G);c!==P&&(c=P,p(c.object)),pt=M(C,nt,ut,dt),pt&&E(C,nt,ut,dt),dt!==null&&e.update(dt,r.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,D(C,G,ut,nt),dt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function v(C,G,ut){const nt=ut.wireframe===!0;let dt=s[C.id];dt===void 0&&(dt={},s[C.id]=dt);let pt=dt[G.id];pt===void 0&&(pt={},dt[G.id]=pt);let P=pt[nt];return P===void 0&&(P=y(m()),pt[nt]=P),P}function y(C){const G=[],ut=[],nt=[];for(let dt=0;dt<i;dt++)G[dt]=0,ut[dt]=0,nt[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ut,attributeDivisors:nt,object:C,attributes:{},index:null}}function M(C,G,ut,nt){const dt=c.attributes,pt=G.attributes;let P=0;const F=ut.getAttributes();for(const q in F)if(F[q].location>=0){const rt=dt[q];let U=pt[q];if(U===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),rt===void 0||rt.attribute!==U||U&&rt.data!==U.data)return!0;P++}return c.attributesNum!==P||c.index!==nt}function E(C,G,ut,nt){const dt={},pt=G.attributes;let P=0;const F=ut.getAttributes();for(const q in F)if(F[q].location>=0){let rt=pt[q];rt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(rt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(rt=C.instanceColor));const U={};U.attribute=rt,rt&&rt.data&&(U.data=rt.data),dt[q]=U,P++}c.attributes=dt,c.attributesNum=P,c.index=nt}function b(){const C=c.newAttributes;for(let G=0,ut=C.length;G<ut;G++)C[G]=0}function S(C){_(C,0)}function _(C,G){const ut=c.newAttributes,nt=c.enabledAttributes,dt=c.attributeDivisors;ut[C]=1,nt[C]===0&&(r.enableVertexAttribArray(C),nt[C]=1),dt[C]!==G&&(r.vertexAttribDivisor(C,G),dt[C]=G)}function I(){const C=c.newAttributes,G=c.enabledAttributes;for(let ut=0,nt=G.length;ut<nt;ut++)G[ut]!==C[ut]&&(r.disableVertexAttribArray(ut),G[ut]=0)}function L(C,G,ut,nt,dt,pt,P){P===!0?r.vertexAttribIPointer(C,G,ut,dt,pt):r.vertexAttribPointer(C,G,ut,nt,dt,pt)}function D(C,G,ut,nt){b();const dt=nt.attributes,pt=ut.getAttributes(),P=G.defaultAttributeValues;for(const F in pt){const q=pt[F];if(q.location>=0){let lt=dt[F];if(lt===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor)),lt!==void 0){const rt=lt.normalized,U=lt.itemSize,J=e.get(lt);if(J===void 0)continue;const xt=J.buffer,W=J.type,ft=J.bytesPerElement,Et=W===r.INT||W===r.UNSIGNED_INT||lt.gpuType===Ed;if(lt.isInterleavedBufferAttribute){const vt=lt.data,zt=vt.stride,kt=lt.offset;if(vt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<q.locationSize;Zt++)_(q.location+Zt,vt.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Zt=0;Zt<q.locationSize;Zt++)S(q.location+Zt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let Zt=0;Zt<q.locationSize;Zt++)L(q.location+Zt,U/q.locationSize,W,rt,zt*ft,(kt+U/q.locationSize*Zt)*ft,Et)}else{if(lt.isInstancedBufferAttribute){for(let vt=0;vt<q.locationSize;vt++)_(q.location+vt,lt.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let vt=0;vt<q.locationSize;vt++)S(q.location+vt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let vt=0;vt<q.locationSize;vt++)L(q.location+vt,U/q.locationSize,W,rt,U*ft,U/q.locationSize*vt*ft,Et)}}else if(P!==void 0){const rt=P[F];if(rt!==void 0)switch(rt.length){case 2:r.vertexAttrib2fv(q.location,rt);break;case 3:r.vertexAttrib3fv(q.location,rt);break;case 4:r.vertexAttrib4fv(q.location,rt);break;default:r.vertexAttrib1fv(q.location,rt)}}}}I()}function j(){k();for(const C in s){const G=s[C];for(const ut in G){const nt=G[ut];for(const dt in nt)g(nt[dt].object),delete nt[dt];delete G[ut]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const ut in G){const nt=G[ut];for(const dt in nt)g(nt[dt].object),delete nt[dt];delete G[ut]}delete s[C.id]}function z(C){for(const G in s){const ut=s[G];if(ut[C.id]===void 0)continue;const nt=ut[C.id];for(const dt in nt)g(nt[dt].object),delete nt[dt];delete ut[C.id]}}function k(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:w,dispose:j,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:S,disableUnusedAttributes:I}}function Kb(r,e,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];i.update(M,s,1)}function m(p,g,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*y[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Qb(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==bi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const k=z===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ca&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ra&&!k)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),j=E>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:j,maxSamples:H}}function Jb(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new ms,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||s!==0||l;return l=y,s=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,M){const E=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,_=r.get(v);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const I=c?0:s,L=I*4;let D=_.clippingState||null;m.value=D,D=g(E,y,L,M);for(let j=0;j!==L;++j)D[j]=i[j];_.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,y,M,E){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=m.value,E!==!0||S===null){const _=M+b*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,D=M;L!==b;++L,D+=4)h.copy(v[L]).applyMatrix4(I,d),h.normal.toArray(S,D),S[D+3]=h.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function $b(r){let e=new WeakMap;function i(h,d){return d===Hh?h.mapping=br:d===Gh&&(h.mapping=Tr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Hh||d===Gh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new ZM(m.height);return p.fromEquirectangularTexture(r,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const vr=4,s_=[.125,.215,.35,.446,.526,.582],vs=20,Th=new gv,r_=new be;let Ah=null,Rh=0,Ch=0,wh=!1;const gs=(1+Math.sqrt(5))/2,gr=1/gs,o_=[new st(-gs,gr,0),new st(gs,gr,0),new st(-gr,0,gs),new st(gr,0,gs),new st(0,gs,-gr),new st(0,gs,gr),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)];class l_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=wh,e.scissorTest=!1,Mc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===br||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:zo,format:bi,colorSpace:Cr,depthBuffer:!1},l=c_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tT(c)),this._blurMaterial=eT(c,e,i)}return l}_compileMaterial(e){const i=new di(this._lodPlanes[0],e);this._renderer.compile(i,Th)}_sceneToCubeUV(e,i,s,l){const d=new ni(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(r_),g.toneMapping=Ga,g.autoClear=!1;const M=new Dd({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),E=new di(new Go,M);let b=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,b=!0):(M.color.copy(r_),b=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):I===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const L=this._cubeSize;Mc(l,I*L,_>2?L:0,L,L),g.setRenderTarget(l),b&&g.render(E,d),g.render(e,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===br||e.mapping===Tr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=f_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new di(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Mc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Th)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=o_[(l-c-1)%o_.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new di(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*vs-1),b=c/E,S=isFinite(c)?1+Math.floor(g*b):vs;S>vs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vs}`);const _=[];let I=0;for(let z=0;z<vs;++z){const k=z/b,w=Math.exp(-k*k/2);_.push(w),z===0?I+=w:z<S&&(I+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/I;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-s;const D=this._sizeLods[l],j=3*D*(l>L-vr?l-L+vr:0),H=4*(this._cubeSize-D);Mc(i,j,H,3*D,2*D),m.setRenderTarget(i),m.render(v,Th)}}function tT(r){const e=[],i=[],s=[];let l=r;const c=r-vr+1+s_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-vr?m=s_[h-r+vr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,b=3,S=2,_=1,I=new Float32Array(b*E*M),L=new Float32Array(S*E*M),D=new Float32Array(_*E*M);for(let H=0;H<M;H++){const z=H%3*2/3-1,k=H>2?0:-1,w=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];I.set(w,b*E*H),L.set(y,S*E*H);const C=[H,H,H,H,H,H];D.set(C,_*E*H)}const j=new ii;j.setAttribute("position",new Ai(I,b)),j.setAttribute("uv",new Ai(L,S)),j.setAttribute("faceIndex",new Ai(D,_)),e.push(j),l>vr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function c_(r,e,i){const s=new Ms(r,e,i);return s.texture.mapping=Pc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Mc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function eT(r,e,i){const s=new Float32Array(vs),l=new st(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function u_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function f_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Od(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nT(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Hh||m===Gh,g=m===br||m===Tr;if(p||g){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new l_(r)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new l_(r)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function iT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&_r("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function aT(r,e,i,s){const l={},c=new WeakMap;function h(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const M in y)e.update(y[M],r.ARRAY_BUFFER)}function p(v){const y=[],M=v.index,E=v.attributes.position;let b=0;if(M!==null){const I=M.array;b=M.version;for(let L=0,D=I.length;L<D;L+=3){const j=I[L+0],H=I[L+1],z=I[L+2];y.push(j,H,H,z,z,j)}}else if(E!==void 0){const I=E.array;b=E.version;for(let L=0,D=I.length/3-1;L<D;L+=3){const j=L+0,H=L+1,z=L+2;y.push(j,H,H,z,z,j)}}else return;const S=new(tv(y)?rv:sv)(y,1);S.version=b;const _=c.get(v);_&&e.remove(_),c.set(v,S)}function g(v){const y=c.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function sT(r,e,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,M){r.drawElements(s,M,c,y*h),i.update(M,s,1)}function p(y,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,y*h,E),i.update(M,s,E))}function g(y,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,y,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,s,1)}function v(y,M,E,b){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/h,M[_],b[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,y,0,b,0,E);let _=0;for(let I=0;I<E;I++)_+=M[I]*b[I];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function rT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function oT(r,e,i){const s=new WeakMap,l=new tn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let C=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let j=d.attributes.position.count*D,H=1;j>e.maxTextureSize&&(H=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const z=new Float32Array(j*H*4*v),k=new nv(z,j,H,v);k.type=ra,k.needsUpdate=!0;const w=D*4;for(let G=0;G<v;G++){const ut=_[G],nt=I[G],dt=L[G],pt=j*H*4*G;for(let P=0;P<ut.count;P++){const F=P*w;E===!0&&(l.fromBufferAttribute(ut,P),z[pt+F+0]=l.x,z[pt+F+1]=l.y,z[pt+F+2]=l.z,z[pt+F+3]=0),b===!0&&(l.fromBufferAttribute(nt,P),z[pt+F+4]=l.x,z[pt+F+5]=l.y,z[pt+F+6]=l.z,z[pt+F+7]=0),S===!0&&(l.fromBufferAttribute(dt,P),z[pt+F+8]=l.x,z[pt+F+9]=l.y,z[pt+F+10]=l.z,z[pt+F+11]=dt.itemSize===4?l.w:1)}}y={count:v,texture:k,size:new De(j,H)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function lT(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const yv=new Dn,h_=new dv(1,1),Sv=new nv,Mv=new NM,Ev=new cv,d_=[],p_=[],m_=new Float32Array(16),g_=new Float32Array(9),__=new Float32Array(4);function Ur(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=d_[l];if(c===void 0&&(c=new Float32Array(l),d_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(c,d)}return c}function hn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function dn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Bc(r,e){let i=p_[e];i===void 0&&(i=new Int32Array(e),p_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function cT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function uT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;r.uniform2fv(this.addr,e),dn(i,e)}}function fT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;r.uniform3fv(this.addr,e),dn(i,e)}}function hT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;r.uniform4fv(this.addr,e),dn(i,e)}}function dT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;__.set(s),r.uniformMatrix2fv(this.addr,!1,__),dn(i,s)}}function pT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;g_.set(s),r.uniformMatrix3fv(this.addr,!1,g_),dn(i,s)}}function mT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;m_.set(s),r.uniformMatrix4fv(this.addr,!1,m_),dn(i,s)}}function gT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function _T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;r.uniform2iv(this.addr,e),dn(i,e)}}function vT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;r.uniform3iv(this.addr,e),dn(i,e)}}function xT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;r.uniform4iv(this.addr,e),dn(i,e)}}function yT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function ST(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;r.uniform2uiv(this.addr,e),dn(i,e)}}function MT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;r.uniform3uiv(this.addr,e),dn(i,e)}}function ET(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;r.uniform4uiv(this.addr,e),dn(i,e)}}function bT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(h_.compareFunction=$_,c=h_):c=yv,i.setTexture2D(e||c,l)}function TT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Mv,l)}function AT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Ev,l)}function RT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Sv,l)}function CT(r){switch(r){case 5126:return cT;case 35664:return uT;case 35665:return fT;case 35666:return hT;case 35674:return dT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return _T;case 35668:case 35672:return vT;case 35669:case 35673:return xT;case 5125:return yT;case 36294:return ST;case 36295:return MT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return RT}}function wT(r,e){r.uniform1fv(this.addr,e)}function DT(r,e){const i=Ur(e,this.size,2);r.uniform2fv(this.addr,i)}function UT(r,e){const i=Ur(e,this.size,3);r.uniform3fv(this.addr,i)}function NT(r,e){const i=Ur(e,this.size,4);r.uniform4fv(this.addr,i)}function LT(r,e){const i=Ur(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function OT(r,e){const i=Ur(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function PT(r,e){const i=Ur(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function zT(r,e){r.uniform1iv(this.addr,e)}function IT(r,e){r.uniform2iv(this.addr,e)}function BT(r,e){r.uniform3iv(this.addr,e)}function FT(r,e){r.uniform4iv(this.addr,e)}function HT(r,e){r.uniform1uiv(this.addr,e)}function GT(r,e){r.uniform2uiv(this.addr,e)}function VT(r,e){r.uniform3uiv(this.addr,e)}function kT(r,e){r.uniform4uiv(this.addr,e)}function XT(r,e,i){const s=this.cache,l=e.length,c=Bc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||yv,c[h])}function jT(r,e,i){const s=this.cache,l=e.length,c=Bc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Mv,c[h])}function WT(r,e,i){const s=this.cache,l=e.length,c=Bc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Ev,c[h])}function qT(r,e,i){const s=this.cache,l=e.length,c=Bc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Sv,c[h])}function YT(r){switch(r){case 5126:return wT;case 35664:return DT;case 35665:return UT;case 35666:return NT;case 35674:return LT;case 35675:return OT;case 35676:return PT;case 5124:case 35670:return zT;case 35667:case 35671:return IT;case 35668:case 35672:return BT;case 35669:case 35673:return FT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}class ZT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=CT(i.type)}}class KT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=YT(i.type)}}class QT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function v_(r,e){r.seq.push(e),r.map[e.id]=e}function JT(r,e,i){const s=r.name,l=s.length;for(Dh.lastIndex=0;;){const c=Dh.exec(s),h=Dh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){v_(i,p===void 0?new ZT(d,r,e):new KT(d,r,e));break}else{let v=i.map[d];v===void 0&&(v=new QT(d),v_(i,v)),i=v}}}class Dc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);JT(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function x_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const $T=37297;let tA=0;function eA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const y_=new le;function nA(r){Ce._getMatrix(y_,Ce.workingColorSpace,r);const e=`mat3( ${y_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case Uc:return[e,"LinearTransferOETF"];case He:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function S_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+eA(r.getShaderSource(e),h)}else return l}function iA(r,e){const i=nA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function aA(r,e){let i;switch(e){case aM:i="Linear";break;case sM:i="Reinhard";break;case rM:i="Cineon";break;case oM:i="ACESFilmic";break;case cM:i="AgX";break;case uM:i="Neutral";break;case lM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ec=new st;function sA(){Ce.getLuminanceCoefficients(Ec);const r=Ec.x.toFixed(4),e=Ec.y.toFixed(4),i=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function oA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function lA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function Lo(r){return r!==""}function M_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cA=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(r){return r.replace(cA,fA)}const uA=new Map;function fA(r,e){let i=ce[e];if(i===void 0){const s=uA.get(e);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return vd(i)}const hA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b_(r){return r.replace(hA,dA)}function dA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function T_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===F_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===IS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function mA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case br:case Tr:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function _A(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case H_:e="ENVMAP_BLENDING_MULTIPLY";break;case nM:e="ENVMAP_BLENDING_MIX";break;case iM:e="ENVMAP_BLENDING_ADD";break}return e}function vA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function xA(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=pA(i),p=mA(i),g=gA(i),v=_A(i),y=vA(i),M=rA(i),E=oA(c),b=l.createProgram();let S,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(S=[T_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[T_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ga?aA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,iA("linearToOutputTexel",i.outputColorSpace),sA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),h=vd(h),h=M_(h,i),h=E_(h,i),d=vd(d),d=M_(d,i),d=E_(d,i),h=b_(h),d=b_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=I+S+h,D=I+_+d,j=x_(l,l.VERTEX_SHADER,L),H=x_(l,l.FRAGMENT_SHADER,D);l.attachShader(b,j),l.attachShader(b,H),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function z(G){if(r.debug.checkShaderErrors){const ut=l.getProgramInfoLog(b).trim(),nt=l.getShaderInfoLog(j).trim(),dt=l.getShaderInfoLog(H).trim();let pt=!0,P=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(pt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,j,H);else{const F=S_(l,j,"vertex"),q=S_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ut+`
`+F+`
`+q)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(nt===""||dt==="")&&(P=!1);P&&(G.diagnostics={runnable:pt,programLog:ut,vertexShader:{log:nt,prefix:S},fragmentShader:{log:dt,prefix:_}})}l.deleteShader(j),l.deleteShader(H),k=new Dc(l,b),w=lA(l,b)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,$T)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=j,this.fragmentShader=H,this}let yA=0;class SA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new MA(e),i.set(e,s)),s}}class MA{constructor(e){this.id=yA++,this.code=e,this.usedTimes=0}}function EA(r,e,i,s,l,c,h){const d=new iv,m=new SA,p=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,C,G,ut,nt){const dt=ut.fog,pt=nt.geometry,P=w.isMeshStandardMaterial?ut.environment:null,F=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),q=F&&F.mapping===Pc?F.image.height:null,lt=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const rt=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,U=rt!==void 0?rt.length:0;let J=0;pt.morphAttributes.position!==void 0&&(J=1),pt.morphAttributes.normal!==void 0&&(J=2),pt.morphAttributes.color!==void 0&&(J=3);let xt,W,ft,Et;if(lt){const Ee=Ni[lt];xt=Ee.vertexShader,W=Ee.fragmentShader}else xt=w.vertexShader,W=w.fragmentShader,m.update(w),ft=m.getVertexShaderID(w),Et=m.getFragmentShaderID(w);const vt=r.getRenderTarget(),zt=r.state.buffers.depth.getReversed(),kt=nt.isInstancedMesh===!0,Zt=nt.isBatchedMesh===!0,Oe=!!w.map,Ge=!!w.matcap,fe=!!F,V=!!w.aoMap,Tn=!!w.lightMap,ue=!!w.bumpMap,pe=!!w.normalMap,jt=!!w.displacementMap,Ue=!!w.emissiveMap,Xt=!!w.metalnessMap,N=!!w.roughnessMap,A=w.anisotropy>0,it=w.clearcoat>0,gt=w.dispersion>0,bt=w.iridescence>0,yt=w.sheen>0,Gt=w.transmission>0,wt=A&&!!w.anisotropyMap,It=it&&!!w.clearcoatMap,me=it&&!!w.clearcoatNormalMap,At=it&&!!w.clearcoatRoughnessMap,Bt=bt&&!!w.iridescenceMap,Wt=bt&&!!w.iridescenceThicknessMap,Vt=yt&&!!w.sheenColorMap,Ot=yt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,se=!!w.specularColorMap,Pe=!!w.specularIntensityMap,Z=Gt&&!!w.transmissionMap,Rt=Gt&&!!w.thicknessMap,ht=!!w.gradientMap,Mt=!!w.alphaMap,Ct=w.alphaTest>0,Dt=!!w.alphaHash,te=!!w.extensions;let We=Ga;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(We=r.toneMapping);const cn={shaderID:lt,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:W,defines:w.defines,customVertexShaderID:ft,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Zt,batchingColor:Zt&&nt._colorsTexture!==null,instancing:kt,instancingColor:kt&&nt.instanceColor!==null,instancingMorph:kt&&nt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Cr,alphaToCoverage:!!w.alphaToCoverage,map:Oe,matcap:Ge,envMap:fe,envMapMode:fe&&F.mapping,envMapCubeUVHeight:q,aoMap:V,lightMap:Tn,bumpMap:ue,normalMap:pe,displacementMap:y&&jt,emissiveMap:Ue,normalMapObjectSpace:pe&&w.normalMapType===pM,normalMapTangentSpace:pe&&w.normalMapType===J_,metalnessMap:Xt,roughnessMap:N,anisotropy:A,anisotropyMap:wt,clearcoat:it,clearcoatMap:It,clearcoatNormalMap:me,clearcoatRoughnessMap:At,dispersion:gt,iridescence:bt,iridescenceMap:Bt,iridescenceThicknessMap:Wt,sheen:yt,sheenColorMap:Vt,sheenRoughnessMap:Ot,specularMap:Jt,specularColorMap:se,specularIntensityMap:Pe,transmission:Gt,transmissionMap:Z,thicknessMap:Rt,gradientMap:ht,opaque:w.transparent===!1&&w.blending===xr&&w.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Ct,alphaHash:Dt,combine:w.combine,mapUv:Oe&&b(w.map.channel),aoMapUv:V&&b(w.aoMap.channel),lightMapUv:Tn&&b(w.lightMap.channel),bumpMapUv:ue&&b(w.bumpMap.channel),normalMapUv:pe&&b(w.normalMap.channel),displacementMapUv:jt&&b(w.displacementMap.channel),emissiveMapUv:Ue&&b(w.emissiveMap.channel),metalnessMapUv:Xt&&b(w.metalnessMap.channel),roughnessMapUv:N&&b(w.roughnessMap.channel),anisotropyMapUv:wt&&b(w.anisotropyMap.channel),clearcoatMapUv:It&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(w.sheenRoughnessMap.channel),specularMapUv:Jt&&b(w.specularMap.channel),specularColorMapUv:se&&b(w.specularColorMap.channel),specularIntensityMapUv:Pe&&b(w.specularIntensityMap.channel),transmissionMapUv:Z&&b(w.transmissionMap.channel),thicknessMapUv:Rt&&b(w.thicknessMap.channel),alphaMapUv:Mt&&b(w.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(pe||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!pt.attributes.uv&&(Oe||Mt),fog:!!dt,useFog:w.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:zt,skinning:nt.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:We,decodeVideoTexture:Oe&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===He,decodeVideoTextureEmissive:Ue&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===He,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Li,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:te&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&w.extensions.multiDraw===!0||Zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return cn.vertexUv1s=p.has(1),cn.vertexUv2s=p.has(2),cn.vertexUv3s=p.has(3),p.clear(),cn}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(I(C,w),L(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function I(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=E[w.type];let G;if(C){const ut=Ni[C];G=jM.clone(ut.uniforms)}else G=w.uniforms;return G}function j(w,C){let G;for(let ut=0,nt=g.length;ut<nt;ut++){const dt=g[ut];if(dt.cacheKey===C){G=dt,++G.usedTimes;break}}return G===void 0&&(G=new xA(r,C,w,c),g.push(G)),G}function H(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function z(w){m.remove(w)}function k(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:j,releaseProgram:H,releaseShaderCache:z,programs:g,dispose:k}}function bA(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function TA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function A_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function R_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(v,y,M,E,b,S){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:M,groupOrder:E,renderOrder:v.renderOrder,z:b,group:S},r[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=M,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=b,_.group=S),e++,_}function d(v,y,M,E,b,S){const _=h(v,y,M,E,b,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,y,M,E,b,S){const _=h(v,y,M,E,b,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,y){i.length>1&&i.sort(v||TA),s.length>1&&s.sort(y||A_),l.length>1&&l.sort(y||A_)}function g(){for(let v=e,y=r.length;v<y;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function AA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new R_,r.set(s,[h])):l>=c.length?(h=new R_,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function RA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new be};break;case"SpotLight":i={position:new st,direction:new st,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new st,halfWidth:new st,halfHeight:new st};break}return r[e.id]=i,i}}}function CA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let wA=0;function DA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function UA(r){const e=new RA,i=CA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new st);const l=new st,c=new Ye,h=new Ye;function d(p){let g=0,v=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,E=0,b=0,S=0,_=0,I=0,L=0,D=0,j=0,H=0,z=0;p.sort(DA);for(let w=0,C=p.length;w<C;w++){const G=p[w],ut=G.color,nt=G.intensity,dt=G.distance,pt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ut.r*nt,v+=ut.g*nt,y+=ut.b*nt;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],nt);z++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const F=G.shadow,q=i.get(G);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=pt,s.directionalShadowMatrix[M]=G.shadow.matrix,I++}s.directional[M]=P,M++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(ut).multiplyScalar(nt),P.distance=dt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[b]=P;const F=G.shadow;if(G.map&&(s.spotLightMap[j]=G.map,j++,F.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[b]=F.matrix,G.castShadow){const q=i.get(G);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,s.spotShadow[b]=q,s.spotShadowMap[b]=pt,D++}b++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(ut).multiplyScalar(nt),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=P,S++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const F=G.shadow,q=i.get(G);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,q.shadowCameraNear=F.camera.near,q.shadowCameraFar=F.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=pt,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=P,E++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(nt),P.groundColor.copy(G.groundColor).multiplyScalar(nt),s.hemi[_]=P,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=y;const k=s.hash;(k.directionalLength!==M||k.pointLength!==E||k.spotLength!==b||k.rectAreaLength!==S||k.hemiLength!==_||k.numDirectionalShadows!==I||k.numPointShadows!==L||k.numSpotShadows!==D||k.numSpotMaps!==j||k.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+j-H,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=z,k.directionalLength=M,k.pointLength=E,k.spotLength=b,k.rectAreaLength=S,k.hemiLength=_,k.numDirectionalShadows=I,k.numPointShadows=L,k.numSpotShadows=D,k.numSpotMaps=j,k.numLightProbes=z,s.version=wA++)}function m(p,g){let v=0,y=0,M=0,E=0,b=0;const S=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const L=p[_];if(L.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),v++}else if(L.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),h.identity(),c.copy(L.matrixWorld),c.premultiply(S),h.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const D=s.hemi[b];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:d,setupView:m,state:s}}function C_(r){const e=new UA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function NA(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new C_(r),e.set(l,[d])):c>=h.length?(d=new C_(r),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PA(r,e,i){let s=new Ud;const l=new De,c=new De,h=new tn,d=new nE({depthPacking:dM}),m=new iE,p={},g=i.maxTextureSize,v={[Va]:Xn,[Xn]:Va,[Li]:Li},y=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:LA,fragmentShader:OA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new di(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F_;let _=this.type;this.render=function(H,z,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),ut=r.state;ut.setBlending(Ha),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const nt=_!==sa&&this.type===sa,dt=_===sa&&this.type!==sa;for(let pt=0,P=H.length;pt<P;pt++){const F=H[pt],q=F.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const lt=q.getFrameExtents();if(l.multiply(lt),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/lt.x),l.x=c.x*lt.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/lt.y),l.y=c.y*lt.y,q.mapSize.y=c.y)),q.map===null||nt===!0||dt===!0){const U=this.type!==sa?{minFilter:Ti,magFilter:Ti}:{};q.map!==null&&q.map.dispose(),q.map=new Ms(l.x,l.y,U),q.map.texture.name=F.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const rt=q.getViewportCount();for(let U=0;U<rt;U++){const J=q.getViewport(U);h.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),ut.viewport(h),q.updateMatrices(F,U),s=q.getFrustum(),D(z,k,q.camera,F,this.type)}q.isPointLightShadow!==!0&&this.type===sa&&I(q,k),q.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(w,C,G)};function I(H,z){const k=e.update(b);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ms(l.x,l.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(z,null,k,y,b,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(z,null,k,M,b,null)}function L(H,z,k,w){let C=null;const G=k.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)C=G;else if(C=k.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ut=C.uuid,nt=z.uuid;let dt=p[ut];dt===void 0&&(dt={},p[ut]=dt);let pt=dt[nt];pt===void 0&&(pt=C.clone(),dt[nt]=pt,z.addEventListener("dispose",j)),C=pt}if(C.visible=z.visible,C.wireframe=z.wireframe,w===sa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ut=r.properties.get(C);ut.light=k}return C}function D(H,z,k,w,C){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===sa)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,H.matrixWorld);const nt=e.update(H),dt=H.material;if(Array.isArray(dt)){const pt=nt.groups;for(let P=0,F=pt.length;P<F;P++){const q=pt[P],lt=dt[q.materialIndex];if(lt&&lt.visible){const rt=L(H,lt,w,C);H.onBeforeShadow(r,H,z,k,nt,rt,q),r.renderBufferDirect(k,null,nt,rt,H,q),H.onAfterShadow(r,H,z,k,nt,rt,q)}}}else if(dt.visible){const pt=L(H,dt,w,C);H.onBeforeShadow(r,H,z,k,nt,pt,null),r.renderBufferDirect(k,null,nt,pt,H,null),H.onAfterShadow(r,H,z,k,nt,pt,null)}}const ut=H.children;for(let nt=0,dt=ut.length;nt<dt;nt++)D(ut[nt],z,k,w,C)}function j(H){H.target.removeEventListener("dispose",j);for(const k in p){const w=p[k],C=H.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const zA={[Lh]:Oh,[Ph]:Bh,[zh]:Fh,[Er]:Ih,[Oh]:Lh,[Bh]:Ph,[Fh]:zh,[Ih]:Er};function IA(r,e){function i(){let Z=!1;const Rt=new tn;let ht=null;const Mt=new tn(0,0,0,0);return{setMask:function(Ct){ht!==Ct&&!Z&&(r.colorMask(Ct,Ct,Ct,Ct),ht=Ct)},setLocked:function(Ct){Z=Ct},setClear:function(Ct,Dt,te,We,cn){cn===!0&&(Ct*=We,Dt*=We,te*=We),Rt.set(Ct,Dt,te,We),Mt.equals(Rt)===!1&&(r.clearColor(Ct,Dt,te,We),Mt.copy(Rt))},reset:function(){Z=!1,ht=null,Mt.set(-1,0,0,0)}}}function s(){let Z=!1,Rt=!1,ht=null,Mt=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const te=e.get("EXT_clip_control");Rt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const We=Ct;Ct=null,this.setClear(We)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?vt(r.DEPTH_TEST):zt(r.DEPTH_TEST)},setMask:function(Dt){ht!==Dt&&!Z&&(r.depthMask(Dt),ht=Dt)},setFunc:function(Dt){if(Rt&&(Dt=zA[Dt]),Mt!==Dt){switch(Dt){case Lh:r.depthFunc(r.NEVER);break;case Oh:r.depthFunc(r.ALWAYS);break;case Ph:r.depthFunc(r.LESS);break;case Er:r.depthFunc(r.LEQUAL);break;case zh:r.depthFunc(r.EQUAL);break;case Ih:r.depthFunc(r.GEQUAL);break;case Bh:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Mt=Dt}},setLocked:function(Dt){Z=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),r.clearDepth(Dt),Ct=Dt)},reset:function(){Z=!1,ht=null,Mt=null,Ct=null,Rt=!1}}}function l(){let Z=!1,Rt=null,ht=null,Mt=null,Ct=null,Dt=null,te=null,We=null,cn=null;return{setTest:function(Ee){Z||(Ee?vt(r.STENCIL_TEST):zt(r.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!Z&&(r.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,vn,pi){(ht!==Ee||Mt!==vn||Ct!==pi)&&(r.stencilFunc(Ee,vn,pi),ht=Ee,Mt=vn,Ct=pi)},setOp:function(Ee,vn,pi){(Dt!==Ee||te!==vn||We!==pi)&&(r.stencilOp(Ee,vn,pi),Dt=Ee,te=vn,We=pi)},setLocked:function(Ee){Z=Ee},setClear:function(Ee){cn!==Ee&&(r.clearStencil(Ee),cn=Ee)},reset:function(){Z=!1,Rt=null,ht=null,Mt=null,Ct=null,Dt=null,te=null,We=null,cn=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,M=[],E=null,b=!1,S=null,_=null,I=null,L=null,D=null,j=null,H=null,z=new be(0,0,0),k=0,w=!1,C=null,G=null,ut=null,nt=null,dt=null;const pt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,F=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=F>=1):q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=F>=2);let lt=null,rt={};const U=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),xt=new tn().fromArray(U),W=new tn().fromArray(J);function ft(Z,Rt,ht,Mt){const Ct=new Uint8Array(4),Dt=r.createTexture();r.bindTexture(Z,Dt),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<ht;te++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Mt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Rt+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return Dt}const Et={};Et[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(r.DEPTH_TEST),h.setFunc(Er),ue(!1),pe(Ag),vt(r.CULL_FACE),V(Ha);function vt(Z){g[Z]!==!0&&(r.enable(Z),g[Z]=!0)}function zt(Z){g[Z]!==!1&&(r.disable(Z),g[Z]=!1)}function kt(Z,Rt){return v[Z]!==Rt?(r.bindFramebuffer(Z,Rt),v[Z]=Rt,Z===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Rt),Z===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(Z,Rt){let ht=M,Mt=!1;if(Z){ht=y.get(Rt),ht===void 0&&(ht=[],y.set(Rt,ht));const Ct=Z.textures;if(ht.length!==Ct.length||ht[0]!==r.COLOR_ATTACHMENT0){for(let Dt=0,te=Ct.length;Dt<te;Dt++)ht[Dt]=r.COLOR_ATTACHMENT0+Dt;ht.length=Ct.length,Mt=!0}}else ht[0]!==r.BACK&&(ht[0]=r.BACK,Mt=!0);Mt&&r.drawBuffers(ht)}function Oe(Z){return E!==Z?(r.useProgram(Z),E=Z,!0):!1}const Ge={[_s]:r.FUNC_ADD,[FS]:r.FUNC_SUBTRACT,[HS]:r.FUNC_REVERSE_SUBTRACT};Ge[GS]=r.MIN,Ge[VS]=r.MAX;const fe={[kS]:r.ZERO,[XS]:r.ONE,[jS]:r.SRC_COLOR,[Uh]:r.SRC_ALPHA,[QS]:r.SRC_ALPHA_SATURATE,[ZS]:r.DST_COLOR,[qS]:r.DST_ALPHA,[WS]:r.ONE_MINUS_SRC_COLOR,[Nh]:r.ONE_MINUS_SRC_ALPHA,[KS]:r.ONE_MINUS_DST_COLOR,[YS]:r.ONE_MINUS_DST_ALPHA,[JS]:r.CONSTANT_COLOR,[$S]:r.ONE_MINUS_CONSTANT_COLOR,[tM]:r.CONSTANT_ALPHA,[eM]:r.ONE_MINUS_CONSTANT_ALPHA};function V(Z,Rt,ht,Mt,Ct,Dt,te,We,cn,Ee){if(Z===Ha){b===!0&&(zt(r.BLEND),b=!1);return}if(b===!1&&(vt(r.BLEND),b=!0),Z!==BS){if(Z!==S||Ee!==w){if((_!==_s||D!==_s)&&(r.blendEquation(r.FUNC_ADD),_=_s,D=_s),Ee)switch(Z){case xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rg:r.blendFunc(r.ONE,r.ONE);break;case Cg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Cg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}I=null,L=null,j=null,H=null,z.set(0,0,0),k=0,S=Z,w=Ee}return}Ct=Ct||Rt,Dt=Dt||ht,te=te||Mt,(Rt!==_||Ct!==D)&&(r.blendEquationSeparate(Ge[Rt],Ge[Ct]),_=Rt,D=Ct),(ht!==I||Mt!==L||Dt!==j||te!==H)&&(r.blendFuncSeparate(fe[ht],fe[Mt],fe[Dt],fe[te]),I=ht,L=Mt,j=Dt,H=te),(We.equals(z)===!1||cn!==k)&&(r.blendColor(We.r,We.g,We.b,cn),z.copy(We),k=cn),S=Z,w=!1}function Tn(Z,Rt){Z.side===Li?zt(r.CULL_FACE):vt(r.CULL_FACE);let ht=Z.side===Xn;Rt&&(ht=!ht),ue(ht),Z.blending===xr&&Z.transparent===!1?V(Ha):V(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),h.setFunc(Z.depthFunc),h.setTest(Z.depthTest),h.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Mt=Z.stencilWrite;d.setTest(Mt),Mt&&(d.setMask(Z.stencilWriteMask),d.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),d.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Ue(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ue(Z){C!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),C=Z)}function pe(Z){Z!==PS?(vt(r.CULL_FACE),Z!==G&&(Z===Ag?r.cullFace(r.BACK):Z===zS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):zt(r.CULL_FACE),G=Z}function jt(Z){Z!==ut&&(P&&r.lineWidth(Z),ut=Z)}function Ue(Z,Rt,ht){Z?(vt(r.POLYGON_OFFSET_FILL),(nt!==Rt||dt!==ht)&&(r.polygonOffset(Rt,ht),nt=Rt,dt=ht)):zt(r.POLYGON_OFFSET_FILL)}function Xt(Z){Z?vt(r.SCISSOR_TEST):zt(r.SCISSOR_TEST)}function N(Z){Z===void 0&&(Z=r.TEXTURE0+pt-1),lt!==Z&&(r.activeTexture(Z),lt=Z)}function A(Z,Rt,ht){ht===void 0&&(lt===null?ht=r.TEXTURE0+pt-1:ht=lt);let Mt=rt[ht];Mt===void 0&&(Mt={type:void 0,texture:void 0},rt[ht]=Mt),(Mt.type!==Z||Mt.texture!==Rt)&&(lt!==ht&&(r.activeTexture(ht),lt=ht),r.bindTexture(Z,Rt||Et[Z]),Mt.type=Z,Mt.texture=Rt)}function it(){const Z=rt[lt];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function gt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function bt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function yt(){try{r.texSubImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Gt(){try{r.texSubImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function wt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function It(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function me(){try{r.texStorage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function At(){try{r.texStorage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Bt(){try{r.texImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Wt(){try{r.texImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Vt(Z){xt.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),xt.copy(Z))}function Ot(Z){W.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),W.copy(Z))}function Jt(Z,Rt){let ht=p.get(Rt);ht===void 0&&(ht=new WeakMap,p.set(Rt,ht));let Mt=ht.get(Z);Mt===void 0&&(Mt=r.getUniformBlockIndex(Rt,Z.name),ht.set(Z,Mt))}function se(Z,Rt){const Mt=p.get(Rt).get(Z);m.get(Rt)!==Mt&&(r.uniformBlockBinding(Rt,Mt,Z.__bindingPointIndex),m.set(Rt,Mt))}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},lt=null,rt={},v={},y=new WeakMap,M=[],E=null,b=!1,S=null,_=null,I=null,L=null,D=null,j=null,H=null,z=new be(0,0,0),k=0,w=!1,C=null,G=null,ut=null,nt=null,dt=null,xt.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:vt,disable:zt,bindFramebuffer:kt,drawBuffers:Zt,useProgram:Oe,setBlending:V,setMaterial:Tn,setFlipSided:ue,setCullFace:pe,setLineWidth:jt,setPolygonOffset:Ue,setScissorTest:Xt,activeTexture:N,bindTexture:A,unbindTexture:it,compressedTexImage2D:gt,compressedTexImage3D:bt,texImage2D:Bt,texImage3D:Wt,updateUBOMapping:Jt,uniformBlockBinding:se,texStorage2D:me,texStorage3D:At,texSubImage2D:yt,texSubImage3D:Gt,compressedTexSubImage2D:wt,compressedTexSubImage3D:It,scissor:Vt,viewport:Ot,reset:Pe}}function BA(r,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new De,g=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,A){return M?new OffscreenCanvas(N,A):Po("canvas")}function b(N,A,it){let gt=1;const bt=Xt(N);if((bt.width>it||bt.height>it)&&(gt=it/Math.max(bt.width,bt.height)),gt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const yt=Math.floor(gt*bt.width),Gt=Math.floor(gt*bt.height);v===void 0&&(v=E(yt,Gt));const wt=A?E(yt,Gt):v;return wt.width=yt,wt.height=Gt,wt.getContext("2d").drawImage(N,0,0,yt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+yt+"x"+Gt+")."),wt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,A,it,gt,bt=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let yt=A;if(A===r.RED&&(it===r.FLOAT&&(yt=r.R32F),it===r.HALF_FLOAT&&(yt=r.R16F),it===r.UNSIGNED_BYTE&&(yt=r.R8)),A===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(yt=r.R8UI),it===r.UNSIGNED_SHORT&&(yt=r.R16UI),it===r.UNSIGNED_INT&&(yt=r.R32UI),it===r.BYTE&&(yt=r.R8I),it===r.SHORT&&(yt=r.R16I),it===r.INT&&(yt=r.R32I)),A===r.RG&&(it===r.FLOAT&&(yt=r.RG32F),it===r.HALF_FLOAT&&(yt=r.RG16F),it===r.UNSIGNED_BYTE&&(yt=r.RG8)),A===r.RG_INTEGER&&(it===r.UNSIGNED_BYTE&&(yt=r.RG8UI),it===r.UNSIGNED_SHORT&&(yt=r.RG16UI),it===r.UNSIGNED_INT&&(yt=r.RG32UI),it===r.BYTE&&(yt=r.RG8I),it===r.SHORT&&(yt=r.RG16I),it===r.INT&&(yt=r.RG32I)),A===r.RGB_INTEGER&&(it===r.UNSIGNED_BYTE&&(yt=r.RGB8UI),it===r.UNSIGNED_SHORT&&(yt=r.RGB16UI),it===r.UNSIGNED_INT&&(yt=r.RGB32UI),it===r.BYTE&&(yt=r.RGB8I),it===r.SHORT&&(yt=r.RGB16I),it===r.INT&&(yt=r.RGB32I)),A===r.RGBA_INTEGER&&(it===r.UNSIGNED_BYTE&&(yt=r.RGBA8UI),it===r.UNSIGNED_SHORT&&(yt=r.RGBA16UI),it===r.UNSIGNED_INT&&(yt=r.RGBA32UI),it===r.BYTE&&(yt=r.RGBA8I),it===r.SHORT&&(yt=r.RGBA16I),it===r.INT&&(yt=r.RGBA32I)),A===r.RGB&&it===r.UNSIGNED_INT_5_9_9_9_REV&&(yt=r.RGB9_E5),A===r.RGBA){const Gt=bt?Uc:Ce.getTransfer(gt);it===r.FLOAT&&(yt=r.RGBA32F),it===r.HALF_FLOAT&&(yt=r.RGBA16F),it===r.UNSIGNED_BYTE&&(yt=Gt===He?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(yt=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(yt=r.RGB5_A1)}return(yt===r.R16F||yt===r.R32F||yt===r.RG16F||yt===r.RG32F||yt===r.RGBA16F||yt===r.RGBA32F)&&e.get("EXT_color_buffer_float"),yt}function D(N,A){let it;return N?A===null||A===Ss||A===Ar?it=r.DEPTH24_STENCIL8:A===ra?it=r.DEPTH32F_STENCIL8:A===Oo&&(it=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ss||A===Ar?it=r.DEPTH_COMPONENT24:A===ra?it=r.DEPTH_COMPONENT32F:A===Oo&&(it=r.DEPTH_COMPONENT16),it}function j(N,A){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ti&&N.minFilter!==Oi?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function H(N){const A=N.target;A.removeEventListener("dispose",H),k(A),A.isVideoTexture&&g.delete(A)}function z(N){const A=N.target;A.removeEventListener("dispose",z),C(A)}function k(N){const A=s.get(N);if(A.__webglInit===void 0)return;const it=N.source,gt=y.get(it);if(gt){const bt=gt[A.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&w(N),Object.keys(gt).length===0&&y.delete(it)}s.remove(N)}function w(N){const A=s.get(N);r.deleteTexture(A.__webglTexture);const it=N.source,gt=y.get(it);delete gt[A.__cacheKey],h.memory.textures--}function C(N){const A=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(A.__webglFramebuffer[gt]))for(let bt=0;bt<A.__webglFramebuffer[gt].length;bt++)r.deleteFramebuffer(A.__webglFramebuffer[gt][bt]);else r.deleteFramebuffer(A.__webglFramebuffer[gt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[gt])}else{if(Array.isArray(A.__webglFramebuffer))for(let gt=0;gt<A.__webglFramebuffer.length;gt++)r.deleteFramebuffer(A.__webglFramebuffer[gt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let gt=0;gt<A.__webglColorRenderbuffer.length;gt++)A.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[gt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const it=N.textures;for(let gt=0,bt=it.length;gt<bt;gt++){const yt=s.get(it[gt]);yt.__webglTexture&&(r.deleteTexture(yt.__webglTexture),h.memory.textures--),s.remove(it[gt])}s.remove(N)}let G=0;function ut(){G=0}function nt(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function dt(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function pt(N,A){const it=s.get(N);if(N.isVideoTexture&&jt(N),N.isRenderTargetTexture===!1&&N.version>0&&it.__version!==N.version){const gt=N.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(it,N,A);return}}i.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+A)}function P(N,A){const it=s.get(N);if(N.version>0&&it.__version!==N.version){W(it,N,A);return}i.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+A)}function F(N,A){const it=s.get(N);if(N.version>0&&it.__version!==N.version){W(it,N,A);return}i.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+A)}function q(N,A){const it=s.get(N);if(N.version>0&&it.__version!==N.version){ft(it,N,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+A)}const lt={[Vh]:r.REPEAT,[xs]:r.CLAMP_TO_EDGE,[kh]:r.MIRRORED_REPEAT},rt={[Ti]:r.NEAREST,[fM]:r.NEAREST_MIPMAP_NEAREST,[Jl]:r.NEAREST_MIPMAP_LINEAR,[Oi]:r.LINEAR,[$f]:r.LINEAR_MIPMAP_NEAREST,[ys]:r.LINEAR_MIPMAP_LINEAR},U={[mM]:r.NEVER,[SM]:r.ALWAYS,[gM]:r.LESS,[$_]:r.LEQUAL,[_M]:r.EQUAL,[yM]:r.GEQUAL,[vM]:r.GREATER,[xM]:r.NOTEQUAL};function J(N,A){if(A.type===ra&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Oi||A.magFilter===$f||A.magFilter===Jl||A.magFilter===ys||A.minFilter===Oi||A.minFilter===$f||A.minFilter===Jl||A.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,lt[A.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,lt[A.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,lt[A.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,rt[A.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,rt[A.minFilter]),A.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,U[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ti||A.minFilter!==Jl&&A.minFilter!==ys||A.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function xt(N,A){let it=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",H));const gt=A.source;let bt=y.get(gt);bt===void 0&&(bt={},y.set(gt,bt));const yt=dt(A);if(yt!==N.__cacheKey){bt[yt]===void 0&&(bt[yt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,it=!0),bt[yt].usedTimes++;const Gt=bt[N.__cacheKey];Gt!==void 0&&(bt[N.__cacheKey].usedTimes--,Gt.usedTimes===0&&w(A)),N.__cacheKey=yt,N.__webglTexture=bt[yt].texture}return it}function W(N,A,it){let gt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(gt=r.TEXTURE_3D);const bt=xt(N,A),yt=A.source;i.bindTexture(gt,N.__webglTexture,r.TEXTURE0+it);const Gt=s.get(yt);if(yt.version!==Gt.__version||bt===!0){i.activeTexture(r.TEXTURE0+it);const wt=Ce.getPrimaries(Ce.workingColorSpace),It=A.colorSpace===Fa?null:Ce.getPrimaries(A.colorSpace),me=A.colorSpace===Fa||wt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let At=b(A.image,!1,l.maxTextureSize);At=Ue(A,At);const Bt=c.convert(A.format,A.colorSpace),Wt=c.convert(A.type);let Vt=L(A.internalFormat,Bt,Wt,A.colorSpace,A.isVideoTexture);J(gt,A);let Ot;const Jt=A.mipmaps,se=A.isVideoTexture!==!0,Pe=Gt.__version===void 0||bt===!0,Z=yt.dataReady,Rt=j(A,At);if(A.isDepthTexture)Vt=D(A.format===Rr,A.type),Pe&&(se?i.texStorage2D(r.TEXTURE_2D,1,Vt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Vt,At.width,At.height,0,Bt,Wt,null));else if(A.isDataTexture)if(Jt.length>0){se&&Pe&&i.texStorage2D(r.TEXTURE_2D,Rt,Vt,Jt[0].width,Jt[0].height);for(let ht=0,Mt=Jt.length;ht<Mt;ht++)Ot=Jt[ht],se?Z&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Bt,Wt,Ot.data):i.texImage2D(r.TEXTURE_2D,ht,Vt,Ot.width,Ot.height,0,Bt,Wt,Ot.data);A.generateMipmaps=!1}else se?(Pe&&i.texStorage2D(r.TEXTURE_2D,Rt,Vt,At.width,At.height),Z&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,At.width,At.height,Bt,Wt,At.data)):i.texImage2D(r.TEXTURE_2D,0,Vt,At.width,At.height,0,Bt,Wt,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){se&&Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Vt,Jt[0].width,Jt[0].height,At.depth);for(let ht=0,Mt=Jt.length;ht<Mt;ht++)if(Ot=Jt[ht],A.format!==bi)if(Bt!==null)if(se){if(Z)if(A.layerUpdates.size>0){const Ct=a_(Ot.width,Ot.height,A.format,A.type);for(const Dt of A.layerUpdates){const te=Ot.data.subarray(Dt*Ct/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,Dt,Ot.width,Ot.height,1,Bt,te)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,Ot.width,Ot.height,At.depth,Bt,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ht,Vt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Z&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,Ot.width,Ot.height,At.depth,Bt,Wt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ht,Vt,Ot.width,Ot.height,At.depth,0,Bt,Wt,Ot.data)}else{se&&Pe&&i.texStorage2D(r.TEXTURE_2D,Rt,Vt,Jt[0].width,Jt[0].height);for(let ht=0,Mt=Jt.length;ht<Mt;ht++)Ot=Jt[ht],A.format!==bi?Bt!==null?se?Z&&i.compressedTexSubImage2D(r.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Bt,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,ht,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Z&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Bt,Wt,Ot.data):i.texImage2D(r.TEXTURE_2D,ht,Vt,Ot.width,Ot.height,0,Bt,Wt,Ot.data)}else if(A.isDataArrayTexture)if(se){if(Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Vt,At.width,At.height,At.depth),Z)if(A.layerUpdates.size>0){const ht=a_(At.width,At.height,A.format,A.type);for(const Mt of A.layerUpdates){const Ct=At.data.subarray(Mt*ht/At.data.BYTES_PER_ELEMENT,(Mt+1)*ht/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Mt,At.width,At.height,1,Bt,Wt,Ct)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Bt,Wt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,At.width,At.height,At.depth,0,Bt,Wt,At.data);else if(A.isData3DTexture)se?(Pe&&i.texStorage3D(r.TEXTURE_3D,Rt,Vt,At.width,At.height,At.depth),Z&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Bt,Wt,At.data)):i.texImage3D(r.TEXTURE_3D,0,Vt,At.width,At.height,At.depth,0,Bt,Wt,At.data);else if(A.isFramebufferTexture){if(Pe)if(se)i.texStorage2D(r.TEXTURE_2D,Rt,Vt,At.width,At.height);else{let ht=At.width,Mt=At.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(r.TEXTURE_2D,Ct,Vt,ht,Mt,0,Bt,Wt,null),ht>>=1,Mt>>=1}}else if(Jt.length>0){if(se&&Pe){const ht=Xt(Jt[0]);i.texStorage2D(r.TEXTURE_2D,Rt,Vt,ht.width,ht.height)}for(let ht=0,Mt=Jt.length;ht<Mt;ht++)Ot=Jt[ht],se?Z&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,Bt,Wt,Ot):i.texImage2D(r.TEXTURE_2D,ht,Vt,Bt,Wt,Ot);A.generateMipmaps=!1}else if(se){if(Pe){const ht=Xt(At);i.texStorage2D(r.TEXTURE_2D,Rt,Vt,ht.width,ht.height)}Z&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,Wt,At)}else i.texImage2D(r.TEXTURE_2D,0,Vt,Bt,Wt,At);S(A)&&_(gt),Gt.__version=yt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ft(N,A,it){if(A.image.length!==6)return;const gt=xt(N,A),bt=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+it);const yt=s.get(bt);if(bt.version!==yt.__version||gt===!0){i.activeTexture(r.TEXTURE0+it);const Gt=Ce.getPrimaries(Ce.workingColorSpace),wt=A.colorSpace===Fa?null:Ce.getPrimaries(A.colorSpace),It=A.colorSpace===Fa||Gt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const me=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,Bt=[];for(let Mt=0;Mt<6;Mt++)!me&&!At?Bt[Mt]=b(A.image[Mt],!0,l.maxCubemapSize):Bt[Mt]=At?A.image[Mt].image:A.image[Mt],Bt[Mt]=Ue(A,Bt[Mt]);const Wt=Bt[0],Vt=c.convert(A.format,A.colorSpace),Ot=c.convert(A.type),Jt=L(A.internalFormat,Vt,Ot,A.colorSpace),se=A.isVideoTexture!==!0,Pe=yt.__version===void 0||gt===!0,Z=bt.dataReady;let Rt=j(A,Wt);J(r.TEXTURE_CUBE_MAP,A);let ht;if(me){se&&Pe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,Jt,Wt.width,Wt.height);for(let Mt=0;Mt<6;Mt++){ht=Bt[Mt].mipmaps;for(let Ct=0;Ct<ht.length;Ct++){const Dt=ht[Ct];A.format!==bi?Vt!==null?se?Z&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ct,0,0,Dt.width,Dt.height,Vt,Dt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ct,Jt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?Z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ct,0,0,Dt.width,Dt.height,Vt,Ot,Dt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ct,Jt,Dt.width,Dt.height,0,Vt,Ot,Dt.data)}}}else{if(ht=A.mipmaps,se&&Pe){ht.length>0&&Rt++;const Mt=Xt(Bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,Jt,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(At){se?Z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Bt[Mt].width,Bt[Mt].height,Vt,Ot,Bt[Mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Jt,Bt[Mt].width,Bt[Mt].height,0,Vt,Ot,Bt[Mt].data);for(let Ct=0;Ct<ht.length;Ct++){const te=ht[Ct].image[Mt].image;se?Z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ct+1,0,0,te.width,te.height,Vt,Ot,te.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ct+1,Jt,te.width,te.height,0,Vt,Ot,te.data)}}else{se?Z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Vt,Ot,Bt[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Jt,Vt,Ot,Bt[Mt]);for(let Ct=0;Ct<ht.length;Ct++){const Dt=ht[Ct];se?Z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ct+1,0,0,Vt,Ot,Dt.image[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ct+1,Jt,Vt,Ot,Dt.image[Mt])}}}S(A)&&_(r.TEXTURE_CUBE_MAP),yt.__version=bt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Et(N,A,it,gt,bt,yt){const Gt=c.convert(it.format,it.colorSpace),wt=c.convert(it.type),It=L(it.internalFormat,Gt,wt,it.colorSpace),me=s.get(A),At=s.get(it);if(At.__renderTarget=A,!me.__hasExternalTextures){const Bt=Math.max(1,A.width>>yt),Wt=Math.max(1,A.height>>yt);bt===r.TEXTURE_3D||bt===r.TEXTURE_2D_ARRAY?i.texImage3D(bt,yt,It,Bt,Wt,A.depth,0,Gt,wt,null):i.texImage2D(bt,yt,It,Bt,Wt,0,Gt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),pe(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,bt,At.__webglTexture,0,ue(A)):(bt===r.TEXTURE_2D||bt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,bt,At.__webglTexture,yt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(N,A,it){if(r.bindRenderbuffer(r.RENDERBUFFER,N),A.depthBuffer){const gt=A.depthTexture,bt=gt&&gt.isDepthTexture?gt.type:null,yt=D(A.stencilBuffer,bt),Gt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=ue(A);pe(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,yt,A.width,A.height):it?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,yt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,yt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Gt,r.RENDERBUFFER,N)}else{const gt=A.textures;for(let bt=0;bt<gt.length;bt++){const yt=gt[bt],Gt=c.convert(yt.format,yt.colorSpace),wt=c.convert(yt.type),It=L(yt.internalFormat,Gt,wt,yt.colorSpace),me=ue(A);it&&pe(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,It,A.width,A.height):pe(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,It,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,It,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(A.depthTexture);gt.__renderTarget=A,(!gt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pt(A.depthTexture,0);const bt=gt.__webglTexture,yt=ue(A);if(A.depthTexture.format===yr)pe(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,bt,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,bt,0);else if(A.depthTexture.format===Rr)pe(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,bt,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function kt(N){const A=s.get(N),it=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const gt=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),gt){const bt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,gt.removeEventListener("dispose",bt)};gt.addEventListener("dispose",bt),A.__depthDisposeCallback=bt}A.__boundDepthTexture=gt}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");zt(A.__webglFramebuffer,N)}else if(it){A.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[gt]),A.__webglDepthbuffer[gt]===void 0)A.__webglDepthbuffer[gt]=r.createRenderbuffer(),vt(A.__webglDepthbuffer[gt],N,!1);else{const bt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=A.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,yt),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,yt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),vt(A.__webglDepthbuffer,N,!1);else{const gt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,bt),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,bt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(N,A,it){const gt=s.get(N);A!==void 0&&Et(gt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&kt(N)}function Oe(N){const A=N.texture,it=s.get(N),gt=s.get(A);N.addEventListener("dispose",z);const bt=N.textures,yt=N.isWebGLCubeRenderTarget===!0,Gt=bt.length>1;if(Gt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=A.version,h.memory.textures++),yt){it.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer[wt]=[];for(let It=0;It<A.mipmaps.length;It++)it.__webglFramebuffer[wt][It]=r.createFramebuffer()}else it.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)it.__webglFramebuffer[wt]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if(Gt)for(let wt=0,It=bt.length;wt<It;wt++){const me=s.get(bt[wt]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),h.memory.textures++)}if(N.samples>0&&pe(N)===!1){it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let wt=0;wt<bt.length;wt++){const It=bt[wt];it.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[wt]);const me=c.convert(It.format,It.colorSpace),At=c.convert(It.type),Bt=L(It.internalFormat,me,At,It.colorSpace,N.isXRRenderTarget===!0),Wt=ue(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,Bt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,it.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),vt(it.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(yt){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),J(r.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let It=0;It<A.mipmaps.length;It++)Et(it.__webglFramebuffer[wt][It],N,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It);else Et(it.__webglFramebuffer[wt],N,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(A)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let wt=0,It=bt.length;wt<It;wt++){const me=bt[wt],At=s.get(me);i.bindTexture(r.TEXTURE_2D,At.__webglTexture),J(r.TEXTURE_2D,me),Et(it.__webglFramebuffer,N,me,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,0),S(me)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,gt.__webglTexture),J(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let It=0;It<A.mipmaps.length;It++)Et(it.__webglFramebuffer[It],N,A,r.COLOR_ATTACHMENT0,wt,It);else Et(it.__webglFramebuffer,N,A,r.COLOR_ATTACHMENT0,wt,0);S(A)&&_(wt),i.unbindTexture()}N.depthBuffer&&kt(N)}function Ge(N){const A=N.textures;for(let it=0,gt=A.length;it<gt;it++){const bt=A[it];if(S(bt)){const yt=I(N),Gt=s.get(bt).__webglTexture;i.bindTexture(yt,Gt),_(yt),i.unbindTexture()}}}const fe=[],V=[];function Tn(N){if(N.samples>0){if(pe(N)===!1){const A=N.textures,it=N.width,gt=N.height;let bt=r.COLOR_BUFFER_BIT;const yt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=s.get(N),wt=A.length>1;if(wt)for(let It=0;It<A.length;It++)i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let It=0;It<A.length;It++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(bt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(bt|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[It]);const me=s.get(A[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,it,gt,0,0,it,gt,bt,r.NEAREST),m===!0&&(fe.length=0,V.length=0,fe.push(r.COLOR_ATTACHMENT0+It),N.depthBuffer&&N.resolveDepthBuffer===!1&&(fe.push(yt),V.push(yt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,V)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let It=0;It<A.length;It++){i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[It]);const me=s.get(A[It]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,me,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const A=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function ue(N){return Math.min(l.maxSamples,N.samples)}function pe(N){const A=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function jt(N){const A=h.render.frame;g.get(N)!==A&&(g.set(N,A),N.update())}function Ue(N,A){const it=N.colorSpace,gt=N.format,bt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||it!==Cr&&it!==Fa&&(Ce.getTransfer(it)===He?(gt!==bi||bt!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),A}function Xt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=ut,this.setTexture2D=pt,this.setTexture2DArray=P,this.setTexture3D=F,this.setTextureCube=q,this.rebindTextures=Zt,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=pe}function FA(r,e){function i(s,l=Fa){let c;const h=Ce.getTransfer(l);if(s===ca)return r.UNSIGNED_BYTE;if(s===bd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Td)return r.UNSIGNED_SHORT_5_5_5_1;if(s===X_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===V_)return r.BYTE;if(s===k_)return r.SHORT;if(s===Oo)return r.UNSIGNED_SHORT;if(s===Ed)return r.INT;if(s===Ss)return r.UNSIGNED_INT;if(s===ra)return r.FLOAT;if(s===zo)return r.HALF_FLOAT;if(s===j_)return r.ALPHA;if(s===W_)return r.RGB;if(s===bi)return r.RGBA;if(s===q_)return r.LUMINANCE;if(s===Y_)return r.LUMINANCE_ALPHA;if(s===yr)return r.DEPTH_COMPONENT;if(s===Rr)return r.DEPTH_STENCIL;if(s===Z_)return r.RED;if(s===Ad)return r.RED_INTEGER;if(s===K_)return r.RG;if(s===Rd)return r.RG_INTEGER;if(s===Cd)return r.RGBA_INTEGER;if(s===Tc||s===Ac||s===Rc||s===Cc)if(h===He)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Tc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ac)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Tc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ac)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xh||s===jh||s===Wh||s===qh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Xh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yh||s===Zh||s===Kh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Yh||s===Zh)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Kh)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Qh)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jh)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$h)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===td)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ed)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===id)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ad)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===od)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ld)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ud)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wc||s===fd||s===hd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===wc)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Q_||s===dd||s===pd||s===md)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===wc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===dd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===md)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ar?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Dn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ka({vertexShader:HA,fragmentShader:GA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new zc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends Dr{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,y=null,M=null,E=null;const b=new VA,S=i.getContextAttributes();let _=null,I=null;const L=[],D=[],j=new De;let H=null;const z=new ni;z.viewport=new tn;const k=new ni;k.viewport=new tn;const w=[z,k],C=new uE;let G=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ft=L[W];return ft===void 0&&(ft=new Sh,L[W]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(W){let ft=L[W];return ft===void 0&&(ft=new Sh,L[W]=ft),ft.getGripSpace()},this.getHand=function(W){let ft=L[W];return ft===void 0&&(ft=new Sh,L[W]=ft),ft.getHandSpace()};function nt(W){const ft=D.indexOf(W.inputSource);if(ft===-1)return;const Et=L[ft];Et!==void 0&&(Et.update(W.inputSource,W.frame,p||h),Et.dispatchEvent({type:W.type,data:W.inputSource}))}function dt(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",pt);for(let W=0;W<L.length;W++){const ft=D[W];ft!==null&&(D[W]=null,L[W].disconnect(ft))}G=null,ut=null,b.reset(),e.setRenderTarget(_),M=null,y=null,v=null,l=null,I=null,xt.stop(),s.isPresenting=!1,e.setPixelRatio(H),e.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",pt),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,vt=null,zt=null;S.depth&&(zt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=S.stencil?Rr:yr,vt=S.stencil?Ar:Ss);const kt={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:c};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(kt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new Ms(y.textureWidth,y.textureHeight,{format:bi,type:ca,depthTexture:new dv(y.textureWidth,y.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const Et={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Ms(M.framebufferWidth,M.framebufferHeight,{format:bi,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function pt(W){for(let ft=0;ft<W.removed.length;ft++){const Et=W.removed[ft],vt=D.indexOf(Et);vt>=0&&(D[vt]=null,L[vt].disconnect(Et))}for(let ft=0;ft<W.added.length;ft++){const Et=W.added[ft];let vt=D.indexOf(Et);if(vt===-1){for(let kt=0;kt<L.length;kt++)if(kt>=D.length){D.push(Et),vt=kt;break}else if(D[kt]===null){D[kt]=Et,vt=kt;break}if(vt===-1)break}const zt=L[vt];zt&&zt.connect(Et)}}const P=new st,F=new st;function q(W,ft,Et){P.setFromMatrixPosition(ft.matrixWorld),F.setFromMatrixPosition(Et.matrixWorld);const vt=P.distanceTo(F),zt=ft.projectionMatrix.elements,kt=Et.projectionMatrix.elements,Zt=zt[14]/(zt[10]-1),Oe=zt[14]/(zt[10]+1),Ge=(zt[9]+1)/zt[5],fe=(zt[9]-1)/zt[5],V=(zt[8]-1)/zt[0],Tn=(kt[8]+1)/kt[0],ue=Zt*V,pe=Zt*Tn,jt=vt/(-V+Tn),Ue=jt*-V;if(ft.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ue),W.translateZ(jt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),zt[10]===-1)W.projectionMatrix.copy(ft.projectionMatrix),W.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Xt=Zt+jt,N=Oe+jt,A=ue-Ue,it=pe+(vt-Ue),gt=Ge*Oe/N*Xt,bt=fe*Oe/N*Xt;W.projectionMatrix.makePerspective(A,it,gt,bt,Xt,N),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function lt(W,ft){ft===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ft.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let ft=W.near,Et=W.far;b.texture!==null&&(b.depthNear>0&&(ft=b.depthNear),b.depthFar>0&&(Et=b.depthFar)),C.near=k.near=z.near=ft,C.far=k.far=z.far=Et,(G!==C.near||ut!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,ut=C.far),z.layers.mask=W.layers.mask|2,k.layers.mask=W.layers.mask|4,C.layers.mask=z.layers.mask|k.layers.mask;const vt=W.parent,zt=C.cameras;lt(C,vt);for(let kt=0;kt<zt.length;kt++)lt(zt[kt],vt);zt.length===2?q(C,z,k):C.projectionMatrix.copy(z.projectionMatrix),rt(W,C,vt)};function rt(W,ft,Et){Et===null?W.matrix.copy(ft.matrixWorld):(W.matrix.copy(Et.matrixWorld),W.matrix.invert(),W.matrix.multiply(ft.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ft.projectionMatrix),W.projectionMatrixInverse.copy(ft.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=gd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(W){m=W,y!==null&&(y.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let U=null;function J(W,ft){if(g=ft.getViewerPose(p||h),E=ft,g!==null){const Et=g.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let vt=!1;Et.length!==C.cameras.length&&(C.cameras.length=0,vt=!0);for(let Zt=0;Zt<Et.length;Zt++){const Oe=Et[Zt];let Ge=null;if(M!==null)Ge=M.getViewport(Oe);else{const V=v.getViewSubImage(y,Oe);Ge=V.viewport,Zt===0&&(e.setRenderTargetTextures(I,V.colorTexture,y.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(I))}let fe=w[Zt];fe===void 0&&(fe=new ni,fe.layers.enable(Zt),fe.viewport=new tn,w[Zt]=fe),fe.matrix.fromArray(Oe.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Oe.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Zt===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),vt===!0&&C.cameras.push(fe)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(Et[0]);Zt&&Zt.isValid&&Zt.texture&&b.init(e,Zt,l.renderState)}}for(let Et=0;Et<L.length;Et++){const vt=D[Et],zt=L[Et];vt!==null&&zt!==void 0&&zt.update(vt,ft,p||h)}U&&U(W,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),E=null}const xt=new xv;xt.setAnimationLoop(J),this.setAnimationLoop=function(W){U=W},this.dispose=function(){}}}const ps=new Pi,XA=new Ye;function jA(r,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,ov(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,I,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,D)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),b(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,I,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Xn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Xn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=e.get(_),L=I.envMap,D=I.envMapRotation;L&&(S.envMap.value=L,ps.copy(D),ps.x*=-1,ps.y*=-1,ps.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),S.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(ps)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,I,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function b(S,_){const I=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function WA(r,e,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,L){const D=L.program;s.uniformBlockBinding(I,D)}function p(I,L){let D=l[I.id];D===void 0&&(E(I),D=g(I),l[I.id]=D,I.addEventListener("dispose",S));const j=L.program;s.updateUBOMapping(I,j);const H=e.render.frame;c[I.id]!==H&&(y(I),c[I.id]=H)}function g(I){const L=v();I.__bindingPointIndex=L;const D=r.createBuffer(),j=I.__size,H=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,j,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function v(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const L=l[I.id],D=I.uniforms,j=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,z=D.length;H<z;H++){const k=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,C=k.length;w<C;w++){const G=k[w];if(M(G,H,w,j)===!0){const ut=G.__offset,nt=Array.isArray(G.value)?G.value:[G.value];let dt=0;for(let pt=0;pt<nt.length;pt++){const P=nt[pt],F=b(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,ut+dt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,dt),dt+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ut,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(I,L,D,j){const H=I.value,z=L+"_"+D;if(j[z]===void 0)return typeof H=="number"||typeof H=="boolean"?j[z]=H:j[z]=H.clone(),!0;{const k=j[z];if(typeof H=="number"||typeof H=="boolean"){if(k!==H)return j[z]=H,!0}else if(k.equals(H)===!1)return k.copy(H),!0}return!1}function E(I){const L=I.uniforms;let D=0;const j=16;for(let z=0,k=L.length;z<k;z++){const w=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,G=w.length;C<G;C++){const ut=w[C],nt=Array.isArray(ut.value)?ut.value:[ut.value];for(let dt=0,pt=nt.length;dt<pt;dt++){const P=nt[dt],F=b(P),q=D%j,lt=q%F.boundary,rt=q+lt;D+=lt,rt!==0&&j-rt<F.storage&&(D+=j-rt),ut.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=D,D+=F.storage}}}const H=D%j;return H>0&&(D+=j-H),I.__size=D,I.__cache={},this}function b(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function S(I){const L=I.target;L.removeEventListener("dispose",S);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const I in l)r.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class bv{constructor(e={}){const{canvas:i=EM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,_=null;const I=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=Ga,this.toneMappingExposure=1;const D=this;let j=!1,H=0,z=0,k=null,w=-1,C=null;const G=new tn,ut=new tn;let nt=null;const dt=new be(0);let pt=0,P=i.width,F=i.height,q=1,lt=null,rt=null;const U=new tn(0,0,P,F),J=new tn(0,0,P,F);let xt=!1;const W=new Ud;let ft=!1,Et=!1;this.transmissionResolutionScale=1;const vt=new Ye,zt=new Ye,kt=new st,Zt=new tn,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function fe(){return k===null?q:1}let V=s;function Tn(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Md}`),i.addEventListener("webglcontextlost",Mt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),V===null){const K="webgl2";if(V=Tn(K,R),V===null)throw Tn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ue,pe,jt,Ue,Xt,N,A,it,gt,bt,yt,Gt,wt,It,me,At,Bt,Wt,Vt,Ot,Jt,se,Pe,Z;function Rt(){ue=new iT(V),ue.init(),se=new FA(V,ue),pe=new Qb(V,ue,e,se),jt=new IA(V,ue),pe.reverseDepthBuffer&&y&&jt.buffers.depth.setReversed(!0),Ue=new rT(V),Xt=new bA,N=new BA(V,ue,jt,Xt,pe,se,Ue),A=new $b(D),it=new nT(D),gt=new dE(V),Pe=new Zb(V,gt),bt=new aT(V,gt,Ue,Pe),yt=new lT(V,bt,gt,Ue),Vt=new oT(V,pe,N),At=new Jb(Xt),Gt=new EA(D,A,it,ue,pe,Pe,At),wt=new jA(D,Xt),It=new AA,me=new NA(ue),Wt=new Yb(D,A,it,jt,yt,M,m),Bt=new PA(D,yt,pe),Z=new WA(V,Ue,pe,jt),Ot=new Kb(V,ue,Ue),Jt=new sT(V,ue,Ue),Ue.programs=Gt.programs,D.capabilities=pe,D.extensions=ue,D.properties=Xt,D.renderLists=It,D.shadowMap=Bt,D.state=jt,D.info=Ue}Rt();const ht=new kA(D,V);this.xr=ht,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(P,F,!1))},this.getSize=function(R){return R.set(P,F)},this.setSize=function(R,K,at=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,F=K,i.width=Math.floor(R*q),i.height=Math.floor(K*q),at===!0&&(i.style.width=R+"px",i.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(P*q,F*q).floor()},this.setDrawingBufferSize=function(R,K,at){P=R,F=K,q=at,i.width=Math.floor(R*at),i.height=Math.floor(K*at),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,K,at,ot){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,K,at,ot),jt.viewport(G.copy(U).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,K,at,ot){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,K,at,ot),jt.scissor(ut.copy(J).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){jt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){lt=R},this.setTransparentSort=function(R){rt=R},this.getClearColor=function(R){return R.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(R=!0,K=!0,at=!0){let ot=0;if(R){let Y=!1;if(k!==null){const Tt=k.texture.format;Y=Tt===Cd||Tt===Rd||Tt===Ad}if(Y){const Tt=k.texture.type,Ut=Tt===ca||Tt===Ss||Tt===Oo||Tt===Ar||Tt===bd||Tt===Td,Lt=Wt.getClearColor(),Pt=Wt.getClearAlpha(),ee=Lt.r,ne=Lt.g,qt=Lt.b;Ut?(E[0]=ee,E[1]=ne,E[2]=qt,E[3]=Pt,V.clearBufferuiv(V.COLOR,0,E)):(b[0]=ee,b[1]=ne,b[2]=qt,b[3]=Pt,V.clearBufferiv(V.COLOR,0,b))}else ot|=V.COLOR_BUFFER_BIT}K&&(ot|=V.DEPTH_BUFFER_BIT),at&&(ot|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Mt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Wt.dispose(),It.dispose(),me.dispose(),Xt.dispose(),A.dispose(),it.dispose(),yt.dispose(),Pe.dispose(),Z.dispose(),Gt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Nr),ht.removeEventListener("sessionend",Lr),Ri.stop()};function Mt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const R=Ue.autoReset,K=Bt.enabled,at=Bt.autoUpdate,ot=Bt.needsUpdate,Y=Bt.type;Rt(),Ue.autoReset=R,Bt.enabled=K,Bt.autoUpdate=at,Bt.needsUpdate=ot,Bt.type=Y}function Dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function te(R){const K=R.target;K.removeEventListener("dispose",te),We(K)}function We(R){cn(R),Xt.remove(R)}function cn(R){const K=Xt.get(R).programs;K!==void 0&&(K.forEach(function(at){Gt.releaseProgram(at)}),R.isShaderMaterial&&Gt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,at,ot,Y,Tt){K===null&&(K=Oe);const Ut=Y.isMesh&&Y.matrixWorld.determinant()<0,Lt=Pr(R,K,at,ot,Y);jt.setMaterial(ot,Ut);let Pt=at.index,ee=1;if(ot.wireframe===!0){if(Pt=bt.getWireframeAttribute(at),Pt===void 0)return;ee=2}const ne=at.drawRange,qt=at.attributes.position;let ve=ne.start*ee,xe=(ne.start+ne.count)*ee;Tt!==null&&(ve=Math.max(ve,Tt.start*ee),xe=Math.min(xe,(Tt.start+Tt.count)*ee)),Pt!==null?(ve=Math.max(ve,0),xe=Math.min(xe,Pt.count)):qt!=null&&(ve=Math.max(ve,0),xe=Math.min(xe,qt.count));const ke=xe-ve;if(ke<0||ke===1/0)return;Pe.setup(Y,ot,Lt,at,Pt);let Te,ie=Ot;if(Pt!==null&&(Te=gt.get(Pt),ie=Jt,ie.setIndex(Te)),Y.isMesh)ot.wireframe===!0?(jt.setLineWidth(ot.wireframeLinewidth*fe()),ie.setMode(V.LINES)):ie.setMode(V.TRIANGLES);else if(Y.isLine){let Kt=ot.linewidth;Kt===void 0&&(Kt=1),jt.setLineWidth(Kt*fe()),Y.isLineSegments?ie.setMode(V.LINES):Y.isLineLoop?ie.setMode(V.LINE_LOOP):ie.setMode(V.LINE_STRIP)}else Y.isPoints?ie.setMode(V.POINTS):Y.isSprite&&ie.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ie.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ie.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,un=Y._multiDrawCounts,Me=Y._multiDrawCount,Pn=Pt?gt.get(Pt).bytesPerElement:1,gi=Xt.get(ot).currentProgram.getUniforms();for(let Un=0;Un<Me;Un++)gi.setValue(V,"_gl_DrawID",Un),ie.render(Kt[Un]/Pn,un[Un])}else if(Y.isInstancedMesh)ie.renderInstances(ve,ke,Y.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,un=Math.min(at.instanceCount,Kt);ie.renderInstances(ve,ke,un)}else ie.render(ve,ke)};function Ee(R,K,at){R.transparent===!0&&R.side===Li&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Ke(R,K,at),R.side=Va,R.needsUpdate=!0,Ke(R,K,at),R.side=Li):Ke(R,K,at)}this.compile=function(R,K,at=null){at===null&&(at=R),_=me.get(at),_.init(K),L.push(_),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),R!==at&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const ot=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Lt=Tt[Ut];Ee(Lt,at,Y),ot.add(Lt)}else Ee(Tt,at,Y),ot.add(Tt)}),L.pop(),_=null,ot},this.compileAsync=function(R,K,at=null){const ot=this.compile(R,K,at);return new Promise(Y=>{function Tt(){if(ot.forEach(function(Ut){Xt.get(Ut).currentProgram.isReady()&&ot.delete(Ut)}),ot.size===0){Y(R);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let vn=null;function pi(R){vn&&vn(R)}function Nr(){Ri.stop()}function Lr(){Ri.start()}const Ri=new xv;Ri.setAnimationLoop(pi),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(R){vn=R,ht.setAnimationLoop(R),R===null?Ri.stop():Ri.start()},ht.addEventListener("sessionstart",Nr),ht.addEventListener("sessionend",Lr),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(K),K=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,K,k),_=me.get(R,L.length),_.init(K),L.push(_),zt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W.setFromProjectionMatrix(zt),Et=this.localClippingEnabled,ft=At.init(this.clippingPlanes,Et),S=It.get(R,I.length),S.init(),I.push(S),ht.enabled===!0&&ht.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Xa(Tt,K,-1/0,D.sortObjects)}Xa(R,K,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(lt,rt),Ge=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Ge&&Wt.addToRenderList(S,R),this.info.render.frame++,ft===!0&&At.beginShadows();const at=_.state.shadowsArray;Bt.render(at,R,K),ft===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=S.opaque,Y=S.transmissive;if(_.setupLights(),K.isArrayCamera){const Tt=K.cameras;if(Y.length>0)for(let Ut=0,Lt=Tt.length;Ut<Lt;Ut++){const Pt=Tt[Ut];Or(ot,Y,R,Pt)}Ge&&Wt.render(R);for(let Ut=0,Lt=Tt.length;Ut<Lt;Ut++){const Pt=Tt[Ut];bs(S,R,Pt,Pt.viewport)}}else Y.length>0&&Or(ot,Y,R,K),Ge&&Wt.render(R),bs(S,R,K);k!==null&&z===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(D,R,K),Pe.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],ft===!0&&At.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Xa(R,K,at,ot){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){ot&&Zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(zt);const Ut=yt.update(R),Lt=R.material;Lt.visible&&S.push(R,Ut,Lt,at,Zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const Ut=yt.update(R),Lt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Zt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Zt.copy(Ut.boundingSphere.center)),Zt.applyMatrix4(R.matrixWorld).applyMatrix4(zt)),Array.isArray(Lt)){const Pt=Ut.groups;for(let ee=0,ne=Pt.length;ee<ne;ee++){const qt=Pt[ee],ve=Lt[qt.materialIndex];ve&&ve.visible&&S.push(R,Ut,ve,at,Zt.z,qt)}}else Lt.visible&&S.push(R,Ut,Lt,at,Zt.z,null)}}const Tt=R.children;for(let Ut=0,Lt=Tt.length;Ut<Lt;Ut++)Xa(Tt[Ut],K,at,ot)}function bs(R,K,at,ot){const Y=R.opaque,Tt=R.transmissive,Ut=R.transparent;_.setupLightsView(at),ft===!0&&At.setGlobalState(D.clippingPlanes,at),ot&&jt.viewport(G.copy(ot)),Y.length>0&&ja(Y,K,at),Tt.length>0&&ja(Tt,K,at),Ut.length>0&&ja(Ut,K,at),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Or(R,K,at,ot){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ot.id]===void 0&&(_.state.transmissionRenderTarget[ot.id]=new Ms(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?zo:ca,minFilter:ys,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[ot.id],Ut=ot.viewport||G;Tt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Lt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(dt),pt=D.getClearAlpha(),pt<1&&D.setClearColor(16777215,.5),D.clear(),Ge&&Wt.render(at);const Pt=D.toneMapping;D.toneMapping=Ga;const ee=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),_.setupLightsView(ot),ft===!0&&At.setGlobalState(D.clippingPlanes,ot),ja(R,at,ot),N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let qt=0,ve=K.length;qt<ve;qt++){const xe=K[qt],ke=xe.object,Te=xe.geometry,ie=xe.material,Kt=xe.group;if(ie.side===Li&&ke.layers.test(ot.layers)){const un=ie.side;ie.side=Xn,ie.needsUpdate=!0,mi(ke,at,ot,Te,ie,Kt),ie.side=un,ie.needsUpdate=!0,ne=!0}}ne===!0&&(N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Lt),D.setClearColor(dt,pt),ee!==void 0&&(ot.viewport=ee),D.toneMapping=Pt}function ja(R,K,at){const ot=K.isScene===!0?K.overrideMaterial:null;for(let Y=0,Tt=R.length;Y<Tt;Y++){const Ut=R[Y],Lt=Ut.object,Pt=Ut.geometry,ee=ot===null?Ut.material:ot,ne=Ut.group;Lt.layers.test(at.layers)&&mi(Lt,K,at,Pt,ee,ne)}}function mi(R,K,at,ot,Y,Tt){R.onBeforeRender(D,K,at,ot,Y,Tt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(D,K,at,ot,R,Tt),Y.transparent===!0&&Y.side===Li&&Y.forceSinglePass===!1?(Y.side=Xn,Y.needsUpdate=!0,D.renderBufferDirect(at,K,ot,Y,R,Tt),Y.side=Va,Y.needsUpdate=!0,D.renderBufferDirect(at,K,ot,Y,R,Tt),Y.side=Li):D.renderBufferDirect(at,K,ot,Y,R,Tt),R.onAfterRender(D,K,at,ot,Y,Tt)}function Ke(R,K,at){K.isScene!==!0&&(K=Oe);const ot=Xt.get(R),Y=_.state.lights,Tt=_.state.shadowsArray,Ut=Y.state.version,Lt=Gt.getParameters(R,Y.state,Tt,K,at),Pt=Gt.getProgramCacheKey(Lt);let ee=ot.programs;ot.environment=R.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(R.isMeshStandardMaterial?it:A).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",te),ee=new Map,ot.programs=ee);let ne=ee.get(Pt);if(ne!==void 0){if(ot.currentProgram===ne&&ot.lightsStateVersion===Ut)return zi(R,Lt),ne}else Lt.uniforms=Gt.getUniforms(R),R.onBeforeCompile(Lt,D),ne=Gt.acquireProgram(Lt,Pt),ee.set(Pt,ne),ot.uniforms=Lt.uniforms;const qt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=At.uniform),zi(R,Lt),ot.needsLights=Hc(R),ot.lightsStateVersion=Ut,ot.needsLights&&(qt.ambientLightColor.value=Y.state.ambient,qt.lightProbe.value=Y.state.probe,qt.directionalLights.value=Y.state.directional,qt.directionalLightShadows.value=Y.state.directionalShadow,qt.spotLights.value=Y.state.spot,qt.spotLightShadows.value=Y.state.spotShadow,qt.rectAreaLights.value=Y.state.rectArea,qt.ltc_1.value=Y.state.rectAreaLTC1,qt.ltc_2.value=Y.state.rectAreaLTC2,qt.pointLights.value=Y.state.point,qt.pointLightShadows.value=Y.state.pointShadow,qt.hemisphereLights.value=Y.state.hemi,qt.directionalShadowMap.value=Y.state.directionalShadowMap,qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qt.spotShadowMap.value=Y.state.spotShadowMap,qt.spotLightMatrix.value=Y.state.spotLightMatrix,qt.spotLightMap.value=Y.state.spotLightMap,qt.pointShadowMap.value=Y.state.pointShadowMap,qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),ot.currentProgram=ne,ot.uniformsList=null,ne}function xn(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Dc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function zi(R,K){const at=Xt.get(R);at.outputColorSpace=K.outputColorSpace,at.batching=K.batching,at.batchingColor=K.batchingColor,at.instancing=K.instancing,at.instancingColor=K.instancingColor,at.instancingMorph=K.instancingMorph,at.skinning=K.skinning,at.morphTargets=K.morphTargets,at.morphNormals=K.morphNormals,at.morphColors=K.morphColors,at.morphTargetsCount=K.morphTargetsCount,at.numClippingPlanes=K.numClippingPlanes,at.numIntersection=K.numClipIntersection,at.vertexAlphas=K.vertexAlphas,at.vertexTangents=K.vertexTangents,at.toneMapping=K.toneMapping}function Pr(R,K,at,ot,Y){K.isScene!==!0&&(K=Oe),N.resetTextureUnits();const Tt=K.fog,Ut=ot.isMeshStandardMaterial?K.environment:null,Lt=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Cr,Pt=(ot.isMeshStandardMaterial?it:A).get(ot.envMap||Ut),ee=ot.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ne=!!at.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),qt=!!at.morphAttributes.position,ve=!!at.morphAttributes.normal,xe=!!at.morphAttributes.color;let ke=Ga;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ke=D.toneMapping);const Te=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ie=Te!==void 0?Te.length:0,Kt=Xt.get(ot),un=_.state.lights;if(ft===!0&&(Et===!0||R!==C)){const Qe=R===C&&ot.id===w;At.setState(ot,R,Qe)}let Me=!1;ot.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==un.state.version||Kt.outputColorSpace!==Lt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isBatchedMesh&&Kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Kt.instancingMorph===!1&&Y.morphTexture!==null||Kt.envMap!==Pt||ot.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==At.numPlanes||Kt.numIntersection!==At.numIntersection)||Kt.vertexAlphas!==ee||Kt.vertexTangents!==ne||Kt.morphTargets!==qt||Kt.morphNormals!==ve||Kt.morphColors!==xe||Kt.toneMapping!==ke||Kt.morphTargetsCount!==ie)&&(Me=!0):(Me=!0,Kt.__version=ot.version);let Pn=Kt.currentProgram;Me===!0&&(Pn=Ke(ot,K,Y));let gi=!1,Un=!1,pn=!1;const ze=Pn.getUniforms(),Nn=Kt.uniforms;if(jt.useProgram(Pn.program)&&(gi=!0,Un=!0,pn=!0),ot.id!==w&&(w=ot.id,Un=!0),gi||C!==R){jt.buffers.depth.getReversed()?(vt.copy(R.projectionMatrix),TM(vt),AM(vt),ze.setValue(V,"projectionMatrix",vt)):ze.setValue(V,"projectionMatrix",R.projectionMatrix),ze.setValue(V,"viewMatrix",R.matrixWorldInverse);const yn=ze.map.cameraPosition;yn!==void 0&&yn.setValue(V,kt.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&ze.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ze.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Un=!0,pn=!0)}if(Y.isSkinnedMesh){ze.setOptional(V,Y,"bindMatrix"),ze.setOptional(V,Y,"bindMatrixInverse");const Qe=Y.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ze.setValue(V,"boneTexture",Qe.boneTexture,N))}Y.isBatchedMesh&&(ze.setOptional(V,Y,"batchingTexture"),ze.setValue(V,"batchingTexture",Y._matricesTexture,N),ze.setOptional(V,Y,"batchingIdTexture"),ze.setValue(V,"batchingIdTexture",Y._indirectTexture,N),ze.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ze.setValue(V,"batchingColorTexture",Y._colorsTexture,N));const An=at.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Vt.update(Y,at,Pn),(Un||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,ze.setValue(V,"receiveShadow",Y.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Nn.envMap.value=Pt,Nn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(Nn.envMapIntensity.value=K.environmentIntensity),Un&&(ze.setValue(V,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&Fc(Nn,pn),Tt&&ot.fog===!0&&wt.refreshFogUniforms(Nn,Tt),wt.refreshMaterialUniforms(Nn,ot,q,F,_.state.transmissionRenderTarget[R.id]),Dc.upload(V,xn(Kt),Nn,N)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Dc.upload(V,xn(Kt),Nn,N),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ze.setValue(V,"center",Y.center),ze.setValue(V,"modelViewMatrix",Y.modelViewMatrix),ze.setValue(V,"normalMatrix",Y.normalMatrix),ze.setValue(V,"modelMatrix",Y.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Qe=ot.uniformsGroups;for(let yn=0,Ts=Qe.length;yn<Ts;yn++){const zn=Qe[yn];Z.update(zn,Pn),Z.bind(zn,Pn)}}return Pn}function Fc(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Hc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,K,at){Xt.get(R.texture).__webglTexture=K,Xt.get(R.depthTexture).__webglTexture=at;const ot=Xt.get(R);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=at===void 0,ot.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){const at=Xt.get(R);at.__webglFramebuffer=K,at.__useDefaultFramebuffer=K===void 0};const Vo=V.createFramebuffer();this.setRenderTarget=function(R,K=0,at=0){k=R,H=K,z=at;let ot=!0,Y=null,Tt=!1,Ut=!1;if(R){const Pt=Xt.get(R);if(Pt.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(V.FRAMEBUFFER,null),ot=!1;else if(Pt.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Pt.__hasExternalTextures)N.rebindTextures(R,Xt.get(R.texture).__webglTexture,Xt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Pt.__boundDepthTexture!==qt){if(qt!==null&&Xt.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ut=!0);const ne=Xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[K])?Y=ne[K][at]:Y=ne[K],Tt=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?Y=Xt.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?Y=ne[at]:Y=ne,G.copy(R.viewport),ut.copy(R.scissor),nt=R.scissorTest}else G.copy(U).multiplyScalar(q).floor(),ut.copy(J).multiplyScalar(q).floor(),nt=xt;if(at!==0&&(Y=Vo),jt.bindFramebuffer(V.FRAMEBUFFER,Y)&&ot&&jt.drawBuffers(R,Y),jt.viewport(G),jt.scissor(ut),jt.setScissorTest(nt),Tt){const Pt=Xt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pt.__webglTexture,at)}else if(Ut){const Pt=Xt.get(R.texture),ee=K;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pt.__webglTexture,at,ee)}else if(R!==null&&at!==0){const Pt=Xt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(R,K,at,ot,Y,Tt,Ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){jt.bindFramebuffer(V.FRAMEBUFFER,Lt);try{const Pt=R.texture,ee=Pt.format,ne=Pt.type;if(!pe.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ot&&at>=0&&at<=R.height-Y&&V.readPixels(K,at,ot,Y,se.convert(ee),se.convert(ne),Tt)}finally{const Pt=k!==null?Xt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(V.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,K,at,ot,Y,Tt,Ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){const Pt=R.texture,ee=Pt.format,ne=Pt.type;if(!pe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-ot&&at>=0&&at<=R.height-Y){jt.bindFramebuffer(V.FRAMEBUFFER,Lt);const qt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,qt),V.bufferData(V.PIXEL_PACK_BUFFER,Tt.byteLength,V.STREAM_READ),V.readPixels(K,at,ot,Y,se.convert(ee),se.convert(ne),0);const ve=k!==null?Xt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(V.FRAMEBUFFER,ve);const xe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await bM(V,xe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,qt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Tt),V.deleteBuffer(qt),V.deleteSync(xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,at=0){R.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);const ot=Math.pow(2,-at),Y=Math.floor(R.image.width*ot),Tt=Math.floor(R.image.height*ot),Ut=K!==null?K.x:0,Lt=K!==null?K.y:0;N.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,at,0,0,Ut,Lt,Y,Tt),jt.unbindTexture()};const Wa=V.createFramebuffer(),zr=V.createFramebuffer();this.copyTextureToTexture=function(R,K,at=null,ot=null,Y=0,Tt=null){R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,R=arguments[1],K=arguments[2],Tt=arguments[3]||0,at=null),Tt===null&&(Y!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Y,Y=0):Tt=0);let Ut,Lt,Pt,ee,ne,qt,ve,xe,ke;const Te=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(at!==null)Ut=at.max.x-at.min.x,Lt=at.max.y-at.min.y,Pt=at.isBox3?at.max.z-at.min.z:1,ee=at.min.x,ne=at.min.y,qt=at.isBox3?at.min.z:0;else{const An=Math.pow(2,-Y);Ut=Math.floor(Te.width*An),Lt=Math.floor(Te.height*An),R.isDataArrayTexture?Pt=Te.depth:R.isData3DTexture?Pt=Math.floor(Te.depth*An):Pt=1,ee=0,ne=0,qt=0}ot!==null?(ve=ot.x,xe=ot.y,ke=ot.z):(ve=0,xe=0,ke=0);const ie=se.convert(K.format),Kt=se.convert(K.type);let un;K.isData3DTexture?(N.setTexture3D(K,0),un=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(N.setTexture2DArray(K,0),un=V.TEXTURE_2D_ARRAY):(N.setTexture2D(K,0),un=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const Me=V.getParameter(V.UNPACK_ROW_LENGTH),Pn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),gi=V.getParameter(V.UNPACK_SKIP_PIXELS),Un=V.getParameter(V.UNPACK_SKIP_ROWS),pn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Te.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Te.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ee),V.pixelStorei(V.UNPACK_SKIP_ROWS,ne),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qt);const ze=R.isDataArrayTexture||R.isData3DTexture,Nn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const An=Xt.get(R),Qe=Xt.get(K),yn=Xt.get(An.__renderTarget),Ts=Xt.get(Qe.__renderTarget);jt.bindFramebuffer(V.READ_FRAMEBUFFER,yn.__webglFramebuffer),jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let zn=0;zn<Pt;zn++)ze&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xt.get(R).__webglTexture,Y,qt+zn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xt.get(K).__webglTexture,Tt,ke+zn)),V.blitFramebuffer(ee,ne,Ut,Lt,ve,xe,Ut,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);jt.bindFramebuffer(V.READ_FRAMEBUFFER,null),jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||Xt.has(R)){const An=Xt.get(R),Qe=Xt.get(K);jt.bindFramebuffer(V.READ_FRAMEBUFFER,Wa),jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,zr);for(let yn=0;yn<Pt;yn++)ze?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,Y,qt+yn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,Y),Nn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,ke+yn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Qe.__webglTexture,Tt),Y!==0?V.blitFramebuffer(ee,ne,Ut,Lt,ve,xe,Ut,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):Nn?V.copyTexSubImage3D(un,Tt,ve,xe,ke+yn,ee,ne,Ut,Lt):V.copyTexSubImage2D(un,Tt,ve,xe,ee,ne,Ut,Lt);jt.bindFramebuffer(V.READ_FRAMEBUFFER,null),jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(un,Tt,ve,xe,ke,Ut,Lt,Pt,ie,Kt,Te.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(un,Tt,ve,xe,ke,Ut,Lt,Pt,ie,Te.data):V.texSubImage3D(un,Tt,ve,xe,ke,Ut,Lt,Pt,ie,Kt,Te):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Tt,ve,xe,Ut,Lt,ie,Kt,Te.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Tt,ve,xe,Te.width,Te.height,ie,Te.data):V.texSubImage2D(V.TEXTURE_2D,Tt,ve,xe,Ut,Lt,ie,Kt,Te);V.pixelStorei(V.UNPACK_ROW_LENGTH,Me),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,gi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Un),V.pixelStorei(V.UNPACK_SKIP_IMAGES,pn),Tt===0&&K.generateMipmaps&&V.generateMipmap(un),jt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,at=null,ot=null,Y=0){return R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,ot=arguments[1]||null,R=arguments[2],K=arguments[3],Y=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,at,ot,Y)},this.initRenderTarget=function(R){Xt.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){H=0,z=0,k=null,jt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const qA=({appState:r="PRE_FLIGHT"})=>{const e=$t.useRef(null),i=$t.useRef(null),s=$t.useRef({x:0,y:-3.1,z:0,scale:1});return $t.useEffect(()=>{r==="PRE_FLIGHT"?s.current={x:0,y:-3.5,z:0,scale:1}:r==="PROCESSING"?s.current={x:0,y:-.5,z:.5,scale:.85}:s.current={x:2.8,y:-.6,z:-1.2,scale:.65}},[r]),$t.useEffect(()=>{const l=e.current;if(!l)return;const c=window.innerWidth,h=window.innerHeight,d=new uv,m=new ni(45,c/h,.1,1e3);m.position.z=5.2;const p=new bv({alpha:!0,antialias:!0});p.setSize(c,h),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(p.domElement);const g=new oE,v=g.load("/assets/nasa-lroc-color-2k.jpg"),y=g.load("/assets/nasa-lola-height-1k.jpg");v.colorSpace=ei,v.anisotropy=p.capabilities.getMaxAnisotropy(),y.anisotropy=p.capabilities.getMaxAnisotropy();const M=new Ic(4.15,128,128),E=new pv({map:v,bumpMap:y,bumpScale:.14,displacementMap:y,displacementScale:.035,roughness:.98,metalness:0}),b=new di(M,E);b.position.set(s.current.x,s.current.y,s.current.z),d.add(b),i.current=b;const S=new _v(14209217,1.35);S.position.set(-3.5,5,3),d.add(S);const _=new vv(131586,.025);d.add(_);const I=(lt,rt,U,J)=>{const xt=new Float32Array(lt*3);for(let vt=0;vt<lt*3;vt+=3)xt[vt]=(Math.random()-.5)*23,xt[vt+1]=(Math.random()-.5)*16,xt[vt+2]=-J-Math.random()*3;const W=new ii;W.setAttribute("position",new Ai(xt,3));const ft=new hv({color:15788767,size:rt,transparent:!0,opacity:U,sizeAttenuation:!0}),Et=new tE(W,ft);return d.add(Et),{geometry:W,material:ft}},L=[I(700,.014,.42,4),I(150,.03,.72,2)],D=[];for(let lt=0;lt<3;lt++){const rt=new ii().setFromPoints([new st(1.05,.38,0),new st(0,0,0)]),U=new fv({color:16183523,transparent:!0,opacity:0}),J=new $M(rt,U);J.position.set((Math.random()-.5)*10,(Math.random()-.5)*7,-2.5),d.add(J),D.push({streak:J,material:U,delay:3+Math.random()*8,speed:.045+Math.random()*.025,age:0,duration:.65+Math.random()*.45})}let j=!1,H={x:0,y:0},z={x:0,y:0},k=0,w=0,C=0,G=0;const ut=lt=>{const rt=lt.target;rt&&(rt.tagName==="BUTTON"||rt.tagName==="INPUT"||rt.closest("button")||rt.closest(".pointer-events-auto"))||(j=!0,H={x:lt.clientX,y:lt.clientY})},nt=lt=>{if(k=(lt.clientX/window.innerWidth-.5)*2,w=(lt.clientY/window.innerHeight-.5)*2,j&&b){const rt=lt.clientX-H.x,U=lt.clientY-H.y;z.x=rt*.004,z.y=U*.004,b.rotation.y+=z.x,b.rotation.x+=z.y,H={x:lt.clientX,y:lt.clientY}}},dt=()=>{j=!1};window.addEventListener("mousedown",ut),window.addEventListener("mousemove",nt),window.addEventListener("mouseup",dt);let pt;const P=new fE,F=()=>{pt=requestAnimationFrame(F);const lt=Math.min(P.getDelta(),.05);C+=(k-C)*.03,G+=(w-G)*.03,b&&(j||(z.x*=.95,z.y*=.95,b.rotation.y+=z.x+8e-4,b.rotation.x+=z.y),b.position.x+=(s.current.x+C*.15-b.position.x)*.05,b.position.y+=(s.current.y-G*.1-b.position.y)*.05,b.position.z+=(s.current.z-b.position.z)*.05),L[1].material.opacity=.62+Math.sin(P.elapsedTime*.7)*.12,D.forEach(rt=>{if(rt.delay-=lt,rt.delay>0)return;rt.age+=lt;const U=rt.age/rt.duration,J=Math.pow(Math.sin(Math.min(U,1)*Math.PI),.55);rt.streak.position.x-=rt.speed*60*lt,rt.streak.position.y-=rt.speed*22*lt,rt.material.opacity=J*.82,U>=1&&(rt.streak.position.set((Math.random()-.5)*10,(Math.random()-.5)*7,-2.5),rt.material.opacity=0,rt.age=0,rt.delay=5+Math.random()*11,rt.duration=.65+Math.random()*.45)}),p.render(d,m)};F();const q=()=>{if(!l)return;const lt=window.innerWidth,rt=window.innerHeight;m.aspect=lt/rt,m.updateProjectionMatrix(),p.setSize(lt,rt)};return window.addEventListener("resize",q),()=>{cancelAnimationFrame(pt),window.removeEventListener("mousedown",ut),window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",dt),window.removeEventListener("resize",q),l.contains(p.domElement)&&l.removeChild(p.domElement),p.dispose(),v.dispose(),y.dispose(),L.forEach(({geometry:lt,material:rt})=>{lt.dispose(),rt.dispose()}),D.forEach(({streak:lt,material:rt})=>{lt.geometry.dispose(),rt.dispose()})}},[]),O.jsx("div",{className:"fixed inset-0 z-0 overflow-hidden bg-[#010101]",children:O.jsx("div",{ref:e,className:"absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"})})},YA=({toasts:r,onDismiss:e})=>O.jsx("div",{className:"fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none",children:r.map(i=>O.jsx(ZA,{toast:i,onDismiss:e},i.id))}),ZA=({toast:r,onDismiss:e})=>{$t.useEffect(()=>{const l=setTimeout(()=>{e(r.id)},4500);return()=>clearTimeout(l)},[r.id,e]);const i={success:O.jsx(nS,{className:"w-5 h-5 text-emerald-400 shrink-0"}),info:O.jsx(_S,{className:"w-5 h-5 text-cyan-400 shrink-0"}),warning:O.jsx(Tg,{className:"w-5 h-5 text-amber-400 shrink-0"}),error:O.jsx(Tg,{className:"w-5 h-5 text-rose-400 shrink-0"})},s={success:"border-emerald-500/40 shadow-emerald-950/40",info:"border-cyan-500/40 shadow-cyan-950/40",warning:"border-amber-500/40 shadow-amber-950/40",error:"border-rose-500/40 shadow-rose-950/40"};return O.jsxs("div",{className:`pointer-events-auto flex items-start gap-3 p-4 rounded-xl glass-panel ${s[r.type]} border shadow-xl transition-all duration-300 transform translate-y-0`,children:[i[r.type],O.jsxs("div",{className:"flex-1 min-w-0",children:[O.jsx("div",{className:"text-xs font-mono font-semibold tracking-wider uppercase text-slate-200",children:r.title}),O.jsx("div",{className:"text-xs text-slate-400 font-mono mt-0.5 break-words",children:r.description})]}),O.jsx("button",{onClick:()=>e(r.id),className:"text-slate-400 hover:text-white p-1 rounded transition-colors",children:O.jsx(B_,{className:"w-4 h-4"})})]})},KA=({onFileSelected:r,onDemoSelected:e,disabled:i=!1})=>{const[s,l]=$t.useState(!1),c=$t.useRef(null),h=g=>{g.preventDefault(),i||l(!0)},d=()=>{l(!1)},m=g=>{g.preventDefault(),l(!1),!i&&g.dataTransfer.files&&g.dataTransfer.files.length>0&&r(g.dataTransfer.files[0])},p=g=>{!i&&g.target.files&&g.target.files.length>0&&r(g.target.files[0])};return O.jsxs("div",{className:"w-full max-w-lg space-y-4",children:[O.jsxs("div",{onDragOver:h,onDragLeave:d,onDrop:m,onClick:()=>{var g;return!i&&((g=c.current)==null?void 0:g.click())},className:`group relative cursor-pointer rounded-sm p-7 transition-all duration-300 backdrop-blur-2xl border ${i?"border-white/10 bg-[#0b0b0a]/50 opacity-60 cursor-not-allowed":s?"border-stone-300/80 bg-stone-900/50 shadow-2xl scale-[1.01]":"border-white/15 bg-[#0b0b0a]/75 hover:border-stone-300/40 hover:bg-[#11110f]/85 shadow-2xl shadow-black/60"}`,children:[O.jsx("input",{ref:c,type:"file",accept:".zip,.xml,.img,.raw,.png,.jpg,.jpeg,.tif,.tiff",className:"hidden",onChange:p,disabled:i}),O.jsxs("div",{className:"flex items-start gap-4",children:[O.jsx("div",{className:"w-11 h-11 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-stone-200 group-hover:scale-105 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0",children:O.jsx(CS,{className:"w-5 h-5"})}),O.jsxs("div",{className:"flex-1 min-w-0",children:[O.jsx("h3",{className:"text-base font-medium text-stone-100 tracking-tight mb-1",children:"Upload Lunar Imagery / PDS4 Archive"}),O.jsx("p",{className:"text-xs text-stone-400 leading-relaxed mb-4",children:"Drag & drop telemetry files, .zip archives, or lunar imagery here to begin photometric correction."}),O.jsxs("div",{className:"flex items-center gap-3",children:[O.jsxs("button",{type:"button",disabled:i,className:"px-4 py-2 rounded-sm bg-stone-100 text-stone-950 hover:bg-white font-semibold text-xs transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed",children:[O.jsx("span",{children:"Select File"}),O.jsx(qy,{className:"w-3.5 h-3.5"})]}),O.jsx("span",{className:"text-[11px] text-stone-500 font-mono",children:".ZIP · .IMG · .PNG · .TIF"})]})]})]})]}),O.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 rounded-sm bg-black/50 backdrop-blur-md border border-white/10 text-xs text-stone-400",children:[O.jsxs("span",{className:"flex items-center gap-1.5",children:[O.jsx(uS,{className:"w-3.5 h-3.5 text-stone-500"}),O.jsx("span",{children:"No file available?"})]}),O.jsx("button",{type:"button",onClick:e,disabled:i,className:"text-stone-200 hover:text-white font-medium transition-colors hover:underline disabled:opacity-50 disabled:cursor-not-allowed",children:"Load Chandrayaan Sample Swath →"})]})]})},bc=["Uploading PDS4 archive…","Extracting dataset files…","Locating IMG + XML pairs…","Converting IMG → NPY representation…","Creating image tiles…","Running Real-ESRGAN enhancement…","Stitching enhanced tiles…","Finalising output…"],QA=({dataset:r,onComplete:e,isProcessing:i=!1,isDemoMode:s=!1,error:l=null})=>{const[c,h]=$t.useState(bc[0]),d=$t.useRef(0);$t.useEffect(()=>{if(l){h(`Upload failed: ${l}`);return}if(s){const p=setTimeout(()=>{h("Computing Hapke photometric model…")},450),g=setTimeout(()=>{e()},950);return()=>{clearTimeout(p),clearTimeout(g)}}if(i){d.current=0,h(bc[0]);const p=setInterval(()=>{d.current=Math.min(d.current+1,bc.length-1),h(bc[d.current])},8e3);return()=>clearInterval(p)}},[e,i,s,l]);const m=l||c;return O.jsxs("div",{className:"max-w-md w-full mx-auto p-6 rounded-2xl bg-[#0d131f] border border-slate-800 text-center shadow-xl",children:[O.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-800 mx-auto mb-4 flex items-center justify-center text-sky-400",children:O.jsx(xS,{className:"w-5 h-5 animate-spin"})}),O.jsx("h3",{className:"text-sm font-semibold text-slate-100 mb-1",children:l?"Upload Error":`Loading ${r.targetFeature}`}),O.jsx("p",{className:`text-xs mb-4 font-mono ${l?"text-rose-300":"text-slate-400"}`,children:m}),O.jsx("div",{className:"w-full h-1 rounded-full bg-slate-800 overflow-hidden",children:O.jsx("div",{className:"h-full bg-sky-500 rounded-full animate-[pulse_1s_infinite] w-3/4 mx-auto"})})]})};function Tv(r){return r.includes("SHIV_SHAKTI")||r.includes("SP")?[{x:380,y:320,r:180,depth:.85,hasCentralPeak:!1},{x:740,y:560,r:140,depth:.9,hasCentralPeak:!1},{x:220,y:680,r:85,depth:.65},{x:580,y:220,r:60,depth:.5},{x:860,y:240,r:45,depth:.45},{x:480,y:490,r:35,depth:.4},{x:310,y:460,r:22,depth:.35},{x:620,y:720,r:30,depth:.38},{x:150,y:200,r:50,depth:.5}]:r.includes("ARISTARCHUS")?[{x:500,y:450,r:260,depth:.95,hasCentralPeak:!0},{x:820,y:280,r:110,depth:.7},{x:250,y:300,r:90,depth:.6},{x:700,y:720,r:70,depth:.5},{x:360,y:700,r:40,depth:.4}]:r.includes("SHACKLETON")?[{x:512,y:512,r:320,depth:1,hasCentralPeak:!1},{x:200,y:200,r:90,depth:.6},{x:800,y:800,r:100,depth:.65},{x:250,y:780,r:75,depth:.5}]:[{x:512,y:480,r:220,depth:.95,hasCentralPeak:!0},{x:240,y:240,r:70,depth:.55},{x:780,y:320,r:80,depth:.6},{x:300,y:750,r:65,depth:.5},{x:720,y:700,r:90,depth:.65}]}function w_(r,e,i,s){const l=Tv(s),c=r.createImageData(e,i),h=c.data;for(let d=0;d<i;d++)for(let m=0;m<e;m++){const p=(d*e+m)*4;let g=.5;for(const S of l){const _=m/e*1024-S.x,I=d/i*1024-S.y,L=Math.sqrt(_*_+I*I);if(L<S.r){const D=L/S.r,j=Math.sin(D*Math.PI*.5)*S.depth,H=Math.exp(-Math.pow((L-S.r*.95)/(S.r*.15),2))*.35;g+=H-(1-j)*.4,S.hasCentralPeak&&L<S.r*.22&&(g+=Math.cos(L/(S.r*.22)*Math.PI*.5)*.4)}}const v=Math.PI*.35,y=.45+(g-.5)*Math.cos(v)*.4;let M=Math.floor(Math.max(0,Math.min(255,y*110+25)));const E=Math.sin(m*.9)*4,b=(Math.random()-.5)*22;M=Math.max(5,Math.min(250,M+E+b)),h[p]=M*.92,h[p+1]=M*.98,h[p+2]=M*.94,h[p+3]=255}r.putImageData(c,0,0),r.strokeStyle="rgba(56, 189, 248, 0.08)",r.lineWidth=1;for(let d=64;d<e;d+=64)r.beginPath(),r.moveTo(d,0),r.lineTo(d,i),r.stroke();for(let d=64;d<i;d+=64)r.beginPath(),r.moveTo(0,d),r.lineTo(e,d),r.stroke()}function D_(r,e,i,s,l,c,h=1){const d=Tv(s),m=r.createImageData(e,i),p=m.data,g=c.w/.342,v=1+(c.thetaBar-20)*.015;for(let y=0;y<i;y++)for(let M=0;M<e;M++){const E=(y*e+M)*4,b=M/e*1024,S=y/i*1024;let _=0,I=0,L=!1;for(const F of d){const q=b-F.x,lt=S-F.y,rt=Math.sqrt(q*q+lt*lt);if(rt<F.r*1.5){const U=rt/F.r;if(U<1){Math.sin(U*Math.PI*.5)*F.depth,Math.exp(-Math.pow((rt-F.r*.95)/(F.r*.15),2))*.45;const J=Math.cos(U*Math.PI*.5)*F.depth;if(_+=q/Math.max(1,rt)*J,I+=lt/Math.max(1,rt)*J,U>.85&&(L=!0),F.hasCentralPeak&&rt<F.r*.22){const xt=Math.cos(rt/(F.r*.22)*Math.PI*.5);_-=q/Math.max(1,rt)*xt*.8,I-=lt/Math.max(1,rt)*xt*.8}}else{const J=Math.atan2(lt,q);Math.pow(Math.cos(J*8),4)*Math.exp(-((rt-F.r)/F.r))}}}const D=Math.sin(b*.2)*Math.cos(S*.2)*.04+Math.sin(b*.8)*Math.cos(S*.8)*.02,j=.58,H=-.42,z=.7,k=-_*1.5,w=-I*1.5,C=1,G=Math.sqrt(k*k+w*w+C*C),ut=(k*j+w*H+C*z)/G;let nt=Math.max(.015,ut*.22*g*h+D);nt=Math.pow(nt,1/1.4)*v;let dt=0,pt=0,P=0;if(l==="REGOLITH_MONO"){const F=Math.floor(Math.max(10,Math.min(250,nt*255)));dt=F,pt=Math.floor(F*.98),P=Math.floor(F*1.02)}else if(l==="IIRS_FALSE_COLOR"){const F=Math.max(0,Math.min(1,nt*1.4));L&&(s.includes("SHACKLETON")||s.includes("SP"))?(dt=Math.floor(30+F*40),pt=Math.floor(180+F*75),P=Math.floor(220+F*35)):(dt=Math.floor(255*Math.sin(F*Math.PI*.8)),pt=Math.floor(255*Math.sin(F*Math.PI*.95)),P=Math.floor(255*Math.cos(F*Math.PI*.5)))}else if(l==="TOPO_SHADOW")dt=Math.floor(Math.max(0,Math.min(255,(k/G*.5+.5)*255))),pt=Math.floor(Math.max(0,Math.min(255,(w/G*.5+.5)*255))),P=Math.floor(Math.max(0,Math.min(255,C/G*255)));else if(l==="ALBEDO_RATIO"){const F=nt/Math.max(.01,c.w)*1.2;dt=Math.floor(Math.max(0,Math.min(255,F*200))),pt=Math.floor(Math.max(0,Math.min(255,F*160))),P=Math.floor(Math.max(0,Math.min(255,255-F*120)))}p[E]=Math.max(0,Math.min(255,dt)),p[E+1]=Math.max(0,Math.min(255,pt)),p[E+2]=Math.max(0,Math.min(255,P)),p[E+3]=255}r.putImageData(m,0,0),r.strokeStyle="rgba(56, 189, 248, 0.2)",r.lineWidth=1}function Mr(r){return r*Math.PI/180}function U_(r,e){const i=Math.sqrt(Math.max(0,1-e));return(1+2*r)/(1+2*i*r)}function JA(r,e){const i=Math.cos(r),s=Math.pow(1+2*e*i+e*e,1.5);return Math.max(.001,(1-e*e)/Math.max(1e-4,s))}function $A(r,e,i){if(r<1e-6)return e;const s=Math.tan(r/2);return e/(1+1/Math.max(.001,i)*s)}function t2(r,e,i,s){if(s<.5)return 1;const l=Mr(s),c=Math.tan(l),d=1-.5*Math.exp(-2/Math.PI*(1/Math.max(.01,c)))*(1-Math.cos(i/2));return Math.max(.2,Math.min(1.8,d))}function xd(r,e,i,s){const l=Mr(r),c=Mr(e),h=Mr(i),d=Math.max(.001,Math.cos(l)),m=Math.max(.001,Math.cos(c)),p=JA(h,s.g),g=$A(h,s.b0,s.h),v=U_(d,s.w),y=U_(m,s.w),M=t2(l,c,h,s.thetaBar),E=d/(d+m),b=p*(1+g),S=v*y-1,_=s.w/(4*Math.PI)*E*(b+S)*M;return Math.max(.005,_*Math.PI)}function e2(r,e,i=.75,s=.18){const l=Math.max(.001,Math.cos(Mr(r))),c=Math.max(.001,Math.cos(Mr(e)));return s*Math.pow(l,i)*Math.pow(c,i-1)}function n2(r,e=60,i=42){const s=[];for(let l=0;l<=110;l+=2.5){const c=Math.abs(l-e)*.45,h=xd(e,c,l,r),d=e2(e,c,.72,r.w*.45),m=Math.sin(l*12.9898+i)*43758.5453,p=(m-Math.floor(m)-.5)*.008,g=Math.max(.01,h+p),v=g-h;s.push({phaseAngle:l,theoreticalHapke:parseFloat(h.toFixed(4)),observedData:parseFloat(g.toFixed(4)),minnaert:parseFloat(d.toFixed(4)),residual:parseFloat(v.toFixed(5))})}return s}function N_(r,e,i,s){const l=xd(30,0,30,s),c=xd(r,e,i,s);return l/Math.max(.001,c)}const i2=({dataset:r,currentFilter:e,currentHapke:i,originalImageUrl:s,enhancedImageUrl:l})=>{const c=$t.useRef(null),h=$t.useRef(null),d=$t.useRef(null),[m,p]=$t.useState(50),[g,v]=$t.useState(!1),[y,M]=$t.useState(1),[E,b]=$t.useState({x:0,y:0}),[S,_]=$t.useState(!1),[I,L]=$t.useState({x:0,y:0}),[D,j]=$t.useState(null),[H,z]=$t.useState({x:0,y:0}),k=1024,w=$t.useCallback(()=>{const F=h.current,q=d.current;if(!F||!q)return;const lt=F.getContext("2d"),rt=q.getContext("2d");if(!lt||!rt)return;const U=(xt,W,ft,Et)=>{xt.clearRect(0,0,ft,Et);const vt=Math.max(ft/W.width,Et/W.height),zt=W.width*vt,kt=W.height*vt,Zt=(ft-zt)/2,Oe=(Et-kt)/2;xt.drawImage(W,Zt,Oe,zt,kt)};if(s&&l){const xt=W=>new Promise((ft,Et)=>{const vt=new Image;vt.onload=()=>ft(vt),vt.onerror=()=>Et(new Error(`Failed to load image: ${W}`)),vt.src=W});Promise.all([xt(s),xt(l)]).then(([W,ft])=>{U(lt,W,F.width,F.height),U(rt,ft,q.width,q.height)}).catch(()=>{w_(lt,k,k,r.id);const W=N_(r.geometry.incidenceDeg,r.geometry.emissionDeg,r.geometry.phaseDeg,i);D_(rt,k,k,r.id,e,i,W)});return}w_(lt,k,k,r.id);const J=N_(r.geometry.incidenceDeg,r.geometry.emissionDeg,r.geometry.phaseDeg,i);D_(rt,k,k,r.id,e,i,J)},[r,e,i,s,l]);$t.useEffect(()=>{w()},[w]);const C=F=>{F.preventDefault(),F.stopPropagation(),v(!0)},G=F=>{const q=c.current;if(!q)return;const lt=q.getBoundingClientRect(),rt=F.clientX-lt.left,U=F.clientY-lt.top;if(g){const kt=Math.max(5,Math.min(95,rt/lt.width*100));p(kt);return}if(S){b({x:rt-I.x,y:U-I.y});return}z({x:rt,y:U});const J=Math.max(0,Math.min(1,rt/lt.width)),xt=Math.max(0,Math.min(1,U/lt.height)),W=Math.floor(J*k),ft=Math.floor(xt*k),Et=r.meanReflectance*(i.w/.342),vt=Math.sin(W*.05)*Math.cos(ft*.05)*.03,zt=Math.max(.012,Et+vt);j({pixelX:W,pixelY:ft,normalizedLat:r.targetCoordinates.lat,normalizedLon:r.targetCoordinates.lon,reflectanceIF:parseFloat(zt.toFixed(4)),roughnessEstDeg:i.thetaBar,albedoFactor:i.w,mineralSignature:"Regolith / Feldspar",isSunlit:!0,snrEst:r.signalToNoiseRatioDb})},ut=()=>{v(!1),_(!1)},nt=F=>{F.button===0&&!g&&(_(!0),L({x:F.clientX-c.current.getBoundingClientRect().left-E.x,y:F.clientY-c.current.getBoundingClientRect().top-E.y}))},dt=()=>{M(F=>Math.min(6,parseFloat((F+.5).toFixed(1))))},pt=()=>{M(F=>{const q=Math.max(1,parseFloat((F-.5).toFixed(1)));return q===1&&b({x:0,y:0}),q})},P=()=>{M(1),b({x:0,y:0}),p(50)};return O.jsxs("div",{className:"flex flex-col w-full rounded-2xl bg-[#0d131f] border border-slate-800 overflow-hidden shadow-lg",children:[O.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-[#090e18] border-b border-slate-800 text-xs",children:[O.jsxs("div",{className:"flex items-center gap-3",children:[O.jsx("span",{className:"text-slate-400 font-medium",children:"Comparison View"}),O.jsx("span",{className:"text-slate-600",children:"·"}),O.jsx("span",{className:"text-slate-500",children:"Drag center line to compare Raw vs Corrected"})]}),O.jsxs("div",{className:"flex items-center gap-1.5",children:[O.jsx("button",{onClick:dt,className:"p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors",title:"Zoom In",children:O.jsx(US,{className:"w-4 h-4"})}),O.jsx("button",{onClick:pt,className:"p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors",title:"Zoom Out",children:O.jsx(LS,{className:"w-4 h-4"})}),O.jsx("button",{onClick:P,className:"p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors",title:"Reset View",children:O.jsx(I_,{className:"w-4 h-4"})})]})]}),O.jsxs("div",{ref:c,onMouseMove:G,onMouseDown:nt,onMouseUp:ut,onMouseLeave:()=>{v(!1),_(!1),j(null)},className:`relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#050811] overflow-hidden select-none ${S?"cursor-grabbing":g?"cursor-ew-resize":"cursor-default"}`,children:[O.jsxs("div",{className:"absolute inset-0 origin-center transition-transform duration-75 ease-out",style:{transform:`scale(${y}) translate(${E.x/y}px, ${E.y/y}px)`},children:[O.jsx("canvas",{ref:d,width:k,height:k,className:"absolute inset-0 w-full h-full object-cover"}),O.jsx("div",{className:"absolute inset-0 overflow-hidden",style:{width:`${m}%`},children:O.jsx("canvas",{ref:h,width:k,height:k,className:"absolute inset-0 w-full h-full object-cover max-w-none",style:{width:c.current?`${c.current.clientWidth}px`:"100%"}})})]}),O.jsxs("div",{className:"absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none",style:{left:`${m}%`},children:[O.jsx("div",{className:"w-[2px] h-full bg-white/70"}),O.jsx("div",{onMouseDown:C,className:"absolute w-7 h-7 rounded-full bg-slate-900 border border-white/60 flex items-center justify-center pointer-events-auto cursor-ew-resize shadow-md",children:O.jsx("div",{className:"w-2.5 h-0.5 bg-slate-300"})})]}),O.jsx("div",{className:"absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[11px] font-medium text-slate-300",children:s?"Original":"Raw Sensor (DN)"}),O.jsx("div",{className:"absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[11px] font-medium text-sky-300",children:l?"AI Enhanced":"Photometrically Corrected"}),D&&!g&&!S&&O.jsxs("div",{className:"absolute z-30 pointer-events-none px-2.5 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800 text-[11px] text-slate-300 shadow-md transform -translate-x-1/2 -translate-y-full mb-3",style:{left:`${H.x}px`,top:`${H.y}px`},children:["Reflectance: ",O.jsx("span",{className:"text-sky-400 font-mono font-semibold",children:D.reflectanceIF})]})]}),O.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-[#090e18] border-t border-slate-800 text-[11px] text-slate-400",children:[O.jsxs("span",{children:["Resolution: ",r.geometry.groundSamplingDistanceM," m/px"]}),O.jsxs("span",{children:["Solar Angle: ",r.geometry.incidenceDeg,"°"]})]})]})},a2=({currentFilter:r,onSelectFilter:e})=>{const i=[{id:"REGOLITH_MONO",label:"Monochrome"},{id:"IIRS_FALSE_COLOR",label:"Infrared (2.9µm)"},{id:"TOPO_SHADOW",label:"Topography"},{id:"ALBEDO_RATIO",label:"Albedo Map"}];return O.jsx("div",{className:"flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs",children:i.map(s=>{const l=r===s.id;return O.jsx("button",{onClick:()=>e(s.id),className:`px-3 py-1.5 rounded-lg font-medium transition-all ${l?"bg-slate-800 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:s.label},s.id)})})},s2=({currentHapke:r,initialHapke:e,onChangeHapke:i,onResetHapke:s})=>{const[l,c]=$t.useState(!1),h=(m,p)=>{i({...r,[m]:p})},d=r.w!==e.w||r.thetaBar!==e.thetaBar||r.g!==e.g||r.b0!==e.b0||r.h!==e.h;return O.jsxs("div",{className:"flex flex-col rounded-2xl bg-[#0d131f] border border-slate-800 p-5 space-y-4 shadow-sm",children:[O.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800/80 pb-3",children:[O.jsxs("div",{children:[O.jsx("h3",{className:"text-sm font-semibold text-slate-100",children:"Photometric Calibration"}),O.jsx("p",{className:"text-xs text-slate-400",children:"Adjust illumination and surface reflection properties"})]}),d&&O.jsxs("button",{onClick:s,className:"px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1 transition-colors",children:[O.jsx(I_,{className:"w-3 h-3"}),O.jsx("span",{children:"Reset"})]})]}),O.jsxs("div",{className:"space-y-4 text-xs",children:[O.jsxs("div",{className:"space-y-1.5",children:[O.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[O.jsx("span",{className:"font-medium",children:"Surface Albedo (Brightness)"}),O.jsx("span",{className:"text-slate-200 font-mono",children:r.w.toFixed(2)})]}),O.jsx("input",{type:"range",min:"0.05",max:"0.80",step:"0.01",value:r.w,onChange:m=>h("w",parseFloat(m.target.value)),className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"}),O.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[O.jsx("span",{children:"Dark Mare"}),O.jsx("span",{children:"Bright Highlands"})]})]}),O.jsxs("div",{className:"space-y-1.5",children:[O.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[O.jsx("span",{className:"font-medium",children:"Surface Roughness"}),O.jsxs("span",{className:"text-slate-200 font-mono",children:[r.thetaBar.toFixed(0),"°"]})]}),O.jsx("input",{type:"range",min:"0",max:"45",step:"1",value:r.thetaBar,onChange:m=>h("thetaBar",parseFloat(m.target.value)),className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"}),O.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[O.jsx("span",{children:"Smooth Flat Terrain"}),O.jsx("span",{children:"Rugged Slopes"})]})]}),O.jsxs("div",{className:"space-y-1.5",children:[O.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[O.jsx("span",{className:"font-medium",children:"Opposition Effect"}),O.jsx("span",{className:"text-slate-200 font-mono",children:r.b0.toFixed(2)})]}),O.jsx("input",{type:"range",min:"0.0",max:"3.0",step:"0.05",value:r.b0,onChange:m=>h("b0",parseFloat(m.target.value)),className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"}),O.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[O.jsx("span",{children:"Standard Reflection"}),O.jsx("span",{children:"Strong Peak"})]})]})]}),O.jsxs("div",{className:"pt-2 border-t border-slate-800/60",children:[O.jsxs("button",{onClick:()=>c(!l),className:"w-full py-1.5 flex items-center justify-between text-xs text-slate-400 hover:text-slate-200 transition-colors",children:[O.jsx("span",{children:"Advanced Physical Parameters"}),l?O.jsx($y,{className:"w-3.5 h-3.5"}):O.jsx(Qy,{className:"w-3.5 h-3.5"})]}),l&&O.jsxs("div",{className:"mt-3 space-y-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs",children:[O.jsxs("div",{className:"space-y-1",children:[O.jsxs("div",{className:"flex justify-between text-slate-400",children:[O.jsx("span",{children:"Phase Asymmetry (g)"}),O.jsx("span",{className:"font-mono text-slate-300",children:r.g.toFixed(2)})]}),O.jsx("input",{type:"range",min:"-0.80",max:"0.50",step:"0.02",value:r.g,onChange:m=>h("g",parseFloat(m.target.value)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"})]}),O.jsxs("div",{className:"space-y-1",children:[O.jsxs("div",{className:"flex justify-between text-slate-400",children:[O.jsx("span",{children:"Surge Width (h)"}),O.jsx("span",{className:"font-mono text-slate-300",children:r.h.toFixed(3)})]}),O.jsx("input",{type:"range",min:"0.01",max:"0.20",step:"0.005",value:r.h,onChange:m=>h("h",parseFloat(m.target.value)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"})]})]})]})]})},r2=({currentHapke:r,nominalIncidence:e})=>{const i=$t.useMemo(()=>n2(r,e,108),[r,e]),s=$t.useMemo(()=>Math.max(...i.map(y=>Math.max(y.theoreticalHapke,y.observedData)))*1.15,[i]),l=500,c=200,h={top:15,right:20,bottom:30,left:45},d=l-h.left-h.right,m=c-h.top-h.bottom,p=y=>h.left+y/110*d,g=y=>h.top+m-y/Math.max(.1,s)*m,v=$t.useMemo(()=>i.reduce((y,M,E)=>{const b=p(M.phaseAngle),S=g(M.theoreticalHapke);return E===0?`M ${b} ${S}`:`${y} L ${b} ${S}`},""),[i,s]);return O.jsxs("div",{className:"flex flex-col rounded-2xl bg-[#0d131f] border border-slate-800 p-5 space-y-3 shadow-sm",children:[O.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800/80 pb-2.5",children:[O.jsxs("div",{children:[O.jsx("h3",{className:"text-sm font-semibold text-slate-100",children:"Reflectance Response"}),O.jsx("p",{className:"text-xs text-slate-400",children:"Bidirectional reflectance (I/F) vs. phase angle (α)"})]}),O.jsxs("div",{className:"flex items-center gap-3 text-xs text-slate-400",children:[O.jsxs("div",{className:"flex items-center gap-1.5",children:[O.jsx("span",{className:"w-2.5 h-0.5 bg-sky-400 rounded-full"}),O.jsx("span",{children:"Fitted Model"})]}),O.jsxs("div",{className:"flex items-center gap-1.5",children:[O.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-slate-400"}),O.jsx("span",{children:"Sample Points"})]})]})]}),O.jsx("div",{className:"w-full aspect-[2.5/1] bg-[#090e18] rounded-xl border border-slate-800/80 p-2",children:O.jsxs("svg",{viewBox:`0 0 ${l} ${c}`,className:"w-full h-full select-none",children:[[0,30,60,90].map(y=>{const M=p(y);return O.jsxs("g",{children:[O.jsx("line",{x1:M,y1:h.top,x2:M,y2:c-h.bottom,stroke:"#1e293b"}),O.jsxs("text",{x:M,y:c-h.bottom+14,fill:"#64748b",fontSize:"9",textAnchor:"middle",children:[y,"°"]})]},`gx-${y}`)}),[0,.1,.2].map(y=>{if(y>s)return null;const M=g(y);return O.jsxs("g",{children:[O.jsx("line",{x1:h.left,y1:M,x2:l-h.right,y2:M,stroke:"#1e293b"}),O.jsx("text",{x:h.left-6,y:M+3,fill:"#64748b",fontSize:"9",textAnchor:"end",children:y.toFixed(1)})]},`gy-${y}`)}),O.jsx("path",{d:v,fill:"none",stroke:"#38bdf8",strokeWidth:"2"}),i.filter((y,M)=>M%3===0).map((y,M)=>O.jsx("circle",{cx:p(y.phaseAngle),cy:g(y.observedData),r:2,fill:"#94a3b8"},`pt-${M}`))]})})]})},o2=({dataset:r})=>{const e=$t.useRef(null);return $t.useEffect(()=>{const i=e.current;if(!i)return;const s=i.clientWidth,l=i.clientHeight||200,c=new uv,h=new ni(45,s/l,.1,1e3);h.position.z=2.6;const d=new bv({alpha:!0,antialias:!0});d.setSize(s,l),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(d.domElement);const m=document.createElement("canvas");m.width=512,m.height=256;const p=m.getContext("2d");p.fillStyle="#1e293b",p.fillRect(0,0,512,256);for(let P=0;P<40;P++)p.fillStyle="rgba(255, 255, 255, 0.06)",p.beginPath(),p.arc(Math.random()*512,Math.random()*256,Math.random()*20+5,0,Math.PI*2),p.fill();const g=new eE(m),v=new Ic(1,48,48),y=new pv({map:g,roughness:.9}),M=new di(v,y);c.add(M);const E=r.targetCoordinates.lat*Math.PI/180,b=r.targetCoordinates.lon*Math.PI/180,S=Math.cos(E)*Math.sin(b),_=Math.sin(E),I=Math.cos(E)*Math.cos(b),L=new Nd(.04,.07,24),D=new Dd({color:3718648,side:Li}),j=new di(L,D);j.position.set(S*1.01,_*1.01,I*1.01),j.lookAt(new st(S*2,_*2,I*2)),M.add(j);const H=new _v(16777215,2);H.position.set(3,1,2),c.add(H);const z=new vv(988970,.7);c.add(z),r.targetCoordinates.lat<0&&(M.rotation.x=.55);let k=!1,w={x:0,y:0};const C=P=>{k=!0,w={x:P.clientX,y:P.clientY}},G=P=>{k&&(M.rotation.y+=(P.clientX-w.x)*.006,M.rotation.x+=(P.clientY-w.y)*.006,w={x:P.clientX,y:P.clientY})},ut=()=>{k=!1};i.addEventListener("mousedown",C),window.addEventListener("mousemove",G),window.addEventListener("mouseup",ut);let nt;const dt=()=>{nt=requestAnimationFrame(dt),k||(M.rotation.y+=.003),d.render(c,h)};dt();const pt=()=>{if(!i)return;const P=i.clientWidth,F=i.clientHeight||200;h.aspect=P/F,h.updateProjectionMatrix(),d.setSize(P,F)};return window.addEventListener("resize",pt),()=>{cancelAnimationFrame(nt),window.removeEventListener("resize",pt),i.removeEventListener("mousedown",C),window.removeEventListener("mousemove",G),window.removeEventListener("mouseup",ut),i.contains(d.domElement)&&i.removeChild(d.domElement),d.dispose()}},[r]),O.jsxs("div",{className:"flex flex-col rounded-2xl bg-[#0d131f] border border-slate-800 p-5 space-y-3 shadow-sm",children:[O.jsx("div",{className:"flex items-center justify-between border-b border-slate-800/80 pb-2.5",children:O.jsxs("div",{children:[O.jsx("h3",{className:"text-sm font-semibold text-slate-100",children:"Lunar Target Region"}),O.jsxs("p",{className:"text-xs text-slate-400",children:["Target: ",r.targetCoordinates.latStr,", ",r.targetCoordinates.lonStr]})]})}),O.jsx("div",{ref:e,className:"w-full aspect-[2.5/1] bg-[#090e18] rounded-xl border border-slate-800/80 overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center relative",children:O.jsx("span",{className:"absolute bottom-2 right-2 text-[10px] text-slate-500 pointer-events-none",children:"Drag to rotate"})})]})},l2=({dataset:r,currentHapke:e,onShowToast:i})=>{const s=()=>{const h={product:r.productUri,mission:r.mission,instrument:r.instrument,targetCoordinates:r.targetCoordinates,fittedHapkeParameters:e,geometry:r.geometry},d=new Blob([JSON.stringify(h,null,2)],{type:"application/json"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=`${r.id}_parameters.json`,p.click(),URL.revokeObjectURL(m),i("success","Parameters Exported","Saved parameters JSON file.")},l=()=>{const h=`# ISRO Lunar Photometric Analysis Report
**Mission:** ${r.mission}
**Instrument:** ${r.instrument}
**Target Feature:** ${r.targetFeature}
**Coordinates:** ${r.targetCoordinates.latStr}, ${r.targetCoordinates.lonStr}

## Calibrated Hapke Parameters
- Single Scattering Albedo (w): ${e.w}
- Macroscopic Roughness (θ̄): ${e.thetaBar}°
- Asymmetry Factor (g): ${e.g}
- Opposition Surge (B₀): ${e.b0}
`,d=new Blob([h],{type:"text/markdown"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=`${r.id}_report.md`,p.click(),URL.revokeObjectURL(m),i("success","Report Exported","Saved analysis summary report.")},c=()=>{const h=`ISRO_LUNAR_PHOTOMETRIC_L2C
Product: ${r.productUri}
Coordinates: ${r.targetCoordinates.lat},${r.targetCoordinates.lon}`,d=new Blob([h],{type:"application/octet-stream"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=`${r.id}_corrected.tif`,p.click(),URL.revokeObjectURL(m),i("success","GeoTIFF Exported","Downloaded calibrated GeoTIFF.")};return O.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#0d131f] border border-slate-800",children:[O.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Export Processed Data:"}),O.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[O.jsxs("button",{onClick:c,className:"px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors",children:[O.jsx(lS,{className:"w-3.5 h-3.5"}),O.jsx("span",{children:"GeoTIFF"})]}),O.jsxs("button",{onClick:s,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors",children:[O.jsx(hS,{className:"w-3.5 h-3.5"}),O.jsx("span",{children:"Parameters JSON"})]}),O.jsxs("button",{onClick:l,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors",children:[O.jsx(z_,{className:"w-3.5 h-3.5"}),O.jsx("span",{children:"Summary Report"})]})]})]})},yd="http://127.0.0.1:8000";function L_(r){const e=r.replace(/\\/g,"/");if(e.startsWith("http"))return e;const i=e.replace(/^\.\//,"");return`${yd}/${i}`}async function c2(r){const e=new FormData;e.append("file",r);let i;try{i=await fetch(`${yd}/upload-pds4`,{method:"POST",body:e})}catch{throw new Error("Cannot reach the backend server. Make sure it is running on "+yd)}if(!i.ok){let s=`Server error (${i.status})`;try{const l=await i.json();l.detail&&(s=typeof l.detail=="string"?l.detail:JSON.stringify(l.detail))}catch{s=`${i.status} ${i.statusText}`}throw new Error(s)}return i.json()}const u2=({dataset:r,onShowToast:e,enhancementResult:i=null})=>{const[s,l]=$t.useState("REGOLITH_MONO"),[c,h]=$t.useState(r.currentHapke),d=()=>{h(r.initialHapke),e("info","Parameters Reset","Restored baseline photometric values.")},m=i!=null&&i.original_preview?L_(i.original_preview):void 0,p=i!=null&&i.stitched_demo?L_(i.stitched_demo):void 0;return O.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6",children:[O.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2",children:[O.jsxs("div",{children:[O.jsx("h2",{className:"text-lg font-bold text-slate-100",children:r.targetFeature}),O.jsxs("p",{className:"text-xs text-slate-400",children:[r.mission," · ",r.instrument," · ",r.targetCoordinates.latStr,", ",r.targetCoordinates.lonStr]})]}),O.jsx(a2,{currentFilter:s,onSelectFilter:l})]}),O.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[O.jsx("div",{className:"lg:col-span-7 flex flex-col space-y-4",children:O.jsx(i2,{dataset:r,currentFilter:s,currentHapke:c,originalImageUrl:m,enhancedImageUrl:p})}),O.jsx("div",{className:"lg:col-span-5 flex flex-col space-y-4",children:O.jsx(s2,{currentHapke:c,initialHapke:r.initialHapke,onChangeHapke:h,onResetHapke:d})})]}),O.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[O.jsx(r2,{currentHapke:c,nominalIncidence:r.geometry.incidenceDeg}),O.jsx(o2,{dataset:r})]}),O.jsx(l2,{dataset:r,currentHapke:c,onShowToast:e})]})},f2=({isOpen:r,onClose:e,dataset:i})=>{const[s,l]=$t.useState(!1);if(!r)return null;const c=()=>{navigator.clipboard.writeText(i.pds4XmlLabel),l(!0),setTimeout(()=>l(!1),2e3)};return O.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:O.jsxs("div",{className:"w-full max-w-2xl bg-[#0d131f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",children:[O.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e18]",children:[O.jsxs("div",{children:[O.jsx("h3",{className:"text-sm font-semibold text-white",children:"PDS4 Product Label"}),O.jsx("p",{className:"text-xs text-slate-400",children:i.productUri})]}),O.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",children:O.jsx(B_,{className:"w-4 h-4"})})]}),O.jsxs("div",{className:"p-6 overflow-y-auto font-mono text-xs space-y-4 flex-1",children:[O.jsxs("div",{className:"grid grid-cols-2 gap-3 text-slate-300",children:[O.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[O.jsx("div",{className:"text-slate-500 text-[10px]",children:"INCIDENCE ANGLE (i)"}),O.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.incidenceDeg,"°"]})]}),O.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[O.jsx("div",{className:"text-slate-500 text-[10px]",children:"EMISSION ANGLE (e)"}),O.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.emissionDeg,"°"]})]}),O.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[O.jsx("div",{className:"text-slate-500 text-[10px]",children:"PHASE ANGLE (α)"}),O.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.phaseDeg,"°"]})]}),O.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[O.jsx("div",{className:"text-slate-500 text-[10px]",children:"ALTITUDE"}),O.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.spacecraftAltitudeKm," km"]})]})]}),O.jsxs("div",{className:"relative",children:[O.jsxs("button",{onClick:c,className:"absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1.5 transition-colors",children:[s?O.jsx(Zy,{className:"w-3 h-3 text-emerald-400"}):O.jsx(rS,{className:"w-3 h-3"}),O.jsx("span",{children:s?"Copied":"Copy"})]}),O.jsx("pre",{className:"p-4 rounded-xl bg-[#060a12] text-slate-300 border border-slate-800 overflow-x-auto text-[11px] leading-relaxed",children:i.pds4XmlLabel})]})]}),O.jsx("div",{className:"px-6 py-3 border-t border-slate-800 bg-[#090e18] flex justify-end",children:O.jsx("button",{onClick:e,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors",children:"Close"})})]})})},h2=()=>{const[r,e]=$t.useState("PRE_FLIGHT"),[i,s]=$t.useState(Jf[0]),[l,c]=$t.useState(!1),[h,d]=$t.useState([]),[m,p]=$t.useState(null),[g,v]=$t.useState(null),[y,M]=$t.useState(null),[E,b]=$t.useState(!1),[S,_]=$t.useState(!1),I=(k,w,C)=>{const G=`toast-${Date.now()}`;d(ut=>[...ut,{id:G,type:k,title:w,description:C}])},L=k=>{d(w=>w.filter(C=>C.id!==k))},D=async k=>{const w={...Jf[0],id:`CUSTOM_${k.name.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,productUri:`URN:ISRO:PDS4:${k.name.toUpperCase()}`,targetFeature:`Lunar Swath: ${k.name}`};s(w),p(k),M(null),_(!1),b(!0),e("PROCESSING");try{const C=await c2(k);v(C),b(!1),I("success","Processing complete","Image enhancement finished."),e("DASHBOARD")}catch(C){const G=(C==null?void 0:C.message)||"Upload failed";M(G),b(!1),I("error","Upload failed",G),e("PRE_FLIGHT")}},j=()=>{s(Jf[0]),_(!0),b(!1),e("PROCESSING")},H=()=>{e("DASHBOARD")},z=()=>{e("PRE_FLIGHT"),v(null),p(null),M(null),b(!1),_(!1)};return O.jsxs("div",{className:"relative min-h-screen bg-[#030303] text-stone-200 flex flex-col selection:bg-stone-200/20 selection:text-stone-100",children:[O.jsx(qA,{appState:r}),O.jsx(OS,{appState:r,dataset:i,onReset:z,onOpenPds4Modal:()=>c(!0)}),O.jsxs("main",{className:"relative z-10 flex-1 flex flex-col justify-center",children:[r==="PRE_FLIGHT"&&O.jsxs("div",{className:"w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12 flex flex-col justify-between min-h-[calc(100vh-86px)]",children:[O.jsxs("div",{className:"max-w-3xl space-y-7 mt-[10vh] lg:mt-[12vh]",children:[O.jsxs("div",{className:"space-y-4",children:[O.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono tracking-[0.24em] text-stone-400 uppercase",children:[O.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-stone-300"}),O.jsx("span",{children:"ISRO / Chandrayaan lunar archive"})]}),O.jsx("h1",{className:"max-w-2xl text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.055em] text-stone-100 leading-[0.94]",children:"Read the lunar surface in a different light."}),O.jsx("p",{className:"text-sm sm:text-base text-stone-400 max-w-md leading-relaxed",children:"An instrument panel for Chandrayaan imagery—built to reveal terrain, recover shadow detail, and make the Moon legible."})]}),O.jsx(KA,{onFileSelected:D,onDemoSelected:j,disabled:E})]}),O.jsxs("div",{className:"pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-wide text-stone-400 uppercase",children:[O.jsxs("div",{className:"flex items-center gap-6",children:[O.jsxs("span",{className:"flex items-center gap-2",children:[O.jsx(aS,{className:"w-3.5 h-3.5 text-stone-500"}),O.jsx("span",{children:"SPICE Geometry Inversion"})]}),O.jsxs("span",{className:"flex items-center gap-2",children:[O.jsx(AS,{className:"w-3.5 h-3.5 text-stone-500"}),O.jsx("span",{children:"Hapke 5-Parameter Physics"})]}),O.jsxs("span",{className:"hidden sm:flex items-center gap-2",children:[O.jsx(SS,{className:"w-3.5 h-3.5 text-stone-500"}),O.jsx("span",{children:"South Pole Prime Zone"})]})]}),O.jsx("span",{className:"text-stone-500 text-[10px]",children:"ISRO Planetary Data Node"})]})]}),r==="PROCESSING"&&O.jsx("div",{className:"w-full flex items-center justify-center p-4",children:O.jsx(QA,{dataset:i,onComplete:H,isProcessing:E,isDemoMode:S,error:y})}),r==="DASHBOARD"&&O.jsx(u2,{dataset:i,onShowToast:I,enhancementResult:g})]}),O.jsx(f2,{isOpen:l,onClose:()=>c(!1),dataset:i}),O.jsx(YA,{toasts:h,onDismiss:L})]})};Vy.createRoot(document.getElementById("root")).render(O.jsx(Oy.StrictMode,{children:O.jsx(h2,{})}));
