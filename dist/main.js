/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let overlay = document.getElementById('overlay')\r\nlet newEntryBtn = document.getElementById('new-entry-btn')\r\nlet form = document.getElementById('add-entry-form')\r\nlet submit = document.getElementById('submit')\r\nlet todoContainer = document.getElementById('todo-container')\r\nlet inProgContainer = document.getElementById('inprogress-container')\r\nlet finContainer = document.getElementById('done-container')\r\n\r\nfunction revealForm(){\r\n    overlay.classList.add(\"active\")\r\n    form.classList.add(\"active\")\r\n}\r\n\r\nfunction hideForm(){\r\n    overlay.classList.remove(\"active\")\r\n    form.classList.remove(\"active\")\r\n}\r\n\r\nfunction submitEntry(){\r\n    let n = document.getElementById('name')\r\n    let importance\r\n    const radioButtons = document.querySelectorAll('input[name=\"importance\"]');\r\n    n = n.value\r\n    for (const sel of radioButtons){\r\n        if (sel.checked) {\r\n            importance = sel.value;\r\n            break;\r\n        }\r\n    }\r\n    return [n, importance]\r\n}\r\nfunction changeState(){\r\n    let parent = this.parentElement\r\n    let grandparent = parent.parentElement\r\n    if(grandparent.id == \"todo-container\"){\r\n        let chld = grandparent.removeChild(parent)\r\n        inProgContainer.append(chld)\r\n        this.innerHTML = 'Move to \"Done\"'\r\n    }\r\n    else if(grandparent.id == \"inprogress-container\"){\r\n        let chld = grandparent.removeChild(parent)\r\n        finContainer.append(chld)\r\n        this.innerHTML = 'Remove Entry'\r\n    }\r\n    else{\r\n        grandparent.removeChild(parent)\r\n    }\r\n}\r\nfunction createEntry(){\r\n   let variables = submitEntry()\r\n   let n = variables[0]\r\n   let importance = variables[1]\r\n   console.log(`${n} ||| ${importance}`)\r\n   let div = document.createElement('div')\r\n   let h3 = document.createElement('h3')\r\n   let p = document.createElement('p')\r\n   let btn = document.createElement('button')\r\n   h3.classList.add('task-title')\r\n   p.classList.add(importance)\r\n   div.classList.add('task-card')\r\n   h3.innerHTML = n\r\n   p.innerHTML = `Importance - <mark>${importance}</mark>`\r\n   btn.innerHTML = 'Move to \"In progress\"'\r\n   btn.addEventListener('click', changeState)\r\n   div.append(h3, p, btn)\r\n   todoContainer.append(div)\r\n   hideForm()\r\n}\r\nnewEntryBtn.addEventListener('click', revealForm)\r\nsubmit.addEventListener('click', createEntry)\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;