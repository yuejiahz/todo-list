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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin:0;\n    font-family: 'Roboto', sans-serif;\n}\n@media screen and (max-width:850px) {\n    #main-container{ \n        display: grid;\n        grid-template-columns: 15rem 30rem 1fr;\n    }\n    #task-container{\n    width:30rem;\n    }\n}\n\nmain{\n    display: grid;\n    grid-template-rows: 3rem 1fr 0.03rem;\n    grid-template-areas:\n    \"header \"\n    \"main-container\"\n    \"footer\" ;\n    height:100vh;\n}\n\nh1{\n    grid-area:header;\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    text-align: center;\n    font-size: 300%;\n    line-height: 3rem;\n}\nsection#main-container{ \n    grid-area:main-container; \n    display: grid;\n    /* grid-template-columns: 15rem 50rem 1fr; */\n    grid-template-columns: 5rem 50rem 1fr;\n    grid-template-areas:\n    \"nav-bar task-container right-column\";\n    overflow-y: auto;\n}\n\nsection#nav-bar{\n    grid-area:nav-bar;  \n    background-color:#f0eded;\n    font-family: 'Roboto', sans-serif; \n}\n\nsection#task-container{\n    grid-area:task-container;\n    padding:2rem;\n}\n\nsection#right-column{\n    grid-area:right-column;\n    background-color:#f0eded;\n}\n\n#project-title, #title {\n    padding: 1rem 0 1rem 0.3rem;\n}\n.nav-item{\njustify-self: stretch;\n}\n.nav-item:hover{\n    background-color:#cac5c5;\n}\n.nav-item,#add-task-btn{\n    border: none;\n    background-color:#dddcdc;\n}\n#home, #today{\n    margin:0.3rem 0 0.3rem 0;\n    padding:0.8rem 0 0.8rem 0.5rem;\n}\nbutton#add-project{\n    width:7.8rem;\n    margin-left:0.5rem;\n}\n#projects-title, div#projects{\n    background-color: transparent;\n}\n\ndiv#project-content{\n    overflow-y: auto;\n}\n\ndiv#task-content{\n    background-color: wheat;\n    padding: 0 1.3rem;\n    overflow-x: visible;\n}\n\nbutton#add-task-btn{\n    text-align: center;\n}\nbutton#add-task-btn:hover{\n    background-color:#cac5c5;\n}\nbutton.add-btn{\n    border-radius: 20px;\n    color: rgb(124, 82, 59);\n    margin:0.2rem;\n    padding:0.8rem;\n    width:100%;\n    border: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n\n#task-list{\n    min-height:1.5rem;\n    display: flex;\n}\n#task-input-bar{\n    background-color: rgb(65, 65, 65);\n    height: 2rem;\n    padding: 0.5rem;\n    display: flex;\n    width: 95%;\n    align-content: space-between;\n}\n\n#task,\n#dueDate,\nbutton#add-task-input-btn,\nbutton#cancel-task-input-btn,\nbutton.task-btn\n{\n    border-radius: 5px;\n    border: none;\n    margin:0 0.1rem 0 0.1rem;\n}\n\n#task-input{\n    width:50%;\n}\n#date{\n    width:30%;\n}\nbutton.task-btn{\n    font-weight: bold;\n}\n\nbutton#add-task-input-btn{\n    background-color: lightgreen;\n    width: 20%;\n\n}\nbutton#cancel-task-input-btn,button.task-delete-btn{\n    background-color: lightcoral;\n    width: 5%;\n}\nbutton#cancel-task-input-btn:hover,\n.task-delete-btn:hover{\n    background-color: rgb(194, 102, 102);\n}\nbutton#add-task-input-btn:hover{\n    background-color: rgb(105, 182, 105);\n}\nbutton.task-edit-btn:hover{\nbackground-color: rgb(214, 218, 210);\n}\nul{\n    display: flex;\n    flex-direction: column;\n    background-color: wheat;\n}\nli{\n    display: flex;\n    padding: 1rem;\n    line-height: 2rem;\n    width: 95%;\n}\n.task-checkbox{\n    size:3rem;\n    padding:1rem;\n    margin:auto;\n}\n.task-text{\n    flex-grow: 1;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-date{\n    width: 5.5rem;\n    right:5rem;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-delete-btn{\n    text-align: center;\n    position: relative;\n    right:0;\n}\nfooter{\n    grid-area:footer;\n    background-color:#dddcdc;\n    align-self: stretch;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,QAAQ;IACR,iCAAiC;AACrC;AACA;IACI;QACI,aAAa;QACb,sCAAsC;IAC1C;IACA;IACA,WAAW;IACX;AACJ;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC;;;aAGS;IACT,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,uCAAuC;IACvC,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,4CAA4C;IAC5C,qCAAqC;IACrC;yCACqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;AACA;AACA,qBAAqB;AACrB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,wBAAwB;IACxB,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,cAAc;IACd,UAAU;IACV,YAAY;IACZ,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;IACf,aAAa;IACb,UAAU;IACV,4BAA4B;AAChC;;AAEA;;;;;;IAMI,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,SAAS;AACb;AACA;IACI,SAAS;AACb;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,UAAU;;AAEd;AACA;IACI,4BAA4B;IAC5B,SAAS;AACb;AACA;;IAEI,oCAAoC;AACxC;AACA;IACI,oCAAoC;AACxC;AACA;AACA,oCAAoC;AACpC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,UAAU;AACd;AACA;IACI,SAAS;IACT,YAAY;IACZ,WAAW;AACf;AACA;IACI,YAAY;IACZ,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,UAAU;IACV,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;AACX;AACA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&family=Roboto&display=swap');\n*{\n    margin:0;\n    font-family: 'Roboto', sans-serif;\n}\n@media screen and (max-width:850px) {\n    #main-container{ \n        display: grid;\n        grid-template-columns: 15rem 30rem 1fr;\n    }\n    #task-container{\n    width:30rem;\n    }\n}\n\nmain{\n    display: grid;\n    grid-template-rows: 3rem 1fr 0.03rem;\n    grid-template-areas:\n    \"header \"\n    \"main-container\"\n    \"footer\" ;\n    height:100vh;\n}\n\nh1{\n    grid-area:header;\n    font-family: 'Josefin Sans', sans-serif;\n    background-color: #3e5fac;\n    color:white;\n    text-align: center;\n    font-size: 300%;\n    line-height: 3rem;\n}\nsection#main-container{ \n    grid-area:main-container; \n    display: grid;\n    /* grid-template-columns: 15rem 50rem 1fr; */\n    grid-template-columns: 5rem 50rem 1fr;\n    grid-template-areas:\n    \"nav-bar task-container right-column\";\n    overflow-y: auto;\n}\n\nsection#nav-bar{\n    grid-area:nav-bar;  \n    background-color:#f0eded;\n    font-family: 'Roboto', sans-serif; \n}\n\nsection#task-container{\n    grid-area:task-container;\n    padding:2rem;\n}\n\nsection#right-column{\n    grid-area:right-column;\n    background-color:#f0eded;\n}\n\n#project-title, #title {\n    padding: 1rem 0 1rem 0.3rem;\n}\n.nav-item{\njustify-self: stretch;\n}\n.nav-item:hover{\n    background-color:#cac5c5;\n}\n.nav-item,#add-task-btn{\n    border: none;\n    background-color:#dddcdc;\n}\n#home, #today{\n    margin:0.3rem 0 0.3rem 0;\n    padding:0.8rem 0 0.8rem 0.5rem;\n}\nbutton#add-project{\n    width:7.8rem;\n    margin-left:0.5rem;\n}\n#projects-title, div#projects{\n    background-color: transparent;\n}\n\ndiv#project-content{\n    overflow-y: auto;\n}\n\ndiv#task-content{\n    background-color: wheat;\n    padding: 0 1.3rem;\n    overflow-x: visible;\n}\n\nbutton#add-task-btn{\n    text-align: center;\n}\nbutton#add-task-btn:hover{\n    background-color:#cac5c5;\n}\nbutton.add-btn{\n    border-radius: 20px;\n    color: rgb(124, 82, 59);\n    margin:0.2rem;\n    padding:0.8rem;\n    width:100%;\n    border: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1rem;\n}\n\n#task-list{\n    min-height:1.5rem;\n    display: flex;\n}\n#task-input-bar{\n    background-color: rgb(65, 65, 65);\n    height: 2rem;\n    padding: 0.5rem;\n    display: flex;\n    width: 95%;\n    align-content: space-between;\n}\n\n#task,\n#dueDate,\nbutton#add-task-input-btn,\nbutton#cancel-task-input-btn,\nbutton.task-btn\n{\n    border-radius: 5px;\n    border: none;\n    margin:0 0.1rem 0 0.1rem;\n}\n\n#task-input{\n    width:50%;\n}\n#date{\n    width:30%;\n}\nbutton.task-btn{\n    font-weight: bold;\n}\n\nbutton#add-task-input-btn{\n    background-color: lightgreen;\n    width: 20%;\n\n}\nbutton#cancel-task-input-btn,button.task-delete-btn{\n    background-color: lightcoral;\n    width: 5%;\n}\nbutton#cancel-task-input-btn:hover,\n.task-delete-btn:hover{\n    background-color: rgb(194, 102, 102);\n}\nbutton#add-task-input-btn:hover{\n    background-color: rgb(105, 182, 105);\n}\nbutton.task-edit-btn:hover{\nbackground-color: rgb(214, 218, 210);\n}\nul{\n    display: flex;\n    flex-direction: column;\n    background-color: wheat;\n}\nli{\n    display: flex;\n    padding: 1rem;\n    line-height: 2rem;\n    width: 95%;\n}\n.task-checkbox{\n    size:3rem;\n    padding:1rem;\n    margin:auto;\n}\n.task-text{\n    flex-grow: 1;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-date{\n    width: 5.5rem;\n    right:5rem;\n    padding-left: 0.8rem;\n    padding-right: 0.8rem;\n}\n.task-delete-btn{\n    text-align: center;\n    position: relative;\n    right:0;\n}\nfooter{\n    grid-area:footer;\n    background-color:#dddcdc;\n    align-self: stretch;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "displayAddTaskBtn": () => (/* binding */ displayAddTaskBtn),
/* harmony export */   "addEventListenerById": () => (/* binding */ addEventListenerById),
/* harmony export */   "addEventListenerByClass": () => (/* binding */ addEventListenerByClass),
/* harmony export */   "removeEventListenerByClass": () => (/* binding */ removeEventListenerByClass)
/* harmony export */ });


