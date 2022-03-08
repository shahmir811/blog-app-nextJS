module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst handler = async (req, res) => {\n  if (req.method === 'POST') {\n    const {\n      email,\n      name,\n      message\n    } = req.body;\n\n    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {\n      res.status(422).json({\n        message: 'Invalid input.'\n      });\n      return;\n    } // Store it in a database\n\n\n    const newMessage = {\n      email,\n      name,\n      message\n    };\n    let client;\n\n    try {\n      // client = await MongoClient.connect(\n      // \t'mongodb+srv://shahmir:ZGEfa42oTR8jV7QV@cluster0.a3owr.mongodb.net/nextjs-blog-app?retryWrites=true&w=majority'\n      // );\n      client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(process.env.DB_CONNECTION_STRING);\n    } catch (error) {\n      res.status(500).json({\n        message: \"Sorry, couldn't connect to the database server\"\n      });\n      return;\n    }\n\n    const db = client.db();\n\n    try {\n      const result = await db.collection('messages').insertOne(newMessage);\n      newMessage.id = result.insertedId;\n    } catch (error) {\n      client.close();\n      res.status(500).json({\n        message: 'Storing message in database server failed'\n      });\n      return;\n    }\n\n    client.close();\n    res.status(201).json({\n      message: 'Successfully stored message!',\n      message: newMessage\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsIm5hbWUiLCJtZXNzYWdlIiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsInN0YXR1cyIsImpzb24iLCJuZXdNZXNzYWdlIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIkRCX0NPTk5FQ1RJT05fU1RSSU5HIiwiZXJyb3IiLCJkYiIsInJlc3VsdCIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJpZCIsImluc2VydGVkSWQiLCJjbG9zZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNuQyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUMxQixVQUFNO0FBQUVDLFdBQUY7QUFBU0MsVUFBVDtBQUFlQztBQUFmLFFBQTJCTCxHQUFHLENBQUNNLElBQXJDOztBQUVBLFFBQUksQ0FBQ0gsS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQ0ksUUFBTixDQUFlLEdBQWYsQ0FBWCxJQUFrQyxDQUFDSCxJQUFuQyxJQUEyQ0EsSUFBSSxDQUFDSSxJQUFMLE9BQWdCLEVBQTNELElBQWlFLENBQUNILE9BQWxFLElBQTZFQSxPQUFPLENBQUNHLElBQVIsT0FBbUIsRUFBcEcsRUFBd0c7QUFDdkdQLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVMLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDQSxLQU55QixDQVExQjs7O0FBQ0EsVUFBTU0sVUFBVSxHQUFHO0FBQ2xCUixXQURrQjtBQUVsQkMsVUFGa0I7QUFHbEJDO0FBSGtCLEtBQW5CO0FBTUEsUUFBSU8sTUFBSjs7QUFFQSxRQUFJO0FBQ0g7QUFDQTtBQUNBO0FBRUFBLFlBQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQW9CQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsb0JBQWhDLENBQWY7QUFDQSxLQU5ELENBTUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2ZqQixTQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTCxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0E7O0FBRUQsVUFBTWMsRUFBRSxHQUFHUCxNQUFNLENBQUNPLEVBQVAsRUFBWDs7QUFFQSxRQUFJO0FBQ0gsWUFBTUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFVBQWQsRUFBMEJDLFNBQTFCLENBQW9DWCxVQUFwQyxDQUFyQjtBQUNBQSxnQkFBVSxDQUFDWSxFQUFYLEdBQWdCSCxNQUFNLENBQUNJLFVBQXZCO0FBQ0EsS0FIRCxDQUdFLE9BQU9OLEtBQVAsRUFBYztBQUNmTixZQUFNLENBQUNhLEtBQVA7QUFDQXhCLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVMLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDQTs7QUFFRE8sVUFBTSxDQUFDYSxLQUFQO0FBQ0F4QixPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTCxhQUFPLEVBQUUsOEJBQVg7QUFBMkNBLGFBQU8sRUFBRU07QUFBcEQsS0FBckI7QUFDQTtBQUNELENBM0NEOztBQTZDZVosc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcblx0aWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuXHRcdGNvbnN0IHsgZW1haWwsIG5hbWUsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG5cdFx0aWYgKCFlbWFpbCB8fCAhZW1haWwuaW5jbHVkZXMoJ0AnKSB8fCAhbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gJycgfHwgIW1lc3NhZ2UgfHwgbWVzc2FnZS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRyZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGlucHV0LicgfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU3RvcmUgaXQgaW4gYSBkYXRhYmFzZVxuXHRcdGNvbnN0IG5ld01lc3NhZ2UgPSB7XG5cdFx0XHRlbWFpbCxcblx0XHRcdG5hbWUsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdH07XG5cblx0XHRsZXQgY2xpZW50O1xuXG5cdFx0dHJ5IHtcblx0XHRcdC8vIGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG5cdFx0XHQvLyBcdCdtb25nb2RiK3NydjovL3NoYWhtaXI6WkdFZmE0Mm9UUjhqVjdRVkBjbHVzdGVyMC5hM293ci5tb25nb2RiLm5ldC9uZXh0anMtYmxvZy1hcHA/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuXHRcdFx0Ly8gKTtcblxuXHRcdFx0Y2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChwcm9jZXNzLmVudi5EQl9DT05ORUNUSU9OX1NUUklORyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJTb3JyeSwgY291bGRuJ3QgY29ubmVjdCB0byB0aGUgZGF0YWJhc2Ugc2VydmVyXCIgfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLmluc2VydE9uZShuZXdNZXNzYWdlKTtcblx0XHRcdG5ld01lc3NhZ2UuaWQgPSByZXN1bHQuaW5zZXJ0ZWRJZDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y2xpZW50LmNsb3NlKCk7XG5cdFx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdTdG9yaW5nIG1lc3NhZ2UgaW4gZGF0YWJhc2Ugc2VydmVyIGZhaWxlZCcgfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y2xpZW50LmNsb3NlKCk7XG5cdFx0cmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IHN0b3JlZCBtZXNzYWdlIScsIG1lc3NhZ2U6IG5ld01lc3NhZ2UgfSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });