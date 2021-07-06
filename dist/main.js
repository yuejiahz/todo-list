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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin:0;\n    font-family: 'Roboto', sans-serif;\n}\n@media screen and (max-width:850px) {\n    #main-container{ \n        display: grid;\n        grid-template-columns: 15rem 30rem 1fr;\n    }\n    #task-container{\n    width:30rem;\n    }\n}\n\nmain{\n    display: grid;\n    grid-template-rows: 3rem 1fr 0.03rem;\n    grid-template-areas:\n    \"header \"\n    \"main-container\"\n    \"footer\" ;\n    height:100vh;\n}\n\nh1{\n    grid-area:header;\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    text-align: center;\n    font-size: 300%;\n    line-height: 3rem;\n}\nsection#main-container{ \n    grid-area:main-container; \n    display: grid;\n    /* grid-template-columns: 12rem 50rem 1fr; */\n    grid-template-columns: 10rem 50rem 1fr;\n    grid-template-areas:\n    \"nav-bar task-container right-column\";\n    overflow-y: auto;\n}\n\nsection#nav-bar{\n    grid-area:nav-bar;  \n    background-color:#f0eded;\n    font-family: 'Roboto', sans-serif; \n}\n\nsection#task-container{\n    grid-area:task-container;\n    padding:2rem;\n}\n\nsection#right-column{\n    grid-area:right-column;\n    background-color:#f0eded;\n}\n\n#project-title, #title {\n    padding: 1rem 0 1rem 0.3rem;\n}\n#projects-container{\n    padding-left: 10%;\n}\n.nav-item{\njustify-self: stretch;\n}\n.nav-item:hover{\n    background-color:#cac5c5;\n}\n.nav-item,#add-task-btn{\n    background-color:#dddcdc;\n    margin-left: 5%;\n}\n\n#home, #today{\n    margin:0.3rem 0 0.3rem 0;\n    padding:0.8rem 0 0.8rem 0.5rem;\n}\n\n#projects-title, div#projects{\n    background-color: transparent;\n}\n\ndiv#project-content{\n    overflow-y: auto;\n}\n\ndiv#task-content{\n    background-color: rgba(255, 247, 231, 0.405);\n    padding: 0 1.3rem;\n    overflow-x: visible;\n}\n\nbutton#add-task-btn:hover{\n    background-color:#cac5c5;\n}\nbutton.add-btn{\n    border-radius: 20px;\n    color: rgb(124, 82, 59);\n    padding:0.8rem;\n    margin: 0.3rem 0;\n    width:90%;\n    border: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n\n#task-list{\n    display: flex;\n}\n#task-input-bar{\n    background-color: rgb(65, 65, 65);\n    height: 2rem;\n    padding: 0.5rem;\n    display: flex;\n    width: 95%;\n    align-content: space-between;\n}\n\n#task,\n#dueDate,\nbutton#add-task-input-btn,\nbutton#cancel-task-input-btn,\nbutton.task-btn,\n.project-btn, \ninput\n{\n    border-radius: 5px;\n    border: none;\n    margin:0 0.1rem 0 0.1rem;\n    line-height: 2rem;\n}\n\n#task-input{\n    width:50%;\n}\n#date{\n    width:30%;\n}\nbutton.task-btn{\n    font-weight: bold;\n}\n\nbutton#add-task-input-btn,.add-small-btn{\n    background-color: lightgreen;\n    flex-grow: 1;\n}\nbutton#cancel-task-input-btn,button.task-delete-btn,.del-btn{\n    background-color: lightcoral;   \n    flex-grow: 0.1;\n}\nbutton#cancel-task-input-btn:hover,\n.task-delete-btn:hover{\n    background-color: rgb(194, 102, 102);\n}\nbutton#add-task-input-btn:hover{\n    background-color: rgb(105, 182, 105);\n}\nbutton.task-edit-btn:hover{\nbackground-color: rgb(214, 218, 210);\n}\nul{\n    display: flex;\n    flex-direction: column;\n    background-color: rgba(245, 222, 179, 0.44);\n}\nli{\n    display: flex;\n    padding: 1rem;\n    line-height: 2rem;\n    width: 95%;\n}\n.task-checkbox{\n    left:0;\n    size:3rem;\n    padding:1rem;\n    margin: auto;\n}\n.task-text{\n    flex-grow: 1;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-date{\n    width: 5.5rem;\n    right:5rem;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-delete-btn{\n    text-align: center;\n    position: relative;\n    right:0;\n}\n#project-input{\n    width: 60%;\n}\n.project{\n    line-height: 2rem;\n    padding: 0.2rem;\n}\n.project:hover{\n    background-color: rgba(208, 209, 209, 0.57);\n    border-radius:5px;\n}\n.edit-project{\n    position: relative;\n    left: 60%;\n}\n#project-input{\n    border:solid 2px;\n}\nfooter{\n    grid-area:footer;\n    background-color:#dddcdc;\n    align-self: stretch;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,QAAQ;IACR,iCAAiC;AACrC;AACA;IACI;QACI,aAAa;QACb,sCAAsC;IAC1C;IACA;IACA,WAAW;IACX;AACJ;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC;;;aAGS;IACT,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,uCAAuC;IACvC,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,4CAA4C;IAC5C,sCAAsC;IACtC;yCACqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI,iBAAiB;AACrB;AACA;AACA,qBAAqB;AACrB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,4CAA4C;IAC5C,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,gBAAgB;IAChB,SAAS;IACT,YAAY;IACZ,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;IACf,aAAa;IACb,UAAU;IACV,4BAA4B;AAChC;;AAEA;;;;;;;;IAQI,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;IACxB,iBAAiB;AACrB;;AAEA;IACI,SAAS;AACb;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;AAChB;AACA;IACI,4BAA4B;IAC5B,cAAc;AAClB;AACA;;IAEI,oCAAoC;AACxC;AACA;IACI,oCAAoC;AACxC;AACA;AACA,oCAAoC;AACpC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,2CAA2C;AAC/C;AACA;IACI,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,UAAU;AACd;AACA;IACI,MAAM;IACN,SAAS;IACT,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,UAAU;IACV,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;AACX;AACA;IACI,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,2CAA2C;IAC3C,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&family=Roboto&display=swap');\n*{\n    margin:0;\n    font-family: 'Roboto', sans-serif;\n}\n@media screen and (max-width:850px) {\n    #main-container{ \n        display: grid;\n        grid-template-columns: 15rem 30rem 1fr;\n    }\n    #task-container{\n    width:30rem;\n    }\n}\n\nmain{\n    display: grid;\n    grid-template-rows: 3rem 1fr 0.03rem;\n    grid-template-areas:\n    \"header \"\n    \"main-container\"\n    \"footer\" ;\n    height:100vh;\n}\n\nh1{\n    grid-area:header;\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    text-align: center;\n    font-size: 300%;\n    line-height: 3rem;\n}\nsection#main-container{ \n    grid-area:main-container; \n    display: grid;\n    /* grid-template-columns: 12rem 50rem 1fr; */\n    grid-template-columns: 10rem 50rem 1fr;\n    grid-template-areas:\n    \"nav-bar task-container right-column\";\n    overflow-y: auto;\n}\n\nsection#nav-bar{\n    grid-area:nav-bar;  \n    background-color:#f0eded;\n    font-family: 'Roboto', sans-serif; \n}\n\nsection#task-container{\n    grid-area:task-container;\n    padding:2rem;\n}\n\nsection#right-column{\n    grid-area:right-column;\n    background-color:#f0eded;\n}\n\n#project-title, #title {\n    padding: 1rem 0 1rem 0.3rem;\n}\n#projects-container{\n    padding-left: 10%;\n}\n.nav-item{\njustify-self: stretch;\n}\n.nav-item:hover{\n    background-color:#cac5c5;\n}\n.nav-item,#add-task-btn{\n    background-color:#dddcdc;\n    margin-left: 5%;\n}\n\n#home, #today{\n    margin:0.3rem 0 0.3rem 0;\n    padding:0.8rem 0 0.8rem 0.5rem;\n}\n\n#projects-title, div#projects{\n    background-color: transparent;\n}\n\ndiv#project-content{\n    overflow-y: auto;\n}\n\ndiv#task-content{\n    background-color: rgba(255, 247, 231, 0.405);\n    padding: 0 1.3rem;\n    overflow-x: visible;\n}\n\nbutton#add-task-btn:hover{\n    background-color:#cac5c5;\n}\nbutton.add-btn{\n    border-radius: 20px;\n    color: rgb(124, 82, 59);\n    padding:0.8rem;\n    margin: 0.3rem 0;\n    width:90%;\n    border: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n\n#task-list{\n    display: flex;\n}\n#task-input-bar{\n    background-color: rgb(65, 65, 65);\n    height: 2rem;\n    padding: 0.5rem;\n    display: flex;\n    width: 95%;\n    align-content: space-between;\n}\n\n#task,\n#dueDate,\nbutton#add-task-input-btn,\nbutton#cancel-task-input-btn,\nbutton.task-btn,\n.project-btn, \ninput\n{\n    border-radius: 5px;\n    border: none;\n    margin:0 0.1rem 0 0.1rem;\n    line-height: 2rem;\n}\n\n#task-input{\n    width:50%;\n}\n#date{\n    width:30%;\n}\nbutton.task-btn{\n    font-weight: bold;\n}\n\nbutton#add-task-input-btn,.add-small-btn{\n    background-color: lightgreen;\n    flex-grow: 1;\n}\nbutton#cancel-task-input-btn,button.task-delete-btn,.del-btn{\n    background-color: lightcoral;   \n    flex-grow: 0.1;\n}\nbutton#cancel-task-input-btn:hover,\n.task-delete-btn:hover{\n    background-color: rgb(194, 102, 102);\n}\nbutton#add-task-input-btn:hover{\n    background-color: rgb(105, 182, 105);\n}\nbutton.task-edit-btn:hover{\nbackground-color: rgb(214, 218, 210);\n}\nul{\n    display: flex;\n    flex-direction: column;\n    background-color: rgba(245, 222, 179, 0.44);\n}\nli{\n    display: flex;\n    padding: 1rem;\n    line-height: 2rem;\n    width: 95%;\n}\n.task-checkbox{\n    left:0;\n    size:3rem;\n    padding:1rem;\n    margin: auto;\n}\n.task-text{\n    flex-grow: 1;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-date{\n    width: 5.5rem;\n    right:5rem;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-delete-btn{\n    text-align: center;\n    position: relative;\n    right:0;\n}\n#project-input{\n    width: 60%;\n}\n.project{\n    line-height: 2rem;\n    padding: 0.2rem;\n}\n.project:hover{\n    background-color: rgba(208, 209, 209, 0.57);\n    border-radius:5px;\n}\n.edit-project{\n    position: relative;\n    left: 60%;\n}\n#project-input{\n    border:solid 2px;\n}\nfooter{\n    grid-area:footer;\n    background-color:#dddcdc;\n    align-self: stretch;\n}"],"sourceRoot":""}]);
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
      ///remember to remove all task
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
        let num = document.querySelector(`#${event.target.id}`).getAttribute('nav');
        navNum.push(num);
        lastSelectedNum = navNum[navNum.length-1];
        _getCurrentNavItem(lastSelectedNum);
        _getCurrentProject(lastSelectedNum);
        getProjectIndex(lastSelectedNum);
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

const defaultTitle = () => {
   getTitle('Home');
   (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_3__.displayAddTaskBtn)(false);
}

const addEventListener = () => {
    if(!!document){
        document.querySelector('#home').addEventListener('click', display.allTask);
        document.querySelector('#today').addEventListener('click', display.todayTask);
        document.querySelector('#add-project-btn').addEventListener('click', _projectLayout__WEBPACK_IMPORTED_MODULE_2__.projectInput.layout);
        document.querySelector('#add-task-btn').addEventListener('click', _taskLayout_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.layout);
        } 
 }

defaultTitle();
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
        del.textContent = "Delete";
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
            const del = Array.from(document.querySelectorAll('.task-del-btn'));
            const edit = Array.from(document.querySelectorAll('.task-edit-btn'));
            del.forEach((ele)=>{
                ele.addEventListener('click',_function__WEBPACK_IMPORTED_MODULE_0__.taskFunc.del);                
                });
            edit.forEach((ele)=>{
                ele.addEventListener('click',editTask.layout);                
                });
        }
    }
    return {
        layout
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdExheW91dC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix3SkFBd0o7QUFDeEo7QUFDQSw0Q0FBNEMsZUFBZSx3Q0FBd0MsR0FBRyx1Q0FBdUMsc0JBQXNCLHlCQUF5QixpREFBaUQsT0FBTyxzQkFBc0Isa0JBQWtCLE9BQU8sR0FBRyxTQUFTLG9CQUFvQiwyQ0FBMkMscUZBQXFGLG1CQUFtQixHQUFHLE9BQU8sdUJBQXVCLDhDQUE4QyxnQ0FBZ0Msa0JBQWtCLHlCQUF5QixzQkFBc0Isd0JBQXdCLEdBQUcseUJBQXlCLGdDQUFnQyxxQkFBcUIsZ0RBQWdELGdEQUFnRCx3RUFBd0UsdUJBQXVCLEdBQUcsb0JBQW9CLHdCQUF3QixpQ0FBaUMsd0NBQXdDLElBQUksMkJBQTJCLCtCQUErQixtQkFBbUIsR0FBRyx5QkFBeUIsNkJBQTZCLCtCQUErQixHQUFHLDRCQUE0QixrQ0FBa0MsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsWUFBWSx3QkFBd0IsR0FBRyxrQkFBa0IsK0JBQStCLEdBQUcsMEJBQTBCLCtCQUErQixzQkFBc0IsR0FBRyxrQkFBa0IsK0JBQStCLHFDQUFxQyxHQUFHLGtDQUFrQyxvQ0FBb0MsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcscUJBQXFCLG1EQUFtRCx3QkFBd0IsMEJBQTBCLEdBQUcsOEJBQThCLCtCQUErQixHQUFHLGlCQUFpQiwwQkFBMEIsOEJBQThCLHFCQUFxQix1QkFBdUIsZ0JBQWdCLG1CQUFtQix3Q0FBd0Msc0JBQXNCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxrQkFBa0Isd0NBQXdDLG1CQUFtQixzQkFBc0Isb0JBQW9CLGlCQUFpQixtQ0FBbUMsR0FBRyw0SEFBNEgseUJBQXlCLG1CQUFtQiwrQkFBK0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLFFBQVEsZ0JBQWdCLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLDZDQUE2QyxtQ0FBbUMsbUJBQW1CLEdBQUcsK0RBQStELG1DQUFtQyx3QkFBd0IsR0FBRyw4REFBOEQsMkNBQTJDLEdBQUcsa0NBQWtDLDJDQUEyQyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRyxLQUFLLG9CQUFvQiw2QkFBNkIsa0RBQWtELEdBQUcsS0FBSyxvQkFBb0Isb0JBQW9CLHdCQUF3QixpQkFBaUIsR0FBRyxpQkFBaUIsYUFBYSxnQkFBZ0IsbUJBQW1CLG1CQUFtQixHQUFHLGFBQWEsbUJBQW1CLDJCQUEyQiw0QkFBNEIsR0FBRyxhQUFhLG9CQUFvQixpQkFBaUIsMkJBQTJCLDRCQUE0QixHQUFHLG1CQUFtQix5QkFBeUIseUJBQXlCLGNBQWMsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsV0FBVyx3QkFBd0Isc0JBQXNCLEdBQUcsaUJBQWlCLGtEQUFrRCx3QkFBd0IsR0FBRyxnQkFBZ0IseUJBQXlCLGdCQUFnQixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxTQUFTLHVCQUF1QiwrQkFBK0IsMEJBQTBCLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsMElBQTBJLElBQUksZUFBZSx3Q0FBd0MsR0FBRyx1Q0FBdUMsc0JBQXNCLHlCQUF5QixpREFBaUQsT0FBTyxzQkFBc0Isa0JBQWtCLE9BQU8sR0FBRyxTQUFTLG9CQUFvQiwyQ0FBMkMscUZBQXFGLG1CQUFtQixHQUFHLE9BQU8sdUJBQXVCLDhDQUE4QyxnQ0FBZ0Msa0JBQWtCLHlCQUF5QixzQkFBc0Isd0JBQXdCLEdBQUcseUJBQXlCLGdDQUFnQyxxQkFBcUIsZ0RBQWdELGdEQUFnRCx3RUFBd0UsdUJBQXVCLEdBQUcsb0JBQW9CLHdCQUF3QixpQ0FBaUMsd0NBQXdDLElBQUksMkJBQTJCLCtCQUErQixtQkFBbUIsR0FBRyx5QkFBeUIsNkJBQTZCLCtCQUErQixHQUFHLDRCQUE0QixrQ0FBa0MsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsWUFBWSx3QkFBd0IsR0FBRyxrQkFBa0IsK0JBQStCLEdBQUcsMEJBQTBCLCtCQUErQixzQkFBc0IsR0FBRyxrQkFBa0IsK0JBQStCLHFDQUFxQyxHQUFHLGtDQUFrQyxvQ0FBb0MsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcscUJBQXFCLG1EQUFtRCx3QkFBd0IsMEJBQTBCLEdBQUcsOEJBQThCLCtCQUErQixHQUFHLGlCQUFpQiwwQkFBMEIsOEJBQThCLHFCQUFxQix1QkFBdUIsZ0JBQWdCLG1CQUFtQix3Q0FBd0Msc0JBQXNCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxrQkFBa0Isd0NBQXdDLG1CQUFtQixzQkFBc0Isb0JBQW9CLGlCQUFpQixtQ0FBbUMsR0FBRyw0SEFBNEgseUJBQXlCLG1CQUFtQiwrQkFBK0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLFFBQVEsZ0JBQWdCLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLDZDQUE2QyxtQ0FBbUMsbUJBQW1CLEdBQUcsK0RBQStELG1DQUFtQyx3QkFBd0IsR0FBRyw4REFBOEQsMkNBQTJDLEdBQUcsa0NBQWtDLDJDQUEyQyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRyxLQUFLLG9CQUFvQiw2QkFBNkIsa0RBQWtELEdBQUcsS0FBSyxvQkFBb0Isb0JBQW9CLHdCQUF3QixpQkFBaUIsR0FBRyxpQkFBaUIsYUFBYSxnQkFBZ0IsbUJBQW1CLG1CQUFtQixHQUFHLGFBQWEsbUJBQW1CLDJCQUEyQiw0QkFBNEIsR0FBRyxhQUFhLG9CQUFvQixpQkFBaUIsMkJBQTJCLDRCQUE0QixHQUFHLG1CQUFtQix5QkFBeUIseUJBQXlCLGNBQWMsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsV0FBVyx3QkFBd0Isc0JBQXNCLEdBQUcsaUJBQWlCLGtEQUFrRCx3QkFBd0IsR0FBRyxnQkFBZ0IseUJBQXlCLGdCQUFnQixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxTQUFTLHVCQUF1QiwrQkFBK0IsMEJBQTBCLEdBQUcsbUJBQW1CO0FBQ2o2VDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsOEZBQThGLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRW5mLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQnlGO0FBQ3pGLFlBQXVGOztBQUV2Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUl4QixpRUFBZSwwRkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7QUNadEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQ0E7QUFDQSxxREFBcUQsR0FBRztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JrRDtBQUNEO0FBQ0g7QUFDRjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUFXLENBQUMsc0RBQWtCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFlO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qix5REFBZ0I7QUFDOUMsa0NBQWtDLGdFQUF1QjtBQUN6RDs7QUFFQTtBQUNBO0FBQ0EsTUFBTSx3REFBZTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsTUFBTSwrREFBaUIsU0FBUyxRQUFRO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFrQjtBQUN4QixNQUFNLDhEQUFrQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxvREFBZ0I7QUFDdEIsc0JBQXNCLDJEQUF1QixDQUFDLGtFQUE4QjtBQUM1RTtBQUNBLE1BQU0sZ0RBQVE7QUFDZCxNQUFNLCtEQUFpQjtBQUN2QixNQUFNLDhEQUFrQjtBQUN4Qjs7QUFFQTtBQUNBLHNCQUFzQiwyREFBdUIsQ0FBQyxrRUFBOEI7QUFDNUU7QUFDQSxNQUFNLG1EQUFlO0FBQ3JCO0FBQ0EsTUFBTSw4REFBa0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R29CO0FBQ2lDO0FBQ007QUFDUztBQUMvQjs7O0FBR3RDO0FBQ0EsSUFBSSwrREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CO0FBQ0E7QUFDQSx3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0EsQ0FBQzs7QUFFRCx5Qjs7QUFFQTtBQUNBO0FBQ0EsR0FBRywrREFBaUI7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsK0RBQW1CO0FBQ2hHLDBFQUEwRSw0REFBZ0I7QUFDMUYsUztBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZTtBQUN2QixRQUFRLCtEQUFpQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFlO0FBQ3ZCLFFBQVEsK0RBQWlCO0FBQ3pCOztBQUVBO0FBQ0EsMkRBQTJELGdCQUFnQjtBQUMzRTtBQUNBO0FBQ0EsUUFBUSwyREFBZTtBQUN2QixRQUFRLDhEQUFrQjtBQUMxQixRQUFRLCtEQUFpQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ISztBQUNFO0FBQzZCOzs7QUFHeEU7O0FBRUE7QUFDQSxRQUFRLCtEQUFpQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUZBQXVGLHNEQUFlO0FBQ3RHLDBGQUEwRixzREFBZTtBQUN6RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsdURBQWdCO0FBQ3RDOztBQUVBLG9DQUFvQyxFQUFFO0FBQ3RDO0FBQ0EsK0NBQStDLEVBQUU7QUFDakQseUNBQXlDLHVEQUFnQjs7QUFFekQ7QUFDQSwwQ0FBMEMsUUFBUTs7QUFFbEQsa0NBQWtDLHVEQUFnQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsK0RBQWlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0RBQStELHlEQUFxQjtBQUNwRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtDQUFrQyxtREFBZSxDQUFDLDBEQUFzQjtBQUN4RSx1Q0FBdUMsb0JBQW9COztBQUUzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEsK0RBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx5REFBa0I7QUFDeEQseUNBQXlDLDhEQUFvQjtBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsNkVBQTZFLHNEQUFlO0FBQzVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUtvQzs7QUFNWjs7O0FBR3pCOztBQUVBO0FBQ0EsUUFBUSxrRUFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0VBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxvRkFBb0YsbURBQVk7QUFDaEcsdUZBQXVGLGlFQUFvQjtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxRQUFRLGtFQUFpQjtBQUN6QixRQUFRLGtFQUFpQjtBQUN6Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixvREFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEJBQThCLElBQUk7QUFDbEMsdUNBQXVDLElBQUk7QUFDM0Msd0NBQXdDLElBQUk7O0FBRTVDLHlDQUF5QyxFQUFFO0FBQzNDLDZDQUE2QyxFQUFFOztBQUUvQyx5Q0FBeUMsRUFBRTtBQUMzQyx3Q0FBd0MsRUFBRTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0NBQWtDLG9EQUFhLFNBQVM7QUFDeEQsa0NBQWtDLG9EQUFhLFNBQVM7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQWlCO0FBQzdCLFM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxtREFBWSxFO0FBQ3pELGlCQUFpQjtBQUNqQjtBQUNBLDhEO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsa0VBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFtRCxnQkFBZ0I7QUFDbkUscURBQXFELFFBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBaUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0ZBQW9GLHNEQUFlO0FBQ25HLHVGQUF1RixtREFBWTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7O1VDak9EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSw3MDAmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg1MHB4KSB7XFxuICAgICNtYWluLWNvbnRhaW5lcnsgXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXJlbSAzMHJlbSAxZnI7XFxuICAgIH1cXG4gICAgI3Rhc2stY29udGFpbmVye1xcbiAgICB3aWR0aDozMHJlbTtcXG4gICAgfVxcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMWZyIDAuMDNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgXFxcIlxcbiAgICBcXFwibWFpbi1jb250YWluZXJcXFwiXFxuICAgIFxcXCJmb290ZXJcXFwiIDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG5oMXtcXG4gICAgZ3JpZC1hcmVhOmhlYWRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U1ZmFjO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbn1cXG5zZWN0aW9uI21haW4tY29udGFpbmVyeyBcXG4gICAgZ3JpZC1hcmVhOm1haW4tY29udGFpbmVyOyBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMnJlbSA1MHJlbSAxZnI7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTByZW0gNTByZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwibmF2LWJhciB0YXNrLWNvbnRhaW5lciByaWdodC1jb2x1bW5cXFwiO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uI25hdi1iYXJ7XFxuICAgIGdyaWQtYXJlYTpuYXYtYmFyOyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YwZWRlZDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyBcXG59XFxuXFxuc2VjdGlvbiN0YXNrLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOnRhc2stY29udGFpbmVyO1xcbiAgICBwYWRkaW5nOjJyZW07XFxufVxcblxcbnNlY3Rpb24jcmlnaHQtY29sdW1ue1xcbiAgICBncmlkLWFyZWE6cmlnaHQtY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGVkZWQ7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlLCAjdGl0bGUge1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAwLjNyZW07XFxufVxcbiNwcm9qZWN0cy1jb250YWluZXJ7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbn1cXG4ubmF2LWl0ZW17XFxuanVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbn1cXG4ubmF2LWl0ZW06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2NhYzVjNTtcXG59XFxuLm5hdi1pdGVtLCNhZGQtdGFzay1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkZGNkYztcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG4jaG9tZSwgI3RvZGF5e1xcbiAgICBtYXJnaW46MC4zcmVtIDAgMC4zcmVtIDA7XFxuICAgIHBhZGRpbmc6MC44cmVtIDAgMC44cmVtIDAuNXJlbTtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlLCBkaXYjcHJvamVjdHN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5kaXYjcHJvamVjdC1jb250ZW50e1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5kaXYjdGFzay1jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ3LCAyMzEsIDAuNDA1KTtcXG4gICAgcGFkZGluZzogMCAxLjNyZW07XFxuICAgIG92ZXJmbG93LXg6IHZpc2libGU7XFxufVxcblxcbmJ1dHRvbiNhZGQtdGFzay1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2NhYzVjNTtcXG59XFxuYnV0dG9uLmFkZC1idG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiByZ2IoMTI0LCA4MiwgNTkpO1xcbiAgICBwYWRkaW5nOjAuOHJlbTtcXG4gICAgbWFyZ2luOiAwLjNyZW0gMDtcXG4gICAgd2lkdGg6OTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jdGFzay1saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jdGFzay1pbnB1dC1iYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjUsIDY1KTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiN0YXNrLFxcbiNkdWVEYXRlLFxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG4sXFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bixcXG5idXR0b24udGFzay1idG4sXFxuLnByb2plY3QtYnRuLCBcXG5pbnB1dFxcbntcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbjowIDAuMXJlbSAwIDAuMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbiN0YXNrLWlucHV0e1xcbiAgICB3aWR0aDo1MCU7XFxufVxcbiNkYXRle1xcbiAgICB3aWR0aDozMCU7XFxufVxcbmJ1dHRvbi50YXNrLWJ0bntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG4sLmFkZC1zbWFsbC1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bixidXR0b24udGFzay1kZWxldGUtYnRuLC5kZWwtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsOyAgIFxcbiAgICBmbGV4LWdyb3c6IDAuMTtcXG59XFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bjpob3ZlcixcXG4udGFzay1kZWxldGUtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxMDIsIDEwMik7XFxufVxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDE4MiwgMTA1KTtcXG59XFxuYnV0dG9uLnRhc2stZWRpdC1idG46aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE4LCAyMTApO1xcbn1cXG51bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDIyMiwgMTc5LCAwLjQ0KTtcXG59XFxubGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG4udGFzay1jaGVja2JveHtcXG4gICAgbGVmdDowO1xcbiAgICBzaXplOjNyZW07XFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4udGFzay10ZXh0e1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxufVxcbi50YXNrLWRhdGV7XFxuICAgIHdpZHRoOiA1LjVyZW07XFxuICAgIHJpZ2h0OjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxufVxcbi50YXNrLWRlbGV0ZS1idG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDowO1xcbn1cXG4jcHJvamVjdC1pbnB1dHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuLnByb2plY3R7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxufVxcbi5wcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOCwgMjA5LCAyMDksIDAuNTcpO1xcbiAgICBib3JkZXItcmFkaXVzOjVweDtcXG59XFxuLmVkaXQtcHJvamVjdHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA2MCU7XFxufVxcbiNwcm9qZWN0LWlucHV0e1xcbiAgICBib3JkZXI6c29saWQgMnB4O1xcbn1cXG5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTpmb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkZGNkYztcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLFFBQVE7SUFDUixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNDQUFzQztJQUMxQztJQUNBO0lBQ0EsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDOzs7YUFHUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLHNDQUFzQztJQUN0Qzt5Q0FDcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsNEJBQTRCO0FBQ2hDOztBQUVBOzs7Ozs7OztJQVFJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxNQUFNO0lBQ04sU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkNBQTJDO0lBQzNDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsNzAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NTBweCkge1xcbiAgICAjbWFpbi1jb250YWluZXJ7IFxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gMzByZW0gMWZyO1xcbiAgICB9XFxuICAgICN0YXNrLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6MzByZW07XFxuICAgIH1cXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDFmciAwLjAzcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIFxcXCJcXG4gICAgXFxcIm1haW4tY29udGFpbmVyXFxcIlxcbiAgICBcXFwiZm9vdGVyXFxcIiA7XFxuICAgIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuaDF7XFxuICAgIGdyaWQtYXJlYTpoZWFkZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNWZhYztcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMDAlO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG59XFxuc2VjdGlvbiNtYWluLWNvbnRhaW5lcnsgXFxuICAgIGdyaWQtYXJlYTptYWluLWNvbnRhaW5lcjsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTJyZW0gNTByZW0gMWZyOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIDUwcmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm5hdi1iYXIgdGFzay1jb250YWluZXIgcmlnaHQtY29sdW1uXFxcIjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuc2VjdGlvbiNuYXYtYmFye1xcbiAgICBncmlkLWFyZWE6bmF2LWJhcjsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGVkZWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgXFxufVxcblxcbnNlY3Rpb24jdGFzay1jb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTp0YXNrLWNvbnRhaW5lcjtcXG4gICAgcGFkZGluZzoycmVtO1xcbn1cXG5cXG5zZWN0aW9uI3JpZ2h0LWNvbHVtbntcXG4gICAgZ3JpZC1hcmVhOnJpZ2h0LWNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBlZGVkO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZSwgI3RpdGxlIHtcXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gMC4zcmVtO1xcbn1cXG4jcHJvamVjdHMtY29udGFpbmVye1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG59XFxuLm5hdi1pdGVte1xcbmp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuLm5hdi1pdGVtOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjYWM1YzU7XFxufVxcbi5uYXYtaXRlbSwjYWRkLXRhc2stYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRjZGM7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuI2hvbWUsICN0b2RheXtcXG4gICAgbWFyZ2luOjAuM3JlbSAwIDAuM3JlbSAwO1xcbiAgICBwYWRkaW5nOjAuOHJlbSAwIDAuOHJlbSAwLjVyZW07XFxufVxcblxcbiNwcm9qZWN0cy10aXRsZSwgZGl2I3Byb2plY3Rze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuZGl2I3Byb2plY3QtY29udGVudHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuZGl2I3Rhc2stY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NywgMjMxLCAwLjQwNSk7XFxuICAgIHBhZGRpbmc6IDAgMS4zcmVtO1xcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xcbn1cXG5cXG5idXR0b24jYWRkLXRhc2stYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjYWM1YzU7XFxufVxcbmJ1dHRvbi5hZGQtYnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDEyNCwgODIsIDU5KTtcXG4gICAgcGFkZGluZzowLjhyZW07XFxuICAgIG1hcmdpbjogMC4zcmVtIDA7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3Rhc2stbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI3Rhc2staW5wdXQtYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdGFzayxcXG4jZHVlRGF0ZSxcXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuLFxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG4sXFxuYnV0dG9uLnRhc2stYnRuLFxcbi5wcm9qZWN0LWJ0biwgXFxuaW5wdXRcXG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46MCAwLjFyZW0gMCAwLjFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jdGFzay1pbnB1dHtcXG4gICAgd2lkdGg6NTAlO1xcbn1cXG4jZGF0ZXtcXG4gICAgd2lkdGg6MzAlO1xcbn1cXG5idXR0b24udGFzay1idG57XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuLC5hZGQtc21hbGwtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG4sYnV0dG9uLnRhc2stZGVsZXRlLWJ0biwuZGVsLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDsgICBcXG4gICAgZmxleC1ncm93OiAwLjE7XFxufVxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG46aG92ZXIsXFxuLnRhc2stZGVsZXRlLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTAyLCAxMDIpO1xcbn1cXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxODIsIDEwNSk7XFxufVxcbmJ1dHRvbi50YXNrLWVkaXQtYnRuOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxOCwgMjEwKTtcXG59XFxudWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyMjIsIDE3OSwgMC40NCk7XFxufVxcbmxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuLnRhc2stY2hlY2tib3h7XFxuICAgIGxlZnQ6MDtcXG4gICAgc2l6ZTozcmVtO1xcbiAgICBwYWRkaW5nOjFyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLnRhc2stdGV4dHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kYXRle1xcbiAgICB3aWR0aDogNS41cmVtO1xcbiAgICByaWdodDo1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kZWxldGUtYnRue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6MDtcXG59XFxuI3Byb2plY3QtaW5wdXR7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcbi5wcm9qZWN0e1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG4ucHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDIwOSwgMjA5LCAwLjU3KTtcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxufVxcbi5lZGl0LXByb2plY3R7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNjAlO1xcbn1cXG4jcHJvamVjdC1pbnB1dHtcXG4gICAgYm9yZGVyOnNvbGlkIDJweDtcXG59XFxuZm9vdGVye1xcbiAgICBncmlkLWFyZWE6Zm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRjZGM7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJmdW5jdGlvbiBkZWxldGVFbGVtZW50QnlJZChJZCl7XG4gICAgaWYgKHR5cGVvZiBJZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudElEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7SWR9YCk7XG4gICAgICAgIGlmKGVsZW1lbnRJRCl7XG4gICAgICAgICAgICBlbGVtZW50SUQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUVsZW1lbnRCeUV2ZW50KGV2ZW50KXtcbiAgICBpZiAodHlwZW9mIGV2ZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBlbGVtZW50SUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtldmVudC50YXJnZXQuaWR9YCkucGFyZW50Tm9kZTtcbiAgICAgICAgaWYoZWxlbWVudElEKXtcbiAgICAgICAgICAgIGVsZW1lbnRJRC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZihldmVudC50YXJnZXQuaWQgPT09ICdjYW5jZWwtdGFzay1pbnB1dC1idG4nKXtcbiAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4odHJ1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWRkVGFza0J0bihzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBhZGRUYXNrYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWJ0bicpO1xuICAgIGlmIChzdGF0ZW1lbnQpIHtcbiAgICAgICAgYWRkVGFza2J0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfVxuICAgIGVsc2UgaWYgKCFzdGF0ZW1lbnQpIHtcbiAgICAgICAgYWRkVGFza2J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufVxuXG5leHBvcnR7XG4gICAgICBkZWxldGVFbGVtZW50QnlJZCxcbiAgICAgIGRlbGV0ZUVsZW1lbnRCeUV2ZW50LFxuICAgICAgZGlzcGxheUFkZFRhc2tCdG4sXG4gICAgfSIsImltcG9ydCB7IHRhc2tMaXN0LCBlZGl0VGFzayB9IGZyb20gXCIuL3Rhc2tMYXlvdXRcIjtcbmltcG9ydCB7IGRlbGV0ZUVsZW1lbnRCeUlkfSBmcm9tIFwiLi9ET01mdW5jdGlvblwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0TGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRUaXRsZSwgbmF2SW5mbyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrLCBkdWVEYXRlLCBsaXN0TmFtZSkge1xuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgICB0aGlzLmRhdGUgPSBkdWVEYXRlXG4gICAgdGhpcy5saXN0TmFtZSA9IGxpc3ROYW1lXG4gIH1cbn1cblxuY29uc3QgZ2V0VG9kYXlEYXRlID0gKCgpID0+IHtcbiAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgdmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgdmFyIG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICB2YXIgeXl5eSA9IFN0cmluZyh0b2RheS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIHsgZGQsIG1tLCB5eXl5IH07XG59KVxuXG5jb25zdCB0YXNrRnVuYyA9ICgoKSA9PiB7XG5cbiAgdmFyIHRhc2tBcnJheSA9IFtdO1xuICB2YXIgc2VsZWN0ZWRUYXNrQXJyYXkgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIGxldCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpLnZhbHVlO1xuICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICBsZXQgbGlzdE5hbWUgPSBuYXZJbmZvLm5hdltuYXZJbmZvLm5hdi5sZW5ndGgtMV07XG5cbiAgICAgICAgaWYgKCFkdWVEYXRlSW5wdXQpIHtcbiAgICAgICAgICBsZXQgdG9kYXkgPSBnZXRUb2RheURhdGUoKTtcbiAgICAgICAgICBkdWVEYXRlSW5wdXQgPSB0b2RheS55eXl5ICsgJy8nICsgKHRvZGF5Lm1tKSArICcvJyArIHRvZGF5LmRkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGR1ZURhdGVJbnB1dCA9IGR1ZURhdGVJbnB1dC5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgIH1cblxuICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgdGFzayh0YXNrSW5wdXQsIGR1ZURhdGVJbnB1dCwgbGlzdE5hbWUpO1xuICAgICAgdGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICAgICAgdGFza0xpc3QubGF5b3V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgbGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0JykudmFsdWU7XG4gICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgIGR1ZURhdGVJbnB1dCA9IGR1ZURhdGVJbnB1dC5yZXBsYWNlKC8tL2csICcvJyk7XG5cbiAgICAgIGxldCBzZWxlY3RlZFRhc2tBcnJheSA9IGVkaXRUYXNrLnRhc2tOdW07XG4gICAgICBsZXQgY3VycmVudFNlbGVjdGlvbkluZGV4ID0gZWRpdFRhc2sudGFza051bS5sZW5ndGgtMTtcbiAgICAgIGxldCBjdXJyZW50VGFza051bSA9IHNlbGVjdGVkVGFza0FycmF5W2N1cnJlbnRTZWxlY3Rpb25JbmRleF07XG5cbiAgICAgIHRhc2tBcnJheVtjdXJyZW50VGFza051bV0udGFzayA9IHRhc2tJbnB1dDtcbiAgICAgIHRhc2tBcnJheVtjdXJyZW50VGFza051bV0uZGF0ZSA9IGR1ZURhdGVJbnB1dDtcbiAgICAgIHRhc2tMaXN0LmxheW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbChldmVudCkge1xuICAgICAgY29uc3QgdGFza051bSA9IGV2ZW50LnBhdGhbMV0uZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICBkZWxldGVFbGVtZW50QnlJZChgdGFzay0ke3Rhc2tOdW19YCk7XG4gICAgICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tOdW0sMSk7XG4gICAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdDogdGFza0FycmF5LFxuICAgIHNlbGVjdGVkTGlzdCA6IHNlbGVjdGVkVGFza0FycmF5LFxuICAgIGFkZCxcbiAgICB1cGRhdGUsXG4gICAgZGVsXG4gIH1cblxufSkoKTtcblxuY29uc3QgcHJvamVjdEZ1bmMgPSAoKCk9PiB7XG5cbiAgdmFyIHByb2plY3RBcnJheT1bXTtcblxuICAgIGZ1bmN0aW9uIGFkZCgpe1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuICAgICAgcHJvamVjdEFycmF5LnB1c2goaW5wdXQpO1xuICAgICAgbmF2SW5mby51cGRhdGVMaXN0KGlucHV0KTtcbiAgICAgIHByb2plY3RMaXN0LmxheW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpe1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuICAgICAgbmF2SW5mby5lZGl0TGlzdChpbnB1dCk7XG4gICAgICBsZXQgbGFzdEluZGV4ID0gbmF2SW5mby5wcm9qZWN0SW5kZXhBcnJbbmF2SW5mby5wcm9qZWN0SW5kZXhBcnIubGVuZ3RoLTFdO1xuICAgICAgcHJvamVjdEFycmF5W2xhc3RJbmRleF09aW5wdXQ7XG4gICAgICBnZXRUaXRsZShpbnB1dCk7XG4gICAgICBkZWxldGVFbGVtZW50QnlJZCgncHJvamVjdC1lZGl0LWJ0bicpO1xuICAgICAgcHJvamVjdExpc3QubGF5b3V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsKCl7XG4gICAgICBsZXQgbGFzdEluZGV4ID0gbmF2SW5mby5wcm9qZWN0SW5kZXhBcnJbbmF2SW5mby5wcm9qZWN0SW5kZXhBcnIubGVuZ3RoLTFdO1xuICAgICAgcHJvamVjdEFycmF5LnNwbGljZShsYXN0SW5kZXgsMSk7XG4gICAgICBuYXZJbmZvLmRlbExpc3QoKTtcbiAgICAgIC8vL3JlbWVtYmVyIHRvIHJlbW92ZSBhbGwgdGFza1xuICAgICAgcHJvamVjdExpc3QubGF5b3V0KCk7XG4gICAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdDogcHJvamVjdEFycmF5LFxuICAgIGFkZCxcbiAgICB1cGRhdGUsXG4gICAgZGVsXG4gIH1cblxufSkoKTtcbmV4cG9ydCB7IGdldFRvZGF5RGF0ZSwgdGFza0Z1bmMsIHByb2plY3RGdW5jIH0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHRhc2tJbnB1dCwgdGFza0xpc3QgfSBmcm9tICcuL3Rhc2tMYXlvdXQuanMnO1xuaW1wb3J0IHsgcHJvamVjdElucHV0LCBlZGl0UHJvamVjdCB9IGZyb20gJy4vcHJvamVjdExheW91dCc7XG5pbXBvcnQgeyBkaXNwbGF5QWRkVGFza0J0biwgZGVsZXRlRWxlbWVudEJ5SWQgfSBmcm9tICcuL0RPTWZ1bmN0aW9uJztcbmltcG9ydCB7IHRhc2tGdW5jIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5cblxuY29uc3QgZ2V0VGl0bGUgPSAodGV4dCkgPT4ge1xuICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY29udGVudCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYCR7dGV4dH1gO1xuICAgIHRhc2tDb250ZW50LnByZXBlbmQodGl0bGUpO1xufVxuXG5jb25zdCBuYXZJbmZvID0gKCgpID0+IHtcbiAgICB2YXIgbGlzdCA9IFsnaG9tZScsJ3RvZGF5J107XG4gICAgdmFyIHNlbGVjdGVkUHJvamVjdCA9IFtdO1xuICAgIHZhciBzZWxlY3RlZE5hdkl0ZW0gPSBbXTtcbiAgICB2YXIgbmF2TnVtID0gW107IFxuICAgIHZhciBwcm9OdW0gPSBbXTtcbiAgICB2YXIgbGFzdFNlbGVjdGVkTnVtOyBcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxpc3QoaW5wdXQpe1xuICAgICAgICBsaXN0LnB1c2goaW5wdXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRMaXN0KGlucHV0KXtcbiAgICAgICBsaXN0W2xhc3RTZWxlY3RlZE51bV0gPSBpbnB1dDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVsTGlzdCgpe1xuICAgICAgICBsaXN0LnNwbGljZShsYXN0U2VsZWN0ZWROdW0sMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0KGV2ZW50KXtcbiAgICAgICAgbGV0IG51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5pZH1gKS5nZXRBdHRyaWJ1dGUoJ25hdicpO1xuICAgICAgICBuYXZOdW0ucHVzaChudW0pO1xuICAgICAgICBsYXN0U2VsZWN0ZWROdW0gPSBuYXZOdW1bbmF2TnVtLmxlbmd0aC0xXTtcbiAgICAgICAgX2dldEN1cnJlbnROYXZJdGVtKGxhc3RTZWxlY3RlZE51bSk7XG4gICAgICAgIF9nZXRDdXJyZW50UHJvamVjdChsYXN0U2VsZWN0ZWROdW0pO1xuICAgICAgICBnZXRQcm9qZWN0SW5kZXgobGFzdFNlbGVjdGVkTnVtKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2dldEN1cnJlbnRQcm9qZWN0KG51bSl7XG4gICAgICAgIGlmKG51bSA+IDEpe1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBsaXN0W251bV07XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdC5wdXNoKHByb2plY3ROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0SW5kZXgobnVtKXtcbiAgICAgICAgaWYobnVtID4gMSl7IFxuICAgICAgICBudW09bnVtLTI7XG4gICAgICAgIHByb051bS5wdXNoKG51bSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gX2dldEN1cnJlbnROYXZJdGVtKG51bSl7XG4gICAgICAgIGxldCBuYXZJdGVtID0gbGlzdFtudW1dO1xuICAgICAgICBzZWxlY3RlZE5hdkl0ZW0ucHVzaChuYXZJdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVMaXN0LFxuICAgICAgICBlZGl0TGlzdCxcbiAgICAgICAgZGVsTGlzdCxcbiAgICAgICAgc2VsZWN0LFxuICAgICAgICBwcm9qZWN0OiBzZWxlY3RlZFByb2plY3QsXG4gICAgICAgIG5hdjogc2VsZWN0ZWROYXZJdGVtLFxuICAgICAgICBsaXN0OiBsaXN0LFxuICAgICAgICBwcm9qZWN0SW5kZXhBcnI6IHByb051bVxuICAgIH0gIFxufSkoKTtcblxuY29uc3QgbG9hZFBhZ2UgPSAoKCkgPT4geyAgXG5cbmNvbnN0IGRlZmF1bHRUaXRsZSA9ICgpID0+IHtcbiAgIGdldFRpdGxlKCdIb21lJyk7XG4gICBkaXNwbGF5QWRkVGFza0J0bihmYWxzZSk7XG59XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgaWYoISFkb2N1bWVudCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5LmFsbFRhc2spO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXkudG9kYXlUYXNrKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdElucHV0LmxheW91dCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tJbnB1dC5sYXlvdXQpO1xuICAgICAgICB9IFxuIH1cblxuZGVmYXVsdFRpdGxlKCk7XG5hZGRFdmVudExpc3RlbmVyKCk7XG59KTtcblxuY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBhbGxUYXNrIChldmVudCkge1xuICAgICAgICBnZXRUaXRsZSgnSG9tZScpO1xuICAgICAgICBuYXZJbmZvLnNlbGVjdChldmVudCk7XG4gICAgICAgIC8vdGFza0Z1bmMuc2VsZWN0ZWRMaXN0ID0gdGFza0Z1bmMubGlzdC5maWx0ZXIoKGxpc3QpPT4gbGlzdCkpO1xuICAgICAgICB0YXNrTGlzdC5sYXlvdXQoKTtcbiAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4oZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZGF5VGFzayAoZXZlbnQpIHtcbiAgICAgICAgZ2V0VGl0bGUoJ1RvZGF5Jyk7XG4gICAgICAgIG5hdkluZm8uc2VsZWN0KGV2ZW50KTtcbiAgICAgICAgdGFza0xpc3QubGF5b3V0KCk7XG4gICAgICAgIGRpc3BsYXlBZGRUYXNrQnRuKHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRhc2tCeU5hdkl0ZW0gKGV2ZW50KXtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWROYXZJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmlkfWApO1xuICAgICAgICBuYXZJbmZvLnNlbGVjdChldmVudCk7XG4gICAgICAgIGdldFRpdGxlKHNlbGVjdGVkTmF2SXRlbS50ZXh0Q29udGVudCk7XG4gICAgICAgIHRhc2tMaXN0LmxheW91dCgpO1xuICAgICAgICBlZGl0UHJvamVjdC5hZGRCdG4oKTtcbiAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4odHJ1ZSk7XG4gICAgfVxuXG5yZXR1cm57XG4gICAgYWxsVGFzayxcbiAgICB0b2RheVRhc2ssXG4gICAgdGFza0J5TmF2SXRlbVxufVxufSkoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLGxvYWRQYWdlKTtcblxuZXhwb3J0eyBkaXNwbGF5LCBuYXZJbmZvLCBnZXRUaXRsZSB9XG5cblxuXG5cblxuXG5cbiIsImltcG9ydCB7IHByb2plY3RGdW5jIH0gZnJvbSBcIi4vZnVuY3Rpb25cIjtcbmltcG9ydCB7IGRpc3BsYXksIG5hdkluZm8gfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZGVsZXRlRWxlbWVudEJ5RXZlbnQsIGRlbGV0ZUVsZW1lbnRCeUlkIH0gZnJvbSAnLi9ET01mdW5jdGlvbic7XG5cblxuY29uc3QgcHJvamVjdElucHV0ID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIF9kZWxldGVQcmV2aW91c0RPTSgpIHtcbiAgICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3Byb2plY3QtYmFyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF5b3V0KCkge1xuICAgICAgICBfZGVsZXRlUHJldmlvdXNET00oKTtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgcHJvamVjdEJhci5pZCA9IFwicHJvamVjdC1iYXJcIjtcbiAgICAgICAgaW5wdXQuaWQgPSBcInByb2plY3QtaW5wdXRcIjtcbiAgICAgICAgYWRkLmlkID0gXCJhZGQtcHJvamVjdC1pbnB1dC1idG5cIjtcbiAgICAgICAgY2FuY2VsLmlkID0gXCJjYW5jZWwtcHJvamVjdC1pbnB1dC1idG5cIjtcbiAgICAgICAgYWRkLmNsYXNzTGlzdC5hZGQoJ2FkZC1zbWFsbC1idG4nKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcbiAgICAgICAgYWRkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpO1xuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnRGVmYXVsdCBwcm9qZWN0Jyk7XG5cbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICAgICAgcHJvamVjdEJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RCYXIpO1xuICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgcHJvamVjdEJhci5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghIWRvY3VtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtaW5wdXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuYy5hZGQpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1wcm9qZWN0LWlucHV0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEZ1bmMuZGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxheW91dFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGVudCcpO1xuXG4gICAgZnVuY3Rpb24gbGF5b3V0KCkge1xuXG4gICAgICAgIF9kZWxldGVQcmV2aW91c0RPTSgpO1xuICAgICAgICBmb3IgKGxldCBpIGluIHByb2plY3RGdW5jLmxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgcHJvamVjdC5pZCA9IGBwcm9qZWN0LSR7aX1gO1xuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgncHJvamVjdCcsIGAke2l9YCk7XG4gICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHByb2plY3RGdW5jLmxpc3RbaV0pO1xuXG4gICAgICAgICAgICBsZXQgbmF2Q29kZSA9IE51bWJlcihpKSArIDI7XG4gICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnbmF2JyxgJHtuYXZDb2RlfWApO1xuXG4gICAgICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdEZ1bmMubGlzdFtpXTtcbiAgICAgICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByZXZpb3VzRE9NKCkge1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgncHJvamVjdC1iYXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykpO1xuICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChlbGUpID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlKSA9PiBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXkudGFza0J5TmF2SXRlbSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxheW91dFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGVkaXRQcm9qZWN0ID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIGFkZEJ0bigpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgICAgIGVkaXQuaWQgPSBcInByb2plY3QtZWRpdC1idG5cIjtcbiAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdCcpO1xuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChlZGl0KTtcblxuXG4gICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWwudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICBkZWwuaWQgPSBcInByb2plY3QtZGVsLWJ0blwiO1xuICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcbiAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdCcpO1xuXG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGRlbCk7XG5cbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXJUb0J0bigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxheW91dCgpIHtcbiAgICAgICAgX2RlbGV0ZVByZXZpb3VzRE9NKCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBwcm9qZWN0QmFyLmlkID0gXCJwcm9qZWN0LWJhclwiO1xuICAgICAgICBpbnB1dC5pZCA9IFwicHJvamVjdC1pbnB1dFwiO1xuICAgICAgICBhZGQuaWQgPSBcImFkZC1wcm9qZWN0LWlucHV0LWJ0blwiO1xuICAgICAgICBjYW5jZWwuaWQgPSBcImNhbmNlbC1wcm9qZWN0LWlucHV0LWJ0blwiO1xuICAgICAgICBhZGQuY2xhc3NMaXN0LmFkZCgnYWRkLXNtYWxsLWJ0bicpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuICAgICAgICBhZGQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICAgICAgICBsZXQgbGFzdFNlbGVjdGVkUHJvamVjdCA9IG5hdkluZm8ucHJvamVjdFtuYXZJbmZvLnByb2plY3QubGVuZ3RoLTFdO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7bGFzdFNlbGVjdGVkUHJvamVjdH1gKTtcblxuICAgICAgICBhZGQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgICAgICBwcm9qZWN0QmFyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdEJhcik7XG4gICAgICAgIHByb2plY3RCYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGFkZCk7XG4gICAgICAgIHByb2plY3RCYXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lclRvSW5wdXRCYXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJldmlvdXNET00oKSB7XG4gICAgICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCdwcm9qZWN0LWJhcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVyVG9JbnB1dEJhcigpIHtcbiAgICAgICAgY29uc3QgYWRkID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1pbnB1dC1idG4nKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1wcm9qZWN0LWlucHV0LWJ0bicpO1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuYy51cGRhdGUpO1xuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVFbGVtZW50QnlFdmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJUb0J0bigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZWRpdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxheW91dCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlbC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RGdW5jLmRlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgIGFkZEJ0bixcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyAgcHJvamVjdElucHV0LCBwcm9qZWN0TGlzdCwgZWRpdFByb2plY3QgfSIsImltcG9ydCB7IHRhc2tGdW5jIH0gZnJvbSBcIi4vZnVuY3Rpb25cIlxuXG5pbXBvcnQge1xuICAgIGRlbGV0ZUVsZW1lbnRCeUlkLFxuICAgIGRlbGV0ZUVsZW1lbnRCeUV2ZW50LFxuICAgIGRpc3BsYXlBZGRUYXNrQnRuXG59IGZyb20gJy4vRE9NZnVuY3Rpb24uanMnXG5cblxuY29uc3QgdGFza0lucHV0ID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIF9kZWxldGVQcmV2aW91c0RPTSgpIHtcbiAgICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQtYmFyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF5b3V0KCkge1xuICAgICAgICBfZGVsZXRlUHJldmlvdXNET00oKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdGFza0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdkZWZhdWx0IHRhc2snKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuXG4gICAgICAgIHRhc2tCYXIuaWQgPSBcInRhc2staW5wdXQtYmFyXCI7XG4gICAgICAgIGlucHV0LmlkID0gXCJ0YXNrLWlucHV0XCI7XG4gICAgICAgIGRhdGUuaWQgPSBcImR1ZURhdGVcIjtcbiAgICAgICAgYWRkLmlkID0gXCJhZGQtdGFzay1pbnB1dC1idG5cIjtcbiAgICAgICAgY2FuY2VsLmlkID0gXCJjYW5jZWwtdGFzay1pbnB1dC1idG5cIjtcbiAgICAgICAgYWRkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0blwiKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0blwiKTtcblxuICAgICAgICBhZGQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgdGFza0Jhci5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgdGFza0Jhci5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgICAgIHRhc2tDb250ZW50LmFwcGVuZCh0YXNrQmFyKTtcblxuICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBkaXNwbGF5QWRkVGFza0J0bihmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghIWRvY3VtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2staW5wdXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrRnVuYy5hZGQpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC10YXNrLWlucHV0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlRWxlbWVudEJ5RXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0XG4gICAgfVxufSkoKTtcblxuY29uc3QgdGFza0xpc3QgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByZXZpb3VzRE9NKCkge1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XG4gICAgICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCd0YXNrLWlucHV0LWJhcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxheW91dCgpIHtcblxuICAgICAgICBfZGVsZXRlUHJldmlvdXNET00oKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgdGFza0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWlucHV0LWJhcicpO1xuXG4gICAgICAgIHRhc2tMaXN0LmlkID0gXCJ0YXNrLWxpc3RcIjtcbiAgICAgICAgdGFza0NvbnRlbnQuaW5zZXJ0QmVmb3JlKHRhc2tMaXN0LCB0YXNrQmFyKTtcblxuICAgICAgICBmb3IgKGxldCBpIGluIHRhc2tGdW5jLmxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cbiAgICAgICAgICAgIHRhc2suaWQgPSBgdGFzay0ke1tpXX1gO1xuICAgICAgICAgICAgZWRpdC5pZCA9IGB0YXNrLWVkaXQtYnRuLSR7W2ldfWA7XG4gICAgICAgICAgICBkZWwuaWQgPSBgdGFzay1jYW5jZWwtYnRuLSR7W2ldfWA7XG5cbiAgICAgICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnZGF0YScsIGAke2l9YCk7XG5cbiAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKTtcbiAgICAgICAgICAgIGRlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBgJHtpfWApO1xuXG4gICAgICAgICAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0Jyk7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKFwidGFzay1lZGl0LWJ0blwiKTtcbiAgICAgICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtYnRuXCIpO1xuXG4gICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnRuJyk7XG4gICAgICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgndGFzay1idG4nKTtcblxuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGAke3Rhc2tGdW5jLmxpc3RbaV0udGFza31gO1xuICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2tGdW5jLmxpc3RbaV0uZGF0ZX1gO1xuICAgICAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuICAgICAgICAgICAgZGVsLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4odHJ1ZSk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIoKSB7XG5cbiAgICAgICAgaWYoISFkb2N1bWVudCl7XG4gICAgICAgICAgICBjb25zdCBkZWwgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWRlbC1idG4nKSk7XG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1lZGl0LWJ0bicpKTtcbiAgICAgICAgICAgIGRlbC5mb3JFYWNoKChlbGUpPT57XG4gICAgICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0YXNrRnVuYy5kZWwpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVkaXQuZm9yRWFjaCgoZWxlKT0+e1xuICAgICAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZWRpdFRhc2subGF5b3V0KTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0XG4gICAgfVxufSkoKTtcblxuXG5jb25zdCBlZGl0VGFzayA9ICgoKSA9PiB7XG5cbiAgICBsZXQgdGFza051bUFycmF5ID0gW107XG5cbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJldmlvdXNET00oKSB7XG4gICAgICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCd0YXNrLWlucHV0LWJhcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxheW91dChldmVudCkge1xuICAgICAgICBfZGVsZXRlUHJldmlvdXNET00oKTtcblxuICAgICAgICBjb25zdCB0YXNrQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2RlZmF1bHQgdGFzaycpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG5cbiAgICAgICAgdGFza0Jhci5pZCA9IFwidGFzay1pbnB1dC1iYXJcIjtcbiAgICAgICAgaW5wdXQuaWQgPSBcInRhc2staW5wdXRcIjtcbiAgICAgICAgZGF0ZS5pZCA9IFwiZHVlRGF0ZVwiO1xuICAgICAgICBhZGQuaWQgPSBcImFkZC10YXNrLWlucHV0LWJ0blwiO1xuICAgICAgICBjYW5jZWwuaWQgPSBcImNhbmNlbC10YXNrLWlucHV0LWJ0blwiO1xuICAgICAgICBhZGQuY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIpO1xuXG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGFkZCk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICAgICAgdGFza0Jhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgICAgIGNvbnN0IHRhc2tOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuaWR9YCkuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tOdW19YCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdFRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICAgICAgICAvL2luc2VydCB0YXNrIGlucHV0IGJhciBiZWZvcmUgc2VsZWN0ZWQgZWRpdCBsaXN0XG4gICAgICAgIHNlbGVjdFRhc2tMaXN0Lmluc2VydEJlZm9yZSh0YXNrQmFyLCB0YXNrKTtcbiAgICAgICAgLy9kaXNwbGF5IGhpZGRlbiB0YXNrXG4gICAgICAgIHNlbGVjdFRhc2tMaXN0LmNoaWxkTm9kZXMuZm9yRWFjaCgobGlzdCkgPT4gbGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpO1xuICAgICAgICAvL2hpZGUgZWRpdGVkIHRhc2tcbiAgICAgICAgdGFzay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgX3ByZXZpZXdUYXNrSW5mb0luSW5wdXRCYXIodGFza051bSk7XG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIGdldFNlbGVjdGVkVGFza051bSh0YXNrTnVtKTtcbiAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4oZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNlbGVjdGVkVGFza051bSA9ICh0YXNrTnVtKSA9PiB7XG4gICAgICAgIHRhc2tOdW1BcnJheS5wdXNoKHRhc2tOdW0pO1xuICAgICAgICByZXR1cm4gdGFza051bUFycmF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wcmV2aWV3VGFza0luZm9JbklucHV0QmFyKHRhc2tOdW0pIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza051bX1gKTtcbiAgICAgICAgY29uc3QgdGFza0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1pbnB1dC1iYXJcIik7XG4gICAgICAgIHRhc2tCYXIuY2hpbGROb2Rlc1swXS52YWx1ZSA9IHRhc2suY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgeSA9IHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudC5zbGljZSgwLCA0KTtcbiAgICAgICAgY29uc3QgbSA9IHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudC5zbGljZSg1LCA3KTtcbiAgICAgICAgY29uc3QgZCA9IHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudC5zbGljZSg4LCAxMCk7XG4gICAgICAgIHRhc2tCYXIuY2hpbGROb2Rlc1sxXS52YWx1ZSA9IHkgKyAnLScgKyBtICsgJy0nICsgZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1pbnB1dC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tGdW5jLnVwZGF0ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXRhc2staW5wdXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrRnVuYy5kZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB0YXNrTnVtOiB0YXNrTnVtQXJyYXlcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7IHRhc2tJbnB1dCwgdGFza0xpc3QsIGVkaXRUYXNrIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9