function deleteElementById(Id){
    if (typeof Id === 'string') {
        const elementID = document.getElementById(`${Id}`);
        if(elementID){
            elementID.remove();
        }
    }
}

function displayAddTaskBtn(statement) {
    const addTaskbtn = document.querySelector('#add-task-btn');
    if (statement) {
        addTaskbtn.style.display = "block"
    }
    else {
        addTaskbtn.style.display = "none";
    }
}

function addEventListenerById(Id,func){
    if(!!document){
    document.querySelector(`#${Id}`).addEventListener('click',func);
    }
}

function addEventListenerByClass(className,func){
    const elements = Array.from(document.querySelectorAll(`.${className}`));
    elements.forEach((ele) => ele.addEventListener('click',func));
}

function removeEventListenerByClass(className,func){
    const elements = Array.from(document.querySelectorAll(`.${className}`));
    elements.forEach((ele)=>ele.removeEventListener('mousemove',func))
}



/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTitle": () => (/* binding */ getTitle),
/* harmony export */   "taskInput": () => (/* binding */ taskInput),
/* harmony export */   "taskList": () => (/* binding */ taskList),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "projectInput": () => (/* binding */ projectInput)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMfunction.js */ "./src/DOMfunction.js");




const getTitle = (text) => {

    (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('title');
    const taskContent = document.querySelector('#task-content');
    const title = document.createElement('h3');
    title.id = 'title';
    title.innerHTML = `${text}`;
    taskContent.prepend(title);
}

const taskInput = (() => {

    function _deletePreviousDOM(){
        ;(0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('task-input-bar');
    }

    function layout(event) {
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
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerById)('add-task-input-btn', _task__WEBPACK_IMPORTED_MODULE_0__.taskFunc.add);
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerById)('cancel-task-input-btn', _task__WEBPACK_IMPORTED_MODULE_0__.taskFunc.del);
    }

    return {
        layout
    }
})();

