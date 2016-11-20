/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("console.log(\"test script 1\");\r\n\r\ndocument.write(__webpack_require__(1));\r\nvar s2 =(__webpack_require__(2));\r\n\r\n__webpack_require__(3);\r\n\r\n \n\n//////////////////\n// WEBPACK FOOTER\n// ./script.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./script.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = \"Текст с content.js\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./content.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./content.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = console.log(\"Script2\");\n\n//////////////////\n// WEBPACK FOOTER\n// ./script2.js\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./script2.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("function co(){ \r\nvar el = document.querySelector(\"#text_test\");\r\n//debugger;\r\nel.style.color = \"#FF0000\";\r\n}\r\nmodule.exports = co(); \r\n\r\n\r\n\r\n\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./script3.js\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./script3.js?");

/***/ }
/******/ ]);