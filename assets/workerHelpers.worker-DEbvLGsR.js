(function(){"use strict";async function m(e,n,t){if(t.numThreads()===0)throw new Error("num_threads must be > 0.");const o={module:e,memory:n,receiver:t.receiver()};await Promise.all(Array.from({length:t.numThreads()},async()=>{const a=new Worker(self.location.href,{type:"module"});return a.postMessage(o),await new Promise(k=>a.addEventListener("message",k,{once:!0})),a})),t.build()}let r;const s=new Array(128).fill(void 0);s.push(void 0,null,!0,!1);function _(e){return s[e]}let c=s.length;function h(e){e<132||(s[e]=c,c=e)}function w(e){const n=_(e);return h(e),n}function i(e){c===s.length&&s.push(s.length+1);const n=c;return c=s[n],s[n]=e,n}const l=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&l.decode();let u=null;function p(){return(u===null||u.buffer!==r.memory.buffer)&&(u=new Uint8Array(r.memory.buffer)),u}function d(e,n){return e=e>>>0,l.decode(p().slice(e,e+n))}function f(e,n){try{return e.apply(this,n)}catch(t){r.__wbindgen_exn_store(i(t))}}function W(e){r.wbg_rayon_start_worker(e)}typeof FinalizationRegistry>"u"||new FinalizationRegistry(e=>r.__wbg_animationpool_free(e>>>0)),typeof FinalizationRegistry>"u"||new FinalizationRegistry(e=>r.__wbg_mmdruntime_free(e>>>0));const y=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>r.__wbg_wbg_rayon_poolbuilder_free(e>>>0));class b{static __wrap(n){n=n>>>0;const t=Object.create(b.prototype);return t.__wbg_ptr=n,y.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,y.unregister(this),n}free(){const n=this.__destroy_into_raw();r.__wbg_wbg_rayon_poolbuilder_free(n)}numThreads(){return r.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return r.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){r.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}async function R(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(o){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}function T(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(n){w(n)},e.wbg.__wbg_instanceof_Window_f401953a2cf86220=function(n){let t;try{t=_(n)instanceof Window}catch{t=!1}return t},e.wbg.__wbg_newnoargs_e258087cd0daa0ea=function(n,t){const o=new Function(d(n,t));return i(o)},e.wbg.__wbg_call_27c0f87801dedf93=function(){return f(function(n,t){const o=_(n).call(_(t));return i(o)},arguments)},e.wbg.__wbindgen_object_clone_ref=function(n){const t=_(n);return i(t)},e.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return f(function(){const n=self.self;return i(n)},arguments)},e.wbg.__wbg_window_c6fb939a7f436783=function(){return f(function(){const n=window.window;return i(n)},arguments)},e.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return f(function(){const n=globalThis.globalThis;return i(n)},arguments)},e.wbg.__wbg_global_207b558942527489=function(){return f(function(){const n=global.global;return i(n)},arguments)},e.wbg.__wbindgen_is_undefined=function(n){return _(n)===void 0},e.wbg.__wbindgen_throw=function(n,t){throw new Error(d(n,t))},e.wbg.__wbindgen_module=function(){const n=g.__wbindgen_wasm_module;return i(n)},e.wbg.__wbindgen_memory=function(){const n=r.memory;return i(n)},e.wbg.__wbg_startWorkers_2ee336a9694dda13=function(n,t,o){const a=m(w(n),w(t),b.__wrap(o));return i(a)},e}function A(e,n){e.wbg.memory=n||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function F(e,n){return r=e.exports,g.__wbindgen_wasm_module=n,u=null,r.__wbindgen_start(),r}async function g(e,n){if(r!==void 0)return r;typeof e>"u"&&(e=new URL("/your-repo-name/assets/index_bg-bDYqMWNZ.wasm",self.location.href));const t=T();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e)),A(t,n);const{instance:o,module:a}=await R(await e,t);return F(o,a)}onmessage=async({data:{module:e,memory:n,receiver:t}})=>{await g(e,n),postMessage(!0),W(t)}})();
