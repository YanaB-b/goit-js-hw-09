var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("7Y9D8");const i=document.querySelector('input[name ="delay"]'),u=document.querySelector('input[name ="step"]'),l=document.querySelector('input[name ="amount"]'),a=document.querySelector("button");function d(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n&&o({position:e,delay:t}),r({position:e,delay:t})}),t)}))}const c=({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)},s=({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)};a.addEventListener("click",(function(e){e.preventDefault();let t=Number(i.value),n=Number(u.value),o=Number(l.value);o||(o=1);for(let e=0;e<o;e++)d(e+1,t+n*e).then(c).catch(s)}));
//# sourceMappingURL=03-promises.c8e6da8e.js.map
