"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./states/SidebarSlice.js":
/*!********************************!*\
  !*** ./states/SidebarSlice.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SidebarSlice\": function() { return /* binding */ SidebarSlice; },\n/* harmony export */   \"toggle\": function() { return /* binding */ toggle; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst SidebarSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"sidebarMenu\",\n    initialState: {\n        value: false\n    },\n    reducers: {\n        toggle: (state)=>{\n            state.value = !state.value;\n            console.log(state.value);\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { toggle  } = SidebarSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidebarSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0ZXMvU2lkZWJhclNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUV4QyxNQUFNQyxlQUFlRCw2REFBV0EsQ0FBQztJQUN0Q0UsTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLE9BQU8sS0FBSztJQUNkO0lBQ0FDLFVBQVU7UUFDUkMsUUFBUSxDQUFDQyxRQUFVO1lBQ2pCQSxNQUFNSCxLQUFLLEdBQUcsQ0FBQ0csTUFBTUgsS0FBSztZQUMxQkksUUFBUUMsR0FBRyxDQUFDRixNQUFNSCxLQUFLO1FBQ3pCO0lBQ0Y7QUFDRixHQUFHO0FBRUgsK0RBQStEO0FBQ3hELE1BQU0sRUFBRUUsT0FBTSxFQUFFLEdBQUdMLGFBQWFTLE9BQU8sQ0FBQztBQUUvQywrREFBZVQsYUFBYVUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0YXRlcy9TaWRlYmFyU2xpY2UuanM/NzIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZWJhclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwic2lkZWJhck1lbnVcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHZhbHVlOiBmYWxzZSxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICB0b2dnbGU6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS52YWx1ZSA9ICFzdGF0ZS52YWx1ZTtcclxuICAgICAgY29uc29sZS5sb2coc3RhdGUudmFsdWUpO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxyXG5leHBvcnQgY29uc3QgeyB0b2dnbGUgfSA9IFNpZGViYXJTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsIlNpZGViYXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInJlZHVjZXJzIiwidG9nZ2xlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./states/SidebarSlice.js\n"));

/***/ })

});