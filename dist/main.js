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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/circle.js */ \"./src/scripts/circle.js\");\n/* harmony import */ var _scripts_timing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/timing.js */ \"./src/scripts/timing.js\");\n\n\n\n// window.onSpotifyIframeApiReady = (IFrameAPI) => {\n//     let element = document.getElementById('embed-iframe');\n//     let options = {\n//         uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'\n//       };\n//     let callback = (EmbedController) => {};\n//     IFrameAPI.createController(element, options, callback);\n//   };\n\nlet time = new _scripts_timing_js__WEBPACK_IMPORTED_MODULE_1__.Timing();\n//default time is 3000ms\n\n(0,_scripts_circle_js__WEBPACK_IMPORTED_MODULE_0__.breathing)(time.inhale);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQytDO0FBQ0Y7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBSUUsSUFBSSxHQUFHLElBQUlELHNEQUFNO0FBQ3JCOztBQUVBRCw2REFBUyxDQUFDRSxJQUFJLENBQUNDLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWF0aC1maXJzdC1zZWFyY2gvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGJyZWF0aGluZ30gZnJvbSBcIi4vc2NyaXB0cy9jaXJjbGUuanNcIjtcbmltcG9ydCB7IFRpbWluZyB9IGZyb20gXCIuL3NjcmlwdHMvdGltaW5nLmpzXCI7XG5cbi8vIHdpbmRvdy5vblNwb3RpZnlJZnJhbWVBcGlSZWFkeSA9IChJRnJhbWVBUEkpID0+IHtcbi8vICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWJlZC1pZnJhbWUnKTtcbi8vICAgICBsZXQgb3B0aW9ucyA9IHtcbi8vICAgICAgICAgdXJpOiAnc3BvdGlmeTplcGlzb2RlOjdtYWtrNG9UUWVsNTQ2QjBQWmxETTUnXG4vLyAgICAgICB9O1xuLy8gICAgIGxldCBjYWxsYmFjayA9IChFbWJlZENvbnRyb2xsZXIpID0+IHt9O1xuLy8gICAgIElGcmFtZUFQSS5jcmVhdGVDb250cm9sbGVyKGVsZW1lbnQsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbi8vICAgfTtcbiAgXG5cblxuXG5cblxubGV0IHRpbWUgPSBuZXcgVGltaW5nO1xuLy9kZWZhdWx0IHRpbWUgaXMgMzAwMG1zXG5cbmJyZWF0aGluZyh0aW1lLmluaGFsZSlcblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJicmVhdGhpbmciLCJUaW1pbmciLCJ0aW1lIiwiaW5oYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"breathing\": function() { return /* binding */ breathing; }\n/* harmony export */ });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _timing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timing.js */ \"./src/scripts/timing.js\");\n\n\nconst circle = {\n  x: 300,\n  y: 300,\n  radius: 80,\n  dr: 1,\n  // change in radius\n  text: \"INHALE\"\n};\nfunction drawCircle() {\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.globalAlpha = 0.9;\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.font = '20px serif';\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = 'center';\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(circle.text, 300, 590);\n  const gradient = _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.createRadialGradient(circle.x, circle.y, 20, circle.x, circle.y, 250);\n  gradient.addColorStop(0, \"black\");\n  gradient.addColorStop(0.25, \"aqua\");\n  gradient.addColorStop(0.5, \"white\");\n  gradient.addColorStop(1, \"navy\");\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);\n  // ctx.stroke();\n\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = gradient;\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();\n}\nfunction breathing(time) {\n  function draw() {\n    (0,_canvas_js__WEBPACK_IMPORTED_MODULE_0__.clearCanvas)();\n    drawCircle();\n    circle.radius += circle.dr;\n    // change size\n\n    if (circle.radius >= 280) {\n      //change radius direction and text\n      circle.dr *= -1;\n      circle.text = \"EXHALE\";\n    }\n    if (circle.radius <= 80) {\n      //change radius direction and text\n      circle.dr *= -1;\n      circle.text = \"INHALE\";\n    }\n  }\n  setInterval(draw, time / 200);\n  // divide time by # of frames in a full cycle\n}\n\n// breathing(4000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaXJjbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBQ1I7QUFFckMsTUFBTUcsTUFBTSxHQUFHO0VBQ1hDLENBQUMsRUFBRSxHQUFHO0VBQ05DLENBQUMsRUFBRSxHQUFHO0VBQ05DLE1BQU0sRUFBRSxFQUFFO0VBQ1ZDLEVBQUUsRUFBRSxDQUFDO0VBQ0w7RUFDQUMsSUFBSSxFQUFFO0FBQ1YsQ0FBQztBQUdELFNBQVNDLFVBQVUsR0FBRTtFQUNqQlIsdURBQWUsR0FBRyxHQUFHO0VBQ3JCQSxnREFBUSxHQUFHLFlBQVk7RUFDdkJBLHFEQUFhLEdBQUcsUUFBUTtFQUN4QkEsb0RBQVksQ0FBQ0UsTUFBTSxDQUFDSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUVuQyxNQUFNTSxRQUFRLEdBQUdiLGdFQUF3QixDQUFDRSxNQUFNLENBQUNDLENBQUMsRUFBQ0QsTUFBTSxDQUFDRSxDQUFDLEVBQUMsRUFBRSxFQUFDRixNQUFNLENBQUNDLENBQUMsRUFBQ0QsTUFBTSxDQUFDRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ3RGUyxRQUFRLENBQUNFLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDO0VBQ2pDRixRQUFRLENBQUNFLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0VBQ25DRixRQUFRLENBQUNFLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO0VBQ25DRixRQUFRLENBQUNFLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0VBRWhDZixxREFBYSxFQUFFO0VBQ2ZBLCtDQUFPLENBQUNFLE1BQU0sQ0FBQ0MsQ0FBQyxFQUFDRCxNQUFNLENBQUNFLENBQUMsRUFBQ0YsTUFBTSxDQUFDRyxNQUFNLEVBQUMsQ0FBQyxFQUFDYSxJQUFJLENBQUNDLEVBQUUsR0FBQyxDQUFDLENBQUM7RUFDcEQ7O0VBRUFuQixxREFBYSxHQUFHYSxRQUFRO0VBQ3hCYixnREFBUSxFQUFFO0FBRWQ7QUFHTyxTQUFTc0IsU0FBUyxDQUFDQyxJQUFJLEVBQUU7RUFDNUIsU0FBU0MsSUFBSSxHQUFFO0lBQ1h6Qix1REFBVyxFQUFFO0lBQ2JTLFVBQVUsRUFBRTtJQUVaTixNQUFNLENBQUNHLE1BQU0sSUFBSUgsTUFBTSxDQUFDSSxFQUFFO0lBQzFCOztJQUVBLElBQUlKLE1BQU0sQ0FBQ0csTUFBTSxJQUFJLEdBQUcsRUFBRTtNQUN0QjtNQUNBSCxNQUFNLENBQUNJLEVBQUUsSUFBSSxDQUFDLENBQUM7TUFDZkosTUFBTSxDQUFDSyxJQUFJLEdBQUcsUUFBUTtJQUMxQjtJQUVBLElBQUlMLE1BQU0sQ0FBQ0csTUFBTSxJQUFJLEVBQUUsRUFBRTtNQUNyQjtNQUNBSCxNQUFNLENBQUNJLEVBQUUsSUFBSSxDQUFDLENBQUM7TUFDZkosTUFBTSxDQUFDSyxJQUFJLEdBQUcsUUFBUTtJQUMxQjtFQUNKO0VBRUFrQixXQUFXLENBQUNELElBQUksRUFBQ0QsSUFBSSxHQUFDLEdBQUcsQ0FBQztFQUMxQjtBQUNKOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJlYXRoLWZpcnN0LXNlYXJjaC8uL3NyYy9zY3JpcHRzL2NpcmNsZS5qcz9jNDc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2xlYXJDYW52YXMsIGN0eH0gZnJvbSBcIi4vY2FudmFzLmpzXCI7XG5pbXBvcnQgeyBUaW1pbmcgfSBmcm9tIFwiLi90aW1pbmcuanNcIjtcblxuY29uc3QgY2lyY2xlID0ge1xuICAgIHg6IDMwMCxcbiAgICB5OiAzMDAsXG4gICAgcmFkaXVzOiA4MCxcbiAgICBkcjogMSxcbiAgICAvLyBjaGFuZ2UgaW4gcmFkaXVzXG4gICAgdGV4dDogXCJJTkhBTEVcIlxufVxuXG4gICAgXG5mdW5jdGlvbiBkcmF3Q2lyY2xlKCl7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMC45XG4gICAgY3R4LmZvbnQgPSAnMjBweCBzZXJpZic7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGN0eC5maWxsVGV4dChjaXJjbGUudGV4dCwgMzAwLCA1OTApO1xuXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY2lyY2xlLngsY2lyY2xlLnksMjAsY2lyY2xlLngsY2lyY2xlLnksIDI1MClcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCJibGFja1wiKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC4yNSwgXCJhcXVhXCIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjUsIFwid2hpdGVcIik7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIFwibmF2eVwiKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGNpcmNsZS54LGNpcmNsZS55LGNpcmNsZS5yYWRpdXMsMCxNYXRoLlBJKjIpO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHguZmlsbCgpXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYnJlYXRoaW5nKHRpbWUpIHtcbiAgICBmdW5jdGlvbiBkcmF3KCl7XG4gICAgICAgIGNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGRyYXdDaXJjbGUoKTtcblxuICAgICAgICBjaXJjbGUucmFkaXVzICs9IGNpcmNsZS5kcjtcbiAgICAgICAgLy8gY2hhbmdlIHNpemVcblxuICAgICAgICBpZiAoY2lyY2xlLnJhZGl1cyA+PSAyODApIHtcbiAgICAgICAgICAgIC8vY2hhbmdlIHJhZGl1cyBkaXJlY3Rpb24gYW5kIHRleHRcbiAgICAgICAgICAgIGNpcmNsZS5kciAqPSAtMTtcbiAgICAgICAgICAgIGNpcmNsZS50ZXh0ID0gXCJFWEhBTEVcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNpcmNsZS5yYWRpdXMgPD0gODApIHtcbiAgICAgICAgICAgIC8vY2hhbmdlIHJhZGl1cyBkaXJlY3Rpb24gYW5kIHRleHRcbiAgICAgICAgICAgIGNpcmNsZS5kciAqPSAtMTtcbiAgICAgICAgICAgIGNpcmNsZS50ZXh0ID0gXCJJTkhBTEVcIlxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldEludGVydmFsKGRyYXcsdGltZS8yMDApXG4gICAgLy8gZGl2aWRlIHRpbWUgYnkgIyBvZiBmcmFtZXMgaW4gYSBmdWxsIGN5Y2xlXG59XG5cbi8vIGJyZWF0aGluZyg0MDAwKTtcblxuXG4iXSwibmFtZXMiOlsiY2xlYXJDYW52YXMiLCJjdHgiLCJUaW1pbmciLCJjaXJjbGUiLCJ4IiwieSIsInJhZGl1cyIsImRyIiwidGV4dCIsImRyYXdDaXJjbGUiLCJnbG9iYWxBbHBoYSIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsImdyYWRpZW50IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiYnJlYXRoaW5nIiwidGltZSIsImRyYXciLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/circle.js\n");

