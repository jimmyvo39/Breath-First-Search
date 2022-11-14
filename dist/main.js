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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas */ \"./src/scripts/canvas.js\");\n\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nconst circle = {\n  x: 300,\n  y: 300,\n  radius: 10,\n  dr: 5\n  // change in radius\n};\n\nfunction drawCircle() {\n  ctx.beginPath();\n  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);\n  ctx.stroke();\n}\nfunction update() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  drawCircle();\n\n  // change size\n  circle.radius += circle.dr;\n  if (circle.radius >= 280) {\n    circle.dr *= -1;\n  }\n  if (circle.radius <= 0) {\n    circle.dr *= -1;\n  }\n  requestAnimationFrame(update);\n}\nupdate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBc0M7QUFJdEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDaEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsTUFBTUMsTUFBTSxHQUFHO0VBQ1hDLENBQUMsRUFBRSxHQUFHO0VBQ05DLENBQUMsRUFBRSxHQUFHO0VBQ05DLE1BQU0sRUFBRSxFQUFFO0VBQ1ZDLEVBQUUsRUFBRTtFQUNKO0FBQ0osQ0FBQzs7QUFFRCxTQUFTQyxVQUFVLEdBQUU7RUFDakJQLEdBQUcsQ0FBQ1EsU0FBUyxFQUFFO0VBQ2ZSLEdBQUcsQ0FBQ1MsR0FBRyxDQUFDUCxNQUFNLENBQUNDLENBQUMsRUFBQ0QsTUFBTSxDQUFDRSxDQUFDLEVBQUNGLE1BQU0sQ0FBQ0csTUFBTSxFQUFDLENBQUMsRUFBQ0ssSUFBSSxDQUFDQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0VBQ3BEWCxHQUFHLENBQUNZLE1BQU0sRUFBRTtBQUNoQjtBQUdBLFNBQVNDLE1BQU0sR0FBRztFQUNoQmIsR0FBRyxDQUFDYyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWpCLE1BQU0sQ0FBQ2tCLEtBQUssRUFBRWxCLE1BQU0sQ0FBQ21CLE1BQU0sQ0FBQztFQUVoRFQsVUFBVSxFQUFFOztFQUVaO0VBQ0FMLE1BQU0sQ0FBQ0csTUFBTSxJQUFJSCxNQUFNLENBQUNJLEVBQUU7RUFJMUIsSUFBSUosTUFBTSxDQUFDRyxNQUFNLElBQUksR0FBRyxFQUFFO0lBQ3hCSCxNQUFNLENBQUNJLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDakI7RUFFQSxJQUFJSixNQUFNLENBQUNHLE1BQU0sSUFBSSxDQUFDLEVBQUU7SUFDdEJILE1BQU0sQ0FBQ0ksRUFBRSxJQUFJLENBQUMsQ0FBQztFQUNqQjtFQUVBVyxxQkFBcUIsQ0FBQ0osTUFBTSxDQUFDO0FBQy9CO0FBRUFBLE1BQU0sRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWF0aC1maXJzdC1zZWFyY2gvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5cblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNvbnN0IGNpcmNsZSA9IHtcbiAgICB4OiAzMDAsXG4gICAgeTogMzAwLFxuICAgIHJhZGl1czogMTAsXG4gICAgZHI6IDUgXG4gICAgLy8gY2hhbmdlIGluIHJhZGl1c1xufVxuICAgIFxuZnVuY3Rpb24gZHJhd0NpcmNsZSgpe1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGNpcmNsZS54LGNpcmNsZS55LGNpcmNsZS5yYWRpdXMsMCxNYXRoLlBJKjIpO1xuICAgIGN0eC5zdHJva2UoKTtcbn1cblxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICBkcmF3Q2lyY2xlKCk7XG5cbiAgLy8gY2hhbmdlIHNpemVcbiAgY2lyY2xlLnJhZGl1cyArPSBjaXJjbGUuZHJcbiBcblxuICBcbiAgaWYgKGNpcmNsZS5yYWRpdXMgPj0gMjgwKSB7XG4gICAgY2lyY2xlLmRyICo9IC0xO1xuICB9XG5cbiAgaWYgKGNpcmNsZS5yYWRpdXMgPD0gMCkge1xuICAgIGNpcmNsZS5kciAqPSAtMTtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xufVxuXG51cGRhdGUoKTtcbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNpcmNsZSIsIngiLCJ5IiwicmFkaXVzIiwiZHIiLCJkcmF3Q2lyY2xlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwidXBkYXRlIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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