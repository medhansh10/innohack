(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function R_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var jf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function Sy(){if(d0)return bo;d0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return bo.Fragment=e,bo.jsx=i,bo.jsxs=i,bo}var h0;function My(){return h0||(h0=1,jf.exports=Sy()),jf.exports}var P=My(),qf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function Ey(){if(p0)return oe;p0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function _(N,J,Mt){this.props=N,this.context=J,this.refs=S,this.updater=Mt||A}_.prototype.isReactComponent={},_.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function I(){}I.prototype=_.prototype;function L(N,J,Mt){this.props=N,this.context=J,this.refs=S,this.updater=Mt||A}var D=L.prototype=new I;D.constructor=L,b(D,_.prototype),D.isPureReactComponent=!0;var j=Array.isArray;function G(){}var O={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function w(N,J,Mt){var Y=Mt.ref;return{$$typeof:o,type:N,key:J,ref:Y!==void 0?Y:null,props:Mt}}function C(N,J){return w(N.type,J,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function lt(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Mt){return J[Mt]})}var rt=/\/+/g;function _t(N,J){return typeof N=="object"&&N!==null&&N.key!=null?lt(""+N.key):J.toString(36)}function mt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(G,G):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,J,Mt,Y,ft){var bt=typeof N;(bt==="undefined"||bt==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(bt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case o:case e:St=!0;break;case g:return St=N._init,z(St(N._payload),J,Mt,Y,ft)}}if(St)return ft=ft(N),St=Y===""?"."+_t(N,0):Y,j(ft)?(Mt="",St!=null&&(Mt=St.replace(rt,"$&/")+"/"),z(ft,J,Mt,"",function(Yt){return Yt})):ft!=null&&(H(ft)&&(ft=C(ft,Mt+(ft.key==null||N&&N.key===ft.key?"":(""+ft.key).replace(rt,"$&/")+"/")+St)),J.push(ft)),1;St=0;var Ft=Y===""?".":Y+":";if(j(N))for(var Wt=0;Wt<N.length;Wt++)Y=N[Wt],bt=Ft+_t(Y,Wt),St+=z(Y,J,Mt,bt,ft);else if(Wt=M(N),typeof Wt=="function")for(N=Wt.call(N),Wt=0;!(Y=N.next()).done;)Y=Y.value,bt=Ft+_t(Y,Wt++),St+=z(Y,J,Mt,bt,ft);else if(bt==="object"){if(typeof N.then=="function")return z(mt(N),J,Mt,Y,ft);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return St}function Q(N,J,Mt){if(N==null)return N;var Y=[],ft=0;return z(N,Y,"","",function(bt){return J.call(Mt,bt,ft++)}),Y}function Z(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(Mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Mt)},function(Mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Mt)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var ct=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},dt={map:Q,forEach:function(N,J,Mt){Q(N,function(){J.apply(this,arguments)},Mt)},count:function(N){var J=0;return Q(N,function(){J++}),J},toArray:function(N){return Q(N,function(J){return J})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return oe.Activity=x,oe.Children=dt,oe.Component=_,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=L,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,oe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},oe.cache=function(N){return function(){return N.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(N,J,Mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Y=b({},N.props),ft=N.key;if(J!=null)for(bt in J.key!==void 0&&(ft=""+J.key),J)!X.call(J,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&J.ref===void 0||(Y[bt]=J[bt]);var bt=arguments.length-2;if(bt===1)Y.children=Mt;else if(1<bt){for(var St=Array(bt),Ft=0;Ft<bt;Ft++)St[Ft]=arguments[Ft+2];Y.children=St}return w(N.type,ft,Y)},oe.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},oe.createElement=function(N,J,Mt){var Y,ft={},bt=null;if(J!=null)for(Y in J.key!==void 0&&(bt=""+J.key),J)X.call(J,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ft[Y]=J[Y]);var St=arguments.length-2;if(St===1)ft.children=Mt;else if(1<St){for(var Ft=Array(St),Wt=0;Wt<St;Wt++)Ft[Wt]=arguments[Wt+2];ft.children=Ft}if(N&&N.defaultProps)for(Y in St=N.defaultProps,St)ft[Y]===void 0&&(ft[Y]=St[Y]);return w(N,bt,ft)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(N){return{$$typeof:h,render:N}},oe.isValidElement=H,oe.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},oe.memo=function(N,J){return{$$typeof:p,type:N,compare:J===void 0?null:J}},oe.startTransition=function(N){var J=O.T,Mt={};O.T=Mt;try{var Y=N(),ft=O.S;ft!==null&&ft(Mt,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(G,ct)}catch(bt){ct(bt)}finally{J!==null&&Mt.types!==null&&(J.types=Mt.types),O.T=J}},oe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},oe.use=function(N){return O.H.use(N)},oe.useActionState=function(N,J,Mt){return O.H.useActionState(N,J,Mt)},oe.useCallback=function(N,J){return O.H.useCallback(N,J)},oe.useContext=function(N){return O.H.useContext(N)},oe.useDebugValue=function(){},oe.useDeferredValue=function(N,J){return O.H.useDeferredValue(N,J)},oe.useEffect=function(N,J){return O.H.useEffect(N,J)},oe.useEffectEvent=function(N){return O.H.useEffectEvent(N)},oe.useId=function(){return O.H.useId()},oe.useImperativeHandle=function(N,J,Mt){return O.H.useImperativeHandle(N,J,Mt)},oe.useInsertionEffect=function(N,J){return O.H.useInsertionEffect(N,J)},oe.useLayoutEffect=function(N,J){return O.H.useLayoutEffect(N,J)},oe.useMemo=function(N,J){return O.H.useMemo(N,J)},oe.useOptimistic=function(N,J){return O.H.useOptimistic(N,J)},oe.useReducer=function(N,J,Mt){return O.H.useReducer(N,J,Mt)},oe.useRef=function(N){return O.H.useRef(N)},oe.useState=function(N){return O.H.useState(N)},oe.useSyncExternalStore=function(N,J,Mt){return O.H.useSyncExternalStore(N,J,Mt)},oe.useTransition=function(){return O.H.useTransition()},oe.version="19.2.8",oe}var m0;function xh(){return m0||(m0=1,qf.exports=Ey()),qf.exports}var ne=xh();const by=R_(ne);var Wf={exports:{}},To={},Yf={exports:{}},Zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function Ty(){return g0||(g0=1,(function(o){function e(z,Q){var Z=z.length;z.push(Q);t:for(;0<Z;){var ct=Z-1>>>1,dt=z[ct];if(0<l(dt,Q))z[ct]=Q,z[Z]=dt,Z=ct;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Q=z[0],Z=z.pop();if(Z!==Q){z[0]=Z;t:for(var ct=0,dt=z.length,N=dt>>>1;ct<N;){var J=2*(ct+1)-1,Mt=z[J],Y=J+1,ft=z[Y];if(0>l(Mt,Z))Y<dt&&0>l(ft,Mt)?(z[ct]=ft,z[Y]=Z,ct=Y):(z[ct]=Mt,z[J]=Z,ct=J);else if(Y<dt&&0>l(ft,Z))z[ct]=ft,z[Y]=Z,ct=Y;else break t}}return Q}function l(z,Q){var Z=z.sortIndex-Q.sortIndex;return Z!==0?Z:z.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,x=null,y=3,M=!1,A=!1,b=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var Q=i(p);Q!==null;){if(Q.callback===null)s(p);else if(Q.startTime<=z)s(p),Q.sortIndex=Q.expirationTime,e(m,Q);else break;Q=i(p)}}function j(z){if(b=!1,D(z),!A)if(i(m)!==null)A=!0,G||(G=!0,lt());else{var Q=i(p);Q!==null&&mt(j,Q.startTime-z)}}var G=!1,O=-1,X=5,w=-1;function C(){return S?!0:!(o.unstable_now()-w<X)}function H(){if(S=!1,G){var z=o.unstable_now();w=z;var Q=!0;try{t:{A=!1,b&&(b=!1,I(O),O=-1),M=!0;var Z=y;try{e:{for(D(z),x=i(m);x!==null&&!(x.expirationTime>z&&C());){var ct=x.callback;if(typeof ct=="function"){x.callback=null,y=x.priorityLevel;var dt=ct(x.expirationTime<=z);if(z=o.unstable_now(),typeof dt=="function"){x.callback=dt,D(z),Q=!0;break e}x===i(m)&&s(m),D(z)}else s(m);x=i(m)}if(x!==null)Q=!0;else{var N=i(p);N!==null&&mt(j,N.startTime-z),Q=!1}}break t}finally{x=null,y=Z,M=!1}Q=void 0}}finally{Q?lt():G=!1}}}var lt;if(typeof L=="function")lt=function(){L(H)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,_t=rt.port2;rt.port1.onmessage=H,lt=function(){_t.postMessage(null)}}else lt=function(){_(H,0)};function mt(z,Q){O=_(function(){z(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var Z=y;y=Q;try{return z()}finally{y=Z}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=y;y=z;try{return Q()}finally{y=Z}},o.unstable_scheduleCallback=function(z,Q,Z){var ct=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ct+Z:ct):Z=ct,z){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=Z+dt,z={id:g++,callback:Q,priorityLevel:z,startTime:Z,expirationTime:dt,sortIndex:-1},Z>ct?(z.sortIndex=Z,e(p,z),i(m)===null&&z===i(p)&&(b?(I(O),O=-1):b=!0,mt(j,Z-ct))):(z.sortIndex=dt,e(m,z),A||M||(A=!0,G||(G=!0,lt()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var Q=y;return function(){var Z=y;y=Q;try{return z.apply(this,arguments)}finally{y=Z}}}})(Zf)),Zf}var _0;function Ay(){return _0||(_0=1,Yf.exports=Ty()),Yf.exports}var Kf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function Ry(){if(v0)return Rn;v0=1;var o=xh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.2.8",Rn}var x0;function Cy(){if(x0)return Kf.exports;x0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kf.exports=Ry(),Kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function wy(){if(y0)return To;y0=1;var o=Ay(),e=xh(),i=Cy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,r=f;break}if(T===r){v=!0,r=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,r=c;break}if(T===r){v=!0,r=f,a=c;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function _t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case j:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case L:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:_t(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return _t(t(n))}catch{}}return null}var mt=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ct=[],dt=-1;function N(t){return{current:t}}function J(t){0>dt||(t.current=ct[dt],ct[dt]=null,dt--)}function Mt(t,n){dt++,ct[dt]=t.current,t.current=n}var Y=N(null),ft=N(null),bt=N(null),St=N(null);function Ft(t,n){switch(Mt(bt,n),Mt(ft,t),Mt(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Pg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Pg(n),t=zg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Y),Mt(Y,t)}function Wt(){J(Y),J(ft),J(bt)}function Yt(t){t.memoizedState!==null&&Mt(St,t);var n=Y.current,a=zg(n,t.type);n!==a&&(Mt(ft,t),Mt(Y,a))}function Ne(t){ft.current===t&&(J(Y),J(ft)),St.current===t&&(J(St),yo._currentValue=Z)}var Le,he;function F(t){if(Le===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Le=n&&n[1]||"",he=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Le+t+he}var en=!1;function Ct(t,n){if(!t||en)return"";en=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ot){var nt=ot}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(ot){nt=ot}t.call(xt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var B=v.split(`
`),et=T.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===et.length)for(r=B.length-1,c=et.length-1;1<=r&&0<=c&&B[r]!==et[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==et[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==et[c]){var pt=`
`+B[r].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=r&&0<=c);break}}}finally{en=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?F(a):""}function qt(t,n){switch(t.tag){case 26:case 27:case 5:return F(t.type);case 16:return F("Lazy");case 13:return t.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return Ct(t.type,!1);case 11:return Ct(t.type.render,!1);case 1:return Ct(t.type,!0);case 31:return F("Activity");default:return""}}function Rt(t){try{var n="",a=null;do n+=qt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var te=Object.prototype.hasOwnProperty,zt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,E=o.unstable_shouldYield,$=o.unstable_requestPaint,ht=o.unstable_now,Et=o.unstable_getCurrentPriorityLevel,vt=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,Ut=o.unstable_NormalPriority,Ht=o.unstable_LowPriority,ge=o.unstable_IdlePriority,At=o.log,Gt=o.unstable_setDisableYieldValue,Zt=null,jt=null;function It(t){if(typeof At=="function"&&Gt(t),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Zt,t)}catch{}}var ee=Math.clz32?Math.clz32:q,le=Math.log,ze=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(le(t)/ze|0)|0}var wt=256,ut=262144,yt=4194304;function Dt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=Dt(r):(v&=T,v!==0?c=Dt(v):a||(a=T&~t,a!==0&&(c=Dt(a))))):(T=r&~f,T!==0?c=Dt(T):v!==0?c=Dt(v):a||(a=r&~t,a!==0&&(c=Dt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ie(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function We(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function un(){var t=yt;return yt<<=1,(yt&62914560)===0&&(yt=4194304),t}function be(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function xn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function di(t,n,a,r,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,et=t.hiddenUpdates;for(a=v&~a;0<a;){var pt=31-ee(a),xt=1<<pt;T[pt]=0,B[pt]=-1;var nt=et[pt];if(nt!==null)for(et[pt]=null,pt=0;pt<nt.length;pt++){var ot=nt[pt];ot!==null&&(ot.lane&=-536870913)}a&=~xt}r!==0&&Ur(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Ur(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-ee(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Nr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-ee(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Ai(t,n){var a=n&-n;return a=(a&42)!==0?1:Xa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Xa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Lr(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:s0(t.type))}function ja(t,n){var a=Q.p;try{return Q.p=t,n()}finally{Q.p=a}}var hi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+hi,yn="__reactProps$"+hi,Pi="__reactContainer$"+hi,Or="__reactEvents$"+hi,Bc="__reactListeners$"+hi,Fc="__reactHandles$"+hi,Vo="__reactResources$"+hi,qa="__reactMarker$"+hi;function Pr(t){delete t[Ke],delete t[yn],delete t[Or],delete t[Bc],delete t[Fc]}function R(t){var n=t[Ke];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Pi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=kg(t);t!==null;){if(a=t[Ke])return a;t=kg(t)}return n}t=a,a=t.parentNode}return null}function W(t){if(t=t[Ke]||t[Pi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function it(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function st(t){var n=t[Vo];return n||(n=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[qa]=!0}var Tt=new Set,Lt={};function Pt(t,n){Bt(t,n),Bt(t+"Capture",n)}function Bt(t,n){for(Lt[t]=n,t=0;t<n.length;t++)Tt.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Kt={};function xe(t){return te.call(Kt,t)?!0:te.call(se,t)?!1:ae.test(t)?Kt[t]=!0:(se[t]=!0,!1)}function ye(t,n,a){if(xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ae(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function re(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fn(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ee(t){if(!t._valueTracker){var n=Jt(t)?"checked":"value";t._valueTracker=fn(t,n,""+t[n])}}function Pn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Jt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function mn(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ie(t,n,a,r,c,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+re(n)):t.value!==""+re(n)&&(t.value=""+re(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?An(t,v,re(n)):a!=null?An(t,v,re(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+re(T):t.removeAttribute("name")}function Un(t,n,a,r,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ee(t);return}a=a!=null?""+re(a):"",n=n!=null?""+re(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Ee(t)}function An(t,n,a){n==="number"&&pi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qe(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+re(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Sn(t,n,a){if(n!=null&&(n=""+re(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+re(a):""}function Ts(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(mt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=re(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ee(t)}function zn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var gv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nh(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||gv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Lh(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Nh(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Nh(t,f,n[f])}function Hc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _v=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return vv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Gc=null;function Vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var As=null,Rs=null;function Oh(t){var n=W(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ie(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[yn]||null;if(!c)throw Error(s(90));Ie(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Pn(r)}break t;case"textarea":Sn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(t,!!a.multiple,n,!1)}}}var kc=!1;function Ph(t,n,a){if(kc)return t(n,a);kc=!0;try{var r=t(n);return r}finally{if(kc=!1,(As!==null||Rs!==null)&&(Dl(),As&&(n=As,t=Rs,Rs=As=null,Oh(n),t)))for(n=0;n<t.length;n++)Oh(t[n])}}function zr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[yn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(Ii)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Xc=!1}var ua=null,jc=null,Xo=null;function zh(){if(Xo)return Xo;var t,n=jc,a=n.length,r,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return Xo=c.slice(t,1<r?1-r:void 0)}function jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Ih(){return!1}function In(t){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Ih,this.isPropagationStopped=Ih,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=In(Wa),Br=x({},Wa,{view:0,detail:0}),xv=In(Br),qc,Wc,Fr,Yo=x({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fr&&(Fr&&t.type==="mousemove"?(qc=t.screenX-Fr.screenX,Wc=t.screenY-Fr.screenY):Wc=qc=0,Fr=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),Bh=In(Yo),yv=x({},Yo,{dataTransfer:0}),Sv=In(yv),Mv=x({},Br,{relatedTarget:0}),Yc=In(Mv),Ev=x({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=In(Ev),Tv=x({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Av=In(Tv),Rv=x({},Wa,{data:0}),Fh=In(Rv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Dv[t])?!!n[t]:!1}function Zc(){return Uv}var Nv=x({},Br,{key:function(t){if(t.key){var n=Cv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lv=In(Nv),Ov=x({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=In(Ov),Pv=x({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),zv=In(Pv),Iv=x({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=In(Iv),Fv=x({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=In(Fv),Gv=x({},Wa,{newState:0,oldState:0}),Vv=In(Gv),kv=[9,13,27,32],Kc=Ii&&"CompositionEvent"in window,Hr=null;Ii&&"documentMode"in document&&(Hr=document.documentMode);var Xv=Ii&&"TextEvent"in window&&!Hr,Gh=Ii&&(!Kc||Hr&&8<Hr&&11>=Hr),Vh=" ",kh=!1;function Xh(t,n){switch(t){case"keyup":return kv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function jv(t,n){switch(t){case"compositionend":return jh(n);case"keypress":return n.which!==32?null:(kh=!0,Vh);case"textInput":return t=n.data,t===Vh&&kh?null:t;default:return null}}function qv(t,n){if(Cs)return t==="compositionend"||!Kc&&Xh(t,n)?(t=zh(),Xo=jc=ua=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gh&&n.locale!=="ko"?null:n.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Wv[t.type]:n==="textarea"}function Wh(t,n,a,r){As?Rs?Rs.push(r):Rs=[r]:As=r,n=Il(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Gr=null,Vr=null;function Yv(t){wg(t,0)}function Zo(t){var n=it(t);if(Pn(n))return t}function Yh(t,n){if(t==="change")return n}var Zh=!1;if(Ii){var Qc;if(Ii){var Jc="oninput"in document;if(!Jc){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),Jc=typeof Kh.oninput=="function"}Qc=Jc}else Qc=!1;Zh=Qc&&(!document.documentMode||9<document.documentMode)}function Qh(){Gr&&(Gr.detachEvent("onpropertychange",Jh),Vr=Gr=null)}function Jh(t){if(t.propertyName==="value"&&Zo(Vr)){var n=[];Wh(n,Vr,t,Vc(t)),Ph(Yv,n)}}function Zv(t,n,a){t==="focusin"?(Qh(),Gr=n,Vr=a,Gr.attachEvent("onpropertychange",Jh)):t==="focusout"&&Qh()}function Kv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(Vr)}function Qv(t,n){if(t==="click")return Zo(n)}function Jv(t,n){if(t==="input"||t==="change")return Zo(n)}function $v(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:$v;function kr(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!te.call(n,c)||!jn(t[c],n[c]))return!1}return!0}function $h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,n){var a=$h(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$h(a)}}function ep(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ep(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function np(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pi(t.document)}return n}function $c(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var tx=Ii&&"documentMode"in document&&11>=document.documentMode,ws=null,tu=null,Xr=null,eu=!1;function ip(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||ws==null||ws!==pi(r)||(r=ws,"selectionStart"in r&&$c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&kr(Xr,r)||(Xr=r,r=Il(tu,"onSelect"),0<r.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ws)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ds={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},nu={},ap={};Ii&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Za(t){if(nu[t])return nu[t];if(!Ds[t])return t;var n=Ds[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ap)return nu[t]=n[a];return t}var sp=Za("animationend"),rp=Za("animationiteration"),op=Za("animationstart"),ex=Za("transitionrun"),nx=Za("transitionstart"),ix=Za("transitioncancel"),lp=Za("transitionend"),cp=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function mi(t,n){cp.set(t,n),Pt(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],Us=0,au=0;function Qo(){for(var t=Us,n=au=Us=0;n<t;){var a=ei[n];ei[n++]=null;var r=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&up(a,c,f)}}function Jo(t,n,a,r){ei[Us++]=t,ei[Us++]=n,ei[Us++]=a,ei[Us++]=r,au|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function su(t,n,a,r){return Jo(t,n,a,r),$o(t)}function Ka(t,n){return Jo(t,null,null,n),$o(t)}function up(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-ee(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<ho)throw ho=0,mf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ns={};function ax(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,r){return new ax(t,n,a,r)}function ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,r,c,f){var v=0;if(r=t,typeof t=="function")ru(t)&&(v=1);else if(typeof t=="string")v=cy(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=qn(31,a,n,c),t.elementType=w,t.lanes=f,t;case b:return Qa(a.children,c,f,n);case S:v=8,c|=24;break;case _:return t=qn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case j:return t=qn(13,a,n,c),t.elementType=j,t.lanes=f,t;case G:return t=qn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:v=10;break t;case I:v=9;break t;case D:v=11;break t;case O:v=14;break t;case X:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=qn(v,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Qa(t,n,a,r){return t=qn(7,t,r,n),t.lanes=a,t}function ou(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function dp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function lu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var hp=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=hp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Rt(n)},hp.set(t,n),n)}return{value:t,source:n,stack:Rt(n)}}var Ls=[],Os=0,el=null,jr=0,ii=[],ai=0,fa=null,Ri=1,Ci="";function Fi(t,n){Ls[Os++]=jr,Ls[Os++]=el,el=t,jr=n}function pp(t,n,a){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=fa,fa=t;var r=Ri;t=Ci;var c=32-ee(r)-1;r&=~(1<<c),a+=1;var f=32-ee(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,Ri=1<<32-ee(n)+c|a<<c|r,Ci=f+t}else Ri=1<<f|a<<c|r,Ci=t}function cu(t){t.return!==null&&(Fi(t,1),pp(t,1,0))}function uu(t){for(;t===el;)el=Ls[--Os],Ls[Os]=null,jr=Ls[--Os],Ls[Os]=null;for(;t===fa;)fa=ii[--ai],ii[ai]=null,Ci=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null}function mp(t,n){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=fa,Ri=n.id,Ci=n.overflow,fa=t}var Mn=null,je=null,Se=!1,da=null,si=!1,fu=Error(s(519));function ha(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qr(ni(n,t)),fu}function gp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ke]=t,n[yn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)me(mo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Un(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Ts(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Lg(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||ha(t,!0)}function _p(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:Mn=Mn.return}}function Ps(t){if(t!==Mn)return!1;if(!Se)return _p(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Df(t.type,t.memoizedProps)),a=!a),a&&je&&ha(t),_p(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=Vg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=Vg(t)}else n===27?(n=je,Ra(t.type)?(t=Pf,Pf=null,je=t):je=n):je=Mn?oi(t.stateNode.nextSibling):null;return!0}function Ja(){je=Mn=null,Se=!1}function du(){var t=da;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),da=null),t}function qr(t){da===null?da=[t]:da.push(t)}var hu=N(null),$a=null,Hi=null;function pa(t,n,a){Mt(hu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=hu.current,J(hu)}function pu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function mu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),pu(f.return,a,t),r||(v=null);break t}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),pu(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function zs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=c.type;jn(c.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(c===St.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yo):t=[yo])}c=c.return}t!==null&&mu(n,t,a,r),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ts(t){$a=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return vp($a,t)}function il(t,n){return $a===null&&ts(t),vp(t,n)}function vp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(s(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var sx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},rx=o.unstable_scheduleCallback,ox=o.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new sx,data:new Map,refCount:0}}function Wr(t){t.refCount--,t.refCount===0&&rx(ox,function(){t.controller.abort()})}var Yr=null,_u=0,Is=0,Bs=null;function lx(t,n){if(Yr===null){var a=Yr=[];_u=0,Is=Sf(),Bs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return _u++,n.then(xp,xp),n}function xp(){if(--_u===0&&Yr!==null){Bs!==null&&(Bs.status="fulfilled");var t=Yr;Yr=null,Is=0,Bs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var yp=z.S;z.S=function(t,n){ig=ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&lx(t,n),yp!==null&&yp(t,n)};var es=N(null);function vu(){var t=es.current;return t!==null?t:Ve.pooledCache}function al(t,n){n===null?Mt(es,es.current):Mt(es,n.pool)}function Sp(){var t=vu();return t===null?null:{parent:sn._currentValue,pool:t}}var Fs=Error(s(460)),xu=Error(s(474)),sl=Error(s(542)),rl={then:function(){}};function Mp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ep(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t}throw is=n,Fs}}function ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(is=a,Fs):a}}var is=null;function bp(){if(is===null)throw Error(s(459));var t=is;return is=null,t}function Tp(t){if(t===Fs||t===sl)throw Error(s(483))}var Hs=null,Zr=0;function ol(t){var n=Zr;return Zr+=1,Hs===null&&(Hs=[]),Ep(Hs,t,n)}function Kr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ap(t){function n(K,V){if(t){var tt=K.deletions;tt===null?(K.deletions=[V],K.flags|=16):tt.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function r(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function c(K,V){return K=Bi(K,V),K.index=0,K.sibling=null,K}function f(K,V,tt){return K.index=tt,t?(tt=K.alternate,tt!==null?(tt=tt.index,tt<V?(K.flags|=67108866,V):tt):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function v(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function T(K,V,tt,gt){return V===null||V.tag!==6?(V=ou(tt,K.mode,gt),V.return=K,V):(V=c(V,tt),V.return=K,V)}function B(K,V,tt,gt){var Qt=tt.type;return Qt===b?pt(K,V,tt.props.children,gt,tt.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&ns(Qt)===V.type)?(V=c(V,tt.props),Kr(V,tt),V.return=K,V):(V=tl(tt.type,tt.key,tt.props,null,K.mode,gt),Kr(V,tt),V.return=K,V)}function et(K,V,tt,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=lu(tt,K.mode,gt),V.return=K,V):(V=c(V,tt.children||[]),V.return=K,V)}function pt(K,V,tt,gt,Qt){return V===null||V.tag!==7?(V=Qa(tt,K.mode,gt,Qt),V.return=K,V):(V=c(V,tt),V.return=K,V)}function xt(K,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ou(""+V,K.mode,tt),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return tt=tl(V.type,V.key,V.props,null,K.mode,tt),Kr(tt,V),tt.return=K,tt;case A:return V=lu(V,K.mode,tt),V.return=K,V;case X:return V=ns(V),xt(K,V,tt)}if(mt(V)||lt(V))return V=Qa(V,K.mode,tt,null),V.return=K,V;if(typeof V.then=="function")return xt(K,ol(V),tt);if(V.$$typeof===L)return xt(K,il(K,V),tt);ll(K,V)}return null}function nt(K,V,tt,gt){var Qt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Qt!==null?null:T(K,V,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===Qt?B(K,V,tt,gt):null;case A:return tt.key===Qt?et(K,V,tt,gt):null;case X:return tt=ns(tt),nt(K,V,tt,gt)}if(mt(tt)||lt(tt))return Qt!==null?null:pt(K,V,tt,gt,null);if(typeof tt.then=="function")return nt(K,V,ol(tt),gt);if(tt.$$typeof===L)return nt(K,V,il(K,tt),gt);ll(K,tt)}return null}function ot(K,V,tt,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(tt)||null,T(V,K,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return K=K.get(gt.key===null?tt:gt.key)||null,B(V,K,gt,Qt);case A:return K=K.get(gt.key===null?tt:gt.key)||null,et(V,K,gt,Qt);case X:return gt=ns(gt),ot(K,V,tt,gt,Qt)}if(mt(gt)||lt(gt))return K=K.get(tt)||null,pt(V,K,gt,Qt,null);if(typeof gt.then=="function")return ot(K,V,tt,ol(gt),Qt);if(gt.$$typeof===L)return ot(K,V,tt,il(V,gt),Qt);ll(V,gt)}return null}function Vt(K,V,tt,gt){for(var Qt=null,Re=null,kt=V,ue=V=0,ve=null;kt!==null&&ue<tt.length;ue++){kt.index>ue?(ve=kt,kt=null):ve=kt.sibling;var Ce=nt(K,kt,tt[ue],gt);if(Ce===null){kt===null&&(kt=ve);break}t&&kt&&Ce.alternate===null&&n(K,kt),V=f(Ce,V,ue),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce,kt=ve}if(ue===tt.length)return a(K,kt),Se&&Fi(K,ue),Qt;if(kt===null){for(;ue<tt.length;ue++)kt=xt(K,tt[ue],gt),kt!==null&&(V=f(kt,V,ue),Re===null?Qt=kt:Re.sibling=kt,Re=kt);return Se&&Fi(K,ue),Qt}for(kt=r(kt);ue<tt.length;ue++)ve=ot(kt,K,ue,tt[ue],gt),ve!==null&&(t&&ve.alternate!==null&&kt.delete(ve.key===null?ue:ve.key),V=f(ve,V,ue),Re===null?Qt=ve:Re.sibling=ve,Re=ve);return t&&kt.forEach(function(Na){return n(K,Na)}),Se&&Fi(K,ue),Qt}function $t(K,V,tt,gt){if(tt==null)throw Error(s(151));for(var Qt=null,Re=null,kt=V,ue=V=0,ve=null,Ce=tt.next();kt!==null&&!Ce.done;ue++,Ce=tt.next()){kt.index>ue?(ve=kt,kt=null):ve=kt.sibling;var Na=nt(K,kt,Ce.value,gt);if(Na===null){kt===null&&(kt=ve);break}t&&kt&&Na.alternate===null&&n(K,kt),V=f(Na,V,ue),Re===null?Qt=Na:Re.sibling=Na,Re=Na,kt=ve}if(Ce.done)return a(K,kt),Se&&Fi(K,ue),Qt;if(kt===null){for(;!Ce.done;ue++,Ce=tt.next())Ce=xt(K,Ce.value,gt),Ce!==null&&(V=f(Ce,V,ue),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return Se&&Fi(K,ue),Qt}for(kt=r(kt);!Ce.done;ue++,Ce=tt.next())Ce=ot(kt,K,ue,Ce.value,gt),Ce!==null&&(t&&Ce.alternate!==null&&kt.delete(Ce.key===null?ue:Ce.key),V=f(Ce,V,ue),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return t&&kt.forEach(function(yy){return n(K,yy)}),Se&&Fi(K,ue),Qt}function He(K,V,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===b&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var Qt=tt.key;V!==null;){if(V.key===Qt){if(Qt=tt.type,Qt===b){if(V.tag===7){a(K,V.sibling),gt=c(V,tt.props.children),gt.return=K,K=gt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&ns(Qt)===V.type){a(K,V.sibling),gt=c(V,tt.props),Kr(gt,tt),gt.return=K,K=gt;break t}a(K,V);break}else n(K,V);V=V.sibling}tt.type===b?(gt=Qa(tt.props.children,K.mode,gt,tt.key),gt.return=K,K=gt):(gt=tl(tt.type,tt.key,tt.props,null,K.mode,gt),Kr(gt,tt),gt.return=K,K=gt)}return v(K);case A:t:{for(Qt=tt.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(K,V.sibling),gt=c(V,tt.children||[]),gt.return=K,K=gt;break t}else{a(K,V);break}else n(K,V);V=V.sibling}gt=lu(tt,K.mode,gt),gt.return=K,K=gt}return v(K);case X:return tt=ns(tt),He(K,V,tt,gt)}if(mt(tt))return Vt(K,V,tt,gt);if(lt(tt)){if(Qt=lt(tt),typeof Qt!="function")throw Error(s(150));return tt=Qt.call(tt),$t(K,V,tt,gt)}if(typeof tt.then=="function")return He(K,V,ol(tt),gt);if(tt.$$typeof===L)return He(K,V,il(K,tt),gt);ll(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(K,V.sibling),gt=c(V,tt),gt.return=K,K=gt):(a(K,V),gt=ou(tt,K.mode,gt),gt.return=K,K=gt),v(K)):a(K,V)}return function(K,V,tt,gt){try{Zr=0;var Qt=He(K,V,tt,gt);return Hs=null,Qt}catch(kt){if(kt===Fs||kt===sl)throw kt;var Re=qn(29,kt,null,K.mode);return Re.lanes=gt,Re.return=K,Re}finally{}}}var as=Ap(!0),Rp=Ap(!1),ma=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=$o(t),up(t,null,a),n}return Jo(t,r,n,a),$o(t)}function Qr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Nr(t,a)}}function Mu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Eu=!1;function Jr(){if(Eu){var t=Bs;if(t!==null)throw t}}function $r(t,n,a,r){Eu=!1;var c=t.updateQueue;ma=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,et=B.next;B.next=null,v===null?f=et:v.next=et,v=B;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,T=pt.lastBaseUpdate,T!==v&&(T===null?pt.firstBaseUpdate=et:T.next=et,pt.lastBaseUpdate=B))}if(f!==null){var xt=c.baseState;v=0,pt=et=B=null,T=f;do{var nt=T.lane&-536870913,ot=nt!==T.lane;if(ot?(_e&nt)===nt:(r&nt)===nt){nt!==0&&nt===Is&&(Eu=!0),pt!==null&&(pt=pt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=t,$t=T;nt=n;var He=a;switch($t.tag){case 1:if(Vt=$t.payload,typeof Vt=="function"){xt=Vt.call(He,xt,nt);break t}xt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=$t.payload,nt=typeof Vt=="function"?Vt.call(He,xt,nt):Vt,nt==null)break t;xt=x({},xt,nt);break t;case 2:ma=!0}}nt=T.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pt===null?(et=pt=ot,B=xt):pt=pt.next=ot,v|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);pt===null&&(B=xt),c.baseState=B,c.firstBaseUpdate=et,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),Ma|=v,t.lanes=v,t.memoizedState=xt}}function Cp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function wp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Cp(a[t],n)}var Gs=N(null),cl=N(0);function Dp(t,n){t=Ki,Mt(cl,t),Mt(Gs,n),Ki=t|n.baseLanes}function bu(){Mt(cl,Ki),Mt(Gs,Gs.current)}function Tu(){Ki=cl.current,J(Gs),J(cl)}var Wn=N(null),ri=null;function va(t){var n=t.alternate;Mt(nn,nn.current&1),Mt(Wn,t),ri===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(ri=t)}function Au(t){Mt(nn,nn.current),Mt(Wn,t),ri===null&&(ri=t)}function Up(t){t.tag===22?(Mt(nn,nn.current),Mt(Wn,t),ri===null&&(ri=t)):xa()}function xa(){Mt(nn,nn.current),Mt(Wn,Wn.current)}function Yn(t){J(Wn),ri===t&&(ri=null),J(nn)}var nn=N(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lf(a)||Of(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,ce=null,Be=null,rn=null,fl=!1,Vs=!1,ss=!1,dl=0,to=0,ks=null,ux=0;function Je(){throw Error(s(321))}function Ru(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function Cu(t,n,a,r,c,f){return Vi=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?pm:ku,ss=!1,f=a(r,c),ss=!1,Vs&&(f=Lp(n,a,r,c)),Np(t),f}function Np(t){z.H=io;var n=Be!==null&&Be.next!==null;if(Vi=0,rn=Be=ce=null,fl=!1,to=0,ks=null,n)throw Error(s(300));t===null||on||(t=t.dependencies,t!==null&&nl(t)&&(on=!0))}function Lp(t,n,a,r){ce=t;var c=0;do{if(Vs&&(ks=null),to=0,Vs=!1,25<=c)throw Error(s(301));if(c+=1,rn=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=mm,f=n(a,r)}while(Vs);return f}function fx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(ce.flags|=1024),n}function wu(){var t=dl!==0;return dl=0,t}function Du(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uu(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}Vi=0,rn=Be=ce=null,Vs=!1,to=dl=0,ks=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?ce.memoizedState=rn=t:rn=rn.next=t,rn}function an(){if(Be===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=rn===null?ce.memoizedState:rn.next;if(n!==null)rn=n,Be=t;else{if(t===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},rn===null?ce.memoizedState=rn=t:rn=rn.next=t}return rn}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(t){var n=to;return to+=1,ks===null&&(ks=[]),t=Ep(ks,t,n),n=ce,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?pm:ku),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===L)return En(t)}throw Error(s(438,String(t)))}function Nu(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=C;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=an();return Lu(n,Be,t)}function Lu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=v=null,B=null,et=n,pt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(_e&xt)===xt:(Vi&xt)===xt){var nt=et.revertLane;if(nt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===Is&&(pt=!0);else if((Vi&nt)===nt){et=et.next,nt===Is&&(pt=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(T=B=xt,v=f):B=B.next=xt,ce.lanes|=nt,Ma|=nt;xt=et.action,ss&&a(f,xt),f=et.hasEagerState?et.eagerState:a(f,xt)}else nt={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(T=B=nt,v=f):B=B.next=nt,ce.lanes|=xt,Ma|=xt;et=et.next}while(et!==null&&et!==n);if(B===null?v=f:B.next=T,!jn(f,t.memoizedState)&&(on=!0,pt&&(a=Bs,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ou(t){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);jn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Op(t,n,a){var r=ce,c=an(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!jn((Be||c).memoizedState,a);if(v&&(c.memoizedState=a,on=!0),c=c.queue,Iu(Ip.bind(null,r,c,t),[t]),c.getSnapshot!==n||v||rn!==null&&rn.memoizedState.tag&1){if(r.flags|=2048,Xs(9,{destroy:void 0},zp.bind(null,r,c,a,n),null),Ve===null)throw Error(s(349));f||(Vi&127)!==0||Pp(r,n,a)}return a}function Pp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=hl(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function zp(t,n,a,r){n.value=a,n.getSnapshot=r,Bp(n)&&Fp(t)}function Ip(t,n,a){return a(function(){Bp(n)&&Fp(t)})}function Bp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Fp(t){var n=Ka(t,2);n!==null&&Vn(n,t,2)}function Pu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),ss){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function Hp(t,n,a,r){return t.baseState=a,Lu(t,Be,typeof r=="function"?r:ki)}function dx(t,n,a,r,c){if(vl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Gp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=z.T,v={};z.T=v;try{var T=a(c,r),B=z.S;B!==null&&B(v,T),Vp(t,n,T)}catch(et){zu(t,n,et)}finally{f!==null&&v.types!==null&&(f.types=v.types),z.T=f}}else try{f=a(c,r),Vp(t,n,f)}catch(et){zu(t,n,et)}}function Vp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){kp(t,n,r)},function(r){return zu(t,n,r)}):kp(t,n,a)}function kp(t,n,a){n.status="fulfilled",n.value=a,Xp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Gp(t,a)))}function zu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Xp(n),n=n.next;while(n!==r)}t.action=null}function Xp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function jp(t,n){return n}function qp(t,n){if(Se){var a=Ve.formState;if(a!==null){t:{var r=ce;if(Se){if(je){e:{for(var c=je,f=si;c.nodeType!==8;){if(!f){c=null;break e}if(c=oi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=oi(c.nextSibling),r=c.data==="F!";break t}}ha(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jp,lastRenderedState:n},a.queue=r,a=fm.bind(null,ce,r),r.dispatch=a,r=Pu(!1),f=Vu.bind(null,ce,!1,r.queue),r=Nn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=dx.bind(null,ce,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Wp(t){var n=an();return Yp(n,Be,t)}function Yp(t,n,a){if(n=Lu(t,n,jp)[0],t=ml(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=eo(n)}catch(v){throw v===Fs?sl:v}else r=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Xs(9,{destroy:void 0},hx.bind(null,c,a),null)),[r,f,t]}function hx(t,n){t.action=n}function Zp(t){var n=an(),a=Be;if(a!==null)return Yp(n,a,t);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Xs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ce.updateQueue,n===null&&(n=hl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Kp(){return an().memoizedState}function gl(t,n,a,r){var c=Nn();ce.flags|=t,c.memoizedState=Xs(1|n,{destroy:void 0},a,r===void 0?null:r)}function _l(t,n,a,r){var c=an();r=r===void 0?null:r;var f=c.memoizedState.inst;Be!==null&&r!==null&&Ru(r,Be.memoizedState.deps)?c.memoizedState=Xs(n,f,a,r):(ce.flags|=t,c.memoizedState=Xs(1|n,f,a,r))}function Qp(t,n){gl(8390656,8,t,n)}function Iu(t,n){_l(2048,8,t,n)}function px(t){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=hl(),ce.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Jp(t){var n=an().memoizedState;return px({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function $p(t,n){return _l(4,2,t,n)}function tm(t,n){return _l(4,4,t,n)}function em(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function nm(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,em.bind(null,n,t),a)}function Bu(){}function im(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ru(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function am(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ru(n,r[1]))return r[0];if(r=t(),ss){It(!0);try{t()}finally{It(!1)}}return a.memoizedState=[r,n],r}function Fu(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sg(),ce.lanes|=t,Ma|=t,a)}function sm(t,n,a,r){return jn(a,n)?a:Gs.current!==null?(t=Fu(t,a,r),jn(t,n)||(on=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(_e&261930)===0?(on=!0,t.memoizedState=a):(t=sg(),ce.lanes|=t,Ma|=t,n)}function rm(t,n,a,r,c){var f=Q.p;Q.p=f!==0&&8>f?f:8;var v=z.T,T={};z.T=T,Vu(t,!1,n,a);try{var B=c(),et=z.S;if(et!==null&&et(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=cx(B,r);no(t,n,pt,Qn(t))}else no(t,n,r,Qn(t))}catch(xt){no(t,n,{then:function(){},status:"rejected",reason:xt},Qn())}finally{Q.p=f,v!==null&&T.types!==null&&(v.types=T.types),z.T=v}}function mx(){}function Hu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=om(t).queue;rm(t,c,n,Z,a===null?mx:function(){return lm(t),a(r)})}function om(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function lm(t){var n=om(t);n.next===null&&(n=t.alternate.memoizedState),no(t,n.next.queue,{},Qn())}function Gu(){return En(yo)}function cm(){return an().memoizedState}function um(){return an().memoizedState}function gx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=ga(a);var r=_a(n,t,a);r!==null&&(Vn(r,n,a),Qr(r,n,a)),n={cache:gu()},t.payload=n;return}n=n.return}}function _x(t,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?dm(n,a):(a=su(t,n,a,r),a!==null&&(Vn(a,t,r),hm(a,n,r)))}function fm(t,n,a){var r=Qn();no(t,n,a,r)}function no(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))dm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,jn(T,v))return Jo(t,n,c,0),Ve===null&&Qo(),!1}catch{}finally{}if(a=su(t,n,c,r),a!==null)return Vn(a,t,r),hm(a,n,r),!0}return!1}function Vu(t,n,a,r){if(r={lane:2,revertLane:Sf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(s(479))}else n=su(t,a,r,2),n!==null&&Vn(n,t,2)}function vl(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function dm(t,n){Vs=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function hm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Nr(t,a)}}var io={readContext:En,use:pl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};io.useEffectEvent=Je;var pm={readContext:En,use:pl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:Qp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,em.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var r=t();if(ss){It(!0);try{t()}finally{It(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Nn();if(a!==void 0){var c=a(n);if(ss){It(!0);try{a(n)}finally{It(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=_x.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Pu(t);var n=t.queue,a=fm.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Bu,useDeferredValue:function(t,n){var a=Nn();return Fu(a,t,n)},useTransition:function(){var t=Pu(!1);return t=rm.bind(null,ce,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ce,c=Nn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(_e&127)!==0||Pp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Qp(Ip.bind(null,r,f,t),[t]),r.flags|=2048,Xs(9,{destroy:void 0},zp.bind(null,r,f,a,n),null),a},useId:function(){var t=Nn(),n=Ve.identifierPrefix;if(Se){var a=Ci,r=Ri;a=(r&~(1<<32-ee(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ux++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gu,useFormState:qp,useActionState:qp,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vu.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nu,useCacheRefresh:function(){return Nn().memoizedState=gx.bind(null,ce)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ku={readContext:En,use:pl,useCallback:im,useContext:En,useEffect:Iu,useImperativeHandle:nm,useInsertionEffect:$p,useLayoutEffect:tm,useMemo:am,useReducer:ml,useRef:Kp,useState:function(){return ml(ki)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=an();return sm(a,Be.memoizedState,t,n)},useTransition:function(){var t=ml(ki)[0],n=an().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Op,useId:cm,useHostTransitionStatus:Gu,useFormState:Wp,useActionState:Wp,useOptimistic:function(t,n){var a=an();return Hp(a,Be,t,n)},useMemoCache:Nu,useCacheRefresh:um};ku.useEffectEvent=Jp;var mm={readContext:En,use:pl,useCallback:im,useContext:En,useEffect:Iu,useImperativeHandle:nm,useInsertionEffect:$p,useLayoutEffect:tm,useMemo:am,useReducer:Ou,useRef:Kp,useState:function(){return Ou(ki)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=an();return Be===null?Fu(a,t,n):sm(a,Be.memoizedState,t,n)},useTransition:function(){var t=Ou(ki)[0],n=an().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Op,useId:cm,useHostTransitionStatus:Gu,useFormState:Zp,useActionState:Zp,useOptimistic:function(t,n){var a=an();return Be!==null?Hp(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:um};mm.useEffectEvent=Jp;function Xu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ju={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=ga(r);c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,r),n!==null&&(Vn(n,t,r),Qr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=ga(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,r),n!==null&&(Vn(n,t,r),Qr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),r=ga(a);r.tag=2,n!=null&&(r.callback=n),n=_a(t,r,a),n!==null&&(Vn(n,t,a),Qr(n,t,a))}};function gm(t,n,a,r,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!kr(a,r)||!kr(c,f):!0}function _m(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ju.enqueueReplaceState(n,n.state,null)}function rs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function vm(t){Ko(t)}function xm(t){console.error(t)}function ym(t){Ko(t)}function xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Sm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qu(t,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(t,n)},a}function Mm(t){return t=ga(t),t.tag=3,t}function Em(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Sm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Sm(n,a,r),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function vx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,c,!0),a=Wn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Ul():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),vf(t,r,c)),!1;case 22:return a.flags|=65536,r===rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),vf(t,r,c)),!1}throw Error(s(435,a.tag))}return vf(t,r,c),Ul(),!1}if(Se)return n=Wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==fu&&(t=Error(s(422),{cause:r}),qr(ni(t,a)))):(r!==fu&&(n=Error(s(423),{cause:r}),qr(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ni(r,a),c=qu(t.stateNode,r,c),Mu(t,c),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:r});if(f=ni(f,a),fo===null?fo=[f]:fo.push(f),$e!==4&&($e=2),n===null)return!0;r=ni(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=qu(a.stateNode,r,t),Mu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Mm(c),Em(c,t,a,r),Mu(a,c),!1}a=a.return}while(a!==null);return!1}var Wu=Error(s(461)),on=!1;function bn(t,n,a,r){n.child=t===null?Rp(n,null,a,r):as(n,t.child,a,r)}function bm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return ts(n),r=Cu(t,n,a,v,f,c),T=wu(),t!==null&&!on?(Du(t,n,c),Xi(t,n,c)):(Se&&T&&cu(n),n.flags|=1,bn(t,n,r,c),n.child)}function Tm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Am(t,n,f,r,c)):(t=tl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ef(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:kr,a(v,r)&&t.ref===n.ref)return Xi(t,n,c)}return n.flags|=1,t=Bi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Am(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(kr(f,r)&&t.ref===n.ref)if(on=!1,n.pendingProps=r=f,ef(t,c))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,Xi(t,n,c)}return Yu(t,n,a,r,c)}function Rm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Cm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?Dp(n,f):bu(),Up(n);else return r=n.lanes=536870912,Cm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(al(n,f.cachePool),Dp(n,f),xa(),n.memoizedState=null):(t!==null&&al(n,null),bu(),xa());return bn(t,n,c,a),n.child}function ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Cm(t,n,a,r,c){var f=vu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),bu(),Up(n),t!==null&&zs(t,n,r,!0),n.childLanes=c,null}function yl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function wm(t,n,a){return as(n,t.child,null,a),t=yl(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function xx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=yl(n,r),n.lanes=536870912,ao(null,t);if(Au(n),(t=je)?(t=Gg(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=dp(t),a.return=n,n.child=a,Mn=n,je=null)):t=null,t===null)throw ha(n);return n.lanes=536870912,null}return yl(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Au(n),c)if(n.flags&256)n.flags&=-257,n=wm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(on||zs(t,n,a,!1),c=(a&t.childLanes)!==0,on||c){if(r=Ve,r!==null&&(v=Ai(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ka(t,v),Vn(r,t,v),Wu;Ul(),n=wm(t,n,a)}else t=f.treeContext,je=oi(v.nextSibling),Mn=n,Se=!0,da=null,si=!1,t!==null&&mp(n,t),n=yl(n,r),n.flags|=4096;return n}return t=Bi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yu(t,n,a,r,c){return ts(n),a=Cu(t,n,a,r,void 0,c),r=wu(),t!==null&&!on?(Du(t,n,c),Xi(t,n,c)):(Se&&r&&cu(n),n.flags|=1,bn(t,n,a,c),n.child)}function Dm(t,n,a,r,c,f){return ts(n),n.updateQueue=null,a=Lp(n,r,a,c),Np(t),r=wu(),t!==null&&!on?(Du(t,n,f),Xi(t,n,f)):(Se&&r&&cu(n),n.flags|=1,bn(t,n,a,f),n.child)}function Um(t,n,a,r,c){if(ts(n),n.stateNode===null){var f=Ns,v=a.contextType;typeof v=="object"&&v!==null&&(f=En(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},yu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?En(v):Ns,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Xu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&ju.enqueueReplaceState(f,f.state,null),$r(n,r,f,c),Jr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=rs(a,T);f.props=B;var et=f.context,pt=a.contextType;v=Ns,typeof pt=="object"&&pt!==null&&(v=En(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||et!==v)&&_m(n,f,r,v),ma=!1;var nt=n.memoizedState;f.state=nt,$r(n,r,f,c),Jr(),et=n.memoizedState,T||nt!==et||ma?(typeof xt=="function"&&(Xu(n,a,xt,r),et=n.memoizedState),(B=ma||gm(n,a,B,r,nt,et,v))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=et),f.props=r,f.state=et,f.context=v,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Su(t,n),v=n.memoizedProps,pt=rs(a,v),f.props=pt,xt=n.pendingProps,nt=f.context,et=a.contextType,B=Ns,typeof et=="object"&&et!==null&&(B=En(et)),T=a.getDerivedStateFromProps,(et=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xt||nt!==B)&&_m(n,f,r,B),ma=!1,nt=n.memoizedState,f.state=nt,$r(n,r,f,c),Jr();var ot=n.memoizedState;v!==xt||nt!==ot||ma||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof T=="function"&&(Xu(n,a,T,r),ot=n.memoizedState),(pt=ma||gm(n,a,pt,r,nt,ot,B)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=B,r=pt):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Sl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=as(n,t.child,null,c),n.child=as(n,null,a,c)):bn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Xi(t,n,c),t}function Nm(t,n,a,r){return Ja(),n.flags|=256,bn(t,n,a,r),n.child}var Zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ku(t){return{baseLanes:t,cachePool:Sp()}}function Qu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Lm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?va(n):xa(),(t=je)?(t=Gg(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=dp(t),a.return=n,n.child=a,Mn=n,je=null)):t=null,t===null)throw ha(n);return Of(t)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,c?(xa(),c=n.mode,T=Ml({mode:"hidden",children:T},c),r=Qa(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=Ku(a),r.childLanes=Qu(t,v,a),n.memoizedState=Zu,ao(null,r)):(va(n),Ju(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=$u(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),T=r.fallback,c=n.mode,r=Ml({mode:"visible",children:r.children},c),T=Qa(T,c,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,as(n,t.child,null,a),r=n.child,r.memoizedState=Ku(a),r.childLanes=Qu(t,v,a),n.memoizedState=Zu,n=ao(null,r));else if(va(n),Of(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var et=v.dgst;v=et,r=Error(s(419)),r.stack="",r.digest=v,qr({value:r,source:null,stack:null}),n=$u(t,n,a)}else if(on||zs(t,n,a,!1),v=(a&t.childLanes)!==0,on||v){if(v=Ve,v!==null&&(r=Ai(v,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,Ka(t,r),Vn(v,t,r),Wu;Lf(T)||Ul(),n=$u(t,n,a)}else Lf(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,je=oi(T.nextSibling),Mn=n,Se=!0,da=null,si=!1,t!==null&&mp(n,t),n=Ju(n,r.children),n.flags|=4096);return n}return c?(xa(),T=r.fallback,c=n.mode,B=t.child,et=B.sibling,r=Bi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,et!==null?T=Bi(et,T):(T=Qa(T,c,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,ao(null,r),r=n.child,T=t.child.memoizedState,T===null?T=Ku(a):(c=T.cachePool,c!==null?(B=sn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Sp(),T={baseLanes:T.baseLanes|a,cachePool:c}),r.memoizedState=T,r.childLanes=Qu(t,v,a),n.memoizedState=Zu,ao(t.child,r)):(va(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Ju(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function $u(t,n,a){return as(n,t.child,null,a),t=Ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Om(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),pu(t.return,n,a)}function tf(t,n,a,r,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function Pm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var v=nn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,Mt(nn,v),bn(t,n,r,a),r=Se?jr:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Om(t,a,n);else if(t.tag===19)Om(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),tf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}tf(n,!0,a,null,f,r);break;case"together":tf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(zs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function yx(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),pa(n,sn,t.memoizedState.cache),Ja();break;case 27:case 5:Yt(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Au(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Lm(t,n,a):(va(n),t=Xi(t,n,a),t!==null?t.sibling:null);va(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(zs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Pm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(nn,nn.current),r)break;return null;case 22:return n.lanes=0,Rm(t,n,a,n.pendingProps);case 24:pa(n,sn,t.memoizedState.cache)}return Xi(t,n,a)}function zm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!ef(t,a)&&(n.flags&128)===0)return on=!1,yx(t,n,a);on=(t.flags&131072)!==0}else on=!1,Se&&(n.flags&1048576)!==0&&pp(n,jr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ns(n.elementType),n.type=t,typeof t=="function")ru(t)?(r=rs(t,r),n.tag=1,n=Um(null,n,t,r,a)):(n.tag=0,n=Yu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=bm(null,n,t,r,a);break t}else if(c===O){n.tag=14,n=Tm(null,n,t,r,a);break t}}throw n=_t(t)||t,Error(s(306,n,""))}}return n;case 0:return Yu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=rs(r,n.pendingProps),Um(t,n,r,c,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Su(t,n),$r(n,r,null,a);var v=n.memoizedState;if(r=v.cache,pa(n,sn,r),r!==f.cache&&mu(n,[sn],a,!0),Jr(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Nm(t,n,r,a);break t}else if(r!==c){c=ni(Error(s(424)),n),qr(c),n=Nm(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=oi(t.firstChild),Mn=n,Se=!0,da=null,si=!0,a=Rp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),r===c){n=Xi(t,n,a);break t}bn(t,n,r,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=Wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=Bl(bt.current).createElement(a),r[Ke]=n,r[yn]=t,Tn(r,a,t),k(r),n.stateNode=r):n.memoizedState=Wg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Yt(n),t===null&&Se&&(r=n.stateNode=Xg(n.type,n.pendingProps,bt.current),Mn=n,si=!0,c=je,Ra(n.type)?(Pf=c,je=oi(r.firstChild)):je=c),bn(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=je)&&(r=Kx(r,n.type,n.pendingProps,si),r!==null?(n.stateNode=r,Mn=n,je=oi(r.firstChild),si=!1,c=!0):c=!1),c||ha(n)),Yt(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,Df(c,f)?r=null:v!==null&&Df(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Cu(t,n,fx,null,null,a),yo._currentValue=c),Sl(t,n),bn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=je)&&(a=Qx(a,n.pendingProps,si),a!==null?(n.stateNode=a,Mn=n,je=null,t=!0):t=!1),t||ha(n)),null;case 13:return Lm(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=as(n,null,r,a):bn(t,n,r,a),n.child;case 11:return bm(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),bn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ts(n),c=En(c),r=r(c),n.flags|=1,bn(t,n,r,a),n.child;case 14:return Tm(t,n,n.type,n.pendingProps,a);case 15:return Am(t,n,n.type,n.pendingProps,a);case 19:return Pm(t,n,a);case 31:return xx(t,n,a);case 22:return Rm(t,n,a,n.pendingProps);case 24:return ts(n),r=En(sn),t===null?(c=vu(),c===null&&(c=Ve,f=gu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},yu(n),pa(n,sn,c)):((t.lanes&a)!==0&&(Su(t,n),$r(n,null,null,a),Jr()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,sn,r)):(r=f.cache,pa(n,sn,r),r!==c.cache&&mu(n,[sn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ji(t){t.flags|=4}function nf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(cg())t.flags|=8192;else throw is=rl,xu}else t.flags&=-16777217}function Im(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Jg(n))if(cg())t.flags|=8192;else throw is=rl,xu}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?un():536870912,t.lanes|=n,Ys|=n)}function so(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Sx(t,n,a){var r=n.pendingProps;switch(uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Gi(sn),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ps(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ji(n),f!==null?(qe(n),Im(n,f)):(qe(n),nf(n,c,null,r,a))):f?f!==t.memoizedState?(ji(n),qe(n),Im(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ji(n),qe(n),nf(n,c,t,r,a)),null;case 27:if(Ne(n),a=bt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}t=Y.current,Ps(n)?gp(n):(t=Xg(c,r,a),n.stateNode=t,ji(n))}return qe(n),null;case 5:if(Ne(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=Y.current,Ps(n))gp(n);else{var v=Bl(bt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}f[Ke]=n,f[yn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Tn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ji(n)}}return qe(n),nf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=bt.current,Ps(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Mn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Ke]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Lg(t.nodeValue,a)),t||ha(n,!0)}else t=Bl(t).createTextNode(r),t[Ke]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ps(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ke]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ps(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ke]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),qe(n),null);case 4:return Wt(),t===null&&Tf(n.stateNode.containerInfo),qe(n),null;case 10:return Gi(n.type),qe(n),null;case 19:if(J(nn),r=n.memoizedState,r===null)return qe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)so(r,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,so(r,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)fp(a,t),a=a.sibling;return Mt(nn,nn.current&1|2),Se&&Fi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&ht()>Cl&&(n.flags|=128,c=!0,so(r,!1),n.lanes=4194304)}else{if(!c)if(t=ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),so(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return qe(n),null}else 2*ht()-r.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,c=!0,so(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ht(),t.sibling=null,a=nn.current,Mt(nn,c?a&1|2:a&1),Se&&Fi(n,r.treeForkCount),t):(qe(n),null);case 22:case 23:return Yn(n),Tu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&J(es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Mx(t,n){switch(uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(sn),Wt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(nn),null;case 4:return Wt(),null;case 10:return Gi(n.type),null;case 22:case 23:return Yn(n),Tu(),t!==null&&J(es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(sn),null;case 25:return null;default:return null}}function Bm(t,n){switch(uu(n),n.tag){case 3:Gi(sn),Wt();break;case 26:case 27:case 5:Ne(n);break;case 4:Wt();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:J(nn);break;case 10:Gi(n.type);break;case 22:case 23:Yn(n),Tu(),t!==null&&J(es);break;case 24:Gi(sn)}}function ro(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(T){Pe(n,n.return,T)}}function ya(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var B=a,et=T;try{et()}catch(pt){Pe(c,B,pt)}}}r=r.next}while(r!==f)}}catch(pt){Pe(n,n.return,pt)}}function Fm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{wp(n,a)}catch(r){Pe(t,t.return,r)}}}function Hm(t,n,a){a.props=rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Pe(t,n,r)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Pe(t,n,c)}}function wi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function Gm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function af(t,n,a){try{var r=t.stateNode;Xx(r,t.type,a,n),r[yn]=n}catch(c){Pe(t,t.return,c)}}function Vm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function sf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(rf(t,n,a),t=t.sibling;t!==null;)rf(t,n,a),t=t.sibling}function bl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(bl(t,n,a),t=t.sibling;t!==null;)bl(t,n,a),t=t.sibling}function km(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,r,a),n[Ke]=t,n[yn]=a}catch(f){Pe(t,t.return,f)}}var qi=!1,ln=!1,of=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Ex(t,n){if(t=t.containerInfo,Cf=jl,t=np(t),$c(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,B=-1,et=0,pt=0,xt=t,nt=null;e:for(;;){for(var ot;xt!==a||c!==0&&xt.nodeType!==3||(T=v+c),xt!==f||r!==0&&xt.nodeType!==3||(B=v+r),xt.nodeType===3&&(v+=xt.nodeValue.length),(ot=xt.firstChild)!==null;)nt=xt,xt=ot;for(;;){if(xt===t)break e;if(nt===a&&++et===c&&(T=v),nt===f&&++pt===r&&(B=v),(ot=xt.nextSibling)!==null)break;xt=nt,nt=xt.parentNode}xt=ot}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:t,selectionRange:a},jl=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=rs(a.type,c);t=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch($t){Pe(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function jm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),r&4&&ro(5,a);break;case 1:if(Yi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Pe(a,a.return,v)}else{var c=rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Pe(a,a.return,v)}}r&64&&Fm(a),r&512&&oo(a,a.return);break;case 3:if(Yi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{wp(t,n)}catch(v){Pe(a,a.return,v)}}break;case 27:n===null&&r&4&&km(a);case 26:case 5:Yi(t,a),n===null&&r&4&&Gm(a),r&512&&oo(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),r&4&&Ym(t,a);break;case 13:Yi(t,a),r&4&&Zm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Nx.bind(null,a),Jx(t,a))));break;case 22:if(r=a.memoizedState!==null||qi,!r){n=n!==null&&n.memoizedState!==null||ln,c=qi;var f=ln;qi=r,(ln=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):Yi(t,a),qi=c,ln=f}break;case 30:break;default:Yi(t,a)}}function qm(t){var n=t.alternate;n!==null&&(t.alternate=null,qm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Pr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Bn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Wm(t,n,a),a=a.sibling}function Wm(t,n,a){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:ln||wi(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||wi(a,n);var r=Ye,c=Bn;Ra(a.type)&&(Ye=a.stateNode,Bn=!1),Wi(t,n,a),_o(a.stateNode),Ye=r,Bn=c;break;case 5:ln||wi(a,n);case 6:if(r=Ye,c=Bn,Ye=null,Wi(t,n,a),Ye=r,Bn=c,Ye!==null)if(Bn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ye!==null&&(Bn?(t=Ye,Fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),nr(t)):Fg(Ye,a.stateNode));break;case 4:r=Ye,c=Bn,Ye=a.stateNode.containerInfo,Bn=!0,Wi(t,n,a),Ye=r,Bn=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),ln||ya(4,a,n),Wi(t,n,a);break;case 1:ln||(wi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Hm(a,n,r)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:ln=(r=ln)||a.memoizedState!==null,Wi(t,n,a),ln=r;break;default:Wi(t,n,a)}}function Ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{nr(t)}catch(a){Pe(n,n.return,a)}}}function Zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nr(t)}catch(a){Pe(n,n.return,a)}}function bx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Xm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Xm),n;default:throw Error(s(435,t.tag))}}function Tl(t,n){var a=bx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Lx.bind(null,t,r);r.then(c,c)}})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Ra(T.type)){Ye=T.stateNode,Bn=!1;break t}break;case 5:Ye=T.stateNode,Bn=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(Ye===null)throw Error(s(160));Wm(f,v,c),Ye=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Km(n,t),n=n.sibling}var gi=null;function Km(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Hn(t),r&4&&(ya(3,t,t.return),ro(3,t),ya(5,t,t.return));break;case 1:Fn(n,t),Hn(t),r&512&&(ln||a===null||wi(a,a.return)),r&64&&qi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=gi;if(Fn(n,t),Hn(t),r&512&&(ln||a===null||wi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[qa]||f[Ke]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,r,a),f[Ke]=t,k(f),r=f;break t;case"link":var v=Kg("link","href",c).get(r+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;case"meta":if(v=Kg("meta","content",c).get(r+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Ke]=t,k(f),r=f}t.stateNode=r}else Qg(c,t.type,t.stateNode);else t.stateNode=Zg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Qg(c,t.type,t.stateNode):Zg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&af(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Hn(t),r&512&&(ln||a===null||wi(a,a.return)),a!==null&&r&4&&af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Hn(t),r&512&&(ln||a===null||wi(a,a.return)),t.flags&32){c=t.stateNode;try{zn(c,"")}catch(Vt){Pe(t,t.return,Vt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,af(t,c,a!==null?a.memoizedProps:c)),r&1024&&(of=!0);break;case 6:if(Fn(n,t),Hn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Vt){Pe(t,t.return,Vt)}}break;case 3:if(Gl=null,c=gi,gi=Fl(n.containerInfo),Fn(n,t),gi=c,Hn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{nr(n.containerInfo)}catch(Vt){Pe(t,t.return,Vt)}of&&(of=!1,Qm(t));break;case 4:r=gi,gi=Fl(t.stateNode.containerInfo),Fn(n,t),Hn(t),gi=r;break;case 12:Fn(n,t),Hn(t);break;case 31:Fn(n,t),Hn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tl(t,r)));break;case 13:Fn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=ht()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tl(t,r)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,et=qi,pt=ln;if(qi=et||c,ln=pt||B,Fn(n,t),ln=pt,qi=et,Hn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||qi||ln||os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var xt=B.memoizedProps.style,nt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Vt){Pe(B,B.return,Vt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Vt){Pe(B,B.return,Vt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;c?Hg(ot,!0):Hg(B.stateNode,!1)}catch(Vt){Pe(B,B.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Tl(t,a))));break;case 19:Fn(n,t),Hn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tl(t,r)));break;case 30:break;case 21:break;default:Fn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Vm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=sf(t);bl(t,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(zn(v,""),a.flags&=-33);var T=sf(t);bl(t,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,et=sf(t);rf(t,et,B);break;default:throw Error(s(161))}}catch(pt){Pe(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Qm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Qm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jm(t,n.alternate,n),n=n.sibling}function os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),os(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hm(n,n.return,a),os(n);break;case 27:_o(n.stateNode);case 26:case 5:wi(n,n.return),os(n);break;case 22:n.memoizedState===null&&os(n);break;case 30:os(n);break;default:os(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),ro(4,f);break;case 1:if(Zi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(et){Pe(r,r.return,et)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Cp(B[c],T)}catch(et){Pe(r,r.return,et)}}a&&v&64&&Fm(f),oo(f,f.return);break;case 27:km(f);case 26:case 5:Zi(c,f,a),a&&r===null&&v&4&&Gm(f),oo(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&v&4&&Ym(c,f);break;case 13:Zi(c,f,a),a&&v&4&&Zm(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),oo(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Wr(a))}function cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wr(t))}function _i(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jm(t,n,a,r),n=n.sibling}function Jm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,r),c&2048&&ro(9,n);break;case 1:_i(t,n,a,r);break;case 3:_i(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wr(t)));break;case 12:if(c&2048){_i(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Pe(n,n.return,B)}}else _i(t,n,a,r);break;case 31:_i(t,n,a,r);break;case 13:_i(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?_i(t,n,a,r):lo(t,n):f._visibility&2?_i(t,n,a,r):(f._visibility|=2,js(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&lf(v,n);break;case 24:_i(t,n,a,r),c&2048&&cf(n.alternate,n);break;default:_i(t,n,a,r)}}function js(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,B=r,et=v.flags;switch(v.tag){case 0:case 11:case 15:js(f,v,T,B,c),ro(8,v);break;case 23:break;case 22:var pt=v.stateNode;v.memoizedState!==null?pt._visibility&2?js(f,v,T,B,c):lo(f,v):(pt._visibility|=2,js(f,v,T,B,c)),c&&et&2048&&lf(v.alternate,v);break;case 24:js(f,v,T,B,c),c&&et&2048&&cf(v.alternate,v);break;default:js(f,v,T,B,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:lo(a,r),c&2048&&lf(r.alternate,r);break;case 24:lo(a,r),c&2048&&cf(r.alternate,r);break;default:lo(a,r)}n=n.sibling}}var co=8192;function qs(t,n,a){if(t.subtreeFlags&co)for(t=t.child;t!==null;)$m(t,n,a),t=t.sibling}function $m(t,n,a){switch(t.tag){case 26:qs(t,n,a),t.flags&co&&t.memoizedState!==null&&uy(a,gi,t.memoizedState,t.memoizedProps);break;case 5:qs(t,n,a);break;case 3:case 4:var r=gi;gi=Fl(t.stateNode.containerInfo),qs(t,n,a),gi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=co,co=16777216,qs(t,n,a),co=r):qs(t,n,a));break;default:qs(t,n,a)}}function tg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];gn=r,ng(r,t)}tg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)eg(t),t=t.sibling}function eg(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&ya(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):uo(t);break;default:uo(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];gn=r,ng(r,t)}tg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function ng(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Wr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,gn=r;else t:for(a=t;gn!==null;){r=gn;var c=r.sibling,f=r.return;if(qm(r),r===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var Tx={getCacheForType:function(t){var n=En(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return En(sn).controller.signal}},Ax=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,pe=null,_e=0,Oe=0,Zn=null,Sa=!1,Ws=!1,uf=!1,Ki=0,$e=0,Ma=0,ls=0,ff=0,Kn=0,Ys=0,fo=null,Gn=null,df=!1,Rl=0,ig=0,Cl=1/0,wl=null,Ea=null,dn=0,ba=null,Zs=null,Qi=0,hf=0,pf=null,ag=null,ho=0,mf=null;function Qn(){return(De&2)!==0&&_e!==0?_e&-_e:z.T!==null?Sf():Lr()}function sg(){if(Kn===0)if((_e&536870912)===0||Se){var t=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),Kn=t}else Kn=536870912;return t=Wn.current,t!==null&&(t.flags|=32),Kn}function Vn(t,n,a){(t===Ve&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Ks(t,0),Ta(t,_e,Kn,!1)),xn(t,a),((De&2)===0||t!==Ve)&&(t===Ve&&((De&2)===0&&(ls|=a),$e===4&&Ta(t,_e,Kn,!1)),Di(t))}function rg(t,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||ie(t,n),c=r?wx(t,n):_f(t,n,!0),f=r;do{if(c===0){Ws&&!r&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Rx(a)){c=_f(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;c=fo;var B=T.current.memoizedState.isDehydrated;if(B&&(Ks(T,v).flags|=256),v=_f(T,v,!1),v!==2){if(uf&&!B){T.errorRecoveryDisabledLanes|=f,ls|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){Ks(t,0),Ta(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ta(r,n,Kn,!Sa);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Rl+300-ht(),10<c)){if(Ta(r,n,Kn,!Sa),Nt(r,0,!0)!==0)break t;Qi=n,r.timeoutHandle=Ig(og.bind(null,r,a,Gn,wl,df,n,Kn,ls,Ys,Sa,f,"Throttled",-0,0),c);break t}og(r,a,Gn,wl,df,n,Kn,ls,Ys,Sa,f,null,-0,0)}}break}while(!0);Di(t)}function og(t,n,a,r,c,f,v,T,B,et,pt,xt,nt,ot){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},$m(n,f,xt);var Vt=(f&62914560)===f?Rl-ht():(f&4194048)===f?ig-ht():0;if(Vt=fy(xt,Vt),Vt!==null){Qi=f,t.cancelPendingCommit=Vt(mg.bind(null,t,n,f,a,r,c,v,T,B,pt,xt,null,nt,ot)),Ta(t,f,v,!et);return}}mg(t,n,f,a,r,c,v,T,B)}function Rx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,r){n&=~ff,n&=~ls,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-ee(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&Ur(t,a,n)}function Dl(){return(De&6)===0?(po(0),!1):!0}function gf(){if(pe!==null){if(Oe===0)var t=pe.return;else t=pe,Hi=$a=null,Uu(t),Hs=null,Zr=0,t=pe;for(;t!==null;)Bm(t.alternate,t),t=t.return;pe=null}}function Ks(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Wx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,gf(),Ve=t,pe=a=Bi(t.current,null),_e=n,Oe=0,Zn=null,Sa=!1,Ws=ie(t,n),uf=!1,Ys=Kn=ff=ls=Ma=$e=0,Gn=fo=null,df=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-ee(r),f=1<<c;n|=t[c],r&=~f}return Ki=n,Qo(),a}function lg(t,n){ce=null,z.H=io,n===Fs||n===sl?(n=bp(),Oe=3):n===xu?(n=bp(),Oe=4):Oe=n===Wu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&($e=1,xl(t,ni(n,t.current)))}function cg(){var t=Wn.current;return t===null?!0:(_e&4194048)===_e?ri===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ri:!1}function ug(){var t=z.H;return z.H=io,t===null?io:t}function fg(){var t=z.A;return z.A=Tx,t}function Ul(){$e=4,Sa||(_e&4194048)!==_e&&Wn.current!==null||(Ws=!0),(Ma&134217727)===0&&(ls&134217727)===0||Ve===null||Ta(Ve,_e,Kn,!1)}function _f(t,n,a){var r=De;De|=2;var c=ug(),f=fg();(Ve!==t||_e!==n)&&(wl=null,Ks(t,n)),n=!1;var v=$e;t:do try{if(Oe!==0&&pe!==null){var T=pe,B=Zn;switch(Oe){case 8:gf(),v=6;break t;case 3:case 2:case 9:case 6:Wn.current===null&&(n=!0);var et=Oe;if(Oe=0,Zn=null,Qs(t,T,B,et),a&&Ws){v=0;break t}break;default:et=Oe,Oe=0,Zn=null,Qs(t,T,B,et)}}Cx(),v=$e;break}catch(pt){lg(t,pt)}while(!0);return n&&t.shellSuspendCounter++,Hi=$a=null,De=r,z.H=c,z.A=f,pe===null&&(Ve=null,_e=0,Qo()),v}function Cx(){for(;pe!==null;)dg(pe)}function wx(t,n){var a=De;De|=2;var r=ug(),c=fg();Ve!==t||_e!==n?(wl=null,Cl=ht()+500,Ks(t,n)):Ws=ie(t,n);t:do try{if(Oe!==0&&pe!==null){n=pe;var f=Zn;e:switch(Oe){case 1:Oe=0,Zn=null,Qs(t,n,f,1);break;case 2:case 9:if(Mp(f)){Oe=0,Zn=null,hg(n);break}n=function(){Oe!==2&&Oe!==9||Ve!==t||(Oe=7),Di(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Mp(f)?(Oe=0,Zn=null,hg(n)):(Oe=0,Zn=null,Qs(t,n,f,7));break;case 5:var v=null;switch(pe.tag){case 26:v=pe.memoizedState;case 5:case 27:var T=pe;if(v?Jg(v):T.stateNode.complete){Oe=0,Zn=null;var B=T.sibling;if(B!==null)pe=B;else{var et=T.return;et!==null?(pe=et,Nl(et)):pe=null}break e}}Oe=0,Zn=null,Qs(t,n,f,5);break;case 6:Oe=0,Zn=null,Qs(t,n,f,6);break;case 8:gf(),$e=6;break t;default:throw Error(s(462))}}Dx();break}catch(pt){lg(t,pt)}while(!0);return Hi=$a=null,z.H=r,z.A=c,De=a,pe!==null?0:(Ve=null,_e=0,Qo(),$e)}function Dx(){for(;pe!==null&&!E();)dg(pe)}function dg(t){var n=zm(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Nl(t):pe=n}function hg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Dm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Dm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Uu(n);default:Bm(a,n),n=pe=fp(n,Ki),n=zm(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Nl(t):pe=n}function Qs(t,n,a,r){Hi=$a=null,Uu(n),Hs=null,Zr=0;var c=n.return;try{if(vx(t,c,n,a,_e)){$e=1,xl(t,ni(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;$e=1,xl(t,ni(a,t.current)),pe=null;return}n.flags&32768?(Se||r===1?t=!0:Ws||(_e&536870912)!==0?t=!1:(Sa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Wn.current,r!==null&&r.tag===13&&(r.flags|=16384))),pg(n,t)):Nl(n)}function Nl(t){var n=t;do{if((n.flags&32768)!==0){pg(n,Sa);return}t=n.return;var a=Sx(n.alternate,n,Ki);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);$e===0&&($e=5)}function pg(t,n){do{var a=Mx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);$e=6,pe=null}function mg(t,n,a,r,c,f,v,T,B){t.cancelPendingCommit=null;do Ll();while(dn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=au,di(t,a,f,v,T,B),t===Ve&&(pe=Ve=null,_e=0),Zs=n,ba=t,Qi=a,hf=f,pf=c,ag=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ox(Ut,function(){return yg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=Q.p,Q.p=2,v=De,De|=4;try{Ex(t,n,a)}finally{De=v,Q.p=c,z.T=r}}dn=1,gg(),_g(),vg()}}function gg(){if(dn===1){dn=0;var t=ba,n=Zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=Q.p;Q.p=2;var c=De;De|=4;try{Km(n,t);var f=wf,v=np(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&ep(T.ownerDocument.documentElement,T)){if(B!==null&&$c(T)){var et=B.start,pt=B.end;if(pt===void 0&&(pt=et),"selectionStart"in T)T.selectionStart=et,T.selectionEnd=Math.min(pt,T.value.length);else{var xt=T.ownerDocument||document,nt=xt&&xt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Vt=T.textContent.length,$t=Math.min(B.start,Vt),He=B.end===void 0?$t:Math.min(B.end,Vt);!ot.extend&&$t>He&&(v=He,He=$t,$t=v);var K=tp(T,$t),V=tp(T,He);if(K&&V&&(ot.rangeCount!==1||ot.anchorNode!==K.node||ot.anchorOffset!==K.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var tt=xt.createRange();tt.setStart(K.node,K.offset),ot.removeAllRanges(),$t>He?(ot.addRange(tt),ot.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),ot.addRange(tt))}}}}for(xt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&xt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xt.length;T++){var gt=xt[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}jl=!!Cf,wf=Cf=null}finally{De=c,Q.p=r,z.T=a}}t.current=n,dn=2}}function _g(){if(dn===2){dn=0;var t=ba,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=Q.p;Q.p=2;var c=De;De|=4;try{jm(t,n.alternate,n)}finally{De=c,Q.p=r,z.T=a}}dn=3}}function vg(){if(dn===4||dn===3){dn=0,$();var t=ba,n=Zs,a=Qi,r=ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,Zs=ba=null,xg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),bs(a),n=n.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Zt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=Q.p,Q.p=2,z.T=null;try{for(var f=t.onRecoverableError,v=0;v<r.length;v++){var T=r[v];f(T.value,{componentStack:T.stack})}}finally{z.T=n,Q.p=c}}(Qi&3)!==0&&Ll(),Di(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===mf?ho++:(ho=0,mf=t):ho=0,po(0)}}function xg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Wr(n)))}function Ll(){return gg(),_g(),vg(),yg()}function yg(){if(dn!==5)return!1;var t=ba,n=hf;hf=0;var a=bs(Qi),r=z.T,c=Q.p;try{Q.p=32>a?32:a,z.T=null,a=pf,pf=null;var f=ba,v=Qi;if(dn=0,Zs=ba=null,Qi=0,(De&6)!==0)throw Error(s(331));var T=De;if(De|=4,eg(f.current),Jm(f,f.current,v,a),De=T,po(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Zt,f)}catch{}return!0}finally{Q.p=c,z.T=r,xg(t,n)}}function Sg(t,n,a){n=ni(a,n),n=qu(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(xn(t,2),Di(t))}function Pe(t,n,a){if(t.tag===3)Sg(t,t,a);else for(;n!==null;){if(n.tag===3){Sg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))){t=ni(a,t),a=Mm(2),r=_a(n,a,2),r!==null&&(Em(a,r,n,t),xn(r,2),Di(r));break}}n=n.return}}function vf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Ax;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(uf=!0,c.add(a),t=Ux.bind(null,t,n,a),n.then(t,t))}function Ux(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(_e&a)===a&&($e===4||$e===3&&(_e&62914560)===_e&&300>ht()-Rl?(De&2)===0&&Ks(t,0):ff|=a,Ys===_e&&(Ys=0)),Di(t)}function Mg(t,n){n===0&&(n=un()),t=Ka(t,n),t!==null&&(xn(t,n),Di(t))}function Nx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Mg(t,a)}function Lx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Mg(t,a)}function Ox(t,n){return zt(t,n)}var Ol=null,Js=null,xf=!1,Pl=!1,yf=!1,Aa=0;function Di(t){t!==Js&&t.next===null&&(Js===null?Ol=Js=t:Js=Js.next=t),Pl=!0,xf||(xf=!0,zx())}function po(t,n){if(!yf&&Pl){yf=!0;do for(var a=!1,r=Ol;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-ee(42|t)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ag(r,f))}else f=_e,f=Nt(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||ie(r,f)||(a=!0,Ag(r,f));r=r.next}while(a);yf=!1}}function Px(){Eg()}function Eg(){Pl=xf=!1;var t=0;Aa!==0&&qx()&&(t=Aa);for(var n=ht(),a=null,r=Ol;r!==null;){var c=r.next,f=bg(r,n);f===0?(r.next=null,a===null?Ol=c:a.next=c,c===null&&(Js=a)):(a=r,(t!==0||(f&3)!==0)&&(Pl=!0)),r=c}dn!==0&&dn!==5||po(t),Aa!==0&&(Aa=0)}function bg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-ee(f),T=1<<v,B=c[v];B===-1?((T&a)===0||(T&r)!==0)&&(c[v]=We(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ve,a=_e,a=Nt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ie(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&U(r),bs(a)){case 2:case 8:a=Xt;break;case 32:a=Ut;break;case 268435456:a=ge;break;default:a=Ut}return r=Tg.bind(null,t),a=zt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&U(r),t.callbackPriority=2,t.callbackNode=null,2}function Tg(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var r=_e;return r=Nt(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(rg(t,r,n),bg(t,ht()),t.callbackNode!=null&&t.callbackNode===a?Tg.bind(null,t):null)}function Ag(t,n){if(Ll())return null;rg(t,n,!0)}function zx(){Yx(function(){(De&6)!==0?zt(vt,Px):Eg()})}function Sf(){if(Aa===0){var t=Is;t===0&&(t=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Aa=t}return Aa}function Rg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function Cg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ix(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Rg((c[yn]||null).action),v=r.submitter;v&&(n=(n=v[yn]||null)?Rg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new Wo("action","action",null,r,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Aa!==0){var B=v?Cg(c,v):new FormData(c);Hu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=v?Cg(c,v):new FormData(c),Hu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Mf=0;Mf<iu.length;Mf++){var Ef=iu[Mf],Bx=Ef.toLowerCase(),Fx=Ef[0].toUpperCase()+Ef.slice(1);mi(Bx,"on"+Fx)}mi(sp,"onAnimationEnd"),mi(rp,"onAnimationIteration"),mi(op,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(ex,"onTransitionRun"),mi(nx,"onTransitionStart"),mi(ix,"onTransitionCancel"),mi(lp,"onTransitionEnd"),Bt("onMouseEnter",["mouseout","mouseover"]),Bt("onMouseLeave",["mouseout","mouseover"]),Bt("onPointerEnter",["pointerout","pointerover"]),Bt("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function wg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var T=r[v],B=T.instance,et=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=et;try{f(c)}catch(pt){Ko(pt)}c.currentTarget=null,f=B}else for(v=0;v<r.length;v++){if(T=r[v],B=T.instance,et=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=et;try{f(c)}catch(pt){Ko(pt)}c.currentTarget=null,f=B}}}}function me(t,n){var a=n[Or];a===void 0&&(a=n[Or]=new Set);var r=t+"__bubble";a.has(r)||(Dg(n,t,2,!1),a.add(r))}function bf(t,n,a){var r=0;n&&(r|=4),Dg(a,t,r,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Tf(t){if(!t[zl]){t[zl]=!0,Tt.forEach(function(a){a!=="selectionchange"&&(Hx.has(a)||bf(a,!1,t),bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,bf("selectionchange",!1,n))}}function Dg(t,n,a,r){switch(s0(n)){case 2:var c=py;break;case 8:c=my;break;default:c=Hf}a=c.bind(null,n,a,t),c=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Af(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=r.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=R(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){r=f=v;continue t}T=T.parentNode}}r=r.return}Ph(function(){var et=f,pt=Vc(a),xt=[];t:{var nt=cp.get(t);if(nt!==void 0){var ot=Wo,Vt=t;switch(t){case"keypress":if(jo(a)===0)break t;case"keydown":case"keyup":ot=Lv;break;case"focusin":Vt="focus",ot=Yc;break;case"focusout":Vt="blur",ot=Yc;break;case"beforeblur":case"afterblur":ot=Yc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=zv;break;case sp:case rp:case op:ot=bv;break;case lp:ot=Bv;break;case"scroll":case"scrollend":ot=xv;break;case"wheel":ot=Hv;break;case"copy":case"cut":case"paste":ot=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Hh;break;case"toggle":case"beforetoggle":ot=Vv}var $t=(n&4)!==0,He=!$t&&(t==="scroll"||t==="scrollend"),K=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var V=et,tt;V!==null;){var gt=V;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||K===null||(gt=zr(V,K),gt!=null&&$t.push(go(V,gt,tt))),He)break;V=V.return}0<$t.length&&(nt=new ot(nt,Vt,null,a,pt),xt.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==Gc&&(Vt=a.relatedTarget||a.fromElement)&&(R(Vt)||Vt[Pi]))break t;if((ot||nt)&&(nt=pt.window===pt?pt:(nt=pt.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=et,Vt=Vt?R(Vt):null,Vt!==null&&(He=u(Vt),$t=Vt.tag,Vt!==He||$t!==5&&$t!==27&&$t!==6)&&(Vt=null)):(ot=null,Vt=et),ot!==Vt)){if($t=Bh,gt="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($t=Hh,gt="onPointerLeave",K="onPointerEnter",V="pointer"),He=ot==null?nt:it(ot),tt=Vt==null?nt:it(Vt),nt=new $t(gt,V+"leave",ot,a,pt),nt.target=He,nt.relatedTarget=tt,gt=null,R(pt)===et&&($t=new $t(K,V+"enter",Vt,a,pt),$t.target=tt,$t.relatedTarget=He,gt=$t),He=gt,ot&&Vt)e:{for($t=Gx,K=ot,V=Vt,tt=0,gt=K;gt;gt=$t(gt))tt++;gt=0;for(var Qt=V;Qt;Qt=$t(Qt))gt++;for(;0<tt-gt;)K=$t(K),tt--;for(;0<gt-tt;)V=$t(V),gt--;for(;tt--;){if(K===V||V!==null&&K===V.alternate){$t=K;break e}K=$t(K),V=$t(V)}$t=null}else $t=null;ot!==null&&Ug(xt,nt,ot,$t,!1),Vt!==null&&He!==null&&Ug(xt,He,Vt,$t,!0)}}t:{if(nt=et?it(et):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var Re=Yh;else if(qh(nt))if(Zh)Re=Jv;else{Re=Kv;var kt=Zv}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?et&&Hc(et.elementType)&&(Re=Yh):Re=Qv;if(Re&&(Re=Re(t,et))){Wh(xt,Re,a,pt);break t}kt&&kt(t,nt,et),t==="focusout"&&et&&nt.type==="number"&&et.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(kt=et?it(et):window,t){case"focusin":(qh(kt)||kt.contentEditable==="true")&&(ws=kt,tu=et,Xr=null);break;case"focusout":Xr=tu=ws=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,ip(xt,a,pt);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":ip(xt,a,pt)}var ue;if(Kc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Cs?Xh(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Gh&&a.locale!=="ko"&&(Cs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Cs&&(ue=zh()):(ua=pt,jc="value"in ua?ua.value:ua.textContent,Cs=!0)),kt=Il(et,ve),0<kt.length&&(ve=new Fh(ve,t,null,a,pt),xt.push({event:ve,listeners:kt}),ue?ve.data=ue:(ue=jh(a),ue!==null&&(ve.data=ue)))),(ue=Xv?jv(t,a):qv(t,a))&&(ve=Il(et,"onBeforeInput"),0<ve.length&&(kt=new Fh("onBeforeInput","beforeinput",null,a,pt),xt.push({event:kt,listeners:ve}),kt.data=ue)),Ix(xt,t,et,a,pt)}wg(xt,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Il(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zr(t,a),c!=null&&r.unshift(go(t,c,f)),c=zr(t,n),c!=null&&r.push(go(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Gx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ug(t,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var T=a,B=T.alternate,et=T.stateNode;if(T=T.tag,B!==null&&B===r)break;T!==5&&T!==26&&T!==27||et===null||(B=et,c?(et=zr(a,f),et!=null&&v.unshift(go(a,et,B))):c||(et=zr(a,f),et!=null&&v.push(go(a,et,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Vx=/\r\n?/g,kx=/\u0000|\uFFFD/g;function Ng(t){return(typeof t=="string"?t:""+t).replace(Vx,`
`).replace(kx,"")}function Lg(t,n){return n=Ng(n),Ng(t)===n}function Fe(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||zn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&zn(t,""+r);break;case"className":Xe(t,"class",r);break;case"tabIndex":Xe(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,r);break;case"style":Lh(t,r,f);break;case"data":if(n!=="object"){Xe(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ko(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",c.name,c,null),Fe(t,n,"formEncType",c.formEncType,c,null),Fe(t,n,"formMethod",c.formMethod,c,null),Fe(t,n,"formTarget",c.formTarget,c,null)):(Fe(t,n,"encType",c.encType,c,null),Fe(t,n,"method",c.method,c,null),Fe(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ko(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=zi);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":me("beforetoggle",t),me("toggle",t),ye(t,"popover",r);break;case"xlinkActuate":Ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ae(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ae(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ae(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ae(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ye(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_v.get(a)||a,ye(t,a,r))}}function Rf(t,n,a,r,c,f){switch(a){case"style":Lh(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?zn(t,r):(typeof r=="number"||typeof r=="bigint")&&zn(t,""+r);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"onClick":r!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ye(t,a,r)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(t,n,f,v,a,null)}}c&&Fe(t,n,"srcSet",a.srcSet,a,null),r&&Fe(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var T=f=v=c=null,B=null,et=null;for(r in a)if(a.hasOwnProperty(r)){var pt=a[r];if(pt!=null)switch(r){case"name":c=pt;break;case"type":v=pt;break;case"checked":B=pt;break;case"defaultChecked":et=pt;break;case"value":f=pt;break;case"defaultValue":T=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Fe(t,n,r,pt,a,null)}}Un(t,f,T,B,et,v,c,!1);return;case"select":me("invalid",t),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:Fe(t,n,c,T,a,null)}n=f,a=v,t.multiple=!!r,n!=null?Qe(t,!!r,n,!1):a!=null&&Qe(t,!!r,a,!0);return;case"textarea":me("invalid",t),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Fe(t,n,v,T,a,null)}Ts(t,r,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Fe(t,n,B,r,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(r=0;r<mo.length;r++)me(mo[r],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(r=a[et],r!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(t,n,et,r,a,null)}return;default:if(Hc(n)){for(pt in a)a.hasOwnProperty(pt)&&(r=a[pt],r!==void 0&&Rf(t,n,pt,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Fe(t,n,T,r,a,null))}function Xx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,B=null,et=null,pt=null;for(ot in a){var xt=a[ot];if(a.hasOwnProperty(ot)&&xt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=xt;default:r.hasOwnProperty(ot)||Fe(t,n,ot,null,r,xt)}}for(var nt in r){var ot=r[nt];if(xt=a[nt],r.hasOwnProperty(nt)&&(ot!=null||xt!=null))switch(nt){case"type":f=ot;break;case"name":c=ot;break;case"checked":et=ot;break;case"defaultChecked":pt=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==xt&&Fe(t,n,nt,ot,r,xt)}}Ie(t,v,T,B,et,pt,f,c);return;case"select":ot=v=T=nt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:r.hasOwnProperty(f)||Fe(t,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==B&&Fe(t,n,c,f,r,B)}n=T,a=v,r=ot,nt!=null?Qe(t,!!a,nt,!1):!!r!=!!a&&(n!=null?Qe(t,!!a,n,!0):Qe(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Fe(t,n,T,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":nt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Fe(t,n,v,c,r,f)}Sn(t,nt,ot);return;case"option":for(var Vt in a)if(nt=a[Vt],a.hasOwnProperty(Vt)&&nt!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":t.selected=!1;break;default:Fe(t,n,Vt,null,r,nt)}for(B in r)if(nt=r[B],ot=a[B],r.hasOwnProperty(B)&&nt!==ot&&(nt!=null||ot!=null))switch(B){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Fe(t,n,B,nt,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!r.hasOwnProperty($t)&&Fe(t,n,$t,null,r,nt);for(et in r)if(nt=r[et],ot=a[et],r.hasOwnProperty(et)&&nt!==ot&&(nt!=null||ot!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Fe(t,n,et,nt,r,ot)}return;default:if(Hc(n)){for(var He in a)nt=a[He],a.hasOwnProperty(He)&&nt!==void 0&&!r.hasOwnProperty(He)&&Rf(t,n,He,void 0,r,nt);for(pt in r)nt=r[pt],ot=a[pt],!r.hasOwnProperty(pt)||nt===ot||nt===void 0&&ot===void 0||Rf(t,n,pt,nt,r,ot);return}}for(var K in a)nt=a[K],a.hasOwnProperty(K)&&nt!=null&&!r.hasOwnProperty(K)&&Fe(t,n,K,null,r,nt);for(xt in r)nt=r[xt],ot=a[xt],!r.hasOwnProperty(xt)||nt===ot||nt==null&&ot==null||Fe(t,n,xt,nt,r,ot)}function Og(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&Og(v)){for(v=0,T=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],et=B.startTime;if(et>T)break;var pt=B.transferSize,xt=B.initiatorType;pt&&Og(xt)&&(B=B.responseEnd,v+=pt*(B<T?1:(T-et)/(B-et)))}if(--r,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Cf=null,wf=null;function Bl(t){return t.nodeType===9?t:t.ownerDocument}function Pg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uf=null;function qx(){var t=window.event;return t&&t.type==="popstate"?t===Uf?!1:(Uf=t,!0):(Uf=null,!1)}var Ig=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(t){return Bg.resolve(null).then(t).catch(Zx)}:Ig;function Zx(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function Fg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),nr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")_o(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,_o(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[qa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&_o(t.ownerDocument.body);a=c}while(a);nr(n)}function Hg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),Pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Kx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function Qx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function Gg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function Lf(t){return t.data==="$?"||t.data==="$~"}function Of(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Jx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Pf=null;function Vg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function kg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Xg(t,n,a){switch(n=Bl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function _o(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pr(t)}var li=new Map,jg=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=Q.d;Q.d={f:$x,r:ty,D:ey,C:ny,L:iy,m:ay,X:ry,S:sy,M:oy};function $x(){var t=Ji.f(),n=Dl();return t||n}function ty(t){var n=W(t);n!==null&&n.tag===5&&n.type==="form"?lm(n):Ji.r(t)}var $s=typeof document>"u"?null:document;function qg(t,n,a){var r=$s;if(r&&typeof n=="string"&&n){var c=mn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jg.has(c)||(jg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Tn(n,"link",t),k(n),r.head.appendChild(n)))}}function ey(t){Ji.D(t),qg("dns-prefetch",t,null)}function ny(t,n){Ji.C(t,n),qg("preconnect",t,n)}function iy(t,n,a){Ji.L(t,n,a);var r=$s;if(r&&t&&n){var c='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mn(a.imageSizes)+'"]')):c+='[href="'+mn(t)+'"]';var f=c;switch(n){case"style":f=tr(t);break;case"script":f=er(t)}li.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(vo(f))||n==="script"&&r.querySelector(xo(f))||(n=r.createElement("link"),Tn(n,"link",t),k(n),r.head.appendChild(n)))}}function ay(t,n){Ji.m(t,n);var a=$s;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mn(r)+'"][href="'+mn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=er(t)}if(!li.has(f)&&(t=x({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}r=a.createElement("link"),Tn(r,"link",t),k(r),a.head.appendChild(r)}}}function sy(t,n,a){Ji.S(t,n,a);var r=$s;if(r&&t){var c=st(r).hoistableStyles,f=tr(t);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(vo(f)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&zf(t,a);var B=v=r.createElement("link");k(B),Tn(B,"link",t),B._p=new Promise(function(et,pt){B.onload=et,B.onerror=pt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Hl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function ry(t,n){Ji.X(t,n);var a=$s;if(a&&t){var r=st(a).hoistableScripts,c=er(t),f=r.get(c);f||(f=a.querySelector(xo(c)),f||(t=x({src:t,async:!0},n),(n=li.get(c))&&If(t,n),f=a.createElement("script"),k(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function oy(t,n){Ji.M(t,n);var a=$s;if(a&&t){var r=st(a).hoistableScripts,c=er(t),f=r.get(c);f||(f=a.querySelector(xo(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=li.get(c))&&If(t,n),f=a.createElement("script"),k(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Wg(t,n,a,r){var c=(c=bt.current)?Fl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tr(a.href),a=st(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=tr(a.href);var f=st(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(vo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||ly(c,t,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=er(a),a=st(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function tr(t){return'href="'+mn(t)+'"'}function vo(t){return'link[rel="stylesheet"]['+t+"]"}function Yg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function ly(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),k(n),t.head.appendChild(n))}function er(t){return'[src="'+mn(t)+'"]'}function xo(t){return"script[async]"+t}function Zg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+mn(a.href)+'"]');if(r)return n.instance=r,k(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),k(r),Tn(r,"style",c),Hl(r,a.precedence,t),n.instance=r;case"stylesheet":c=tr(a.href);var f=t.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,k(f),f;r=Yg(a),(c=li.get(c))&&zf(r,c),f=(t.ownerDocument||t).createElement("link"),k(f);var v=f;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Tn(f,"link",r),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=er(a.src),(c=t.querySelector(xo(f)))?(n.instance=c,k(c),c):(r=a,(c=li.get(f))&&(r=x({},a),If(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),k(c),Tn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Hl(r,a.precedence,t));return n.instance}function Hl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function Kg(t,n,a){if(Gl===null){var r=new Map,c=Gl=new Map;c.set(a,r)}else c=Gl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[qa]||f[Ke]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=r.get(v);T?T.push(f):r.set(v,[f])}}return r}function Qg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function cy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function uy(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=tr(r.href),f=n.querySelector(vo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,r=Yg(r),(c=li.get(c))&&zf(r,c),f=f.createElement("link"),k(f);var v=f;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Tn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bf=0;function fy(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Bf===0&&(Bf=62500*jx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Bf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(dy,t),kl=null,Vl.call(t))}function dy(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var r=a.get(null);else{a=new Map,kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=Vl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function hy(t,n,a,r,c,f,v,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function $g(t,n,a,r,c,f,v,T,B,et,pt,xt){return t=new hy(t,n,a,v,B,et,pt,xt,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=gu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},yu(f),t}function t0(t){return t?(t=Ns,t):Ns}function e0(t,n,a,r,c,f){c=t0(c),r.context===null?r.context=c:r.pendingContext=c,r=ga(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=_a(t,r,n),a!==null&&(Vn(a,t,n),Qr(a,t,n))}function n0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Ff(t,n){n0(t,n),(t=t.alternate)&&n0(t,n)}function i0(t){if(t.tag===13||t.tag===31){var n=Ka(t,67108864);n!==null&&Vn(n,t,67108864),Ff(t,67108864)}}function a0(t){if(t.tag===13||t.tag===31){var n=Qn();n=Xa(n);var a=Ka(t,n);a!==null&&Vn(a,t,n),Ff(t,n)}}var jl=!0;function py(t,n,a,r){var c=z.T;z.T=null;var f=Q.p;try{Q.p=2,Hf(t,n,a,r)}finally{Q.p=f,z.T=c}}function my(t,n,a,r){var c=z.T;z.T=null;var f=Q.p;try{Q.p=8,Hf(t,n,a,r)}finally{Q.p=f,z.T=c}}function Hf(t,n,a,r){if(jl){var c=Gf(r);if(c===null)Af(t,n,r,ql,a),r0(t,r);else if(_y(c,t,n,a,r))r.stopPropagation();else if(r0(t,r),n&4&&-1<gy.indexOf(t)){for(;c!==null;){var f=W(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Dt(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-ee(v);T.entanglements[1]|=B,v&=~B}Di(f),(De&6)===0&&(Cl=ht()+500,po(0))}}break;case 31:case 13:T=Ka(f,2),T!==null&&Vn(T,f,2),Dl(),Ff(f,2)}if(f=Gf(r),f===null&&Af(t,n,r,ql,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Af(t,n,r,null,a)}}function Gf(t){return t=Vc(t),Vf(t)}var ql=null;function Vf(t){if(ql=null,t=R(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function s0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case vt:return 2;case Xt:return 8;case Ut:case Ht:return 32;case ge:return 268435456;default:return 32}default:return 32}}var kf=!1,Ca=null,wa=null,Da=null,So=new Map,Mo=new Map,Ua=[],gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r0(t,n){switch(t){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=W(n),n!==null&&i0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function _y(t,n,a,r,c){switch(n){case"focusin":return Ca=Eo(Ca,t,n,a,r,c),!0;case"dragenter":return wa=Eo(wa,t,n,a,r,c),!0;case"mouseover":return Da=Eo(Da,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,Eo(So.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,Eo(Mo.get(f)||null,t,n,a,r,c)),!0}return!1}function o0(t){var n=R(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,ja(t.priority,function(){a0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ja(t.priority,function(){a0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Gf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Gc=r,a.target.dispatchEvent(r),Gc=null}else return n=W(a),n!==null&&i0(n),t.blockedOn=a,!1;n.shift()}return!0}function l0(t,n,a){Wl(t)&&a.delete(n)}function vy(){kf=!1,Ca!==null&&Wl(Ca)&&(Ca=null),wa!==null&&Wl(wa)&&(wa=null),Da!==null&&Wl(Da)&&(Da=null),So.forEach(l0),Mo.forEach(l0)}function Yl(t,n){t.blockedOn===n&&(t.blockedOn=null,kf||(kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vy)))}var Zl=null;function c0(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Vf(r||a)===null)continue;break}var f=W(a);f!==null&&(t.splice(n,3),n-=3,Hu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function nr(t){function n(B){return Yl(B,t)}Ca!==null&&Yl(Ca,t),wa!==null&&Yl(wa,t),Da!==null&&Yl(Da,t),So.forEach(n),Mo.forEach(n);for(var a=0;a<Ua.length;a++){var r=Ua[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)o0(a),a.blockedOn===null&&Ua.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[yn]||null;if(typeof f=="function")v||c0(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[yn]||null)T=v.formAction;else if(Vf(c)!==null)continue}else T=v.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),c0(a)}}}function u0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Xf(t){this._internalRoot=t}Kl.prototype.render=Xf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();e0(a,r,t,n,null,null)},Kl.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;e0(t.current,2,null,t,null,null),Dl(),n[Pi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Lr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,t),a===0&&o0(t)}};var f0=e.version;if(f0!=="19.2.8")throw Error(s(527,f0,"19.2.8"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var xy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Zt=Ql.inject(xy),jt=Ql}catch{}}return To.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=vm,f=xm,v=ym;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=$g(t,1,!1,null,null,a,r,null,c,f,v,u0),t[Pi]=n.current,Tf(t),new Xf(n)},To.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=vm,v=xm,T=ym,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=$g(t,1,!0,n,a??null,r,c,B,f,v,T,u0),n.context=t0(null),a=n.current,r=Qn(),r=Xa(r),c=ga(r),c.callback=null,_a(a,c,r),a=r,n.current.lanes=a,xn(n,a),Di(n),t[Pi]=n.current,Tf(t),new Kl(n)},To.version="19.2.8",To}var S0;function Dy(){if(S0)return Wf.exports;S0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Wf.exports=wy(),Wf.exports}var Uy=Dy();const Ny=R_(Uy),Qf=[{id:"CH3_TMC2_SHIV_SHAKTI_SP",mission:"Chandrayaan-3",instrument:"TMC-2 (Terrain Mapping Camera-2)",productUri:"URN:ISRO:CH3:TMC2:RAW:L1:20230823T124218_SHIV_SHAKTI_V01.ZIP",targetFeature:"Shiv Shakti Point (Lunar South Pole - Prime Landing Zone)",targetCoordinates:{lat:-69.373,lon:32.348,latStr:"69.373° S",lonStr:"32.348° E"},footprintPolygon:[[-68.8,31.2],[-68.9,33.6],[-69.8,33.4],[-69.7,31]],acquisitionTimeUtc:"2023-08-23T12:34:28.412Z",geometry:{incidenceDeg:64.28,emissionDeg:21.82,phaseDeg:45.1,solarAzimuthDeg:124.6,spacecraftAltitudeKm:100.2,groundSamplingDistanceM:5,solarElevationDeg:18.4},initialHapke:{w:.342,thetaBar:24.5,g:-.21,b0:1.45,h:.065},currentHapke:{w:.342,thetaBar:24.5,g:-.21,b0:1.45,h:.065},signalToNoiseRatioDb:148.5,subSolarPoint:{lat:-1.2,lon:45.8},subSpacecraftPoint:{lat:-69.3,lon:32.2},waterIceAbsorptionIndex:.14,meanReflectance:.088,spectralBands:["Band-1 (Pan: 500-850 nm)"],pds4XmlLabel:`<?xml version="1.0" encoding="UTF-8"?>
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
 */const Ly=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C_=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Oy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=ne.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...h},m)=>ne.createElement("svg",{ref:m,...Oy,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:C_("lucide",l),...h},[...d.map(([p,g])=>ne.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(o,e)=>{const i=ne.forwardRef(({className:s,...l},u)=>ne.createElement(Py,{ref:u,iconNode:e,className:C_(`lucide-${Ly(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Iy=ke("ArrowRight",zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Fy=ke("Check",By);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],M0=ke("CircleAlert",Hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],w_=ke("CircleCheck",Gy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],ky=ke("Columns2",Vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],jy=ke("Compass",Xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]],Wy=ke("Contrast",qy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Zy=ke("Copy",Yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",key:"gkbcor"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}]],Qy=ke("FileArchive",Ky);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],D_=ke("FileText",Jy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],tS=ke("Globe",$y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],U_=ke("Image",eS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],iS=ke("Info",nS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],sS=ke("Layers",aS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],N_=ke("LoaderCircle",rS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],lS=ke("Orbit",oS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],uS=ke("RefreshCw",cS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],dS=ke("RotateCcw",fS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],pS=ke("Search",hS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],gS=ke("ShieldCheck",mS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Lo=ke("Sparkles",_S);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],xS=ke("SquareSplitVertical",vS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],SS=ke("Sun",yS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],ES=ke("Upload",MS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],L_=ke("X",bS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],AS=ke("ZoomIn",TS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],CS=ke("ZoomOut",RS),wS=({appState:o,dataset:e,onReset:i,onOpenPds4Modal:s})=>P.jsx("header",{className:"sticky top-0 z-40 w-full bg-[#030303]/80 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3",children:P.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-4",children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("div",{className:"w-8 h-8 rounded-full bg-stone-200 text-stone-900 flex items-center justify-center font-bold text-[9px] tracking-wider",children:"ISRO"}),P.jsx("div",{children:P.jsxs("div",{className:"text-sm font-medium text-stone-100 flex items-center gap-2",children:[P.jsx("span",{children:"Lunar Data Platform"}),P.jsx("span",{className:"text-[11px] font-normal text-stone-500",children:"/ Chandrayaan"})]})})]}),o==="DASHBOARD"&&P.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300",children:[P.jsx(tS,{className:"w-3.5 h-3.5 text-slate-400"}),P.jsx("span",{className:"text-slate-400",children:"Dataset:"}),P.jsx("span",{className:"text-slate-200 font-medium",children:e.targetFeature})]}),P.jsx("div",{className:"flex items-center gap-2.5",children:o==="DASHBOARD"&&P.jsxs(P.Fragment,{children:[P.jsxs("button",{onClick:s,className:"px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors",children:[P.jsx(D_,{className:"w-3.5 h-3.5 text-slate-400"}),P.jsx("span",{children:"PDS4 Info"})]}),P.jsxs("button",{onClick:i,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors",children:[P.jsx(uS,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"New Dataset"})]})]})})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yh="173",DS=0,E0=1,US=2,O_=1,NS=2,aa=3,Va=0,Xn=1,sa=2,Ha=0,xr=1,b0=2,T0=3,A0=4,LS=5,_s=100,OS=101,PS=102,zS=103,IS=104,BS=200,FS=201,HS=202,GS=203,Dd=204,Ud=205,VS=206,kS=207,XS=208,jS=209,qS=210,WS=211,YS=212,ZS=213,KS=214,Nd=0,Ld=1,Od=2,Mr=3,Pd=4,zd=5,Id=6,Bd=7,P_=0,QS=1,JS=2,Ga=0,$S=1,tM=2,eM=3,nM=4,iM=5,aM=6,sM=7,z_=300,Er=301,br=302,Fd=303,Hd=304,Pc=306,Gd=1e3,xs=1001,Vd=1002,Ei=1003,rM=1004,Jl=1005,Ni=1006,Jf=1007,ys=1008,ca=1009,I_=1010,B_=1011,Oo=1012,Sh=1013,Ss=1014,ra=1015,zo=1016,Mh=1017,Eh=1018,Tr=1020,F_=35902,H_=1021,G_=1022,Mi=1023,V_=1024,k_=1025,yr=1026,Ar=1027,X_=1028,bh=1029,j_=1030,Th=1031,Ah=1033,Tc=33776,Ac=33777,Rc=33778,Cc=33779,kd=35840,Xd=35841,jd=35842,qd=35843,Wd=36196,Yd=37492,Zd=37496,Kd=37808,Qd=37809,Jd=37810,$d=37811,th=37812,eh=37813,nh=37814,ih=37815,ah=37816,sh=37817,rh=37818,oh=37819,lh=37820,ch=37821,wc=36492,uh=36494,fh=36495,q_=36283,dh=36284,hh=36285,ph=36286,oM=3200,lM=3201,W_=0,cM=1,Fa="",ti="srgb",Rr="srgb-linear",Uc="linear",Ge="srgb",ir=7680,R0=519,uM=512,fM=513,dM=514,Y_=515,hM=516,pM=517,mM=518,gM=519,C0=35044,w0="300 es",oa=2e3,Nc=2001;class wr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,mh=180/Math.PI;function Io(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function _M(o,e){return(o%e+e)%e}function td(o,e,i){return(1-i)*o+i*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,i=0){Ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(e,i,s,l,u,d,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p)}set(e,i,s,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],x=s[7],y=s[2],M=s[5],A=s[8],b=l[0],S=l[3],_=l[6],I=l[1],L=l[4],D=l[7],j=l[2],G=l[5],O=l[8];return u[0]=d*b+h*I+m*j,u[3]=d*S+h*L+m*G,u[6]=d*_+h*D+m*O,u[1]=p*b+g*I+x*j,u[4]=p*S+g*L+x*G,u[7]=p*_+g*D+x*O,u[2]=y*b+M*I+A*j,u[5]=y*S+M*L+A*G,u[8]=y*_+M*D+A*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-s*u*g+s*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=g*d-h*p,y=h*m-g*u,M=p*u-d*m,A=i*x+s*y+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=x*b,e[1]=(l*p-g*s)*b,e[2]=(h*s-l*d)*b,e[3]=y*b,e[4]=(g*i-l*m)*b,e[5]=(l*u-h*i)*b,e[6]=M*b,e[7]=(s*m-p*i)*b,e[8]=(d*i-s*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ed.makeScale(e,i)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,i){return this.premultiply(ed.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new fe;function Z_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Po(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function vM(){const o=Po("canvas");return o.style.display="block",o}const D0={};function _r(o){o in D0||(D0[o]=!0,console.warn(o))}function xM(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function yM(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function SM(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const U0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MM(){const o={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ge&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=Sr(l.r),l.g=Sr(l.g),l.b=Sr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Uc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Rr]:{primaries:e,whitePoint:s,transfer:Uc,toXYZ:U0,fromXYZ:N0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:Ge,toXYZ:U0,fromXYZ:N0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),o}const we=MM();function la(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Sr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ar;class EM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ar===void 0&&(ar=Po("canvas")),ar.width=e.width,ar.height=e.height;const s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ar}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Po("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=la(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bM=0;class K_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(nd(l[d].image)):u.push(nd(l[d]))}else u=nd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function nd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?EM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TM=0;class On extends wr{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=xs,l=xs,u=Ni,d=ys,h=Mi,m=ca,p=On.DEFAULT_ANISOTROPY,g=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Io(),this.name="",this.source=new K_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gd:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case Vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gd:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case Vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=z_;On.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],y=m[1],M=m[5],A=m[9],b=m[2],S=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(x-b)<.01&&Math.abs(A-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+b)<.1&&Math.abs(A+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,j=(_+1)/2,G=(g+y)/4,O=(x+b)/4,X=(A+S)/4;return L>D&&L>j?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=G/s,u=O/s):D>j?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=G/l,u=X/l):j<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(j),s=O/u,l=X/u),this.set(s,l,u,i),this}let I=Math.sqrt((S-A)*(S-A)+(x-b)*(x-b)+(y-g)*(y-g));return Math.abs(I)<.001&&(I=1),this.x=(S-A)/I,this.y=(x-b)/I,this.z=(y-g)/I,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AM extends wr{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new On(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new K_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends AM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Q_ extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3];const y=u[d+0],M=u[d+1],A=u[d+2],b=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(h===1){e[i+0]=y,e[i+1]=M,e[i+2]=A,e[i+3]=b;return}if(x!==b||m!==y||p!==M||g!==A){let S=1-h;const _=m*y+p*M+g*A+x*b,I=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const j=Math.sqrt(L),G=Math.atan2(j,_*I);S=Math.sin(S*G)/j,h=Math.sin(h*G)/j}const D=h*I;if(m=m*S+y*D,p=p*S+M*D,g=g*S+A*D,x=x*S+b*D,S===1-h){const j=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=j,p*=j,g*=j,x*=j}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=u[d],y=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+g*x+m*M-p*y,e[i+1]=m*A+g*y+p*x-h*M,e[i+2]=p*A+g*M+h*y-m*x,e[i+3]=g*A-h*x-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),x=h(u/2),y=m(s/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=y*g*x+p*M*A,this._y=p*M*x-y*g*A,this._z=p*g*A+y*M*x,this._w=p*g*x-y*M*A;break;case"YXZ":this._x=y*g*x+p*M*A,this._y=p*M*x-y*g*A,this._z=p*g*A-y*M*x,this._w=p*g*x+y*M*A;break;case"ZXY":this._x=y*g*x-p*M*A,this._y=p*M*x+y*g*A,this._z=p*g*A+y*M*x,this._w=p*g*x-y*M*A;break;case"ZYX":this._x=y*g*x-p*M*A,this._y=p*M*x+y*g*A,this._z=p*g*A-y*M*x,this._w=p*g*x+y*M*A;break;case"YZX":this._x=y*g*x+p*M*A,this._y=p*M*x+y*g*A,this._z=p*g*A-y*M*x,this._w=p*g*x-y*M*A;break;case"XZY":this._x=y*g*x-p*M*A,this._y=p*M*x-y*g*A,this._z=p*g*A+y*M*x,this._w=p*g*x+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],y=s+h+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-s*p,this._z=u*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),x=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=d*x+this._w*y,this._x=s*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,s=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(L0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(L0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),g=2*(h*i-u*l),x=2*(u*s-d*i);return this.x=i+m*p+d*x-h*g,this.y=s+m*g+h*p-u*x,this.z=l+m*x+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new at,L0=new Bo;class Fo{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,vi):vi.fromBufferAttribute(u,d),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$l.copy(s.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),tc.subVectors(this.max,Ro),sr.subVectors(e.a,Ro),rr.subVectors(e.b,Ro),or.subVectors(e.c,Ro),La.subVectors(rr,sr),Oa.subVectors(or,rr),cs.subVectors(sr,or);let i=[0,-La.z,La.y,0,-Oa.z,Oa.y,0,-cs.z,cs.y,La.z,0,-La.x,Oa.z,0,-Oa.x,cs.z,0,-cs.x,-La.y,La.x,0,-Oa.y,Oa.x,0,-cs.y,cs.x,0];return!ad(i,sr,rr,or,tc)||(i=[1,0,0,0,1,0,0,0,1],!ad(i,sr,rr,or,tc))?!1:(ec.crossVectors(La,Oa),i=[ec.x,ec.y,ec.z],ad(i,sr,rr,or,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new at,new at,new at,new at,new at,new at,new at,new at],vi=new at,$l=new Fo,sr=new at,rr=new at,or=new at,La=new at,Oa=new at,cs=new at,Ro=new at,tc=new at,ec=new at,us=new at;function ad(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){us.fromArray(o,u);const h=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),m=e.dot(us),p=i.dot(us),g=s.dot(us);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const CM=new Fo,Co=new at,sd=new at;class Ho{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):CM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(sd)),this.expandByPoint(Co.copy(e.center).sub(sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new at,rd=new at,nc=new at,Pa=new at,od=new at,ic=new at,ld=new at;class Rh{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){rd.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(rd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(nc),h=Pa.dot(this.direction),m=-Pa.dot(nc),p=Pa.lengthSq(),g=Math.abs(1-d*d);let x,y,M,A;if(g>0)if(x=d*m-h,y=d*h-m,A=u*g,x>=0)if(y>=-A)if(y<=A){const b=1/g;x*=b,y*=b,M=x*(x+d*y+2*h)+y*(d*x+y+2*m)+p}else y=u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*m)+p;else y=-u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*m)+p;else y<=-A?(x=Math.max(0,-(-d*u+h)),y=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+y*(y+2*m)+p):y<=A?(x=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(x=Math.max(0,-(d*u+h)),y=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+y*(y+2*m)+p);else y=d>0?-u:u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(rd).addScaledVector(nc,y),M}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const s=ta.dot(this.direction),l=ta.dot(ta)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),g>=0?(u=(e.min.y-y.y)*g,d=(e.max.y-y.y)*g):(u=(e.max.y-y.y)*g,d=(e.min.y-y.y)*g),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-y.z)*x,m=(e.max.z-y.z)*x):(h=(e.max.z-y.z)*x,m=(e.min.z-y.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,s,l,u){od.subVectors(i,e),ic.subVectors(s,e),ld.crossVectors(od,ic);let d=this.direction.dot(ld),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Pa.subVectors(this.origin,e);const m=h*this.direction.dot(ic.crossVectors(Pa,ic));if(m<0)return null;const p=h*this.direction.dot(od.cross(Pa));if(p<0||m+p>d)return null;const g=-h*Pa.dot(ld);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,i,s,l,u,d,h,m,p,g,x,y,M,A,b,S){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p,g,x,y,M,A,b,S)}set(e,i,s,l,u,d,h,m,p,g,x,y,M,A,b,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=y,_[3]=M,_[7]=A,_[11]=b,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/lr.setFromMatrixColumn(e,0).length(),u=1/lr.setFromMatrixColumn(e,1).length(),d=1/lr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=d*g,M=d*x,A=h*g,b=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+A*p,i[5]=y-b*p,i[9]=-h*m,i[2]=b-y*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const y=m*g,M=m*x,A=p*g,b=p*x;i[0]=y+b*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=M*h-A,i[6]=b+y*h,i[10]=d*m}else if(e.order==="ZXY"){const y=m*g,M=m*x,A=p*g,b=p*x;i[0]=y-b*h,i[4]=-d*x,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*g,i[9]=b-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const y=d*g,M=d*x,A=h*g,b=h*x;i[0]=m*g,i[4]=A*p-M,i[8]=y*p+b,i[1]=m*x,i[5]=b*p+y,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const y=d*m,M=d*p,A=h*m,b=h*p;i[0]=m*g,i[4]=b-y*x,i[8]=A*x+M,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*x+A,i[10]=y-b*x}else if(e.order==="XZY"){const y=d*m,M=d*p,A=h*m,b=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=y*x+b,i[5]=d*g,i[9]=M*x-A,i[2]=A*x-M,i[6]=h*g,i[10]=b*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wM,e,DM)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),za.crossVectors(s,Jn),za.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),za.crossVectors(s,Jn)),za.normalize(),ac.crossVectors(Jn,za),l[0]=za.x,l[4]=ac.x,l[8]=Jn.x,l[1]=za.y,l[5]=ac.y,l[9]=Jn.y,l[2]=za.z,l[6]=ac.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],x=s[5],y=s[9],M=s[13],A=s[2],b=s[6],S=s[10],_=s[14],I=s[3],L=s[7],D=s[11],j=s[15],G=l[0],O=l[4],X=l[8],w=l[12],C=l[1],H=l[5],lt=l[9],rt=l[13],_t=l[2],mt=l[6],z=l[10],Q=l[14],Z=l[3],ct=l[7],dt=l[11],N=l[15];return u[0]=d*G+h*C+m*_t+p*Z,u[4]=d*O+h*H+m*mt+p*ct,u[8]=d*X+h*lt+m*z+p*dt,u[12]=d*w+h*rt+m*Q+p*N,u[1]=g*G+x*C+y*_t+M*Z,u[5]=g*O+x*H+y*mt+M*ct,u[9]=g*X+x*lt+y*z+M*dt,u[13]=g*w+x*rt+y*Q+M*N,u[2]=A*G+b*C+S*_t+_*Z,u[6]=A*O+b*H+S*mt+_*ct,u[10]=A*X+b*lt+S*z+_*dt,u[14]=A*w+b*rt+S*Q+_*N,u[3]=I*G+L*C+D*_t+j*Z,u[7]=I*O+L*H+D*mt+j*ct,u[11]=I*X+L*lt+D*z+j*dt,u[15]=I*w+L*rt+D*Q+j*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],x=e[6],y=e[10],M=e[14],A=e[3],b=e[7],S=e[11],_=e[15];return A*(+u*m*x-l*p*x-u*h*y+s*p*y+l*h*M-s*m*M)+b*(+i*m*M-i*p*y+u*d*y-l*d*M+l*p*g-u*m*g)+S*(+i*p*x-i*h*M-u*d*x+s*d*M+u*h*g-s*p*g)+_*(-l*h*g-i*m*x+i*h*y+l*d*x-s*d*y+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=e[9],y=e[10],M=e[11],A=e[12],b=e[13],S=e[14],_=e[15],I=x*S*p-b*y*p+b*m*M-h*S*M-x*m*_+h*y*_,L=A*y*p-g*S*p-A*m*M+d*S*M+g*m*_-d*y*_,D=g*b*p-A*x*p+A*h*M-d*b*M-g*h*_+d*x*_,j=A*x*m-g*b*m-A*h*y+d*b*y+g*h*S-d*x*S,G=i*I+s*L+l*D+u*j;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/G;return e[0]=I*O,e[1]=(b*y*u-x*S*u-b*l*M+s*S*M+x*l*_-s*y*_)*O,e[2]=(h*S*u-b*m*u+b*l*p-s*S*p-h*l*_+s*m*_)*O,e[3]=(x*m*u-h*y*u-x*l*p+s*y*p+h*l*M-s*m*M)*O,e[4]=L*O,e[5]=(g*S*u-A*y*u+A*l*M-i*S*M-g*l*_+i*y*_)*O,e[6]=(A*m*u-d*S*u-A*l*p+i*S*p+d*l*_-i*m*_)*O,e[7]=(d*y*u-g*m*u+g*l*p-i*y*p-d*l*M+i*m*M)*O,e[8]=D*O,e[9]=(A*x*u-g*b*u-A*s*M+i*b*M+g*s*_-i*x*_)*O,e[10]=(d*b*u-A*h*u+A*s*p-i*b*p-d*s*_+i*h*_)*O,e[11]=(g*h*u-d*x*u-g*s*p+i*x*p+d*s*M-i*h*M)*O,e[12]=j*O,e[13]=(g*b*l-A*x*l+A*s*y-i*b*y-g*s*S+i*x*S)*O,e[14]=(A*h*l-d*b*l-A*s*m+i*b*m+d*s*S-i*h*S)*O,e[15]=(d*x*l-g*h*l+g*s*m-i*x*m-d*s*y+i*h*y)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,x=h+h,y=u*p,M=u*g,A=u*x,b=d*g,S=d*x,_=h*x,I=m*p,L=m*g,D=m*x,j=s.x,G=s.y,O=s.z;return l[0]=(1-(b+_))*j,l[1]=(M+D)*j,l[2]=(A-L)*j,l[3]=0,l[4]=(M-D)*G,l[5]=(1-(y+_))*G,l[6]=(S+I)*G,l[7]=0,l[8]=(A+L)*O,l[9]=(S-I)*O,l[10]=(1-(y+b))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=lr.set(l[0],l[1],l[2]).length();const d=lr.set(l[4],l[5],l[6]).length(),h=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],xi.copy(this);const p=1/u,g=1/d,x=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=x,xi.elements[9]*=x,xi.elements[10]*=x,i.setFromRotationMatrix(xi),s.x=u,s.y=d,s.z=h,this}makePerspective(e,i,s,l,u,d,h=oa){const m=this.elements,p=2*u/(i-e),g=2*u/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let M,A;if(h===oa)M=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Nc)M=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,d,h=oa){const m=this.elements,p=1/(i-e),g=1/(s-l),x=1/(d-u),y=(i+e)*p,M=(s+l)*g;let A,b;if(h===oa)A=(d+u)*x,b=-2*x;else if(h===Nc)A=u*x,b=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=b,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const lr=new at,xi=new Ze,wM=new at(0,0,0),DM=new at(1,1,1),za=new at,ac=new at,Jn=new at,O0=new Ze,P0=new Bo;class Oi{constructor(e=0,i=0,s=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return O0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class J_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UM=0;const z0=new at,cr=new Bo,ea=new Ze,sc=new at,wo=new at,NM=new at,LM=new Bo,I0=new at(1,0,0),B0=new at(0,1,0),F0=new at(0,0,1),H0={type:"added"},OM={type:"removed"},ur={type:"childadded",child:null},cd={type:"childremoved",child:null};class vn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new at,i=new Oi,s=new Bo,l=new at(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new fe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cr.setFromAxisAngle(e,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,i){return cr.setFromAxisAngle(e,i),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(I0,e)}rotateY(e){return this.rotateOnAxis(B0,e)}rotateZ(e){return this.rotateOnAxis(F0,e)}translateOnAxis(e,i){return z0.copy(e).applyQuaternion(this.quaternion),this.position.add(z0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(I0,e)}translateY(e){return this.translateOnAxis(B0,e)}translateZ(e){return this.translateOnAxis(F0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?sc.copy(e):sc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(wo,sc,this.up):ea.lookAt(sc,wo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(ea),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(H0),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(OM),cd.child=e,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(H0),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,NM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,LM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),x=d(e.shapes),y=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}vn.DEFAULT_UP=new at(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new at,na=new at,ud=new at,ia=new at,fr=new at,dr=new at,G0=new at,fd=new at,dd=new at,hd=new at,pd=new tn,md=new tn,gd=new tn;class Si{constructor(e=new at,i=new at,s=new at){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){yi.subVectors(l,i),na.subVectors(s,i),ud.subVectors(e,i);const d=yi.dot(yi),h=yi.dot(na),m=yi.dot(ud),p=na.dot(na),g=na.dot(ud),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const y=1/x,M=(p*m-h*g)*y,A=(d*g-h*m)*y;return u.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,s,l,u,d,h,m){return this.getBarycoord(e,i,s,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(e,i,s,l,u,d){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,i),md.fromBufferAttribute(e,s),gd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(pd,u.x),d.addScaledVector(md,u.y),d.addScaledVector(gd,u.z),d}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),na.subVectors(e,i),yi.cross(na).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),yi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Si.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Si.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,h;fr.subVectors(l,s),dr.subVectors(u,s),fd.subVectors(e,s);const m=fr.dot(fd),p=dr.dot(fd);if(m<=0&&p<=0)return i.copy(s);dd.subVectors(e,l);const g=fr.dot(dd),x=dr.dot(dd);if(g>=0&&x<=g)return i.copy(l);const y=m*x-g*p;if(y<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(fr,d);hd.subVectors(e,u);const M=fr.dot(hd),A=dr.dot(hd);if(A>=0&&M<=A)return i.copy(u);const b=M*p-m*A;if(b<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(dr,h);const S=g*A-M*x;if(S<=0&&x-g>=0&&M-A>=0)return G0.subVectors(u,l),h=(x-g)/(x-g+(M-A)),i.copy(l).addScaledVector(G0,h);const _=1/(S+b+y);return d=b*_,h=y*_,i.copy(s).addScaledVector(fr,d).addScaledVector(dr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},rc={h:0,s:0,l:0};function _d(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,we.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=we.workingColorSpace){return this.r=e,this.g=i,this.b=s,we.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=we.workingColorSpace){if(e=_M(e,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=_d(d,u,e+1/3),this.g=_d(d,u,e),this.b=_d(d,u,e-1/3)}return we.toWorkingColorSpace(this,l),this}setStyle(e,i=ti){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ti){const s=$_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return we.fromWorkingColorSpace(wn.copy(this),e),Math.round(Me(wn.r*255,0,255))*65536+Math.round(Me(wn.g*255,0,255))*256+Math.round(Me(wn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=we.workingColorSpace){we.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=g<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=we.workingColorSpace){return we.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ti){we.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==ti?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+e,Ia.s+i,Ia.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ia),e.getHSL(rc);const s=td(Ia.h,rc.h,i),l=td(Ia.s,rc.s,i),u=td(Ia.l,rc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Te;Te.NAMES=$_;let PM=0;class Es extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=xr,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Ud,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(s.blending=this.blending),this.side!==Va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dd&&(s.blendSrc=this.blendSrc),this.blendDst!==Ud&&(s.blendDst=this.blendDst),this.blendEquation!==_s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tv extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new at,oc=new Ue;let zM=0;class bi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=C0,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ao(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==C0&&(e.usage=this.usage),e}}class ev extends bi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class nv extends bi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ti extends bi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let IM=0;const ci=new Ze,vd=new vn,hr=new at,$n=new Fo,Do=new Fo,_n=new at;class fi extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z_(e)?nv:ev)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new fe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,s){return ci.makeTranslation(e,i,s),this.applyMatrix4(ci),this}scale(e,i,s){return ci.makeScale(e,i,s),this.applyMatrix4(ci),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ti(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors($n.min,Do.min),$n.expandByPoint(_n),_n.addVectors($n.max,Do.max),$n.expandByPoint(_n)):($n.expandByPoint(Do.min),$n.expandByPoint(Do.max))}$n.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)_n.fromBufferAttribute(h,p),m&&(hr.fromBufferAttribute(e,p),_n.add(hr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let X=0;X<s.count;X++)h[X]=new at,m[X]=new at;const p=new at,g=new at,x=new at,y=new Ue,M=new Ue,A=new Ue,b=new at,S=new at;function _(X,w,C){p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,w),x.fromBufferAttribute(s,C),y.fromBufferAttribute(u,X),M.fromBufferAttribute(u,w),A.fromBufferAttribute(u,C),g.sub(p),x.sub(p),M.sub(y),A.sub(y);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(b.copy(g).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(H),S.copy(x).multiplyScalar(M.x).addScaledVector(g,-A.x).multiplyScalar(H),h[X].add(b),h[w].add(b),h[C].add(b),m[X].add(S),m[w].add(S),m[C].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,w=I.length;X<w;++X){const C=I[X],H=C.start,lt=C.count;for(let rt=H,_t=H+lt;rt<_t;rt+=3)_(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const L=new at,D=new at,j=new at,G=new at;function O(X){j.fromBufferAttribute(l,X),G.copy(j);const w=h[X];L.copy(w),L.sub(j.multiplyScalar(j.dot(w))).normalize(),D.crossVectors(G,w);const H=D.dot(m[X])<0?-1:1;d.setXYZW(X,L.x,L.y,L.z,H)}for(let X=0,w=I.length;X<w;++X){const C=I[X],H=C.start,lt=C.count;for(let rt=H,_t=H+lt;rt<_t;rt+=3)O(e.getX(rt+0)),O(e.getX(rt+1)),O(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new at,u=new at,d=new at,h=new at,m=new at,p=new at,g=new at,x=new at;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),b=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,S),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),h.add(g),m.add(g),p.add(g),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,x=h.normalized,y=new p.constructor(m.length*g);let M=0,A=0;for(let b=0,S=m.length;b<S;b++){h.isInterleavedBufferAttribute?M=m[b]*h.data.stride+h.offset:M=m[b]*g;for(let _=0;_<g;_++)y[A++]=p[M++]}return new bi(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,x=p.length;g<x;g++){const y=p[g],M=e(y,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,y=p.length;x<y;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let y=0,M=x.length;y<M;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V0=new Ze,fs=new Rh,lc=new Ho,k0=new at,cc=new at,uc=new at,fc=new at,xd=new at,dc=new at,X0=new at,hc=new at;class Li extends vn{constructor(e=new fi,i=new tv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){dc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],x=u[m];g!==0&&(xd.fromBufferAttribute(x,e),d?dc.addScaledVector(xd,g):dc.addScaledVector(xd.sub(i),g))}i.add(dc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),lc.copy(s.boundingSphere),lc.applyMatrix4(u),fs.copy(e.ray).recast(e.near),!(lc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(lc,k0)===null||fs.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(V0.copy(u).invert(),fs.copy(e.ray).applyMatrix4(V0),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,fs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,b=y.length;A<b;A++){const S=y[A],_=d[S.materialIndex],I=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let D=I,j=L;D<j;D+=3){const G=h.getX(D),O=h.getX(D+1),X=h.getX(D+2);l=pc(this,_,e,s,p,g,x,G,O,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let S=A,_=b;S<_;S+=3){const I=h.getX(S),L=h.getX(S+1),D=h.getX(S+2);l=pc(this,d,e,s,p,g,x,I,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,b=y.length;A<b;A++){const S=y[A],_=d[S.materialIndex],I=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=I,j=L;D<j;D+=3){const G=D,O=D+1,X=D+2;l=pc(this,_,e,s,p,g,x,G,O,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let S=A,_=b;S<_;S+=3){const I=S,L=S+1,D=S+2;l=pc(this,d,e,s,p,g,x,I,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function BM(o,e,i,s,l,u,d,h){let m;if(e.side===Xn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,e.side===Va,h),m===null)return null;hc.copy(h),hc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(hc);return p<i.near||p>i.far?null:{distance:p,point:hc.clone(),object:o}}function pc(o,e,i,s,l,u,d,h,m,p){o.getVertexPosition(h,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const g=BM(o,e,i,s,cc,uc,fc,X0);if(g){const x=new at;Si.getBarycoord(X0,cc,uc,fc,x),l&&(g.uv=Si.getInterpolatedAttribute(l,h,m,p,x,new Ue)),u&&(g.uv1=Si.getInterpolatedAttribute(u,h,m,p,x,new Ue)),d&&(g.normal=Si.getInterpolatedAttribute(d,h,m,p,x,new at),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new at,materialIndex:0};Si.getNormal(cc,uc,fc,y.normal),g.face=y,g.barycoord=x}return g}class Go extends fi{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],x=[];let y=0,M=0;A("z","y","x",-1,-1,s,i,e,d,u,0),A("z","y","x",1,-1,s,i,-e,d,u,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,u,4),A("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ti(p,3)),this.setAttribute("normal",new Ti(g,3)),this.setAttribute("uv",new Ti(x,2));function A(b,S,_,I,L,D,j,G,O,X,w){const C=D/O,H=j/X,lt=D/2,rt=j/2,_t=G/2,mt=O+1,z=X+1;let Q=0,Z=0;const ct=new at;for(let dt=0;dt<z;dt++){const N=dt*H-rt;for(let J=0;J<mt;J++){const Mt=J*C-lt;ct[b]=Mt*I,ct[S]=N*L,ct[_]=_t,p.push(ct.x,ct.y,ct.z),ct[b]=0,ct[S]=0,ct[_]=G>0?1:-1,g.push(ct.x,ct.y,ct.z),x.push(J/O),x.push(1-dt/X),Q+=1}}for(let dt=0;dt<X;dt++)for(let N=0;N<O;N++){const J=y+N+mt*dt,Mt=y+N+mt*(dt+1),Y=y+(N+1)+mt*(dt+1),ft=y+(N+1)+mt*dt;m.push(J,Mt,ft),m.push(Mt,Y,ft),Z+=6}h.addGroup(M,Z,w),M+=Z,y+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const s=Cr(o[i]);for(const l in s)e[l]=s[l]}return e}function FM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function iv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:we.workingColorSpace}const HM={clone:Cr,merge:Ln};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=FM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class av extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=oa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new at,j0=new Ue,q0=new Ue;class ui extends av{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=mh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mh*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,j0,q0),i.subVectors(q0,j0)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan($f*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class kM extends vn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(pr,mr,e,i);l.layers=this.layers,this.add(l);const u=new ui(pr,mr,e,i);u.layers=this.layers,this.add(u);const d=new ui(pr,mr,e,i);d.layers=this.layers,this.add(d);const h=new ui(pr,mr,e,i);h.layers=this.layers,this.add(h);const m=new ui(pr,mr,e,i);m.layers=this.layers,this.add(m);const p=new ui(pr,mr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(x,y,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class sv extends On{constructor(e,i,s,l,u,d,h,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:Er,super(e,i,s,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XM extends Ms{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new sv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Go(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Ha});u.uniforms.tEquirect.value=i;const d=new Li(l,u),h=i.minFilter;return i.minFilter===ys&&(i.minFilter=Ni),new kM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}class mc extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jM={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const b of e.hand.values()){const S=i.getJointPose(b,s),_=this._getHandJoint(p,b);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),M=.02,A=.005;p.inputState.pinching&&y>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(jM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new mc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class qM extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Sd=new at,WM=new at,YM=new fe;class ms{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Sd.subVectors(s,i).cross(WM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Sd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||YM.getNormalMatrix(e),l=this.coplanarPoint(Sd).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Ho,gc=new at;class Ch{constructor(e=new ms,i=new ms,s=new ms,l=new ms,u=new ms,d=new ms){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=oa){const s=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],x=l[6],y=l[7],M=l[8],A=l[9],b=l[10],S=l[11],_=l[12],I=l[13],L=l[14],D=l[15];if(s[0].setComponents(m-u,y-p,S-M,D-_).normalize(),s[1].setComponents(m+u,y+p,S+M,D+_).normalize(),s[2].setComponents(m+d,y+g,S+A,D+I).normalize(),s[3].setComponents(m-d,y-g,S-A,D-I).normalize(),s[4].setComponents(m-h,y-x,S-b,D-L).normalize(),i===oa)s[5].setComponents(m+h,y+x,S+b,D+L).normalize();else if(i===Nc)s[5].setComponents(h,x,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rv extends Es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new at,Oc=new at,W0=new Ze,Uo=new Rh,_c=new Ho,Md=new at,Y0=new at;class ZM extends vn{constructor(e=new fi,i=new rv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Lc.fromBufferAttribute(i,l-1),Oc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Lc.distanceTo(Oc);e.setAttribute("lineDistance",new Ti(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(l),_c.radius+=u,e.ray.intersectsSphere(_c)===!1)return;W0.copy(l).invert(),Uo.copy(e.ray).applyMatrix4(W0);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const M=Math.max(0,d.start),A=Math.min(g.count,d.start+d.count);for(let b=M,S=A-1;b<S;b+=p){const _=g.getX(b),I=g.getX(b+1),L=vc(this,e,Uo,m,_,I,b);L&&i.push(L)}if(this.isLineLoop){const b=g.getX(A-1),S=g.getX(M),_=vc(this,e,Uo,m,b,S,A-1);_&&i.push(_)}}else{const M=Math.max(0,d.start),A=Math.min(y.count,d.start+d.count);for(let b=M,S=A-1;b<S;b+=p){const _=vc(this,e,Uo,m,b,b+1,b);_&&i.push(_)}if(this.isLineLoop){const b=vc(this,e,Uo,m,A-1,M,A-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function vc(o,e,i,s,l,u,d){const h=o.geometry.attributes.position;if(Lc.fromBufferAttribute(h,l),Oc.fromBufferAttribute(h,u),i.distanceSqToSegment(Lc,Oc,Md,Y0)>s)return;Md.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Md);if(!(p<e.near||p>e.far))return{distance:p,point:Y0.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class ov extends Es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Z0=new Ze,gh=new Rh,xc=new Ho,yc=new at;class KM extends vn{constructor(e=new fi,i=new ov){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(l),xc.radius+=u,e.ray.intersectsSphere(xc)===!1)return;Z0.copy(l).invert(),gh.copy(e.ray).applyMatrix4(Z0);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,x=s.attributes.position;if(p!==null){const y=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let A=y,b=M;A<b;A++){const S=p.getX(A);yc.fromBufferAttribute(x,S),K0(yc,S,m,l,e,i,this)}}else{const y=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let A=y,b=M;A<b;A++)yc.fromBufferAttribute(x,A),K0(yc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function K0(o,e,i,s,l,u,d){const h=gh.distanceSqToPoint(o);if(h<i){const m=new at;gh.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class lv extends On{constructor(e,i,s,l,u,d,h,m,p,g=yr){if(g!==yr&&g!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===yr&&(s=Ss),s===void 0&&g===Ar&&(s=Tr),super(null,l,u,d,h,m,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Ei,this.minFilter=m!==void 0?m:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zc extends fi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,x=e/h,y=i/m,M=[],A=[],b=[],S=[];for(let _=0;_<g;_++){const I=_*y-d;for(let L=0;L<p;L++){const D=L*x-u;A.push(D,-I,0),b.push(0,0,1),S.push(L/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<h;I++){const L=I+p*_,D=I+p*(_+1),j=I+1+p*(_+1),G=I+1+p*_;M.push(L,D,G),M.push(D,j,G)}this.setIndex(M),this.setAttribute("position",new Ti(A,3)),this.setAttribute("normal",new Ti(b,3)),this.setAttribute("uv",new Ti(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.width,e.height,e.widthSegments,e.heightSegments)}}class wh extends fi{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const g=[],x=new at,y=new at,M=[],A=[],b=[],S=[];for(let _=0;_<=s;_++){const I=[],L=_/s;let D=0;_===0&&d===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let j=0;j<=i;j++){const G=j/i;x.x=-e*Math.cos(l+G*u)*Math.sin(d+L*h),x.y=e*Math.cos(d+L*h),x.z=e*Math.sin(l+G*u)*Math.sin(d+L*h),A.push(x.x,x.y,x.z),y.copy(x).normalize(),b.push(y.x,y.y,y.z),S.push(G+D,1-L),I.push(p++)}g.push(I)}for(let _=0;_<s;_++)for(let I=0;I<i;I++){const L=g[_][I+1],D=g[_][I],j=g[_+1][I],G=g[_+1][I+1];(_!==0||d>0)&&M.push(L,D,G),(_!==s-1||m<Math.PI)&&M.push(D,j,G)}this.setIndex(M),this.setAttribute("position",new Ti(A,3)),this.setAttribute("normal",new Ti(b,3)),this.setAttribute("uv",new Ti(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class QM extends Es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W_,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JM extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $M extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Q0={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class tE{constructor(e,i,s){const l=this;let u=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.itemStart=function(g){h++,u===!1&&l.onStart!==void 0&&l.onStart(g,d,h),u=!0},this.itemEnd=function(g){d++,l.onProgress!==void 0&&l.onProgress(g,d,h),d===h&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,y=p.length;x<y;x+=2){const M=p[x],A=p[x+1];if(M.global&&(M.lastIndex=0),M.test(g))return A}return null}}}const eE=new tE;class Dh{constructor(e){this.manager=e!==void 0?e:eE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Dh.DEFAULT_MATERIAL_NAME="__DEFAULT";class nE extends Dh{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,d=Q0.get(e);if(d!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(d),u.manager.itemEnd(e)},0),d;const h=Po("img");function m(){g(),Q0.add(e,this),i&&i(this),u.manager.itemEnd(e)}function p(x){g(),l&&l(x),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),u.manager.itemStart(e),h.src=e,h}}class iE extends Dh{constructor(e){super(e)}load(e,i,s,l){const u=new On,d=new nE(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){u.image=h,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class cv extends vn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ed=new Ze,J0=new at,$0=new at;class aE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;J0.setFromMatrixPosition(e.matrixWorld),i.position.copy(J0),$0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt($0),i.updateMatrixWorld(),Ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uv extends av{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sE extends aE{constructor(){super(new uv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rE extends cv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new sE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oE extends cv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class lE extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class cE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=t_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=t_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function t_(){return performance.now()}function e_(o,e,i,s){const l=uE(s);switch(i){case H_:return o*e;case V_:return o*e;case k_:return o*e*2;case X_:return o*e/l.components*l.byteLength;case bh:return o*e/l.components*l.byteLength;case j_:return o*e*2/l.components*l.byteLength;case Th:return o*e*2/l.components*l.byteLength;case G_:return o*e*3/l.components*l.byteLength;case Mi:return o*e*4/l.components*l.byteLength;case Ah:return o*e*4/l.components*l.byteLength;case Tc:case Ac:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xd:case qd:return Math.max(o,16)*Math.max(e,8)/4;case kd:case jd:return Math.max(o,8)*Math.max(e,8)/2;case Wd:case Yd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Zd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case nh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ih:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case sh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case oh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case lh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ch:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case wc:case uh:case fh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case q_:case dh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case hh:case ph:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function uE(o){switch(o){case ca:case I_:return{byteLength:1,components:1};case Oo:case B_:case zo:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case Ss:case Sh:case ra:return{byteLength:4,components:1};case F_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fv(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function fE(o){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const g=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,g);else{x.sort((M,A)=>M.start-A.start);let y=0;for(let M=1;M<x.length;M++){const A=x[y],b=x[M];b.start<=A.start+A.count+1?A.count=Math.max(A.count,b.start+b.count-A.start):(++y,x[y]=b)}x.length=y+1;for(let M=0,A=x.length;M<A;M++){const b=x[M];o.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var dE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hE=`#ifdef USE_ALPHAHASH
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
#endif`,pE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vE=`#ifdef USE_AOMAP
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
#endif`,xE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yE=`#ifdef USE_BATCHING
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
#endif`,SE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ME=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TE=`#ifdef USE_IRIDESCENCE
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
#endif`,AE=`#ifdef USE_BUMPMAP
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
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PE=`#define PI 3.141592653589793
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
} // validated`,zE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IE=`vec3 transformedNormal = objectNormal;
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
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VE="gl_FragColor = linearToOutputTexel( gl_FragColor );",kE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,WE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$E=`#ifdef USE_GRADIENTMAP
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
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i1=`uniform bool receiveShadow;
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
#endif`,a1=`#ifdef USE_ENVMAP
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
#endif`,s1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c1=`PhysicalMaterial material;
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
#endif`,u1=`struct PhysicalMaterial {
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
}`,f1=`
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
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
#endif`,h1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S1=`#if defined( USE_POINTS_UV )
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
#endif`,M1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
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
#endif`,C1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O1=`#ifdef USE_NORMALMAP
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
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K1=`float getShadowMask() {
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
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,$1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tb=`#ifdef USE_SKINNING
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
#endif`,eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ab=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`#include <common>
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
}`,vb=`#if DEPTH_PACKING == 3200
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
}`,xb=`#define DISTANCE
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
}`,yb=`#define DISTANCE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`uniform float scale;
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
}`,bb=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,Ab=`uniform vec3 diffuse;
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
}`,Rb=`#define LAMBERT
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
}`,Cb=`#define LAMBERT
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
}`,wb=`#define MATCAP
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
}`,Db=`#define MATCAP
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
}`,Ub=`#define NORMAL
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
}`,Nb=`#define NORMAL
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
}`,Lb=`#define PHONG
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
}`,Ob=`#define PHONG
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
}`,Pb=`#define STANDARD
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
}`,zb=`#define STANDARD
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
}`,Ib=`#define TOON
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
}`,Bb=`#define TOON
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
}`,Fb=`uniform float size;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Gb=`#include <common>
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
}`,Vb=`uniform vec3 color;
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
}`,kb=`uniform float rotation;
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
}`,Xb=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:dE,alphahash_pars_fragment:hE,alphamap_fragment:pE,alphamap_pars_fragment:mE,alphatest_fragment:gE,alphatest_pars_fragment:_E,aomap_fragment:vE,aomap_pars_fragment:xE,batching_pars_vertex:yE,batching_vertex:SE,begin_vertex:ME,beginnormal_vertex:EE,bsdfs:bE,iridescence_fragment:TE,bumpmap_pars_fragment:AE,clipping_planes_fragment:RE,clipping_planes_pars_fragment:CE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:DE,color_fragment:UE,color_pars_fragment:NE,color_pars_vertex:LE,color_vertex:OE,common:PE,cube_uv_reflection_fragment:zE,defaultnormal_vertex:IE,displacementmap_pars_vertex:BE,displacementmap_vertex:FE,emissivemap_fragment:HE,emissivemap_pars_fragment:GE,colorspace_fragment:VE,colorspace_pars_fragment:kE,envmap_fragment:XE,envmap_common_pars_fragment:jE,envmap_pars_fragment:qE,envmap_pars_vertex:WE,envmap_physical_pars_fragment:a1,envmap_vertex:YE,fog_vertex:ZE,fog_pars_vertex:KE,fog_fragment:QE,fog_pars_fragment:JE,gradientmap_pars_fragment:$E,lightmap_pars_fragment:t1,lights_lambert_fragment:e1,lights_lambert_pars_fragment:n1,lights_pars_begin:i1,lights_toon_fragment:s1,lights_toon_pars_fragment:r1,lights_phong_fragment:o1,lights_phong_pars_fragment:l1,lights_physical_fragment:c1,lights_physical_pars_fragment:u1,lights_fragment_begin:f1,lights_fragment_maps:d1,lights_fragment_end:h1,logdepthbuf_fragment:p1,logdepthbuf_pars_fragment:m1,logdepthbuf_pars_vertex:g1,logdepthbuf_vertex:_1,map_fragment:v1,map_pars_fragment:x1,map_particle_fragment:y1,map_particle_pars_fragment:S1,metalnessmap_fragment:M1,metalnessmap_pars_fragment:E1,morphinstance_vertex:b1,morphcolor_vertex:T1,morphnormal_vertex:A1,morphtarget_pars_vertex:R1,morphtarget_vertex:C1,normal_fragment_begin:w1,normal_fragment_maps:D1,normal_pars_fragment:U1,normal_pars_vertex:N1,normal_vertex:L1,normalmap_pars_fragment:O1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:z1,clearcoat_pars_fragment:I1,iridescence_pars_fragment:B1,opaque_fragment:F1,packing:H1,premultiplied_alpha_fragment:G1,project_vertex:V1,dithering_fragment:k1,dithering_pars_fragment:X1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:q1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:Y1,shadowmap_vertex:Z1,shadowmask_pars_fragment:K1,skinbase_vertex:Q1,skinning_pars_vertex:J1,skinning_vertex:$1,skinnormal_vertex:tb,specularmap_fragment:eb,specularmap_pars_fragment:nb,tonemapping_fragment:ib,tonemapping_pars_fragment:ab,transmission_fragment:sb,transmission_pars_fragment:rb,uv_pars_fragment:ob,uv_pars_vertex:lb,uv_vertex:cb,worldpos_vertex:ub,background_vert:fb,background_frag:db,backgroundCube_vert:hb,backgroundCube_frag:pb,cube_vert:mb,cube_frag:gb,depth_vert:_b,depth_frag:vb,distanceRGBA_vert:xb,distanceRGBA_frag:yb,equirect_vert:Sb,equirect_frag:Mb,linedashed_vert:Eb,linedashed_frag:bb,meshbasic_vert:Tb,meshbasic_frag:Ab,meshlambert_vert:Rb,meshlambert_frag:Cb,meshmatcap_vert:wb,meshmatcap_frag:Db,meshnormal_vert:Ub,meshnormal_frag:Nb,meshphong_vert:Lb,meshphong_frag:Ob,meshphysical_vert:Pb,meshphysical_frag:zb,meshtoon_vert:Ib,meshtoon_frag:Bb,points_vert:Fb,points_frag:Hb,shadow_vert:Gb,shadow_frag:Vb,sprite_vert:kb,sprite_frag:Xb},Ot={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ui={basic:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Ln([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Ln([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Ln([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Ln([Ot.points,Ot.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Ln([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Ln([Ot.common,Ot.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Ln([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Ln([Ot.sprite,Ot.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Ln([Ot.common,Ot.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Ln([Ot.lights,Ot.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ui.physical={uniforms:Ln([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Sc={r:0,b:0,g:0},hs=new Oi,jb=new Ze;function qb(o,e,i,s,l,u,d){const h=new Te(0);let m=u===!0?0:1,p,g,x=null,y=0,M=null;function A(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function b(L){let D=!1;const j=A(L);j===null?_(h,m):j&&j.isColor&&(_(j,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,D){const j=A(D);j&&(j.isCubeTexture||j.mapping===Pc)?(g===void 0&&(g=new Li(new Go(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Cr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),hs.copy(D.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),g.material.uniforms.envMap.value=j,g.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(hs)),g.material.toneMapped=we.getTransfer(j.colorSpace)!==Ge,(x!==j||y!==j.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,x=j,y=j.version,M=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new Li(new zc(2,2),new ka({name:"BackgroundMaterial",uniforms:Cr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(j.colorSpace)!==Ge,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(x!==j||y!==j.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=j,y=j.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(Sc,iv(o)),s.buffers.color.setClear(Sc.r,Sc.g,Sc.b,D,d)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(h,m)},render:b,addToRenderList:S,dispose:I}}function Wb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,d=!1;function h(C,H,lt,rt,_t){let mt=!1;const z=x(rt,lt,H);u!==z&&(u=z,p(u.object)),mt=M(C,rt,lt,_t),mt&&A(C,rt,lt,_t),_t!==null&&e.update(_t,o.ELEMENT_ARRAY_BUFFER),(mt||d)&&(d=!1,D(C,H,lt,rt),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function x(C,H,lt){const rt=lt.wireframe===!0;let _t=s[C.id];_t===void 0&&(_t={},s[C.id]=_t);let mt=_t[H.id];mt===void 0&&(mt={},_t[H.id]=mt);let z=mt[rt];return z===void 0&&(z=y(m()),mt[rt]=z),z}function y(C){const H=[],lt=[],rt=[];for(let _t=0;_t<i;_t++)H[_t]=0,lt[_t]=0,rt[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:lt,attributeDivisors:rt,object:C,attributes:{},index:null}}function M(C,H,lt,rt){const _t=u.attributes,mt=H.attributes;let z=0;const Q=lt.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const dt=_t[Z];let N=mt[Z];if(N===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),dt===void 0||dt.attribute!==N||N&&dt.data!==N.data)return!0;z++}return u.attributesNum!==z||u.index!==rt}function A(C,H,lt,rt){const _t={},mt=H.attributes;let z=0;const Q=lt.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let dt=mt[Z];dt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(dt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(dt=C.instanceColor));const N={};N.attribute=dt,dt&&dt.data&&(N.data=dt.data),_t[Z]=N,z++}u.attributes=_t,u.attributesNum=z,u.index=rt}function b(){const C=u.newAttributes;for(let H=0,lt=C.length;H<lt;H++)C[H]=0}function S(C){_(C,0)}function _(C,H){const lt=u.newAttributes,rt=u.enabledAttributes,_t=u.attributeDivisors;lt[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),_t[C]!==H&&(o.vertexAttribDivisor(C,H),_t[C]=H)}function I(){const C=u.newAttributes,H=u.enabledAttributes;for(let lt=0,rt=H.length;lt<rt;lt++)H[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),H[lt]=0)}function L(C,H,lt,rt,_t,mt,z){z===!0?o.vertexAttribIPointer(C,H,lt,_t,mt):o.vertexAttribPointer(C,H,lt,rt,_t,mt)}function D(C,H,lt,rt){b();const _t=rt.attributes,mt=lt.getAttributes(),z=H.defaultAttributeValues;for(const Q in mt){const Z=mt[Q];if(Z.location>=0){let ct=_t[Q];if(ct===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),ct!==void 0){const dt=ct.normalized,N=ct.itemSize,J=e.get(ct);if(J===void 0)continue;const Mt=J.buffer,Y=J.type,ft=J.bytesPerElement,bt=Y===o.INT||Y===o.UNSIGNED_INT||ct.gpuType===Sh;if(ct.isInterleavedBufferAttribute){const St=ct.data,Ft=St.stride,Wt=ct.offset;if(St.isInstancedInterleavedBuffer){for(let Yt=0;Yt<Z.locationSize;Yt++)_(Z.location+Yt,St.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Yt=0;Yt<Z.locationSize;Yt++)S(Z.location+Yt);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let Yt=0;Yt<Z.locationSize;Yt++)L(Z.location+Yt,N/Z.locationSize,Y,dt,Ft*ft,(Wt+N/Z.locationSize*Yt)*ft,bt)}else{if(ct.isInstancedBufferAttribute){for(let St=0;St<Z.locationSize;St++)_(Z.location+St,ct.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let St=0;St<Z.locationSize;St++)S(Z.location+St);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let St=0;St<Z.locationSize;St++)L(Z.location+St,N/Z.locationSize,Y,dt,N*ft,N/Z.locationSize*St*ft,bt)}}else if(z!==void 0){const dt=z[Q];if(dt!==void 0)switch(dt.length){case 2:o.vertexAttrib2fv(Z.location,dt);break;case 3:o.vertexAttrib3fv(Z.location,dt);break;case 4:o.vertexAttrib4fv(Z.location,dt);break;default:o.vertexAttrib1fv(Z.location,dt)}}}}I()}function j(){X();for(const C in s){const H=s[C];for(const lt in H){const rt=H[lt];for(const _t in rt)g(rt[_t].object),delete rt[_t];delete H[lt]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const lt in H){const rt=H[lt];for(const _t in rt)g(rt[_t].object),delete rt[_t];delete H[lt]}delete s[C.id]}function O(C){for(const H in s){const lt=s[H];if(lt[C.id]===void 0)continue;const rt=lt[C.id];for(const _t in rt)g(rt[_t].object),delete rt[_t];delete lt[C.id]}}function X(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:w,dispose:j,releaseStatesOfGeometry:G,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:S,disableUnusedAttributes:I}}function Yb(o,e,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function d(p,g,x){x!==0&&(o.drawArraysInstanced(s,p,g,x),i.update(g,s,x))}function h(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let M=0;for(let A=0;A<x;A++)M+=g[A];i.update(M,s,1)}function m(p,g,x,y){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],g[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,x);let A=0;for(let b=0;b<x;b++)A+=g[b]*y[b];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Zb(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Mi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const X=O===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ca&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ra&&!X)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),j=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:A,maxTextureSize:b,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:j,maxSamples:G}}function Kb(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new ms,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||s!==0||l;return l=y,s=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,M){const A=x.clippingPlanes,b=x.clipIntersection,S=x.clipShadows,_=o.get(x);if(!l||A===null||A.length===0||u&&!S)u?g(null):p();else{const I=u?0:s,L=I*4;let D=_.clippingState||null;m.value=D,D=g(A,y,L,M);for(let j=0;j!==L;++j)D[j]=i[j];_.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,y,M,A){const b=x!==null?x.length:0;let S=null;if(b!==0){if(S=m.value,A!==!0||S===null){const _=M+b*4,I=y.matrixWorldInverse;h.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,D=M;L!==b;++L,D+=4)d.copy(x[L]).applyMatrix4(I,h),d.normal.toArray(S,D),S[D+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function Qb(o){let e=new WeakMap;function i(d,h){return h===Fd?d.mapping=Er:h===Hd&&(d.mapping=br),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Fd||h===Hd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new XM(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const vr=4,n_=[.125,.215,.35,.446,.526,.582],vs=20,bd=new uv,i_=new Te;let Td=null,Ad=0,Rd=0,Cd=!1;const gs=(1+Math.sqrt(5))/2,gr=1/gs,a_=[new at(-gs,gr,0),new at(gs,gr,0),new at(-gr,0,gs),new at(gr,0,gs),new at(0,gs,-gr),new at(0,gs,gr),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)];class s_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Td,Ad,Rd),this._renderer.xr.enabled=Cd,e.scissorTest=!1,Mc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Er||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:zo,format:Mi,colorSpace:Rr,depthBuffer:!1},l=r_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jb(u)),this._blurMaterial=$b(u,e,i)}return l}_compileMaterial(e){const i=new Li(this._lodPlanes[0],e);this._renderer.compile(i,bd)}_sceneToCubeUV(e,i,s,l){const h=new ui(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(i_),g.toneMapping=Ga,g.autoClear=!1;const M=new tv({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),A=new Li(new Go,M);let b=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,b=!0):(M.color.copy(i_),b=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(h.up.set(0,m[_],0),h.lookAt(p[_],0,0)):I===1?(h.up.set(0,0,m[_]),h.lookAt(0,p[_],0)):(h.up.set(0,m[_],0),h.lookAt(0,0,p[_]));const L=this._cubeSize;Mc(l,I*L,_>2?L:0,L,L),g.setRenderTarget(l),b&&g.render(A,h),g.render(e,h)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=y,g.autoClear=x,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Er||e.mapping===br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=l_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Li(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Mc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,bd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=a_[(l-u-1)%a_.length];this._blur(e,u-1,u,d,h)}i.autoClear=s}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Li(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*vs-1),b=u/A,S=isFinite(u)?1+Math.floor(g*b):vs;S>vs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vs}`);const _=[];let I=0;for(let O=0;O<vs;++O){const X=O/b,w=Math.exp(-X*X/2);_.push(w),O===0?I+=w:O<S&&(I+=2*w)}for(let O=0;O<_.length;O++)_[O]=_[O]/I;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=A,y.mipInt.value=L-s;const D=this._sizeLods[l],j=3*D*(l>L-vr?l-L+vr:0),G=4*(this._cubeSize-D);Mc(i,j,G,3*D,2*D),m.setRenderTarget(i),m.render(x,bd)}}function Jb(o){const e=[],i=[],s=[];let l=o;const u=o-vr+1+n_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-vr?m=n_[d-o+vr-1]:d===0&&(m=0),s.push(m);const p=1/(h-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,A=6,b=3,S=2,_=1,I=new Float32Array(b*A*M),L=new Float32Array(S*A*M),D=new Float32Array(_*A*M);for(let G=0;G<M;G++){const O=G%3*2/3-1,X=G>2?0:-1,w=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];I.set(w,b*A*G),L.set(y,S*A*G);const C=[G,G,G,G,G,G];D.set(C,_*A*G)}const j=new fi;j.setAttribute("position",new bi(I,b)),j.setAttribute("uv",new bi(L,S)),j.setAttribute("faceIndex",new bi(D,_)),e.push(j),l>vr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function r_(o,e,i){const s=new Ms(o,e,i);return s.texture.mapping=Pc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Mc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function $b(o,e,i){const s=new Float32Array(vs),l=new at(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function o_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function l_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Uh(){return`

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
	`}function tT(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Fd||m===Hd,g=m===Er||m===br;if(p||g){let x=e.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new s_(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new s_(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function eT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&_r("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function nT(o,e,i,s){const l={},u=new WeakMap;function d(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);y.removeEventListener("dispose",d),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const M in y)e.update(y[M],o.ARRAY_BUFFER)}function p(x){const y=[],M=x.index,A=x.attributes.position;let b=0;if(M!==null){const I=M.array;b=M.version;for(let L=0,D=I.length;L<D;L+=3){const j=I[L+0],G=I[L+1],O=I[L+2];y.push(j,G,G,O,O,j)}}else if(A!==void 0){const I=A.array;b=A.version;for(let L=0,D=I.length/3-1;L<D;L+=3){const j=L+0,G=L+1,O=L+2;y.push(j,G,G,O,O,j)}}else return;const S=new(Z_(y)?nv:ev)(y,1);S.version=b;const _=u.get(x);_&&e.remove(_),u.set(x,S)}function g(x){const y=u.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function iT(o,e,i){let s;function l(y){s=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function m(y,M){o.drawElements(s,M,u,y*d),i.update(M,s,1)}function p(y,M,A){A!==0&&(o.drawElementsInstanced(s,M,u,y*d,A),i.update(M,s,A))}function g(y,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,y,0,A);let S=0;for(let _=0;_<A;_++)S+=M[_];i.update(S,s,1)}function x(y,M,A,b){if(A===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/d,M[_],b[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,u,y,0,b,0,A);let _=0;for(let I=0;I<A;I++)_+=M[I]*b[I];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function aT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function sT(o,e,i){const s=new WeakMap,l=new tn;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let y=s.get(h);if(y===void 0||y.count!==x){let C=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const A=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;A===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let j=h.attributes.position.count*D,G=1;j>e.maxTextureSize&&(G=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const O=new Float32Array(j*G*4*x),X=new Q_(O,j,G,x);X.type=ra,X.needsUpdate=!0;const w=D*4;for(let H=0;H<x;H++){const lt=_[H],rt=I[H],_t=L[H],mt=j*G*4*H;for(let z=0;z<lt.count;z++){const Q=z*w;A===!0&&(l.fromBufferAttribute(lt,z),O[mt+Q+0]=l.x,O[mt+Q+1]=l.y,O[mt+Q+2]=l.z,O[mt+Q+3]=0),b===!0&&(l.fromBufferAttribute(rt,z),O[mt+Q+4]=l.x,O[mt+Q+5]=l.y,O[mt+Q+6]=l.z,O[mt+Q+7]=0),S===!0&&(l.fromBufferAttribute(_t,z),O[mt+Q+8]=l.x,O[mt+Q+9]=l.y,O[mt+Q+10]=l.z,O[mt+Q+11]=_t.itemSize===4?l.w:1)}}y={count:x,texture:X,size:new Ue(j,G)},s.set(h,y),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<p.length;S++)A+=p[S];const b=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function rT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const dv=new On,c_=new lv(1,1),hv=new Q_,pv=new RM,mv=new sv,u_=[],f_=[],d_=new Float32Array(16),h_=new Float32Array(9),p_=new Float32Array(4);function Dr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=u_[l];if(u===void 0&&(u=new Float32Array(l),u_[l]=u),e!==0){s.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Ic(o,e){let i=f_[e];i===void 0&&(i=new Int32Array(e),f_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function oT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function fT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,s))return;p_.set(s),o.uniformMatrix2fv(this.addr,!1,p_),pn(i,s)}}function dT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,s))return;h_.set(s),o.uniformMatrix3fv(this.addr,!1,h_),pn(i,s)}}function hT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,s))return;d_.set(s),o.uniformMatrix4fv(this.addr,!1,d_),pn(i,s)}}function pT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function vT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function MT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(c_.compareFunction=Y_,u=c_):u=dv,i.setTexture2D(e||u,l)}function ET(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||pv,l)}function bT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||mv,l)}function TT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||hv,l)}function AT(o){switch(o){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(o,e){o.uniform1fv(this.addr,e)}function CT(o,e){const i=Dr(e,this.size,2);o.uniform2fv(this.addr,i)}function wT(o,e){const i=Dr(e,this.size,3);o.uniform3fv(this.addr,i)}function DT(o,e){const i=Dr(e,this.size,4);o.uniform4fv(this.addr,i)}function UT(o,e){const i=Dr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function NT(o,e){const i=Dr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function LT(o,e){const i=Dr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function OT(o,e){o.uniform1iv(this.addr,e)}function PT(o,e){o.uniform2iv(this.addr,e)}function zT(o,e){o.uniform3iv(this.addr,e)}function IT(o,e){o.uniform4iv(this.addr,e)}function BT(o,e){o.uniform1uiv(this.addr,e)}function FT(o,e){o.uniform2uiv(this.addr,e)}function HT(o,e){o.uniform3uiv(this.addr,e)}function GT(o,e){o.uniform4uiv(this.addr,e)}function VT(o,e,i){const s=this.cache,l=e.length,u=Ic(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||dv,u[d])}function kT(o,e,i){const s=this.cache,l=e.length,u=Ic(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||pv,u[d])}function XT(o,e,i){const s=this.cache,l=e.length,u=Ic(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||mv,u[d])}function jT(o,e,i){const s=this.cache,l=e.length,u=Ic(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||hv,u[d])}function qT(o){switch(o){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return NT;case 35676:return LT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return zT;case 35669:case 35673:return IT;case 5125:return BT;case 36294:return FT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return jT}}class WT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=AT(i.type)}}class YT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qT(i.type)}}class ZT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function m_(o,e){o.seq.push(e),o.map[e.id]=e}function KT(o,e,i){const s=o.name,l=s.length;for(wd.lastIndex=0;;){const u=wd.exec(s),d=wd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){m_(i,p===void 0?new WT(h,o,e):new YT(h,o,e));break}else{let x=i.map[h];x===void 0&&(x=new ZT(h),m_(i,x)),i=x}}}class Dc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);KT(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function g_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const QT=37297;let JT=0;function $T(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const __=new fe;function tA(o){we._getMatrix(__,we.workingColorSpace,o);const e=`mat3( ${__.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Uc:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function v_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+$T(o.getShaderSource(e),d)}else return l}function eA(o,e){const i=tA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function nA(o,e){let i;switch(e){case $S:i="Linear";break;case tM:i="Reinhard";break;case eM:i="Cineon";break;case nM:i="ACESFilmic";break;case aM:i="AgX";break;case sM:i="Neutral";break;case iM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ec=new at;function iA(){we.getLuminanceCoefficients(Ec);const o=Ec.x.toFixed(4),e=Ec.y.toFixed(4),i=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function sA(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function rA(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function No(o){return o!==""}function x_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(o){return o.replace(oA,cA)}const lA=new Map;function cA(o,e){let i=de[e];if(i===void 0){const s=lA.get(e);if(s!==void 0)i=de[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return _h(i)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(o){return o.replace(uA,fA)}function fA(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function M_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===O_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===NS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function hA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Er:case br:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function mA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case P_:e="ENVMAP_BLENDING_MULTIPLY";break;case QS:e="ENVMAP_BLENDING_MIX";break;case JS:e="ENVMAP_BLENDING_ADD";break}return e}function gA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _A(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=dA(i),p=hA(i),g=pA(i),x=mA(i),y=gA(i),M=aA(i),A=sA(u),b=l.createProgram();let S,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(No).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(No).join(`
`),_.length>0&&(_+=`
`)):(S=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),_=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?de.tonemapping_pars_fragment:"",i.toneMapping!==Ga?nA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,eA("linearToOutputTexel",i.outputColorSpace),iA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),d=_h(d),d=x_(d,i),d=y_(d,i),h=_h(h),h=x_(h,i),h=y_(h,i),d=S_(d),h=S_(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===w0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=I+S+d,D=I+_+h,j=g_(l,l.VERTEX_SHADER,L),G=g_(l,l.FRAGMENT_SHADER,D);l.attachShader(b,j),l.attachShader(b,G),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function O(H){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(b).trim(),rt=l.getShaderInfoLog(j).trim(),_t=l.getShaderInfoLog(G).trim();let mt=!0,z=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(mt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,j,G);else{const Q=v_(l,j,"vertex"),Z=v_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+lt+`
`+Q+`
`+Z)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(rt===""||_t==="")&&(z=!1);z&&(H.diagnostics={runnable:mt,programLog:lt,vertexShader:{log:rt,prefix:S},fragmentShader:{log:_t,prefix:_}})}l.deleteShader(j),l.deleteShader(G),X=new Dc(l,b),w=rA(l,b)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,QT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=j,this.fragmentShader=G,this}let vA=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new yA(e),i.set(e,s)),s}}class yA{constructor(e){this.id=vA++,this.code=e,this.usedTimes=0}}function SA(o,e,i,s,l,u,d){const h=new J_,m=new xA,p=new Set,g=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,C,H,lt,rt){const _t=lt.fog,mt=rt.geometry,z=w.isMeshStandardMaterial?lt.environment:null,Q=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),Z=Q&&Q.mapping===Pc?Q.image.height:null,ct=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const dt=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,N=dt!==void 0?dt.length:0;let J=0;mt.morphAttributes.position!==void 0&&(J=1),mt.morphAttributes.normal!==void 0&&(J=2),mt.morphAttributes.color!==void 0&&(J=3);let Mt,Y,ft,bt;if(ct){const be=Ui[ct];Mt=be.vertexShader,Y=be.fragmentShader}else Mt=w.vertexShader,Y=w.fragmentShader,m.update(w),ft=m.getVertexShaderID(w),bt=m.getFragmentShaderID(w);const St=o.getRenderTarget(),Ft=o.state.buffers.depth.getReversed(),Wt=rt.isInstancedMesh===!0,Yt=rt.isBatchedMesh===!0,Ne=!!w.map,Le=!!w.matcap,he=!!Q,F=!!w.aoMap,en=!!w.lightMap,Ct=!!w.bumpMap,qt=!!w.normalMap,Rt=!!w.displacementMap,te=!!w.emissiveMap,zt=!!w.metalnessMap,U=!!w.roughnessMap,E=w.anisotropy>0,$=w.clearcoat>0,ht=w.dispersion>0,Et=w.iridescence>0,vt=w.sheen>0,Xt=w.transmission>0,Ut=E&&!!w.anisotropyMap,Ht=$&&!!w.clearcoatMap,ge=$&&!!w.clearcoatNormalMap,At=$&&!!w.clearcoatRoughnessMap,Gt=Et&&!!w.iridescenceMap,Zt=Et&&!!w.iridescenceThicknessMap,jt=vt&&!!w.sheenColorMap,It=vt&&!!w.sheenRoughnessMap,ee=!!w.specularMap,le=!!w.specularColorMap,ze=!!w.specularIntensityMap,q=Xt&&!!w.transmissionMap,wt=Xt&&!!w.thicknessMap,ut=!!w.gradientMap,yt=!!w.alphaMap,Dt=w.alphaTest>0,Nt=!!w.alphaHash,ie=!!w.extensions;let We=Ga;w.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(We=o.toneMapping);const un={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:Y,defines:w.defines,customVertexShaderID:ft,customFragmentShaderID:bt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Yt,batchingColor:Yt&&rt._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&rt.instanceColor!==null,instancingMorph:Wt&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Rr,alphaToCoverage:!!w.alphaToCoverage,map:Ne,matcap:Le,envMap:he,envMapMode:he&&Q.mapping,envMapCubeUVHeight:Z,aoMap:F,lightMap:en,bumpMap:Ct,normalMap:qt,displacementMap:y&&Rt,emissiveMap:te,normalMapObjectSpace:qt&&w.normalMapType===cM,normalMapTangentSpace:qt&&w.normalMapType===W_,metalnessMap:zt,roughnessMap:U,anisotropy:E,anisotropyMap:Ut,clearcoat:$,clearcoatMap:Ht,clearcoatNormalMap:ge,clearcoatRoughnessMap:At,dispersion:ht,iridescence:Et,iridescenceMap:Gt,iridescenceThicknessMap:Zt,sheen:vt,sheenColorMap:jt,sheenRoughnessMap:It,specularMap:ee,specularColorMap:le,specularIntensityMap:ze,transmission:Xt,transmissionMap:q,thicknessMap:wt,gradientMap:ut,opaque:w.transparent===!1&&w.blending===xr&&w.alphaToCoverage===!1,alphaMap:yt,alphaTest:Dt,alphaHash:Nt,combine:w.combine,mapUv:Ne&&b(w.map.channel),aoMapUv:F&&b(w.aoMap.channel),lightMapUv:en&&b(w.lightMap.channel),bumpMapUv:Ct&&b(w.bumpMap.channel),normalMapUv:qt&&b(w.normalMap.channel),displacementMapUv:Rt&&b(w.displacementMap.channel),emissiveMapUv:te&&b(w.emissiveMap.channel),metalnessMapUv:zt&&b(w.metalnessMap.channel),roughnessMapUv:U&&b(w.roughnessMap.channel),anisotropyMapUv:Ut&&b(w.anisotropyMap.channel),clearcoatMapUv:Ht&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:ge&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:It&&b(w.sheenRoughnessMap.channel),specularMapUv:ee&&b(w.specularMap.channel),specularColorMapUv:le&&b(w.specularColorMap.channel),specularIntensityMapUv:ze&&b(w.specularIntensityMap.channel),transmissionMapUv:q&&b(w.transmissionMap.channel),thicknessMapUv:wt&&b(w.thicknessMap.channel),alphaMapUv:yt&&b(w.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(qt||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!mt.attributes.uv&&(Ne||yt),fog:!!_t,useFog:w.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ft,skinning:rt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:We,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&we.getTransfer(w.map.colorSpace)===Ge,decodeVideoTextureEmissive:te&&w.emissiveMap.isVideoTexture===!0&&we.getTransfer(w.emissiveMap.colorSpace)===Ge,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sa,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ie&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&w.extensions.multiDraw===!0||Yt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return un.vertexUv1s=p.has(1),un.vertexUv2s=p.has(2),un.vertexUv3s=p.has(3),p.clear(),un}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)C.push(H),C.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(I(C,w),L(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function I(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const C=A[w.type];let H;if(C){const lt=Ui[C];H=HM.clone(lt.uniforms)}else H=w.uniforms;return H}function j(w,C){let H;for(let lt=0,rt=g.length;lt<rt;lt++){const _t=g[lt];if(_t.cacheKey===C){H=_t,++H.usedTimes;break}}return H===void 0&&(H=new _A(o,C,w,u),g.push(H)),H}function G(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function O(w){m.remove(w)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:j,releaseProgram:G,releaseShaderCache:O,programs:g,dispose:X}}function MA(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function EA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function E_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function b_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(x,y,M,A,b,S){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:y,material:M,groupOrder:A,renderOrder:x.renderOrder,z:b,group:S},o[e]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=M,_.groupOrder=A,_.renderOrder=x.renderOrder,_.z=b,_.group=S),e++,_}function h(x,y,M,A,b,S){const _=d(x,y,M,A,b,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,y,M,A,b,S){const _=d(x,y,M,A,b,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,y){i.length>1&&i.sort(x||EA),s.length>1&&s.sort(y||E_),l.length>1&&l.sort(y||E_)}function g(){for(let x=e,y=o.length;x<y;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function bA(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new b_,o.set(s,[d])):l>=u.length?(d=new b_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function TA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new Te};break;case"SpotLight":i={position:new at,direction:new at,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function AA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let RA=0;function CA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function wA(o){const e=new TA,i=AA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new at);const l=new at,u=new Ze,d=new Ze;function h(p){let g=0,x=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,A=0,b=0,S=0,_=0,I=0,L=0,D=0,j=0,G=0,O=0;p.sort(CA);for(let w=0,C=p.length;w<C;w++){const H=p[w],lt=H.color,rt=H.intensity,_t=H.distance,mt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=lt.r*rt,x+=lt.g*rt,y+=lt.b*rt;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],rt);O++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Q=H.shadow,Z=i.get(H);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=mt,s.directionalShadowMatrix[M]=H.shadow.matrix,I++}s.directional[M]=z,M++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(lt).multiplyScalar(rt),z.distance=_t,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[b]=z;const Q=H.shadow;if(H.map&&(s.spotLightMap[j]=H.map,j++,Q.updateMatrices(H),H.castShadow&&G++),s.spotLightMatrix[b]=Q.matrix,H.castShadow){const Z=i.get(H);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.spotShadow[b]=Z,s.spotShadowMap[b]=mt,D++}b++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(lt).multiplyScalar(rt),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=z,S++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const Q=H.shadow,Z=i.get(H);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,s.pointShadow[A]=Z,s.pointShadowMap[A]=mt,s.pointShadowMatrix[A]=H.shadow.matrix,L++}s.point[A]=z,A++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(rt),z.groundColor.copy(H.groundColor).multiplyScalar(rt),s.hemi[_]=z,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=y;const X=s.hash;(X.directionalLength!==M||X.pointLength!==A||X.spotLength!==b||X.rectAreaLength!==S||X.hemiLength!==_||X.numDirectionalShadows!==I||X.numPointShadows!==L||X.numSpotShadows!==D||X.numSpotMaps!==j||X.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=S,s.point.length=A,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+j-G,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=O,X.directionalLength=M,X.pointLength=A,X.spotLength=b,X.rectAreaLength=S,X.hemiLength=_,X.numDirectionalShadows=I,X.numPointShadows=L,X.numSpotShadows=D,X.numSpotMaps=j,X.numLightProbes=O,s.version=RA++)}function m(p,g){let x=0,y=0,M=0,A=0,b=0;const S=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const L=p[_];if(L.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),x++}else if(L.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const D=s.rectArea[A];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),d.identity(),u.copy(L.matrixWorld),u.premultiply(S),d.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),A++}else if(L.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const D=s.hemi[b];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:h,setupView:m,state:s}}function T_(o){const e=new wA(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function d(g){s.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function DA(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new T_(o),e.set(l,[h])):u>=d.length?(h=new T_(o),d.push(h)):h=d[u],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NA=`uniform sampler2D shadow_pass;
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
}`;function LA(o,e,i){let s=new Ch;const l=new Ue,u=new Ue,d=new tn,h=new JM({depthPacking:lM}),m=new $M,p={},g=i.maxTextureSize,x={[Va]:Xn,[Xn]:Va,[sa]:sa},y=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:UA,fragmentShader:NA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new fi;A.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Li(A,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O_;let _=this.type;this.render=function(G,O,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ha),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const rt=_!==aa&&this.type===aa,_t=_===aa&&this.type!==aa;for(let mt=0,z=G.length;mt<z;mt++){const Q=G[mt],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const ct=Z.getFrameExtents();if(l.multiply(ct),u.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ct.x),l.x=u.x*ct.x,Z.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ct.y),l.y=u.y*ct.y,Z.mapSize.y=u.y)),Z.map===null||rt===!0||_t===!0){const N=this.type!==aa?{minFilter:Ei,magFilter:Ei}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ms(l.x,l.y,N),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const dt=Z.getViewportCount();for(let N=0;N<dt;N++){const J=Z.getViewport(N);d.set(u.x*J.x,u.y*J.y,u.x*J.z,u.y*J.w),lt.viewport(d),Z.updateMatrices(Q,N),s=Z.getFrustum(),D(O,X,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===aa&&I(Z,X),Z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(w,C,H)};function I(G,O){const X=e.update(b);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ms(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(O,null,X,y,b,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(O,null,X,M,b,null)}function L(G,O,X,w){let C=null;const H=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)C=H;else if(C=X.isPointLight===!0?m:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const lt=C.uuid,rt=O.uuid;let _t=p[lt];_t===void 0&&(_t={},p[lt]=_t);let mt=_t[rt];mt===void 0&&(mt=C.clone(),_t[rt]=mt,O.addEventListener("dispose",j)),C=mt}if(C.visible=O.visible,C.wireframe=O.wireframe,w===aa?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:x[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=X}return C}function D(G,O,X,w,C){if(G.visible===!1)return;if(G.layers.test(O.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===aa)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const rt=e.update(G),_t=G.material;if(Array.isArray(_t)){const mt=rt.groups;for(let z=0,Q=mt.length;z<Q;z++){const Z=mt[z],ct=_t[Z.materialIndex];if(ct&&ct.visible){const dt=L(G,ct,w,C);G.onBeforeShadow(o,G,O,X,rt,dt,Z),o.renderBufferDirect(X,null,rt,dt,G,Z),G.onAfterShadow(o,G,O,X,rt,dt,Z)}}}else if(_t.visible){const mt=L(G,_t,w,C);G.onBeforeShadow(o,G,O,X,rt,mt,null),o.renderBufferDirect(X,null,rt,mt,G,null),G.onAfterShadow(o,G,O,X,rt,mt,null)}}const lt=G.children;for(let rt=0,_t=lt.length;rt<_t;rt++)D(lt[rt],O,X,w,C)}function j(G){G.target.removeEventListener("dispose",j);for(const X in p){const w=p[X],C=G.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const OA={[Nd]:Ld,[Od]:Id,[Pd]:Bd,[Mr]:zd,[Ld]:Nd,[Id]:Od,[Bd]:Pd,[zd]:Mr};function PA(o,e){function i(){let q=!1;const wt=new tn;let ut=null;const yt=new tn(0,0,0,0);return{setMask:function(Dt){ut!==Dt&&!q&&(o.colorMask(Dt,Dt,Dt,Dt),ut=Dt)},setLocked:function(Dt){q=Dt},setClear:function(Dt,Nt,ie,We,un){un===!0&&(Dt*=We,Nt*=We,ie*=We),wt.set(Dt,Nt,ie,We),yt.equals(wt)===!1&&(o.clearColor(Dt,Nt,ie,We),yt.copy(wt))},reset:function(){q=!1,ut=null,yt.set(-1,0,0,0)}}}function s(){let q=!1,wt=!1,ut=null,yt=null,Dt=null;return{setReversed:function(Nt){if(wt!==Nt){const ie=e.get("EXT_clip_control");wt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);const We=Dt;Dt=null,this.setClear(We)}wt=Nt},getReversed:function(){return wt},setTest:function(Nt){Nt?St(o.DEPTH_TEST):Ft(o.DEPTH_TEST)},setMask:function(Nt){ut!==Nt&&!q&&(o.depthMask(Nt),ut=Nt)},setFunc:function(Nt){if(wt&&(Nt=OA[Nt]),yt!==Nt){switch(Nt){case Nd:o.depthFunc(o.NEVER);break;case Ld:o.depthFunc(o.ALWAYS);break;case Od:o.depthFunc(o.LESS);break;case Mr:o.depthFunc(o.LEQUAL);break;case Pd:o.depthFunc(o.EQUAL);break;case zd:o.depthFunc(o.GEQUAL);break;case Id:o.depthFunc(o.GREATER);break;case Bd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}yt=Nt}},setLocked:function(Nt){q=Nt},setClear:function(Nt){Dt!==Nt&&(wt&&(Nt=1-Nt),o.clearDepth(Nt),Dt=Nt)},reset:function(){q=!1,ut=null,yt=null,Dt=null,wt=!1}}}function l(){let q=!1,wt=null,ut=null,yt=null,Dt=null,Nt=null,ie=null,We=null,un=null;return{setTest:function(be){q||(be?St(o.STENCIL_TEST):Ft(o.STENCIL_TEST))},setMask:function(be){wt!==be&&!q&&(o.stencilMask(be),wt=be)},setFunc:function(be,xn,di){(ut!==be||yt!==xn||Dt!==di)&&(o.stencilFunc(be,xn,di),ut=be,yt=xn,Dt=di)},setOp:function(be,xn,di){(Nt!==be||ie!==xn||We!==di)&&(o.stencilOp(be,xn,di),Nt=be,ie=xn,We=di)},setLocked:function(be){q=be},setClear:function(be){un!==be&&(o.clearStencil(be),un=be)},reset:function(){q=!1,wt=null,ut=null,yt=null,Dt=null,Nt=null,ie=null,We=null,un=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},y=new WeakMap,M=[],A=null,b=!1,S=null,_=null,I=null,L=null,D=null,j=null,G=null,O=new Te(0,0,0),X=0,w=!1,C=null,H=null,lt=null,rt=null,_t=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=Q>=2);let ct=null,dt={};const N=o.getParameter(o.SCISSOR_BOX),J=o.getParameter(o.VIEWPORT),Mt=new tn().fromArray(N),Y=new tn().fromArray(J);function ft(q,wt,ut,yt){const Dt=new Uint8Array(4),Nt=o.createTexture();o.bindTexture(q,Nt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<ut;ie++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,yt,0,o.RGBA,o.UNSIGNED_BYTE,Dt):o.texImage2D(wt+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Dt);return Nt}const bt={};bt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),bt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),bt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),St(o.DEPTH_TEST),d.setFunc(Mr),Ct(!1),qt(E0),St(o.CULL_FACE),F(Ha);function St(q){g[q]!==!0&&(o.enable(q),g[q]=!0)}function Ft(q){g[q]!==!1&&(o.disable(q),g[q]=!1)}function Wt(q,wt){return x[q]!==wt?(o.bindFramebuffer(q,wt),x[q]=wt,q===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=wt),q===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function Yt(q,wt){let ut=M,yt=!1;if(q){ut=y.get(wt),ut===void 0&&(ut=[],y.set(wt,ut));const Dt=q.textures;if(ut.length!==Dt.length||ut[0]!==o.COLOR_ATTACHMENT0){for(let Nt=0,ie=Dt.length;Nt<ie;Nt++)ut[Nt]=o.COLOR_ATTACHMENT0+Nt;ut.length=Dt.length,yt=!0}}else ut[0]!==o.BACK&&(ut[0]=o.BACK,yt=!0);yt&&o.drawBuffers(ut)}function Ne(q){return A!==q?(o.useProgram(q),A=q,!0):!1}const Le={[_s]:o.FUNC_ADD,[OS]:o.FUNC_SUBTRACT,[PS]:o.FUNC_REVERSE_SUBTRACT};Le[zS]=o.MIN,Le[IS]=o.MAX;const he={[BS]:o.ZERO,[FS]:o.ONE,[HS]:o.SRC_COLOR,[Dd]:o.SRC_ALPHA,[qS]:o.SRC_ALPHA_SATURATE,[XS]:o.DST_COLOR,[VS]:o.DST_ALPHA,[GS]:o.ONE_MINUS_SRC_COLOR,[Ud]:o.ONE_MINUS_SRC_ALPHA,[jS]:o.ONE_MINUS_DST_COLOR,[kS]:o.ONE_MINUS_DST_ALPHA,[WS]:o.CONSTANT_COLOR,[YS]:o.ONE_MINUS_CONSTANT_COLOR,[ZS]:o.CONSTANT_ALPHA,[KS]:o.ONE_MINUS_CONSTANT_ALPHA};function F(q,wt,ut,yt,Dt,Nt,ie,We,un,be){if(q===Ha){b===!0&&(Ft(o.BLEND),b=!1);return}if(b===!1&&(St(o.BLEND),b=!0),q!==LS){if(q!==S||be!==w){if((_!==_s||D!==_s)&&(o.blendEquation(o.FUNC_ADD),_=_s,D=_s),be)switch(q){case xr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case b0:o.blendFunc(o.ONE,o.ONE);break;case T0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case A0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case xr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case b0:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case T0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case A0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}I=null,L=null,j=null,G=null,O.set(0,0,0),X=0,S=q,w=be}return}Dt=Dt||wt,Nt=Nt||ut,ie=ie||yt,(wt!==_||Dt!==D)&&(o.blendEquationSeparate(Le[wt],Le[Dt]),_=wt,D=Dt),(ut!==I||yt!==L||Nt!==j||ie!==G)&&(o.blendFuncSeparate(he[ut],he[yt],he[Nt],he[ie]),I=ut,L=yt,j=Nt,G=ie),(We.equals(O)===!1||un!==X)&&(o.blendColor(We.r,We.g,We.b,un),O.copy(We),X=un),S=q,w=!1}function en(q,wt){q.side===sa?Ft(o.CULL_FACE):St(o.CULL_FACE);let ut=q.side===Xn;wt&&(ut=!ut),Ct(ut),q.blending===xr&&q.transparent===!1?F(Ha):F(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),u.setMask(q.colorWrite);const yt=q.stencilWrite;h.setTest(yt),yt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),te(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Ft(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(q){C!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),C=q)}function qt(q){q!==DS?(St(o.CULL_FACE),q!==H&&(q===E0?o.cullFace(o.BACK):q===US?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ft(o.CULL_FACE),H=q}function Rt(q){q!==lt&&(z&&o.lineWidth(q),lt=q)}function te(q,wt,ut){q?(St(o.POLYGON_OFFSET_FILL),(rt!==wt||_t!==ut)&&(o.polygonOffset(wt,ut),rt=wt,_t=ut)):Ft(o.POLYGON_OFFSET_FILL)}function zt(q){q?St(o.SCISSOR_TEST):Ft(o.SCISSOR_TEST)}function U(q){q===void 0&&(q=o.TEXTURE0+mt-1),ct!==q&&(o.activeTexture(q),ct=q)}function E(q,wt,ut){ut===void 0&&(ct===null?ut=o.TEXTURE0+mt-1:ut=ct);let yt=dt[ut];yt===void 0&&(yt={type:void 0,texture:void 0},dt[ut]=yt),(yt.type!==q||yt.texture!==wt)&&(ct!==ut&&(o.activeTexture(ut),ct=ut),o.bindTexture(q,wt||bt[q]),yt.type=q,yt.texture=wt)}function $(){const q=dt[ct];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ht(){try{o.compressedTexImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{o.compressedTexImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(){try{o.texSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xt(){try{o.texSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ge(){try{o.texStorage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(){try{o.texImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Zt(){try{o.texImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(q){Mt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),Mt.copy(q))}function It(q){Y.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Y.copy(q))}function ee(q,wt){let ut=p.get(wt);ut===void 0&&(ut=new WeakMap,p.set(wt,ut));let yt=ut.get(q);yt===void 0&&(yt=o.getUniformBlockIndex(wt,q.name),ut.set(q,yt))}function le(q,wt){const yt=p.get(wt).get(q);m.get(wt)!==yt&&(o.uniformBlockBinding(wt,yt,q.__bindingPointIndex),m.set(wt,yt))}function ze(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ct=null,dt={},x={},y=new WeakMap,M=[],A=null,b=!1,S=null,_=null,I=null,L=null,D=null,j=null,G=null,O=new Te(0,0,0),X=0,w=!1,C=null,H=null,lt=null,rt=null,_t=null,Mt.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:St,disable:Ft,bindFramebuffer:Wt,drawBuffers:Yt,useProgram:Ne,setBlending:F,setMaterial:en,setFlipSided:Ct,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:te,setScissorTest:zt,activeTexture:U,bindTexture:E,unbindTexture:$,compressedTexImage2D:ht,compressedTexImage3D:Et,texImage2D:Gt,texImage3D:Zt,updateUBOMapping:ee,uniformBlockBinding:le,texStorage2D:ge,texStorage3D:At,texSubImage2D:vt,texSubImage3D:Xt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Ht,scissor:jt,viewport:It,reset:ze}}function zA(o,e,i,s,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ue,g=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return M?new OffscreenCanvas(U,E):Po("canvas")}function b(U,E,$){let ht=1;const Et=zt(U);if((Et.width>$||Et.height>$)&&(ht=$/Math.max(Et.width,Et.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const vt=Math.floor(ht*Et.width),Xt=Math.floor(ht*Et.height);x===void 0&&(x=A(vt,Xt));const Ut=E?A(vt,Xt):x;return Ut.width=vt,Ut.height=Xt,Ut.getContext("2d").drawImage(U,0,0,vt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+vt+"x"+Xt+")."),Ut}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),U;return U}function S(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,E,$,ht,Et=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let vt=E;if(E===o.RED&&($===o.FLOAT&&(vt=o.R32F),$===o.HALF_FLOAT&&(vt=o.R16F),$===o.UNSIGNED_BYTE&&(vt=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(vt=o.R8UI),$===o.UNSIGNED_SHORT&&(vt=o.R16UI),$===o.UNSIGNED_INT&&(vt=o.R32UI),$===o.BYTE&&(vt=o.R8I),$===o.SHORT&&(vt=o.R16I),$===o.INT&&(vt=o.R32I)),E===o.RG&&($===o.FLOAT&&(vt=o.RG32F),$===o.HALF_FLOAT&&(vt=o.RG16F),$===o.UNSIGNED_BYTE&&(vt=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(vt=o.RG8UI),$===o.UNSIGNED_SHORT&&(vt=o.RG16UI),$===o.UNSIGNED_INT&&(vt=o.RG32UI),$===o.BYTE&&(vt=o.RG8I),$===o.SHORT&&(vt=o.RG16I),$===o.INT&&(vt=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(vt=o.RGB8UI),$===o.UNSIGNED_SHORT&&(vt=o.RGB16UI),$===o.UNSIGNED_INT&&(vt=o.RGB32UI),$===o.BYTE&&(vt=o.RGB8I),$===o.SHORT&&(vt=o.RGB16I),$===o.INT&&(vt=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(vt=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(vt=o.RGBA16UI),$===o.UNSIGNED_INT&&(vt=o.RGBA32UI),$===o.BYTE&&(vt=o.RGBA8I),$===o.SHORT&&(vt=o.RGBA16I),$===o.INT&&(vt=o.RGBA32I)),E===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),E===o.RGBA){const Xt=Et?Uc:we.getTransfer(ht);$===o.FLOAT&&(vt=o.RGBA32F),$===o.HALF_FLOAT&&(vt=o.RGBA16F),$===o.UNSIGNED_BYTE&&(vt=Xt===Ge?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),vt}function D(U,E){let $;return U?E===null||E===Ss||E===Tr?$=o.DEPTH24_STENCIL8:E===ra?$=o.DEPTH32F_STENCIL8:E===Oo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ss||E===Tr?$=o.DEPTH_COMPONENT24:E===ra?$=o.DEPTH_COMPONENT32F:E===Oo&&($=o.DEPTH_COMPONENT16),$}function j(U,E){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ei&&U.minFilter!==Ni?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function G(U){const E=U.target;E.removeEventListener("dispose",G),X(E),E.isVideoTexture&&g.delete(E)}function O(U){const E=U.target;E.removeEventListener("dispose",O),C(E)}function X(U){const E=s.get(U);if(E.__webglInit===void 0)return;const $=U.source,ht=y.get($);if(ht){const Et=ht[E.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&w(U),Object.keys(ht).length===0&&y.delete($)}s.remove(U)}function w(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const $=U.source,ht=y.get($);delete ht[E.__cacheKey],d.memory.textures--}function C(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let Et=0;Et<E.__webglFramebuffer[ht].length;Et++)o.deleteFramebuffer(E.__webglFramebuffer[ht][Et]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let ht=0,Et=$.length;ht<Et;ht++){const vt=s.get($[ht]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),d.memory.textures--),s.remove($[ht])}s.remove(U)}let H=0;function lt(){H=0}function rt(){const U=H;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function _t(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function mt(U,E){const $=s.get(U);if(U.isVideoTexture&&Rt(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y($,U,E);return}}i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function z(U,E){const $=s.get(U);if(U.version>0&&$.__version!==U.version){Y($,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function Q(U,E){const $=s.get(U);if(U.version>0&&$.__version!==U.version){Y($,U,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function Z(U,E){const $=s.get(U);if(U.version>0&&$.__version!==U.version){ft($,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const ct={[Gd]:o.REPEAT,[xs]:o.CLAMP_TO_EDGE,[Vd]:o.MIRRORED_REPEAT},dt={[Ei]:o.NEAREST,[rM]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[Ni]:o.LINEAR,[Jf]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},N={[uM]:o.NEVER,[gM]:o.ALWAYS,[fM]:o.LESS,[Y_]:o.LEQUAL,[dM]:o.EQUAL,[mM]:o.GEQUAL,[hM]:o.GREATER,[pM]:o.NOTEQUAL};function J(U,E){if(E.type===ra&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ni||E.magFilter===Jf||E.magFilter===Jl||E.magFilter===ys||E.minFilter===Ni||E.minFilter===Jf||E.minFilter===Jl||E.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,ct[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ct[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ct[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,dt[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,dt[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ei||E.minFilter!==Jl&&E.minFilter!==ys||E.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Mt(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",G));const ht=E.source;let Et=y.get(ht);Et===void 0&&(Et={},y.set(ht,Et));const vt=_t(E);if(vt!==U.__cacheKey){Et[vt]===void 0&&(Et[vt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,$=!0),Et[vt].usedTimes++;const Xt=Et[U.__cacheKey];Xt!==void 0&&(Et[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&w(E)),U.__cacheKey=vt,U.__webglTexture=Et[vt].texture}return $}function Y(U,E,$){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const Et=Mt(U,E),vt=E.source;i.bindTexture(ht,U.__webglTexture,o.TEXTURE0+$);const Xt=s.get(vt);if(vt.version!==Xt.__version||Et===!0){i.activeTexture(o.TEXTURE0+$);const Ut=we.getPrimaries(we.workingColorSpace),Ht=E.colorSpace===Fa?null:we.getPrimaries(E.colorSpace),ge=E.colorSpace===Fa||Ut===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let At=b(E.image,!1,l.maxTextureSize);At=te(E,At);const Gt=u.convert(E.format,E.colorSpace),Zt=u.convert(E.type);let jt=L(E.internalFormat,Gt,Zt,E.colorSpace,E.isVideoTexture);J(ht,E);let It;const ee=E.mipmaps,le=E.isVideoTexture!==!0,ze=Xt.__version===void 0||Et===!0,q=vt.dataReady,wt=j(E,At);if(E.isDepthTexture)jt=D(E.format===Ar,E.type),ze&&(le?i.texStorage2D(o.TEXTURE_2D,1,jt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,jt,At.width,At.height,0,Gt,Zt,null));else if(E.isDataTexture)if(ee.length>0){le&&ze&&i.texStorage2D(o.TEXTURE_2D,wt,jt,ee[0].width,ee[0].height);for(let ut=0,yt=ee.length;ut<yt;ut++)It=ee[ut],le?q&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,It.width,It.height,Gt,Zt,It.data):i.texImage2D(o.TEXTURE_2D,ut,jt,It.width,It.height,0,Gt,Zt,It.data);E.generateMipmaps=!1}else le?(ze&&i.texStorage2D(o.TEXTURE_2D,wt,jt,At.width,At.height),q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Gt,Zt,At.data)):i.texImage2D(o.TEXTURE_2D,0,jt,At.width,At.height,0,Gt,Zt,At.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){le&&ze&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,jt,ee[0].width,ee[0].height,At.depth);for(let ut=0,yt=ee.length;ut<yt;ut++)if(It=ee[ut],E.format!==Mi)if(Gt!==null)if(le){if(q)if(E.layerUpdates.size>0){const Dt=e_(It.width,It.height,E.format,E.type);for(const Nt of E.layerUpdates){const ie=It.data.subarray(Nt*Dt/It.data.BYTES_PER_ELEMENT,(Nt+1)*Dt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,Nt,It.width,It.height,1,Gt,ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,It.width,It.height,At.depth,Gt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ut,jt,It.width,It.height,At.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,It.width,It.height,At.depth,Gt,Zt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ut,jt,It.width,It.height,At.depth,0,Gt,Zt,It.data)}else{le&&ze&&i.texStorage2D(o.TEXTURE_2D,wt,jt,ee[0].width,ee[0].height);for(let ut=0,yt=ee.length;ut<yt;ut++)It=ee[ut],E.format!==Mi?Gt!==null?le?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,ut,0,0,It.width,It.height,Gt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,ut,jt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?q&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,It.width,It.height,Gt,Zt,It.data):i.texImage2D(o.TEXTURE_2D,ut,jt,It.width,It.height,0,Gt,Zt,It.data)}else if(E.isDataArrayTexture)if(le){if(ze&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,jt,At.width,At.height,At.depth),q)if(E.layerUpdates.size>0){const ut=e_(At.width,At.height,E.format,E.type);for(const yt of E.layerUpdates){const Dt=At.data.subarray(yt*ut/At.data.BYTES_PER_ELEMENT,(yt+1)*ut/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,yt,At.width,At.height,1,Gt,Zt,Dt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Gt,Zt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,At.width,At.height,At.depth,0,Gt,Zt,At.data);else if(E.isData3DTexture)le?(ze&&i.texStorage3D(o.TEXTURE_3D,wt,jt,At.width,At.height,At.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Gt,Zt,At.data)):i.texImage3D(o.TEXTURE_3D,0,jt,At.width,At.height,At.depth,0,Gt,Zt,At.data);else if(E.isFramebufferTexture){if(ze)if(le)i.texStorage2D(o.TEXTURE_2D,wt,jt,At.width,At.height);else{let ut=At.width,yt=At.height;for(let Dt=0;Dt<wt;Dt++)i.texImage2D(o.TEXTURE_2D,Dt,jt,ut,yt,0,Gt,Zt,null),ut>>=1,yt>>=1}}else if(ee.length>0){if(le&&ze){const ut=zt(ee[0]);i.texStorage2D(o.TEXTURE_2D,wt,jt,ut.width,ut.height)}for(let ut=0,yt=ee.length;ut<yt;ut++)It=ee[ut],le?q&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,Gt,Zt,It):i.texImage2D(o.TEXTURE_2D,ut,jt,Gt,Zt,It);E.generateMipmaps=!1}else if(le){if(ze){const ut=zt(At);i.texStorage2D(o.TEXTURE_2D,wt,jt,ut.width,ut.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,Zt,At)}else i.texImage2D(o.TEXTURE_2D,0,jt,Gt,Zt,At);S(E)&&_(ht),Xt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ft(U,E,$){if(E.image.length!==6)return;const ht=Mt(U,E),Et=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+$);const vt=s.get(Et);if(Et.version!==vt.__version||ht===!0){i.activeTexture(o.TEXTURE0+$);const Xt=we.getPrimaries(we.workingColorSpace),Ut=E.colorSpace===Fa?null:we.getPrimaries(E.colorSpace),Ht=E.colorSpace===Fa||Xt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const ge=E.isCompressedTexture||E.image[0].isCompressedTexture,At=E.image[0]&&E.image[0].isDataTexture,Gt=[];for(let yt=0;yt<6;yt++)!ge&&!At?Gt[yt]=b(E.image[yt],!0,l.maxCubemapSize):Gt[yt]=At?E.image[yt].image:E.image[yt],Gt[yt]=te(E,Gt[yt]);const Zt=Gt[0],jt=u.convert(E.format,E.colorSpace),It=u.convert(E.type),ee=L(E.internalFormat,jt,It,E.colorSpace),le=E.isVideoTexture!==!0,ze=vt.__version===void 0||ht===!0,q=Et.dataReady;let wt=j(E,Zt);J(o.TEXTURE_CUBE_MAP,E);let ut;if(ge){le&&ze&&i.texStorage2D(o.TEXTURE_CUBE_MAP,wt,ee,Zt.width,Zt.height);for(let yt=0;yt<6;yt++){ut=Gt[yt].mipmaps;for(let Dt=0;Dt<ut.length;Dt++){const Nt=ut[Dt];E.format!==Mi?jt!==null?le?q&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,0,0,Nt.width,Nt.height,jt,Nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,ee,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,0,0,Nt.width,Nt.height,jt,It,Nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,ee,Nt.width,Nt.height,0,jt,It,Nt.data)}}}else{if(ut=E.mipmaps,le&&ze){ut.length>0&&wt++;const yt=zt(Gt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,wt,ee,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(At){le?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Gt[yt].width,Gt[yt].height,jt,It,Gt[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ee,Gt[yt].width,Gt[yt].height,0,jt,It,Gt[yt].data);for(let Dt=0;Dt<ut.length;Dt++){const ie=ut[Dt].image[yt].image;le?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,0,0,ie.width,ie.height,jt,It,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,ee,ie.width,ie.height,0,jt,It,ie.data)}}else{le?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,jt,It,Gt[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ee,jt,It,Gt[yt]);for(let Dt=0;Dt<ut.length;Dt++){const Nt=ut[Dt];le?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,0,0,jt,It,Nt.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,ee,jt,It,Nt.image[yt])}}}S(E)&&_(o.TEXTURE_CUBE_MAP),vt.__version=Et.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function bt(U,E,$,ht,Et,vt){const Xt=u.convert($.format,$.colorSpace),Ut=u.convert($.type),Ht=L($.internalFormat,Xt,Ut,$.colorSpace),ge=s.get(E),At=s.get($);if(At.__renderTarget=E,!ge.__hasExternalTextures){const Gt=Math.max(1,E.width>>vt),Zt=Math.max(1,E.height>>vt);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,vt,Ht,Gt,Zt,E.depth,0,Xt,Ut,null):i.texImage2D(Et,vt,Ht,Gt,Zt,0,Xt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),qt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,Et,At.__webglTexture,0,Ct(E)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,Et,At.__webglTexture,vt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function St(U,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ht=E.depthTexture,Et=ht&&ht.isDepthTexture?ht.type:null,vt=D(E.stencilBuffer,Et),Xt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Ct(E);qt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,vt,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,vt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,vt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const ht=E.textures;for(let Et=0;Et<ht.length;Et++){const vt=ht[Et],Xt=u.convert(vt.format,vt.colorSpace),Ut=u.convert(vt.type),Ht=L(vt.internalFormat,Xt,Ut,vt.colorSpace),ge=Ct(E);$&&qt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ge,Ht,E.width,E.height):qt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ge,Ht,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ft(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),mt(E.depthTexture,0);const Et=ht.__webglTexture,vt=Ct(E);if(E.depthTexture.format===yr)qt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,vt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(E.depthTexture.format===Ar)qt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,vt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Wt(U){const E=s.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const Et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",Et)};ht.addEventListener("dispose",Et),E.__depthDisposeCallback=Et}E.__boundDepthTexture=ht}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ft(E.__webglFramebuffer,U)}else if($){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),St(E.__webglDepthbuffer[ht],U,!1);else{const Et=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,vt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),St(E.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Et=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Et),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,Et)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(U,E,$){const ht=s.get(U);E!==void 0&&bt(ht.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Wt(U)}function Ne(U){const E=U.texture,$=s.get(U),ht=s.get(E);U.addEventListener("dispose",O);const Et=U.textures,vt=U.isWebGLCubeRenderTarget===!0,Xt=Et.length>1;if(Xt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,d.memory.textures++),vt){$.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ut]=[];for(let Ht=0;Ht<E.mipmaps.length;Ht++)$.__webglFramebuffer[Ut][Ht]=o.createFramebuffer()}else $.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)$.__webglFramebuffer[Ut]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ut=0,Ht=Et.length;Ut<Ht;Ut++){const ge=s.get(Et[Ut]);ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&qt(U)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Et.length;Ut++){const Ht=Et[Ut];$.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut]);const ge=u.convert(Ht.format,Ht.colorSpace),At=u.convert(Ht.type),Gt=L(Ht.internalFormat,ge,At,Ht.colorSpace,U.isXRRenderTarget===!0),Zt=Ct(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Gt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),St($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(vt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),J(o.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)bt($.__webglFramebuffer[Ut][Ht],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Ht);else bt($.__webglFramebuffer[Ut],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ut=0,Ht=Et.length;Ut<Ht;Ut++){const ge=Et[Ut],At=s.get(ge);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),J(o.TEXTURE_2D,ge),bt($.__webglFramebuffer,U,ge,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),S(ge)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ht.__webglTexture),J(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)bt($.__webglFramebuffer[Ht],U,E,o.COLOR_ATTACHMENT0,Ut,Ht);else bt($.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Ut,0);S(E)&&_(Ut),i.unbindTexture()}U.depthBuffer&&Wt(U)}function Le(U){const E=U.textures;for(let $=0,ht=E.length;$<ht;$++){const Et=E[$];if(S(Et)){const vt=I(U),Xt=s.get(Et).__webglTexture;i.bindTexture(vt,Xt),_(vt),i.unbindTexture()}}}const he=[],F=[];function en(U){if(U.samples>0){if(qt(U)===!1){const E=U.textures,$=U.width,ht=U.height;let Et=o.COLOR_BUFFER_BIT;const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(U),Ut=E.length>1;if(Ut)for(let Ht=0;Ht<E.length;Ht++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Ht=0;Ht<E.length;Ht++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Ht]);const ge=s.get(E[Ht]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ge,0)}o.blitFramebuffer(0,0,$,ht,0,0,$,ht,Et,o.NEAREST),m===!0&&(he.length=0,F.length=0,he.push(o.COLOR_ATTACHMENT0+Ht),U.depthBuffer&&U.resolveDepthBuffer===!1&&(he.push(vt),F.push(vt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,he))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Ht=0;Ht<E.length;Ht++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Ht]);const ge=s.get(E[Ht]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,ge,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ct(U){return Math.min(l.maxSamples,U.samples)}function qt(U){const E=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(U){const E=d.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function te(U,E){const $=U.colorSpace,ht=U.format,Et=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Rr&&$!==Fa&&(we.getTransfer($)===Ge?(ht!==Mi||Et!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function zt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=lt,this.setTexture2D=mt,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=Z,this.rebindTextures=Yt,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=qt}function IA(o,e){function i(s,l=Fa){let u;const d=we.getTransfer(l);if(s===ca)return o.UNSIGNED_BYTE;if(s===Mh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Eh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===F_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===I_)return o.BYTE;if(s===B_)return o.SHORT;if(s===Oo)return o.UNSIGNED_SHORT;if(s===Sh)return o.INT;if(s===Ss)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===zo)return o.HALF_FLOAT;if(s===H_)return o.ALPHA;if(s===G_)return o.RGB;if(s===Mi)return o.RGBA;if(s===V_)return o.LUMINANCE;if(s===k_)return o.LUMINANCE_ALPHA;if(s===yr)return o.DEPTH_COMPONENT;if(s===Ar)return o.DEPTH_STENCIL;if(s===X_)return o.RED;if(s===bh)return o.RED_INTEGER;if(s===j_)return o.RG;if(s===Th)return o.RG_INTEGER;if(s===Ah)return o.RGBA_INTEGER;if(s===Tc||s===Ac||s===Rc||s===Cc)if(d===Ge)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Tc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Tc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kd||s===Xd||s===jd||s===qd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wd||s===Yd||s===Zd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Wd||s===Yd)return d===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Zd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kd||s===Qd||s===Jd||s===$d||s===th||s===eh||s===nh||s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Kd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$d)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===th)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===eh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ih)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ah)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===oh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ch)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wc||s===uh||s===fh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===wc)return d===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===uh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===q_||s===dh||s===hh||s===ph)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===wc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===dh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ph)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Tr?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const BA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
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

}`;class HA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new On,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ka({vertexShader:BA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new zc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GA extends wr{constructor(e,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,x=null,y=null,M=null,A=null;const b=new HA,S=i.getContextAttributes();let _=null,I=null;const L=[],D=[],j=new Ue;let G=null;const O=new ui;O.viewport=new tn;const X=new ui;X.viewport=new tn;const w=[O,X],C=new lE;let H=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ft=L[Y];return ft===void 0&&(ft=new yd,L[Y]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Y){let ft=L[Y];return ft===void 0&&(ft=new yd,L[Y]=ft),ft.getGripSpace()},this.getHand=function(Y){let ft=L[Y];return ft===void 0&&(ft=new yd,L[Y]=ft),ft.getHandSpace()};function rt(Y){const ft=D.indexOf(Y.inputSource);if(ft===-1)return;const bt=L[ft];bt!==void 0&&(bt.update(Y.inputSource,Y.frame,p||d),bt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function _t(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",mt);for(let Y=0;Y<L.length;Y++){const ft=D[Y];ft!==null&&(D[Y]=null,L[Y].disconnect(ft))}H=null,lt=null,b.reset(),e.setRenderTarget(_),M=null,y=null,x=null,l=null,I=null,Mt.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",mt),S.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,St=null,Ft=null;S.depth&&(Ft=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=S.stencil?Ar:yr,St=S.stencil?Tr:Ss);const Wt={colorFormat:i.RGBA8,depthFormat:Ft,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Wt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new Ms(y.textureWidth,y.textureHeight,{format:Mi,type:ca,depthTexture:new lv(y.textureWidth,y.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const bt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Ms(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Mt.setContext(l),Mt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function mt(Y){for(let ft=0;ft<Y.removed.length;ft++){const bt=Y.removed[ft],St=D.indexOf(bt);St>=0&&(D[St]=null,L[St].disconnect(bt))}for(let ft=0;ft<Y.added.length;ft++){const bt=Y.added[ft];let St=D.indexOf(bt);if(St===-1){for(let Wt=0;Wt<L.length;Wt++)if(Wt>=D.length){D.push(bt),St=Wt;break}else if(D[Wt]===null){D[Wt]=bt,St=Wt;break}if(St===-1)break}const Ft=L[St];Ft&&Ft.connect(bt)}}const z=new at,Q=new at;function Z(Y,ft,bt){z.setFromMatrixPosition(ft.matrixWorld),Q.setFromMatrixPosition(bt.matrixWorld);const St=z.distanceTo(Q),Ft=ft.projectionMatrix.elements,Wt=bt.projectionMatrix.elements,Yt=Ft[14]/(Ft[10]-1),Ne=Ft[14]/(Ft[10]+1),Le=(Ft[9]+1)/Ft[5],he=(Ft[9]-1)/Ft[5],F=(Ft[8]-1)/Ft[0],en=(Wt[8]+1)/Wt[0],Ct=Yt*F,qt=Yt*en,Rt=St/(-F+en),te=Rt*-F;if(ft.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(te),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ft[10]===-1)Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const zt=Yt+Rt,U=Ne+Rt,E=Ct-te,$=qt+(St-te),ht=Le*Ne/U*zt,Et=he*Ne/U*zt;Y.projectionMatrix.makePerspective(E,$,ht,Et,zt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ct(Y,ft){ft===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ft.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ft=Y.near,bt=Y.far;b.texture!==null&&(b.depthNear>0&&(ft=b.depthNear),b.depthFar>0&&(bt=b.depthFar)),C.near=X.near=O.near=ft,C.far=X.far=O.far=bt,(H!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,lt=C.far),O.layers.mask=Y.layers.mask|2,X.layers.mask=Y.layers.mask|4,C.layers.mask=O.layers.mask|X.layers.mask;const St=Y.parent,Ft=C.cameras;ct(C,St);for(let Wt=0;Wt<Ft.length;Wt++)ct(Ft[Wt],St);Ft.length===2?Z(C,O,X):C.projectionMatrix.copy(O.projectionMatrix),dt(Y,C,St)};function dt(Y,ft,bt){bt===null?Y.matrix.copy(ft.matrixWorld):(Y.matrix.copy(bt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ft.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=mh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(Y){m=Y,y!==null&&(y.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let N=null;function J(Y,ft){if(g=ft.getViewerPose(p||d),A=ft,g!==null){const bt=g.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let St=!1;bt.length!==C.cameras.length&&(C.cameras.length=0,St=!0);for(let Yt=0;Yt<bt.length;Yt++){const Ne=bt[Yt];let Le=null;if(M!==null)Le=M.getViewport(Ne);else{const F=x.getViewSubImage(y,Ne);Le=F.viewport,Yt===0&&(e.setRenderTargetTextures(I,F.colorTexture,y.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(I))}let he=w[Yt];he===void 0&&(he=new ui,he.layers.enable(Yt),he.viewport=new tn,w[Yt]=he),he.matrix.fromArray(Ne.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Ne.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Le.x,Le.y,Le.width,Le.height),Yt===0&&(C.matrix.copy(he.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),St===!0&&C.cameras.push(he)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Yt=x.getDepthInformation(bt[0]);Yt&&Yt.isValid&&Yt.texture&&b.init(e,Yt,l.renderState)}}for(let bt=0;bt<L.length;bt++){const St=D[bt],Ft=L[bt];St!==null&&Ft!==void 0&&Ft.update(St,ft,p||d)}N&&N(Y,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),A=null}const Mt=new fv;Mt.setAnimationLoop(J),this.setAnimationLoop=function(Y){N=Y},this.dispose=function(){}}}const ps=new Oi,VA=new Ze;function kA(o,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,iv(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,I,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,D)):_.isMeshMatcapMaterial?(u(S,_),A(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),b(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,I,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Xn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Xn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=e.get(_),L=I.envMap,D=I.envMapRotation;L&&(S.envMap.value=L,ps.copy(D),ps.x*=-1,ps.y*=-1,ps.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),S.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(ps)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,I,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,_){_.matcap&&(S.matcap.value=_.matcap)}function b(S,_){const I=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function XA(o,e,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,L){const D=L.program;s.uniformBlockBinding(I,D)}function p(I,L){let D=l[I.id];D===void 0&&(A(I),D=g(I),l[I.id]=D,I.addEventListener("dispose",S));const j=L.program;s.updateUBOMapping(I,j);const G=e.render.frame;u[I.id]!==G&&(y(I),u[I.id]=G)}function g(I){const L=x();I.__bindingPointIndex=L;const D=o.createBuffer(),j=I.__size,G=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,j,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function x(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const L=l[I.id],D=I.uniforms,j=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let G=0,O=D.length;G<O;G++){const X=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,C=X.length;w<C;w++){const H=X[w];if(M(H,G,w,j)===!0){const lt=H.__offset,rt=Array.isArray(H.value)?H.value:[H.value];let _t=0;for(let mt=0;mt<rt.length;mt++){const z=rt[mt],Q=b(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,lt+_t,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,_t),_t+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,L,D,j){const G=I.value,O=L+"_"+D;if(j[O]===void 0)return typeof G=="number"||typeof G=="boolean"?j[O]=G:j[O]=G.clone(),!0;{const X=j[O];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return j[O]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function A(I){const L=I.uniforms;let D=0;const j=16;for(let O=0,X=L.length;O<X;O++){const w=Array.isArray(L[O])?L[O]:[L[O]];for(let C=0,H=w.length;C<H;C++){const lt=w[C],rt=Array.isArray(lt.value)?lt.value:[lt.value];for(let _t=0,mt=rt.length;_t<mt;_t++){const z=rt[_t],Q=b(z),Z=D%j,ct=Z%Q.boundary,dt=Z+ct;D+=ct,dt!==0&&j-dt<Q.storage&&(D+=j-dt),lt.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=Q.storage}}}const G=D%j;return G>0&&(D+=j-G),I.__size=D,I.__cache={},this}function b(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function S(I){const L=I.target;L.removeEventListener("dispose",S);const D=d.indexOf(L.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class jA{constructor(e={}){const{canvas:i=vM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),b=new Int32Array(4);let S=null,_=null;const I=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=Ga,this.toneMappingExposure=1;const D=this;let j=!1,G=0,O=0,X=null,w=-1,C=null;const H=new tn,lt=new tn;let rt=null;const _t=new Te(0);let mt=0,z=i.width,Q=i.height,Z=1,ct=null,dt=null;const N=new tn(0,0,z,Q),J=new tn(0,0,z,Q);let Mt=!1;const Y=new Ch;let ft=!1,bt=!1;this.transmissionResolutionScale=1;const St=new Ze,Ft=new Ze,Wt=new at,Yt=new tn,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function he(){return X===null?Z:1}let F=s;function en(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yh}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),F===null){const W="webgl2";if(F=en(W,R),F===null)throw en(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ct,qt,Rt,te,zt,U,E,$,ht,Et,vt,Xt,Ut,Ht,ge,At,Gt,Zt,jt,It,ee,le,ze,q;function wt(){Ct=new eT(F),Ct.init(),le=new IA(F,Ct),qt=new Zb(F,Ct,e,le),Rt=new PA(F,Ct),qt.reverseDepthBuffer&&y&&Rt.buffers.depth.setReversed(!0),te=new aT(F),zt=new MA,U=new zA(F,Ct,Rt,zt,qt,le,te),E=new Qb(D),$=new tT(D),ht=new fE(F),ze=new Wb(F,ht),Et=new nT(F,ht,te,ze),vt=new rT(F,Et,ht,te),jt=new sT(F,qt,U),At=new Kb(zt),Xt=new SA(D,E,$,Ct,qt,ze,At),Ut=new kA(D,zt),Ht=new bA,ge=new DA(Ct),Zt=new qb(D,E,$,Rt,vt,M,m),Gt=new LA(D,vt,qt),q=new XA(F,te,qt,Rt),It=new Yb(F,Ct,te),ee=new iT(F,Ct,te),te.programs=Xt.programs,D.capabilities=qt,D.extensions=Ct,D.properties=zt,D.renderLists=Ht,D.shadowMap=Gt,D.state=Rt,D.info=te}wt();const ut=new GA(D,F);this.xr=ut,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(z,Q,!1))},this.getSize=function(R){return R.set(z,Q)},this.setSize=function(R,W,it=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,Q=W,i.width=Math.floor(R*Z),i.height=Math.floor(W*Z),it===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(z*Z,Q*Z).floor()},this.setDrawingBufferSize=function(R,W,it){z=R,Q=W,Z=it,i.width=Math.floor(R*it),i.height=Math.floor(W*it),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,W,it,st){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,W,it,st),Rt.viewport(H.copy(N).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,W,it,st){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,W,it,st),Rt.scissor(lt.copy(J).multiplyScalar(Z).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Rt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){ct=R},this.setTransparentSort=function(R){dt=R},this.getClearColor=function(R){return R.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(R=!0,W=!0,it=!0){let st=0;if(R){let k=!1;if(X!==null){const Tt=X.texture.format;k=Tt===Ah||Tt===Th||Tt===bh}if(k){const Tt=X.texture.type,Lt=Tt===ca||Tt===Ss||Tt===Oo||Tt===Tr||Tt===Mh||Tt===Eh,Pt=Zt.getClearColor(),Bt=Zt.getClearAlpha(),ae=Pt.r,se=Pt.g,Kt=Pt.b;Lt?(A[0]=ae,A[1]=se,A[2]=Kt,A[3]=Bt,F.clearBufferuiv(F.COLOR,0,A)):(b[0]=ae,b[1]=se,b[2]=Kt,b[3]=Bt,F.clearBufferiv(F.COLOR,0,b))}else st|=F.COLOR_BUFFER_BIT}W&&(st|=F.DEPTH_BUFFER_BIT),it&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Zt.dispose(),Ht.dispose(),ge.dispose(),zt.dispose(),E.dispose(),$.dispose(),vt.dispose(),ze.dispose(),q.dispose(),Xt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ur),ut.removeEventListener("sessionend",Nr),Ai.stop()};function yt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const R=te.autoReset,W=Gt.enabled,it=Gt.autoUpdate,st=Gt.needsUpdate,k=Gt.type;wt(),te.autoReset=R,Gt.enabled=W,Gt.autoUpdate=it,Gt.needsUpdate=st,Gt.type=k}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const W=R.target;W.removeEventListener("dispose",ie),We(W)}function We(R){un(R),zt.remove(R)}function un(R){const W=zt.get(R).programs;W!==void 0&&(W.forEach(function(it){Xt.releaseProgram(it)}),R.isShaderMaterial&&Xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,it,st,k,Tt){W===null&&(W=Ne);const Lt=k.isMesh&&k.matrixWorld.determinant()<0,Pt=Or(R,W,it,st,k);Rt.setMaterial(st,Lt);let Bt=it.index,ae=1;if(st.wireframe===!0){if(Bt=Et.getWireframeAttribute(it),Bt===void 0)return;ae=2}const se=it.drawRange,Kt=it.attributes.position;let xe=se.start*ae,ye=(se.start+se.count)*ae;Tt!==null&&(xe=Math.max(xe,Tt.start*ae),ye=Math.min(ye,(Tt.start+Tt.count)*ae)),Bt!==null?(xe=Math.max(xe,0),ye=Math.min(ye,Bt.count)):Kt!=null&&(xe=Math.max(xe,0),ye=Math.min(ye,Kt.count));const Xe=ye-xe;if(Xe<0||Xe===1/0)return;ze.setup(k,st,Pt,it,Bt);let Ae,re=It;if(Bt!==null&&(Ae=ht.get(Bt),re=ee,re.setIndex(Ae)),k.isMesh)st.wireframe===!0?(Rt.setLineWidth(st.wireframeLinewidth*he()),re.setMode(F.LINES)):re.setMode(F.TRIANGLES);else if(k.isLine){let Jt=st.linewidth;Jt===void 0&&(Jt=1),Rt.setLineWidth(Jt*he()),k.isLineSegments?re.setMode(F.LINES):k.isLineLoop?re.setMode(F.LINE_LOOP):re.setMode(F.LINE_STRIP)}else k.isPoints?re.setMode(F.POINTS):k.isSprite&&re.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)re.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Jt=k._multiDrawStarts,fn=k._multiDrawCounts,Ee=k._multiDrawCount,Pn=Bt?ht.get(Bt).bytesPerElement:1,pi=zt.get(st).currentProgram.getUniforms();for(let Dn=0;Dn<Ee;Dn++)pi.setValue(F,"_gl_DrawID",Dn),re.render(Jt[Dn]/Pn,fn[Dn])}else if(k.isInstancedMesh)re.renderInstances(xe,Xe,k.count);else if(it.isInstancedBufferGeometry){const Jt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,fn=Math.min(it.instanceCount,Jt);re.renderInstances(xe,Xe,fn)}else re.render(xe,Xe)};function be(R,W,it){R.transparent===!0&&R.side===sa&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Ke(R,W,it),R.side=Va,R.needsUpdate=!0,Ke(R,W,it),R.side=sa):Ke(R,W,it)}this.compile=function(R,W,it=null){it===null&&(it=R),_=ge.get(it),_.init(W),L.push(_),it.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),R!==it&&R.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights();const st=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Tt=k.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const Pt=Tt[Lt];be(Pt,it,k),st.add(Pt)}else be(Tt,it,k),st.add(Tt)}),L.pop(),_=null,st},this.compileAsync=function(R,W,it=null){const st=this.compile(R,W,it);return new Promise(k=>{function Tt(){if(st.forEach(function(Lt){zt.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){k(R);return}setTimeout(Tt,10)}Ct.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let xn=null;function di(R){xn&&xn(R)}function Ur(){Ai.stop()}function Nr(){Ai.start()}const Ai=new fv;Ai.setAnimationLoop(di),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){xn=R,ut.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},ut.addEventListener("sessionstart",Ur),ut.addEventListener("sessionend",Nr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(W),W=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,X),_=ge.get(R,L.length),_.init(W),L.push(_),Ft.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(Ft),bt=this.localClippingEnabled,ft=At.init(this.clippingPlanes,bt),S=Ht.get(R,I.length),S.init(),I.push(S),ut.enabled===!0&&ut.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Xa(Tt,W,-1/0,D.sortObjects)}Xa(R,W,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(ct,dt),Le=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Le&&Zt.addToRenderList(S,R),this.info.render.frame++,ft===!0&&At.beginShadows();const it=_.state.shadowsArray;Gt.render(it,R,W),ft===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,k=S.transmissive;if(_.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(k.length>0)for(let Lt=0,Pt=Tt.length;Lt<Pt;Lt++){const Bt=Tt[Lt];Lr(st,k,R,Bt)}Le&&Zt.render(R);for(let Lt=0,Pt=Tt.length;Lt<Pt;Lt++){const Bt=Tt[Lt];bs(S,R,Bt,Bt.viewport)}}else k.length>0&&Lr(st,k,R,W),Le&&Zt.render(R),bs(S,R,W);X!==null&&O===0&&(U.updateMultisampleRenderTarget(X),U.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(D,R,W),ze.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],ft===!0&&At.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Xa(R,W,it,st){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){st&&Yt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ft);const Lt=vt.update(R),Pt=R.material;Pt.visible&&S.push(R,Lt,Pt,it,Yt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const Lt=vt.update(R),Pt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Yt.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Yt.copy(Lt.boundingSphere.center)),Yt.applyMatrix4(R.matrixWorld).applyMatrix4(Ft)),Array.isArray(Pt)){const Bt=Lt.groups;for(let ae=0,se=Bt.length;ae<se;ae++){const Kt=Bt[ae],xe=Pt[Kt.materialIndex];xe&&xe.visible&&S.push(R,Lt,xe,it,Yt.z,Kt)}}else Pt.visible&&S.push(R,Lt,Pt,it,Yt.z,null)}}const Tt=R.children;for(let Lt=0,Pt=Tt.length;Lt<Pt;Lt++)Xa(Tt[Lt],W,it,st)}function bs(R,W,it,st){const k=R.opaque,Tt=R.transmissive,Lt=R.transparent;_.setupLightsView(it),ft===!0&&At.setGlobalState(D.clippingPlanes,it),st&&Rt.viewport(H.copy(st)),k.length>0&&ja(k,W,it),Tt.length>0&&ja(Tt,W,it),Lt.length>0&&ja(Lt,W,it),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Lr(R,W,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new Ms(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?zo:ca,minFilter:ys,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[st.id],Lt=st.viewport||H;Tt.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(_t),mt=D.getClearAlpha(),mt<1&&D.setClearColor(16777215,.5),D.clear(),Le&&Zt.render(it);const Bt=D.toneMapping;D.toneMapping=Ga;const ae=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),ft===!0&&At.setGlobalState(D.clippingPlanes,st),ja(R,it,st),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Kt=0,xe=W.length;Kt<xe;Kt++){const ye=W[Kt],Xe=ye.object,Ae=ye.geometry,re=ye.material,Jt=ye.group;if(re.side===sa&&Xe.layers.test(st.layers)){const fn=re.side;re.side=Xn,re.needsUpdate=!0,hi(Xe,it,st,Ae,re,Jt),re.side=fn,re.needsUpdate=!0,se=!0}}se===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Pt),D.setClearColor(_t,mt),ae!==void 0&&(st.viewport=ae),D.toneMapping=Bt}function ja(R,W,it){const st=W.isScene===!0?W.overrideMaterial:null;for(let k=0,Tt=R.length;k<Tt;k++){const Lt=R[k],Pt=Lt.object,Bt=Lt.geometry,ae=st===null?Lt.material:st,se=Lt.group;Pt.layers.test(it.layers)&&hi(Pt,W,it,Bt,ae,se)}}function hi(R,W,it,st,k,Tt){R.onBeforeRender(D,W,it,st,k,Tt),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(D,W,it,st,R,Tt),k.transparent===!0&&k.side===sa&&k.forceSinglePass===!1?(k.side=Xn,k.needsUpdate=!0,D.renderBufferDirect(it,W,st,k,R,Tt),k.side=Va,k.needsUpdate=!0,D.renderBufferDirect(it,W,st,k,R,Tt),k.side=sa):D.renderBufferDirect(it,W,st,k,R,Tt),R.onAfterRender(D,W,it,st,k,Tt)}function Ke(R,W,it){W.isScene!==!0&&(W=Ne);const st=zt.get(R),k=_.state.lights,Tt=_.state.shadowsArray,Lt=k.state.version,Pt=Xt.getParameters(R,k.state,Tt,W,it),Bt=Xt.getProgramCacheKey(Pt);let ae=st.programs;st.environment=R.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(R.isMeshStandardMaterial?$:E).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,ae===void 0&&(R.addEventListener("dispose",ie),ae=new Map,st.programs=ae);let se=ae.get(Bt);if(se!==void 0){if(st.currentProgram===se&&st.lightsStateVersion===Lt)return Pi(R,Pt),se}else Pt.uniforms=Xt.getUniforms(R),R.onBeforeCompile(Pt,D),se=Xt.acquireProgram(Pt,Bt),ae.set(Bt,se),st.uniforms=Pt.uniforms;const Kt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=At.uniform),Pi(R,Pt),st.needsLights=Fc(R),st.lightsStateVersion=Lt,st.needsLights&&(Kt.ambientLightColor.value=k.state.ambient,Kt.lightProbe.value=k.state.probe,Kt.directionalLights.value=k.state.directional,Kt.directionalLightShadows.value=k.state.directionalShadow,Kt.spotLights.value=k.state.spot,Kt.spotLightShadows.value=k.state.spotShadow,Kt.rectAreaLights.value=k.state.rectArea,Kt.ltc_1.value=k.state.rectAreaLTC1,Kt.ltc_2.value=k.state.rectAreaLTC2,Kt.pointLights.value=k.state.point,Kt.pointLightShadows.value=k.state.pointShadow,Kt.hemisphereLights.value=k.state.hemi,Kt.directionalShadowMap.value=k.state.directionalShadowMap,Kt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Kt.spotShadowMap.value=k.state.spotShadowMap,Kt.spotLightMatrix.value=k.state.spotLightMatrix,Kt.spotLightMap.value=k.state.spotLightMap,Kt.pointShadowMap.value=k.state.pointShadowMap,Kt.pointShadowMatrix.value=k.state.pointShadowMatrix),st.currentProgram=se,st.uniformsList=null,se}function yn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Dc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Pi(R,W){const it=zt.get(R);it.outputColorSpace=W.outputColorSpace,it.batching=W.batching,it.batchingColor=W.batchingColor,it.instancing=W.instancing,it.instancingColor=W.instancingColor,it.instancingMorph=W.instancingMorph,it.skinning=W.skinning,it.morphTargets=W.morphTargets,it.morphNormals=W.morphNormals,it.morphColors=W.morphColors,it.morphTargetsCount=W.morphTargetsCount,it.numClippingPlanes=W.numClippingPlanes,it.numIntersection=W.numClipIntersection,it.vertexAlphas=W.vertexAlphas,it.vertexTangents=W.vertexTangents,it.toneMapping=W.toneMapping}function Or(R,W,it,st,k){W.isScene!==!0&&(W=Ne),U.resetTextureUnits();const Tt=W.fog,Lt=st.isMeshStandardMaterial?W.environment:null,Pt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Rr,Bt=(st.isMeshStandardMaterial?$:E).get(st.envMap||Lt),ae=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,se=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Kt=!!it.morphAttributes.position,xe=!!it.morphAttributes.normal,ye=!!it.morphAttributes.color;let Xe=Ga;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xe=D.toneMapping);const Ae=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,re=Ae!==void 0?Ae.length:0,Jt=zt.get(st),fn=_.state.lights;if(ft===!0&&(bt===!0||R!==C)){const Qe=R===C&&st.id===w;At.setState(st,R,Qe)}let Ee=!1;st.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==fn.state.version||Jt.outputColorSpace!==Pt||k.isBatchedMesh&&Jt.batching===!1||!k.isBatchedMesh&&Jt.batching===!0||k.isBatchedMesh&&Jt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Jt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Jt.instancing===!1||!k.isInstancedMesh&&Jt.instancing===!0||k.isSkinnedMesh&&Jt.skinning===!1||!k.isSkinnedMesh&&Jt.skinning===!0||k.isInstancedMesh&&Jt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Jt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Jt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Jt.instancingMorph===!1&&k.morphTexture!==null||Jt.envMap!==Bt||st.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==At.numPlanes||Jt.numIntersection!==At.numIntersection)||Jt.vertexAlphas!==ae||Jt.vertexTangents!==se||Jt.morphTargets!==Kt||Jt.morphNormals!==xe||Jt.morphColors!==ye||Jt.toneMapping!==Xe||Jt.morphTargetsCount!==re)&&(Ee=!0):(Ee=!0,Jt.__version=st.version);let Pn=Jt.currentProgram;Ee===!0&&(Pn=Ke(st,W,k));let pi=!1,Dn=!1,mn=!1;const Ie=Pn.getUniforms(),Un=Jt.uniforms;if(Rt.useProgram(Pn.program)&&(pi=!0,Dn=!0,mn=!0),st.id!==w&&(w=st.id,Dn=!0),pi||C!==R){Rt.buffers.depth.getReversed()?(St.copy(R.projectionMatrix),yM(St),SM(St),Ie.setValue(F,"projectionMatrix",St)):Ie.setValue(F,"projectionMatrix",R.projectionMatrix),Ie.setValue(F,"viewMatrix",R.matrixWorldInverse);const Sn=Ie.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,Wt.setFromMatrixPosition(R.matrixWorld)),qt.logarithmicDepthBuffer&&Ie.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ie.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Dn=!0,mn=!0)}if(k.isSkinnedMesh){Ie.setOptional(F,k,"bindMatrix"),Ie.setOptional(F,k,"bindMatrixInverse");const Qe=k.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ie.setValue(F,"boneTexture",Qe.boneTexture,U))}k.isBatchedMesh&&(Ie.setOptional(F,k,"batchingTexture"),Ie.setValue(F,"batchingTexture",k._matricesTexture,U),Ie.setOptional(F,k,"batchingIdTexture"),Ie.setValue(F,"batchingIdTexture",k._indirectTexture,U),Ie.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&Ie.setValue(F,"batchingColorTexture",k._colorsTexture,U));const An=it.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&jt.update(k,it,Pn),(Dn||Jt.receiveShadow!==k.receiveShadow)&&(Jt.receiveShadow=k.receiveShadow,Ie.setValue(F,"receiveShadow",k.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Un.envMap.value=Bt,Un.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(Un.envMapIntensity.value=W.environmentIntensity),Dn&&(Ie.setValue(F,"toneMappingExposure",D.toneMappingExposure),Jt.needsLights&&Bc(Un,mn),Tt&&st.fog===!0&&Ut.refreshFogUniforms(Un,Tt),Ut.refreshMaterialUniforms(Un,st,Z,Q,_.state.transmissionRenderTarget[R.id]),Dc.upload(F,yn(Jt),Un,U)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Dc.upload(F,yn(Jt),Un,U),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ie.setValue(F,"center",k.center),Ie.setValue(F,"modelViewMatrix",k.modelViewMatrix),Ie.setValue(F,"normalMatrix",k.normalMatrix),Ie.setValue(F,"modelMatrix",k.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Qe=st.uniformsGroups;for(let Sn=0,Ts=Qe.length;Sn<Ts;Sn++){const zn=Qe[Sn];q.update(zn,Pn),q.bind(zn,Pn)}}return Pn}function Bc(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Fc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,W,it){zt.get(R.texture).__webglTexture=W,zt.get(R.depthTexture).__webglTexture=it;const st=zt.get(R);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const it=zt.get(R);it.__webglFramebuffer=W,it.__useDefaultFramebuffer=W===void 0};const Vo=F.createFramebuffer();this.setRenderTarget=function(R,W=0,it=0){X=R,G=W,O=it;let st=!0,k=null,Tt=!1,Lt=!1;if(R){const Bt=zt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(Bt.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Bt.__hasExternalTextures)U.rebindTextures(R,zt.get(R.texture).__webglTexture,zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Kt=R.depthTexture;if(Bt.__boundDepthTexture!==Kt){if(Kt!==null&&zt.has(Kt)&&(R.width!==Kt.image.width||R.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const ae=R.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Lt=!0);const se=zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(se[W])?k=se[W][it]:k=se[W],Tt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?k=zt.get(R).__webglMultisampledFramebuffer:Array.isArray(se)?k=se[it]:k=se,H.copy(R.viewport),lt.copy(R.scissor),rt=R.scissorTest}else H.copy(N).multiplyScalar(Z).floor(),lt.copy(J).multiplyScalar(Z).floor(),rt=Mt;if(it!==0&&(k=Vo),Rt.bindFramebuffer(F.FRAMEBUFFER,k)&&st&&Rt.drawBuffers(R,k),Rt.viewport(H),Rt.scissor(lt),Rt.setScissorTest(rt),Tt){const Bt=zt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,it)}else if(Lt){const Bt=zt.get(R.texture),ae=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,it,ae)}else if(R!==null&&it!==0){const Bt=zt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,it)}w=-1},this.readRenderTargetPixels=function(R,W,it,st,k,Tt,Lt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Pt=Pt[Lt]),Pt){Rt.bindFramebuffer(F.FRAMEBUFFER,Pt);try{const Bt=R.texture,ae=Bt.format,se=Bt.type;if(!qt.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-st&&it>=0&&it<=R.height-k&&F.readPixels(W,it,st,k,le.convert(ae),le.convert(se),Tt)}finally{const Bt=X!==null?zt.get(X).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(R,W,it,st,k,Tt,Lt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Pt=Pt[Lt]),Pt){const Bt=R.texture,ae=Bt.format,se=Bt.type;if(!qt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-st&&it>=0&&it<=R.height-k){Rt.bindFramebuffer(F.FRAMEBUFFER,Pt);const Kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(W,it,st,k,le.convert(ae),le.convert(se),0);const xe=X!==null?zt.get(X).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,xe);const ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await xM(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(Kt),F.deleteSync(ye),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,it=0){R.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const st=Math.pow(2,-it),k=Math.floor(R.image.width*st),Tt=Math.floor(R.image.height*st),Lt=W!==null?W.x:0,Pt=W!==null?W.y:0;U.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,it,0,0,Lt,Pt,k,Tt),Rt.unbindTexture()};const qa=F.createFramebuffer(),Pr=F.createFramebuffer();this.copyTextureToTexture=function(R,W,it=null,st=null,k=0,Tt=null){R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,R=arguments[1],W=arguments[2],Tt=arguments[3]||0,it=null),Tt===null&&(k!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=k,k=0):Tt=0);let Lt,Pt,Bt,ae,se,Kt,xe,ye,Xe;const Ae=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(it!==null)Lt=it.max.x-it.min.x,Pt=it.max.y-it.min.y,Bt=it.isBox3?it.max.z-it.min.z:1,ae=it.min.x,se=it.min.y,Kt=it.isBox3?it.min.z:0;else{const An=Math.pow(2,-k);Lt=Math.floor(Ae.width*An),Pt=Math.floor(Ae.height*An),R.isDataArrayTexture?Bt=Ae.depth:R.isData3DTexture?Bt=Math.floor(Ae.depth*An):Bt=1,ae=0,se=0,Kt=0}st!==null?(xe=st.x,ye=st.y,Xe=st.z):(xe=0,ye=0,Xe=0);const re=le.convert(W.format),Jt=le.convert(W.type);let fn;W.isData3DTexture?(U.setTexture3D(W,0),fn=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),fn=F.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),fn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Ee=F.getParameter(F.UNPACK_ROW_LENGTH),Pn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pi=F.getParameter(F.UNPACK_SKIP_PIXELS),Dn=F.getParameter(F.UNPACK_SKIP_ROWS),mn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ae),F.pixelStorei(F.UNPACK_SKIP_ROWS,se),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Kt);const Ie=R.isDataArrayTexture||R.isData3DTexture,Un=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const An=zt.get(R),Qe=zt.get(W),Sn=zt.get(An.__renderTarget),Ts=zt.get(Qe.__renderTarget);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let zn=0;zn<Bt;zn++)Ie&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.get(R).__webglTexture,k,Kt+zn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.get(W).__webglTexture,Tt,Xe+zn)),F.blitFramebuffer(ae,se,Lt,Pt,xe,ye,Lt,Pt,F.DEPTH_BUFFER_BIT,F.NEAREST);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||R.isRenderTargetTexture||zt.has(R)){const An=zt.get(R),Qe=zt.get(W);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,qa),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pr);for(let Sn=0;Sn<Bt;Sn++)Ie?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,An.__webglTexture,k,Kt+Sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,An.__webglTexture,k),Un?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,Xe+Sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qe.__webglTexture,Tt),k!==0?F.blitFramebuffer(ae,se,Lt,Pt,xe,ye,Lt,Pt,F.COLOR_BUFFER_BIT,F.NEAREST):Un?F.copyTexSubImage3D(fn,Tt,xe,ye,Xe+Sn,ae,se,Lt,Pt):F.copyTexSubImage2D(fn,Tt,xe,ye,ae,se,Lt,Pt);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(fn,Tt,xe,ye,Xe,Lt,Pt,Bt,re,Jt,Ae.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(fn,Tt,xe,ye,Xe,Lt,Pt,Bt,re,Ae.data):F.texSubImage3D(fn,Tt,xe,ye,Xe,Lt,Pt,Bt,re,Jt,Ae):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,xe,ye,Lt,Pt,re,Jt,Ae.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,xe,ye,Ae.width,Ae.height,re,Ae.data):F.texSubImage2D(F.TEXTURE_2D,Tt,xe,ye,Lt,Pt,re,Jt,Ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,mn),Tt===0&&W.generateMipmaps&&F.generateMipmap(fn),Rt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,it=null,st=null,k=0){return R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,R=arguments[2],W=arguments[3],k=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,it,st,k)},this.initRenderTarget=function(R){zt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Rt.unbindTexture()},this.resetState=function(){G=0,O=0,X=null,Rt.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=we._getDrawingBufferColorSpace(e),i.unpackColorSpace=we._getUnpackColorSpace()}}const qA=({appState:o="PRE_FLIGHT"})=>{const e=ne.useRef(null),i=ne.useRef(null),s=ne.useRef({x:0,y:-3.1,z:0,scale:1});return ne.useEffect(()=>{o==="PRE_FLIGHT"?s.current={x:0,y:-3.5,z:0,scale:1}:o==="PROCESSING"?s.current={x:0,y:-.5,z:.5,scale:.85}:s.current={x:2.8,y:-.6,z:-1.2,scale:.65}},[o]),ne.useEffect(()=>{const l=e.current;if(!l)return;const u=window.innerWidth,d=window.innerHeight,h=new qM,m=new ui(45,u/d,.1,1e3);m.position.z=5.2;const p=new jA({alpha:!0,antialias:!0});p.setSize(u,d),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(p.domElement);const g=new iE,x=g.load("/assets/nasa-lroc-color-2k.jpg"),y=g.load("/assets/nasa-lola-height-1k.jpg");x.colorSpace=ti,x.anisotropy=p.capabilities.getMaxAnisotropy(),y.anisotropy=p.capabilities.getMaxAnisotropy();const M=new wh(4.15,128,128),A=new QM({map:x,bumpMap:y,bumpScale:.14,displacementMap:y,displacementScale:.035,roughness:.98,metalness:0}),b=new Li(M,A);b.position.set(s.current.x,s.current.y,s.current.z),h.add(b),i.current=b;const S=new rE(14209217,1.35);S.position.set(-3.5,5,3),h.add(S);const _=new oE(131586,.025);h.add(_);const I=(ct,dt,N,J)=>{const Mt=new Float32Array(ct*3);for(let St=0;St<ct*3;St+=3)Mt[St]=(Math.random()-.5)*23,Mt[St+1]=(Math.random()-.5)*16,Mt[St+2]=-J-Math.random()*3;const Y=new fi;Y.setAttribute("position",new bi(Mt,3));const ft=new ov({color:15788767,size:dt,transparent:!0,opacity:N,sizeAttenuation:!0}),bt=new KM(Y,ft);return h.add(bt),{geometry:Y,material:ft}},L=[I(700,.014,.42,4),I(150,.03,.72,2)],D=[];for(let ct=0;ct<3;ct++){const dt=new fi().setFromPoints([new at(1.05,.38,0),new at(0,0,0)]),N=new rv({color:16183523,transparent:!0,opacity:0}),J=new ZM(dt,N);J.position.set((Math.random()-.5)*10,(Math.random()-.5)*7,-2.5),h.add(J),D.push({streak:J,material:N,delay:3+Math.random()*8,speed:.045+Math.random()*.025,age:0,duration:.65+Math.random()*.45})}let j=!1,G={x:0,y:0},O={x:0,y:0},X=0,w=0,C=0,H=0;const lt=ct=>{const dt=ct.target;dt&&(dt.tagName==="BUTTON"||dt.tagName==="INPUT"||dt.closest("button")||dt.closest(".pointer-events-auto"))||(j=!0,G={x:ct.clientX,y:ct.clientY})},rt=ct=>{if(X=(ct.clientX/window.innerWidth-.5)*2,w=(ct.clientY/window.innerHeight-.5)*2,j&&b){const dt=ct.clientX-G.x,N=ct.clientY-G.y;O.x=dt*.004,O.y=N*.004,b.rotation.y+=O.x,b.rotation.x+=O.y,G={x:ct.clientX,y:ct.clientY}}},_t=()=>{j=!1};window.addEventListener("mousedown",lt),window.addEventListener("mousemove",rt),window.addEventListener("mouseup",_t);let mt;const z=new cE,Q=()=>{mt=requestAnimationFrame(Q);const ct=Math.min(z.getDelta(),.05);C+=(X-C)*.03,H+=(w-H)*.03,b&&(j||(O.x*=.95,O.y*=.95,b.rotation.y+=O.x+8e-4,b.rotation.x+=O.y),b.position.x+=(s.current.x+C*.15-b.position.x)*.05,b.position.y+=(s.current.y-H*.1-b.position.y)*.05,b.position.z+=(s.current.z-b.position.z)*.05),L[1].material.opacity=.62+Math.sin(z.elapsedTime*.7)*.12,D.forEach(dt=>{if(dt.delay-=ct,dt.delay>0)return;dt.age+=ct;const N=dt.age/dt.duration,J=Math.pow(Math.sin(Math.min(N,1)*Math.PI),.55);dt.streak.position.x-=dt.speed*60*ct,dt.streak.position.y-=dt.speed*22*ct,dt.material.opacity=J*.82,N>=1&&(dt.streak.position.set((Math.random()-.5)*10,(Math.random()-.5)*7,-2.5),dt.material.opacity=0,dt.age=0,dt.delay=5+Math.random()*11,dt.duration=.65+Math.random()*.45)}),p.render(h,m)};Q();const Z=()=>{if(!l)return;const ct=window.innerWidth,dt=window.innerHeight;m.aspect=ct/dt,m.updateProjectionMatrix(),p.setSize(ct,dt)};return window.addEventListener("resize",Z),()=>{cancelAnimationFrame(mt),window.removeEventListener("mousedown",lt),window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",_t),window.removeEventListener("resize",Z),l.contains(p.domElement)&&l.removeChild(p.domElement),p.dispose(),x.dispose(),y.dispose(),L.forEach(({geometry:ct,material:dt})=>{ct.dispose(),dt.dispose()}),D.forEach(({streak:ct,material:dt})=>{ct.geometry.dispose(),dt.dispose()})}},[]),P.jsx("div",{className:"fixed inset-0 z-0 overflow-hidden bg-[#010101]",children:P.jsx("div",{ref:e,className:"absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"})})},WA=({toasts:o,onDismiss:e})=>P.jsx("div",{className:"fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none",children:o.map(i=>P.jsx(YA,{toast:i,onDismiss:e},i.id))}),YA=({toast:o,onDismiss:e})=>{ne.useEffect(()=>{const l=setTimeout(()=>{e(o.id)},4500);return()=>clearTimeout(l)},[o.id,e]);const i={success:P.jsx(w_,{className:"w-5 h-5 text-emerald-400 shrink-0"}),info:P.jsx(iS,{className:"w-5 h-5 text-cyan-400 shrink-0"}),warning:P.jsx(M0,{className:"w-5 h-5 text-amber-400 shrink-0"}),error:P.jsx(M0,{className:"w-5 h-5 text-rose-400 shrink-0"})},s={success:"border-emerald-500/40 shadow-emerald-950/40",info:"border-cyan-500/40 shadow-cyan-950/40",warning:"border-amber-500/40 shadow-amber-950/40",error:"border-rose-500/40 shadow-rose-950/40"};return P.jsxs("div",{className:`pointer-events-auto flex items-start gap-3 p-4 rounded-xl glass-panel ${s[o.type]} border shadow-xl transition-all duration-300 transform translate-y-0`,children:[i[o.type],P.jsxs("div",{className:"flex-1 min-w-0",children:[P.jsx("div",{className:"text-xs font-mono font-semibold tracking-wider uppercase text-slate-200",children:o.title}),P.jsx("div",{className:"text-xs text-slate-400 font-mono mt-0.5 break-words",children:o.description})]}),P.jsx("button",{onClick:()=>e(o.id),className:"text-slate-400 hover:text-white p-1 rounded transition-colors",children:P.jsx(L_,{className:"w-4 h-4"})})]})},ZA=({onFileSelected:o,onDemoSelected:e,disabled:i=!1})=>{const[s,l]=ne.useState(!1),u=ne.useRef(null),d=g=>{g.preventDefault(),i||l(!0)},h=()=>{l(!1)},m=g=>{g.preventDefault(),l(!1),!i&&g.dataTransfer.files&&g.dataTransfer.files.length>0&&o(g.dataTransfer.files[0])},p=g=>{!i&&g.target.files&&g.target.files.length>0&&o(g.target.files[0])};return P.jsxs("div",{className:"w-full max-w-lg space-y-4",children:[P.jsxs("div",{onDragOver:d,onDragLeave:h,onDrop:m,onClick:()=>{var g;return!i&&((g=u.current)==null?void 0:g.click())},className:`group relative cursor-pointer rounded-sm p-7 transition-all duration-300 backdrop-blur-2xl border ${i?"border-white/10 bg-[#0b0b0a]/50 opacity-60 cursor-not-allowed":s?"border-stone-300/80 bg-stone-900/50 shadow-2xl scale-[1.01]":"border-white/15 bg-[#0b0b0a]/75 hover:border-stone-300/40 hover:bg-[#11110f]/85 shadow-2xl shadow-black/60"}`,children:[P.jsx("input",{ref:u,type:"file",accept:".zip,.xml,.img,.raw,.png,.jpg,.jpeg,.tif,.tiff",className:"hidden",onChange:p,disabled:i}),P.jsxs("div",{className:"flex items-start gap-4",children:[P.jsx("div",{className:"w-11 h-11 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-stone-200 group-hover:scale-105 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0",children:P.jsx(ES,{className:"w-5 h-5"})}),P.jsxs("div",{className:"flex-1 min-w-0",children:[P.jsx("h3",{className:"text-base font-medium text-stone-100 tracking-tight mb-1",children:"Upload Lunar Imagery / PDS4 Archive"}),P.jsx("p",{className:"text-xs text-stone-400 leading-relaxed mb-4",children:"Drag & drop telemetry files, .zip archives, or lunar imagery here to begin photometric correction."}),P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsxs("button",{type:"button",disabled:i,className:"px-4 py-2 rounded-sm bg-stone-100 text-stone-950 hover:bg-white font-semibold text-xs transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed",children:[P.jsx("span",{children:"Select File"}),P.jsx(Iy,{className:"w-3.5 h-3.5"})]}),P.jsx("span",{className:"text-[11px] text-stone-500 font-mono",children:".ZIP · .IMG · .PNG · .TIF"})]})]})]})]}),P.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 rounded-sm bg-black/50 backdrop-blur-md border border-white/10 text-xs text-stone-400",children:[P.jsxs("span",{className:"flex items-center gap-1.5",children:[P.jsx(Qy,{className:"w-3.5 h-3.5 text-stone-500"}),P.jsx("span",{children:"No file available?"})]}),P.jsx("button",{type:"button",onClick:e,disabled:i,className:"text-stone-200 hover:text-white font-medium transition-colors hover:underline disabled:opacity-50 disabled:cursor-not-allowed",children:"Load Chandrayaan Sample Swath →"})]})]})},bc=["Uploading PDS4 archive…","Extracting dataset files…","Locating IMG + XML pairs…","Converting IMG → NPY representation…","Creating image tiles…","Running Real-ESRGAN enhancement…","Stitching enhanced tiles…","Finalising output…"],KA=({dataset:o,onComplete:e,isProcessing:i=!1,isDemoMode:s=!1,error:l=null})=>{const[u,d]=ne.useState(bc[0]),h=ne.useRef(0);ne.useEffect(()=>{if(l){d(`Upload failed: ${l}`);return}if(s){const p=setTimeout(()=>{d("Computing Hapke photometric model…")},450),g=setTimeout(()=>{e()},950);return()=>{clearTimeout(p),clearTimeout(g)}}if(i){h.current=0,d(bc[0]);const p=setInterval(()=>{h.current=Math.min(h.current+1,bc.length-1),d(bc[h.current])},8e3);return()=>clearInterval(p)}},[e,i,s,l]);const m=l||u;return P.jsxs("div",{className:"max-w-md w-full mx-auto p-6 rounded-2xl bg-[#0d131f] border border-slate-800 text-center shadow-xl",children:[P.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-800 mx-auto mb-4 flex items-center justify-center text-sky-400",children:P.jsx(N_,{className:"w-5 h-5 animate-spin"})}),P.jsx("h3",{className:"text-sm font-semibold text-slate-100 mb-1",children:l?"Upload Error":`Loading ${o.targetFeature}`}),P.jsx("p",{className:`text-xs mb-4 font-mono ${l?"text-rose-300":"text-slate-400"}`,children:m}),P.jsx("div",{className:"w-full h-1 rounded-full bg-slate-800 overflow-hidden",children:P.jsx("div",{className:"h-full bg-sky-500 rounded-full animate-[pulse_1s_infinite] w-3/4 mx-auto"})})]})},QA=({originalImageUrl:o,enhancedImageUrl:e,datasetName:i="Lunar Surface Swath",imageWidth:s=0,imageHeight:l=0,processedTiles:u=0,totalTiles:d=0,processingTime:h=0})=>{const m=ne.useRef(null),p=ne.useRef(null),g=ne.useRef(null),[x,y]=ne.useState(50),[M,A]=ne.useState(!1),[b,S]=ne.useState("CURTAIN"),[_,I]=ne.useState(1),[L,D]=ne.useState({x:0,y:0}),[j,G]=ne.useState(!1),[O,X]=ne.useState({x:0,y:0}),[w,C]=ne.useState(!1),[H,lt]=ne.useState({x:0,y:0,normX:.5,normY:.5}),[rt,_t]=ne.useState(105),[mt,z]=ne.useState(115),[Q,Z]=ne.useState(null),[ct,dt]=ne.useState(null),[N,J]=ne.useState(!1),[Mt,Y]=ne.useState(null),ft=2048;ne.useEffect(()=>{if(!o&&!e)return;J(!0),Y(null);const Ct=Rt=>new Promise((te,zt)=>{const U=new Image;U.crossOrigin="anonymous",U.onload=()=>te(U),U.onerror=()=>zt(new Error(`Failed to load image from ${Rt}`)),U.src=`${Rt}?t=${Date.now()}`}),qt=[];o&&qt.push(Ct(o)),e&&qt.push(Ct(e)),Promise.all(qt).then(([Rt,te])=>{Z(Rt||null),dt(te||null),J(!1)}).catch(Rt=>{console.warn("Image preloading error:",Rt),Y("Failed to fetch image files from backend."),J(!1)})},[o,e]);const bt=ne.useCallback(()=>{const Ct=p.current,qt=g.current;if(!Ct||!qt)return;const Rt=Ct.getContext("2d"),te=qt.getContext("2d");if(!Rt||!te)return;Rt.imageSmoothingEnabled=_<=2.5,_>2.5&&(Rt.imageSmoothingQuality="low"),te.imageSmoothingEnabled=!0,te.imageSmoothingQuality="high";const zt=(U,E,$,ht,Et)=>{U.clearRect(0,0,$,ht),E&&E.naturalWidth>0?U.drawImage(E,0,0,$,ht):(U.fillStyle="#0b0f19",U.fillRect(0,0,$,ht),U.fillStyle="#64748b",U.font="32px system-ui, sans-serif",U.textAlign="center",U.fillText(Et,$/2,ht/2))};zt(Rt,Q,Ct.width,Ct.height,"Original Imagery"),zt(te,ct,qt.width,qt.height,"AI Enhanced Surface")},[Q,ct,_]);ne.useEffect(()=>{bt()},[bt]);const St=Ct=>{Ct.preventDefault(),Ct.stopPropagation(),A(!0)},Ft=Ct=>{const qt=m.current;if(!qt)return;const Rt=qt.getBoundingClientRect(),te=Ct.clientX-Rt.left,zt=Ct.clientY-Rt.top,U=Math.max(0,Math.min(1,te/Rt.width)),E=Math.max(0,Math.min(1,zt/Rt.height));if(lt({x:te,y:zt,normX:U,normY:E}),M){const $=Math.max(2,Math.min(98,te/Rt.width*100));y($);return}j&&D({x:te-O.x,y:zt-O.y})},Wt=()=>{A(!1),G(!1)},Yt=Ct=>{Ct.button===0&&!M&&(G(!0),X({x:Ct.clientX-m.current.getBoundingClientRect().left-L.x,y:Ct.clientY-m.current.getBoundingClientRect().top-L.y}))},Ne=Ct=>{Ct.preventDefault();const qt=m.current;if(!qt)return;const Rt=qt.getBoundingClientRect(),te=Ct.clientX-Rt.left,zt=Ct.clientY-Rt.top,U=Ct.deltaY<0?1.25:.8,E=Math.min(16,Math.max(1,parseFloat((_*U).toFixed(2))));if(E===1){I(1),D({x:0,y:0});return}const $=E/_,ht=te-(te-L.x)*$,Et=zt-(zt-L.y)*$;I(E),D({x:ht,y:Et})},Le=Ct=>{if(_>1)I(1),D({x:0,y:0});else{const qt=m.current;if(!qt)return;const Rt=qt.getBoundingClientRect(),te=Ct.clientX-Rt.left,zt=Ct.clientY-Rt.top;I(4),D({x:Rt.width/2-te*4,y:Rt.height/2-zt*4})}},he=Ct=>{Ct===1?(I(1),D({x:0,y:0})):I(Ct)},F=()=>{I(1),D({x:0,y:0}),y(50),_t(105),z(115),C(!1)},en={filter:`brightness(${rt}%) contrast(${mt}%)`};return P.jsxs("div",{className:"flex flex-col w-full rounded-2xl bg-[#090d16] border border-slate-800/80 overflow-hidden shadow-2xl",children:[P.jsxs("div",{className:"flex flex-wrap items-center justify-between px-5 py-3 bg-[#060911] border-b border-slate-800/80 gap-3",children:[P.jsxs("div",{className:"flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800",children:[P.jsxs("button",{onClick:()=>S("CURTAIN"),className:`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${b==="CURTAIN"?"bg-sky-500 text-white shadow-md shadow-sky-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"}`,children:[P.jsx(xS,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"Curtain Slider"})]}),P.jsxs("button",{onClick:()=>S("SIDE_BY_SIDE"),className:`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${b==="SIDE_BY_SIDE"?"bg-sky-500 text-white shadow-md shadow-sky-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"}`,children:[P.jsx(ky,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"Side-by-Side"})]}),P.jsxs("button",{onClick:()=>S("ENHANCED_ONLY"),className:`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${b==="ENHANCED_ONLY"?"bg-sky-500 text-white shadow-md shadow-sky-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"}`,children:[P.jsx(Lo,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"AI Enhanced"})]}),P.jsxs("button",{onClick:()=>S("ORIGINAL_ONLY"),className:`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${b==="ORIGINAL_ONLY"?"bg-sky-500 text-white shadow-md shadow-sky-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"}`,children:[P.jsx(U_,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"Original"})]})]}),P.jsxs("div",{className:"flex items-center gap-4 bg-slate-900/90 rounded-xl border border-slate-800 px-3 py-1.5 text-xs text-slate-300",children:[P.jsxs("div",{className:"flex items-center gap-2",title:"Adjust Brightness",children:[P.jsx(SS,{className:"w-3.5 h-3.5 text-amber-400"}),P.jsx("input",{type:"range",min:"70",max:"180",value:rt,onChange:Ct=>_t(Number(Ct.target.value)),className:"w-16 accent-sky-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg",title:`Brightness: ${rt}%`}),P.jsxs("span",{className:"text-[10px] font-mono text-slate-400 min-w-[2rem]",children:[rt,"%"]})]}),P.jsxs("div",{className:"flex items-center gap-2 pl-3 border-l border-slate-800",title:"Adjust Contrast",children:[P.jsx(Wy,{className:"w-3.5 h-3.5 text-sky-400"}),P.jsx("input",{type:"range",min:"80",max:"200",value:mt,onChange:Ct=>z(Number(Ct.target.value)),className:"w-16 accent-sky-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg",title:`Contrast: ${mt}%`}),P.jsxs("span",{className:"text-[10px] font-mono text-slate-400 min-w-[2rem]",children:[mt,"%"]})]})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("div",{className:"hidden lg:flex items-center gap-1 bg-slate-900/90 rounded-xl border border-slate-800 p-1",children:[1,2,4,8,16].map(Ct=>P.jsxs("button",{onClick:()=>he(Ct),className:`px-2 py-1 rounded-lg text-[11px] font-mono font-medium transition-all ${Math.round(_)===Ct?"bg-sky-500 text-white":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"}`,children:[Ct,"x"]},Ct))}),P.jsxs("div",{className:"flex items-center gap-1 bg-slate-900/90 rounded-xl border border-slate-800 p-1",children:[P.jsx("button",{onClick:()=>I(Ct=>Math.min(16,parseFloat((Ct*1.3).toFixed(2)))),className:"p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors",title:"Zoom In",children:P.jsx(AS,{className:"w-4 h-4"})}),P.jsxs("span",{className:"text-[11px] font-mono font-semibold text-sky-400 px-1 min-w-[2.8rem] text-center",children:[_.toFixed(1),"x"]}),P.jsx("button",{onClick:()=>I(Ct=>{const qt=Math.max(1,parseFloat((Ct/1.3).toFixed(2)));return qt===1&&D({x:0,y:0}),qt}),className:"p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors",title:"Zoom Out",children:P.jsx(CS,{className:"w-4 h-4"})})]}),P.jsx("button",{onClick:()=>C(!w),className:`p-2 rounded-xl border transition-all ${w?"bg-sky-500 border-sky-400 text-white shadow-md shadow-sky-500/25":"bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800"}`,title:"Toggle 4x Detail Magnifier Lens",children:P.jsx(pS,{className:"w-4 h-4"})}),P.jsx("button",{onClick:F,className:"p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors",title:"Reset View and Zoom",children:P.jsx(dS,{className:"w-4 h-4"})})]})]}),b==="SIDE_BY_SIDE"?P.jsxs("div",{ref:m,onWheel:Ne,onMouseMove:Ft,onMouseDown:Yt,onMouseUp:Wt,className:"grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-[#05070d] cursor-grab active:cursor-grabbing select-none",children:[P.jsxs("div",{className:"relative rounded-xl overflow-hidden bg-black aspect-square border border-slate-800/80 shadow-lg",children:[P.jsx("div",{className:"absolute top-3 left-3 z-10 px-3 py-1 rounded-md bg-slate-950/85 backdrop-blur-sm border border-slate-800 text-xs font-semibold text-slate-300",children:"Raw / Original Swath (1x Sensor)"}),o?P.jsx("div",{className:"w-full h-full origin-center transition-transform duration-75 ease-out",style:{transform:`scale(${_}) translate(${L.x/_}px, ${L.y/_}px)`,...en},children:P.jsx("img",{src:o,alt:"Original Swath",className:`w-full h-full object-contain bg-black ${_>2.5?"image-rendering-pixelated":""}`})}):P.jsx("div",{className:"w-full h-full flex items-center justify-center text-slate-600 text-sm",children:"No Original Image"})]}),P.jsxs("div",{className:"relative rounded-xl overflow-hidden bg-black aspect-square border border-sky-500/30 shadow-lg",children:[P.jsxs("div",{className:"absolute top-3 right-3 z-10 px-3 py-1 rounded-md bg-sky-950/85 backdrop-blur-sm border border-sky-500/40 text-xs font-semibold text-sky-300 flex items-center gap-1.5",children:[P.jsx(Lo,{className:"w-3 h-3"}),P.jsx("span",{children:"AI Enhanced (4K Super-Resolution)"})]}),e?P.jsx("div",{className:"w-full h-full origin-center transition-transform duration-75 ease-out",style:{transform:`scale(${_}) translate(${L.x/_}px, ${L.y/_}px)`,...en},children:P.jsx("img",{src:e,alt:"AI Enhanced",className:"w-full h-full object-contain bg-black"})}):P.jsx("div",{className:"w-full h-full flex items-center justify-center text-slate-600 text-sm",children:"No Enhanced Image"})]})]}):P.jsxs("div",{ref:m,onWheel:Ne,onDoubleClick:Le,onMouseMove:Ft,onMouseDown:Yt,onMouseUp:Wt,onMouseLeave:()=>{A(!1),G(!1)},className:`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#05070d] overflow-hidden select-none ${j?"cursor-grabbing":M?"cursor-ew-resize":w?"cursor-crosshair":"cursor-grab"}`,children:[N&&P.jsxs("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-xs text-sky-400 gap-2",children:[P.jsx(N_,{className:"w-6 h-6 animate-spin"}),P.jsx("span",{className:"text-xs font-mono",children:"Loading high-resolution layers…"})]}),Mt&&P.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-lg bg-rose-950/90 border border-rose-800 text-rose-300 text-xs",children:Mt}),P.jsxs("div",{className:"absolute inset-0 origin-center transition-transform duration-75 ease-out",style:{transform:`scale(${_}) translate(${L.x/_}px, ${L.y/_}px)`,...en},children:[(b==="CURTAIN"||b==="ENHANCED_ONLY")&&P.jsx("canvas",{ref:g,width:ft,height:ft,className:"absolute inset-0 w-full h-full object-contain"}),(b==="CURTAIN"||b==="ORIGINAL_ONLY")&&P.jsx("div",{className:"absolute inset-0 overflow-hidden",style:{width:b==="CURTAIN"?`${x}%`:"100%"},children:P.jsx("canvas",{ref:p,width:ft,height:ft,className:"absolute inset-0 w-full h-full object-contain max-w-none",style:{width:m.current?`${m.current.clientWidth}px`:"100%"}})})]}),b==="CURTAIN"&&P.jsxs("div",{className:"absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none",style:{left:`${x}%`},children:[P.jsx("div",{className:"w-[2px] h-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.9)]"}),P.jsx("div",{onMouseDown:St,className:"absolute w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center pointer-events-auto cursor-ew-resize shadow-2xl hover:scale-110 transition-transform",children:P.jsx("div",{className:"w-3 h-0.5 bg-white rounded-full"})})]}),w&&ct&&P.jsxs("div",{className:"absolute z-30 pointer-events-none w-48 h-48 rounded-full border-2 border-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.5)] overflow-hidden transform -translate-x-1/2 -translate-y-1/2 bg-black",style:{left:`${H.x}px`,top:`${H.y}px`},children:[P.jsx("div",{className:"w-full h-full",style:{backgroundImage:`url(${e})`,backgroundPosition:`${H.normX*100}% ${H.normY*100}%`,backgroundSize:"400%",backgroundRepeat:"no-repeat",...en}}),P.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/80 border border-sky-500/50 text-[9px] font-mono text-sky-300",children:"4x Super-Res Lens"})]}),(b==="CURTAIN"||b==="ORIGINAL_ONLY")&&P.jsxs("div",{className:"absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs font-semibold text-slate-200 shadow-lg",children:["Original Imagery ",_>2.5&&P.jsx("span",{className:"text-amber-400 ml-1",children:"(Sensor Pixels)"})]}),(b==="CURTAIN"||b==="ENHANCED_ONLY")&&P.jsxs("div",{className:"absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-sky-950/85 backdrop-blur-md border border-sky-500/40 text-xs font-semibold text-sky-300 shadow-lg flex items-center gap-1.5",children:[P.jsx(Lo,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"AI Enhanced (4K Super-Res)"})]}),_>1&&P.jsx("div",{className:"absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[10px] font-mono text-slate-400",children:"Drag to pan · Scroll wheel to zoom · Double-click to reset"})]}),P.jsxs("div",{className:"flex flex-wrap items-center justify-between px-5 py-3 bg-[#060911] border-t border-slate-800/80 text-xs text-slate-400 gap-3 font-mono",children:[P.jsxs("div",{className:"flex items-center gap-4",children:[P.jsxs("span",{children:["Swath: ",P.jsx("span",{className:"text-slate-200",children:i})]}),s>0&&l>0&&P.jsxs("span",{children:["Full Resolution: ",P.jsxs("span",{className:"text-slate-200",children:[s.toLocaleString()," × ",l.toLocaleString()," px"]})]}),P.jsxs("span",{children:["Zoom: ",P.jsxs("span",{className:"text-sky-400 font-semibold",children:[_.toFixed(1),"x"]})]})]}),P.jsxs("div",{className:"flex items-center gap-4",children:[d>0&&P.jsxs("span",{children:["Tiles Processed: ",P.jsxs("span",{className:"text-slate-200",children:[u," / ",d]})]}),h>0&&P.jsxs("span",{children:["Time: ",P.jsxs("span",{className:"text-sky-400",children:[h,"s"]})]})]})]})]})},JA=({dataset:o,originalImageUrl:e,enhancedImageUrl:i,onShowToast:s})=>{const l=async(d,h)=>{if(!d){s("warning","Export Unavailable","Image is not available for download.");return}try{const p=await(await fetch(d)).blob(),g=URL.createObjectURL(p),x=document.createElement("a");x.href=g,x.download=h,document.body.appendChild(x),x.click(),document.body.removeChild(x),URL.revokeObjectURL(g),s("success","Download Started",`Saved ${h}`)}catch{const m=document.createElement("a");m.href=d,m.download=h,m.target="_blank",document.body.appendChild(m),m.click(),document.body.removeChild(m)}},u=()=>{var g;const d=`# ISRO Lunar AI Image Enhancement Report
**Mission:** ${o.mission}
**Instrument:** ${o.instrument}
**Target Swath:** ${o.targetFeature}
**Timestamp:** ${new Date().toISOString()}

## Processing Overview
- **Enhancement Architecture:** Real-ESRGAN x4 Deep Residual Dense Network
- **Processing Mode:** Automated Tiling & Overlap Blending
- **Ground Sampling Distance:** ${((g=o.geometry)==null?void 0:g.groundSamplingDistanceM)||5} m/px
- **Status:** Quality Calibration and Enhancement Verified
`,h=new Blob([d],{type:"text/markdown"}),m=URL.createObjectURL(h),p=document.createElement("a");p.href=m,p.download=`${o.id}_analysis_report.md`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(m),s("success","Report Exported","Saved analysis summary report.")};return P.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#090d16] border border-slate-800/80 shadow-xl",children:[P.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Export Processed Imagery:"}),P.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[P.jsxs("button",{onClick:()=>l(i,`${o.id}_enhanced.png`),disabled:!i,className:"px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-sky-600/20",children:[P.jsx(Lo,{className:"w-4 h-4"}),P.jsx("span",{children:"Download AI Enhanced PNG"})]}),P.jsxs("button",{onClick:()=>l(e,`${o.id}_original.png`),disabled:!e,className:"px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors",children:[P.jsx(U_,{className:"w-3.5 h-3.5 text-slate-400"}),P.jsx("span",{children:"Original Crop"})]}),P.jsxs("button",{onClick:u,className:"px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors",children:[P.jsx(D_,{className:"w-3.5 h-3.5 text-slate-400"}),P.jsx("span",{children:"Summary Report"})]})]})]})},vh="http://127.0.0.1:8000";function A_(o){const e=o.replace(/\\/g,"/");if(e.startsWith("http"))return e;const i=e.replace(/^\.\//,"");return`${vh}/${i}`}async function $A(o){const e=new FormData;e.append("file",o);let i;try{i=await fetch(`${vh}/upload-pds4`,{method:"POST",body:e})}catch{throw new Error("Cannot reach the backend server. Make sure it is running on "+vh)}if(!i.ok){let s=`Server error (${i.status})`;try{const l=await i.json();l.detail&&(s=typeof l.detail=="string"?l.detail:JSON.stringify(l.detail))}catch{s=`${i.status} ${i.statusText}`}throw new Error(s)}return i.json()}const t2=({dataset:o,onShowToast:e,enhancementResult:i=null})=>{const s=i!=null&&i.original_preview?A_(i.original_preview):void 0,l=i!=null&&i.stitched_demo?A_(i.stitched_demo):void 0;return P.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6",children:[P.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-white/5",children:[P.jsxs("div",{children:[P.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[P.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium",children:[P.jsx(w_,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"Enhancement Complete"})]}),P.jsxs("span",{className:"text-xs text-stone-500 font-mono",children:[o.mission," · ",o.instrument]})]}),P.jsx("h2",{className:"text-2xl font-semibold text-stone-100 tracking-tight",children:o.targetFeature})]}),P.jsxs("div",{className:"flex items-center gap-3 bg-stone-900/60 border border-white/10 px-4 py-2 rounded-xl text-xs text-stone-300",children:[P.jsxs("div",{className:"flex items-center gap-1.5",children:[P.jsx(sS,{className:"w-4 h-4 text-sky-400"}),P.jsx("span",{className:"text-stone-400",children:"Pipeline:"}),P.jsx("span",{className:"font-mono font-medium text-stone-200",children:"Real-ESRGAN x4"})]}),i!=null&&i.processing_time_seconds?P.jsxs("div",{className:"flex items-center gap-1.5 pl-3 border-l border-white/10",children:[P.jsx(Lo,{className:"w-3.5 h-3.5 text-amber-400"}),P.jsxs("span",{className:"font-mono text-stone-200",children:[i.processing_time_seconds,"s"]})]}):null]})]}),P.jsx("div",{className:"w-full",children:P.jsx(QA,{originalImageUrl:s,enhancedImageUrl:l,datasetName:o.targetFeature,imageWidth:i==null?void 0:i.image_width,imageHeight:i==null?void 0:i.image_height,processedTiles:i==null?void 0:i.processed_tiles,totalTiles:i==null?void 0:i.total_tiles,processingTime:i==null?void 0:i.processing_time_seconds})}),P.jsx(JA,{dataset:o,originalImageUrl:s,enhancedImageUrl:l,onShowToast:e})]})},e2=({isOpen:o,onClose:e,dataset:i})=>{const[s,l]=ne.useState(!1);if(!o)return null;const u=()=>{navigator.clipboard.writeText(i.pds4XmlLabel),l(!0),setTimeout(()=>l(!1),2e3)};return P.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:P.jsxs("div",{className:"w-full max-w-2xl bg-[#0d131f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",children:[P.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e18]",children:[P.jsxs("div",{children:[P.jsx("h3",{className:"text-sm font-semibold text-white",children:"PDS4 Product Label"}),P.jsx("p",{className:"text-xs text-slate-400",children:i.productUri})]}),P.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",children:P.jsx(L_,{className:"w-4 h-4"})})]}),P.jsxs("div",{className:"p-6 overflow-y-auto font-mono text-xs space-y-4 flex-1",children:[P.jsxs("div",{className:"grid grid-cols-2 gap-3 text-slate-300",children:[P.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[P.jsx("div",{className:"text-slate-500 text-[10px]",children:"INCIDENCE ANGLE (i)"}),P.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.incidenceDeg,"°"]})]}),P.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[P.jsx("div",{className:"text-slate-500 text-[10px]",children:"EMISSION ANGLE (e)"}),P.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.emissionDeg,"°"]})]}),P.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[P.jsx("div",{className:"text-slate-500 text-[10px]",children:"PHASE ANGLE (α)"}),P.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.phaseDeg,"°"]})]}),P.jsxs("div",{className:"p-3 rounded-xl bg-[#090e18] border border-slate-800",children:[P.jsx("div",{className:"text-slate-500 text-[10px]",children:"ALTITUDE"}),P.jsxs("div",{className:"text-sm font-semibold text-slate-200",children:[i.geometry.spacecraftAltitudeKm," km"]})]})]}),P.jsxs("div",{className:"relative",children:[P.jsxs("button",{onClick:u,className:"absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1.5 transition-colors",children:[s?P.jsx(Fy,{className:"w-3 h-3 text-emerald-400"}):P.jsx(Zy,{className:"w-3 h-3"}),P.jsx("span",{children:s?"Copied":"Copy"})]}),P.jsx("pre",{className:"p-4 rounded-xl bg-[#060a12] text-slate-300 border border-slate-800 overflow-x-auto text-[11px] leading-relaxed",children:i.pds4XmlLabel})]})]}),P.jsx("div",{className:"px-6 py-3 border-t border-slate-800 bg-[#090e18] flex justify-end",children:P.jsx("button",{onClick:e,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors",children:"Close"})})]})})},n2=()=>{const[o,e]=ne.useState("PRE_FLIGHT"),[i,s]=ne.useState(Qf[0]),[l,u]=ne.useState(!1),[d,h]=ne.useState([]),[m,p]=ne.useState(null),[g,x]=ne.useState(null),[y,M]=ne.useState(null),[A,b]=ne.useState(!1),[S,_]=ne.useState(!1),I=(X,w,C)=>{const H=`toast-${Date.now()}`;h(lt=>[...lt,{id:H,type:X,title:w,description:C}])},L=X=>{h(w=>w.filter(C=>C.id!==X))},D=async X=>{const w={...Qf[0],id:`CUSTOM_${X.name.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,productUri:`URN:ISRO:PDS4:${X.name.toUpperCase()}`,targetFeature:`Lunar Swath: ${X.name}`};s(w),p(X),M(null),_(!1),b(!0),e("PROCESSING");try{const C=await $A(X);x(C),b(!1),I("success","Processing complete","Image enhancement finished."),e("DASHBOARD")}catch(C){const H=(C==null?void 0:C.message)||"Upload failed";M(H),b(!1),I("error","Upload failed",H),e("PRE_FLIGHT")}},j=()=>{s(Qf[0]),_(!0),b(!1),e("PROCESSING")},G=()=>{e("DASHBOARD")},O=()=>{e("PRE_FLIGHT"),x(null),p(null),M(null),b(!1),_(!1)};return P.jsxs("div",{className:"relative min-h-screen bg-[#030303] text-stone-200 flex flex-col selection:bg-stone-200/20 selection:text-stone-100",children:[P.jsx(qA,{appState:o}),P.jsx(wS,{appState:o,dataset:i,onReset:O,onOpenPds4Modal:()=>u(!0)}),P.jsxs("main",{className:"relative z-10 flex-1 flex flex-col justify-center",children:[o==="PRE_FLIGHT"&&P.jsxs("div",{className:"w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12 flex flex-col justify-between min-h-[calc(100vh-86px)]",children:[P.jsxs("div",{className:"max-w-3xl space-y-7 mt-[10vh] lg:mt-[12vh]",children:[P.jsxs("div",{className:"space-y-4",children:[P.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono tracking-[0.24em] text-stone-400 uppercase",children:[P.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-stone-300"}),P.jsx("span",{children:"ISRO / Chandrayaan lunar archive"})]}),P.jsx("h1",{className:"max-w-2xl text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.055em] text-stone-100 leading-[0.94]",children:"Read the lunar surface in a different light."}),P.jsx("p",{className:"text-sm sm:text-base text-stone-400 max-w-md leading-relaxed",children:"An instrument panel for Chandrayaan imagery—built to reveal terrain, recover shadow detail, and make the Moon legible."})]}),P.jsx(ZA,{onFileSelected:D,onDemoSelected:j,disabled:A})]}),P.jsxs("div",{className:"pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-wide text-stone-400 uppercase",children:[P.jsxs("div",{className:"flex items-center gap-6",children:[P.jsxs("span",{className:"flex items-center gap-2",children:[P.jsx(jy,{className:"w-3.5 h-3.5 text-stone-500"}),P.jsx("span",{children:"SPICE Geometry Inversion"})]}),P.jsxs("span",{className:"flex items-center gap-2",children:[P.jsx(gS,{className:"w-3.5 h-3.5 text-stone-500"}),P.jsx("span",{children:"Hapke 5-Parameter Physics"})]}),P.jsxs("span",{className:"hidden sm:flex items-center gap-2",children:[P.jsx(lS,{className:"w-3.5 h-3.5 text-stone-500"}),P.jsx("span",{children:"South Pole Prime Zone"})]})]}),P.jsx("span",{className:"text-stone-500 text-[10px]",children:"ISRO Planetary Data Node"})]})]}),o==="PROCESSING"&&P.jsx("div",{className:"w-full flex items-center justify-center p-4",children:P.jsx(KA,{dataset:i,onComplete:G,isProcessing:A,isDemoMode:S,error:y})}),o==="DASHBOARD"&&P.jsx(t2,{dataset:i,onShowToast:I,enhancementResult:g})]}),P.jsx(e2,{isOpen:l,onClose:()=>u(!1),dataset:i}),P.jsx(WA,{toasts:d,onDismiss:L})]})};Ny.createRoot(document.getElementById("root")).render(P.jsx(by.StrictMode,{children:P.jsx(n2,{})}));
