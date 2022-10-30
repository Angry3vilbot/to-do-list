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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ \"./src/renderer.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\r\n\r\n\r\nlet newEntryBtn = document.getElementById('new-entry-btn')\r\nlet submit = document.getElementById('submit')\r\n\r\n\r\n\r\nnewEntryBtn.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_1__.revealForm)\r\nsubmit.addEventListener('click', _renderer__WEBPACK_IMPORTED_MODULE_0__.createEntry)\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeState\": () => (/* binding */ changeState),\n/* harmony export */   \"hideForm\": () => (/* binding */ hideForm),\n/* harmony export */   \"revealForm\": () => (/* binding */ revealForm),\n/* harmony export */   \"submitEntry\": () => (/* binding */ submitEntry)\n/* harmony export */ });\nlet overlay = document.getElementById('overlay')\r\nlet newEntryBtn = document.getElementById('new-entry-btn')\r\nlet form = document.getElementById('add-entry-form')\r\nlet submit = document.getElementById('submit')\r\nlet todoContainer = document.getElementById('todo-container')\r\nlet inProgContainer = document.getElementById('inprogress-container')\r\nlet finContainer = document.getElementById('done-container')\r\nconsole.log('logic')\r\nfunction changeState(){\r\n    let parent = this.parentElement;\r\n    let grandparent = parent.parentElement;\r\n    if (grandparent.id == \"todo-container\") {\r\n        let chld = grandparent.removeChild(parent);\r\n        inProgContainer.append(chld);\r\n        this.innerHTML = 'Move to \"Done\"';\r\n    }\r\n    else if (grandparent.id == \"inprogress-container\") {\r\n        let chld = grandparent.removeChild(parent);\r\n        finContainer.append(chld);\r\n        this.innerHTML = 'Remove Entry';\r\n    }\r\n    else {\r\n        grandparent.removeChild(parent);\r\n    }\r\n}\r\n\r\nfunction submitEntry(){\r\n    let n = document.getElementById('name')\r\n    let desc = document.getElementById('description')\r\n    let date = document.getElementById('date')\r\n    let importance\r\n    const radioButtons = document.querySelectorAll('input[name=\"importance\"]');\r\n    n = n.value\r\n    desc = desc.value\r\n    date = date.value\r\n    for (const sel of radioButtons){\r\n        if (sel.checked) {\r\n            importance = sel.value;\r\n            break;\r\n        }\r\n    }\r\n    return [n, desc, date, importance]\r\n}\r\n\r\nfunction revealForm(){\r\n    overlay.classList.add(\"active\")\r\n    form.classList.add(\"active\")\r\n}\r\n\r\nfunction hideForm(){\r\n    overlay.classList.remove(\"active\")\r\n    form.classList.remove(\"active\")\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/logic.js?");

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEntry\": () => (/* binding */ createEntry)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\r\n\r\nlet overlay = document.getElementById('overlay')\r\nlet newEntryBtn = document.getElementById('new-entry-btn')\r\nlet form = document.getElementById('add-entry-form')\r\nlet submit = document.getElementById('submit')\r\nlet todoContainer = document.getElementById('todo-container')\r\nlet inProgContainer = document.getElementById('inprogress-container')\r\nlet finContainer = document.getElementById('done-container')\r\n\r\nfunction createEntry(){\r\n    let variables = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.submitEntry)()\r\n    let n = variables[0]\r\n    let desc = variables[1]\r\n    let due = variables[2]\r\n    let importance = variables[3]\r\n    console.log(`${n} ||| ${importance}`)\r\n    let div = document.createElement('div')\r\n    let h3 = document.createElement('h3')\r\n    let des = document.createElement('p')\r\n    let date = document.createElement('p')\r\n    let btn = document.createElement('button')\r\n    date.classList.add('task-duedate')\r\n    des.classList.add('task-description')\r\n    h3.classList.add('task-title')\r\n    div.classList.add('task-card')\r\n    div.classList.add(`${importance}-importance`)\r\n    btn.classList.add(`${importance}-importance-button`)\r\n    des.innerHTML = desc\r\n    date.innerHTML = `Due: ${due}`\r\n    h3.innerHTML = n\r\n    btn.innerHTML = 'Move to \"In progress\"'\r\n    btn.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.changeState)\r\n    div.append(h3, des, date, btn)\r\n    todoContainer.append(div)\r\n    ;(0,_logic__WEBPACK_IMPORTED_MODULE_0__.hideForm)()\r\n }\r\n \n\n//# sourceURL=webpack://to-do-list/./src/renderer.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;