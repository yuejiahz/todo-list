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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin:0;\n    font-family: 'Roboto', sans-serif;\n}\n@media screen and (max-width:850px) {\n    #main-container{ \n        display: grid;\n        grid-template-columns: 15rem 30rem 1fr;\n    }\n    #task-container{\n    width:30rem;\n    }\n}\n\nmain{\n    display: grid;\n    grid-template-rows: 3rem 1fr 0.03rem;\n    grid-template-areas:\n    \"header \"\n    \"main-container\"\n    \"footer\" ;\n    height:100vh;\n}\n\nh1{\n    grid-area:header;\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    text-align: center;\n    font-size: 300%;\n    line-height: 3rem;\n}\nsection#main-container{ \n    grid-area:main-container; \n    display: grid;\n    /* grid-template-columns: 15rem 50rem 1fr; */\n    grid-template-columns: 5rem 50rem 1fr;\n    grid-template-areas:\n    \"nav-bar task-container right-column\";\n    overflow-y: auto;\n}\n\nsection#nav-bar{\n    grid-area:nav-bar;  \n    background-color:#f0eded;\n    font-family: 'Roboto', sans-serif; \n}\n\nsection#task-container{\n    grid-area:task-container;\n    padding:2rem;\n}\n\nsection#right-column{\n    grid-area:right-column;\n    background-color:#f0eded;\n}\n\n#project-title, #title {\n    padding: 1rem 0 1rem 0.3rem;\n}\n.nav-item{\njustify-self: stretch;\n}\n.nav-item:hover{\n    background-color:#cac5c5;\n}\n.nav-item,#add-task-btn{\n    border: none;\n    background-color:#dddcdc;\n}\n#home, #today{\n    margin:0.3rem 0 0.3rem 0;\n    padding:0.8rem 0 0.8rem 0.5rem;\n}\nbutton#add-project{\n    width:7.8rem;\n    margin-left:0.5rem;\n}\n#projects-title, div#projects{\n    background-color: transparent;\n}\n\ndiv#project-content{\n    overflow-y: auto;\n}\n\ndiv#task-content{\n    background-color: wheat;\n    padding: 0 1.3rem;\n    overflow-x: visible;\n}\n\n#add-task-banner{\n    height:1rem;\n}\n\nbutton#add-task-btn{\n    text-align: center;\n}\nbutton#add-task-btn:hover{\n    background-color:#cac5c5;\n}\nbutton.add-btn{\n    border-radius: 20px;\n    color: rgb(124, 82, 59);\n    margin:0.2rem;\n    padding:0.8rem;\n    width:100%;\n    border: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n#task-input-bar{\n    background-color: rgb(65, 65, 65);\n    height: 1.6rem;\n    padding: 0.5rem;\n    margin:auto;\n    display: flex;\n    align-content: stretch;\n}\n\n#task,\n#dueDate,\nbutton#add-task-input-btn,\nbutton#cancel-task-input-btn,\nbutton.task-btn\n{\n    border-radius: 5px;\n    border: none;\n    margin:0 0.1rem 0 0.1rem;\n}\n\n#task{\n    flex-grow: 1;\n}\n#date{\n    width:30%;\n}\nbutton.task-btn{\n    font-weight: bold;\n}\n\nbutton#add-task-input-btn{\n    background-color: lightgreen;\n    width: 20%;\n\n}\nbutton#cancel-task-input-btn,button.task-delete-btn{\n    background-color: lightcoral;\n    width: 5%;\n}\nbutton#cancel-task-input-btn:hover,\n.task-delete-btn:hover{\n    background-color: rgb(194, 102, 102);\n}\nbutton#add-task-input-btn:hover{\n    background-color: rgb(105, 182, 105);\n}\nbutton.task-edit-btn:hover{\nbackground-color: rgb(214, 218, 210);\n}\nli{\n    list-style-type: none;\n    display: flex;\n    padding: 1rem;\n    line-height: 1.6rem;\n}\n.task-checkbox{\n    size:3rem;\n    padding:1rem;\n    margin:auto;\n}\n.task-text{\n    flex-grow: 1;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-date{\n    width: 5.5rem;\n    right:5rem;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-delete-btn{\n    text-align: center;\n    position: relative;\n    right:0;\n}\nfooter{\n    grid-area:footer;\n    background-color:#dddcdc;\n    align-self: stretch;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,QAAQ;IACR,iCAAiC;AACrC;AACA;IACI;QACI,aAAa;QACb,sCAAsC;IAC1C;IACA;IACA,WAAW;IACX;AACJ;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC;;;aAGS;IACT,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,uCAAuC;IACvC,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,4CAA4C;IAC5C,qCAAqC;IACrC;yCACqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;AACA;AACA,qBAAqB;AACrB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,wBAAwB;IACxB,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,cAAc;IACd,UAAU;IACV,YAAY;IACZ,iCAAiC;IACjC,eAAe;AACnB;AACA;IACI,iCAAiC;IACjC,cAAc;IACd,eAAe;IACf,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;;;;IAMI,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,UAAU;;AAEd;AACA;IACI,4BAA4B;IAC5B,SAAS;AACb;AACA;;IAEI,oCAAoC;AACxC;AACA;IACI,oCAAoC;AACxC;AACA;AACA,oCAAoC;AACpC;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,SAAS;IACT,YAAY;IACZ,WAAW;AACf;AACA;IACI,YAAY;IACZ,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,UAAU;IACV,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;AACX;AACA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&family=Roboto&display=swap');\n*{\n    margin:0;\n    font-family: 'Roboto', sans-serif;\n}\n@media screen and (max-width:850px) {\n    #main-container{ \n        display: grid;\n        grid-template-columns: 15rem 30rem 1fr;\n    }\n    #task-container{\n    width:30rem;\n    }\n}\n\nmain{\n    display: grid;\n    grid-template-rows: 3rem 1fr 0.03rem;\n    grid-template-areas:\n    \"header \"\n    \"main-container\"\n    \"footer\" ;\n    height:100vh;\n}\n\nh1{\n    grid-area:header;\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    text-align: center;\n    font-size: 300%;\n    line-height: 3rem;\n}\nsection#main-container{ \n    grid-area:main-container; \n    display: grid;\n    /* grid-template-columns: 15rem 50rem 1fr; */\n    grid-template-columns: 5rem 50rem 1fr;\n    grid-template-areas:\n    \"nav-bar task-container right-column\";\n    overflow-y: auto;\n}\n\nsection#nav-bar{\n    grid-area:nav-bar;  \n    background-color:#f0eded;\n    font-family: 'Roboto', sans-serif; \n}\n\nsection#task-container{\n    grid-area:task-container;\n    padding:2rem;\n}\n\nsection#right-column{\n    grid-area:right-column;\n    background-color:#f0eded;\n}\n\n#project-title, #title {\n    padding: 1rem 0 1rem 0.3rem;\n}\n.nav-item{\njustify-self: stretch;\n}\n.nav-item:hover{\n    background-color:#cac5c5;\n}\n.nav-item,#add-task-btn{\n    border: none;\n    background-color:#dddcdc;\n}\n#home, #today{\n    margin:0.3rem 0 0.3rem 0;\n    padding:0.8rem 0 0.8rem 0.5rem;\n}\nbutton#add-project{\n    width:7.8rem;\n    margin-left:0.5rem;\n}\n#projects-title, div#projects{\n    background-color: transparent;\n}\n\ndiv#project-content{\n    overflow-y: auto;\n}\n\ndiv#task-content{\n    background-color: wheat;\n    padding: 0 1.3rem;\n    overflow-x: visible;\n}\n\n#add-task-banner{\n    height:1rem;\n}\n\nbutton#add-task-btn{\n    text-align: center;\n}\nbutton#add-task-btn:hover{\n    background-color:#cac5c5;\n}\nbutton.add-btn{\n    border-radius: 20px;\n    color: rgb(124, 82, 59);\n    margin:0.2rem;\n    padding:0.8rem;\n    width:100%;\n    border: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n#task-input-bar{\n    background-color: rgb(65, 65, 65);\n    height: 1.6rem;\n    padding: 0.5rem;\n    margin:auto;\n    display: flex;\n    align-content: stretch;\n}\n\n#task,\n#dueDate,\nbutton#add-task-input-btn,\nbutton#cancel-task-input-btn,\nbutton.task-btn\n{\n    border-radius: 5px;\n    border: none;\n    margin:0 0.1rem 0 0.1rem;\n}\n\n#task{\n    flex-grow: 1;\n}\n#date{\n    width:30%;\n}\nbutton.task-btn{\n    font-weight: bold;\n}\n\nbutton#add-task-input-btn{\n    background-color: lightgreen;\n    width: 20%;\n\n}\nbutton#cancel-task-input-btn,button.task-delete-btn{\n    background-color: lightcoral;\n    width: 5%;\n}\nbutton#cancel-task-input-btn:hover,\n.task-delete-btn:hover{\n    background-color: rgb(194, 102, 102);\n}\nbutton#add-task-input-btn:hover{\n    background-color: rgb(105, 182, 105);\n}\nbutton.task-edit-btn:hover{\nbackground-color: rgb(214, 218, 210);\n}\nli{\n    list-style-type: none;\n    display: flex;\n    padding: 1rem;\n    line-height: 1.6rem;\n}\n.task-checkbox{\n    size:3rem;\n    padding:1rem;\n    margin:auto;\n}\n.task-text{\n    flex-grow: 1;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-date{\n    width: 5.5rem;\n    right:5rem;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-delete-btn{\n    text-align: center;\n    position: relative;\n    right:0;\n}\nfooter{\n    grid-area:footer;\n    background-color:#dddcdc;\n    align-self: stretch;\n}"],"sourceRoot":""}]);
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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "buttonAddEventListener": () => (/* binding */ buttonAddEventListener)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


let hasTaskInput = false;
let hasTaskList = false;

const title = () => {
    const titleContainer = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = "Today";
    title.id = "title";
    title.classList.add = "h3-title";
    titleContainer.appendChild(title);
    return titleContainer;
}

const appendTaskInputLayout = (task) => {

    //select task content div
    const taskContent = document.querySelector('#task-content');
    //create task input container
    const taskBar = document.createElement('div');
    taskBar.id = "task-input-bar";
    //insert html for task input
    taskBar.innerHTML = `
        <label for="task-input"> </label>
        <input type="text" id="task-input" name="task-input" value="default" placeholder="Task" >
        <label for="date"></label>
        <input type="date" id="dueDate" name="dueDate">
        <button id="add-task-input-btn" class="task-btn"> Add </button>
        <button id="cancel-task-input-btn" class="task-btn"> X </button>
     `;

    //remove previous task input bar
    const selectTaskInputBar = document.querySelector('#task-input-bar');
    if (selectTaskInputBar) {
        removeDOM('task-input');
    }
    //Identify add task button or edit button 
    const DOMList = Array.from(task.target.classList);
    for (let classSelector of DOMList) {
        if (classSelector.includes('add-btn')) {
            taskContent.appendChild(taskBar);
        }
        if (classSelector.includes('task-edit-btn')) {
            const select = document.querySelector(`#${task.target.id}`).parentNode;
            const listNum = (task.target.id).substr(14, 3);
            const li = document.getElementsByTagName('LI');
            console.log(li.length);
            console.log(listNum);

            for(let k=listNum;k<=li.length;k++){
            removeDOM(`task-text-${k}`);
            // const y=document.createElement('p');
            // y.textContent='hshs';
            // taskContent.appendChild(y);
            appendTask(editTaskNum);
            }
            taskContent.appendChild(taskBar);


        }
    }
    //hide add task button
    document.querySelector('#add-task-btn').style.display = "none";

    //add event listener to task input buttons (add, x)
    buttonAddEventListener(hasTaskInput = true, hasTaskList = false);
}

const appendTask = (editTaskNum) => {

    const taskContent = document.querySelector('#task-content');

    //remove previous task list 
    const selectOneTask = document.querySelector('#task-0');
    if (selectOneTask) {
        removeDOM('task-0');
    }

    //get task list array
    let taskList = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.addTaskInput)();

    //create task list 
    const taskListLayout = document.createElement('ul');
    taskListLayout.id = "task-list";

    for (let i in taskList) {
        const task = document.createElement('li');
        task.id = `task-${[i]}`;
        task.classList.add = "tasks";

        task.innerHTML = `
            <label for="task-checkbox"></label>
            <input type="checkbox" id="task-check-box-${[i]}" class="task-checkbox" name="task-checkbox" value=" ${taskList[i].task}  ${taskList[i].date}">
           
            <p id="task-text-${[i]}" class="task-text task-item"> ${taskList[i].task}</p>
            <p id="task-date-${[i]}" class="task-date task-item"> ${taskList[i].date}</p>
        
            <button id="task-edit-btn-${[i]}" class="task-edit-btn task-item task-btn"> Edit </button>
            <button id="task-delete-btn-${[i]}" class="task-delete-btn task-item task-btn"> X </button>
            `;
        taskListLayout.appendChild(task);
    }

    taskContent.appendChild(taskListLayout);

    buttonAddEventListener(hasTaskInput = false, hasTaskList = true, taskList.length);

    //display add task button
    document.querySelector('#add-task-btn').style.display = "block";
    removeDOM(event);
}

