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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
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

/***/ })

/******/ });