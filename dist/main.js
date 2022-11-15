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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/circle.js */ \"./src/scripts/circle.js\");\n\n\n\n// inhale()\n// hold()\n(0,_scripts_circle_js__WEBPACK_IMPORTED_MODULE_1__.exhale)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBRWtEO0FBQ087O0FBRXpEO0FBQ0E7QUFDQUcsMERBQU0sRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWF0aC1maXJzdC1zZWFyY2gvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgY2xlYXJDYW52YXMgfSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhcy5qc1wiO1xuaW1wb3J0IHsgaW5oYWxlLCBob2xkLCBleGhhbGV9IGZyb20gXCIuL3NjcmlwdHMvY2lyY2xlLmpzXCJcblxuLy8gaW5oYWxlKClcbi8vIGhvbGQoKVxuZXhoYWxlKClcblxuXG5cbiJdLCJuYW1lcyI6WyJjbGVhckNhbnZhcyIsImluaGFsZSIsImhvbGQiLCJleGhhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exhale\": function() { return /* binding */ exhale; },\n/* harmony export */   \"hold\": function() { return /* binding */ hold; },\n/* harmony export */   \"inhale\": function() { return /* binding */ inhale; }\n/* harmony export */ });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/scripts/canvas.js\");\n\nconst circle = {\n  x: 300,\n  y: 300,\n  radius: 80,\n  dr: 1\n  // change in radius\n};\n\nfunction drawCircle() {\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke();\n}\nfunction inhale() {\n  function draw() {\n    // ctx.clearRect(0, 0, canvas.width, canvas.height);\n    (0,_canvas_js__WEBPACK_IMPORTED_MODULE_0__.clearCanvas)();\n    drawCircle();\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.font = '20px serif';\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = 'center';\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText('INHALE', 300, 300);\n\n    // change size\n    circle.radius += circle.dr;\n    if (circle.radius >= 280) {\n      circle.radius = 80;\n    }\n  }\n  setInterval(draw, 40);\n}\nfunction hold() {\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.clearRect(0, 0, canvas.width, canvas.height);\n  circle.radius = 280;\n  drawCircle();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.font = '20px serif';\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = 'center';\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText('HOLD', 300, 300);\n}\nfunction exhale() {\n  function draw() {\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawCircle();\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.font = '20px serif';\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = 'center';\n    _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText('EXHALE', 300, 300);\n\n    // change size\n    circle.radius = circle.radius - circle.dr;\n    if (circle.radius <= 80) {\n      circle.radius = 280;\n    }\n  }\n  setInterval(draw, 40);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaXJjbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QztBQUc3QyxNQUFNRSxNQUFNLEdBQUc7RUFDWEMsQ0FBQyxFQUFFLEdBQUc7RUFDTkMsQ0FBQyxFQUFFLEdBQUc7RUFDTkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsRUFBRSxFQUFFO0VBQ0o7QUFDSixDQUFDOztBQUVELFNBQVNDLFVBQVUsR0FBRTtFQUNqQk4scURBQWEsRUFBRTtFQUNmQSwrQ0FBTyxDQUFDQyxNQUFNLENBQUNDLENBQUMsRUFBQ0QsTUFBTSxDQUFDRSxDQUFDLEVBQUNGLE1BQU0sQ0FBQ0csTUFBTSxFQUFDLENBQUMsRUFBQ0ssSUFBSSxDQUFDQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0VBQ3BEVixrREFBVSxFQUFFO0FBQ2hCO0FBRU8sU0FBU1ksTUFBTSxHQUFHO0VBRXJCLFNBQVNDLElBQUksR0FBRTtJQUVYO0lBQ0FkLHVEQUFXLEVBQUU7SUFDYk8sVUFBVSxFQUFFO0lBRVpOLGdEQUFRLEdBQUcsWUFBWTtJQUN2QkEscURBQWEsR0FBRyxRQUFRO0lBQ3hCQSxvREFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztJQUVoQztJQUNBQyxNQUFNLENBQUNHLE1BQU0sSUFBSUgsTUFBTSxDQUFDSSxFQUFFO0lBRTFCLElBQUlKLE1BQU0sQ0FBQ0csTUFBTSxJQUFJLEdBQUcsRUFBRTtNQUMxQkgsTUFBTSxDQUFDRyxNQUFNLEdBQUcsRUFBRTtJQUNsQjtFQUNKO0VBRUFhLFdBQVcsQ0FBQ0osSUFBSSxFQUFDLEVBQUUsQ0FBQztBQUN4QjtBQUVPLFNBQVNLLElBQUksR0FBRTtFQUNsQmxCLHFEQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW9CLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFRCxNQUFNLENBQUNFLE1BQU0sQ0FBQztFQUNoRHJCLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLEdBQUc7RUFDbkJFLFVBQVUsRUFBRTtFQUVaTixnREFBUSxHQUFHLFlBQVk7RUFDdkJBLHFEQUFhLEdBQUcsUUFBUTtFQUN4QkEsb0RBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUVsQztBQUVPLFNBQVN1QixNQUFNLEdBQUU7RUFDcEIsU0FBU1YsSUFBSSxHQUFFO0lBRVhiLHFEQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW9CLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFRCxNQUFNLENBQUNFLE1BQU0sQ0FBQztJQUVoRGhCLFVBQVUsRUFBRTtJQUVaTixnREFBUSxHQUFHLFlBQVk7SUFDdkJBLHFEQUFhLEdBQUcsUUFBUTtJQUN4QkEsb0RBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7SUFFaEM7SUFDQUMsTUFBTSxDQUFDRyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0csTUFBTSxHQUFHSCxNQUFNLENBQUNJLEVBQUU7SUFFekMsSUFBSUosTUFBTSxDQUFDRyxNQUFNLElBQUksRUFBRSxFQUFFO01BQ3JCSCxNQUFNLENBQUNHLE1BQU0sR0FBRyxHQUFHO0lBQ3ZCO0VBQ0o7RUFDQWEsV0FBVyxDQUFDSixJQUFJLEVBQUMsRUFBRSxDQUFDO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJlYXRoLWZpcnN0LXNlYXJjaC8uL3NyYy9zY3JpcHRzL2NpcmNsZS5qcz9jNDc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2xlYXJDYW52YXMsIGN0eH0gZnJvbSBcIi4vY2FudmFzLmpzXCI7XG5cblxuY29uc3QgY2lyY2xlID0ge1xuICAgIHg6IDMwMCxcbiAgICB5OiAzMDAsXG4gICAgcmFkaXVzOiA4MCxcbiAgICBkcjogMVxuICAgIC8vIGNoYW5nZSBpbiByYWRpdXNcbn1cbiAgICBcbmZ1bmN0aW9uIGRyYXdDaXJjbGUoKXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjaXJjbGUueCxjaXJjbGUueSxjaXJjbGUucmFkaXVzLDAsTWF0aC5QSSoyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmhhbGUoKSB7XG5cbiAgICBmdW5jdGlvbiBkcmF3KCl7XG5cbiAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjbGVhckNhbnZhcygpO1xuICAgICAgICBkcmF3Q2lyY2xlKCk7XG5cbiAgICAgICAgY3R4LmZvbnQgPSAnMjBweCBzZXJpZic7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KCdJTkhBTEUnLCAzMDAsIDMwMCk7XG5cbiAgICAgICAgLy8gY2hhbmdlIHNpemVcbiAgICAgICAgY2lyY2xlLnJhZGl1cyArPSBjaXJjbGUuZHJcblxuICAgICAgICBpZiAoY2lyY2xlLnJhZGl1cyA+PSAyODApIHtcbiAgICAgICAgY2lyY2xlLnJhZGl1cyA9IDgwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldEludGVydmFsKGRyYXcsNDApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob2xkKCl7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGNpcmNsZS5yYWRpdXMgPSAyODBcbiAgICBkcmF3Q2lyY2xlKCk7XG4gICAgXG4gICAgY3R4LmZvbnQgPSAnMjBweCBzZXJpZic7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInXG4gICAgY3R4LmZpbGxUZXh0KCdIT0xEJywgMzAwLCAzMDApO1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhoYWxlKCl7XG4gICAgZnVuY3Rpb24gZHJhdygpe1xuICAgIFxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgZHJhd0NpcmNsZSgpO1xuXG4gICAgICAgIGN0eC5mb250ID0gJzIwcHggc2VyaWYnO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIGN0eC5maWxsVGV4dCgnRVhIQUxFJywgMzAwLCAzMDApO1xuXG4gICAgICAgIC8vIGNoYW5nZSBzaXplXG4gICAgICAgIGNpcmNsZS5yYWRpdXMgPSBjaXJjbGUucmFkaXVzIC0gY2lyY2xlLmRyXG5cbiAgICAgICAgaWYgKGNpcmNsZS5yYWRpdXMgPD0gODApIHtcbiAgICAgICAgICAgIGNpcmNsZS5yYWRpdXMgPSAyODA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SW50ZXJ2YWwoZHJhdyw0MClcbn0iXSwibmFtZXMiOlsiY2xlYXJDYW52YXMiLCJjdHgiLCJjaXJjbGUiLCJ4IiwieSIsInJhZGl1cyIsImRyIiwiZHJhd0NpcmNsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZSIsImluaGFsZSIsImRyYXciLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzZXRJbnRlcnZhbCIsImhvbGQiLCJjbGVhclJlY3QiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImV4aGFsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/circle.js\n");

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