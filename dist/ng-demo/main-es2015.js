(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js ***!
  \*************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<div class=\"app-container\">\n  <app-sidebars></app-sidebars>\n  <div class=\"app-main\">\n    <app-headers></app-headers>\n    <!-- 主体内容放在这里 -->\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cars/battery/battery.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cars/battery/battery.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding: 0 20px;\">\n  <div>\n    <div class=\"mb-3\" style=\"margin-top: 20px;\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"搜索型号\" [(ngModel)]=\"searchTerm\" (input)=\"onSearch()\">\n    </div>\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">型号</th>\n          <th scope=\"col\">容量</th>\n          <th scope=\"col\">电压</th>\n          <th scope=\"col\">类型</th>\n          <th scope=\"col\">使用寿命</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let car of filteredCars; let i = index\">\n          <td>{{ i + 1 + (currentPage - 1) * itemsPerPage }}</td>\n          <td>{{ car.model }}</td>\n          <td>{{ car.capacity }}</td>\n          <td>{{ car.voltage }}</td>\n          <td>{{ car.type }}</td>\n          <td>{{ car.serviceLife | currency }}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <nav aria-label=\"Page navigation\" style=\"display: flex; flex-direction: row-reverse;\">\n      <ul class=\"pagination\">\n        <li class=\"page-item\" *ngFor=\"let page of pages\" [class.active]=\"page === currentPage\">\n          <a class=\"page-link\" [routerLink]=\"['/cars']\" [queryParams]=\"{ page: page }\">{{ page }}</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cars/cars.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cars/cars.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding: 0 20px;\">\n  <ul class=\"nav nav-tabs\" id=\"myTabs\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" routerLink=\"/cars\">车辆列表</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/cars/parts\">汽配零部件</a>\n    </li>\n  </ul>\n  <div>\n    <div class=\"mb-3\" style=\"margin-top: 20px;\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"搜索型号、颜色、年份\" [(ngModel)]=\"searchTerm\" (input)=\"onSearch()\">\n    </div>\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">车型</th>\n          <th scope=\"col\">制造商</th>\n          <th scope=\"col\">生产年份</th>\n          <th scope=\"col\">颜色</th>\n          <th scope=\"col\">价格</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let car of filteredCars; let i = index\">\n          <td>{{ i + 1 + (currentPage - 1) * itemsPerPage }}</td>\n          <td>{{ car.model }}</td>\n          <td>{{ car.manufacturer }}</td>\n          <td>{{ car.year }}</td>\n          <td>{{ car.color }}</td>\n          <td>{{ car.price | currency }}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <nav aria-label=\"Page navigation\" style=\"display: flex; flex-direction: row-reverse;\">\n      <ul class=\"pagination\">\n        <li class=\"page-item\" *ngFor=\"let page of pages\" [class.active]=\"page === currentPage\">\n          <a class=\"page-link\" [routerLink]=\"['/cars']\" [queryParams]=\"{ page: page }\">{{ page }}</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cars/parts/parts.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cars/parts/parts.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding: 0 20px;\">\n  <ul class=\"nav nav-tabs\" id=\"myTabs\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/cars\">车辆列表</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" routerLink=\"/cars/parts\">汽配零部件</a>\n    </li>\n  </ul>\n  <!-- Search bar -->\n  <div class=\"mb-3\" style=\"margin-top: 20px;\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"搜索零部件\" [(ngModel)]=\"searchTerm\" (input)=\"onSearch()\">\n  </div>\n\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">零部件名称</th>\n        <th scope=\"col\">零部件编号</th>\n        <th scope=\"col\">制造商</th>\n        <th scope=\"col\">适用车型</th>\n        <th scope=\"col\">价格</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let part of pagedParts; let i = index\">\n        <td>{{ i + 1 + (currentPage - 1) * itemsPerPage }}</td>\n        <td>{{ part.name }}</td>\n        <td>{{ part.partNumber }}</td>\n        <td>{{ part.manufacturer }}</td>\n        <td>{{ part.compatibleModels.join(', ') }}</td>\n        <td>{{ part.price | currency }}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <nav aria-label=\"Page navigation\" style=\"display: flex; flex-direction: row-reverse;\">\n    <ul class=\"pagination\">\n      <li class=\"page-item\" *ngFor=\"let page of pages\" [class.active]=\"page === currentPage\">\n        <a class=\"page-link\" [routerLink]=\"['/cars/parts']\" [queryParams]=\"{ page: page }\">{{ page }}</a>\n      </li>\n    </ul>\n  </nav>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/headers/headers.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/headers/headers.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"py-3 mb-4 border-bottom\">\n  <div class=\"container d-flex flex-wrap justify-content-center\">\n    <div class=\"d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none\">\n      \n    </div>\n    <form class=\"col-12 col-lg-auto mb-3 mb-lg-0\" role=\"search\">\n      <input type=\"search\" class=\"form-control\" placeholder=\"Search...\" aria-label=\"Search\">\n    </form>\n  </div>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/sidebars/sidebars.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/sidebars/sidebars.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-shrink-0 p-3\" style=\"width: 280px; height: 100vh; border-right: 1px solid #eee;\">\n  <a routerLink=\"/\" class=\"d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom\">\n    <svg class=\"bi pe-none me-2\" width=\"30\" height=\"24\"><use xlink:href=\"#bootstrap\"/></svg>\n    <span class=\"fs-5 fw-semibold\">本田汽车</span>\n  </a>\n  <ul class=\"list-unstyled ps-0\">\n    <li class=\"mb-1\">\n      <button class=\"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#home-collapse\" aria-expanded=\"true\">\n        车辆管理\n      </button>\n      <div class=\"collapse show\" id=\"home-collapse\">\n        <ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">\n          <li><a routerLink=\"/cars\" class=\"link-body-emphasis d-inline-flex text-decoration-none rounded\">车辆列表</a></li>\n          <li><a routerLink=\"/cars/battery\" class=\"link-body-emphasis d-inline-flex text-decoration-none rounded\">电池配置</a></li>\n        </ul>\n      </div>\n    </li>\n    <li class=\"mb-1\">\n      <button class=\"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#dashboard-collapse\" aria-expanded=\"false\">\n        订单管理\n      </button>\n      <div class=\"collapse\" id=\"dashboard-collapse\">\n        <ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">\n          <li><a routerLink=\"/orders\" class=\"link-body-emphasis d-inline-flex text-decoration-none rounded\">订单列表</a></li>\n          <li><a routerLink=\"/pays\" class=\"link-body-emphasis d-inline-flex text-decoration-none rounded\">支付管理</a></li>\n          <li><a routerLink=\"/refund\" class=\"link-body-emphasis d-inline-flex text-decoration-none rounded\">退货管理</a></li>\n        </ul>\n      </div>\n    </li>\n    <li class=\"mb-1\">\n      <button class=\"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#orders-collapse\" aria-expanded=\"false\">\n        系统设置\n      </button>\n      <div class=\"collapse\" id=\"orders-collapse\">\n        <ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">\n          <li><a routerLink=\"/setting\" class=\"link-body-emphasis d-inline-flex text-decoration-none rounded\">基本设置</a></li>\n          <li><a routerLink=\"/setting/permission\" class=\"link-body-emphasis d-inline-flex text-decoration-none rounded\">权限设置</a></li>\n        </ul>\n      </div>\n    </li>\n    <li class=\"border-top my-3\"></li>\n    <li class=\"mb-1\">\n      <button class=\"btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#account-collapse\" aria-expanded=\"false\">\n        用户管理\n      </button>\n      <div class=\"collapse\" id=\"account-collapse\">\n        <ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">\n          <li><a routerLink=\"/user\" class=\"link-body-emphasis d-inline-flex text-decoration-none rounded\">个人信息</a></li>\n          <li><a routerLink=\"/user/setting\" class=\"link-body-emphasis d-inline-flex text-decoration-none rounded\">用户设置</a></li>\n          <li><a routerLink=\"/user/logout\" class=\"link-body-emphasis d-inline-flex text-decoration-none rounded\">退出</a></li>\n        </ul>\n      </div>\n    </li>\n  </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>customers works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dashboard works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"container mt-2\">欢迎来到本田汽车</h1>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>orders works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pays/pays.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pays/pays.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-4\">\n  <h2>支付配置</h2>\n  <!-- #paysForm=\"ngForm\" -->\n  <form (ngSubmit)=\"submitForm()\">\n    <div class=\"form-group mb-3\">\n      <label for=\"cardNumber\">卡号</label>\n      <input type=\"text\" class=\"form-control\" id=\"cardNumber\" name=\"cardNumber\" [(ngModel)]=\"pays.cardNumber\" required>\n    </div>\n\n    <div class=\"form-group mb-3\">\n      <label for=\"cardHolder\">持卡人姓名</label>\n      <input type=\"text\" class=\"form-control\" id=\"cardHolder\" name=\"cardHolder\" [(ngModel)]=\"pays.cardHolder\" required>\n    </div>\n\n    <div class=\"form-group mb-3\">\n      <label for=\"expirationDate\">过期日期</label>\n      <input type=\"text\" class=\"form-control\" id=\"expirationDate\" name=\"expirationDate\" [(ngModel)]=\"pays.expirationDate\" required>\n    </div>\n\n    <div class=\"form-group mb-3\">\n      <label for=\"cvv\">CVV</label>\n      <input type=\"text\" class=\"form-control\" id=\"cvv\" name=\"cvv\" [(ngModel)]=\"pays.cvv\" required>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">提交</button>\n  </form>\n\n  <!-- Bootstrap 5 Alert for displaying messages -->\n  <div *ngIf=\"paymentSuccess\" class=\"alert alert-success alert-dismissible fade show fixed-top\" role=\"alert\">\n    <strong>{{paymentSuccess}}</strong>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"closeAlert()\"></button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>products works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/refund/refund.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/refund/refund.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>refund works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/permission/permission.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/permission/permission.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>permission works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>setting works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/logout/logout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/logout/logout.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>logout works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-setting/user-setting.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-setting/user-setting.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-4\">\n  <h2>用户设置</h2>\n  <form (ngSubmit)=\"submitForm()\">\n    <div class=\"form-group mb-3\">\n      <label for=\"cardNumber\">用户名</label>\n      <input type=\"text\" class=\"form-control\" id=\"cardNumber\" name=\"cardNumber\" [(ngModel)]=\"userForm.name\" required>\n    </div>\n\n    <div class=\"form-group mb-3\">\n      <label for=\"cardHolder\">邮箱</label>\n      <input type=\"text\" class=\"form-control\" id=\"cardHolder\" name=\"cardHolder\" [(ngModel)]=\"userForm.email\" required>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">更新</button>\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h2>用户信息</h2>\n  <div>基于 @ngrx 数据同步</div>\n  <pre>{{ userData$ | async | json }}</pre>\n</div>");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/.pnpm/@angular+router@8.2.14_@angular+common@8.2.14_@angular+core@8.2.14_@angular+platform-browser@8.2.14_rxjs@6.4.0/node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _cars_cars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cars/cars.component */ "./src/app/cars/cars.component.ts");
/* harmony import */ var _cars_battery_battery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cars/battery/battery.component */ "./src/app/cars/battery/battery.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _setting_permission_permission_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./setting/permission/permission.component */ "./src/app/setting/permission/permission.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user-setting/user-setting.component */ "./src/app/user/user-setting/user-setting.component.ts");
/* harmony import */ var _user_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/logout/logout.component */ "./src/app/user/logout/logout.component.ts");
/* harmony import */ var _cars_parts_parts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cars/parts/parts.component */ "./src/app/cars/parts/parts.component.ts");
/* harmony import */ var _refund_refund_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./refund/refund.component */ "./src/app/refund/refund.component.ts");
/* harmony import */ var _pays_pays_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pays/pays.component */ "./src/app/pays/pays.component.ts");


















