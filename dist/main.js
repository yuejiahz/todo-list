(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&family=Roboto&display=swap);"]),r.push([n.id,"#content{\n   \n    width: 100%;\n    /* overflow: auto; */\n    position: relative;\n    min-height:100vh;\n    padding:5em 0 0 0;\n    background-color: turquoise;\n    padding-bottom:2.5rem ;\n}\n\n*{\n    /* background-color: rgb(255, 232, 232); */\n}\n\nh1{\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    position: absolute;\n    margin: 0;\n    line-height:1.5em;\n    text-align: center;\n    width:100%;\n    font-size: 300%;\n    z-index: 1;\n}\n\nbody{\n    margin:0;\n    top:0; \n}\n\n#nav-bar{\n    position: absolute;\n    top:0;\n    background-color:#efefef;\n    width: 10em;\n    height:100vh;\n    padding:5em 1em 2.5em 1em;\n    font-family: 'Roboto', sans-serif;\n}\n.nav-item{\n    margin:0.2em;\n    padding:0.8em;\n    background-color: #b5c1dc;\n    border-radius: 15px;\n}\n\n#schedule{\n    display: flex;\n}\n\n#schedule-item{\n    padding:0.1em;\n}\n\n#projects-title, #projects{\n    background-color: transparent;\n}\n#projects-title{\n    padding:0 0 0 1em;\n}\n\np{\n    font-family: 'Roboto', sans-serif;\n}\n#task-container{\n    position:relative;\n    right:-14em;\n    bottom:19em;\n    width: 400%;\n    background-color: tomato;\n}\nfooter{\n    position: relative;\n    background-color: brown;\n    width: 100%;\n    bottom:0;\n    line-height:2.5rem;\n}\nli{\n    padding: 1em;\n}",""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var c=n[r],s=e.base?c[0]+e.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:h(f,e),references:1}),o.push(l)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(n,e){var t,o,r;if(e.singleton){var i=m++;t=p||(p=s(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=s(e),o=f.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var s=c(n,e),d=0;d<t.length;d++){var l=a(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(426);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r=()=>{console.log("task btn")},i=document.querySelector("#task-container");i.append((()=>{const n=document.createElement("div"),e=document.createElement("h3"),t=document.createElement("button");return document.createElement("ul"),t.addEventListener("click",r),e.textContent="Today",t.textContent="+ Add Task",n.appendChild(e),n.appendChild(t),n})()),console.log(i)})()})();