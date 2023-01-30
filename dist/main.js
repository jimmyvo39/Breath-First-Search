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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/circle.js */ \"./src/scripts/circle.js\");\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n\n\nlet intervalId;\nlet interval = 2800 / 200;\nlet startTime;\nfunction invokeFunction(interval) {\n  (0,_scripts_circle_js__WEBPACK_IMPORTED_MODULE_0__.breathing)(interval);\n}\nintervalId = setInterval(invokeFunction, interval);\ndocument.getElementById(\"hold\").addEventListener(\"mousedown\", function (event) {\n  startTime = Date.now();\n  (0,_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_1__.clearCanvas)();\n  clearInterval(intervalId);\n});\ndocument.getElementById(\"hold\").addEventListener(\"mouseup\", function (event) {\n  clearInterval(intervalId);\n  interval = Date.now() - startTime;\n  intervalId = setInterval(invokeFunction, interval / 200, interval);\n  //   console.log(interval)\n});\n\nconst modals = document.querySelectorAll(\"[data-modal]\");\nmodals.forEach(function (trigger) {\n  trigger.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    const modal = document.getElementById(trigger.dataset.modal);\n    modal.classList.add(\"open\");\n    const exits = modal.querySelectorAll(\".modal-exit\");\n    exits.forEach(function (exit) {\n      exit.addEventListener(\"click\", function (event) {\n        event.preventDefault();\n        modal.classList.remove(\"open\");\n      });\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQytDO0FBQ0M7QUFFaEQsSUFBSUUsVUFBVTtBQUNkLElBQUlDLFFBQVEsR0FBRyxJQUFJLEdBQUMsR0FBRztBQUN2QixJQUFJQyxTQUFTO0FBRWIsU0FBU0MsY0FBYyxDQUFDRixRQUFRLEVBQUU7RUFDaENILDZEQUFTLENBQUNHLFFBQVEsQ0FBQztBQUNyQjtBQUVBRCxVQUFVLEdBQUdJLFdBQVcsQ0FBQ0QsY0FBYyxFQUFFRixRQUFRLENBQUM7QUFFbERJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBU0MsS0FBSyxFQUFFO0VBQzVFTixTQUFTLEdBQUdPLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0VBQ3RCWCwrREFBVyxFQUFFO0VBQ2JZLGFBQWEsQ0FBQ1gsVUFBVSxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUVGSyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVNDLEtBQUssRUFBRTtFQUMxRUcsYUFBYSxDQUFDWCxVQUFVLENBQUM7RUFDekJDLFFBQVEsR0FBR1EsSUFBSSxDQUFDQyxHQUFHLEVBQUUsR0FBR1IsU0FBUztFQUNqQ0YsVUFBVSxHQUFHSSxXQUFXLENBQUNELGNBQWMsRUFBRUYsUUFBUSxHQUFDLEdBQUcsRUFBQ0EsUUFBUSxDQUFDO0VBQ2pFO0FBQ0EsQ0FBQyxDQUFDOztBQUVGLE1BQU1XLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7QUFFeERELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLFVBQVVDLE9BQU8sRUFBRTtFQUNoQ0EsT0FBTyxDQUFDUixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0lBQ2pEQSxLQUFLLENBQUNRLGNBQWMsRUFBRTtJQUN0QixNQUFNQyxLQUFLLEdBQUdaLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDUyxPQUFPLENBQUNHLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDO0lBQzVEQSxLQUFLLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMzQixNQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0osZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ25EUSxLQUFLLENBQUNQLE9BQU8sQ0FBQyxVQUFVUSxJQUFJLEVBQUU7TUFDNUJBLElBQUksQ0FBQ2YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVDLEtBQUssRUFBRTtRQUM5Q0EsS0FBSyxDQUFDUSxjQUFjLEVBQUU7UUFDdEJDLEtBQUssQ0FBQ0UsU0FBUyxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO01BQ2hDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWF0aC1maXJzdC1zZWFyY2gvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGJyZWF0aGluZ30gZnJvbSBcIi4vc2NyaXB0cy9jaXJjbGUuanNcIjtcbmltcG9ydCB7Y2xlYXJDYW52YXN9IGZyb20gXCIuL3NjcmlwdHMvY2FudmFzLmpzXCI7XG5cbmxldCBpbnRlcnZhbElkO1xubGV0IGludGVydmFsID0gMjgwMC8yMDA7XG5sZXQgc3RhcnRUaW1lO1xuXG5mdW5jdGlvbiBpbnZva2VGdW5jdGlvbihpbnRlcnZhbCkge1xuICBicmVhdGhpbmcoaW50ZXJ2YWwpO1xufVxuXG5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoaW52b2tlRnVuY3Rpb24sIGludGVydmFsKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob2xkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgY2xlYXJDYW52YXMoKTtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgaW50ZXJ2YWwgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xuICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoaW52b2tlRnVuY3Rpb24sIGludGVydmFsLzIwMCxpbnRlcnZhbCk7XG4vLyAgIGNvbnNvbGUubG9nKGludGVydmFsKVxufSk7XG5cbmNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tb2RhbF1cIik7XG5cbm1vZGFscy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0cmlnZ2VyLmRhdGFzZXQubW9kYWwpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgIGNvbnN0IGV4aXRzID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbC1leGl0XCIpO1xuICAgIGV4aXRzLmZvckVhY2goZnVuY3Rpb24gKGV4aXQpIHtcbiAgICAgIGV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiYnJlYXRoaW5nIiwiY2xlYXJDYW52YXMiLCJpbnRlcnZhbElkIiwiaW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJpbnZva2VGdW5jdGlvbiIsInNldEludGVydmFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIkRhdGUiLCJub3ciLCJjbGVhckludGVydmFsIiwibW9kYWxzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0cmlnZ2VyIiwicHJldmVudERlZmF1bHQiLCJtb2RhbCIsImRhdGFzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJleGl0cyIsImV4aXQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"breathing\": function() { return /* binding */ breathing; }\n/* harmony export */ });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/scripts/canvas.js\");\n\n// import { Timing } from \"./timing.js\";\n\nconst circle = {\n  x: 300,\n  y: 300,\n  radius: 80,\n  dr: 1,\n  // change in radius\n  text: \"INHALE\"\n};\nfunction drawCircle() {\n  // ctx.globalAlpha = 0.9\n\n  const gradient = _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.createRadialGradient(circle.x, circle.y, 20, circle.x, circle.y, 250);\n  gradient.addColorStop(0, \"black\");\n  gradient.addColorStop(0.25, \"aqua\");\n  gradient.addColorStop(0.5, \"white\");\n  gradient.addColorStop(1, \"navy\");\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);\n  // ctx.stroke();\n\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = gradient;\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fill();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.font = '20px serif';\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = 'center';\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(circle.text, 300, 600);\n}\nfunction breathing(time) {\n  (0,_canvas_js__WEBPACK_IMPORTED_MODULE_0__.clearCanvas)();\n  drawCircle();\n  if (!time) time = 2800;\n  circle.radius += circle.dr;\n  // change size\n\n  if (circle.radius >= 280) {\n    //change radius direction and text\n    circle.dr *= -1;\n    circle.text = \"EXHALE FOR \" + time / 1000 + \" SECONDS\";\n  }\n  if (circle.radius <= 80) {\n    //change radius direction and text\n    circle.dr *= -1;\n    circle.text = \"INHALE FOR \" + time / 1000 + \" SECONDS\";\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaXJjbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFDN0M7O0FBRUEsTUFBTUUsTUFBTSxHQUFHO0VBQ1hDLENBQUMsRUFBRSxHQUFHO0VBQ05DLENBQUMsRUFBRSxHQUFHO0VBQ05DLE1BQU0sRUFBRSxFQUFFO0VBQ1ZDLEVBQUUsRUFBRSxDQUFDO0VBQ0w7RUFDQUMsSUFBSSxFQUFFO0FBQ1YsQ0FBQztBQUdELFNBQVNDLFVBQVUsR0FBRTtFQUNqQjs7RUFFQSxNQUFNQyxRQUFRLEdBQUdSLGdFQUF3QixDQUFDQyxNQUFNLENBQUNDLENBQUMsRUFBQ0QsTUFBTSxDQUFDRSxDQUFDLEVBQUMsRUFBRSxFQUFDRixNQUFNLENBQUNDLENBQUMsRUFBQ0QsTUFBTSxDQUFDRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ3RGSyxRQUFRLENBQUNFLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDO0VBQ2pDRixRQUFRLENBQUNFLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0VBQ25DRixRQUFRLENBQUNFLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO0VBQ25DRixRQUFRLENBQUNFLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0VBRWhDVixxREFBYSxFQUFFO0VBQ2ZBLCtDQUFPLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQyxFQUFDRCxNQUFNLENBQUNFLENBQUMsRUFBQ0YsTUFBTSxDQUFDRyxNQUFNLEVBQUMsQ0FBQyxFQUFDUyxJQUFJLENBQUNDLEVBQUUsR0FBQyxDQUFDLENBQUM7RUFDcEQ7O0VBRUFkLHFEQUFhLEdBQUdRLFFBQVE7RUFDeEJSLGdEQUFRLEVBQUU7RUFFVkEsZ0RBQVEsR0FBRyxZQUFZO0VBQ3ZCQSxxREFBYSxHQUFHLFFBQVE7RUFDeEJBLG9EQUFZLENBQUNDLE1BQU0sQ0FBQ0ssSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDdkM7QUFHTyxTQUFTYyxTQUFTLENBQUNDLElBQUksRUFBRTtFQUU1QnRCLHVEQUFXLEVBQUU7RUFDYlEsVUFBVSxFQUFFO0VBRVosSUFBRyxDQUFDYyxJQUFJLEVBQUVBLElBQUksR0FBRyxJQUFJO0VBRXJCcEIsTUFBTSxDQUFDRyxNQUFNLElBQUlILE1BQU0sQ0FBQ0ksRUFBRTtFQUMxQjs7RUFFQSxJQUFJSixNQUFNLENBQUNHLE1BQU0sSUFBSSxHQUFHLEVBQUU7SUFDdEI7SUFDQUgsTUFBTSxDQUFDSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2ZKLE1BQU0sQ0FBQ0ssSUFBSSxHQUFHLGFBQWEsR0FBR2UsSUFBSSxHQUFDLElBQUksR0FBRyxVQUFVO0VBQ3hEO0VBRUEsSUFBSXBCLE1BQU0sQ0FBQ0csTUFBTSxJQUFJLEVBQUUsRUFBRTtJQUNyQjtJQUNBSCxNQUFNLENBQUNJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDZkosTUFBTSxDQUFDSyxJQUFJLEdBQUcsYUFBYSxHQUFHZSxJQUFJLEdBQUMsSUFBSSxHQUFHLFVBQVU7RUFDeEQ7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWF0aC1maXJzdC1zZWFyY2gvLi9zcmMvc2NyaXB0cy9jaXJjbGUuanM/YzQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NsZWFyQ2FudmFzLCBjdHh9IGZyb20gXCIuL2NhbnZhcy5qc1wiO1xuLy8gaW1wb3J0IHsgVGltaW5nIH0gZnJvbSBcIi4vdGltaW5nLmpzXCI7XG5cbmNvbnN0IGNpcmNsZSA9IHtcbiAgICB4OiAzMDAsXG4gICAgeTogMzAwLFxuICAgIHJhZGl1czogODAsXG4gICAgZHI6IDEsXG4gICAgLy8gY2hhbmdlIGluIHJhZGl1c1xuICAgIHRleHQ6IFwiSU5IQUxFXCJcbn1cblxuICAgIFxuZnVuY3Rpb24gZHJhd0NpcmNsZSgpe1xuICAgIC8vIGN0eC5nbG9iYWxBbHBoYSA9IDAuOVxuICAgIFxuICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGNpcmNsZS54LGNpcmNsZS55LDIwLGNpcmNsZS54LGNpcmNsZS55LCAyNTApXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIFwiYmxhY2tcIik7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuMjUsIFwiYXF1YVwiKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCBcIndoaXRlXCIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBcIm5hdnlcIik7XG4gICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoY2lyY2xlLngsY2lyY2xlLnksY2lyY2xlLnJhZGl1cywwLE1hdGguUEkqMik7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHguZmlsbCgpXG4gICAgXG4gICAgY3R4LmZvbnQgPSAnMjBweCBzZXJpZic7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGN0eC5maWxsVGV4dChjaXJjbGUudGV4dCwgMzAwLCA2MDApO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBicmVhdGhpbmcodGltZSkge1xuXG4gICAgY2xlYXJDYW52YXMoKTtcbiAgICBkcmF3Q2lyY2xlKCk7XG5cbiAgICBpZighdGltZSkgdGltZSA9IDI4MDBcblxuICAgIGNpcmNsZS5yYWRpdXMgKz0gY2lyY2xlLmRyO1xuICAgIC8vIGNoYW5nZSBzaXplXG5cbiAgICBpZiAoY2lyY2xlLnJhZGl1cyA+PSAyODApIHtcbiAgICAgICAgLy9jaGFuZ2UgcmFkaXVzIGRpcmVjdGlvbiBhbmQgdGV4dFxuICAgICAgICBjaXJjbGUuZHIgKj0gLTE7XG4gICAgICAgIGNpcmNsZS50ZXh0ID0gXCJFWEhBTEUgRk9SIFwiICsgdGltZS8xMDAwICsgXCIgU0VDT05EU1wiXG4gICAgfVxuXG4gICAgaWYgKGNpcmNsZS5yYWRpdXMgPD0gODApIHtcbiAgICAgICAgLy9jaGFuZ2UgcmFkaXVzIGRpcmVjdGlvbiBhbmQgdGV4dFxuICAgICAgICBjaXJjbGUuZHIgKj0gLTE7XG4gICAgICAgIGNpcmNsZS50ZXh0ID0gXCJJTkhBTEUgRk9SIFwiICsgdGltZS8xMDAwICsgXCIgU0VDT05EU1wiXG4gICAgfVxuICAgIFxufVxuXG5cblxuIl0sIm5hbWVzIjpbImNsZWFyQ2FudmFzIiwiY3R4IiwiY2lyY2xlIiwieCIsInkiLCJyYWRpdXMiLCJkciIsInRleHQiLCJkcmF3Q2lyY2xlIiwiZ3JhZGllbnQiLCJjcmVhdGVSYWRpYWxHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJicmVhdGhpbmciLCJ0aW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/circle.js\n");

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