const routes = [
    {
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"],
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
    },
    {
        path: 'orders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"],
    },
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
    },
    {
        path: 'customers',
        component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_7__["CustomersComponent"],
    },
    { path: 'cars', component: _cars_cars_component__WEBPACK_IMPORTED_MODULE_8__["CarsComponent"] },
    { path: 'cars/battery', component: _cars_battery_battery_component__WEBPACK_IMPORTED_MODULE_9__["BatteryComponent"] },
    { path: 'cars/parts', component: _cars_parts_parts_component__WEBPACK_IMPORTED_MODULE_15__["PartsComponent"] },
    { path: 'setting', component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_10__["SettingComponent"] },
    { path: 'setting/permission', component: _setting_permission_permission_component__WEBPACK_IMPORTED_MODULE_11__["PermissionComponent"] },
    { path: 'refund', component: _refund_refund_component__WEBPACK_IMPORTED_MODULE_16__["RefundComponent"] },
    { path: 'pays', component: _pays_pays_component__WEBPACK_IMPORTED_MODULE_17__["PaysComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"] },
    { path: 'user/setting', component: _user_user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_13__["UserSettingComponent"] },
    { path: 'user/logout', component: _user_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* styles.css (全局样式文件) */\n.app-container {\n  display: flex;\n}\n.app-main {\n  flex: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9FOi9jb2RlL2NvZGUuZ2l0aHViL25nLWRlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCO0FDRXhCO0VBQ0UsYUFBQTtBREFGO0FDR0E7RUFDRSxPQUFBO0FEREYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZXMuY3NzICjlhajlsYDmoLflvI/mlofku7YpICovXG4uYXBwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYXBwLW1haW4ge1xuICBmbGV4OiAxO1xufVxuIiwiLyogc3R5bGVzLmNzcyAo5YWo5bGA5qC35byP5paH5Lu2KSAqL1xuXG4uYXBwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hcHAtbWFpbiB7XG4gIGZsZXg6IDE7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng-demo';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/.pnpm/@angular+platform-browser@8.2.14_@angular+common@8.2.14_@angular+core@8.2.14/node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/.pnpm/@angular+forms@8.2.14_@angular+common@8.2.14_@angular+core@8.2.14_@angular+platform-browser@8.2.14_rxjs@6.4.0/node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/.pnpm/@angular+common@8.2.14_@angular+core@8.2.14_rxjs@6.4.0/node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _common_headers_headers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/headers/headers.component */ "./src/app/common/headers/headers.component.ts");
/* harmony import */ var _common_sidebars_sidebars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/sidebars/sidebars.component */ "./src/app/common/sidebars/sidebars.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _cars_battery_battery_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cars/battery/battery.component */ "./src/app/cars/battery/battery.component.ts");
/* harmony import */ var _pays_pays_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pays/pays.component */ "./src/app/pays/pays.component.ts");
/* harmony import */ var _refund_refund_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./refund/refund.component */ "./src/app/refund/refund.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _setting_permission_permission_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./setting/permission/permission.component */ "./src/app/setting/permission/permission.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/logout/logout.component */ "./src/app/user/logout/logout.component.ts");
/* harmony import */ var _cars_cars_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cars/cars.component */ "./src/app/cars/cars.component.ts");
/* harmony import */ var _user_user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/user-setting/user-setting.component */ "./src/app/user/user-setting/user-setting.component.ts");
/* harmony import */ var _cars_parts_parts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cars/parts/parts.component */ "./src/app/cars/parts/parts.component.ts");
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../store/store.service */ "./src/store/store.service.ts");
/* harmony import */ var src_store_app_state__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/store/app.state */ "./src/store/app.state.ts");









// common
















// store


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
            _common_headers_headers_component__WEBPACK_IMPORTED_MODULE_9__["HeadersComponent"],
            _common_sidebars_sidebars_component__WEBPACK_IMPORTED_MODULE_10__["SidebarsComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"],
            _customers_customers_component__WEBPACK_IMPORTED_MODULE_14__["CustomersComponent"],
            _cars_battery_battery_component__WEBPACK_IMPORTED_MODULE_15__["BatteryComponent"],
            _pays_pays_component__WEBPACK_IMPORTED_MODULE_16__["PaysComponent"],
            _refund_refund_component__WEBPACK_IMPORTED_MODULE_17__["RefundComponent"],
            _setting_setting_component__WEBPACK_IMPORTED_MODULE_18__["SettingComponent"],
            _setting_permission_permission_component__WEBPACK_IMPORTED_MODULE_19__["PermissionComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"],
            _user_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"],
            _cars_cars_component__WEBPACK_IMPORTED_MODULE_22__["CarsComponent"],
            _user_user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_23__["UserSettingComponent"],
            _cars_parts_parts_component__WEBPACK_IMPORTED_MODULE_24__["PartsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(src_store_app_state__WEBPACK_IMPORTED_MODULE_26__["reducers"])
        ],
        providers: [_store_store_service__WEBPACK_IMPORTED_MODULE_25__["StoreService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cars/battery/battery.component.less":
/*!*****************************************************!*\
  !*** ./src/app/cars/battery/battery.component.less ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9iYXR0ZXJ5L0U6L2NvZGUvY29kZS5naXRodWIvbmctZGVtby9zcmMvYXBwL2NhcnMvYmF0dGVyeS9iYXR0ZXJ5LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jYXJzL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY2Fycy9iYXR0ZXJ5L2JhdHRlcnkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn0iLCIubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/cars/battery/battery.component.ts":
/*!***************************************************!*\
  !*** ./src/app/cars/battery/battery.component.ts ***!
  \***************************************************/
/*! exports provided: BatteryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryComponent", function() { return BatteryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _battery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battery.service */ "./src/app/cars/battery/battery.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/.pnpm/@angular+router@8.2.14_@angular+common@8.2.14_@angular+core@8.2.14_@angular+platform-browser@8.2.14_rxjs@6.4.0/node_modules/@angular/router/fesm2015/router.js");




let BatteryComponent = class BatteryComponent {
    constructor(carService, route) {
        this.carService = carService;
        this.route = route;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.searchTerm = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.currentPage = +params['page'] || 1;
            this.loadCars();
        });
    }
    loadCars() {
        this.cars = this.carService.getCars();
        // Apply search filter
        this.filterCars();
        // Calculate total number of pages
        const totalPages = Math.ceil(this.filteredCars.length / this.itemsPerPage);
        console.log(this.filteredCars.length);
        this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        // Paginate the filtered cars
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        this.filteredCars = this.filteredCars.slice(startIndex, startIndex + this.itemsPerPage);
    }
    onSearch() {
        this.currentPage = 1; // Reset to the first page when performing a new search
        this.loadCars();
    }
    filterCars() {
        if (!this.searchTerm) {
            this.filteredCars = this.cars; // If no search term, show all cars
        }
        else {
            const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
            this.filteredCars = this.cars.filter(car => car.model.toLowerCase().includes(lowerCaseSearchTerm));
        }
    }
};
BatteryComponent.ctorParameters = () => [
    { type: _battery_service__WEBPACK_IMPORTED_MODULE_2__["CarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
BatteryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-battery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cars/battery/battery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battery.component.less */ "./src/app/cars/battery/battery.component.less")).default]
    })
], BatteryComponent);



/***/ }),

/***/ "./src/app/cars/battery/battery.model.ts":
/*!***********************************************!*\
  !*** ./src/app/cars/battery/battery.model.ts ***!
  \***********************************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
// car.model.ts

class Car {
    constructor(id, model, capacity, voltage, type, serviceLife) {
        this.id = id;
        this.model = model;
        this.capacity = capacity;
        this.voltage = voltage;
        this.type = type;
        this.serviceLife = serviceLife;
    }
}


/***/ }),

/***/ "./src/app/cars/battery/battery.service.ts":
/*!*************************************************!*\
  !*** ./src/app/cars/battery/battery.service.ts ***!
  \*************************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _battery_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battery.model */ "./src/app/cars/battery/battery.model.ts");
// car.service.ts



let CarService = class CarService {
    getCars() {
        const cars = [];
        for (let i = 1; i <= 50; i++) {
            const randomManufacturer = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
            const car = new _battery_model__WEBPACK_IMPORTED_MODULE_2__["Car"](i, `Battery ${i}`, 60 + Math.floor(Math.random() * 40), Math.floor(Math.random() * 12), // Random year between 2022 and 2026
            ['Lead-Acid', 'Lithium-Ion', 'AGM', 'Lead-Acid', 'Lead-Acid'][Math.floor(Math.random() * 5)], // Random color
            (4 + Math.floor(Math.random() * 10)) * 4 // Random price between 30000 and 50000
            );
            cars.push(car);
        }
        return cars;
    }
};
CarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CarService);



/***/ }),

/***/ "./src/app/cars/cars.component.less":
/*!******************************************!*\
  !*** ./src/app/cars/cars.component.less ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9FOi9jb2RlL2NvZGUuZ2l0aHViL25nLWRlbW8vc3JjL2FwcC9jYXJzL2NhcnMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NhcnMvY2Fycy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY2Fycy9jYXJzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59IiwiLm5hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/cars/cars.component.ts":
/*!****************************************!*\
  !*** ./src/app/cars/cars.component.ts ***!
  \****************************************/
/*! exports provided: CarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function() { return CarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cars.service */ "./src/app/cars/cars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/.pnpm/@angular+router@8.2.14_@angular+common@8.2.14_@angular+core@8.2.14_@angular+platform-browser@8.2.14_rxjs@6.4.0/node_modules/@angular/router/fesm2015/router.js");




let CarsComponent = class CarsComponent {
    constructor(carService, route) {
        this.carService = carService;
        this.route = route;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.searchTerm = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.currentPage = +params['page'] || 1;
            this.loadCars();
        });
    }
    loadCars() {
        this.cars = this.carService.getCars();
        // Apply search filter
        this.filterCars();
        // Calculate total number of pages
        const totalPages = Math.ceil(this.filteredCars.length / this.itemsPerPage);
        console.log(this.filteredCars.length);
        this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        // Paginate the filtered cars
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        this.filteredCars = this.filteredCars.slice(startIndex, startIndex + this.itemsPerPage);
    }
    onSearch() {
        this.currentPage = 1; // Reset to the first page when performing a new search
        this.loadCars();
    }
    filterCars() {
        if (!this.searchTerm) {
            this.filteredCars = this.cars; // If no search term, show all cars
        }
        else {
            const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
            this.filteredCars = this.cars.filter(car => car.model.toLowerCase().includes(lowerCaseSearchTerm) ||
                car.color.toLowerCase().includes(lowerCaseSearchTerm) ||
                car.year.toString().includes(lowerCaseSearchTerm));
        }
    }
};
CarsComponent.ctorParameters = () => [
    { type: _cars_service__WEBPACK_IMPORTED_MODULE_2__["CarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cars',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cars.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cars/cars.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cars.component.less */ "./src/app/cars/cars.component.less")).default]
    })
], CarsComponent);



