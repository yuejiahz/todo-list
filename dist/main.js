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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin:0;\n    font-family: 'Roboto', sans-serif;\n}\n@media screen and (max-width:850px) {\n    #main-container{ \n        display: grid;\n        grid-template-columns: 15rem 30rem 1fr;\n    }\n    #task-container{\n    width:30rem;\n    }\n}\n\nmain{\n    display: grid;\n    grid-template-rows: 3rem 1fr 0.03rem;\n    grid-template-areas:\n    \"header \"\n    \"main-container\"\n    \"footer\" ;\n    height:100vh;\n}\n\nh1{\n    grid-area:header;\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    text-align: center;\n    font-size: 300%;\n    line-height: 3rem;\n}\nsection#main-container{ \n    grid-area:main-container; \n    display: grid;\n    /* grid-template-columns: 12rem 50rem 1fr; */\n    grid-template-columns: 10rem 50rem 1fr;\n    grid-template-areas:\n    \"nav-bar task-container right-column\";\n    overflow-y: auto;\n}\n\nsection#nav-bar{\n    grid-area:nav-bar;  \n    background-color:#f0eded;\n    font-family: 'Roboto', sans-serif; \n}\n\nsection#task-container{\n    grid-area:task-container;\n    padding:2rem;\n}\n\nsection#right-column{\n    grid-area:right-column;\n    background-color:#f0eded;\n}\n\n#project-title, #title {\n    padding: 1rem 0 1rem 0.3rem;\n}\n#projects-container{\n    padding-left: 10%;\n}\n.nav-item{\njustify-self: stretch;\n}\n.nav-item:hover{\n    background-color:#cac5c5;\n}\n.nav-item,#add-task-btn{\n    background-color:#dddcdc;\n    margin-left: 5%;\n}\n\n#home, #today{\n    margin:0.3rem 0 0.3rem 0;\n    padding:0.8rem 0 0.8rem 0.5rem;\n}\n\n#projects-title, div#projects{\n    background-color: transparent;\n}\n\ndiv#project-content{\n    overflow-y: auto;\n}\n\ndiv#task-content{\n    background-color: rgba(255, 247, 231, 0.741);\n    padding: 0 1.3rem;\n    overflow-x: visible;\n}\n\nbutton#add-task-btn:hover{\n    background-color:#cac5c5;\n}\nbutton.add-btn{\n    border-radius: 20px;\n    color: rgb(124, 82, 59);\n    padding:0.8rem;\n    margin: 0.3rem 0;\n    width:90%;\n    border: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n\n#task-list{\n    display: flex;\n}\n#task-input-bar{\n    background-color: rgb(65, 65, 65);\n    height: 2rem;\n    padding: 0.5rem;\n    display: flex;\n    width: 95%;\n    align-content: space-between;\n}\n\n#task,\n#dueDate,\nbutton#add-task-input-btn,\nbutton#cancel-task-input-btn,\nbutton.task-btn\n{\n    border-radius: 5px;\n    border: none;\n    margin:0 0.1rem 0 0.1rem;\n}\n\n#task-input{\n    width:50%;\n}\n#date{\n    width:30%;\n}\nbutton.task-btn{\n    font-weight: bold;\n}\n\nbutton#add-task-input-btn{\n    background-color: lightgreen;\n    width: 20%;\n\n}\nbutton#cancel-task-input-btn,button.task-delete-btn{\n    background-color: lightcoral;\n    width: 5%;\n}\nbutton#cancel-task-input-btn:hover,\n.task-delete-btn:hover{\n    background-color: rgb(194, 102, 102);\n}\nbutton#add-task-input-btn:hover{\n    background-color: rgb(105, 182, 105);\n}\nbutton.task-edit-btn:hover{\nbackground-color: rgb(214, 218, 210);\n}\nul{\n    display: flex;\n    flex-direction: column;\n    background-color: wheat;\n}\nli{\n    display: flex;\n    padding: 1rem;\n    line-height: 2rem;\n    width: 95%;\n}\n.task-checkbox{\n    left:0;\n    size:3rem;\n    padding:1rem;\n    margin: auto;\n}\n.task-text{\n    flex-grow: 1;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-date{\n    width: 5.5rem;\n    right:5rem;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-delete-btn{\n    text-align: center;\n    position: relative;\n    right:0;\n}\n#project-input{\n    width: 60%;\n}\n.project{\n    line-height: 2rem;\n    padding: 0.2rem;\n}\n.project:hover{\n    background-color: rgba(208, 209, 209, 0.57);\n    border-radius:5px;\n}\nfooter{\n    grid-area:footer;\n    background-color:#dddcdc;\n    align-self: stretch;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,QAAQ;IACR,iCAAiC;AACrC;AACA;IACI;QACI,aAAa;QACb,sCAAsC;IAC1C;IACA;IACA,WAAW;IACX;AACJ;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC;;;aAGS;IACT,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,uCAAuC;IACvC,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,4CAA4C;IAC5C,sCAAsC;IACtC;yCACqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI,iBAAiB;AACrB;AACA;AACA,qBAAqB;AACrB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,4CAA4C;IAC5C,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,gBAAgB;IAChB,SAAS;IACT,YAAY;IACZ,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;IACf,aAAa;IACb,UAAU;IACV,4BAA4B;AAChC;;AAEA;;;;;;IAMI,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,SAAS;AACb;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,UAAU;;AAEd;AACA;IACI,4BAA4B;IAC5B,SAAS;AACb;AACA;;IAEI,oCAAoC;AACxC;AACA;IACI,oCAAoC;AACxC;AACA;AACA,oCAAoC;AACpC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,UAAU;AACd;AACA;IACI,MAAM;IACN,SAAS;IACT,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,UAAU;IACV,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;AACX;AACA;IACI,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,2CAA2C;IAC3C,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&family=Roboto&display=swap');\n*{\n    margin:0;\n    font-family: 'Roboto', sans-serif;\n}\n@media screen and (max-width:850px) {\n    #main-container{ \n        display: grid;\n        grid-template-columns: 15rem 30rem 1fr;\n    }\n    #task-container{\n    width:30rem;\n    }\n}\n\nmain{\n    display: grid;\n    grid-template-rows: 3rem 1fr 0.03rem;\n    grid-template-areas:\n    \"header \"\n    \"main-container\"\n    \"footer\" ;\n    height:100vh;\n}\n\nh1{\n    grid-area:header;\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    text-align: center;\n    font-size: 300%;\n    line-height: 3rem;\n}\nsection#main-container{ \n    grid-area:main-container; \n    display: grid;\n    /* grid-template-columns: 12rem 50rem 1fr; */\n    grid-template-columns: 10rem 50rem 1fr;\n    grid-template-areas:\n    \"nav-bar task-container right-column\";\n    overflow-y: auto;\n}\n\nsection#nav-bar{\n    grid-area:nav-bar;  \n    background-color:#f0eded;\n    font-family: 'Roboto', sans-serif; \n}\n\nsection#task-container{\n    grid-area:task-container;\n    padding:2rem;\n}\n\nsection#right-column{\n    grid-area:right-column;\n    background-color:#f0eded;\n}\n\n#project-title, #title {\n    padding: 1rem 0 1rem 0.3rem;\n}\n#projects-container{\n    padding-left: 10%;\n}\n.nav-item{\njustify-self: stretch;\n}\n.nav-item:hover{\n    background-color:#cac5c5;\n}\n.nav-item,#add-task-btn{\n    background-color:#dddcdc;\n    margin-left: 5%;\n}\n\n#home, #today{\n    margin:0.3rem 0 0.3rem 0;\n    padding:0.8rem 0 0.8rem 0.5rem;\n}\n\n#projects-title, div#projects{\n    background-color: transparent;\n}\n\ndiv#project-content{\n    overflow-y: auto;\n}\n\ndiv#task-content{\n    background-color: rgba(255, 247, 231, 0.741);\n    padding: 0 1.3rem;\n    overflow-x: visible;\n}\n\nbutton#add-task-btn:hover{\n    background-color:#cac5c5;\n}\nbutton.add-btn{\n    border-radius: 20px;\n    color: rgb(124, 82, 59);\n    padding:0.8rem;\n    margin: 0.3rem 0;\n    width:90%;\n    border: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n\n#task-list{\n    display: flex;\n}\n#task-input-bar{\n    background-color: rgb(65, 65, 65);\n    height: 2rem;\n    padding: 0.5rem;\n    display: flex;\n    width: 95%;\n    align-content: space-between;\n}\n\n#task,\n#dueDate,\nbutton#add-task-input-btn,\nbutton#cancel-task-input-btn,\nbutton.task-btn\n{\n    border-radius: 5px;\n    border: none;\n    margin:0 0.1rem 0 0.1rem;\n}\n\n#task-input{\n    width:50%;\n}\n#date{\n    width:30%;\n}\nbutton.task-btn{\n    font-weight: bold;\n}\n\nbutton#add-task-input-btn{\n    background-color: lightgreen;\n    width: 20%;\n\n}\nbutton#cancel-task-input-btn,button.task-delete-btn{\n    background-color: lightcoral;\n    width: 5%;\n}\nbutton#cancel-task-input-btn:hover,\n.task-delete-btn:hover{\n    background-color: rgb(194, 102, 102);\n}\nbutton#add-task-input-btn:hover{\n    background-color: rgb(105, 182, 105);\n}\nbutton.task-edit-btn:hover{\nbackground-color: rgb(214, 218, 210);\n}\nul{\n    display: flex;\n    flex-direction: column;\n    background-color: wheat;\n}\nli{\n    display: flex;\n    padding: 1rem;\n    line-height: 2rem;\n    width: 95%;\n}\n.task-checkbox{\n    left:0;\n    size:3rem;\n    padding:1rem;\n    margin: auto;\n}\n.task-text{\n    flex-grow: 1;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-date{\n    width: 5.5rem;\n    right:5rem;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-delete-btn{\n    text-align: center;\n    position: relative;\n    right:0;\n}\n#project-input{\n    width: 60%;\n}\n.project{\n    line-height: 2rem;\n    padding: 0.2rem;\n}\n.project:hover{\n    background-color: rgba(208, 209, 209, 0.57);\n    border-radius:5px;\n}\nfooter{\n    grid-area:footer;\n    background-color:#dddcdc;\n    align-self: stretch;\n}"],"sourceRoot":""}]);
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
        _projectLayout__WEBPACK_IMPORTED_MODULE_2__.editProject.addEditBtn();
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
        title.appendChild(edit);

        const del = document.createElement('button');
        del.textContent = "Delete";
        del.id = "project-del-btn";
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
        addEditBtn: addBtn
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdExheW91dC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAi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Q0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDcwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODUwcHgpIHtcXG4gICAgI21haW4tY29udGFpbmVyeyBcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cmVtIDMwcmVtIDFmcjtcXG4gICAgfVxcbiAgICAjdGFzay1jb250YWluZXJ7XFxuICAgIHdpZHRoOjMwcmVtO1xcbiAgICB9XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxZnIgMC4wM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBcXFwiXFxuICAgIFxcXCJtYWluLWNvbnRhaW5lclxcXCJcXG4gICAgXFxcImZvb3RlclxcXCIgO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcbmgxe1xcbiAgICBncmlkLWFyZWE6aGVhZGVyO1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTVmYWM7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxufVxcbnNlY3Rpb24jbWFpbi1jb250YWluZXJ7IFxcbiAgICBncmlkLWFyZWE6bWFpbi1jb250YWluZXI7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEycmVtIDUwcmVtIDFmcjsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHJlbSA1MHJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJuYXYtYmFyIHRhc2stY29udGFpbmVyIHJpZ2h0LWNvbHVtblxcXCI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbnNlY3Rpb24jbmF2LWJhcntcXG4gICAgZ3JpZC1hcmVhOm5hdi1iYXI7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBlZGVkO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IFxcbn1cXG5cXG5zZWN0aW9uI3Rhc2stY29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6dGFzay1jb250YWluZXI7XFxuICAgIHBhZGRpbmc6MnJlbTtcXG59XFxuXFxuc2VjdGlvbiNyaWdodC1jb2x1bW57XFxuICAgIGdyaWQtYXJlYTpyaWdodC1jb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YwZWRlZDtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUsICN0aXRsZSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDAuM3JlbTtcXG59XFxuI3Byb2plY3RzLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcbi5uYXYtaXRlbXtcXG5qdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxufVxcbi5uYXYtaXRlbTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjNWM1O1xcbn1cXG4ubmF2LWl0ZW0sI2FkZC10YXNrLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRkY2RjO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbiNob21lLCAjdG9kYXl7XFxuICAgIG1hcmdpbjowLjNyZW0gMCAwLjNyZW0gMDtcXG4gICAgcGFkZGluZzowLjhyZW0gMCAwLjhyZW0gMC41cmVtO1xcbn1cXG5cXG4jcHJvamVjdHMtdGl0bGUsIGRpdiNwcm9qZWN0c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmRpdiNwcm9qZWN0LWNvbnRlbnR7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmRpdiN0YXNrLWNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDcsIDIzMSwgMC43NDEpO1xcbiAgICBwYWRkaW5nOiAwIDEuM3JlbTtcXG4gICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcXG59XFxuXFxuYnV0dG9uI2FkZC10YXNrLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjNWM1O1xcbn1cXG5idXR0b24uYWRkLWJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHJnYigxMjQsIDgyLCA1OSk7XFxuICAgIHBhZGRpbmc6MC44cmVtO1xcbiAgICBtYXJnaW46IDAuM3JlbSAwO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiN0YXNrLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbiN0YXNrLWlucHV0LWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3Rhc2ssXFxuI2R1ZURhdGUsXFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0bixcXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuLFxcbmJ1dHRvbi50YXNrLWJ0blxcbntcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbjowIDAuMXJlbSAwIDAuMXJlbTtcXG59XFxuXFxuI3Rhc2staW5wdXR7XFxuICAgIHdpZHRoOjUwJTtcXG59XFxuI2RhdGV7XFxuICAgIHdpZHRoOjMwJTtcXG59XFxuYnV0dG9uLnRhc2stYnRue1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgd2lkdGg6IDIwJTtcXG5cXG59XFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bixidXR0b24udGFzay1kZWxldGUtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICB3aWR0aDogNSU7XFxufVxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG46aG92ZXIsXFxuLnRhc2stZGVsZXRlLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTAyLCAxMDIpO1xcbn1cXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxODIsIDEwNSk7XFxufVxcbmJ1dHRvbi50YXNrLWVkaXQtYnRuOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxOCwgMjEwKTtcXG59XFxudWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5saXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcbi50YXNrLWNoZWNrYm94e1xcbiAgICBsZWZ0OjA7XFxuICAgIHNpemU6M3JlbTtcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbi50YXNrLXRleHR7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXG59XFxuLnRhc2stZGF0ZXtcXG4gICAgd2lkdGg6IDUuNXJlbTtcXG4gICAgcmlnaHQ6NXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXG59XFxuLnRhc2stZGVsZXRlLWJ0bntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OjA7XFxufVxcbiNwcm9qZWN0LWlucHV0e1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG4ucHJvamVjdHtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG59XFxuLnByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA4LCAyMDksIDIwOSwgMC41Nyk7XFxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xcbn1cXG5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTpmb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkZGNkYztcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLFFBQVE7SUFDUixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNDQUFzQztJQUMxQztJQUNBO0lBQ0EsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDOzs7YUFHUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLHNDQUFzQztJQUN0Qzt5Q0FDcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsNEJBQTRCO0FBQ2hDOztBQUVBOzs7Ozs7SUFNSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsVUFBVTs7QUFFZDtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFNBQVM7QUFDYjtBQUNBOztJQUVJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLE1BQU07SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsT0FBTztBQUNYO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQ0FBMkM7SUFDM0MsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsNzAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NTBweCkge1xcbiAgICAjbWFpbi1jb250YWluZXJ7IFxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gMzByZW0gMWZyO1xcbiAgICB9XFxuICAgICN0YXNrLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6MzByZW07XFxuICAgIH1cXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDFmciAwLjAzcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIFxcXCJcXG4gICAgXFxcIm1haW4tY29udGFpbmVyXFxcIlxcbiAgICBcXFwiZm9vdGVyXFxcIiA7XFxuICAgIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuaDF7XFxuICAgIGdyaWQtYXJlYTpoZWFkZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNWZhYztcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMDAlO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG59XFxuc2VjdGlvbiNtYWluLWNvbnRhaW5lcnsgXFxuICAgIGdyaWQtYXJlYTptYWluLWNvbnRhaW5lcjsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTJyZW0gNTByZW0gMWZyOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIDUwcmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm5hdi1iYXIgdGFzay1jb250YWluZXIgcmlnaHQtY29sdW1uXFxcIjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuc2VjdGlvbiNuYXYtYmFye1xcbiAgICBncmlkLWFyZWE6bmF2LWJhcjsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGVkZWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgXFxufVxcblxcbnNlY3Rpb24jdGFzay1jb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTp0YXNrLWNvbnRhaW5lcjtcXG4gICAgcGFkZGluZzoycmVtO1xcbn1cXG5cXG5zZWN0aW9uI3JpZ2h0LWNvbHVtbntcXG4gICAgZ3JpZC1hcmVhOnJpZ2h0LWNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBlZGVkO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZSwgI3RpdGxlIHtcXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gMC4zcmVtO1xcbn1cXG4jcHJvamVjdHMtY29udGFpbmVye1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG59XFxuLm5hdi1pdGVte1xcbmp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuLm5hdi1pdGVtOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjYWM1YzU7XFxufVxcbi5uYXYtaXRlbSwjYWRkLXRhc2stYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRjZGM7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuI2hvbWUsICN0b2RheXtcXG4gICAgbWFyZ2luOjAuM3JlbSAwIDAuM3JlbSAwO1xcbiAgICBwYWRkaW5nOjAuOHJlbSAwIDAuOHJlbSAwLjVyZW07XFxufVxcblxcbiNwcm9qZWN0cy10aXRsZSwgZGl2I3Byb2plY3Rze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuZGl2I3Byb2plY3QtY29udGVudHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuZGl2I3Rhc2stY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NywgMjMxLCAwLjc0MSk7XFxuICAgIHBhZGRpbmc6IDAgMS4zcmVtO1xcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xcbn1cXG5cXG5idXR0b24jYWRkLXRhc2stYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjYWM1YzU7XFxufVxcbmJ1dHRvbi5hZGQtYnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDEyNCwgODIsIDU5KTtcXG4gICAgcGFkZGluZzowLjhyZW07XFxuICAgIG1hcmdpbjogMC4zcmVtIDA7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3Rhc2stbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI3Rhc2staW5wdXQtYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdGFzayxcXG4jZHVlRGF0ZSxcXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuLFxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG4sXFxuYnV0dG9uLnRhc2stYnRuXFxue1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOjAgMC4xcmVtIDAgMC4xcmVtO1xcbn1cXG5cXG4jdGFzay1pbnB1dHtcXG4gICAgd2lkdGg6NTAlO1xcbn1cXG4jZGF0ZXtcXG4gICAgd2lkdGg6MzAlO1xcbn1cXG5idXR0b24udGFzay1idG57XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICB3aWR0aDogMjAlO1xcblxcbn1cXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuLGJ1dHRvbi50YXNrLWRlbGV0ZS1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIHdpZHRoOiA1JTtcXG59XFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bjpob3ZlcixcXG4udGFzay1kZWxldGUtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxMDIsIDEwMik7XFxufVxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDE4MiwgMTA1KTtcXG59XFxuYnV0dG9uLnRhc2stZWRpdC1idG46aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE4LCAyMTApO1xcbn1cXG51bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxufVxcbmxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuLnRhc2stY2hlY2tib3h7XFxuICAgIGxlZnQ6MDtcXG4gICAgc2l6ZTozcmVtO1xcbiAgICBwYWRkaW5nOjFyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLnRhc2stdGV4dHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kYXRle1xcbiAgICB3aWR0aDogNS41cmVtO1xcbiAgICByaWdodDo1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kZWxldGUtYnRue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6MDtcXG59XFxuI3Byb2plY3QtaW5wdXR7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcbi5wcm9qZWN0e1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG4ucHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDIwOSwgMjA5LCAwLjU3KTtcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxufVxcbmZvb3RlcntcXG4gICAgZ3JpZC1hcmVhOmZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRkY2RjO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZnVuY3Rpb24gZGVsZXRlRWxlbWVudEJ5SWQoSWQpe1xuICAgIGlmICh0eXBlb2YgSWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke0lkfWApO1xuICAgICAgICBpZihlbGVtZW50SUQpe1xuICAgICAgICAgICAgZWxlbWVudElELnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVFbGVtZW50QnlFdmVudChldmVudCl7XG4gICAgaWYgKHR5cGVvZiBldmVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudElEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZXZlbnQudGFyZ2V0LmlkfWApLnBhcmVudE5vZGU7XG4gICAgICAgIGlmKGVsZW1lbnRJRCl7XG4gICAgICAgICAgICBlbGVtZW50SUQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09PSAnY2FuY2VsLXRhc2staW5wdXQtYnRuJyl7XG4gICAgICAgIGRpc3BsYXlBZGRUYXNrQnRuKHRydWUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUFkZFRhc2tCdG4oc3RhdGVtZW50KSB7XG4gICAgY29uc3QgYWRkVGFza2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKTtcbiAgICBpZiAoc3RhdGVtZW50KSB7XG4gICAgICAgIGFkZFRhc2tidG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH1cbiAgICBlbHNlIGlmICghc3RhdGVtZW50KSB7XG4gICAgICAgIGFkZFRhc2tidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn1cblxuZXhwb3J0e1xuICAgICAgZGVsZXRlRWxlbWVudEJ5SWQsXG4gICAgICBkZWxldGVFbGVtZW50QnlFdmVudCxcbiAgICAgIGRpc3BsYXlBZGRUYXNrQnRuLFxuICAgIH0iLCJpbXBvcnQgeyB0YXNrTGlzdCwgZWRpdFRhc2sgfSBmcm9tIFwiLi90YXNrTGF5b3V0XCI7XG5pbXBvcnQgeyBkZWxldGVFbGVtZW50QnlJZH0gZnJvbSBcIi4vRE9NZnVuY3Rpb25cIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdExheW91dFwiO1xuaW1wb3J0IHsgZ2V0VGl0bGUsIG5hdkluZm8gfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jbGFzcyB0YXNrIHtcbiAgY29uc3RydWN0b3IodGFzaywgZHVlRGF0ZSwgbGlzdE5hbWUpIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG4gICAgdGhpcy5kYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMubGlzdE5hbWUgPSBsaXN0TmFtZVxuICB9XG59XG5cbmNvbnN0IGdldFRvZGF5RGF0ZSA9ICgoKSA9PiB7XG4gIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgdmFyIHl5eXkgPSBTdHJpbmcodG9kYXkuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiB7IGRkLCBtbSwgeXl5eSB9O1xufSlcblxuY29uc3QgdGFza0Z1bmMgPSAoKCkgPT4ge1xuXG4gIHZhciB0YXNrQXJyYXkgPSBbXTtcbiAgdmFyIHNlbGVjdGVkVGFza0FycmF5ID0gW107XG5cbiAgICBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBsZXQgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQnKS52YWx1ZTtcbiAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgICAgbGV0IGxpc3ROYW1lID0gbmF2SW5mby5uYXZbbmF2SW5mby5uYXYubGVuZ3RoLTFdO1xuXG4gICAgICAgIGlmICghZHVlRGF0ZUlucHV0KSB7XG4gICAgICAgICAgbGV0IHRvZGF5ID0gZ2V0VG9kYXlEYXRlKCk7XG4gICAgICAgICAgZHVlRGF0ZUlucHV0ID0gdG9kYXkueXl5eSArICcvJyArICh0b2RheS5tbSkgKyAnLycgKyB0b2RheS5kZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkdWVEYXRlSW5wdXQgPSBkdWVEYXRlSW5wdXQucmVwbGFjZSgvLS9nLCAnLycpO1xuICAgICAgICB9XG5cbiAgICAgIGxldCBuZXdUYXNrID0gbmV3IHRhc2sodGFza0lucHV0LCBkdWVEYXRlSW5wdXQsIGxpc3ROYW1lKTtcbiAgICAgIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgICAgY29uc29sZS5sb2codGFza0FycmF5KTtcbiAgICAgIHRhc2tMaXN0LmxheW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIGxldCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpLnZhbHVlO1xuICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICBkdWVEYXRlSW5wdXQgPSBkdWVEYXRlSW5wdXQucmVwbGFjZSgvLS9nLCAnLycpO1xuXG4gICAgICBsZXQgc2VsZWN0ZWRUYXNrQXJyYXkgPSBlZGl0VGFzay50YXNrTnVtO1xuICAgICAgbGV0IGN1cnJlbnRTZWxlY3Rpb25JbmRleCA9IGVkaXRUYXNrLnRhc2tOdW0ubGVuZ3RoLTE7XG4gICAgICBsZXQgY3VycmVudFRhc2tOdW0gPSBzZWxlY3RlZFRhc2tBcnJheVtjdXJyZW50U2VsZWN0aW9uSW5kZXhdO1xuXG4gICAgICB0YXNrQXJyYXlbY3VycmVudFRhc2tOdW1dLnRhc2sgPSB0YXNrSW5wdXQ7XG4gICAgICB0YXNrQXJyYXlbY3VycmVudFRhc2tOdW1dLmRhdGUgPSBkdWVEYXRlSW5wdXQ7XG4gICAgICB0YXNrTGlzdC5sYXlvdXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWwoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHRhc2tOdW0gPSBldmVudC5wYXRoWzFdLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoYHRhc2stJHt0YXNrTnVtfWApO1xuICAgICAgdGFza0FycmF5LnNwbGljZSh0YXNrTnVtLDEpO1xuICAgIH1cblxuICByZXR1cm4ge1xuICAgIGxpc3Q6IHRhc2tBcnJheSxcbiAgICBzZWxlY3RlZExpc3QgOiBzZWxlY3RlZFRhc2tBcnJheSxcbiAgICBhZGQsXG4gICAgdXBkYXRlLFxuICAgIGRlbFxuICB9XG5cbn0pKCk7XG5cbmNvbnN0IHByb2plY3RGdW5jID0gKCgpPT4ge1xuXG4gIHZhciBwcm9qZWN0QXJyYXk9W107XG5cbiAgICBmdW5jdGlvbiBhZGQoKXtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKS52YWx1ZTtcbiAgICAgIHByb2plY3RBcnJheS5wdXNoKGlucHV0KTtcbiAgICAgIG5hdkluZm8udXBkYXRlTGlzdChpbnB1dCk7XG4gICAgICBwcm9qZWN0TGlzdC5sYXlvdXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKXtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKS52YWx1ZTtcbiAgICAgIG5hdkluZm8uZWRpdExpc3QoaW5wdXQpO1xuICAgICAgbGV0IGxhc3RJbmRleCA9IG5hdkluZm8ucHJvamVjdEluZGV4QXJyW25hdkluZm8ucHJvamVjdEluZGV4QXJyLmxlbmd0aC0xXTtcbiAgICAgIHByb2plY3RBcnJheVtsYXN0SW5kZXhdPWlucHV0O1xuICAgICAgZ2V0VGl0bGUoaW5wdXQpO1xuICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3Byb2plY3QtZWRpdC1idG4nKTtcbiAgICAgIHByb2plY3RMaXN0LmxheW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbCgpe1xuICAgICAgbGV0IGxhc3RJbmRleCA9IG5hdkluZm8ucHJvamVjdEluZGV4QXJyW25hdkluZm8ucHJvamVjdEluZGV4QXJyLmxlbmd0aC0xXTtcbiAgICAgIHByb2plY3RBcnJheS5zcGxpY2UobGFzdEluZGV4LDEpO1xuICAgICAgbmF2SW5mby5kZWxMaXN0KCk7XG4gICAgICAvLy9yZW1lbWJlciB0byByZW1vdmUgYWxsIHRhc2tcbiAgICAgIHByb2plY3RMaXN0LmxheW91dCgpO1xuICAgIH1cblxuICByZXR1cm4ge1xuICAgIGxpc3Q6IHByb2plY3RBcnJheSxcbiAgICBhZGQsXG4gICAgdXBkYXRlLFxuICAgIGRlbFxuICB9XG5cbn0pKCk7XG5leHBvcnQgeyBnZXRUb2RheURhdGUsIHRhc2tGdW5jLCBwcm9qZWN0RnVuYyB9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB0YXNrSW5wdXQsIHRhc2tMaXN0IH0gZnJvbSAnLi90YXNrTGF5b3V0LmpzJztcbmltcG9ydCB7IHByb2plY3RJbnB1dCwgZWRpdFByb2plY3QgfSBmcm9tICcuL3Byb2plY3RMYXlvdXQnO1xuaW1wb3J0IHsgZGlzcGxheUFkZFRhc2tCdG4sIGRlbGV0ZUVsZW1lbnRCeUlkIH0gZnJvbSAnLi9ET01mdW5jdGlvbic7XG5pbXBvcnQgeyB0YXNrRnVuYyB9IGZyb20gJy4vZnVuY3Rpb24nO1xuXG5cbmNvbnN0IGdldFRpdGxlID0gKHRleHQpID0+IHtcbiAgICBkZWxldGVFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWNvbnRlbnQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGl0bGUuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IGAke3RleHR9YDtcbiAgICB0YXNrQ29udGVudC5wcmVwZW5kKHRpdGxlKTtcbn1cblxuY29uc3QgbmF2SW5mbyA9ICgoKSA9PiB7XG4gICAgdmFyIGxpc3QgPSBbJ2hvbWUnLCd0b2RheSddO1xuICAgIHZhciBzZWxlY3RlZFByb2plY3QgPSBbXTtcbiAgICB2YXIgc2VsZWN0ZWROYXZJdGVtID0gW107XG4gICAgdmFyIG5hdk51bSA9IFtdOyBcbiAgICB2YXIgcHJvTnVtID0gW107XG4gICAgdmFyIGxhc3RTZWxlY3RlZE51bTsgXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMaXN0KGlucHV0KXtcbiAgICAgICAgbGlzdC5wdXNoKGlucHV0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0TGlzdChpbnB1dCl7XG4gICAgICAgbGlzdFtsYXN0U2VsZWN0ZWROdW1dID0gaW5wdXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbExpc3QoKXtcbiAgICAgICAgbGlzdC5zcGxpY2UobGFzdFNlbGVjdGVkTnVtLDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdChldmVudCl7XG4gICAgICAgIGxldCBudW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuaWR9YCkuZ2V0QXR0cmlidXRlKCduYXYnKTtcbiAgICAgICAgbmF2TnVtLnB1c2gobnVtKTtcbiAgICAgICAgbGFzdFNlbGVjdGVkTnVtID0gbmF2TnVtW25hdk51bS5sZW5ndGgtMV07XG4gICAgICAgIF9nZXRDdXJyZW50TmF2SXRlbShsYXN0U2VsZWN0ZWROdW0pO1xuICAgICAgICBfZ2V0Q3VycmVudFByb2plY3QobGFzdFNlbGVjdGVkTnVtKTtcbiAgICAgICAgZ2V0UHJvamVjdEluZGV4KGxhc3RTZWxlY3RlZE51bSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9nZXRDdXJyZW50UHJvamVjdChudW0pe1xuICAgICAgICBpZihudW0gPiAxKXtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gbGlzdFtudW1dO1xuICAgICAgICBzZWxlY3RlZFByb2plY3QucHVzaChwcm9qZWN0TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdEluZGV4KG51bSl7XG4gICAgICAgIGlmKG51bSA+IDEpeyBcbiAgICAgICAgbnVtPW51bS0yO1xuICAgICAgICBwcm9OdW0ucHVzaChudW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9nZXRDdXJyZW50TmF2SXRlbShudW0pe1xuICAgICAgICBsZXQgbmF2SXRlbSA9IGxpc3RbbnVtXTtcbiAgICAgICAgc2VsZWN0ZWROYXZJdGVtLnB1c2gobmF2SXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlTGlzdCxcbiAgICAgICAgZWRpdExpc3QsXG4gICAgICAgIGRlbExpc3QsXG4gICAgICAgIHNlbGVjdCxcbiAgICAgICAgcHJvamVjdDogc2VsZWN0ZWRQcm9qZWN0LFxuICAgICAgICBuYXY6IHNlbGVjdGVkTmF2SXRlbSxcbiAgICAgICAgbGlzdDogbGlzdCxcbiAgICAgICAgcHJvamVjdEluZGV4QXJyOiBwcm9OdW1cbiAgICB9ICBcbn0pKCk7XG5cbmNvbnN0IGxvYWRQYWdlID0gKCgpID0+IHsgIFxuXG5jb25zdCBkZWZhdWx0VGl0bGUgPSAoKSA9PiB7XG4gICBnZXRUaXRsZSgnSG9tZScpO1xuICAgZGlzcGxheUFkZFRhc2tCdG4oZmFsc2UpO1xufVxuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgIGlmKCEhZG9jdW1lbnQpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheS5hbGxUYXNrKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5LnRvZGF5VGFzayk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RJbnB1dC5sYXlvdXQpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrSW5wdXQubGF5b3V0KTtcbiAgICAgICAgfSBcbiB9XG5cbmRlZmF1bHRUaXRsZSgpO1xuYWRkRXZlbnRMaXN0ZW5lcigpO1xufSk7XG5cbmNvbnN0IGRpc3BsYXkgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gYWxsVGFzayAoZXZlbnQpIHtcbiAgICAgICAgZ2V0VGl0bGUoJ0hvbWUnKTtcbiAgICAgICAgbmF2SW5mby5zZWxlY3QoZXZlbnQpO1xuICAgICAgICAvL3Rhc2tGdW5jLnNlbGVjdGVkTGlzdCA9IHRhc2tGdW5jLmxpc3QuZmlsdGVyKChsaXN0KT0+IGxpc3QpKTtcbiAgICAgICAgdGFza0xpc3QubGF5b3V0KCk7XG4gICAgICAgIGRpc3BsYXlBZGRUYXNrQnRuKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2RheVRhc2sgKGV2ZW50KSB7XG4gICAgICAgIGdldFRpdGxlKCdUb2RheScpO1xuICAgICAgICBuYXZJbmZvLnNlbGVjdChldmVudCk7XG4gICAgICAgIHRhc2tMaXN0LmxheW91dCgpO1xuICAgICAgICBkaXNwbGF5QWRkVGFza0J0bih0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0YXNrQnlOYXZJdGVtIChldmVudCl7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5pZH1gKTtcbiAgICAgICAgbmF2SW5mby5zZWxlY3QoZXZlbnQpO1xuICAgICAgICBnZXRUaXRsZShzZWxlY3RlZE5hdkl0ZW0udGV4dENvbnRlbnQpO1xuICAgICAgICB0YXNrTGlzdC5sYXlvdXQoKTtcbiAgICAgICAgZWRpdFByb2plY3QuYWRkRWRpdEJ0bigpO1xuICAgICAgICBkaXNwbGF5QWRkVGFza0J0bih0cnVlKTtcbiAgICB9XG5cbnJldHVybntcbiAgICBhbGxUYXNrLFxuICAgIHRvZGF5VGFzayxcbiAgICB0YXNrQnlOYXZJdGVtXG59XG59KSgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsbG9hZFBhZ2UpO1xuXG5leHBvcnR7IGRpc3BsYXksIG5hdkluZm8sIGdldFRpdGxlIH1cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgcHJvamVjdEZ1bmMgfSBmcm9tIFwiLi9mdW5jdGlvblwiO1xuaW1wb3J0IHsgZGlzcGxheSwgbmF2SW5mbyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBkZWxldGVFbGVtZW50QnlFdmVudCwgZGVsZXRlRWxlbWVudEJ5SWQgfSBmcm9tICcuL0RPTWZ1bmN0aW9uJztcblxuXG5jb25zdCBwcm9qZWN0SW5wdXQgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByZXZpb3VzRE9NKCkge1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgncHJvamVjdC1iYXInKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgICAgIF9kZWxldGVQcmV2aW91c0RPTSgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBwcm9qZWN0QmFyLmlkID0gXCJwcm9qZWN0LWJhclwiO1xuICAgICAgICBpbnB1dC5pZCA9IFwicHJvamVjdC1pbnB1dFwiO1xuICAgICAgICBhZGQuaWQgPSBcImFkZC1wcm9qZWN0LWlucHV0LWJ0blwiO1xuICAgICAgICBjYW5jZWwuaWQgPSBcImNhbmNlbC1wcm9qZWN0LWlucHV0LWJ0blwiO1xuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnRGVmYXVsdCBwcm9qZWN0Jyk7XG5cbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICAgICAgcHJvamVjdEJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RCYXIpO1xuICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgcHJvamVjdEJhci5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghIWRvY3VtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtaW5wdXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuYy5hZGQpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1wcm9qZWN0LWlucHV0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEZ1bmMuZGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxheW91dFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGVudCcpO1xuXG4gICAgZnVuY3Rpb24gbGF5b3V0KCkge1xuXG4gICAgICAgIF9kZWxldGVQcmV2aW91c0RPTSgpO1xuICAgICAgICBmb3IgKGxldCBpIGluIHByb2plY3RGdW5jLmxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgcHJvamVjdC5pZCA9IGBwcm9qZWN0LSR7aX1gO1xuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgncHJvamVjdCcsIGAke2l9YCk7XG4gICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHByb2plY3RGdW5jLmxpc3RbaV0pO1xuXG4gICAgICAgICAgICBsZXQgbmF2Q29kZSA9IE51bWJlcihpKSArIDI7XG4gICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnbmF2JyxgJHtuYXZDb2RlfWApO1xuXG4gICAgICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdEZ1bmMubGlzdFtpXTtcbiAgICAgICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByZXZpb3VzRE9NKCkge1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgncHJvamVjdC1iYXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykpO1xuICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChlbGUpID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlKSA9PiBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXkudGFza0J5TmF2SXRlbSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxheW91dFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGVkaXRQcm9qZWN0ID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIGFkZEJ0bigpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgICAgIGVkaXQuaWQgPSBcInByb2plY3QtZWRpdC1idG5cIjtcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbC50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICAgIGRlbC5pZCA9IFwicHJvamVjdC1kZWwtYnRuXCI7XG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGRlbCk7XG5cbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXJUb0J0bigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxheW91dCgpIHtcbiAgICAgICAgX2RlbGV0ZVByZXZpb3VzRE9NKCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBwcm9qZWN0QmFyLmlkID0gXCJwcm9qZWN0LWJhclwiO1xuICAgICAgICBpbnB1dC5pZCA9IFwicHJvamVjdC1pbnB1dFwiO1xuICAgICAgICBhZGQuaWQgPSBcImFkZC1wcm9qZWN0LWlucHV0LWJ0blwiO1xuICAgICAgICBjYW5jZWwuaWQgPSBcImNhbmNlbC1wcm9qZWN0LWlucHV0LWJ0blwiO1xuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICAgICAgbGV0IGxhc3RTZWxlY3RlZFByb2plY3QgPSBuYXZJbmZvLnByb2plY3RbbmF2SW5mby5wcm9qZWN0Lmxlbmd0aC0xXTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke2xhc3RTZWxlY3RlZFByb2plY3R9YCk7XG5cbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICAgICAgcHJvamVjdEJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RCYXIpO1xuICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgcHJvamVjdEJhci5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXJUb0lucHV0QmFyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByZXZpb3VzRE9NKCkge1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgncHJvamVjdC1iYXInKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lclRvSW5wdXRCYXIoKSB7XG4gICAgICAgIGNvbnN0IGFkZCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtaW5wdXQtYnRuJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtcHJvamVjdC1pbnB1dC1idG4nKTtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEZ1bmMudXBkYXRlKTtcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlRWxlbWVudEJ5RXZlbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVyVG9CdG4oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWVkaXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsYXlvdXQpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZWwtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuYy5kZWwpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZEVkaXRCdG46IGFkZEJ0blxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7ICBwcm9qZWN0SW5wdXQsIHByb2plY3RMaXN0LCBlZGl0UHJvamVjdCB9IiwiaW1wb3J0IHsgdGFza0Z1bmMgfSBmcm9tIFwiLi9mdW5jdGlvblwiXG5cbmltcG9ydCB7XG4gICAgZGVsZXRlRWxlbWVudEJ5SWQsXG4gICAgZGVsZXRlRWxlbWVudEJ5RXZlbnQsXG4gICAgZGlzcGxheUFkZFRhc2tCdG5cbn0gZnJvbSAnLi9ET01mdW5jdGlvbi5qcydcblxuXG5jb25zdCB0YXNrSW5wdXQgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByZXZpb3VzRE9NKCkge1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgndGFzay1pbnB1dC1iYXInKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgICAgIF9kZWxldGVQcmV2aW91c0RPTSgpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY29udGVudCcpO1xuICAgICAgICBjb25zdCB0YXNrQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2RlZmF1bHQgdGFzaycpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG5cbiAgICAgICAgdGFza0Jhci5pZCA9IFwidGFzay1pbnB1dC1iYXJcIjtcbiAgICAgICAgaW5wdXQuaWQgPSBcInRhc2staW5wdXRcIjtcbiAgICAgICAgZGF0ZS5pZCA9IFwiZHVlRGF0ZVwiO1xuICAgICAgICBhZGQuaWQgPSBcImFkZC10YXNrLWlucHV0LWJ0blwiO1xuICAgICAgICBjYW5jZWwuaWQgPSBcImNhbmNlbC10YXNrLWlucHV0LWJ0blwiO1xuICAgICAgICBhZGQuY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIpO1xuXG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGFkZCk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kKHRhc2tCYXIpO1xuXG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIGRpc3BsYXlBZGRUYXNrQnRuKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1pbnB1dC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tGdW5jLmFkZCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXRhc2staW5wdXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVFbGVtZW50QnlFdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsYXlvdXRcbiAgICB9XG59KSgpO1xuXG5jb25zdCB0YXNrTGlzdCA9ICgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJldmlvdXNET00oKSB7XG4gICAgICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcbiAgICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQtYmFyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF5b3V0KCkge1xuXG4gICAgICAgIF9kZWxldGVQcmV2aW91c0RPTSgpO1xuICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCB0YXNrQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staW5wdXQtYmFyJyk7XG5cbiAgICAgICAgdGFza0xpc3QuaWQgPSBcInRhc2stbGlzdFwiO1xuICAgICAgICB0YXNrQ29udGVudC5pbnNlcnRCZWZvcmUodGFza0xpc3QsIHRhc2tCYXIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGFza0Z1bmMubGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICAgICAgICAgICAgdGFzay5pZCA9IGB0YXNrLSR7W2ldfWA7XG4gICAgICAgICAgICBlZGl0LmlkID0gYHRhc2stZWRpdC1idG4tJHtbaV19YDtcbiAgICAgICAgICAgIGRlbC5pZCA9IGB0YXNrLWNhbmNlbC1idG4tJHtbaV19YDtcblxuICAgICAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBgJHtpfWApO1xuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKTtcblxuICAgICAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBgJHtpfWApO1xuICAgICAgICAgICAgZGVsLnNldEF0dHJpYnV0ZSgnZGF0YScsIGAke2l9YCk7XG5cbiAgICAgICAgICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpO1xuICAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrLXRleHQnKTtcbiAgICAgICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XG4gICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVkaXQtYnRuXCIpO1xuICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1idG5cIik7XG5cbiAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1idG4nKTtcbiAgICAgICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ0bicpO1xuXG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYCR7dGFza0Z1bmMubGlzdFtpXS50YXNrfWA7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7dGFza0Z1bmMubGlzdFtpXS5kYXRlfWA7XG4gICAgICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgICAgICAgICBkZWwudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgICAgICAgIF9hZGRFdmVudExpc3RlbmVyKCk7XG4gICAgICAgICAgICBkaXNwbGF5QWRkVGFza0J0bih0cnVlKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcblxuICAgICAgICBpZighIWRvY3VtZW50KXtcbiAgICAgICAgICAgIGNvbnN0IGRlbCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGVsLWJ0bicpKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWVkaXQtYnRuJykpO1xuICAgICAgICAgICAgZGVsLmZvckVhY2goKGVsZSk9PntcbiAgICAgICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRhc2tGdW5jLmRlbCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWRpdC5mb3JFYWNoKChlbGUpPT57XG4gICAgICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlZGl0VGFzay5sYXlvdXQpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBsYXlvdXRcbiAgICB9XG59KSgpO1xuXG5cbmNvbnN0IGVkaXRUYXNrID0gKCgpID0+IHtcblxuICAgIGxldCB0YXNrTnVtQXJyYXkgPSBbXTtcblxuICAgIGZ1bmN0aW9uIF9kZWxldGVQcmV2aW91c0RPTSgpIHtcbiAgICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQtYmFyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF5b3V0KGV2ZW50KSB7XG4gICAgICAgIF9kZWxldGVQcmV2aW91c0RPTSgpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZGVmYXVsdCB0YXNrJyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuICAgICAgICB0YXNrQmFyLmlkID0gXCJ0YXNrLWlucHV0LWJhclwiO1xuICAgICAgICBpbnB1dC5pZCA9IFwidGFzay1pbnB1dFwiO1xuICAgICAgICBkYXRlLmlkID0gXCJkdWVEYXRlXCI7XG4gICAgICAgIGFkZC5pZCA9IFwiYWRkLXRhc2staW5wdXQtYnRuXCI7XG4gICAgICAgIGNhbmNlbC5pZCA9IFwiY2FuY2VsLXRhc2staW5wdXQtYnRuXCI7XG4gICAgICAgIGFkZC5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5cIik7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5cIik7XG5cbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICAgICAgdGFza0Jhci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICAgICAgdGFza0Jhci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgICAgICB0YXNrQmFyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAgICAgY29uc3QgdGFza051bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5pZH1gKS5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza051bX1gKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0VGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gICAgICAgIC8vaW5zZXJ0IHRhc2sgaW5wdXQgYmFyIGJlZm9yZSBzZWxlY3RlZCBlZGl0IGxpc3RcbiAgICAgICAgc2VsZWN0VGFza0xpc3QuaW5zZXJ0QmVmb3JlKHRhc2tCYXIsIHRhc2spO1xuICAgICAgICAvL2Rpc3BsYXkgaGlkZGVuIHRhc2tcbiAgICAgICAgc2VsZWN0VGFza0xpc3QuY2hpbGROb2Rlcy5mb3JFYWNoKChsaXN0KSA9PiBsaXN0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIik7XG4gICAgICAgIC8vaGlkZSBlZGl0ZWQgdGFza1xuICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBfcHJldmlld1Rhc2tJbmZvSW5JbnB1dEJhcih0YXNrTnVtKTtcbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgZ2V0U2VsZWN0ZWRUYXNrTnVtKHRhc2tOdW0pO1xuICAgICAgICBkaXNwbGF5QWRkVGFza0J0bihmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VsZWN0ZWRUYXNrTnVtID0gKHRhc2tOdW0pID0+IHtcbiAgICAgICAgdGFza051bUFycmF5LnB1c2godGFza051bSk7XG4gICAgICAgIHJldHVybiB0YXNrTnVtQXJyYXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3ByZXZpZXdUYXNrSW5mb0luSW5wdXRCYXIodGFza051bSkge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHt0YXNrTnVtfWApO1xuICAgICAgICBjb25zdCB0YXNrQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWlucHV0LWJhclwiKTtcbiAgICAgICAgdGFza0Jhci5jaGlsZE5vZGVzWzBdLnZhbHVlID0gdGFzay5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCB5ID0gdGFzay5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50LnNsaWNlKDAsIDQpO1xuICAgICAgICBjb25zdCBtID0gdGFzay5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50LnNsaWNlKDUsIDcpO1xuICAgICAgICBjb25zdCBkID0gdGFzay5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50LnNsaWNlKDgsIDEwKTtcbiAgICAgICAgdGFza0Jhci5jaGlsZE5vZGVzWzFdLnZhbHVlID0geSArICctJyArIG0gKyAnLScgKyBkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBpZiAoISFkb2N1bWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWlucHV0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza0Z1bmMudXBkYXRlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtdGFzay1pbnB1dC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tGdW5jLmRlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHRhc2tOdW06IHRhc2tOdW1BcnJheVxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IHsgdGFza0lucHV0LCB0YXNrTGlzdCwgZWRpdFRhc2sgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=