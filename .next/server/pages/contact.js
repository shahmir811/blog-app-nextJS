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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/contact/contact-form.js":
/*!********************************************!*\
  !*** ./components/contact/contact-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n\nvar _jsxFileName = \"/home/shahmir/projects/udemy/maximillian/nextjs/complete-blog/components/contact/contact-form.js\";\n\n\n\n\nasync function sendContactData(contactDetails) {\n  const response = await fetch('/api/contact', {\n    method: 'POST',\n    body: JSON.stringify(contactDetails),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  });\n  const data = await response.json();\n\n  if (!response.ok) {\n    throw new Error(data.message || 'Something went wrong!');\n  }\n}\n\nfunction ContactForm() {\n  const {\n    0: enteredEmail,\n    1: setEnteredEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: enteredName,\n    1: setEnteredName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: enteredMessage,\n    1: setEnteredMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: requestStatus,\n    1: setRequestStatus\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(); // 'pending', 'success', 'error'\n\n  const {\n    0: requestError,\n    1: setRequestError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (requestStatus === 'success' || requestStatus === 'error') {\n      const timer = setTimeout(() => {\n        setRequestStatus(null);\n        setRequestError(null);\n      }, 3000);\n      return () => clearTimeout(timer);\n    }\n  }, [requestStatus]);\n\n  async function sendMessageHandler(event) {\n    event.preventDefault(); // optional: add client-side validation\n\n    setRequestStatus('pending');\n\n    try {\n      await sendContactData({\n        email: enteredEmail,\n        name: enteredName,\n        message: enteredMessage\n      });\n      setRequestStatus('success');\n      setEnteredMessage('');\n      setEnteredEmail('');\n      setEnteredName('');\n    } catch (error) {\n      setRequestError(error.message);\n      setRequestStatus('error');\n    }\n  }\n\n  let notification;\n\n  if (requestStatus === 'pending') {\n    notification = {\n      status: 'pending',\n      title: 'Sending message...',\n      message: 'Your message is on its way!'\n    };\n  }\n\n  if (requestStatus === 'success') {\n    notification = {\n      status: 'success',\n      title: 'Success!',\n      message: 'Message sent successfully!'\n    };\n  }\n\n  if (requestStatus === 'error') {\n    notification = {\n      status: 'error',\n      title: 'Error!',\n      message: requestError\n    };\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"How can I help you?\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n      onSubmit: sendMessageHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.controls,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"email\",\n            children: \"Your Email\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"email\",\n            id: \"email\",\n            required: true,\n            value: enteredEmail,\n            onChange: event => setEnteredEmail(event.target.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"name\",\n            children: \"Your Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            required: true,\n            value: enteredName,\n            onChange: event => setEnteredName(event.target.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"message\",\n          children: \"Your Message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"message\",\n          rows: \"5\",\n          required: true,\n          value: enteredMessage,\n          onChange: event => setEnteredMessage(event.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Send Message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 4\n    }, this), notification && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_notification__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      status: notification.status,\n      title: notification.title,\n      message: notification.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzP2FmOTQiXSwibmFtZXMiOlsic2VuZENvbnRhY3REYXRhIiwiY29udGFjdERldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiZW50ZXJlZEVtYWlsIiwic2V0RW50ZXJlZEVtYWlsIiwidXNlU3RhdGUiLCJlbnRlcmVkTmFtZSIsInNldEVudGVyZWROYW1lIiwiZW50ZXJlZE1lc3NhZ2UiLCJzZXRFbnRlcmVkTWVzc2FnZSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwicmVxdWVzdEVycm9yIiwic2V0UmVxdWVzdEVycm9yIiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2VuZE1lc3NhZ2VIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsIiwibmFtZSIsImVycm9yIiwibm90aWZpY2F0aW9uIiwic3RhdHVzIiwidGl0bGUiLCJjbGFzc2VzIiwiY29udGFjdCIsImZvcm0iLCJjb250cm9scyIsImNvbnRyb2wiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsZUFBZUEsZUFBZixDQUErQkMsY0FBL0IsRUFBK0M7QUFDOUMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQzVDQyxVQUFNLEVBQUUsTUFEb0M7QUFFNUNDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLGNBQWYsQ0FGc0M7QUFHNUNPLFdBQU8sRUFBRTtBQUNSLHNCQUFnQjtBQURSO0FBSG1DLEdBQWpCLENBQTVCO0FBUUEsUUFB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VDtBQUlDLGVBQUssRUFBRXZCLGNBSlI7QUFLQyxrQkFBUSxFQUFFVyxLQUFLLElBQUlWLGlCQUFpQixDQUFDVSxLQUFLLENBQUNhLE1BQU4sQ0FBYUMsS0FBZDtBQUxyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRCxlQWlDQztBQUFLLGlCQUFTLEVBQUVOLCtEQUFPLENBQUNPLE9BQXhCO0FBQUEsK0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELEVBdUNFVixZQUFZLGlCQUNaLHFFQUFDLHdEQUFEO0FBQWMsWUFBTSxFQUFFQSxZQUFZLENBQUNDLE1BQW5DO0FBQTJDLFdBQUssRUFBRUQsWUFBWSxDQUFDRSxLQUEvRDtBQUFzRSxhQUFPLEVBQUVGLFlBQVksQ0FBQ3ZCO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE2Q0E7O0FBRWNDLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29udGFjdC1mb3JtLm1vZHVsZS5jc3MnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi91aS9ub3RpZmljYXRpb24nO1xuXG5hc3luYyBmdW5jdGlvbiBzZW5kQ29udGFjdERhdGEoY29udGFjdERldGFpbHMpIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jb250YWN0Jywge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhY3REZXRhaWxzKSxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuXHRjb25zdCBbZW50ZXJlZEVtYWlsLCBzZXRFbnRlcmVkRW1haWxdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbZW50ZXJlZE5hbWUsIHNldEVudGVyZWROYW1lXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2VudGVyZWRNZXNzYWdlLCBzZXRFbnRlcmVkTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKCk7IC8vICdwZW5kaW5nJywgJ3N1Y2Nlc3MnLCAnZXJyb3InXG5cdGNvbnN0IFtyZXF1ZXN0RXJyb3IsIHNldFJlcXVlc3RFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHJlcXVlc3RTdGF0dXMgPT09ICdzdWNjZXNzJyB8fCByZXF1ZXN0U3RhdHVzID09PSAnZXJyb3InKSB7XG5cdFx0XHRjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXRSZXF1ZXN0U3RhdHVzKG51bGwpO1xuXHRcdFx0XHRzZXRSZXF1ZXN0RXJyb3IobnVsbCk7XG5cdFx0XHR9LCAzMDAwKTtcblxuXHRcdFx0cmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0fVxuXHR9LCBbcmVxdWVzdFN0YXR1c10pO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlSGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQvLyBvcHRpb25hbDogYWRkIGNsaWVudC1zaWRlIHZhbGlkYXRpb25cblxuXHRcdHNldFJlcXVlc3RTdGF0dXMoJ3BlbmRpbmcnKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBzZW5kQ29udGFjdERhdGEoe1xuXHRcdFx0XHRlbWFpbDogZW50ZXJlZEVtYWlsLFxuXHRcdFx0XHRuYW1lOiBlbnRlcmVkTmFtZSxcblx0XHRcdFx0bWVzc2FnZTogZW50ZXJlZE1lc3NhZ2UsXG5cdFx0XHR9KTtcblx0XHRcdHNldFJlcXVlc3RTdGF0dXMoJ3N1Y2Nlc3MnKTtcblx0XHRcdHNldEVudGVyZWRNZXNzYWdlKCcnKTtcblx0XHRcdHNldEVudGVyZWRFbWFpbCgnJyk7XG5cdFx0XHRzZXRFbnRlcmVkTmFtZSgnJyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHNldFJlcXVlc3RFcnJvcihlcnJvci5tZXNzYWdlKTtcblx0XHRcdHNldFJlcXVlc3RTdGF0dXMoJ2Vycm9yJyk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IG5vdGlmaWNhdGlvbjtcblxuXHRpZiAocmVxdWVzdFN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG5cdFx0bm90aWZpY2F0aW9uID0ge1xuXHRcdFx0c3RhdHVzOiAncGVuZGluZycsXG5cdFx0XHR0aXRsZTogJ1NlbmRpbmcgbWVzc2FnZS4uLicsXG5cdFx0XHRtZXNzYWdlOiAnWW91ciBtZXNzYWdlIGlzIG9uIGl0cyB3YXkhJyxcblx0XHR9O1xuXHR9XG5cblx0aWYgKHJlcXVlc3RTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuXHRcdG5vdGlmaWNhdGlvbiA9IHtcblx0XHRcdHN0YXR1czogJ3N1Y2Nlc3MnLFxuXHRcdFx0dGl0bGU6ICdTdWNjZXNzIScsXG5cdFx0XHRtZXNzYWdlOiAnTWVzc2FnZSBzZW50IHN1Y2Nlc3NmdWxseSEnLFxuXHRcdH07XG5cdH1cblxuXHRpZiAocmVxdWVzdFN0YXR1cyA9PT0gJ2Vycm9yJykge1xuXHRcdG5vdGlmaWNhdGlvbiA9IHtcblx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdHRpdGxlOiAnRXJyb3IhJyxcblx0XHRcdG1lc3NhZ2U6IHJlcXVlc3RFcnJvcixcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdH0+XG5cdFx0XHQ8aDE+SG93IGNhbiBJIGhlbHAgeW91PzwvaDE+XG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3NlbmRNZXNzYWdlSGFuZGxlcn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+WW91ciBFbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT0nZW1haWwnXG5cdFx0XHRcdFx0XHRcdGlkPSdlbWFpbCdcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2VudGVyZWRFbWFpbH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHNldEVudGVyZWRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSduYW1lJz5Zb3VyIE5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdGlkPSduYW1lJ1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW50ZXJlZE5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbnRlcmVkTmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdtZXNzYWdlJz5Zb3VyIE1lc3NhZ2U8L2xhYmVsPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0aWQ9J21lc3NhZ2UnXG5cdFx0XHRcdFx0XHRyb3dzPSc1J1xuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdHZhbHVlPXtlbnRlcmVkTWVzc2FnZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbnRlcmVkTWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpfT48L3RleHRhcmVhPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cblx0XHRcdFx0XHQ8YnV0dG9uPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHRcdHtub3RpZmljYXRpb24gJiYgKFxuXHRcdFx0XHQ8Tm90aWZpY2F0aW9uIHN0YXR1cz17bm90aWZpY2F0aW9uLnN0YXR1c30gdGl0bGU9e25vdGlmaWNhdGlvbi50aXRsZX0gbWVzc2FnZT17bm90aWZpY2F0aW9uLm1lc3NhZ2V9IC8+XG5cdFx0XHQpfVxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n");

/***/ }),

