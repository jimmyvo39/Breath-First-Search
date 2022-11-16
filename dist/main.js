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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/circle.js */ \"./src/scripts/circle.js\");\n/* harmony import */ var _scripts_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/helper.js */ \"./src/scripts/helper.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFrRDtBQUNRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJlYXRoLWZpcnN0LXNlYXJjaC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsZWFyQ2FudmFzIH0gZnJvbSBcIi4vc2NyaXB0cy9jYW52YXMuanNcIjtcbmltcG9ydCB7IGluaGFsZSwgaG9sZCwgZXhoYWxlfSBmcm9tIFwiLi9zY3JpcHRzL2NpcmNsZS5qc1wiO1xuaW1wb3J0IHsgcm90YXRlIH0gZnJvbSBcIi4vc2NyaXB0cy9oZWxwZXIuanNcIjtcblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJjbGVhckNhbnZhcyIsImluaGFsZSIsImhvbGQiLCJleGhhbGUiLCJyb3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": function() { return /* binding */ canvas; },\n/* harmony export */   \"clearCanvas\": function() { return /* binding */ clearCanvas; },\n/* harmony export */   \"ctx\": function() { return /* binding */ ctx; }\n/* harmony export */ });\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nfunction clearCanvas() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDaEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsU0FBU0MsV0FBVyxHQUFHO0VBQzFCRixHQUFHLENBQUNHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFTixNQUFNLENBQUNPLEtBQUssRUFBRVAsTUFBTSxDQUFDUSxNQUFNLENBQUM7QUFDcEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzPzdiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJDYW52YXMiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/scripts/circle.js":
/*!*******************************!*\
  !*** ./src/scripts/circle.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"breathing\": function() { return /* binding */ breathing; }\n/* harmony export */ });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _timing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timing.js */ \"./src/scripts/timing.js\");\n\n\nconst circle = {\n  x: 300,\n  y: 300,\n  radius: 80,\n  dr: 1,\n  // change in radius\n  text: \"INHALE\"\n};\nfunction drawCircle() {\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke();\n}\nfunction breathing(time) {\n  function draw() {\n    (0,_canvas_js__WEBPACK_IMPORTED_MODULE_0__.clearCanvas)();\n    drawCircle();\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.font = '20px serif';\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = 'center';\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(circle.text, 300, 300);\n\n    // change size\n    circle.radius += circle.dr;\n    if (circle.radius >= 280) {\n      circle.dr *= -1;\n      circle.text = \"EXHALE\";\n    }\n    if (circle.radius <= 80) {\n      circle.dr *= -1;\n      circle.text = \"INHALE\";\n    }\n  }\n  setInterval(draw, time / 200);\n  // divide time by # of frames in a full cycle\n}\n\nbreathing(5000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaXJjbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBQ1I7QUFFckMsTUFBTUcsTUFBTSxHQUFHO0VBQ1hDLENBQUMsRUFBRSxHQUFHO0VBQ05DLENBQUMsRUFBRSxHQUFHO0VBQ05DLE1BQU0sRUFBRSxFQUFFO0VBQ1ZDLEVBQUUsRUFBRSxDQUFDO0VBQ0w7RUFDQUMsSUFBSSxFQUFFO0FBQ1YsQ0FBQztBQUVELFNBQVNDLFVBQVUsR0FBRTtFQUNqQlIscURBQWEsRUFBRTtFQUNmQSwrQ0FBTyxDQUFDRSxNQUFNLENBQUNDLENBQUMsRUFBQ0QsTUFBTSxDQUFDRSxDQUFDLEVBQUNGLE1BQU0sQ0FBQ0csTUFBTSxFQUFDLENBQUMsRUFBQ00sSUFBSSxDQUFDQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0VBQ3BEWixrREFBVSxFQUFFO0FBQ2hCO0FBR08sU0FBU2MsU0FBUyxDQUFDQyxJQUFJLEVBQUU7RUFFNUIsU0FBU0MsSUFBSSxHQUFFO0lBR1hqQix1REFBVyxFQUFFO0lBQ2JTLFVBQVUsRUFBRTtJQUVaUixnREFBUSxHQUFHLFlBQVk7SUFDdkJBLHFEQUFhLEdBQUcsUUFBUTtJQUN4QkEsb0RBQVksQ0FBQ0UsTUFBTSxDQUFDSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7SUFFbkM7SUFDQUwsTUFBTSxDQUFDRyxNQUFNLElBQUlILE1BQU0sQ0FBQ0ksRUFBRTtJQUUxQixJQUFJSixNQUFNLENBQUNHLE1BQU0sSUFBSSxHQUFHLEVBQUU7TUFDMUJILE1BQU0sQ0FBQ0ksRUFBRSxJQUFJLENBQUMsQ0FBQztNQUNmSixNQUFNLENBQUNLLElBQUksR0FBRyxRQUFRO0lBRXRCO0lBRUEsSUFBSUwsTUFBTSxDQUFDRyxNQUFNLElBQUksRUFBRSxFQUFFO01BQ3JCSCxNQUFNLENBQUNJLEVBQUUsSUFBSSxDQUFDLENBQUM7TUFDZkosTUFBTSxDQUFDSyxJQUFJLEdBQUcsUUFBUTtJQUMxQjtFQUdKO0VBRUFhLFdBQVcsQ0FBQ0osSUFBSSxFQUFDRCxJQUFJLEdBQUMsR0FBRyxDQUFDO0VBQzFCO0FBQ0o7O0FBRUFELFNBQVMsQ0FBQyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL3NjcmlwdHMvY2lyY2xlLmpzP2M0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjbGVhckNhbnZhcywgY3R4fSBmcm9tIFwiLi9jYW52YXMuanNcIjtcbmltcG9ydCB7IFRpbWluZyB9IGZyb20gXCIuL3RpbWluZy5qc1wiO1xuXG5jb25zdCBjaXJjbGUgPSB7XG4gICAgeDogMzAwLFxuICAgIHk6IDMwMCxcbiAgICByYWRpdXM6IDgwLFxuICAgIGRyOiAxLFxuICAgIC8vIGNoYW5nZSBpbiByYWRpdXNcbiAgICB0ZXh0OiBcIklOSEFMRVwiXG59XG4gICAgXG5mdW5jdGlvbiBkcmF3Q2lyY2xlKCl7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoY2lyY2xlLngsY2lyY2xlLnksY2lyY2xlLnJhZGl1cywwLE1hdGguUEkqMik7XG4gICAgY3R4LnN0cm9rZSgpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBicmVhdGhpbmcodGltZSkge1xuXG4gICAgZnVuY3Rpb24gZHJhdygpe1xuXG5cbiAgICAgICAgY2xlYXJDYW52YXMoKTtcbiAgICAgICAgZHJhd0NpcmNsZSgpO1xuXG4gICAgICAgIGN0eC5mb250ID0gJzIwcHggc2VyaWYnO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIGN0eC5maWxsVGV4dChjaXJjbGUudGV4dCwgMzAwLCAzMDApO1xuXG4gICAgICAgIC8vIGNoYW5nZSBzaXplXG4gICAgICAgIGNpcmNsZS5yYWRpdXMgKz0gY2lyY2xlLmRyXG5cbiAgICAgICAgaWYgKGNpcmNsZS5yYWRpdXMgPj0gMjgwKSB7XG4gICAgICAgIGNpcmNsZS5kciAqPSAtMTtcbiAgICAgICAgY2lyY2xlLnRleHQgPSBcIkVYSEFMRVwiXG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNpcmNsZS5yYWRpdXMgPD0gODApIHtcbiAgICAgICAgICAgIGNpcmNsZS5kciAqPSAtMTtcbiAgICAgICAgICAgIGNpcmNsZS50ZXh0ID0gXCJJTkhBTEVcIlxuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBcbiAgICBzZXRJbnRlcnZhbChkcmF3LHRpbWUvMjAwKVxuICAgIC8vIGRpdmlkZSB0aW1lIGJ5ICMgb2YgZnJhbWVzIGluIGEgZnVsbCBjeWNsZVxufVxuXG5icmVhdGhpbmcoNTAwMCk7XG5cblxuIl0sIm5hbWVzIjpbImNsZWFyQ2FudmFzIiwiY3R4IiwiVGltaW5nIiwiY2lyY2xlIiwieCIsInkiLCJyYWRpdXMiLCJkciIsInRleHQiLCJkcmF3Q2lyY2xlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwiYnJlYXRoaW5nIiwidGltZSIsImRyYXciLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/circle.js\n");

