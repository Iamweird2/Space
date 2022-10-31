"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/technology",{

/***/ "./pages/technology/index.js":
/*!***********************************!*\
  !*** ./pages/technology/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Technology; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _states_api_apiSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../states/api/apiSlice */ \"./states/api/apiSlice.js\");\n/* harmony import */ var _components_EachTech__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/EachTech */ \"./components/EachTech.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Technology() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { data: technology , isLoading , isSuccess , isError , error  } = (0,_states_api_apiSlice__WEBPACK_IMPORTED_MODULE_6__.useGetTechnologyQuery)();\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\space-Next\\\\space\\\\pages\\\\technology\\\\index.js\",\n            lineNumber: 19,\n            columnNumber: 12\n        }, this);\n    } else if (isSuccess) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EachTech__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            name: technology[0].name,\n            tech1: technology[0].name,\n            tech2: technology[1].name,\n            tech3: technology[2].name,\n            imagePortrait: technology[0].images.portrait,\n            imageLandscape: technology[0].images.landscape,\n            description: technology[0].description\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\space-Next\\\\space\\\\pages\\\\technology\\\\index.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this);\n    } else {\n        return;\n    }\n}\n_s(Technology, \"OdQ2HfCaYSyX8jcKea1Zki796CY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _states_api_apiSlice__WEBPACK_IMPORTED_MODULE_6__.useGetTechnologyQuery\n    ];\n});\n_c = Technology;\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZWNobm9sb2d5L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNGO0FBQ0g7QUFDYztBQUNYO0FBQ3FDO0FBQ2pCO0FBRWxDLFNBQVNPLGFBQWE7O0lBQ25DLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLEVBQ0pNLE1BQU1DLFdBQVUsRUFDaEJDLFVBQVMsRUFDVEMsVUFBUyxFQUNUQyxRQUFPLEVBQ1BDLE1BQUssRUFDTixHQUFHVCwyRUFBcUJBO0lBQ3pCLElBQUlNLFdBQVc7UUFDYixxQkFBTyw4REFBQ0k7c0JBQUk7Ozs7OztJQUNkLE9BQU8sSUFBSUgsV0FBVztRQUNwQixxQkFDRSw4REFBQ04sNERBQVFBO1lBQ1BVLE1BQU1OLFVBQVUsQ0FBQyxFQUFFLENBQUNNLElBQUk7WUFDeEJDLE9BQU9QLFVBQVUsQ0FBQyxFQUFFLENBQUNNLElBQUk7WUFDekJFLE9BQU9SLFVBQVUsQ0FBQyxFQUFFLENBQUNNLElBQUk7WUFDekJHLE9BQU9ULFVBQVUsQ0FBQyxFQUFFLENBQUNNLElBQUk7WUFDekJJLGVBQWVWLFVBQVUsQ0FBQyxFQUFFLENBQUNXLE1BQU0sQ0FBQ0MsUUFBUTtZQUM1Q0MsZ0JBQWdCYixVQUFVLENBQUMsRUFBRSxDQUFDVyxNQUFNLENBQUNHLFNBQVM7WUFDOUNDLGFBQWFmLFVBQVUsQ0FBQyxFQUFFLENBQUNlLFdBQVc7Ozs7OztJQUc1QyxPQUFPO1FBQ0w7SUFDRixDQUFDO0FBQ0gsQ0FBQztHQTFCdUJsQjs7UUFDUEosa0RBQVNBO1FBT3BCRSx1RUFBcUJBOzs7S0FSSEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVjaG5vbG9neS9pbmRleC5qcz9lNGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlR2V0VGVjaG5vbG9neVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3N0YXRlcy9hcGkvYXBpU2xpY2VcIjtcclxuaW1wb3J0IEVhY2hUZWNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VhY2hUZWNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWNobm9sb2d5KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtcclxuICAgIGRhdGE6IHRlY2hub2xvZ3ksXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBpc1N1Y2Nlc3MsXHJcbiAgICBpc0Vycm9yLFxyXG4gICAgZXJyb3IsXHJcbiAgfSA9IHVzZUdldFRlY2hub2xvZ3lRdWVyeSgpO1xyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+O1xyXG4gIH0gZWxzZSBpZiAoaXNTdWNjZXNzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RWFjaFRlY2hcclxuICAgICAgICBuYW1lPXt0ZWNobm9sb2d5WzBdLm5hbWV9XHJcbiAgICAgICAgdGVjaDE9e3RlY2hub2xvZ3lbMF0ubmFtZX1cclxuICAgICAgICB0ZWNoMj17dGVjaG5vbG9neVsxXS5uYW1lfVxyXG4gICAgICAgIHRlY2gzPXt0ZWNobm9sb2d5WzJdLm5hbWV9XHJcbiAgICAgICAgaW1hZ2VQb3J0cmFpdD17dGVjaG5vbG9neVswXS5pbWFnZXMucG9ydHJhaXR9XHJcbiAgICAgICAgaW1hZ2VMYW5kc2NhcGU9e3RlY2hub2xvZ3lbMF0uaW1hZ2VzLmxhbmRzY2FwZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17dGVjaG5vbG9neVswXS5kZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIlJlYWN0IiwidXNlUm91dGVyIiwiSGVhZCIsInVzZUdldFRlY2hub2xvZ3lRdWVyeSIsIkVhY2hUZWNoIiwiVGVjaG5vbG9neSIsInJvdXRlciIsImRhdGEiLCJ0ZWNobm9sb2d5IiwiaXNMb2FkaW5nIiwiaXNTdWNjZXNzIiwiaXNFcnJvciIsImVycm9yIiwiZGl2IiwibmFtZSIsInRlY2gxIiwidGVjaDIiLCJ0ZWNoMyIsImltYWdlUG9ydHJhaXQiLCJpbWFnZXMiLCJwb3J0cmFpdCIsImltYWdlTGFuZHNjYXBlIiwibGFuZHNjYXBlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/technology/index.js\n"));

/***/ })

});