/***/ }),

/***/ "./src/scripts/timing.js":
/*!*******************************!*\
  !*** ./src/scripts/timing.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timing\": function() { return /* binding */ Timing; }\n/* harmony export */ });\nclass Timing {\n  constructor() {\n    let inhale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    this.inhale = inhale;\n\n    // this.inhale.addEventListener(\"keyup\", this.setInhale(this))\n  }\n\n  //need 2 even listener key down to get start time. key up to get end time\n}\n\nlet start = 0;\nlet end = 0;\nlet duration = 0;\nwindow.onkeydown = function (e) {\n  if (e.key === \" \") {\n    start = Date.now();\n  }\n};\nwindow.onkeyup = function (e) {\n  if (e.key === \" \") {\n    end = Date.now();\n    duration = end - start;\n    console.log(\"start: \", start);\n    console.log(\"end: \", end);\n    console.log(\"duration: \", duration);\n  }\n\n  // this.inhale = duration\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aW1pbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLE1BQU0sQ0FBQztFQUNoQkMsV0FBVyxHQUFlO0lBQUEsSUFBZEMsTUFBTSx1RUFBRyxJQUFJO0lBQ3JCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNOztJQUVwQjtFQUNKOztFQUlEO0FBR0g7O0FBRUEsSUFBSUMsS0FBSyxHQUFHLENBQUM7QUFDYixJQUFJQyxHQUFHLEdBQUcsQ0FBQztBQUNYLElBQUlDLFFBQVEsR0FBRyxDQUFDO0FBRWhCQyxNQUFNLENBQUNDLFNBQVMsR0FBRyxVQUFTQyxDQUFDLEVBQUU7RUFDM0IsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUssR0FBRyxFQUFHO0lBQ2hCTixLQUFLLEdBQUdPLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0VBQ3RCO0FBQ0osQ0FBQztBQUVETCxNQUFNLENBQUNNLE9BQU8sR0FBRyxVQUFTSixDQUFDLEVBQUU7RUFDekIsSUFBS0EsQ0FBQyxDQUFDQyxHQUFHLEtBQUssR0FBRyxFQUFHO0lBQ2pCTCxHQUFHLEdBQUdNLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0lBQ2hCTixRQUFRLEdBQUdELEdBQUcsR0FBR0QsS0FBSztJQUd0QlUsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFDWCxLQUFLLENBQUM7SUFDNUJVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBQ1YsR0FBRyxDQUFDO0lBQ3hCUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUVULFFBQVEsQ0FBRTtFQUN4Qzs7RUFFQTtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL3NjcmlwdHMvdGltaW5nLmpzP2JiZGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRpbWluZyB7XG4gICAgY29uc3RydWN0b3IoaW5oYWxlID0gMzAwMCl7XG4gICAgICAgIHRoaXMuaW5oYWxlID0gaW5oYWxlO1xuICAgXG4gICAgICAgIC8vIHRoaXMuaW5oYWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLnNldEluaGFsZSh0aGlzKSlcbiAgICB9XG5cblxuICAgIFxuICAgLy9uZWVkIDIgZXZlbiBsaXN0ZW5lciBrZXkgZG93biB0byBnZXQgc3RhcnQgdGltZS4ga2V5IHVwIHRvIGdldCBlbmQgdGltZVxuXG4gICBcbn1cblxubGV0IHN0YXJ0ID0gMDtcbmxldCBlbmQgPSAwO1xubGV0IGR1cmF0aW9uID0gMDtcblxud2luZG93Lm9ua2V5ZG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiIFwiICkge1xuICAgICAgICBzdGFydCA9IERhdGUubm93KCk7XG4gICAgfVxufTtcblxud2luZG93Lm9ua2V5dXAgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCBlLmtleSA9PT0gXCIgXCIgKSB7XG4gICAgICAgIGVuZCA9IERhdGUubm93KCk7XG4gICAgICAgIGR1cmF0aW9uID0gZW5kIC0gc3RhcnQ7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnQ6IFwiLHN0YXJ0KVxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZDogXCIsZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcImR1cmF0aW9uOiBcIiwoZHVyYXRpb24pKVxuICAgIH1cbiAgICBcbiAgICAvLyB0aGlzLmluaGFsZSA9IGR1cmF0aW9uXG59O1xuXG4iXSwibmFtZXMiOlsiVGltaW5nIiwiY29uc3RydWN0b3IiLCJpbmhhbGUiLCJzdGFydCIsImVuZCIsImR1cmF0aW9uIiwid2luZG93Iiwib25rZXlkb3duIiwiZSIsImtleSIsIkRhdGUiLCJub3ciLCJvbmtleXVwIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/timing.js\n");

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