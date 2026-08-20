(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function C_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var jf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function Ty(){if(dg)return To;dg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return To.Fragment=e,To.jsx=i,To.jsxs=i,To}var pg;function Ay(){return pg||(pg=1,jf.exports=Ty()),jf.exports}var P=Ay(),Wf={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function Ry(){if(mg)return ie;mg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function _(U,J,yt){this.props=U,this.context=J,this.refs=S,this.updater=yt||E}_.prototype.isReactComponent={},_.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function I(){}I.prototype=_.prototype;function O(U,J,yt){this.props=U,this.context=J,this.refs=S,this.updater=yt||E}var D=O.prototype=new I;D.constructor=O,b(D,_.prototype),D.isPureReactComponent=!0;var X=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function w(U,J,yt){var K=yt.ref;return{$$typeof:r,type:U,key:J,ref:K!==void 0?K:null,props:yt}}function C(U,J){return w(U.type,J,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function ft(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(yt){return J[yt]})}var nt=/\/+/g;function pt(U,J){return typeof U=="object"&&U!==null&&U.key!=null?ft(""+U.key):J.toString(36)}function ot(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(F,F):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function N(U,J,yt,K,dt){var Et=typeof U;(Et==="undefined"||Et==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(Et){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case r:case e:Mt=!0;break;case g:return Mt=U._init,N(Mt(U._payload),J,yt,K,dt)}}if(Mt)return dt=dt(U),Mt=K===""?"."+pt(U,0):K,X(dt)?(yt="",Mt!=null&&(yt=Mt.replace(nt,"$&/")+"/"),N(dt,J,yt,"",function(Kt){return Kt})):dt!=null&&(V(dt)&&(dt=C(dt,yt+(dt.key==null||U&&U.key===dt.key?"":(""+dt.key).replace(nt,"$&/")+"/")+Mt)),J.push(dt)),1;Mt=0;var Ft=K===""?".":K+":";if(X(U))for(var Zt=0;Zt<U.length;Zt++)K=U[Zt],Et=Ft+pt(K,Zt),Mt+=N(K,J,yt,Et,dt);else if(Zt=M(U),typeof Zt=="function")for(U=Zt.call(U),Zt=0;!(K=U.next()).done;)K=K.value,Et=Ft+pt(K,Zt++),Mt+=N(K,J,yt,Et,dt);else if(Et==="object"){if(typeof U.then=="function")return N(ot(U),J,yt,K,dt);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function H(U,J,yt){if(U==null)return U;var K=[],dt=0;return N(U,K,"","",function(Et){return J.call(yt,Et,dt++)}),K}function W(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(yt){(U._status===0||U._status===-1)&&(U._status=1,U._result=yt)},function(yt){(U._status===0||U._status===-1)&&(U._status=2,U._result=yt)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var lt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},ct={map:H,forEach:function(U,J,yt){H(U,function(){J.apply(this,arguments)},yt)},count:function(U){var J=0;return H(U,function(){J++}),J},toArray:function(U){return H(U,function(J){return J})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ie.Activity=v,ie.Children=ct,ie.Component=_,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=O,ie.StrictMode=s,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},ie.cache=function(U){return function(){return U.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(U,J,yt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var K=b({},U.props),dt=U.key;if(J!=null)for(Et in J.key!==void 0&&(dt=""+J.key),J)!q.call(J,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&J.ref===void 0||(K[Et]=J[Et]);var Et=arguments.length-2;if(Et===1)K.children=yt;else if(1<Et){for(var Mt=Array(Et),Ft=0;Ft<Et;Ft++)Mt[Ft]=arguments[Ft+2];K.children=Mt}return w(U.type,dt,K)},ie.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ie.createElement=function(U,J,yt){var K,dt={},Et=null;if(J!=null)for(K in J.key!==void 0&&(Et=""+J.key),J)q.call(J,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(dt[K]=J[K]);var Mt=arguments.length-2;if(Mt===1)dt.children=yt;else if(1<Mt){for(var Ft=Array(Mt),Zt=0;Zt<Mt;Zt++)Ft[Zt]=arguments[Zt+2];dt.children=Ft}if(U&&U.defaultProps)for(K in Mt=U.defaultProps,Mt)dt[K]===void 0&&(dt[K]=Mt[K]);return w(U,Et,dt)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(U){return{$$typeof:d,render:U}},ie.isValidElement=V,ie.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:W}},ie.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},ie.startTransition=function(U){var J=z.T,yt={};z.T=yt;try{var K=U(),dt=z.S;dt!==null&&dt(yt,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(F,lt)}catch(Et){lt(Et)}finally{J!==null&&yt.types!==null&&(J.types=yt.types),z.T=J}},ie.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ie.use=function(U){return z.H.use(U)},ie.useActionState=function(U,J,yt){return z.H.useActionState(U,J,yt)},ie.useCallback=function(U,J){return z.H.useCallback(U,J)},ie.useContext=function(U){return z.H.useContext(U)},ie.useDebugValue=function(){},ie.useDeferredValue=function(U,J){return z.H.useDeferredValue(U,J)},ie.useEffect=function(U,J){return z.H.useEffect(U,J)},ie.useEffectEvent=function(U){return z.H.useEffectEvent(U)},ie.useId=function(){return z.H.useId()},ie.useImperativeHandle=function(U,J,yt){return z.H.useImperativeHandle(U,J,yt)},ie.useInsertionEffect=function(U,J){return z.H.useInsertionEffect(U,J)},ie.useLayoutEffect=function(U,J){return z.H.useLayoutEffect(U,J)},ie.useMemo=function(U,J){return z.H.useMemo(U,J)},ie.useOptimistic=function(U,J){return z.H.useOptimistic(U,J)},ie.useReducer=function(U,J,yt){return z.H.useReducer(U,J,yt)},ie.useRef=function(U){return z.H.useRef(U)},ie.useState=function(U){return z.H.useState(U)},ie.useSyncExternalStore=function(U,J,yt){return z.H.useSyncExternalStore(U,J,yt)},ie.useTransition=function(){return z.H.useTransition()},ie.version="19.2.8",ie}var gg;function xd(){return gg||(gg=1,Wf.exports=Ry()),Wf.exports}var re=xd();const Cy=C_(re);var qf={exports:{}},Ao={},Yf={exports:{}},Zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function wy(){return _g||(_g=1,(function(r){function e(N,H){var W=N.length;N.push(H);t:for(;0<W;){var lt=W-1>>>1,ct=N[lt];if(0<l(ct,H))N[lt]=H,N[W]=ct,W=lt;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var H=N[0],W=N.pop();if(W!==H){N[0]=W;t:for(var lt=0,ct=N.length,U=ct>>>1;lt<U;){var J=2*(lt+1)-1,yt=N[J],K=J+1,dt=N[K];if(0>l(yt,W))K<ct&&0>l(dt,yt)?(N[lt]=dt,N[K]=W,lt=K):(N[lt]=yt,N[J]=W,lt=J);else if(K<ct&&0>l(dt,W))N[lt]=dt,N[K]=W,lt=K;else break t}}return H}function l(N,H){var W=N.sortIndex-H.sortIndex;return W!==0?W:N.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,y=3,M=!1,E=!1,b=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=N)s(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function X(N){if(b=!1,D(N),!E)if(i(m)!==null)E=!0,F||(F=!0,ft());else{var H=i(p);H!==null&&ot(X,H.startTime-N)}}var F=!1,z=-1,q=5,w=-1;function C(){return S?!0:!(r.unstable_now()-w<q)}function V(){if(S=!1,F){var N=r.unstable_now();w=N;var H=!0;try{t:{E=!1,b&&(b=!1,I(z),z=-1),M=!0;var W=y;try{e:{for(D(N),v=i(m);v!==null&&!(v.expirationTime>N&&C());){var lt=v.callback;if(typeof lt=="function"){v.callback=null,y=v.priorityLevel;var ct=lt(v.expirationTime<=N);if(N=r.unstable_now(),typeof ct=="function"){v.callback=ct,D(N),H=!0;break e}v===i(m)&&s(m),D(N)}else s(m);v=i(m)}if(v!==null)H=!0;else{var U=i(p);U!==null&&ot(X,U.startTime-N),H=!1}}break t}finally{v=null,y=W,M=!1}H=void 0}}finally{H?ft():F=!1}}}var ft;if(typeof O=="function")ft=function(){O(V)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,pt=nt.port2;nt.port1.onmessage=V,ft=function(){pt.postMessage(null)}}else ft=function(){_(V,0)};function ot(N,H){z=_(function(){N(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(N){switch(y){case 1:case 2:case 3:var H=3;break;default:H=y}var W=y;y=H;try{return N()}finally{y=W}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=y;y=N;try{return H()}finally{y=W}},r.unstable_scheduleCallback=function(N,H,W){var lt=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?lt+W:lt):W=lt,N){case 1:var ct=-1;break;case 2:ct=250;break;case 5:ct=1073741823;break;case 4:ct=1e4;break;default:ct=5e3}return ct=W+ct,N={id:g++,callback:H,priorityLevel:N,startTime:W,expirationTime:ct,sortIndex:-1},W>lt?(N.sortIndex=W,e(p,N),i(m)===null&&N===i(p)&&(b?(I(z),z=-1):b=!0,ot(X,W-lt))):(N.sortIndex=ct,e(m,N),E||M||(E=!0,F||(F=!0,ft()))),N},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(N){var H=y;return function(){var W=y;y=H;try{return N.apply(this,arguments)}finally{y=W}}}})(Zf)),Zf}var vg;function Dy(){return vg||(vg=1,Yf.exports=wy()),Yf.exports}var Kf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function Uy(){if(xg)return Rn;xg=1;var r=xd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.8",Rn}var yg;function Ny(){if(yg)return Kf.exports;yg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Kf.exports=Uy(),Kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function Ly(){if(Sg)return Ao;Sg=1;var r=Dy(),e=xd(),i=Ny();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===o)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,o=f;break}if(T===o){x=!0,o=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,o=c;break}if(T===o){x=!0,o=f,a=c;break}T=T.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ft(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case O:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var ot=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},lt=[],ct=-1;function U(t){return{current:t}}function J(t){0>ct||(t.current=lt[ct],lt[ct]=null,ct--)}function yt(t,n){ct++,lt[ct]=t.current,t.current=n}var K=U(null),dt=U(null),Et=U(null),Mt=U(null);function Ft(t,n){switch(yt(Et,n),yt(dt,t),yt(K,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?z0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=z0(n),t=I0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(K),yt(K,t)}function Zt(){J(K),J(dt),J(Et)}function Kt(t){t.memoizedState!==null&&yt(Mt,t);var n=K.current,a=I0(n,t.type);n!==a&&(yt(dt,t),yt(K,a))}function Ve(t){dt.current===t&&(J(K),J(dt)),Mt.current===t&&(J(Mt),So._currentValue=W)}var He,fe;function G(t){if(He===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);He=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+He+t+fe}var Tn=!1;function ue(t,n){if(!t||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var et=ut}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(ut){et=ut}t.call(xt.prototype)}}else{try{throw Error()}catch(ut){et=ut}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&et&&typeof ut.stack=="string")return[ut.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var B=x.split(`
`),tt=T.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===tt.length)for(o=B.length-1,c=tt.length-1;1<=o&&0<=c&&B[o]!==tt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==tt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==tt[c]){var mt=`
`+B[o].replace(" at new "," at ");return t.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",t.displayName)),mt}while(1<=o&&0<=c);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?G(a):""}function pe(t,n){switch(t.tag){case 26:case 27:case 5:return G(t.type);case 16:return G("Lazy");case 13:return t.child!==n&&n!==null?G("Suspense Fallback"):G("Suspense");case 19:return G("SuspenseList");case 0:case 15:return ue(t.type,!1);case 11:return ue(t.type.render,!1);case 1:return ue(t.type,!0);case 31:return G("Activity");default:return""}}function Xt(t){try{var n="",a=null;do n+=pe(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ue=Object.prototype.hasOwnProperty,kt=r.unstable_scheduleCallback,L=r.unstable_cancelCallback,A=r.unstable_shouldYield,it=r.unstable_requestPaint,gt=r.unstable_now,bt=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,Gt=r.unstable_UserBlockingPriority,wt=r.unstable_NormalPriority,zt=r.unstable_LowPriority,me=r.unstable_IdlePriority,At=r.log,It=r.unstable_setDisableYieldValue,jt=null,Vt=null;function Ot(t){if(typeof At=="function"&&It(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(jt,t)}catch{}}var Jt=Math.clz32?Math.clz32:Y,ae=Math.log,Oe=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(ae(t)/Oe|0)|0}var Rt=256,ht=262144,St=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=Ct(o):(x&=T,x!==0?c=Ct(x):a||(a=T&~t,a!==0&&(c=Ct(a))))):(T=o&~f,T!==0?c=Ct(T):x!==0?c=Ct(x):a||(a=o&~t,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function We(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var t=St;return St<<=1,(St&62914560)===0&&(St=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pi(t,n,a,o,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,tt=t.hiddenUpdates;for(a=x&~a;0<a;){var mt=31-Jt(a),xt=1<<mt;T[mt]=0,B[mt]=-1;var et=tt[mt];if(et!==null)for(tt[mt]=null,mt=0;mt<et.length;mt++){var ut=et[mt];ut!==null&&(ut.lane&=-536870913)}a&=~xt}o!==0&&Nr(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Nr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Jt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Lr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Jt(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Ri(t,n){var a=n&-n;return a=(a&42)!==0?1:Xa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Xa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Or(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:rg(t.type))}function ja(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var mi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+mi,xn="__reactProps$"+mi,zi="__reactContainer$"+mi,Pr="__reactEvents$"+mi,Bc="__reactListeners$"+mi,Fc="__reactHandles$"+mi,Vo="__reactResources$"+mi,Wa="__reactMarker$"+mi;function zr(t){delete t[Ke],delete t[xn],delete t[Pr],delete t[Bc],delete t[Fc]}function R(t){var n=t[Ke];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=X0(t);t!==null;){if(a=t[Ke])return a;t=X0(t)}return n}t=a,a=t.parentNode}return null}function Z(t){if(t=t[Ke]||t[zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function at(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function rt(t){var n=t[Vo];return n||(n=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function j(t){t[Wa]=!0}var Tt=new Set,Ut={};function Lt(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(Ut[t]=n,t=0;t<n.length;t++)Tt.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Wt={};function ve(t){return Ue.call(Wt,t)?!0:Ue.call(ee,t)?!1:te.test(t)?Wt[t]=!0:(ee[t]=!0,!1)}function xe(t,n,a){if(ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ke(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Te(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function un(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Me(t){if(!t._valueTracker){var n=Yt(t)?"checked":"value";t._valueTracker=un(t,n,""+t[n])}}function Pn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Yt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function pn(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pe(t,n,a,o,c,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ne(n)):t.value!==""+ne(n)&&(t.value=""+ne(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?An(t,x,ne(n)):a!=null?An(t,x,ne(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ne(T):t.removeAttribute("name")}function Nn(t,n,a,o,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Me(t);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Me(t)}function An(t,n,a){n==="number"&&gi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qe(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+ne(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ne(a):""}function Ts(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ot(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Me(t)}function zn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var yv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ld(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||yv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Od(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Ld(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Ld(t,f,n[f])}function Hc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return Mv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var Gc=null;function Vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var As=null,Rs=null;function Pd(t){var n=Z(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[xn]||null;if(!c)throw Error(s(90));Pe(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Pn(o)}break t;case"textarea":yn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(t,!!a.multiple,n,!1)}}}var kc=!1;function zd(t,n,a){if(kc)return t(n,a);kc=!0;try{var o=t(n);return o}finally{if(kc=!1,(As!==null||Rs!==null)&&(Dl(),As&&(n=As,t=Rs,Rs=As=null,Pd(n),t)))for(n=0;n<t.length;n++)Pd(t[n])}}function Ir(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(Bi)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{Xc=!1}var ua=null,jc=null,Xo=null;function Id(){if(Xo)return Xo;var t,n=jc,a=n.length,o,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===c[f-o];o++);return Xo=c.slice(t,1<o?1-o:void 0)}function jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Bd(){return!1}function In(t){function n(a,o,c,f,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Bd,this.isPropagationStopped=Bd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=In(qa),Fr=v({},qa,{view:0,detail:0}),Ev=In(Fr),Wc,qc,Hr,Yo=v({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hr&&(Hr&&t.type==="mousemove"?(Wc=t.screenX-Hr.screenX,qc=t.screenY-Hr.screenY):qc=Wc=0,Hr=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),Fd=In(Yo),bv=v({},Yo,{dataTransfer:0}),Tv=In(bv),Av=v({},Fr,{relatedTarget:0}),Yc=In(Av),Rv=v({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=In(Rv),wv=v({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dv=In(wv),Uv=v({},qa,{data:0}),Hd=In(Uv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ov[t])?!!n[t]:!1}function Zc(){return Pv}var zv=v({},Fr,{key:function(t){if(t.key){var n=Nv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Iv=In(zv),Bv=v({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=In(Bv),Fv=v({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),Hv=In(Fv),Gv=v({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=In(Gv),kv=v({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=In(kv),jv=v({},qa,{newState:0,oldState:0}),Wv=In(jv),qv=[9,13,27,32],Kc=Bi&&"CompositionEvent"in window,Gr=null;Bi&&"documentMode"in document&&(Gr=document.documentMode);var Yv=Bi&&"TextEvent"in window&&!Gr,Vd=Bi&&(!Kc||Gr&&8<Gr&&11>=Gr),kd=" ",Xd=!1;function jd(t,n){switch(t){case"keyup":return qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function Zv(t,n){switch(t){case"compositionend":return Wd(n);case"keypress":return n.which!==32?null:(Xd=!0,kd);case"textInput":return t=n.data,t===kd&&Xd?null:t;default:return null}}function Kv(t,n){if(Cs)return t==="compositionend"||!Kc&&jd(t,n)?(t=Id(),Xo=jc=ua=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vd&&n.locale!=="ko"?null:n.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Qv[t.type]:n==="textarea"}function Yd(t,n,a,o){As?Rs?Rs.push(o):Rs=[o]:As=o,n=Il(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Vr=null,kr=null;function Jv(t){D0(t,0)}function Zo(t){var n=at(t);if(Pn(n))return t}function Zd(t,n){if(t==="change")return n}var Kd=!1;if(Bi){var Qc;if(Bi){var Jc="oninput"in document;if(!Jc){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),Jc=typeof Qd.oninput=="function"}Qc=Jc}else Qc=!1;Kd=Qc&&(!document.documentMode||9<document.documentMode)}function Jd(){Vr&&(Vr.detachEvent("onpropertychange",$d),kr=Vr=null)}function $d(t){if(t.propertyName==="value"&&Zo(kr)){var n=[];Yd(n,kr,t,Vc(t)),zd(Jv,n)}}function $v(t,n,a){t==="focusin"?(Jd(),Vr=n,kr=a,Vr.attachEvent("onpropertychange",$d)):t==="focusout"&&Jd()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(kr)}function ex(t,n){if(t==="click")return Zo(n)}function nx(t,n){if(t==="input"||t==="change")return Zo(n)}function ix(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:ix;function Xr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ue.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,n){var a=tp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=tp(a)}}function np(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?np(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gi(t.document)}return n}function $c(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ax=Bi&&"documentMode"in document&&11>=document.documentMode,ws=null,tu=null,jr=null,eu=!1;function ap(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||ws==null||ws!==gi(o)||(o=ws,"selectionStart"in o&&$c(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jr&&Xr(jr,o)||(jr=o,o=Il(tu,"onSelect"),0<o.length&&(n=new qo("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=ws)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ds={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},nu={},sp={};Bi&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Za(t){if(nu[t])return nu[t];if(!Ds[t])return t;var n=Ds[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in sp)return nu[t]=n[a];return t}var rp=Za("animationend"),op=Za("animationiteration"),lp=Za("animationstart"),sx=Za("transitionrun"),rx=Za("transitionstart"),ox=Za("transitioncancel"),cp=Za("transitionend"),up=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function _i(t,n){up.set(t,n),Lt(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Us=0,au=0;function Qo(){for(var t=Us,n=au=Us=0;n<t;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}f!==0&&fp(a,c,f)}}function Jo(t,n,a,o){ai[Us++]=t,ai[Us++]=n,ai[Us++]=a,ai[Us++]=o,au|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function su(t,n,a,o){return Jo(t,n,a,o),$o(t)}function Ka(t,n){return Jo(t,null,null,n),$o(t)}function fp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Jt(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<po)throw po=0,mf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ns={};function lx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,o){return new lx(t,n,a,o)}function ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,o,c,f){var x=0;if(o=t,typeof t=="function")ru(t)&&(x=1);else if(typeof t=="string")x=dy(t,a,K.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=qn(31,a,n,c),t.elementType=w,t.lanes=f,t;case b:return Qa(a.children,c,f,n);case S:x=8,c|=24;break;case _:return t=qn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case X:return t=qn(13,a,n,c),t.elementType=X,t.lanes=f,t;case F:return t=qn(19,a,n,c),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:x=10;break t;case I:x=9;break t;case D:x=11;break t;case z:x=14;break t;case q:x=16,o=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=qn(x,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function Qa(t,n,a,o){return t=qn(7,t,o,n),t.lanes=a,t}function ou(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function dp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function lu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var pp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=pp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xt(n)},pp.set(t,n),n)}return{value:t,source:n,stack:Xt(n)}}var Ls=[],Os=0,el=null,Wr=0,ri=[],oi=0,fa=null,Ci=1,wi="";function Hi(t,n){Ls[Os++]=Wr,Ls[Os++]=el,el=t,Wr=n}function mp(t,n,a){ri[oi++]=Ci,ri[oi++]=wi,ri[oi++]=fa,fa=t;var o=Ci;t=wi;var c=32-Jt(o)-1;o&=~(1<<c),a+=1;var f=32-Jt(n)+c;if(30<f){var x=c-c%5;f=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Ci=1<<32-Jt(n)+c|a<<c|o,wi=f+t}else Ci=1<<f|a<<c|o,wi=t}function cu(t){t.return!==null&&(Hi(t,1),mp(t,1,0))}function uu(t){for(;t===el;)el=Ls[--Os],Ls[Os]=null,Wr=Ls[--Os],Ls[Os]=null;for(;t===fa;)fa=ri[--oi],ri[oi]=null,wi=ri[--oi],ri[oi]=null,Ci=ri[--oi],ri[oi]=null}function gp(t,n){ri[oi++]=Ci,ri[oi++]=wi,ri[oi++]=fa,Ci=n.id,wi=n.overflow,fa=t}var Sn=null,Xe=null,ye=!1,ha=null,li=!1,fu=Error(s(519));function da(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qr(si(n,t)),fu}function _p(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Ke]=t,n[xn]=o,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)de(go[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Ts(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||O0(n.textContent,a)?(o.popover!=null&&(de("beforetoggle",n),de("toggle",n)),o.onScroll!=null&&de("scroll",n),o.onScrollEnd!=null&&de("scrollend",n),o.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||da(t,!0)}function vp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Sn=Sn.return}}function Ps(t){if(t!==Sn)return!1;if(!ye)return vp(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Df(t.type,t.memoizedProps)),a=!a),a&&Xe&&da(t),vp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=k0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=k0(t)}else n===27?(n=Xe,Ra(t.type)?(t=Pf,Pf=null,Xe=t):Xe=n):Xe=Sn?ui(t.stateNode.nextSibling):null;return!0}function Ja(){Xe=Sn=null,ye=!1}function hu(){var t=ha;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),ha=null),t}function qr(t){ha===null?ha=[t]:ha.push(t)}var du=U(null),$a=null,Gi=null;function pa(t,n,a){yt(du,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=du.current,J(du)}function pu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function mu(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),pu(f.return,a,t),o||(x=null);break t}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),pu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function zs(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var T=c.type;Wn(c.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(c===Mt.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}c=c.return}t!==null&&mu(n,t,a,o),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ts(t){$a=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return xp($a,t)}function il(t,n){return $a===null&&ts(t),xp(t,n)}function xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(s(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var cx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ux=r.unstable_scheduleCallback,fx=r.unstable_NormalPriority,an={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new cx,data:new Map,refCount:0}}function Yr(t){t.refCount--,t.refCount===0&&ux(fx,function(){t.controller.abort()})}var Zr=null,_u=0,Is=0,Bs=null;function hx(t,n){if(Zr===null){var a=Zr=[];_u=0,Is=Sf(),Bs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return _u++,n.then(yp,yp),n}function yp(){if(--_u===0&&Zr!==null){Bs!==null&&(Bs.status="fulfilled");var t=Zr;Zr=null,Is=0,Bs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function dx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Sp=N.S;N.S=function(t,n){a0=gt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hx(t,n),Sp!==null&&Sp(t,n)};var es=U(null);function vu(){var t=es.current;return t!==null?t:Ge.pooledCache}function al(t,n){n===null?yt(es,es.current):yt(es,n.pool)}function Mp(){var t=vu();return t===null?null:{parent:an._currentValue,pool:t}}var Fs=Error(s(460)),xu=Error(s(474)),sl=Error(s(542)),rl={then:function(){}};function Ep(t){return t=t.status,t==="fulfilled"||t==="rejected"}function bp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ap(t),t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ap(t),t}throw is=n,Fs}}function ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(is=a,Fs):a}}var is=null;function Tp(){if(is===null)throw Error(s(459));var t=is;return is=null,t}function Ap(t){if(t===Fs||t===sl)throw Error(s(483))}var Hs=null,Kr=0;function ol(t){var n=Kr;return Kr+=1,Hs===null&&(Hs=[]),bp(Hs,t,n)}function Qr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Rp(t){function n(Q,k){if(t){var $=Q.deletions;$===null?(Q.deletions=[k],Q.flags|=16):$.push(k)}}function a(Q,k){if(!t)return null;for(;k!==null;)n(Q,k),k=k.sibling;return null}function o(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function c(Q,k){return Q=Fi(Q,k),Q.index=0,Q.sibling=null,Q}function f(Q,k,$){return Q.index=$,t?($=Q.alternate,$!==null?($=$.index,$<k?(Q.flags|=67108866,k):$):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function x(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function T(Q,k,$,_t){return k===null||k.tag!==6?(k=ou($,Q.mode,_t),k.return=Q,k):(k=c(k,$),k.return=Q,k)}function B(Q,k,$,_t){var qt=$.type;return qt===b?mt(Q,k,$.props.children,_t,$.key):k!==null&&(k.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===q&&ns(qt)===k.type)?(k=c(k,$.props),Qr(k,$),k.return=Q,k):(k=tl($.type,$.key,$.props,null,Q.mode,_t),Qr(k,$),k.return=Q,k)}function tt(Q,k,$,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=lu($,Q.mode,_t),k.return=Q,k):(k=c(k,$.children||[]),k.return=Q,k)}function mt(Q,k,$,_t,qt){return k===null||k.tag!==7?(k=Qa($,Q.mode,_t,qt),k.return=Q,k):(k=c(k,$),k.return=Q,k)}function xt(Q,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ou(""+k,Q.mode,$),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=tl(k.type,k.key,k.props,null,Q.mode,$),Qr($,k),$.return=Q,$;case E:return k=lu(k,Q.mode,$),k.return=Q,k;case q:return k=ns(k),xt(Q,k,$)}if(ot(k)||ft(k))return k=Qa(k,Q.mode,$,null),k.return=Q,k;if(typeof k.then=="function")return xt(Q,ol(k),$);if(k.$$typeof===O)return xt(Q,il(Q,k),$);ll(Q,k)}return null}function et(Q,k,$,_t){var qt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return qt!==null?null:T(Q,k,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===qt?B(Q,k,$,_t):null;case E:return $.key===qt?tt(Q,k,$,_t):null;case q:return $=ns($),et(Q,k,$,_t)}if(ot($)||ft($))return qt!==null?null:mt(Q,k,$,_t,null);if(typeof $.then=="function")return et(Q,k,ol($),_t);if($.$$typeof===O)return et(Q,k,il(Q,$),_t);ll(Q,$)}return null}function ut(Q,k,$,_t,qt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get($)||null,T(k,Q,""+_t,qt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return Q=Q.get(_t.key===null?$:_t.key)||null,B(k,Q,_t,qt);case E:return Q=Q.get(_t.key===null?$:_t.key)||null,tt(k,Q,_t,qt);case q:return _t=ns(_t),ut(Q,k,$,_t,qt)}if(ot(_t)||ft(_t))return Q=Q.get($)||null,mt(k,Q,_t,qt,null);if(typeof _t.then=="function")return ut(Q,k,$,ol(_t),qt);if(_t.$$typeof===O)return ut(Q,k,$,il(k,_t),qt);ll(k,_t)}return null}function Bt(Q,k,$,_t){for(var qt=null,Ae=null,Ht=k,oe=k=0,_e=null;Ht!==null&&oe<$.length;oe++){Ht.index>oe?(_e=Ht,Ht=null):_e=Ht.sibling;var Re=et(Q,Ht,$[oe],_t);if(Re===null){Ht===null&&(Ht=_e);break}t&&Ht&&Re.alternate===null&&n(Q,Ht),k=f(Re,k,oe),Ae===null?qt=Re:Ae.sibling=Re,Ae=Re,Ht=_e}if(oe===$.length)return a(Q,Ht),ye&&Hi(Q,oe),qt;if(Ht===null){for(;oe<$.length;oe++)Ht=xt(Q,$[oe],_t),Ht!==null&&(k=f(Ht,k,oe),Ae===null?qt=Ht:Ae.sibling=Ht,Ae=Ht);return ye&&Hi(Q,oe),qt}for(Ht=o(Ht);oe<$.length;oe++)_e=ut(Ht,Q,oe,$[oe],_t),_e!==null&&(t&&_e.alternate!==null&&Ht.delete(_e.key===null?oe:_e.key),k=f(_e,k,oe),Ae===null?qt=_e:Ae.sibling=_e,Ae=_e);return t&&Ht.forEach(function(Na){return n(Q,Na)}),ye&&Hi(Q,oe),qt}function Qt(Q,k,$,_t){if($==null)throw Error(s(151));for(var qt=null,Ae=null,Ht=k,oe=k=0,_e=null,Re=$.next();Ht!==null&&!Re.done;oe++,Re=$.next()){Ht.index>oe?(_e=Ht,Ht=null):_e=Ht.sibling;var Na=et(Q,Ht,Re.value,_t);if(Na===null){Ht===null&&(Ht=_e);break}t&&Ht&&Na.alternate===null&&n(Q,Ht),k=f(Na,k,oe),Ae===null?qt=Na:Ae.sibling=Na,Ae=Na,Ht=_e}if(Re.done)return a(Q,Ht),ye&&Hi(Q,oe),qt;if(Ht===null){for(;!Re.done;oe++,Re=$.next())Re=xt(Q,Re.value,_t),Re!==null&&(k=f(Re,k,oe),Ae===null?qt=Re:Ae.sibling=Re,Ae=Re);return ye&&Hi(Q,oe),qt}for(Ht=o(Ht);!Re.done;oe++,Re=$.next())Re=ut(Ht,Q,oe,Re.value,_t),Re!==null&&(t&&Re.alternate!==null&&Ht.delete(Re.key===null?oe:Re.key),k=f(Re,k,oe),Ae===null?qt=Re:Ae.sibling=Re,Ae=Re);return t&&Ht.forEach(function(by){return n(Q,by)}),ye&&Hi(Q,oe),qt}function Be(Q,k,$,_t){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var qt=$.key;k!==null;){if(k.key===qt){if(qt=$.type,qt===b){if(k.tag===7){a(Q,k.sibling),_t=c(k,$.props.children),_t.return=Q,Q=_t;break t}}else if(k.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===q&&ns(qt)===k.type){a(Q,k.sibling),_t=c(k,$.props),Qr(_t,$),_t.return=Q,Q=_t;break t}a(Q,k);break}else n(Q,k);k=k.sibling}$.type===b?(_t=Qa($.props.children,Q.mode,_t,$.key),_t.return=Q,Q=_t):(_t=tl($.type,$.key,$.props,null,Q.mode,_t),Qr(_t,$),_t.return=Q,Q=_t)}return x(Q);case E:t:{for(qt=$.key;k!==null;){if(k.key===qt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Q,k.sibling),_t=c(k,$.children||[]),_t.return=Q,Q=_t;break t}else{a(Q,k);break}else n(Q,k);k=k.sibling}_t=lu($,Q.mode,_t),_t.return=Q,Q=_t}return x(Q);case q:return $=ns($),Be(Q,k,$,_t)}if(ot($))return Bt(Q,k,$,_t);if(ft($)){if(qt=ft($),typeof qt!="function")throw Error(s(150));return $=qt.call($),Qt(Q,k,$,_t)}if(typeof $.then=="function")return Be(Q,k,ol($),_t);if($.$$typeof===O)return Be(Q,k,il(Q,$),_t);ll(Q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Q,k.sibling),_t=c(k,$),_t.return=Q,Q=_t):(a(Q,k),_t=ou($,Q.mode,_t),_t.return=Q,Q=_t),x(Q)):a(Q,k)}return function(Q,k,$,_t){try{Kr=0;var qt=Be(Q,k,$,_t);return Hs=null,qt}catch(Ht){if(Ht===Fs||Ht===sl)throw Ht;var Ae=qn(29,Ht,null,Q.mode);return Ae.lanes=_t,Ae.return=Q,Ae}finally{}}}var as=Rp(!0),Cp=Rp(!1),ma=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=$o(t),fp(t,null,a),n}return Jo(t,o,n,a),$o(t)}function Jr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Lr(t,a)}}function Mu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Eu=!1;function $r(){if(Eu){var t=Bs;if(t!==null)throw t}}function to(t,n,a,o){Eu=!1;var c=t.updateQueue;ma=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,tt=B.next;B.next=null,x===null?f=tt:x.next=tt,x=B;var mt=t.alternate;mt!==null&&(mt=mt.updateQueue,T=mt.lastBaseUpdate,T!==x&&(T===null?mt.firstBaseUpdate=tt:T.next=tt,mt.lastBaseUpdate=B))}if(f!==null){var xt=c.baseState;x=0,mt=tt=B=null,T=f;do{var et=T.lane&-536870913,ut=et!==T.lane;if(ut?(ge&et)===et:(o&et)===et){et!==0&&et===Is&&(Eu=!0),mt!==null&&(mt=mt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Bt=t,Qt=T;et=n;var Be=a;switch(Qt.tag){case 1:if(Bt=Qt.payload,typeof Bt=="function"){xt=Bt.call(Be,xt,et);break t}xt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Qt.payload,et=typeof Bt=="function"?Bt.call(Be,xt,et):Bt,et==null)break t;xt=v({},xt,et);break t;case 2:ma=!0}}et=T.callback,et!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[et]:ut.push(et))}else ut={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},mt===null?(tt=mt=ut,B=xt):mt=mt.next=ut,x|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ut=T,T=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);mt===null&&(B=xt),c.baseState=B,c.firstBaseUpdate=tt,c.lastBaseUpdate=mt,f===null&&(c.shared.lanes=0),Ma|=x,t.lanes=x,t.memoizedState=xt}}function wp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Dp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wp(a[t],n)}var Gs=U(null),cl=U(0);function Up(t,n){t=Qi,yt(cl,t),yt(Gs,n),Qi=t|n.baseLanes}function bu(){yt(cl,Qi),yt(Gs,Gs.current)}function Tu(){Qi=cl.current,J(Gs),J(cl)}var Yn=U(null),ci=null;function va(t){var n=t.alternate;yt(en,en.current&1),yt(Yn,t),ci===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(ci=t)}function Au(t){yt(en,en.current),yt(Yn,t),ci===null&&(ci=t)}function Np(t){t.tag===22?(yt(en,en.current),yt(Yn,t),ci===null&&(ci=t)):xa()}function xa(){yt(en,en.current),yt(Yn,Yn.current)}function Zn(t){J(Yn),ci===t&&(ci=null),J(en)}var en=U(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lf(a)||Of(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,se=null,ze=null,sn=null,fl=!1,Vs=!1,ss=!1,hl=0,eo=0,ks=null,px=0;function Je(){throw Error(s(321))}function Ru(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Cu(t,n,a,o,c,f){return ki=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?mm:ku,ss=!1,f=a(o,c),ss=!1,Vs&&(f=Op(n,a,o,c)),Lp(t),f}function Lp(t){N.H=ao;var n=ze!==null&&ze.next!==null;if(ki=0,sn=ze=se=null,fl=!1,eo=0,ks=null,n)throw Error(s(300));t===null||rn||(t=t.dependencies,t!==null&&nl(t)&&(rn=!0))}function Op(t,n,a,o){se=t;var c=0;do{if(Vs&&(ks=null),eo=0,Vs=!1,25<=c)throw Error(s(301));if(c+=1,sn=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=gm,f=n(a,o)}while(Vs);return f}function mx(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?no(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(se.flags|=1024),n}function wu(){var t=hl!==0;return hl=0,t}function Du(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uu(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}ki=0,sn=ze=se=null,Vs=!1,eo=hl=0,ks=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?se.memoizedState=sn=t:sn=sn.next=t,sn}function nn(){if(ze===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=sn===null?se.memoizedState:sn.next;if(n!==null)sn=n,ze=t;else{if(t===null)throw se.alternate===null?Error(s(467)):Error(s(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},sn===null?se.memoizedState=sn=t:sn=sn.next=t}return sn}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(t){var n=eo;return eo+=1,ks===null&&(ks=[]),t=bp(ks,t,n),n=se,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?mm:ku),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return no(t);if(t.$$typeof===O)return Mn(t)}throw Error(s(438,String(t)))}function Nu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Xi(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=nn();return Lu(n,ze,t)}function Lu(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=x=null,B=null,tt=n,mt=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(ge&xt)===xt:(ki&xt)===xt){var et=tt.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===Is&&(mt=!0);else if((ki&et)===et){tt=tt.next,et===Is&&(mt=!0);continue}else xt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(T=B=xt,x=f):B=B.next=xt,se.lanes|=et,Ma|=et;xt=tt.action,ss&&a(f,xt),f=tt.hasEagerState?tt.eagerState:a(f,xt)}else et={lane:xt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(T=B=et,x=f):B=B.next=et,se.lanes|=xt,Ma|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?x=f:B.next=T,!Wn(f,t.memoizedState)&&(rn=!0,mt&&(a=Bs,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=B,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ou(t){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Wn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Pp(t,n,a){var o=se,c=nn(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Wn((ze||c).memoizedState,a);if(x&&(c.memoizedState=a,rn=!0),c=c.queue,Iu(Bp.bind(null,o,c,t),[t]),c.getSnapshot!==n||x||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Xs(9,{destroy:void 0},Ip.bind(null,o,c,a,n),null),Ge===null)throw Error(s(349));f||(ki&127)!==0||zp(o,n,a)}return a}function zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=dl(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ip(t,n,a,o){n.value=a,n.getSnapshot=o,Fp(n)&&Hp(t)}function Bp(t,n,a){return a(function(){Fp(n)&&Hp(t)})}function Fp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Hp(t){var n=Ka(t,2);n!==null&&Vn(n,t,2)}function Pu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ss){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},n}function Gp(t,n,a,o){return t.baseState=a,Lu(t,ze,typeof o=="function"?o:Xi)}function gx(t,n,a,o,c){if(vl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Vp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Vp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=N.T,x={};N.T=x;try{var T=a(c,o),B=N.S;B!==null&&B(x,T),kp(t,n,T)}catch(tt){zu(t,n,tt)}finally{f!==null&&x.types!==null&&(f.types=x.types),N.T=f}}else try{f=a(c,o),kp(t,n,f)}catch(tt){zu(t,n,tt)}}function kp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Xp(t,n,o)},function(o){return zu(t,n,o)}):Xp(t,n,a)}function Xp(t,n,a){n.status="fulfilled",n.value=a,jp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Vp(t,a)))}function zu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==o)}t.action=null}function jp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Wp(t,n){return n}function qp(t,n){if(ye){var a=Ge.formState;if(a!==null){t:{var o=se;if(ye){if(Xe){e:{for(var c=Xe,f=li;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xe=ui(c.nextSibling),o=c.data==="F!";break t}}da(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wp,lastRenderedState:n},a.queue=o,a=hm.bind(null,se,o),o.dispatch=a,o=Pu(!1),f=Vu.bind(null,se,!1,o.queue),o=Ln(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=gx.bind(null,se,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Yp(t){var n=nn();return Zp(n,ze,t)}function Zp(t,n,a){if(n=Lu(t,n,Wp)[0],t=ml(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=no(n)}catch(x){throw x===Fs?sl:x}else o=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Xs(9,{destroy:void 0},_x.bind(null,c,a),null)),[o,f,t]}function _x(t,n){t.action=n}function Kp(t){var n=nn(),a=ze;if(a!==null)return Zp(n,a,t);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Xs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=se.updateQueue,n===null&&(n=dl(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Qp(){return nn().memoizedState}function gl(t,n,a,o){var c=Ln();se.flags|=t,c.memoizedState=Xs(1|n,{destroy:void 0},a,o===void 0?null:o)}function _l(t,n,a,o){var c=nn();o=o===void 0?null:o;var f=c.memoizedState.inst;ze!==null&&o!==null&&Ru(o,ze.memoizedState.deps)?c.memoizedState=Xs(n,f,a,o):(se.flags|=t,c.memoizedState=Xs(1|n,f,a,o))}function Jp(t,n){gl(8390656,8,t,n)}function Iu(t,n){_l(2048,8,t,n)}function vx(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=dl(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function $p(t){var n=nn().memoizedState;return vx({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function tm(t,n){return _l(4,2,t,n)}function em(t,n){return _l(4,4,t,n)}function nm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function im(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,nm.bind(null,n,t),a)}function Bu(){}function am(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ru(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function sm(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ru(n,o[1]))return o[0];if(o=t(),ss){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function Fu(t,n,a){return a===void 0||(ki&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=r0(),se.lanes|=t,Ma|=t,a)}function rm(t,n,a,o){return Wn(a,n)?a:Gs.current!==null?(t=Fu(t,a,o),Wn(t,n)||(rn=!0),t):(ki&42)===0||(ki&1073741824)!==0&&(ge&261930)===0?(rn=!0,t.memoizedState=a):(t=r0(),se.lanes|=t,Ma|=t,n)}function om(t,n,a,o,c){var f=H.p;H.p=f!==0&&8>f?f:8;var x=N.T,T={};N.T=T,Vu(t,!1,n,a);try{var B=c(),tt=N.S;if(tt!==null&&tt(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var mt=dx(B,o);io(t,n,mt,Jn(t))}else io(t,n,o,Jn(t))}catch(xt){io(t,n,{then:function(){},status:"rejected",reason:xt},Jn())}finally{H.p=f,x!==null&&T.types!==null&&(x.types=T.types),N.T=x}}function xx(){}function Hu(t,n,a,o){if(t.tag!==5)throw Error(s(476));var c=lm(t).queue;om(t,c,n,W,a===null?xx:function(){return cm(t),a(o)})}function lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function cm(t){var n=lm(t);n.next===null&&(n=t.alternate.memoizedState),io(t,n.next.queue,{},Jn())}function Gu(){return Mn(So)}function um(){return nn().memoizedState}function fm(){return nn().memoizedState}function yx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=ga(a);var o=_a(n,t,a);o!==null&&(Vn(o,n,a),Jr(o,n,a)),n={cache:gu()},t.payload=n;return}n=n.return}}function Sx(t,n,a){var o=Jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?dm(n,a):(a=su(t,n,a,o),a!==null&&(Vn(a,t,o),pm(a,n,o)))}function hm(t,n,a){var o=Jn();io(t,n,a,o)}function io(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))dm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,x))return Jo(t,n,c,0),Ge===null&&Qo(),!1}catch{}finally{}if(a=su(t,n,c,o),a!==null)return Vn(a,t,o),pm(a,n,o),!0}return!1}function Vu(t,n,a,o){if(o={lane:2,revertLane:Sf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(s(479))}else n=su(t,a,o,2),n!==null&&Vn(n,t,2)}function vl(t){var n=t.alternate;return t===se||n!==null&&n===se}function dm(t,n){Vs=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function pm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Lr(t,a)}}var ao={readContext:Mn,use:pl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};ao.useEffectEvent=Je;var mm={readContext:Mn,use:pl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Jp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,nm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var o=t();if(ss){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Ln();if(a!==void 0){var c=a(n);if(ss){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Sx.bind(null,se,t),[o.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Pu(t);var n=t.queue,a=hm.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Bu,useDeferredValue:function(t,n){var a=Ln();return Fu(a,t,n)},useTransition:function(){var t=Pu(!1);return t=om.bind(null,se,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=se,c=Ln();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ge===null)throw Error(s(349));(ge&127)!==0||zp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Jp(Bp.bind(null,o,f,t),[t]),o.flags|=2048,Xs(9,{destroy:void 0},Ip.bind(null,o,f,a,n),null),a},useId:function(){var t=Ln(),n=Ge.identifierPrefix;if(ye){var a=wi,o=Ci;a=(o&~(1<<32-Jt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=px++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gu,useFormState:qp,useActionState:qp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vu.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nu,useCacheRefresh:function(){return Ln().memoizedState=yx.bind(null,se)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ku={readContext:Mn,use:pl,useCallback:am,useContext:Mn,useEffect:Iu,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:em,useMemo:sm,useReducer:ml,useRef:Qp,useState:function(){return ml(Xi)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=nn();return rm(a,ze.memoizedState,t,n)},useTransition:function(){var t=ml(Xi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Pp,useId:um,useHostTransitionStatus:Gu,useFormState:Yp,useActionState:Yp,useOptimistic:function(t,n){var a=nn();return Gp(a,ze,t,n)},useMemoCache:Nu,useCacheRefresh:fm};ku.useEffectEvent=$p;var gm={readContext:Mn,use:pl,useCallback:am,useContext:Mn,useEffect:Iu,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:em,useMemo:sm,useReducer:Ou,useRef:Qp,useState:function(){return Ou(Xi)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=nn();return ze===null?Fu(a,t,n):rm(a,ze.memoizedState,t,n)},useTransition:function(){var t=Ou(Xi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Pp,useId:um,useHostTransitionStatus:Gu,useFormState:Kp,useActionState:Kp,useOptimistic:function(t,n){var a=nn();return ze!==null?Gp(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:fm};gm.useEffectEvent=$p;function Xu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ju={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Jn(),c=ga(o);c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,o),n!==null&&(Vn(n,t,o),Jr(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Jn(),c=ga(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,o),n!==null&&(Vn(n,t,o),Jr(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),o=ga(a);o.tag=2,n!=null&&(o.callback=n),n=_a(t,o,a),n!==null&&(Vn(n,t,a),Jr(n,t,a))}};function _m(t,n,a,o,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!Xr(a,o)||!Xr(c,f):!0}function vm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&ju.enqueueReplaceState(n,n.state,null)}function rs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function xm(t){Ko(t)}function ym(t){console.error(t)}function Sm(t){Ko(t)}function xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Mm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Wu(t,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(t,n)},a}function Em(t){return t=ga(t),t.tag=3,t}function bm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Mm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Mm(n,a,o),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Mx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Ul():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),vf(t,o,c)),!1;case 22:return a.flags|=65536,o===rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),vf(t,o,c)),!1}throw Error(s(435,a.tag))}return vf(t,o,c),Ul(),!1}if(ye)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==fu&&(t=Error(s(422),{cause:o}),qr(si(t,a)))):(o!==fu&&(n=Error(s(423),{cause:o}),qr(si(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=si(o,a),c=Wu(t.stateNode,o,c),Mu(t,c),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:o});if(f=si(f,a),ho===null?ho=[f]:ho.push(f),$e!==4&&($e=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Wu(a.stateNode,o,t),Mu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Em(c),bm(c,t,a,o),Mu(a,c),!1}a=a.return}while(a!==null);return!1}var qu=Error(s(461)),rn=!1;function En(t,n,a,o){n.child=t===null?Cp(n,null,a,o):as(n,t.child,a,o)}function Tm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var T in o)T!=="ref"&&(x[T]=o[T])}else x=o;return ts(n),o=Cu(t,n,a,x,f,c),T=wu(),t!==null&&!rn?(Du(t,n,c),ji(t,n,c)):(ye&&T&&cu(n),n.flags|=1,En(t,n,o,c),n.child)}function Am(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Rm(t,n,f,o,c)):(t=tl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ef(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xr,a(x,o)&&t.ref===n.ref)return ji(t,n,c)}return n.flags|=1,t=Fi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Rm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Xr(f,o)&&t.ref===n.ref)if(rn=!1,n.pendingProps=o=f,ef(t,c))(t.flags&131072)!==0&&(rn=!0);else return n.lanes=t.lanes,ji(t,n,c)}return Yu(t,n,a,o,c)}function Cm(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return wm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?Up(n,f):bu(),Np(n);else return o=n.lanes=536870912,wm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(al(n,f.cachePool),Up(n,f),xa(),n.memoizedState=null):(t!==null&&al(n,null),bu(),xa());return En(t,n,c,a),n.child}function so(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wm(t,n,a,o,c){var f=vu();return f=f===null?null:{parent:an._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),bu(),Np(n),t!==null&&zs(t,n,o,!0),n.childLanes=c,null}function yl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Dm(t,n,a){return as(n,t.child,null,a),t=yl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function Ex(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(o.mode==="hidden")return t=yl(n,o),n.lanes=536870912,so(null,t);if(Au(n),(t=Xe)?(t=V0(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=dp(t),a.return=n,n.child=a,Sn=n,Xe=null)):t=null,t===null)throw da(n);return n.lanes=536870912,null}return yl(n,o)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Au(n),c)if(n.flags&256)n.flags&=-257,n=Dm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(rn||zs(t,n,a,!1),c=(a&t.childLanes)!==0,rn||c){if(o=Ge,o!==null&&(x=Ri(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Ka(t,x),Vn(o,t,x),qu;Ul(),n=Dm(t,n,a)}else t=f.treeContext,Xe=ui(x.nextSibling),Sn=n,ye=!0,ha=null,li=!1,t!==null&&gp(n,t),n=yl(n,o),n.flags|=4096;return n}return t=Fi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yu(t,n,a,o,c){return ts(n),a=Cu(t,n,a,o,void 0,c),o=wu(),t!==null&&!rn?(Du(t,n,c),ji(t,n,c)):(ye&&o&&cu(n),n.flags|=1,En(t,n,a,c),n.child)}function Um(t,n,a,o,c,f){return ts(n),n.updateQueue=null,a=Op(n,o,a,c),Lp(t),o=wu(),t!==null&&!rn?(Du(t,n,f),ji(t,n,f)):(ye&&o&&cu(n),n.flags|=1,En(t,n,a,f),n.child)}function Nm(t,n,a,o,c){if(ts(n),n.stateNode===null){var f=Ns,x=a.contextType;typeof x=="object"&&x!==null&&(f=Mn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},yu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Mn(x):Ns,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Xu(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&ju.enqueueReplaceState(f,f.state,null),to(n,o,f,c),$r(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=rs(a,T);f.props=B;var tt=f.context,mt=a.contextType;x=Ns,typeof mt=="object"&&mt!==null&&(x=Mn(mt));var xt=a.getDerivedStateFromProps;mt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==x)&&vm(n,f,o,x),ma=!1;var et=n.memoizedState;f.state=et,to(n,o,f,c),$r(),tt=n.memoizedState,T||et!==tt||ma?(typeof xt=="function"&&(Xu(n,a,xt,o),tt=n.memoizedState),(B=ma||_m(n,a,B,o,et,tt,x))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=x,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Su(t,n),x=n.memoizedProps,mt=rs(a,x),f.props=mt,xt=n.pendingProps,et=f.context,tt=a.contextType,B=Ns,typeof tt=="object"&&tt!==null&&(B=Mn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==xt||et!==B)&&vm(n,f,o,B),ma=!1,et=n.memoizedState,f.state=et,to(n,o,f,c),$r();var ut=n.memoizedState;x!==xt||et!==ut||ma||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof T=="function"&&(Xu(n,a,T,o),ut=n.memoizedState),(mt=ma||_m(n,a,mt,o,et,ut,B)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=B,o=mt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Sl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=as(n,t.child,null,c),n.child=as(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ji(t,n,c),t}function Lm(t,n,a,o){return Ja(),n.flags|=256,En(t,n,a,o),n.child}var Zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ku(t){return{baseLanes:t,cachePool:Mp()}}function Qu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function Om(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(c?va(n):xa(),(t=Xe)?(t=V0(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=dp(t),a.return=n,n.child=a,Sn=n,Xe=null)):t=null,t===null)throw da(n);return Of(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,c?(xa(),c=n.mode,T=Ml({mode:"hidden",children:T},c),o=Qa(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Ku(a),o.childLanes=Qu(t,x,a),n.memoizedState=Zu,so(null,o)):(va(n),Ju(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=$u(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),T=o.fallback,c=n.mode,o=Ml({mode:"visible",children:o.children},c),T=Qa(T,c,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,as(n,t.child,null,a),o=n.child,o.memoizedState=Ku(a),o.childLanes=Qu(t,x,a),n.memoizedState=Zu,n=so(null,o));else if(va(n),Of(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var tt=x.dgst;x=tt,o=Error(s(419)),o.stack="",o.digest=x,qr({value:o,source:null,stack:null}),n=$u(t,n,a)}else if(rn||zs(t,n,a,!1),x=(a&t.childLanes)!==0,rn||x){if(x=Ge,x!==null&&(o=Ri(x,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,Ka(t,o),Vn(x,t,o),qu;Lf(T)||Ul(),n=$u(t,n,a)}else Lf(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Xe=ui(T.nextSibling),Sn=n,ye=!0,ha=null,li=!1,t!==null&&gp(n,t),n=Ju(n,o.children),n.flags|=4096);return n}return c?(xa(),T=o.fallback,c=n.mode,B=t.child,tt=B.sibling,o=Fi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,tt!==null?T=Fi(tt,T):(T=Qa(T,c,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,so(null,o),o=n.child,T=t.child.memoizedState,T===null?T=Ku(a):(c=T.cachePool,c!==null?(B=an._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Mp(),T={baseLanes:T.baseLanes|a,cachePool:c}),o.memoizedState=T,o.childLanes=Qu(t,x,a),n.memoizedState=Zu,so(t.child,o)):(va(n),a=t.child,t=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Ju(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function $u(t,n,a){return as(n,t.child,null,a),t=Ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Pm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),pu(t.return,n,a)}function tf(t,n,a,o,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function zm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var x=en.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,yt(en,x),En(t,n,o,a),o=ye?Wr:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pm(t,a,n);else if(t.tag===19)Pm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),tf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}tf(n,!0,a,null,f,o);break;case"together":tf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(zs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function bx(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),pa(n,an,t.memoizedState.cache),Ja();break;case 27:case 5:Kt(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Au(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Om(t,n,a):(va(n),t=ji(t,n,a),t!==null?t.sibling:null);va(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(zs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return zm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(en,en.current),o)break;return null;case 22:return n.lanes=0,Cm(t,n,a,n.pendingProps);case 24:pa(n,an,t.memoizedState.cache)}return ji(t,n,a)}function Im(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)rn=!0;else{if(!ef(t,a)&&(n.flags&128)===0)return rn=!1,bx(t,n,a);rn=(t.flags&131072)!==0}else rn=!1,ye&&(n.flags&1048576)!==0&&mp(n,Wr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=ns(n.elementType),n.type=t,typeof t=="function")ru(t)?(o=rs(t,o),n.tag=1,n=Nm(null,n,t,o,a)):(n.tag=0,n=Yu(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Tm(null,n,t,o,a);break t}else if(c===z){n.tag=14,n=Am(null,n,t,o,a);break t}}throw n=pt(t)||t,Error(s(306,n,""))}}return n;case 0:return Yu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=rs(o,n.pendingProps),Nm(t,n,o,c,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Su(t,n),to(n,o,null,a);var x=n.memoizedState;if(o=x.cache,pa(n,an,o),o!==f.cache&&mu(n,[an],a,!0),$r(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Lm(t,n,o,a);break t}else if(o!==c){c=si(Error(s(424)),n),qr(c),n=Lm(t,n,o,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=ui(t.firstChild),Sn=n,ye=!0,ha=null,li=!0,a=Cp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),o===c){n=ji(t,n,a);break t}En(t,n,o,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=Y0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,o=Bl(Et.current).createElement(a),o[Ke]=n,o[xn]=t,bn(o,a,t),j(o),n.stateNode=o):n.memoizedState=Y0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Kt(n),t===null&&ye&&(o=n.stateNode=j0(n.type,n.pendingProps,Et.current),Sn=n,li=!0,c=Xe,Ra(n.type)?(Pf=c,Xe=ui(o.firstChild)):Xe=c),En(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((c=o=Xe)&&(o=ty(o,n.type,n.pendingProps,li),o!==null?(n.stateNode=o,Sn=n,Xe=ui(o.firstChild),li=!1,c=!0):c=!1),c||da(n)),Kt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,Df(c,f)?o=null:x!==null&&Df(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Cu(t,n,mx,null,null,a),So._currentValue=c),Sl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&ye&&((t=a=Xe)&&(a=ey(a,n.pendingProps,li),a!==null?(n.stateNode=a,Sn=n,Xe=null,t=!0):t=!1),t||da(n)),null;case 13:return Om(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=as(n,null,o,a):En(t,n,o,a),n.child;case 11:return Tm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ts(n),c=Mn(c),o=o(c),n.flags|=1,En(t,n,o,a),n.child;case 14:return Am(t,n,n.type,n.pendingProps,a);case 15:return Rm(t,n,n.type,n.pendingProps,a);case 19:return zm(t,n,a);case 31:return Ex(t,n,a);case 22:return Cm(t,n,a,n.pendingProps);case 24:return ts(n),o=Mn(an),t===null?(c=vu(),c===null&&(c=Ge,f=gu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},yu(n),pa(n,an,c)):((t.lanes&a)!==0&&(Su(t,n),to(n,null,null,a),$r()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,an,o)):(o=f.cache,pa(n,an,o),o!==c.cache&&mu(n,[an],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Wi(t){t.flags|=4}function nf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(u0())t.flags|=8192;else throw is=rl,xu}else t.flags&=-16777217}function Bm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$0(n))if(u0())t.flags|=8192;else throw is=rl,xu}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?cn():536870912,t.lanes|=n,Ys|=n)}function ro(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Tx(t,n,a){var o=n.pendingProps;switch(uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(an),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ps(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hu())),je(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Wi(n),f!==null?(je(n),Bm(n,f)):(je(n),nf(n,c,null,o,a))):f?f!==t.memoizedState?(Wi(n),je(n),Bm(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Wi(n),je(n),nf(n,c,t,o,a)),null;case 27:if(Ve(n),a=Et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}t=K.current,Ps(n)?_p(n):(t=j0(c,o,a),n.stateNode=t,Wi(n))}return je(n),null;case 5:if(Ve(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(f=K.current,Ps(n))_p(n);else{var x=Bl(Et.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(c,{is:o.is}):x.createElement(c)}}f[Ke]=n,f[xn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(bn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Wi(n)}}return je(n),nf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Et.current,Ps(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[Ke]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||O0(t.nodeValue,a)),t||da(n,!0)}else t=Bl(t).createTextNode(o),t[Ke]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Ps(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ke]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ps(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ke]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),je(n),null);case 4:return Zt(),t===null&&Tf(n.stateNode.containerInfo),je(n),null;case 10:return Vi(n.type),je(n),null;case 19:if(J(en),o=n.memoizedState,o===null)return je(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)ro(o,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,ro(o,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)hp(a,t),a=a.sibling;return yt(en,en.current&1|2),ye&&Hi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&gt()>Cl&&(n.flags|=128,c=!0,ro(o,!1),n.lanes=4194304)}else{if(!c)if(t=ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!ye)return je(n),null}else 2*gt()-o.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,c=!0,ro(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=gt(),t.sibling=null,a=en.current,yt(en,c?a&1|2:a&1),ye&&Hi(n,o.treeForkCount),t):(je(n),null);case 22:case 23:return Zn(n),Tu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&J(es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(an),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ax(t,n){switch(uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(an),Zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ve(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(en),null;case 4:return Zt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Zn(n),Tu(),t!==null&&J(es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(an),null;case 25:return null;default:return null}}function Fm(t,n){switch(uu(n),n.tag){case 3:Vi(an),Zt();break;case 26:case 27:case 5:Ve(n);break;case 4:Zt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:J(en);break;case 10:Vi(n.type);break;case 22:case 23:Zn(n),Tu(),t!==null&&J(es);break;case 24:Vi(an)}}function oo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==c)}}catch(T){Le(n,n.return,T)}}function ya(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var x=o.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var B=a,tt=T;try{tt()}catch(mt){Le(c,B,mt)}}}o=o.next}while(o!==f)}}catch(mt){Le(n,n.return,mt)}}function Hm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Dp(n,a)}catch(o){Le(t,t.return,o)}}}function Gm(t,n,a){a.props=rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Le(t,n,o)}}function lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Le(t,n,c)}}function Di(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Le(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(t,n,c)}else a.current=null}function Vm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Le(t,t.return,c)}}function af(t,n,a){try{var o=t.stateNode;Yx(o,t.type,a,n),o[xn]=n}catch(c){Le(t,t.return,c)}}function km(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function sf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(o!==4&&(o===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(rf(t,n,a),t=t.sibling;t!==null;)rf(t,n,a),t=t.sibling}function bl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(bl(t,n,a),t=t.sibling;t!==null;)bl(t,n,a),t=t.sibling}function Xm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[Ke]=t,n[xn]=a}catch(f){Le(t,t.return,f)}}var qi=!1,on=!1,of=!1,jm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Rx(t,n){if(t=t.containerInfo,Cf=jl,t=ip(t),$c(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,B=-1,tt=0,mt=0,xt=t,et=null;e:for(;;){for(var ut;xt!==a||c!==0&&xt.nodeType!==3||(T=x+c),xt!==f||o!==0&&xt.nodeType!==3||(B=x+o),xt.nodeType===3&&(x+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)et=xt,xt=ut;for(;;){if(xt===t)break e;if(et===a&&++tt===c&&(T=x),et===f&&++mt===o&&(B=x),(ut=xt.nextSibling)!==null)break;xt=et,et=xt.parentNode}xt=ut}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:t,selectionRange:a},jl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Bt=rs(a.type,c);t=o.getSnapshotBeforeUpdate(Bt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Qt){Le(a,a.return,Qt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Wm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),o&4&&oo(5,a);break;case 1:if(Zi(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Le(a,a.return,x)}else{var c=rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Le(a,a.return,x)}}o&64&&Hm(a),o&512&&lo(a,a.return);break;case 3:if(Zi(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dp(t,n)}catch(x){Le(a,a.return,x)}}break;case 27:n===null&&o&4&&Xm(a);case 26:case 5:Zi(t,a),n===null&&o&4&&Vm(a),o&512&&lo(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),o&4&&Zm(t,a);break;case 13:Zi(t,a),o&4&&Km(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=zx.bind(null,a),ny(t,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||on,c=qi;var f=on;qi=o,(on=n)&&!f?Ki(t,a,(a.subtreeFlags&8772)!==0):Zi(t,a),qi=c,on=f}break;case 30:break;default:Zi(t,a)}}function qm(t){var n=t.alternate;n!==null&&(t.alternate=null,qm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,Bn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)Ym(t,n,a),a=a.sibling}function Ym(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:on||Di(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Di(a,n);var o=qe,c=Bn;Ra(a.type)&&(qe=a.stateNode,Bn=!1),Yi(t,n,a),vo(a.stateNode),qe=o,Bn=c;break;case 5:on||Di(a,n);case 6:if(o=qe,c=Bn,qe=null,Yi(t,n,a),qe=o,Bn=c,qe!==null)if(Bn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:qe!==null&&(Bn?(t=qe,H0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),nr(t)):H0(qe,a.stateNode));break;case 4:o=qe,c=Bn,qe=a.stateNode.containerInfo,Bn=!0,Yi(t,n,a),qe=o,Bn=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),on||ya(4,a,n),Yi(t,n,a);break;case 1:on||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Gm(a,n,o)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,Yi(t,n,a),on=o;break;default:Yi(t,n,a)}}function Zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{nr(t)}catch(a){Le(n,n.return,a)}}}function Km(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nr(t)}catch(a){Le(n,n.return,a)}}function Cx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new jm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new jm),n;default:throw Error(s(435,t.tag))}}function Tl(t,n){var a=Cx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Ix.bind(null,t,o);o.then(c,c)}})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(Ra(T.type)){qe=T.stateNode,Bn=!1;break t}break;case 5:qe=T.stateNode,Bn=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(qe===null)throw Error(s(160));Ym(f,x,c),qe=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Qm(n,t),n=n.sibling}var vi=null;function Qm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Hn(t),o&4&&(ya(3,t,t.return),oo(3,t),ya(5,t,t.return));break;case 1:Fn(n,t),Hn(t),o&512&&(on||a===null||Di(a,a.return)),o&64&&qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=vi;if(Fn(n,t),Hn(t),o&512&&(on||a===null||Di(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Wa]||f[Ke]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,o,a),f[Ke]=t,j(f),o=f;break t;case"link":var x=Q0("link","href",c).get(o+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;case"meta":if(x=Q0("meta","content",c).get(o+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[Ke]=t,j(f),o=f}t.stateNode=o}else J0(c,t.type,t.stateNode);else t.stateNode=K0(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?J0(c,t.type,t.stateNode):K0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&af(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Hn(t),o&512&&(on||a===null||Di(a,a.return)),a!==null&&o&4&&af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Hn(t),o&512&&(on||a===null||Di(a,a.return)),t.flags&32){c=t.stateNode;try{zn(c,"")}catch(Bt){Le(t,t.return,Bt)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,af(t,c,a!==null?a.memoizedProps:c)),o&1024&&(of=!0);break;case 6:if(Fn(n,t),Hn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Bt){Le(t,t.return,Bt)}}break;case 3:if(Gl=null,c=vi,vi=Fl(n.containerInfo),Fn(n,t),vi=c,Hn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{nr(n.containerInfo)}catch(Bt){Le(t,t.return,Bt)}of&&(of=!1,Jm(t));break;case 4:o=vi,vi=Fl(t.stateNode.containerInfo),Fn(n,t),Hn(t),vi=o;break;case 12:Fn(n,t),Hn(t);break;case 31:Fn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tl(t,o)));break;case 13:Fn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=gt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tl(t,o)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=qi,mt=on;if(qi=tt||c,on=mt||B,Fn(n,t),on=mt,qi=tt,Hn(t),o&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||qi||on||os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=B.stateNode;var xt=B.memoizedProps.style,et=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Bt){Le(B,B.return,Bt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Bt){Le(B,B.return,Bt)}}}else if(n.tag===18){if(a===null){B=n;try{var ut=B.stateNode;c?G0(ut,!0):G0(B.stateNode,!1)}catch(Bt){Le(B,B.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Tl(t,a))));break;case 19:Fn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tl(t,o)));break;case 30:break;case 21:break;default:Fn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(km(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=sf(t);bl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(zn(x,""),a.flags&=-33);var T=sf(t);bl(t,T,x);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=sf(t);rf(t,tt,B);break;default:throw Error(s(161))}}catch(mt){Le(t,t.return,mt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Jm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wm(t,n.alternate,n),n=n.sibling}function os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),os(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Gm(n,n.return,a),os(n);break;case 27:vo(n.stateNode);case 26:case 5:Di(n,n.return),os(n);break;case 22:n.memoizedState===null&&os(n);break;case 30:os(n);break;default:os(n)}t=t.sibling}}function Ki(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(c,f,a),oo(4,f);break;case 1:if(Ki(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Le(o,o.return,tt)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)wp(B[c],T)}catch(tt){Le(o,o.return,tt)}}a&&x&64&&Hm(f),lo(f,f.return);break;case 27:Xm(f);case 26:case 5:Ki(c,f,a),a&&o===null&&x&4&&Vm(f),lo(f,f.return);break;case 12:Ki(c,f,a);break;case 31:Ki(c,f,a),a&&x&4&&Zm(c,f);break;case 13:Ki(c,f,a),a&&x&4&&Km(c,f);break;case 22:f.memoizedState===null&&Ki(c,f,a),lo(f,f.return);break;case 30:break;default:Ki(c,f,a)}n=n.sibling}}function lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Yr(a))}function cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yr(t))}function xi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$m(t,n,a,o),n=n.sibling}function $m(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,o),c&2048&&oo(9,n);break;case 1:xi(t,n,a,o);break;case 3:xi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yr(t)));break;case 12:if(c&2048){xi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Le(n,n.return,B)}}else xi(t,n,a,o);break;case 31:xi(t,n,a,o);break;case 13:xi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,o):co(t,n):f._visibility&2?xi(t,n,a,o):(f._visibility|=2,js(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&lf(x,n);break;case 24:xi(t,n,a,o),c&2048&&cf(n.alternate,n);break;default:xi(t,n,a,o)}}function js(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,T=a,B=o,tt=x.flags;switch(x.tag){case 0:case 11:case 15:js(f,x,T,B,c),oo(8,x);break;case 23:break;case 22:var mt=x.stateNode;x.memoizedState!==null?mt._visibility&2?js(f,x,T,B,c):co(f,x):(mt._visibility|=2,js(f,x,T,B,c)),c&&tt&2048&&lf(x.alternate,x);break;case 24:js(f,x,T,B,c),c&&tt&2048&&cf(x.alternate,x);break;default:js(f,x,T,B,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:co(a,o),c&2048&&lf(o.alternate,o);break;case 24:co(a,o),c&2048&&cf(o.alternate,o);break;default:co(a,o)}n=n.sibling}}var uo=8192;function Ws(t,n,a){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)t0(t,n,a),t=t.sibling}function t0(t,n,a){switch(t.tag){case 26:Ws(t,n,a),t.flags&uo&&t.memoizedState!==null&&py(a,vi,t.memoizedState,t.memoizedProps);break;case 5:Ws(t,n,a);break;case 3:case 4:var o=vi;vi=Fl(t.stateNode.containerInfo),Ws(t,n,a),vi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=uo,uo=16777216,Ws(t,n,a),uo=o):Ws(t,n,a));break;default:Ws(t,n,a)}}function e0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,i0(o,t)}e0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n0(t),t=t.sibling}function n0(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&ya(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):fo(t);break;default:fo(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,i0(o,t)}e0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function i0(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Yr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=t;mn!==null;){o=mn;var c=o.sibling,f=o.return;if(qm(o),o===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var wx={getCacheForType:function(t){var n=Mn(an),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(an).controller.signal}},Dx=typeof WeakMap=="function"?WeakMap:Map,we=0,Ge=null,he=null,ge=0,Ne=0,Kn=null,Sa=!1,qs=!1,uf=!1,Qi=0,$e=0,Ma=0,ls=0,ff=0,Qn=0,Ys=0,ho=null,Gn=null,hf=!1,Rl=0,a0=0,Cl=1/0,wl=null,Ea=null,fn=0,ba=null,Zs=null,Ji=0,df=0,pf=null,s0=null,po=0,mf=null;function Jn(){return(we&2)!==0&&ge!==0?ge&-ge:N.T!==null?Sf():Or()}function r0(){if(Qn===0)if((ge&536870912)===0||ye){var t=ht;ht<<=1,(ht&3932160)===0&&(ht=262144),Qn=t}else Qn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Qn}function Vn(t,n,a){(t===Ge&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)&&(Ks(t,0),Ta(t,ge,Qn,!1)),vn(t,a),((we&2)===0||t!==Ge)&&(t===Ge&&((we&2)===0&&(ls|=a),$e===4&&Ta(t,ge,Qn,!1)),Ui(t))}function o0(t,n,a){if((we&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||$t(t,n),c=o?Lx(t,n):_f(t,n,!0),f=o;do{if(c===0){qs&&!o&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ux(a)){c=_f(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;c=ho;var B=T.current.memoizedState.isDehydrated;if(B&&(Ks(T,x).flags|=256),x=_f(T,x,!1),x!==2){if(uf&&!B){T.errorRecoveryDisabledLanes|=f,ls|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Ks(t,0),Ta(t,n,0,!0);break}t:{switch(o=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ta(o,n,Qn,!Sa);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Rl+300-gt(),10<c)){if(Ta(o,n,Qn,!Sa),Dt(o,0,!0)!==0)break t;Ji=n,o.timeoutHandle=B0(l0.bind(null,o,a,Gn,wl,hf,n,Qn,ls,Ys,Sa,f,"Throttled",-0,0),c);break t}l0(o,a,Gn,wl,hf,n,Qn,ls,Ys,Sa,f,null,-0,0)}}break}while(!0);Ui(t)}function l0(t,n,a,o,c,f,x,T,B,tt,mt,xt,et,ut){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},t0(n,f,xt);var Bt=(f&62914560)===f?Rl-gt():(f&4194048)===f?a0-gt():0;if(Bt=my(xt,Bt),Bt!==null){Ji=f,t.cancelPendingCommit=Bt(g0.bind(null,t,n,f,a,o,c,x,T,B,mt,xt,null,et,ut)),Ta(t,f,x,!tt);return}}g0(t,n,f,a,o,c,x,T,B)}function Ux(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,o){n&=~ff,n&=~ls,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Jt(c),x=1<<f;o[f]=-1,c&=~x}a!==0&&Nr(t,a,n)}function Dl(){return(we&6)===0?(mo(0),!1):!0}function gf(){if(he!==null){if(Ne===0)var t=he.return;else t=he,Gi=$a=null,Uu(t),Hs=null,Kr=0,t=he;for(;t!==null;)Fm(t.alternate,t),t=t.return;he=null}}function Ks(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Qx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,gf(),Ge=t,he=a=Fi(t.current,null),ge=n,Ne=0,Kn=null,Sa=!1,qs=$t(t,n),uf=!1,Ys=Qn=ff=ls=Ma=$e=0,Gn=ho=null,hf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Jt(o),f=1<<c;n|=t[c],o&=~f}return Qi=n,Qo(),a}function c0(t,n){se=null,N.H=ao,n===Fs||n===sl?(n=Tp(),Ne=3):n===xu?(n=Tp(),Ne=4):Ne=n===qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,he===null&&($e=1,xl(t,si(n,t.current)))}function u0(){var t=Yn.current;return t===null?!0:(ge&4194048)===ge?ci===null:(ge&62914560)===ge||(ge&536870912)!==0?t===ci:!1}function f0(){var t=N.H;return N.H=ao,t===null?ao:t}function h0(){var t=N.A;return N.A=wx,t}function Ul(){$e=4,Sa||(ge&4194048)!==ge&&Yn.current!==null||(qs=!0),(Ma&134217727)===0&&(ls&134217727)===0||Ge===null||Ta(Ge,ge,Qn,!1)}function _f(t,n,a){var o=we;we|=2;var c=f0(),f=h0();(Ge!==t||ge!==n)&&(wl=null,Ks(t,n)),n=!1;var x=$e;t:do try{if(Ne!==0&&he!==null){var T=he,B=Kn;switch(Ne){case 8:gf(),x=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var tt=Ne;if(Ne=0,Kn=null,Qs(t,T,B,tt),a&&qs){x=0;break t}break;default:tt=Ne,Ne=0,Kn=null,Qs(t,T,B,tt)}}Nx(),x=$e;break}catch(mt){c0(t,mt)}while(!0);return n&&t.shellSuspendCounter++,Gi=$a=null,we=o,N.H=c,N.A=f,he===null&&(Ge=null,ge=0,Qo()),x}function Nx(){for(;he!==null;)d0(he)}function Lx(t,n){var a=we;we|=2;var o=f0(),c=h0();Ge!==t||ge!==n?(wl=null,Cl=gt()+500,Ks(t,n)):qs=$t(t,n);t:do try{if(Ne!==0&&he!==null){n=he;var f=Kn;e:switch(Ne){case 1:Ne=0,Kn=null,Qs(t,n,f,1);break;case 2:case 9:if(Ep(f)){Ne=0,Kn=null,p0(n);break}n=function(){Ne!==2&&Ne!==9||Ge!==t||(Ne=7),Ui(t)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Ep(f)?(Ne=0,Kn=null,p0(n)):(Ne=0,Kn=null,Qs(t,n,f,7));break;case 5:var x=null;switch(he.tag){case 26:x=he.memoizedState;case 5:case 27:var T=he;if(x?$0(x):T.stateNode.complete){Ne=0,Kn=null;var B=T.sibling;if(B!==null)he=B;else{var tt=T.return;tt!==null?(he=tt,Nl(tt)):he=null}break e}}Ne=0,Kn=null,Qs(t,n,f,5);break;case 6:Ne=0,Kn=null,Qs(t,n,f,6);break;case 8:gf(),$e=6;break t;default:throw Error(s(462))}}Ox();break}catch(mt){c0(t,mt)}while(!0);return Gi=$a=null,N.H=o,N.A=c,we=a,he!==null?0:(Ge=null,ge=0,Qo(),$e)}function Ox(){for(;he!==null&&!A();)d0(he)}function d0(t){var n=Im(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?Nl(t):he=n}function p0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Um(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Um(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Uu(n);default:Fm(a,n),n=he=hp(n,Qi),n=Im(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?Nl(t):he=n}function Qs(t,n,a,o){Gi=$a=null,Uu(n),Hs=null,Kr=0;var c=n.return;try{if(Mx(t,c,n,a,ge)){$e=1,xl(t,si(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;$e=1,xl(t,si(a,t.current)),he=null;return}n.flags&32768?(ye||o===1?t=!0:qs||(ge&536870912)!==0?t=!1:(Sa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),m0(n,t)):Nl(n)}function Nl(t){var n=t;do{if((n.flags&32768)!==0){m0(n,Sa);return}t=n.return;var a=Tx(n.alternate,n,Qi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);$e===0&&($e=5)}function m0(t,n){do{var a=Ax(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);$e=6,he=null}function g0(t,n,a,o,c,f,x,T,B){t.cancelPendingCommit=null;do Ll();while(fn!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=au,pi(t,a,f,x,T,B),t===Ge&&(he=Ge=null,ge=0),Zs=n,ba=t,Ji=a,df=f,pf=c,s0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Bx(wt,function(){return S0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,c=H.p,H.p=2,x=we,we|=4;try{Rx(t,n,a)}finally{we=x,H.p=c,N.T=o}}fn=1,_0(),v0(),x0()}}function _0(){if(fn===1){fn=0;var t=ba,n=Zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=H.p;H.p=2;var c=we;we|=4;try{Qm(n,t);var f=wf,x=ip(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&np(T.ownerDocument.documentElement,T)){if(B!==null&&$c(T)){var tt=B.start,mt=B.end;if(mt===void 0&&(mt=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(mt,T.value.length);else{var xt=T.ownerDocument||document,et=xt&&xt.defaultView||window;if(et.getSelection){var ut=et.getSelection(),Bt=T.textContent.length,Qt=Math.min(B.start,Bt),Be=B.end===void 0?Qt:Math.min(B.end,Bt);!ut.extend&&Qt>Be&&(x=Be,Be=Qt,Qt=x);var Q=ep(T,Qt),k=ep(T,Be);if(Q&&k&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var $=xt.createRange();$.setStart(Q.node,Q.offset),ut.removeAllRanges(),Qt>Be?(ut.addRange($),ut.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ut.addRange($))}}}}for(xt=[],ut=T;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xt.length;T++){var _t=xt[T];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}jl=!!Cf,wf=Cf=null}finally{we=c,H.p=o,N.T=a}}t.current=n,fn=2}}function v0(){if(fn===2){fn=0;var t=ba,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=H.p;H.p=2;var c=we;we|=4;try{Wm(t,n.alternate,n)}finally{we=c,H.p=o,N.T=a}}fn=3}}function x0(){if(fn===4||fn===3){fn=0,it();var t=ba,n=Zs,a=Ji,o=s0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Zs=ba=null,y0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),bs(a),n=n.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,c=H.p,H.p=2,N.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var T=o[x];f(T.value,{componentStack:T.stack})}}finally{N.T=n,H.p=c}}(Ji&3)!==0&&Ll(),Ui(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===mf?po++:(po=0,mf=t):po=0,mo(0)}}function y0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Yr(n)))}function Ll(){return _0(),v0(),x0(),S0()}function S0(){if(fn!==5)return!1;var t=ba,n=df;df=0;var a=bs(Ji),o=N.T,c=H.p;try{H.p=32>a?32:a,N.T=null,a=pf,pf=null;var f=ba,x=Ji;if(fn=0,Zs=ba=null,Ji=0,(we&6)!==0)throw Error(s(331));var T=we;if(we|=4,n0(f.current),$m(f,f.current,x,a),we=T,mo(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{H.p=c,N.T=o,y0(t,n)}}function M0(t,n,a){n=si(a,n),n=Wu(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(vn(t,2),Ui(t))}function Le(t,n,a){if(t.tag===3)M0(t,t,a);else for(;n!==null;){if(n.tag===3){M0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ea===null||!Ea.has(o))){t=si(a,t),a=Em(2),o=_a(n,a,2),o!==null&&(bm(a,o,n,t),vn(o,2),Ui(o));break}}n=n.return}}function vf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Dx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(uf=!0,c.add(a),t=Px.bind(null,t,n,a),n.then(t,t))}function Px(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(ge&a)===a&&($e===4||$e===3&&(ge&62914560)===ge&&300>gt()-Rl?(we&2)===0&&Ks(t,0):ff|=a,Ys===ge&&(Ys=0)),Ui(t)}function E0(t,n){n===0&&(n=cn()),t=Ka(t,n),t!==null&&(vn(t,n),Ui(t))}function zx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),E0(t,a)}function Ix(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),E0(t,a)}function Bx(t,n){return kt(t,n)}var Ol=null,Js=null,xf=!1,Pl=!1,yf=!1,Aa=0;function Ui(t){t!==Js&&t.next===null&&(Js===null?Ol=Js=t:Js=Js.next=t),Pl=!0,xf||(xf=!0,Hx())}function mo(t,n){if(!yf&&Pl){yf=!0;do for(var a=!1,o=Ol;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var x=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Jt(42|t)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,R0(o,f))}else f=ge,f=Dt(o,o===Ge?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||$t(o,f)||(a=!0,R0(o,f));o=o.next}while(a);yf=!1}}function Fx(){b0()}function b0(){Pl=xf=!1;var t=0;Aa!==0&&Kx()&&(t=Aa);for(var n=gt(),a=null,o=Ol;o!==null;){var c=o.next,f=T0(o,n);f===0?(o.next=null,a===null?Ol=c:a.next=c,c===null&&(Js=a)):(a=o,(t!==0||(f&3)!==0)&&(Pl=!0)),o=c}fn!==0&&fn!==5||mo(t),Aa!==0&&(Aa=0)}function T0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Jt(f),T=1<<x,B=c[x];B===-1?((T&a)===0||(T&o)!==0)&&(c[x]=We(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ge,a=ge,a=Dt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&L(o),bs(a)){case 2:case 8:a=Gt;break;case 32:a=wt;break;case 268435456:a=me;break;default:a=wt}return o=A0.bind(null,t),a=kt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&L(o),t.callbackPriority=2,t.callbackNode=null,2}function A0(t,n){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var o=ge;return o=Dt(t,t===Ge?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(o0(t,o,n),T0(t,gt()),t.callbackNode!=null&&t.callbackNode===a?A0.bind(null,t):null)}function R0(t,n){if(Ll())return null;o0(t,n,!0)}function Hx(){Jx(function(){(we&6)!==0?kt(vt,Fx):b0()})}function Sf(){if(Aa===0){var t=Is;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Aa=t}return Aa}function C0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function w0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Gx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=C0((c[xn]||null).action),x=o.submitter;x&&(n=(n=x[xn]||null)?C0(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new qo("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Aa!==0){var B=x?w0(c,x):new FormData(c);Hu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=x?w0(c,x):new FormData(c),Hu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Mf=0;Mf<iu.length;Mf++){var Ef=iu[Mf],Vx=Ef.toLowerCase(),kx=Ef[0].toUpperCase()+Ef.slice(1);_i(Vx,"on"+kx)}_i(rp,"onAnimationEnd"),_i(op,"onAnimationIteration"),_i(lp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(sx,"onTransitionRun"),_i(rx,"onTransitionStart"),_i(ox,"onTransitionCancel"),_i(cp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function D0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var T=o[x],B=T.instance,tt=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(mt){Ko(mt)}c.currentTarget=null,f=B}else for(x=0;x<o.length;x++){if(T=o[x],B=T.instance,tt=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(mt){Ko(mt)}c.currentTarget=null,f=B}}}}function de(t,n){var a=n[Pr];a===void 0&&(a=n[Pr]=new Set);var o=t+"__bubble";a.has(o)||(U0(n,t,2,!1),a.add(o))}function bf(t,n,a){var o=0;n&&(o|=4),U0(a,t,o,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Tf(t){if(!t[zl]){t[zl]=!0,Tt.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||bf(a,!1,t),bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,bf("selectionchange",!1,n))}}function U0(t,n,a,o){switch(rg(n)){case 2:var c=vy;break;case 8:c=xy;break;default:c=Hf}a=c.bind(null,n,a,t),c=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Af(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var T=o.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=R(T),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=f=x;continue t}T=T.parentNode}}o=o.return}zd(function(){var tt=f,mt=Vc(a),xt=[];t:{var et=up.get(t);if(et!==void 0){var ut=qo,Bt=t;switch(t){case"keypress":if(jo(a)===0)break t;case"keydown":case"keyup":ut=Iv;break;case"focusin":Bt="focus",ut=Yc;break;case"focusout":Bt="blur",ut=Yc;break;case"beforeblur":case"afterblur":ut=Yc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Hv;break;case rp:case op:case lp:ut=Cv;break;case cp:ut=Vv;break;case"scroll":case"scrollend":ut=Ev;break;case"wheel":ut=Xv;break;case"copy":case"cut":case"paste":ut=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Gd;break;case"toggle":case"beforetoggle":ut=Wv}var Qt=(n&4)!==0,Be=!Qt&&(t==="scroll"||t==="scrollend"),Q=Qt?et!==null?et+"Capture":null:et;Qt=[];for(var k=tt,$;k!==null;){var _t=k;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||Q===null||(_t=Ir(k,Q),_t!=null&&Qt.push(_o(k,_t,$))),Be)break;k=k.return}0<Qt.length&&(et=new ut(et,Bt,null,a,mt),xt.push({event:et,listeners:Qt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",ut=t==="mouseout"||t==="pointerout",et&&a!==Gc&&(Bt=a.relatedTarget||a.fromElement)&&(R(Bt)||Bt[zi]))break t;if((ut||et)&&(et=mt.window===mt?mt:(et=mt.ownerDocument)?et.defaultView||et.parentWindow:window,ut?(Bt=a.relatedTarget||a.toElement,ut=tt,Bt=Bt?R(Bt):null,Bt!==null&&(Be=u(Bt),Qt=Bt.tag,Bt!==Be||Qt!==5&&Qt!==27&&Qt!==6)&&(Bt=null)):(ut=null,Bt=tt),ut!==Bt)){if(Qt=Fd,_t="onMouseLeave",Q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Gd,_t="onPointerLeave",Q="onPointerEnter",k="pointer"),Be=ut==null?et:at(ut),$=Bt==null?et:at(Bt),et=new Qt(_t,k+"leave",ut,a,mt),et.target=Be,et.relatedTarget=$,_t=null,R(mt)===tt&&(Qt=new Qt(Q,k+"enter",Bt,a,mt),Qt.target=$,Qt.relatedTarget=Be,_t=Qt),Be=_t,ut&&Bt)e:{for(Qt=jx,Q=ut,k=Bt,$=0,_t=Q;_t;_t=Qt(_t))$++;_t=0;for(var qt=k;qt;qt=Qt(qt))_t++;for(;0<$-_t;)Q=Qt(Q),$--;for(;0<_t-$;)k=Qt(k),_t--;for(;$--;){if(Q===k||k!==null&&Q===k.alternate){Qt=Q;break e}Q=Qt(Q),k=Qt(k)}Qt=null}else Qt=null;ut!==null&&N0(xt,et,ut,Qt,!1),Bt!==null&&Be!==null&&N0(xt,Be,Bt,Qt,!0)}}t:{if(et=tt?at(tt):window,ut=et.nodeName&&et.nodeName.toLowerCase(),ut==="select"||ut==="input"&&et.type==="file")var Ae=Zd;else if(qd(et))if(Kd)Ae=nx;else{Ae=tx;var Ht=$v}else ut=et.nodeName,!ut||ut.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?tt&&Hc(tt.elementType)&&(Ae=Zd):Ae=ex;if(Ae&&(Ae=Ae(t,tt))){Yd(xt,Ae,a,mt);break t}Ht&&Ht(t,et,tt),t==="focusout"&&tt&&et.type==="number"&&tt.memoizedProps.value!=null&&An(et,"number",et.value)}switch(Ht=tt?at(tt):window,t){case"focusin":(qd(Ht)||Ht.contentEditable==="true")&&(ws=Ht,tu=tt,jr=null);break;case"focusout":jr=tu=ws=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,ap(xt,a,mt);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":ap(xt,a,mt)}var oe;if(Kc)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Cs?jd(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Vd&&a.locale!=="ko"&&(Cs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Cs&&(oe=Id()):(ua=mt,jc="value"in ua?ua.value:ua.textContent,Cs=!0)),Ht=Il(tt,_e),0<Ht.length&&(_e=new Hd(_e,t,null,a,mt),xt.push({event:_e,listeners:Ht}),oe?_e.data=oe:(oe=Wd(a),oe!==null&&(_e.data=oe)))),(oe=Yv?Zv(t,a):Kv(t,a))&&(_e=Il(tt,"onBeforeInput"),0<_e.length&&(Ht=new Hd("onBeforeInput","beforeinput",null,a,mt),xt.push({event:Ht,listeners:_e}),Ht.data=oe)),Gx(xt,t,tt,a,mt)}D0(xt,n)})}function _o(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Il(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ir(t,a),c!=null&&o.unshift(_o(t,c,f)),c=Ir(t,n),c!=null&&o.push(_o(t,c,f))),t.tag===3)return o;t=t.return}return[]}function jx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function N0(t,n,a,o,c){for(var f=n._reactName,x=[];a!==null&&a!==o;){var T=a,B=T.alternate,tt=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||tt===null||(B=tt,c?(tt=Ir(a,f),tt!=null&&x.unshift(_o(a,tt,B))):c||(tt=Ir(a,f),tt!=null&&x.push(_o(a,tt,B)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function L0(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(qx,"")}function O0(t,n){return n=L0(n),L0(t)===n}function Ie(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(t,""+o);break;case"className":ke(t,"class",o);break;case"tabIndex":ke(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(t,a,o);break;case"style":Od(t,o,f);break;case"data":if(n!=="object"){ke(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ko(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ko(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ii);break;case"onScroll":o!=null&&de("scroll",t);break;case"onScrollEnd":o!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":de("beforetoggle",t),de("toggle",t),xe(t,"popover",o);break;case"xlinkActuate":Te(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Te(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Te(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Te(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Te(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Te(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Te(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Te(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Te(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":xe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sv.get(a)||a,xe(t,a,o))}}function Rf(t,n,a,o,c,f){switch(a){case"style":Od(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?zn(t,o):(typeof o=="number"||typeof o=="bigint")&&zn(t,""+o);break;case"onScroll":o!=null&&de("scroll",t);break;case"onScrollEnd":o!=null&&de("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):xe(t,a,o)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,f,x,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),o&&Ie(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var T=f=x=c=null,B=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":c=mt;break;case"type":x=mt;break;case"checked":B=mt;break;case"defaultChecked":tt=mt;break;case"value":f=mt;break;case"defaultValue":T=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Ie(t,n,o,mt,a,null)}}Nn(t,f,T,B,tt,x,c,!1);return;case"select":de("invalid",t),o=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":o=T;default:Ie(t,n,c,T,a,null)}n=f,a=x,t.multiple=!!o,n!=null?Qe(t,!!o,n,!1):a!=null&&Qe(t,!!o,a,!0);return;case"textarea":de("invalid",t),f=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ie(t,n,x,T,a,null)}Ts(t,o,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(t,n,B,o,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(o=0;o<go.length;o++)de(go[o],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,tt,o,a,null)}return;default:if(Hc(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Rf(t,n,mt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ie(t,n,T,o,a,null))}function Yx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,B=null,tt=null,mt=null;for(ut in a){var xt=a[ut];if(a.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=xt;default:o.hasOwnProperty(ut)||Ie(t,n,ut,null,o,xt)}}for(var et in o){var ut=o[et];if(xt=a[et],o.hasOwnProperty(et)&&(ut!=null||xt!=null))switch(et){case"type":f=ut;break;case"name":c=ut;break;case"checked":tt=ut;break;case"defaultChecked":mt=ut;break;case"value":x=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==xt&&Ie(t,n,et,ut,o,xt)}}Pe(t,x,T,B,tt,mt,f,c);return;case"select":ut=x=T=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ut=B;default:o.hasOwnProperty(f)||Ie(t,n,f,null,o,B)}for(c in o)if(f=o[c],B=a[c],o.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==B&&Ie(t,n,c,f,o,B)}n=T,a=x,o=ut,et!=null?Qe(t,!!a,et,!1):!!o!=!!a&&(n!=null?Qe(t,!!a,n,!0):Qe(t,!!a,a?[]:"",!1));return;case"textarea":ut=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(t,n,T,null,o,c)}for(x in o)if(c=o[x],f=a[x],o.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":et=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ie(t,n,x,c,o,f)}yn(t,et,ut);return;case"option":for(var Bt in a)if(et=a[Bt],a.hasOwnProperty(Bt)&&et!=null&&!o.hasOwnProperty(Bt))switch(Bt){case"selected":t.selected=!1;break;default:Ie(t,n,Bt,null,o,et)}for(B in o)if(et=o[B],ut=a[B],o.hasOwnProperty(B)&&et!==ut&&(et!=null||ut!=null))switch(B){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ie(t,n,B,et,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)et=a[Qt],a.hasOwnProperty(Qt)&&et!=null&&!o.hasOwnProperty(Qt)&&Ie(t,n,Qt,null,o,et);for(tt in o)if(et=o[tt],ut=a[tt],o.hasOwnProperty(tt)&&et!==ut&&(et!=null||ut!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Ie(t,n,tt,et,o,ut)}return;default:if(Hc(n)){for(var Be in a)et=a[Be],a.hasOwnProperty(Be)&&et!==void 0&&!o.hasOwnProperty(Be)&&Rf(t,n,Be,void 0,o,et);for(mt in o)et=o[mt],ut=a[mt],!o.hasOwnProperty(mt)||et===ut||et===void 0&&ut===void 0||Rf(t,n,mt,et,o,ut);return}}for(var Q in a)et=a[Q],a.hasOwnProperty(Q)&&et!=null&&!o.hasOwnProperty(Q)&&Ie(t,n,Q,null,o,et);for(xt in o)et=o[xt],ut=a[xt],!o.hasOwnProperty(xt)||et===ut||et==null&&ut==null||Ie(t,n,xt,et,o,ut)}function P0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,x=c.initiatorType,T=c.duration;if(f&&T&&P0(x)){for(x=0,T=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],tt=B.startTime;if(tt>T)break;var mt=B.transferSize,xt=B.initiatorType;mt&&P0(xt)&&(B=B.responseEnd,x+=mt*(B<T?1:(T-tt)/(B-tt)))}if(--o,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Cf=null,wf=null;function Bl(t){return t.nodeType===9?t:t.ownerDocument}function z0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uf=null;function Kx(){var t=window.event;return t&&t.type==="popstate"?t===Uf?!1:(Uf=t,!0):(Uf=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(t){return F0.resolve(null).then(t).catch($x)}:B0;function $x(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function H0(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),nr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,vo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[Wa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&vo(t.ownerDocument.body);a=c}while(a);nr(n)}function G0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ty(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Wa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function ey(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function V0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Lf(t){return t.data==="$?"||t.data==="$~"}function Of(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ny(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Pf=null;function k0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function X0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function j0(t,n,a){switch(n=Bl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zr(t)}var fi=new Map,W0=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=H.d;H.d={f:iy,r:ay,D:sy,C:ry,L:oy,m:ly,X:uy,S:cy,M:fy};function iy(){var t=$i.f(),n=Dl();return t||n}function ay(t){var n=Z(t);n!==null&&n.tag===5&&n.type==="form"?cm(n):$i.r(t)}var $s=typeof document>"u"?null:document;function q0(t,n,a){var o=$s;if(o&&typeof n=="string"&&n){var c=pn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),W0.has(c)||(W0.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",t),j(n),o.head.appendChild(n)))}}function sy(t){$i.D(t),q0("dns-prefetch",t,null)}function ry(t,n){$i.C(t,n),q0("preconnect",t,n)}function oy(t,n,a){$i.L(t,n,a);var o=$s;if(o&&t&&n){var c='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+pn(a.imageSizes)+'"]')):c+='[href="'+pn(t)+'"]';var f=c;switch(n){case"style":f=tr(t);break;case"script":f=er(t)}fi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(xo(f))||n==="script"&&o.querySelector(yo(f))||(n=o.createElement("link"),bn(n,"link",t),j(n),o.head.appendChild(n)))}}function ly(t,n){$i.m(t,n);var a=$s;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=er(t)}if(!fi.has(f)&&(t=v({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}o=a.createElement("link"),bn(o,"link",t),j(o),a.head.appendChild(o)}}}function cy(t,n,a){$i.S(t,n,a);var o=$s;if(o&&t){var c=rt(o).hoistableStyles,f=tr(t);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=o.querySelector(xo(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&zf(t,a);var B=x=o.createElement("link");j(B),bn(B,"link",t),B._p=new Promise(function(tt,mt){B.onload=tt,B.onerror=mt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Hl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function uy(t,n){$i.X(t,n);var a=$s;if(a&&t){var o=rt(a).hoistableScripts,c=er(t),f=o.get(c);f||(f=a.querySelector(yo(c)),f||(t=v({src:t,async:!0},n),(n=fi.get(c))&&If(t,n),f=a.createElement("script"),j(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function fy(t,n){$i.M(t,n);var a=$s;if(a&&t){var o=rt(a).hoistableScripts,c=er(t),f=o.get(c);f||(f=a.querySelector(yo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&If(t,n),f=a.createElement("script"),j(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Y0(t,n,a,o){var c=(c=Et.current)?Fl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tr(a.href),a=rt(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=tr(a.href);var f=rt(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(xo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||hy(c,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=er(a),a=rt(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function tr(t){return'href="'+pn(t)+'"'}function xo(t){return'link[rel="stylesheet"]['+t+"]"}function Z0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function hy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),j(n),t.head.appendChild(n))}function er(t){return'[src="'+pn(t)+'"]'}function yo(t){return"script[async]"+t}function K0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+pn(a.href)+'"]');if(o)return n.instance=o,j(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),j(o),bn(o,"style",c),Hl(o,a.precedence,t),n.instance=o;case"stylesheet":c=tr(a.href);var f=t.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,j(f),f;o=Z0(a),(c=fi.get(c))&&zf(o,c),f=(t.ownerDocument||t).createElement("link"),j(f);var x=f;return x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),bn(f,"link",o),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=er(a.src),(c=t.querySelector(yo(f)))?(n.instance=c,j(c),c):(o=a,(c=fi.get(f))&&(o=v({},a),If(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),j(c),bn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Hl(o,a.precedence,t));return n.instance}function Hl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,x=0;x<o.length;x++){var T=o[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function Q0(t,n,a){if(Gl===null){var o=new Map,c=Gl=new Map;c.set(a,o)}else c=Gl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Wa]||f[Ke]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=o.get(x);T?T.push(f):o.set(x,[f])}}return o}function J0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function dy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function py(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=tr(o.href),f=n.querySelector(xo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,j(f);return}f=n.ownerDocument||n,o=Z0(o),(c=fi.get(c))&&zf(o,c),f=f.createElement("link"),j(f);var x=f;x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),bn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bf=0;function my(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Bf===0&&(Bf=62500*Zx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Bf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(gy,t),kl=null,Vl.call(t))}function gy(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var o=a.get(null);else{a=new Map,kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,c),a.set(x,c),this.count++,o=Vl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var So={$$typeof:O,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function _y(t,n,a,o,c,f,x,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function tg(t,n,a,o,c,f,x,T,B,tt,mt,xt){return t=new _y(t,n,a,x,B,tt,mt,xt,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=gu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},yu(f),t}function eg(t){return t?(t=Ns,t):Ns}function ng(t,n,a,o,c,f){c=eg(c),o.context===null?o.context=c:o.pendingContext=c,o=ga(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=_a(t,o,n),a!==null&&(Vn(a,t,n),Jr(a,t,n))}function ig(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Ff(t,n){ig(t,n),(t=t.alternate)&&ig(t,n)}function ag(t){if(t.tag===13||t.tag===31){var n=Ka(t,67108864);n!==null&&Vn(n,t,67108864),Ff(t,67108864)}}function sg(t){if(t.tag===13||t.tag===31){var n=Jn();n=Xa(n);var a=Ka(t,n);a!==null&&Vn(a,t,n),Ff(t,n)}}var jl=!0;function vy(t,n,a,o){var c=N.T;N.T=null;var f=H.p;try{H.p=2,Hf(t,n,a,o)}finally{H.p=f,N.T=c}}function xy(t,n,a,o){var c=N.T;N.T=null;var f=H.p;try{H.p=8,Hf(t,n,a,o)}finally{H.p=f,N.T=c}}function Hf(t,n,a,o){if(jl){var c=Gf(o);if(c===null)Af(t,n,o,Wl,a),og(t,o);else if(Sy(c,t,n,a,o))o.stopPropagation();else if(og(t,o),n&4&&-1<yy.indexOf(t)){for(;c!==null;){var f=Z(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ct(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var B=1<<31-Jt(x);T.entanglements[1]|=B,x&=~B}Ui(f),(we&6)===0&&(Cl=gt()+500,mo(0))}}break;case 31:case 13:T=Ka(f,2),T!==null&&Vn(T,f,2),Dl(),Ff(f,2)}if(f=Gf(o),f===null&&Af(t,n,o,Wl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Af(t,n,o,null,a)}}function Gf(t){return t=Vc(t),Vf(t)}var Wl=null;function Vf(t){if(Wl=null,t=R(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wl=t,null}function rg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case vt:return 2;case Gt:return 8;case wt:case zt:return 32;case me:return 268435456;default:return 32}default:return 32}}var kf=!1,Ca=null,wa=null,Da=null,Mo=new Map,Eo=new Map,Ua=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function og(t,n){switch(t){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function bo(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Z(n),n!==null&&ag(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Sy(t,n,a,o,c){switch(n){case"focusin":return Ca=bo(Ca,t,n,a,o,c),!0;case"dragenter":return wa=bo(wa,t,n,a,o,c),!0;case"mouseover":return Da=bo(Da,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,bo(Mo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,bo(Eo.get(f)||null,t,n,a,o,c)),!0}return!1}function lg(t){var n=R(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ja(t.priority,function(){sg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ja(t.priority,function(){sg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Gf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Gc=o,a.target.dispatchEvent(o),Gc=null}else return n=Z(a),n!==null&&ag(n),t.blockedOn=a,!1;n.shift()}return!0}function cg(t,n,a){ql(t)&&a.delete(n)}function My(){kf=!1,Ca!==null&&ql(Ca)&&(Ca=null),wa!==null&&ql(wa)&&(wa=null),Da!==null&&ql(Da)&&(Da=null),Mo.forEach(cg),Eo.forEach(cg)}function Yl(t,n){t.blockedOn===n&&(t.blockedOn=null,kf||(kf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,My)))}var Zl=null;function ug(t){Zl!==t&&(Zl=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Vf(o||a)===null)continue;break}var f=Z(a);f!==null&&(t.splice(n,3),n-=3,Hu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function nr(t){function n(B){return Yl(B,t)}Ca!==null&&Yl(Ca,t),wa!==null&&Yl(wa,t),Da!==null&&Yl(Da,t),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<Ua.length;a++){var o=Ua[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)lg(a),a.blockedOn===null&&Ua.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],x=c[xn]||null;if(typeof f=="function")x||ug(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[xn]||null)T=x.formAction;else if(Vf(c)!==null)continue}else T=x.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),ug(a)}}}function fg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Xf(t){this._internalRoot=t}Kl.prototype.render=Xf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Jn();ng(a,o,t,n,null,null)},Kl.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ng(t.current,2,null,t,null,null),Dl(),n[zi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Or();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,t),a===0&&lg(t)}};var hg=e.version;if(hg!=="19.2.8")throw Error(s(527,hg,"19.2.8"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Ey={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{jt=Ql.inject(Ey),Vt=Ql}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",c=xm,f=ym,x=Sm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=tg(t,1,!1,null,null,a,o,null,c,f,x,fg),t[zi]=n.current,Tf(t),new Xf(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,c="",f=xm,x=ym,T=Sm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=tg(t,1,!0,n,a??null,o,c,B,f,x,T,fg),n.context=eg(null),a=n.current,o=Jn(),o=Xa(o),c=ga(o),c.callback=null,_a(a,c,o),a=o,n.current.lanes=a,vn(n,a),Ui(n),t[zi]=n.current,Tf(t),new Kl(n)},Ao.version="19.2.8",Ao}var Mg;function Oy(){if(Mg)return qf.exports;Mg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),qf.exports=Ly(),qf.exports}var Py=Oy();const zy=C_(Py),Qf=[{id:"CH3_TMC2_SHIV_SHAKTI_SP",mission:"Chandrayaan-3",instrument:"TMC-2 (Terrain Mapping Camera-2)",productUri:"URN:ISRO:CH3:TMC2:RAW:L1:20230823T124218_SHIV_SHAKTI_V01.ZIP",targetFeature:"Shiv Shakti Point (Lunar South Pole - Prime Landing Zone)",targetCoordinates:{lat:-69.373,lon:32.348,latStr:"69.373° S",lonStr:"32.348° E"},footprintPolygon:[[-68.8,31.2],[-68.9,33.6],[-69.8,33.4],[-69.7,31]],acquisitionTimeUtc:"2023-08-23T12:34:28.412Z",geometry:{incidenceDeg:64.28,emissionDeg:21.82,phaseDeg:45.1,solarAzimuthDeg:124.6,spacecraftAltitudeKm:100.2,groundSamplingDistanceM:5,solarElevationDeg:18.4},initialHapke:{w:.342,thetaBar:24.5,g:-.21,b0:1.45,h:.065},currentHapke:{w:.342,thetaBar:24.5,g:-.21,b0:1.45,h:.065},signalToNoiseRatioDb:148.5,subSolarPoint:{lat:-1.2,lon:45.8},subSpacecraftPoint:{lat:-69.3,lon:32.2},waterIceAbsorptionIndex:.14,meanReflectance:.088,spectralBands:["Band-1 (Pan: 500-850 nm)"],pds4XmlLabel:`<?xml version="1.0" encoding="UTF-8"?>
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
 */const Iy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var By={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=re.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>re.createElement("svg",{ref:m,...By,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:w_("lucide",l),...d},[...h.map(([p,g])=>re.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(r,e)=>{const i=re.forwardRef(({className:s,...l},u)=>re.createElement(Fy,{ref:u,iconNode:e,className:w_(`lucide-${Iy(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Gy=Ze("ArrowRight",Hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ky=Ze("Check",Vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],jy=Ze("ChevronDown",Xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],qy=Ze("ChevronUp",Wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Eg=Ze("CircleAlert",Yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ky=Ze("CircleCheck",Zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Jy=Ze("Compass",Qy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],tS=Ze("Copy",$y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],nS=Ze("Download",eS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",key:"gkbcor"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}]],aS=Ze("FileArchive",iS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],rS=Ze("FileJson",sS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],D_=Ze("FileText",oS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],cS=Ze("Globe",lS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],fS=Ze("Info",uS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],dS=Ze("LoaderCircle",hS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],mS=Ze("Orbit",pS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],_S=Ze("RefreshCw",gS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],U_=Ze("RotateCcw",vS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],yS=Ze("ShieldCheck",xS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],MS=Ze("Upload",SS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],N_=Ze("X",ES);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],TS=Ze("ZoomIn",bS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],RS=Ze("ZoomOut",AS),CS=({appState:r,dataset:e,onReset:i,onOpenPds4Modal:s})=>P.jsx("header",{className:"sticky top-0 z-40 w-full bg-[#030303]/80 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3",children:P.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-4",children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("div",{className:"w-8 h-8 rounded-full bg-stone-200 text-stone-900 flex items-center justify-center font-bold text-[9px] tracking-wider",children:"ISRO"}),P.jsx("div",{children:P.jsxs("div",{className:"text-sm font-medium text-stone-100 flex items-center gap-2",children:[P.jsx("span",{children:"Lunar Data Platform"}),P.jsx("span",{className:"text-[11px] font-normal text-stone-500",children:"/ Chandrayaan"})]})})]}),r==="DASHBOARD"&&P.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300",children:[P.jsx(cS,{className:"w-3.5 h-3.5 text-slate-400"}),P.jsx("span",{className:"text-slate-400",children:"Target:"}),P.jsx("span",{className:"text-slate-200 font-medium",children:e.targetFeature}),P.jsxs("span",{className:"text-slate-500 font-mono text-[11px]",children:["(",e.targetCoordinates.latStr,")"]})]}),P.jsx("div",{className:"flex items-center gap-2.5",children:r==="DASHBOARD"&&P.jsxs(P.Fragment,{children:[P.jsxs("button",{onClick:s,className:"px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors",children:[P.jsx(D_,{className:"w-3.5 h-3.5 text-slate-400"}),P.jsx("span",{children:"PDS4 Info"})]}),P.jsxs("button",{onClick:i,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors",children:[P.jsx(_S,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"New Dataset"})]})]})})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yd="173",wS=0,bg=1,DS=2,L_=1,US=2,sa=3,Va=0,Xn=1,Li=2,Ha=0,xr=1,Tg=2,Ag=3,Rg=4,NS=5,_s=100,LS=101,OS=102,PS=103,zS=104,IS=200,BS=201,FS=202,HS=203,Dh=204,Uh=205,GS=206,VS=207,kS=208,XS=209,jS=210,WS=211,qS=212,YS=213,ZS=214,Nh=0,Lh=1,Oh=2,Er=3,Ph=4,zh=5,Ih=6,Bh=7,O_=0,KS=1,QS=2,Ga=0,JS=1,$S=2,tM=3,eM=4,nM=5,iM=6,aM=7,P_=300,br=301,Tr=302,Fh=303,Hh=304,Oc=306,Gh=1e3,xs=1001,Vh=1002,Ti=1003,sM=1004,Jl=1005,Oi=1006,Jf=1007,ys=1008,ca=1009,z_=1010,I_=1011,Oo=1012,Sd=1013,Ss=1014,ra=1015,zo=1016,Md=1017,Ed=1018,Ar=1020,B_=35902,F_=1021,H_=1022,bi=1023,G_=1024,V_=1025,yr=1026,Rr=1027,k_=1028,bd=1029,X_=1030,Td=1031,Ad=1033,bc=33776,Tc=33777,Ac=33778,Rc=33779,kh=35840,Xh=35841,jh=35842,Wh=35843,qh=36196,Yh=37492,Zh=37496,Kh=37808,Qh=37809,Jh=37810,$h=37811,td=37812,ed=37813,nd=37814,id=37815,ad=37816,sd=37817,rd=37818,od=37819,ld=37820,cd=37821,Cc=36492,ud=36494,fd=36495,j_=36283,hd=36284,dd=36285,pd=36286,rM=3200,oM=3201,W_=0,lM=1,Fa="",ei="srgb",Cr="srgb-linear",Dc="linear",Fe="srgb",ir=7680,Cg=519,cM=512,uM=513,fM=514,q_=515,hM=516,dM=517,pM=518,mM=519,wg=35044,Dg="300 es",oa=2e3,Uc=2001;class Dr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,md=180/Math.PI;function Io(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Se(r,e,i){return Math.max(e,Math.min(i,r))}function gM(r,e){return(r%e+e)%e}function th(r,e,i){return(1-i)*r+i*e}function Ro(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,i=0){De.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(e,i,s,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],y=s[2],M=s[5],E=s[8],b=l[0],S=l[3],_=l[6],I=l[1],O=l[4],D=l[7],X=l[2],F=l[5],z=l[8];return u[0]=h*b+d*I+m*X,u[3]=h*S+d*O+m*F,u[6]=h*_+d*D+m*z,u[1]=p*b+g*I+v*X,u[4]=p*S+g*O+v*F,u[7]=p*_+g*D+v*z,u[2]=y*b+M*I+E*X,u[5]=y*S+M*O+E*F,u[8]=y*_+M*D+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,y=d*m-g*u,M=p*u-h*m,E=i*v+s*y+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(l*p-g*s)*b,e[2]=(d*s-l*h)*b,e[3]=y*b,e[4]=(g*i-l*m)*b,e[5]=(l*u-d*i)*b,e[6]=M*b,e[7]=(s*m-p*i)*b,e[8]=(h*i-s*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(eh.makeScale(e,i)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,i){return this.premultiply(eh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eh=new le;function Y_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Po(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _M(){const r=Po("canvas");return r.style.display="block",r}const Ug={};function _r(r){r in Ug||(Ug[r]=!0,console.warn(r))}function vM(r,e,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function xM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ng=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SM(){const r={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Sr(l.r),l.g=Sr(l.g),l.b=Sr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Dc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Cr]:{primaries:e,whitePoint:s,transfer:Dc,toXYZ:Ng,fromXYZ:Lg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:Ng,fromXYZ:Lg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const Ce=SM();function la(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ar;class MM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ar===void 0&&(ar=Po("canvas")),ar.width=e.width,ar.height=e.height;const s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ar}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Po("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=la(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let EM=0;class Z_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(nh(l[h].image)):u.push(nh(l[h]))}else u=nh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?MM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bM=0;class Dn extends Dr{constructor(e=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,s=xs,l=xs,u=Oi,h=ys,d=bi,m=ca,p=Dn.DEFAULT_ANISOTROPY,g=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Io(),this.name="",this.source=new Z_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gh:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gh:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=P_;Dn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],y=m[1],M=m[5],E=m[9],b=m[2],S=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,X=(_+1)/2,F=(g+y)/4,z=(v+b)/4,q=(E+S)/4;return O>D&&O>X?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=F/s,u=z/s):D>X?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=F/l,u=q/l):X<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),s=z/u,l=q/u),this.set(s,l,u,i),this}let I=Math.sqrt((S-E)*(S-E)+(v-b)*(v-b)+(y-g)*(y-g));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(v-b)/I,this.z=(y-g)/I,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TM extends Dr{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Dn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new Z_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends TM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class K_ extends Dn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AM extends Dn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const y=u[h+0],M=u[h+1],E=u[h+2],b=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=E,e[i+3]=b;return}if(v!==b||m!==y||p!==M||g!==E){let S=1-d;const _=m*y+p*M+g*E+v*b,I=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const X=Math.sqrt(O),F=Math.atan2(X,_*I);S=Math.sin(S*F)/X,d=Math.sin(d*F)/X}const D=d*I;if(m=m*S+y*D,p=p*S+M*D,g=g*S+E*D,v=v*S+b*D,S===1-d){const X=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=X,p*=X,g*=X,v*=X}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=u[h],y=u[h+1],M=u[h+2],E=u[h+3];return e[i]=d*E+g*v+m*M-p*y,e[i+1]=m*E+g*y+p*v-d*M,e[i+2]=p*E+g*M+d*y-m*v,e[i+3]=g*E-d*v-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(u/2),y=m(s/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=y*g*v+p*M*E,this._y=p*M*v-y*g*E,this._z=p*g*E+y*M*v,this._w=p*g*v-y*M*E;break;case"YXZ":this._x=y*g*v+p*M*E,this._y=p*M*v-y*g*E,this._z=p*g*E-y*M*v,this._w=p*g*v+y*M*E;break;case"ZXY":this._x=y*g*v-p*M*E,this._y=p*M*v+y*g*E,this._z=p*g*E+y*M*v,this._w=p*g*v-y*M*E;break;case"ZYX":this._x=y*g*v-p*M*E,this._y=p*M*v+y*g*E,this._z=p*g*E-y*M*v,this._w=p*g*v+y*M*E;break;case"YZX":this._x=y*g*v+p*M*E,this._y=p*M*v+y*g*E,this._z=p*g*E-y*M*v,this._w=p*g*v-y*M*E;break;case"XZY":this._x=y*g*v-p*M*E,this._y=p*M*v-y*g*E,this._z=p*g*E+y*M*v,this._w=p*g*v+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],y=s+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=u*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,s=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Og.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Og.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),g=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*g,this.y=s+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new st,Og=new Bo;class Fo{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,yi):yi.fromBufferAttribute(u,h),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$l.copy(s.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),tc.subVectors(this.max,Co),sr.subVectors(e.a,Co),rr.subVectors(e.b,Co),or.subVectors(e.c,Co),La.subVectors(rr,sr),Oa.subVectors(or,rr),cs.subVectors(sr,or);let i=[0,-La.z,La.y,0,-Oa.z,Oa.y,0,-cs.z,cs.y,La.z,0,-La.x,Oa.z,0,-Oa.x,cs.z,0,-cs.x,-La.y,La.x,0,-Oa.y,Oa.x,0,-cs.y,cs.x,0];return!ah(i,sr,rr,or,tc)||(i=[1,0,0,0,1,0,0,0,1],!ah(i,sr,rr,or,tc))?!1:(ec.crossVectors(La,Oa),i=[ec.x,ec.y,ec.z],ah(i,sr,rr,or,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ta=[new st,new st,new st,new st,new st,new st,new st,new st],yi=new st,$l=new Fo,sr=new st,rr=new st,or=new st,La=new st,Oa=new st,cs=new st,Co=new st,tc=new st,ec=new st,us=new st;function ah(r,e,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){us.fromArray(r,u);const d=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),m=e.dot(us),p=i.dot(us),g=s.dot(us);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const RM=new Fo,wo=new st,sh=new st;class Ho{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):RM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(sh)),this.expandByPoint(wo.copy(e.center).sub(sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new st,rh=new st,nc=new st,Pa=new st,oh=new st,ic=new st,lh=new st;class Rd{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){rh.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(rh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(nc),d=Pa.dot(this.direction),m=-Pa.dot(nc),p=Pa.lengthSq(),g=Math.abs(1-h*h);let v,y,M,E;if(g>0)if(v=h*m-d,y=h*d-m,E=u*g,v>=0)if(y>=-E)if(y<=E){const b=1/g;v*=b,y*=b,M=v*(v+h*y+2*d)+y*(h*v+y+2*m)+p}else y=u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y=-u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y<=-E?(v=Math.max(0,-(-h*u+d)),y=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+y*(y+2*m)+p):y<=E?(v=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(v=Math.max(0,-(h*u+d)),y=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+y*(y+2*m)+p);else y=h>0?-u:u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(rh).addScaledVector(nc,y),M}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const s=ea.dot(this.direction),l=ea.dot(ea)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),g>=0?(u=(e.min.y-y.y)*g,h=(e.max.y-y.y)*g):(u=(e.max.y-y.y)*g,h=(e.min.y-y.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,s,l,u){oh.subVectors(i,e),ic.subVectors(s,e),lh.crossVectors(oh,ic);let h=this.direction.dot(lh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,e);const m=d*this.direction.dot(ic.crossVectors(Pa,ic));if(m<0)return null;const p=d*this.direction.dot(oh.cross(Pa));if(p<0||m+p>h)return null;const g=-d*Pa.dot(lh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,i,s,l,u,h,d,m,p,g,v,y,M,E,b,S){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,g,v,y,M,E,b,S)}set(e,i,s,l,u,h,d,m,p,g,v,y,M,E,b,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=y,_[3]=M,_[7]=E,_[11]=b,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/lr.setFromMatrixColumn(e,0).length(),u=1/lr.setFromMatrixColumn(e,1).length(),h=1/lr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const y=h*g,M=h*v,E=d*g,b=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=y-b*p,i[9]=-d*m,i[2]=b-y*p,i[6]=E+M*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*g,M=m*v,E=p*g,b=p*v;i[0]=y+b*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=b+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*g,M=m*v,E=p*g,b=p*v;i[0]=y-b*d,i[4]=-h*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=b-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*g,M=h*v,E=d*g,b=d*v;i[0]=m*g,i[4]=E*p-M,i[8]=y*p+b,i[1]=m*v,i[5]=b*p+y,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,M=h*p,E=d*m,b=d*p;i[0]=m*g,i[4]=b-y*v,i[8]=E*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+E,i[10]=y-b*v}else if(e.order==="XZY"){const y=h*m,M=h*p,E=d*m,b=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=y*v+b,i[5]=h*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*g,i[10]=b*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CM,e,wM)}lookAt(e,i,s){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),za.crossVectors(s,$n),za.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),za.crossVectors(s,$n)),za.normalize(),ac.crossVectors($n,za),l[0]=za.x,l[4]=ac.x,l[8]=$n.x,l[1]=za.y,l[5]=ac.y,l[9]=$n.y,l[2]=za.z,l[6]=ac.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],y=s[9],M=s[13],E=s[2],b=s[6],S=s[10],_=s[14],I=s[3],O=s[7],D=s[11],X=s[15],F=l[0],z=l[4],q=l[8],w=l[12],C=l[1],V=l[5],ft=l[9],nt=l[13],pt=l[2],ot=l[6],N=l[10],H=l[14],W=l[3],lt=l[7],ct=l[11],U=l[15];return u[0]=h*F+d*C+m*pt+p*W,u[4]=h*z+d*V+m*ot+p*lt,u[8]=h*q+d*ft+m*N+p*ct,u[12]=h*w+d*nt+m*H+p*U,u[1]=g*F+v*C+y*pt+M*W,u[5]=g*z+v*V+y*ot+M*lt,u[9]=g*q+v*ft+y*N+M*ct,u[13]=g*w+v*nt+y*H+M*U,u[2]=E*F+b*C+S*pt+_*W,u[6]=E*z+b*V+S*ot+_*lt,u[10]=E*q+b*ft+S*N+_*ct,u[14]=E*w+b*nt+S*H+_*U,u[3]=I*F+O*C+D*pt+X*W,u[7]=I*z+O*V+D*ot+X*lt,u[11]=I*q+O*ft+D*N+X*ct,u[15]=I*w+O*nt+D*H+X*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],y=e[10],M=e[14],E=e[3],b=e[7],S=e[11],_=e[15];return E*(+u*m*v-l*p*v-u*d*y+s*p*y+l*d*M-s*m*M)+b*(+i*m*M-i*p*y+u*h*y-l*h*M+l*p*g-u*m*g)+S*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*v+i*d*y+l*h*v-s*h*y+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],y=e[10],M=e[11],E=e[12],b=e[13],S=e[14],_=e[15],I=v*S*p-b*y*p+b*m*M-d*S*M-v*m*_+d*y*_,O=E*y*p-g*S*p-E*m*M+h*S*M+g*m*_-h*y*_,D=g*b*p-E*v*p+E*d*M-h*b*M-g*d*_+h*v*_,X=E*v*m-g*b*m-E*d*y+h*b*y+g*d*S-h*v*S,F=i*I+s*O+l*D+u*X;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=I*z,e[1]=(b*y*u-v*S*u-b*l*M+s*S*M+v*l*_-s*y*_)*z,e[2]=(d*S*u-b*m*u+b*l*p-s*S*p-d*l*_+s*m*_)*z,e[3]=(v*m*u-d*y*u-v*l*p+s*y*p+d*l*M-s*m*M)*z,e[4]=O*z,e[5]=(g*S*u-E*y*u+E*l*M-i*S*M-g*l*_+i*y*_)*z,e[6]=(E*m*u-h*S*u-E*l*p+i*S*p+h*l*_-i*m*_)*z,e[7]=(h*y*u-g*m*u+g*l*p-i*y*p-h*l*M+i*m*M)*z,e[8]=D*z,e[9]=(E*v*u-g*b*u-E*s*M+i*b*M+g*s*_-i*v*_)*z,e[10]=(h*b*u-E*d*u+E*s*p-i*b*p-h*s*_+i*d*_)*z,e[11]=(g*d*u-h*v*u-g*s*p+i*v*p+h*s*M-i*d*M)*z,e[12]=X*z,e[13]=(g*b*l-E*v*l+E*s*y-i*b*y-g*s*S+i*v*S)*z,e[14]=(E*d*l-h*b*l-E*s*m+i*b*m+h*s*S-i*d*S)*z,e[15]=(h*v*l-g*d*l+g*s*m-i*v*m-h*s*y+i*d*y)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,y=u*p,M=u*g,E=u*v,b=h*g,S=h*v,_=d*v,I=m*p,O=m*g,D=m*v,X=s.x,F=s.y,z=s.z;return l[0]=(1-(b+_))*X,l[1]=(M+D)*X,l[2]=(E-O)*X,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(y+_))*F,l[6]=(S+I)*F,l[7]=0,l[8]=(E+O)*z,l[9]=(S-I)*z,l[10]=(1-(y+b))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=lr.set(l[0],l[1],l[2]).length();const h=lr.set(l[4],l[5],l[6]).length(),d=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,g=1/h,v=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,i.setFromRotationMatrix(Si),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=oa){const m=this.elements,p=2*u/(i-e),g=2*u/(s-l),v=(i+e)/(i-e),y=(s+l)/(s-l);let M,E;if(d===oa)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Uc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=oa){const m=this.elements,p=1/(i-e),g=1/(s-l),v=1/(h-u),y=(i+e)*p,M=(s+l)*g;let E,b;if(d===oa)E=(h+u)*v,b=-2*v;else if(d===Uc)E=u*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const lr=new st,Si=new Ye,CM=new st(0,0,0),wM=new st(1,1,1),za=new st,ac=new st,$n=new st,Pg=new Ye,zg=new Bo;class Pi{constructor(e=0,i=0,s=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Pg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return zg.setFromEuler(this),this.setFromQuaternion(zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DM=0;const Ig=new st,cr=new Bo,na=new Ye,sc=new st,Do=new st,UM=new st,NM=new Bo,Bg=new st(1,0,0),Fg=new st(0,1,0),Hg=new st(0,0,1),Gg={type:"added"},LM={type:"removed"},ur={type:"childadded",child:null},ch={type:"childremoved",child:null};class _n extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new st,i=new Pi,s=new Bo,l=new st(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new le}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cr.setFromAxisAngle(e,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,i){return cr.setFromAxisAngle(e,i),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(Fg,e)}rotateZ(e){return this.rotateOnAxis(Hg,e)}translateOnAxis(e,i){return Ig.copy(e).applyQuaternion(this.quaternion),this.position.add(Ig.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(Fg,e)}translateZ(e){return this.translateOnAxis(Hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?sc.copy(e):sc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Do,sc,this.up):na.lookAt(sc,Do,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(na),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gg),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(LM),ch.child=e,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gg),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,UM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,NM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),y=h(e.skeletons),M=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}_n.DEFAULT_UP=new st(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new st,ia=new st,uh=new st,aa=new st,fr=new st,hr=new st,Vg=new st,fh=new st,hh=new st,dh=new st,ph=new tn,mh=new tn,gh=new tn;class Ei{constructor(e=new st,i=new st,s=new st){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Mi.subVectors(l,i),ia.subVectors(s,i),uh.subVectors(e,i);const h=Mi.dot(Mi),d=Mi.dot(ia),m=Mi.dot(uh),p=ia.dot(ia),g=ia.dot(uh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const y=1/v,M=(p*m-d*g)*y,E=(h*g-d*m)*y;return u.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(e,i),mh.fromBufferAttribute(e,s),gh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ph,u.x),h.addScaledVector(mh,u.y),h.addScaledVector(gh,u.z),h}static isFrontFacing(e,i,s,l){return Mi.subVectors(s,i),ia.subVectors(e,i),Mi.cross(ia).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Mi.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ei.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;fr.subVectors(l,s),hr.subVectors(u,s),fh.subVectors(e,s);const m=fr.dot(fh),p=hr.dot(fh);if(m<=0&&p<=0)return i.copy(s);hh.subVectors(e,l);const g=fr.dot(hh),v=hr.dot(hh);if(g>=0&&v<=g)return i.copy(l);const y=m*v-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(fr,h);dh.subVectors(e,u);const M=fr.dot(dh),E=hr.dot(dh);if(E>=0&&M<=E)return i.copy(u);const b=M*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(hr,d);const S=g*E-M*v;if(S<=0&&v-g>=0&&M-E>=0)return Vg.subVectors(u,l),d=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector(Vg,d);const _=1/(S+b+y);return h=b*_,d=y*_,i.copy(s).addScaledVector(fr,h).addScaledVector(hr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},rc={h:0,s:0,l:0};function _h(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class be{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ce.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ce.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ce.workingColorSpace){if(e=gM(e,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=_h(h,u,e+1/3),this.g=_h(h,u,e),this.b=_h(h,u,e-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(e,i=ei){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const s=J_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Ce.fromWorkingColorSpace(wn.copy(this),e),Math.round(Se(wn.r*255,0,255))*65536+Math.round(Se(wn.g*255,0,255))*256+Math.round(Se(wn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ei){Ce.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+e,Ia.s+i,Ia.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ia),e.getHSL(rc);const s=th(Ia.h,rc.h,i),l=th(Ia.s,rc.s,i),u=th(Ia.l,rc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new be;be.NAMES=J_;let OM=0;class Es extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=xr,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Uh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(s.blending=this.blending),this.side!==Va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dh&&(s.blendSrc=this.blendSrc),this.blendDst!==Uh&&(s.blendDst=this.blendDst),this.blendEquation!==_s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cd extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=O_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new st,oc=new De;let PM=0;class Ai{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=wg,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wg&&(e.usage=this.usage),e}}class $_ extends Ai{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class tv extends Ai{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class jn extends Ai{constructor(e,i,s){super(new Float32Array(e),i,s)}}let zM=0;const hi=new Ye,vh=new _n,dr=new st,ti=new Fo,Uo=new Fo,gn=new st;class ii extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y_(e)?tv:$_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,s){return hi.makeTranslation(e,i,s),this.applyMatrix4(hi),this}scale(e,i,s){return hi.makeScale(e,i,s),this.applyMatrix4(hi),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new jn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(ti.min,Uo.min),ti.expandByPoint(gn),gn.addVectors(ti.max,Uo.max),ti.expandByPoint(gn)):(ti.expandByPoint(Uo.min),ti.expandByPoint(Uo.max))}ti.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(dr.fromBufferAttribute(e,p),gn.add(dr)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<s.count;q++)d[q]=new st,m[q]=new st;const p=new st,g=new st,v=new st,y=new De,M=new De,E=new De,b=new st,S=new st;function _(q,w,C){p.fromBufferAttribute(s,q),g.fromBufferAttribute(s,w),v.fromBufferAttribute(s,C),y.fromBufferAttribute(u,q),M.fromBufferAttribute(u,w),E.fromBufferAttribute(u,C),g.sub(p),v.sub(p),M.sub(y),E.sub(y);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(V),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(V),d[q].add(b),d[w].add(b),d[C].add(b),m[q].add(S),m[w].add(S),m[C].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let q=0,w=I.length;q<w;++q){const C=I[q],V=C.start,ft=C.count;for(let nt=V,pt=V+ft;nt<pt;nt+=3)_(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const O=new st,D=new st,X=new st,F=new st;function z(q){X.fromBufferAttribute(l,q),F.copy(X);const w=d[q];O.copy(w),O.sub(X.multiplyScalar(X.dot(w))).normalize(),D.crossVectors(F,w);const V=D.dot(m[q])<0?-1:1;h.setXYZW(q,O.x,O.y,O.z,V)}for(let q=0,w=I.length;q<w;++q){const C=I[q],V=C.start,ft=C.count;for(let nt=V,pt=V+ft;nt<pt;nt+=3)z(e.getX(nt+0)),z(e.getX(nt+1)),z(e.getX(nt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new st,u=new st,h=new st,d=new st,m=new st,p=new st,g=new st,v=new st;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),b=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,y=new p.constructor(m.length*g);let M=0,E=0;for(let b=0,S=m.length;b<S;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*g;for(let _=0;_<g;_++)y[E++]=p[M++]}return new Ai(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const y=p[g],M=e(y,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,y=p.length;v<y;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let y=0,M=v.length;y<M;y++)g.push(v[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kg=new Ye,fs=new Rd,lc=new Ho,Xg=new st,cc=new st,uc=new st,fc=new st,xh=new st,hc=new st,jg=new st,dc=new st;class di extends _n{constructor(e=new ii,i=new Cd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){hc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(xh.fromBufferAttribute(v,e),h?hc.addScaledVector(xh,g):hc.addScaledVector(xh.sub(i),g))}i.add(hc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),lc.copy(s.boundingSphere),lc.applyMatrix4(u),fs.copy(e.ray).recast(e.near),!(lc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(lc,Xg)===null||fs.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(kg.copy(u).invert(),fs.copy(e.ray).applyMatrix4(kg),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,fs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const S=y[E],_=h[S.materialIndex],I=Math.max(S.start,M.start),O=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let D=I,X=O;D<X;D+=3){const F=d.getX(D),z=d.getX(D+1),q=d.getX(D+2);l=pc(this,_,e,s,p,g,v,F,z,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let S=E,_=b;S<_;S+=3){const I=d.getX(S),O=d.getX(S+1),D=d.getX(S+2);l=pc(this,h,e,s,p,g,v,I,O,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const S=y[E],_=h[S.materialIndex],I=Math.max(S.start,M.start),O=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=I,X=O;D<X;D+=3){const F=D,z=D+1,q=D+2;l=pc(this,_,e,s,p,g,v,F,z,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let S=E,_=b;S<_;S+=3){const I=S,O=S+1,D=S+2;l=pc(this,h,e,s,p,g,v,I,O,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function IM(r,e,i,s,l,u,h,d){let m;if(e.side===Xn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Va,d),m===null)return null;dc.copy(d),dc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:r}}function pc(r,e,i,s,l,u,h,d,m,p){r.getVertexPosition(d,cc),r.getVertexPosition(m,uc),r.getVertexPosition(p,fc);const g=IM(r,e,i,s,cc,uc,fc,jg);if(g){const v=new st;Ei.getBarycoord(jg,cc,uc,fc,v),l&&(g.uv=Ei.getInterpolatedAttribute(l,d,m,p,v,new De)),u&&(g.uv1=Ei.getInterpolatedAttribute(u,d,m,p,v,new De)),h&&(g.normal=Ei.getInterpolatedAttribute(h,d,m,p,v,new st),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new st,materialIndex:0};Ei.getNormal(cc,uc,fc,y.normal),g.face=y,g.barycoord=v}return g}class Go extends ii{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let y=0,M=0;E("z","y","x",-1,-1,s,i,e,h,u,0),E("z","y","x",1,-1,s,i,-e,h,u,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,u,4),E("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new jn(p,3)),this.setAttribute("normal",new jn(g,3)),this.setAttribute("uv",new jn(v,2));function E(b,S,_,I,O,D,X,F,z,q,w){const C=D/z,V=X/q,ft=D/2,nt=X/2,pt=F/2,ot=z+1,N=q+1;let H=0,W=0;const lt=new st;for(let ct=0;ct<N;ct++){const U=ct*V-nt;for(let J=0;J<ot;J++){const yt=J*C-ft;lt[b]=yt*I,lt[S]=U*O,lt[_]=pt,p.push(lt.x,lt.y,lt.z),lt[b]=0,lt[S]=0,lt[_]=F>0?1:-1,g.push(lt.x,lt.y,lt.z),v.push(J/z),v.push(1-ct/q),H+=1}}for(let ct=0;ct<q;ct++)for(let U=0;U<z;U++){const J=y+U+ot*ct,yt=y+U+ot*(ct+1),K=y+(U+1)+ot*(ct+1),dt=y+(U+1)+ot*ct;m.push(J,yt,dt),m.push(yt,K,dt),W+=6}d.addGroup(M,W,w),M+=W,y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(r){const e={};for(let i=0;i<r.length;i++){const s=wr(r[i]);for(const l in s)e[l]=s[l]}return e}function BM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function ev(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const FM={clone:wr,merge:On};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=BM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class nv extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=oa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new st,Wg=new De,qg=new De;class ni extends nv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=md*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return md*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,Wg,qg),i.subVectors(qg,Wg)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan($f*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class VM extends _n{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ni(pr,mr,e,i);l.layers=this.layers,this.add(l);const u=new ni(pr,mr,e,i);u.layers=this.layers,this.add(u);const h=new ni(pr,mr,e,i);h.layers=this.layers,this.add(h);const d=new ni(pr,mr,e,i);d.layers=this.layers,this.add(d);const m=new ni(pr,mr,e,i);m.layers=this.layers,this.add(m);const p=new ni(pr,mr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Uc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(v,y,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class iv extends Dn{constructor(e,i,s,l,u,h,d,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:br,super(e,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kM extends Ms{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new iv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Oi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Go(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Ha});u.uniforms.tEquirect.value=i;const h=new di(l,u),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=Oi),new VM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class mc extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const b of e.hand.values()){const S=i.getJointPose(b,s),_=this._getHandJoint(p,b);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new mc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class av extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Sh=new st,jM=new st,WM=new le;class ms{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Sh.subVectors(s,i).cross(jM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Sh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||WM.getNormalMatrix(e),l=this.coplanarPoint(Sh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Ho,gc=new st;class wd{constructor(e=new ms,i=new ms,s=new ms,l=new ms,u=new ms,h=new ms){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=oa){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],y=l[7],M=l[8],E=l[9],b=l[10],S=l[11],_=l[12],I=l[13],O=l[14],D=l[15];if(s[0].setComponents(m-u,y-p,S-M,D-_).normalize(),s[1].setComponents(m+u,y+p,S+M,D+_).normalize(),s[2].setComponents(m+h,y+g,S+E,D+I).normalize(),s[3].setComponents(m-h,y-g,S-E,D-I).normalize(),s[4].setComponents(m-d,y-v,S-b,D-O).normalize(),i===oa)s[5].setComponents(m+d,y+v,S+b,D+O).normalize();else if(i===Uc)s[5].setComponents(d,v,b,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sv extends Es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nc=new st,Lc=new st,Yg=new Ye,No=new Rd,_c=new Ho,Mh=new st,Zg=new st;class qM extends _n{constructor(e=new ii,i=new sv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Nc.fromBufferAttribute(i,l-1),Lc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Nc.distanceTo(Lc);e.setAttribute("lineDistance",new jn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(l),_c.radius+=u,e.ray.intersectsSphere(_c)===!1)return;Yg.copy(l).invert(),No.copy(e.ray).applyMatrix4(Yg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let b=M,S=E-1;b<S;b+=p){const _=g.getX(b),I=g.getX(b+1),O=vc(this,e,No,m,_,I,b);O&&i.push(O)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(M),_=vc(this,e,No,m,b,S,E-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let b=M,S=E-1;b<S;b+=p){const _=vc(this,e,No,m,b,b+1,b);_&&i.push(_)}if(this.isLineLoop){const b=vc(this,e,No,m,E-1,M,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function vc(r,e,i,s,l,u,h){const d=r.geometry.attributes.position;if(Nc.fromBufferAttribute(d,l),Lc.fromBufferAttribute(d,u),i.distanceSqToSegment(Nc,Lc,Mh,Zg)>s)return;Mh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Mh);if(!(p<e.near||p>e.far))return{distance:p,point:Zg.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}class rv extends Es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kg=new Ye,gd=new Rd,xc=new Ho,yc=new st;class YM extends _n{constructor(e=new ii,i=new rv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(l),xc.radius+=u,e.ray.intersectsSphere(xc)===!1)return;Kg.copy(l).invert(),gd.copy(e.ray).applyMatrix4(Kg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=y,b=M;E<b;E++){const S=p.getX(E);yc.fromBufferAttribute(v,S),Qg(yc,S,m,l,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let E=y,b=M;E<b;E++)yc.fromBufferAttribute(v,E),Qg(yc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Qg(r,e,i,s,l,u,h){const d=gd.distanceSqToPoint(r);if(d<i){const m=new st;gd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class ZM extends Dn{constructor(e,i,s,l,u,h,d,m,p){super(e,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ov extends Dn{constructor(e,i,s,l,u,h,d,m,p,g=yr){if(g!==yr&&g!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===yr&&(s=Ss),s===void 0&&g===Rr&&(s=Ar),super(null,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ti,this.minFilter=m!==void 0?m:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Pc extends ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=e/d,y=i/m,M=[],E=[],b=[],S=[];for(let _=0;_<g;_++){const I=_*y-h;for(let O=0;O<p;O++){const D=O*v-u;E.push(D,-I,0),b.push(0,0,1),S.push(O/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const O=I+p*_,D=I+p*(_+1),X=I+1+p*(_+1),F=I+1+p*_;M.push(O,D,F),M.push(D,X,F)}this.setIndex(M),this.setAttribute("position",new jn(E,3)),this.setAttribute("normal",new jn(b,3)),this.setAttribute("uv",new jn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dd extends ii{constructor(e=.5,i=1,s=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],g=[];let v=e;const y=(i-e)/l,M=new st,E=new De;for(let b=0;b<=l;b++){for(let S=0;S<=s;S++){const _=u+S/s*h;M.x=v*Math.cos(_),M.y=v*Math.sin(_),m.push(M.x,M.y,M.z),p.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,g.push(E.x,E.y)}v+=y}for(let b=0;b<l;b++){const S=b*(s+1);for(let _=0;_<s;_++){const I=_+S,O=I,D=I+s+1,X=I+s+2,F=I+1;d.push(O,D,F),d.push(D,X,F)}}this.setIndex(d),this.setAttribute("position",new jn(m,3)),this.setAttribute("normal",new jn(p,3)),this.setAttribute("uv",new jn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zc extends ii{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new st,y=new st,M=[],E=[],b=[],S=[];for(let _=0;_<=s;_++){const I=[],O=_/s;let D=0;_===0&&h===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let X=0;X<=i;X++){const F=X/i;v.x=-e*Math.cos(l+F*u)*Math.sin(h+O*d),v.y=e*Math.cos(h+O*d),v.z=e*Math.sin(l+F*u)*Math.sin(h+O*d),E.push(v.x,v.y,v.z),y.copy(v).normalize(),b.push(y.x,y.y,y.z),S.push(F+D,1-O),I.push(p++)}g.push(I)}for(let _=0;_<s;_++)for(let I=0;I<i;I++){const O=g[_][I+1],D=g[_][I],X=g[_+1][I],F=g[_+1][I+1];(_!==0||h>0)&&M.push(O,D,F),(_!==s-1||m<Math.PI)&&M.push(D,X,F)}this.setIndex(M),this.setAttribute("position",new jn(E,3)),this.setAttribute("normal",new jn(b,3)),this.setAttribute("uv",new jn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lv extends Es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W_,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class KM extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QM extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jg={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class JM{constructor(e,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,y=p.length;v<y;v+=2){const M=p[v],E=p[v+1];if(M.global&&(M.lastIndex=0),M.test(g))return E}return null}}}const $M=new JM;class Ud{constructor(e){this.manager=e!==void 0?e:$M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ud.DEFAULT_MATERIAL_NAME="__DEFAULT";class tE extends Ud{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=Jg.get(e);if(h!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0),h;const d=Po("img");function m(){g(),Jg.add(e,this),i&&i(this),u.manager.itemEnd(e)}function p(v){g(),l&&l(v),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class eE extends Ud{constructor(e){super(e)}load(e,i,s,l){const u=new Dn,h=new tE(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class cv extends _n{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Eh=new Ye,$g=new st,t_=new st;class nE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wd,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;$g.setFromMatrixPosition(e.matrixWorld),i.position.copy($g),t_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(t_),i.updateMatrixWorld(),Eh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uv extends nv{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class iE extends nE{constructor(){super(new uv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fv extends cv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new iE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hv extends cv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class aE extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class sE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=e_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=e_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function e_(){return performance.now()}function n_(r,e,i,s){const l=rE(s);switch(i){case F_:return r*e;case G_:return r*e;case V_:return r*e*2;case k_:return r*e/l.components*l.byteLength;case bd:return r*e/l.components*l.byteLength;case X_:return r*e*2/l.components*l.byteLength;case Td:return r*e*2/l.components*l.byteLength;case H_:return r*e*3/l.components*l.byteLength;case bi:return r*e*4/l.components*l.byteLength;case Ad:return r*e*4/l.components*l.byteLength;case bc:case Tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xh:case Wh:return Math.max(r,16)*Math.max(e,8)/4;case kh:case jh:return Math.max(r,8)*Math.max(e,8)/2;case qh:case Yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case nd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case id:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ld:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Cc:case ud:case fd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case j_:case hd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case dd:case pd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rE(r){switch(r){case ca:case z_:return{byteLength:1,components:1};case Oo:case I_:case zo:return{byteLength:2,components:1};case Md:case Ed:return{byteLength:2,components:4};case Ss:case Sd:case ra:return{byteLength:4,components:1};case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dv(){let r=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function oE(r){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,g);else{v.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<v.length;M++){const E=v[y],b=v[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,v[y]=b)}v.length=y+1;for(let M=0,E=v.length;M<E;M++){const b=v[M];r.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var lE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cE=`#ifdef USE_ALPHAHASH
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
#endif`,uE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pE=`#ifdef USE_AOMAP
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
#endif`,mE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE=`#ifdef USE_BATCHING
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
#endif`,_E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SE=`#ifdef USE_IRIDESCENCE
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
#endif`,ME=`#ifdef USE_BUMPMAP
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
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UE=`#define PI 3.141592653589793
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
} // validated`,NE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LE=`vec3 transformedNormal = objectNormal;
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
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HE=`#ifdef USE_ENVMAP
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
#endif`,GE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZE=`#ifdef USE_GRADIENTMAP
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
}`,KE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$E=`uniform bool receiveShadow;
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
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,e1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
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
#endif`,r1=`struct PhysicalMaterial {
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
}`,o1=`
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
#endif`,l1=`#if defined( RE_IndirectDiffuse )
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_1=`#if defined( USE_POINTS_UV )
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
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
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
#endif`,b1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
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
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W1=`float getShadowMask() {
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
}`,q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y1=`#ifdef USE_SKINNING
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
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lb=`uniform sampler2D t2D;
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`#include <common>
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
}`,pb=`#if DEPTH_PACKING == 3200
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
}`,mb=`#define DISTANCE
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
}`,gb=`#define DISTANCE
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`uniform float scale;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,Mb=`uniform vec3 diffuse;
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
}`,Eb=`#define LAMBERT
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
}`,bb=`#define LAMBERT
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
}`,Tb=`#define MATCAP
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
}`,Ab=`#define MATCAP
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
}`,Rb=`#define NORMAL
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
}`,Cb=`#define NORMAL
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
}`,wb=`#define PHONG
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
}`,Db=`#define PHONG
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
}`,Ub=`#define STANDARD
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
}`,Nb=`#define STANDARD
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
}`,Lb=`#define TOON
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
}`,Ob=`#define TOON
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
}`,Pb=`uniform float size;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Bb=`uniform vec3 color;
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
}`,Fb=`uniform float rotation;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:lE,alphahash_pars_fragment:cE,alphamap_fragment:uE,alphamap_pars_fragment:fE,alphatest_fragment:hE,alphatest_pars_fragment:dE,aomap_fragment:pE,aomap_pars_fragment:mE,batching_pars_vertex:gE,batching_vertex:_E,begin_vertex:vE,beginnormal_vertex:xE,bsdfs:yE,iridescence_fragment:SE,bumpmap_pars_fragment:ME,clipping_planes_fragment:EE,clipping_planes_pars_fragment:bE,clipping_planes_pars_vertex:TE,clipping_planes_vertex:AE,color_fragment:RE,color_pars_fragment:CE,color_pars_vertex:wE,color_vertex:DE,common:UE,cube_uv_reflection_fragment:NE,defaultnormal_vertex:LE,displacementmap_pars_vertex:OE,displacementmap_vertex:PE,emissivemap_fragment:zE,emissivemap_pars_fragment:IE,colorspace_fragment:BE,colorspace_pars_fragment:FE,envmap_fragment:HE,envmap_common_pars_fragment:GE,envmap_pars_fragment:VE,envmap_pars_vertex:kE,envmap_physical_pars_fragment:t1,envmap_vertex:XE,fog_vertex:jE,fog_pars_vertex:WE,fog_fragment:qE,fog_pars_fragment:YE,gradientmap_pars_fragment:ZE,lightmap_pars_fragment:KE,lights_lambert_fragment:QE,lights_lambert_pars_fragment:JE,lights_pars_begin:$E,lights_toon_fragment:e1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:a1,lights_physical_fragment:s1,lights_physical_pars_fragment:r1,lights_fragment_begin:o1,lights_fragment_maps:l1,lights_fragment_end:c1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:d1,map_fragment:p1,map_pars_fragment:m1,map_particle_fragment:g1,map_particle_pars_fragment:_1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:x1,morphinstance_vertex:y1,morphcolor_vertex:S1,morphnormal_vertex:M1,morphtarget_pars_vertex:E1,morphtarget_vertex:b1,normal_fragment_begin:T1,normal_fragment_maps:A1,normal_pars_fragment:R1,normal_pars_vertex:C1,normal_vertex:w1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:O1,opaque_fragment:P1,packing:z1,premultiplied_alpha_fragment:I1,project_vertex:B1,dithering_fragment:F1,dithering_pars_fragment:H1,roughnessmap_fragment:G1,roughnessmap_pars_fragment:V1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:X1,shadowmap_vertex:j1,shadowmask_pars_fragment:W1,skinbase_vertex:q1,skinning_pars_vertex:Y1,skinning_vertex:Z1,skinnormal_vertex:K1,specularmap_fragment:Q1,specularmap_pars_fragment:J1,tonemapping_fragment:$1,tonemapping_pars_fragment:tb,transmission_fragment:eb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:ab,uv_vertex:sb,worldpos_vertex:rb,background_vert:ob,background_frag:lb,backgroundCube_vert:cb,backgroundCube_frag:ub,cube_vert:fb,cube_frag:hb,depth_vert:db,depth_frag:pb,distanceRGBA_vert:mb,distanceRGBA_frag:gb,equirect_vert:_b,equirect_frag:vb,linedashed_vert:xb,linedashed_frag:yb,meshbasic_vert:Sb,meshbasic_frag:Mb,meshlambert_vert:Eb,meshlambert_frag:bb,meshmatcap_vert:Tb,meshmatcap_frag:Ab,meshnormal_vert:Rb,meshnormal_frag:Cb,meshphong_vert:wb,meshphong_frag:Db,meshphysical_vert:Ub,meshphysical_frag:Nb,meshtoon_vert:Lb,meshtoon_frag:Ob,points_vert:Pb,points_frag:zb,shadow_vert:Ib,shadow_frag:Bb,sprite_vert:Fb,sprite_frag:Hb},Nt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ni={basic:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:On([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:On([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new be(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:On([Nt.points,Nt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:On([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:On([Nt.common,Nt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:On([Nt.sprite,Nt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:On([Nt.common,Nt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:On([Nt.lights,Nt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ni.physical={uniforms:On([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Sc={r:0,b:0,g:0},ds=new Pi,Gb=new Ye;function Vb(r,e,i,s,l,u,h){const d=new be(0);let m=u===!0?0:1,p,g,v=null,y=0,M=null;function E(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:e).get(D)),D}function b(O){let D=!1;const X=E(O);X===null?_(d,m):X&&X.isColor&&(_(X,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(O,D){const X=E(D);X&&(X.isCubeTexture||X.mapping===Oc)?(g===void 0&&(g=new di(new Go(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:wr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ds.copy(D.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(ds)),g.material.toneMapped=Ce.getTransfer(X.colorSpace)!==Fe,(v!==X||y!==X.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,v=X,y=X.version,M=r.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new di(new Pc(2,2),new ka({name:"BackgroundMaterial",uniforms:wr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(X.colorSpace)!==Fe,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||y!==X.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,v=X,y=X.version,M=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,D){O.getRGB(Sc,ev(r)),s.buffers.color.setClear(Sc.r,Sc.g,Sc.b,D,h)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:b,addToRenderList:S,dispose:I}}function kb(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,h=!1;function d(C,V,ft,nt,pt){let ot=!1;const N=v(nt,ft,V);u!==N&&(u=N,p(u.object)),ot=M(C,nt,ft,pt),ot&&E(C,nt,ft,pt),pt!==null&&e.update(pt,r.ELEMENT_ARRAY_BUFFER),(ot||h)&&(h=!1,D(C,V,ft,nt),pt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function v(C,V,ft){const nt=ft.wireframe===!0;let pt=s[C.id];pt===void 0&&(pt={},s[C.id]=pt);let ot=pt[V.id];ot===void 0&&(ot={},pt[V.id]=ot);let N=ot[nt];return N===void 0&&(N=y(m()),ot[nt]=N),N}function y(C){const V=[],ft=[],nt=[];for(let pt=0;pt<i;pt++)V[pt]=0,ft[pt]=0,nt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ft,attributeDivisors:nt,object:C,attributes:{},index:null}}function M(C,V,ft,nt){const pt=u.attributes,ot=V.attributes;let N=0;const H=ft.getAttributes();for(const W in H)if(H[W].location>=0){const ct=pt[W];let U=ot[W];if(U===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),ct===void 0||ct.attribute!==U||U&&ct.data!==U.data)return!0;N++}return u.attributesNum!==N||u.index!==nt}function E(C,V,ft,nt){const pt={},ot=V.attributes;let N=0;const H=ft.getAttributes();for(const W in H)if(H[W].location>=0){let ct=ot[W];ct===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor));const U={};U.attribute=ct,ct&&ct.data&&(U.data=ct.data),pt[W]=U,N++}u.attributes=pt,u.attributesNum=N,u.index=nt}function b(){const C=u.newAttributes;for(let V=0,ft=C.length;V<ft;V++)C[V]=0}function S(C){_(C,0)}function _(C,V){const ft=u.newAttributes,nt=u.enabledAttributes,pt=u.attributeDivisors;ft[C]=1,nt[C]===0&&(r.enableVertexAttribArray(C),nt[C]=1),pt[C]!==V&&(r.vertexAttribDivisor(C,V),pt[C]=V)}function I(){const C=u.newAttributes,V=u.enabledAttributes;for(let ft=0,nt=V.length;ft<nt;ft++)V[ft]!==C[ft]&&(r.disableVertexAttribArray(ft),V[ft]=0)}function O(C,V,ft,nt,pt,ot,N){N===!0?r.vertexAttribIPointer(C,V,ft,pt,ot):r.vertexAttribPointer(C,V,ft,nt,pt,ot)}function D(C,V,ft,nt){b();const pt=nt.attributes,ot=ft.getAttributes(),N=V.defaultAttributeValues;for(const H in ot){const W=ot[H];if(W.location>=0){let lt=pt[H];if(lt===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor)),lt!==void 0){const ct=lt.normalized,U=lt.itemSize,J=e.get(lt);if(J===void 0)continue;const yt=J.buffer,K=J.type,dt=J.bytesPerElement,Et=K===r.INT||K===r.UNSIGNED_INT||lt.gpuType===Sd;if(lt.isInterleavedBufferAttribute){const Mt=lt.data,Ft=Mt.stride,Zt=lt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<W.locationSize;Kt++)_(W.location+Kt,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Kt=0;Kt<W.locationSize;Kt++)S(W.location+Kt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Kt=0;Kt<W.locationSize;Kt++)O(W.location+Kt,U/W.locationSize,K,ct,Ft*dt,(Zt+U/W.locationSize*Kt)*dt,Et)}else{if(lt.isInstancedBufferAttribute){for(let Mt=0;Mt<W.locationSize;Mt++)_(W.location+Mt,lt.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Mt=0;Mt<W.locationSize;Mt++)S(W.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Mt=0;Mt<W.locationSize;Mt++)O(W.location+Mt,U/W.locationSize,K,ct,U*dt,U/W.locationSize*Mt*dt,Et)}}else if(N!==void 0){const ct=N[H];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(W.location,ct);break;case 3:r.vertexAttrib3fv(W.location,ct);break;case 4:r.vertexAttrib4fv(W.location,ct);break;default:r.vertexAttrib1fv(W.location,ct)}}}}I()}function X(){q();for(const C in s){const V=s[C];for(const ft in V){const nt=V[ft];for(const pt in nt)g(nt[pt].object),delete nt[pt];delete V[ft]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const ft in V){const nt=V[ft];for(const pt in nt)g(nt[pt].object),delete nt[pt];delete V[ft]}delete s[C.id]}function z(C){for(const V in s){const ft=s[V];if(ft[C.id]===void 0)continue;const nt=ft[C.id];for(const pt in nt)g(nt[pt].object),delete nt[pt];delete ft[C.id]}}function q(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:w,dispose:X,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:S,disableUnusedAttributes:I}}function Xb(r,e,i){let s;function l(p){s=p}function u(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];i.update(M,s,1)}function m(p,g,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*y[b];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function jb(r,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==bi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const q=z===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ca&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ra&&!q)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),X=E>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:X,maxSamples:F}}function Wb(r){const e=this;let i=null,s=0,l=!1,u=!1;const h=new ms,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||s!==0||l;return l=y,s=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,M){const E=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,_=r.get(v);if(!l||E===null||E.length===0||u&&!S)u?g(null):p();else{const I=u?0:s,O=I*4;let D=_.clippingState||null;m.value=D,D=g(E,y,O,M);for(let X=0;X!==O;++X)D[X]=i[X];_.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,y,M,E){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=m.value,E!==!0||S===null){const _=M+b*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let O=0,D=M;O!==b;++O,D+=4)h.copy(v[O]).applyMatrix4(I,d),h.normal.toArray(S,D),S[D+3]=h.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function qb(r){let e=new WeakMap;function i(h,d){return d===Fh?h.mapping=br:d===Hh&&(h.mapping=Tr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Fh||d===Hh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new kM(m.height);return p.fromEquirectangularTexture(r,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const vr=4,i_=[.125,.215,.35,.446,.526,.582],vs=20,bh=new uv,a_=new be;let Th=null,Ah=0,Rh=0,Ch=!1;const gs=(1+Math.sqrt(5))/2,gr=1/gs,s_=[new st(-gs,gr,0),new st(gs,gr,0),new st(-gr,0,gs),new st(gr,0,gs),new st(0,gs,-gr),new st(0,gs,gr),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)];class r_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,Mc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===br||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:zo,format:bi,colorSpace:Cr,depthBuffer:!1},l=o_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yb(u)),this._blurMaterial=Zb(u,e,i)}return l}_compileMaterial(e){const i=new di(this._lodPlanes[0],e);this._renderer.compile(i,bh)}_sceneToCubeUV(e,i,s,l){const d=new ni(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(a_),g.toneMapping=Ga,g.autoClear=!1;const M=new Cd({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),E=new di(new Go,M);let b=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,b=!0):(M.color.copy(a_),b=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):I===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const O=this._cubeSize;Mc(l,I*O,_>2?O:0,O,O),g.setRenderTarget(l),b&&g.render(E,d),g.render(e,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===br||e.mapping===Tr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=c_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new di(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Mc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,bh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=s_[(l-u-1)%s_.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new di(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*vs-1),b=u/E,S=isFinite(u)?1+Math.floor(g*b):vs;S>vs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vs}`);const _=[];let I=0;for(let z=0;z<vs;++z){const q=z/b,w=Math.exp(-q*q/2);_.push(w),z===0?I+=w:z<S&&(I+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/I;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:O}=this;y.dTheta.value=E,y.mipInt.value=O-s;const D=this._sizeLods[l],X=3*D*(l>O-vr?l-O+vr:0),F=4*(this._cubeSize-D);Mc(i,X,F,3*D,2*D),m.setRenderTarget(i),m.render(v,bh)}}function Yb(r){const e=[],i=[],s=[];let l=r;const u=r-vr+1+i_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-vr?m=i_[h-r+vr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,b=3,S=2,_=1,I=new Float32Array(b*E*M),O=new Float32Array(S*E*M),D=new Float32Array(_*E*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,q=F>2?0:-1,w=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];I.set(w,b*E*F),O.set(y,S*E*F);const C=[F,F,F,F,F,F];D.set(C,_*E*F)}const X=new ii;X.setAttribute("position",new Ai(I,b)),X.setAttribute("uv",new Ai(O,S)),X.setAttribute("faceIndex",new Ai(D,_)),e.push(X),l>vr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function o_(r,e,i){const s=new Ms(r,e,i);return s.texture.mapping=Oc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Mc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function Zb(r,e,i){const s=new Float32Array(vs),l=new st(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function l_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function c_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function Kb(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Fh||m===Hh,g=m===br||m===Tr;if(p||g){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new r_(r)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new r_(r)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Qb(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&_r("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Jb(r,e,i,s){const l={},u=new WeakMap;function h(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const M in y)e.update(y[M],r.ARRAY_BUFFER)}function p(v){const y=[],M=v.index,E=v.attributes.position;let b=0;if(M!==null){const I=M.array;b=M.version;for(let O=0,D=I.length;O<D;O+=3){const X=I[O+0],F=I[O+1],z=I[O+2];y.push(X,F,F,z,z,X)}}else if(E!==void 0){const I=E.array;b=E.version;for(let O=0,D=I.length/3-1;O<D;O+=3){const X=O+0,F=O+1,z=O+2;y.push(X,F,F,z,z,X)}}else return;const S=new(Y_(y)?tv:$_)(y,1);S.version=b;const _=u.get(v);_&&e.remove(_),u.set(v,S)}function g(v){const y=u.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function $b(r,e,i){let s;function l(y){s=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function m(y,M){r.drawElements(s,M,u,y*h),i.update(M,s,1)}function p(y,M,E){E!==0&&(r.drawElementsInstanced(s,M,u,y*h,E),i.update(M,s,E))}function g(y,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,y,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,s,1)}function v(y,M,E,b){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/h,M[_],b[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,u,y,0,b,0,E);let _=0;for(let I=0;I<E;I++)_+=M[I]*b[I];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function tT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function eT(r,e,i){const s=new WeakMap,l=new tn;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let C=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let X=d.attributes.position.count*D,F=1;X>e.maxTextureSize&&(F=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const z=new Float32Array(X*F*4*v),q=new K_(z,X,F,v);q.type=ra,q.needsUpdate=!0;const w=D*4;for(let V=0;V<v;V++){const ft=_[V],nt=I[V],pt=O[V],ot=X*F*4*V;for(let N=0;N<ft.count;N++){const H=N*w;E===!0&&(l.fromBufferAttribute(ft,N),z[ot+H+0]=l.x,z[ot+H+1]=l.y,z[ot+H+2]=l.z,z[ot+H+3]=0),b===!0&&(l.fromBufferAttribute(nt,N),z[ot+H+4]=l.x,z[ot+H+5]=l.y,z[ot+H+6]=l.z,z[ot+H+7]=0),S===!0&&(l.fromBufferAttribute(pt,N),z[ot+H+8]=l.x,z[ot+H+9]=l.y,z[ot+H+10]=l.z,z[ot+H+11]=pt.itemSize===4?l.w:1)}}y={count:v,texture:q,size:new De(X,F)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:u}}function nT(r,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const pv=new Dn,u_=new ov(1,1),mv=new K_,gv=new AM,_v=new iv,f_=[],h_=[],d_=new Float32Array(16),p_=new Float32Array(9),m_=new Float32Array(4);function Ur(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let u=f_[l];if(u===void 0&&(u=new Float32Array(l),f_[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(u,d)}return u}function hn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function dn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Ic(r,e){let i=h_[e];i===void 0&&(i=new Int32Array(e),h_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function iT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function aT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;r.uniform2fv(this.addr,e),dn(i,e)}}function sT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;r.uniform3fv(this.addr,e),dn(i,e)}}function rT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;r.uniform4fv(this.addr,e),dn(i,e)}}function oT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;m_.set(s),r.uniformMatrix2fv(this.addr,!1,m_),dn(i,s)}}function lT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;p_.set(s),r.uniformMatrix3fv(this.addr,!1,p_),dn(i,s)}}function cT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;d_.set(s),r.uniformMatrix4fv(this.addr,!1,d_),dn(i,s)}}function uT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function fT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;r.uniform2iv(this.addr,e),dn(i,e)}}function hT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;r.uniform3iv(this.addr,e),dn(i,e)}}function dT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;r.uniform4iv(this.addr,e),dn(i,e)}}function pT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function mT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;r.uniform2uiv(this.addr,e),dn(i,e)}}function gT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;r.uniform3uiv(this.addr,e),dn(i,e)}}function _T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;r.uniform4uiv(this.addr,e),dn(i,e)}}function vT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(u_.compareFunction=q_,u=u_):u=pv,i.setTexture2D(e||u,l)}function xT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||gv,l)}function yT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||_v,l)}function ST(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||mv,l)}function MT(r){switch(r){case 5126:return iT;case 35664:return aT;case 35665:return sT;case 35666:return rT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function ET(r,e){r.uniform1fv(this.addr,e)}function bT(r,e){const i=Ur(e,this.size,2);r.uniform2fv(this.addr,i)}function TT(r,e){const i=Ur(e,this.size,3);r.uniform3fv(this.addr,i)}function AT(r,e){const i=Ur(e,this.size,4);r.uniform4fv(this.addr,i)}function RT(r,e){const i=Ur(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function CT(r,e){const i=Ur(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function wT(r,e){const i=Ur(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function DT(r,e){r.uniform1iv(this.addr,e)}function UT(r,e){r.uniform2iv(this.addr,e)}function NT(r,e){r.uniform3iv(this.addr,e)}function LT(r,e){r.uniform4iv(this.addr,e)}function OT(r,e){r.uniform1uiv(this.addr,e)}function PT(r,e){r.uniform2uiv(this.addr,e)}function zT(r,e){r.uniform3uiv(this.addr,e)}function IT(r,e){r.uniform4uiv(this.addr,e)}function BT(r,e,i){const s=this.cache,l=e.length,u=Ic(i,l);hn(s,u)||(r.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||pv,u[h])}function FT(r,e,i){const s=this.cache,l=e.length,u=Ic(i,l);hn(s,u)||(r.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||gv,u[h])}function HT(r,e,i){const s=this.cache,l=e.length,u=Ic(i,l);hn(s,u)||(r.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||_v,u[h])}function GT(r,e,i){const s=this.cache,l=e.length,u=Ic(i,l);hn(s,u)||(r.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||mv,u[h])}function VT(r){switch(r){case 5126:return ET;case 35664:return bT;case 35665:return TT;case 35666:return AT;case 35674:return RT;case 35675:return CT;case 35676:return wT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return NT;case 35669:case 35673:return LT;case 5125:return OT;case 36294:return PT;case 36295:return zT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class kT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=MT(i.type)}}class XT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VT(i.type)}}class jT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function g_(r,e){r.seq.push(e),r.map[e.id]=e}function WT(r,e,i){const s=r.name,l=s.length;for(wh.lastIndex=0;;){const u=wh.exec(s),h=wh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){g_(i,p===void 0?new kT(d,r,e):new XT(d,r,e));break}else{let v=i.map[d];v===void 0&&(v=new jT(d),g_(i,v)),i=v}}}class wc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);WT(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function __(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const qT=37297;let YT=0;function ZT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const v_=new le;function KT(r){Ce._getMatrix(v_,Ce.workingColorSpace,r);const e=`mat3( ${v_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case Dc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function x_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+ZT(r.getShaderSource(e),h)}else return l}function QT(r,e){const i=KT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function JT(r,e){let i;switch(e){case JS:i="Linear";break;case $S:i="Reinhard";break;case tM:i="Cineon";break;case eM:i="ACESFilmic";break;case iM:i="AgX";break;case aM:i="Neutral";break;case nM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ec=new st;function $T(){Ce.getLuminanceCoefficients(Ec);const r=Ec.x.toFixed(4),e=Ec.y.toFixed(4),i=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function eA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function nA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(e,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function Lo(r){return r!==""}function y_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function S_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(r){return r.replace(iA,sA)}const aA=new Map;function sA(r,e){let i=ce[e];if(i===void 0){const s=aA.get(e);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return _d(i)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M_(r){return r.replace(rA,oA)}function oA(r,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function E_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function lA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===L_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===US?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function cA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case br:case Tr:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function fA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case O_:e="ENVMAP_BLENDING_MULTIPLY";break;case KS:e="ENVMAP_BLENDING_MIX";break;case QS:e="ENVMAP_BLENDING_ADD";break}return e}function hA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function dA(r,e,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=lA(i),p=cA(i),g=uA(i),v=fA(i),y=hA(i),M=tA(i),E=eA(u),b=l.createProgram();let S,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(S=[E_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[E_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ga?JT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,QT("linearToOutputTexel",i.outputColorSpace),$T(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),h=_d(h),h=y_(h,i),h=S_(h,i),d=_d(d),d=y_(d,i),d=S_(d,i),h=M_(h),d=M_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=I+S+h,D=I+_+d,X=__(l,l.VERTEX_SHADER,O),F=__(l,l.FRAGMENT_SHADER,D);l.attachShader(b,X),l.attachShader(b,F),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function z(V){if(r.debug.checkShaderErrors){const ft=l.getProgramInfoLog(b).trim(),nt=l.getShaderInfoLog(X).trim(),pt=l.getShaderInfoLog(F).trim();let ot=!0,N=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,X,F);else{const H=x_(l,X,"vertex"),W=x_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ft+`
`+H+`
`+W)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(nt===""||pt==="")&&(N=!1);N&&(V.diagnostics={runnable:ot,programLog:ft,vertexShader:{log:nt,prefix:S},fragmentShader:{log:pt,prefix:_}})}l.deleteShader(X),l.deleteShader(F),q=new wc(l,b),w=nA(l,b)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,qT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=X,this.fragmentShader=F,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new gA(e),i.set(e,s)),s}}class gA{constructor(e){this.id=pA++,this.code=e,this.usedTimes=0}}function _A(r,e,i,s,l,u,h){const d=new Q_,m=new mA,p=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,C,V,ft,nt){const pt=ft.fog,ot=nt.geometry,N=w.isMeshStandardMaterial?ft.environment:null,H=(w.isMeshStandardMaterial?i:e).get(w.envMap||N),W=H&&H.mapping===Oc?H.image.height:null,lt=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const ct=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,U=ct!==void 0?ct.length:0;let J=0;ot.morphAttributes.position!==void 0&&(J=1),ot.morphAttributes.normal!==void 0&&(J=2),ot.morphAttributes.color!==void 0&&(J=3);let yt,K,dt,Et;if(lt){const Ee=Ni[lt];yt=Ee.vertexShader,K=Ee.fragmentShader}else yt=w.vertexShader,K=w.fragmentShader,m.update(w),dt=m.getVertexShaderID(w),Et=m.getFragmentShaderID(w);const Mt=r.getRenderTarget(),Ft=r.state.buffers.depth.getReversed(),Zt=nt.isInstancedMesh===!0,Kt=nt.isBatchedMesh===!0,Ve=!!w.map,He=!!w.matcap,fe=!!H,G=!!w.aoMap,Tn=!!w.lightMap,ue=!!w.bumpMap,pe=!!w.normalMap,Xt=!!w.displacementMap,Ue=!!w.emissiveMap,kt=!!w.metalnessMap,L=!!w.roughnessMap,A=w.anisotropy>0,it=w.clearcoat>0,gt=w.dispersion>0,bt=w.iridescence>0,vt=w.sheen>0,Gt=w.transmission>0,wt=A&&!!w.anisotropyMap,zt=it&&!!w.clearcoatMap,me=it&&!!w.clearcoatNormalMap,At=it&&!!w.clearcoatRoughnessMap,It=bt&&!!w.iridescenceMap,jt=bt&&!!w.iridescenceThicknessMap,Vt=vt&&!!w.sheenColorMap,Ot=vt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,ae=!!w.specularColorMap,Oe=!!w.specularIntensityMap,Y=Gt&&!!w.transmissionMap,Rt=Gt&&!!w.thicknessMap,ht=!!w.gradientMap,St=!!w.alphaMap,Ct=w.alphaTest>0,Dt=!!w.alphaHash,$t=!!w.extensions;let We=Ga;w.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(We=r.toneMapping);const cn={shaderID:lt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:K,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&nt._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&nt.instanceColor!==null,instancingMorph:Zt&&nt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Cr,alphaToCoverage:!!w.alphaToCoverage,map:Ve,matcap:He,envMap:fe,envMapMode:fe&&H.mapping,envMapCubeUVHeight:W,aoMap:G,lightMap:Tn,bumpMap:ue,normalMap:pe,displacementMap:y&&Xt,emissiveMap:Ue,normalMapObjectSpace:pe&&w.normalMapType===lM,normalMapTangentSpace:pe&&w.normalMapType===W_,metalnessMap:kt,roughnessMap:L,anisotropy:A,anisotropyMap:wt,clearcoat:it,clearcoatMap:zt,clearcoatNormalMap:me,clearcoatRoughnessMap:At,dispersion:gt,iridescence:bt,iridescenceMap:It,iridescenceThicknessMap:jt,sheen:vt,sheenColorMap:Vt,sheenRoughnessMap:Ot,specularMap:Jt,specularColorMap:ae,specularIntensityMap:Oe,transmission:Gt,transmissionMap:Y,thicknessMap:Rt,gradientMap:ht,opaque:w.transparent===!1&&w.blending===xr&&w.alphaToCoverage===!1,alphaMap:St,alphaTest:Ct,alphaHash:Dt,combine:w.combine,mapUv:Ve&&b(w.map.channel),aoMapUv:G&&b(w.aoMap.channel),lightMapUv:Tn&&b(w.lightMap.channel),bumpMapUv:ue&&b(w.bumpMap.channel),normalMapUv:pe&&b(w.normalMap.channel),displacementMapUv:Xt&&b(w.displacementMap.channel),emissiveMapUv:Ue&&b(w.emissiveMap.channel),metalnessMapUv:kt&&b(w.metalnessMap.channel),roughnessMapUv:L&&b(w.roughnessMap.channel),anisotropyMapUv:wt&&b(w.anisotropyMap.channel),clearcoatMapUv:zt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(w.sheenRoughnessMap.channel),specularMapUv:Jt&&b(w.specularMap.channel),specularColorMapUv:ae&&b(w.specularColorMap.channel),specularIntensityMapUv:Oe&&b(w.specularIntensityMap.channel),transmissionMapUv:Y&&b(w.transmissionMap.channel),thicknessMapUv:Rt&&b(w.thicknessMap.channel),alphaMapUv:St&&b(w.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(pe||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ot.attributes.uv&&(Ve||St),fog:!!pt,useFog:w.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ft,skinning:nt.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:We,decodeVideoTexture:Ve&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ue&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Li,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$t&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&w.extensions.multiDraw===!0||Kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return cn.vertexUv1s=p.has(1),cn.vertexUv2s=p.has(2),cn.vertexUv3s=p.has(3),p.clear(),cn}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(I(C,w),O(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function I(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function O(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=E[w.type];let V;if(C){const ft=Ni[C];V=FM.clone(ft.uniforms)}else V=w.uniforms;return V}function X(w,C){let V;for(let ft=0,nt=g.length;ft<nt;ft++){const pt=g[ft];if(pt.cacheKey===C){V=pt,++V.usedTimes;break}}return V===void 0&&(V=new dA(r,C,w,u),g.push(V)),V}function F(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function z(w){m.remove(w)}function q(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:X,releaseProgram:F,releaseShaderCache:z,programs:g,dispose:q}}function vA(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function xA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function b_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function T_(){const r=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(v,y,M,E,b,S){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:M,groupOrder:E,renderOrder:v.renderOrder,z:b,group:S},r[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=M,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=b,_.group=S),e++,_}function d(v,y,M,E,b,S){const _=h(v,y,M,E,b,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,y,M,E,b,S){const _=h(v,y,M,E,b,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,y){i.length>1&&i.sort(v||xA),s.length>1&&s.sort(y||b_),l.length>1&&l.sort(y||b_)}function g(){for(let v=e,y=r.length;v<y;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function yA(){let r=new WeakMap;function e(s,l){const u=r.get(s);let h;return u===void 0?(h=new T_,r.set(s,[h])):l>=u.length?(h=new T_,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function SA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new be};break;case"SpotLight":i={position:new st,direction:new st,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new st,halfWidth:new st,halfHeight:new st};break}return r[e.id]=i,i}}}function MA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let EA=0;function bA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function TA(r){const e=new SA,i=MA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new st);const l=new st,u=new Ye,h=new Ye;function d(p){let g=0,v=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,E=0,b=0,S=0,_=0,I=0,O=0,D=0,X=0,F=0,z=0;p.sort(bA);for(let w=0,C=p.length;w<C;w++){const V=p[w],ft=V.color,nt=V.intensity,pt=V.distance,ot=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ft.r*nt,v+=ft.g*nt,y+=ft.b*nt;else if(V.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(V.sh.coefficients[N],nt);z++}else if(V.isDirectionalLight){const N=e.get(V);if(N.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,W=i.get(V);W.shadowIntensity=H.intensity,W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=ot,s.directionalShadowMatrix[M]=V.shadow.matrix,I++}s.directional[M]=N,M++}else if(V.isSpotLight){const N=e.get(V);N.position.setFromMatrixPosition(V.matrixWorld),N.color.copy(ft).multiplyScalar(nt),N.distance=pt,N.coneCos=Math.cos(V.angle),N.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),N.decay=V.decay,s.spot[b]=N;const H=V.shadow;if(V.map&&(s.spotLightMap[X]=V.map,X++,H.updateMatrices(V),V.castShadow&&F++),s.spotLightMatrix[b]=H.matrix,V.castShadow){const W=i.get(V);W.shadowIntensity=H.intensity,W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,s.spotShadow[b]=W,s.spotShadowMap[b]=ot,D++}b++}else if(V.isRectAreaLight){const N=e.get(V);N.color.copy(ft).multiplyScalar(nt),N.halfWidth.set(V.width*.5,0,0),N.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=N,S++}else if(V.isPointLight){const N=e.get(V);if(N.color.copy(V.color).multiplyScalar(V.intensity),N.distance=V.distance,N.decay=V.decay,V.castShadow){const H=V.shadow,W=i.get(V);W.shadowIntensity=H.intensity,W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,W.shadowCameraNear=H.camera.near,W.shadowCameraFar=H.camera.far,s.pointShadow[E]=W,s.pointShadowMap[E]=ot,s.pointShadowMatrix[E]=V.shadow.matrix,O++}s.point[E]=N,E++}else if(V.isHemisphereLight){const N=e.get(V);N.skyColor.copy(V.color).multiplyScalar(nt),N.groundColor.copy(V.groundColor).multiplyScalar(nt),s.hemi[_]=N,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=y;const q=s.hash;(q.directionalLength!==M||q.pointLength!==E||q.spotLength!==b||q.rectAreaLength!==S||q.hemiLength!==_||q.numDirectionalShadows!==I||q.numPointShadows!==O||q.numSpotShadows!==D||q.numSpotMaps!==X||q.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+X-F,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,q.directionalLength=M,q.pointLength=E,q.spotLength=b,q.rectAreaLength=S,q.hemiLength=_,q.numDirectionalShadows=I,q.numPointShadows=O,q.numSpotShadows=D,q.numSpotMaps=X,q.numLightProbes=z,s.version=EA++)}function m(p,g){let v=0,y=0,M=0,E=0,b=0;const S=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const O=p[_];if(O.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),v++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),h.identity(),u.copy(O.matrixWorld),u.premultiply(S),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),y++}else if(O.isHemisphereLight){const D=s.hemi[b];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:d,setupView:m,state:s}}function A_(r){const e=new TA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function AA(r){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new A_(r),e.set(l,[d])):u>=h.length?(d=new A_(r),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const RA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
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
}`;function wA(r,e,i){let s=new wd;const l=new De,u=new De,h=new tn,d=new KM({depthPacking:oM}),m=new QM,p={},g=i.maxTextureSize,v={[Va]:Xn,[Xn]:Va,[Li]:Li},y=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:RA,fragmentShader:CA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new di(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L_;let _=this.type;this.render=function(F,z,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),ft=r.state;ft.setBlending(Ha),ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const nt=_!==sa&&this.type===sa,pt=_===sa&&this.type!==sa;for(let ot=0,N=F.length;ot<N;ot++){const H=F[ot],W=H.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const lt=W.getFrameExtents();if(l.multiply(lt),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/lt.x),l.x=u.x*lt.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/lt.y),l.y=u.y*lt.y,W.mapSize.y=u.y)),W.map===null||nt===!0||pt===!0){const U=this.type!==sa?{minFilter:Ti,magFilter:Ti}:{};W.map!==null&&W.map.dispose(),W.map=new Ms(l.x,l.y,U),W.map.texture.name=H.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ct=W.getViewportCount();for(let U=0;U<ct;U++){const J=W.getViewport(U);h.set(u.x*J.x,u.y*J.y,u.x*J.z,u.y*J.w),ft.viewport(h),W.updateMatrices(H,U),s=W.getFrustum(),D(z,q,W.camera,H,this.type)}W.isPointLightShadow!==!0&&this.type===sa&&I(W,q),W.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(w,C,V)};function I(F,z){const q=e.update(b);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ms(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(z,null,q,y,b,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(z,null,q,M,b,null)}function O(F,z,q,w){let C=null;const V=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)C=V;else if(C=q.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ft=C.uuid,nt=z.uuid;let pt=p[ft];pt===void 0&&(pt={},p[ft]=pt);let ot=pt[nt];ot===void 0&&(ot=C.clone(),pt[nt]=ot,z.addEventListener("dispose",X)),C=ot}if(C.visible=z.visible,C.wireframe=z.wireframe,w===sa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ft=r.properties.get(C);ft.light=q}return C}function D(F,z,q,w,C){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===sa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const nt=e.update(F),pt=F.material;if(Array.isArray(pt)){const ot=nt.groups;for(let N=0,H=ot.length;N<H;N++){const W=ot[N],lt=pt[W.materialIndex];if(lt&&lt.visible){const ct=O(F,lt,w,C);F.onBeforeShadow(r,F,z,q,nt,ct,W),r.renderBufferDirect(q,null,nt,ct,F,W),F.onAfterShadow(r,F,z,q,nt,ct,W)}}}else if(pt.visible){const ot=O(F,pt,w,C);F.onBeforeShadow(r,F,z,q,nt,ot,null),r.renderBufferDirect(q,null,nt,ot,F,null),F.onAfterShadow(r,F,z,q,nt,ot,null)}}const ft=F.children;for(let nt=0,pt=ft.length;nt<pt;nt++)D(ft[nt],z,q,w,C)}function X(F){F.target.removeEventListener("dispose",X);for(const q in p){const w=p[q],C=F.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const DA={[Nh]:Lh,[Oh]:Ih,[Ph]:Bh,[Er]:zh,[Lh]:Nh,[Ih]:Oh,[Bh]:Ph,[zh]:Er};function UA(r,e){function i(){let Y=!1;const Rt=new tn;let ht=null;const St=new tn(0,0,0,0);return{setMask:function(Ct){ht!==Ct&&!Y&&(r.colorMask(Ct,Ct,Ct,Ct),ht=Ct)},setLocked:function(Ct){Y=Ct},setClear:function(Ct,Dt,$t,We,cn){cn===!0&&(Ct*=We,Dt*=We,$t*=We),Rt.set(Ct,Dt,$t,We),St.equals(Rt)===!1&&(r.clearColor(Ct,Dt,$t,We),St.copy(Rt))},reset:function(){Y=!1,ht=null,St.set(-1,0,0,0)}}}function s(){let Y=!1,Rt=!1,ht=null,St=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const $t=e.get("EXT_clip_control");Rt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const We=Ct;Ct=null,this.setClear(We)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?Mt(r.DEPTH_TEST):Ft(r.DEPTH_TEST)},setMask:function(Dt){ht!==Dt&&!Y&&(r.depthMask(Dt),ht=Dt)},setFunc:function(Dt){if(Rt&&(Dt=DA[Dt]),St!==Dt){switch(Dt){case Nh:r.depthFunc(r.NEVER);break;case Lh:r.depthFunc(r.ALWAYS);break;case Oh:r.depthFunc(r.LESS);break;case Er:r.depthFunc(r.LEQUAL);break;case Ph:r.depthFunc(r.EQUAL);break;case zh:r.depthFunc(r.GEQUAL);break;case Ih:r.depthFunc(r.GREATER);break;case Bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}St=Dt}},setLocked:function(Dt){Y=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),r.clearDepth(Dt),Ct=Dt)},reset:function(){Y=!1,ht=null,St=null,Ct=null,Rt=!1}}}function l(){let Y=!1,Rt=null,ht=null,St=null,Ct=null,Dt=null,$t=null,We=null,cn=null;return{setTest:function(Ee){Y||(Ee?Mt(r.STENCIL_TEST):Ft(r.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!Y&&(r.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,vn,pi){(ht!==Ee||St!==vn||Ct!==pi)&&(r.stencilFunc(Ee,vn,pi),ht=Ee,St=vn,Ct=pi)},setOp:function(Ee,vn,pi){(Dt!==Ee||$t!==vn||We!==pi)&&(r.stencilOp(Ee,vn,pi),Dt=Ee,$t=vn,We=pi)},setLocked:function(Ee){Y=Ee},setClear:function(Ee){cn!==Ee&&(r.clearStencil(Ee),cn=Ee)},reset:function(){Y=!1,Rt=null,ht=null,St=null,Ct=null,Dt=null,$t=null,We=null,cn=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,M=[],E=null,b=!1,S=null,_=null,I=null,O=null,D=null,X=null,F=null,z=new be(0,0,0),q=0,w=!1,C=null,V=null,ft=null,nt=null,pt=null;const ot=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=H>=1):W.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=H>=2);let lt=null,ct={};const U=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),yt=new tn().fromArray(U),K=new tn().fromArray(J);function dt(Y,Rt,ht,St){const Ct=new Uint8Array(4),Dt=r.createTexture();r.bindTexture(Y,Dt),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<ht;$t++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,St,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Rt+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return Dt}const Et={};Et[r.TEXTURE_2D]=dt(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=dt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[r.TEXTURE_2D_ARRAY]=dt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=dt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(r.DEPTH_TEST),h.setFunc(Er),ue(!1),pe(bg),Mt(r.CULL_FACE),G(Ha);function Mt(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function Ft(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function Zt(Y,Rt){return v[Y]!==Rt?(r.bindFramebuffer(Y,Rt),v[Y]=Rt,Y===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Rt),Y===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Kt(Y,Rt){let ht=M,St=!1;if(Y){ht=y.get(Rt),ht===void 0&&(ht=[],y.set(Rt,ht));const Ct=Y.textures;if(ht.length!==Ct.length||ht[0]!==r.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)ht[Dt]=r.COLOR_ATTACHMENT0+Dt;ht.length=Ct.length,St=!0}}else ht[0]!==r.BACK&&(ht[0]=r.BACK,St=!0);St&&r.drawBuffers(ht)}function Ve(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const He={[_s]:r.FUNC_ADD,[LS]:r.FUNC_SUBTRACT,[OS]:r.FUNC_REVERSE_SUBTRACT};He[PS]=r.MIN,He[zS]=r.MAX;const fe={[IS]:r.ZERO,[BS]:r.ONE,[FS]:r.SRC_COLOR,[Dh]:r.SRC_ALPHA,[jS]:r.SRC_ALPHA_SATURATE,[kS]:r.DST_COLOR,[GS]:r.DST_ALPHA,[HS]:r.ONE_MINUS_SRC_COLOR,[Uh]:r.ONE_MINUS_SRC_ALPHA,[XS]:r.ONE_MINUS_DST_COLOR,[VS]:r.ONE_MINUS_DST_ALPHA,[WS]:r.CONSTANT_COLOR,[qS]:r.ONE_MINUS_CONSTANT_COLOR,[YS]:r.CONSTANT_ALPHA,[ZS]:r.ONE_MINUS_CONSTANT_ALPHA};function G(Y,Rt,ht,St,Ct,Dt,$t,We,cn,Ee){if(Y===Ha){b===!0&&(Ft(r.BLEND),b=!1);return}if(b===!1&&(Mt(r.BLEND),b=!0),Y!==NS){if(Y!==S||Ee!==w){if((_!==_s||D!==_s)&&(r.blendEquation(r.FUNC_ADD),_=_s,D=_s),Ee)switch(Y){case xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tg:r.blendFunc(r.ONE,r.ONE);break;case Ag:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ag:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}I=null,O=null,X=null,F=null,z.set(0,0,0),q=0,S=Y,w=Ee}return}Ct=Ct||Rt,Dt=Dt||ht,$t=$t||St,(Rt!==_||Ct!==D)&&(r.blendEquationSeparate(He[Rt],He[Ct]),_=Rt,D=Ct),(ht!==I||St!==O||Dt!==X||$t!==F)&&(r.blendFuncSeparate(fe[ht],fe[St],fe[Dt],fe[$t]),I=ht,O=St,X=Dt,F=$t),(We.equals(z)===!1||cn!==q)&&(r.blendColor(We.r,We.g,We.b,cn),z.copy(We),q=cn),S=Y,w=!1}function Tn(Y,Rt){Y.side===Li?Ft(r.CULL_FACE):Mt(r.CULL_FACE);let ht=Y.side===Xn;Rt&&(ht=!ht),ue(ht),Y.blending===xr&&Y.transparent===!1?G(Ha):G(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const St=Y.stencilWrite;d.setTest(St),St&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ue(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):Ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function ue(Y){C!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),C=Y)}function pe(Y){Y!==wS?(Mt(r.CULL_FACE),Y!==V&&(Y===bg?r.cullFace(r.BACK):Y===DS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ft(r.CULL_FACE),V=Y}function Xt(Y){Y!==ft&&(N&&r.lineWidth(Y),ft=Y)}function Ue(Y,Rt,ht){Y?(Mt(r.POLYGON_OFFSET_FILL),(nt!==Rt||pt!==ht)&&(r.polygonOffset(Rt,ht),nt=Rt,pt=ht)):Ft(r.POLYGON_OFFSET_FILL)}function kt(Y){Y?Mt(r.SCISSOR_TEST):Ft(r.SCISSOR_TEST)}function L(Y){Y===void 0&&(Y=r.TEXTURE0+ot-1),lt!==Y&&(r.activeTexture(Y),lt=Y)}function A(Y,Rt,ht){ht===void 0&&(lt===null?ht=r.TEXTURE0+ot-1:ht=lt);let St=ct[ht];St===void 0&&(St={type:void 0,texture:void 0},ct[ht]=St),(St.type!==Y||St.texture!==Rt)&&(lt!==ht&&(r.activeTexture(ht),lt=ht),r.bindTexture(Y,Rt||Et[Y]),St.type=Y,St.texture=Rt)}function it(){const Y=ct[lt];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function gt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function vt(){try{r.texSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Gt(){try{r.texSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function wt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function me(){try{r.texStorage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{r.texStorage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(){try{r.texImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jt(){try{r.texImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Vt(Y){yt.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),yt.copy(Y))}function Ot(Y){K.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),K.copy(Y))}function Jt(Y,Rt){let ht=p.get(Rt);ht===void 0&&(ht=new WeakMap,p.set(Rt,ht));let St=ht.get(Y);St===void 0&&(St=r.getUniformBlockIndex(Rt,Y.name),ht.set(Y,St))}function ae(Y,Rt){const St=p.get(Rt).get(Y);m.get(Rt)!==St&&(r.uniformBlockBinding(Rt,St,Y.__bindingPointIndex),m.set(Rt,St))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},lt=null,ct={},v={},y=new WeakMap,M=[],E=null,b=!1,S=null,_=null,I=null,O=null,D=null,X=null,F=null,z=new be(0,0,0),q=0,w=!1,C=null,V=null,ft=null,nt=null,pt=null,yt.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Mt,disable:Ft,bindFramebuffer:Zt,drawBuffers:Kt,useProgram:Ve,setBlending:G,setMaterial:Tn,setFlipSided:ue,setCullFace:pe,setLineWidth:Xt,setPolygonOffset:Ue,setScissorTest:kt,activeTexture:L,bindTexture:A,unbindTexture:it,compressedTexImage2D:gt,compressedTexImage3D:bt,texImage2D:It,texImage3D:jt,updateUBOMapping:Jt,uniformBlockBinding:ae,texStorage2D:me,texStorage3D:At,texSubImage2D:vt,texSubImage3D:Gt,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Vt,viewport:Ot,reset:Oe}}function NA(r,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new De,g=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return M?new OffscreenCanvas(L,A):Po("canvas")}function b(L,A,it){let gt=1;const bt=kt(L);if((bt.width>it||bt.height>it)&&(gt=it/Math.max(bt.width,bt.height)),gt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const vt=Math.floor(gt*bt.width),Gt=Math.floor(gt*bt.height);v===void 0&&(v=E(vt,Gt));const wt=A?E(vt,Gt):v;return wt.width=vt,wt.height=Gt,wt.getContext("2d").drawImage(L,0,0,vt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+vt+"x"+Gt+")."),wt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(L,A,it,gt,bt=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let vt=A;if(A===r.RED&&(it===r.FLOAT&&(vt=r.R32F),it===r.HALF_FLOAT&&(vt=r.R16F),it===r.UNSIGNED_BYTE&&(vt=r.R8)),A===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(vt=r.R8UI),it===r.UNSIGNED_SHORT&&(vt=r.R16UI),it===r.UNSIGNED_INT&&(vt=r.R32UI),it===r.BYTE&&(vt=r.R8I),it===r.SHORT&&(vt=r.R16I),it===r.INT&&(vt=r.R32I)),A===r.RG&&(it===r.FLOAT&&(vt=r.RG32F),it===r.HALF_FLOAT&&(vt=r.RG16F),it===r.UNSIGNED_BYTE&&(vt=r.RG8)),A===r.RG_INTEGER&&(it===r.UNSIGNED_BYTE&&(vt=r.RG8UI),it===r.UNSIGNED_SHORT&&(vt=r.RG16UI),it===r.UNSIGNED_INT&&(vt=r.RG32UI),it===r.BYTE&&(vt=r.RG8I),it===r.SHORT&&(vt=r.RG16I),it===r.INT&&(vt=r.RG32I)),A===r.RGB_INTEGER&&(it===r.UNSIGNED_BYTE&&(vt=r.RGB8UI),it===r.UNSIGNED_SHORT&&(vt=r.RGB16UI),it===r.UNSIGNED_INT&&(vt=r.RGB32UI),it===r.BYTE&&(vt=r.RGB8I),it===r.SHORT&&(vt=r.RGB16I),it===r.INT&&(vt=r.RGB32I)),A===r.RGBA_INTEGER&&(it===r.UNSIGNED_BYTE&&(vt=r.RGBA8UI),it===r.UNSIGNED_SHORT&&(vt=r.RGBA16UI),it===r.UNSIGNED_INT&&(vt=r.RGBA32UI),it===r.BYTE&&(vt=r.RGBA8I),it===r.SHORT&&(vt=r.RGBA16I),it===r.INT&&(vt=r.RGBA32I)),A===r.RGB&&it===r.UNSIGNED_INT_5_9_9_9_REV&&(vt=r.RGB9_E5),A===r.RGBA){const Gt=bt?Dc:Ce.getTransfer(gt);it===r.FLOAT&&(vt=r.RGBA32F),it===r.HALF_FLOAT&&(vt=r.RGBA16F),it===r.UNSIGNED_BYTE&&(vt=Gt===Fe?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(vt=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(vt=r.RGB5_A1)}return(vt===r.R16F||vt===r.R32F||vt===r.RG16F||vt===r.RG32F||vt===r.RGBA16F||vt===r.RGBA32F)&&e.get("EXT_color_buffer_float"),vt}function D(L,A){let it;return L?A===null||A===Ss||A===Ar?it=r.DEPTH24_STENCIL8:A===ra?it=r.DEPTH32F_STENCIL8:A===Oo&&(it=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ss||A===Ar?it=r.DEPTH_COMPONENT24:A===ra?it=r.DEPTH_COMPONENT32F:A===Oo&&(it=r.DEPTH_COMPONENT16),it}function X(L,A){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ti&&L.minFilter!==Oi?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function F(L){const A=L.target;A.removeEventListener("dispose",F),q(A),A.isVideoTexture&&g.delete(A)}function z(L){const A=L.target;A.removeEventListener("dispose",z),C(A)}function q(L){const A=s.get(L);if(A.__webglInit===void 0)return;const it=L.source,gt=y.get(it);if(gt){const bt=gt[A.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&w(L),Object.keys(gt).length===0&&y.delete(it)}s.remove(L)}function w(L){const A=s.get(L);r.deleteTexture(A.__webglTexture);const it=L.source,gt=y.get(it);delete gt[A.__cacheKey],h.memory.textures--}function C(L){const A=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(A.__webglFramebuffer[gt]))for(let bt=0;bt<A.__webglFramebuffer[gt].length;bt++)r.deleteFramebuffer(A.__webglFramebuffer[gt][bt]);else r.deleteFramebuffer(A.__webglFramebuffer[gt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[gt])}else{if(Array.isArray(A.__webglFramebuffer))for(let gt=0;gt<A.__webglFramebuffer.length;gt++)r.deleteFramebuffer(A.__webglFramebuffer[gt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let gt=0;gt<A.__webglColorRenderbuffer.length;gt++)A.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[gt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const it=L.textures;for(let gt=0,bt=it.length;gt<bt;gt++){const vt=s.get(it[gt]);vt.__webglTexture&&(r.deleteTexture(vt.__webglTexture),h.memory.textures--),s.remove(it[gt])}s.remove(L)}let V=0;function ft(){V=0}function nt(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function pt(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function ot(L,A){const it=s.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&it.__version!==L.version){const gt=L.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(it,L,A);return}}i.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+A)}function N(L,A){const it=s.get(L);if(L.version>0&&it.__version!==L.version){K(it,L,A);return}i.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+A)}function H(L,A){const it=s.get(L);if(L.version>0&&it.__version!==L.version){K(it,L,A);return}i.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+A)}function W(L,A){const it=s.get(L);if(L.version>0&&it.__version!==L.version){dt(it,L,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+A)}const lt={[Gh]:r.REPEAT,[xs]:r.CLAMP_TO_EDGE,[Vh]:r.MIRRORED_REPEAT},ct={[Ti]:r.NEAREST,[sM]:r.NEAREST_MIPMAP_NEAREST,[Jl]:r.NEAREST_MIPMAP_LINEAR,[Oi]:r.LINEAR,[Jf]:r.LINEAR_MIPMAP_NEAREST,[ys]:r.LINEAR_MIPMAP_LINEAR},U={[cM]:r.NEVER,[mM]:r.ALWAYS,[uM]:r.LESS,[q_]:r.LEQUAL,[fM]:r.EQUAL,[pM]:r.GEQUAL,[hM]:r.GREATER,[dM]:r.NOTEQUAL};function J(L,A){if(A.type===ra&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Oi||A.magFilter===Jf||A.magFilter===Jl||A.magFilter===ys||A.minFilter===Oi||A.minFilter===Jf||A.minFilter===Jl||A.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,lt[A.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,lt[A.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,lt[A.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ct[A.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ct[A.minFilter]),A.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,U[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ti||A.minFilter!==Jl&&A.minFilter!==ys||A.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function yt(L,A){let it=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",F));const gt=A.source;let bt=y.get(gt);bt===void 0&&(bt={},y.set(gt,bt));const vt=pt(A);if(vt!==L.__cacheKey){bt[vt]===void 0&&(bt[vt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,it=!0),bt[vt].usedTimes++;const Gt=bt[L.__cacheKey];Gt!==void 0&&(bt[L.__cacheKey].usedTimes--,Gt.usedTimes===0&&w(A)),L.__cacheKey=vt,L.__webglTexture=bt[vt].texture}return it}function K(L,A,it){let gt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(gt=r.TEXTURE_3D);const bt=yt(L,A),vt=A.source;i.bindTexture(gt,L.__webglTexture,r.TEXTURE0+it);const Gt=s.get(vt);if(vt.version!==Gt.__version||bt===!0){i.activeTexture(r.TEXTURE0+it);const wt=Ce.getPrimaries(Ce.workingColorSpace),zt=A.colorSpace===Fa?null:Ce.getPrimaries(A.colorSpace),me=A.colorSpace===Fa||wt===zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let At=b(A.image,!1,l.maxTextureSize);At=Ue(A,At);const It=u.convert(A.format,A.colorSpace),jt=u.convert(A.type);let Vt=O(A.internalFormat,It,jt,A.colorSpace,A.isVideoTexture);J(gt,A);let Ot;const Jt=A.mipmaps,ae=A.isVideoTexture!==!0,Oe=Gt.__version===void 0||bt===!0,Y=vt.dataReady,Rt=X(A,At);if(A.isDepthTexture)Vt=D(A.format===Rr,A.type),Oe&&(ae?i.texStorage2D(r.TEXTURE_2D,1,Vt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Vt,At.width,At.height,0,It,jt,null));else if(A.isDataTexture)if(Jt.length>0){ae&&Oe&&i.texStorage2D(r.TEXTURE_2D,Rt,Vt,Jt[0].width,Jt[0].height);for(let ht=0,St=Jt.length;ht<St;ht++)Ot=Jt[ht],ae?Y&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,It,jt,Ot.data):i.texImage2D(r.TEXTURE_2D,ht,Vt,Ot.width,Ot.height,0,It,jt,Ot.data);A.generateMipmaps=!1}else ae?(Oe&&i.texStorage2D(r.TEXTURE_2D,Rt,Vt,At.width,At.height),Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,At.width,At.height,It,jt,At.data)):i.texImage2D(r.TEXTURE_2D,0,Vt,At.width,At.height,0,It,jt,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ae&&Oe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Vt,Jt[0].width,Jt[0].height,At.depth);for(let ht=0,St=Jt.length;ht<St;ht++)if(Ot=Jt[ht],A.format!==bi)if(It!==null)if(ae){if(Y)if(A.layerUpdates.size>0){const Ct=n_(Ot.width,Ot.height,A.format,A.type);for(const Dt of A.layerUpdates){const $t=Ot.data.subarray(Dt*Ct/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,Dt,Ot.width,Ot.height,1,It,$t)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,Ot.width,Ot.height,At.depth,It,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ht,Vt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,Ot.width,Ot.height,At.depth,It,jt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ht,Vt,Ot.width,Ot.height,At.depth,0,It,jt,Ot.data)}else{ae&&Oe&&i.texStorage2D(r.TEXTURE_2D,Rt,Vt,Jt[0].width,Jt[0].height);for(let ht=0,St=Jt.length;ht<St;ht++)Ot=Jt[ht],A.format!==bi?It!==null?ae?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,It,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,ht,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Y&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,It,jt,Ot.data):i.texImage2D(r.TEXTURE_2D,ht,Vt,Ot.width,Ot.height,0,It,jt,Ot.data)}else if(A.isDataArrayTexture)if(ae){if(Oe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Vt,At.width,At.height,At.depth),Y)if(A.layerUpdates.size>0){const ht=n_(At.width,At.height,A.format,A.type);for(const St of A.layerUpdates){const Ct=At.data.subarray(St*ht/At.data.BYTES_PER_ELEMENT,(St+1)*ht/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,St,At.width,At.height,1,It,jt,Ct)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,It,jt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,At.width,At.height,At.depth,0,It,jt,At.data);else if(A.isData3DTexture)ae?(Oe&&i.texStorage3D(r.TEXTURE_3D,Rt,Vt,At.width,At.height,At.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,It,jt,At.data)):i.texImage3D(r.TEXTURE_3D,0,Vt,At.width,At.height,At.depth,0,It,jt,At.data);else if(A.isFramebufferTexture){if(Oe)if(ae)i.texStorage2D(r.TEXTURE_2D,Rt,Vt,At.width,At.height);else{let ht=At.width,St=At.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(r.TEXTURE_2D,Ct,Vt,ht,St,0,It,jt,null),ht>>=1,St>>=1}}else if(Jt.length>0){if(ae&&Oe){const ht=kt(Jt[0]);i.texStorage2D(r.TEXTURE_2D,Rt,Vt,ht.width,ht.height)}for(let ht=0,St=Jt.length;ht<St;ht++)Ot=Jt[ht],ae?Y&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,It,jt,Ot):i.texImage2D(r.TEXTURE_2D,ht,Vt,It,jt,Ot);A.generateMipmaps=!1}else if(ae){if(Oe){const ht=kt(At);i.texStorage2D(r.TEXTURE_2D,Rt,Vt,ht.width,ht.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,It,jt,At)}else i.texImage2D(r.TEXTURE_2D,0,Vt,It,jt,At);S(A)&&_(gt),Gt.__version=vt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function dt(L,A,it){if(A.image.length!==6)return;const gt=yt(L,A),bt=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+it);const vt=s.get(bt);if(bt.version!==vt.__version||gt===!0){i.activeTexture(r.TEXTURE0+it);const Gt=Ce.getPrimaries(Ce.workingColorSpace),wt=A.colorSpace===Fa?null:Ce.getPrimaries(A.colorSpace),zt=A.colorSpace===Fa||Gt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const me=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,It=[];for(let St=0;St<6;St++)!me&&!At?It[St]=b(A.image[St],!0,l.maxCubemapSize):It[St]=At?A.image[St].image:A.image[St],It[St]=Ue(A,It[St]);const jt=It[0],Vt=u.convert(A.format,A.colorSpace),Ot=u.convert(A.type),Jt=O(A.internalFormat,Vt,Ot,A.colorSpace),ae=A.isVideoTexture!==!0,Oe=vt.__version===void 0||gt===!0,Y=bt.dataReady;let Rt=X(A,jt);J(r.TEXTURE_CUBE_MAP,A);let ht;if(me){ae&&Oe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,Jt,jt.width,jt.height);for(let St=0;St<6;St++){ht=It[St].mipmaps;for(let Ct=0;Ct<ht.length;Ct++){const Dt=ht[Ct];A.format!==bi?Vt!==null?ae?Y&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ct,0,0,Dt.width,Dt.height,Vt,Dt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ct,Jt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ct,0,0,Dt.width,Dt.height,Vt,Ot,Dt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ct,Jt,Dt.width,Dt.height,0,Vt,Ot,Dt.data)}}}else{if(ht=A.mipmaps,ae&&Oe){ht.length>0&&Rt++;const St=kt(It[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,Jt,St.width,St.height)}for(let St=0;St<6;St++)if(At){ae?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,It[St].width,It[St].height,Vt,Ot,It[St].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Jt,It[St].width,It[St].height,0,Vt,Ot,It[St].data);for(let Ct=0;Ct<ht.length;Ct++){const $t=ht[Ct].image[St].image;ae?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ct+1,0,0,$t.width,$t.height,Vt,Ot,$t.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ct+1,Jt,$t.width,$t.height,0,Vt,Ot,$t.data)}}else{ae?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Vt,Ot,It[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Jt,Vt,Ot,It[St]);for(let Ct=0;Ct<ht.length;Ct++){const Dt=ht[Ct];ae?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ct+1,0,0,Vt,Ot,Dt.image[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ct+1,Jt,Vt,Ot,Dt.image[St])}}}S(A)&&_(r.TEXTURE_CUBE_MAP),vt.__version=bt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Et(L,A,it,gt,bt,vt){const Gt=u.convert(it.format,it.colorSpace),wt=u.convert(it.type),zt=O(it.internalFormat,Gt,wt,it.colorSpace),me=s.get(A),At=s.get(it);if(At.__renderTarget=A,!me.__hasExternalTextures){const It=Math.max(1,A.width>>vt),jt=Math.max(1,A.height>>vt);bt===r.TEXTURE_3D||bt===r.TEXTURE_2D_ARRAY?i.texImage3D(bt,vt,zt,It,jt,A.depth,0,Gt,wt,null):i.texImage2D(bt,vt,zt,It,jt,0,Gt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),pe(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,bt,At.__webglTexture,0,ue(A)):(bt===r.TEXTURE_2D||bt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,bt,At.__webglTexture,vt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(L,A,it){if(r.bindRenderbuffer(r.RENDERBUFFER,L),A.depthBuffer){const gt=A.depthTexture,bt=gt&&gt.isDepthTexture?gt.type:null,vt=D(A.stencilBuffer,bt),Gt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=ue(A);pe(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,vt,A.width,A.height):it?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,vt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,vt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Gt,r.RENDERBUFFER,L)}else{const gt=A.textures;for(let bt=0;bt<gt.length;bt++){const vt=gt[bt],Gt=u.convert(vt.format,vt.colorSpace),wt=u.convert(vt.type),zt=O(vt.internalFormat,Gt,wt,vt.colorSpace),me=ue(A);it&&pe(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,zt,A.width,A.height):pe(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,zt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,zt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ft(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(A.depthTexture);gt.__renderTarget=A,(!gt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ot(A.depthTexture,0);const bt=gt.__webglTexture,vt=ue(A);if(A.depthTexture.format===yr)pe(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,bt,0,vt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,bt,0);else if(A.depthTexture.format===Rr)pe(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,bt,0,vt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function Zt(L){const A=s.get(L),it=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const gt=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),gt){const bt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,gt.removeEventListener("dispose",bt)};gt.addEventListener("dispose",bt),A.__depthDisposeCallback=bt}A.__boundDepthTexture=gt}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Ft(A.__webglFramebuffer,L)}else if(it){A.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[gt]),A.__webglDepthbuffer[gt]===void 0)A.__webglDepthbuffer[gt]=r.createRenderbuffer(),Mt(A.__webglDepthbuffer[gt],L,!1);else{const bt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=A.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,vt),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,vt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Mt(A.__webglDepthbuffer,L,!1);else{const gt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,bt),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,bt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Kt(L,A,it){const gt=s.get(L);A!==void 0&&Et(gt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&Zt(L)}function Ve(L){const A=L.texture,it=s.get(L),gt=s.get(A);L.addEventListener("dispose",z);const bt=L.textures,vt=L.isWebGLCubeRenderTarget===!0,Gt=bt.length>1;if(Gt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=A.version,h.memory.textures++),vt){it.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer[wt]=[];for(let zt=0;zt<A.mipmaps.length;zt++)it.__webglFramebuffer[wt][zt]=r.createFramebuffer()}else it.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)it.__webglFramebuffer[wt]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if(Gt)for(let wt=0,zt=bt.length;wt<zt;wt++){const me=s.get(bt[wt]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&pe(L)===!1){it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let wt=0;wt<bt.length;wt++){const zt=bt[wt];it.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[wt]);const me=u.convert(zt.format,zt.colorSpace),At=u.convert(zt.type),It=O(zt.internalFormat,me,At,zt.colorSpace,L.isXRRenderTarget===!0),jt=ue(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,It,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,it.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),Mt(it.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(vt){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),J(r.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)Et(it.__webglFramebuffer[wt][zt],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else Et(it.__webglFramebuffer[wt],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(A)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let wt=0,zt=bt.length;wt<zt;wt++){const me=bt[wt],At=s.get(me);i.bindTexture(r.TEXTURE_2D,At.__webglTexture),J(r.TEXTURE_2D,me),Et(it.__webglFramebuffer,L,me,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,0),S(me)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,gt.__webglTexture),J(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)Et(it.__webglFramebuffer[zt],L,A,r.COLOR_ATTACHMENT0,wt,zt);else Et(it.__webglFramebuffer,L,A,r.COLOR_ATTACHMENT0,wt,0);S(A)&&_(wt),i.unbindTexture()}L.depthBuffer&&Zt(L)}function He(L){const A=L.textures;for(let it=0,gt=A.length;it<gt;it++){const bt=A[it];if(S(bt)){const vt=I(L),Gt=s.get(bt).__webglTexture;i.bindTexture(vt,Gt),_(vt),i.unbindTexture()}}}const fe=[],G=[];function Tn(L){if(L.samples>0){if(pe(L)===!1){const A=L.textures,it=L.width,gt=L.height;let bt=r.COLOR_BUFFER_BIT;const vt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=s.get(L),wt=A.length>1;if(wt)for(let zt=0;zt<A.length;zt++)i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let zt=0;zt<A.length;zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(bt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(bt|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[zt]);const me=s.get(A[zt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,it,gt,0,0,it,gt,bt,r.NEAREST),m===!0&&(fe.length=0,G.length=0,fe.push(r.COLOR_ATTACHMENT0+zt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(fe.push(vt),G.push(vt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,G)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<A.length;zt++){i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[zt]);const me=s.get(A[zt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.TEXTURE_2D,me,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const A=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function ue(L){return Math.min(l.maxSamples,L.samples)}function pe(L){const A=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xt(L){const A=h.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function Ue(L,A){const it=L.colorSpace,gt=L.format,bt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||it!==Cr&&it!==Fa&&(Ce.getTransfer(it)===Fe?(gt!==bi||bt!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),A}function kt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=ft,this.setTexture2D=ot,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=W,this.rebindTextures=Kt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=pe}function LA(r,e){function i(s,l=Fa){let u;const h=Ce.getTransfer(l);if(s===ca)return r.UNSIGNED_BYTE;if(s===Md)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ed)return r.UNSIGNED_SHORT_5_5_5_1;if(s===B_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===z_)return r.BYTE;if(s===I_)return r.SHORT;if(s===Oo)return r.UNSIGNED_SHORT;if(s===Sd)return r.INT;if(s===Ss)return r.UNSIGNED_INT;if(s===ra)return r.FLOAT;if(s===zo)return r.HALF_FLOAT;if(s===F_)return r.ALPHA;if(s===H_)return r.RGB;if(s===bi)return r.RGBA;if(s===G_)return r.LUMINANCE;if(s===V_)return r.LUMINANCE_ALPHA;if(s===yr)return r.DEPTH_COMPONENT;if(s===Rr)return r.DEPTH_STENCIL;if(s===k_)return r.RED;if(s===bd)return r.RED_INTEGER;if(s===X_)return r.RG;if(s===Td)return r.RG_INTEGER;if(s===Ad)return r.RGBA_INTEGER;if(s===bc||s===Tc||s===Ac||s===Rc)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===bc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===bc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kh||s===Xh||s===jh||s===Wh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===kh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qh||s===Yh||s===Zh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===qh||s===Yh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===td)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ed)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cc||s===ud||s===fd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Cc)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ud)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===j_||s===hd||s===dd||s===pd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Cc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===hd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ar?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
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

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Dn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ka({vertexShader:OA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Pc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IA extends Dr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,y=null,M=null,E=null;const b=new zA,S=i.getContextAttributes();let _=null,I=null;const O=[],D=[],X=new De;let F=null;const z=new ni;z.viewport=new tn;const q=new ni;q.viewport=new tn;const w=[z,q],C=new aE;let V=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let dt=O[K];return dt===void 0&&(dt=new yh,O[K]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(K){let dt=O[K];return dt===void 0&&(dt=new yh,O[K]=dt),dt.getGripSpace()},this.getHand=function(K){let dt=O[K];return dt===void 0&&(dt=new yh,O[K]=dt),dt.getHandSpace()};function nt(K){const dt=D.indexOf(K.inputSource);if(dt===-1)return;const Et=O[dt];Et!==void 0&&(Et.update(K.inputSource,K.frame,p||h),Et.dispatchEvent({type:K.type,data:K.inputSource}))}function pt(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ot);for(let K=0;K<O.length;K++){const dt=D[K];dt!==null&&(D[K]=null,O[K].disconnect(dt))}V=null,ft=null,b.reset(),e.setRenderTarget(_),M=null,y=null,v=null,l=null,I=null,yt.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(X.width,X.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ot),S.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Mt=null,Ft=null;S.depth&&(Ft=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=S.stencil?Rr:yr,Mt=S.stencil?Ar:Ss);const Zt={colorFormat:i.RGBA8,depthFormat:Ft,scaleFactor:u};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(Zt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new Ms(y.textureWidth,y.textureHeight,{format:bi,type:ca,depthTexture:new ov(y.textureWidth,y.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const Et={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Ms(M.framebufferWidth,M.framebufferHeight,{format:bi,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ot(K){for(let dt=0;dt<K.removed.length;dt++){const Et=K.removed[dt],Mt=D.indexOf(Et);Mt>=0&&(D[Mt]=null,O[Mt].disconnect(Et))}for(let dt=0;dt<K.added.length;dt++){const Et=K.added[dt];let Mt=D.indexOf(Et);if(Mt===-1){for(let Zt=0;Zt<O.length;Zt++)if(Zt>=D.length){D.push(Et),Mt=Zt;break}else if(D[Zt]===null){D[Zt]=Et,Mt=Zt;break}if(Mt===-1)break}const Ft=O[Mt];Ft&&Ft.connect(Et)}}const N=new st,H=new st;function W(K,dt,Et){N.setFromMatrixPosition(dt.matrixWorld),H.setFromMatrixPosition(Et.matrixWorld);const Mt=N.distanceTo(H),Ft=dt.projectionMatrix.elements,Zt=Et.projectionMatrix.elements,Kt=Ft[14]/(Ft[10]-1),Ve=Ft[14]/(Ft[10]+1),He=(Ft[9]+1)/Ft[5],fe=(Ft[9]-1)/Ft[5],G=(Ft[8]-1)/Ft[0],Tn=(Zt[8]+1)/Zt[0],ue=Kt*G,pe=Kt*Tn,Xt=Mt/(-G+Tn),Ue=Xt*-G;if(dt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ue),K.translateZ(Xt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ft[10]===-1)K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const kt=Kt+Xt,L=Ve+Xt,A=ue-Ue,it=pe+(Mt-Ue),gt=He*Ve/L*kt,bt=fe*Ve/L*kt;K.projectionMatrix.makePerspective(A,it,gt,bt,kt,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function lt(K,dt){dt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(dt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let dt=K.near,Et=K.far;b.texture!==null&&(b.depthNear>0&&(dt=b.depthNear),b.depthFar>0&&(Et=b.depthFar)),C.near=q.near=z.near=dt,C.far=q.far=z.far=Et,(V!==C.near||ft!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ft=C.far),z.layers.mask=K.layers.mask|2,q.layers.mask=K.layers.mask|4,C.layers.mask=z.layers.mask|q.layers.mask;const Mt=K.parent,Ft=C.cameras;lt(C,Mt);for(let Zt=0;Zt<Ft.length;Zt++)lt(Ft[Zt],Mt);Ft.length===2?W(C,z,q):C.projectionMatrix.copy(z.projectionMatrix),ct(K,C,Mt)};function ct(K,dt,Et){Et===null?K.matrix.copy(dt.matrixWorld):(K.matrix.copy(Et.matrixWorld),K.matrix.invert(),K.matrix.multiply(dt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=md*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(K){m=K,y!==null&&(y.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let U=null;function J(K,dt){if(g=dt.getViewerPose(p||h),E=dt,g!==null){const Et=g.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let Mt=!1;Et.length!==C.cameras.length&&(C.cameras.length=0,Mt=!0);for(let Kt=0;Kt<Et.length;Kt++){const Ve=Et[Kt];let He=null;if(M!==null)He=M.getViewport(Ve);else{const G=v.getViewSubImage(y,Ve);He=G.viewport,Kt===0&&(e.setRenderTargetTextures(I,G.colorTexture,y.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(I))}let fe=w[Kt];fe===void 0&&(fe=new ni,fe.layers.enable(Kt),fe.viewport=new tn,w[Kt]=fe),fe.matrix.fromArray(Ve.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ve.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(He.x,He.y,He.width,He.height),Kt===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Mt===!0&&C.cameras.push(fe)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Kt=v.getDepthInformation(Et[0]);Kt&&Kt.isValid&&Kt.texture&&b.init(e,Kt,l.renderState)}}for(let Et=0;Et<O.length;Et++){const Mt=D[Et],Ft=O[Et];Mt!==null&&Ft!==void 0&&Ft.update(Mt,dt,p||h)}U&&U(K,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),E=null}const yt=new dv;yt.setAnimationLoop(J),this.setAnimationLoop=function(K){U=K},this.dispose=function(){}}}const ps=new Pi,BA=new Ye;function FA(r,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,ev(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,I,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),v(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,D)):_.isMeshMatcapMaterial?(u(S,_),E(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),b(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,I,O):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Xn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Xn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=e.get(_),O=I.envMap,D=I.envMapRotation;O&&(S.envMap.value=O,ps.copy(D),ps.x*=-1,ps.y*=-1,ps.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),S.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(ps)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,I,O){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=O*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function b(S,_){const I=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function HA(r,e,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,O){const D=O.program;s.uniformBlockBinding(I,D)}function p(I,O){let D=l[I.id];D===void 0&&(E(I),D=g(I),l[I.id]=D,I.addEventListener("dispose",S));const X=O.program;s.updateUBOMapping(I,X);const F=e.render.frame;u[I.id]!==F&&(y(I),u[I.id]=F)}function g(I){const O=v();I.__bindingPointIndex=O;const D=r.createBuffer(),X=I.__size,F=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,X,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function v(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const O=l[I.id],D=I.uniforms,X=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let F=0,z=D.length;F<z;F++){const q=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,C=q.length;w<C;w++){const V=q[w];if(M(V,F,w,X)===!0){const ft=V.__offset,nt=Array.isArray(V.value)?V.value:[V.value];let pt=0;for(let ot=0;ot<nt.length;ot++){const N=nt[ot],H=b(N);typeof N=="number"||typeof N=="boolean"?(V.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,ft+pt,V.__data)):N.isMatrix3?(V.__data[0]=N.elements[0],V.__data[1]=N.elements[1],V.__data[2]=N.elements[2],V.__data[3]=0,V.__data[4]=N.elements[3],V.__data[5]=N.elements[4],V.__data[6]=N.elements[5],V.__data[7]=0,V.__data[8]=N.elements[6],V.__data[9]=N.elements[7],V.__data[10]=N.elements[8],V.__data[11]=0):(N.toArray(V.__data,pt),pt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ft,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(I,O,D,X){const F=I.value,z=O+"_"+D;if(X[z]===void 0)return typeof F=="number"||typeof F=="boolean"?X[z]=F:X[z]=F.clone(),!0;{const q=X[z];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return X[z]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function E(I){const O=I.uniforms;let D=0;const X=16;for(let z=0,q=O.length;z<q;z++){const w=Array.isArray(O[z])?O[z]:[O[z]];for(let C=0,V=w.length;C<V;C++){const ft=w[C],nt=Array.isArray(ft.value)?ft.value:[ft.value];for(let pt=0,ot=nt.length;pt<ot;pt++){const N=nt[pt],H=b(N),W=D%X,lt=W%H.boundary,ct=W+lt;D+=lt,ct!==0&&X-ct<H.storage&&(D+=X-ct),ft.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=D,D+=H.storage}}}const F=D%X;return F>0&&(D+=X-F),I.__size=D,I.__cache={},this}function b(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function S(I){const O=I.target;O.removeEventListener("dispose",S);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const I in l)r.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class vv{constructor(e={}){const{canvas:i=_M(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,_=null;const I=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=Ga,this.toneMappingExposure=1;const D=this;let X=!1,F=0,z=0,q=null,w=-1,C=null;const V=new tn,ft=new tn;let nt=null;const pt=new be(0);let ot=0,N=i.width,H=i.height,W=1,lt=null,ct=null;const U=new tn(0,0,N,H),J=new tn(0,0,N,H);let yt=!1;const K=new wd;let dt=!1,Et=!1;this.transmissionResolutionScale=1;const Mt=new Ye,Ft=new Ye,Zt=new st,Kt=new tn,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function fe(){return q===null?W:1}let G=s;function Tn(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yd}`),i.addEventListener("webglcontextlost",St,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),G===null){const Z="webgl2";if(G=Tn(Z,R),G===null)throw Tn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ue,pe,Xt,Ue,kt,L,A,it,gt,bt,vt,Gt,wt,zt,me,At,It,jt,Vt,Ot,Jt,ae,Oe,Y;function Rt(){ue=new Qb(G),ue.init(),ae=new LA(G,ue),pe=new jb(G,ue,e,ae),Xt=new UA(G,ue),pe.reverseDepthBuffer&&y&&Xt.buffers.depth.setReversed(!0),Ue=new tT(G),kt=new vA,L=new NA(G,ue,Xt,kt,pe,ae,Ue),A=new qb(D),it=new Kb(D),gt=new oE(G),Oe=new kb(G,gt),bt=new Jb(G,gt,Ue,Oe),vt=new nT(G,bt,gt,Ue),Vt=new eT(G,pe,L),At=new Wb(kt),Gt=new _A(D,A,it,ue,pe,Oe,At),wt=new FA(D,kt),zt=new yA,me=new AA(ue),jt=new Vb(D,A,it,Xt,vt,M,m),It=new wA(D,vt,pe),Y=new HA(G,Ue,pe,Xt),Ot=new Xb(G,ue,Ue),Jt=new $b(G,ue,Ue),Ue.programs=Gt.programs,D.capabilities=pe,D.extensions=ue,D.properties=kt,D.renderLists=zt,D.shadowMap=It,D.state=Xt,D.info=Ue}Rt();const ht=new IA(D,G);this.xr=ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(N,H,!1))},this.getSize=function(R){return R.set(N,H)},this.setSize=function(R,Z,at=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,H=Z,i.width=Math.floor(R*W),i.height=Math.floor(Z*W),at===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(N*W,H*W).floor()},this.setDrawingBufferSize=function(R,Z,at){N=R,H=Z,W=at,i.width=Math.floor(R*at),i.height=Math.floor(Z*at),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,Z,at,rt){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,Z,at,rt),Xt.viewport(V.copy(U).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,Z,at,rt){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Z,at,rt),Xt.scissor(ft.copy(J).multiplyScalar(W).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Xt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){lt=R},this.setTransparentSort=function(R){ct=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(R=!0,Z=!0,at=!0){let rt=0;if(R){let j=!1;if(q!==null){const Tt=q.texture.format;j=Tt===Ad||Tt===Td||Tt===bd}if(j){const Tt=q.texture.type,Ut=Tt===ca||Tt===Ss||Tt===Oo||Tt===Ar||Tt===Md||Tt===Ed,Lt=jt.getClearColor(),Pt=jt.getClearAlpha(),te=Lt.r,ee=Lt.g,Wt=Lt.b;Ut?(E[0]=te,E[1]=ee,E[2]=Wt,E[3]=Pt,G.clearBufferuiv(G.COLOR,0,E)):(b[0]=te,b[1]=ee,b[2]=Wt,b[3]=Pt,G.clearBufferiv(G.COLOR,0,b))}else rt|=G.COLOR_BUFFER_BIT}Z&&(rt|=G.DEPTH_BUFFER_BIT),at&&(rt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",St,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),jt.dispose(),zt.dispose(),me.dispose(),kt.dispose(),A.dispose(),it.dispose(),vt.dispose(),Oe.dispose(),Y.dispose(),Gt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Nr),ht.removeEventListener("sessionend",Lr),Ri.stop()};function St(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const R=Ue.autoReset,Z=It.enabled,at=It.autoUpdate,rt=It.needsUpdate,j=It.type;Rt(),Ue.autoReset=R,It.enabled=Z,It.autoUpdate=at,It.needsUpdate=rt,It.type=j}function Dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $t(R){const Z=R.target;Z.removeEventListener("dispose",$t),We(Z)}function We(R){cn(R),kt.remove(R)}function cn(R){const Z=kt.get(R).programs;Z!==void 0&&(Z.forEach(function(at){Gt.releaseProgram(at)}),R.isShaderMaterial&&Gt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,at,rt,j,Tt){Z===null&&(Z=Ve);const Ut=j.isMesh&&j.matrixWorld.determinant()<0,Lt=Pr(R,Z,at,rt,j);Xt.setMaterial(rt,Ut);let Pt=at.index,te=1;if(rt.wireframe===!0){if(Pt=bt.getWireframeAttribute(at),Pt===void 0)return;te=2}const ee=at.drawRange,Wt=at.attributes.position;let ve=ee.start*te,xe=(ee.start+ee.count)*te;Tt!==null&&(ve=Math.max(ve,Tt.start*te),xe=Math.min(xe,(Tt.start+Tt.count)*te)),Pt!==null?(ve=Math.max(ve,0),xe=Math.min(xe,Pt.count)):Wt!=null&&(ve=Math.max(ve,0),xe=Math.min(xe,Wt.count));const ke=xe-ve;if(ke<0||ke===1/0)return;Oe.setup(j,rt,Lt,at,Pt);let Te,ne=Ot;if(Pt!==null&&(Te=gt.get(Pt),ne=Jt,ne.setIndex(Te)),j.isMesh)rt.wireframe===!0?(Xt.setLineWidth(rt.wireframeLinewidth*fe()),ne.setMode(G.LINES)):ne.setMode(G.TRIANGLES);else if(j.isLine){let Yt=rt.linewidth;Yt===void 0&&(Yt=1),Xt.setLineWidth(Yt*fe()),j.isLineSegments?ne.setMode(G.LINES):j.isLineLoop?ne.setMode(G.LINE_LOOP):ne.setMode(G.LINE_STRIP)}else j.isPoints?ne.setMode(G.POINTS):j.isSprite&&ne.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ne.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Yt=j._multiDrawStarts,un=j._multiDrawCounts,Me=j._multiDrawCount,Pn=Pt?gt.get(Pt).bytesPerElement:1,gi=kt.get(rt).currentProgram.getUniforms();for(let Un=0;Un<Me;Un++)gi.setValue(G,"_gl_DrawID",Un),ne.render(Yt[Un]/Pn,un[Un])}else if(j.isInstancedMesh)ne.renderInstances(ve,ke,j.count);else if(at.isInstancedBufferGeometry){const Yt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,un=Math.min(at.instanceCount,Yt);ne.renderInstances(ve,ke,un)}else ne.render(ve,ke)};function Ee(R,Z,at){R.transparent===!0&&R.side===Li&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Ke(R,Z,at),R.side=Va,R.needsUpdate=!0,Ke(R,Z,at),R.side=Li):Ke(R,Z,at)}this.compile=function(R,Z,at=null){at===null&&(at=R),_=me.get(at),_.init(Z),O.push(_),at.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==at&&R.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const rt=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Lt=Tt[Ut];Ee(Lt,at,j),rt.add(Lt)}else Ee(Tt,at,j),rt.add(Tt)}),O.pop(),_=null,rt},this.compileAsync=function(R,Z,at=null){const rt=this.compile(R,Z,at);return new Promise(j=>{function Tt(){if(rt.forEach(function(Ut){kt.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){j(R);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let vn=null;function pi(R){vn&&vn(R)}function Nr(){Ri.stop()}function Lr(){Ri.start()}const Ri=new dv;Ri.setAnimationLoop(pi),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(R){vn=R,ht.setAnimationLoop(R),R===null?Ri.stop():Ri.start()},ht.addEventListener("sessionstart",Nr),ht.addEventListener("sessionend",Lr),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(Z),Z=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Z,q),_=me.get(R,O.length),_.init(Z),O.push(_),Ft.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),K.setFromProjectionMatrix(Ft),Et=this.localClippingEnabled,dt=At.init(this.clippingPlanes,Et),S=zt.get(R,I.length),S.init(),I.push(S),ht.enabled===!0&&ht.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Xa(Tt,Z,-1/0,D.sortObjects)}Xa(R,Z,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(lt,ct),He=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,He&&jt.addToRenderList(S,R),this.info.render.frame++,dt===!0&&At.beginShadows();const at=_.state.shadowsArray;It.render(at,R,Z),dt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=S.opaque,j=S.transmissive;if(_.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(j.length>0)for(let Ut=0,Lt=Tt.length;Ut<Lt;Ut++){const Pt=Tt[Ut];Or(rt,j,R,Pt)}He&&jt.render(R);for(let Ut=0,Lt=Tt.length;Ut<Lt;Ut++){const Pt=Tt[Ut];bs(S,R,Pt,Pt.viewport)}}else j.length>0&&Or(rt,j,R,Z),He&&jt.render(R),bs(S,R,Z);q!==null&&z===0&&(L.updateMultisampleRenderTarget(q),L.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(D,R,Z),Oe.resetDefaultState(),w=-1,C=null,O.pop(),O.length>0?(_=O[O.length-1],dt===!0&&At.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Xa(R,Z,at,rt){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){rt&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ft);const Ut=vt.update(R),Lt=R.material;Lt.visible&&S.push(R,Ut,Lt,at,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Ut=vt.update(R),Lt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Kt.copy(Ut.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(Ft)),Array.isArray(Lt)){const Pt=Ut.groups;for(let te=0,ee=Pt.length;te<ee;te++){const Wt=Pt[te],ve=Lt[Wt.materialIndex];ve&&ve.visible&&S.push(R,Ut,ve,at,Kt.z,Wt)}}else Lt.visible&&S.push(R,Ut,Lt,at,Kt.z,null)}}const Tt=R.children;for(let Ut=0,Lt=Tt.length;Ut<Lt;Ut++)Xa(Tt[Ut],Z,at,rt)}function bs(R,Z,at,rt){const j=R.opaque,Tt=R.transmissive,Ut=R.transparent;_.setupLightsView(at),dt===!0&&At.setGlobalState(D.clippingPlanes,at),rt&&Xt.viewport(V.copy(rt)),j.length>0&&ja(j,Z,at),Tt.length>0&&ja(Tt,Z,at),Ut.length>0&&ja(Ut,Z,at),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Or(R,Z,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new Ms(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?zo:ca,minFilter:ys,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||V;Tt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Lt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(pt),ot=D.getClearAlpha(),ot<1&&D.setClearColor(16777215,.5),D.clear(),He&&jt.render(at);const Pt=D.toneMapping;D.toneMapping=Ga;const te=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),dt===!0&&At.setGlobalState(D.clippingPlanes,rt),ja(R,at,rt),L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Wt=0,ve=Z.length;Wt<ve;Wt++){const xe=Z[Wt],ke=xe.object,Te=xe.geometry,ne=xe.material,Yt=xe.group;if(ne.side===Li&&ke.layers.test(rt.layers)){const un=ne.side;ne.side=Xn,ne.needsUpdate=!0,mi(ke,at,rt,Te,ne,Yt),ne.side=un,ne.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Lt),D.setClearColor(pt,ot),te!==void 0&&(rt.viewport=te),D.toneMapping=Pt}function ja(R,Z,at){const rt=Z.isScene===!0?Z.overrideMaterial:null;for(let j=0,Tt=R.length;j<Tt;j++){const Ut=R[j],Lt=Ut.object,Pt=Ut.geometry,te=rt===null?Ut.material:rt,ee=Ut.group;Lt.layers.test(at.layers)&&mi(Lt,Z,at,Pt,te,ee)}}function mi(R,Z,at,rt,j,Tt){R.onBeforeRender(D,Z,at,rt,j,Tt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,Z,at,rt,R,Tt),j.transparent===!0&&j.side===Li&&j.forceSinglePass===!1?(j.side=Xn,j.needsUpdate=!0,D.renderBufferDirect(at,Z,rt,j,R,Tt),j.side=Va,j.needsUpdate=!0,D.renderBufferDirect(at,Z,rt,j,R,Tt),j.side=Li):D.renderBufferDirect(at,Z,rt,j,R,Tt),R.onAfterRender(D,Z,at,rt,j,Tt)}function Ke(R,Z,at){Z.isScene!==!0&&(Z=Ve);const rt=kt.get(R),j=_.state.lights,Tt=_.state.shadowsArray,Ut=j.state.version,Lt=Gt.getParameters(R,j.state,Tt,Z,at),Pt=Gt.getProgramCacheKey(Lt);let te=rt.programs;rt.environment=R.isMeshStandardMaterial?Z.environment:null,rt.fog=Z.fog,rt.envMap=(R.isMeshStandardMaterial?it:A).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",$t),te=new Map,rt.programs=te);let ee=te.get(Pt);if(ee!==void 0){if(rt.currentProgram===ee&&rt.lightsStateVersion===Ut)return zi(R,Lt),ee}else Lt.uniforms=Gt.getUniforms(R),R.onBeforeCompile(Lt,D),ee=Gt.acquireProgram(Lt,Pt),te.set(Pt,ee),rt.uniforms=Lt.uniforms;const Wt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=At.uniform),zi(R,Lt),rt.needsLights=Fc(R),rt.lightsStateVersion=Ut,rt.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=ee,rt.uniformsList=null,ee}function xn(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=wc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function zi(R,Z){const at=kt.get(R);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.batchingColor=Z.batchingColor,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function Pr(R,Z,at,rt,j){Z.isScene!==!0&&(Z=Ve),L.resetTextureUnits();const Tt=Z.fog,Ut=rt.isMeshStandardMaterial?Z.environment:null,Lt=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Cr,Pt=(rt.isMeshStandardMaterial?it:A).get(rt.envMap||Ut),te=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ee=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!at.morphAttributes.position,ve=!!at.morphAttributes.normal,xe=!!at.morphAttributes.color;let ke=Ga;rt.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ke=D.toneMapping);const Te=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ne=Te!==void 0?Te.length:0,Yt=kt.get(rt),un=_.state.lights;if(dt===!0&&(Et===!0||R!==C)){const Qe=R===C&&rt.id===w;At.setState(rt,R,Qe)}let Me=!1;rt.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==un.state.version||Yt.outputColorSpace!==Lt||j.isBatchedMesh&&Yt.batching===!1||!j.isBatchedMesh&&Yt.batching===!0||j.isBatchedMesh&&Yt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Yt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Yt.instancing===!1||!j.isInstancedMesh&&Yt.instancing===!0||j.isSkinnedMesh&&Yt.skinning===!1||!j.isSkinnedMesh&&Yt.skinning===!0||j.isInstancedMesh&&Yt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Yt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Yt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Yt.instancingMorph===!1&&j.morphTexture!==null||Yt.envMap!==Pt||rt.fog===!0&&Yt.fog!==Tt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==At.numPlanes||Yt.numIntersection!==At.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==ee||Yt.morphTargets!==Wt||Yt.morphNormals!==ve||Yt.morphColors!==xe||Yt.toneMapping!==ke||Yt.morphTargetsCount!==ne)&&(Me=!0):(Me=!0,Yt.__version=rt.version);let Pn=Yt.currentProgram;Me===!0&&(Pn=Ke(rt,Z,j));let gi=!1,Un=!1,pn=!1;const Pe=Pn.getUniforms(),Nn=Yt.uniforms;if(Xt.useProgram(Pn.program)&&(gi=!0,Un=!0,pn=!0),rt.id!==w&&(w=rt.id,Un=!0),gi||C!==R){Xt.buffers.depth.getReversed()?(Mt.copy(R.projectionMatrix),xM(Mt),yM(Mt),Pe.setValue(G,"projectionMatrix",Mt)):Pe.setValue(G,"projectionMatrix",R.projectionMatrix),Pe.setValue(G,"viewMatrix",R.matrixWorldInverse);const yn=Pe.map.cameraPosition;yn!==void 0&&yn.setValue(G,Zt.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&Pe.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Pe.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Un=!0,pn=!0)}if(j.isSkinnedMesh){Pe.setOptional(G,j,"bindMatrix"),Pe.setOptional(G,j,"bindMatrixInverse");const Qe=j.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Pe.setValue(G,"boneTexture",Qe.boneTexture,L))}j.isBatchedMesh&&(Pe.setOptional(G,j,"batchingTexture"),Pe.setValue(G,"batchingTexture",j._matricesTexture,L),Pe.setOptional(G,j,"batchingIdTexture"),Pe.setValue(G,"batchingIdTexture",j._indirectTexture,L),Pe.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&Pe.setValue(G,"batchingColorTexture",j._colorsTexture,L));const An=at.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Vt.update(j,at,Pn),(Un||Yt.receiveShadow!==j.receiveShadow)&&(Yt.receiveShadow=j.receiveShadow,Pe.setValue(G,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Nn.envMap.value=Pt,Nn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Z.environment!==null&&(Nn.envMapIntensity.value=Z.environmentIntensity),Un&&(Pe.setValue(G,"toneMappingExposure",D.toneMappingExposure),Yt.needsLights&&Bc(Nn,pn),Tt&&rt.fog===!0&&wt.refreshFogUniforms(Nn,Tt),wt.refreshMaterialUniforms(Nn,rt,W,H,_.state.transmissionRenderTarget[R.id]),wc.upload(G,xn(Yt),Nn,L)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(wc.upload(G,xn(Yt),Nn,L),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Pe.setValue(G,"center",j.center),Pe.setValue(G,"modelViewMatrix",j.modelViewMatrix),Pe.setValue(G,"normalMatrix",j.normalMatrix),Pe.setValue(G,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Qe=rt.uniformsGroups;for(let yn=0,Ts=Qe.length;yn<Ts;yn++){const zn=Qe[yn];Y.update(zn,Pn),Y.bind(zn,Pn)}}return Pn}function Bc(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Fc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Z,at){kt.get(R.texture).__webglTexture=Z,kt.get(R.depthTexture).__webglTexture=at;const rt=kt.get(R);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=at===void 0,rt.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Z){const at=kt.get(R);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0};const Vo=G.createFramebuffer();this.setRenderTarget=function(R,Z=0,at=0){q=R,F=Z,z=at;let rt=!0,j=null,Tt=!1,Ut=!1;if(R){const Pt=kt.get(R);if(Pt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(G.FRAMEBUFFER,null),rt=!1;else if(Pt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Pt.__hasExternalTextures)L.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(Pt.__boundDepthTexture!==Wt){if(Wt!==null&&kt.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ut=!0);const ee=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?j=ee[Z][at]:j=ee[Z],Tt=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?j=kt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?j=ee[at]:j=ee,V.copy(R.viewport),ft.copy(R.scissor),nt=R.scissorTest}else V.copy(U).multiplyScalar(W).floor(),ft.copy(J).multiplyScalar(W).floor(),nt=yt;if(at!==0&&(j=Vo),Xt.bindFramebuffer(G.FRAMEBUFFER,j)&&rt&&Xt.drawBuffers(R,j),Xt.viewport(V),Xt.scissor(ft),Xt.setScissorTest(nt),Tt){const Pt=kt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pt.__webglTexture,at)}else if(Ut){const Pt=kt.get(R.texture),te=Z;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pt.__webglTexture,at,te)}else if(R!==null&&at!==0){const Pt=kt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(R,Z,at,rt,j,Tt,Ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){Xt.bindFramebuffer(G.FRAMEBUFFER,Lt);try{const Pt=R.texture,te=Pt.format,ee=Pt.type;if(!pe.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-rt&&at>=0&&at<=R.height-j&&G.readPixels(Z,at,rt,j,ae.convert(te),ae.convert(ee),Tt)}finally{const Pt=q!==null?kt.get(q).__webglFramebuffer:null;Xt.bindFramebuffer(G.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,at,rt,j,Tt,Ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){const Pt=R.texture,te=Pt.format,ee=Pt.type;if(!pe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=R.width-rt&&at>=0&&at<=R.height-j){Xt.bindFramebuffer(G.FRAMEBUFFER,Lt);const Wt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Wt),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(Z,at,rt,j,ae.convert(te),ae.convert(ee),0);const ve=q!==null?kt.get(q).__webglFramebuffer:null;Xt.bindFramebuffer(G.FRAMEBUFFER,ve);const xe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await vM(G,xe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Wt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(Wt),G.deleteSync(xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Z=null,at=0){R.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1]);const rt=Math.pow(2,-at),j=Math.floor(R.image.width*rt),Tt=Math.floor(R.image.height*rt),Ut=Z!==null?Z.x:0,Lt=Z!==null?Z.y:0;L.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,at,0,0,Ut,Lt,j,Tt),Xt.unbindTexture()};const Wa=G.createFramebuffer(),zr=G.createFramebuffer();this.copyTextureToTexture=function(R,Z,at=null,rt=null,j=0,Tt=null){R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,R=arguments[1],Z=arguments[2],Tt=arguments[3]||0,at=null),Tt===null&&(j!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Ut,Lt,Pt,te,ee,Wt,ve,xe,ke;const Te=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(at!==null)Ut=at.max.x-at.min.x,Lt=at.max.y-at.min.y,Pt=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,ee=at.min.y,Wt=at.isBox3?at.min.z:0;else{const An=Math.pow(2,-j);Ut=Math.floor(Te.width*An),Lt=Math.floor(Te.height*An),R.isDataArrayTexture?Pt=Te.depth:R.isData3DTexture?Pt=Math.floor(Te.depth*An):Pt=1,te=0,ee=0,Wt=0}rt!==null?(ve=rt.x,xe=rt.y,ke=rt.z):(ve=0,xe=0,ke=0);const ne=ae.convert(Z.format),Yt=ae.convert(Z.type);let un;Z.isData3DTexture?(L.setTexture3D(Z,0),un=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(L.setTexture2DArray(Z,0),un=G.TEXTURE_2D_ARRAY):(L.setTexture2D(Z,0),un=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const Me=G.getParameter(G.UNPACK_ROW_LENGTH),Pn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),gi=G.getParameter(G.UNPACK_SKIP_PIXELS),Un=G.getParameter(G.UNPACK_SKIP_ROWS),pn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Te.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Te.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,te),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Pe=R.isDataArrayTexture||R.isData3DTexture,Nn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const An=kt.get(R),Qe=kt.get(Z),yn=kt.get(An.__renderTarget),Ts=kt.get(Qe.__renderTarget);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,yn.__webglFramebuffer),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let zn=0;zn<Pt;zn++)Pe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,j,Wt+zn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(Z).__webglTexture,Tt,ke+zn)),G.blitFramebuffer(te,ee,Ut,Lt,ve,xe,Ut,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||kt.has(R)){const An=kt.get(R),Qe=kt.get(Z);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,Wa),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,zr);for(let yn=0;yn<Pt;yn++)Pe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,An.__webglTexture,j,Wt+yn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,An.__webglTexture,j),Nn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,ke+yn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Qe.__webglTexture,Tt),j!==0?G.blitFramebuffer(te,ee,Ut,Lt,ve,xe,Ut,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Nn?G.copyTexSubImage3D(un,Tt,ve,xe,ke+yn,te,ee,Ut,Lt):G.copyTexSubImage2D(un,Tt,ve,xe,te,ee,Ut,Lt);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(un,Tt,ve,xe,ke,Ut,Lt,Pt,ne,Yt,Te.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(un,Tt,ve,xe,ke,Ut,Lt,Pt,ne,Te.data):G.texSubImage3D(un,Tt,ve,xe,ke,Ut,Lt,Pt,ne,Yt,Te):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,ve,xe,Ut,Lt,ne,Yt,Te.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,ve,xe,Te.width,Te.height,ne,Te.data):G.texSubImage2D(G.TEXTURE_2D,Tt,ve,xe,Ut,Lt,ne,Yt,Te);G.pixelStorei(G.UNPACK_ROW_LENGTH,Me),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,gi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Un),G.pixelStorei(G.UNPACK_SKIP_IMAGES,pn),Tt===0&&Z.generateMipmaps&&G.generateMipmap(un),Xt.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,at=null,rt=null,j=0){return R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,rt=arguments[1]||null,R=arguments[2],Z=arguments[3],j=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,at,rt,j)},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){F=0,z=0,q=null,Xt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const GA=({appState:r="PRE_FLIGHT"})=>{const e=re.useRef(null),i=re.useRef(null),s=re.useRef({x:0,y:-3.1,z:0,scale:1});return re.useEffect(()=>{r==="PRE_FLIGHT"?s.current={x:0,y:-3.5,z:0,scale:1}:r==="PROCESSING"?s.current={x:0,y:-.5,z:.5,scale:.85}:s.current={x:2.8,y:-.6,z:-1.2,scale:.65}},[r]),re.useEffect(()=>{const l=e.current;if(!l)return;const u=window.innerWidth,h=window.innerHeight,d=new av,m=new ni(45,u/h,.1,1e3);m.position.z=5.2;const p=new vv({alpha:!0,antialias:!0});p.setSize(u,h),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(p.domElement);const g=new eE,v=g.load("/assets/nasa-lroc-color-2k.jpg"),y=g.load("/assets/nasa-lola-height-1k.jpg");v.colorSpace=ei,v.anisotropy=p.capabilities.getMaxAnisotropy(),y.anisotropy=p.capabilities.getMaxAnisotropy();const M=new zc(4.15,128,128),E=new lv({map:v,bumpMap:y,bumpScale:.14,displacementMap:y,displacementScale:.035,roughness:.98,metalness:0}),b=new di(M,E);b.position.set(s.current.x,s.current.y,s.current.z),d.add(b),i.current=b;const S=new fv(14209217,1.35);S.position.set(-3.5,5,3),d.add(S);const _=new hv(131586,.025);d.add(_);const I=(lt,ct,U,J)=>{const yt=new Float32Array(lt*3);for(let Mt=0;Mt<lt*3;Mt+=3)yt[Mt]=(Math.random()-.5)*23,yt[Mt+1]=(Math.random()-.5)*16,yt[Mt+2]=-J-Math.random()*3;const K=new ii;K.setAttribute("position",new Ai(yt,3));const dt=new rv({color:15788767,size:ct,transparent:!0,opacity:U,sizeAttenuation:!0}),Et=new YM(K,dt);return d.add(Et),{geometry:K,material:dt}},O=[I(700,.012,.24,4),I(150,.024,.48,2)],D=[];for(let lt=0;lt<3;lt++){const ct=new ii().setFromPoints([new st(1.05,.38,0),new st(0,0,0)]),U=new sv({color:16183523,transparent:!0,opacity:0}),J=new qM(ct,U);J.position.set((Math.random()-.5)*10,(Math.random()-.5)*7,-2.5),d.add(J),D.push({streak:J,material:U,delay:3+Math.random()*8,speed:.045+Math.random()*.025,age:0,duration:.65+Math.random()*.45})}let X=!1,F={x:0,y:0},z={x:0,y:0},q=0,w=0,C=0,V=0;const ft=lt=>{const ct=lt.target;ct&&(ct.tagName==="BUTTON"||ct.tagName==="INPUT"||ct.closest("button")||ct.closest(".pointer-events-auto"))||(X=!0,F={x:lt.clientX,y:lt.clientY})},nt=lt=>{if(q=(lt.clientX/window.innerWidth-.5)*2,w=(lt.clientY/window.innerHeight-.5)*2,X&&b){const ct=lt.clientX-F.x,U=lt.clientY-F.y;z.x=ct*.004,z.y=U*.004,b.rotation.y+=z.x,b.rotation.x+=z.y,F={x:lt.clientX,y:lt.clientY}}},pt=()=>{X=!1};window.addEventListener("mousedown",ft),window.addEventListener("mousemove",nt),window.addEventListener("mouseup",pt);let ot;const N=new sE,H=()=>{ot=requestAnimationFrame(H);const lt=Math.min(N.getDelta(),.05);C+=(q-C)*.03,V+=(w-V)*.03,b&&(X||(z.x*=.95,z.y*=.95,b.rotation.y+=z.x+8e-4,b.rotation.x+=z.y),b.position.x+=(s.current.x+C*.15-b.position.x)*.05,b.position.y+=(s.current.y-V*.1-b.position.y)*.05,b.position.z+=(s.current.z-b.position.z)*.05),O[1].material.opacity=.38+Math.sin(N.elapsedTime*.7)*.1,D.forEach(ct=>{if(ct.delay-=lt,ct.delay>0)return;ct.age+=lt;const U=ct.age/ct.duration,J=Math.pow(Math.sin(Math.min(U,1)*Math.PI),.55);ct.streak.position.x-=ct.speed*60*lt,ct.streak.position.y-=ct.speed*22*lt,ct.material.opacity=J*.82,U>=1&&(ct.streak.position.set((Math.random()-.5)*10,(Math.random()-.5)*7,-2.5),ct.material.opacity=0,ct.age=0,ct.delay=5+Math.random()*11,ct.duration=.65+Math.random()*.45)}),p.render(d,m)};H();const W=()=>{if(!l)return;const lt=window.innerWidth,ct=window.innerHeight;m.aspect=lt/ct,m.updateProjectionMatrix(),p.setSize(lt,ct)};return window.addEventListener("resize",W),()=>{cancelAnimationFrame(ot),window.removeEventListener("mousedown",ft),window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",pt),window.removeEventListener("resize",W),l.contains(p.domElement)&&l.removeChild(p.domElement),p.dispose(),v.dispose(),y.dispose(),O.forEach(({geometry:lt,material:ct})=>{lt.dispose(),ct.dispose()}),D.forEach(({streak:lt,material:ct})=>{lt.geometry.dispose(),ct.dispose()})}},[]),P.jsx("div",{className:"fixed inset-0 z-0 overflow-hidden bg-[#010101]",children:P.jsx("div",{ref:e,className:"absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"})})},VA=({toasts:r,onDismiss:e})=>P.jsx("div",{className:"fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none",children:r.map(i=>P.jsx(kA,{toast:i,onDismiss:e},i.id))}),kA=({toast:r,onDismiss:e})=>{re.useEffect(()=>{const l=setTimeout(()=>{e(r.id)},4500);return()=>clearTimeout(l)},[r.id,e]);const i={success:P.jsx(Ky,{className:"w-5 h-5 text-emerald-400 shrink-0"}),info:P.jsx(fS,{className:"w-5 h-5 text-cyan-400 shrink-0"}),warning:P.jsx(Eg,{className:"w-5 h-5 text-amber-400 shrink-0"}),error:P.jsx(Eg,{className:"w-5 h-5 text-rose-400 shrink-0"})},s={success:"border-emerald-500/40 shadow-emerald-950/40",info:"border-cyan-500/40 shadow-cyan-950/40",warning:"border-amber-500/40 shadow-amber-950/40",error:"border-rose-500/40 shadow-rose-950/40"};return P.jsxs("div",{className:`pointer-events-auto flex items-start gap-3 p-4 rounded-xl glass-panel ${s[r.type]} border shadow-xl transition-all duration-300 transform translate-y-0`,children:[i[r.type],P.jsxs("div",{className:"flex-1 min-w-0",children:[P.jsx("div",{className:"text-xs font-mono font-semibold tracking-wider uppercase text-slate-200",children:r.title}),P.jsx("div",{className:"text-xs text-slate-400 font-mono mt-0.5 break-words",children:r.description})]}),P.jsx("button",{onClick:()=>e(r.id),className:"text-slate-400 hover:text-white p-1 rounded transition-colors",children:P.jsx(N_,{className:"w-4 h-4"})})]})},XA=({onFileSelected:r,onDemoSelected:e})=>{const[i,s]=re.useState(!1),l=re.useRef(null),u=p=>{p.preventDefault(),s(!0)},h=()=>{s(!1)},d=p=>{p.preventDefault(),s(!1),p.dataTransfer.files&&p.dataTransfer.files.length>0&&r(p.dataTransfer.files[0].name)},m=p=>{p.target.files&&p.target.files.length>0&&r(p.target.files[0].name)};return P.jsxs("div",{className:"w-full max-w-lg space-y-4",children:[P.jsxs("div",{onDragOver:u,onDragLeave:h,onDrop:d,onClick:()=>{var p;return(p=l.current)==null?void 0:p.click()},className:`group relative cursor-pointer rounded-sm p-7 transition-all duration-300 backdrop-blur-2xl border ${i?"border-stone-300/80 bg-stone-900/50 shadow-2xl scale-[1.01]":"border-white/15 bg-[#0b0b0a]/75 hover:border-stone-300/40 hover:bg-[#11110f]/85 shadow-2xl shadow-black/60"}`,children:[P.jsx("input",{ref:l,type:"file",accept:".zip,.xml,.img,.raw,.png,.jpg,.jpeg,.tif,.tiff",className:"hidden",onChange:m}),P.jsxs("div",{className:"flex items-start gap-4",children:[P.jsx("div",{className:"w-11 h-11 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-stone-200 group-hover:scale-105 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0",children:P.jsx(MS,{className:"w-5 h-5"})}),P.jsxs("div",{className:"flex-1 min-w-0",children:[P.jsx("h3",{className:"text-base font-medium text-stone-100 tracking-tight mb-1",children:"Upload Lunar Imagery / PDS4 Archive"}),P.jsx("p",{className:"text-xs text-stone-400 leading-relaxed mb-4",children:"Drag & drop telemetry files, .zip archives, or lunar imagery here to begin photometric correction."}),P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsxs("button",{type:"button",className:"px-4 py-2 rounded-sm bg-stone-100 text-stone-950 hover:bg-white font-semibold text-xs transition-all shadow-md flex items-center gap-1.5",children:[P.jsx("span",{children:"Select File"}),P.jsx(Gy,{className:"w-3.5 h-3.5"})]}),P.jsx("span",{className:"text-[11px] text-stone-500 font-mono",children:".ZIP · .IMG · .PNG · .TIF"})]})]})]})]}),P.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 rounded-sm bg-black/50 backdrop-blur-md border border-white/10 text-xs text-stone-400",children:[P.jsxs("span",{className:"flex items-center gap-1.5",children:[P.jsx(aS,{className:"w-3.5 h-3.5 text-stone-500"}),P.jsx("span",{children:"No file available?"})]}),P.jsx("button",{type:"button",onClick:e,className:"text-stone-200 hover:text-white font-medium transition-colors hover:underline",children:"Load Chandrayaan Sample Swath →"})]})]})},jA=({dataset:r,onComplete:e})=>{const[i,s]=re.useState("Calibrating telemetry data...");return re.useEffect(()=>{const l=setTimeout(()=>{s("Computing Hapke photometric model...")},450),u=setTimeout(()=>{e()},950);return()=>{clearTimeout(l),clearTimeout(u)}},[e]),P.jsxs("div",{className:"max-w-md w-full mx-auto p-6 rounded-2xl bg-[#0d131f] border border-slate-800 text-center shadow-xl",children:[P.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-800 mx-auto mb-4 flex items-center justify-center text-sky-400",children:P.jsx(dS,{className:"w-5 h-5 animate-spin"})}),P.jsxs("h3",{className:"text-sm font-semibold text-slate-100 mb-1",children:["Loading ",r.targetFeature]}),P.jsx("p",{className:"text-xs text-slate-400 mb-4 font-mono",children:i}),P.jsx("div",{className:"w-full h-1 rounded-full bg-slate-800 overflow-hidden",children:P.jsx("div",{className:"h-full bg-sky-500 rounded-full animate-[pulse_1s_infinite] w-3/4 mx-auto"})})]})};function xv(r){return r.includes("SHIV_SHAKTI")||r.includes("SP")?[{x:380,y:320,r:180,depth:.85,hasCentralPeak:!1},{x:740,y:560,r:140,depth:.9,hasCentralPeak:!1},{x:220,y:680,r:85,depth:.65},{x:580,y:220,r:60,depth:.5},{x:860,y:240,r:45,depth:.45},{x:480,y:490,r:35,depth:.4},{x:310,y:460,r:22,depth:.35},{x:620,y:720,r:30,depth:.38},{x:150,y:200,r:50,depth:.5}]:r.includes("ARISTARCHUS")?[{x:500,y:450,r:260,depth:.95,hasCentralPeak:!0},{x:820,y:280,r:110,depth:.7},{x:250,y:300,r:90,depth:.6},{x:700,y:720,r:70,depth:.5},{x:360,y:700,r:40,depth:.4}]:r.includes("SHACKLETON")?[{x:512,y:512,r:320,depth:1,hasCentralPeak:!1},{x:200,y:200,r:90,depth:.6},{x:800,y:800,r:100,depth:.65},{x:250,y:780,r:75,depth:.5}]:[{x:512,y:480,r:220,depth:.95,hasCentralPeak:!0},{x:240,y:240,r:70,depth:.55},{x:780,y:320,r:80,depth:.6},{x:300,y:750,r:65,depth:.5},{x:720,y:700,r:90,depth:.65}]}function WA(r,e,i,s){const l=xv(s),u=r.createImageData(e,i),h=u.data;for(let d=0;d<i;d++)for(let m=0;m<e;m++){const p=(d*e+m)*4;let g=.5;for(const S of l){const _=m/e*1024-S.x,I=d/i*1024-S.y,O=Math.sqrt(_*_+I*I);if(O<S.r){const D=O/S.r,X=Math.sin(D*Math.PI*.5)*S.depth,F=Math.exp(-Math.pow((O-S.r*.95)/(S.r*.15),2))*.35;g+=F-(1-X)*.4,S.hasCentralPeak&&O<S.r*.22&&(g+=Math.cos(O/(S.r*.22)*Math.PI*.5)*.4)}}const v=Math.PI*.35,y=.45+(g-.5)*Math.cos(v)*.4;let M=Math.floor(Math.max(0,Math.min(255,y*110+25)));const E=Math.sin(m*.9)*4,b=(Math.random()-.5)*22;M=Math.max(5,Math.min(250,M+E+b)),h[p]=M*.92,h[p+1]=M*.98,h[p+2]=M*.94,h[p+3]=255}r.putImageData(u,0,0),r.strokeStyle="rgba(56, 189, 248, 0.08)",r.lineWidth=1;for(let d=64;d<e;d+=64)r.beginPath(),r.moveTo(d,0),r.lineTo(d,i),r.stroke();for(let d=64;d<i;d+=64)r.beginPath(),r.moveTo(0,d),r.lineTo(e,d),r.stroke()}function qA(r,e,i,s,l,u,h=1){const d=xv(s),m=r.createImageData(e,i),p=m.data,g=u.w/.342,v=1+(u.thetaBar-20)*.015;for(let y=0;y<i;y++)for(let M=0;M<e;M++){const E=(y*e+M)*4,b=M/e*1024,S=y/i*1024;let _=0,I=0,O=!1;for(const H of d){const W=b-H.x,lt=S-H.y,ct=Math.sqrt(W*W+lt*lt);if(ct<H.r*1.5){const U=ct/H.r;if(U<1){Math.sin(U*Math.PI*.5)*H.depth,Math.exp(-Math.pow((ct-H.r*.95)/(H.r*.15),2))*.45;const J=Math.cos(U*Math.PI*.5)*H.depth;if(_+=W/Math.max(1,ct)*J,I+=lt/Math.max(1,ct)*J,U>.85&&(O=!0),H.hasCentralPeak&&ct<H.r*.22){const yt=Math.cos(ct/(H.r*.22)*Math.PI*.5);_-=W/Math.max(1,ct)*yt*.8,I-=lt/Math.max(1,ct)*yt*.8}}else{const J=Math.atan2(lt,W);Math.pow(Math.cos(J*8),4)*Math.exp(-((ct-H.r)/H.r))}}}const D=Math.sin(b*.2)*Math.cos(S*.2)*.04+Math.sin(b*.8)*Math.cos(S*.8)*.02,X=.58,F=-.42,z=.7,q=-_*1.5,w=-I*1.5,C=1,V=Math.sqrt(q*q+w*w+C*C),ft=(q*X+w*F+C*z)/V;let nt=Math.max(.015,ft*.22*g*h+D);nt=Math.pow(nt,1/1.4)*v;let pt=0,ot=0,N=0;if(l==="REGOLITH_MONO"){const H=Math.floor(Math.max(10,Math.min(250,nt*255)));pt=H,ot=Math.floor(H*.98),N=Math.floor(H*1.02)}else if(l==="IIRS_FALSE_COLOR"){const H=Math.max(0,Math.min(1,nt*1.4));O&&(s.includes("SHACKLETON")||s.includes("SP"))?(pt=Math.floor(30+H*40),ot=Math.floor(180+H*75),N=Math.floor(220+H*35)):(pt=Math.floor(255*Math.sin(H*Math.PI*.8)),ot=Math.floor(255*Math.sin(H*Math.PI*.95)),N=Math.floor(255*Math.cos(H*Math.PI*.5)))}else if(l==="TOPO_SHADOW")pt=Math.floor(Math.max(0,Math.min(255,(q/V*.5+.5)*255))),ot=Math.floor(Math.max(0,Math.min(255,(w/V*.5+.5)*255))),N=Math.floor(Math.max(0,Math.min(255,C/V*255)));else if(l==="ALBEDO_RATIO"){const H=nt/Math.max(.01,u.w)*1.2;pt=Math.floor(Math.max(0,Math.min(255,H*200))),ot=Math.floor(Math.max(0,Math.min(255,H*160))),N=Math.floor(Math.max(0,Math.min(255,255-H*120)))}p[E]=Math.max(0,Math.min(255,pt)),p[E+1]=Math.max(0,Math.min(255,ot)),p[E+2]=Math.max(0,Math.min(255,N)),p[E+3]=255}r.putImageData(m,0,0),r.strokeStyle="rgba(56, 189, 248, 0.2)",r.lineWidth=1}function Mr(r){return r*Math.PI/180}function R_(r,e){const i=Math.sqrt(Math.max(0,1-e));return(1+2*r)/(1+2*i*r)}function YA(r,e){const i=Math.cos(r),s=Math.pow(1+2*e*i+e*e,1.5);return Math.max(.001,(1-e*e)/Math.max(1e-4,s))}function ZA(r,e,i){if(r<1e-6)return e;const s=Math.tan(r/2);return e/(1+1/Math.max(.001,i)*s)}function KA(r,e,i,s){if(s<.5)return 1;const l=Mr(s),u=Math.tan(l),d=1-.5*Math.exp(-2/Math.PI*(1/Math.max(.01,u)))*(1-Math.cos(i/2));return Math.max(.2,Math.min(1.8,d))}function vd(r,e,i,s){const l=Mr(r),u=Mr(e),h=Mr(i),d=Math.max(.001,Math.cos(l)),m=Math.max(.001,Math.cos(u)),p=YA(h,s.g),g=ZA(h,s.b0,s.h),v=R_(d,s.w),y=R_(m,s.w),M=KA(l,u,h,s.thetaBar),E=d/(d+m),b=p*(1+g),S=v*y-1,_=s.w/(4*Math.PI)*E*(b+S)*M;return Math.max(.005,_*Math.PI)}function QA(r,e,i=.75,s=.18){const l=Math.max(.001,Math.cos(Mr(r))),u=Math.max(.001,Math.cos(Mr(e)));return s*Math.pow(l,i)*Math.pow(u,i-1)}function JA(r,e=60,i=42){const s=[];for(let l=0;l<=110;l+=2.5){const u=Math.abs(l-e)*.45,h=vd(e,u,l,r),d=QA(e,u,.72,r.w*.45),m=Math.sin(l*12.9898+i)*43758.5453,p=(m-Math.floor(m)-.5)*.008,g=Math.max(.01,h+p),v=g-h;s.push({phaseAngle:l,theoreticalHapke:parseFloat(h.toFixed(4)),observedData:parseFloat(g.toFixed(4)),minnaert:parseFloat(d.toFixed(4)),residual:parseFloat(v.toFixed(5))})}return s}function $A(r,e,i,s){const l=vd(30,0,30,s),u=vd(r,e,i,s);return l/Math.max(.001,u)}const t2=({dataset:r,currentFilter:e,currentHapke:i})=>{const s=re.useRef(null),l=re.useRef(null),u=re.useRef(null),[h,d]=re.useState(50),[m,p]=re.useState(!1),[g,v]=re.useState(1),[y,M]=re.useState({x:0,y:0}),[E,b]=re.useState(!1),[S,_]=re.useState({x:0,y:0}),[I,O]=re.useState(null),[D,X]=re.useState({x:0,y:0}),F=1024,z=re.useCallback(()=>{const ot=l.current,N=u.current;if(!ot||!N)return;const H=ot.getContext("2d"),W=N.getContext("2d");if(!H||!W)return;WA(H,F,F,r.id);const lt=$A(r.geometry.incidenceDeg,r.geometry.emissionDeg,r.geometry.phaseDeg,i);qA(W,F,F,r.id,e,i,lt)},[r,e,i]);re.useEffect(()=>{z()},[z]);const q=ot=>{ot.preventDefault(),ot.stopPropagation(),p(!0)},w=ot=>{const N=s.current;if(!N)return;const H=N.getBoundingClientRect(),W=ot.clientX-H.left,lt=ot.clientY-H.top;if(m){const Mt=Math.max(5,Math.min(95,W/H.width*100));d(Mt);return}if(E){M({x:W-S.x,y:lt-S.y});return}X({x:W,y:lt});const ct=Math.max(0,Math.min(1,W/H.width)),U=Math.max(0,Math.min(1,lt/H.height)),J=Math.floor(ct*F),yt=Math.floor(U*F),K=r.meanReflectance*(i.w/.342),dt=Math.sin(J*.05)*Math.cos(yt*.05)*.03,Et=Math.max(.012,K+dt);O({pixelX:J,pixelY:yt,normalizedLat:r.targetCoordinates.lat,normalizedLon:r.targetCoordinates.lon,reflectanceIF:parseFloat(Et.toFixed(4)),roughnessEstDeg:i.thetaBar,albedoFactor:i.w,mineralSignature:"Regolith / Feldspar",isSunlit:!0,snrEst:r.signalToNoiseRatioDb})},C=()=>{p(!1),b(!1)},V=ot=>{ot.button===0&&!m&&(b(!0),_({x:ot.clientX-s.current.getBoundingClientRect().left-y.x,y:ot.clientY-s.current.getBoundingClientRect().top-y.y}))},ft=()=>{v(ot=>Math.min(6,parseFloat((ot+.5).toFixed(1))))},nt=()=>{v(ot=>{const N=Math.max(1,parseFloat((ot-.5).toFixed(1)));return N===1&&M({x:0,y:0}),N})},pt=()=>{v(1),M({x:0,y:0}),d(50)};return P.jsxs("div",{className:"flex flex-col w-full rounded-2xl bg-[#0d131f] border border-slate-800 overflow-hidden shadow-lg",children:[P.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-[#090e18] border-b border-slate-800 text-xs",children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("span",{className:"text-slate-400 font-medium",children:"Comparison View"}),P.jsx("span",{className:"text-slate-600",children:"·"}),P.jsx("span",{className:"text-slate-500",children:"Drag center line to compare Raw vs Corrected"})]}),P.jsxs("div",{className:"flex items-center gap-1.5",children:[P.jsx("button",{onClick:ft,className:"p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors",title:"Zoom In",children:P.jsx(TS,{className:"w-4 h-4"})}),P.jsx("button",{onClick:nt,className:"p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors",title:"Zoom Out",children:P.jsx(RS,{className:"w-4 h-4"})}),P.jsx("button",{onClick:pt,className:"p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors",title:"Reset View",children:P.jsx(U_,{className:"w-4 h-4"})})]})]}),P.jsxs("div",{ref:s,onMouseMove:w,onMouseDown:V,onMouseUp:C,onMouseLeave:()=>{p(!1),b(!1),O(null)},className:`relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#050811] overflow-hidden select-none ${E?"cursor-grabbing":m?"cursor-ew-resize":"cursor-default"}`,children:[P.jsxs("div",{className:"absolute inset-0 origin-center transition-transform duration-75 ease-out",style:{transform:`scale(${g}) translate(${y.x/g}px, ${y.y/g}px)`},children:[P.jsx("canvas",{ref:u,width:F,height:F,className:"absolute inset-0 w-full h-full object-cover"}),P.jsx("div",{className:"absolute inset-0 overflow-hidden",style:{width:`${h}%`},children:P.jsx("canvas",{ref:l,width:F,height:F,className:"absolute inset-0 w-full h-full object-cover max-w-none",style:{width:s.current?`${s.current.clientWidth}px`:"100%"}})})]}),P.jsxs("div",{className:"absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none",style:{left:`${h}%`},children:[P.jsx("div",{className:"w-[2px] h-full bg-white/70"}),P.jsx("div",{onMouseDown:q,className:"absolute w-7 h-7 rounded-full bg-slate-900 border border-white/60 flex items-center justify-center pointer-events-auto cursor-ew-resize shadow-md",children:P.jsx("div",{className:"w-2.5 h-0.5 bg-slate-300"})})]}),P.jsx("div",{className:"absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[11px] font-medium text-slate-300",children:"Raw Sensor (DN)"}),P.jsx("div",{className:"absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[11px] font-medium text-sky-300",children:"Photometrically Corrected"}),I&&!m&&!E&&P.jsxs("div",{className:"absolute z-30 pointer-events-none px-2.5 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800 text-[11px] text-slate-300 shadow-md transform -translate-x-1/2 -translate-y-full mb-3",style:{left:`${D.x}px`,top:`${D.y}px`},children:["Reflectance: ",P.jsx("span",{className:"text-sky-400 font-mono font-semibold",children:I.reflectanceIF})]})]}),P.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-[#090e18] border-t border-slate-800 text-[11px] text-slate-400",children:[P.jsxs("span",{children:["Resolution: ",r.geometry.groundSamplingDistanceM," m/px"]}),P.jsxs("span",{children:["Solar Angle: ",r.geometry.incidenceDeg,"°"]})]})]})},e2=({currentFilter:r,onSelectFilter:e})=>{const i=[{id:"REGOLITH_MONO",label:"Monochrome"},{id:"IIRS_FALSE_COLOR",label:"Infrared (2.9µm)"},{id:"TOPO_SHADOW",label:"Topography"},{id:"ALBEDO_RATIO",label:"Albedo Map"}];return P.jsx("div",{className:"flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs",children:i.map(s=>{const l=r===s.id;return P.jsx("button",{onClick:()=>e(s.id),className:`px-3 py-1.5 rounded-lg font-medium transition-all ${l?"bg-slate-800 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:s.label},s.id)})})},n2=({currentHapke:r,initialHapke:e,onChangeHapke:i,onResetHapke:s})=>{const[l,u]=re.useState(!1),h=(m,p)=>{i({...r,[m]:p})},d=r.w!==e.w||r.thetaBar!==e.thetaBar||r.g!==e.g||r.b0!==e.b0||r.h!==e.h;return P.jsxs("div",{className:"flex flex-col rounded-2xl bg-[#0d131f] border border-slate-800 p-5 space-y-4 shadow-sm",children:[P.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800/80 pb-3",children:[P.jsxs("div",{children:[P.jsx("h3",{className:"text-sm font-semibold text-slate-100",children:"Photometric Calibration"}),P.jsx("p",{className:"text-xs text-slate-400",children:"Adjust illumination and surface reflection properties"})]}),d&&P.jsxs("button",{onClick:s,className:"px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1 transition-colors",children:[P.jsx(U_,{className:"w-3 h-3"}),P.jsx("span",{children:"Reset"})]})]}),P.jsxs("div",{className:"space-y-4 text-xs",children:[P.jsxs("div",{className:"space-y-1.5",children:[P.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[P.jsx("span",{className:"font-medium",children:"Surface Albedo (Brightness)"}),P.jsx("span",{className:"text-slate-200 font-mono",children:r.w.toFixed(2)})]}),P.jsx("input",{type:"range",min:"0.05",max:"0.80",step:"0.01",value:r.w,onChange:m=>h("w",parseFloat(m.target.value)),className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"}),P.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[P.jsx("span",{children:"Dark Mare"}),P.jsx("span",{children:"Bright Highlands"})]})]}),P.jsxs("div",{className:"space-y-1.5",children:[P.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[P.jsx("span",{className:"font-medium",children:"Surface Roughness"}),P.jsxs("span",{className:"text-slate-200 font-mono",children:[r.thetaBar.toFixed(0),"°"]})]}),P.jsx("input",{type:"range",min:"0",max:"45",step:"1",value:r.thetaBar,onChange:m=>h("thetaBar",parseFloat(m.target.value)),className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"}),P.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[P.jsx("span",{children:"Smooth Flat Terrain"}),P.jsx("span",{children:"Rugged Slopes"})]})]}),P.jsxs("div",{className:"space-y-1.5",children:[P.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[P.jsx("span",{className:"font-medium",children:"Opposition Effect"}),P.jsx("span",{className:"text-slate-200 font-mono",children:r.b0.toFixed(2)})]}),P.jsx("input",{type:"range",min:"0.0",max:"3.0",step:"0.05",value:r.b0,onChange:m=>h("b0",parseFloat(m.target.value)),className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"}),P.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[P.jsx("span",{children:"Standard Reflection"}),P.jsx("span",{children:"Strong Peak"})]})]})]}),P.jsxs("div",{className:"pt-2 border-t border-slate-800/60",children:[P.jsxs("button",{onClick:()=>u(!l),className:"w-full py-1.5 flex items-center justify-between text-xs text-slate-400 hover:text-slate-200 transition-colors",children:[P.jsx("span",{children:"Advanced Physical Parameters"}),l?P.jsx(qy,{className:"w-3.5 h-3.5"}):P.jsx(jy,{className:"w-3.5 h-3.5"})]}),l&&P.jsxs("div",{className:"mt-3 space-y-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs",children:[P.jsxs("div",{className:"space-y-1",children:[P.jsxs("div",{className:"flex justify-between text-slate-400",children:[P.jsx("span",{children:"Phase Asymmetry (g)"}),P.jsx("span",{className:"font-mono text-slate-300",children:r.g.toFixed(2)})]}),P.jsx("input",{type:"range",min:"-0.80",max:"0.50",step:"0.02",value:r.g,onChange:m=>h("g",parseFloat(m.target.value)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"})]}),P.jsxs("div",{className:"space-y-1",children:[P.jsxs("div",{className:"flex justify-between text-slate-400",children:[P.jsx("span",{children:"Surge Width (h)"}),P.jsx("span",{className:"font-mono text-slate-300",children:r.h.toFixed(3)})]}),P.jsx("input",{type:"range",min:"0.01",max:"0.20",step:"0.005",value:r.h,onChange:m=>h("h",parseFloat(m.target.value)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"})]})]})]})]})},i2=({currentHapke:r,nominalIncidence:e})=>{const i=re.useMemo(()=>JA(r,e,108),[r,e]),s=re.useMemo(()=>Math.max(...i.map(y=>Math.max(y.theoreticalHapke,y.observedData)))*1.15,[i]),l=500,u=200,h={top:15,right:20,bottom:30,left:45},d=l-h.left-h.right,m=u-h.top-h.bottom,p=y=>h.left+y/110*d,g=y=>h.top+m-y/Math.max(.1,s)*m,v=re.useMemo(()=>i.reduce((y,M,E)=>{const b=p(M.phaseAngle),S=g(M.theoreticalHapke);return E===0?`M ${b} ${S}`:`${y} L ${b} ${S}`},""),[i,s]);return P.jsxs("div",{className:"flex flex-col rounded-2xl bg-[#0d131f] border border-slate-800 p-5 space-y-3 shadow-sm",children:[P.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800/80 pb-2.5",children:[P.jsxs("div",{children:[P.jsx("h3",{className:"text-sm font-semibold text-slate-100",children:"Reflectance Response"}),P.jsx("p",{className:"text-xs text-slate-400",children:"Bidirectional reflectance (I/F) vs. phase angle (α)"})]}),P.jsxs("div",{className:"flex items-center gap-3 text-xs text-slate-400",children:[P.jsxs("div",{className:"flex items-center gap-1.5",children:[P.jsx("span",{className:"w-2.5 h-0.5 bg-sky-400 rounded-full"}),P.jsx("span",{children:"Fitted Model"})]}),P.jsxs("div",{className:"flex items-center gap-1.5",children:[P.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-slate-400"}),P.jsx("span",{children:"Sample Points"})]})]})]}),P.jsx("div",{className:"w-full aspect-[2.5/1] bg-[#090e18] rounded-xl border border-slate-800/80 p-2",children:P.jsxs("svg",{viewBox:`0 0 ${l} ${u}`,className:"w-full h-full select-none",children:[[0,30,60,90].map(y=>{const M=p(y);return P.jsxs("g",{children:[P.jsx("line",{x1:M,y1:h.top,x2:M,y2:u-h.bottom,stroke:"#1e293b"}),P.jsxs("text",{x:M,y:u-h.bottom+14,fill:"#64748b",fontSize:"9",textAnchor:"middle",children:[y,"°"]})]},`gx-${y}`)}),[0,.1,.2].map(y=>{if(y>s)return null;const M=g(y);return P.jsxs("g",{children:[P.jsx("line",{x1:h.left,y1:M,x2:l-h.right,y2:M,stroke:"#1e293b"}),P.jsx("text",{x:h.left-6,y:M+3,fill:"#64748b",fontSize:"9",textAnchor:"end",children:y.toFixed(1)})]},`gy-${y}`)}),P.jsx("path",{d:v,fill:"none",stroke:"#38bdf8",strokeWidth:"2"}),i.filter((y,M)=>M%3===0).map((y,M)=>P.jsx("circle",{cx:p(y.phaseAngle),cy:g(y.observedData),r:2,fill:"#94a3b8"},`pt-${M}`))]})})]})},a2=({dataset:r})=>{const e=re.useRef(null);return re.useEffect(()=>{const i=e.current;if(!i)return;const s=i.clientWidth,l=i.clientHeight||200,u=new av,h=new ni(45,s/l,.1,1e3);h.position.z=2.6;const d=new vv({alpha:!0,antialias:!0});d.setSize(s,l),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(d.domElement);const m=document.createElement("canvas");m.width=512,m.height=256;const p=m.getContext("2d");p.fillStyle="#1e293b",p.fillRect(0,0,512,256);for(let N=0;N<40;N++)p.fillStyle="rgba(255, 255, 255, 0.06)",p.beginPath(),p.arc(Math.random()*512,Math.random()*256,Math.random()*20+5,0,Math.PI*2),p.fill();const g=new ZM(m),v=new zc(1,48,48),y=new lv({map:g,roughness:.9}),M=new di(v,y);u.add(M);const E=r.targetCoordinates.lat*Math.PI/180,b=r.targetCoordinates.lon*Math.PI/180,S=Math.cos(E)*Math.sin(b),_=Math.sin(E),I=Math.cos(E)*Math.cos(b),O=new Dd(.04,.07,24),D=new Cd({color:3718648,side:Li}),X=new di(O,D);X.position.set(S*1.01,_*1.01,I*1.01),X.lookAt(new st(S*2,_*2,I*2)),M.add(X);const F=new fv(16777215,2);F.position.set(3,1,2),u.add(F);const z=new hv(988970,.7);u.add(z),r.targetCoordinates.lat<0&&(M.rotation.x=.55);let q=!1,w={x:0,y:0};const C=N=>{q=!0,w={x:N.clientX,y:N.clientY}},V=N=>{q&&(M.rotation.y+=(N.clientX-w.x)*.006,M.rotation.x+=(N.clientY-w.y)*.006,w={x:N.clientX,y:N.clientY})},ft=()=>{q=!1};i.addEventListener("mousedown",C),window.addEventListener("mousemove",V),window.addEventListener("mouseup",ft);let nt;const pt=()=>{nt=requestAnimationFrame(pt),q||(M.rotation.y+=.003),d.render(u,h)};pt();const ot=()=>{if(!i)return;const N=i.clientWidth,H=i.clientHeight||200;h.aspect=N/H,h.updateProjectionMatrix(),d.setSize(N,H)};return window.addEventListener("resize",ot),()=>{cancelAnimationFrame(nt),window.removeEventListener("resize",ot),i.removeEventListener("mousedown",C),window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",ft),i.contains(d.domElement)&&i.removeChild(d.domElement),d.dispose()}},[r]),P.jsxs("div",{className:"flex flex-col rounded-2xl bg-[#0d131f] border border-slate-800 p-5 space-y-3 shadow-sm",children:[P.jsx("div",{className:"flex items-center justify-between border-b border-slate-800/80 pb-2.5",children:P.jsxs("div",{children:[P.jsx("h3",{className:"text-sm font-semibold text-slate-100",children:"Lunar Target Region"}),P.jsxs("p",{className:"text-xs text-slate-400",children:["Target: ",r.targetCoordinates.latStr,", ",r.targetCoordinates.lonStr]})]})}),P.jsx("div",{ref:e,className:"w-full aspect-[2.5/1] bg-[#090e18] rounded-xl border border-slate-800/80 overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center relative",children:P.jsx("span",{className:"absolute bottom-2 right-2 text-[10px] text-slate-500 pointer-events-none",children:"Drag to rotate"})})]})},s2=({dataset:r,currentHapke:e,onShowToast:i})=>{const s=()=>{const h={product:r.productUri,mission:r.mission,instrument:r.instrument,targetCoordinates:r.targetCoordinates,fittedHapkeParameters:e,geometry:r.geometry},d=new Blob([JSON.stringify(h,null,2)],{type:"application/json"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=`${r.id}_parameters.json`,p.click(),URL.revokeObjectURL(m),i("success","Parameters Exported","Saved parameters JSON file.")},l=()=>{const h=`# ISRO Lunar Photometric Analysis Report
**Mission:** ${r.mission}
**Instrument:** ${r.instrument}
**Target Feature:** ${r.targetFeature}
**Coordinates:** ${r.targetCoordinates.latStr}, ${r.targetCoordinates.lonStr}

## Calibrated Hapke Parameters
- Single Scattering Albedo (w): ${e.w}
- Macroscopic Roughness (θ̄): ${e.thetaBar}°
- Asymmetry Factor (g): ${e.g}
- Opposition Surge (B₀): ${e.b0}
`,d=new Blob([h],{type:"text/markdown"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=`${r.id}_report.md`,p.click(),URL.revokeObjectURL(m),i("success","Report Exported","Saved analysis summary report.")},u=()=>{const h=`ISRO_LUNAR_PHOTOMETRIC_L2C
Product: ${r.productUri}
Coordinates: ${r.targetCoordinates.lat},${r.targetCoordinates.lon}`,d=new Blob([h],{type:"application/octet-stream"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=`${r.id}_corrected.tif`,p.click(),URL.revokeObjectURL(m),i("success","GeoTIFF Exported","Downloaded calibrated GeoTIFF.")};return P.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#0d131f] border border-slate-800",children:[P.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Export Processed Data:"}),P.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[P.jsxs("button",{onClick:u,className:"px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors",children:[P.jsx(nS,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"GeoTIFF"})]}),P.jsxs("button",{onClick:s,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors",children:[P.jsx(rS,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"Parameters JSON"})]}),P.jsxs("button",{onClick:l,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors",children:[P.jsx(D_,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"Summary Report"})]})]})]})},r2=({dataset:r,onShowToast:e})=>{const[i,s]=re.useState("REGOLITH_MONO"),[l,u]=re.useState(r.currentHapke),h=()=>{u(r.initialHapke),e("info","Parameters Reset","Restored baseline photometric values.")};return P.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6",children:[P.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2",children:[P.jsxs("div",{children:[P.jsx("h2",{className:"text-lg font-bold text-slate-100",children:r.targetFeature}),P.jsxs("p",{className:"text-xs text-slate-400",children:[r.mission," · ",r.instrument," · ",r.targetCoordinates.latStr,", ",r.targetCoordinates.lonStr]})]}),P.jsx(e2,{currentFilter:i,onSelectFilter:s})]}),P.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[P.jsx("div",{className:"lg:col-span-7 flex flex-col space-y-4",children:P.jsx(t2,{dataset:r,currentFilter:i,currentHapke:l})}),P.jsx("div",{className:"lg:col-span-5 flex flex-col space-y-4",children:P.jsx(n2,{currentHapke:l,initialHapke:r.initialHapke,onChangeHapke:u,onResetHapke:h})})]}),P.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[P.jsx(i2,{currentHapke:l,nominalIncidence:r.geometry.incidenceDeg}),P.jsx(a2,{dataset:r})]}),P.jsx(s2,{dataset:r,currentHapke:l,onShowToast:e})]})},o2=({isOpen:r,onClose:e,dataset:i})=>{const[s,l]=re.useState(!1);if(!r)return null;const u=()=>{navigator.clipboard.writeText(i.pds4XmlLabel),l(!0),setTimeout(()=>l(!1),2e3)};return P.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:P.jsxs("div",{className:"w-full max-w-2xl bg-[#0d131f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",children:[P.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e18]",children:[P.jsxs("div",{children:[P.jsx("h3",{className:"text-sm font-semibold text-white",children:"PDS4 Product Label"}),P.jsx("p",{className:"text-xs text-slate-400",children:i.productUri})]}),P.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",children:P.jsx(N_,{className:"w-4 h-4"})})]}),P.jsxs("div",{className:"p-6 overflow-y-auto font-mono text-xs space-y-4 flex-1",children:[P.jsxs("div",{className:"grid grid-cols-2 gap-3 text-slate-300",children:[P.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[P.jsx("div",{className:"text-slate-500 text-[10px]",children:"INCIDENCE ANGLE (i)"}),P.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.incidenceDeg,"°"]})]}),P.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[P.jsx("div",{className:"text-slate-500 text-[10px]",children:"EMISSION ANGLE (e)"}),P.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.emissionDeg,"°"]})]}),P.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[P.jsx("div",{className:"text-slate-500 text-[10px]",children:"PHASE ANGLE (α)"}),P.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.phaseDeg,"°"]})]}),P.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[P.jsx("div",{className:"text-slate-500 text-[10px]",children:"ALTITUDE"}),P.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.spacecraftAltitudeKm," km"]})]})]}),P.jsxs("div",{className:"relative",children:[P.jsxs("button",{onClick:u,className:"absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1.5 transition-colors",children:[s?P.jsx(ky,{className:"w-3 h-3 text-emerald-400"}):P.jsx(tS,{className:"w-3 h-3"}),P.jsx("span",{children:s?"Copied":"Copy"})]}),P.jsx("pre",{className:"p-4 rounded-xl bg-[#060a12] text-slate-300 border border-slate-800 overflow-x-auto text-[11px] leading-relaxed",children:i.pds4XmlLabel})]})]}),P.jsx("div",{className:"px-6 py-3 border-t border-slate-800 bg-[#090e18] flex justify-end",children:P.jsx("button",{onClick:e,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors",children:"Close"})})]})})},l2=()=>{const[r,e]=re.useState("PRE_FLIGHT"),[i,s]=re.useState(Qf[0]),[l,u]=re.useState(!1),[h,d]=re.useState([]),m=(E,b,S)=>{const _=`toast-${Date.now()}`;d(I=>[...I,{id:_,type:E,title:b,description:S}])},p=E=>{d(b=>b.filter(S=>S.id!==E))},g=E=>{const b={...Qf[0],id:`CUSTOM_${E.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,productUri:`URN:ISRO:PDS4:${E.toUpperCase()}`,targetFeature:`Lunar Swath: ${E}`};s(b),e("PROCESSING")},v=()=>{s(Qf[0]),e("PROCESSING")},y=()=>{e("DASHBOARD")},M=()=>{e("PRE_FLIGHT")};return P.jsxs("div",{className:"relative min-h-screen bg-[#030303] text-stone-200 flex flex-col selection:bg-stone-200/20 selection:text-stone-100",children:[P.jsx(GA,{appState:r}),P.jsx(CS,{appState:r,dataset:i,onReset:M,onOpenPds4Modal:()=>u(!0)}),P.jsxs("main",{className:"relative z-10 flex-1 flex flex-col justify-center",children:[r==="PRE_FLIGHT"&&P.jsxs("div",{className:"w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12 flex flex-col justify-between min-h-[calc(100vh-86px)]",children:[P.jsxs("div",{className:"max-w-3xl space-y-7 mt-[10vh] lg:mt-[12vh]",children:[P.jsxs("div",{className:"space-y-4",children:[P.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono tracking-[0.24em] text-stone-400 uppercase",children:[P.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-stone-300"}),P.jsx("span",{children:"ISRO / Chandrayaan lunar archive"})]}),P.jsx("h1",{className:"max-w-2xl text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.055em] text-stone-100 leading-[0.94]",children:"Read the lunar surface in a different light."}),P.jsx("p",{className:"text-sm sm:text-base text-stone-400 max-w-md leading-relaxed",children:"An instrument panel for Chandrayaan imagery—built to reveal terrain, recover shadow detail, and make the Moon legible."})]}),P.jsx(XA,{onFileSelected:g,onDemoSelected:v})]}),P.jsxs("div",{className:"pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-wide text-stone-400 uppercase",children:[P.jsxs("div",{className:"flex items-center gap-6",children:[P.jsxs("span",{className:"flex items-center gap-2",children:[P.jsx(Jy,{className:"w-3.5 h-3.5 text-stone-500"}),P.jsx("span",{children:"SPICE Geometry Inversion"})]}),P.jsxs("span",{className:"flex items-center gap-2",children:[P.jsx(yS,{className:"w-3.5 h-3.5 text-stone-500"}),P.jsx("span",{children:"Hapke 5-Parameter Physics"})]}),P.jsxs("span",{className:"hidden sm:flex items-center gap-2",children:[P.jsx(mS,{className:"w-3.5 h-3.5 text-stone-500"}),P.jsx("span",{children:"South Pole Prime Zone"})]})]}),P.jsx("span",{className:"text-stone-500 text-[10px]",children:"ISRO Planetary Data Node"})]})]}),r==="PROCESSING"&&P.jsx("div",{className:"w-full flex items-center justify-center p-4",children:P.jsx(jA,{dataset:i,onComplete:y})}),r==="DASHBOARD"&&P.jsx(r2,{dataset:i,onShowToast:m})]}),P.jsx(o2,{isOpen:l,onClose:()=>u(!1),dataset:i}),P.jsx(VA,{toasts:h,onDismiss:p})]})};zy.createRoot(document.getElementById("root")).render(P.jsx(Cy.StrictMode,{children:P.jsx(l2,{})}));
