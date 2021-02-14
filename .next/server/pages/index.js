module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/graphql/get-pokemons.ts":
/*!***************************************!*\
  !*** ./pages/graphql/get-pokemons.ts ***!
  \***************************************/
/*! exports provided: GET_POKEMONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_POKEMONS\", function() { return GET_POKEMONS; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_POKEMONS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\nquery pokemons {\n  getPokemons {\n    id\n    num\n    name\n    img\n  }\n}\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ncmFwaHFsL2dldC1wb2tlbW9ucy50cz8zY2VmIl0sIm5hbWVzIjpbIkdFVF9QT0tFTU9OUyIsImdxbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFlBQVksR0FBR0Msa0RBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE8iLCJmaWxlIjoiLi9wYWdlcy9ncmFwaHFsL2dldC1wb2tlbW9ucy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuZXhwb3J0IGNvbnN0IEdFVF9QT0tFTU9OUyA9IGdxbGBcbnF1ZXJ5IHBva2Vtb25zIHtcbiAgZ2V0UG9rZW1vbnMge1xuICAgIGlkXG4gICAgbnVtXG4gICAgbmFtZVxuICAgIGltZ1xuICB9XG59XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/graphql/get-pokemons.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_get_pokemons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql/get-pokemons */ \"./pages/graphql/get-pokemons.ts\");\n\n\nvar _jsxFileName = \"/Users/AbdelBadger/PlaygroundProjects/pokemon-nextjs/pages/index.tsx\";\n\n\n\n\nconst Home = () => {\n  const {\n    error,\n    data\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_graphql_get_pokemons__WEBPACK_IMPORTED_MODULE_3__[\"GET_POKEMONS\"]);\n  if (error) return `Error! ${error.message}`;\n  if (data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Fullstack Test\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: data.getPokemons.map(pokemon => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            value: pokemon.num,\n            children: pokemon.img\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 17\n          }, undefined)\n        }, pokemon.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 15\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n  return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJHRVRfUE9LRU1PTlMiLCJtZXNzYWdlIiwiZ2V0UG9rZW1vbnMiLCJtYXAiLCJwb2tlbW9uIiwibnVtIiwiaW1nIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUdBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQWtCQywrREFBUSxDQUFDQyxrRUFBRCxDQUFoQztBQUVBLE1BQUlILEtBQUosRUFBVyxPQUFRLFVBQVNBLEtBQUssQ0FBQ0ksT0FBUSxFQUEvQjtBQUNYLE1BQUlILElBQUosRUFDRSxvQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUEsNkJBQ0U7QUFBQSxrQkFDR0EsSUFBSSxDQUFDSSxXQUFMLENBQWlCQyxHQUFqQixDQUFxQkMsT0FBTyxpQkFDM0I7QUFBQSxpQ0FDRTtBQUFRLGlCQUFLLEVBQUVBLE9BQU8sQ0FBQ0MsR0FBdkI7QUFBQSxzQkFDR0QsT0FBTyxDQUFDRTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFTRixPQUFPLENBQUNHLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLGtCQURGO0FBbUJGLFNBQU8sSUFBUDtBQUNELENBekJEOztBQTJCZVgsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IEdFVF9QT0tFTU9OUyB9IGZyb20gJy4vZ3JhcGhxbC9nZXQtcG9rZW1vbnMnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vdWkvc3ZnL3Bva2Vtb24tbG9nby5zdmcnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCB7IGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUE9LRU1PTlMpO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIGBFcnJvciEgJHtlcnJvci5tZXNzYWdlfWA7XG4gIGlmIChkYXRhKVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RnVsbHN0YWNrIFRlc3Q8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtkYXRhLmdldFBva2Vtb25zLm1hcChwb2tlbW9uID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17cG9rZW1vbi5pZH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2YWx1ZT17cG9rZW1vbi5udW19PlxuICAgICAgICAgICAgICAgICAge3Bva2Vtb24uaW1nfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });