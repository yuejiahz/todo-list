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
/* harmony export */   "deleteElementbyEvent": () => (/* binding */ deleteElementbyEvent),
/* harmony export */   "displayAddTaskBtn": () => (/* binding */ displayAddTaskBtn),
/* harmony export */   "displayTaskInputBar": () => (/* binding */ displayTaskInputBar),
/* harmony export */   "addEventListenerById": () => (/* binding */ addEventListenerById),
/* harmony export */   "addEventListenerByClass": () => (/* binding */ addEventListenerByClass),
/* harmony export */   "removeEventListenerByClass": () => (/* binding */ removeEventListenerByClass)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");



function deleteElementbyEvent(event) {
    if (typeof event === 'object') {
        const element = document.getElementById(`${event.target.id}`).parentNode;
        element.remove();
    }
    if (event.target.id === 'cancel-task-input-btn'){
        displayAddTaskBtn(true);
    }
}

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

function displayTaskInputBar(statement){
    const taskInput = document.querySelector('#task-input-bar');
    if(taskInput){
        if (statement) {
            taskInput.style.display = "flex"
        }
        else {
            taskInput.style.display = "none";
        }
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
    console.log(className);
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
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "createProject": () => (/* binding */ createProject)
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

const createTask = (() => {

    function layout(event) {
        ;(0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('task-input-bar');

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
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerById)('add-task-input-btn', taskList.add);
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerById)('cancel-task-input-btn', _DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementbyEvent);
    }

    return {
        layout
    }
})();


const taskList = (() => {

    function add() {
        _task__WEBPACK_IMPORTED_MODULE_0__.getTaskInput.add();
        _layout();
    }
    function update(taskNum) {
        _task__WEBPACK_IMPORTED_MODULE_0__.getTaskInput.update(taskNum);
        _layout();
    }

    function _layout() {

        _deletePreviousDOM();
        const taskContent = document.querySelector('#task-content');
        const taskList = document.createElement('ul');
        const taskBar = document.querySelector('#task-input-bar');

        taskList.id = "task-list";
        taskContent.insertBefore(taskList, taskBar);

        for (let i in _task__WEBPACK_IMPORTED_MODULE_0__.getTaskInput.list) {
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

            text.textContent = `${_task__WEBPACK_IMPORTED_MODULE_0__.getTaskInput.list[i].task}`;
            date.textContent = `${_task__WEBPACK_IMPORTED_MODULE_0__.getTaskInput.list[i].date}`;
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
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerByClass)('task-del-btn', _DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementbyEvent);
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerByClass)('task-edit-btn', editTask.layout);
    }
    return {
        add,
        update
    }
})();


const editTask = (() => {

    function _deletePreviousDOM(){
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementById)('task-input-bar');
    }

    function layout(event) {
        console.log(event);
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
        taskBar.style.display='flex';

        const taskNum = document.querySelector(`#${event.target.id}`).getAttribute('data');
        const task = document.querySelector(`#task-${taskNum}`);
        const selectTaskList = document.querySelector('#task-list');
        //display hidden task
        selectTaskList.childNodes.forEach((list) => list.style.display = "flex");
        //insert task input bar before selected edit list
        //selectTaskList.insertBefore(taskBar, task);
        //hide edited task
        task.style.display = "none";

        //preview task and date in task input bar 
        taskBar.childNodes[0].value = task.childNodes[1].textContent;
        const y = task.childNodes[2].textContent.slice(0, 4);
        const m = task.childNodes[2].textContent.slice(5, 7);
        const d = task.childNodes[2].textContent.slice(8, 10);
        taskBar.childNodes[1].value = y + '-' + m + '-' + d;
        _addEventListener();
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.displayAddTaskBtn)(false);
        taskList.update(taskNum);
    }

    function _addEventListener() {
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerById)('add-task-input-btn', taskList.update);
        (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerById)('cancel-task-input-btn', _DOMfunction_js__WEBPACK_IMPORTED_MODULE_1__.deleteElementbyEvent);
    }
   

return{
    layout
}

})();


const createProject = () => {
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
/* harmony export */   "getTaskInput": () => (/* binding */ getTaskInput),
/* harmony export */   "getTodayDate": () => (/* binding */ getTodayDate)
/* harmony export */ });
//import { compareAsc } from 'date-fns'


