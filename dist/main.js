/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin:0;\n    font-family: 'Roboto', sans-serif;\n}\n@media screen and (max-width:850px) {\n    #main-container{ \n        display: grid;\n        grid-template-columns: 15rem 30rem 1fr;\n    }\n    #task-container{\n    width:30rem;\n    }\n}\n\nmain{\n    display: grid;\n    grid-template-rows: 3rem 1fr 0.03rem;\n    grid-template-areas:\n    \"header \"\n    \"main-container\"\n    \"footer\" ;\n    height:100vh;\n}\n\nh1{\n    grid-area:header;\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    text-align: center;\n    font-size: 300%;\n    line-height: 3rem;\n}\nsection#main-container{ \n    grid-area:main-container; \n    display: grid;\n    /* grid-template-columns: 12rem 50rem 1fr; */\n    grid-template-columns: 10rem 50rem 1fr;\n    grid-template-areas:\n    \"nav-bar task-container right-column\";\n    overflow-y: auto;\n}\n\nsection#nav-bar{\n    grid-area:nav-bar;  \n    background-color:#f0eded;\n    font-family: 'Roboto', sans-serif; \n}\n\nsection#task-container{\n    grid-area:task-container;\n    padding:2rem;\n}\n\nsection#right-column{\n    grid-area:right-column;\n    background-color:#f0eded;\n}\n\n#project-title, #title {\n    padding: 1rem 0 1rem 0.3rem;\n}\n#projects-container{\n    padding-left: 10%;\n}\n.nav-item{\njustify-self: stretch;\n}\n.nav-item:hover{\n    background-color:#cac5c5;\n}\n.nav-item,#add-task-btn{\n    background-color:#dddcdc;\n    margin-left: 5%;\n}\n\n#home, #today{\n    margin:0.3rem 0 0.3rem 0;\n    padding:0.8rem 0 0.8rem 0.5rem;\n}\n\n#projects-title, div#projects{\n    background-color: transparent;\n}\n\ndiv#project-content{\n    overflow-y: auto;\n}\n\ndiv#task-content{\n    background-color: rgba(255, 247, 231, 0.405);\n    padding: 0 1.3rem;\n    overflow-x: visible;\n}\n\nbutton#add-task-btn:hover{\n    background-color:#cac5c5;\n}\nbutton.add-btn{\n    border-radius: 20px;\n    color: rgb(124, 82, 59);\n    padding:0.8rem;\n    margin: 0.3rem 0;\n    width:90%;\n    border: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n\n#task-list{\n    display: flex;\n}\n#task-input-bar{\n    background-color: rgb(65, 65, 65);\n    height: 2rem;\n    padding: 0.5rem;\n    display: flex;\n    width: 95%;\n    align-content: space-between;\n}\n\n#task,\n#dueDate,\nbutton#add-task-input-btn,\nbutton#cancel-task-input-btn,\nbutton.task-btn,\n.project-btn, \ninput\n{\n    border-radius: 5px;\n    border: none;\n    margin:0 0.1rem 0 0.1rem;\n    line-height: 2rem;\n}\n\n#task-input{\n    width:50%;\n}\n#date{\n    width:30%;\n}\nbutton.task-btn{\n    font-weight: bold;\n}\n\nbutton#add-task-input-btn,.add-small-btn{\n    background-color: lightgreen;\n    flex-grow: 1;\n}\nbutton#cancel-task-input-btn,button.task-delete-btn,.del-btn{\n    background-color: lightcoral;   \n    width: 2rem;\n}\nbutton#cancel-task-input-btn:hover,\n.task-delete-btn:hover, .del-btn:hover{\n    background-color: rgb(194, 102, 102);\n}\nbutton#add-task-input-btn:hover,.add-small-btn:hover{\n    background-color: rgb(105, 182, 105);\n}\nbutton.task-edit-btn:hover{\nbackground-color: rgb(214, 218, 210);\n}\nul{\n    display: flex;\n    flex-direction: column;\n    background-color: rgba(245, 222, 179, 0.44);\n}\nli{\n    display: flex;\n    padding: 1rem;\n    line-height: 2rem;\n    width: 95%;\n}\n.task-checkbox{\n    left:0;\n    size:3rem;\n    padding:1rem;\n    margin: auto;\n}\n.task-text{\n    flex-grow: 1;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.strike{\n    text-decoration: line-through;\n}\n.task-date{\n    width: 5.5rem;\n    right:5rem;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-delete-btn{\n    text-align: center;\n    position: relative;\n    right:0;\n}\n#project-input{\n    width: 60%;\n}\n.project{\n    line-height: 2rem;\n    padding: 0.2rem;\n}\n.project:hover{\n    background-color: rgba(208, 209, 209, 0.57);\n    border-radius:5px;\n}\n.edit-project{\n    position: relative;\n    left: 60%;\n}\n#project-input{\n    border:solid 2px;\n}\nfooter{\n    grid-area:footer;\n    background-color:#dddcdc;\n    align-self: stretch;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,QAAQ;IACR,iCAAiC;AACrC;AACA;IACI;QACI,aAAa;QACb,sCAAsC;IAC1C;IACA;IACA,WAAW;IACX;AACJ;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC;;;aAGS;IACT,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,uCAAuC;IACvC,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,4CAA4C;IAC5C,sCAAsC;IACtC;yCACqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI,iBAAiB;AACrB;AACA;AACA,qBAAqB;AACrB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,4CAA4C;IAC5C,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,gBAAgB;IAChB,SAAS;IACT,YAAY;IACZ,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;IACf,aAAa;IACb,UAAU;IACV,4BAA4B;AAChC;;AAEA;;;;;;;;IAQI,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;IACxB,iBAAiB;AACrB;;AAEA;IACI,SAAS;AACb;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;AAChB;AACA;IACI,4BAA4B;IAC5B,WAAW;AACf;AACA;;IAEI,oCAAoC;AACxC;AACA;IACI,oCAAoC;AACxC;AACA;AACA,oCAAoC;AACpC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,2CAA2C;AAC/C;AACA;IACI,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,UAAU;AACd;AACA;IACI,MAAM;IACN,SAAS;IACT,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,UAAU;IACV,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;AACX;AACA;IACI,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,2CAA2C;IAC3C,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&family=Roboto&display=swap');\n*{\n    margin:0;\n    font-family: 'Roboto', sans-serif;\n}\n@media screen and (max-width:850px) {\n    #main-container{ \n        display: grid;\n        grid-template-columns: 15rem 30rem 1fr;\n    }\n    #task-container{\n    width:30rem;\n    }\n}\n\nmain{\n    display: grid;\n    grid-template-rows: 3rem 1fr 0.03rem;\n    grid-template-areas:\n    \"header \"\n    \"main-container\"\n    \"footer\" ;\n    height:100vh;\n}\n\nh1{\n    grid-area:header;\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    text-align: center;\n    font-size: 300%;\n    line-height: 3rem;\n}\nsection#main-container{ \n    grid-area:main-container; \n    display: grid;\n    /* grid-template-columns: 12rem 50rem 1fr; */\n    grid-template-columns: 10rem 50rem 1fr;\n    grid-template-areas:\n    \"nav-bar task-container right-column\";\n    overflow-y: auto;\n}\n\nsection#nav-bar{\n    grid-area:nav-bar;  \n    background-color:#f0eded;\n    font-family: 'Roboto', sans-serif; \n}\n\nsection#task-container{\n    grid-area:task-container;\n    padding:2rem;\n}\n\nsection#right-column{\n    grid-area:right-column;\n    background-color:#f0eded;\n}\n\n#project-title, #title {\n    padding: 1rem 0 1rem 0.3rem;\n}\n#projects-container{\n    padding-left: 10%;\n}\n.nav-item{\njustify-self: stretch;\n}\n.nav-item:hover{\n    background-color:#cac5c5;\n}\n.nav-item,#add-task-btn{\n    background-color:#dddcdc;\n    margin-left: 5%;\n}\n\n#home, #today{\n    margin:0.3rem 0 0.3rem 0;\n    padding:0.8rem 0 0.8rem 0.5rem;\n}\n\n#projects-title, div#projects{\n    background-color: transparent;\n}\n\ndiv#project-content{\n    overflow-y: auto;\n}\n\ndiv#task-content{\n    background-color: rgba(255, 247, 231, 0.405);\n    padding: 0 1.3rem;\n    overflow-x: visible;\n}\n\nbutton#add-task-btn:hover{\n    background-color:#cac5c5;\n}\nbutton.add-btn{\n    border-radius: 20px;\n    color: rgb(124, 82, 59);\n    padding:0.8rem;\n    margin: 0.3rem 0;\n    width:90%;\n    border: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n\n#task-list{\n    display: flex;\n}\n#task-input-bar{\n    background-color: rgb(65, 65, 65);\n    height: 2rem;\n    padding: 0.5rem;\n    display: flex;\n    width: 95%;\n    align-content: space-between;\n}\n\n#task,\n#dueDate,\nbutton#add-task-input-btn,\nbutton#cancel-task-input-btn,\nbutton.task-btn,\n.project-btn, \ninput\n{\n    border-radius: 5px;\n    border: none;\n    margin:0 0.1rem 0 0.1rem;\n    line-height: 2rem;\n}\n\n#task-input{\n    width:50%;\n}\n#date{\n    width:30%;\n}\nbutton.task-btn{\n    font-weight: bold;\n}\n\nbutton#add-task-input-btn,.add-small-btn{\n    background-color: lightgreen;\n    flex-grow: 1;\n}\nbutton#cancel-task-input-btn,button.task-delete-btn,.del-btn{\n    background-color: lightcoral;   \n    width: 2rem;\n}\nbutton#cancel-task-input-btn:hover,\n.task-delete-btn:hover, .del-btn:hover{\n    background-color: rgb(194, 102, 102);\n}\nbutton#add-task-input-btn:hover,.add-small-btn:hover{\n    background-color: rgb(105, 182, 105);\n}\nbutton.task-edit-btn:hover{\nbackground-color: rgb(214, 218, 210);\n}\nul{\n    display: flex;\n    flex-direction: column;\n    background-color: rgba(245, 222, 179, 0.44);\n}\nli{\n    display: flex;\n    padding: 1rem;\n    line-height: 2rem;\n    width: 95%;\n}\n.task-checkbox{\n    left:0;\n    size:3rem;\n    padding:1rem;\n    margin: auto;\n}\n.task-text{\n    flex-grow: 1;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.strike{\n    text-decoration: line-through;\n}\n.task-date{\n    width: 5.5rem;\n    right:5rem;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-delete-btn{\n    text-align: center;\n    position: relative;\n    right:0;\n}\n#project-input{\n    width: 60%;\n}\n.project{\n    line-height: 2rem;\n    padding: 0.2rem;\n}\n.project:hover{\n    background-color: rgba(208, 209, 209, 0.57);\n    border-radius:5px;\n}\n.edit-project{\n    position: relative;\n    left: 60%;\n}\n#project-input{\n    border:solid 2px;\n}\nfooter{\n    grid-area:footer;\n    background-color:#dddcdc;\n    align-self: stretch;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/DOMfunction.js":
/*!****************************!*\
  !*** ./src/DOMfunction.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteElementById": () => (/* binding */ deleteElementById),
/* harmony export */   "deleteElementByEvent": () => (/* binding */ deleteElementByEvent),
/* harmony export */   "displayAddTaskBtn": () => (/* binding */ displayAddTaskBtn)
/* harmony export */ });
function deleteElementById(Id){
    if (typeof Id === 'string') {
        const elementID = document.getElementById(`${Id}`);
        if(elementID){
            elementID.remove();
        }
    }
}

function deleteElementByEvent(event){
    if (typeof event === 'object') {
        const elementID = document.getElementById(`${event.target.id}`).parentNode;
        if(elementID){
            elementID.remove();
        }
    }
    if(event.target.id === 'cancel-task-input-btn'){
        displayAddTaskBtn(true);
    }
}

function displayAddTaskBtn(statement) {
    const addTaskbtn = document.querySelector('#add-task-btn');
    if (statement) {
        addTaskbtn.style.display = "block"
    }
    else if (!statement) {
        addTaskbtn.style.display = "none";
    }
}



/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodayDate": () => (/* binding */ getTodayDate),
/* harmony export */   "taskFunc": () => (/* binding */ taskFunc),
/* harmony export */   "projectFunc": () => (/* binding */ projectFunc)
/* harmony export */ });
/* harmony import */ var _taskLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskLayout */ "./src/taskLayout.js");
/* harmony import */ var _DOMfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMfunction */ "./src/DOMfunction.js");
/* harmony import */ var _projectLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectLayout */ "./src/projectLayout.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");





class task {
  constructor(task, dueDate, listName) {
    this.task = task
    this.date = dueDate
    this.listName = listName
  }
}

const getTodayDate = (() => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = String(today.getFullYear());
  return { dd, mm, yyyy };
})

const taskFunc = (() => {

  var taskArray = [];
  var selectedTaskArray = [];

    function add() {
      let taskInput = document.getElementById('task-input').value;
      let dueDateInput = document.getElementById('dueDate').value;
      let listName = _index__WEBPACK_IMPORTED_MODULE_3__.navInfo.nav[_index__WEBPACK_IMPORTED_MODULE_3__.navInfo.nav.length-1];

        if (!dueDateInput) {
          let today = getTodayDate();
          dueDateInput = today.yyyy + '/' + (today.mm) + '/' + today.dd;
        } else {
          dueDateInput = dueDateInput.replace(/-/g, '/');
        }

      let newTask = new task(taskInput, dueDateInput, listName);
      taskArray.push(newTask);
      console.log(taskArray);
      _taskLayout__WEBPACK_IMPORTED_MODULE_0__.taskList.layout();
    }

    function update() {
      let taskInput = document.getElementById('task-input').value;
      let dueDateInput = document.getElementById('dueDate').value;
      dueDateInput = dueDateInput.replace(/-/g, '/');

      let selectedTaskArray = _taskLayout__WEBPACK_IMPORTED_MODULE_0__.editTask.taskNum;
      let currentSelectionIndex = _taskLayout__WEBPACK_IMPORTED_MODULE_0__.editTask.taskNum.length-1;
      let currentTaskNum = selectedTaskArray[currentSelectionIndex];

      taskArray[currentTaskNum].task = taskInput;
      taskArray[currentTaskNum].date = dueDateInput;
      _taskLayout__WEBPACK_IMPORTED_MODULE_0__.taskList.layout();
    }

    function del(event) {
      console.log(event);
      const taskNum = event.path[1].getAttribute('data');
      (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)(`task-${taskNum}`);
      taskArray.splice(taskNum,1);
    }

  return {
    list: taskArray,
    selectedList : selectedTaskArray,
    add,
    update,
    del
  }

})();

const projectFunc = (()=> {

  var projectArray=[];

    function add(){
      const input = document.querySelector('#project-input').value;
      projectArray.push(input);
      _index__WEBPACK_IMPORTED_MODULE_3__.navInfo.updateList(input);
      _projectLayout__WEBPACK_IMPORTED_MODULE_2__.projectList.layout();
    }

    function update(){
      const input = document.querySelector('#project-input').value;
      _index__WEBPACK_IMPORTED_MODULE_3__.navInfo.editList(input);
      let lastIndex = _index__WEBPACK_IMPORTED_MODULE_3__.navInfo.projectIndexArr[_index__WEBPACK_IMPORTED_MODULE_3__.navInfo.projectIndexArr.length-1];
      projectArray[lastIndex]=input;
      (0,_index__WEBPACK_IMPORTED_MODULE_3__.getTitle)(input);
      (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('project-edit-btn');
      _projectLayout__WEBPACK_IMPORTED_MODULE_2__.projectList.layout();
    }

    function del(){
      let lastIndex = _index__WEBPACK_IMPORTED_MODULE_3__.navInfo.projectIndexArr[_index__WEBPACK_IMPORTED_MODULE_3__.navInfo.projectIndexArr.length-1];
      projectArray.splice(lastIndex,1);
      _index__WEBPACK_IMPORTED_MODULE_3__.navInfo.delList();
      //
      _projectLayout__WEBPACK_IMPORTED_MODULE_2__.projectList.layout();
    }

  return {
    list: projectArray,
    add,
    update,
    del
  }

})();


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display),
/* harmony export */   "navInfo": () => (/* binding */ navInfo),
/* harmony export */   "getTitle": () => (/* binding */ getTitle)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _taskLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskLayout.js */ "./src/taskLayout.js");
/* harmony import */ var _projectLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectLayout */ "./src/projectLayout.js");
/* harmony import */ var _DOMfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMfunction */ "./src/DOMfunction.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function */ "./src/function.js");







const getTitle = (text) => {
    (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_3__.deleteElementById)('title');
    const taskContent = document.querySelector('#task-content');
    const title = document.createElement('h3');
    title.id = 'title';
    title.innerHTML = `${text}`;
    taskContent.prepend(title);
}

const navInfo = (() => {
    var list = ['home','today'];
    var selectedProject = [];
    var selectedNavItem = [];
    var navNum = []; 
    var proNum = [];
    var lastSelectedNum; 

    function updateList(input){
        list.push(input);
    }

    function editList(input){
       list[lastSelectedNum] = input;
    }
    function delList(){
        list.splice(lastSelectedNum,1);
    }

    function select(event){
        if (event){
        let num = document.querySelector(`#${event.target.id}`).getAttribute('nav');
        navNum.push(num);
        lastSelectedNum = navNum[navNum.length-1];
        _getCurrentNavItem(lastSelectedNum);
        _getCurrentProject(lastSelectedNum);
        getProjectIndex(lastSelectedNum);
        }
    }
    function _getCurrentProject(num){
        if(num > 1){
        let projectName = list[num];
        selectedProject.push(projectName);
        }
    }
    function getProjectIndex(num){
        if(num > 1){ 
        num=num-2;
        proNum.push(num);
        }
    }
    function _getCurrentNavItem(num){
        let navItem = list[num];
        selectedNavItem.push(navItem);
    }

    return {
        updateList,
        editList,
        delList,
        select,
        project: selectedProject,
        nav: selectedNavItem,
        list: list,
        projectIndexArr: proNum
    }  
})();

