"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/homepage/page",{

/***/ "(app-pages-browser)/./app/pages/homepage/ProjectSection.jsx":
/*!***********************************************!*\
  !*** ./app/pages/homepage/ProjectSection.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectItem */ \"(app-pages-browser)/./app/pages/homepage/ProjectItem.tsx\");\n/* harmony import */ var _api_document_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/document_functions */ \"(app-pages-browser)/./app/api/document_functions.ts\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AuthContext */ \"(app-pages-browser)/./app/context/AuthContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ProjectSection = (param)=>{\n    let { title, searchQuery } = param;\n    _s();\n    const userId = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuth)().userId;\n    // const userId = user.user.uid;\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProjects = async ()=>{\n            const response = await (0,_api_document_functions__WEBPACK_IMPORTED_MODULE_3__.getDocuments)(userId);\n            if (response.message == \"not found\") {\n                console.log(\"No projects found matching the search query.\");\n                return;\n            } else {\n                // setProjectCount(response.message.length);\n                console.log(\"Response:\", response); // Check the response structure\n                setProjects(response.message);\n            }\n        };\n        if (!projects) {\n            fetchProjects();\n        }\n    }, []); // useEffect will run when userId changes\n    const filteredProjects = projects ? projects.filter((project)=>{\n        return project.Title.toLowerCase().includes(searchQuery.toLowerCase());\n    }) : [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg text-gray-700\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/raymond/Desktop/EditorAI/client/editor-ai/app/pages/homepage/ProjectSection.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-4\",\n                children: filteredProjects ? filteredProjects.map((document)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: document.Title,\n                        content: document.Content,\n                        lastModified: document.LastModified,\n                        documentId: document.id\n                    }, document.id, false, {\n                        fileName: \"/Users/raymond/Desktop/EditorAI/client/editor-ai/app/pages/homepage/ProjectSection.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No projects found matching the search query.\"\n                }, void 0, false, {\n                    fileName: \"/Users/raymond/Desktop/EditorAI/client/editor-ai/app/pages/homepage/ProjectSection.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/raymond/Desktop/EditorAI/client/editor-ai/app/pages/homepage/ProjectSection.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raymond/Desktop/EditorAI/client/editor-ai/app/pages/homepage/ProjectSection.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectSection, \"mv6syj1sdCztogAjUAkxOEq6e5I=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = ProjectSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9ob21lcGFnZS9Qcm9qZWN0U2VjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDZ0I7QUFDUjtBQUVoRCxNQUFNTSxpQkFBaUI7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRTs7SUFDNUMsTUFBTUMsU0FBU0osNkRBQU9BLEdBQUdJLE1BQU07SUFDL0IsZ0NBQWdDO0lBRWhDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUl6Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxnQkFBZ0I7WUFDbEIsTUFBTUMsV0FBVyxNQUFNVCxxRUFBWUEsQ0FBQ0s7WUFFcEMsSUFBSUksU0FBU0MsT0FBTyxJQUFFLGFBQWE7Z0JBQ2pDQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1o7WUFDRixPQUNLO2dCQUNILDRDQUE0QztnQkFDNUNELFFBQVFDLEdBQUcsQ0FBQyxhQUFhSCxXQUFXLCtCQUErQjtnQkFDbkVGLFlBQVlFLFNBQVNDLE9BQU87WUFDOUI7UUFFSjtRQUVBLElBQUksQ0FBQ0osVUFBVTtZQUNiRTtRQUNGO0lBQ0YsR0FBRyxFQUFFLEdBQUcseUNBQXlDO0lBR2pELE1BQU1LLG1CQUFtQlAsV0FBV0EsU0FBU1EsTUFBTSxDQUFDLENBQUNDO1FBQ25ELE9BQU9BLFFBQVFDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNkLFlBQVlhLFdBQVc7SUFDckUsS0FBSyxFQUFFO0lBR1AscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUJqQjs7Ozs7OzBCQUN2Qyw4REFBQ2dCO2dCQUFJQyxXQUFVOzBCQUNkUCxtQkFDQ0EsaUJBQWlCUyxHQUFHLENBQUMsQ0FBQ0MseUJBQ3BCLDhEQUFDeEIsb0RBQVdBO3dCQUVWSSxPQUFPb0IsU0FBU1AsS0FBSzt3QkFDckJRLFNBQVNELFNBQVNFLE9BQU87d0JBQ3pCQyxjQUFjSCxTQUFTSSxZQUFZO3dCQUNuQ0MsWUFBWUwsU0FBU00sRUFBRTt1QkFKbEJOLFNBQVNNLEVBQUU7Ozs7bURBUXBCLDhEQUFDQzs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQXZETTVCOztRQUNXRCx5REFBT0E7OztLQURsQkM7QUF5RE4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2VzL2hvbWVwYWdlL1Byb2plY3RTZWN0aW9uLmpzeD9jZTdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2plY3RJdGVtIGZyb20gJy4vUHJvamVjdEl0ZW0nO1xuaW1wb3J0IHsgZ2V0RG9jdW1lbnRzIH0gZnJvbSAnQC9hcGkvZG9jdW1lbnRfZnVuY3Rpb25zJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xuXG5jb25zdCBQcm9qZWN0U2VjdGlvbiA9ICh7IHRpdGxlLCBzZWFyY2hRdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IHVzZUF1dGgoKS51c2VySWQ7XG4gIC8vIGNvbnN0IHVzZXJJZCA9IHVzZXIudXNlci51aWQ7XG5cbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXREb2N1bWVudHModXNlcklkKTtcblxuICAgICAgICBpZiAocmVzcG9uc2UubWVzc2FnZT09XCJub3QgZm91bmRcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gcHJvamVjdHMgZm91bmQgbWF0Y2hpbmcgdGhlIHNlYXJjaCBxdWVyeS5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIHNldFByb2plY3RDb3VudChyZXNwb25zZS5tZXNzYWdlLmxlbmd0aCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlOicsIHJlc3BvbnNlKTsgLy8gQ2hlY2sgdGhlIHJlc3BvbnNlIHN0cnVjdHVyZVxuICAgICAgICAgIHNldFByb2plY3RzKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgaWYgKCFwcm9qZWN0cykge1xuICAgICAgZmV0Y2hQcm9qZWN0cygpO1xuICAgIH1cbiAgfSwgW10pOyAvLyB1c2VFZmZlY3Qgd2lsbCBydW4gd2hlbiB1c2VySWQgY2hhbmdlc1xuXG5cbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzID8gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3QuVGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgfSkgOiBbXTtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTcwMFwiPnt0aXRsZX08L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtNFwiPiBcbiAgICAgIHtmaWx0ZXJlZFByb2plY3RzID8gKFxuICAgICAgICBmaWx0ZXJlZFByb2plY3RzLm1hcCgoZG9jdW1lbnQpID0+IChcbiAgICAgICAgICA8UHJvamVjdEl0ZW1cbiAgICAgICAgICAgIGtleT17ZG9jdW1lbnQuaWR9XG4gICAgICAgICAgICB0aXRsZT17ZG9jdW1lbnQuVGl0bGV9XG4gICAgICAgICAgICBjb250ZW50PXtkb2N1bWVudC5Db250ZW50fVxuICAgICAgICAgICAgbGFzdE1vZGlmaWVkPXtkb2N1bWVudC5MYXN0TW9kaWZpZWR9XG4gICAgICAgICAgICBkb2N1bWVudElkPXtkb2N1bWVudC5pZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgKSA6IChcbiAgICAgICAgPHA+Tm8gcHJvamVjdHMgZm91bmQgbWF0Y2hpbmcgdGhlIHNlYXJjaCBxdWVyeS48L3A+XG4gICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0U2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2plY3RJdGVtIiwiZ2V0RG9jdW1lbnRzIiwidXNlQXV0aCIsIlByb2plY3RTZWN0aW9uIiwidGl0bGUiLCJzZWFyY2hRdWVyeSIsInVzZXJJZCIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJmZXRjaFByb2plY3RzIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiVGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJkb2N1bWVudCIsImNvbnRlbnQiLCJDb250ZW50IiwibGFzdE1vZGlmaWVkIiwiTGFzdE1vZGlmaWVkIiwiZG9jdW1lbnRJZCIsImlkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/homepage/ProjectSection.jsx\n"));

/***/ })

});