const taskList = (() => {

    function layout() {

        _deletePreviousDOM();
        const taskContent = document.querySelector('#task-content');
        const taskList = document.createElement('ul');
        const taskBar = document.querySelector('#task-input-bar');

        taskList.id = "task-list";
        taskContent.insertBefore(taskList, taskBar);

        for (let i in _task__WEBPACK_IMPORTED_MODULE_0__.taskFunc.list) {
            const task = document.createElement('li');
            const checkbox = document.createElement('input');
            const text = document.createElement('p');
            const date = document.createElement('p');
            const edit = document.createElement('button');
            const del = document.createElement('button');

            checkbox.setAttribute('type', 'checkbox');

            task.id = `task-${[i]}`;
            checkbox.id = `task-checkbox-${i}`;
            text.id = `task-text-${i}`;
            date.id = `task-date-${i}`;
            edit.id = `task-edit-btn-${i}`;
            del.id = `task-delete-btn-${i}`;

            task.setAttribute('data', `${i}`)
            checkbox.setAttribute('data', `${i}`)
            text.setAttribute('data', `${i}`)
            date.setAttribute('data', `${i}`)
            edit.setAttribute('data', `${i}`)
            del.setAttribute('data', `${i}`)

            checkbox.classList.add("task-checkbox");
            text.classList.add("task-text");
            date.classList.add("task-date");
            edit.classList.add("task-edit-btn");
            del.classList.add("task-delete-btn");

            task.classList.add = "tasks";
            text.classList.add('task-item');
            date.classList.add('task-item');
            edit.classList.add('task-item');
            del.classList.add('task-item');

            edit.classList.add('task-btn');
            del.classList.add('task-btn');

            edit.classList.add('task-edit-btn');
            del.classList.add('task-del-btn');

            text.textContent = `${_task__WEBPACK_IMPORTED_MODULE_0__.taskFunc.list[i].task}`;
            date.textContent = `${_task__WEBPACK_IMPORTED_MODULE_0__.taskFunc.list[i].date}`;
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

    function _deletePreviousDOM() {
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('task-list');
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('task-input-bar');
    }

    function _addEventListener() {
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerByClass)('task-del-btn', _task__WEBPACK_IMPORTED_MODULE_0__.taskFunc.del);
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerByClass)('task-edit-btn', editTask.layout);
    }
    return {
       layout
    }
})();


const editTask = (() => {

    let taskNumArray =[];

    function _deletePreviousDOM(){
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('task-input-bar');
    }

    function layout (event) {
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
        taskBar.style.display='flex';

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
        getSelectedTask(taskNum);
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.displayAddTaskBtn)(false);

    }

    const getSelectedTask = (taskNum) => {
        taskNumArray.push(taskNum);
        console.log(taskNumArray);
        return taskNumArray;
    }

    function _previewTaskInfoInInputBar(taskNum){
        const task = document.querySelector(`#task-${taskNum}`);
        const taskBar = document.querySelector("#task-input-bar");
        taskBar.childNodes[0].value = task.childNodes[1].textContent;
        const y = task.childNodes[2].textContent.slice(0, 4);
        const m = task.childNodes[2].textContent.slice(5, 7);
        const d = task.childNodes[2].textContent.slice(8, 10);
        taskBar.childNodes[1].value = y + '-' + m + '-' + d;
    }

    function _addEventListener() {
         (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerById)('add-task-input-btn', _task__WEBPACK_IMPORTED_MODULE_0__.taskFunc.update);
         (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerById)('cancel-task-input-btn', _task__WEBPACK_IMPORTED_MODULE_0__.taskFunc.del);
    }

return{
    layout,
    taskNum:taskNumArray
}

})();


const projectInput = () => {
    console.log('create project')
}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodayDate": () => (/* binding */ getTodayDate),
/* harmony export */   "taskFunc": () => (/* binding */ taskFunc)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _DOMfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMfunction */ "./src/DOMfunction.js");
//import { compareAsc } from 'date-fns'





class task {
  constructor(task, dueDate, status, listName) {
    this.task = task
    this.date = dueDate
    this.status = status
    this.listName = listName
  }
}