/***/ }),

/***/ "./src/app/cars/cars.model.ts":
/*!************************************!*\
  !*** ./src/app/cars/cars.model.ts ***!
  \************************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
// car.model.ts

class Car {
    constructor(id, model, manufacturer, year, color, price) {
        this.id = id;
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.color = color;
        this.price = price;
    }
}


/***/ }),

/***/ "./src/app/cars/cars.service.ts":
/*!**************************************!*\
  !*** ./src/app/cars/cars.service.ts ***!
  \**************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cars_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cars.model */ "./src/app/cars/cars.model.ts");
// car.service.ts



let CarService = class CarService {
    getCars() {
        const cars = [];
        for (let i = 1; i <= 50; i++) {
            const randomManufacturer = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
            const car = new _cars_model__WEBPACK_IMPORTED_MODULE_2__["Car"](i, `Car ${i}`, `Manufacturer ${randomManufacturer}`, 2022 + Math.floor(Math.random() * 5), // Random year between 2022 and 2026
            ['Red', 'Blue', 'Black'][Math.floor(Math.random() * 3)], // Random color
            30000 + Math.floor(Math.random() * 20000) // Random price between 30000 and 50000
            );
            cars.push(car);
        }
        return cars;
    }
};
CarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CarService);



/***/ }),

/***/ "./src/app/cars/parts/parts.component.less":
/*!*************************************************!*\
  !*** ./src/app/cars/parts/parts.component.less ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnMvcGFydHMvcGFydHMuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/cars/parts/parts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/cars/parts/parts.component.ts ***!
  \***********************************************/
/*! exports provided: PartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsComponent", function() { return PartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts.service */ "./src/app/cars/parts/parts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/.pnpm/@angular+router@8.2.14_@angular+common@8.2.14_@angular+core@8.2.14_@angular+platform-browser@8.2.14_rxjs@6.4.0/node_modules/@angular/router/fesm2015/router.js");




let PartsComponent = class PartsComponent {
    constructor(partService, route) {
        this.partService = partService;
        this.route = route;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.searchTerm = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.currentPage = +params['page'] || 1;
            this.loadParts();
        });
    }
    loadParts() {
        this.parts = this.partService.getParts();
        // Apply search filter
        this.filterParts(); // Corrected method name
        // Paginate the filtered parts
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        this.pagedParts = this.filteredParts.slice(startIndex, startIndex + this.itemsPerPage);
        // Calculate total number of pages
        const totalPages = Math.ceil(this.filteredParts.length / this.itemsPerPage);
        this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    onSearch() {
        this.currentPage = 1; // Reset to the first page when performing a new search
        this.loadParts();
    }
    filterParts() {
        if (!this.searchTerm) {
            this.filteredParts = this.parts; // If no search term, show all parts
        }
        else {
            const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
            this.filteredParts = this.parts.filter(part => part.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                part.partNumber.toLowerCase().includes(lowerCaseSearchTerm) ||
                part.manufacturer.toLowerCase().includes(lowerCaseSearchTerm) ||
                part.compatibleModels.join(',').toLowerCase().includes(lowerCaseSearchTerm));
        }
    }
};
PartsComponent.ctorParameters = () => [
    { type: _parts_service__WEBPACK_IMPORTED_MODULE_2__["PartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./parts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cars/parts/parts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./parts.component.less */ "./src/app/cars/parts/parts.component.less")).default]
    })
], PartsComponent);



/***/ }),

/***/ "./src/app/cars/parts/parts.model.ts":
/*!*******************************************!*\
  !*** ./src/app/cars/parts/parts.model.ts ***!
  \*******************************************/
/*! exports provided: Part */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Part", function() { return Part; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
// part.model.ts

class Part {
    constructor(id, name, partNumber, manufacturer, compatibleModels, price) {
        this.id = id;
        this.name = name;
        this.partNumber = partNumber;
        this.manufacturer = manufacturer;
        this.compatibleModels = compatibleModels;
        this.price = price;
    }
}


/***/ }),

/***/ "./src/app/cars/parts/parts.service.ts":
/*!*********************************************!*\
  !*** ./src/app/cars/parts/parts.service.ts ***!
  \*********************************************/
/*! exports provided: PartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartService", function() { return PartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _parts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts.model */ "./src/app/cars/parts/parts.model.ts");
// part.service.ts



let PartService = class PartService {
    getParts() {
        // 模拟五十个汽配零部件数据
        const parts = [];
        for (let i = 1; i <= 50; i++) {
            const randomManufacturer = ['FilterCo', 'BrakeTech', 'SparkCo'][Math.floor(Math.random() * 3)];
            const randomModels = ['Car A', 'Car B', 'Car C'].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);
            const part = new _parts_model__WEBPACK_IMPORTED_MODULE_2__["Part"](i, `Part ${i}`, `PRT${i}`, randomManufacturer, randomModels, 10 + Math.floor(Math.random() * 90));
            parts.push(part);
        }
        return parts;
    }
};
PartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PartService);



/***/ }),

/***/ "./src/app/common/headers/headers.component.less":
/*!*******************************************************!*\
  !*** ./src/app/common/headers/headers.component.less ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXJzL2hlYWRlcnMuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/common/headers/headers.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/headers/headers.component.ts ***!
  \*****************************************************/
