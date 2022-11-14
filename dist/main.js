/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas */ \"./src/scripts/canvas.js\");\n\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nconst circle = {\n  x: 300,\n  y: 300,\n  radius: 20,\n  dr: 5\n  // change in radius\n};\n\nfunction drawCircle() {\n  ctx.beginPath();\n  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);\n  ctx.stroke();\n}\nfunction update() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  console.log(circle.radius);\n  drawCircle();\n\n  // change size\n  circle.radius += circle.dr;\n  if (circle.radius >= 280) {\n    circle.dr *= -1;\n  }\n  if (circle.radius <= 20) {\n    circle.dr *= -1;\n  }\n}\nsetInterval(update, 100);\n\n// update();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBc0M7QUFJdEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDaEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsTUFBTUMsTUFBTSxHQUFHO0VBQ1hDLENBQUMsRUFBRSxHQUFHO0VBQ05DLENBQUMsRUFBRSxHQUFHO0VBQ05DLE1BQU0sRUFBRSxFQUFFO0VBQ1ZDLEVBQUUsRUFBRTtFQUNKO0FBQ0osQ0FBQzs7QUFFRCxTQUFTQyxVQUFVLEdBQUU7RUFDakJQLEdBQUcsQ0FBQ1EsU0FBUyxFQUFFO0VBQ2ZSLEdBQUcsQ0FBQ1MsR0FBRyxDQUFDUCxNQUFNLENBQUNDLENBQUMsRUFBQ0QsTUFBTSxDQUFDRSxDQUFDLEVBQUNGLE1BQU0sQ0FBQ0csTUFBTSxFQUFDLENBQUMsRUFBQ0ssSUFBSSxDQUFDQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0VBQ3BEWCxHQUFHLENBQUNZLE1BQU0sRUFBRTtBQUNoQjtBQUdBLFNBQVNDLE1BQU0sR0FBRztFQUVoQmIsR0FBRyxDQUFDYyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWpCLE1BQU0sQ0FBQ2tCLEtBQUssRUFBRWxCLE1BQU0sQ0FBQ21CLE1BQU0sQ0FBQztFQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixNQUFNLENBQUNHLE1BQU0sQ0FBQztFQUN4QkUsVUFBVSxFQUFFOztFQUdaO0VBQ0FMLE1BQU0sQ0FBQ0csTUFBTSxJQUFJSCxNQUFNLENBQUNJLEVBQUU7RUFJMUIsSUFBSUosTUFBTSxDQUFDRyxNQUFNLElBQUksR0FBRyxFQUFFO0lBQ3hCSCxNQUFNLENBQUNJLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDakI7RUFFQSxJQUFJSixNQUFNLENBQUNHLE1BQU0sSUFBSSxFQUFFLEVBQUU7SUFDdkJILE1BQU0sQ0FBQ0ksRUFBRSxJQUFJLENBQUMsQ0FBQztFQUVqQjtBQUVGO0FBQ0FhLFdBQVcsQ0FBQ04sTUFBTSxFQUFDLEdBQUcsQ0FBQzs7QUFFdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuXG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCBjaXJjbGUgPSB7XG4gICAgeDogMzAwLFxuICAgIHk6IDMwMCxcbiAgICByYWRpdXM6IDIwLFxuICAgIGRyOiA1IFxuICAgIC8vIGNoYW5nZSBpbiByYWRpdXNcbn1cbiAgICBcbmZ1bmN0aW9uIGRyYXdDaXJjbGUoKXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjaXJjbGUueCxjaXJjbGUueSxjaXJjbGUucmFkaXVzLDAsTWF0aC5QSSoyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbmNvbnNvbGUubG9nKGNpcmNsZS5yYWRpdXMpXG4gIGRyYXdDaXJjbGUoKTtcbiAgXG5cbiAgLy8gY2hhbmdlIHNpemVcbiAgY2lyY2xlLnJhZGl1cyArPSBjaXJjbGUuZHJcbiBcblxuICBcbiAgaWYgKGNpcmNsZS5yYWRpdXMgPj0gMjgwKSB7XG4gICAgY2lyY2xlLmRyICo9IC0xO1xuICB9XG5cbiAgaWYgKGNpcmNsZS5yYWRpdXMgPD0gMjApIHtcbiAgICBjaXJjbGUuZHIgKj0gLTE7XG4gICBcbiAgfVxuXG59XG5zZXRJbnRlcnZhbCh1cGRhdGUsMTAwKTtcblxuLy8gdXBkYXRlKCk7XG4iXSwibmFtZXMiOlsiQ2FudmFzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJjaXJjbGUiLCJ4IiwieSIsInJhZGl1cyIsImRyIiwiZHJhd0NpcmNsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZSIsInVwZGF0ZSIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInNldEludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Canvas {\n  constructor() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJtYXBwaW5ncyI6IjtBQUVBLE1BQU1BLE1BQU0sQ0FBQztFQUNYQyxXQUFXLEdBQUcsQ0FFZDtBQUlGO0FBRUEsK0RBQWVELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzPzdiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7XG5cblxuXG4gICJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;