const loadPage = (() => {  

const defaultDisplay = () => {
   display.todayTask();
}

const addEventListener = () => {
    if(!!document){
        document.querySelector('#home').addEventListener('click', display.allTask);
        document.querySelector('#today').addEventListener('click', display.todayTask);
        document.querySelector('#add-project-btn').addEventListener('click', _projectLayout__WEBPACK_IMPORTED_MODULE_2__.projectInput.layout);
        document.querySelector('#add-task-btn').addEventListener('click', _taskLayout_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.layout);
        } 
 }

defaultDisplay();
addEventListener();
});

const display = (() => {

    function allTask (event) {
        getTitle('Home');
        navInfo.select(event);
        //taskFunc.selectedList = taskFunc.list.filter((list)=> list));
        _taskLayout_js__WEBPACK_IMPORTED_MODULE_1__.taskList.layout();
        (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_3__.displayAddTaskBtn)(false);
    }

    function todayTask (event) {
        getTitle('Today');
        navInfo.select(event);
        _taskLayout_js__WEBPACK_IMPORTED_MODULE_1__.taskList.layout();
        (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_3__.displayAddTaskBtn)(true);
    }

    function taskByNavItem (event){
        const selectedNavItem = document.querySelector(`#${event.target.id}`);
        navInfo.select(event);
        getTitle(selectedNavItem.textContent);
        _taskLayout_js__WEBPACK_IMPORTED_MODULE_1__.taskList.layout();
        _projectLayout__WEBPACK_IMPORTED_MODULE_2__.editProject.addBtn();
        (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_3__.displayAddTaskBtn)(true);
    }

return{
    allTask,
    todayTask,
    taskByNavItem
}
})();

window.addEventListener('DOMContentLoaded',loadPage);











/***/ }),

/***/ "./src/projectLayout.js":
/*!******************************!*\
  !*** ./src/projectLayout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectInput": () => (/* binding */ projectInput),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "editProject": () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/function.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _DOMfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMfunction */ "./src/DOMfunction.js");





const projectInput = (() => {

    function _deletePreviousDOM() {
        (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_2__.deleteElementById)('project-bar');
    }

    function layout() {
        _deletePreviousDOM();
        const projectContent = document.querySelector('#project-content');
        const projectBar = document.createElement('div');
        const input = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        projectBar.id = "project-bar";
        input.id = "project-input";
        add.id = "add-project-input-btn";
        cancel.id = "cancel-project-input-btn";
        add.classList.add('add-small-btn');
        cancel.classList.add('del-btn');
        add.classList.add('project-btn');
        cancel.classList.add('project-btn');

        input.setAttribute('type', 'text');
        input.setAttribute('value', 'Default project');

        add.textContent = "Add";
        cancel.textContent = "X";

        projectBar.style.display = "flex";
        projectContent.appendChild(projectBar);
        projectBar.appendChild(input);
        projectBar.appendChild(add);
        projectBar.appendChild(cancel);
        _addEventListener();
    }

    function _addEventListener() {
        if (!!document) {
            document.querySelector('#add-project-input-btn').addEventListener('click', _function__WEBPACK_IMPORTED_MODULE_0__.projectFunc.add);
            document.querySelector('#cancel-project-input-btn').addEventListener('click', _function__WEBPACK_IMPORTED_MODULE_0__.projectFunc.del);
        }
    }

    return {
        layout
    }
})();

const projectList = (() => {

    const projectContent = document.querySelector('#project-content');

    function layout() {

        _deletePreviousDOM();
        for (let i in _function__WEBPACK_IMPORTED_MODULE_0__.projectFunc.list) {
            const project = document.createElement('div');

            project.id = `project-${i}`;
            project.classList.add('project');
            project.setAttribute('project', `${i}`);
            project.setAttribute('name', _function__WEBPACK_IMPORTED_MODULE_0__.projectFunc.list[i]);

            let navCode = Number(i) + 2;
            project.setAttribute('nav',`${navCode}`);

            project.textContent = _function__WEBPACK_IMPORTED_MODULE_0__.projectFunc.list[i];
            projectContent.appendChild(project);
        }
        _addEventListener();
    }

    function _deletePreviousDOM() {
        (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_2__.deleteElementById)('project-bar');
        const projectList = Array.from(document.querySelectorAll('.project'));
        projectList.forEach((ele) => ele.remove());
    }

    function _addEventListener() {
        const projects = Array.from(document.querySelectorAll('.project'));
        projects.forEach((ele) => ele.addEventListener('click',_index__WEBPACK_IMPORTED_MODULE_1__.display.taskByNavItem));
    }

    return {
        layout
    }
})();

const editProject = (() => {

    function addBtn() {
        const title = document.querySelector('#title');
        const edit = document.createElement('button');
        edit.textContent = "edit";
        edit.id = "project-edit-btn";
        edit.classList.add('project-btn');
        edit.classList.add('edit-project');
        title.appendChild(edit);


        const del = document.createElement('button');
        del.textContent = "Del";
        del.id = "project-del-btn";
        del.classList.add('project-btn');
        del.classList.add('del-btn');
        del.classList.add('edit-project');

        title.appendChild(del);

        _addEventListenerToBtn();
    }

    function layout() {
        _deletePreviousDOM();

        const title = document.querySelector('#title');
        const projectBar = document.createElement('div');
        const input = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        projectBar.id = "project-bar";
        input.id = "project-input";
        add.id = "add-project-input-btn";
        cancel.id = "cancel-project-input-btn";
        add.classList.add('add-small-btn');
        cancel.classList.add('del-btn');
        add.classList.add('project-btn');
        cancel.classList.add('project-btn');

        input.setAttribute('type', 'text');

        let lastSelectedProject = _index__WEBPACK_IMPORTED_MODULE_1__.navInfo.project[_index__WEBPACK_IMPORTED_MODULE_1__.navInfo.project.length-1];
        input.setAttribute('value', `${lastSelectedProject}`);

        add.textContent = "Add";
        cancel.textContent = "X";

        projectBar.style.display = "flex";
        title.appendChild(projectBar);
        projectBar.appendChild(input);
        projectBar.appendChild(add);
        projectBar.appendChild(cancel);

        _addEventListenerToInputBar();
    }

    function _deletePreviousDOM() {
        (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_2__.deleteElementById)('project-bar');
    }

    function _addEventListenerToInputBar() {
        const add =  document.getElementById('add-project-input-btn');
        const cancel = document.getElementById('cancel-project-input-btn');
        add.addEventListener('click', _function__WEBPACK_IMPORTED_MODULE_0__.projectFunc.update);
        cancel.addEventListener('click', _DOMfunction__WEBPACK_IMPORTED_MODULE_2__.deleteElementByEvent);
    }

    function _addEventListenerToBtn() {
        document.querySelector('#project-edit-btn').addEventListener('click', layout);
        document.querySelector('#project-del-btn').addEventListener('click', _function__WEBPACK_IMPORTED_MODULE_0__.projectFunc.del);
    }

    return {
         addBtn,
    }
})();



/***/ }),

/***/ "./src/taskLayout.js":
/*!***************************!*\
  !*** ./src/taskLayout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskInput": () => (/* binding */ taskInput),
/* harmony export */   "taskList": () => (/* binding */ taskList),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/function.js");
/* harmony import */ var _DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMfunction.js */ "./src/DOMfunction.js");





const taskInput = (() => {

    function _deletePreviousDOM() {
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('task-input-bar');
    }

    function layout() {
        _deletePreviousDOM();

        const taskContent = document.querySelector('#task-content');
        const taskBar = document.createElement('div');
        const input = document.createElement('input');
        const date = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        input.setAttribute('type', 'text');
        input.setAttribute('value', 'default task');
        date.setAttribute('type', 'date');

        taskBar.id = "task-input-bar";
        input.id = "task-input";
        date.id = "dueDate";
        add.id = "add-task-input-btn";
        cancel.id = "cancel-task-input-btn";
        add.classList.add("task-btn");
        cancel.classList.add("task-btn");

        add.textContent = "Add";
        cancel.textContent = "X";

        taskBar.appendChild(input);
        taskBar.appendChild(date);
        taskBar.appendChild(add);
        taskBar.appendChild(cancel);
        taskContent.append(taskBar);

        _addEventListener();
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.displayAddTaskBtn)(false);
    }

    function _addEventListener() {
        if (!!document) {
            document.querySelector('#add-task-input-btn').addEventListener('click', _function__WEBPACK_IMPORTED_MODULE_0__.taskFunc.add);
            document.querySelector('#cancel-task-input-btn').addEventListener('click', _DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementByEvent);
        }
    }

    return {
        layout
    }
})();