/*! exports provided: HeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersComponent", function() { return HeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/.pnpm/@angular+router@8.2.14_@angular+common@8.2.14_@angular+core@8.2.14_@angular+platform-browser@8.2.14_rxjs@6.4.0/node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/.pnpm/rxjs@6.4.0/node_modules/rxjs/_esm2015/operators/index.js");




let HeadersComponent = class HeadersComponent {
    constructor(router) {
        this.router = router;
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe((event) => {
            // 在这里处理路由事件
            this.handleRouteChange(event.url);
        });
    }
    handleRouteChange(url) {
        this.current = url;
    }
    ngOnInit() {
    }
};
HeadersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-headers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./headers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/headers/headers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./headers.component.less */ "./src/app/common/headers/headers.component.less")).default]
    })
], HeadersComponent);



/***/ }),

/***/ "./src/app/common/sidebars/sidebars.component.less":
/*!*********************************************************!*\
  !*** ./src/app/common/sidebars/sidebars.component.less ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" /deep/ body {\n  min-height: 100vh;\n  min-height: -webkit-fill-available;\n}\n /deep/ html {\n  height: -webkit-fill-available;\n}\n /deep/ app-root {\n  height: 100vh;\n  height: -webkit-fill-available;\n  max-height: 100vh;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n .dropdown-toggle {\n  outline: 0;\n}\n .btn-toggle {\n  padding: 0.25rem 0.5rem;\n  font-weight: 600;\n  color: var(--bs-emphasis-color);\n  background-color: transparent;\n}\n .btn-toggle:hover,\n.btn-toggle:focus {\n  color: rgba(var(--bs-emphasis-color-rgb), 0.85);\n  background-color: var(--bs-tertiary-bg);\n}\n .btn-toggle::before {\n  width: 1.25em;\n  line-height: 0;\n  content: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e\");\n  transition: transform 0.35s ease;\n  transform-origin: 0.5em 50%;\n}\n [data-bs-theme=\"dark\"] .btn-toggle::before {\n  content: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%28255,255,255,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e\");\n}\n .btn-toggle[aria-expanded=\"true\"] {\n  color: rgba(var(--bs-emphasis-color-rgb), 0.85);\n}\n .btn-toggle[aria-expanded=\"true\"]::before {\n  transform: rotate(90deg);\n}\n .btn-toggle-nav a {\n  padding: 0.1875rem 0.5rem;\n  margin-top: 0.125rem;\n  margin-left: 1.25rem;\n}\n .btn-toggle-nav a:hover,\n.btn-toggle-nav a:focus {\n  background-color: var(--bs-tertiary-bg);\n}\n .scrollarea {\n  overflow-y: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NpZGViYXJzL0U6L2NvZGUvY29kZS5naXRodWIvbmctZGVtby9zcmMvYXBwL2NvbW1vbi9zaWRlYmFycy9zaWRlYmFycy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tbW9uL3NpZGViYXJzL3NpZGViYXJzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQ0FBQTtBQ0NGO0NERUE7RUFDRSw4QkFBQTtBQ0FGO0NER0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNERjtDRElBO0VBQW1CLFVBQUE7QUNEbkI7Q0RHQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0FDREY7Q0RHQTs7RUFFRSwrQ0FBQTtFQUNBLHVDQUFBO0FDREY7Q0RJQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EseVFBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0FDRkY7Q0RLQTtFQUNFLCtRQUFBO0FDSEY7Q0RNQTtFQUNFLCtDQUFBO0FDSkY7Q0RNQTtFQUNFLHdCQUFBO0FDSkY7Q0RPQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ0xGO0NET0E7O0VBRUUsdUNBQUE7QUNMRjtDRFFBO0VBQ0UsZ0JBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaWRlYmFycy9zaWRlYmFycy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi9kZWVwLyAgYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4vZGVlcC8gaHRtbCB7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cblxuL2RlZXAvIGFwcC1yb290IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlIHsgb3V0bGluZTogMDsgfVxuXG4uYnRuLXRvZ2dsZSB7XG4gIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWJzLWVtcGhhc2lzLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYnRuLXRvZ2dsZTpob3Zlcixcbi5idG4tdG9nZ2xlOmZvY3VzIHtcbiAgY29sb3I6IHJnYmEodmFyKC0tYnMtZW1waGFzaXMtY29sb3ItcmdiKSwgLjg1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtdGVydGlhcnktYmcpO1xufVxuXG4uYnRuLXRvZ2dsZTo6YmVmb3JlIHtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGNvbnRlbnQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNiclM2UlM2NwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiYSUyODAsMCwwLC41JTI5JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nTTUgMTRsNi02LTYtNicvJTNlJTNjL3N2ZyUzZVwiKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXMgZWFzZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogLjVlbSA1MCU7XG59XG5cbltkYXRhLWJzLXRoZW1lPVwiZGFya1wiXSAuYnRuLXRvZ2dsZTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2JyUzZSUzY3BhdGggZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2JhJTI4MjU1LDI1NSwyNTUsLjUlMjknIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNSAxNGw2LTYtNi02Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xufVxuXG4uYnRuLXRvZ2dsZVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWJzLWVtcGhhc2lzLWNvbG9yLXJnYiksIC44NSk7XG59XG4uYnRuLXRvZ2dsZVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXTo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uYnRuLXRvZ2dsZS1uYXYgYSB7XG4gIHBhZGRpbmc6IC4xODc1cmVtIC41cmVtO1xuICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xuICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbn1cbi5idG4tdG9nZ2xlLW5hdiBhOmhvdmVyLFxuLmJ0bi10b2dnbGUtbmF2IGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy10ZXJ0aWFyeS1iZyk7XG59XG5cbi5zY3JvbGxhcmVhIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iLCIgL2RlZXAvIGJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cbiAvZGVlcC8gaHRtbCB7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cbiAvZGVlcC8gYXBwLXJvb3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgb3V0bGluZTogMDtcbn1cbi5idG4tdG9nZ2xlIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1icy1lbXBoYXNpcy1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJ0bi10b2dnbGU6aG92ZXIsXG4uYnRuLXRvZ2dsZTpmb2N1cyB7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWJzLWVtcGhhc2lzLWNvbG9yLXJnYiksIDAuODUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy10ZXJ0aWFyeS1iZyk7XG59XG4uYnRuLXRvZ2dsZTo6YmVmb3JlIHtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGNvbnRlbnQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNiclM2UlM2NwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiYSUyODAsMCwwLC41JTI5JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nTTUgMTRsNi02LTYtNicvJTNlJTNjL3N2ZyUzZVwiKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzIGVhc2U7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAuNWVtIDUwJTtcbn1cbltkYXRhLWJzLXRoZW1lPVwiZGFya1wiXSAuYnRuLXRvZ2dsZTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2JyUzZSUzY3BhdGggZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2JhJTI4MjU1LDI1NSwyNTUsLjUlMjknIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNSAxNGw2LTYtNi02Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xufVxuLmJ0bi10b2dnbGVbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xuICBjb2xvcjogcmdiYSh2YXIoLS1icy1lbXBoYXNpcy1jb2xvci1yZ2IpLCAwLjg1KTtcbn1cbi5idG4tdG9nZ2xlW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uYnRuLXRvZ2dsZS1uYXYgYSB7XG4gIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xuICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbn1cbi5idG4tdG9nZ2xlLW5hdiBhOmhvdmVyLFxuLmJ0bi10b2dnbGUtbmF2IGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy10ZXJ0aWFyeS1iZyk7XG59XG4uc2Nyb2xsYXJlYSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/common/sidebars/sidebars.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/sidebars/sidebars.component.ts ***!
  \*******************************************************/
