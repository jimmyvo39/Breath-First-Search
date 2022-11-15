/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("const canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nconst circle = {\n  x: 300,\n  y: 300,\n  radius: 80,\n  dr: 1\n  // change in radius\n};\n\nfunction drawCircle() {\n  ctx.beginPath();\n  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);\n  ctx.stroke();\n}\nfunction inhale() {\n  function draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawCircle();\n    ctx.font = '20px serif';\n    ctx.textAlign = 'center';\n    ctx.fillText('INHALE', 300, 300);\n\n    // change size\n    circle.radius += circle.dr;\n    if (circle.radius >= 280) {\n      circle.radius = 80;\n    }\n  }\n  setInterval(draw, 40);\n}\n\n// inhale()\n\nfunction hold() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  circle.radius = 280;\n  drawCircle();\n  ctx.font = '20px serif';\n  ctx.textAlign = 'center';\n  ctx.fillText('HOLD', 300, 300);\n}\n\n// setTimeout(hold,4000)\n\nfunction exhale() {\n  function draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawCircle();\n    ctx.font = '20px serif';\n    ctx.textAlign = 'center';\n    ctx.fillText('EXHALE', 300, 300);\n\n    // change size\n    circle.radius = circle.radius - circle.dr;\n    if (circle.radius <= 80) {\n      circle.radius = 280;\n    }\n  }\n  setInterval(draw, 40);\n}\nexhale();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNpcmNsZSIsIngiLCJ5IiwicmFkaXVzIiwiZHIiLCJkcmF3Q2lyY2xlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwiaW5oYWxlIiwiZHJhdyIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Iiwic2V0SW50ZXJ2YWwiLCJob2xkIiwiZXhoYWxlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cblxuY29uc3QgY2lyY2xlID0ge1xuICAgIHg6IDMwMCxcbiAgICB5OiAzMDAsXG4gICAgcmFkaXVzOiA4MCxcbiAgICBkcjogMVxuICAgIC8vIGNoYW5nZSBpbiByYWRpdXNcbn1cbiAgICBcbmZ1bmN0aW9uIGRyYXdDaXJjbGUoKXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjaXJjbGUueCxjaXJjbGUueSxjaXJjbGUucmFkaXVzLDAsTWF0aC5QSSoyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG59XG5cblxuZnVuY3Rpb24gaW5oYWxlKCkge1xuXG4gICAgZnVuY3Rpb24gZHJhdygpe1xuXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICBkcmF3Q2lyY2xlKCk7XG5cbiAgICAgICAgY3R4LmZvbnQgPSAnMjBweCBzZXJpZic7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KCdJTkhBTEUnLCAzMDAsIDMwMCk7XG5cbiAgICAgICAgLy8gY2hhbmdlIHNpemVcbiAgICAgICAgY2lyY2xlLnJhZGl1cyArPSBjaXJjbGUuZHJcblxuICAgICAgICBpZiAoY2lyY2xlLnJhZGl1cyA+PSAyODApIHtcbiAgICAgICAgY2lyY2xlLnJhZGl1cyA9IDgwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldEludGVydmFsKGRyYXcsNDApXG59XG5cbi8vIGluaGFsZSgpXG5cblxuXG5cbmZ1bmN0aW9uIGhvbGQoKXtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY2lyY2xlLnJhZGl1cyA9IDI4MFxuICAgIGRyYXdDaXJjbGUoKTtcbiAgICBcbiAgICBjdHguZm9udCA9ICcyMHB4IHNlcmlmJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcidcbiAgICBjdHguZmlsbFRleHQoJ0hPTEQnLCAzMDAsIDMwMCk7XG4gICAgXG59XG5cbi8vIHNldFRpbWVvdXQoaG9sZCw0MDAwKVxuXG5cbmZ1bmN0aW9uIGV4aGFsZSgpe1xuICAgIGZ1bmN0aW9uIGRyYXcoKXtcbiAgICBcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGRyYXdDaXJjbGUoKTtcblxuICAgICAgICBjdHguZm9udCA9ICcyMHB4IHNlcmlmJztcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICBjdHguZmlsbFRleHQoJ0VYSEFMRScsIDMwMCwgMzAwKTtcblxuICAgICAgICAvLyBjaGFuZ2Ugc2l6ZVxuICAgICAgICBjaXJjbGUucmFkaXVzID0gY2lyY2xlLnJhZGl1cyAtIGNpcmNsZS5kclxuXG4gICAgICAgIGlmIChjaXJjbGUucmFkaXVzIDw9IDgwKSB7XG4gICAgICAgICAgICBjaXJjbGUucmFkaXVzID0gMjgwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEludGVydmFsKGRyYXcsNDApXG59XG5cbmV4aGFsZSgpXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNoRCxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztBQUluQyxNQUFNQyxNQUFNLEdBQUc7RUFDWEMsQ0FBQyxFQUFFLEdBQUc7RUFDTkMsQ0FBQyxFQUFFLEdBQUc7RUFDTkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsRUFBRSxFQUFFO0VBQ0o7QUFDSixDQUFDOztBQUVELFNBQVNDLFVBQVUsR0FBRTtFQUNqQlAsR0FBRyxDQUFDUSxTQUFTLEVBQUU7RUFDZlIsR0FBRyxDQUFDUyxHQUFHLENBQUNQLE1BQU0sQ0FBQ0MsQ0FBQyxFQUFDRCxNQUFNLENBQUNFLENBQUMsRUFBQ0YsTUFBTSxDQUFDRyxNQUFNLEVBQUMsQ0FBQyxFQUFDSyxJQUFJLENBQUNDLEVBQUUsR0FBQyxDQUFDLENBQUM7RUFDcERYLEdBQUcsQ0FBQ1ksTUFBTSxFQUFFO0FBQ2hCO0FBR0EsU0FBU0MsTUFBTSxHQUFHO0VBRWQsU0FBU0MsSUFBSSxHQUFFO0lBRVhkLEdBQUcsQ0FBQ2UsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVsQixNQUFNLENBQUNtQixLQUFLLEVBQUVuQixNQUFNLENBQUNvQixNQUFNLENBQUM7SUFFaERWLFVBQVUsRUFBRTtJQUVaUCxHQUFHLENBQUNrQixJQUFJLEdBQUcsWUFBWTtJQUN2QmxCLEdBQUcsQ0FBQ21CLFNBQVMsR0FBRyxRQUFRO0lBQ3hCbkIsR0FBRyxDQUFDb0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztJQUVoQztJQUNBbEIsTUFBTSxDQUFDRyxNQUFNLElBQUlILE1BQU0sQ0FBQ0ksRUFBRTtJQUUxQixJQUFJSixNQUFNLENBQUNHLE1BQU0sSUFBSSxHQUFHLEVBQUU7TUFDMUJILE1BQU0sQ0FBQ0csTUFBTSxHQUFHLEVBQUU7SUFDbEI7RUFDSjtFQUVBZ0IsV0FBVyxDQUFDUCxJQUFJLEVBQUMsRUFBRSxDQUFDO0FBQ3hCOztBQUVBOztBQUtBLFNBQVNRLElBQUksR0FBRTtFQUNYdEIsR0FBRyxDQUFDZSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWxCLE1BQU0sQ0FBQ21CLEtBQUssRUFBRW5CLE1BQU0sQ0FBQ29CLE1BQU0sQ0FBQztFQUNoRGYsTUFBTSxDQUFDRyxNQUFNLEdBQUcsR0FBRztFQUNuQkUsVUFBVSxFQUFFO0VBRVpQLEdBQUcsQ0FBQ2tCLElBQUksR0FBRyxZQUFZO0VBQ3ZCbEIsR0FBRyxDQUFDbUIsU0FBUyxHQUFHLFFBQVE7RUFDeEJuQixHQUFHLENBQUNvQixRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFFbEM7O0FBRUE7O0FBR0EsU0FBU0csTUFBTSxHQUFFO0VBQ2IsU0FBU1QsSUFBSSxHQUFFO0lBRVhkLEdBQUcsQ0FBQ2UsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVsQixNQUFNLENBQUNtQixLQUFLLEVBQUVuQixNQUFNLENBQUNvQixNQUFNLENBQUM7SUFFaERWLFVBQVUsRUFBRTtJQUVaUCxHQUFHLENBQUNrQixJQUFJLEdBQUcsWUFBWTtJQUN2QmxCLEdBQUcsQ0FBQ21CLFNBQVMsR0FBRyxRQUFRO0lBQ3hCbkIsR0FBRyxDQUFDb0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztJQUVoQztJQUNBbEIsTUFBTSxDQUFDRyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0csTUFBTSxHQUFHSCxNQUFNLENBQUNJLEVBQUU7SUFFekMsSUFBSUosTUFBTSxDQUFDRyxNQUFNLElBQUksRUFBRSxFQUFFO01BQ3JCSCxNQUFNLENBQUNHLE1BQU0sR0FBRyxHQUFHO0lBQ3ZCO0VBQ0o7RUFDQWdCLFdBQVcsQ0FBQ1AsSUFBSSxFQUFDLEVBQUUsQ0FBQztBQUN4QjtBQUVBUyxNQUFNLEVBQUUifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVhdGgtZmlyc3Qtc2VhcmNoLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;