const taskList = (() => {

    function _deletePreviousDOM() {
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('task-list');
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('task-input-bar');
    }

    function filterByListName(listName){
        return listName == `${listName}`;
    }

    function layout() {

        _deletePreviousDOM();
        const taskContent = document.querySelector('#task-content');
        const taskList = document.createElement('ul');
        const taskBar = document.querySelector('#task-input-bar');

        taskList.id = "task-list";
        taskContent.insertBefore(taskList, taskBar);

        for (let i in _function__WEBPACK_IMPORTED_MODULE_0__.taskFunc.list) {
            const task = document.createElement('li');
            const checkbox = document.createElement('input');
            const text = document.createElement('p');
            const date = document.createElement('p');
            const edit = document.createElement('button');
            const del = document.createElement('button');

            checkbox.setAttribute('type', 'checkbox');

            task.id = `task-${[i]}`;
            edit.id = `task-edit-btn-${[i]}`;
            del.id = `task-cancel-btn-${[i]}`;

            task.setAttribute('data', `${i}`);
            checkbox.setAttribute('data', `${i}`);

            edit.setAttribute('data', `${i}`);
            del.setAttribute('data', `${i}`);

            taskList.classList.add('task');
            checkbox.classList.add("task-checkbox");
            text.classList.add('task-text');
            date.classList.add('task-date');
            edit.classList.add("task-edit-btn");
            del.classList.add("task-delete-btn");

            edit.classList.add('task-btn');
            del.classList.add('task-btn');

            text.textContent = `${_function__WEBPACK_IMPORTED_MODULE_0__.taskFunc.list[i].task}`;
            date.textContent = `${_function__WEBPACK_IMPORTED_MODULE_0__.taskFunc.list[i].date}`;
            edit.textContent = "edit";
            del.textContent = "X";

            taskList.appendChild(task);
            task.appendChild(checkbox);
            task.appendChild(text);
            task.appendChild(date);
            task.appendChild(edit);
            task.appendChild(del);
            _addEventListener();
            (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.displayAddTaskBtn)(true);
        } 
    }

    function _addEventListener() {

        if(!!document){
            const del = Array.from(document.querySelectorAll('.task-delete-btn'));
            const edit = Array.from(document.querySelectorAll('.task-edit-btn'));
            const checkboxes = Array.from(document.querySelectorAll('.task-checkbox'));
            del.forEach((ele)=> ele.addEventListener('click',_function__WEBPACK_IMPORTED_MODULE_0__.taskFunc.del));
            edit.forEach((ele)=> ele.addEventListener('click',editTask.layout));
            checkboxes.forEach((ele)=> ele.addEventListener('change',checkboxToggle));
        }
    }

    function checkboxToggle(){
        const taskNum= this.getAttribute('data');
        const taskText = document.querySelector(`#task-${taskNum}`).childNodes[1];
        if(this.checked){
            taskText.classList.add('strike');
        } 
        else {
            taskText.classList.remove('strike');
        }
    }
    return {
        layout,
        filterByListName
    }
})();


