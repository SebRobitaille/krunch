parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LDpF":[function(require,module,exports) {
var t,e,n=window.innerHeight,i=n/4,c=document.getElementById("nav");function o(){var n,i={root:null,rootMargin:"0px",threshold:s()};(n=new IntersectionObserver(a,i)).observe(t),e.forEach(function(t){n.observe(t)})}function s(){for(var t=[],e=1;e<=5;e++){var n=e/5;t.push(n)}return t.push(0),t}function a(t,e){t.forEach(function(t){t.isIntersecting&&t.boundingClientRect.y<0?(t.target.classList.add("active-section"),r(),l()):t.target.classList.remove("active-section")})}function r(){t.classList.contains("active-section")?c.classList.remove("fixed-nav"):c.classList.add("fixed-nav")}function l(){document.querySelectorAll(".nav-link").forEach(function(t){var e=t.getAttribute("href"),n=e.slice(1,e.length);document.getElementById("".concat(n)).classList.contains("active-section")?t.classList.add("active-link"):t.classList.remove("active-link")})}window.addEventListener("load",function(n){t=document.getElementById("top"),e=document.querySelectorAll("section"),o()},!1);
},{}]},{},["LDpF"], null)
//# sourceMappingURL=/intersection-observer.9775b819.js.map