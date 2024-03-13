"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./service/blog.service.ts":
/*!*********************************!*\
  !*** ./service/blog.service.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getArchiveBlogs: function() { return /* binding */ getArchiveBlogs; },\n/* harmony export */   getBlogs: function() { return /* binding */ getBlogs; },\n/* harmony export */   getDetailedBlog: function() { return /* binding */ getDetailedBlog; },\n/* harmony export */   getSearchBlogs: function() { return /* binding */ getSearchBlogs; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ \"(app-pages-browser)/./node_modules/graphql-request/build/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\t\tquery MyQuery($status:) {\\n\t\t\tblogs(where: {archive:}) {\\n\t\t\t\ttitle\\n\t\t\t\tcreatedAt\\n\t\t\t\tauthor {\\n\t\t\t\t\tname\\n\t\t\t\t\timage {\\n\t\t\t\t\t\turl\\n\t\t\t\t\t}\\n\t\t\t\t}\\n\t\t\t\tcategory {\\n\t\t\t\t\tname\\n\t\t\t\t\tslug\\n\t\t\t\t}\\n\t\t\t\tdescription\\n\t\t\t\ttag {\\n\t\t\t\t\tname\\n\t\t\t\t\tslug\\n\t\t\t\t}\\n\t\t\t\timage {\\n\t\t\t\t\turl\\n\t\t\t\t}\\n\t\t\t\tcontent {\\n\t\t\t\t\thtml\\n\t\t\t\t}\\n\t\t\t\tslug\\n\t\t\t}\\n\t\t}\\n\t\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\t\tquery MyQuery($slug: String!) {\\n\t\t\tblog(where: { slug: $slug }) {\\n\t\t\t\tauthor {\\n\t\t\t\t\tname\\n\t\t\t\t\timage {\\n\t\t\t\t\t\turl\\n\t\t\t\t\t}\\n\t\t\t\t\tbio\\n\t\t\t\t\tid\\n\t\t\t\t}\\n\t\t\t\tcontent {\\n\t\t\t\t\thtml\\n\t\t\t\t}\\n\t\t\t\tcreatedAt\\n\t\t\t\timage {\\n\t\t\t\t\turl\\n\t\t\t\t}\\n\t\t\t\tslug\\n\t\t\t\ttag {\\n\t\t\t\t\tname\\n\t\t\t\t\tslug\\n\t\t\t\t}\\n\t\t\t\tcategory {\\n\t\t\t\t\tname\\n\t\t\t\t\tslug\\n\t\t\t\t}\\n\t\t\t\ttitle\\n\t\t\t}\\n\t\t}\\n\t\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\t\tquery MyQuery($title: String!) {\\n\t\t\tblogs(where: { title_contains: $title }) {\\n\t\t\t\ttitle\\n\t\t\t\timage {\\n\t\t\t\t\turl\\n\t\t\t\t}\\n\t\t\t\tslug\\n\t\t\t\tcreatedAt\\n\t\t\t}\\n\t\t}\\n\t\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\t\tquery MyQuery {\\n\t\t\tblogs(where: { archive: true }) {\\n\t\t\t\ttitle\\n\t\t\t\tcreatedAt\\n\t\t\t\tslug\\n\t\t\t}\\n\t\t}\\n\t\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst graphqlAPI = \"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cltowk4ie0v7m07v0nj7gygjw/master\";\nconst getBlogs = async (status)=>{\n    const query = (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\n    const { blogs } = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(graphqlAPI, query);\n    return blogs;\n};\nconst getDetailedBlog = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (slug)=>{\n    const query = (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject1());\n    const { blog } = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(graphqlAPI, query, {\n        slug\n    });\n    return blog;\n});\nconst getSearchBlogs = async (title)=>{\n    const query = (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\n    const { blogs } = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(graphqlAPI, query, {\n        title\n    });\n    return blogs;\n};\nconst getArchiveBlogs = async ()=>{\n    const query = (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject3());\n    const { blogs } = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(graphqlAPI, query);\n    const filteredBlogs = blogs.reduce((acc, blog)=>{\n        const year = blog.createdAt.substring(0, 4);\n        if (!acc[year]) {\n            acc[year] = {\n                year,\n                blogs: []\n            };\n        }\n        acc[year].blogs.push(blog);\n        return acc;\n    }, {});\n    const results = Object.values(filteredBlogs);\n    return results;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NlcnZpY2UvYmxvZy5zZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM4QztBQUNqQjtBQUU3QixNQUFNRyxhQUFhQyx1RkFBeUM7QUFFckQsTUFBTUcsV0FBVyxPQUFPQztJQUM5QixNQUFNQyxRQUFRUixvREFBR0E7SUErQmpCLE1BQU0sRUFBRVMsS0FBSyxFQUFFLEdBQUcsTUFBTVYsMkRBQU9BLENBQXFCRyxZQUFZTTtJQUNoRSxPQUFPQztBQUNSLEVBQUM7QUFFTSxNQUFNQyxrQkFBa0JULDRDQUFLQSxDQUFDLE9BQU9VO0lBQzNDLE1BQU1ILFFBQVFSLG9EQUFHQTtJQWdDakIsTUFBTSxFQUFFWSxJQUFJLEVBQUUsR0FBRyxNQUFNYiwyREFBT0EsQ0FBa0JHLFlBQVlNLE9BQU87UUFBRUc7SUFBSztJQUMxRSxPQUFPQztBQUNSLEdBQUU7QUFFSyxNQUFNQyxpQkFBaUIsT0FBT0M7SUFDcEMsTUFBTU4sUUFBUVIsb0RBQUdBO0lBWWpCLE1BQU0sRUFBRVMsS0FBSyxFQUFFLEdBQUcsTUFBTVYsMkRBQU9BLENBQXFCRyxZQUFZTSxPQUFPO1FBQ3RFTTtJQUNEO0lBQ0EsT0FBT0w7QUFDUixFQUFDO0FBRU0sTUFBTU0sa0JBQWtCO0lBQzlCLE1BQU1QLFFBQVFSLG9EQUFHQTtJQVVqQixNQUFNLEVBQUVTLEtBQUssRUFBRSxHQUFHLE1BQU1WLDJEQUFPQSxDQUFxQkcsWUFBWU07SUFDaEUsTUFBTVEsZ0JBQWdCUCxNQUFNUSxNQUFNLENBQ2pDLENBQUNDLEtBQXdDTjtRQUN4QyxNQUFNTyxPQUFPUCxLQUFLUSxTQUFTLENBQUNDLFNBQVMsQ0FBQyxHQUFHO1FBQ3pDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxLQUFLLEVBQUU7WUFDZkQsR0FBRyxDQUFDQyxLQUFLLEdBQUc7Z0JBQUVBO2dCQUFNVixPQUFPLEVBQUU7WUFBQztRQUMvQjtRQUNBUyxHQUFHLENBQUNDLEtBQUssQ0FBQ1YsS0FBSyxDQUFDYSxJQUFJLENBQUNWO1FBQ3JCLE9BQU9NO0lBQ1IsR0FDQSxDQUFDO0lBRUYsTUFBTUssVUFBMkJDLE9BQU9DLE1BQU0sQ0FBQ1Q7SUFDL0MsT0FBT087QUFDUixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2UvYmxvZy5zZXJ2aWNlLnRzP2I3ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFyY2hpdmVkQmxvZywgSUJsb2cgfSBmcm9tICdAL3R5cGVzJ1xuaW1wb3J0IHJlcXVlc3QsIHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuaW1wb3J0IHsgY2FjaGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgZ3JhcGhxbEFQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dSQVBIQ01TX0VORFBPSU5UIVxuXG5leHBvcnQgY29uc3QgZ2V0QmxvZ3MgPSBhc3luYyAoc3RhdHVzOmJvb2xlYW4pID0+IHtcblx0Y29uc3QgcXVlcnkgPSBncWxgXG5cdFx0cXVlcnkgTXlRdWVyeSgkc3RhdHVzOikge1xuXHRcdFx0YmxvZ3Mod2hlcmU6IHthcmNoaXZlOn0pIHtcblx0XHRcdFx0dGl0bGVcblx0XHRcdFx0Y3JlYXRlZEF0XG5cdFx0XHRcdGF1dGhvciB7XG5cdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdGltYWdlIHtcblx0XHRcdFx0XHRcdHVybFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjYXRlZ29yeSB7XG5cdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdHNsdWdcblx0XHRcdFx0fVxuXHRcdFx0XHRkZXNjcmlwdGlvblxuXHRcdFx0XHR0YWcge1xuXHRcdFx0XHRcdG5hbWVcblx0XHRcdFx0XHRzbHVnXG5cdFx0XHRcdH1cblx0XHRcdFx0aW1hZ2Uge1xuXHRcdFx0XHRcdHVybFxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRlbnQge1xuXHRcdFx0XHRcdGh0bWxcblx0XHRcdFx0fVxuXHRcdFx0XHRzbHVnXG5cdFx0XHR9XG5cdFx0fVxuXHRgXG5cblx0Y29uc3QgeyBibG9ncyB9ID0gYXdhaXQgcmVxdWVzdDx7IGJsb2dzOiBJQmxvZ1tdIH0+KGdyYXBocWxBUEksIHF1ZXJ5KVxuXHRyZXR1cm4gYmxvZ3Ncbn1cblxuZXhwb3J0IGNvbnN0IGdldERldGFpbGVkQmxvZyA9IGNhY2hlKGFzeW5jIChzbHVnOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcXVlcnkgPSBncWxgXG5cdFx0cXVlcnkgTXlRdWVyeSgkc2x1ZzogU3RyaW5nISkge1xuXHRcdFx0YmxvZyh3aGVyZTogeyBzbHVnOiAkc2x1ZyB9KSB7XG5cdFx0XHRcdGF1dGhvciB7XG5cdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdGltYWdlIHtcblx0XHRcdFx0XHRcdHVybFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRiaW9cblx0XHRcdFx0XHRpZFxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRlbnQge1xuXHRcdFx0XHRcdGh0bWxcblx0XHRcdFx0fVxuXHRcdFx0XHRjcmVhdGVkQXRcblx0XHRcdFx0aW1hZ2Uge1xuXHRcdFx0XHRcdHVybFxuXHRcdFx0XHR9XG5cdFx0XHRcdHNsdWdcblx0XHRcdFx0dGFnIHtcblx0XHRcdFx0XHRuYW1lXG5cdFx0XHRcdFx0c2x1Z1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhdGVnb3J5IHtcblx0XHRcdFx0XHRuYW1lXG5cdFx0XHRcdFx0c2x1Z1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRpdGxlXG5cdFx0XHR9XG5cdFx0fVxuXHRgXG5cblx0Y29uc3QgeyBibG9nIH0gPSBhd2FpdCByZXF1ZXN0PHsgYmxvZzogSUJsb2cgfT4oZ3JhcGhxbEFQSSwgcXVlcnksIHsgc2x1ZyB9KVxuXHRyZXR1cm4gYmxvZ1xufSlcblxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaEJsb2dzID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcXVlcnkgPSBncWxgXG5cdFx0cXVlcnkgTXlRdWVyeSgkdGl0bGU6IFN0cmluZyEpIHtcblx0XHRcdGJsb2dzKHdoZXJlOiB7IHRpdGxlX2NvbnRhaW5zOiAkdGl0bGUgfSkge1xuXHRcdFx0XHR0aXRsZVxuXHRcdFx0XHRpbWFnZSB7XG5cdFx0XHRcdFx0dXJsXG5cdFx0XHRcdH1cblx0XHRcdFx0c2x1Z1xuXHRcdFx0XHRjcmVhdGVkQXRcblx0XHRcdH1cblx0XHR9XG5cdGBcblx0Y29uc3QgeyBibG9ncyB9ID0gYXdhaXQgcmVxdWVzdDx7IGJsb2dzOiBJQmxvZ1tdIH0+KGdyYXBocWxBUEksIHF1ZXJ5LCB7XG5cdFx0dGl0bGUsXG5cdH0pXG5cdHJldHVybiBibG9nc1xufVxuXG5leHBvcnQgY29uc3QgZ2V0QXJjaGl2ZUJsb2dzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBxdWVyeSA9IGdxbGBcblx0XHRxdWVyeSBNeVF1ZXJ5IHtcblx0XHRcdGJsb2dzKHdoZXJlOiB7IGFyY2hpdmU6IHRydWUgfSkge1xuXHRcdFx0XHR0aXRsZVxuXHRcdFx0XHRjcmVhdGVkQXRcblx0XHRcdFx0c2x1Z1xuXHRcdFx0fVxuXHRcdH1cblx0YFxuXG5cdGNvbnN0IHsgYmxvZ3MgfSA9IGF3YWl0IHJlcXVlc3Q8eyBibG9nczogSUJsb2dbXSB9PihncmFwaHFsQVBJLCBxdWVyeSlcblx0Y29uc3QgZmlsdGVyZWRCbG9ncyA9IGJsb2dzLnJlZHVjZShcblx0XHQoYWNjOiB7IFt5ZWFyOiBzdHJpbmddOiBJQXJjaGl2ZWRCbG9nIH0sIGJsb2c6IElCbG9nKSA9PiB7XG5cdFx0XHRjb25zdCB5ZWFyID0gYmxvZy5jcmVhdGVkQXQuc3Vic3RyaW5nKDAsIDQpXG5cdFx0XHRpZiAoIWFjY1t5ZWFyXSkge1xuXHRcdFx0XHRhY2NbeWVhcl0gPSB7IHllYXIsIGJsb2dzOiBbXSB9XG5cdFx0XHR9XG5cdFx0XHRhY2NbeWVhcl0uYmxvZ3MucHVzaChibG9nKVxuXHRcdFx0cmV0dXJuIGFjY1xuXHRcdH0sXG5cdFx0e31cblx0KVxuXHRjb25zdCByZXN1bHRzOiBJQXJjaGl2ZWRCbG9nW10gPSBPYmplY3QudmFsdWVzKGZpbHRlcmVkQmxvZ3MpXG5cdHJldHVybiByZXN1bHRzXG59XG4iXSwibmFtZXMiOlsicmVxdWVzdCIsImdxbCIsImNhY2hlIiwiZ3JhcGhxbEFQSSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HUkFQSENNU19FTkRQT0lOVCIsImdldEJsb2dzIiwic3RhdHVzIiwicXVlcnkiLCJibG9ncyIsImdldERldGFpbGVkQmxvZyIsInNsdWciLCJibG9nIiwiZ2V0U2VhcmNoQmxvZ3MiLCJ0aXRsZSIsImdldEFyY2hpdmVCbG9ncyIsImZpbHRlcmVkQmxvZ3MiLCJyZWR1Y2UiLCJhY2MiLCJ5ZWFyIiwiY3JlYXRlZEF0Iiwic3Vic3RyaW5nIiwicHVzaCIsInJlc3VsdHMiLCJPYmplY3QiLCJ2YWx1ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./service/blog.service.ts\n"));

/***/ })

});