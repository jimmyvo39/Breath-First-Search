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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/circle.js */ \"./src/scripts/circle.js\");\n/* harmony import */ var _scripts_timing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/timing.js */ \"./src/scripts/timing.js\");\n\n\nconst button = document.getElementById(\"hold\");\nlet time = new _scripts_timing_js__WEBPACK_IMPORTED_MODULE_1__.Timing(button);\n//default time is 2800ms\n\n(0,_scripts_circle_js__WEBPACK_IMPORTED_MODULE_0__.breathing)(time.inhale);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQytDO0FBQ0o7QUFFM0MsTUFBTUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFFOUMsSUFBSUMsSUFBSSxHQUFHLElBQUlKLHNEQUFNLENBQUNDLE1BQU0sQ0FBQztBQUM3Qjs7QUFHQUYsNkRBQVMsQ0FBQ0ssSUFBSSxDQUFDQyxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBicmVhdGhpbmd9IGZyb20gXCIuL3NjcmlwdHMvY2lyY2xlLmpzXCI7XG5pbXBvcnQge1RpbWluZ30gZnJvbSBcIi4vc2NyaXB0cy90aW1pbmcuanNcIjtcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob2xkXCIpO1xuXG5sZXQgdGltZSA9IG5ldyBUaW1pbmcoYnV0dG9uKTtcbi8vZGVmYXVsdCB0aW1lIGlzIDI4MDBtc1xuXG5cbmJyZWF0aGluZyh0aW1lLmluaGFsZSlcblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiYnJlYXRoaW5nIiwiVGltaW5nIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRpbWUiLCJpbmhhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"breathing\": function() { return /* binding */ breathing; }\n/* harmony export */ });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _timing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timing.js */ \"./src/scripts/timing.js\");\n\n\nconst circle = {\n  x: 300,\n  y: 300,\n  radius: 80,\n  dr: 1,\n  // change in radius\n  text: \"INHALE\"\n};\nfunction drawCircle() {\n  // ctx.globalAlpha = 0.9\n\n  const gradient = _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.createRadialGradient(circle.x, circle.y, 20, circle.x, circle.y, 250);\n  gradient.addColorStop(0, \"black\");\n  gradient.addColorStop(0.25, \"aqua\");\n  gradient.addColorStop(0.5, \"white\");\n  gradient.addColorStop(1, \"navy\");\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);\n  // ctx.stroke();\n\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = gradient;\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.font = '20px serif';\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = 'center';\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(circle.text, 300, 600);\n}\nfunction breathing(time) {\n  function draw() {\n    (0,_canvas_js__WEBPACK_IMPORTED_MODULE_0__.clearCanvas)();\n    drawCircle();\n    circle.radius += circle.dr;\n    // change size\n\n    if (circle.radius >= 280) {\n      //change radius direction and text\n      circle.dr *= -1;\n      circle.text = \"EXHALE\";\n    }\n    if (circle.radius <= 80) {\n      //change radius direction and text\n      circle.dr *= -1;\n      circle.text = \"INHALE\";\n    }\n  }\n  setInterval(draw, time / 200);\n  // divide time by # of frames in a full cycle\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaXJjbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBQ1I7QUFFckMsTUFBTUcsTUFBTSxHQUFHO0VBQ1hDLENBQUMsRUFBRSxHQUFHO0VBQ05DLENBQUMsRUFBRSxHQUFHO0VBQ05DLE1BQU0sRUFBRSxFQUFFO0VBQ1ZDLEVBQUUsRUFBRSxDQUFDO0VBQ0w7RUFDQUMsSUFBSSxFQUFFO0FBQ1YsQ0FBQztBQUdELFNBQVNDLFVBQVUsR0FBRTtFQUNqQjs7RUFFQSxNQUFNQyxRQUFRLEdBQUdULGdFQUF3QixDQUFDRSxNQUFNLENBQUNDLENBQUMsRUFBQ0QsTUFBTSxDQUFDRSxDQUFDLEVBQUMsRUFBRSxFQUFDRixNQUFNLENBQUNDLENBQUMsRUFBQ0QsTUFBTSxDQUFDRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ3RGSyxRQUFRLENBQUNFLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDO0VBQ2pDRixRQUFRLENBQUNFLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0VBQ25DRixRQUFRLENBQUNFLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO0VBQ25DRixRQUFRLENBQUNFLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0VBRWhDWCxxREFBYSxFQUFFO0VBQ2ZBLCtDQUFPLENBQUNFLE1BQU0sQ0FBQ0MsQ0FBQyxFQUFDRCxNQUFNLENBQUNFLENBQUMsRUFBQ0YsTUFBTSxDQUFDRyxNQUFNLEVBQUMsQ0FBQyxFQUFDUyxJQUFJLENBQUNDLEVBQUUsR0FBQyxDQUFDLENBQUM7RUFDcEQ7O0VBRUFmLHFEQUFhLEdBQUdTLFFBQVE7RUFDeEJULGdEQUFRLEVBQUU7RUFFVkEsZ0RBQVEsR0FBRyxZQUFZO0VBQ3ZCQSxxREFBYSxHQUFHLFFBQVE7RUFDeEJBLG9EQUFZLENBQUNFLE1BQU0sQ0FBQ0ssSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDdkM7QUFHTyxTQUFTYyxTQUFTLENBQUNDLElBQUksRUFBRTtFQUM1QixTQUFTQyxJQUFJLEdBQUU7SUFDWHhCLHVEQUFXLEVBQUU7SUFDYlMsVUFBVSxFQUFFO0lBRVpOLE1BQU0sQ0FBQ0csTUFBTSxJQUFJSCxNQUFNLENBQUNJLEVBQUU7SUFDMUI7O0lBRUEsSUFBSUosTUFBTSxDQUFDRyxNQUFNLElBQUksR0FBRyxFQUFFO01BQ3RCO01BQ0FILE1BQU0sQ0FBQ0ksRUFBRSxJQUFJLENBQUMsQ0FBQztNQUNmSixNQUFNLENBQUNLLElBQUksR0FBRyxRQUFRO0lBQzFCO0lBRUEsSUFBSUwsTUFBTSxDQUFDRyxNQUFNLElBQUksRUFBRSxFQUFFO01BQ3JCO01BQ0FILE1BQU0sQ0FBQ0ksRUFBRSxJQUFJLENBQUMsQ0FBQztNQUNmSixNQUFNLENBQUNLLElBQUksR0FBRyxRQUFRO0lBQzFCO0VBQ0o7RUFFQWlCLFdBQVcsQ0FBQ0QsSUFBSSxFQUFDRCxJQUFJLEdBQUMsR0FBRyxDQUFDO0VBQzFCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL3NjcmlwdHMvY2lyY2xlLmpzP2M0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjbGVhckNhbnZhcywgY3R4fSBmcm9tIFwiLi9jYW52YXMuanNcIjtcbmltcG9ydCB7IFRpbWluZyB9IGZyb20gXCIuL3RpbWluZy5qc1wiO1xuXG5jb25zdCBjaXJjbGUgPSB7XG4gICAgeDogMzAwLFxuICAgIHk6IDMwMCxcbiAgICByYWRpdXM6IDgwLFxuICAgIGRyOiAxLFxuICAgIC8vIGNoYW5nZSBpbiByYWRpdXNcbiAgICB0ZXh0OiBcIklOSEFMRVwiXG59XG5cbiAgICBcbmZ1bmN0aW9uIGRyYXdDaXJjbGUoKXtcbiAgICAvLyBjdHguZ2xvYmFsQWxwaGEgPSAwLjlcbiAgICBcbiAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjaXJjbGUueCxjaXJjbGUueSwyMCxjaXJjbGUueCxjaXJjbGUueSwgMjUwKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBcImJsYWNrXCIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjI1LCBcImFxdWFcIik7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNSwgXCJ3aGl0ZVwiKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgXCJuYXZ5XCIpO1xuICAgIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGNpcmNsZS54LGNpcmNsZS55LGNpcmNsZS5yYWRpdXMsMCxNYXRoLlBJKjIpO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgY3R4LmZpbGwoKVxuICAgIFxuICAgIGN0eC5mb250ID0gJzIwcHggc2VyaWYnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBjdHguZmlsbFRleHQoY2lyY2xlLnRleHQsIDMwMCwgNjAwKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYnJlYXRoaW5nKHRpbWUpIHtcbiAgICBmdW5jdGlvbiBkcmF3KCl7XG4gICAgICAgIGNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGRyYXdDaXJjbGUoKTtcblxuICAgICAgICBjaXJjbGUucmFkaXVzICs9IGNpcmNsZS5kcjtcbiAgICAgICAgLy8gY2hhbmdlIHNpemVcblxuICAgICAgICBpZiAoY2lyY2xlLnJhZGl1cyA+PSAyODApIHtcbiAgICAgICAgICAgIC8vY2hhbmdlIHJhZGl1cyBkaXJlY3Rpb24gYW5kIHRleHRcbiAgICAgICAgICAgIGNpcmNsZS5kciAqPSAtMTtcbiAgICAgICAgICAgIGNpcmNsZS50ZXh0ID0gXCJFWEhBTEVcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNpcmNsZS5yYWRpdXMgPD0gODApIHtcbiAgICAgICAgICAgIC8vY2hhbmdlIHJhZGl1cyBkaXJlY3Rpb24gYW5kIHRleHRcbiAgICAgICAgICAgIGNpcmNsZS5kciAqPSAtMTtcbiAgICAgICAgICAgIGNpcmNsZS50ZXh0ID0gXCJJTkhBTEVcIlxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldEludGVydmFsKGRyYXcsdGltZS8yMDApXG4gICAgLy8gZGl2aWRlIHRpbWUgYnkgIyBvZiBmcmFtZXMgaW4gYSBmdWxsIGN5Y2xlXG59XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJjbGVhckNhbnZhcyIsImN0eCIsIlRpbWluZyIsImNpcmNsZSIsIngiLCJ5IiwicmFkaXVzIiwiZHIiLCJ0ZXh0IiwiZHJhd0NpcmNsZSIsImdyYWRpZW50IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiYnJlYXRoaW5nIiwidGltZSIsImRyYXciLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/circle.js\n");

