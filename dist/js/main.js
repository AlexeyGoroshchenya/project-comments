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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./modules/burger.js\");\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getData */ \"./modules/getData.js\");\n\r\n//import { sendForm } from './modules/sendForm';\r\n\r\n\r\n\r\n\r\n\r\n//burger();\r\n//sendForm(document.querySelector('.subscribe__body'), 'https://jsonplaceholder.typicode.com/posts');\r\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_1__.getData)('../dist/comments.json')\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/burger.js":
/*!***************************!*\
  !*** ./modules/burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => (/* binding */ burger)\n/* harmony export */ });\nconst burger = () => {\r\n\r\n    const menu = document.querySelector('.menu-header__body')\r\n    const userMenu = document.querySelector('.user-menu__menu')\r\n\r\n\r\n    const moveMenu = () => {\r\n        menu.classList.toggle('menu-header__body-active')\r\n    }\r\n\r\n    const moveUserMenu = () => {\r\n        userMenu.classList.toggle('user-menu__menu-active')\r\n    }\r\n\r\n    document.body.addEventListener('click', (e) => {\r\n\r\n        if (document.querySelector('.menu-header__body-active') && !e.target.matches('.menu-header__item>a')) {\r\n            e.preventDefault()\r\n            moveMenu()\r\n        }\r\n\r\n        if (e.target.closest('.header__menu__btn') || e.target.matches('.menu-header__item>a')) {\r\n            e.preventDefault()\r\n            moveMenu()\r\n        }\r\n\r\n\r\n        if (e.target.closest('.header__user ')) {\r\n            e.preventDefault()\r\n            moveUserMenu()\r\n        }\r\n\r\n        if (document.querySelector('.user-menu__menu-active') && !e.target.closest('.header__user ')) {\r\n            e.preventDefault()\r\n            moveUserMenu()\r\n        }\r\n\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/burger.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\n\r\nconst getData = (url) => {\r\n\r\n    fetch(url)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            console.log(data.comments);\r\n            (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(data.comments)\r\n            //sendData(data)\r\n        })\r\n        .catch(err => console.log(err))\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n\r\nconst render = (arr) => {\r\n\r\n\r\n    const comments = document.querySelector('.comments')\r\n\r\n\r\n    const renderComment = (item, body) => {\r\n\r\n        console.log(body);\r\n        const comment = document.createElement('div');\r\n        comment.classList.add('comments__item', 'item-comments')\r\n        comment.innerHTML = `\r\n        <div class=\"item-comments__header\">\r\n        <div class=\"item-comments__pic\"></div>\r\n        <div class=\"item-comments__title\">${item.author} </div>\r\n    </div>\r\n    <div class=\"item-comments__text\">${item.message}</div>\r\n    <div class=\"comments__statistic\">\r\n        <div class=\"comments__likes like\">\r\n            <img src=\"dist/img/icons/icons8-like-49.png\" alt=\"\"> <span></span>\r\n        </div>\r\n        <div class=\"comments__comments comment\">\r\n            <img src=\"dist/img/icons/icons8-comment-67.png\" alt=\"\"> <span></span>\r\n        </div>\r\n    </div>\r\n\t\t\r\n        `;\r\n        body.append(comment);\r\n\r\n\r\n\r\n        if (item.has_child) {\r\n            item.reply.forEach(child => {\r\n                renderComment(child, comment)\r\n\r\n            })\r\n\r\n        }\r\n\r\n    }\r\n\r\n    const init = () => {\r\n        comments.innerHTML = '';\r\n\r\n        arr.forEach(element => {\r\n\r\n            renderComment(element, comments)\r\n\r\n\r\n\r\n        });\r\n\r\n    }\r\n\r\n    init()\r\n\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/render.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;