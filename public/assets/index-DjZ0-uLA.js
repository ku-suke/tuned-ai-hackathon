const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-DzUFwiV1.js","assets/LoginView-tn0RQdqM.css","assets/CreateView-Cr7HINvF.js","assets/EditView-DkNAvrl5.js","assets/EditView-D6RVUPDr.css","assets/CreateView-d-NtGfXD.js","assets/CreateView-CYtykEnk.css","assets/DetailView-CPtKPbeF.js","assets/DetailView-DjFPRF6s.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},Br=[],Zt=()=>{},py=()=>!1,Lo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yc=t=>t.startsWith("onUpdate:"),ft=Object.assign,Xc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gy=Object.prototype.hasOwnProperty,Re=(t,e)=>gy.call(t,e),ce=Array.isArray,$r=t=>Fo(t)==="[object Map]",Vd=t=>Fo(t)==="[object Set]",fe=t=>typeof t=="function",We=t=>typeof t=="string",Qn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Md=t=>(Ve(t)||fe(t))&&fe(t.then)&&fe(t.catch),xd=Object.prototype.toString,Fo=t=>xd.call(t),my=t=>Fo(t).slice(8,-1),Ld=t=>Fo(t)==="[object Object]",Zc=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ls=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_y=/-(\w)/g,Lt=Uo(t=>t.replace(_y,(e,n)=>n?n.toUpperCase():"")),yy=/\B([A-Z])/g,Jn=Uo(t=>t.replace(yy,"-$1").toLowerCase()),Bo=Uo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ma=Uo(t=>t?`on${Bo(t)}`:""),jn=(t,e)=>!Object.is(t,e),to=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},uc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hh;const $o=()=>hh||(hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eu(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?Iy(r):eu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Ve(t))return t}const Ey=/;(?![^(]*\))/g,Ty=/:([^]+)/,wy=/\/\*[^]*?\*\//g;function Iy(t){const e={};return t.replace(wy,"").split(Ey).forEach(n=>{if(n){const r=n.split(Ty);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tu(t){let e="";if(We(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=tu(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ay=Jc(vy);function Ud(t){return!!t||t===""}const Bd=t=>!!(t&&t.__v_isRef===!0),Ry=t=>We(t)?t:t==null?"":ce(t)||Ve(t)&&(t.toString===xd||!fe(t.toString))?Bd(t)?Ry(t.value):JSON.stringify(t,$d,2):String(t),$d=(t,e)=>Bd(e)?$d(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xa(r,i)+" =>"]=s,n),{})}:Vd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xa(n))}:Qn(e)?xa(e):Ve(e)&&!ce(e)&&!Ld(e)?String(e):e,xa=(t,e="")=>{var n;return Qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class by{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sy(){return bt}let De;const La=new WeakSet;class jd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,La.has(this)&&(La.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fh(this),Wd(this);const e=De,n=$t;De=this,$t=!0;try{return this.fn()}finally{Kd(this),De=e,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)su(e);this.deps=this.depsTail=void 0,fh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?La.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lc(this)&&this.run()}get dirty(){return lc(this)}}let Hd=0,Fs,Us;function qd(t,e=!1){if(t.flags|=8,e){t.next=Us,Us=t;return}t.next=Fs,Fs=t}function nu(){Hd++}function ru(){if(--Hd>0)return;if(Us){let e=Us;for(Us=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fs;){let e=Fs;for(Fs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Wd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),su(r),Py(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function lc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ys))return;t.globalVersion=Ys;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!lc(t)){t.flags&=-3;return}const n=De,r=$t;De=t,$t=!0;try{Wd(t);const s=t.fn(t._value);(e.version===0||jn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,$t=r,Kd(t),t.flags&=-3}}function su(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)su(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Py(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $t=!0;const Gd=[];function Yn(){Gd.push($t),$t=!1}function Xn(){const t=Gd.pop();$t=t===void 0?!0:t}function fh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let Ys=0;class Cy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class iu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!$t||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new Cy(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Qd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,Ys++,this.notify(e)}notify(e){nu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ru()}}}function Qd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Qd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const hc=new WeakMap,hr=Symbol(""),fc=Symbol(""),Xs=Symbol("");function at(t,e,n){if($t&&De){let r=hc.get(t);r||hc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new iu),s.map=r,s.key=n),s.track()}}function pn(t,e,n,r,s,i){const o=hc.get(t);if(!o){Ys++;return}const c=u=>{u&&u.trigger()};if(nu(),e==="clear")o.forEach(c);else{const u=ce(t),h=u&&Zc(n);if(u&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Xs||!Qn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(Xs)),e){case"add":u?h&&c(o.get("length")):(c(o.get(hr)),$r(t)&&c(o.get(fc)));break;case"delete":u||(c(o.get(hr)),$r(t)&&c(o.get(fc)));break;case"set":$r(t)&&c(o.get(hr));break}}ru()}function kr(t){const e=Ae(t);return e===t?e:(at(e,"iterate",Xs),xt(t)?e:e.map(ct))}function jo(t){return at(t=Ae(t),"iterate",Xs),t}const Dy={__proto__:null,[Symbol.iterator](){return Fa(this,Symbol.iterator,ct)},concat(...t){return kr(this).concat(...t.map(e=>ce(e)?kr(e):e))},entries(){return Fa(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return ln(this,"every",t,e,void 0,arguments)},filter(t,e){return ln(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return ln(this,"find",t,e,ct,arguments)},findIndex(t,e){return ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ln(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ua(this,"includes",t)},indexOf(...t){return Ua(this,"indexOf",t)},join(t){return kr(this).join(t)},lastIndexOf(...t){return Ua(this,"lastIndexOf",t)},map(t,e){return ln(this,"map",t,e,void 0,arguments)},pop(){return Ss(this,"pop")},push(...t){return Ss(this,"push",t)},reduce(t,...e){return dh(this,"reduce",t,e)},reduceRight(t,...e){return dh(this,"reduceRight",t,e)},shift(){return Ss(this,"shift")},some(t,e){return ln(this,"some",t,e,void 0,arguments)},splice(...t){return Ss(this,"splice",t)},toReversed(){return kr(this).toReversed()},toSorted(t){return kr(this).toSorted(t)},toSpliced(...t){return kr(this).toSpliced(...t)},unshift(...t){return Ss(this,"unshift",t)},values(){return Fa(this,"values",ct)}};function Fa(t,e,n){const r=jo(t),s=r[e]();return r!==t&&!xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Oy=Array.prototype;function ln(t,e,n,r,s,i){const o=jo(t),c=o!==t&&!xt(t),u=o[e];if(u!==Oy[e]){const p=u.apply(t,i);return c?ct(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,ct(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=u.call(o,h,r);return c&&s?s(f):f}function dh(t,e,n,r){const s=jo(t);let i=n;return s!==t&&(xt(t)?n.length>3&&(i=function(o,c,u){return n.call(this,o,c,u,t)}):i=function(o,c,u){return n.call(this,o,ct(c),u,t)}),s[e](i,...r)}function Ua(t,e,n){const r=Ae(t);at(r,"iterate",Xs);const s=r[e](...n);return(s===-1||s===!1)&&cu(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ss(t,e,n=[]){Yn(),nu();const r=Ae(t)[e].apply(t,n);return ru(),Xn(),r}const ky=Jc("__proto__,__v_isRef,__isVue"),Jd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qn));function Ny(t){Qn(t)||(t=String(t));const e=Ae(this);return at(e,"has",t),e.hasOwnProperty(t)}class Yd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Hy:tp:i?ep:Zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let u;if(o&&(u=Dy[n]))return u;if(n==="hasOwnProperty")return Ny}const c=Reflect.get(e,n,ht(e)?e:r);return(Qn(n)?Jd.has(n):ky(n))||(s||at(e,"get",n),i)?c:ht(c)?o&&Zc(n)?c:c.value:Ve(c)?s?rp(c):Ho(c):c}}class Xd extends Yd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const u=gr(i);if(!xt(r)&&!gr(r)&&(i=Ae(i),r=Ae(r)),!ce(e)&&ht(i)&&!ht(r))return u?!1:(i.value=r,!0)}const o=ce(e)&&Zc(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,ht(e)?e:s);return e===Ae(s)&&(o?jn(r,i)&&pn(e,"set",n,r):pn(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Qn(n)||!Jd.has(n))&&at(e,"has",n),r}ownKeys(e){return at(e,"iterate",ce(e)?"length":hr),Reflect.ownKeys(e)}}class Vy extends Yd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const My=new Xd,xy=new Vy,Ly=new Xd(!0);const dc=t=>t,Wi=t=>Reflect.getPrototypeOf(t);function Fy(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=$r(i),c=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,h=s[t](...r),f=n?dc:e?pc:ct;return!e&&at(i,"iterate",u?fc:hr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Ki(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Uy(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(jn(s,c)&&at(o,"get",s),at(o,"get",c));const{has:u}=Wi(o),h=e?dc:t?pc:ct;if(u.call(o,s))return h(i.get(s));if(u.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&at(Ae(s),"iterate",hr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(jn(s,c)&&at(o,"has",s),at(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,u=Ae(c),h=e?dc:t?pc:ct;return!t&&at(u,"iterate",hr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return ft(n,t?{add:Ki("add"),set:Ki("set"),delete:Ki("delete"),clear:Ki("clear")}:{add(s){!e&&!xt(s)&&!gr(s)&&(s=Ae(s));const i=Ae(this);return Wi(i).has.call(i,s)||(i.add(s),pn(i,"add",s,s)),this},set(s,i){!e&&!xt(i)&&!gr(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:u}=Wi(o);let h=c.call(o,s);h||(s=Ae(s),h=c.call(o,s));const f=u.call(o,s);return o.set(s,i),h?jn(i,f)&&pn(o,"set",s,i):pn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=Wi(i);let u=o.call(i,s);u||(s=Ae(s),u=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return u&&pn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Fy(s,t,e)}),n}function ou(t,e){const n=Uy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const By={get:ou(!1,!1)},$y={get:ou(!1,!0)},jy={get:ou(!0,!1)};const Zd=new WeakMap,ep=new WeakMap,tp=new WeakMap,Hy=new WeakMap;function qy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wy(t){return t.__v_skip||!Object.isExtensible(t)?0:qy(my(t))}function Ho(t){return gr(t)?t:au(t,!1,My,By,Zd)}function np(t){return au(t,!1,Ly,$y,ep)}function rp(t){return au(t,!0,xy,jy,tp)}function au(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Wy(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function jr(t){return gr(t)?jr(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function xt(t){return!!(t&&t.__v_isShallow)}function cu(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Ky(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Fd(t,"__v_skip",!0),t}const ct=t=>Ve(t)?Ho(t):t,pc=t=>Ve(t)?rp(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function zy(t){return sp(t,!1)}function Gy(t){return sp(t,!0)}function sp(t,e){return ht(t)?t:new Qy(t,e)}class Qy{constructor(e,n){this.dep=new iu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xt(e)||gr(e);e=r?e:Ae(e),jn(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function Hr(t){return ht(t)?t.value:t}const Jy={get:(t,e,n)=>e==="__v_raw"?t:Hr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ip(t){return jr(t)?t:new Proxy(t,Jy)}class Yy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new iu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return qd(this,!0),!0}get value(){const e=this.dep.track();return zd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xy(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Yy(r,s,n)}const zi={},mo=new WeakMap;let ar;function Zy(t,e=!1,n=ar){if(n){let r=mo.get(n);r||mo.set(n,r=[]),r.push(t)}}function eE(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:u}=n,h=$=>s?$:xt($)||s===!1||s===0?gn($,1):gn($);let f,p,g,_,C=!1,k=!1;if(ht(t)?(p=()=>t.value,C=xt(t)):jr(t)?(p=()=>h(t),C=!0):ce(t)?(k=!0,C=t.some($=>jr($)||xt($)),p=()=>t.map($=>{if(ht($))return $.value;if(jr($))return h($);if(fe($))return u?u($,2):$()})):fe(t)?e?p=u?()=>u(t,2):t:p=()=>{if(g){Yn();try{g()}finally{Xn()}}const $=ar;ar=f;try{return u?u(t,3,[_]):t(_)}finally{ar=$}}:p=Zt,e&&s){const $=p,ae=s===!0?1/0:s;p=()=>gn($(),ae)}const O=Sy(),H=()=>{f.stop(),O&&O.active&&Xc(O.effects,f)};if(i&&e){const $=e;e=(...ae)=>{$(...ae),H()}}let U=k?new Array(t.length).fill(zi):zi;const j=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const ae=f.run();if(s||C||(k?ae.some((he,v)=>jn(he,U[v])):jn(ae,U))){g&&g();const he=ar;ar=f;try{const v=[ae,U===zi?void 0:k&&U[0]===zi?[]:U,_];u?u(e,3,v):e(...v),U=ae}finally{ar=he}}}else f.run()};return c&&c(j),f=new jd(p),f.scheduler=o?()=>o(j,!1):j,_=$=>Zy($,!1,f),g=f.onStop=()=>{const $=mo.get(f);if($){if(u)u($,4);else for(const ae of $)ae();mo.delete(f)}},e?r?j(!0):U=f.run():o?o(j.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function gn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ht(t))gn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)gn(t[r],e,n);else if(Vd(t)||$r(t))t.forEach(r=>{gn(r,e,n)});else if(Ld(t)){for(const r in t)gn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function di(t,e,n,r){try{return r?t(...r):t()}catch(s){qo(s,e,n)}}function sn(t,e,n,r){if(fe(t)){const s=di(t,e,n,r);return s&&Md(s)&&s.catch(i=>{qo(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function qo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let c=e.parent;const u=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,u,h)===!1)return}c=c.parent}if(i){Yn(),di(i,null,10,[t,u,h]),Xn();return}}tE(t,n,s,r,o)}function tE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Jt=-1;const qr=[];let Nn=null,Vr=0;const op=Promise.resolve();let _o=null;function ap(t){const e=_o||op;return t?e.then(this?t.bind(this):t):e}function nE(t){let e=Jt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=Zs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function uu(t){if(!(t.flags&1)){const e=Zs(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=Zs(n)?_t.push(t):_t.splice(nE(e),0,t),t.flags|=1,cp()}}function cp(){_o||(_o=op.then(lp))}function rE(t){ce(t)?qr.push(...t):Nn&&t.id===-1?Nn.splice(Vr+1,0,t):t.flags&1||(qr.push(t),t.flags|=1),cp()}function ph(t,e,n=Jt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function up(t){if(qr.length){const e=[...new Set(qr)].sort((n,r)=>Zs(n)-Zs(r));if(qr.length=0,Nn){Nn.push(...e);return}for(Nn=e,Vr=0;Vr<Nn.length;Vr++){const n=Nn[Vr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nn=null,Vr=0}}const Zs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lp(t){try{for(Jt=0;Jt<_t.length;Jt++){const e=_t[Jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),di(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jt<_t.length;Jt++){const e=_t[Jt];e&&(e.flags&=-2)}Jt=-1,_t.length=0,up(),_o=null,(_t.length||qr.length)&&lp()}}let St=null,hp=null;function yo(t){const e=St;return St=t,hp=t&&t.type.__scopeId||null,e}function sE(t,e=St,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ah(-1);const i=yo(e);let o;try{o=t(...s)}finally{yo(i),r._d&&Ah(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function W0(t,e){if(St===null)return t;const n=Go(St),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,u=Ce]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&gn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:u}))}return t}function ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let u=c.dir[r];u&&(Yn(),sn(u,n,8,[t.el,c,t,e]),Xn())}}const iE=Symbol("_vte"),oE=t=>t.__isTeleport;function lu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function fp(t,e){return fe(t)?ft({name:t.name},e,{setup:t}):t}function dp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Eo(t,e,n,r,s=!1){if(ce(t)){t.forEach((C,k)=>Eo(C,e&&(ce(e)?e[k]:e),n,r,s));return}if(Bs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Eo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Go(r.component):r.el,o=s?null:i,{i:c,r:u}=t,h=e&&e.r,f=c.refs===Ce?c.refs={}:c.refs,p=c.setupState,g=Ae(p),_=p===Ce?()=>!1:C=>Re(g,C);if(h!=null&&h!==u&&(We(h)?(f[h]=null,_(h)&&(p[h]=null)):ht(h)&&(h.value=null)),fe(u))di(u,c,12,[o,f]);else{const C=We(u),k=ht(u);if(C||k){const O=()=>{if(t.f){const H=C?_(u)?p[u]:f[u]:u.value;s?ce(H)&&Xc(H,i):ce(H)?H.includes(i)||H.push(i):C?(f[u]=[i],_(u)&&(p[u]=f[u])):(u.value=[i],t.k&&(f[t.k]=u.value))}else C?(f[u]=o,_(u)&&(p[u]=o)):k&&(u.value=o,t.k&&(f[t.k]=o))};o?(O.id=-1,Rt(O,n)):O()}}}$o().requestIdleCallback;$o().cancelIdleCallback;const Bs=t=>!!t.type.__asyncLoader,pp=t=>t.type.__isKeepAlive;function aE(t,e){gp(t,"a",e)}function cE(t,e){gp(t,"da",e)}function gp(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pp(s.parent.vnode)&&uE(r,e,n,s),s=s.parent}}function uE(t,e,n,r){const s=Wo(e,t,r,!0);mp(()=>{Xc(r[e],s)},n)}function Wo(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Yn();const c=pi(n),u=sn(e,n,t,o);return c(),Xn(),u});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=lt)=>{(!ti||t==="sp")&&Wo(t,(...r)=>e(...r),n)},lE=Rn("bm"),hE=Rn("m"),fE=Rn("bu"),dE=Rn("u"),pE=Rn("bum"),mp=Rn("um"),gE=Rn("sp"),mE=Rn("rtg"),_E=Rn("rtc");function yE(t,e=lt){Wo("ec",t,e)}const EE="components";function TE(t,e){return IE(EE,t,!0,e)||t}const wE=Symbol.for("v-ndc");function IE(t,e,n=!0,r=!1){const s=St||lt;if(s){const i=s.type;{const c=uT(i,!1);if(c&&(c===e||c===Lt(e)||c===Bo(Lt(e))))return i}const o=gh(s[t]||i[t],e)||gh(s.appContext[t],e);return!o&&r?i:o}}function gh(t,e){return t&&(t[e]||t[Lt(e)]||t[Bo(Lt(e))])}function K0(t,e,n,r){let s;const i=n,o=ce(t);if(o||We(t)){const c=o&&jr(t);let u=!1;c&&(u=!xt(t),t=jo(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(u?ct(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(c,u)=>e(c,u,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let u=0,h=c.length;u<h;u++){const f=c[u];s[u]=e(t[f],f,u,i)}}else s=[];return s}const gc=t=>t?Up(t)?Go(t):gc(t.parent):null,$s=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gc(t.parent),$root:t=>gc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yp(t),$forceUpdate:t=>t.f||(t.f=()=>{uu(t.update)}),$nextTick:t=>t.n||(t.n=ap.bind(t.proxy)),$watch:t=>HE.bind(t)}),Ba=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),vE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:u}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ba(r,e))return o[e]=1,r[e];if(s!==Ce&&Re(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return o[e]=3,i[e];if(n!==Ce&&Re(n,e))return o[e]=4,n[e];mc&&(o[e]=0)}}const f=$s[e];let p,g;if(f)return e==="$attrs"&&at(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&Re(n,e))return o[e]=4,n[e];if(g=u.config.globalProperties,Re(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ba(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ce&&Re(t,o)||Ba(e,o)||(c=i[0])&&Re(c,o)||Re(r,o)||Re($s,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mh(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mc=!0;function AE(t){const e=yp(t),n=t.proxy,r=t.ctx;mc=!1,e.beforeCreate&&_h(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:u,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:C,activated:k,deactivated:O,beforeDestroy:H,beforeUnmount:U,destroyed:j,unmounted:$,render:ae,renderTracked:he,renderTriggered:v,errorCaptured:y,serverPrefetch:I,expose:A,inheritAttrs:R,components:S,directives:w,filters:dt}=e;if(h&&RE(h,r,null),o)for(const me in o){const pe=o[me];fe(pe)&&(r[me]=pe.bind(n))}if(s){const me=s.call(n,n);Ve(me)&&(t.data=Ho(me))}if(mc=!0,i)for(const me in i){const pe=i[me],vt=fe(pe)?pe.bind(n,n):fe(pe.get)?pe.get.bind(n,n):Zt,Ft=!fe(pe)&&fe(pe.set)?pe.set.bind(n):Zt,Nt=Bt({get:vt,set:Ft});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Me=>Nt.value=Me})}if(c)for(const me in c)_p(c[me],r,n,me);if(u){const me=fe(u)?u.call(n):u;Reflect.ownKeys(me).forEach(pe=>{no(pe,me[pe])})}f&&_h(f,t,"c");function je(me,pe){ce(pe)?pe.forEach(vt=>me(vt.bind(n))):pe&&me(pe.bind(n))}if(je(lE,p),je(hE,g),je(fE,_),je(dE,C),je(aE,k),je(cE,O),je(yE,y),je(_E,he),je(mE,v),je(pE,U),je(mp,$),je(gE,I),ce(A))if(A.length){const me=t.exposed||(t.exposed={});A.forEach(pe=>{Object.defineProperty(me,pe,{get:()=>n[pe],set:vt=>n[pe]=vt})})}else t.exposed||(t.exposed={});ae&&t.render===Zt&&(t.render=ae),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),w&&(t.directives=w),I&&dp(t)}function RE(t,e,n=Zt){ce(t)&&(t=_c(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=jt(s.from||r,s.default,!0):i=jt(s.from||r):i=jt(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function _h(t,e,n){sn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _p(t,e,n,r){let s=r.includes(".")?Op(n,r):()=>n[r];if(We(t)){const i=e[t];fe(i)&&ro(s,i)}else if(fe(t))ro(s,t.bind(n));else if(Ve(t))if(ce(t))t.forEach(i=>_p(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&ro(s,i,t)}}function yp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let u;return c?u=c:!s.length&&!n&&!r?u=e:(u={},s.length&&s.forEach(h=>To(u,h,o,!0)),To(u,e,o)),Ve(e)&&i.set(e,u),u}function To(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&To(t,i,n,!0),s&&s.forEach(o=>To(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=bE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const bE={data:yh,props:Eh,emits:Eh,methods:ks,computed:ks,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:ks,directives:ks,watch:PE,provide:yh,inject:SE};function yh(t,e){return e?t?function(){return ft(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function SE(t,e){return ks(_c(t),_c(e))}function _c(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function ks(t,e){return t?ft(Object.create(null),t,e):e}function Eh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:ft(Object.create(null),mh(t),mh(e??{})):e}function PE(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function Ep(){return{app:null,config:{isNativeTag:py,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let CE=0;function DE(t,e){return function(r,s=null){fe(r)||(r=ft({},r)),s!=null&&!Ve(s)&&(s=null);const i=Ep(),o=new WeakSet,c=[];let u=!1;const h=i.app={_uid:CE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(h,...p)):fe(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!u){const _=h._ceVNode||Ct(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),u=!0,h._container=f,f.__vue_app__=h,Go(_.component)}},onUnmount(f){c.push(f)},unmount(){u&&(sn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Wr;Wr=h;try{return f()}finally{Wr=p}}};return h}}let Wr=null;function no(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=lt||St;if(r||Wr){const s=Wr?Wr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const Tp={},wp=()=>Object.create(Tp),Ip=t=>Object.getPrototypeOf(t)===Tp;function OE(t,e,n,r=!1){const s={},i=wp();t.propsDefaults=Object.create(null),vp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:np(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[u]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Ko(t.emitsOptions,g))continue;const _=e[g];if(u)if(Re(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const C=Lt(g);s[C]=yc(u,c,C,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{vp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Jn(p))===p||!Re(e,f)))&&(u?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=yc(u,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&pn(t.attrs,"set","")}function vp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let u in e){if(Ls(u))continue;const h=e[u];let f;s&&Re(s,f=Lt(u))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Ko(t.emitsOptions,u)||(!(u in r)||h!==r[u])&&(r[u]=h,o=!0)}if(i){const u=Ae(n),h=c||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=yc(s,u,p,h[p],t,!Re(h,p))}}return o}function yc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&fe(u)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=pi(s);r=h[n]=u.call(null,e),f()}}else r=u;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Jn(n))&&(r=!0))}return r}const NE=new WeakMap;function Ap(t,e,n=!1){const r=n?NE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let u=!1;if(!fe(t)){const f=p=>{u=!0;const[g,_]=Ap(p,e,!0);ft(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!u)return Ve(t)&&r.set(t,Br),Br;if(ce(i))for(let f=0;f<i.length;f++){const p=Lt(i[f]);Th(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=Lt(f);if(Th(p)){const g=i[f],_=o[p]=ce(g)||fe(g)?{type:g}:ft({},g),C=_.type;let k=!1,O=!0;if(ce(C))for(let H=0;H<C.length;++H){const U=C[H],j=fe(U)&&U.name;if(j==="Boolean"){k=!0;break}else j==="String"&&(O=!1)}else k=fe(C)&&C.name==="Boolean";_[0]=k,_[1]=O,(k||Re(_,"default"))&&c.push(p)}}const h=[o,c];return Ve(t)&&r.set(t,h),h}function Th(t){return t[0]!=="$"&&!Ls(t)}const Rp=t=>t[0]==="_"||t==="$stable",hu=t=>ce(t)?t.map(Yt):[Yt(t)],VE=(t,e,n)=>{if(e._n)return e;const r=sE((...s)=>hu(e(...s)),n);return r._c=!1,r},bp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Rp(s))continue;const i=t[s];if(fe(i))e[s]=VE(s,i,r);else if(i!=null){const o=hu(i);e[s]=()=>o}}},Sp=(t,e)=>{const n=hu(e);t.slots.default=()=>n},Pp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},ME=(t,e,n)=>{const r=t.slots=wp();if(t.vnode.shapeFlag&32){const s=e._;s?(Pp(r,e,n),n&&Fd(r,"_",s,!0)):bp(e,r)}else e&&Sp(t,e)},xE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Pp(s,e,n):(i=!e.$stable,bp(e,s)),o=e}else e&&(Sp(t,e),o={default:1});if(i)for(const c in s)!Rp(c)&&o[c]==null&&delete s[c]},Rt=JE;function LE(t){return FE(t)}function FE(t,e){const n=$o();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:u,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=Zt,insertStaticContent:C}=t,k=(E,T,b,V=null,L=null,x=null,z=void 0,W=null,q=!!T.dynamicChildren)=>{if(E===T)return;E&&!Ps(E,T)&&(V=N(E),Me(E,L,x,!0),E=null),T.patchFlag===-2&&(q=!1,T.dynamicChildren=null);const{type:B,ref:ne,shapeFlag:Q}=T;switch(B){case zo:O(E,T,b,V);break;case mr:H(E,T,b,V);break;case ja:E==null&&U(T,b,V,z);break;case dn:S(E,T,b,V,L,x,z,W,q);break;default:Q&1?ae(E,T,b,V,L,x,z,W,q):Q&6?w(E,T,b,V,L,x,z,W,q):(Q&64||Q&128)&&B.process(E,T,b,V,L,x,z,W,q,X)}ne!=null&&L&&Eo(ne,E&&E.ref,x,T||E,!T)},O=(E,T,b,V)=>{if(E==null)r(T.el=c(T.children),b,V);else{const L=T.el=E.el;T.children!==E.children&&h(L,T.children)}},H=(E,T,b,V)=>{E==null?r(T.el=u(T.children||""),b,V):T.el=E.el},U=(E,T,b,V)=>{[E.el,E.anchor]=C(E.children,T,b,V,E.el,E.anchor)},j=({el:E,anchor:T},b,V)=>{let L;for(;E&&E!==T;)L=g(E),r(E,b,V),E=L;r(T,b,V)},$=({el:E,anchor:T})=>{let b;for(;E&&E!==T;)b=g(E),s(E),E=b;s(T)},ae=(E,T,b,V,L,x,z,W,q)=>{T.type==="svg"?z="svg":T.type==="math"&&(z="mathml"),E==null?he(T,b,V,L,x,z,W,q):I(E,T,L,x,z,W,q)},he=(E,T,b,V,L,x,z,W)=>{let q,B;const{props:ne,shapeFlag:Q,transition:ee,dirs:se}=E;if(q=E.el=o(E.type,x,ne&&ne.is,ne),Q&8?f(q,E.children):Q&16&&y(E.children,q,null,V,L,$a(E,x),z,W),se&&ir(E,null,V,"created"),v(q,E,E.scopeId,z,V),ne){for(const de in ne)de!=="value"&&!Ls(de)&&i(q,de,null,ne[de],x,V);"value"in ne&&i(q,"value",null,ne.value,x),(B=ne.onVnodeBeforeMount)&&Qt(B,V,E)}se&&ir(E,null,V,"beforeMount");const re=UE(L,ee);re&&ee.beforeEnter(q),r(q,T,b),((B=ne&&ne.onVnodeMounted)||re||se)&&Rt(()=>{B&&Qt(B,V,E),re&&ee.enter(q),se&&ir(E,null,V,"mounted")},L)},v=(E,T,b,V,L)=>{if(b&&_(E,b),V)for(let x=0;x<V.length;x++)_(E,V[x]);if(L){let x=L.subTree;if(T===x||Np(x.type)&&(x.ssContent===T||x.ssFallback===T)){const z=L.vnode;v(E,z,z.scopeId,z.slotScopeIds,L.parent)}}},y=(E,T,b,V,L,x,z,W,q=0)=>{for(let B=q;B<E.length;B++){const ne=E[B]=W?Vn(E[B]):Yt(E[B]);k(null,ne,T,b,V,L,x,z,W)}},I=(E,T,b,V,L,x,z)=>{const W=T.el=E.el;let{patchFlag:q,dynamicChildren:B,dirs:ne}=T;q|=E.patchFlag&16;const Q=E.props||Ce,ee=T.props||Ce;let se;if(b&&or(b,!1),(se=ee.onVnodeBeforeUpdate)&&Qt(se,b,T,E),ne&&ir(T,E,b,"beforeUpdate"),b&&or(b,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(W,""),B?A(E.dynamicChildren,B,W,b,V,$a(T,L),x):z||pe(E,T,W,null,b,V,$a(T,L),x,!1),q>0){if(q&16)R(W,Q,ee,b,L);else if(q&2&&Q.class!==ee.class&&i(W,"class",null,ee.class,L),q&4&&i(W,"style",Q.style,ee.style,L),q&8){const re=T.dynamicProps;for(let de=0;de<re.length;de++){const _e=re[de],tt=Q[_e],Ge=ee[_e];(Ge!==tt||_e==="value")&&i(W,_e,tt,Ge,L,b)}}q&1&&E.children!==T.children&&f(W,T.children)}else!z&&B==null&&R(W,Q,ee,b,L);((se=ee.onVnodeUpdated)||ne)&&Rt(()=>{se&&Qt(se,b,T,E),ne&&ir(T,E,b,"updated")},V)},A=(E,T,b,V,L,x,z)=>{for(let W=0;W<T.length;W++){const q=E[W],B=T[W],ne=q.el&&(q.type===dn||!Ps(q,B)||q.shapeFlag&70)?p(q.el):b;k(q,B,ne,null,V,L,x,z,!0)}},R=(E,T,b,V,L)=>{if(T!==b){if(T!==Ce)for(const x in T)!Ls(x)&&!(x in b)&&i(E,x,T[x],null,L,V);for(const x in b){if(Ls(x))continue;const z=b[x],W=T[x];z!==W&&x!=="value"&&i(E,x,W,z,L,V)}"value"in b&&i(E,"value",T.value,b.value,L)}},S=(E,T,b,V,L,x,z,W,q)=>{const B=T.el=E?E.el:c(""),ne=T.anchor=E?E.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:se}=T;se&&(W=W?W.concat(se):se),E==null?(r(B,b,V),r(ne,b,V),y(T.children||[],b,ne,L,x,z,W,q)):Q>0&&Q&64&&ee&&E.dynamicChildren?(A(E.dynamicChildren,ee,b,L,x,z,W),(T.key!=null||L&&T===L.subTree)&&Cp(E,T,!0)):pe(E,T,b,ne,L,x,z,W,q)},w=(E,T,b,V,L,x,z,W,q)=>{T.slotScopeIds=W,E==null?T.shapeFlag&512?L.ctx.activate(T,b,V,z,q):dt(T,b,V,L,x,z,q):kt(E,T,q)},dt=(E,T,b,V,L,x,z)=>{const W=E.component=sT(E,V,L);if(pp(E)&&(W.ctx.renderer=X),iT(W,!1,z),W.asyncDep){if(L&&L.registerDep(W,je,z),!E.el){const q=W.subTree=Ct(mr);H(null,q,T,b)}}else je(W,E,T,b,L,x,z)},kt=(E,T,b)=>{const V=T.component=E.component;if(GE(E,T,b))if(V.asyncDep&&!V.asyncResolved){me(V,T,b);return}else V.next=T,V.update();else T.el=E.el,V.vnode=T},je=(E,T,b,V,L,x,z)=>{const W=()=>{if(E.isMounted){let{next:Q,bu:ee,u:se,parent:re,vnode:de}=E;{const nt=Dp(E);if(nt){Q&&(Q.el=de.el,me(E,Q,z)),nt.asyncDep.then(()=>{E.isUnmounted||W()});return}}let _e=Q,tt;or(E,!1),Q?(Q.el=de.el,me(E,Q,z)):Q=de,ee&&to(ee),(tt=Q.props&&Q.props.onVnodeBeforeUpdate)&&Qt(tt,re,Q,de),or(E,!0);const Ge=Ih(E),Vt=E.subTree;E.subTree=Ge,k(Vt,Ge,p(Vt.el),N(Vt),E,L,x),Q.el=Ge.el,_e===null&&QE(E,Ge.el),se&&Rt(se,L),(tt=Q.props&&Q.props.onVnodeUpdated)&&Rt(()=>Qt(tt,re,Q,de),L)}else{let Q;const{el:ee,props:se}=T,{bm:re,m:de,parent:_e,root:tt,type:Ge}=E,Vt=Bs(T);or(E,!1),re&&to(re),!Vt&&(Q=se&&se.onVnodeBeforeMount)&&Qt(Q,_e,T),or(E,!0);{tt.ce&&tt.ce._injectChildStyle(Ge);const nt=E.subTree=Ih(E);k(null,nt,b,V,E,L,x),T.el=nt.el}if(de&&Rt(de,L),!Vt&&(Q=se&&se.onVnodeMounted)){const nt=T;Rt(()=>Qt(Q,_e,nt),L)}(T.shapeFlag&256||_e&&Bs(_e.vnode)&&_e.vnode.shapeFlag&256)&&E.a&&Rt(E.a,L),E.isMounted=!0,T=b=V=null}};E.scope.on();const q=E.effect=new jd(W);E.scope.off();const B=E.update=q.run.bind(q),ne=E.job=q.runIfDirty.bind(q);ne.i=E,ne.id=E.uid,q.scheduler=()=>uu(ne),or(E,!0),B()},me=(E,T,b)=>{T.component=E;const V=E.vnode.props;E.vnode=T,E.next=null,kE(E,T.props,V,b),xE(E,T.children,b),Yn(),ph(E),Xn()},pe=(E,T,b,V,L,x,z,W,q=!1)=>{const B=E&&E.children,ne=E?E.shapeFlag:0,Q=T.children,{patchFlag:ee,shapeFlag:se}=T;if(ee>0){if(ee&128){Ft(B,Q,b,V,L,x,z,W,q);return}else if(ee&256){vt(B,Q,b,V,L,x,z,W,q);return}}se&8?(ne&16&&Tt(B,L,x),Q!==B&&f(b,Q)):ne&16?se&16?Ft(B,Q,b,V,L,x,z,W,q):Tt(B,L,x,!0):(ne&8&&f(b,""),se&16&&y(Q,b,V,L,x,z,W,q))},vt=(E,T,b,V,L,x,z,W,q)=>{E=E||Br,T=T||Br;const B=E.length,ne=T.length,Q=Math.min(B,ne);let ee;for(ee=0;ee<Q;ee++){const se=T[ee]=q?Vn(T[ee]):Yt(T[ee]);k(E[ee],se,b,null,L,x,z,W,q)}B>ne?Tt(E,L,x,!0,!1,Q):y(T,b,V,L,x,z,W,q,Q)},Ft=(E,T,b,V,L,x,z,W,q)=>{let B=0;const ne=T.length;let Q=E.length-1,ee=ne-1;for(;B<=Q&&B<=ee;){const se=E[B],re=T[B]=q?Vn(T[B]):Yt(T[B]);if(Ps(se,re))k(se,re,b,null,L,x,z,W,q);else break;B++}for(;B<=Q&&B<=ee;){const se=E[Q],re=T[ee]=q?Vn(T[ee]):Yt(T[ee]);if(Ps(se,re))k(se,re,b,null,L,x,z,W,q);else break;Q--,ee--}if(B>Q){if(B<=ee){const se=ee+1,re=se<ne?T[se].el:V;for(;B<=ee;)k(null,T[B]=q?Vn(T[B]):Yt(T[B]),b,re,L,x,z,W,q),B++}}else if(B>ee)for(;B<=Q;)Me(E[B],L,x,!0),B++;else{const se=B,re=B,de=new Map;for(B=re;B<=ee;B++){const Qe=T[B]=q?Vn(T[B]):Yt(T[B]);Qe.key!=null&&de.set(Qe.key,B)}let _e,tt=0;const Ge=ee-re+1;let Vt=!1,nt=0;const Sn=new Array(Ge);for(B=0;B<Ge;B++)Sn[B]=0;for(B=se;B<=Q;B++){const Qe=E[B];if(tt>=Ge){Me(Qe,L,x,!0);continue}let Mt;if(Qe.key!=null)Mt=de.get(Qe.key);else for(_e=re;_e<=ee;_e++)if(Sn[_e-re]===0&&Ps(Qe,T[_e])){Mt=_e;break}Mt===void 0?Me(Qe,L,x,!0):(Sn[Mt-re]=B+1,Mt>=nt?nt=Mt:Vt=!0,k(Qe,T[Mt],b,null,L,x,z,W,q),tt++)}const ps=Vt?BE(Sn):Br;for(_e=ps.length-1,B=Ge-1;B>=0;B--){const Qe=re+B,Mt=T[Qe],Ci=Qe+1<ne?T[Qe+1].el:V;Sn[B]===0?k(null,Mt,b,Ci,L,x,z,W,q):Vt&&(_e<0||B!==ps[_e]?Nt(Mt,b,Ci,2):_e--)}}},Nt=(E,T,b,V,L=null)=>{const{el:x,type:z,transition:W,children:q,shapeFlag:B}=E;if(B&6){Nt(E.component.subTree,T,b,V);return}if(B&128){E.suspense.move(T,b,V);return}if(B&64){z.move(E,T,b,X);return}if(z===dn){r(x,T,b);for(let Q=0;Q<q.length;Q++)Nt(q[Q],T,b,V);r(E.anchor,T,b);return}if(z===ja){j(E,T,b);return}if(V!==2&&B&1&&W)if(V===0)W.beforeEnter(x),r(x,T,b),Rt(()=>W.enter(x),L);else{const{leave:Q,delayLeave:ee,afterLeave:se}=W,re=()=>r(x,T,b),de=()=>{Q(x,()=>{re(),se&&se()})};ee?ee(x,re,de):de()}else r(x,T,b)},Me=(E,T,b,V=!1,L=!1)=>{const{type:x,props:z,ref:W,children:q,dynamicChildren:B,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:se}=E;if(Q===-2&&(L=!1),W!=null&&Eo(W,null,b,E,!0),se!=null&&(T.renderCache[se]=void 0),ne&256){T.ctx.deactivate(E);return}const re=ne&1&&ee,de=!Bs(E);let _e;if(de&&(_e=z&&z.onVnodeBeforeUnmount)&&Qt(_e,T,E),ne&6)Gt(E.component,b,V);else{if(ne&128){E.suspense.unmount(b,V);return}re&&ir(E,null,T,"beforeUnmount"),ne&64?E.type.remove(E,T,b,X,V):B&&!B.hasOnce&&(x!==dn||Q>0&&Q&64)?Tt(B,T,b,!1,!0):(x===dn&&Q&384||!L&&ne&16)&&Tt(q,T,b),V&&xe(E)}(de&&(_e=z&&z.onVnodeUnmounted)||re)&&Rt(()=>{_e&&Qt(_e,T,E),re&&ir(E,null,T,"unmounted")},b)},xe=E=>{const{type:T,el:b,anchor:V,transition:L}=E;if(T===dn){bn(b,V);return}if(T===ja){$(E);return}const x=()=>{s(b),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:z,delayLeave:W}=L,q=()=>z(b,x);W?W(E.el,x,q):q()}else x()},bn=(E,T)=>{let b;for(;E!==T;)b=g(E),s(E),E=b;s(T)},Gt=(E,T,b)=>{const{bum:V,scope:L,job:x,subTree:z,um:W,m:q,a:B}=E;wh(q),wh(B),V&&to(V),L.stop(),x&&(x.flags|=8,Me(z,E,T,b)),W&&Rt(W,T),Rt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Tt=(E,T,b,V=!1,L=!1,x=0)=>{for(let z=x;z<E.length;z++)Me(E[z],T,b,V,L)},N=E=>{if(E.shapeFlag&6)return N(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=g(E.anchor||E.el),b=T&&T[iE];return b?g(b):T};let Y=!1;const G=(E,T,b)=>{E==null?T._vnode&&Me(T._vnode,null,null,!0):k(T._vnode||null,E,T,null,null,null,b),T._vnode=E,Y||(Y=!0,ph(),up(),Y=!1)},X={p:k,um:Me,m:Nt,r:xe,mt:dt,mc:y,pc:pe,pbc:A,n:N,o:t};return{render:G,hydrate:void 0,createApp:DE(G)}}function $a({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function UE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cp(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Vn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Cp(o,c)),c.type===zo&&(c.el=o.el)}}function BE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const u=t.length;for(r=0;r<u;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Dp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dp(e)}function wh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const $E=Symbol.for("v-scx"),jE=()=>jt($E);function z0(t,e){return fu(t,null,e)}function ro(t,e,n){return fu(t,e,n)}function fu(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=ft({},n),u=e&&r||!e&&i!=="post";let h;if(ti){if(i==="sync"){const _=jE();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!u){const _=()=>{};return _.stop=Zt,_.resume=Zt,_.pause=Zt,_}}const f=lt;c.call=(_,C,k)=>sn(_,f,C,k);let p=!1;i==="post"?c.scheduler=_=>{Rt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,C)=>{C?_():uu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=eE(t,e,c);return ti&&(h?h.push(g):u&&g()),g}function HE(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?Op(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=pi(this),c=fu(s,i.bind(r),n);return o(),c}function Op(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const qE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Lt(e)}Modifiers`]||t[`${Jn(e)}Modifiers`];function WE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&qE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>We(f)?f.trim():f)),o.number&&(s=n.map(uc)));let c,u=r[c=Ma(e)]||r[c=Ma(Lt(e))];!u&&i&&(u=r[c=Ma(Jn(e))]),u&&sn(u,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,sn(h,t,6,s)}}function kp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const u=h=>{const f=kp(h,e,!0);f&&(c=!0,ft(o,f))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(ce(i)?i.forEach(u=>o[u]=null):ft(o,i),Ve(t)&&r.set(t,o),o)}function Ko(t,e){return!t||!Lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Jn(e))||Re(t,e))}function Ih(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:u,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:C,inheritAttrs:k}=t,O=yo(t);let H,U;try{if(n.shapeFlag&4){const $=s||r,ae=$;H=Yt(h.call(ae,$,f,p,_,g,C)),U=c}else{const $=e;H=Yt($.length>1?$(p,{attrs:c,slots:o,emit:u}):$(p,null)),U=e.props?c:KE(c)}}catch($){js.length=0,qo($,t,1),H=Ct(mr)}let j=H;if(U&&k!==!1){const $=Object.keys(U),{shapeFlag:ae}=j;$.length&&ae&7&&(i&&$.some(Yc)&&(U=zE(U,i)),j=Jr(j,U,!1,!0))}return n.dirs&&(j=Jr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&lu(j,n.transition),H=j,yo(O),H}const KE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Lo(n))&&((e||(e={}))[n]=t[n]);return e},zE=(t,e)=>{const n={};for(const r in t)(!Yc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function GE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:u}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?vh(r,o,h):!!o;if(u&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!Ko(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?vh(r,o,h):!0:!!o;return!1}function vh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ko(n,i))return!0}return!1}function QE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Np=t=>t.__isSuspense;function JE(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):rE(t)}const dn=Symbol.for("v-fgt"),zo=Symbol.for("v-txt"),mr=Symbol.for("v-cmt"),ja=Symbol.for("v-stc"),js=[];let Pt=null;function Vp(t=!1){js.push(Pt=t?null:[])}function YE(){js.pop(),Pt=js[js.length-1]||null}let ei=1;function Ah(t,e=!1){ei+=t,t<0&&Pt&&e&&(Pt.hasOnce=!0)}function Mp(t){return t.dynamicChildren=ei>0?Pt||Br:null,YE(),ei>0&&Pt&&Pt.push(t),t}function G0(t,e,n,r,s,i){return Mp(Fp(t,e,n,r,s,i,!0))}function xp(t,e,n,r,s){return Mp(Ct(t,e,n,r,s,!0))}function wo(t){return t?t.__v_isVNode===!0:!1}function Ps(t,e){return t.type===e.type&&t.key===e.key}const Lp=({key:t})=>t??null,so=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||ht(t)||fe(t)?{i:St,r:t,k:e,f:!!n}:t:null);function Fp(t,e=null,n=null,r=0,s=null,i=t===dn?0:1,o=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lp(e),ref:e&&so(e),scopeId:hp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return c?(du(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=We(n)?8:16),ei>0&&!o&&Pt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Pt.push(u),u}const Ct=XE;function XE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wE)&&(t=mr),wo(t)){const c=Jr(t,e,!0);return n&&du(c,n),ei>0&&!i&&Pt&&(c.shapeFlag&6?Pt[Pt.indexOf(t)]=c:Pt.push(c)),c.patchFlag=-2,c}if(lT(t)&&(t=t.__vccOpts),e){e=ZE(e);let{class:c,style:u}=e;c&&!We(c)&&(e.class=tu(c)),Ve(u)&&(cu(u)&&!ce(u)&&(u=ft({},u)),e.style=eu(u))}const o=We(t)?1:Np(t)?128:oE(t)?64:Ve(t)?4:fe(t)?2:0;return Fp(t,e,n,r,s,o,i,!0)}function ZE(t){return t?cu(t)||Ip(t)?ft({},t):t:null}function Jr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:u}=t,h=e?tT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Lp(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(so(e)):[i,so(e)]:so(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jr(t.ssContent),ssFallback:t.ssFallback&&Jr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&lu(f,u.clone(f)),f}function eT(t=" ",e=0){return Ct(zo,null,t,e)}function Q0(t="",e=!1){return e?(Vp(),xp(mr,null,t)):Ct(mr,null,t)}function Yt(t){return t==null||typeof t=="boolean"?Ct(mr):ce(t)?Ct(dn,null,t.slice()):wo(t)?Vn(t):Ct(zo,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jr(t)}function du(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),du(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ip(e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[eT(e)]):n=8);t.children=e,t.shapeFlag|=n}function tT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=tu([e.class,r.class]));else if(s==="style")e.style=eu([e.style,r.style]);else if(Lo(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(t,e,n,r=null){sn(t,e,7,[n,r])}const nT=Ep();let rT=0;function sT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nT,i={uid:rT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new by(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ap(r,s),emitsOptions:kp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=WE.bind(null,i),t.ce&&t.ce(i),i}let lt=null,Io,Ec;{const t=$o(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Io=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),Ec=e("__VUE_SSR_SETTERS__",n=>ti=n)}const pi=t=>{const e=lt;return Io(t),t.scope.on(),()=>{t.scope.off(),Io(e)}},Rh=()=>{lt&&lt.scope.off(),Io(null)};function Up(t){return t.vnode.shapeFlag&4}let ti=!1;function iT(t,e=!1,n=!1){e&&Ec(e);const{props:r,children:s}=t.vnode,i=Up(t);OE(t,r,i,e),ME(t,s,n);const o=i?oT(t,e):void 0;return e&&Ec(!1),o}function oT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vE);const{setup:r}=n;if(r){Yn();const s=t.setupContext=r.length>1?cT(t):null,i=pi(t),o=di(r,t,0,[t.props,s]),c=Md(o);if(Xn(),i(),(c||t.sp)&&!Bs(t)&&dp(t),c){if(o.then(Rh,Rh),e)return o.then(u=>{bh(t,u)}).catch(u=>{qo(u,t,0)});t.asyncDep=o}else bh(t,o)}else Bp(t)}function bh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=ip(e)),Bp(t)}function Bp(t,e,n){const r=t.type;t.render||(t.render=r.render||Zt);{const s=pi(t);Yn();try{AE(t)}finally{Xn(),s()}}}const aT={get(t,e){return at(t,"get",""),t[e]}};function cT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,aT),slots:t.slots,emit:t.emit,expose:e}}function Go(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ip(Ky(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $s)return $s[n](t)},has(e,n){return n in e||n in $s}})):t.proxy}function uT(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function lT(t){return fe(t)&&"__vccOpts"in t}const Bt=(t,e)=>Xy(t,e,ti);function $p(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!ce(e)?wo(e)?Ct(t,null,[e]):Ct(t,e):Ct(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wo(n)&&(n=[n]),Ct(t,e,n))}const hT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tc;const Sh=typeof window<"u"&&window.trustedTypes;if(Sh)try{Tc=Sh.createPolicy("vue",{createHTML:t=>t})}catch{}const jp=Tc?t=>Tc.createHTML(t):t=>t,fT="http://www.w3.org/2000/svg",dT="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,Ph=fn&&fn.createElement("template"),pT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?fn.createElementNS(fT,t):e==="mathml"?fn.createElementNS(dT,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ph.innerHTML=jp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Ph.content;if(r==="svg"||r==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gT=Symbol("_vtc");function mT(t,e,n){const r=t[gT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ch=Symbol("_vod"),_T=Symbol("_vsh"),yT=Symbol(""),ET=/(^|;)\s*display\s*:/;function TT(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&io(r,c,"")}else for(const o in e)n[o]==null&&io(r,o,"");for(const o in n)o==="display"&&(i=!0),io(r,o,n[o])}else if(s){if(e!==n){const o=r[yT];o&&(n+=";"+o),r.cssText=n,i=ET.test(n)}}else e&&t.removeAttribute("style");Ch in t&&(t[Ch]=i?r.display:"",t[_T]&&(r.display="none"))}const Dh=/\s*!important$/;function io(t,e,n){if(ce(n))n.forEach(r=>io(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wT(t,e);Dh.test(n)?t.setProperty(Jn(r),n.replace(Dh,""),"important"):t[r]=n}}const Oh=["Webkit","Moz","ms"],Ha={};function wT(t,e){const n=Ha[e];if(n)return n;let r=Lt(e);if(r!=="filter"&&r in t)return Ha[e]=r;r=Bo(r);for(let s=0;s<Oh.length;s++){const i=Oh[s]+r;if(i in t)return Ha[e]=i}return e}const kh="http://www.w3.org/1999/xlink";function Nh(t,e,n,r,s,i=Ay(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(kh,e.slice(6,e.length)):t.setAttributeNS(kh,e,n):n==null||i&&!Ud(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Qn(n)?String(n):n)}function Vh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?jp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ud(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Mr(t,e,n,r){t.addEventListener(e,n,r)}function IT(t,e,n,r){t.removeEventListener(e,n,r)}const Mh=Symbol("_vei");function vT(t,e,n,r,s=null){const i=t[Mh]||(t[Mh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,u]=AT(e);if(r){const h=i[e]=ST(r,s);Mr(t,c,h,u)}else o&&(IT(t,c,o,u),i[e]=void 0)}}const xh=/(?:Once|Passive|Capture)$/;function AT(t){let e;if(xh.test(t)){e={};let r;for(;r=t.match(xh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jn(t.slice(2)),e]}let qa=0;const RT=Promise.resolve(),bT=()=>qa||(RT.then(()=>qa=0),qa=Date.now());function ST(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(PT(r,n.value),e,5,[r])};return n.value=t,n.attached=bT(),n}function PT(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Lh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,CT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?mT(t,r,o):e==="style"?TT(t,n,r):Lo(e)?Yc(e)||vT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DT(t,e,r,o))?(Vh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?Vh(t,Lt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nh(t,e,r,o))};function DT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Lh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lh(e)&&We(n)?!1:e in t}const Fh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>to(e,n):e};function OT(t){t.target.composing=!0}function Uh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wa=Symbol("_assign"),J0={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Wa]=Fh(s);const i=r||s.props&&s.props.type==="number";Mr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=uc(c)),t[Wa](c)}),n&&Mr(t,"change",()=>{t.value=t.value.trim()}),e||(Mr(t,"compositionstart",OT),Mr(t,"compositionend",Uh),Mr(t,"change",Uh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Wa]=Fh(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?uc(t.value):t.value,u=e??"";c!==u&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===u)||(t.value=u))}},kT=["ctrl","shift","alt","meta"],NT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kT.some(n=>t[`${n}Key`]&&!e.includes(n))},Y0=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=NT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},VT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},X0=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Jn(s.key);if(e.some(o=>o===i||VT[o]===i))return t(s)})},MT=ft({patchProp:CT},pT);let Bh;function xT(){return Bh||(Bh=LE(MT))}const LT=(...t)=>{const e=xT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=UT(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,FT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function FT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function UT(t){return We(t)?document.querySelector(t):t}const BT=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},$T={};function jT(t,e){const n=TE("router-view");return Vp(),xp(n)}const HT=BT($T,[["render",jT]]),qT="modulepreload",WT=function(t){return"/"+t},$h={},Nr=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=WT(u),u in $h)return;$h[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":qT,h||(p.as="script"),p.crossOrigin="",p.href=u,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const xr=typeof document<"u";function Hp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function KT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Hp(t.default)}const ve=Object.assign;function Ka(t,e){const n={};for(const r in e){const s=e[r];n[r]=qt(s)?s.map(t):t(s)}return n}const Hs=()=>{},qt=Array.isArray,qp=/#/g,zT=/&/g,GT=/\//g,QT=/=/g,JT=/\?/g,Wp=/\+/g,YT=/%5B/g,XT=/%5D/g,Kp=/%5E/g,ZT=/%60/g,zp=/%7B/g,ew=/%7C/g,Gp=/%7D/g,tw=/%20/g;function pu(t){return encodeURI(""+t).replace(ew,"|").replace(YT,"[").replace(XT,"]")}function nw(t){return pu(t).replace(zp,"{").replace(Gp,"}").replace(Kp,"^")}function wc(t){return pu(t).replace(Wp,"%2B").replace(tw,"+").replace(qp,"%23").replace(zT,"%26").replace(ZT,"`").replace(zp,"{").replace(Gp,"}").replace(Kp,"^")}function rw(t){return wc(t).replace(QT,"%3D")}function sw(t){return pu(t).replace(qp,"%23").replace(JT,"%3F")}function iw(t){return t==null?"":sw(t).replace(GT,"%2F")}function ni(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ow=/\/$/,aw=t=>t.replace(ow,"");function za(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(r=e.slice(0,u),i=e.slice(u+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=hw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ni(o)}}function cw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Yr(e.matched[r],n.matched[s])&&Qp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lw(t[n],e[n]))return!1;return!0}function lw(t,e){return qt(t)?Hh(t,e):qt(e)?Hh(e,t):t===e}function Hh(t,e){return qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ri;(function(t){t.pop="pop",t.push="push"})(ri||(ri={}));var qs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qs||(qs={}));function fw(t){if(!t)if(xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aw(t)}const dw=/^[^#]+#/;function pw(t,e){return t.replace(dw,"#")+e}function gw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qo=()=>({left:window.scrollX,top:window.scrollY});function mw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qh(t,e){return(history.state?history.state.position-e:-1)+t}const Ic=new Map;function _w(t,e){Ic.set(t,e)}function yw(t){const e=Ic.get(t);return Ic.delete(t),e}let Ew=()=>location.protocol+"//"+location.host;function Jp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,u=s.slice(c);return u[0]!=="/"&&(u="/"+u),jh(u,"")}return jh(n,t)+r+s}function Tw(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=Jp(t,location),C=n.value,k=e.value;let O=0;if(g){if(n.value=_,e.value=g,o&&o===C){o=null;return}O=k?g.position-k.position:0}else r(_);s.forEach(H=>{H(n.value,C,{delta:O,type:ri.pop,direction:O?O>0?qs.forward:qs.back:qs.unknown})})};function u(){o=n.value}function h(g){s.push(g);const _=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(ve({},g.state,{scroll:Qo()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:u,listen:h,destroy:p}}function Wh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qo():null}}function ww(t){const{history:e,location:n}=window,r={value:Jp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(u,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+u:Ew()+t+u;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(u,h){const f=ve({},e.state,Wh(s.value.back,u,s.value.forward,!0),h,{position:s.value.position});i(u,f,!0),r.value=u}function c(u,h){const f=ve({},s.value,e.state,{forward:u,scroll:Qo()});i(f.current,f,!0);const p=ve({},Wh(r.value,u,null),{position:f.position+1},h);i(u,p,!1),r.value=u}return{location:r,state:s,push:c,replace:o}}function Iw(t){t=fw(t);const e=ww(t),n=Tw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ve({location:"",base:t,go:r,createHref:pw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vw(t){return typeof t=="string"||t&&typeof t=="object"}function Yp(t){return typeof t=="string"||typeof t=="symbol"}const Xp=Symbol("");var Kh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kh||(Kh={}));function Xr(t,e){return ve(new Error,{type:t,[Xp]:!0},e)}function hn(t,e){return t instanceof Error&&Xp in t&&(e==null||!!(t.type&e))}const zh="[^/]+?",Aw={sensitive:!1,strict:!1,start:!0,end:!0},Rw=/[.+*?^${}()[\]/\\]/g;function bw(t,e){const n=ve({},Aw,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Rw,"\\$&"),_+=40;else if(g.type===1){const{value:C,repeatable:k,optional:O,regexp:H}=g;i.push({name:C,repeatable:k,optional:O});const U=H||zh;if(U!==zh){_+=10;try{new RegExp(`(${U})`)}catch($){throw new Error(`Invalid custom RegExp for param "${C}" (${U}): `+$.message)}}let j=k?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(j=O&&h.length<2?`(?:/${j})`:"/"+j),O&&(j+="?"),s+=j,_+=20,O&&(_+=-8),k&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",C=i[g-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function u(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:k,optional:O}=_,H=C in h?h[C]:"";if(qt(H)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const U=qt(H)?H.join("/"):H;if(!U)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:u}}function Sw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Zp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Sw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Gh(r))return 1;if(Gh(s))return-1}return s.length-r.length}function Gh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pw={type:0,value:""},Cw=/[a-zA-Z0-9_]/;function Dw(t){if(!t)return[[]];if(t==="/")return[[Pw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,u,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(h&&p(),o()):u===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:u==="("?n=2:Cw.test(u)?g():(p(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+u:n=3:f+=u;break;case 3:p(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function Ow(t,e,n){const r=bw(Dw(t.path),n),s=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kw(t,e){const n=[],r=new Map;e=Xh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const C=!_,k=Jh(p);k.aliasOf=_&&_.record;const O=Xh(e,p),H=[k];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of $)H.push(Jh(ve({},k,{components:_?_.record.components:k.components,path:ae,aliasOf:_?_.record:k})))}let U,j;for(const $ of H){const{path:ae}=$;if(g&&ae[0]!=="/"){const he=g.record.path,v=he[he.length-1]==="/"?"":"/";$.path=g.record.path+(ae&&v+ae)}if(U=Ow($,g,O),_?_.alias.push(U):(j=j||U,j!==U&&j.alias.push(U),C&&p.name&&!Yh(U)&&o(p.name)),eg(U)&&u(U),k.children){const he=k.children;for(let v=0;v<he.length;v++)i(he[v],U,_&&_.children[v])}_=_||U}return j?()=>{o(j)}:Hs}function o(p){if(Yp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function u(p){const g=Mw(p,n);n.splice(g,0,p),p.record.name&&!Yh(p)&&r.set(p.record.name,p)}function h(p,g){let _,C={},k,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Xr(1,{location:p});O=_.record.name,C=ve(Qh(g.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Qh(p.params,_.keys.map(j=>j.name))),k=_.stringify(C)}else if(p.path!=null)k=p.path,_=n.find(j=>j.re.test(k)),_&&(C=_.parse(k),O=_.record.name);else{if(_=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!_)throw Xr(1,{location:p,currentLocation:g});O=_.record.name,C=ve({},g.params,p.params),k=_.stringify(C)}const H=[];let U=_;for(;U;)H.unshift(U.record),U=U.parent;return{name:O,path:k,params:C,matched:H,meta:Vw(H)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Qh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Jh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Nw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Nw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Yh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vw(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Xh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Mw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Zp(t,e[i])<0?r=i:n=i+1}const s=xw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function xw(t){let e=t;for(;e=e.parent;)if(eg(e)&&Zp(t,e)===0)return e}function eg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Lw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Wp," "),o=i.indexOf("="),c=ni(o<0?i:i.slice(0,o)),u=o<0?null:ni(i.slice(o+1));if(c in e){let h=e[c];qt(h)||(h=e[c]=[h]),h.push(u)}else e[c]=u}return e}function Zh(t){let e="";for(let n in t){const r=t[n];if(n=rw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qt(r)?r.map(i=>i&&wc(i)):[r&&wc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Fw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Uw=Symbol(""),ef=Symbol(""),Jo=Symbol(""),gu=Symbol(""),vc=Symbol("");function Cs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Mn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,u)=>{const h=g=>{g===!1?u(Xr(4,{from:n,to:e})):g instanceof Error?u(g):vw(g)?u(Xr(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>u(g))})}function Ga(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let u=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Hp(u)){const f=(u.__vccOpts||u)[e];f&&i.push(Mn(f,n,r,o,c,s))}else{let h=u();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=KT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Mn(_,n,r,o,c,s)()}))}}return i}function tf(t){const e=jt(Jo),n=jt(gu),r=Bt(()=>{const u=Hr(t.to);return e.resolve(u)}),s=Bt(()=>{const{matched:u}=r.value,{length:h}=u,f=u[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(Yr.bind(null,f));if(g>-1)return g;const _=nf(u[h-2]);return h>1&&nf(f)===_&&p[p.length-1].path!==_?p.findIndex(Yr.bind(null,u[h-2])):g}),i=Bt(()=>s.value>-1&&qw(n.params,r.value.params)),o=Bt(()=>s.value>-1&&s.value===n.matched.length-1&&Qp(n.params,r.value.params));function c(u={}){if(Hw(u)){const h=e[Hr(t.replace)?"replace":"push"](Hr(t.to)).catch(Hs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Bw(t){return t.length===1?t[0]:t}const $w=fp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tf,setup(t,{slots:e}){const n=Ho(tf(t)),{options:r}=jt(Jo),s=Bt(()=>({[rf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[rf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Bw(e.default(n));return t.custom?i:$p("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),jw=$w;function Hw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function nf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const rf=(t,e,n)=>t??e??n,Ww=fp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(vc),s=Bt(()=>t.route||r.value),i=jt(ef,0),o=Bt(()=>{let h=Hr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Bt(()=>s.value.matched[o.value]);no(ef,Bt(()=>o.value+1)),no(Uw,c),no(vc,s);const u=zy();return ro(()=>[u.value,c.value,t.name],([h,f,p],[g,_,C])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!Yr(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return sf(n.default,{Component:g,route:h});const _=p.props[f],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,O=$p(g,ve({},C,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[f]=null)},ref:u}));return sf(n.default,{Component:O,route:h})||O}}});function sf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Kw=Ww;function zw(t){const e=kw(t.routes,t),n=t.parseQuery||Lw,r=t.stringifyQuery||Zh,s=t.history,i=Cs(),o=Cs(),c=Cs(),u=Gy(On);let h=On;xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ka.bind(null,N=>""+N),p=Ka.bind(null,iw),g=Ka.bind(null,ni);function _(N,Y){let G,X;return Yp(N)?(G=e.getRecordMatcher(N),X=Y):X=N,e.addRoute(X,G)}function C(N){const Y=e.getRecordMatcher(N);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(N=>N.record)}function O(N){return!!e.getRecordMatcher(N)}function H(N,Y){if(Y=ve({},Y||u.value),typeof N=="string"){const b=za(n,N,Y.path),V=e.resolve({path:b.path},Y),L=s.createHref(b.fullPath);return ve(b,V,{params:g(V.params),hash:ni(b.hash),redirectedFrom:void 0,href:L})}let G;if(N.path!=null)G=ve({},N,{path:za(n,N.path,Y.path).path});else{const b=ve({},N.params);for(const V in b)b[V]==null&&delete b[V];G=ve({},N,{params:p(b)}),Y.params=p(Y.params)}const X=e.resolve(G,Y),Te=N.hash||"";X.params=f(g(X.params));const E=cw(r,ve({},N,{hash:nw(Te),path:X.path})),T=s.createHref(E);return ve({fullPath:E,hash:Te,query:r===Zh?Fw(N.query):N.query||{}},X,{redirectedFrom:void 0,href:T})}function U(N){return typeof N=="string"?za(n,N,u.value.path):ve({},N)}function j(N,Y){if(h!==N)return Xr(8,{from:Y,to:N})}function $(N){return v(N)}function ae(N){return $(ve(U(N),{replace:!0}))}function he(N){const Y=N.matched[N.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let X=typeof G=="function"?G(N):G;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=U(X):{path:X},X.params={}),ve({query:N.query,hash:N.hash,params:X.path!=null?{}:N.params},X)}}function v(N,Y){const G=h=H(N),X=u.value,Te=N.state,E=N.force,T=N.replace===!0,b=he(G);if(b)return v(ve(U(b),{state:typeof b=="object"?ve({},Te,b.state):Te,force:E,replace:T}),Y||G);const V=G;V.redirectedFrom=Y;let L;return!E&&uw(r,X,G)&&(L=Xr(16,{to:V,from:X}),Nt(X,X,!0,!1)),(L?Promise.resolve(L):A(V,X)).catch(x=>hn(x)?hn(x,2)?x:Ft(x):pe(x,V,X)).then(x=>{if(x){if(hn(x,2))return v(ve({replace:T},U(x.to),{state:typeof x.to=="object"?ve({},Te,x.to.state):Te,force:E}),Y||V)}else x=S(V,X,!0,T,Te);return R(V,X,x),x})}function y(N,Y){const G=j(N,Y);return G?Promise.reject(G):Promise.resolve()}function I(N){const Y=bn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(N):N()}function A(N,Y){let G;const[X,Te,E]=Gw(N,Y);G=Ga(X.reverse(),"beforeRouteLeave",N,Y);for(const b of X)b.leaveGuards.forEach(V=>{G.push(Mn(V,N,Y))});const T=y.bind(null,N,Y);return G.push(T),Tt(G).then(()=>{G=[];for(const b of i.list())G.push(Mn(b,N,Y));return G.push(T),Tt(G)}).then(()=>{G=Ga(Te,"beforeRouteUpdate",N,Y);for(const b of Te)b.updateGuards.forEach(V=>{G.push(Mn(V,N,Y))});return G.push(T),Tt(G)}).then(()=>{G=[];for(const b of E)if(b.beforeEnter)if(qt(b.beforeEnter))for(const V of b.beforeEnter)G.push(Mn(V,N,Y));else G.push(Mn(b.beforeEnter,N,Y));return G.push(T),Tt(G)}).then(()=>(N.matched.forEach(b=>b.enterCallbacks={}),G=Ga(E,"beforeRouteEnter",N,Y,I),G.push(T),Tt(G))).then(()=>{G=[];for(const b of o.list())G.push(Mn(b,N,Y));return G.push(T),Tt(G)}).catch(b=>hn(b,8)?b:Promise.reject(b))}function R(N,Y,G){c.list().forEach(X=>I(()=>X(N,Y,G)))}function S(N,Y,G,X,Te){const E=j(N,Y);if(E)return E;const T=Y===On,b=xr?history.state:{};G&&(X||T?s.replace(N.fullPath,ve({scroll:T&&b&&b.scroll},Te)):s.push(N.fullPath,Te)),u.value=N,Nt(N,Y,G,T),Ft()}let w;function dt(){w||(w=s.listen((N,Y,G)=>{if(!Gt.listening)return;const X=H(N),Te=he(X);if(Te){v(ve(Te,{replace:!0,force:!0}),X).catch(Hs);return}h=X;const E=u.value;xr&&_w(qh(E.fullPath,G.delta),Qo()),A(X,E).catch(T=>hn(T,12)?T:hn(T,2)?(v(ve(U(T.to),{force:!0}),X).then(b=>{hn(b,20)&&!G.delta&&G.type===ri.pop&&s.go(-1,!1)}).catch(Hs),Promise.reject()):(G.delta&&s.go(-G.delta,!1),pe(T,X,E))).then(T=>{T=T||S(X,E,!1),T&&(G.delta&&!hn(T,8)?s.go(-G.delta,!1):G.type===ri.pop&&hn(T,20)&&s.go(-1,!1)),R(X,E,T)}).catch(Hs)}))}let kt=Cs(),je=Cs(),me;function pe(N,Y,G){Ft(N);const X=je.list();return X.length?X.forEach(Te=>Te(N,Y,G)):console.error(N),Promise.reject(N)}function vt(){return me&&u.value!==On?Promise.resolve():new Promise((N,Y)=>{kt.add([N,Y])})}function Ft(N){return me||(me=!N,dt(),kt.list().forEach(([Y,G])=>N?G(N):Y()),kt.reset()),N}function Nt(N,Y,G,X){const{scrollBehavior:Te}=t;if(!xr||!Te)return Promise.resolve();const E=!G&&yw(qh(N.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return ap().then(()=>Te(N,Y,E)).then(T=>T&&mw(T)).catch(T=>pe(T,N,Y))}const Me=N=>s.go(N);let xe;const bn=new Set,Gt={currentRoute:u,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:H,options:t,push:$,replace:ae,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:je.add,isReady:vt,install(N){const Y=this;N.component("RouterLink",jw),N.component("RouterView",Kw),N.config.globalProperties.$router=Y,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Hr(u)}),xr&&!xe&&u.value===On&&(xe=!0,$(s.location).catch(Te=>{}));const G={};for(const Te in On)Object.defineProperty(G,Te,{get:()=>u.value[Te],enumerable:!0});N.provide(Jo,Y),N.provide(gu,np(G)),N.provide(vc,u);const X=N.unmount;bn.add(N),N.unmount=function(){bn.delete(N),bn.size<1&&(h=On,w&&w(),w=null,u.value=On,xe=!1,me=!1),X()}}};function Tt(N){return N.reduce((Y,G)=>Y.then(()=>I(G)),Promise.resolve())}return Gt}function Gw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Yr(h,c))?r.push(c):n.push(c));const u=t.matched[o];u&&(e.matched.find(h=>Yr(h,u))||s.push(u))}return[n,r,s]}function Z0(){return jt(Jo)}function eD(t){return jt(gu)}var of={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Qw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;u||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Jw;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let Jw=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const Yw=function(t){const e=tg(t);return ng.encodeByteArray(e,!0)},rg=function(t){return Yw(t).replace(/\./g,"")},Xw=function(t){try{return ng.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=()=>Zw().__FIREBASE_DEFAULTS__,tI=()=>{if(typeof process>"u"||typeof of>"u")return;const t=of.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xw(t[1]);return e&&JSON.parse(e)},rI=()=>{try{return eI()||tI()||nI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sg=()=>{var t;return(t=rI())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function iI(){try{return typeof indexedDB=="object"}catch{return!1}}function oI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="FirebaseError";let mu=class ig extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aI,Object.setPrototypeOf(this,ig.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,og.prototype.create)}},og=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new mu(s,c,r)}};function cI(t,e){return t.replace(uI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uI=/\{\$([^}]+)}/g;function Ac(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(af(i)&&af(o)){if(!Ac(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function af(t){return t!==null&&typeof t=="object"}let vo=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fI(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hI(t){return t===cr?void 0:t}function fI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ke||(ke={}));const pI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},gI=ke.INFO,mI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},_I=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let yI=class{constructor(e){this.name=e,this._logLevel=gI,this._logHandler=_I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}};const EI=(t,e)=>e.some(n=>t instanceof n);let cf,uf;function TI(){return cf||(cf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wI(){return uf||(uf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,Rc=new WeakMap,cg=new WeakMap,Qa=new WeakMap,_u=new WeakMap;function II(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,t)}).catch(()=>{}),_u.set(e,t),e}function vI(t){if(Rc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AI(t){bc=t(bc)}function RI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ja(this),e,...n);return cg.set(r,e.sort?e.sort():[e]),Hn(r)}:wI().includes(t)?function(...e){return t.apply(Ja(this),e),Hn(ag.get(this))}:function(...e){return Hn(t.apply(Ja(this),e))}}function bI(t){return typeof t=="function"?RI(t):(t instanceof IDBTransaction&&vI(t),EI(t,TI())?new Proxy(t,bc):t)}function Hn(t){if(t instanceof IDBRequest)return II(t);if(Qa.has(t))return Qa.get(t);const e=bI(t);return e!==t&&(Qa.set(t,e),_u.set(e,t)),e}const Ja=t=>_u.get(t);function SI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Hn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hn(o.result),u.oldVersion,u.newVersion,Hn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const PI=["get","getKey","getAll","getAllKeys","count"],CI=["put","add","delete","clear"],Ya=new Map;function lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ya.get(e))return Ya.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=CI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||PI.includes(n)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&u.done]))[0]};return Ya.set(e,i),i}AI(t=>({...t,get:(e,n,r)=>lf(e,n)||t.get(e,n,r),has:(e,n)=>!!lf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sc="@firebase/app",hf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new yI("@firebase/app"),kI="@firebase/app-compat",NI="@firebase/analytics-compat",VI="@firebase/analytics",MI="@firebase/app-check-compat",xI="@firebase/app-check",LI="@firebase/auth",FI="@firebase/auth-compat",UI="@firebase/database",BI="@firebase/data-connect",$I="@firebase/database-compat",jI="@firebase/functions",HI="@firebase/functions-compat",qI="@firebase/installations",WI="@firebase/installations-compat",KI="@firebase/messaging",zI="@firebase/messaging-compat",GI="@firebase/performance",QI="@firebase/performance-compat",JI="@firebase/remote-config",YI="@firebase/remote-config-compat",XI="@firebase/storage",ZI="@firebase/storage-compat",ev="@firebase/firestore",tv="@firebase/vertexai-preview",nv="@firebase/firestore-compat",rv="firebase",sv="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="[DEFAULT]",iv={[Sc]:"fire-core",[kI]:"fire-core-compat",[VI]:"fire-analytics",[NI]:"fire-analytics-compat",[xI]:"fire-app-check",[MI]:"fire-app-check-compat",[LI]:"fire-auth",[FI]:"fire-auth-compat",[UI]:"fire-rtdb",[BI]:"fire-data-connect",[$I]:"fire-rtdb-compat",[jI]:"fire-fn",[HI]:"fire-fn-compat",[qI]:"fire-iid",[WI]:"fire-iid-compat",[KI]:"fire-fcm",[zI]:"fire-fcm-compat",[GI]:"fire-perf",[QI]:"fire-perf-compat",[JI]:"fire-rc",[YI]:"fire-rc-compat",[XI]:"fire-gcs",[ZI]:"fire-gcs-compat",[ev]:"fire-fst",[nv]:"fire-fst-compat",[tv]:"fire-vertex","fire-js":"fire-js",[rv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new Map,ov=new Map,Cc=new Map;function ff(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _r(t){const e=t.name;if(Cc.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of Ao.values())ff(n,t);for(const n of ov.values())ff(n,t);return!0}function Yo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new og("app","Firebase",av);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=sv;function ug(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(n||(n=sg()),!n)throw qn.create("no-options");const i=Ao.get(s);if(i){if(Ac(n,i.options)&&Ac(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const o=new dI(s);for(const u of Cc.values())o.addComponent(u);const c=new cv(n,r,o);return Ao.set(s,c),c}function yu(t=Pc){const e=Ao.get(t);if(!e&&t===Pc&&sg())return ug();if(!e)throw qn.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=iv[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(c.join(" "));return}_r(new vo(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="firebase-heartbeat-database",lv=1,si="firebase-heartbeat-store";let Xa=null;function lg(){return Xa||(Xa=SI(uv,lv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(si)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Xa}async function hv(t){try{const n=(await lg()).transaction(si),r=await n.objectStore(si).get(hg(t));return await n.done,r}catch(e){if(e instanceof mu)wn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function df(t,e){try{const r=(await lg()).transaction(si,"readwrite");await r.objectStore(si).put(e,hg(t)),await r.done}catch(n){if(n instanceof mu)wn.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function hg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=1024,dv=30*24*60*60*1e3;class pv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=dv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pf(),{heartbeatsToSend:r,unsentEntries:s}=gv(this._heartbeatsCache.heartbeats),i=rg(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return wn.warn(n),""}}}function pf(){return new Date().toISOString().substring(0,10)}function gv(t,e=fv){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iI()?oI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return df(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return df(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gf(t){return rg(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t){_r(new vo("platform-logger",e=>new DI(e),"PRIVATE")),_r(new vo("heartbeat",e=>new pv(e),"PRIVATE")),en(Sc,hf,t),en(Sc,hf,"esm2017"),en("fire-js","")}_v("");var mf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ev=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;u||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ev(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new wv;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let wv=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const fg=function(t){try{return Tv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=()=>Iv().__FIREBASE_DEFAULTS__,Av=()=>{if(typeof process>"u"||typeof mf>"u")return;const t=mf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fg(t[1]);return e&&JSON.parse(e)},dg=()=>{try{return vv()||Av()||Rv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bv=t=>{var e,n;return(n=(e=dg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pg=t=>{var e;return(e=dg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function Pv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ov(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="FirebaseError";let Xo=class gg extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kv,Object.setPrototypeOf(this,gg.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}},Zo=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Nv(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Xo(s,c,r)}};function Nv(t,e){return t.replace(Vv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Vv=/\{\$([^}]+)}/g;function Mv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mg(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_f(i)&&_f(o)){if(!mg(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xv(t,e){const n=new Lv(t,e);return n.subscribe.bind(n)}class Lv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Za),s.error===void 0&&(s.error=Za),s.complete===void 0&&(s.complete=Za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Za(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const Uv={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},Bv=Pe.INFO,$v={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},jv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$v[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Hv=class{constructor(e){this.name=e,this._logLevel=Bv,this._logHandler=jv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}};function Eu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}let yf=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};function _g(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qv=_g,yg=new Zo("auth","Firebase",_g());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Hv("@firebase/auth");function Wv(t,...e){Ro.logLevel<=Pe.WARN&&Ro.warn(`Auth (${vr}): ${t}`,...e)}function oo(t,...e){Ro.logLevel<=Pe.ERROR&&Ro.error(`Auth (${vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,...e){throw wu(t,...e)}function Ht(t,...e){return wu(t,...e)}function Tu(t,e,n){const r=Object.assign(Object.assign({},qv()),{[e]:n});return new Zo("auth","Firebase",r).create(e,{appName:t.name})}function fr(t){return Tu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kv(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&on(t,"argument-error"),Tu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yg.create(t,...e)}function ie(t,e,...n){if(!t)throw wu(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oo(e),new Error(e)}function In(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zv(){return Ef()==="http:"||Ef()==="https:"}function Ef(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zv()||Cv()||"connection"in navigator)?navigator.onLine:!0}function Qv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=Sv()||Dv()}get(){return Gv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=new mi(3e4,6e4);function vu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cs(t,e,n,r,s={}){return Tg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=gi(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return Pv()||(h.referrerPolicy="no-referrer"),Eg.fetch()(wg(t,t.config.apiHost,n,c),h)})}async function Tg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jv),e);try{const s=new Zv(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Gi(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tu(t,f,h);on(t,f)}}catch(s){if(s instanceof Xo)throw s;on(t,"network-request-failed",{message:String(s)})}}async function Xv(t,e,n,r,s={}){const i=await cs(t,e,n,r,s);return"mfaPendingCredential"in i&&on(t,"multi-factor-auth-required",{_serverResponse:i}),i}function wg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Iu(t.config,s):`${t.config.apiScheme}://${s}`}class Zv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),Yv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ht(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e){return cs(t,"POST","/v1/accounts:delete",e)}async function Ig(t,e){return cs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(t,e=!1){const n=Zn(t),r=await n.getIdToken(e),s=Au(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ws(ec(s.auth_time)),issuedAtTime:Ws(ec(s.iat)),expirationTime:Ws(ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ec(t){return Number(t)*1e3}function Au(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=fg(n);return s?JSON.parse(s):(oo("Failed to decode base64 JWT payload"),null)}catch(s){return oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Tf(t){const e=Au(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xo&&nA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ii(t,Ig(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vg(i.providerUserInfo):[],c=iA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Oc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function sA(t){const e=Zn(t);await bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function vg(t){return t.map(e=>{var{providerId:n}=e,r=Eu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e){const n=await Tg(t,{},async()=>{const r=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=wg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Eg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aA(t,e){return cs(t,"POST","/v2/accounts:revokeToken",vu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Tf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Kr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Eu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await ii(this,eA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,H=(h=n.createdAt)!==null&&h!==void 0?h:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:$,isAnonymous:ae,providerData:he,stsTokenManager:v}=n;ie(j&&v,e,"internal-error");const y=Kr.fromJSON(this.name,v);ie(typeof j=="string",e,"internal-error"),kn(p,e.name),kn(g,e.name),ie(typeof $=="boolean",e,"internal-error"),ie(typeof ae=="boolean",e,"internal-error"),kn(_,e.name),kn(C,e.name),kn(k,e.name),kn(O,e.name),kn(H,e.name),kn(U,e.name);const I=new yn({uid:j,auth:e,email:g,emailVerified:$,displayName:p,isAnonymous:ae,photoURL:C,phoneNumber:_,tenantId:k,stsTokenManager:y,createdAt:H,lastLoginAt:U});return he&&Array.isArray(he)&&(I.providerData=he.map(A=>Object.assign({},A))),O&&(I._redirectEventId=O),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kr;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await bo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?vg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kr;c.updateFromIdToken(r);const u=new yn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Oc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new Map;function En(t){In(t instanceof Function,"Expected a class definition");let e=wf.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ag.type="NONE";const If=Ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ao(this.userKey,s.apiKey,i),this.fullPersistenceKey=ao("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(En(If),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||En(If);const o=ao(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const p=yn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new zr(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dg(e))return"Blackberry";if(Og(e))return"Webos";if(bg(e))return"Safari";if((e.includes("chrome/")||Sg(e))&&!e.includes("edge/"))return"Chrome";if(Cg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rg(t=Et()){return/firefox\//i.test(t)}function bg(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sg(t=Et()){return/crios\//i.test(t)}function Pg(t=Et()){return/iemobile/i.test(t)}function Cg(t=Et()){return/android/i.test(t)}function Dg(t=Et()){return/blackberry/i.test(t)}function Og(t=Et()){return/webos/i.test(t)}function Ru(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cA(t=Et()){var e;return Ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uA(){return Ov()&&document.documentMode===10}function kg(t=Et()){return Ru(t)||Cg(t)||Og(t)||Dg(t)||/windows phone/i.test(t)||Pg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t,e=[]){let n;switch(t){case"Browser":n=vf(Et());break;case"Worker":n=`${vf(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e={}){return cs(t,"GET","/v2/passwordPolicy",vu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=6;class dA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.beforeStateQueue=new lA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ig(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(fr(this));const n=e?Zn(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hA(this),n=new dA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ng(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Wv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ea(t){return Zn(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=xv(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gA(t){bu=t}function mA(t){return bu.loadJS(t)}function _A(){return bu.gapiScript}function yA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t,e){const n=Yo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(mg(i,e??{}))return s;on(s,"already-initialized")}return n.initialize({options:e})}function TA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wA(t,e,n){const r=ea(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Vg(e),{host:o,port:c}=IA(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),vA()}function Vg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IA(t){const e=Vg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Rf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Rf(o)}}}function Rf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e){return Xv(t,"POST","/v1/accounts:signInWithIdp",vu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="http://localhost";class yr extends Mg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Eu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:AA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Su{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends _i{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends _i{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends _i{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=bf(r);return new Zr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bf(r);return new Zr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Xo{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,So.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new So(e,n,r,s)}}function xg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(t,i,e,r):i})}async function RA(t,e,n=!1){const r=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t,e,n=!1){const{auth:r}=t;if(mn(r.app))return Promise.reject(fr(r));const s="reauthenticate";try{const i=await ii(t,xg(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=Au(i.idToken);ie(o,r,"internal-error");const{sub:c}=o;return ie(t.uid===c,r,"user-mismatch"),Zr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&on(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e,n=!1){if(mn(t.app))return Promise.reject(fr(t));const r="signIn",s=await xg(t,r,e),i=await Zr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function PA(t,e,n,r){return Zn(t).onIdTokenChanged(e,n,r)}function CA(t,e,n){return Zn(t).beforeAuthStateChanged(e,n)}function DA(t,e,n,r){return Zn(t).onAuthStateChanged(e,n,r)}function uD(t){return Zn(t).signOut()}const Po="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Po,"1"),this.storage.removeItem(Po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=1e3,kA=10;class Fg extends Lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fg.type="LOCAL";const NA=Fg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug extends Lg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ug.type="SESSION";const Bg=Ug;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),u=await VA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const h=Pu("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function xA(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function LA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UA(){return $g()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="firebaseLocalStorageDb",BA=1,Co="firebaseLocalStorage",Hg="fbase_key";class yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(t,e){return t.transaction([Co],e?"readwrite":"readonly").objectStore(Co)}function $A(){const t=indexedDB.deleteDatabase(jg);return new yi(t).toPromise()}function kc(){const t=indexedDB.open(jg,BA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Co,{keyPath:Hg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Co)?e(r):(r.close(),await $A(),e(await kc()))})})}async function Sf(t,e,n){const r=na(t,!0).put({[Hg]:e,value:n});return new yi(r).toPromise()}async function jA(t,e){const n=na(t,!1).get(e),r=await new yi(n).toPromise();return r===void 0?null:r.value}function Pf(t,e){const n=na(t,!0).delete(e);return new yi(n).toPromise()}const HA=800,qA=3;class qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $g()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(UA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LA(),!this.activeServiceWorker)return;this.sender=new MA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kc();return await Sf(e,Po,"1"),await Pf(e,Po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=na(s,!1).getAll();return new yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qg.type="LOCAL";const WA=qg;new mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e){return e?En(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends Mg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KA(t){return SA(t.auth,new Cu(t),t.bypassAuthState)}function zA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),bA(n,new Cu(t),t.bypassAuthState)}async function GA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),RA(n,new Cu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KA;case"linkViaPopup":case"linkViaRedirect":return GA;case"reauthViaPopup":case"reauthViaRedirect":return zA;default:on(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new mi(2e3,1e4);async function lD(t,e,n){if(mn(t.app))return Promise.reject(Ht(t,"operation-not-supported-in-this-environment"));const r=ea(t);Kv(t,e,Su);const s=Wg(r,n);return new ur(r,"signInViaPopup",e,s).executeNotNull()}class ur extends Kg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QA.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="pendingRedirect",co=new Map;class YA extends Kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=co.get(this.auth._key());if(!e){try{const r=await XA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}co.set(this.auth._key(),e)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XA(t,e){const n=tR(e),r=eR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ZA(t,e){co.set(t._key(),e)}function eR(t){return En(t._redirectPersistence)}function tR(t){return ao(JA,t.config.apiKey,t.name)}async function nR(t,e,n=!1){if(mn(t.app))return Promise.reject(fr(t));const r=ea(t),s=Wg(r,e),o=await new YA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=10*60*1e3;class sR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cf(e))}saveEventToCache(e){this.cachedEventUids.add(Cf(e)),this.lastProcessedEventTime=Date.now()}}function Cf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(t,e={}){return cs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cR=/^https?/;async function uR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oR(t);for(const n of e)try{if(lR(n))return}catch{}on(t,"unauthorized-domain")}function lR(t){const e=Dc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cR.test(n))return!1;if(aR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=new mi(3e4,6e4);function Df(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fR(t){return new Promise((e,n)=>{var r,s,i;function o(){Df(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Df(),n(Ht(t,"network-request-failed"))},timeout:hR.get()})}if(!((s=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tn().gapi)===null||i===void 0)&&i.load)o();else{const c=yA("iframefcb");return tn()[c]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},mA(`${_A()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw uo=null,e})}let uo=null;function dR(t){return uo=uo||fR(t),uo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new mi(5e3,15e3),gR="__/auth/iframe",mR="emulator/auth/iframe",_R={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ER(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Iu(e,mR):`https://${t.config.authDomain}/${gR}`,r={apiKey:e.apiKey,appName:t.name,v:vr},s=yR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${gi(r).slice(1)}`}async function TR(t){const e=await dR(t),n=tn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:ER(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_R,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),c=tn().setTimeout(()=>{i(o)},pR.get());function u(){tn().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IR=500,vR=600,AR="_blank",RR="http://localhost";class Of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bR(t,e,n,r=IR,s=vR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},wR),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Et().toLowerCase();n&&(c=Sg(h)?AR:n),Rg(h)&&(e=e||RR,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(cA(h)&&c!=="_self")return SR(e||"",c),new Of(null);const p=window.open(e||"",c,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new Of(p)}function SR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="__/auth/handler",CR="emulator/auth/handler",DR=encodeURIComponent("fac");async function kf(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vr,eventId:s};if(e instanceof Su){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof _i){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await t._getAppCheckToken(),h=u?`#${DR}=${encodeURIComponent(u)}`:"";return`${OR(t)}?${gi(c).slice(1)}${h}`}function OR({config:t}){return t.emulator?Iu(t,CR):`https://${t.authDomain}/${PR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="webStorageSupport";class kR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bg,this._completeRedirectFn=nR,this._overrideRedirectResult=ZA}async _openPopup(e,n,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await kf(e,n,r,Dc(),s);return bR(e,o,Pu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await kf(e,n,r,Dc(),s);return xA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TR(e),r=new sR(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tc,{type:tc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[tc];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kg()||bg()||Ru()}}const NR=kR;var Nf="@firebase/auth",Vf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xR(t){_r(new yf("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ng(t)},h=new pA(r,s,i,u);return TA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_r(new yf("auth-internal",e=>{const n=ea(e.getProvider("auth").getImmediate());return(r=>new VR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Nf,Vf,MR(t)),en(Nf,Vf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=5*60,FR=pg("authIdTokenMaxAge")||LR;let Mf=null;const UR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FR)return;const s=n==null?void 0:n.token;Mf!==s&&(Mf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function BR(t=yu()){const e=Yo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EA(t,{popupRedirectResolver:NR,persistence:[WA,NA,Bg]}),r=pg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=UR(i.toString());CA(n,o,()=>o(n.currentUser)),PA(n,c=>o(c))}}const s=bv("auth");return s&&wA(n,`http://${s}`),n}function $R(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ht("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$R().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xR("Browser");const Gg=zw({history:Iw("/"),routes:[{path:"/",name:"login",component:()=>Nr(()=>import("./LoginView-DzUFwiV1.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!1}},{path:"/dashboard",name:"dashboard",component:()=>Nr(()=>import("./DashboardView-Cga0hT4K.js"),[]),meta:{requiresAuth:!0}},{path:"/template/create",name:"template-create",component:()=>Nr(()=>import("./CreateView-Cr7HINvF.js"),__vite__mapDeps([2,1])),meta:{requiresAuth:!0}},{path:"/template/edit/:id",name:"template-edit",component:()=>Nr(()=>import("./EditView-DkNAvrl5.js"),__vite__mapDeps([3,4])),meta:{requiresAuth:!0}},{path:"/project/create",name:"project-create",component:()=>Nr(()=>import("./CreateView-d-NtGfXD.js"),__vite__mapDeps([5,6])),meta:{requiresAuth:!0}},{path:"/project/:id",name:"project-detail",component:()=>Nr(()=>import("./DetailView-CPtKPbeF.js"),__vite__mapDeps([7,8])),meta:{requiresAuth:!0}}]});let xf=!1;const jR=()=>new Promise(t=>{if(xf)t(Nd.currentUser);else{const e=DA(Nd,n=>{xf=!0,e(),t(n)})}});Gg.beforeEach(async(t,e,n)=>{const r=t.meta.requiresAuth,s=await jR();r&&!s?n("/"):!r&&s&&t.path==="/"?n("/dashboard"):n()});var HR="firebase",qR="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(HR,qR,"app");var Lf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},WR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;u||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new KR;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let KR=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const zR=function(t){const e=Qg(t);return Jg.encodeByteArray(e,!0)},Ff=function(t){return zR(t).replace(/\./g,"")},GR=function(t){try{return Jg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=()=>QR().__FIREBASE_DEFAULTS__,YR=()=>{if(typeof process>"u"||typeof Lf>"u")return;const t=Lf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&GR(t[1]);return e&&JSON.parse(e)},Yg=()=>{try{return JR()||YR()||XR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ZR=t=>{var e,n;return(n=(e=Yg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eb=t=>{const e=ZR(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ff(JSON.stringify(n)),Ff(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rb(){var t;const e=(t=Yg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sb(){return!rb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="FirebaseError";let Xg=class Zg extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ib,Object.setPrototypeOf(this,Zg.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ob.prototype.create)}},ob=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ab(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Xg(s,c,r)}};function ab(t,e){return t.replace(cb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cb=/\{\$([^}]+)}/g;function em(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Uf(i)&&Uf(o)){if(!em(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Uf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return t&&t._delegate?t._delegate:t}let ub=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const lb={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},hb=Ee.INFO,fb={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},db=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pb{constructor(e){this.name=e,this._logLevel=hb,this._logHandler=db,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}var Bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,tm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function I(){}I.prototype=y.prototype,v.D=y.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(A,R,S){for(var w=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)w[dt-2]=arguments[dt];return y.prototype[R].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,I){I||(I=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(R=0;16>R;++R)A[R]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=v.g[0],I=v.g[1],R=v.g[2];var S=v.g[3],w=y+(S^I&(R^S))+A[0]+3614090360&4294967295;y=I+(w<<7&4294967295|w>>>25),w=S+(R^y&(I^R))+A[1]+3905402710&4294967295,S=y+(w<<12&4294967295|w>>>20),w=R+(I^S&(y^I))+A[2]+606105819&4294967295,R=S+(w<<17&4294967295|w>>>15),w=I+(y^R&(S^y))+A[3]+3250441966&4294967295,I=R+(w<<22&4294967295|w>>>10),w=y+(S^I&(R^S))+A[4]+4118548399&4294967295,y=I+(w<<7&4294967295|w>>>25),w=S+(R^y&(I^R))+A[5]+1200080426&4294967295,S=y+(w<<12&4294967295|w>>>20),w=R+(I^S&(y^I))+A[6]+2821735955&4294967295,R=S+(w<<17&4294967295|w>>>15),w=I+(y^R&(S^y))+A[7]+4249261313&4294967295,I=R+(w<<22&4294967295|w>>>10),w=y+(S^I&(R^S))+A[8]+1770035416&4294967295,y=I+(w<<7&4294967295|w>>>25),w=S+(R^y&(I^R))+A[9]+2336552879&4294967295,S=y+(w<<12&4294967295|w>>>20),w=R+(I^S&(y^I))+A[10]+4294925233&4294967295,R=S+(w<<17&4294967295|w>>>15),w=I+(y^R&(S^y))+A[11]+2304563134&4294967295,I=R+(w<<22&4294967295|w>>>10),w=y+(S^I&(R^S))+A[12]+1804603682&4294967295,y=I+(w<<7&4294967295|w>>>25),w=S+(R^y&(I^R))+A[13]+4254626195&4294967295,S=y+(w<<12&4294967295|w>>>20),w=R+(I^S&(y^I))+A[14]+2792965006&4294967295,R=S+(w<<17&4294967295|w>>>15),w=I+(y^R&(S^y))+A[15]+1236535329&4294967295,I=R+(w<<22&4294967295|w>>>10),w=y+(R^S&(I^R))+A[1]+4129170786&4294967295,y=I+(w<<5&4294967295|w>>>27),w=S+(I^R&(y^I))+A[6]+3225465664&4294967295,S=y+(w<<9&4294967295|w>>>23),w=R+(y^I&(S^y))+A[11]+643717713&4294967295,R=S+(w<<14&4294967295|w>>>18),w=I+(S^y&(R^S))+A[0]+3921069994&4294967295,I=R+(w<<20&4294967295|w>>>12),w=y+(R^S&(I^R))+A[5]+3593408605&4294967295,y=I+(w<<5&4294967295|w>>>27),w=S+(I^R&(y^I))+A[10]+38016083&4294967295,S=y+(w<<9&4294967295|w>>>23),w=R+(y^I&(S^y))+A[15]+3634488961&4294967295,R=S+(w<<14&4294967295|w>>>18),w=I+(S^y&(R^S))+A[4]+3889429448&4294967295,I=R+(w<<20&4294967295|w>>>12),w=y+(R^S&(I^R))+A[9]+568446438&4294967295,y=I+(w<<5&4294967295|w>>>27),w=S+(I^R&(y^I))+A[14]+3275163606&4294967295,S=y+(w<<9&4294967295|w>>>23),w=R+(y^I&(S^y))+A[3]+4107603335&4294967295,R=S+(w<<14&4294967295|w>>>18),w=I+(S^y&(R^S))+A[8]+1163531501&4294967295,I=R+(w<<20&4294967295|w>>>12),w=y+(R^S&(I^R))+A[13]+2850285829&4294967295,y=I+(w<<5&4294967295|w>>>27),w=S+(I^R&(y^I))+A[2]+4243563512&4294967295,S=y+(w<<9&4294967295|w>>>23),w=R+(y^I&(S^y))+A[7]+1735328473&4294967295,R=S+(w<<14&4294967295|w>>>18),w=I+(S^y&(R^S))+A[12]+2368359562&4294967295,I=R+(w<<20&4294967295|w>>>12),w=y+(I^R^S)+A[5]+4294588738&4294967295,y=I+(w<<4&4294967295|w>>>28),w=S+(y^I^R)+A[8]+2272392833&4294967295,S=y+(w<<11&4294967295|w>>>21),w=R+(S^y^I)+A[11]+1839030562&4294967295,R=S+(w<<16&4294967295|w>>>16),w=I+(R^S^y)+A[14]+4259657740&4294967295,I=R+(w<<23&4294967295|w>>>9),w=y+(I^R^S)+A[1]+2763975236&4294967295,y=I+(w<<4&4294967295|w>>>28),w=S+(y^I^R)+A[4]+1272893353&4294967295,S=y+(w<<11&4294967295|w>>>21),w=R+(S^y^I)+A[7]+4139469664&4294967295,R=S+(w<<16&4294967295|w>>>16),w=I+(R^S^y)+A[10]+3200236656&4294967295,I=R+(w<<23&4294967295|w>>>9),w=y+(I^R^S)+A[13]+681279174&4294967295,y=I+(w<<4&4294967295|w>>>28),w=S+(y^I^R)+A[0]+3936430074&4294967295,S=y+(w<<11&4294967295|w>>>21),w=R+(S^y^I)+A[3]+3572445317&4294967295,R=S+(w<<16&4294967295|w>>>16),w=I+(R^S^y)+A[6]+76029189&4294967295,I=R+(w<<23&4294967295|w>>>9),w=y+(I^R^S)+A[9]+3654602809&4294967295,y=I+(w<<4&4294967295|w>>>28),w=S+(y^I^R)+A[12]+3873151461&4294967295,S=y+(w<<11&4294967295|w>>>21),w=R+(S^y^I)+A[15]+530742520&4294967295,R=S+(w<<16&4294967295|w>>>16),w=I+(R^S^y)+A[2]+3299628645&4294967295,I=R+(w<<23&4294967295|w>>>9),w=y+(R^(I|~S))+A[0]+4096336452&4294967295,y=I+(w<<6&4294967295|w>>>26),w=S+(I^(y|~R))+A[7]+1126891415&4294967295,S=y+(w<<10&4294967295|w>>>22),w=R+(y^(S|~I))+A[14]+2878612391&4294967295,R=S+(w<<15&4294967295|w>>>17),w=I+(S^(R|~y))+A[5]+4237533241&4294967295,I=R+(w<<21&4294967295|w>>>11),w=y+(R^(I|~S))+A[12]+1700485571&4294967295,y=I+(w<<6&4294967295|w>>>26),w=S+(I^(y|~R))+A[3]+2399980690&4294967295,S=y+(w<<10&4294967295|w>>>22),w=R+(y^(S|~I))+A[10]+4293915773&4294967295,R=S+(w<<15&4294967295|w>>>17),w=I+(S^(R|~y))+A[1]+2240044497&4294967295,I=R+(w<<21&4294967295|w>>>11),w=y+(R^(I|~S))+A[8]+1873313359&4294967295,y=I+(w<<6&4294967295|w>>>26),w=S+(I^(y|~R))+A[15]+4264355552&4294967295,S=y+(w<<10&4294967295|w>>>22),w=R+(y^(S|~I))+A[6]+2734768916&4294967295,R=S+(w<<15&4294967295|w>>>17),w=I+(S^(R|~y))+A[13]+1309151649&4294967295,I=R+(w<<21&4294967295|w>>>11),w=y+(R^(I|~S))+A[4]+4149444226&4294967295,y=I+(w<<6&4294967295|w>>>26),w=S+(I^(y|~R))+A[11]+3174756917&4294967295,S=y+(w<<10&4294967295|w>>>22),w=R+(y^(S|~I))+A[2]+718787259&4294967295,R=S+(w<<15&4294967295|w>>>17),w=I+(S^(R|~y))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+S&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var I=y-this.blockSize,A=this.B,R=this.h,S=0;S<y;){if(R==0)for(;S<=I;)s(this,v,S),S+=this.blockSize;if(typeof v=="string"){for(;S<y;)if(A[R++]=v.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<y;)if(A[R++]=v[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var I=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=I&255,I/=256;for(this.u(v),v=Array(16),y=I=0;4>y;++y)for(var A=0;32>A;A+=8)v[I++]=this.g[y]>>>A&255;return v};function i(v,y){var I=c;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=y(v)}function o(v,y){this.h=y;for(var I=[],A=!0,R=v.length-1;0<=R;R--){var S=v[R]|0;A&&S==y||(I[R]=S,A=!1)}this.g=I}var c={};function u(v){return-128<=v&&128>v?i(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return O(h(-v));for(var y=[],I=1,A=0;v>=I;A++)y[A]=v/I|0,I*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return O(f(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(y,8)),A=p,R=0;R<v.length;R+=8){var S=Math.min(8,v.length-R),w=parseInt(v.substring(R,R+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(w))):(A=A.j(I),A=A.add(h(w)))}return A}var p=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var v=0,y=1,I=0;I<this.g.length;I++){var A=this.i(I);v+=(0<=A?A:4294967296+A)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(k(this))return"-"+O(this).toString(v);for(var y=h(Math.pow(v,6)),I=this,A="";;){var R=$(I,y).g;I=H(I,R.j(y));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=R,C(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function k(v){return v.h==-1}t.l=function(v){return v=H(this,v),k(v)?-1:C(v)?0:1};function O(v){for(var y=v.g.length,I=[],A=0;A<y;A++)I[A]=~v.g[A];return new o(I,~v.h).add(g)}t.abs=function(){return k(this)?O(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],A=0,R=0;R<=y;R++){var S=A+(this.i(R)&65535)+(v.i(R)&65535),w=(S>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);A=w>>>16,S&=65535,w&=65535,I[R]=w<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function H(v,y){return v.add(O(y))}t.j=function(v){if(C(this)||C(v))return p;if(k(this))return k(v)?O(this).j(O(v)):O(O(this).j(v));if(k(v))return O(this.j(O(v)));if(0>this.l(_)&&0>v.l(_))return h(this.m()*v.m());for(var y=this.g.length+v.g.length,I=[],A=0;A<2*y;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<v.g.length;R++){var S=this.i(A)>>>16,w=this.i(A)&65535,dt=v.i(R)>>>16,kt=v.i(R)&65535;I[2*A+2*R]+=w*kt,U(I,2*A+2*R),I[2*A+2*R+1]+=S*kt,U(I,2*A+2*R+1),I[2*A+2*R+1]+=w*dt,U(I,2*A+2*R+1),I[2*A+2*R+2]+=S*dt,U(I,2*A+2*R+2)}for(A=0;A<y;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=y;A<2*y;A++)I[A]=0;return new o(I,0)};function U(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function j(v,y){this.g=v,this.h=y}function $(v,y){if(C(y))throw Error("division by zero");if(C(v))return new j(p,p);if(k(v))return y=$(O(v),y),new j(O(y.g),O(y.h));if(k(y))return y=$(v,O(y)),new j(O(y.g),y.h);if(30<v.g.length){if(k(v)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var I=g,A=y;0>=A.l(v);)I=ae(I),A=ae(A);var R=he(I,1),S=he(A,1);for(A=he(A,2),I=he(I,2);!C(A);){var w=S.add(A);0>=w.l(v)&&(R=R.add(I),S=w),A=he(A,1),I=he(I,1)}return y=H(v,R.j(y)),new j(R,y)}for(R=p;0<=v.l(y);){for(I=Math.max(1,Math.floor(v.m()/y.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(I),w=S.j(y);k(w)||0<w.l(v);)I-=A,S=h(I),w=S.j(y);C(S)&&(S=g),R=R.add(S),v=H(v,w)}return new j(R,v)}t.A=function(v){return $(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)&v.i(A);return new o(I,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)|v.i(A);return new o(I,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)^v.i(A);return new o(I,this.h^v.h)};function ae(v){for(var y=v.g.length+1,I=[],A=0;A<y;A++)I[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(I,v.h)}function he(v,y){var I=y>>5;y%=32;for(var A=v.g.length-I,R=[],S=0;S<A;S++)R[S]=0<y?v.i(S+I)>>>y|v.i(S+I+1)<<32-y:v.i(S+I);return new o(R,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,dr=o}).apply(typeof Bf<"u"?Bf:typeof self<"u"?self:typeof window<"u"?window:{});var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nm,Ns,rm,lo,Nc,sm,im,om;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qi=="object"&&Qi];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,l){if(l)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],l=l(m),l!=m&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function i(a,l){a instanceof String&&(a+="");var d=0,m=!1,P={next:function(){if(!m&&d<a.length){var D=d++;return{value:l(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function p(a,l,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(l,P)}}return function(){return a.apply(l,arguments)}}function g(a,l,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,P,D){for(var K=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)K[Se-2]=arguments[Se];return l.prototype[P].apply(m,K)}}function k(a){const l=a.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=a[m];return d}return[]}function O(a,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const P=a.length||0,D=m.length||0;a.length=P+D;for(let K=0;K<D;K++)a[P+K]=m[K]}else a.push(m)}}class H{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var ae=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function he(a,l,d){for(const m in a)l.call(d,a[m],m,a)}function v(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function y(a){const l={};for(const d in a)l[d]=a[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,l){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let D=0;D<I.length;D++)d=I[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var l=1;a=a.split(":");const d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function w(){var a=vt;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class dt{constructor(){this.h=this.g=null}add(l,d){const m=kt.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var kt=new H(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let me,pe=!1,vt=new dt,Ft=()=>{const a=c.Promise.resolve(void 0);me=()=>{a.then(Nt)}};var Nt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){S(d)}var l=kt;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}pe=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var bn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a}();function Gt(a,l){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(ae){e:{try{$(l.nodeName);var P=!0;break e}catch{}P=!1}P||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Tt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gt.aa.h.call(this)}}C(Gt,xe);var Tt={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),Y=0;function G(a,l,d,m,P){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=P,this.key=++Y,this.da=this.fa=!1}function X(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,l,d,m,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var K=T(a,l,m,P);return-1<K?(l=a[K],d||(l.fa=!1)):(l=new G(l,this.src,D,!!m,P),l.fa=d,a.push(l)),l};function E(a,l){var d=l.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,l,void 0),D;(D=0<=P)&&Array.prototype.splice.call(m,P,1),D&&(X(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,l,d,m){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==l&&D.capture==!!d&&D.ha==m)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),V={};function L(a,l,d,m,P){if(Array.isArray(l)){for(var D=0;D<l.length;D++)L(a,l[D],d,m,P);return null}return d=se(d),a&&a[N]?a.K(l,d,h(m)?!!m.capture:!1,P):x(a,l,d,!1,m,P)}function x(a,l,d,m,P,D){if(!l)throw Error("Invalid event type");var K=h(P)?!!P.capture:!!P,Se=Q(a);if(Se||(a[b]=Se=new Te(a)),d=Se.add(l,d,m,K,D),d.proxy)return d;if(m=z(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)bn||(P=K),P===void 0&&(P=!1),a.addEventListener(l.toString(),m,P);else if(a.attachEvent)a.attachEvent(B(l.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function z(){function a(d){return l.call(a.src,a.listener,d)}const l=ne;return a}function W(a,l,d,m,P){if(Array.isArray(l))for(var D=0;D<l.length;D++)W(a,l[D],d,m,P);else m=h(m)?!!m.capture:!!m,d=se(d),a&&a[N]?(a=a.i,l=String(l).toString(),l in a.g&&(D=a.g[l],d=T(D,d,m,P),-1<d&&(X(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[l],a.h--)))):a&&(a=Q(a))&&(l=a.g[l.toString()],a=-1,l&&(a=T(l,d,m,P)),(d=-1<a?l[a]:null)&&q(d))}function q(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[N])E(l.i,a);else{var d=a.type,m=a.proxy;l.removeEventListener?l.removeEventListener(d,m,a.capture):l.detachEvent?l.detachEvent(B(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=Q(l))?(E(d,a),d.h==0&&(d.src=null,l[b]=null)):X(a)}}}function B(a){return a in V?V[a]:V[a]="on"+a}function ne(a,l){if(a.da)a=!0;else{l=new Gt(l,this);var d=a.listener,m=a.ha||a.src;a.fa&&q(a),a=d.call(m,l)}return a}function Q(a){return a=a[b],a instanceof Te?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(l){return a.handleEvent(l)}),a[ee])}function re(){Me.call(this),this.i=new Te(this),this.M=this,this.F=null}C(re,Me),re.prototype[N]=!0,re.prototype.removeEventListener=function(a,l,d,m){W(this,a,l,d,m)};function de(a,l){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=l.type||l,typeof l=="string")l=new xe(l,a);else if(l instanceof xe)l.target=l.target||a;else{var P=l;l=new xe(m,a),A(l,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var K=l.g=d[D];P=_e(K,m,!0,l)&&P}if(K=l.g=a,P=_e(K,m,!0,l)&&P,P=_e(K,m,!1,l)&&P,d)for(D=0;D<d.length;D++)K=l.g=d[D],P=_e(K,m,!1,l)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],m=0;m<d.length;m++)X(d[m]);delete a.g[l],a.h--}}this.F=null},re.prototype.K=function(a,l,d,m){return this.i.add(String(a),l,!1,d,m)},re.prototype.L=function(a,l,d,m){return this.i.add(String(a),l,!0,d,m)};function _e(a,l,d,m){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var P=!0,D=0;D<l.length;++D){var K=l[D];if(K&&!K.da&&K.capture==d){var Se=K.listener,Je=K.ha||K.src;K.fa&&E(a.i,K),P=Se.call(Je,m)!==!1&&P}}return P&&!m.defaultPrevented}function tt(a,l,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function Ge(a){a.g=tt(()=>{a.g=null,a.i&&(a.i=!1,Ge(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Vt extends Me{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(a){Me.call(this),this.h=a,this.g={}}C(nt,Me);var Sn=[];function ps(a){he(a.g,function(l,d){this.g.hasOwnProperty(d)&&q(l)},a),a.g={}}nt.prototype.N=function(){nt.aa.N.call(this),ps(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,Mt=c.JSON.parse,Ci=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ta(){}Ta.prototype.h=null;function Tl(a){return a.h||(a.h=a.i())}function wl(){}var gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wa(){xe.call(this,"d")}C(wa,xe);function Ia(){xe.call(this,"c")}C(Ia,xe);var tr={},Il=null;function Di(){return Il=Il||new re}tr.La="serverreachability";function vl(a){xe.call(this,tr.La,a)}C(vl,xe);function ms(a){const l=Di();de(l,new vl(l))}tr.STAT_EVENT="statevent";function Al(a,l){xe.call(this,tr.STAT_EVENT,a),this.stat=l}C(Al,xe);function pt(a){const l=Di();de(l,new Al(l,a))}tr.Ma="timingevent";function Rl(a,l){xe.call(this,tr.Ma,a),this.size=l}C(Rl,xe);function _s(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function ys(){this.g=!0}ys.prototype.xa=function(){this.g=!1};function W_(a,l,d,m,P,D){a.info(function(){if(a.g)if(D)for(var K="",Se=D.split("&"),Je=0;Je<Se.length;Je++){var we=Se[Je].split("=");if(1<we.length){var rt=we[0];we=we[1];var st=rt.split("_");K=2<=st.length&&st[1]=="type"?K+(rt+"="+we+"&"):K+(rt+"=redacted&")}}else K=null;else K=D;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+l+`
`+d+`
`+K})}function K_(a,l,d,m,P,D,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+l+`
`+d+`
`+D+" "+K})}function Pr(a,l,d,m){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+G_(a,d)+(m?" "+m:"")})}function z_(a,l){a.info(function(){return"TIMEOUT: "+l})}ys.prototype.info=function(){};function G_(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return Qe(d)}catch{return l}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},va;function ki(){}C(ki,Ta),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},va=new ki;function Pn(a,l,d,m){this.j=a,this.i=l,this.l=d,this.R=m||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sl}function Sl(){this.i=null,this.g="",this.h=!1}var Pl={},Aa={};function Ra(a,l,d){a.L=1,a.v=xi(cn(l)),a.m=d,a.P=!0,Cl(a,null)}function Cl(a,l){a.F=Date.now(),Ni(a),a.A=cn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Hl(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Sl,a.g=ah(a.j,d?l:null,!a.m),0<a.O&&(a.M=new Vt(g(a.Y,a,a.g),a.O)),l=a.U,d=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Sn[0]=P.toString()),P=Sn);for(var D=0;D<P.length;D++){var K=L(d,P[D],m||l.handleEvent,!1,l.h||l);if(!K)break;l.g[K.key]=K}l=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),ms(),W_(a.i,a.u,a.A,a.l,a.R,a.m)}Pn.prototype.ca=function(a){a=a.target;const l=this.M;l&&un(a)==3?l.j():this.Y(a)},Pn.prototype.Y=function(a){try{if(a==this.g)e:{const st=un(this.g);var l=this.g.Ba();const Or=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Jl(this.g)))){this.J||st!=4||l==7||(l==8||0>=Or?ms(3):ms(2)),ba(this);var d=this.g.Z();this.X=d;t:if(Dl(this)){var m=Jl(this.g);a="";var P=m.length,D=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),Es(this);var K="";break t}this.h.i=new c.TextDecoder}for(l=0;l<P;l++)this.h.h=!0,a+=this.h.i.decode(m[l],{stream:!(D&&l==P-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,K_(this.i,this.u,this.A,this.l,this.R,st,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Je=this.g;if((Se=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Se)){var we=Se;break t}}we=null}if(d=we)Pr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sa(this,d);else{this.o=!1,this.s=3,pt(12),nr(this),Es(this);break e}}if(this.P){d=!0;let Ut;for(;!this.J&&this.C<K.length;)if(Ut=Q_(this,K),Ut==Aa){st==4&&(this.s=4,pt(14),d=!1),Pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==Pl){this.s=4,pt(15),Pr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Pr(this.i,this.l,Ut,null),Sa(this,Ut);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||K.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)Pr(this.i,this.l,K,"[Invalid Chunked Response]"),nr(this),Es(this);else if(0<K.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Na(rt),rt.M=!0,pt(11))}}else Pr(this.i,this.l,K,null),Sa(this,K);st==4&&nr(this),this.o&&!this.J&&(st==4?rh(this.j,this):(this.o=!1,Ni(this)))}else fy(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),nr(this),Es(this)}}}catch{}finally{}};function Dl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Q_(a,l){var d=a.C,m=l.indexOf(`
`,d);return m==-1?Aa:(d=Number(l.substring(d,m)),isNaN(d)?Pl:(m+=1,m+d>l.length?Aa:(l=l.slice(m,m+d),a.C=m+d,l)))}Pn.prototype.cancel=function(){this.J=!0,nr(this)};function Ni(a){a.S=Date.now()+a.I,Ol(a,a.I)}function Ol(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_s(g(a.ba,a),l)}function ba(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Pn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(z_(this.i,this.A),this.L!=2&&(ms(),pt(17)),nr(this),this.s=2,Es(this)):Ol(this,this.S-a)};function Es(a){a.j.G==0||a.J||rh(a.j,a)}function nr(a){ba(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,ps(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function Sa(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||Pa(d.h,a))){if(!a.K&&Pa(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ji(d),Bi(d);else break e;ka(d),pt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=_s(g(d.Za,d),6e3));if(1>=Vl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else sr(d,11)}else if((a.K||d.g==a)&&ji(d),!U(l))for(P=d.Da.g.parse(l),l=0;l<P.length;l++){let we=P[l];if(d.T=we[0],we=we[1],d.G==2)if(we[0]=="c"){d.K=we[1],d.ia=we[2];const rt=we[3];rt!=null&&(d.la=rt,d.j.info("VER="+d.la));const st=we[4];st!=null&&(d.Aa=st,d.j.info("SVER="+d.Aa));const Or=we[5];Or!=null&&typeof Or=="number"&&0<Or&&(m=1.5*Or,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ut=a.g;if(Ut){const qi=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qi){var D=m.h;D.g||qi.indexOf("spdy")==-1&&qi.indexOf("quic")==-1&&qi.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ca(D,D.h),D.h=null))}if(m.D){const Va=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Va&&(m.ya=Va,Oe(m.I,m.D,Va))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var K=a;if(m.qa=oh(m,m.J?m.ia:null,m.W),K.K){Ml(m.h,K);var Se=K,Je=m.L;Je&&(Se.I=Je),Se.B&&(ba(Se),Ni(Se)),m.g=K}else th(m);0<d.i.length&&$i(d)}else we[0]!="stop"&&we[0]!="close"||sr(d,7);else d.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?sr(d,7):Oa(d):we[0]!="noop"&&d.l&&d.l.ta(we),d.v=0)}}ms(4)}catch{}}var J_=class{constructor(a,l){this.g=a,this.map=l}};function kl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vl(a){return a.h?1:a.g?a.g.size:0}function Pa(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Ca(a,l){a.g?a.g.add(l):a.h=l}function Ml(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}kl.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.D);return l}return k(a.i)}function Y_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,m=0;m<d;m++)l.push(a[m]);return l}l=[],d=0;for(m in a)l[d++]=a[m];return l}function X_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(const m in a)l[d++]=m;return l}}}function Ll(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=X_(a),m=Y_(a),P=m.length,D=0;D<P;D++)l.call(void 0,m[D],d&&d[D],a)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Z_(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),P=null;if(0<=m){var D=a[d].substring(0,m);P=a[d].substring(m+1)}else D=a[d];l(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function rr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof rr){this.h=a.h,Vi(this,a.j),this.o=a.o,this.g=a.g,Mi(this,a.s),this.l=a.l;var l=a.i,d=new Is;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Ul(this,d),this.m=a.m}else a&&(l=String(a).match(Fl))?(this.h=!1,Vi(this,l[1]||"",!0),this.o=Ts(l[2]||""),this.g=Ts(l[3]||"",!0),Mi(this,l[4]),this.l=Ts(l[5]||"",!0),Ul(this,l[6]||"",!0),this.m=Ts(l[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}rr.prototype.toString=function(){var a=[],l=this.j;l&&a.push(ws(l,Bl,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(ws(l,Bl,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ws(d,d.charAt(0)=="/"?ny:ty,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ws(d,sy)),a.join("")};function cn(a){return new rr(a)}function Vi(a,l,d){a.j=d?Ts(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Mi(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function Ul(a,l,d){l instanceof Is?(a.i=l,iy(a.i,a.h)):(d||(l=ws(l,ry)),a.i=new Is(l,a.h))}function Oe(a,l,d){a.i.set(l,d)}function xi(a){return Oe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ts(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ws(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,ey),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ey(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bl=/[#\/\?@]/g,ty=/[#\?:]/g,ny=/[#\?]/g,ry=/[#\?@]/g,sy=/#/g;function Is(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Cn(a){a.g||(a.g=new Map,a.h=0,a.i&&Z_(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}t=Is.prototype,t.add=function(a,l){Cn(this),this.i=null,a=Cr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function $l(a,l){Cn(a),l=Cr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function jl(a,l){return Cn(a),l=Cr(a,l),a.g.has(l)}t.forEach=function(a,l){Cn(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(l,P,m,this)},this)},this)},t.na=function(){Cn(this);const a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const P=a[m];for(let D=0;D<P.length;D++)d.push(l[m])}return d},t.V=function(a){Cn(this);let l=[];if(typeof a=="string")jl(this,a)&&(l=l.concat(this.g.get(Cr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},t.set=function(a,l){return Cn(this),this.i=null,a=Cr(this,a),jl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},t.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function Hl(a,l,d){$l(a,l),0<d.length&&(a.i=null,a.g.set(Cr(a,l),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const D=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var P=D;K[m]!==""&&(P+="="+encodeURIComponent(String(K[m]))),a.push(P)}}return this.i=a.join("&")};function Cr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function iy(a,l){l&&!a.j&&(Cn(a),a.i=null,a.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&($l(this,m),Hl(this,P,d))},a)),a.j=l}function oy(a,l){const d=new ys;if(c.Image){const m=new Image;m.onload=_(Dn,d,"TestLoadImage: loaded",!0,l,m),m.onerror=_(Dn,d,"TestLoadImage: error",!1,l,m),m.onabort=_(Dn,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=_(Dn,d,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else l(!1)}function ay(a,l){const d=new ys,m=new AbortController,P=setTimeout(()=>{m.abort(),Dn(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(P),D.ok?Dn(d,"TestPingServer: ok",!0,l):Dn(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),Dn(d,"TestPingServer: error",!1,l)})}function Dn(a,l,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function cy(){this.g=new Ci}function uy(a,l,d){const m=d||"";try{Ll(a,function(P,D){let K=P;h(P)&&(K=Qe(P)),l.push(m+D+"="+encodeURIComponent(K))})}catch(P){throw l.push(m+"type="+encodeURIComponent("_badmap")),P}}function Li(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Li,Ta),Li.prototype.g=function(){return new Fi(this.l,this.j)},Li.prototype.i=function(a){return function(){return a}}({});function Fi(a,l){re.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Fi,re),t=Fi.prototype,t.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,As(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ql(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ql(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?vs(this):As(this),this.readyState==3&&ql(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,vs(this))},t.Qa=function(a){this.g&&(this.response=a,vs(this))},t.ga=function(){this.g&&vs(this)};function vs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,As(a)}t.setRequestHeader=function(a,l){this.u.append(a,l)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function As(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wl(a){let l="";return he(a,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function Da(a,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Wl(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Oe(a,l,d))}function Fe(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Fe,re);var ly=/^https?$/i,hy=["POST","PUT"];t=Fe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():va.g(),this.v=this.o?Tl(this.o):Tl(va),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(D){Kl(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(hy,l,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,K]of d)this.g.setRequestHeader(D,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ql(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Kl(this,D)}};function Kl(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,zl(a),Ui(a)}function zl(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),Ui(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ui(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Gl(this):this.bb())},t.bb=function(){Gl(this)};function Gl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)tt(a.Ea,0,a);else if(de(a,"readystatechange"),un(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=K===0){var P=String(a.D).match(Fl)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),m=!ly.test(P?P.toLowerCase():"")}d=m}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var D=2<un(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",zl(a)}}finally{Ui(a)}}}}function Ui(a,l){if(a.g){Ql(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||de(a,"ready");try{d.onreadystatechange=m}catch{}}}function Ql(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Mt(l)}};function Jl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function fy(a){const l={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(U(a[m]))continue;var d=R(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=l[P]||[];l[P]=D,D.push(d)}v(l,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function Yl(a){this.Aa=0,this.i=[],this.j=new ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rs("baseRetryDelayMs",5e3,a),this.cb=Rs("retryDelaySeedMs",1e4,a),this.Wa=Rs("forwardChannelMaxRetries",2,a),this.wa=Rs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new kl(a&&a.concurrentRequestLimit),this.Da=new cy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yl.prototype,t.la=8,t.G=1,t.connect=function(a,l,d,m){pt(0),this.W=a,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=oh(this,null,this.W),$i(this)};function Oa(a){if(Xl(a),a.G==3){var l=a.U++,d=cn(a.I);if(Oe(d,"SID",a.K),Oe(d,"RID",l),Oe(d,"TYPE","terminate"),bs(a,d),l=new Pn(a,a.j,l),l.L=2,l.v=xi(cn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=ah(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ni(l)}ih(a)}function Bi(a){a.g&&(Na(a),a.g.cancel(),a.g=null)}function Xl(a){Bi(a),a.u&&(c.clearTimeout(a.u),a.u=null),ji(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function $i(a){if(!Nl(a.h)&&!a.s){a.s=!0;var l=a.Ga;me||Ft(),pe||(me(),pe=!0),vt.add(l,a),a.B=0}}function dy(a,l){return Vl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_s(g(a.Ga,a,l),sh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Pn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=eh(this,P,l),d=cn(this.I),Oe(d,"RID",a),Oe(d,"CVER",22),this.D&&Oe(d,"X-HTTP-Session-Id",this.D),bs(this,d),D&&(this.O?l="headers="+encodeURIComponent(String(Wl(D)))+"&"+l:this.m&&Da(d,this.m,D)),Ca(this.h,P),this.Ua&&Oe(d,"TYPE","init"),this.P?(Oe(d,"$req",l),Oe(d,"SID","null"),P.T=!0,Ra(P,d,null)):Ra(P,d,l),this.G=2}}else this.G==3&&(a?Zl(this,a):this.i.length==0||Nl(this.h)||Zl(this))};function Zl(a,l){var d;l?d=l.l:d=a.U++;const m=cn(a.I);Oe(m,"SID",a.K),Oe(m,"RID",d),Oe(m,"AID",a.T),bs(a,m),a.m&&a.o&&Da(m,a.m,a.o),d=new Pn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=eh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ca(a.h,d),Ra(d,m,l)}function bs(a,l){a.H&&he(a.H,function(d,m){Oe(l,m,d)}),a.l&&Ll({},function(d,m){Oe(l,m,d)})}function eh(a,l,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const K=["count="+d];D==-1?0<d?(D=P[0].g,K.push("ofs="+D)):D=0:K.push("ofs="+D);let Se=!0;for(let Je=0;Je<d;Je++){let we=P[Je].g;const rt=P[Je].map;if(we-=D,0>we)D=Math.max(0,P[Je].g-100),Se=!1;else try{uy(rt,K,"req"+we+"_")}catch{m&&m(rt)}}if(Se){m=K.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,m}function th(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;me||Ft(),pe||(me(),pe=!0),vt.add(l,a),a.v=0}}function ka(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_s(g(a.Fa,a),sh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,nh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_s(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Bi(this),nh(this))};function Na(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function nh(a){a.g=new Pn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=cn(a.qa);Oe(l,"RID","rpc"),Oe(l,"SID",a.K),Oe(l,"AID",a.T),Oe(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&Oe(l,"TO",a.ja),Oe(l,"TYPE","xmlhttp"),bs(a,l),a.m&&a.o&&Da(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=xi(cn(l)),d.m=null,d.P=!0,Cl(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Bi(this),ka(this),pt(19))};function ji(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function rh(a,l){var d=null;if(a.g==l){ji(a),Na(a),a.g=null;var m=2}else if(Pa(a.h,l))d=l.D,Ml(a.h,l),m=1;else return;if(a.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var P=a.B;m=Di(),de(m,new Rl(m,d)),$i(a)}else th(a);else if(P=l.s,P==3||P==0&&0<l.X||!(m==1&&dy(a,l)||m==2&&ka(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),P){case 1:sr(a,5);break;case 4:sr(a,10);break;case 3:sr(a,6);break;default:sr(a,2)}}}function sh(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function sr(a,l){if(a.j.info("Error code "+l),l==2){var d=g(a.fb,a),m=a.Xa;const P=!m;m=new rr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Vi(m,"https"),xi(m),P?oy(m.toString(),d):ay(m.toString(),d)}else pt(2);a.G=0,a.l&&a.l.sa(l),ih(a),Xl(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function ih(a){if(a.G=0,a.ka=[],a.l){const l=xl(a.h);(l.length!=0||a.i.length!=0)&&(O(a.ka,l),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function oh(a,l,d){var m=d instanceof rr?cn(d):new rr(d);if(m.g!="")l&&(m.g=l+"."+m.g),Mi(m,m.s);else{var P=c.location;m=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;var D=new rr(null);m&&Vi(D,m),l&&(D.g=l),P&&Mi(D,P),d&&(D.l=d),m=D}return d=a.D,l=a.ya,d&&l&&Oe(m,d,l),Oe(m,"VER",a.la),bs(a,m),m}function ah(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new Fe(new Li({eb:d})):new Fe(a.pa),l.Ha(a.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}t=ch.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Hi(){}Hi.prototype.g=function(a,l){return new At(a,l)};function At(a,l){re.call(this),this.g=new Yl(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!U(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Dr(this)}C(At,re),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Oa(this.g)},At.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Qe(a),a=d);l.i.push(new J_(l.Ya++,a)),l.G==3&&$i(l)},At.prototype.N=function(){this.g.l=null,delete this.j,Oa(this.g),delete this.g,At.aa.N.call(this)};function uh(a){wa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}C(uh,wa);function lh(){Ia.call(this),this.status=1}C(lh,Ia);function Dr(a){this.g=a}C(Dr,ch),Dr.prototype.ua=function(){de(this.g,"a")},Dr.prototype.ta=function(a){de(this.g,new uh(a))},Dr.prototype.sa=function(a){de(this.g,new lh)},Dr.prototype.ra=function(){de(this.g,"b")},Hi.prototype.createWebChannel=Hi.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,om=function(){return new Hi},im=function(){return Di()},sm=tr,Nc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,lo=Oi,bl.COMPLETE="complete",rm=bl,wl.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",re.prototype.listen=re.prototype.K,Ns=wl,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,nm=Fe}).apply(typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{});const $f="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new pb("@firebase/firestore");function Ds(){return Er.logLevel}function Z(t,...e){if(Er.logLevel<=Ee.DEBUG){const n=e.map(Du);Er.debug(`Firestore (${us}): ${t}`,...n)}}function vn(t,...e){if(Er.logLevel<=Ee.ERROR){const n=e.map(Du);Er.error(`Firestore (${us}): ${t}`,...n)}}function es(t,...e){if(Er.logLevel<=Ee.WARN){const n=e.map(Du);Er.warn(`Firestore (${us}): ${t}`,...n)}}function Du(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${us}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function be(t,e){t||oe()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Xg{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class mb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _b{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new am(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new ot(e)}}class yb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Eb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){be(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new Tb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ib(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ke(0,0))}static max(){return new ue(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends oi{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const vb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends oi{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return vb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ne.fromString(e))}static fromName(e){return new te(Ne.fromString(e).popFirst(5))}static empty(){return new te(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ne(e.slice()))}}function Ab(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new Kn(s,te.empty(),e)}function Rb(t){return new Kn(t.readTime,t.key,-1)}class Kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kn(ue.min(),te.empty(),-1)}static max(){return new Kn(ue.max(),te.empty(),-1)}}function bb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Sb)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Cb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ti(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ou.oe=-1;function ra(t){return t==null}function Do(t){return t===0&&1/t==-1/0}function Db(t){return typeof t=="number"&&Number.isInteger(t)&&!Do(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function um(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hf(this.data.getIterator())}getIteratorFrom(e){return new Hf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Hf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lm("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const Ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(be(!!t),typeof t=="string"){let e=0;const n=Ob.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nu(t){const e=t.mapValue.fields.__previous_value__;return ku(e)?Nu(e):e}function ai(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n,r,s,i,o,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ku(t)?4:Vb(t)?9007199254740991:Nb(t)?10:11:oe()}function an(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ai(t).isEqual(ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zn(s.timestampValue),c=zn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return $e(s.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $e(s.integerValue)===$e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=$e(s.doubleValue),c=$e(i.doubleValue);return o===c?Do(o)===Do(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(jf(o)!==jf(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!an(o[u],c[u])))return!1;return!0}(t,e);default:return oe()}}function ui(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=$e(i.integerValue||i.doubleValue),u=$e(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(t,e);case 3:return qf(t.timestampValue,e.timestampValue);case 4:return qf(ai(t),ai(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Tr(i),u=Tr(o);return c.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=Ie(c[h],u[h]);if(f!==0)return f}return Ie(c.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ie($e(i.latitude),$e(o.latitude));return c!==0?c:Ie($e(i.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,u,h,f;const p=i.fields||{},g=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,k=Ie(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Wf(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Yi.mapValue&&o===Yi.mapValue)return 0;if(i===Yi.mapValue)return 1;if(o===Yi.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Ie(u[p],f[p]);if(g!==0)return g;const _=ns(c[u[p]],h[f[p]]);if(_!==0)return _}return Ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw oe()}}function qf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=zn(t),r=zn(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Wf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ns(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function rs(t){return Vc(t)}function Vc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Vc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vc(n.fields[o])}`;return s+"}"}(t.mapValue):oe()}function Kf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mc(t){return!!t&&"integerValue"in t}function Vu(t){return!!t&&"arrayValue"in t}function zf(t){return!!t&&"nullValue"in t}function Gf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ho(t){return!!t&&"mapValue"in t}function Nb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ar(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Vb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ks(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ar(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(Ks(this.value))}}function hm(t){const e=[];return Ar(t.fields,(n,r)=>{const s=new Xe([n]);if(ho(r)){const i=hm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ut(e,0,ue.min(),ue.min(),ue.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,ue.min(),ue.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ue.min(),ue.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.position=e,this.inclusive=n}}function Qf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{}class qe extends fm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Lb(e,n,r):n==="array-contains"?new Bb(e,r):n==="in"?new $b(e,r):n==="not-in"?new jb(e,r):n==="array-contains-any"?new Hb(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Fb(e,r):new Ub(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ns(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends fm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return dm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dm(t){return t.op==="and"}function pm(t){return xb(t)&&dm(t)}function xb(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function xc(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(pm(t))return t.filters.map(e=>xc(e)).join(",");{const e=t.filters.map(n=>xc(n)).join(",");return`${t.op}(${e})`}}function gm(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&an(r.value,s.value)}(t,e):t instanceof Kt?function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&gm(o,s.filters[c]),!0):!1}(t,e):void oe()}function mm(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${rs(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(mm).join(" ,")+"}"}(t):"Filter"}class Lb extends qe{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class Fb extends qe{constructor(e,n){super(e,"in",n),this.keys=_m("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ub extends qe{constructor(e,n){super(e,"not-in",n),this.keys=_m("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _m(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class Bb extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vu(n)&&ui(n.arrayValue,this.value)}}class $b extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ui(this.value.arrayValue,n)}}class jb extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ui(this.value.arrayValue,n)}}class Hb extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ui(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Yf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new qb(t,e,n,r,s,i,o)}function Mu(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.ue=n}return e.ue}function xu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jf(t.startAt,e.startAt)&&Jf(t.endAt,e.endAt)}function Lc(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wb(t,e,n,r,s,i,o,c){return new ls(t,e,n,r,s,i,o,c)}function Lu(t){return new ls(t)}function Xf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ym(t){return t.collectionGroup!==null}function zs(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ze(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new li(i,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new li(Xe.keyField(),r))}return e.ce}function nn(t){const e=le(t);return e.le||(e.le=Kb(e,zs(t))),e.le}function Kb(t,e){if(t.limitType==="F")return Yf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new li(s.field,i)});const n=t.endAt?new Oo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Oo(t.startAt.position,t.startAt.inclusive):null;return Yf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fc(t,e){const n=t.filters.concat([e]);return new ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Uc(t,e,n){return new ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sa(t,e){return xu(nn(t),nn(e))&&t.limitType===e.limitType}function Em(t){return`${Mu(nn(t))}|lt:${t.limitType}`}function Lr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>mm(s)).join(", ")}]`),ra(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>rs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>rs(s)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function ia(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,u){const h=Qf(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,zs(r),s)||r.endAt&&!function(o,c,u){const h=Qf(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,zs(r),s))}(t,e)}function zb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tm(t){return(e,n)=>{let r=!1;for(const s of zs(t)){const i=Gb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gb(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,c){const u=o.data.field(i),h=c.data.field(i);return u!==null&&h!==null?ns(u,h):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ar(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return um(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new Le(te.comparator);function An(){return Qb}const wm=new Le(te.comparator);function Vs(...t){let e=wm;for(const n of t)e=e.insert(n.key,n);return e}function Im(t){let e=wm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function lr(){return Gs()}function vm(){return Gs()}function Gs(){return new hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Jb=new Le(te.comparator),Yb=new Ze(te.comparator);function ge(...t){let e=Yb;for(const n of t)e=e.add(n);return e}const Xb=new Ze(Ie);function Zb(){return Xb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(e)?"-0":e}}function Am(t){return{integerValue:""+t}}function eS(t,e){return Db(e)?Am(e):Fu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this._=void 0}}function tS(t,e,n){return t instanceof hi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ku(i)&&(i=Nu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ss?bm(t,e):t instanceof fi?Sm(t,e):function(s,i){const o=Rm(s,i),c=Zf(o)+Zf(s.Pe);return Mc(o)&&Mc(s.Pe)?Am(c):Fu(s.serializer,c)}(t,e)}function nS(t,e,n){return t instanceof ss?bm(t,e):t instanceof fi?Sm(t,e):n}function Rm(t,e){return t instanceof ko?function(r){return Mc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class hi extends oa{}class ss extends oa{constructor(e){super(),this.elements=e}}function bm(t,e){const n=Pm(e);for(const r of t.elements)n.some(s=>an(s,r))||n.push(r);return{arrayValue:{values:n}}}class fi extends oa{constructor(e){super(),this.elements=e}}function Sm(t,e){let n=Pm(e);for(const r of t.elements)n=n.filter(s=>!an(s,r));return{arrayValue:{values:n}}}class ko extends oa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Zf(t){return $e(t.integerValue||t.doubleValue)}function Pm(t){return Vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n){this.field=e,this.transform=n}}function rS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ss&&s instanceof ss||r instanceof fi&&s instanceof fi?ts(r.elements,s.elements,an):r instanceof ko&&s instanceof ko?an(r.Pe,s.Pe):r instanceof hi&&s instanceof hi}(t.transform,e.transform)}class sS{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class aa{}function Dm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uu(t.key,It.none()):new wi(t.key,t.data,It.none());{const n=t.data,r=wt.empty();let s=new Ze(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new er(t.key,r,new Dt(s.toArray()),It.none())}}function iS(t,e,n){t instanceof wi?function(s,i,o){const c=s.value.clone(),u=td(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof er?function(s,i,o){if(!fo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=td(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Om(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof wi?function(i,o,c,u){if(!fo(i.precondition,o))return c;const h=i.value.clone(),f=nd(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof er?function(i,o,c,u){if(!fo(i.precondition,o))return c;const h=nd(i.fieldTransforms,u,o),f=o.data;return f.setAll(Om(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return fo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function oS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Rm(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function ed(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ts(r,s,(i,o)=>rS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wi extends aa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class er extends aa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Om(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function td(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,nS(o,c,n[s]))}return r}function nd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tS(i,o,e))}return r}class Uu extends aa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aS extends aa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const u=Dm(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>ed(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>ed(n,r))}}class Bu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return Jb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ye;function hS(t){switch(t){default:return oe();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function km(t){if(t===void 0)return vn("GRPC error has no .code"),M.UNKNOWN;switch(t){case He.OK:return M.OK;case He.CANCELLED:return M.CANCELLED;case He.UNKNOWN:return M.UNKNOWN;case He.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case He.INTERNAL:return M.INTERNAL;case He.UNAVAILABLE:return M.UNAVAILABLE;case He.UNAUTHENTICATED:return M.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case He.NOT_FOUND:return M.NOT_FOUND;case He.ALREADY_EXISTS:return M.ALREADY_EXISTS;case He.PERMISSION_DENIED:return M.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case He.ABORTED:return M.ABORTED;case He.OUT_OF_RANGE:return M.OUT_OF_RANGE;case He.UNIMPLEMENTED:return M.UNIMPLEMENTED;case He.DATA_LOSS:return M.DATA_LOSS;default:return oe()}}(ye=He||(He={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new dr([4294967295,4294967295],0);function rd(t){const e=fS().encode(t),n=new tm;return n.update(e),new Uint8Array(n.digest())}function sd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,r],0),new dr([s,i],0)]}class $u{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=dr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(dr.fromNumber(r)));return s.compare(dS)===1&&(s=new dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=rd(e),[r,s]=sd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new $u(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=rd(e),[r,s]=sd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ca(ue.min(),s,new Le(Ie),An(),ge())}}class Ii{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ii(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Nm{constructor(e,n){this.targetId=e,this.me=n}}class Vm{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class id{constructor(){this.fe=0,this.ge=ad(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe()}}),new Ii(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ad()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pS{constructor(e){this.Le=e,this.Be=new Map,this.ke=An(),this.qe=od(),this.Qe=new Le(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Lc(i))if(r===0){const o=new te(i.path);this.Ue(n,o,ut.newNoDocument(o,ue.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),u=c?this.Xe(c,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Tr(r).toUint8Array()}catch(u){if(u instanceof lm)return es("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new $u(o,s,i)}catch(u){return es(u instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Lc(c.target)){const u=new te(c.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ut.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ca(e,n,this.Qe,this.ke,r);return this.ke=An(),this.qe=od(),this.Qe=new Le(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new id,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new id),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function od(){return new Le(te.comparator)}function ad(){return new Le(te.comparator)}const gS={asc:"ASCENDING",desc:"DESCENDING"},mS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_S={and:"AND",or:"OR"};class yS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bc(t,e){return t.useProto3Json||ra(e)?e:{value:e}}function No(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ES(t,e){return No(t,e.toTimestamp())}function rn(t){return be(!!t),ue.fromTimestamp(function(n){const r=zn(n);return new Ke(r.seconds,r.nanos)}(t))}function ju(t,e){return $c(t,e).canonicalString()}function $c(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xm(t){const e=Ne.fromString(t);return be($m(e)),e}function jc(t,e){return ju(t.databaseId,e.path)}function nc(t,e){const n=xm(e);if(n.get(1)!==t.databaseId.projectId)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(Fm(n))}function Lm(t,e){return ju(t.databaseId,e)}function TS(t){const e=xm(t);return e.length===4?Ne.emptyPath():Fm(e)}function Hc(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fm(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cd(t,e,n){return{name:jc(t,e),fields:n.value.mapValue.fields}}function wS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string"),et.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?M.UNKNOWN:km(h.code);return new J(f,h.message||"")}(o);n=new Vm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nc(t,r.document.name),i=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):ue.min(),c=new wt({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new po(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nc(t,r.document),i=r.readTime?rn(r.readTime):ue.min(),o=ut.newNoDocument(s,i),c=r.removedTargetIds||[];n=new po([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nc(t,r.document),i=r.removedTargetIds||[];n=new po([],i,s,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lS(s,i),c=r.targetId;n=new Nm(c,o)}}return n}function IS(t,e){let n;if(e instanceof wi)n={update:cd(t,e.key,e.value)};else if(e instanceof Uu)n={delete:jc(t,e.key)};else if(e instanceof er)n={update:cd(t,e.key,e.data),updateMask:OS(e.fieldMask)};else{if(!(e instanceof aS))return oe();n={verify:jc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof hi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ss)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ko)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ES(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe()}(t,e.precondition)),n}function vS(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?rn(s.updateTime):rn(i);return o.isEqual(ue.min())&&(o=rn(i)),new sS(o,s.transformResults||[])}(n,e))):[]}function AS(t,e){return{documents:[Lm(t,e.path)]}}function RS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Lm(t,s);const i=function(h){if(h.length!==0)return Bm(Kt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Fr(g.field),direction:PS(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Bc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function bS(t){let e=TS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Um(p);return g instanceof Kt&&pm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new li(Ur(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,ra(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,_=p.values||[];return new Oo(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new Oo(_,g)}(n.endAt)),Wb(e,s,o,i,c,"F",u,h)}function SS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Um(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ur(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ur(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Ur(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>Um(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function PS(t){return gS[t]}function CS(t){return mS[t]}function DS(t){return _S[t]}function Fr(t){return{fieldPath:t.canonicalString()}}function Ur(t){return Xe.fromServerFormat(t.fieldPath)}function Bm(t){return t instanceof qe?function(n){if(n.op==="=="){if(Gf(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NAN"}};if(zf(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gf(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NAN"}};if(zf(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(n.field),op:CS(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(s=>Bm(s));return r.length===1?r[0]:{compositeFilter:{op:DS(n.op),filters:r}}}(t):oe()}function OS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $m(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.ct=e}}function NS(t){const e=bS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Uc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.un=new MS}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Kn.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class MS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new is(0)}static kn(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.changes=new hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,Dt.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Vs();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=An();const o=Gs(),c=function(){return Gs()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof er)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Qs(f.mutation,h,f.mutation.getFieldMask(),Ke.now())):o.set(h.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new LS(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Gs();let s=new Le((o,c)=>o-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Dt.empty();f=c.applyToLocalView(h,f),r.set(u,f);const p=(s.get(c.batchId)||ge()).add(u);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,p=vm();f.forEach(g=>{if(!i.has(g)){const _=Dm(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ym(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(lr());let c=-1,u=i;return o.next(h=>F.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ge())).next(f=>({batchId:c,changes:Im(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=Vs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Vs();return this.indexManager.getCollectionParents(e,i).next(c=>F.forEach(c,u=>{const h=function(p,g){return new ls(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let c=Vs();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Qs(f.mutation,h,Dt.empty(),Ke.now()),ia(n,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:NS(s.bundledQuery),readTime:rn(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.overlays=new Le(te.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=lr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=lr(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=lr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=lr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return F.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uS(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this.Tr=new Ze(ze.Er),this.dr=new Ze(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new Ne([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new Ne([])),r=new ze(n,e),s=new ze(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze(ze.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cS(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(Ie);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new ze(new te(i),0);let c=new Ze(Ie);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.wr)),!0)},o),F.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.Mr=e,this.docs=function(){return new Le(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=An();const o=n.path,c=new te(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||bb(Rb(f),r)<=0||(s.has(f.key)||ia(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qS(this)}getSize(e){return F.resolve(this.size)}}class qS extends xS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.persistence=e,this.Nr=new hs(n=>Mu(n),xu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Hu,this.targetCount=0,this.kr=is.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ou(0),this.Kr=!1,this.Kr=!0,this.$r=new $S,this.referenceDelegate=e(this),this.Ur=new WS(this),this.indexManager=new VS,this.remoteDocumentCache=function(s){return new HS(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new kS(n),this.Gr=new US(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new jS(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new zS(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class zS extends Pb{constructor(e){super(),this.currentSequenceNumber=e}}class qu{constructor(e){this.persistence=e,this.Jr=new Hu,this.Yr=null}static Zr(e){return new qu(e)}get Xr(){if(this.Yr)return this.Yr;throw oe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const s=te.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sb()?8:Cb(nb())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new GS;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ds()<=Ee.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Lr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Ds()<=Ee.DEBUG&&Z("QueryEngine","Query:",Lr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ds()<=Ee.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Lr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):F.resolve())}Yi(e,n){if(Xf(n))return F.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Uc(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,c);return this.ns(n,h,o,u.readTime)?this.Yi(e,Uc(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return Xf(n)||s.isEqual(ue.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?F.resolve(null):(Ds()<=Ee.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(n)),this.rs(e,o,n,Ab(s,-1)).next(c=>c))})}ts(e,n){let r=new Ze(Tm(e));return n.forEach((s,i)=>{ia(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ds()<=Ee.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Lr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Kn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Le(Ie),this._s=new hs(i=>Mu(i),xu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function YS(t,e,n,r){return new JS(t,e,n,r)}async function jm(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let u=ge();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function XS(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const p=h.batch,g=p.keys();let _=F.resolve();return g.forEach(C=>{_=_.next(()=>f.getEntry(u,C)).next(k=>{const O=h.docVersions.get(C);be(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ge();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hm(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ZS(t,e){const n=le(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(et.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(k,O,H){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(g,_,f)&&c.push(n.Ur.updateTargetData(i,_))});let u=An(),h=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(eP(i,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(ue.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return F.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function eP(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=An();return n.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(ue.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function tP(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nP(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function qc(t,e,n){const r=le(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ti(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ud(t,e,n){const r=le(t);let s=ue.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=le(u),g=p._s.get(f);return g!==void 0?F.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,nn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:ge())).next(c=>(rP(r,zb(e),c),{documents:c,Ts:i})))}function rP(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class ld{constructor(){this.activeTargetIds=Zb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sP{constructor(){this.so=new ld,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ld,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi=null;function rc(){return Xi===null?Xi=function(){return 268435456+Math.round(2147483648*Math.random())}():Xi++,"0x"+Xi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class cP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=rc(),u=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw es("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+us}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=oP[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=rc();return new Promise((o,c)=>{const u=new nm;u.setWithCredentials(!0),u.listenOnce(rm.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case lo.NO_ERROR:const f=u.getResponseJson();Z(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case lo.TIMEOUT:Z(it,`RPC '${e}' ${i} timed out`),c(new J(M.DEADLINE_EXCEEDED,"Request time out"));break;case lo.HTTP_ERROR:const p=u.getStatus();if(Z(it,`RPC '${e}' ${i} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const C=function(O){const H=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(H)>=0?H:M.UNKNOWN}(_.status);c(new J(C,_.message))}else c(new J(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new J(M.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{Z(it,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(it,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=rc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=om(),c=im(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");Z(it,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,_=!1;const C=new aP({Io:O=>{_?Z(it,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(Z(it,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(it,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),k=(O,H,U)=>{O.listen(H,j=>{try{U(j)}catch($){setTimeout(()=>{throw $},0)}})};return k(p,Ns.EventType.OPEN,()=>{_||(Z(it,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),k(p,Ns.EventType.CLOSE,()=>{_||(_=!0,Z(it,`RPC '${e}' stream ${s} transport closed`),C.So())}),k(p,Ns.EventType.ERROR,O=>{_||(_=!0,es(it,`RPC '${e}' stream ${s} transport errored:`,O),C.So(new J(M.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ns.EventType.MESSAGE,O=>{var H;if(!_){const U=O.data[0];be(!!U);const j=U,$=j.error||((H=j[0])===null||H===void 0?void 0:H.error);if($){Z(it,`RPC '${e}' stream ${s} received error:`,$);const ae=$.status;let he=function(I){const A=He[I];if(A!==void 0)return km(A)}(ae),v=$.message;he===void 0&&(he=M.INTERNAL,v="Unknown error status: "+ae+" with message "+$.message),_=!0,C.So(new J(he,v)),p.close()}else Z(it,`RPC '${e}' stream ${s} received:`,U),C.bo(U)}}),k(c,sm.STAT_EVENT,O=>{O.stat===Nc.PROXY?Z(it,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Nc.NOPROXY&&Z(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){return new yS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,r,s,i,o,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new J(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uP extends Wm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=wS(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?rn(o.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Hc(this.serializer),n.addTarget=function(i,o){let c;const u=o.target;if(c=Lc(u)?{documents:AS(i,u)}:{query:RS(i,u)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Mm(i,o.resumeToken);const h=Bc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=No(i,o.snapshotVersion.toTimestamp());const h=Bc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=SS(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Hc(this.serializer),n.removeTarget=e,this.a_(n)}}class lP extends Wm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=vS(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Hc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IS(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,$c(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,$c(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class fP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(vn(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Rr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=le(u);h.L_.add(4),await vi(h),h.q_.set("Unknown"),h.L_.delete(4),await la(h)}(this))})}),this.q_=new fP(r,s)}}async function la(t){if(Rr(t))for(const e of t.B_)await e(!0)}async function vi(t){for(const e of t.B_)await e(!1)}function Km(t,e){const n=le(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Qu(n)?Gu(n):fs(n).r_()&&zu(n,e))}function Ku(t,e){const n=le(t),r=fs(n);n.N_.delete(e),r.r_()&&zm(n,e),n.N_.size===0&&(r.r_()?r.o_():Rr(n)&&n.q_.set("Unknown"))}function zu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fs(t).A_(e)}function zm(t,e){t.Q_.xe(e),fs(t).R_(e)}function Gu(t){t.Q_=new pS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fs(t).start(),t.q_.v_()}function Qu(t){return Rr(t)&&!fs(t).n_()&&t.N_.size>0}function Rr(t){return le(t).L_.size===0}function Gm(t){t.Q_=void 0}async function pP(t){t.q_.set("Online")}async function gP(t){t.N_.forEach((e,n)=>{zu(t,e)})}async function mP(t,e){Gm(t),Qu(t)?(t.q_.M_(e),Gu(t)):t.q_.set("Unknown")}async function _P(t,e,n){if(t.q_.set("Online"),e instanceof Vm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vo(t,r)}else if(e instanceof po?t.Q_.Ke(e):e instanceof Nm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await Hm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),zm(i,u);const p=new $n(f.target,u,h,f.sequenceNumber);zu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Vo(t,r)}}async function Vo(t,e,n){if(!Ti(e))throw e;t.L_.add(1),await vi(t),t.q_.set("Offline"),n||(n=()=>Hm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await la(t)})}function Qm(t,e){return e().catch(n=>Vo(t,n,e))}async function ha(t){const e=le(t),n=Gn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;yP(e);)try{const s=await tP(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,EP(e,s)}catch(s){await Vo(e,s)}Jm(e)&&Ym(e)}function yP(t){return Rr(t)&&t.O_.length<10}function EP(t,e){t.O_.push(e);const n=Gn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Jm(t){return Rr(t)&&!Gn(t).n_()&&t.O_.length>0}function Ym(t){Gn(t).start()}async function TP(t){Gn(t).p_()}async function wP(t){const e=Gn(t);for(const n of t.O_)e.m_(n.mutations)}async function IP(t,e,n){const r=t.O_.shift(),s=Bu.from(r,e,n);await Qm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ha(t)}async function vP(t,e){e&&Gn(t).V_&&await async function(r,s){if(function(o){return hS(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();Gn(r).s_(),await Qm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ha(r)}}(t,e),Jm(t)&&Ym(t)}async function fd(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Rr(n);n.L_.add(3),await vi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await la(n)}async function AP(t,e){const n=le(t);e?(n.L_.delete(2),await la(n)):e||(n.L_.add(2),await vi(n),n.q_.set("Unknown"))}function fs(t){return t.K_||(t.K_=function(n,r,s){const i=le(n);return i.w_(),new uP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:pP.bind(null,t),Ro:gP.bind(null,t),mo:mP.bind(null,t),d_:_P.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Qu(t)?Gu(t):t.q_.set("Unknown")):(await t.K_.stop(),Gm(t))})),t.K_}function Gn(t){return t.U_||(t.U_=function(n,r,s){const i=le(n);return i.w_(),new lP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:TP.bind(null,t),mo:vP.bind(null,t),f_:wP.bind(null,t),g_:IP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ha(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Ju(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yu(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Ti(t))return new J(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Vs(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.W_=new Le(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):oe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class os{constructor(e,n,r,s,i,o,c,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new os(e,n,Qr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bP{constructor(){this.queries=pd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=pd(),i.forEach((o,c)=>{for(const u of c.j_)u.onError(r)})})(this,new J(M.ABORTED,"Firestore shutting down"))}}function pd(){return new hs(t=>Em(t),sa)}async function Xm(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new RP,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Yu(o,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Xu(n)}async function Zm(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SP(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Xu(n)}function PP(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Xu(t){t.Y_.forEach(e=>{e.next()})}var Wc,gd;(gd=Wc||(Wc={})).ea="default",gd.Cache="cache";class e_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Wc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.key=e}}class n_{constructor(e){this.key=e}}class CP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=Tm(e),this.Ra=new Qr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new dd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=ia(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;g&&_?g.data.isEqual(_.data)?C!==k&&(r.track({type:3,doc:_}),O=!0):this.ga(g,_)||(r.track({type:2,doc:_}),O=!0,(u&&this.Aa(_,u)>0||h&&this.Aa(_,h)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),O=!0):g&&!_&&(r.track({type:1,doc:g}),O=!0,(u||h)&&(c=!0)),O&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(_,C){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return k(_)-k(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new os(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new dd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new n_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new t_(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return os.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class DP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OP{constructor(e){this.key=e,this.va=!1}}class kP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new hs(c=>Em(c),sa),this.Ma=new Map,this.xa=new Set,this.Oa=new Le(te.comparator),this.Na=new Map,this.La=new Hu,this.Ba={},this.ka=new Map,this.qa=is.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function NP(t,e,n=!0){const r=c_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await r_(r,e,n,!0),s}async function VP(t,e){const n=c_(t);await r_(n,e,!0,!1)}async function r_(t,e,n,r){const s=await nP(t.localStore,nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await MP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Km(t.remoteStore,s),c}async function MP(t,e,n,r,s){t.Ka=(p,g,_)=>async function(k,O,H,U){let j=O.view.ma(H);j.ns&&(j=await ud(k.localStore,O.query,!1).then(({documents:v})=>O.view.ma(v,j)));const $=U&&U.targetChanges.get(O.targetId),ae=U&&U.targetMismatches.get(O.targetId)!=null,he=O.view.applyChanges(j,k.isPrimaryClient,$,ae);return _d(k,O.targetId,he.wa),he.snapshot}(t,p,g,_);const i=await ud(t.localStore,e,!0),o=new CP(e,i.Ts),c=o.ma(i.documents),u=Ii.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,u);_d(t,n,h.wa);const f=new DP(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function xP(t,e,n){const r=le(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!sa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ku(r.remoteStore,s.targetId),Kc(r,s.targetId)}).catch(Ei)):(Kc(r,s.targetId),await qc(r.localStore,s.targetId,!0))}async function LP(t,e){const n=le(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ku(n.remoteStore,r.targetId))}async function FP(t,e,n){const r=WP(t);try{const s=await function(o,c){const u=le(o),h=Ke.now(),f=c.reduce((_,C)=>_.add(C.key),ge());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=An(),k=ge();return u.cs.getEntries(_,f).next(O=>{C=O,C.forEach((H,U)=>{U.isValidDocument()||(k=k.add(H))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,C)).next(O=>{p=O;const H=[];for(const U of c){const j=oS(U,p.get(U.key).overlayedDocument);j!=null&&H.push(new er(U.key,j,hm(j.value.mapValue),It.exists(!0)))}return u.mutationQueue.addMutationBatch(_,h,H,c)}).next(O=>{g=O;const H=O.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(_,O.batchId,H)})}).then(()=>({batchId:g.batchId,changes:Im(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Le(Ie)),h=h.insert(c,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ai(r,s.changes),await ha(r.remoteStore)}catch(s){const i=Yu(s,"Failed to persist write");n.reject(i)}}async function s_(t,e){const n=le(t);try{const r=await ZS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?be(o.va):s.removedDocuments.size>0&&(be(o.va),o.va=!1))}),await Ai(n,r,e)}catch(r){await Ei(r)}}function md(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=le(o);u.onlineState=c;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(c)&&(h=!0)}),h&&Xu(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UP(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Le(te.comparator);o=o.insert(i,ut.newNoDocument(i,ue.min()));const c=ge().add(i),u=new ca(ue.min(),new Map,new Le(Ie),o,c);await s_(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Zu(r)}else await qc(r.localStore,e,!1).then(()=>Kc(r,e,n)).catch(Ei)}async function BP(t,e){const n=le(t),r=e.batch.batchId;try{const s=await XS(n.localStore,e);o_(n,r,null),i_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ai(n,s)}catch(s){await Ei(s)}}async function $P(t,e,n){const r=le(t);try{const s=await function(o,c){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(p=>(be(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);o_(r,e,n),i_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ai(r,s)}catch(s){await Ei(s)}}function i_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function o_(t,e,n){const r=le(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Kc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||a_(t,r)})}function a_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ku(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Zu(t))}function _d(t,e,n){for(const r of n)r instanceof t_?(t.La.addReference(r.key,e),jP(t,r)):r instanceof n_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||a_(t,r.key)):oe()}function jP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),Zu(t))}function Zu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(Ne.fromString(e)),r=t.qa.next();t.Na.set(r,new OP(n)),t.Oa=t.Oa.insert(n,r),Km(t.remoteStore,new $n(nn(Lu(n.path)),r,"TargetPurposeLimboResolution",Ou.oe))}}async function Ai(t,e,n){const r=le(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Wu.Wi(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const f=le(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(h,g=>F.forEach(g.$i,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>F.forEach(g.Ui,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Ti(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.os.get(g),C=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,k)}}}(r.localStore,i))}async function HP(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await jm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new J(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ai(n,r.hs)}}function qP(t,e){const n=le(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function c_(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=s_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UP.bind(null,e),e.Ca.d_=SP.bind(null,e.eventManager),e.Ca.$a=PP.bind(null,e.eventManager),e}function WP(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$P.bind(null,e),e}class Mo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ua(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return YS(this.persistence,new QS,e.initialUser,this.serializer)}Ga(e){return new KS(qu.Zr,this.serializer)}Wa(e){return new sP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mo.provider={build:()=>new Mo};class zc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>md(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HP.bind(null,this.syncEngine),await AP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bP}()}createDatastore(e){const n=ua(e.databaseInfo.databaseId),r=function(i){return new cP(i)}(e.databaseInfo);return function(i,o,c,u){return new hP(i,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new dP(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>md(this.syncEngine,n,0),function(){return hd.D()?new hd:new iP}())}createSyncEngine(e,n){return function(s,i,o,c,u,h,f){const p=new kP(s,i,o,c,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await vi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}zc.provider={build:()=>new zc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=cm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ic(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zP(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>fd(e.remoteStore,s)),t._onlineComponents=e}async function zP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await ic(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await ic(t,new Mo)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await ic(t,new Mo);return t._offlineComponents}async function l_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await yd(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await yd(t,new zc))),t._onlineComponents}function GP(t){return l_(t).then(e=>e.syncEngine)}async function h_(t){const e=await l_(t),n=e.eventManager;return n.onListen=NP.bind(null,e.syncEngine),n.onUnlisten=xP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=LP.bind(null,e.syncEngine),n}function QP(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,h){const f=new u_({next:g=>{f.Za(),o.enqueueAndForget(()=>Zm(i,p));const _=g.docs.has(c);!_&&g.fromCache?h.reject(new J(M.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&u&&u.source==="server"?h.reject(new J(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new e_(Lu(c.path),f,{includeMetadataChanges:!0,_a:!0});return Xm(i,p)}(await h_(t),t.asyncQueue,e,n,r)),r.promise}function JP(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,h){const f=new u_({next:g=>{f.Za(),o.enqueueAndForget(()=>Zm(i,p)),g.fromCache&&u.source==="server"?h.reject(new J(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new e_(c,f,{includeMetadataChanges:!0,_a:!0});return Xm(i,p)}(await h_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e,n){if(!n)throw new J(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YP(t,e,n,r){if(e===!0&&r===!0)throw new J(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Td(t){if(!te.isDocumentKey(t))throw new J(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wd(t){if(te.isDocumentKey(t))throw new J(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fa(t);throw new J(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class da{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Id({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Id(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gb;switch(r.type){case"firstParty":return new Eb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ed.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Ed.delete(n),r.terminate())}(this),Promise.resolve()}}function XP(t,e,n,r={}){var s;const i=(t=zt(t,da))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=ot.MOCK_USER;else{c=tb(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new J(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ot(h)}t._authCredentials=new mb(new am(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new br(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Wn extends br{constructor(e,n,r){super(e,n,Lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new te(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function _D(t,e,...n){if(t=Wt(t),d_("collection","path",e),t instanceof da){const r=Ne.fromString(e,...n);return wd(r),new Wn(t,null,r)}{if(!(t instanceof yt||t instanceof Wn))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return wd(r),new Wn(t.firestore,null,r)}}function ZP(t,e,...n){if(t=Wt(t),arguments.length===1&&(e=cm.newId()),d_("doc","path",e),t instanceof da){const r=Ne.fromString(e,...n);return Td(r),new yt(t,null,new te(r))}{if(!(t instanceof yt||t instanceof Wn))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Td(r),new yt(t.firestore,t instanceof Wn?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new qm(this,"async_queue_retry"),this.Vu=()=>{const r=sc();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=sc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ti(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Ju.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&oe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Sr extends da{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new vd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vd(e),this._firestoreClient=void 0,await e}}}function eC(t,e){const n=typeof t=="object"?t:yu(),r=typeof t=="string"?t:"(default)",s=Yo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=eb("firestore");i&&XP(s,...i)}return s}function pa(t){if(t._terminated)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tC(t),t._firestoreClient}function tC(t){var e,n,r;const s=t._freezeSettings(),i=function(c,u,h,f){return new kb(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new KP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(et.fromBase64String(e))}catch(n){throw new J(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new as(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=/^__.*__$/;class rC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new er(e,this.data,this.fieldMask,n,this.fieldTransforms):new wi(e,this.data,n,this.fieldTransforms)}}class p_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function g_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class ga{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ga(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(g_(this.Cu)&&nC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class sC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ua(e)}Qu(e,n,r,s=!1){return new ga({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Si(t){const e=t._freezeSettings(),n=ua(t._databaseId);return new sC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nl(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);il("Data must be an object, but it was:",o,r);const c=y_(r,o);let u,h;if(i.merge)u=new Dt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Gc(e,p,n);if(!o.contains(g))throw new J(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);T_(f,g)||f.push(g)}u=new Dt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new rC(new wt(c),u,h)}class ma extends bi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ma}}function iC(t,e,n){return new ga({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class rl extends bi{_toFieldTransform(e){return new Cm(e.path,new hi)}isEqual(e){return e instanceof rl}}class sl extends bi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=iC(this,e,!0),r=this.Ku.map(i=>ds(i,n)),s=new ss(r);return new Cm(e.path,s)}isEqual(e){return e instanceof sl&&em(this.Ku,e.Ku)}}function m_(t,e,n,r){const s=t.Qu(1,e,n);il("Data must be an object, but it was:",s,r);const i=[],o=wt.empty();Ar(r,(u,h)=>{const f=ol(e,u,n);h=Wt(h);const p=s.Nu(f);if(h instanceof ma)i.push(f);else{const g=ds(h,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new Dt(i);return new p_(o,c,s.fieldTransforms)}function __(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[Gc(e,r,n)],u=[s];if(i.length%2!=0)throw new J(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Gc(e,i[g])),u.push(i[g+1]);const h=[],f=wt.empty();for(let g=c.length-1;g>=0;--g)if(!T_(h,c[g])){const _=c[g];let C=u[g];C=Wt(C);const k=o.Nu(_);if(C instanceof ma)h.push(_);else{const O=ds(C,k);O!=null&&(h.push(_),f.set(_,O))}}const p=new Dt(h);return new p_(f,p,o.fieldTransforms)}function oC(t,e,n,r=!1){return ds(n,t.Qu(r?4:3,e))}function ds(t,e){if(E_(t=Wt(t)))return il("Unsupported field value:",e,t),y_(t,e);if(t instanceof bi)return function(r,s){if(!g_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let u=ds(c,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:No(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:No(s.serializer,i)}}if(r instanceof el)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof as)return{bytesValue:Mm(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ju(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tl)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return Fu(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${fa(r)}`)}(t,e)}function y_(t,e){const n={};return um(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(t,(r,s)=>{const i=ds(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function E_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof el||t instanceof as||t instanceof yt||t instanceof bi||t instanceof tl)}function il(t,e,n){if(!E_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=fa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Gc(t,e,n){if((e=Wt(e))instanceof Ri)return e._internalPath;if(typeof e=="string")return ol(t,e);throw xo("Field path arguments must be of type string or ",t,!1,void 0,n)}const aC=new RegExp("[~\\*/\\[\\]]");function ol(t,e,n){if(e.search(aC)>=0)throw xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ri(...e.split("."))._internalPath}catch{throw xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new J(M.INVALID_ARGUMENT,c+t+u)}function T_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(al("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cC extends w_{data(){return super.data()}}function al(t,e){return typeof e=="string"?ol(t,e):e instanceof Ri?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cl{}class I_ extends cl{}function yD(t,e,...n){let r=[];e instanceof cl&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof ll).length,c=i.filter(u=>u instanceof ul).length;if(o>1||o>0&&c>0)throw new J(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ul extends I_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ul(e,n,r)}_apply(e){const n=this._parse(e);return v_(e._query,n),new br(e.firestore,e.converter,Fc(e._query,n))}_parse(e){const n=Si(e.firestore);return function(i,o,c,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Rd(p,f);const _=[];for(const C of p)_.push(Ad(u,i,C));g={arrayValue:{values:_}}}else g=Ad(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Rd(p,f),g=oC(c,o,p,f==="in"||f==="not-in");return qe.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ll extends cl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ll(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const u of c)v_(o,u),o=Fc(o,u)}(e._query,n),new br(e.firestore,e.converter,Fc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hl extends I_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hl(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new J(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new li(i,o)}(e._query,this._field,this._direction);return new br(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ls(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ED(t,e="asc"){const n=e,r=al("orderBy",t);return hl._create(r,n)}function Ad(t,e,n){if(typeof(n=Wt(n))=="string"){if(n==="")throw new J(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ym(e)&&n.indexOf("/")!==-1)throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!te.isDocumentKey(r))throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kf(t,new te(r))}if(n instanceof yt)return Kf(t,n._key);throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fa(n)}.`)}function Rd(t,e){if(!Array.isArray(t)||t.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function v_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class lC{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ar(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>$e(o.doubleValue));return new tl(i)}convertGeoPoint(e){return new el($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const n=zn(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);be($m(r));const s=new ci(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class A_ extends w_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(al("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class go extends A_{data(e={}){return super.data(e)}}class hC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new go(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new go(s._firestore,s._userDataWriter,c.doc.key,c.doc,new xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new go(s._firestore,s._userDataWriter,c.doc.key,c.doc,new xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:fC(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t){t=zt(t,yt);const e=zt(t.firestore,Sr);return QP(pa(e),t._key).then(n=>dC(e,t,n))}class R_ extends lC{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function wD(t){t=zt(t,br);const e=zt(t.firestore,Sr),n=pa(e),r=new R_(e);return uC(t._query),JP(n,t._query).then(s=>new hC(e,r,t,s))}function ID(t,e,n){t=zt(t,yt);const r=zt(t.firestore,Sr),s=fl(t.converter,e,n);return _a(r,[nl(Si(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,It.none())])}function vD(t,e,n,...r){t=zt(t,yt);const s=zt(t.firestore,Sr),i=Si(s);let o;return o=typeof(e=Wt(e))=="string"||e instanceof Ri?__(i,"updateDoc",t._key,e,n,r):m_(i,"updateDoc",t._key,e),_a(s,[o.toMutation(t._key,It.exists(!0))])}function AD(t,e){const n=zt(t.firestore,Sr),r=ZP(t),s=fl(t.converter,e);return _a(n,[nl(Si(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,It.exists(!1))]).then(()=>r)}function _a(t,e){return function(r,s){const i=new Tn;return r.asyncQueue.enqueueAndForget(async()=>FP(await GP(r),s,i)),i.promise}(pa(t),e)}function dC(t,e,n){const r=n.docs.get(e._key),s=new R_(t);return new A_(t,s,e._key,r,new xs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Si(e)}set(e,n,r){this._verifyNotCommitted();const s=oc(e,this._firestore),i=fl(s.converter,n,r),o=nl(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,It.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=oc(e,this._firestore);let o;return o=typeof(n=Wt(n))=="string"||n instanceof Ri?__(this._dataReader,"WriteBatch.update",i._key,n,r,s):m_(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,It.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=oc(e,this._firestore);return this._mutations=this._mutations.concat(new Uu(n._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new J(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function oc(t,e){if((t=Wt(t)).firestore!==e)throw new J(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function RD(){return new rl("serverTimestamp")}function bD(...t){return new sl("arrayUnion",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(t){return pa(t=zt(t,Sr)),new pC(t,e=>_a(t,e))}(function(e,n=!0){(function(s){us=s})(vr),_r(new ub("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Sr(new _b(r.getProvider("auth-internal")),new wb(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),en($f,"4.7.3",e),en($f,"4.7.3","esm2017")})();var bd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},S_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;u||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(b_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new mC;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _C=function(t){const e=b_(t);return S_.encodeByteArray(e,!0)},Sd=function(t){return _C(t).replace(/\./g,"")},yC=function(t){try{return S_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=()=>EC().__FIREBASE_DEFAULTS__,wC=()=>{if(typeof process>"u"||typeof bd>"u")return;const t=bd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yC(t[1]);return e&&JSON.parse(e)},vC=()=>{try{return TC()||wC()||IC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},AC=t=>{var e,n;return(n=(e=vC())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RC=t=>{const e=AC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sd(JSON.stringify(n)),Sd(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="FirebaseError";class ya extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SC,Object.setPrototypeOf(this,ya.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,PC.prototype.create)}}class PC{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?CC(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ya(s,c,r)}}function CC(t,e){return t.replace(DC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){return t&&t._delegate?t._delegate:t}class OC{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="firebasestorage.googleapis.com",C_="storageBucket",kC=2*60*1e3,NC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends ya{constructor(e,n,r=0){super(ac(e),`Firebase Storage: ${n} (${ac(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ac(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function ac(t){return"storage/"+t}function dl(){const t="An unknown error occurred, please check the error payload for server response.";return new Be(Ue.UNKNOWN,t)}function VC(t){return new Be(Ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function MC(t){return new Be(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be(Ue.UNAUTHENTICATED,t)}function LC(){return new Be(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function FC(t){return new Be(Ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function UC(){return new Be(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BC(){return new Be(Ue.CANCELED,"User canceled the upload/download.")}function $C(t){return new Be(Ue.INVALID_URL,"Invalid URL '"+t+"'.")}function jC(t){return new Be(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function HC(){return new Be(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+C_+"' property when initializing the app?")}function qC(){return new Be(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function WC(){return new Be(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function KC(t){return new Be(Ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qc(t){return new Be(Ue.INVALID_ARGUMENT,t)}function D_(){return new Be(Ue.APP_DELETED,"The Firebase app was deleted.")}function zC(t){return new Be(Ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Js(t,e){return new Be(Ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Os(t){throw new Be(Ue.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ot.makeFromUrl(e,n)}catch{return new Ot(e,"")}if(r.path==="")return r;throw jC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h($){$.path_=decodeURIComponent($.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),C={bucket:1,path:3},k=n===P_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",H=new RegExp(`^https?://${k}/${s}/${O}`,"i"),j=[{regex:c,indices:u,postModify:i},{regex:_,indices:C,postModify:h},{regex:H,indices:{bucket:1,path:2},postModify:h}];for(let $=0;$<j.length;$++){const ae=j[$],he=ae.regex.exec(e);if(he){const v=he[ae.indices.bucket];let y=he[ae.indices.path];y||(y=""),r=new Ot(v,y),ae.postModify(r);break}}if(r==null)throw $C(e);return r}}class GC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function u(){return c===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(_,u())},O)}function g(){i&&clearTimeout(i)}function _(O,...H){if(h){g();return}if(O){g(),f.call(null,O,...H);return}if(u()||o){g(),f.call(null,O,...H);return}r<64&&(r*=2);let j;c===1?(c=2,j=0):j=(r+Math.random())*1e3,p(j)}let C=!1;function k(O){C||(C=!0,g(),!h&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function JC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){return t!==void 0}function XC(t){return typeof t=="object"&&!Array.isArray(t)}function pl(t){return typeof t=="string"||t instanceof String}function Pd(t){return gl()&&t instanceof Blob}function gl(){return typeof Blob<"u"}function Cd(t,e,n,r){if(r<e)throw Qc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function O_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var pr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pr||(pr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n,r,s,i,o,c,u,h,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,C)=>{this.resolve_=_,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Zi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===pr.NO_ERROR,u=i.getStatus();if(!c||ZC(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===pr.ABORT;r(!1,new Zi(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Zi(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());YC(u)?i(u):i()}catch(u){o(u)}else if(c!==null){const u=dl();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(s.canceled){const u=this.appDelete_?D_():BC();o(u)}else{const u=UC();o(u)}};this.canceled_?n(!1,new Zi(!1,null,!0)):this.backoffId_=QC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&JC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zi{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function t0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function n0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function r0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function s0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function i0(t,e,n,r,s,i,o=!0){const c=O_(t.urlParams),u=t.url+c,h=Object.assign({},t.headers);return r0(h,e),t0(h,n),n0(h,i),s0(h,r),new e0(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function a0(...t){const e=o0();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(gl())return new Blob(t);throw new Be(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function c0(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){if(typeof atob>"u")throw KC("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cc{constructor(e,n){this.data=e,this.contentType=n||null}}function l0(t,e){switch(t){case Xt.RAW:return new cc(k_(e));case Xt.BASE64:case Xt.BASE64URL:return new cc(N_(t,e));case Xt.DATA_URL:return new cc(f0(e),d0(e))}throw dl()}function k_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function h0(t){let e;try{e=decodeURIComponent(t)}catch{throw Js(Xt.DATA_URL,"Malformed data URL.")}return k_(e)}function N_(t,e){switch(t){case Xt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Js(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Xt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Js(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=u0(e)}catch(s){throw s.message.includes("polyfill")?s:Js(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class V_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Js(Xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=p0(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function f0(t){const e=new V_(t);return e.base64?N_(Xt.BASE64,e.rest):h0(e.rest)}function d0(t){return new V_(t).contentType}function p0(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n){let r=0,s="";Pd(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Pd(this.data_)){const r=this.data_,s=c0(r,e,n);return s===null?null:new Bn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Bn(r,!0)}}static getBlob(...e){if(gl()){const n=e.map(r=>r instanceof Bn?r.data_:r);return new Bn(a0.apply(null,n))}else{const n=e.map(o=>pl(o)?l0(Xt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Bn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t){let e;try{e=JSON.parse(t)}catch{return null}return XC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function m0(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function x_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||_0}}let eo=null;function y0(t){return!pl(t)||t.length<2?t:x_(t)}function L_(){if(eo)return eo;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return y0(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),eo=t,eo}function E0(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ot(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function T0(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return E0(r,t),r}function F_(t,e,n){const r=M_(e);return r===null?null:T0(t,r,n)}function w0(t,e,n,r){const s=M_(e);if(s===null||!pl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),_=Ea(g,n,r),C=O_({alt:"media",token:h});return _+C})[0]}function I0(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ml{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t){if(!t)throw dl()}function v0(t,e){function n(r,s){const i=F_(t,s,e);return U_(i!==null),i}return n}function A0(t,e){function n(r,s){const i=F_(t,s,e);return U_(i!==null),w0(i,s,t.host,t._protocol)}return n}function B_(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=LC():s=xC():n.getStatus()===402?s=MC(t.bucket):n.getStatus()===403?s=FC(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function $_(t){const e=B_(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=VC(t.path)),i.serverResponse=s.serverResponse,i}return n}function R0(t,e,n){const r=e.fullServerUrl(),s=Ea(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new ml(s,i,A0(t,n),o);return c.errorHandler=$_(e),c}function b0(t,e){const n=e.fullServerUrl(),r=Ea(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,h){}const c=new ml(r,s,o,i);return c.successCodes=[200,204],c.errorHandler=$_(e),c}function S0(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function P0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=S0(null,e)),r}function C0(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let j="";for(let $=0;$<2;$++)j=j+Math.random().toString().slice(2);return j}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const h=P0(e,r,s),f=I0(h,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",_=Bn.getBlob(p,r,g);if(_===null)throw qC();const C={name:h.fullPath},k=Ea(i,t.host,t._protocol),O="POST",H=t.maxUploadRetryTime,U=new ml(k,O,v0(t,n),H);return U.urlParams=C,U.headers=o,U.body=_.uploadData(),U.errorHandler=B_(e),U}class D0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Os("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Os("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Os("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Os("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Os("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class O0 extends D0{initXhr(){this.xhr_.responseType="text"}}function _l(){return new O0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){this._service=e,n instanceof Ot?this._location=n:this._location=Ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ir(e,n)}get root(){const e=new Ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return x_(this._location.path)}get storage(){return this._service}get parent(){const e=g0(this._location.path);if(e===null)return null;const n=new Ot(this._location.bucket,e);return new Ir(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zC(e)}}function k0(t,e,n){t._throwIfRoot("uploadBytes");const r=C0(t.storage,t._location,L_(),new Bn(e,!0),n);return t.storage.makeRequestWithTokens(r,_l).then(s=>({metadata:s,ref:t}))}function N0(t){t._throwIfRoot("getDownloadURL");const e=R0(t.storage,t._location,L_());return t.storage.makeRequestWithTokens(e,_l).then(n=>{if(n===null)throw WC();return n})}function V0(t){t._throwIfRoot("deleteObject");const e=b0(t.storage,t._location);return t.storage.makeRequestWithTokens(e,_l)}function M0(t,e){const n=m0(t._location.path,e),r=new Ot(t._location.bucket,n);return new Ir(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t){return/^[A-Za-z]+:\/\//.test(t)}function L0(t,e){return new Ir(t,e)}function j_(t,e){if(t instanceof yl){const n=t;if(n._bucket==null)throw HC();const r=new Ir(n,n._bucket);return e!=null?j_(r,e):r}else return e!==void 0?M0(t,e):t}function F0(t,e){if(e&&x0(e)){if(t instanceof yl)return L0(t,e);throw Qc("To use ref(service, url), the first argument must be a Storage instance.")}else return j_(t,e)}function Dd(t,e){const n=e==null?void 0:e[C_];return n==null?null:Ot.makeFromBucketSpec(n,t)}function U0(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:bC(s,t.app.options.projectId))}class yl{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=P_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kC,this._maxUploadRetryTime=NC,this._requests=new Set,s!=null?this._bucket=Ot.makeFromBucketSpec(s,this._host):this._bucket=Dd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ot.makeFromBucketSpec(this._url,e):this._bucket=Dd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Cd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Cd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ir(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new GC(D_());{const o=i0(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Od="@firebase/storage",kd="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="storage";function PD(t,e,n){return t=Pi(t),k0(t,e,n)}function CD(t){return t=Pi(t),N0(t)}function DD(t){return t=Pi(t),V0(t)}function OD(t,e){return t=Pi(t),F0(t,e)}function B0(t=yu(),e){t=Pi(t);const r=Yo(t,H_).getImmediate({identifier:e}),s=RC("storage");return s&&$0(r,...s),r}function $0(t,e,n,r={}){U0(t,e,n,r)}function j0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new yl(n,r,s,e,vr)}function H0(){_r(new OC(H_,j0,"PUBLIC").setMultipleInstances(!0)),en(Od,kd,""),en(Od,kd,"esm2017")}H0();const q0={apiKey:"AIzaSyDEBr5tBWtrfABpSUd8ooppH_KVvKsSWms",authDomain:"tuned-ai-prod.firebaseapp.com",databaseURL:"tuned-ai-prod",projectId:"tuned-ai-prod",storageBucket:"tuned-ai-prod.firebasestorage.app",messagingSenderId:"1097968136317",appId:"1:1097968136317:web:eae5c5bab76c7371360114",measurementId:"G-774443W4F7"},El=ug(q0),Nd=BR(El),kD=eC(El),ND=B0(El),q_=LT(HT);q_.use(Gg);q_.mount("#app");export{J0 as A,eD as B,vD as C,OD as D,ND as E,dn as F,Ln as G,PD as H,CD as I,DD as J,z0 as K,AD as L,ED as M,bD as N,Bt as O,ro as P,Hr as Q,X0 as R,Ct as S,Ke as T,ap as U,BT as _,Fp as a,eT as b,G0 as c,fp as d,Q0 as e,Nd as f,ZP as g,kD as h,TD as i,RD as j,ID as k,hE as l,K0 as m,_D as n,Vp as o,wD as p,yD as q,zy as r,lD as s,Ry as t,Z0 as u,uD as v,tu as w,Y0 as x,SD as y,W0 as z};
