/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 900px;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.title-cont {\\n  position: relative;\\n  margin-top: 35px;\\n  margin-bottom: 35px;\\n}\\n\\n#title-gameboard {\\n  margin-top: -15px;\\n}\\n\\n.player {\\n  margin-top: 0;\\n  margin-bottom: 15px;\\n}\\n\\n/* User form */\\n\\n#players-name {\\n  border: 1px solid;\\n  border-radius: 6px;\\n  padding: 35px;\\n  width: 40%;\\n  height: 320px;\\n  margin: 0 auto;\\n}\\n\\n.button {\\n  margin: 25px 0;\\n}\\n\\n.radiobuttons {\\n  margin-top: 15px;\\n}\\n\\n/* TABLE  */\\n\\n.board-container {\\n  margin-bottom: 20px;\\n}\\n\\n.board {\\n  position: relative;\\n  width: 50%;\\n  height: 500px;\\n  margin: 0 auto;\\n}\\n\\n.cell {\\n  position: relative;\\n  width: 224px;\\n  height: 168px;\\n}\\n\\n.fas, .far {\\n  margin: 10% 0;\\n}\\n\\n/* Buttons */\\n\\n#newgame {\\n  margin: 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/css/style.css?");

/***/ }),

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/*! exports provided: getP1, getP2, removePlayerLabel, setPlayerName, hidePlayersName, showGameboard, showNewGameButton, setSubtitleLabel, displayTurn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getP1\", function() { return getP1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getP2\", function() { return getP2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePlayerLabel\", function() { return removePlayerLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPlayerName\", function() { return setPlayerName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hidePlayersName\", function() { return hidePlayersName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showGameboard\", function() { return showGameboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showNewGameButton\", function() { return showNewGameButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSubtitleLabel\", function() { return setSubtitleLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayTurn\", function() { return displayTurn; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nfunction getP1(){\n  let node = document.querySelector('#player1');\n  let name = node.value;\n  let symbol = document.getElementsByName('symbol')[0].checked ? 'X': 'O';\n  let player = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name,symbol);\n  return player;\n}\n\nfunction getP2(){\n  let node = document.querySelector('#player2');\n  let name = node.value;\n  let symbol = document.getElementsByName('symbol')[0].checked ? 'O' : 'X';\n  let player = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name,symbol);\n  return player;\n}\n\nfunction removePlayerLabel(){\n  document.querySelector('.has-text-weight-bold.h3').textContent = \"\";\n}\n\n\nfunction setPlayerName(player){\n  document.querySelector('.current-player').textContent = player.getName();\n}\n\nfunction hidePlayersName(){\n  document.querySelector('#players-name').classList.add('hide');\n}\n\nfunction showGameboard(){\n  document.querySelector('#game-board').classList.remove('hide');\n}\n\nfunction showNewGameButton(){\n  document.querySelector('#newgame').classList.remove('hide');\n}\n\nfunction setSubtitleLabel(text){\n  document.querySelector('#title-gameboard').textContent = text;\n}\n\nfunction displayTurn(player, index){\n  const elem = document.createElement('i');\n  if (player.getSymbol() === 'X'){\n    elem.classList = \"fas fa-times fa-7x\";\n  }else {\n    elem.classList = \"far fa-circle fa-7x\";\n  }\n  document.querySelector(`#row-${index}`).appendChild(elem);\n}\n\n\n//# sourceURL=webpack:///./src/domHandler.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Gameboard = (player1, player2) => {\n  let board = [null, null, null, null, null, null, null, null, null];\n\n  const getPlayer2 = () => {\n    return player2;\n  };\n\n  const getPlayer1 = () => {\n    return player1;\n  };\n\n  function winstatus() {\n    const winner = [\n      [0, 1, 2],\n      [3, 4, 5],\n      [6, 7, 8],\n      [0, 3, 6],\n      [1, 4, 7],\n      [2, 5, 8],\n      [0, 4, 8],\n      [2, 4, 6],\n    ];\n    let whowin = false;\n\n    winner.forEach((element) => {\n      if (\n        board[element[0]] === \"X\" &&\n        board[element[1]] === \"X\" &&\n        board[element[2]] === \"X\"\n      ) {\n        whowin = \"X\";\n      } else if (\n        board[element[0]] === \"O\" &&\n        board[element[1]] === \"O\" &&\n        board[element[2]] === \"O\"\n      ) {\n        whowin = \"O\";\n      }\n    });\n\n    if (!board.includes(null) && !whowin) {\n      whowin = \"It's a Tie!\";\n    }\n    return whowin;\n  }\n\n  const gameFinish = (winner) => {\n    console.log(`gamefinish ${winner}`);\n    changeSubtitleLabel(`YOU WIN ${winner}`);\n  };\n\n  const validateMove = (index) => {\n    if (board[index] === null) {\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  const move = (turnP1, index) => {\n    if (turnP1){\n      board[index] = player1.getSymbol();\n    } else {\n      board[index] = player2.getSymbol();\n    }\n  }\n\n  return { getPlayer1, getPlayer2, winstatus, gameFinish, validateMove, move };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gameboard);\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/*! exports provided: validatePlayers, sendAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validatePlayers\", function() { return validatePlayers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendAlert\", function() { return sendAlert; });\nfunction validatePlayers(player1, player2){\n  if(player1.getName() === \"\" || player2.getName() === \"\"){\n    return false;\n  }\n  return true;\n}\n\nfunction sendAlert(text){\n  alert(text);\n}\n\n//# sourceURL=webpack:///./src/helperFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ \"./src/helperFunctions.js\");\n/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domHandler */ \"./src/domHandler.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\n\n\n\n\nlet gboard;\nlet p1Move = true;\n\nfunction startGame() {\n  let player1 = Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"getP1\"])();\n  let player2 = Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"getP2\"])();\n  if (Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"validatePlayers\"])(player1, player2)) {\n    gboard = Object(_gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player1, player2);\n    Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"setPlayerName\"])(player1);\n    Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"hidePlayersName\"])();\n    Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"showGameboard\"])();\n    Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"setSubtitleLabel\"])(\"Game Started\");\n  } else {\n    Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"sendAlert\"])(\"Player's name can't be blank\");\n  }\n}\n\nfunction resetGame() {\n  console.log(\"resetGame\");\n}\n\nfunction newGame() {\n  console.log(\"newGame\");\n}\n\nfunction moveTo(e) {\n  const indx = event.target.id.match(/\\d+/)[0];\n  let winner = gboard.winstatus();\n  if (!winner) {\n    if (gboard.validateMove(indx)) {\n      gboard.move(p1Move, indx);\n      if (p1Move) {\n        Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"displayTurn\"])(gboard.getPlayer1(), indx);\n        Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"setPlayerName\"])(gboard.getPlayer2());\n      } else {\n        Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"displayTurn\"])(gboard.getPlayer2(), indx);\n        Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"setPlayerName\"])(gboard.getPlayer1());\n      }\n      p1Move = !p1Move;\n    } else {\n      Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_1__[\"sendAlert\"])(\"This place is already taken\");\n    }\n  }\n  winner = gboard.winstatus();\n  if (winner) {\n    Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"setSubtitleLabel\"])(getFinalLabel(winner));\n    endGame();\n  }\n}\n\nfunction getFinalLabel(winner){\n\n    if(winner === \"It's a Tie!\") {\n      return winner;\n    } else {\n      \n      return `YOU WIN ${getName(winner)}`; // Winner name\n    } \n}\n\nfunction endGame() {\n  Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"removePlayerLabel\"])();\n  Object(_domHandler__WEBPACK_IMPORTED_MODULE_2__[\"showNewGameButton\"])();\n}\n\nfunction addAllListeners() {\n  document\n    .querySelector(\".button.is-primary.is-inverted\")\n    .addEventListener(\"click\", startGame);\n  document\n    .querySelector(\".button.is-danger.is-rounded\")\n    .addEventListener(\"click\", resetGame);\n  document.querySelector(\"#newgame .button\").addEventListener(\"click\", newGame);\n  document.getElementById(\"row-0\").addEventListener(\"click\", moveTo);\n  document.getElementById(\"row-1\").addEventListener(\"click\", moveTo);\n  document.getElementById(\"row-2\").addEventListener(\"click\", moveTo);\n  document.getElementById(\"row-3\").addEventListener(\"click\", moveTo);\n  document.getElementById(\"row-4\").addEventListener(\"click\", moveTo);\n  document.getElementById(\"row-5\").addEventListener(\"click\", moveTo);\n  document.getElementById(\"row-6\").addEventListener(\"click\", moveTo);\n  document.getElementById(\"row-7\").addEventListener(\"click\", moveTo);\n  document.getElementById(\"row-8\").addEventListener(\"click\", moveTo);\n}\n\naddAllListeners();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Player = (name, symbol) => {\n  const getName = () => name;\n  const getSymbol = () => symbol;\n  return { getName, getSymbol };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });