!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o,a=n("1WSnx"),l=document.querySelector(".feedback-form"),i=l.elements.email,s=l.elements.message,d={},f="feedback-form-state";l.addEventListener("input",a.throttle((function(e){d[e.target.name]=e.target.value,localStorage.setItem(f,JSON.stringify(d))}),500)),l.addEventListener("submit",(function(e){e.preventDefault(),console.log(d),e.currentTarget.reset(),localStorage.removeItem(f)})),(o=JSON.parse(localStorage.getItem(f)))&&(i.value=o.email||"",s.value=o.message||"",d=o)}();
//# sourceMappingURL=03-feedback.ac87ab7a.js.map