class task {
  constructor(task, dueDate, status,listName) {
    this.task = task
    this.date = dueDate
    this.status = status
    this.listName = listName
  }
}

const getTaskInput = (() => {
  var taskArray = [];
  

  function add(){
    let taskInput = document.getElementById('task-input').value;
    let dueDateInput = document.getElementById('dueDate').value;
      if (!dueDateInput) {
        let today = getTodayDate();
        dueDateInput = today.yyyy + '/' + (today.mm) + '/' + today.dd;
      } else {
        dueDateInput = dueDateInput.replace(/-/g, '/');
      }

      let newTask = new task(taskInput, dueDateInput, 'unchecked','today');    
      taskArray.push(newTask);

    }

    function update(taskNum) {
      let taskInput = document.getElementById('task-input').value;
      let dueDateInput = document.getElementById('dueDate').value;
      dueDateInput = dueDateInput.replace(/-/g, '/');
      console.log(taskNum);
      console.log(taskArray);
      taskArray[`${taskNum}`].task = taskInput;
      taskArray[`${taskNum}`].date = dueDateInput;
      console.log(taskArray);
    }

    function del(taskNum){
      console.log(taskNum);
    }
  
  return {
    list:taskArray,
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
    (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_2__.addEventListenerById)('add-project-btn',_layout_js__WEBPACK_IMPORTED_MODULE_1__.createProject);
    (0,_DOMfunction_js__WEBPACK_IMPORTED_MODULE_2__.addEventListenerById)('add-task-btn',_layout_js__WEBPACK_IMPORTED_MODULE_1__.createTask.layout);
}

defaultTitle();
addEventListener();
});

const allTask=((event)=>{
    (0,_layout_js__WEBPACK_IMPORTED_MODULE_1__.getTitle)('Home');
    let g=[23,5,6,3,3,56,7,47,54]

    function j(){
        console.log('dsj');
    }
    function h(){
       
        console.log( g.indexOf(6));
    }
    return {
        h
    }
})
const p= allTask();
p.h();

function todayTask(event){
    (0,_layout_js__WEBPACK_IMPORTED_MODULE_1__.getTitle)('Today');
}

window.addEventListener('DOMContentLoaded',loadPage);








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztB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OztBQUVBO0FBQ0EsSUFBSSxzRUFBb0I7QUFDeEIsSUFBSSxxRUFBb0I7QUFDeEIsSUFBSSxxRUFBb0IsbUJBQW1CLHFEQUFhO0FBQ3hELElBQUkscUVBQW9CLGdCQUFnQix5REFBaUI7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxJQUFJLG9EQUFRO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBUTtBQUNaOztBQUVBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSw3MDAmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg1MHB4KSB7XFxuICAgICNtYWluLWNvbnRhaW5lcnsgXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXJlbSAzMHJlbSAxZnI7XFxuICAgIH1cXG4gICAgI3Rhc2stY29udGFpbmVye1xcbiAgICB3aWR0aDozMHJlbTtcXG4gICAgfVxcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMWZyIDAuMDNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgXFxcIlxcbiAgICBcXFwibWFpbi1jb250YWluZXJcXFwiXFxuICAgIFxcXCJmb290ZXJcXFwiIDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG5oMXtcXG4gICAgZ3JpZC1hcmVhOmhlYWRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U1ZmFjO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbn1cXG5zZWN0aW9uI21haW4tY29udGFpbmVyeyBcXG4gICAgZ3JpZC1hcmVhOm1haW4tY29udGFpbmVyOyBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXJlbSA1MHJlbSAxZnI7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXJlbSA1MHJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJuYXYtYmFyIHRhc2stY29udGFpbmVyIHJpZ2h0LWNvbHVtblxcXCI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbnNlY3Rpb24jbmF2LWJhcntcXG4gICAgZ3JpZC1hcmVhOm5hdi1iYXI7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBlZGVkO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IFxcbn1cXG5cXG5zZWN0aW9uI3Rhc2stY29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6dGFzay1jb250YWluZXI7XFxuICAgIHBhZGRpbmc6MnJlbTtcXG59XFxuXFxuc2VjdGlvbiNyaWdodC1jb2x1bW57XFxuICAgIGdyaWQtYXJlYTpyaWdodC1jb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YwZWRlZDtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUsICN0aXRsZSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDAuM3JlbTtcXG59XFxuLm5hdi1pdGVte1xcbmp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuLm5hdi1pdGVtOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjYWM1YzU7XFxufVxcbi5uYXYtaXRlbSwjYWRkLXRhc2stYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkZGNkYztcXG59XFxuI2hvbWUsICN0b2RheXtcXG4gICAgbWFyZ2luOjAuM3JlbSAwIDAuM3JlbSAwO1xcbiAgICBwYWRkaW5nOjAuOHJlbSAwIDAuOHJlbSAwLjVyZW07XFxufVxcbmJ1dHRvbiNhZGQtcHJvamVjdHtcXG4gICAgd2lkdGg6Ny44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDowLjVyZW07XFxufVxcbiNwcm9qZWN0cy10aXRsZSwgZGl2I3Byb2plY3Rze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuZGl2I3Byb2plY3QtY29udGVudHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuZGl2I3Rhc2stY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxuICAgIHBhZGRpbmc6IDAgMS4zcmVtO1xcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xcbn1cXG5cXG5idXR0b24jYWRkLXRhc2stYnRue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmJ1dHRvbiNhZGQtdGFzay1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2NhYzVjNTtcXG59XFxuYnV0dG9uLmFkZC1idG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiByZ2IoMTI0LCA4MiwgNTkpO1xcbiAgICBtYXJnaW46MC4ycmVtO1xcbiAgICBwYWRkaW5nOjAuOHJlbTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3Rhc2stbGlzdHtcXG4gICAgbWluLWhlaWdodDoxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbiN0YXNrLWlucHV0LWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3Rhc2ssXFxuI2R1ZURhdGUsXFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0bixcXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuLFxcbmJ1dHRvbi50YXNrLWJ0blxcbntcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbjowIDAuMXJlbSAwIDAuMXJlbTtcXG59XFxuXFxuI3Rhc2staW5wdXR7XFxuICAgIHdpZHRoOjUwJTtcXG59XFxuI2RhdGV7XFxuICAgIHdpZHRoOjMwJTtcXG59XFxuYnV0dG9uLnRhc2stYnRue1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYnV0dG9uI2FkZC10YXNrLWlucHV0LWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgd2lkdGg6IDIwJTtcXG5cXG59XFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bixidXR0b24udGFzay1kZWxldGUtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICB3aWR0aDogNSU7XFxufVxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG46aG92ZXIsXFxuLnRhc2stZGVsZXRlLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTAyLCAxMDIpO1xcbn1cXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxODIsIDEwNSk7XFxufVxcbmJ1dHRvbi50YXNrLWVkaXQtYnRuOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxOCwgMjEwKTtcXG59XFxudWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5saXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcbi50YXNrLWNoZWNrYm94e1xcbiAgICBzaXplOjNyZW07XFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcbi50YXNrLXRleHR7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXG59XFxuLnRhc2stZGF0ZXtcXG4gICAgd2lkdGg6IDUuNXJlbTtcXG4gICAgcmlnaHQ6NXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXG59XFxuLnRhc2stZGVsZXRlLWJ0bntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OjA7XFxufVxcbmZvb3RlcntcXG4gICAgZ3JpZC1hcmVhOmZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRkY2RjO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksUUFBUTtJQUNSLGlDQUFpQztBQUNyQztBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0NBQXNDO0lBQzFDO0lBQ0E7SUFDQSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEM7OzthQUdTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMscUNBQXFDO0lBQ3JDO3lDQUNxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsNEJBQTRCO0FBQ2hDOztBQUVBOzs7Ozs7SUFNSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsVUFBVTs7QUFFZDtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFNBQVM7QUFDYjtBQUNBOztJQUVJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDcwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcbip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODUwcHgpIHtcXG4gICAgI21haW4tY29udGFpbmVyeyBcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cmVtIDMwcmVtIDFmcjtcXG4gICAgfVxcbiAgICAjdGFzay1jb250YWluZXJ7XFxuICAgIHdpZHRoOjMwcmVtO1xcbiAgICB9XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxZnIgMC4wM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBcXFwiXFxuICAgIFxcXCJtYWluLWNvbnRhaW5lclxcXCJcXG4gICAgXFxcImZvb3RlclxcXCIgO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcbmgxe1xcbiAgICBncmlkLWFyZWE6aGVhZGVyO1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTVmYWM7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxufVxcbnNlY3Rpb24jbWFpbi1jb250YWluZXJ7IFxcbiAgICBncmlkLWFyZWE6bWFpbi1jb250YWluZXI7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cmVtIDUwcmVtIDFmcjsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1cmVtIDUwcmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm5hdi1iYXIgdGFzay1jb250YWluZXIgcmlnaHQtY29sdW1uXFxcIjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuc2VjdGlvbiNuYXYtYmFye1xcbiAgICBncmlkLWFyZWE6bmF2LWJhcjsgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGVkZWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgXFxufVxcblxcbnNlY3Rpb24jdGFzay1jb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTp0YXNrLWNvbnRhaW5lcjtcXG4gICAgcGFkZGluZzoycmVtO1xcbn1cXG5cXG5zZWN0aW9uI3JpZ2h0LWNvbHVtbntcXG4gICAgZ3JpZC1hcmVhOnJpZ2h0LWNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBlZGVkO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZSwgI3RpdGxlIHtcXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gMC4zcmVtO1xcbn1cXG4ubmF2LWl0ZW17XFxuanVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbn1cXG4ubmF2LWl0ZW06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2NhYzVjNTtcXG59XFxuLm5hdi1pdGVtLCNhZGQtdGFzay1idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRkY2RjO1xcbn1cXG4jaG9tZSwgI3RvZGF5e1xcbiAgICBtYXJnaW46MC4zcmVtIDAgMC4zcmVtIDA7XFxuICAgIHBhZGRpbmc6MC44cmVtIDAgMC44cmVtIDAuNXJlbTtcXG59XFxuYnV0dG9uI2FkZC1wcm9qZWN0e1xcbiAgICB3aWR0aDo3LjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OjAuNXJlbTtcXG59XFxuI3Byb2plY3RzLXRpdGxlLCBkaXYjcHJvamVjdHN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5kaXYjcHJvamVjdC1jb250ZW50e1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5kaXYjdGFzay1jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG4gICAgcGFkZGluZzogMCAxLjNyZW07XFxuICAgIG92ZXJmbG93LXg6IHZpc2libGU7XFxufVxcblxcbmJ1dHRvbiNhZGQtdGFzay1idG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuYnV0dG9uI2FkZC10YXNrLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjNWM1O1xcbn1cXG5idXR0b24uYWRkLWJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHJnYigxMjQsIDgyLCA1OSk7XFxuICAgIG1hcmdpbjowLjJyZW07XFxuICAgIHBhZGRpbmc6MC44cmVtO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jdGFzay1saXN0e1xcbiAgICBtaW4taGVpZ2h0OjEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI3Rhc2staW5wdXQtYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdGFzayxcXG4jZHVlRGF0ZSxcXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRuLFxcbmJ1dHRvbiNjYW5jZWwtdGFzay1pbnB1dC1idG4sXFxuYnV0dG9uLnRhc2stYnRuXFxue1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOjAgMC4xcmVtIDAgMC4xcmVtO1xcbn1cXG5cXG4jdGFzay1pbnB1dHtcXG4gICAgd2lkdGg6NTAlO1xcbn1cXG4jZGF0ZXtcXG4gICAgd2lkdGg6MzAlO1xcbn1cXG5idXR0b24udGFzay1idG57XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24jYWRkLXRhc2staW5wdXQtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICB3aWR0aDogMjAlO1xcblxcbn1cXG5idXR0b24jY2FuY2VsLXRhc2staW5wdXQtYnRuLGJ1dHRvbi50YXNrLWRlbGV0ZS1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIHdpZHRoOiA1JTtcXG59XFxuYnV0dG9uI2NhbmNlbC10YXNrLWlucHV0LWJ0bjpob3ZlcixcXG4udGFzay1kZWxldGUtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxMDIsIDEwMik7XFxufVxcbmJ1dHRvbiNhZGQtdGFzay1pbnB1dC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDE4MiwgMTA1KTtcXG59XFxuYnV0dG9uLnRhc2stZWRpdC1idG46aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE4LCAyMTApO1xcbn1cXG51bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxufVxcbmxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuLnRhc2stY2hlY2tib3h7XFxuICAgIHNpemU6M3JlbTtcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuLnRhc2stdGV4dHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kYXRle1xcbiAgICB3aWR0aDogNS41cmVtO1xcbiAgICByaWdodDo1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4udGFzay1kZWxldGUtYnRue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6MDtcXG59XFxuZm9vdGVye1xcbiAgICBncmlkLWFyZWE6Zm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRjZGM7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5cblxuZnVuY3Rpb24gZGVsZXRlRWxlbWVudGJ5RXZlbnQoZXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZXZlbnQudGFyZ2V0LmlkfWApLnBhcmVudE5vZGU7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdjYW5jZWwtdGFzay1pbnB1dC1idG4nKXtcbiAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4odHJ1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVFbGVtZW50QnlJZChJZCl7XG4gICAgaWYgKHR5cGVvZiBJZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudElEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7SWR9YCk7XG4gICAgICAgIGlmKGVsZW1lbnRJRCl7XG4gICAgICAgICAgICBlbGVtZW50SUQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBZGRUYXNrQnRuKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGFkZFRhc2tidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJyk7XG4gICAgaWYgKHN0YXRlbWVudCkge1xuICAgICAgICBhZGRUYXNrYnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFkZFRhc2tidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tJbnB1dEJhcihzdGF0ZW1lbnQpe1xuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWlucHV0LWJhcicpO1xuICAgIGlmKHRhc2tJbnB1dCl7XG4gICAgICAgIGlmIChzdGF0ZW1lbnQpIHtcbiAgICAgICAgICAgIHRhc2tJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJCeUlkKElkLGZ1bmMpe1xuICAgIGlmKCEhZG9jdW1lbnQpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0lkfWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJCeUNsYXNzKGNsYXNzTmFtZSxmdW5jKXtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGUpID0+IGVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuYykpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyQnlDbGFzcyhjbGFzc05hbWUsZnVuYyl7XG4gICAgY29uc29sZS5sb2coY2xhc3NOYW1lKTtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGUpPT5lbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyxmdW5jKSlcbn1cblxuZXhwb3J0e1xuICAgICBcbiAgICAgIGRlbGV0ZUVsZW1lbnRCeUlkLFxuICAgICAgZGVsZXRlRWxlbWVudGJ5RXZlbnQsIFxuICAgICAgZGlzcGxheUFkZFRhc2tCdG4sXG4gICAgICBkaXNwbGF5VGFza0lucHV0QmFyLCBcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXJCeUlkLCBcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXJCeUNsYXNzLFxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lckJ5Q2xhc3MgXG4gICAgfSIsImltcG9ydCB7IGdldFRhc2tJbnB1dCB9IGZyb20gXCIuL3Rhc2tcIlxuaW1wb3J0IHtcbiAgICBkZWxldGVFbGVtZW50QnlJZCxcbiAgICBkZWxldGVFbGVtZW50YnlFdmVudCxcbiAgICBkaXNwbGF5QWRkVGFza0J0bixcbiAgICBhZGRFdmVudExpc3RlbmVyQnlJZCxcbiAgICBhZGRFdmVudExpc3RlbmVyQnlDbGFzcyxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyQnlDbGFzc1xufSBmcm9tICcuL0RPTWZ1bmN0aW9uLmpzJ1xuXG5cbmNvbnN0IGdldFRpdGxlID0gKHRleHQpID0+IHtcblxuICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY29udGVudCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYCR7dGV4dH1gO1xuICAgIHRhc2tDb250ZW50LnByZXBlbmQodGl0bGUpO1xufVxuXG5jb25zdCBjcmVhdGVUYXNrID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIGxheW91dChldmVudCkge1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgndGFzay1pbnB1dC1iYXInKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdGFza0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdkZWZhdWx0IHRhc2snKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuXG4gICAgICAgIHRhc2tCYXIuaWQgPSBcInRhc2staW5wdXQtYmFyXCI7XG4gICAgICAgIGlucHV0LmlkID0gXCJ0YXNrLWlucHV0XCI7XG4gICAgICAgIGRhdGUuaWQgPSBcImR1ZURhdGVcIjtcbiAgICAgICAgYWRkLmlkID0gXCJhZGQtdGFzay1pbnB1dC1idG5cIjtcbiAgICAgICAgY2FuY2VsLmlkID0gXCJjYW5jZWwtdGFzay1pbnB1dC1idG5cIjtcbiAgICAgICAgYWRkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0blwiKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0blwiKTtcblxuICAgICAgICBhZGQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgdGFza0Jhci5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgdGFza0Jhci5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgICB0YXNrQmFyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgICAgIHRhc2tDb250ZW50LmFwcGVuZCh0YXNrQmFyKTtcblxuICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBkaXNwbGF5QWRkVGFza0J0bihmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJCeUlkKCdhZGQtdGFzay1pbnB1dC1idG4nLCB0YXNrTGlzdC5hZGQpO1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyQnlJZCgnY2FuY2VsLXRhc2staW5wdXQtYnRuJywgZGVsZXRlRWxlbWVudGJ5RXZlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxheW91dFxuICAgIH1cbn0pKCk7XG5cblxuY29uc3QgdGFza0xpc3QgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgICBnZXRUYXNrSW5wdXQuYWRkKCk7XG4gICAgICAgIF9sYXlvdXQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKHRhc2tOdW0pIHtcbiAgICAgICAgZ2V0VGFza0lucHV0LnVwZGF0ZSh0YXNrTnVtKTtcbiAgICAgICAgX2xheW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9sYXlvdXQoKSB7XG5cbiAgICAgICAgX2RlbGV0ZVByZXZpb3VzRE9NKCk7XG4gICAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY29udGVudCcpO1xuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IHRhc2tCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1pbnB1dC1iYXInKTtcblxuICAgICAgICB0YXNrTGlzdC5pZCA9IFwidGFzay1saXN0XCI7XG4gICAgICAgIHRhc2tDb250ZW50Lmluc2VydEJlZm9yZSh0YXNrTGlzdCwgdGFza0Jhcik7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBnZXRUYXNrSW5wdXQubGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICAgICAgICAgICAgdGFzay5pZCA9IGB0YXNrLSR7W2ldfWA7XG4gICAgICAgICAgICBjaGVja2JveC5pZCA9IGB0YXNrLWNoZWNrYm94LSR7aX1gO1xuICAgICAgICAgICAgdGV4dC5pZCA9IGB0YXNrLXRleHQtJHtpfWA7XG4gICAgICAgICAgICBkYXRlLmlkID0gYHRhc2stZGF0ZS0ke2l9YDtcbiAgICAgICAgICAgIGVkaXQuaWQgPSBgdGFzay1lZGl0LWJ0bi0ke2l9YDtcbiAgICAgICAgICAgIGRlbC5pZCA9IGB0YXNrLWRlbGV0ZS1idG4tJHtpfWA7XG5cbiAgICAgICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKVxuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKVxuICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBgJHtpfWApXG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnZGF0YScsIGAke2l9YClcbiAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhJywgYCR7aX1gKVxuICAgICAgICAgICAgZGVsLnNldEF0dHJpYnV0ZSgnZGF0YScsIGAke2l9YClcblxuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XG4gICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRleHRcIik7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVkaXQtYnRuXCIpO1xuICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1idG5cIik7XG5cbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCA9IFwidGFza3NcIjtcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcblxuICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ0bicpO1xuICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnRuJyk7XG5cbiAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0LWJ0bicpO1xuICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsLWJ0bicpO1xuXG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYCR7Z2V0VGFza0lucHV0Lmxpc3RbaV0udGFza31gO1xuICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke2dldFRhc2tJbnB1dC5saXN0W2ldLmRhdGV9YDtcbiAgICAgICAgICAgIGVkaXQudGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICAgICAgICAgIGRlbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkZWwpO1xuXG4gICAgICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgZGlzcGxheUFkZFRhc2tCdG4odHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJldmlvdXNET00oKSB7XG4gICAgICAgIGRlbGV0ZUVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcbiAgICAgICAgZGVsZXRlRWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQtYmFyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJCeUNsYXNzKCd0YXNrLWRlbC1idG4nLCBkZWxldGVFbGVtZW50YnlFdmVudCk7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJCeUNsYXNzKCd0YXNrLWVkaXQtYnRuJywgZWRpdFRhc2subGF5b3V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkLFxuICAgICAgICB1cGRhdGVcbiAgICB9XG59KSgpO1xuXG5cbmNvbnN0IGVkaXRUYXNrID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIF9kZWxldGVQcmV2aW91c0RPTSgpe1xuICAgICAgICBkZWxldGVFbGVtZW50QnlJZCgndGFzay1pbnB1dC1iYXInKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXlvdXQoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBfZGVsZXRlUHJldmlvdXNET00oKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZGVmYXVsdCB0YXNrJyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuICAgICAgICB0YXNrQmFyLmlkID0gXCJ0YXNrLWlucHV0LWJhclwiO1xuICAgICAgICBpbnB1dC5pZCA9IFwidGFzay1pbnB1dFwiO1xuICAgICAgICBkYXRlLmlkID0gXCJkdWVEYXRlXCI7XG4gICAgICAgIGFkZC5pZCA9IFwiYWRkLXRhc2staW5wdXQtYnRuXCI7XG4gICAgICAgIGNhbmNlbC5pZCA9IFwiY2FuY2VsLXRhc2staW5wdXQtYnRuXCI7XG4gICAgICAgIGFkZC5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5cIik7XG4gICAgICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5cIik7XG5cbiAgICAgICAgYWRkLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICAgICAgdGFza0Jhci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIHRhc2tCYXIuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICAgICAgdGFza0Jhci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgICAgICB0YXNrQmFyLnN0eWxlLmRpc3BsYXk9J2ZsZXgnO1xuXG4gICAgICAgIGNvbnN0IHRhc2tOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuaWR9YCkuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke3Rhc2tOdW19YCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdFRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICAgICAgICAvL2Rpc3BsYXkgaGlkZGVuIHRhc2tcbiAgICAgICAgc2VsZWN0VGFza0xpc3QuY2hpbGROb2Rlcy5mb3JFYWNoKChsaXN0KSA9PiBsaXN0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIik7XG4gICAgICAgIC8vaW5zZXJ0IHRhc2sgaW5wdXQgYmFyIGJlZm9yZSBzZWxlY3RlZCBlZGl0IGxpc3RcbiAgICAgICAgLy9zZWxlY3RUYXNrTGlzdC5pbnNlcnRCZWZvcmUodGFza0JhciwgdGFzayk7XG4gICAgICAgIC8vaGlkZSBlZGl0ZWQgdGFza1xuICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICAvL3ByZXZpZXcgdGFzayBhbmQgZGF0ZSBpbiB0YXNrIGlucHV0IGJhciBcbiAgICAgICAgdGFza0Jhci5jaGlsZE5vZGVzWzBdLnZhbHVlID0gdGFzay5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCB5ID0gdGFzay5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50LnNsaWNlKDAsIDQpO1xuICAgICAgICBjb25zdCBtID0gdGFzay5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50LnNsaWNlKDUsIDcpO1xuICAgICAgICBjb25zdCBkID0gdGFzay5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50LnNsaWNlKDgsIDEwKTtcbiAgICAgICAgdGFza0Jhci5jaGlsZE5vZGVzWzFdLnZhbHVlID0geSArICctJyArIG0gKyAnLScgKyBkO1xuICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBkaXNwbGF5QWRkVGFza0J0bihmYWxzZSk7XG4gICAgICAgIHRhc2tMaXN0LnVwZGF0ZSh0YXNrTnVtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lckJ5SWQoJ2FkZC10YXNrLWlucHV0LWJ0bicsIHRhc2tMaXN0LnVwZGF0ZSk7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJCeUlkKCdjYW5jZWwtdGFzay1pbnB1dC1idG4nLCBkZWxldGVFbGVtZW50YnlFdmVudCk7XG4gICAgfVxuICAgXG5cbnJldHVybntcbiAgICBsYXlvdXRcbn1cblxufSkoKTtcblxuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGUgcHJvamVjdCcpXG59XG5cbmV4cG9ydCB7IGdldFRpdGxlLCBjcmVhdGVUYXNrLCBjcmVhdGVQcm9qZWN0IH0iLCIvL2ltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucydcblxuXG5jbGFzcyB0YXNrIHtcbiAgY29uc3RydWN0b3IodGFzaywgZHVlRGF0ZSwgc3RhdHVzLGxpc3ROYW1lKSB7XG4gICAgdGhpcy50YXNrID0gdGFza1xuICAgIHRoaXMuZGF0ZSA9IGR1ZURhdGVcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1xuICAgIHRoaXMubGlzdE5hbWUgPSBsaXN0TmFtZVxuICB9XG59XG5cbmNvbnN0IGdldFRhc2tJbnB1dCA9ICgoKSA9PiB7XG4gIHZhciB0YXNrQXJyYXkgPSBbXTtcbiAgXG5cbiAgZnVuY3Rpb24gYWRkKCl7XG4gICAgbGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0JykudmFsdWU7XG4gICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICBpZiAoIWR1ZURhdGVJbnB1dCkge1xuICAgICAgICBsZXQgdG9kYXkgPSBnZXRUb2RheURhdGUoKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0ID0gdG9kYXkueXl5eSArICcvJyArICh0b2RheS5tbSkgKyAnLycgKyB0b2RheS5kZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR1ZURhdGVJbnB1dCA9IGR1ZURhdGVJbnB1dC5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBuZXdUYXNrID0gbmV3IHRhc2sodGFza0lucHV0LCBkdWVEYXRlSW5wdXQsICd1bmNoZWNrZWQnLCd0b2RheScpOyAgICBcbiAgICAgIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKHRhc2tOdW0pIHtcbiAgICAgIGxldCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpLnZhbHVlO1xuICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICBkdWVEYXRlSW5wdXQgPSBkdWVEYXRlSW5wdXQucmVwbGFjZSgvLS9nLCAnLycpO1xuICAgICAgY29uc29sZS5sb2codGFza051bSk7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICAgICAgdGFza0FycmF5W2Ake3Rhc2tOdW19YF0udGFzayA9IHRhc2tJbnB1dDtcbiAgICAgIHRhc2tBcnJheVtgJHt0YXNrTnVtfWBdLmRhdGUgPSBkdWVEYXRlSW5wdXQ7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbCh0YXNrTnVtKXtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tOdW0pO1xuICAgIH1cbiAgXG4gIHJldHVybiB7XG4gICAgbGlzdDp0YXNrQXJyYXksXG4gICAgYWRkLFxuICAgIHVwZGF0ZSxcbiAgICBkZWxcbiAgfVxufSkoKTtcblxuXG5jb25zdCBnZXRUb2RheURhdGUgPSAoKSA9PiB7XG4gIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgdmFyIHl5eXkgPSBTdHJpbmcodG9kYXkuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiB7IGRkLCBtbSwgeXl5eSB9O1xufVxuXG5leHBvcnQgeyBnZXRUYXNrSW5wdXQgLCBnZXRUb2RheURhdGUgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vaW1wb3J0IHsgdGl0bGUsIGJ1dHRvbkFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL1VJLmpzJ1xuaW1wb3J0IHsgZ2V0VGl0bGUsIGNyZWF0ZVRhc2ssIGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL2xheW91dC5qcydcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJCeUlkIH0gZnJvbSAnLi9ET01mdW5jdGlvbi5qcydcblxuXG5jb25zdCBsb2FkUGFnZSA9ICgoKSA9PiB7ICBcblxuY29uc3QgZGVmYXVsdFRpdGxlID0gKCkgPT4ge1xuICAgZ2V0VGl0bGUoJ0hvbWUnKTtcbn1cblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBhZGRFdmVudExpc3RlbmVyQnlJZCgnaG9tZScsYWxsVGFzayk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lckJ5SWQoJ3RvZGF5Jyx0b2RheVRhc2spO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJCeUlkKCdhZGQtcHJvamVjdC1idG4nLGNyZWF0ZVByb2plY3QpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJCeUlkKCdhZGQtdGFzay1idG4nLGNyZWF0ZVRhc2subGF5b3V0KTtcbn1cblxuZGVmYXVsdFRpdGxlKCk7XG5hZGRFdmVudExpc3RlbmVyKCk7XG59KTtcblxuY29uc3QgYWxsVGFzaz0oKGV2ZW50KT0+e1xuICAgIGdldFRpdGxlKCdIb21lJyk7XG4gICAgbGV0IGc9WzIzLDUsNiwzLDMsNTYsNyw0Nyw1NF1cblxuICAgIGZ1bmN0aW9uIGooKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2RzaicpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoKCl7XG4gICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCBnLmluZGV4T2YoNikpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBoXG4gICAgfVxufSlcbmNvbnN0IHA9IGFsbFRhc2soKTtcbnAuaCgpO1xuXG5mdW5jdGlvbiB0b2RheVRhc2soZXZlbnQpe1xuICAgIGdldFRpdGxlKCdUb2RheScpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsbG9hZFBhZ2UpO1xuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9