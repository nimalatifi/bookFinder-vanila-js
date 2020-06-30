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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/book-finder.js":
/*!***************************!*\
  !*** ./js/book-finder.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BookFinder; });\nclass BookFinder {\n    \n    constructor( title = \"Harry Potter\", maxResult = 26 ) {\n        this.bookTitle = title;\n        this.maxResult = maxResult;\n    }\n\n    async getBooksFromGoogle() {\n        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.bookTitle}&maxResults=${this.maxResult}`);\n        const data =  await response.json();\n       // console.log(data);\n        return data;\n    }\n\n    async findBook() {\n        let finalBookListResult = null;\n        if (this.bookTitle.trim() != \"\"){\n            await this.getBooksFromGoogle()\n                    .then(result => { finalBookListResult = result} )\n                    .catch( error => {\n                        finalBookListResult = null;\n                        console.log( 'Error on GoogleApi response!');\n                        console.log(error);\n                    })\n        }\n        return finalBookListResult;\n    }\n\n}\n\n\n\n//# sourceURL=webpack:///./js/book-finder.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _book_finder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-finder.js */ \"./js/book-finder.js\");\n    \n    \n    /*** create bookCard items and add them to array  ***/\n    async function createDomElements(bookListResult, searchTerm) {\n        let bookCardArray = [];\n        for( let item of bookListResult.items){\n            /*** Create all necessary elements  ***/\n            const bookCardDiv = document.createElement('div');\n            const bookImageDiv = document.createElement('div');\n            const bookImage = document.createElement('img');\n            const bookTitle = document.createElement('h1');\n            const bookDetailsDiv = document.createElement('div');\n            const bookAuthor = document.createElement('h2');\n            const bookPageCount = document.createElement('p');\n            \n            /*** Add appropriate classesName  ***/\n            bookCardDiv.className = \"book-card\";\n            bookImageDiv.className = \"book-cover-container\";\n            bookImage.className = \"book-cover\";\n            bookTitle.className = \"bookTitle\";\n            bookDetailsDiv.className = \"book-details\";\n            bookAuthor.className = \"book-author\";\n            bookPageCount.className = \"book-pages\";\n\n            /*** Grab data and insert it into created elements  ***/\n            bookImage.setAttribute('src', item.volumeInfo.imageLinks!= null ? item.volumeInfo.imageLinks.thumbnail : \"./img/no-image.png\");\n            bookTitle.innerHTML = item.volumeInfo.title!= null && item.volumeInfo.title.length ? item.volumeInfo.title : \"no-Tile\";\n            bookAuthor.innerText = item.volumeInfo.authors!= null && item.volumeInfo.authors.length ? item.volumeInfo.authors[0] : \"no-author\";\n            bookPageCount.innerHTML = item.volumeInfo.pageCount!= null ? item.volumeInfo.pageCount : \"#0\";\n\n            /***  push bookCard in array  ***/\n            bookDetailsDiv.append(bookAuthor, bookPageCount);\n            bookImageDiv.append(bookImage);\n            bookCardDiv.append(bookImageDiv, bookTitle, bookDetailsDiv);\n            bookCardArray.push(bookCardDiv);\n        }\n\n        /*** create empty element to add at the end of the array. this empty element make prevent from extra growing in last row.  ***/\n        for( let i = 0; i < 3; i++){\n             const bookCardDiv = document.createElement('div');\n             bookCardDiv.className = \"book-card hidden-flex-item\";\n             bookCardArray.push(bookCardDiv);\n        }\n\n        return bookCardArray;\n    }\n\n    /*** clear content of domElement (remove all inner elements ***/\n    function clearContent(domElement){\n             while(domElement.firstChild) { \n                domElement.removeChild(domElement.firstChild); \n            } \n    }\n\n    /*** display element ***/\n    function showElement(domElement){\n         domElement.classList.add(\"show\");\n         domElement.classList.remove(\"hide\");\n    }\n   \n    /*** hide element ***/\n    function hideElement(domElement){\n        domElement.classList.add(\"hide\");\n        domElement.classList.remove(\"show\");\n    }\n\n    /*** enable element***/\n    function setEnable(domElement){\n        domElement.disabled = false;\n    }\n\n    /*** disable element***/\n    function setDisable(domElement){\n        domElement.disabled = true;\n    }\n   \n    class Index{\n      async find(){\n        let searchTerm = document.getElementById(\"searchInput\").value;\n        let bookListContainer = document.querySelector(\".book-list-container\");\n        let messageContainer = document.querySelector(\".msg-container\");\n        let messageElement = document.querySelector(\".msg\");\n        let loaderContainer = document.querySelector(\".loader-container\");\n        const findButton = document.querySelector('.search-btn')\n        \n        setDisable(findButton);\n        showElement(loaderContainer);\n        const bookFinder = new _book_finder_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](searchTerm, 23);\n        let bookListResult = await bookFinder.findBook();\n\n        /*** if any book find truly ***/\n        if (bookListResult != null && bookListResult.totalItems > 0){\n           /*** create book card ***/\n            await createDomElements(bookListResult, searchTerm)\n            .then(result => { \n              \n                /*** hide message-container ***/\n                hideElement(messageContainer);\n\n                /*** clear all previous search result ***/\n                clearContent(bookListContainer);\n               \n                /*** Add new books find result to DOM ***/\n                result.forEach(bookCard => {\n                    bookListContainer.append(bookCard);\n                });\n\n                /*** show book list container ***/\n                showElement(bookListContainer);\n\n                /*** hide loader ***/\n                hideElement(loaderContainer);\n\n                /*** enable find button ***/\n                setEnable(findButton)\n            })\n            .catch( error => {\n                hideElement(loaderContainer);\n                hideElement(bookListContainer);\n                showElement(messageContainer);\n                setEnable(findButton);\n                messageElement.innerText = `Error on create DOM element.`;\n                console.log(error);\n            })  \n        }else{\n            hideElement(loaderContainer);\n            hideElement(bookListContainer);\n            showElement(messageContainer);\n            if(searchTerm != \"\"){\n                messageElement.innerText = `No results for \"${searchTerm}\". \\nTry checking your spelling or use more general terms.`;\n            }else{\n                messageElement.innerText = `Please enter book title.`;\n            }\n            setEnable(findButton)\n        }\n    }\n    \n}\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_basic_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/basic.css */ \"./styles/basic.css\");\n/* harmony import */ var _styles_basic_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_basic_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/loader.css */ \"./styles/loader.css\");\n/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_loader_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./js/index.js\");\n\n\n\n\n\n        \nconst index= new _index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\ndocument.querySelector('.search-btn').addEventListener('click', index.find)\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/basic.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/basic.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nhtml, body {\\n    color: #515151;\\n    background: #f5f5f5;\\n    margin: 0px;\\n    padding: 0px;\\n    font-family: monospace;\\n  }\\n  \\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/basic.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/index.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/index.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".container {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    min-height: 950px;\\n    margin: 0 auto;\\n    background: #eee;\\n}\\nheader {\\n    background-color: rgb(255, 255, 255);\\n    text-align: center;\\n    color: #191816;\\n    font-weight: 300;\\n}\\n.search-area{\\n    display: flex;\\n    width: 100%;\\n    padding: 1% 0;\\n    margin: 0 auto;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    justify-content:center;\\n    -webkit-box-shadow: 0 2px 4px 0 hsla(0,0%,44.3%,.05);\\n    box-shadow: 0 2px 4px 0 hsla(0,0%,44.3%,.05);\\n    -webkit-box-shadow: 0 2px 4px 0 hsla(0,0%,44.3%,.05);\\n    box-shadow: 0 2px 4px 0 hsla(0,0%,44.3%,.05);\\n    -webkit-box-shadow: rgba(0,0,0,.04) 0 7px 8px 0;\\n    box-shadow: 0 7px 8px 0 rgba(0,0,0,.04);\\n    \\n    background: #fff;\\n}\\n.search-input-container{ \\n    display: flex;\\n    flex-grow: 1;\\n    justify-content:center;\\n}\\n.search-input{\\n    justify-content: center;\\n    background: #eeeeee;\\n    border: 1px solid #aaa;\\n    color: #000000;\\n    height: 30px;\\n    line-height: 30px;\\n    font-size: 17px;\\n    min-width: 25%;\\n    border-radius: 3px;\\n}\\n.search-btn{\\n    margin-left: 10px;\\n    min-width: 7%;\\n}\\n.loader-container{\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    background-color: #19181640;\\n    z-index: 1;\\n}\\n.main-area{\\n    display: flex;\\n    width: 70%;\\n    margin: 3% auto;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,.03);\\n    border: 1px solid #e4e4e4;\\n    background: #fff;\\n    min-height:700px;\\n    position:relative;\\n}\\n\\n.result-container{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    z-index: 0;\\n}\\n.msg-container{\\n    display: flex;\\n    flex-direction: row;\\n    font-size: larger;\\n}\\n.book-list-container{\\n    display:flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    animation: book-card-animation 2s ease 0s forward;\\n}\\n\\n.book-card {\\n    border: solid 1px #bbb;\\n    background-color: white;\\n    padding: 1%;\\n    flex-grow: 1;\\n    flex-basis: 25%;\\n    display: flex;\\n    justify-content: flex-end;\\n    box-sizing: border-box;\\n    flex-direction: column;\\n    min-height: 340px;\\n    margin-left: -1px;\\n    margin-top: -1px;\\n    margin-bottom: -1px;\\n    border: 1px solid rgb(230, 230, 230);\\n    min-width: 250px;\\n    transition: all 0.3s ease ;\\n    animation: book-card-animation;\\n     animation-duration: 2s;\\n    animation-timing-function: ease;\\n    animation-fill-mode: forwards; \\n}\\n.book-card:hover{\\n    -webkit-box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 0.13);\\n    box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 0.13);\\n    z-index: 11;\\n}\\n.book-cover-container{\\n    flex:1;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.book-cover{\\n    width: 128px;\\n    height: 169px;\\n}\\n.book-details {\\n    display: flex;\\n    flex-wrap: nowrap;\\n    flex-direction: row;\\n    justify-content: flex-start;\\n}\\n.bookTitle{\\n    font-weight: 300;\\n    font-size: 14px;\\n    display: block;\\n    height: 45px;\\n    margin: 3px 0;\\n    overflow: auto;\\n}\\n\\n\\n.book-author {\\n    flex: 8;\\n    font-size: 12px;\\n    font-weight: normal;\\n    color: #999;\\n    line-height: 12px;\\n    margin: 5px 0px;\\n    height: 30px;\\n    overflow: auto;\\n}\\n\\n.book-pages {\\n    flex: 1;\\n    line-height: 2.2em;\\n    font-size: 12px;\\n    font-weight: normal;\\n    color: #999;\\n    line-height: 30px;\\n    margin: 5px 0px;\\n    text-align: center;\\n}\\n.hidden-flex-item {\\n    content: \\\"\\\";\\n    visibility: hidden;\\n    min-height: 0px!important;\\n    padding: 0!important;\\n}\\n.hide{\\n    display: none;\\n}\\n.show{\\n    display: flex;\\n}\\nfooter {\\n    background-color: rgb(0, 0, 0);\\n    padding: 5px;\\n    text-align: center;\\n    color: rgb(255, 255, 255);\\n    font-size: 1em;\\n}\\n\\n/*** animation  ***/\\n\\n@keyframes book-card-animation {\\n    0% { opacity:0%;}\\n   \\n    100% { opacity:100%;}\\n}\\n\\n/*** end animation ***/\\n@media (max-width: 920px) {\\n    .container .book-list .book-card {\\n        flex-basis: 20%;\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .container .book-list .book-card {\\n        flex-basis: 50%;\\n    }\\n}\\n\\n@media (max-width: 400px) {\\n    .container .book-list .book-card {\\n        flex-basis: 100%;\\n    }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/loader.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/loader.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".loader,\\n.loader:before,\\n.loader:after {\\n  background: #880000;\\n  -webkit-animation: load1 1s infinite ease-in-out;\\n  animation: load1 1s infinite ease-in-out;\\n  width: 1em;\\n  height: 4em;\\n}\\n.loader {\\n  color: #880000;\\n  text-indent: -9999em;\\n  margin: 88px auto;\\n  position: relative;\\n  font-size: 11px;\\n  -webkit-transform: translateZ(0);\\n  -ms-transform: translateZ(0);\\n  transform: translateZ(0);\\n  -webkit-animation-delay: -0.16s;\\n  animation-delay: -0.16s;\\n}\\n.loader:before,\\n.loader:after {\\n  position: absolute;\\n  top: 0;\\n  content: '';\\n}\\n.loader:before {\\n  left: -1.5em;\\n  -webkit-animation-delay: -0.32s;\\n  animation-delay: -0.32s;\\n}\\n.loader:after {\\n  left: 1.5em;\\n}\\n@-webkit-keyframes load1 {\\n  0%,\\n  80%,\\n  100% {\\n    box-shadow: 0 0;\\n    height: 4em;\\n  }\\n  40% {\\n    box-shadow: 0 -2em;\\n    height: 5em;\\n  }\\n}\\n@keyframes load1 {\\n  0%,\\n  80%,\\n  100% {\\n    box-shadow: 0 0;\\n    height: 4em;\\n  }\\n  40% {\\n    box-shadow: 0 -2em;\\n    height: 5em;\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/loader.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./styles/basic.css":
/*!**************************!*\
  !*** ./styles/basic.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./basic.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/basic.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/basic.css?");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/index.css?");

/***/ }),

/***/ "./styles/loader.css":
/*!***************************!*\
  !*** ./styles/loader.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./loader.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/loader.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/loader.css?");

/***/ })

/******/ });