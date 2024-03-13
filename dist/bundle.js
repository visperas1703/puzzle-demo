/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/greet.ts":
/*!**********************!*\
  !*** ./src/greet.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.greetLogic = void 0;\nvar startPage_1 = __webpack_require__(/*! ./startPage */ \"./src/startPage.ts\");\nfunction greetLogic() {\n    var userInput = prompt(\"Please, type here your age\");\n    if (userInput >= 40) {\n        (0, startPage_1.startPageLogic)();\n    }\n    else {\n        alert('Goodbye!');\n    }\n}\nexports.greetLogic = greetLogic;\n\n\n//# sourceURL=webpack://puzzle-demo-1/./src/greet.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar greet_1 = __webpack_require__(/*! ./greet */ \"./src/greet.ts\");\n(0, greet_1.greetLogic)();\n\n\n//# sourceURL=webpack://puzzle-demo-1/./src/index.ts?");

/***/ }),

/***/ "./src/startPage.ts":
/*!**************************!*\
  !*** ./src/startPage.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startPageLogic = void 0;\nfunction startPageLogic() {\n    var myDiv = document.createElement('div');\n    myDiv.classList.add('myDiv');\n    myDiv.innerHTML = '<h1> HELLOOOOOOO </h1>';\n    document.body.appendChild(myDiv);\n}\nexports.startPageLogic = startPageLogic;\n\n\n//# sourceURL=webpack://puzzle-demo-1/./src/startPage.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;