function buttonAddEventListener(hasTaskInput, hasTaskList, listLength) {

    const idToAddEventListener = (id, func) => {
        document.querySelector(`#${id}`).addEventListener('click', func);
    }

    if (!hasTaskInput) {
        idToAddEventListener('add-task-btn', appendTaskInputLayout);
    }
    if (hasTaskInput) {
        idToAddEventListener('add-task-input-btn', appendTask);
        idToAddEventListener('cancel-task-input-btn', removeDOM);
        hasTaskInput = false;
    }

    if (hasTaskList) {
        for (let j = 0; j < listLength; j++) {
            let list = document.getElementsByTagName("LI");

            //add event listener to delete button
            list.item(j).children[5].addEventListener('click', removeDOM);
            //add event listener to edit button
            list.item(j).children[4].addEventListener('click', appendTaskInputLayout);
        }
        hasTaskList = false;

    }

}

const removeDOM = (event) => {
    //remove element by event
    if (typeof event === 'object') {
        const DOM = document.getElementById(`${event.target.id}`).parentNode;

        //display add task button and add event listener after task input
        if (event.target.id == 'add-task-input-btn' || event.target.id == 'cancel-task-input-btn') {
            document.querySelector('#add-task-btn').style.display = "block";
        }
        DOM.remove();
    }

    //remove element by element id
    if (typeof event === 'string') {
        const DOM = document.getElementById(event).parentNode;
        DOM.remove();
    }
}

