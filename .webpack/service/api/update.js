(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../api/update.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../api/update.js":
/*!***************************************************************************!*\
  !*** /Users/admin/Code/work/repos/BuyOnTrust/api/users-api/api/update.js ***!
  \***************************************************************************/
/*! exports provided: byId, consentByPhone, capturePreapproval, captureCheckout */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/admin/Code/work/repos/BuyOnTrust/api/users-api/api/update.js: Unexpected token, expected \",\" (84:26)\n\n\u001b[0m \u001b[90m 82 | \u001b[39m        \u001b[36mconst\u001b[39m user \u001b[33m=\u001b[39m await \u001b[33mUser\u001b[39m\u001b[33m.\u001b[39mfindOneAndUpdate(\u001b[0m\n\u001b[0m \u001b[90m 83 | \u001b[39m            queryPhone\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 84 | \u001b[39m            { $set\u001b[33m:\u001b[39m { meta\u001b[33m.\u001b[39mcheckout\u001b[33m:\u001b[39m put }}\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 85 | \u001b[39m            { \u001b[36mnew\u001b[39m\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 86 | \u001b[39m        )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 87 | \u001b[39m\u001b[0m\n    at Parser.raise (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:6420:17)\n    at Parser.unexpected (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:7773:16)\n    at Parser.expect (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:7759:28)\n    at Parser.parseObj (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9305:14)\n    at Parser.parseExprAtom (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8939:28)\n    at Parser.parseExprSubscripts (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8556:23)\n    at Parser.parseMaybeUnary (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8536:21)\n    at Parser.parseExprOps (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8402:23)\n    at Parser.parseMaybeConditional (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8375:23)\n    at Parser.parseMaybeAssign (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8325:21)\n    at Parser.parseObjectProperty (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9441:101)\n    at Parser.parseObjPropValue (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9466:101)\n    at Parser.parseObjectMember (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9390:10)\n    at Parser.parseObj (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9314:25)\n    at Parser.parseExprAtom (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8939:28)\n    at Parser.parseExprSubscripts (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8556:23)\n    at Parser.parseMaybeUnary (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8536:21)\n    at Parser.parseExprOps (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8402:23)\n    at Parser.parseMaybeConditional (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8375:23)\n    at Parser.parseMaybeAssign (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8325:21)\n    at Parser.parseExprListItem (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9659:18)\n    at Parser.parseCallExpressionArguments (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8774:22)\n    at Parser.parseSubscript (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8661:29)\n    at Parser.parseSubscripts (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8577:19)\n    at Parser.parseExprSubscripts (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8566:17)\n    at Parser.parseMaybeUnary (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8536:21)\n    at Parser.parseAwait (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9759:28)\n    at Parser.parseMaybeUnary (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8501:19)\n    at Parser.parseExprOps (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8402:23)\n    at Parser.parseMaybeConditional (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8375:23)\n    at Parser.parseMaybeAssign (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:8325:21)\n    at Parser.parseVar (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10660:26)\n    at Parser.parseVarStatement (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10479:10)\n    at Parser.parseStatementContent (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10076:21)\n    at Parser.parseStatement (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10009:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10585:25)\n    at Parser.parseBlockBody (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10572:10)\n    at Parser.parseBlock (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10556:10)\n    at Parser.parseTryStatement (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10444:23)\n    at Parser.parseStatementContent (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10066:21)\n    at Parser.parseStatement (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10009:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10585:25)\n    at Parser.parseBlockBody (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10572:10)\n    at Parser.parseBlock (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10556:10)\n    at Parser.parseFunctionBody (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9584:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9554:10)\n    at withTopicForbiddingContext (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10717:12)\n    at Parser.withTopicForbiddingContext (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9884:14)\n    at Parser.parseFunction (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10716:10)\n    at Parser.parseFunctionStatement (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10357:17)\n    at Parser.parseStatementContent (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10132:25)\n    at Parser.parseStatement (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10009:17)\n    at Parser.parseExportDeclaration (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:11194:17)\n    at Parser.maybeParseExportDeclaration (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:11150:31)\n    at Parser.parseExport (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:11079:29)\n    at Parser.parseStatementContent (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10113:27)\n    at Parser.parseStatement (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10009:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10585:25)\n    at Parser.parseBlockBody (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:10572:10)\n    at Parser.parseTopLevel (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:9940:10)\n    at Parser.parse (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:11447:17)\n    at parse (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/parser/lib/index.js:11483:38)\n    at parser (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\n    at normalizeFile (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\n    at runSync (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/admin/Code/work/repos/BuyOnTrust/api/users-api/node_modules/@babel/core/lib/transform.js:34:34)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickDomainCallback (internal/process/next_tick.js:218:9)");

/***/ })

/******/ })));
//# sourceMappingURL=update.js.map