const editTask = (() => {

    let taskNumArray = [];

    function _deletePreviousDOM() {
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('task-input-bar');
    }

    function layout(event) {
        _deletePreviousDOM();

        const taskBar = document.createElement('div');
        const input = document.createElement('input');
        const date = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        input.setAttribute('type', 'text');
        input.setAttribute('value', 'default task');
        date.setAttribute('type', 'date');

        taskBar.id = "task-input-bar";
        input.id = "task-input";
        date.id = "dueDate";
        add.id = "add-task-input-btn";
        cancel.id = "cancel-task-input-btn";
        add.classList.add("task-btn");
        cancel.classList.add("task-btn");

        add.textContent = "Add";
        cancel.textContent = "X";

        taskBar.appendChild(input);
        taskBar.appendChild(date);
        taskBar.appendChild(add);
        taskBar.appendChild(cancel);
        taskBar.style.display = 'flex';

        const taskNum = document.querySelector(`#${event.target.id}`).getAttribute('data');
        const task = document.querySelector(`#task-${taskNum}`);
        const selectTaskList = document.querySelector('#task-list');
        //insert task input bar before selected edit list
        selectTaskList.insertBefore(taskBar, task);
        //display hidden task
        selectTaskList.childNodes.forEach((list) => list.style.display = "flex");
        //hide edited task
        task.style.display = "none";

        _previewTaskInfoInInputBar(taskNum);
        _addEventListener();
        getSelectedTaskNum(taskNum);
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.displayAddTaskBtn)(false);
    }

    const getSelectedTaskNum = (taskNum) => {
        taskNumArray.push(taskNum);
        return taskNumArray;
    }

    function _previewTaskInfoInInputBar(taskNum) {
        const task = document.querySelector(`#task-${taskNum}`);
        const taskBar = document.querySelector("#task-input-bar");
        taskBar.childNodes[0].value = task.childNodes[1].textContent;
        const y = task.childNodes[2].textContent.slice(0, 4);
        const m = task.childNodes[2].textContent.slice(5, 7);
        const d = task.childNodes[2].textContent.slice(8, 10);
        taskBar.childNodes[1].value = y + '-' + m + '-' + d;
    }

    function _addEventListener() {
        if (!!document) {
            document.querySelector('#add-task-input-btn').addEventListener('click', _function__WEBPACK_IMPORTED_MODULE_0__.taskFunc.update);
            document.querySelector('#cancel-task-input-btn').addEventListener('click', _function__WEBPACK_IMPORTED_MODULE_0__.taskFunc.del);
        }
    }

    return {
        layout,
        taskNum: taskNumArray
    }

})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdExheW91dC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAi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QUNBLFFBQVEsa0VBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELFFBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9GQUFvRixzREFBZTtBQUNuRyx1RkFBdUYsbURBQVk7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7OztVQy9PRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsNzAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NTBweCkge1xcbiAgICAjbWFpbi1jb250YWluZXJ7IFxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gMzByZW0gMWZyO1xcbiAgICB9XFxuICAgICN0YXNrLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6MzByZW07XFxuICAgIH1cXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDFmciAwLjAzcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIFxcXCJcXG4gICAgXFxcIm1haW4tY29udGFpbmVyXFxcIlxcbiAgICBcXFwiZm9vdGVyXFxcIiA7XFxuICAgIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuaDF7XFxuICAgIGdyaWQtYXJlYTpoZWFkZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNWZhYztcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMDAlO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG59XFxuc2VjdGlvbiNtYWluLWNvbnRhaW5lcnsgXFxuICAgIGdyaWQtYXJlYTptYWluLWNvbnRhaW5lcjsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTJyZW0gNTByZW0gMWZyOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIDUwcmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm5hdi1iYXIgdGFzay1jb250YWluZXIgcmlnaHQtY29sdW1uXFxcIjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuc2VjdGlvbiNuYXYtYmFye1xcbiAgICBncmlkLWFyZWE6bmF2LWJhcjsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGVkZWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgXFxufVxcblxcbnNlY3Rpb24jdGFzay1jb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTp0YXNrLWNvbnRhaW5lcjtcXG4gICAgcGFkZGluZzoycmVtO1xcbn1cXG5cXG5zZWN0aW9uI3JpZ2h0LWNvbHVtbntcXG4gICAgZ3JpZC1hcmVhOnJpZ2h0LWNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBlZGVkO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZSwgI3RpdGxlIHtcXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gMC4zcmVtO1xcbn1cXG4jcHJvamVjdHMtY29udGFpbmVye1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG59XFxuLm5hdi1pdGVte1xcbmp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuLm5hdi1pdGVtOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjYWM1YzU7XFxufVxcbi5uYXYtaXRlbSwjYWRkLXRhc2stYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRjZGM7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuI2hvbWUsICN0b2RheXtcXG4gICAgbWFyZ2luOjAuM3JlbSAwIDAuM3JlbSAwO1xcbiAgICBwYWRkaW5nOjAuOHJlbSAwIDAuOHJlbSAwLjVyZW07XFxufVxcblxcbiNwcm9qZWN0cy10aXRsZSwgZGl2I3Byb2plY3Rze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuZGl2I3Byb2plY3QtY29udGVudHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuZGl2I3Rhc2stY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NywgMjMxLCAwLjQwNSk7XFxuICAgIHBhZGRpbmc6IDAgMS4zcmVtO1xcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xcbn1cXG5cXG5idXR0b24jYWRkLXRhc2stYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjYWM1YzU7XFxufVxcbmJ1dHRvbi5hZGQtYnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDEyNCwgODIsIDU5KTtcXG4gICAgcGFkZGluZzowLjhyZW07XFxuICAgIG1hcmdpbjogMC4zcmVtIDA7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3Rhc2stbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI3Rhc2staW5wdXQtYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdGFzayxcXG4jZHVlRGF0ZSxcXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuLFxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG4sXFxuYnV0dG9uLnRhc2stYnRuLFxcbi5wcm9qZWN0LWJ0biwgXFxuaW5wdXRcXG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46MCAwLjFyZW0gMCAwLjFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jdGFzay1pbnB1dHtcXG4gICAgd2lkdGg6NTAlO1xcbn1cXG4jZGF0ZXtcXG4gICAgd2lkdGg6MzAlO1xcbn1cXG5idXR0b24udGFzay1idG57XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuLC5hZGQtc21hbGwtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG4sYnV0dG9uLnRhc2stZGVsZXRlLWJ0biwuZGVsLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDsgICBcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG46aG92ZXIsXFxuLnRhc2stZGVsZXRlLWJ0bjpob3ZlciwgLmRlbC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDEwMiwgMTAyKTtcXG59XFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0bjpob3ZlciwuYWRkLXNtYWxsLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTgyLCAxMDUpO1xcbn1cXG5idXR0b24udGFzay1lZGl0LWJ0bjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTgsIDIxMCk7XFxufVxcbnVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjIyLCAxNzksIDAuNDQpO1xcbn1cXG5saXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcbi50YXNrLWNoZWNrYm94e1xcbiAgICBsZWZ0OjA7XFxuICAgIHNpemU6M3JlbTtcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbi50YXNrLXRleHR7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXG59XFxuLnN0cmlrZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi50YXNrLWRhdGV7XFxuICAgIHdpZHRoOiA1LjVyZW07XFxuICAgIHJpZ2h0OjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxufVxcbi50YXNrLWRlbGV0ZS1idG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDowO1xcbn1cXG4jcHJvamVjdC1pbnB1dHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuLnByb2plY3R7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxufVxcbi5wcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOCwgMjA5LCAyMDksIDAuNTcpO1xcbiAgICBib3JkZXItcmFkaXVzOjVweDtcXG59XFxuLmVkaXQtcHJvamVjdHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA2MCU7XFxufVxcbiNwcm9qZWN0LWlucHV0e1xcbiAgICBib3JkZXI6c29saWQgMnB4O1xcbn1cXG5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTpmb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkZGNkYztcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLFFBQVE7SUFDUixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNDQUFzQztJQUMxQztJQUNBO0lBQ0EsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDOzs7YUFHUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLHNDQUFzQztJQUN0Qzt5Q0FDcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsNEJBQTRCO0FBQ2hDOztBQUVBOzs7Ozs7OztJQVFJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjtBQUNBOztJQUVJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkNBQTJDO0FBQy9DO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLE1BQU07SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixPQUFPO0FBQ1g7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDJDQUEyQztJQUMzQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDcwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcbip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODUwcHgpIHtcXG4gICAgI21haW4tY29udGFpbmVyeyBcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cmVtIDMwcmVtIDFmcjtcXG4gICAgfVxcbiAgICAjdGFzay1jb250YWluZXJ7XFxuICAgIHdpZHRoOjMwcmVtO1xcbiAgICB9XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxZnIgMC4wM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBcXFwiXFxuICAgIFxcXCJtYWluLWNvbnRhaW5lclxcXCJcXG4gICAgXFxcImZvb3RlclxcXCIgO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcbmgxe1xcbiAgICBncmlkLWFyZWE6aGVhZGVyO1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTVmYWM7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxufVxcbnNlY3Rpb24jbWFpbi1jb250YWluZXJ7IFxcbiAgICBncmlkLWFyZWE6bWFpbi1jb250YWluZXI7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEycmVtIDUwcmVtIDFmcjsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHJlbSA1MHJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJuYXYtYmFyIHRhc2stY29udGFpbmVyIHJpZ2h0LWNvbHVtblxcXCI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbnNlY3Rpb24jbmF2LWJhcntcXG4gICAgZ3JpZC1hcmVhOm5hdi1iYXI7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBlZGVkO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IFxcbn1cXG5cXG5zZWN0aW9uI3Rhc2stY29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6dGFzay1jb250YWluZXI7XFxuICAgIHBhZGRpbmc6MnJlbTtcXG59XFxuXFxuc2VjdGlvbiNyaWdodC1jb2x1bW57XFxuICAgIGdyaWQtYXJlYTpyaWdodC1jb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YwZWRlZDtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUsICN0aXRsZSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDAuM3JlbTtcXG59XFxuI3Byb2plY3RzLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcbi5uYXYtaXRlbXtcXG5qdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxufVxcbi5uYXYtaXRlbTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjNWM1O1xcbn1cXG4ubmF2LWl0ZW0sI2FkZC10YXNrLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRkY2RjO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbiNob21lLCAjdG9kYXl7XFxuICAgIG1hcmdpbjowLjNyZW0gMCAwLjNyZW0gMDtcXG4gICAgcGFkZGluZzowLjhyZW0gMCAwLjhyZW0gMC41cmVtO1xcbn1cXG5cXG4jcHJvamVjdHMtdGl0bGUsIGRpdiNwcm9qZWN0c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmRpdiNwcm9qZWN0LWNvbnRlbnR7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmRpdiN0YXNrLWNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDcsIDIzMSwgMC40MDUpO1xcbiAgICBwYWRkaW5nOiAwIDEuM3JlbTtcXG4gICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcXG59XFxuXFxuYnV0dG9uI2FkZC10YXNrLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjNWM1O1xcbn1cXG5idXR0b24uYWRkLWJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHJnYigxMjQsIDgyLCA1OSk7XFxuICAgIHBhZGRpbmc6MC44cmVtO1xcbiAgICBtYXJnaW46IDAuM3JlbSAwO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiN0YXNrLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbiN0YXNrLWlucHV0LWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3Rhc2ssXFxuI2R1ZURhdGUsXFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0bixcXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuLFxcbmJ1dHRvbi50YXNrLWJ0bixcXG4ucHJvamVjdC1idG4sIFxcbmlucHV0XFxue1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOjAgMC4xcmVtIDAgMC4xcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuI3Rhc2staW5wdXR7XFxuICAgIHdpZHRoOjUwJTtcXG59XFxuI2RhdGV7XFxuICAgIHdpZHRoOjMwJTtcXG59XFxuYnV0dG9uLnRhc2stYnRue1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0biwuYWRkLXNtYWxsLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuLGJ1dHRvbi50YXNrLWRlbGV0ZS1idG4sLmRlbC1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7ICAgXFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuOmhvdmVyLFxcbi50YXNrLWRlbGV0ZS1idG46aG92ZXIsIC5kZWwtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxMDIsIDEwMik7XFxufVxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG46aG92ZXIsLmFkZC1zbWFsbC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDE4MiwgMTA1KTtcXG59XFxuYnV0dG9uLnRhc2stZWRpdC1idG46aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE4LCAyMTApO1xcbn1cXG51bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDIyMiwgMTc5LCAwLjQ0KTtcXG59XFxubGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG4udGFzay1jaGVja2JveHtcXG4gICAgbGVmdDowO1xcbiAgICBzaXplOjNyZW07XFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4udGFzay10ZXh0e1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxufVxcbi5zdHJpa2V7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4udGFzay1kYXRle1xcbiAgICB3aWR0aDogNS41cmVtO1xcbiAgICByaWdodDo1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kZWxldGUtYnRue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6MDtcXG59XFxuI3Byb2plY3QtaW5wdXR7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcbi5wcm9qZWN0e1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG4ucHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDIwOSwgMjA5LCAwLjU3KTtcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxufVxcbi5lZGl0LXByb2plY3R7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNjAlO1xcbn1cXG4jcHJvamVjdC1pbnB1dHtcXG4gICAgYm9yZGVyOnNvbGlkIDJweDtcXG59XFxuZm9vdGVye1xcbiAgICBncmlkLWFyZWE6Zm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRjZGM7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJmdW5jdGlvbiBkZWxldGVFbGVtZW50QnlJZChJZCl7XG4gICAgaWYgKHR5cGVvZiBJZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudElEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7SWR9YCk7XG4gICAgICAgIGlmKGVsZW1lbnRJRCl7XG4gICAgICAgICAgICBlbGVtZW50SUQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUVsZW1lbnRCeUV2ZW50KGV2ZW50KXtcbiAgICBpZiAodHlwZW9mIGV2ZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBlbGVtZW50SUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtldmVudC50YXJnZXQuaWR9YCkucGFyZW50Tm9kZTtcbiAgICAgICAgaWYoZWxlbWVudElEKXtcbiAgICAgICAgICAgIGVsZW1lbnRJRC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZihldmVudC50YXJnZXQuaWQgPT09ICdjYW5jZWwtdGFzay1pbnB1dC1idG4nKXtcbiAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4odHJ1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWRkVGFza0J0bihzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBhZGRUYXNrYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWJ0bicpO1xuICAgIGlmIChzdGF0ZW1lbnQpIHtcbiAgICAgICAgYWRkVGFza2J0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfVxuICAgIGVsc2UgaWYgKCFzdGF0ZW1lbnQpIHtcbiAgICAgICAgYWRkVGFza2J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufVxuXG5leHBvcnR7XG4gICAgICBkZWxldGVFbGVtZW50QnlJZCxcbiAgICAgIGRlbGV0ZUVsZW1lbnRCeUV2ZW50LFxuICAgICAgZGlzcGxheUFkZFRhc2tCdG4sXG4gICAgfSIsImltcG9ydCB7IHRhc2tMaXN0LCBlZGl0VGFzayB9IGZyb20gXCIuL3Rhc2tMYXlvdXRcIjtcbmltcG9ydCB7IGRlbGV0ZUVsZW1lbnRCeUlkfSBmcm9tIFwiLi9ET01mdW5jdGlvblwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0TGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRUaXRsZSwgbmF2SW5mbyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrLCBkdWVEYXRlLCBsaXN0TmFtZSkge1xuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgICB0aGlzLmRhdGUgPSBkdWVEYXRlXG4gICAgdGhpcy5saXN0TmFtZSA9IGxpc3ROYW1lXG4gIH1cbn1cblxuY29uc3QgZ2V0VG9kYXlEYXRlID0gKCgpID0+IHtcbiAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgdmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgdmFyIG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICB2YXIgeXl5eSA9IFN0cmluZyh0b2RheS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIHsgZGQsIG1tLCB5eXl5IH07XG59KVxuXG5jb25zdCB0YXNrRnVuYyA9ICgoKSA9PiB7XG5cbiAgdmFyIHRhc2tBcnJheSA9IFtdO1xuICB2YXIgc2VsZWN0ZWRUYXNrQXJyYXkgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIGxldCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpLnZhbHVlO1xuICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICBsZXQgbGlzdE5hbWUgPSBuYXZJbmZvLm5hdltuYXZJbmZvLm5hdi5sZW5ndGgtMV07XG5cbiAgICAgICAgaWYgKCFkdWVEYXRlSW5wdXQpIHtcbiAgICAgICAgICBsZXQgdG9kYXkgPSBnZXRUb2RheURhdGUoKTtcbiAgICAgICAgICBkdWVEYXRlSW5wdXQgPSB0b2RheS55eXl5ICsgJy8nICsgKHRvZGF5Lm1tKSArICcvJyArIHRvZGF5LmRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGR1ZURhdGVJbnB1dCA9IGR1ZURhdGVJbnB1dC5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgIH1cblxuICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgdGFzayh0YXNrSW5wdXQsIGR1ZURhdGVJbnB1dCwgbGlzdE5hbWUpO1xuICAgICAgdGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICAgICAgdGFza0xpc3QubGF5b3V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgbGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0JykudmFsdWU7XG4gICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgIGR1ZURhdGVJbnB1dCA9IGR1ZURhdGVJbnB1dC5yZXBsYWNlKC8tL2csICcvJyk7XG5cbiAgICAgIGxldCBzZWxlY3RlZFRhc2tBcnJheSA9IGVkaXRUYXNrLnRhc2tOdW07XG4gICAgICBsZXQgY3VycmVudFNlbGVjdGlvbkluZGV4ID0gZWRpdFRhc2sudGFza051bS5sZW5ndGgtMTtcbiAgICAgIGxldCBjdXJyZW50VGFza051bSA9IHNlbGVjdGVkVGFza0FycmF5W2N1cnJlbnRTZWxlY3Rpb25JbmRleF07XG5cbiAgICAgIHRhc2tBcnJheVtjdXJyZW50VGFza051bV0udGFzayA9IHRhc2tJbnB1dDtcbiAgICAgIHRhc2tBcnJheVtjdXJyZW50VGFza051bV0uZGF0ZSA9IGR1ZURhdGVJbnB1dDtcbiAgICAgIHRhc2tMaXN0LmxheW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbChldmVudCkge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgY29uc3QgdGFza051bSA9IGV2ZW50LnBhdGhbMV0uZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICBkZWxldGVFbGVtZW50QnlJZChgdGFzay0ke3Rhc2tOdW19YCk7XG4gICAgICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tOdW0sMSk7XG4gICAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdDogdGFza0FycmF5LFxuICAgIHNlbGVjdGVkTGlzdCA6IHNlbGVjdGVkVGFza0FycmF5LFxuICAgIGFkZCxcbiAgICB1cGRhdGUsXG4gICAgZGVsXG4gIH1cblxufSkoKTtcblxuY29uc3QgcHJvamVjdEZ1bmMgPSAoKCk9PiB7XG5cbiAgdmFyIHByb2plY3RBcnJheT1bXTtcblxuICAgIGZ1bmN0aW9uIGFkZCgpe1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuICAgICAgcHJvamVjdEFycmF5LnB1c2goaW5wdXQpO1xuICAgICAgbmF2SW5mby51cGRhdGVMaXN0KGlucHV0KTtcbiAgICAgIHByb2plY3RMaXN0LmxheW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpe1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuICAgICAgbmF2SW5mby5lZGl0TGlzdChpbnB1dCk7XG4gICAgICBsZXQgbGFzdEluZGV4ID0gbmF2SW5mby5wcm9qZWN0SW5kZXhBcnJbbmF2SW5mby5wcm9qZWN0SW5kZXhBcnIubGVuZ3RoLTFdO1xuICAgICAgcHJvamVjdEFycmF5W2xhc3RJbmRleF09aW5wdXQ7XG4gICAgICBnZXRUaXRsZShpbnB1dCk7XG4gICAgICBkZWxldGVFbGVtZW50QnlJZCgncHJvamVjdC1lZGl0LWJ0bicpO1xuICAgICAgcHJvamVjdExpc3QubGF5b3V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsKCl7XG4gICAgICBsZXQgbGFzdEluZGV4ID0gbmF2SW5mby5wcm9qZWN0SW5kZXhBcnJbbmF2SW5mby5wcm9qZWN0SW5kZXhBcnIubGVuZ3RoLTFdO1xuICAgICAgcHJvamVjdEFycmF5LnNwbGljZShsYXN0SW5kZXgsMSk7XG4gICAgICBuYXZJbmZvLmRlbExpc3QoKTtcbiAgICAgIC8vXG4gICAgICBwcm9qZWN0TGlzdC5sYXlvdXQoKTtcbiAgICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsaXN0OiBwcm9qZWN0QXJyYXksXG4gICAgYWRkLFxuICAgIHVwZGF0ZSxcbiAgICBkZWxcbiAgfVxuXG59KSgpO1xuZXhwb3J0IHsgZ2V0VG9kYXlEYXRlLCB0YXNrRnVuYywgcHJvamVjdEZ1bmMgfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdGFza0lucHV0LCB0YXNrTGlzdCB9IGZyb20gJy4vdGFza0xheW91dC5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0SW5wdXQsIGVkaXRQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0TGF5b3V0JztcbmltcG9ydCB7IGRpc3BsYXlBZGRUYXNrQnRuLCBkZWxldGVFbGVtZW50QnlJZCB9IGZyb20gJy4vRE9NZnVuY3Rpb24nO1xuaW1wb3J0IHsgdGFza0Z1bmMgfSBmcm9tICcuL2Z1bmN0aW9uJztcblxuXG5jb25zdCBnZXRUaXRsZSA9ICh0ZXh0KSA9PiB7XG4gICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBgJHt0ZXh0fWA7XG4gICAgdGFza0NvbnRlbnQucHJlcGVuZCh0aXRsZSk7XG59XG5cbmNvbnN0IG5hdkluZm8gPSAoKCkgPT4ge1xuICAgIHZhciBsaXN0ID0gWydob21lJywndG9kYXknXTtcbiAgICB2YXIgc2VsZWN0ZWRQcm9qZWN0ID0gW107XG4gICAgdmFyIHNlbGVjdGVkTmF2SXRlbSA9IFtdO1xuICAgIHZhciBuYXZOdW0gPSBbXTsgXG4gICAgdmFyIHByb051bSA9IFtdO1xuICAgIHZhciBsYXN0U2VsZWN0ZWROdW07IFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGlzdChpbnB1dCl7XG4gICAgICAgIGxpc3QucHVzaChpbnB1dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWRpdExpc3QoaW5wdXQpe1xuICAgICAgIGxpc3RbbGFzdFNlbGVjdGVkTnVtXSA9IGlucHV0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWxMaXN0KCl7XG4gICAgICAgIGxpc3Quc3BsaWNlKGxhc3RTZWxlY3RlZE51bSwxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3QoZXZlbnQpe1xuICAgICAgICBpZiAoZXZlbnQpe1xuICAgICAgICBsZXQgbnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmlkfWApLmdldEF0dHJpYnV0ZSgnbmF2Jyk7XG4gICAgICAgIG5hdk51bS5wdXNoKG51bSk7XG4gICAgICAgIGxhc3RTZWxlY3RlZE51bSA9IG5hdk51bVtuYXZOdW0ubGVuZ3RoLTFdO1xuICAgICAgICBfZ2V0Q3VycmVudE5hdkl0ZW0obGFzdFNlbGVjdGVkTnVtKTtcbiAgICAgICAgX2dldEN1cnJlbnRQcm9qZWN0KGxhc3RTZWxlY3RlZE51bSk7XG4gICAgICAgIGdldFByb2plY3RJbmRleChsYXN0U2VsZWN0ZWROdW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9nZXRDdXJyZW50UHJvamVjdChudW0pe1xuICAgICAgICBpZihudW0gPiAxKXtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gbGlzdFtudW1dO1xuICAgICAgICBzZWxlY3RlZFByb2plY3QucHVzaChwcm9qZWN0TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdEluZGV4KG51bSl7XG4gICAgICAgIGlmKG51bSA+IDEpeyBcbiAgICAgICAgbnVtPW51bS0yO1xuICAgICAgICBwcm9OdW0ucHVzaChudW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9nZXRDdXJyZW50TmF2SXRlbShudW0pe1xuICAgICAgICBsZXQgbmF2SXRlbSA9IGxpc3RbbnVtXTtcbiAgICAgICAgc2VsZWN0ZWROYXZJdGVtLnB1c2gobmF2SXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlTGlzdCxcbiAgICAgICAgZWRpdExpc3QsXG4gICAgICAgIGRlbExpc3QsXG4gICAgICAgIHNlbGVjdCxcbiAgICAgICAgcHJvamVjdDogc2VsZWN0ZWRQcm9qZWN0LFxuICAgICAgICBuYXY6IHNlbGVjdGVkTmF2SXRlbSxcbiAgICAgICAgbGlzdDogbGlzdCxcbiAgICAgICAgcHJvamVjdEluZGV4QXJyOiBwcm9OdW1cbiAgICB9ICBcbn0pKCk7XG5cbmNvbnN0IGxvYWRQYWdlID0gKCgpID0+IHsgIFxuXG5jb25zdCBkZWZhdWx0RGlzcGxheSA9ICgpID0+IHtcbiAgIGRpc3BsYXkudG9kYXlUYXNrKCk7XG59XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgaWYoISFkb2N1bWVudCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5LmFsbFRhc2spO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXkudG9kYXlUYXNrKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdElucHV0LmxheW91dCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tJbnB1dC5sYXlvdXQpO1xuICAgICAgICB9IFxuIH1cblxuZGVmYXVsdERpc3BsYXkoKTtcbmFkZEV2ZW50TGlzdGVuZXIoKTtcbn0pO1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIGFsbFRhc2sgKGV2ZW50KSB7XG4gICAgICAgIGdldFRpdGxlKCdIb21lJyk7XG4gICAgICAgIG5hdkluZm8uc2VsZWN0KGV2ZW50KTtcbiAgICAgICAgLy90YXNrRnVuYy5zZWxlY3RlZExpc3QgPSB0YXNrRnVuYy5saXN0LmZpbHRlcigobGlzdCk9PiBsaXN0KSk7XG4gICAgICAgIHRhc2tMaXN0LmxheW91dCgpO1xuICAgICAgICBkaXNwbGF5QWRkVGFza0J0bihmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9kYXlUYXNrIChldmVudCkge1xuICAgICAgICBnZXRUaXRsZSgnVG9kYXknKTtcbiAgICAgICAgbmF2SW5mby5zZWxlY3QoZXZlbnQpO1xuICAgICAgICB0YXNrTGlzdC5sYXlvdXQoKTtcbiAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4odHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFza0J5TmF2SXRlbSAoZXZlbnQpe1xuICAgICAgICBjb25zdCBzZWxlY3RlZE5hdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuaWR9YCk7XG4gICAgICAgIG5hdkluZm8uc2VsZWN0KGV2ZW50KTtcbiAgICAgICAgZ2V0VGl0bGUoc2VsZWN0ZWROYXZJdGVtLnRleHRDb250ZW50KTtcbiAgICAgICAgdGFza0xpc3QubGF5b3V0KCk7XG4gICAgICAgIGVkaXRQcm9qZWN0LmFkZEJ0bigpO1xuICAgICAgICBkaXNwbGF5QWRkVGFza0J0bih0cnVlKTtcbiAgICB9XG5cbnJldHVybntcbiAgICBhbGxUYXNrLFxuICAgIHRvZGF5VGFzayxcbiAgICB0YXNrQnlOYXZJdGVtXG59XG59KSgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsbG9hZFBhZ2UpO1xuXG5leHBvcnR7IGRpc3BsYXksIG5hdkluZm8sIGdldFRpdGxlIH1cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgcHJvamVjdEZ1bmMgfSBmcm9tIFwiLi9mdW5jdGlvblwiO1xuaW1wb3J0IHsgZGlzcGxheSwgbmF2SW5mbyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBkZWxldGVFbGVtZW50QnlFdmVudCwgZGVsZXRlRWxlbWVudEJ5SWQgfSBmcm9tICcuL0RPTWZ1bmN0aW9uJztcblxuXG5jb25zdCBwcm9qZWN0SW5wdXQgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByZXZpb3VzRE9NKCkge1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgncHJvamVjdC1iYXInKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgICAgIF9kZWxldGVQcmV2aW91c0RPTSgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBwcm9qZWN0QmFyLmlkID0gXCJwcm9qZWN0LWJhclwiO1xuICAgICAgICBpbnB1dC5pZCA9IFwicHJvamVjdC1pbnB1dFwiO1xuICAgICAgICBhZGQuaWQgPSBcImFkZC1wcm9qZWN0LWlucHV0LWJ0blwiO1xuICAgICAgICBjYW5jZWwuaWQgPSBcImNhbmNlbC1wcm9qZWN0LWlucHV0LWJ0blwiO1xuICAgICAgICBhZGQuY2xhc3NMaXN0LmFkZCgnYWRkLXNtYWxsLWJ0bicpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuICAgICAgICBhZGQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdEZWZhdWx0IHByb2plY3QnKTtcblxuICAgICAgICBhZGQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgICAgICBwcm9qZWN0QmFyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEJhcik7XG4gICAgICAgIHByb2plY3RCYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGFkZCk7XG4gICAgICAgIHByb2plY3RCYXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1pbnB1dC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RGdW5jLmFkZCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXByb2plY3QtaW5wdXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuYy5kZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0XG4gICAgfVxufSkoKTtcblxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250ZW50Jyk7XG5cbiAgICBmdW5jdGlvbiBsYXlvdXQoKSB7XG5cbiAgICAgICAgX2RlbGV0ZVByZXZpb3VzRE9NKCk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gcHJvamVjdEZ1bmMubGlzdCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBwcm9qZWN0LmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdwcm9qZWN0JywgYCR7aX1gKTtcbiAgICAgICAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCduYW1lJywgcHJvamVjdEZ1bmMubGlzdFtpXSk7XG5cbiAgICAgICAgICAgIGxldCBuYXZDb2RlID0gTnVtYmVyKGkpICsgMjtcbiAgICAgICAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCduYXYnLGAke25hdkNvZGV9YCk7XG5cbiAgICAgICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0RnVuYy5saXN0W2ldO1xuICAgICAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJldmlvdXNET00oKSB7XG4gICAgICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCdwcm9qZWN0LWJhcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKSk7XG4gICAgICAgIHByb2plY3RMaXN0LmZvckVhY2goKGVsZSkgPT4gZWxlLnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChlbGUpID0+IGVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGlzcGxheS50YXNrQnlOYXZJdGVtKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0XG4gICAgfVxufSkoKTtcblxuY29uc3QgZWRpdFByb2plY3QgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gYWRkQnRuKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXQudGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICAgICAgZWRpdC5pZCA9IFwicHJvamVjdC1lZGl0LWJ0blwiO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG4gICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0Jyk7XG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGVkaXQpO1xuXG5cbiAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbC50ZXh0Q29udGVudCA9IFwiRGVsXCI7XG4gICAgICAgIGRlbC5pZCA9IFwicHJvamVjdC1kZWwtYnRuXCI7XG4gICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpO1xuICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0Jyk7XG5cbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQoZGVsKTtcblxuICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lclRvQnRuKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF5b3V0KCkge1xuICAgICAgICBfZGVsZXRlUHJldmlvdXNET00oKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIHByb2plY3RCYXIuaWQgPSBcInByb2plY3QtYmFyXCI7XG4gICAgICAgIGlucHV0LmlkID0gXCJwcm9qZWN0LWlucHV0XCI7XG4gICAgICAgIGFkZC5pZCA9IFwiYWRkLXByb2plY3QtaW5wdXQtYnRuXCI7XG4gICAgICAgIGNhbmNlbC5pZCA9IFwiY2FuY2VsLXByb2plY3QtaW5wdXQtYnRuXCI7XG4gICAgICAgIGFkZC5jbGFzc0xpc3QuYWRkKCdhZGQtc21hbGwtYnRuJyk7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG4gICAgICAgIGFkZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXG4gICAgICAgIGxldCBsYXN0U2VsZWN0ZWRQcm9qZWN0ID0gbmF2SW5mby5wcm9qZWN0W25hdkluZm8ucHJvamVjdC5sZW5ndGgtMV07XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtsYXN0U2VsZWN0ZWRQcm9qZWN0fWApO1xuXG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgICAgIHByb2plY3RCYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChwcm9qZWN0QmFyKTtcbiAgICAgICAgcHJvamVjdEJhci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIHByb2plY3RCYXIuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICAgICAgcHJvamVjdEJhci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVyVG9JbnB1dEJhcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9kZWxldGVQcmV2aW91c0RPTSgpIHtcbiAgICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3Byb2plY3QtYmFyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJUb0lucHV0QmFyKCkge1xuICAgICAgICBjb25zdCBhZGQgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWlucHV0LWJ0bicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLXByb2plY3QtaW5wdXQtYnRuJyk7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RGdW5jLnVwZGF0ZSk7XG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUVsZW1lbnRCeUV2ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lclRvQnRuKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1lZGl0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGF5b3V0KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVsLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEZ1bmMuZGVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAgYWRkQnRuLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7ICBwcm9qZWN0SW5wdXQsIHByb2plY3RMaXN0LCBlZGl0UHJvamVjdCB9IiwiaW1wb3J0IHsgdGFza0Z1bmMgfSBmcm9tIFwiLi9mdW5jdGlvblwiXG5cbmltcG9ydCB7XG4gICAgZGVsZXRlRWxlbWVudEJ5SWQsXG4gICAgZGVsZXRlRWxlbWVudEJ5RXZlbnQsXG4gICAgZGlzcGxheUFkZFRhc2tCdG5cbn0gZnJvbSAnLi9ET01mdW5jdGlvbi5qcydcblxuXG5jb25zdCB0YXNrSW5wdXQgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByZXZpb3VzRE9NKCkge1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgndGFzay1pbnB1dC1iYXInKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgICAgIF9kZWxldGVQcmV2aW91c0RPTSgpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY29udGVudCcpO1xuICAgICAgICBjb25zdCB0YXNrQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2RlZmF1bHQgdGFzaycpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG5cbiAgICAgICAgdGFza0Jhci5pZCA9IFwidGFzay1pbnB1dC1iYXJcIjtcbiAgICAgICAgaW5wdXQuaWQgPSBcInRhc2staW5wdXRcIjtcbiAgICAgICAgZGF0ZS5pZCA9IFwiZHVlRGF0ZVwiO1xuICAgICAgICBhZGQuaWQgPSBcImFkZC10YXNrLWlucHV0LWJ0blwiO1xuICAgICAgICBjYW5jZWwuaWQgPSBcImNhbmNlbC10YXNrLWlucHV0LWJ0blwiO1xuICAgICAgICBhZGQuY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIpO1xuXG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGFkZCk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kKHRhc2tCYXIpO1xuXG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIGRpc3BsYXlBZGRUYXNrQnRuKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1pbnB1dC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tGdW5jLmFkZCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXRhc2staW5wdXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVFbGVtZW50QnlFdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsYXlvdXRcbiAgICB9XG59KSgpO1xuXG5jb25zdCB0YXNrTGlzdCA9ICgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJldmlvdXNET00oKSB7XG4gICAgICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcbiAgICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQtYmFyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyQnlMaXN0TmFtZShsaXN0TmFtZSl7XG4gICAgICAgIHJldHVybiBsaXN0TmFtZSA9PSBgJHtsaXN0TmFtZX1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxheW91dCgpIHtcblxuICAgICAgICBfZGVsZXRlUHJldmlvdXNET00oKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgdGFza0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWlucHV0LWJhcicpO1xuXG4gICAgICAgIHRhc2tMaXN0LmlkID0gXCJ0YXNrLWxpc3RcIjtcbiAgICAgICAgdGFza0NvbnRlbnQuaW5zZXJ0QmVmb3JlKHRhc2tMaXN0LCB0YXNrQmFyKTtcblxuICAgICAgICBmb3IgKGxldCBpIGluIHRhc2tGdW5jLmxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cbiAgICAgICAgICAgIHRhc2suaWQgPSBgdGFzay0ke1tpXX1gO1xuICAgICAgICAgICAgZWRpdC5pZCA9IGB0YXNrLWVkaXQtYnRuLSR7W2ldfWA7XG4gICAgICAgICAgICBkZWwuaWQgPSBgdGFzay1jYW5jZWwtYnRuLSR7W2ldfWA7XG5cbiAgICAgICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnZGF0YScsIGAke2l9YCk7XG5cbiAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKTtcbiAgICAgICAgICAgIGRlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBgJHtpfWApO1xuXG4gICAgICAgICAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0Jyk7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKFwidGFzay1lZGl0LWJ0blwiKTtcbiAgICAgICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtYnRuXCIpO1xuXG4gICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnRuJyk7XG4gICAgICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgndGFzay1idG4nKTtcblxuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGAke3Rhc2tGdW5jLmxpc3RbaV0udGFza31gO1xuICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2tGdW5jLmxpc3RbaV0uZGF0ZX1gO1xuICAgICAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuICAgICAgICAgICAgZGVsLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4odHJ1ZSk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIoKSB7XG5cbiAgICAgICAgaWYoISFkb2N1bWVudCl7XG4gICAgICAgICAgICBjb25zdCBkZWwgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWRlbGV0ZS1idG4nKSk7XG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1lZGl0LWJ0bicpKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNoZWNrYm94JykpO1xuICAgICAgICAgICAgZGVsLmZvckVhY2goKGVsZSk9PiBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRhc2tGdW5jLmRlbCkpO1xuICAgICAgICAgICAgZWRpdC5mb3JFYWNoKChlbGUpPT4gZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlZGl0VGFzay5sYXlvdXQpKTtcbiAgICAgICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoZWxlKT0+IGVsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLGNoZWNrYm94VG9nZ2xlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja2JveFRvZ2dsZSgpe1xuICAgICAgICBjb25zdCB0YXNrTnVtPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza051bX1gKS5jaGlsZE5vZGVzWzFdO1xuICAgICAgICBpZih0aGlzLmNoZWNrZWQpe1xuICAgICAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LmFkZCgnc3RyaWtlJyk7XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICBmaWx0ZXJCeUxpc3ROYW1lXG4gICAgfVxufSkoKTtcblxuXG5jb25zdCBlZGl0VGFzayA9ICgoKSA9PiB7XG5cbiAgICBsZXQgdGFza051bUFycmF5ID0gW107XG5cbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJldmlvdXNET00oKSB7XG4gICAgICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCd0YXNrLWlucHV0LWJhcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxheW91dChldmVudCkge1xuICAgICAgICBfZGVsZXRlUHJldmlvdXNET00oKTtcblxuICAgICAgICBjb25zdCB0YXNrQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2RlZmF1bHQgdGFzaycpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG5cbiAgICAgICAgdGFza0Jhci5pZCA9IFwidGFzay1pbnB1dC1iYXJcIjtcbiAgICAgICAgaW5wdXQuaWQgPSBcInRhc2staW5wdXRcIjtcbiAgICAgICAgZGF0ZS5pZCA9IFwiZHVlRGF0ZVwiO1xuICAgICAgICBhZGQuaWQgPSBcImFkZC10YXNrLWlucHV0LWJ0blwiO1xuICAgICAgICBjYW5jZWwuaWQgPSBcImNhbmNlbC10YXNrLWlucHV0LWJ0blwiO1xuICAgICAgICBhZGQuY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIpO1xuXG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGFkZCk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICAgICAgdGFza0Jhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgICAgIGNvbnN0IHRhc2tOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuaWR9YCkuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tOdW19YCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdFRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICAgICAgICAvL2luc2VydCB0YXNrIGlucHV0IGJhciBiZWZvcmUgc2VsZWN0ZWQgZWRpdCBsaXN0XG4gICAgICAgIHNlbGVjdFRhc2tMaXN0Lmluc2VydEJlZm9yZSh0YXNrQmFyLCB0YXNrKTtcbiAgICAgICAgLy9kaXNwbGF5IGhpZGRlbiB0YXNrXG4gICAgICAgIHNlbGVjdFRhc2tMaXN0LmNoaWxkTm9kZXMuZm9yRWFjaCgobGlzdCkgPT4gbGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpO1xuICAgICAgICAvL2hpZGUgZWRpdGVkIHRhc2tcbiAgICAgICAgdGFzay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgX3ByZXZpZXdUYXNrSW5mb0luSW5wdXRCYXIodGFza051bSk7XG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIGdldFNlbGVjdGVkVGFza051bSh0YXNrTnVtKTtcbiAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4oZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNlbGVjdGVkVGFza051bSA9ICh0YXNrTnVtKSA9PiB7XG4gICAgICAgIHRhc2tOdW1BcnJheS5wdXNoKHRhc2tOdW0pO1xuICAgICAgICByZXR1cm4gdGFza051bUFycmF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wcmV2aWV3VGFza0luZm9JbklucHV0QmFyKHRhc2tOdW0pIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza051bX1gKTtcbiAgICAgICAgY29uc3QgdGFza0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1pbnB1dC1iYXJcIik7XG4gICAgICAgIHRhc2tCYXIuY2hpbGROb2Rlc1swXS52YWx1ZSA9IHRhc2suY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgeSA9IHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudC5zbGljZSgwLCA0KTtcbiAgICAgICAgY29uc3QgbSA9IHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudC5zbGljZSg1LCA3KTtcbiAgICAgICAgY29uc3QgZCA9IHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudC5zbGljZSg4LCAxMCk7XG4gICAgICAgIHRhc2tCYXIuY2hpbGROb2Rlc1sxXS52YWx1ZSA9IHkgKyAnLScgKyBtICsgJy0nICsgZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1pbnB1dC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tGdW5jLnVwZGF0ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXRhc2staW5wdXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrRnVuYy5kZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB0YXNrTnVtOiB0YXNrTnVtQXJyYXlcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7IHRhc2tJbnB1dCwgdGFza0xpc3QsIGVkaXRUYXNrIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9