const getId = (event) => {
    const a = document.querySelector(`#${event.target.id}`);
    console.log(a.parentNode.id);
    a.parentNode.style.display = "none";
    appendTaskInputLayout(a.parentNode.id);
}

window.addEventListener('load', buttonAddEventListener(hasTaskInput = false, hasTaskList = false, 0));



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskInput": () => (/* binding */ addTaskInput),
/* harmony export */   "getTodayDate": () => (/* binding */ getTodayDate)
/* harmony export */ });
//import { compareAsc } from 'date-fns'

let taskList =[];

class task {
  constructor(task, dueDate, status) {
    this.task = task
    this.date = dueDate
    this.status=status
  }
}

const addTaskInput = () => {
  let taskInput = document.getElementById('task-input').value;
  let dueDateInput = document.getElementById('dueDate').value;
  if (!dueDateInput) {
    let today =getTodayDate();
    dueDateInput=today.yyyy+'/'+(today.mm)+'/'+today.dd;
  } else {
    dueDateInput=dueDateInput.replace(/-/g,'/');
  }
  let newTask = new task(taskInput, dueDateInput,'unchecked');
  taskList.push(newTask);
  return taskList;
}

const getTodayDate = () => {
  var today = new Date();
  var dd=today.getDate();
  var mm=today.getMonth()+1;
  var yyyy = today.getFullYear();
  return { dd, mm, yyyy };
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");


//import { DOM } from './UI2.js'


const taskContent = document.getElementById("task-content");
taskContent.append((0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.title)());
//console.log(DOM.create.title());
 //taskContent.append(DOM.create.title);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix3SkFBd0o7QUFDeEo7QUFDQSw0Q0FBNEMsZUFBZSx3Q0FBd0MsR0FBRyx1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O0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLQSxVQUFVLGFBQWE7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDa0M7QUFDdkQsVUFBVSxNQUFNOzs7QUFHaEI7QUFDQSxtQkFBbUIsNkNBQUs7QUFDeEI7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsNzAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NTBweCkge1xcbiAgICAjbWFpbi1jb250YWluZXJ7IFxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gMzByZW0gMWZyO1xcbiAgICB9XFxuICAgICN0YXNrLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6MzByZW07XFxuICAgIH1cXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDFmciAwLjAzcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIFxcXCJcXG4gICAgXFxcIm1haW4tY29udGFpbmVyXFxcIlxcbiAgICBcXFwiZm9vdGVyXFxcIiA7XFxuICAgIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuaDF7XFxuICAgIGdyaWQtYXJlYTpoZWFkZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNWZhYztcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMDAlO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG59XFxuc2VjdGlvbiNtYWluLWNvbnRhaW5lcnsgXFxuICAgIGdyaWQtYXJlYTptYWluLWNvbnRhaW5lcjsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gNTByZW0gMWZyOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVyZW0gNTByZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwibmF2LWJhciB0YXNrLWNvbnRhaW5lciByaWdodC1jb2x1bW5cXFwiO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uI25hdi1iYXJ7XFxuICAgIGdyaWQtYXJlYTpuYXYtYmFyOyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YwZWRlZDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyBcXG59XFxuXFxuc2VjdGlvbiN0YXNrLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOnRhc2stY29udGFpbmVyO1xcbiAgICBwYWRkaW5nOjJyZW07XFxufVxcblxcbnNlY3Rpb24jcmlnaHQtY29sdW1ue1xcbiAgICBncmlkLWFyZWE6cmlnaHQtY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGVkZWQ7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlLCAjdGl0bGUge1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAwLjNyZW07XFxufVxcbi5uYXYtaXRlbXtcXG5qdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxufVxcbi5uYXYtaXRlbTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjNWM1O1xcbn1cXG4ubmF2LWl0ZW0sI2FkZC10YXNrLWJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRjZGM7XFxufVxcbiNob21lLCAjdG9kYXl7XFxuICAgIG1hcmdpbjowLjNyZW0gMCAwLjNyZW0gMDtcXG4gICAgcGFkZGluZzowLjhyZW0gMCAwLjhyZW0gMC41cmVtO1xcbn1cXG5idXR0b24jYWRkLXByb2plY3R7XFxuICAgIHdpZHRoOjcuOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6MC41cmVtO1xcbn1cXG4jcHJvamVjdHMtdGl0bGUsIGRpdiNwcm9qZWN0c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmRpdiNwcm9qZWN0LWNvbnRlbnR7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmRpdiN0YXNrLWNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbiAgICBwYWRkaW5nOiAwIDEuM3JlbTtcXG4gICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcXG59XFxuXFxuI2FkZC10YXNrLWJhbm5lcntcXG4gICAgaGVpZ2h0OjFyZW07XFxufVxcblxcbmJ1dHRvbiNhZGQtdGFzay1idG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuYnV0dG9uI2FkZC10YXNrLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjNWM1O1xcbn1cXG5idXR0b24uYWRkLWJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHJnYigxMjQsIDgyLCA1OSk7XFxuICAgIG1hcmdpbjowLjJyZW07XFxuICAgIHBhZGRpbmc6MC44cmVtO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jdGFzay1pbnB1dC1iYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjUsIDY1KTtcXG4gICAgaGVpZ2h0OiAxLjZyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxufVxcblxcbiN0YXNrLFxcbiNkdWVEYXRlLFxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG4sXFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bixcXG5idXR0b24udGFzay1idG5cXG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46MCAwLjFyZW0gMCAwLjFyZW07XFxufVxcblxcbiN0YXNre1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbiNkYXRle1xcbiAgICB3aWR0aDozMCU7XFxufVxcbmJ1dHRvbi50YXNrLWJ0bntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIHdpZHRoOiAyMCU7XFxuXFxufVxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG4sYnV0dG9uLnRhc2stZGVsZXRlLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgd2lkdGg6IDUlO1xcbn1cXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuOmhvdmVyLFxcbi50YXNrLWRlbGV0ZS1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDEwMiwgMTAyKTtcXG59XFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTgyLCAxMDUpO1xcbn1cXG5idXR0b24udGFzay1lZGl0LWJ0bjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTgsIDIxMCk7XFxufVxcbmxpe1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxufVxcbi50YXNrLWNoZWNrYm94e1xcbiAgICBzaXplOjNyZW07XFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcbi50YXNrLXRleHR7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXG59XFxuLnRhc2stZGF0ZXtcXG4gICAgd2lkdGg6IDUuNXJlbTtcXG4gICAgcmlnaHQ6NXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXG59XFxuLnRhc2stZGVsZXRlLWJ0bntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OjA7XFxufVxcbmZvb3RlcntcXG4gICAgZ3JpZC1hcmVhOmZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRkY2RjO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksUUFBUTtJQUNSLGlDQUFpQztBQUNyQztBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0NBQXNDO0lBQzFDO0lBQ0E7SUFDQSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEM7OzthQUdTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMscUNBQXFDO0lBQ3JDO3lDQUNxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7O0lBTUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixVQUFVOztBQUVkO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsU0FBUztBQUNiO0FBQ0E7O0lBRUksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixPQUFPO0FBQ1g7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSw3MDAmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG4qe1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg1MHB4KSB7XFxuICAgICNtYWluLWNvbnRhaW5lcnsgXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXJlbSAzMHJlbSAxZnI7XFxuICAgIH1cXG4gICAgI3Rhc2stY29udGFpbmVye1xcbiAgICB3aWR0aDozMHJlbTtcXG4gICAgfVxcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMWZyIDAuMDNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgXFxcIlxcbiAgICBcXFwibWFpbi1jb250YWluZXJcXFwiXFxuICAgIFxcXCJmb290ZXJcXFwiIDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG5oMXtcXG4gICAgZ3JpZC1hcmVhOmhlYWRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U1ZmFjO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbn1cXG5zZWN0aW9uI21haW4tY29udGFpbmVyeyBcXG4gICAgZ3JpZC1hcmVhOm1haW4tY29udGFpbmVyOyBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXJlbSA1MHJlbSAxZnI7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXJlbSA1MHJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJuYXYtYmFyIHRhc2stY29udGFpbmVyIHJpZ2h0LWNvbHVtblxcXCI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbnNlY3Rpb24jbmF2LWJhcntcXG4gICAgZ3JpZC1hcmVhOm5hdi1iYXI7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBlZGVkO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IFxcbn1cXG5cXG5zZWN0aW9uI3Rhc2stY29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6dGFzay1jb250YWluZXI7XFxuICAgIHBhZGRpbmc6MnJlbTtcXG59XFxuXFxuc2VjdGlvbiNyaWdodC1jb2x1bW57XFxuICAgIGdyaWQtYXJlYTpyaWdodC1jb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YwZWRlZDtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUsICN0aXRsZSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDAuM3JlbTtcXG59XFxuLm5hdi1pdGVte1xcbmp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuLm5hdi1pdGVtOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjYWM1YzU7XFxufVxcbi5uYXYtaXRlbSwjYWRkLXRhc2stYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkZGNkYztcXG59XFxuI2hvbWUsICN0b2RheXtcXG4gICAgbWFyZ2luOjAuM3JlbSAwIDAuM3JlbSAwO1xcbiAgICBwYWRkaW5nOjAuOHJlbSAwIDAuOHJlbSAwLjVyZW07XFxufVxcbmJ1dHRvbiNhZGQtcHJvamVjdHtcXG4gICAgd2lkdGg6Ny44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDowLjVyZW07XFxufVxcbiNwcm9qZWN0cy10aXRsZSwgZGl2I3Byb2plY3Rze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuZGl2I3Byb2plY3QtY29udGVudHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuZGl2I3Rhc2stY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxuICAgIHBhZGRpbmc6IDAgMS4zcmVtO1xcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xcbn1cXG5cXG4jYWRkLXRhc2stYmFubmVye1xcbiAgICBoZWlnaHQ6MXJlbTtcXG59XFxuXFxuYnV0dG9uI2FkZC10YXNrLWJ0bntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5idXR0b24jYWRkLXRhc2stYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjYWM1YzU7XFxufVxcbmJ1dHRvbi5hZGQtYnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDEyNCwgODIsIDU5KTtcXG4gICAgbWFyZ2luOjAuMnJlbTtcXG4gICAgcGFkZGluZzowLjhyZW07XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbiN0YXNrLWlucHV0LWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG59XFxuXFxuI3Rhc2ssXFxuI2R1ZURhdGUsXFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0bixcXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuLFxcbmJ1dHRvbi50YXNrLWJ0blxcbntcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbjowIDAuMXJlbSAwIDAuMXJlbTtcXG59XFxuXFxuI3Rhc2t7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuI2RhdGV7XFxuICAgIHdpZHRoOjMwJTtcXG59XFxuYnV0dG9uLnRhc2stYnRue1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgd2lkdGg6IDIwJTtcXG5cXG59XFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bixidXR0b24udGFzay1kZWxldGUtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICB3aWR0aDogNSU7XFxufVxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG46aG92ZXIsXFxuLnRhc2stZGVsZXRlLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTAyLCAxMDIpO1xcbn1cXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxODIsIDEwNSk7XFxufVxcbmJ1dHRvbi50YXNrLWVkaXQtYnRuOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxOCwgMjEwKTtcXG59XFxubGl7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG59XFxuLnRhc2stY2hlY2tib3h7XFxuICAgIHNpemU6M3JlbTtcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuLnRhc2stdGV4dHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kYXRle1xcbiAgICB3aWR0aDogNS41cmVtO1xcbiAgICByaWdodDo1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kZWxldGUtYnRue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6MDtcXG59XFxuZm9vdGVye1xcbiAgICBncmlkLWFyZWE6Zm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRjZGM7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBhZGRUYXNrSW5wdXQgfSBmcm9tICcuL3Rhc2suanMnXG5cbmxldCBoYXNUYXNrSW5wdXQgPSBmYWxzZTtcbmxldCBoYXNUYXNrTGlzdCA9IGZhbHNlO1xuXG5jb25zdCB0aXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICB0aXRsZS5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkID0gXCJoMy10aXRsZVwiO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICByZXR1cm4gdGl0bGVDb250YWluZXI7XG59XG5cbmNvbnN0IGFwcGVuZFRhc2tJbnB1dExheW91dCA9ICh0YXNrKSA9PiB7XG5cbiAgICAvL3NlbGVjdCB0YXNrIGNvbnRlbnQgZGl2XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250ZW50Jyk7XG4gICAgLy9jcmVhdGUgdGFzayBpbnB1dCBjb250YWluZXJcbiAgICBjb25zdCB0YXNrQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Jhci5pZCA9IFwidGFzay1pbnB1dC1iYXJcIjtcbiAgICAvL2luc2VydCBodG1sIGZvciB0YXNrIGlucHV0XG4gICAgdGFza0Jhci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWlucHV0XCI+IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFzay1pbnB1dFwiIG5hbWU9XCJ0YXNrLWlucHV0XCIgdmFsdWU9XCJkZWZhdWx0XCIgcGxhY2Vob2xkZXI9XCJUYXNrXCIgPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJhZGQtdGFzay1pbnB1dC1idG5cIiBjbGFzcz1cInRhc2stYnRuXCI+IEFkZCA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC10YXNrLWlucHV0LWJ0blwiIGNsYXNzPVwidGFzay1idG5cIj4gWCA8L2J1dHRvbj5cbiAgICAgYDtcblxuICAgIC8vcmVtb3ZlIHByZXZpb3VzIHRhc2sgaW5wdXQgYmFyXG4gICAgY29uc3Qgc2VsZWN0VGFza0lucHV0QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staW5wdXQtYmFyJyk7XG4gICAgaWYgKHNlbGVjdFRhc2tJbnB1dEJhcikge1xuICAgICAgICByZW1vdmVET00oJ3Rhc2staW5wdXQnKTtcbiAgICB9XG4gICAgLy9JZGVudGlmeSBhZGQgdGFzayBidXR0b24gb3IgZWRpdCBidXR0b24gXG4gICAgY29uc3QgRE9NTGlzdCA9IEFycmF5LmZyb20odGFzay50YXJnZXQuY2xhc3NMaXN0KTtcbiAgICBmb3IgKGxldCBjbGFzc1NlbGVjdG9yIG9mIERPTUxpc3QpIHtcbiAgICAgICAgaWYgKGNsYXNzU2VsZWN0b3IuaW5jbHVkZXMoJ2FkZC1idG4nKSkge1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Jhcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzU2VsZWN0b3IuaW5jbHVkZXMoJ3Rhc2stZWRpdC1idG4nKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFzay50YXJnZXQuaWR9YCkucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3ROdW0gPSAodGFzay50YXJnZXQuaWQpLnN1YnN0cigxNCwgMyk7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdMSScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGkubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3ROdW0pO1xuXG4gICAgICAgICAgICBmb3IobGV0IGs9bGlzdE51bTtrPD1saS5sZW5ndGg7aysrKXtcbiAgICAgICAgICAgIHJlbW92ZURPTShgdGFzay10ZXh0LSR7a31gKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgLy8geS50ZXh0Q29udGVudD0naHNocyc7XG4gICAgICAgICAgICAvLyB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh5KTtcbiAgICAgICAgICAgIGFwcGVuZFRhc2soZWRpdFRhc2tOdW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Jhcik7XG5cblxuICAgICAgICB9XG4gICAgfVxuICAgIC8vaGlkZSBhZGQgdGFzayBidXR0b25cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGFzayBpbnB1dCBidXR0b25zIChhZGQsIHgpXG4gICAgYnV0dG9uQWRkRXZlbnRMaXN0ZW5lcihoYXNUYXNrSW5wdXQgPSB0cnVlLCBoYXNUYXNrTGlzdCA9IGZhbHNlKTtcbn1cblxuY29uc3QgYXBwZW5kVGFzayA9IChlZGl0VGFza051bSkgPT4ge1xuXG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250ZW50Jyk7XG5cbiAgICAvL3JlbW92ZSBwcmV2aW91cyB0YXNrIGxpc3QgXG4gICAgY29uc3Qgc2VsZWN0T25lVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLTAnKTtcbiAgICBpZiAoc2VsZWN0T25lVGFzaykge1xuICAgICAgICByZW1vdmVET00oJ3Rhc2stMCcpO1xuICAgIH1cblxuICAgIC8vZ2V0IHRhc2sgbGlzdCBhcnJheVxuICAgIGxldCB0YXNrTGlzdCA9IGFkZFRhc2tJbnB1dCgpO1xuXG4gICAgLy9jcmVhdGUgdGFzayBsaXN0IFxuICAgIGNvbnN0IHRhc2tMaXN0TGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0YXNrTGlzdExheW91dC5pZCA9IFwidGFzay1saXN0XCI7XG5cbiAgICBmb3IgKGxldCBpIGluIHRhc2tMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrLmlkID0gYHRhc2stJHtbaV19YDtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkID0gXCJ0YXNrc1wiO1xuXG4gICAgICAgIHRhc2suaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stY2hlY2tib3hcIj48L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFzay1jaGVjay1ib3gtJHtbaV19XCIgY2xhc3M9XCJ0YXNrLWNoZWNrYm94XCIgbmFtZT1cInRhc2stY2hlY2tib3hcIiB2YWx1ZT1cIiAke3Rhc2tMaXN0W2ldLnRhc2t9ICAke3Rhc2tMaXN0W2ldLmRhdGV9XCI+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPHAgaWQ9XCJ0YXNrLXRleHQtJHtbaV19XCIgY2xhc3M9XCJ0YXNrLXRleHQgdGFzay1pdGVtXCI+ICR7dGFza0xpc3RbaV0udGFza308L3A+XG4gICAgICAgICAgICA8cCBpZD1cInRhc2stZGF0ZS0ke1tpXX1cIiBjbGFzcz1cInRhc2stZGF0ZSB0YXNrLWl0ZW1cIj4gJHt0YXNrTGlzdFtpXS5kYXRlfTwvcD5cbiAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwidGFzay1lZGl0LWJ0bi0ke1tpXX1cIiBjbGFzcz1cInRhc2stZWRpdC1idG4gdGFzay1pdGVtIHRhc2stYnRuXCI+IEVkaXQgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwidGFzay1kZWxldGUtYnRuLSR7W2ldfVwiIGNsYXNzPVwidGFzay1kZWxldGUtYnRuIHRhc2staXRlbSB0YXNrLWJ0blwiPiBYIDwvYnV0dG9uPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgdGFza0xpc3RMYXlvdXQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuXG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0xpc3RMYXlvdXQpO1xuXG4gICAgYnV0dG9uQWRkRXZlbnRMaXN0ZW5lcihoYXNUYXNrSW5wdXQgPSBmYWxzZSwgaGFzVGFza0xpc3QgPSB0cnVlLCB0YXNrTGlzdC5sZW5ndGgpO1xuXG4gICAgLy9kaXNwbGF5IGFkZCB0YXNrIGJ1dHRvblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHJlbW92ZURPTShldmVudCk7XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbkFkZEV2ZW50TGlzdGVuZXIoaGFzVGFza0lucHV0LCBoYXNUYXNrTGlzdCwgbGlzdExlbmd0aCkge1xuXG4gICAgY29uc3QgaWRUb0FkZEV2ZW50TGlzdGVuZXIgPSAoaWQsIGZ1bmMpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiAgICB9XG5cbiAgICBpZiAoIWhhc1Rhc2tJbnB1dCkge1xuICAgICAgICBpZFRvQWRkRXZlbnRMaXN0ZW5lcignYWRkLXRhc2stYnRuJywgYXBwZW5kVGFza0lucHV0TGF5b3V0KTtcbiAgICB9XG4gICAgaWYgKGhhc1Rhc2tJbnB1dCkge1xuICAgICAgICBpZFRvQWRkRXZlbnRMaXN0ZW5lcignYWRkLXRhc2staW5wdXQtYnRuJywgYXBwZW5kVGFzayk7XG4gICAgICAgIGlkVG9BZGRFdmVudExpc3RlbmVyKCdjYW5jZWwtdGFzay1pbnB1dC1idG4nLCByZW1vdmVET00pO1xuICAgICAgICBoYXNUYXNrSW5wdXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVGFza0xpc3QpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaXN0TGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJMSVwiKTtcblxuICAgICAgICAgICAgLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlIGJ1dHRvblxuICAgICAgICAgICAgbGlzdC5pdGVtKGopLmNoaWxkcmVuWzVdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRE9NKTtcbiAgICAgICAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVkaXQgYnV0dG9uXG4gICAgICAgICAgICBsaXN0Lml0ZW0oaikuY2hpbGRyZW5bNF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmRUYXNrSW5wdXRMYXlvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGhhc1Rhc2tMaXN0ID0gZmFsc2U7XG5cbiAgICB9XG5cbn1cblxuY29uc3QgcmVtb3ZlRE9NID0gKGV2ZW50KSA9PiB7XG4gICAgLy9yZW1vdmUgZWxlbWVudCBieSBldmVudFxuICAgIGlmICh0eXBlb2YgZXZlbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IERPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2V2ZW50LnRhcmdldC5pZH1gKS5wYXJlbnROb2RlO1xuXG4gICAgICAgIC8vZGlzcGxheSBhZGQgdGFzayBidXR0b24gYW5kIGFkZCBldmVudCBsaXN0ZW5lciBhZnRlciB0YXNrIGlucHV0XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gJ2FkZC10YXNrLWlucHV0LWJ0bicgfHwgZXZlbnQudGFyZ2V0LmlkID09ICdjYW5jZWwtdGFzay1pbnB1dC1idG4nKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgICAgICBET00ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy9yZW1vdmUgZWxlbWVudCBieSBlbGVtZW50IGlkXG4gICAgaWYgKHR5cGVvZiBldmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQpLnBhcmVudE5vZGU7XG4gICAgICAgIERPTS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldElkID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5pZH1gKTtcbiAgICBjb25zb2xlLmxvZyhhLnBhcmVudE5vZGUuaWQpO1xuICAgIGEucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYXBwZW5kVGFza0lucHV0TGF5b3V0KGEucGFyZW50Tm9kZS5pZCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYnV0dG9uQWRkRXZlbnRMaXN0ZW5lcihoYXNUYXNrSW5wdXQgPSBmYWxzZSwgaGFzVGFza0xpc3QgPSBmYWxzZSwgMCkpO1xuXG5leHBvcnQgeyB0aXRsZSwgYnV0dG9uQWRkRXZlbnRMaXN0ZW5lciB9IiwiLy9pbXBvcnQgeyBjb21wYXJlQXNjIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmxldCB0YXNrTGlzdCA9W107XG5cbmNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrLCBkdWVEYXRlLCBzdGF0dXMpIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG4gICAgdGhpcy5kYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMuc3RhdHVzPXN0YXR1c1xuICB9XG59XG5cbmNvbnN0IGFkZFRhc2tJbnB1dCA9ICgpID0+IHtcbiAgbGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0JykudmFsdWU7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICBpZiAoIWR1ZURhdGVJbnB1dCkge1xuICAgIGxldCB0b2RheSA9Z2V0VG9kYXlEYXRlKCk7XG4gICAgZHVlRGF0ZUlucHV0PXRvZGF5Lnl5eXkrJy8nKyh0b2RheS5tbSkrJy8nK3RvZGF5LmRkO1xuICB9IGVsc2Uge1xuICAgIGR1ZURhdGVJbnB1dD1kdWVEYXRlSW5wdXQucmVwbGFjZSgvLS9nLCcvJyk7XG4gIH1cbiAgbGV0IG5ld1Rhc2sgPSBuZXcgdGFzayh0YXNrSW5wdXQsIGR1ZURhdGVJbnB1dCwndW5jaGVja2VkJyk7XG4gIHRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gIHJldHVybiB0YXNrTGlzdDtcbn1cblxuY29uc3QgZ2V0VG9kYXlEYXRlID0gKCkgPT4ge1xuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICB2YXIgZGQ9dG9kYXkuZ2V0RGF0ZSgpO1xuICB2YXIgbW09dG9kYXkuZ2V0TW9udGgoKSsxO1xuICB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIHJldHVybiB7IGRkLCBtbSwgeXl5eSB9O1xufVxuXG5leHBvcnQgeyBhZGRUYXNrSW5wdXQsIGdldFRvZGF5RGF0ZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdGl0bGUsIGJ1dHRvbkFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL1VJLmpzJ1xuLy9pbXBvcnQgeyBET00gfSBmcm9tICcuL1VJMi5qcydcblxuXG5jb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1jb250ZW50XCIpO1xudGFza0NvbnRlbnQuYXBwZW5kKHRpdGxlKCkpO1xuLy9jb25zb2xlLmxvZyhET00uY3JlYXRlLnRpdGxlKCkpO1xuIC8vdGFza0NvbnRlbnQuYXBwZW5kKERPTS5jcmVhdGUudGl0bGUpO1xuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=