/***/ }),

/***/ "./src/scripts/helper.js":
/*!*******************************!*\
  !*** ./src/scripts/helper.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rotate\": function() { return /* binding */ rotate; }\n/* harmony export */ });\nfunction rotate(arr) {\n  arr.push(arr.shift());\n  return arr;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWxwZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLE1BQU0sQ0FBQ0MsR0FBRyxFQUFDO0VBQ3ZCQSxHQUFHLENBQUNDLElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxLQUFLLEVBQUUsQ0FBQztFQUNyQixPQUFPRixHQUFHO0FBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL3NjcmlwdHMvaGVscGVyLmpzPzBkMDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShhcnIpe1xuICAgIGFyci5wdXNoKGFyci5zaGlmdCgpKTtcbiAgICByZXR1cm4gYXJyO1xufSJdLCJuYW1lcyI6WyJyb3RhdGUiLCJhcnIiLCJwdXNoIiwic2hpZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/helper.js\n");

/***/ }),

/***/ "./src/scripts/timing.js":
/*!*******************************!*\
  !*** ./src/scripts/timing.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timing\": function() { return /* binding */ Timing; }\n/* harmony export */ });\nclass Timing {\n  constructor() {\n    let inhale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4000;\n    this.inhale = inhale;\n\n    // this.inhale.addEventListener(\"keydown\", this.setInhale(this))\n  }\n\n  //need 2 even listener key down to get start time. key up to get end time\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aW1pbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLE1BQU0sQ0FBQztFQUNoQkMsV0FBVyxHQUFlO0lBQUEsSUFBZEMsTUFBTSx1RUFBRyxJQUFJO0lBQ3JCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNOztJQUVwQjtFQUNKOztFQUVEO0FBRUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL3NjcmlwdHMvdGltaW5nLmpzP2JiZGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRpbWluZyB7XG4gICAgY29uc3RydWN0b3IoaW5oYWxlID0gNDAwMCl7XG4gICAgICAgIHRoaXMuaW5oYWxlID0gaW5oYWxlO1xuICAgXG4gICAgICAgIC8vIHRoaXMuaW5oYWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuc2V0SW5oYWxlKHRoaXMpKVxuICAgIH1cblxuICAgLy9uZWVkIDIgZXZlbiBsaXN0ZW5lciBrZXkgZG93biB0byBnZXQgc3RhcnQgdGltZS4ga2V5IHVwIHRvIGdldCBlbmQgdGltZVxuXG59Il0sIm5hbWVzIjpbIlRpbWluZyIsImNvbnN0cnVjdG9yIiwiaW5oYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/timing.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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