/***/ "./components/contact/contact-form.module.css":
/*!****************************************************!*\
  !*** ./components/contact/contact-form.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"contact\": \"contact-form_contact__2DYss\",\n\t\"form\": \"contact-form_form__1RTmV\",\n\t\"controls\": \"contact-form_controls__3o80h\",\n\t\"control\": \"contact-form_control__1hqvU\",\n\t\"actions\": \"contact-form_actions__RzW-v\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLm1vZHVsZS5jc3M/MGJjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFjdFwiOiBcImNvbnRhY3QtZm9ybV9jb250YWN0X18yRFlzc1wiLFxuXHRcImZvcm1cIjogXCJjb250YWN0LWZvcm1fZm9ybV9fMVJUbVZcIixcblx0XCJjb250cm9sc1wiOiBcImNvbnRhY3QtZm9ybV9jb250cm9sc19fM284MGhcIixcblx0XCJjb250cm9sXCI6IFwiY29udGFjdC1mb3JtX2NvbnRyb2xfXzFocXZVXCIsXG5cdFwiYWN0aW9uc1wiOiBcImNvbnRhY3QtZm9ybV9hY3Rpb25zX19SelctdlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/contact/contact-form.module.css\n");

/***/ }),

/***/ "./components/ui/notification.js":
/*!***************************************!*\
  !*** ./components/ui/notification.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.module.css */ \"./components/ui/notification.module.css\");\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/shahmir/projects/udemy/maximillian/nextjs/complete-blog/components/ui/notification.js\";\n\n\n\nfunction Notification(props) {\n  const {\n    title,\n    message,\n    status\n  } = props;\n  let statusClasses = '';\n\n  if (status === 'success') {\n    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.success;\n  }\n\n  if (status === 'error') {\n    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error;\n  }\n\n  const cssClasses = `${_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notification} ${statusClasses}`;\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: cssClasses,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }, this), document.getElementById('notifications'));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5qcz8wZWExIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbiIsInByb3BzIiwidGl0bGUiLCJtZXNzYWdlIiwic3RhdHVzIiwic3RhdHVzQ2xhc3NlcyIsImNsYXNzZXMiLCJzdWNjZXNzIiwiZXJyb3IiLCJjc3NDbGFzc2VzIiwibm90aWZpY2F0aW9uIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzVCLFFBQU07QUFBRUMsU0FBRjtBQUFTQyxXQUFUO0FBQWtCQztBQUFsQixNQUE2QkgsS0FBbkM7QUFFQSxNQUFJSSxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsTUFBSUQsTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDekJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNDLE9BQXhCO0FBQ0E7O0FBRUQsTUFBSUgsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDdkJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNFLEtBQXhCO0FBQ0E7O0FBRUQsUUFBTUMsVUFBVSxHQUFJLEdBQUVILCtEQUFPLENBQUNJLFlBQWEsSUFBR0wsYUFBYyxFQUE1RDtBQUVBLHNCQUFPTSxnREFBUSxDQUFDQyxZQUFULGVBQ047QUFBSyxhQUFTLEVBQUVILFVBQWhCO0FBQUEsNEJBQ0M7QUFBQSxnQkFBS1A7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLGdCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETSxFQUtOVSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FMTSxDQUFQO0FBT0E7O0FBRWNkLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbihwcm9wcykge1xuXHRjb25zdCB7IHRpdGxlLCBtZXNzYWdlLCBzdGF0dXMgfSA9IHByb3BzO1xuXG5cdGxldCBzdGF0dXNDbGFzc2VzID0gJyc7XG5cblx0aWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG5cdFx0c3RhdHVzQ2xhc3NlcyA9IGNsYXNzZXMuc3VjY2Vzcztcblx0fVxuXG5cdGlmIChzdGF0dXMgPT09ICdlcnJvcicpIHtcblx0XHRzdGF0dXNDbGFzc2VzID0gY2xhc3Nlcy5lcnJvcjtcblx0fVxuXG5cdGNvbnN0IGNzc0NsYXNzZXMgPSBgJHtjbGFzc2VzLm5vdGlmaWNhdGlvbn0gJHtzdGF0dXNDbGFzc2VzfWA7XG5cblx0cmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3NzQ2xhc3Nlc30+XG5cdFx0XHQ8aDI+e3RpdGxlfTwvaDI+XG5cdFx0XHQ8cD57bWVzc2FnZX08L3A+XG5cdFx0PC9kaXY+LFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25zJylcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/notification.js\n");

/***/ }),

/***/ "./components/ui/notification.module.css":
/*!***********************************************!*\
  !*** ./components/ui/notification.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"notification\": \"notification_notification__3oWBf\",\n\t\"success\": \"notification_success__3Hbna\",\n\t\"error\": \"notification_error__1LYKp\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzPzQ3ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5vdGlmaWNhdGlvblwiOiBcIm5vdGlmaWNhdGlvbl9ub3RpZmljYXRpb25fXzNvV0JmXCIsXG5cdFwic3VjY2Vzc1wiOiBcIm5vdGlmaWNhdGlvbl9zdWNjZXNzX18zSGJuYVwiLFxuXHRcImVycm9yXCI6IFwibm90aWZpY2F0aW9uX2Vycm9yX18xTFlLcFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/notification.module.css\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_contact_contact_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contact/contact-form */ \"./components/contact/contact-form.js\");\n\n\nvar _jsxFileName = \"/home/shahmir/projects/udemy/maximillian/nextjs/complete-blog/pages/contact.js\";\n\n\n\nfunction ContactPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Contact Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Send me your message\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_contact_contact_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUN0QixzQkFDQztBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRDtBQUFBLGtCQUREO0FBU0E7O0FBRWNBLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybSc7XG5cbmZ1bmN0aW9uIENvbnRhY3RQYWdlKCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkNvbnRhY3QgTWU8L3RpdGxlPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nU2VuZCBtZSB5b3VyIG1lc3NhZ2UnIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8Q29udGFjdEZvcm0gLz5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

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