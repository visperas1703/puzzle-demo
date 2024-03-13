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
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createForm = void 0;\n/*export function greetLogic () {\n\nlet userInput: any  = prompt(\"Please, type here your age\");\n\nif (userInput >= 40) {\n    startPageLogic();\n} else {\n    alert('Goodbye!');\n}\n\n}*/\nfunction createForm() {\n    // Создание формы\n    var myForm = document.createElement('form');\n    myForm.id = 'myForm';\n    // Создание и добавление поля для ввода имени\n    var nameLabel = document.createElement('label');\n    nameLabel.textContent = 'Имя:';\n    myForm.appendChild(nameLabel);\n    var firstNameInput = document.createElement('input');\n    firstNameInput.type = 'text';\n    firstNameInput.id = 'firstName';\n    firstNameInput.name = 'firstName';\n    firstNameInput.required = true;\n    myForm.appendChild(firstNameInput);\n    // Создание и добавление поля для ввода фамилии\n    var lastNameLabel = document.createElement('label');\n    lastNameLabel.textContent = 'Фамилия:';\n    myForm.appendChild(lastNameLabel);\n    var lastNameInput = document.createElement('input');\n    lastNameInput.type = 'text';\n    lastNameInput.id = 'lastName';\n    lastNameInput.name = 'lastName';\n    lastNameInput.required = true;\n    myForm.appendChild(lastNameInput);\n    // Создание и добавление кнопки \"Отправить\"\n    var submitButton = document.createElement('button');\n    submitButton.type = 'button';\n    submitButton.textContent = 'Отправить';\n    submitButton.addEventListener('click', submitForm);\n    myForm.appendChild(submitButton);\n    // Добавление формы к body\n    document.body.appendChild(myForm);\n}\nexports.createForm = createForm;\nfunction submitForm() {\n    // Получение значений из полей формы\n    var firstName = document.getElementById(\"firstName\").value;\n    var lastName = document.getElementById(\"lastName\").value;\n    // Проверка наличия данных\n    if (firstName && lastName) {\n        // Вывод результатов (в примере, просто вывод в консоль)\n        console.log(\"Вы ввели: \" + firstName + \" \" + lastName);\n    }\n    else {\n        alert(\"Пожалуйста, заполните все поля!\");\n    }\n}\n\n\n//# sourceURL=webpack://puzzle-demo-1/./src/greet.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//import { greetLogic }from './greet';\nvar greet_1 = __webpack_require__(/*! ./greet */ \"./src/greet.ts\");\nvar startPage_1 = __webpack_require__(/*! ./startPage */ \"./src/startPage.ts\");\n//greetLogic();\n(0, greet_1.createForm)();\n(0, startPage_1.startPageLogic)();\n\n\n//# sourceURL=webpack://puzzle-demo-1/./src/index.ts?");

/***/ }),

/***/ "./src/startPage.ts":
/*!**************************!*\
  !*** ./src/startPage.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startPageLogic = void 0;\nfunction startPageLogic() {\n    var myDiv = document.createElement('div');\n    myDiv.classList.add('myDiv');\n    myDiv.textContent = 'HELLOOOOOO!!!!!!!!!';\n    document.body.appendChild(myDiv);\n}\nexports.startPageLogic = startPageLogic;\n\n\n//# sourceURL=webpack://puzzle-demo-1/./src/startPage.ts?");

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