/*! exports provided: SidebarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarsComponent", function() { return SidebarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/.pnpm/@angular+router@8.2.14_@angular+common@8.2.14_@angular+core@8.2.14_@angular+platform-browser@8.2.14_rxjs@6.4.0/node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/.pnpm/rxjs@6.4.0/node_modules/rxjs/_esm2015/operators/index.js");




let SidebarsComponent = class SidebarsComponent {
    constructor(router) {
        this.router = router;
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe((event) => {
            // 在这里处理路由事件
            this.handleRouteChange(event.url);
        });
        /* global bootstrap: false */
        const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
        tooltipTriggerList.forEach(tooltipTriggerEl => {
            console.log(tooltipTriggerEl);
            new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    handleRouteChange(url) {
        this.current = url;
        console.log(123, url);
    }
    ngOnInit() {
    }
};
SidebarsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SidebarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebars',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebars.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/sidebars/sidebars.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebars.component.less */ "./src/app/common/sidebars/sidebars.component.less")).default]
    })
], SidebarsComponent);



/***/ }),

/***/ "./src/app/customers/customers.component.less":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");


let CustomersComponent = class CustomersComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers.component.less */ "./src/app/customers/customers.component.less")).default]
    })
], CustomersComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.less":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.less */ "./src/app/dashboard/dashboard.component.less")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.less":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.less ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.less */ "./src/app/homepage/homepage.component.less")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/orders/orders.component.less":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.less ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");


let OrdersComponent = class OrdersComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.component.less */ "./src/app/orders/orders.component.less")).default]
    })
], OrdersComponent);



/***/ }),

/***/ "./src/app/pays/pays.component.less":
/*!******************************************!*\
  !*** ./src/app/pays/pays.component.less ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheXMvcGF5cy5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/pays/pays.component.ts":
/*!****************************************!*\
  !*** ./src/app/pays/pays.component.ts ***!
  \****************************************/
/*! exports provided: PaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaysComponent", function() { return PaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pays_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pays.model */ "./src/app/pays/pays.model.ts");
// pays.component.ts



let PaysComponent = class PaysComponent {
    constructor() {
        this.pays = new _pays_model__WEBPACK_IMPORTED_MODULE_2__["Pays"]('', '', '', ''); // Initialize with empty values
    }
    submitForm() {
        // Handle form submission here
        this.paymentSuccess = JSON.stringify(this.pays, null, 2);
        console.log('Form submitted:', this.pays);
    }
    closeAlert() {
        this.paymentSuccess = '';
    }
};
PaysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pays',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pays.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pays/pays.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pays.component.less */ "./src/app/pays/pays.component.less")).default]
    })
], PaysComponent);



/***/ }),

/***/ "./src/app/pays/pays.model.ts":
/*!************************************!*\
  !*** ./src/app/pays/pays.model.ts ***!
  \************************************/
/*! exports provided: Pays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pays", function() { return Pays; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
// pays.model.ts

class Pays {
    constructor(cardNumber, cardHolder, expirationDate, cvv) {
        this.cardNumber = cardNumber;
        this.cardHolder = cardHolder;
        this.expirationDate = expirationDate;
        this.cvv = cvv;
    }
}


/***/ }),

/***/ "./src/app/products/products.component.less":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.less ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");


let ProductsComponent = class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.less */ "./src/app/products/products.component.less")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/refund/refund.component.less":
/*!**********************************************!*\
  !*** ./src/app/refund/refund.component.less ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZnVuZC9yZWZ1bmQuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/refund/refund.component.ts":
/*!********************************************!*\
  !*** ./src/app/refund/refund.component.ts ***!
  \********************************************/
/*! exports provided: RefundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundComponent", function() { return RefundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");


let RefundComponent = class RefundComponent {
    constructor() { }
    ngOnInit() {
    }
};
RefundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refund',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./refund.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/refund/refund.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./refund.component.less */ "./src/app/refund/refund.component.less")).default]
    })
], RefundComponent);



/***/ }),