/***/ }),

/***/ "./src/scripts/timing.js":
/*!*******************************!*\
  !*** ./src/scripts/timing.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timing\": function() { return /* binding */ Timing; }\n/* harmony export */ });\nclass Timing {\n  constructor(button) {\n    this.button = button;\n    this.inhale = 2800;\n    this.start = 0;\n    this.end = 0;\n    this.duration = 0;\n    this.button.addEventListener(\"mousedown\", this.onmousedown.bind(this));\n    this.button.addEventListener(\"mouseup\", this.onmouseup.bind(this));\n  }\n  onmousedown() {\n    this.start = Date.now();\n  }\n  onmouseup() {\n    this.end = Date.now();\n    this.duration = this.end - this.start;\n    console.log(\"start: \", this.start);\n    console.log(\"end: \", this.end);\n    console.log(\"duration: \", this.duration);\n    this.inhale = this.duration;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aW1pbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLE1BQU0sQ0FBQztFQUNoQkMsV0FBVyxDQUFDQyxNQUFNLEVBQUM7SUFDZixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNDLEdBQUcsR0FBRyxDQUFDO0lBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQztJQUVqQixJQUFJLENBQUNKLE1BQU0sQ0FBQ0ssZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsSUFBSSxDQUFDUCxNQUFNLENBQUNLLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNHLFNBQVMsQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3RFO0VBRURELFdBQVcsR0FBRztJQUNiLElBQUksQ0FBQ0osS0FBSyxHQUFHTyxJQUFJLENBQUNDLEdBQUcsRUFBRTtFQUN2QjtFQUVBRixTQUFTLEdBQUc7SUFDUixJQUFJLENBQUNMLEdBQUcsR0FBR00sSUFBSSxDQUFDQyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDTixRQUFRLEdBQUcsSUFBSSxDQUFDRCxHQUFHLEdBQUcsSUFBSSxDQUFDRCxLQUFLO0lBRXJDUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDVixLQUFLLENBQUM7SUFDakNTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUNULEdBQUcsQ0FBQztJQUM3QlEsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ1IsUUFBUSxDQUFFO0lBRXpDLElBQUksQ0FBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQ0csUUFBUTtFQUUvQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJlYXRoLWZpcnN0LXNlYXJjaC8uL3NyYy9zY3JpcHRzL3RpbWluZy5qcz9iYmRkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUaW1pbmcge1xuICAgIGNvbnN0cnVjdG9yKGJ1dHRvbil7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gYnV0dG9uO1xuICAgICAgICB0aGlzLmluaGFsZSA9IDI4MDA7XG4gICAgICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgICAgICB0aGlzLmVuZCA9IDA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgXG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vbm1vdXNlZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vbm1vdXNldXAuYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgIG9ubW91c2Vkb3duKCkge1xuICAgIHRoaXMuc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH07XG5cbiAgICBvbm1vdXNldXAoKSB7XG4gICAgICAgIHRoaXMuZW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMuZW5kIC0gdGhpcy5zdGFydDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0OiBcIix0aGlzLnN0YXJ0KVxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZDogXCIsdGhpcy5lbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHVyYXRpb246IFwiLCh0aGlzLmR1cmF0aW9uKSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5oYWxlID0gdGhpcy5kdXJhdGlvblxuICAgICAgICBcbiAgICB9O1xufVxuXG5cbiAgIl0sIm5hbWVzIjpbIlRpbWluZyIsImNvbnN0cnVjdG9yIiwiYnV0dG9uIiwiaW5oYWxlIiwic3RhcnQiLCJlbmQiLCJkdXJhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbm1vdXNlZG93biIsImJpbmQiLCJvbm1vdXNldXAiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/timing.js\n");

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