const taskFunc = (() => {

  var taskArray = [];

    function add() {
      let taskInput = document.getElementById('task-input').value;
      let dueDateInput = document.getElementById('dueDate').value;
      if (!dueDateInput) {
        let today = getTodayDate();
        dueDateInput = today.yyyy + '/' + (today.mm) + '/' + today.dd;
      } else {
        dueDateInput = dueDateInput.replace(/-/g, '/');
      }

      let newTask = new task(taskInput, dueDateInput, 'unchecked', 'today');
      taskArray.push(newTask);
      _layout__WEBPACK_IMPORTED_MODULE_0__.taskList.layout();
    }

    function update() {
      let taskInput = document.getElementById('task-input').value;
      let dueDateInput = document.getElementById('dueDate').value;
      dueDateInput = dueDateInput.replace(/-/g, '/');

      let selectedTaskArray = _layout__WEBPACK_IMPORTED_MODULE_0__.editTask.taskNum;
      let currentSelectionIndex = _layout__WEBPACK_IMPORTED_MODULE_0__.editTask.taskNum.length-1;
      let currentTaskNum = selectedTaskArray[currentSelectionIndex];

      taskArray[currentTaskNum].task = taskInput;
      taskArray[currentTaskNum].date = dueDateInput;
    }

    function del(event) {
      const taskNum = event.path[1].getAttribute('data');
      (0,_DOMfunction__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)(`task-${taskNum}`);
      taskArray.splice(taskNum,1);
    }

  return {
    list: taskArray,
    add,
    update,
    del
  }

})();


const getTodayDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = String(today.getFullYear());
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
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.js */ "./src/layout.js");
/* harmony import */ var _DOMfunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMfunction.js */ "./src/DOMfunction.js");

//import { title, buttonAddEventListener } from './UI.js'




const loadPage = (() => {  

const defaultTitle = () => {
   (0,_layout_js__WEBPACK_IMPORTED_MODULE_1__.getTitle)('Home');
}

const addEventListener = () => {
    ;(0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_2__.addEventListenerById)('home',allTask);
    (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_2__.addEventListenerById)('today',todayTask);
    (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_2__.addEventListenerById)('add-project-btn',_layout_js__WEBPACK_IMPORTED_MODULE_1__.projectInput);
    (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_2__.addEventListenerById)('add-task-btn',_layout_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.layout);
}

defaultTitle();
addEventListener();
});

const allTask=(event)=>{
    (0,_layout_js__WEBPACK_IMPORTED_MODULE_1__.getTitle)('Home');
}

function todayTask(event){
    ;(0,_layout_js__WEBPACK_IMPORTED_MODULE_1__.getTitle)('Today');
}