/***/ "./src/app/setting/permission/permission.component.less":
/*!**************************************************************!*\
  !*** ./src/app/setting/permission/permission.component.less ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvcGVybWlzc2lvbi9wZXJtaXNzaW9uLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/setting/permission/permission.component.ts":
/*!************************************************************!*\
  !*** ./src/app/setting/permission/permission.component.ts ***!
  \************************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");


let PermissionComponent = class PermissionComponent {
    constructor() { }
    ngOnInit() {
    }
};
PermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permission',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./permission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/permission/permission.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./permission.component.less */ "./src/app/setting/permission/permission.component.less")).default]
    })
], PermissionComponent);



/***/ }),

/***/ "./src/app/setting/setting.component.less":
/*!************************************************!*\
  !*** ./src/app/setting/setting.component.less ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");


let SettingComponent = class SettingComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.component.less */ "./src/app/setting/setting.component.less")).default]
    })
], SettingComponent);



/***/ }),

/***/ "./src/app/user/logout/logout.component.less":
/*!***************************************************!*\
  !*** ./src/app/user/logout/logout.component.less ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9nb3V0L2xvZ291dC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/user/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");


let LogoutComponent = class LogoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.less */ "./src/app/user/logout/logout.component.less")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/user/user-setting/user-setting.component.less":
/*!***************************************************************!*\
  !*** ./src/app/user/user-setting/user-setting.component.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1zZXR0aW5nL3VzZXItc2V0dGluZy5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/user/user-setting/user-setting.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-setting/user-setting.component.ts ***!
  \*************************************************************/
/*! exports provided: UserSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingComponent", function() { return UserSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/store.service */ "./src/store/store.service.ts");
/* harmony import */ var _user_setting_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-setting.model */ "./src/app/user/user-setting/user-setting.model.ts");




let UserSettingComponent = class UserSettingComponent {
    constructor(store) {
        this.store = store;
        this.userForm = new _user_setting_model__WEBPACK_IMPORTED_MODULE_3__["UserSetting"]('', '');
        this.userData$ = this.store.select(state => state.user.user);
    }
    submitForm() {
        console.log(123, Object.assign({}, this.userForm));
        this.store.setUser(Object.assign({}, this.userForm));
    }
    updateUser() {
        const userData = { /* updated user data */};
        // this.store.setUser(userData);
    }
    updateSetting() {
        const settingData = { /* updated setting data */};
        // this.store.setSetting(settingData);
    }
    ngOnInit() {
        this.userData$.subscribe((user) => {
            // console.log(999999, user.email);
            this.userForm = user;
        });
    }
};
UserSettingComponent.ctorParameters = () => [
    { type: src_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
UserSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-setting/user-setting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-setting.component.less */ "./src/app/user/user-setting/user-setting.component.less")).default]
    })
], UserSettingComponent);



/***/ }),

/***/ "./src/app/user/user-setting/user-setting.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/user-setting/user-setting.model.ts ***!
  \*********************************************************/
/*! exports provided: UserSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSetting", function() { return UserSetting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
// pays.model.ts

class UserSetting {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


/***/ }),

/***/ "./src/app/user/user.component.less":
/*!******************************************!*\
  !*** ./src/app/user/user.component.less ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/store.service */ "./src/store/store.service.ts");



let UserComponent = class UserComponent {
    constructor(store) {
        this.store = store;
        this.userData$ = this.store.select(state => state.user.user);
    }
    ngOnInit() {
    }
};
UserComponent.ctorParameters = () => [
    { type: src_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.less */ "./src/app/user/user.component.less")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/.pnpm/@angular+platform-browser-dynamic@8.2.14_@angular+common@8.2.14_@angular+compiler@8.2.14_@ang_iw5kgfevids6fv2buyis3lroce/node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/store/app.state.ts":
/*!********************************!*\
  !*** ./src/store/app.state.ts ***!
  \********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.module */ "./src/store/user.module.ts");
/* harmony import */ var _setting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.module */ "./src/store/setting.module.ts");

// app.state.ts


const reducers = {
    user: _user_module__WEBPACK_IMPORTED_MODULE_1__["userReducer"],
    setting: _setting_module__WEBPACK_IMPORTED_MODULE_2__["settingReducer"]
};


/***/ }),

/***/ "./src/store/setting.module.ts":
/*!*************************************!*\
  !*** ./src/store/setting.module.ts ***!
  \*************************************/
/*! exports provided: setSetting, settingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSetting", function() { return setSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingReducer", function() { return settingReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

// setting.module.ts

const setSetting = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Setting] Set Setting', (setting) => ({ setting }));
const settingReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])({ setting: {} }, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(setSetting, (state, { setting }) => (Object.assign({}, state, { setting }))));


/***/ }),

/***/ "./src/store/store.service.ts":
/*!************************************!*\
  !*** ./src/store/store.service.ts ***!
  \************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/.pnpm/@angular+core@8.2.14_rxjs@6.4.0_zone.js@0.9.1/node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.module */ "./src/store/user.module.ts");

// store.service.ts



let StoreService = class StoreService {
    constructor(store) {
        this.store = store;
    }
    setUser(user) {
        this.store.dispatch(Object(_user_module__WEBPACK_IMPORTED_MODULE_3__["setUser"])(user));
    }
    setSetting(setting) {
        // this.store.dispatch(setSetting(setting));n
    }
    // 添加一个简单的 select 方法
    select(selector) {
        return this.store.select(selector);
    }
};
StoreService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StoreService);



/***/ }),

/***/ "./src/store/user.module.ts":
/*!**********************************!*\
  !*** ./src/store/user.module.ts ***!
  \**********************************/
/*! exports provided: setUser, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

// user.module.ts

const setUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[User] Set User', (user) => ({ user }));
const userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])({ user: {} }, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(setUser, (state, { user }) => (Object.assign({}, state, { user }))));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\code\code.github\ng-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map