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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"finishedArray\": () => (/* binding */ finishedArray),\n/* harmony export */   \"inprogressArray\": () => (/* binding */ inprogressArray),\n/* harmony export */   \"todoArray\": () => (/* binding */ todoArray)\n/* harmony export */ });\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ \"./src/renderer.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\r\n\r\n\r\nlet newEntryBtn = document.getElementById('new-entry-btn')\r\nlet submit = document.getElementById('submit')\r\nlet newTabBtn = document.getElementById('new-tab-button')\r\nlet submitTab = document.getElementById('submit-tab')\r\nlet todoArray = []\r\nlet inprogressArray = []\r\nlet finishedArray = []\r\n\r\nwindow.onload = function(){\r\n    ;(0,_logic__WEBPACK_IMPORTED_MODULE_1__.loadFromStorage)()\r\n    let high = document.getElementsByClassName('high-importance-button')\r\n    let medium = document.getElementsByClassName('med-importance-button')\r\n    let low = document.getElementsByClassName('low-importance-button')\r\n    Array.from(high).forEach((el) => {\r\n        el.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_1__.changeState)\r\n    });\r\n    Array.from(medium).forEach((el) => {\r\n        el.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_1__.changeState)\r\n    });\r\n    Array.from(low).forEach((el) => {\r\n        el.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_1__.changeState)\r\n    });\r\n}\r\n\r\nnewTabBtn.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_1__.revealTabForm)\r\nnewEntryBtn.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_1__.revealForm)\r\nsubmitTab.addEventListener('click', _renderer__WEBPACK_IMPORTED_MODULE_0__.createTab)\r\nsubmit.addEventListener('click', _renderer__WEBPACK_IMPORTED_MODULE_0__.createEntry)\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeState\": () => (/* binding */ changeState),\n/* harmony export */   \"hideForm\": () => (/* binding */ hideForm),\n/* harmony export */   \"hideTabForm\": () => (/* binding */ hideTabForm),\n/* harmony export */   \"loadFromStorage\": () => (/* binding */ loadFromStorage),\n/* harmony export */   \"logItemsToStorage\": () => (/* binding */ logItemsToStorage),\n/* harmony export */   \"revealForm\": () => (/* binding */ revealForm),\n/* harmony export */   \"revealTabForm\": () => (/* binding */ revealTabForm),\n/* harmony export */   \"submitEntry\": () => (/* binding */ submitEntry),\n/* harmony export */   \"submitTab\": () => (/* binding */ submitTab)\n/* harmony export */ });\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ \"./src/renderer.js\");\n\r\n\r\nlet overlay = document.getElementById('overlay')\r\nlet newEntryBtn = document.getElementById('new-entry-btn')\r\nlet form = document.getElementById('add-entry-form')\r\nlet submit = document.getElementById('submit')\r\nlet todoContainer = document.getElementById('todo-container')\r\nlet inProgContainer = document.getElementById('inprogress-container')\r\nlet finContainer = document.getElementById('done-container')\r\nlet tabForm = document.getElementById('add-tab-form')\r\n\r\nfunction changeState(){\r\n    let parent = this.parentElement;\r\n    let grandparent = parent.parentElement;\r\n    let location = parent.querySelector('.location')\r\n    if (grandparent.id == \"todo-container\") {\r\n        let chld = grandparent.removeChild(parent);\r\n        inProgContainer.append(chld);\r\n        location.innerHTML = 'inprog'\r\n        this.innerHTML = 'Move to \"Done\"';\r\n        localStorage.clear()\r\n        logItemsToStorage()\r\n    }\r\n    else if (grandparent.id == \"inprogress-container\") {\r\n        let chld = grandparent.removeChild(parent);\r\n        finContainer.append(chld);\r\n        location.innerHTML = 'final'\r\n        this.innerHTML = 'Remove Entry';\r\n        localStorage.clear()\r\n        logItemsToStorage()\r\n    }\r\n    else {\r\n        //? Add a way to remove element from dataStorage\r\n        grandparent.removeChild(parent);\r\n        localStorage.clear()\r\n        logItemsToStorage()\r\n    }\r\n}\r\n\r\nfunction logItemsToStorage(){\r\n    let items = document.querySelectorAll('.task-card')\r\n    let parser = new DOMParser()\r\n    let array = []\r\n    items.forEach(item => array.push(item.outerHTML))\r\n    localStorage.setItem('todos', JSON.stringify(array));\r\n}\r\n\r\nfunction submitEntry(){\r\n    let n = document.getElementById('name')\r\n    let desc = document.getElementById('description')\r\n    let date = document.getElementById('date')\r\n    let importance\r\n    const radioButtons = document.querySelectorAll('input[name=\"importance\"]');\r\n    n = n.value\r\n    desc = desc.value\r\n    date = date.value\r\n    for (const sel of radioButtons){\r\n        if (sel.checked) {\r\n            importance = sel.value;\r\n            break;\r\n        }\r\n    }\r\n    return [n, desc, date, importance]\r\n}\r\nfunction submitTab(){\r\n    let n = document.getElementById('tab-name')\r\n    n = n.value\r\n    return n\r\n}\r\n\r\nfunction revealForm(){\r\n    overlay.classList.add(\"active\")\r\n    form.classList.add(\"active\")\r\n}\r\n\r\nfunction hideForm(){\r\n    overlay.classList.remove(\"active\")\r\n    form.classList.remove(\"active\")\r\n}\r\n\r\nfunction revealTabForm(){\r\n    overlay.classList.add(\"active\")\r\n    tabForm.classList.add(\"active\")\r\n}\r\n\r\nfunction hideTabForm(){\r\n    overlay.classList.remove(\"active\")\r\n    tabForm.classList.remove(\"active\")\r\n}\r\n\r\nfunction loadFromStorage(){\r\n    let storage = localStorage.getItem('todos')\r\n    console.log(storage.length)\r\n    let parser = new DOMParser()\r\n    storage = JSON.parse(storage)\r\n    console.log(storage)\r\n    console.log(storage.length)\r\n    for(let i = 0; i<=storage.length; i++){\r\n        let a = parser.parseFromString(storage[i], \"text/html\")\r\n        console.log(a)\r\n        let b = a.documentElement.innerHTML\r\n        console.log(b)\r\n        b = b.split('')\r\n        console.log(b)\r\n        b.splice(0, 19)\r\n        console.log(b)\r\n        console.log(b)\r\n        b = b.join(\"\")\r\n        console.log(b)\r\n        if(b.includes('inprog')){\r\n            let ba = parser.parseFromString(b, \"text/html\")\r\n            ba = ba.scrollingElement\r\n            ba = ba.getElementsByClassName('task-card')\r\n            Array.from(ba).forEach((el) => {\r\n                inProgContainer.append(el)\r\n            });\r\n        }\r\n        else if(b.includes('final')){\r\n            let ba = parser.parseFromString(b, \"text/html\")\r\n            ba = ba.scrollingElement\r\n            ba = ba.getElementsByClassName('task-card')\r\n            Array.from(ba).forEach((el) => {\r\n                finContainer.append(el)\r\n            });\r\n        }\r\n        else if(b.includes('needtodo')){\r\n            let ba = parser.parseFromString(b, \"text/html\")\r\n            ba = ba.scrollingElement\r\n            ba = ba.getElementsByClassName('task-card')\r\n            Array.from(ba).forEach((el) => {\r\n                todoContainer.append(el)\r\n            });\r\n        }\r\n        else{\r\n            console.log('EROOOOOORRRRR')\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/logic.js?");

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEntry\": () => (/* binding */ createEntry),\n/* harmony export */   \"createNewViewTab\": () => (/* binding */ createNewViewTab),\n/* harmony export */   \"createTab\": () => (/* binding */ createTab)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\r\n\r\nlet overlay = document.getElementById('overlay')\r\nlet newEntryBtn = document.getElementById('new-entry-btn')\r\nlet form = document.getElementById('add-entry-form')\r\nlet submit = document.getElementById('submit')\r\nlet todoContainer = document.getElementById('todo-container')\r\nlet inProgContainer = document.getElementById('inprogress-container')\r\nlet finContainer = document.getElementById('done-container')\r\nlet footer = document.querySelector('footer')\r\n\r\nfunction createEntry(){\r\n    let currentTab = document.getElementById('current-tab')\r\n    let variables = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.submitEntry)()\r\n    let n = variables[0]\r\n    let desc = variables[1]\r\n    let due = variables[2]\r\n    let importance = variables[3]\r\n    console.log(`${n} ||| ${importance}`)\r\n    let div = document.createElement('div')\r\n    let h3 = document.createElement('h3')\r\n    let des = document.createElement('p')\r\n    let date = document.createElement('p')\r\n    let btn = document.createElement('button')\r\n    let loc = document.createElement('p')\r\n    loc.classList.add('location')\r\n    date.classList.add('task-duedate')\r\n    des.classList.add('task-description')\r\n    h3.classList.add('task-title')\r\n    div.classList.add('task-card')\r\n    div.classList.add(`${importance}-importance`)\r\n    btn.classList.add(`${importance}-importance-button`)\r\n    loc.innerHTML = 'needtodo'\r\n    des.innerHTML = desc\r\n    date.innerHTML = `Due: ${due}`\r\n    h3.innerHTML = n\r\n    btn.innerHTML = 'Move to \"In progress\"'\r\n    btn.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.changeState)\r\n    div.append(h3, des, date, btn, loc)\r\n    todoContainer.append(div)\r\n    ;(0,_logic__WEBPACK_IMPORTED_MODULE_0__.logItemsToStorage)()\r\n    ;(0,_logic__WEBPACK_IMPORTED_MODULE_0__.hideForm)()\r\n}\r\n\r\nfunction createNewViewTab(){\r\n   let allCards = document.querySelectorAll('.task-card')\r\n   allCards.forEach(item => item.remove())\r\n}\r\nfunction createTab(){\r\n    let currentTabCheck = document.getElementById('current-tab')\r\n    console.log(currentTabCheck)\r\n    let name = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.submitTab)()\r\n    let div = document.createElement('div')\r\n    div.innerHTML = name\r\n    let items = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.logItemsToStorage)()\r\n    window.localStorage.setItem(name, items)\r\n    footer.append(div)\r\n    if(currentTabCheck != null){\r\n        console.log(`CURRENT TAB CHECK NULL:   ${currentTabCheck}`)\r\n        currentTabCheck.removeAttribute('id')\r\n        console.log(`CURRENT TAB NO ID:   ${currentTabCheck}`)\r\n    }\r\n    div.id = 'current-tab'\r\n    ;(0,_logic__WEBPACK_IMPORTED_MODULE_0__.hideTabForm)()\r\n    createNewViewTab()\r\n}\r\n \n\n//# sourceURL=webpack://to-do-list/./src/renderer.js?");

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