window.addEventListener('DOMContentLoaded',loadPage);








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztB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b0I7QUFDeEIsSUFBSSxxRUFBb0IsbUJBQW1CLG9EQUFZO0FBQ3ZELElBQUkscUVBQW9CLGdCQUFnQix3REFBZ0I7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxJQUFJLG9EQUFRO0FBQ1o7O0FBRUE7QUFDQSxJQUFJLHFEQUFRO0FBQ1o7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDcwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODUwcHgpIHtcXG4gICAgI21haW4tY29udGFpbmVyeyBcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cmVtIDMwcmVtIDFmcjtcXG4gICAgfVxcbiAgICAjdGFzay1jb250YWluZXJ7XFxuICAgIHdpZHRoOjMwcmVtO1xcbiAgICB9XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxZnIgMC4wM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBcXFwiXFxuICAgIFxcXCJtYWluLWNvbnRhaW5lclxcXCJcXG4gICAgXFxcImZvb3RlclxcXCIgO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcbmgxe1xcbiAgICBncmlkLWFyZWE6aGVhZGVyO1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTVmYWM7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxufVxcbnNlY3Rpb24jbWFpbi1jb250YWluZXJ7IFxcbiAgICBncmlkLWFyZWE6bWFpbi1jb250YWluZXI7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cmVtIDUwcmVtIDFmcjsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1cmVtIDUwcmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm5hdi1iYXIgdGFzay1jb250YWluZXIgcmlnaHQtY29sdW1uXFxcIjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuc2VjdGlvbiNuYXYtYmFye1xcbiAgICBncmlkLWFyZWE6bmF2LWJhcjsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGVkZWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgXFxufVxcblxcbnNlY3Rpb24jdGFzay1jb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTp0YXNrLWNvbnRhaW5lcjtcXG4gICAgcGFkZGluZzoycmVtO1xcbn1cXG5cXG5zZWN0aW9uI3JpZ2h0LWNvbHVtbntcXG4gICAgZ3JpZC1hcmVhOnJpZ2h0LWNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBlZGVkO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZSwgI3RpdGxlIHtcXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gMC4zcmVtO1xcbn1cXG4ubmF2LWl0ZW17XFxuanVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbn1cXG4ubmF2LWl0ZW06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2NhYzVjNTtcXG59XFxuLm5hdi1pdGVtLCNhZGQtdGFzay1idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRkY2RjO1xcbn1cXG4jaG9tZSwgI3RvZGF5e1xcbiAgICBtYXJnaW46MC4zcmVtIDAgMC4zcmVtIDA7XFxuICAgIHBhZGRpbmc6MC44cmVtIDAgMC44cmVtIDAuNXJlbTtcXG59XFxuYnV0dG9uI2FkZC1wcm9qZWN0e1xcbiAgICB3aWR0aDo3LjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OjAuNXJlbTtcXG59XFxuI3Byb2plY3RzLXRpdGxlLCBkaXYjcHJvamVjdHN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5kaXYjcHJvamVjdC1jb250ZW50e1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5kaXYjdGFzay1jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG4gICAgcGFkZGluZzogMCAxLjNyZW07XFxuICAgIG92ZXJmbG93LXg6IHZpc2libGU7XFxufVxcblxcbmJ1dHRvbiNhZGQtdGFzay1idG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuYnV0dG9uI2FkZC10YXNrLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjNWM1O1xcbn1cXG5idXR0b24uYWRkLWJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHJnYigxMjQsIDgyLCA1OSk7XFxuICAgIG1hcmdpbjowLjJyZW07XFxuICAgIHBhZGRpbmc6MC44cmVtO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jdGFzay1saXN0e1xcbiAgICBtaW4taGVpZ2h0OjEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI3Rhc2staW5wdXQtYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdGFzayxcXG4jZHVlRGF0ZSxcXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuLFxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG4sXFxuYnV0dG9uLnRhc2stYnRuXFxue1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOjAgMC4xcmVtIDAgMC4xcmVtO1xcbn1cXG5cXG4jdGFzay1pbnB1dHtcXG4gICAgd2lkdGg6NTAlO1xcbn1cXG4jZGF0ZXtcXG4gICAgd2lkdGg6MzAlO1xcbn1cXG5idXR0b24udGFzay1idG57XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICB3aWR0aDogMjAlO1xcblxcbn1cXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuLGJ1dHRvbi50YXNrLWRlbGV0ZS1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIHdpZHRoOiA1JTtcXG59XFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bjpob3ZlcixcXG4udGFzay1kZWxldGUtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxMDIsIDEwMik7XFxufVxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDE4MiwgMTA1KTtcXG59XFxuYnV0dG9uLnRhc2stZWRpdC1idG46aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE4LCAyMTApO1xcbn1cXG51bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxufVxcbmxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuLnRhc2stY2hlY2tib3h7XFxuICAgIHNpemU6M3JlbTtcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuLnRhc2stdGV4dHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kYXRle1xcbiAgICB3aWR0aDogNS41cmVtO1xcbiAgICByaWdodDo1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kZWxldGUtYnRue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6MDtcXG59XFxuZm9vdGVye1xcbiAgICBncmlkLWFyZWE6Zm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRjZGM7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSxRQUFRO0lBQ1IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSTtRQUNJLGFBQWE7UUFDYixzQ0FBc0M7SUFDMUM7SUFDQTtJQUNBLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQzs7O2FBR1M7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2Qyx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxxQ0FBcUM7SUFDckM7eUNBQ3FDO0lBQ3JDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7O0FBRUE7Ozs7OztJQU1JLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixVQUFVOztBQUVkO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsU0FBUztBQUNiO0FBQ0E7O0lBRUksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsT0FBTztBQUNYO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsNzAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NTBweCkge1xcbiAgICAjbWFpbi1jb250YWluZXJ7IFxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gMzByZW0gMWZyO1xcbiAgICB9XFxuICAgICN0YXNrLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6MzByZW07XFxuICAgIH1cXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDFmciAwLjAzcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIFxcXCJcXG4gICAgXFxcIm1haW4tY29udGFpbmVyXFxcIlxcbiAgICBcXFwiZm9vdGVyXFxcIiA7XFxuICAgIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuaDF7XFxuICAgIGdyaWQtYXJlYTpoZWFkZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNWZhYztcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMDAlO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG59XFxuc2VjdGlvbiNtYWluLWNvbnRhaW5lcnsgXFxuICAgIGdyaWQtYXJlYTptYWluLWNvbnRhaW5lcjsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gNTByZW0gMWZyOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVyZW0gNTByZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwibmF2LWJhciB0YXNrLWNvbnRhaW5lciByaWdodC1jb2x1bW5cXFwiO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uI25hdi1iYXJ7XFxuICAgIGdyaWQtYXJlYTpuYXYtYmFyOyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YwZWRlZDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyBcXG59XFxuXFxuc2VjdGlvbiN0YXNrLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOnRhc2stY29udGFpbmVyO1xcbiAgICBwYWRkaW5nOjJyZW07XFxufVxcblxcbnNlY3Rpb24jcmlnaHQtY29sdW1ue1xcbiAgICBncmlkLWFyZWE6cmlnaHQtY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGVkZWQ7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlLCAjdGl0bGUge1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAwLjNyZW07XFxufVxcbi5uYXYtaXRlbXtcXG5qdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxufVxcbi5uYXYtaXRlbTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjNWM1O1xcbn1cXG4ubmF2LWl0ZW0sI2FkZC10YXNrLWJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRjZGM7XFxufVxcbiNob21lLCAjdG9kYXl7XFxuICAgIG1hcmdpbjowLjNyZW0gMCAwLjNyZW0gMDtcXG4gICAgcGFkZGluZzowLjhyZW0gMCAwLjhyZW0gMC41cmVtO1xcbn1cXG5idXR0b24jYWRkLXByb2plY3R7XFxuICAgIHdpZHRoOjcuOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6MC41cmVtO1xcbn1cXG4jcHJvamVjdHMtdGl0bGUsIGRpdiNwcm9qZWN0c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmRpdiNwcm9qZWN0LWNvbnRlbnR7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmRpdiN0YXNrLWNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbiAgICBwYWRkaW5nOiAwIDEuM3JlbTtcXG4gICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcXG59XFxuXFxuYnV0dG9uI2FkZC10YXNrLWJ0bntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5idXR0b24jYWRkLXRhc2stYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjYWM1YzU7XFxufVxcbmJ1dHRvbi5hZGQtYnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDEyNCwgODIsIDU5KTtcXG4gICAgbWFyZ2luOjAuMnJlbTtcXG4gICAgcGFkZGluZzowLjhyZW07XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiN0YXNrLWxpc3R7XFxuICAgIG1pbi1oZWlnaHQ6MS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jdGFzay1pbnB1dC1iYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjUsIDY1KTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiN0YXNrLFxcbiNkdWVEYXRlLFxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG4sXFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bixcXG5idXR0b24udGFzay1idG5cXG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46MCAwLjFyZW0gMCAwLjFyZW07XFxufVxcblxcbiN0YXNrLWlucHV0e1xcbiAgICB3aWR0aDo1MCU7XFxufVxcbiNkYXRle1xcbiAgICB3aWR0aDozMCU7XFxufVxcbmJ1dHRvbi50YXNrLWJ0bntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIHdpZHRoOiAyMCU7XFxuXFxufVxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG4sYnV0dG9uLnRhc2stZGVsZXRlLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgd2lkdGg6IDUlO1xcbn1cXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuOmhvdmVyLFxcbi50YXNrLWRlbGV0ZS1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDEwMiwgMTAyKTtcXG59XFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTgyLCAxMDUpO1xcbn1cXG5idXR0b24udGFzay1lZGl0LWJ0bjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTgsIDIxMCk7XFxufVxcbnVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG59XFxubGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG4udGFzay1jaGVja2JveHtcXG4gICAgc2l6ZTozcmVtO1xcbiAgICBwYWRkaW5nOjFyZW07XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG4udGFzay10ZXh0e1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxufVxcbi50YXNrLWRhdGV7XFxuICAgIHdpZHRoOiA1LjVyZW07XFxuICAgIHJpZ2h0OjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxufVxcbi50YXNrLWRlbGV0ZS1idG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDowO1xcbn1cXG5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTpmb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkZGNkYztcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlxuXG5mdW5jdGlvbiBkZWxldGVFbGVtZW50QnlJZChJZCl7XG4gICAgaWYgKHR5cGVvZiBJZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudElEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7SWR9YCk7XG4gICAgICAgIGlmKGVsZW1lbnRJRCl7XG4gICAgICAgICAgICBlbGVtZW50SUQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBZGRUYXNrQnRuKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGFkZFRhc2tidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJyk7XG4gICAgaWYgKHN0YXRlbWVudCkge1xuICAgICAgICBhZGRUYXNrYnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFkZFRhc2tidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckJ5SWQoSWQsZnVuYyl7XG4gICAgaWYoISFkb2N1bWVudCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7SWR9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckJ5Q2xhc3MoY2xhc3NOYW1lLGZ1bmMpe1xuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCkpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZSkgPT4gZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJCeUNsYXNzKGNsYXNzTmFtZSxmdW5jKXtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGUpPT5lbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyxmdW5jKSlcbn1cblxuZXhwb3J0e1xuICAgICAgZGVsZXRlRWxlbWVudEJ5SWQsXG4gICAgICBkaXNwbGF5QWRkVGFza0J0bixcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXJCeUlkLCBcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXJCeUNsYXNzLFxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lckJ5Q2xhc3MgXG4gICAgfSIsImltcG9ydCB7IHRhc2tGdW5jIH0gZnJvbSBcIi4vdGFza1wiXG5pbXBvcnQge1xuICAgIGRlbGV0ZUVsZW1lbnRCeUlkLFxuICAgIGRpc3BsYXlBZGRUYXNrQnRuLFxuICAgIGFkZEV2ZW50TGlzdGVuZXJCeUlkLFxuICAgIGFkZEV2ZW50TGlzdGVuZXJCeUNsYXNzLFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJCeUNsYXNzXG59IGZyb20gJy4vRE9NZnVuY3Rpb24uanMnXG5cblxuY29uc3QgZ2V0VGl0bGUgPSAodGV4dCkgPT4ge1xuXG4gICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBgJHt0ZXh0fWA7XG4gICAgdGFza0NvbnRlbnQucHJlcGVuZCh0aXRsZSk7XG59XG5cbmNvbnN0IHRhc2tJbnB1dCA9ICgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJldmlvdXNET00oKXtcbiAgICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQtYmFyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF5b3V0KGV2ZW50KSB7XG4gICAgICAgX2RlbGV0ZVByZXZpb3VzRE9NKCk7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZGVmYXVsdCB0YXNrJyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuICAgICAgICB0YXNrQmFyLmlkID0gXCJ0YXNrLWlucHV0LWJhclwiO1xuICAgICAgICBpbnB1dC5pZCA9IFwidGFzay1pbnB1dFwiO1xuICAgICAgICBkYXRlLmlkID0gXCJkdWVEYXRlXCI7XG4gICAgICAgIGFkZC5pZCA9IFwiYWRkLXRhc2staW5wdXQtYnRuXCI7XG4gICAgICAgIGNhbmNlbC5pZCA9IFwiY2FuY2VsLXRhc2staW5wdXQtYnRuXCI7XG4gICAgICAgIGFkZC5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5cIik7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5cIik7XG5cbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICAgICAgdGFza0Jhci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICAgICAgdGFza0Jhci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgICAgICB0YXNrQ29udGVudC5hcHBlbmQodGFza0Jhcik7XG5cbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4oZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyQnlJZCgnYWRkLXRhc2staW5wdXQtYnRuJywgdGFza0Z1bmMuYWRkKTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lckJ5SWQoJ2NhbmNlbC10YXNrLWlucHV0LWJ0bicsIHRhc2tGdW5jLmRlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0XG4gICAgfVxufSkoKTtcblxuY29uc3QgdGFza0xpc3QgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gbGF5b3V0KCkge1xuXG4gICAgICAgIF9kZWxldGVQcmV2aW91c0RPTSgpO1xuICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCB0YXNrQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staW5wdXQtYmFyJyk7XG5cbiAgICAgICAgdGFza0xpc3QuaWQgPSBcInRhc2stbGlzdFwiO1xuICAgICAgICB0YXNrQ29udGVudC5pbnNlcnRCZWZvcmUodGFza0xpc3QsIHRhc2tCYXIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGFza0Z1bmMubGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICAgICAgICAgICAgdGFzay5pZCA9IGB0YXNrLSR7W2ldfWA7XG4gICAgICAgICAgICBjaGVja2JveC5pZCA9IGB0YXNrLWNoZWNrYm94LSR7aX1gO1xuICAgICAgICAgICAgdGV4dC5pZCA9IGB0YXNrLXRleHQtJHtpfWA7XG4gICAgICAgICAgICBkYXRlLmlkID0gYHRhc2stZGF0ZS0ke2l9YDtcbiAgICAgICAgICAgIGVkaXQuaWQgPSBgdGFzay1lZGl0LWJ0bi0ke2l9YDtcbiAgICAgICAgICAgIGRlbC5pZCA9IGB0YXNrLWRlbGV0ZS1idG4tJHtpfWA7XG5cbiAgICAgICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKVxuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKVxuICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBgJHtpfWApXG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnZGF0YScsIGAke2l9YClcbiAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKVxuICAgICAgICAgICAgZGVsLnNldEF0dHJpYnV0ZSgnZGF0YScsIGAke2l9YClcblxuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XG4gICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRleHRcIik7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVkaXQtYnRuXCIpO1xuICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1idG5cIik7XG5cbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCA9IFwidGFza3NcIjtcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcblxuICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ0bicpO1xuICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnRuJyk7XG5cbiAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0LWJ0bicpO1xuICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsLWJ0bicpO1xuXG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYCR7dGFza0Z1bmMubGlzdFtpXS50YXNrfWA7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7dGFza0Z1bmMubGlzdFtpXS5kYXRlfWA7XG4gICAgICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgICAgICAgICBkZWwudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVsKTtcblxuICAgICAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgICAgIGRpc3BsYXlBZGRUYXNrQnRuKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByZXZpb3VzRE9NKCkge1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XG4gICAgICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCd0YXNrLWlucHV0LWJhcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyQnlDbGFzcygndGFzay1kZWwtYnRuJywgdGFza0Z1bmMuZGVsKTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lckJ5Q2xhc3MoJ3Rhc2stZWRpdC1idG4nLCBlZGl0VGFzay5sYXlvdXQpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgIGxheW91dFxuICAgIH1cbn0pKCk7XG5cblxuY29uc3QgZWRpdFRhc2sgPSAoKCkgPT4ge1xuXG4gICAgbGV0IHRhc2tOdW1BcnJheSA9W107XG5cbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJldmlvdXNET00oKXtcbiAgICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQtYmFyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF5b3V0IChldmVudCkge1xuICAgICAgICBfZGVsZXRlUHJldmlvdXNET00oKTtcblxuICAgICAgICBjb25zdCB0YXNrQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2RlZmF1bHQgdGFzaycpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG5cbiAgICAgICAgdGFza0Jhci5pZCA9IFwidGFzay1pbnB1dC1iYXJcIjtcbiAgICAgICAgaW5wdXQuaWQgPSBcInRhc2staW5wdXRcIjtcbiAgICAgICAgZGF0ZS5pZCA9IFwiZHVlRGF0ZVwiO1xuICAgICAgICBhZGQuaWQgPSBcImFkZC10YXNrLWlucHV0LWJ0blwiO1xuICAgICAgICBjYW5jZWwuaWQgPSBcImNhbmNlbC10YXNrLWlucHV0LWJ0blwiO1xuICAgICAgICBhZGQuY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIpO1xuICAgICAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZChcInRhc2stYnRuXCIpO1xuXG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGFkZCk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICAgICAgdGFza0Jhci5zdHlsZS5kaXNwbGF5PSdmbGV4JztcblxuICAgICAgICBjb25zdCB0YXNrTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmlkfWApLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHt0YXNrTnVtfWApO1xuICAgICAgICBjb25zdCBzZWxlY3RUYXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICAgICAgLy9pbnNlcnQgdGFzayBpbnB1dCBiYXIgYmVmb3JlIHNlbGVjdGVkIGVkaXQgbGlzdFxuICAgICAgICBzZWxlY3RUYXNrTGlzdC5pbnNlcnRCZWZvcmUodGFza0JhciwgdGFzayk7XG4gICAgICAgIC8vZGlzcGxheSBoaWRkZW4gdGFza1xuICAgICAgICBzZWxlY3RUYXNrTGlzdC5jaGlsZE5vZGVzLmZvckVhY2goKGxpc3QpID0+IGxpc3Quc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiKTtcbiAgICAgICAgLy9oaWRlIGVkaXRlZCB0YXNrXG4gICAgICAgIHRhc2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBfcHJldmlld1Rhc2tJbmZvSW5JbnB1dEJhcih0YXNrTnVtKTtcbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgZ2V0U2VsZWN0ZWRUYXNrKHRhc2tOdW0pO1xuICAgICAgICBkaXNwbGF5QWRkVGFza0J0bihmYWxzZSk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRTZWxlY3RlZFRhc2sgPSAodGFza051bSkgPT4ge1xuICAgICAgICB0YXNrTnVtQXJyYXkucHVzaCh0YXNrTnVtKTtcbiAgICAgICAgY29uc29sZS5sb2codGFza051bUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRhc2tOdW1BcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcHJldmlld1Rhc2tJbmZvSW5JbnB1dEJhcih0YXNrTnVtKXtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7dGFza051bX1gKTtcbiAgICAgICAgY29uc3QgdGFza0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1pbnB1dC1iYXJcIik7XG4gICAgICAgIHRhc2tCYXIuY2hpbGROb2Rlc1swXS52YWx1ZSA9IHRhc2suY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgeSA9IHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudC5zbGljZSgwLCA0KTtcbiAgICAgICAgY29uc3QgbSA9IHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudC5zbGljZSg1LCA3KTtcbiAgICAgICAgY29uc3QgZCA9IHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudC5zbGljZSg4LCAxMCk7XG4gICAgICAgIHRhc2tCYXIuY2hpbGROb2Rlc1sxXS52YWx1ZSA9IHkgKyAnLScgKyBtICsgJy0nICsgZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJCeUlkKCdhZGQtdGFzay1pbnB1dC1idG4nLCB0YXNrRnVuYy51cGRhdGUpO1xuICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lckJ5SWQoJ2NhbmNlbC10YXNrLWlucHV0LWJ0bicsIHRhc2tGdW5jLmRlbCk7XG4gICAgfVxuXG5yZXR1cm57XG4gICAgbGF5b3V0LFxuICAgIHRhc2tOdW06dGFza051bUFycmF5XG59XG5cbn0pKCk7XG5cblxuY29uc3QgcHJvamVjdElucHV0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGUgcHJvamVjdCcpXG59XG5cbmV4cG9ydCB7IGdldFRpdGxlLCB0YXNrSW5wdXQsIHRhc2tMaXN0LCBlZGl0VGFzaywgcHJvamVjdElucHV0IH0iLCIvL2ltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucydcblxuaW1wb3J0IHsgdGFza0xpc3QsIGVkaXRUYXNrIH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQge2RlbGV0ZUVsZW1lbnRCeUlkfSBmcm9tIFwiLi9ET01mdW5jdGlvblwiXG5cblxuY2xhc3MgdGFzayB7XG4gIGNvbnN0cnVjdG9yKHRhc2ssIGR1ZURhdGUsIHN0YXR1cywgbGlzdE5hbWUpIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG4gICAgdGhpcy5kYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzXG4gICAgdGhpcy5saXN0TmFtZSA9IGxpc3ROYW1lXG4gIH1cbn1cblxuY29uc3QgdGFza0Z1bmMgPSAoKCkgPT4ge1xuXG4gIHZhciB0YXNrQXJyYXkgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIGxldCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpLnZhbHVlO1xuICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICBpZiAoIWR1ZURhdGVJbnB1dCkge1xuICAgICAgICBsZXQgdG9kYXkgPSBnZXRUb2RheURhdGUoKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0ID0gdG9kYXkueXl5eSArICcvJyArICh0b2RheS5tbSkgKyAnLycgKyB0b2RheS5kZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR1ZURhdGVJbnB1dCA9IGR1ZURhdGVJbnB1dC5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBuZXdUYXNrID0gbmV3IHRhc2sodGFza0lucHV0LCBkdWVEYXRlSW5wdXQsICd1bmNoZWNrZWQnLCAndG9kYXknKTtcbiAgICAgIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgICAgdGFza0xpc3QubGF5b3V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgbGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0JykudmFsdWU7XG4gICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgIGR1ZURhdGVJbnB1dCA9IGR1ZURhdGVJbnB1dC5yZXBsYWNlKC8tL2csICcvJyk7XG5cbiAgICAgIGxldCBzZWxlY3RlZFRhc2tBcnJheSA9IGVkaXRUYXNrLnRhc2tOdW07XG4gICAgICBsZXQgY3VycmVudFNlbGVjdGlvbkluZGV4ID0gZWRpdFRhc2sudGFza051bS5sZW5ndGgtMTtcbiAgICAgIGxldCBjdXJyZW50VGFza051bSA9IHNlbGVjdGVkVGFza0FycmF5W2N1cnJlbnRTZWxlY3Rpb25JbmRleF07XG5cbiAgICAgIHRhc2tBcnJheVtjdXJyZW50VGFza051bV0udGFzayA9IHRhc2tJbnB1dDtcbiAgICAgIHRhc2tBcnJheVtjdXJyZW50VGFza051bV0uZGF0ZSA9IGR1ZURhdGVJbnB1dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWwoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHRhc2tOdW0gPSBldmVudC5wYXRoWzFdLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoYHRhc2stJHt0YXNrTnVtfWApO1xuICAgICAgdGFza0FycmF5LnNwbGljZSh0YXNrTnVtLDEpO1xuICAgIH1cblxuICByZXR1cm4ge1xuICAgIGxpc3Q6IHRhc2tBcnJheSxcbiAgICBhZGQsXG4gICAgdXBkYXRlLFxuICAgIGRlbFxuICB9XG5cbn0pKCk7XG5cblxuY29uc3QgZ2V0VG9kYXlEYXRlID0gKCkgPT4ge1xuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICB2YXIgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICB2YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHZhciB5eXl5ID0gU3RyaW5nKHRvZGF5LmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4geyBkZCwgbW0sIHl5eXkgfTtcbn1cblxuZXhwb3J0IHsgZ2V0VG9kYXlEYXRlLCB0YXNrRnVuYyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy9pbXBvcnQgeyB0aXRsZSwgYnV0dG9uQWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vVUkuanMnXG5pbXBvcnQgeyBnZXRUaXRsZSwgdGFza0lucHV0LCBwcm9qZWN0SW5wdXQgfSBmcm9tICcuL2xheW91dC5qcydcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJCeUlkIH0gZnJvbSAnLi9ET01mdW5jdGlvbi5qcydcblxuXG5jb25zdCBsb2FkUGFnZSA9ICgoKSA9PiB7ICBcblxuY29uc3QgZGVmYXVsdFRpdGxlID0gKCkgPT4ge1xuICAgZ2V0VGl0bGUoJ0hvbWUnKTtcbn1cblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBhZGRFdmVudExpc3RlbmVyQnlJZCgnaG9tZScsYWxsVGFzayk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lckJ5SWQoJ3RvZGF5Jyx0b2RheVRhc2spO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJCeUlkKCdhZGQtcHJvamVjdC1idG4nLHByb2plY3RJbnB1dCk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lckJ5SWQoJ2FkZC10YXNrLWJ0bicsdGFza0lucHV0LmxheW91dCk7XG59XG5cbmRlZmF1bHRUaXRsZSgpO1xuYWRkRXZlbnRMaXN0ZW5lcigpO1xufSk7XG5cbmNvbnN0IGFsbFRhc2s9KGV2ZW50KT0+e1xuICAgIGdldFRpdGxlKCdIb21lJyk7XG59XG5cbmZ1bmN0aW9uIHRvZGF5VGFzayhldmVudCl7XG4gICAgZ2V0VGl0bGUoJ1RvZGF5Jyk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJyxsb2FkUGFnZSk7XG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=