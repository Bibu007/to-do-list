/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager.js */ \"./src/taskManager.js\");\n\n\n\n\n//createTask(\"Buy Grocery\", \"None\", new Date());\n//createTask(\"Do laundry\", \"None\", new Date());\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBOEM7Ozs7QUFJOUM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanM/MjExOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza01hbmFnZXIuanNcIjtcblxuXG5cbi8vY3JlYXRlVGFzayhcIkJ1eSBHcm9jZXJ5XCIsIFwiTm9uZVwiLCBuZXcgRGF0ZSgpKTtcbi8vY3JlYXRlVGFzayhcIkRvIGxhdW5kcnlcIiwgXCJOb25lXCIsIG5ldyBEYXRlKCkpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/storageService.js"
/*!*******************************!*\
  !*** ./src/storageService.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToTasksStorage: () => (/* binding */ addToTasksStorage)\n/* harmony export */ });\nlet temp = [];\nlocalStorage.setItem(\"tasks\", JSON.stringify(temp));\n\nfunction addToTasksStorage(task){\n    let taskArray = JSON.parse(localStorage.getItem(\"tasks\"));\n    taskArray.push(task);\n    localStorage.setItem(\"tasks\", JSON.stringify(taskArray));\n    //console.log(JSON.parse(localStorage.getItem(\"tasks\")))\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmFnZVNlcnZpY2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlU2VydmljZS5qcz9hZGZhIl0sInNvdXJjZXNDb250ZW50IjpbImxldCB0ZW1wID0gW107XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRlbXApKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvVGFza3NTdG9yYWdlKHRhc2spe1xuICAgIGxldCB0YXNrQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgIHRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza0FycmF5KSk7XG4gICAgLy9jb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/storageService.js\n\n}");

/***/ },

/***/ "./src/task.js"
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    #id = null;\n    #title = null;\n    #desc = null;\n    #dueDate = null;\n    #priority = null;\n    #notes = null;\n    #status = null;\n    #project = null;\n\n    constructor(title,desc,dueDate,project=\"default\",priority,notes,status){\n        this.#id = crypto.randomUUID;\n        this.#title = title;\n        this.#desc = desc;\n        this.#dueDate = dueDate;\n        this.#priority = priority;\n        this.#notes = notes;\n        this.#status = status;\n        this.#project = project;\n    }\n\n    set id(id){\n        this.#id = id;\n    }\n\n    get title(){\n        return this.#title;\n    }\n\n    set title(title){\n        if(title === \"\" || title.trim() === \"\"){\n            console.log(\"Title cannot be empty\");\n        }\n        else{\n            this.#title = title;\n        }\n    }\n\n    get desc(){\n        return this.#desc;\n    }\n\n    set desc(desc){\n        if(desc === \"\" || desc.trim() === \"\"){\n            return;\n        }\n        else{\n            this.#desc = desc;\n        }\n    }\n\n    get dueDate(){\n        return this.#dueDate;\n    }\n\n    set dueDate(date){\n        if(date === null){\n            return;\n        }\n        else{\n            this.#dueDate = date;\n        }\n    }\n\n    get priority(){\n        return this.#desc;\n    }\n\n    set priority(desc){\n        if(desc === \"\" || desc.trim() === \"\"){\n            return;\n        }\n        else{\n            this.#desc = desc;\n        }\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcz8wYjZhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUYXNre1xuICAgICNpZCA9IG51bGw7XG4gICAgI3RpdGxlID0gbnVsbDtcbiAgICAjZGVzYyA9IG51bGw7XG4gICAgI2R1ZURhdGUgPSBudWxsO1xuICAgICNwcmlvcml0eSA9IG51bGw7XG4gICAgI25vdGVzID0gbnVsbDtcbiAgICAjc3RhdHVzID0gbnVsbDtcbiAgICAjcHJvamVjdCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjLGR1ZURhdGUscHJvamVjdD1cImRlZmF1bHRcIixwcmlvcml0eSxub3RlcyxzdGF0dXMpe1xuICAgICAgICB0aGlzLiNpZCA9IGNyeXB0by5yYW5kb21VVUlEO1xuICAgICAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLiNkZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuI25vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuI3N0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy4jcHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0IGlkKGlkKXtcbiAgICAgICAgdGhpcy4jaWQgPSBpZDtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh0aXRsZSl7XG4gICAgICAgIGlmKHRpdGxlID09PSBcIlwiIHx8IHRpdGxlLnRyaW0oKSA9PT0gXCJcIil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpdGxlIGNhbm5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkZXNjKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNkZXNjO1xuICAgIH1cblxuICAgIHNldCBkZXNjKGRlc2Mpe1xuICAgICAgICBpZihkZXNjID09PSBcIlwiIHx8IGRlc2MudHJpbSgpID09PSBcIlwiKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy4jZGVzYyA9IGRlc2M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy4jZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgZHVlRGF0ZShkYXRlKXtcbiAgICAgICAgaWYoZGF0ZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNkZXNjO1xuICAgIH1cblxuICAgIHNldCBwcmlvcml0eShkZXNjKXtcbiAgICAgICAgaWYoZGVzYyA9PT0gXCJcIiB8fCBkZXNjLnRyaW0oKSA9PT0gXCJcIil7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuI2Rlc2MgPSBkZXNjO1xuICAgICAgICB9XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/task.js\n\n}");

/***/ },

/***/ "./src/taskManager.js"
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _storageService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageService.js */ \"./src/storageService.js\");\n\n\n\nfunction createTask(title, desc, date){\n    let t = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(title,desc,date);\n    (0,_storageService_js__WEBPACK_IMPORTED_MODULE_1__.addToTasksStorage)(t);\n    \n}\n\nfunction removeTask(taskId){\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFza01hbmFnZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUN1Qjs7QUFFakQ7QUFDUCxnQkFBZ0IsMENBQUk7QUFDcEIsSUFBSSxxRUFBaUI7QUFDckI7QUFDQTs7QUFFTzs7QUFFUCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza01hbmFnZXIuanM/Yjg3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgYWRkVG9UYXNrc1N0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlU2VydmljZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzYywgZGF0ZSl7XG4gICAgbGV0IHQgPSBuZXcgVGFzayh0aXRsZSxkZXNjLGRhdGUpO1xuICAgIGFkZFRvVGFza3NTdG9yYWdlKHQpO1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrSWQpe1xuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/taskManager.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;