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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./modules/burger.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getData */ \"./modules/getData.js\");\n/* harmony import */ var _modules_addComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addComment */ \"./modules/addComment.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//burger();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_1__.sendForm)('.new-comment');\r\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_2__.getData)('../dist/comments.json')\r\n;(0,_modules_addComment__WEBPACK_IMPORTED_MODULE_3__.addComment)()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/addComment.js":
/*!*******************************!*\
  !*** ./modules/addComment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment)\n/* harmony export */ });\n/* harmony import */ var _sendForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendForm */ \"./modules/sendForm.js\");\n\r\n\r\nconst addComment = () => {\r\n\r\n    const comments = document.querySelector('.comments')\r\n\r\n    const createForm = (element) => {\r\n\r\n        const newComment = document.createElement('form');\r\n        newComment.classList.add('new-comment')\r\n        newComment.innerHTML = `\r\n                    <textarea class=\"new-comment__textarea\" name=\"new-comment__textarea\" cols=\"30\" rows=\"10\"></textarea>\r\n\t\t\t\t\t<button class=\"new-comment__send\" type=\"submit\">Отправить</button>\r\n            `\r\n\r\n        element.closest('.comments__statistic').after(newComment)\r\n\r\n        setTimeout(() => {\r\n\r\n            newComment.classList.add('new-comment-active')\r\n        }, 300)\r\n\r\n        ;(0,_sendForm__WEBPACK_IMPORTED_MODULE_0__.sendForm)('.new-comment')\r\n\r\n    }\r\n\r\n    const removeForm = (element) => {\r\n\r\n\r\n\r\n        element.classList.remove('new-comment-active')\r\n\r\n\r\n        setTimeout(() => {\r\n\r\n            element.remove()\r\n        }, 300)\r\n\r\n    }\r\n\r\n\r\n    document.addEventListener('click', (e) => {\r\n\r\n\r\n        if (e.target.closest('.article__comments')) {\r\n            document.querySelector('.new-comment').classList.toggle('new-comment-active')\r\n        }\r\n\r\n\r\n        if (e.target.closest('.comments__comments')) {\r\n\r\n            if (e.target.closest('.comments__item').querySelector('.new-comment-active')) {\r\n                comments.querySelectorAll('.new-comment-active').forEach(item => removeForm(item))\r\n                console.log(1);\r\n            }\r\n            else if (!e.target.closest('.comments__item').querySelector('.new-comment-active') && comments.querySelector('.new-comment-active')) {\r\n                comments.querySelectorAll('.new-comment-active').forEach(item => removeForm(item))\r\n                createForm(e.target)\r\n                console.log(2);\r\n            } else {\r\n                createForm(e.target)\r\n            }\r\n\r\n\r\n        }\r\n\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/addComment.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\r\n\r\nconst getData = (url) => {\r\n\r\n    fetch(url)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n\r\n            (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(data.comments)\r\n\r\n        })\r\n        .catch(err => console.log(err))\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _renderComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderComment */ \"./modules/renderComment.js\");\n\r\n\r\nconst render = (arr) => {\r\n\r\n    const comments = document.querySelector('.comments')\r\n\r\n\r\n\r\n\r\n    const init = () => {\r\n        comments.innerHTML = '';\r\n\r\n        arr.forEach(element => {\r\n            (0,_renderComment__WEBPACK_IMPORTED_MODULE_0__.renderComment)(element, comments)\r\n        });\r\n\r\n    }\r\n\r\n    init()\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/render.js?");

/***/ }),

/***/ "./modules/renderComment.js":
/*!**********************************!*\
  !*** ./modules/renderComment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderComment\": () => (/* binding */ renderComment)\n/* harmony export */ });\nconst renderComment = (item, element, render) => {\r\n\r\n    const comment = document.createElement('div');\r\n    comment.classList.add('comments__item', 'item-comments')\r\n\r\n    comment.setAttribute('c-id', item.id)\r\n    comment.innerHTML = `\r\n    <div class=\"item-comments__header\">\r\n    <div class=\"item-comments__pic\"></div>\r\n    <div class=\"item-comments__title\">${item.author} </div>\r\n</div>\r\n<div class=\"item-comments__text\">${item.message}</div>\r\n<div class=\"comments__statistic\">\r\n    <div class=\"comments__likes like\">\r\n        <img src=\"dist/img/icons/icons8-like-49.png\" alt=\"\"> <span></span>\r\n    </div>\r\n    <div class=\"comments__comments comment\">\r\n        <img src=\"dist/img/icons/icons8-comment-67.png\" alt=\"\"> <span></span>\r\n    </div>\r\n</div>\r\n    \r\n    `;\r\n\r\n    if (render === 'addComment') {\r\n        element.prepend(comment);\r\n    } else if (render === 'addSubcomment') {\r\n        element.querySelector('.comments__statistic').after(comment)\r\n\r\n    } else { element.append(comment) }\r\n\r\n    if (item.has_child) {\r\n        item.reply.forEach(child => {\r\n            renderComment(child, comment)\r\n\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./modules/renderComment.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _renderComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderComment */ \"./modules/renderComment.js\");\n\r\n\r\n\r\nconst sendForm = (formClass) => {\r\n\r\n    const forms = document.querySelectorAll(formClass)\r\n\r\n    forms.forEach((form) => {\r\n        const validate = (input) => {\r\n\r\n            let nameInput = true\r\n\r\n            if (input.matches('textarea')) {\r\n                if (input.value.length < 1) {\r\n                    nameInput = false\r\n                }\r\n            }\r\n            return nameInput\r\n        }\r\n\r\n        const sendData = (data) => {\r\n            return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n                method: 'POST',\r\n                body: JSON.stringify(data),\r\n                headers: {\r\n                    \"Content-Type\": \"aplication/json\"\r\n                }\r\n            }).then(res => res.json())\r\n        }\r\n\r\n        const submitData = () => {\r\n            const formElements = form.querySelector('textarea')\r\n            const formBody = {}\r\n\r\n            formBody.message = formElements.value\r\n            formBody.author = 'Artem'\r\n\r\n\r\n\r\n\r\n            if (validate(formElements)) {\r\n                sendData(formBody)\r\n                    .then(data => {\r\n\r\n\r\n                        console.log(data);\r\n\r\n                        formElements.value = ''\r\n\r\n                        formBody.id = data.id\r\n\r\n                        console.log(formBody);\r\n                        if (form.closest('.article')) {\r\n                            (0,_renderComment__WEBPACK_IMPORTED_MODULE_0__.renderComment)(formBody, document.querySelector('.comments'), 'addComment')\r\n                        } else if (form.closest('.comments')) {\r\n                            (0,_renderComment__WEBPACK_IMPORTED_MODULE_0__.renderComment)(formBody, form.closest('.comments__item'), 'addSubcomment')\r\n                        }\r\n\r\n                        form.classList.remove('new-comment-active')\r\n\r\n                    })\r\n                    .catch(error => {\r\n                        console.log(error);\r\n\r\n                    })\r\n            } else {\r\n                console.log('данные не валидны');\r\n            }\r\n        }\r\n\r\n        try {\r\n            if (!form) {\r\n                throw new Error('верните форму')\r\n            }\r\n\r\n            form.addEventListener('submit', (e) => {\r\n                e.preventDefault();\r\n                submitData()\r\n            })\r\n        } catch (error) {\r\n            console.log(error.message);\r\n        }\r\n\r\n    })\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

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