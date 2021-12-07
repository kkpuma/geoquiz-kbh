function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-landing *ngIf=\"showLanding\"\n             [categories]=\"categories\"\n             [questionsNum]=\"questionNum\"\n             [scoreBoard$]=\"scoreBoard$\"\n             (userName)=\"onUserNameChanged($event)\"\n             (selectCategory)=\"selectCategory($event)\"></app-landing>\n<app-loading *ngIf=\"showLoading\"\n             [data]=\"loadingData\"></app-loading>\n<button mat-icon-button\n        class=\"back\"\n        *ngIf=\"!showLanding\"\n        (click)=\"playAgain()\">\n  <mat-icon>chevron_left</mat-icon>\n</button>\n<div *ngIf=\"!showLanding && !showLoading && !showSummery\"\n     class=\"question\">\n  <p class=\"count\">{{index+1}}/{{questionNum}}</p>\n  <h1 *ngIf=\"index < questionNum\">\n    Hvor ligger <span class=\"location\">{{randomLocations[index].properties.name}}</span>?\n  </h1>\n</div>\n<div *ngIf=\"!showLanding && !showLoading && !showSummery\"\n     class=\"btn\">\n  <p class=\"help\"\n     *ngIf=\"!addedMarker\">Tryk på kortet for at sætte markør</p>\n  <button *ngIf=\"index < questionNum && addedMarker\"\n          mat-raised-button\n          (click)=\"onClick()\">\n    <h2>{{buttonGuess ? 'gæt' : 'næste'}}</h2>\n  </button>\n  <button *ngIf=\"index >= questionNum\"\n          mat-raised-button\n          (click)=\"handleSummery()\">\n    <h2>se resultat</h2>\n  </button>\n</div>\n<div class=\"secret-confetti\" (click)=\"secretConfetti()\"></div>\n\n<app-summery *ngIf=\"showSummery\"\n             [distance]=\"totalDistance\"\n             [scoreBoard$]=\"scoreBoard$\"\n             (replay)=\"playAgain()\"></app-summery>\n<app-map></app-map>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"landing\">\n  <div class=\"stamp is-draft\">\n    TMF EDITION\n  </div>\n  <div class=\"intro\">\n    <h2>Velkommen til <span>TMF Geoquiz</span></h2>\n    <p>Hvor godt kender du København?</p>\n    <p>\n      Bestem placeringen af {{questionsNum}} steder. Kan du slå dine\n      TMF-buddies?\n    </p>\n  </div>\n  <div class=\"name\">\n    <mat-form-field class=\"input-name\"\n                    appearance=\"fill\">\n      <mat-label>Skriv dit navn</mat-label>\n      <input [(ngModel)]=\"name\"\n             matInput>\n    </mat-form-field>\n  </div>\n  <div class=\"categories\">\n    <div *ngFor=\"let cat of categories\">\n      <button mat-raised-button\n              (click)=\"selected(cat.id)\"\n              [disabled]=\"name===''\">\n        {{cat.name}}\n      </button>\n    </div>\n\n  </div>\n\n  <app-scoreboard [scoreBoard$]=\"scoreBoard$\"></app-scoreboard>\n\n  <!-- <div class=\"help\">\n        <p>\n            <span><strong>Sådan gør du:</strong></span><br> Sæt en markør på kortet og klik derefter GÆT\n        </p>\n    </div> -->\n  <div class=\"attribution\">\n    <p>\n      Kilder:\n      <a href=\"https://www.openstreetmap.org\"\n         target=\"_blank\">Open Street Map</a>\n      og <a href=\"https://github.com/kkpuma/geoquiz-kbh\"\n         target=\"_blank\"\n         rel=\"noopener noreferrer\">Github</a>\n    </p>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"item\">\n        <h3>\n            Finder <span class=\"num\">{{data.questionNum}}</span> tilfældige <span>TMF lokationer</span> ud af\n            <span class=\"num\">{{data.featureCount}}</span>\n        </h3>\n        <div class=\"lds-roller\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"map\" class=\"map-container\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scoreboard/scoreboard.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scoreboard/scoreboard.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScoreboardScoreboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scoreboard\">\n  <h3>Scoreboard</h3>\n  <table>\n    <tr>\n      <th>#</th>\n      <th>Navn</th>\n      <th>Score</th>\n    </tr>\n    <tr *ngFor=\"let score of scoreBoard$ | async; index as i\">\n      <td>{{i + 1}}</td>\n      <td>{{score.user}}</td>\n      <td>{{score.score}}</td>\n    </tr>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/summery/summery.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/summery/summery.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSummerySummeryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"summary\">\n    <div class=\"item\">\n        <h1>Du gættede <span>{{distance}}</span> km forkert</h1>\n        <br><br>\n        <app-scoreboard [scoreBoard$]=\"scoreBoard$\"></app-scoreboard>\n        <br><br>\n        <button mat-flat-button (click)=\"playAgain()\">PRØV IGEN</button>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back {\n  position: fixed;\n  top: 5px;\n  right: 5px;\n  z-index: 2;\n  color: #f3ecc2;\n}\n\n.question {\n  position: fixed;\n  padding-left: 20px;\n  z-index: 1;\n  pointer-events: none;\n}\n\n.question p {\n  margin-bottom: 5px;\n  color: #14b1ab;\n}\n\n.question h1 {\n  margin-top: 5px;\n  color: #f3ecc2;\n}\n\n.location {\n  color: #e8505b;\n}\n\n.help {\n  color: antiquewhite;\n}\n\n.btn {\n  position: fixed;\n  bottom: 38px;\n  z-index: 1;\n  text-align: center;\n  width: 100%;\n}\n\n.btn button {\n  text-transform: uppercase;\n  font-family: \"Roboto Condensed\", sans-serif !important;\n  width: 200px;\n  background-color: #e8505b;\n  color: #f3ecc2;\n}\n\n.btn button h3 {\n  margin: 5px;\n}\n\n.secret-confetti {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhZmZpb3NvL0RvY3VtZW50cy9naXQvZ2VvcXVpei1rYmgvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9iYWZmaW9zby9Eb2N1bWVudHMvZ2l0L2dlb3F1aXota2JoL3NyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNDSmE7QUNHZjs7QUZJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBRURGOztBRkdFO0VBQ0Usa0JBQUE7RUFDQSxjQ2hCVTtBQ2VkOztBRklFO0VBQ0UsZUFBQTtFQUNBLGNDcEJXO0FDa0JmOztBRk1BO0VBQ0UsY0M1Qlk7QUN5QmQ7O0FGTUE7RUFDRSxtQkFBQTtBRUhGOztBRk1BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FFSEY7O0FGS0U7RUFDRSx5QkFBQTtFQUNBLHNEQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0M1Q1c7QUN5Q2Y7O0FGSUk7RUFDRSxXQUFBO0FFRk47O0FGT0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUVKRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uYmFjayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAkZm91cnRoLWNvbG9yO1xufVxuXG4ucXVlc3Rpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgei1pbmRleDogMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiAkdGhpcmQtY29sb3I7XG4gIH1cblxuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGNvbG9yOiAkZm91cnRoLWNvbG9yO1xuICB9XG59XG5cbi5sb2NhdGlvbiB7XG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcbn1cblxuLmhlbHAge1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4uYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDM4cHg7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJG1haW4tY29sb3IsIDEpO1xuICAgIGNvbG9yOiAkZm91cnRoLWNvbG9yO1xuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uc2VjcmV0LWNvbmZldHRpIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuIiwiJG1haW4tY29sb3I6ICAjZTg1MDViO1xuJHNlY29uZC1jb2xvcjogI2Y5ZDU2ZTtcbiR0aGlyZC1jb2xvcjogIzE0YjFhYjtcbiRmb3VydGgtY29sb3I6ICNmM2VjYzI7XG5cbiRtYWluLWZvbnQ6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjsiLCIuYmFjayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjZjNlY2MyO1xufVxuXG4ucXVlc3Rpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgei1pbmRleDogMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucXVlc3Rpb24gcCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICMxNGIxYWI7XG59XG4ucXVlc3Rpb24gaDEge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiAjZjNlY2MyO1xufVxuXG4ubG9jYXRpb24ge1xuICBjb2xvcjogI2U4NTA1Yjtcbn1cblxuLmhlbHAge1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4uYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDM4cHg7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRuIGJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODUwNWI7XG4gIGNvbG9yOiAjZjNlY2MyO1xufVxuLmJ0biBidXR0b24gaDMge1xuICBtYXJnaW46IDVweDtcbn1cblxuLnNlY3JldC1jb25mZXR0aSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var canvas_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! canvas-confetti */
    "./node_modules/canvas-confetti/dist/confetti.module.mjs");
    /* harmony import */


    var _map_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map/map.service */
    "./src/app/map/map.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_supabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/supabase.service */
    "./src/app/services/supabase.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_assets_tmf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/assets/tmf */
    "./src/assets/tmf.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(mapService, supabase, snackBar) {
        _classCallCheck(this, AppComponent);

        this.mapService = mapService;
        this.supabase = supabase;
        this.snackBar = snackBar;
        this.title = 'geoquiz';
        this.showLanding = true;
        this.showLoading = false;
        this.showSummery = false;
        this.index = 0;
        this.buttonGuess = true;
        this.distance = [];
        this.questionNum = 10;
        this.categories = [{
          name: 'START QUIZ',
          id: 'tmf',
          icon: 'museum'
        }];
        this.addedMarker = false;
        this.scoreBoard$ = this.supabase.scoreBoard$;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.supabase.fetchScoreboard().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log)).subscribe();
          this.supabase.subscribeLiveScoreUpdate();
          this.supabase.liveScoreUpdate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (score) {
            return score !== null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (score) {
            return _this.snackBar.open("".concat(score.user, " scored ").concat(score.score, " points!"), '', {
              duration: 2000,
              horizontalPosition: 'end',
              verticalPosition: 'top'
            });
          })).subscribe();
          this.mapService.addedMarker.subscribe(function (e) {
            return _this.addedMarker = e;
          });
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.index < this.questionNum) {
            this.buttonGuess ? this.answer() : this.nextQuestion();
          } else {
            this.handleSummery();
          }
        }
      }, {
        key: "secretConfetti",
        value: function secretConfetti() {
          Object(canvas_confetti__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
      }, {
        key: "onUserNameChanged",
        value: function onUserNameChanged(name) {
          this.userName = name;
        }
      }, {
        key: "selectCategory",
        value: function selectCategory(id) {
          var _this2 = this;

          this.showLanding = false;
          this.showLoading = true; // remove loading after 2 sec

          setTimeout(function () {
            _this2.showLoading = false;
          }, 2000);
          this.features = src_assets_tmf__WEBPACK_IMPORTED_MODULE_8__["tmf"].features;
          this.selectedCategory = id;
          this.loadingData = {
            category: this.getCategoryFromId(id).name,
            questionNum: this.questionNum,
            featureCount: this.features.length
          };
          this.randomLocations = this.mapService.getRandomLocations(this.features, this.questionNum);
        }
      }, {
        key: "answer",
        value: function answer() {
          // Get guess and answer coords
          var feature = this.randomLocations[this.index];
          var guessCoords = [this.mapService.currentLocation['lng'], this.mapService.currentLocation['lat']];
          var answerCoords = feature.geometry['coordinates']; // draw line on map and calculate distance

          var line = this.mapService.createLine(guessCoords, answerCoords);
          var dist = this.mapService.getDistance(guessCoords, answerCoords);
          this.distance.push(dist);
          this.mapService.addLineToMap(line, dist);
          this.mapService.zoomTo(line); // Add popup

          var name = feature.properties.name;
          var wd = feature.properties.wikidata;
          var wp = feature.properties.wikipedia; // Logic for popup html choos

          var html;

          if (wp && wp.length > 0) {
            var wps = wp.split(':'); // tslint:disable-next-line:max-line-length

            html = "<h3>".concat(name, "</h3><a href=https://").concat(wps[0], ".wikipedia.org/wiki/").concat(wps[1].split(' ').join('_'), " target=\"_blank\">Wikipedia</a>");
          } else if (wd) {
            html = "<h3>".concat(name, "</h3><a href=https://www.wikidata.org/wiki/").concat(wd, " target=\"_blank\">Wikidata</a>");
          } else {
            html = "<h3>".concat(name, "</h3>");
          }

          this.mapService.addPopup(answerCoords, html);
          this.buttonGuess = false;

          if (this.index === this.questionNum - 1) {
            this.index = ++this.index;
          }
        }
      }, {
        key: "nextQuestion",
        value: function nextQuestion() {
          // Remove markers and line
          this.mapService.marker.remove();
          this.mapService.popup.remove();
          this.mapService.removeLine(); // Zoom to dk

          this.mapService.flyToDK();
          this.buttonGuess = true;
          this.index = ++this.index;
        }
      }, {
        key: "handleSummery",
        value: function handleSummery() {
          var _this3 = this;

          this.showSummery = true;
          this.totalDistance = Math.round(this.distance.reduce(function (acc, cur) {
            return acc + cur;
          }));
          this.supabase.postScore({
            quiz_name: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].quizName,
            score: this.totalDistance,
            user: this.userName
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this3.supabase.fetchScoreboard();
          })).subscribe();
        }
      }, {
        key: "playAgain",
        value: function playAgain() {
          this.index = 0;
          this.distance = []; // Remove popup, marker and line

          this.mapService.marker.remove();
          this.mapService.popup.remove();
          this.mapService.removeLine();
          this.mapService.currentLocation = null;
          this.mapService.flyToDK();
          this.buttonGuess = true;
          this.showSummery = false;
          this.showLanding = true;
        }
      }, {
        key: "getCategoryFromId",
        value: function getCategoryFromId(id) {
          return this.categories.find(function (x) {
            return x.id === id;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _map_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]
      }, {
        type: _services_supabase_service__WEBPACK_IMPORTED_MODULE_5__["SupabaseService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _summery_summery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./summery/summery.component */
    "./src/app/summery/summery.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./loading/loading.component */
    "./src/app/loading/loading.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./scoreboard/scoreboard.component */
    "./src/app/scoreboard/scoreboard.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"], _summery_summery_component__WEBPACK_IMPORTED_MODULE_9__["SummeryComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_10__["LandingComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_14__["ScoreboardComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/landing/landing.component.scss":
  /*!************************************************!*\
    !*** ./src/app/landing/landing.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingLandingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".landing {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #f3ecc2;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.stamp {\n  position: fixed;\n  top: 15px;\n  right: 0px;\n  margin-bottom: 1rem;\n  transform: rotate(15deg);\n  color: #14b1ab;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border: 0.8rem double #14b1ab;\n  display: inline-block;\n  padding: 0.5rem;\n  text-transform: uppercase;\n  border-radius: 0;\n  font-family: \"Open sans\", Helvetica, Arial, sans-serif;\n  -webkit-mask-image: url('grunge.png');\n  -webkit-mask-size: 944px 604px;\n}\n\n.intro {\n  text-align: center;\n  margin: 0px 10px;\n  max-width: 500px;\n}\n\n.intro span {\n  color: #e8505b;\n}\n\n.intro h2 {\n  margin: 0px;\n}\n\n.name {\n  background-color: #f3ecc2;\n  padding: 0px 10px;\n  border-radius: 5px;\n  opacity: 0.9;\n}\n\n.name .name-input {\n  color: #999898;\n}\n\ninput {\n  color: black !important;\n}\n\n.categories {\n  margin: 20px 0px;\n}\n\n.categories button {\n  margin: 10px;\n  width: 200px;\n  background-color: #e8505b;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-size: large;\n  color: #f3ecc2;\n  padding: 10px;\n}\n\n.categories button:disabled {\n  opacity: 0.3;\n}\n\n.help {\n  text-align: center;\n}\n\n.help span {\n  color: #14b1ab;\n}\n\n.attribution {\n  color: #e9e8e8;\n  font-size: small;\n  position: fixed;\n  bottom: 10px;\n}\n\n.attribution a {\n  text-decoration: none;\n  color: #f3ecc2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhZmZpb3NvL0RvY3VtZW50cy9naXQvZ2VvcXVpei1rYmgvc3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9iYWZmaW9zby9Eb2N1bWVudHMvZ2l0L2dlb3F1aXota2JoL3NyYy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQ0pXO0VES1gsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUVESjs7QUZJQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQ25CVTtFRG9CVixpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0FFREo7O0FGSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUVESjs7QUZHSTtFQUNJLGNDeENNO0FDdUNkOztBRklJO0VBQ0ksV0FBQTtBRUZSOztBRk9BO0VBQ0UseUJDL0NhO0VEZ0RiLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FFSkY7O0FGTUU7RUFDRSxjQUFBO0FFSko7O0FGV0E7RUFDRSx1QkFBQTtBRVJGOztBRldBO0VBRUksZ0JBQUE7QUVUSjs7QUZXSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJDMUVNO0VEMkVOLDJDQ3RFSTtFRHVFSixnQkFBQTtFQUNBLGNDMUVPO0VEMkVQLGFBQUE7QUVUUjs7QUZZSTtFQUNFLFlBQUE7QUVWTjs7QUZjQTtFQUVJLGtCQUFBO0FFWko7O0FGYUk7RUFDSSxjQ3hGTTtBQzZFZDs7QUZlQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FFWko7O0FGYUk7RUFDSSxxQkFBQTtFQUNBLGNDbEdPO0FDdUZmIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5sYW5kaW5nIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBjb2xvcjogJGZvdXJ0aC1jb2xvcjtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN0YW1wIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxNXB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgY29sb3I6ICR0aGlyZC1jb2xvcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlcjogMC44cmVtIGRvdWJsZSAkdGhpcmQtY29sb3I7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBzYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9ncnVuZ2UucG5nJyk7XG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IDk0NHB4IDYwNHB4O1xufVxuXG4uaW50cm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxufVxuXG5cbi5uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvdXJ0aC1jb2xvcjtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMC45O1xuXG4gIC5uYW1lLWlucHV0IHtcbiAgICBjb2xvcjogcmdiKDE1MywgMTUyLCAxNTIpO1xuXG5cbiAgfVxuXG59XG5cbmlucHV0IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yaWVzIHtcblxuICAgIG1hcmdpbjogMjBweCAwcHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICBjb2xvcjogJGZvdXJ0aC1jb2xvcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICBidXR0b246ZGlzYWJsZWR7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgfVxufVxuXG4uaGVscCB7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAkdGhpcmQtY29sb3JcbiAgICB9XG59XG5cbi5hdHRyaWJ1dGlvbiB7XG4gICAgY29sb3I6IHJnYigyMzMsIDIzMiwgMjMyKTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICRmb3VydGgtY29sb3I7XG4gICAgfVxufVxuXG4iLCIkbWFpbi1jb2xvcjogICNlODUwNWI7XG4kc2Vjb25kLWNvbG9yOiAjZjlkNTZlO1xuJHRoaXJkLWNvbG9yOiAjMTRiMWFiO1xuJGZvdXJ0aC1jb2xvcjogI2YzZWNjMjtcblxuJG1haW4tZm9udDogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmOyIsIi5sYW5kaW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiAjZjNlY2MyO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdGFtcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIGNvbG9yOiAjMTRiMWFiO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiAwLjhyZW0gZG91YmxlICMxNGIxYWI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvZ3J1bmdlLnBuZ1wiKTtcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDk0NHB4IDYwNHB4O1xufVxuXG4uaW50cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG4uaW50cm8gc3BhbiB7XG4gIGNvbG9yOiAjZTg1MDViO1xufVxuLmludHJvIGgyIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZWNjMjtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMC45O1xufVxuLm5hbWUgLm5hbWUtaW5wdXQge1xuICBjb2xvcjogIzk5OTg5ODtcbn1cblxuaW5wdXQge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3JpZXMge1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLmNhdGVnb3JpZXMgYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODUwNWI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6ICNmM2VjYzI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2F0ZWdvcmllcyBidXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5oZWxwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlbHAgc3BhbiB7XG4gIGNvbG9yOiAjMTRiMWFiO1xufVxuXG4uYXR0cmlidXRpb24ge1xuICBjb2xvcjogI2U5ZThlODtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG59XG4uYXR0cmlidXRpb24gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmM2VjYzI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);

        this.selectCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.name = '';
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selected",
        value: function selected(id) {
          this.selectCategory.emit(id);
          this.userName.emit(this.name);
        }
      }]);

      return LandingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LandingComponent.prototype, "categories", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LandingComponent.prototype, "questionsNum", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LandingComponent.prototype, "scoreBoard$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LandingComponent.prototype, "selectCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LandingComponent.prototype, "userName", void 0);
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing.component.scss */
      "./src/app/landing/landing.component.scss"))["default"]]
    })], LandingComponent);
    /***/
  },

  /***/
  "./src/app/loading/loading.component.scss":
  /*!************************************************!*\
    !*** ./src/app/loading/loading.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoadingLoadingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.container span {\n  color: #e8505b;\n}\n.container .item {\n  text-align: center;\n  color: #f3ecc2;\n}\n.container .item .num {\n  color: #14b1ab;\n}\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #e8505b;\n  margin: -4px 0 0 -4px;\n}\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n.lds-roller div:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n.lds-roller div:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n.lds-roller div:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n.lds-roller div:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n.lds-roller div:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n.lds-roller div:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n.lds-roller div:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n.lds-roller div:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhZmZpb3NvL0RvY3VtZW50cy9naXQvZ2VvcXVpei1rYmgvc3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JhZmZpb3NvL0RvY3VtZW50cy9naXQvZ2VvcXVpei1rYmgvc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQ0ZKO0FESUk7RUFDSSxjRWZNO0FEYWQ7QURLSTtFQUNJLGtCQUFBO0VBQ0EsY0VqQk87QURjZjtBREtRO0VBQ0UsY0VyQkk7QURrQmQ7QURRQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0xKO0FET0U7RUFDRSx3RUFBQTtVQUFBLGdFQUFBO0VBQ0EsMkJBQUE7QUNKSjtBRE1FO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkU3Q1U7RUY4Q1YscUJBQUE7QUNISjtBREtFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ0ZKO0FESUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0RKO0FER0U7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDQUo7QURFRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDQ0o7QURDRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNFSjtBREFFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNHSjtBRERFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ0lKO0FERkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0tKO0FESEU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDTUo7QURKRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDT0o7QURMRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNRSjtBRE5FO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNTSjtBRFBFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ1VKO0FEUkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ1dKO0FEVEU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDWUo7QURWRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDYUo7QURYRTtFQUNFO0lBQ0UsdUJBQUE7RUNjSjtFRFpFO0lBQ0UseUJBQUE7RUNjSjtBQUNGO0FEcEJFO0VBQ0U7SUFDRSx1QkFBQTtFQ2NKO0VEWkU7SUFDRSx5QkFBQTtFQ2NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLmNvbnRhaW5lciB7XG5cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgIH1cblxuICAgIC5pdGVtIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJGZvdXJ0aC1jb2xvcjtcblxuICAgICAgICAubnVtIHtcbiAgICAgICAgICBjb2xvcjogJHRoaXJkLWNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubGRzLXJvbGxlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2IHtcbiAgICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbi1jb2xvcjtcbiAgICBtYXJnaW46IC00cHggMCAwIC00cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICAgIHRvcDogNjNweDtcbiAgICBsZWZ0OiA2M3B4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgICB0b3A6IDY4cHg7XG4gICAgbGVmdDogNTZweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gICAgdG9wOiA3MXB4O1xuICAgIGxlZnQ6IDQ4cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgIHRvcDogNzJweDtcbiAgICBsZWZ0OiA0MHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICAgIHRvcDogNzFweDtcbiAgICBsZWZ0OiAzMnB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgICB0b3A6IDY4cHg7XG4gICAgbGVmdDogMjRweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gICAgdG9wOiA2M3B4O1xuICAgIGxlZnQ6IDE3cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICAgIHRvcDogNTZweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG4gIEBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH0iLCIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4uY29udGFpbmVyIHNwYW4ge1xuICBjb2xvcjogI2U4NTA1Yjtcbn1cbi5jb250YWluZXIgLml0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZjNlY2MyO1xufVxuLmNvbnRhaW5lciAuaXRlbSAubnVtIHtcbiAgY29sb3I6ICMxNGIxYWI7XG59XG5cbi5sZHMtcm9sbGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdiB7XG4gIGFuaW1hdGlvbjogbGRzLXJvbGxlciAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNlODUwNWI7XG4gIG1hcmdpbjogLTRweCAwIDAgLTRweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XG4gIHRvcDogNjNweDtcbiAgbGVmdDogNjNweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gIHRvcDogNjhweDtcbiAgbGVmdDogNTZweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogNDhweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gIHRvcDogNzJweDtcbiAgbGVmdDogNDBweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiAzMnB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgdG9wOiA2OHB4O1xuICBsZWZ0OiAyNHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcbiAgdG9wOiA2M3B4O1xuICBsZWZ0OiAxN3B4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgdG9wOiA1NnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSIsIiRtYWluLWNvbG9yOiAgI2U4NTA1YjtcbiRzZWNvbmQtY29sb3I6ICNmOWQ1NmU7XG4kdGhpcmQtY29sb3I6ICMxNGIxYWI7XG4kZm91cnRoLWNvbG9yOiAjZjNlY2MyO1xuXG4kbWFpbi1mb250OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7Il19 */";
    /***/
  },

  /***/
  "./src/app/loading/loading.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/loading/loading.component.ts ***!
    \**********************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoadingComponent = /*#__PURE__*/function () {
      function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LoadingComponent.prototype, "data", void 0);
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loading.component.scss */
      "./src/app/loading/loading.component.scss"))["default"]]
    })], LoadingComponent);
    /***/
  },

  /***/
  "./src/app/map/map.component.scss":
  /*!****************************************!*\
    !*** ./src/app/map/map.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMapMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhZmZpb3NvL0RvY3VtZW50cy9naXQvZ2VvcXVpei1rYmgvc3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIiwiLm1hcC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./map.service */
    "./src/app/map/map.service.ts");

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(mapService) {
        _classCallCheck(this, MapComponent);

        this.mapService = mapService;
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.mapService.createMap();
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ctorParameters = function () {
      return [{
        type: _map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]
      }];
    };

    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.scss */
      "./src/app/map/map.component.scss"))["default"]]
    })], MapComponent);
    /***/
  },

  /***/
  "./src/app/map/map.service.ts":
  /*!************************************!*\
    !*** ./src/app/map/map.service.ts ***!
    \************************************/

  /*! exports provided: MapService */

  /***/
  function srcAppMapMapServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapService", function () {
      return MapService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! mapbox-gl */
    "./node_modules/mapbox-gl/dist/mapbox-gl.js");
    /* harmony import */


    var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _turf_bbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @turf/bbox */
    "./node_modules/@turf/bbox/dist/es/index.js");
    /* harmony import */


    var _turf_distance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @turf/distance */
    "./node_modules/@turf/distance/dist/es/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MapService = /*#__PURE__*/function () {
      function MapService() {
        _classCallCheck(this, MapService);

        this.style = 'mapbox://styles/baffioso/ckcnttep50z221iro41ka5jt4';
        this.center = [12.5548, 55.6774];
        this.zoom = 11;
        this.marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"]({
          color: '#e8505b'
        });
        this.popup = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Popup"]({
          closeButton: false
        });
        this.addedMarker = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
      }

      _createClass(MapService, [{
        key: "createMap",
        value: function createMap() {
          var _this4 = this;

          this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"]({
            container: 'map',
            style: this.style,
            center: this.center,
            zoom: this.zoom,
            accessToken: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mapboxToken
          });
          this.map.on('load', function () {
            _this4.addBehavior();
          });
        }
      }, {
        key: "addMarker",
        value: function addMarker(coords) {
          this.marker.setLngLat(coords).addTo(this.map);
          this.addedMarker.next(true);
        }
      }, {
        key: "addPopup",
        value: function addPopup(coords, html) {
          this.popup.setLngLat(coords).setHTML(html).addTo(this.map);
        }
      }, {
        key: "addBehavior",
        value: function addBehavior() {
          var _this5 = this;

          this.map.on('click', function (e) {
            _this5.addMarker(e.lngLat);

            _this5.currentLocation = e.lngLat;
          });
        }
      }, {
        key: "getRandomLocations",
        value: function getRandomLocations(features, n) {
          var result = new Array(n);
          var len = features.length;
          var taken = new Array(len);

          if (n > len) {
            throw new RangeError('getRandomLocations: more elements taken than available');
          }

          while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = features[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
          }

          return result;
        }
      }, {
        key: "createLine",
        value: function createLine(point1, point2) {
          return {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [point1, point2]
            }
          };
        }
      }, {
        key: "addLineToMap",
        value: function addLineToMap(line, dist) {
          this.map.addSource('line', {
            'type': 'geojson',
            'data': line
          });
          this.map.addLayer({
            id: 'line',
            type: 'line',
            source: 'line',
            layout: {},
            paint: {
              'line-color': '#e8505b',
              'line-width': 4,
              'line-dasharray': [2, 1]
            }
          });
          this.map.addLayer({
            id: 'line-label',
            type: 'symbol',
            source: 'line',
            layout: {
              'text-field': Math.round(dist) === 0 ? "".concat(String(Math.round(dist * 1000)), " m") : "".concat(String(Math.round(dist)), " km"),
              'symbol-placement': 'line-center'
            },
            paint: {
              'text-color': '#e8505b',
              'text-halo-color': '#f3ecc2',
              'text-halo-width': 2
            }
          });
        }
      }, {
        key: "removeLine",
        value: function removeLine() {
          if (this.map.getLayer('line')) {
            this.map.removeLayer('line');
            this.map.removeLayer('line-label');
          }

          if (this.map.getSource('line')) {
            this.map.removeSource('line');
          }
        }
      }, {
        key: "zoomTo",
        value: function zoomTo(geom) {
          var bounds = Object(_turf_bbox__WEBPACK_IMPORTED_MODULE_3__["default"])(geom);
          this.map.fitBounds(bounds, {
            padding: 100
          });
        }
      }, {
        key: "flyToDK",
        value: function flyToDK() {
          this.map.flyTo({
            center: this.center,
            zoom: this.zoom
          });
        }
      }, {
        key: "getDistance",
        value: function getDistance(guessPoint, answerGeom) {
          return Object(_turf_distance__WEBPACK_IMPORTED_MODULE_4__["default"])(guessPoint, answerGeom); // if (booleanPointInPolygon(guessPoint, answerGeom)) {
          //   console.log('WIHTIN')
          //   return 0;
          // } else {
          //   const vertices = explode(answerGeom);
          //   const closestVertex = nearestPoint(guessPoint, vertices);
          //   return distance(guessPoint, closestVertex);
          //}
        }
      }]);

      return MapService;
    }();

    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MapService);
    /***/
  },

  /***/
  "./src/app/scoreboard/scoreboard.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/scoreboard/scoreboard.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScoreboardScoreboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreboard {\n  background-color: #292929;\n  opacity: 0.8;\n  padding: 10px;\n  border-radius: 10px;\n}\n.scoreboard h3 {\n  text-align: center;\n}\n.scoreboard table {\n  margin: auto;\n  text-align: center;\n}\n.scoreboard table td, .scoreboard table th {\n  padding: 0 10px;\n}\n.scoreboard table th {\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhZmZpb3NvL0RvY3VtZW50cy9naXQvZ2VvcXVpei1rYmgvc3JjL2FwcC9zY29yZWJvYXJkL3Njb3JlYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Njb3JlYm9hcmQvc2NvcmVib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0UsZUFBQTtBQ0FOO0FER0k7RUFDRSxtQkFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvc2NvcmVib2FyZC9zY29yZWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlYm9hcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XG4gIG9wYWNpdHk6IDAuODtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICBoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgdGFibGUge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICB0ZCwgdGgge1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cblxuICAgIHRoIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgfVxuICB9XG59XG4iLCIuc2NvcmVib2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gIG9wYWNpdHk6IDAuODtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zY29yZWJvYXJkIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNjb3JlYm9hcmQgdGFibGUge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY29yZWJvYXJkIHRhYmxlIHRkLCAuc2NvcmVib2FyZCB0YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5zY29yZWJvYXJkIHRhYmxlIHRoIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/scoreboard/scoreboard.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/scoreboard/scoreboard.component.ts ***!
    \****************************************************/

  /*! exports provided: ScoreboardComponent */

  /***/
  function srcAppScoreboardScoreboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function () {
      return ScoreboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ScoreboardComponent = /*#__PURE__*/function () {
      function ScoreboardComponent() {
        _classCallCheck(this, ScoreboardComponent);
      }

      _createClass(ScoreboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScoreboardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScoreboardComponent.prototype, "scoreBoard$", void 0);
    ScoreboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scoreboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scoreboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scoreboard/scoreboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scoreboard.component.scss */
      "./src/app/scoreboard/scoreboard.component.scss"))["default"]]
    })], ScoreboardComponent);
    /***/
  },

  /***/
  "./src/app/services/supabase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/supabase.service.ts ***!
    \**********************************************/

  /*! exports provided: SupabaseService */

  /***/
  function srcAppServicesSupabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupabaseService", function () {
      return SupabaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @supabase/supabase-js */
    "./node_modules/@supabase/supabase-js/dist/module/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var SupabaseService = /*#__PURE__*/function () {
      function SupabaseService() {
        _classCallCheck(this, SupabaseService);

        this._scoreBoard$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.scoreBoard$ = this._scoreBoard$.asObservable();
        this._liveScoreUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.liveScoreUpdate$ = this._liveScoreUpdate$.asObservable();
        this.supabase = Object(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__["createClient"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].supabaseUrl, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].supabaseKey);
      }

      _createClass(SupabaseService, [{
        key: "fetchScoreboard",
        value: function fetchScoreboard() {
          var _this6 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.supabase.from('scoreboard').select('*').limit(10).order('score', {
            ascending: true
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (scores) {
            return _this6._scoreBoard$.next(scores);
          }));
        }
      }, {
        key: "postScore",
        value: function postScore(score) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.supabase.from('scoreboard').insert(score)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.data;
          }));
        }
      }, {
        key: "subscribeLiveScoreUpdate",
        value: function subscribeLiveScoreUpdate() {
          var _this7 = this;

          this.supabase.from('scoreboard').on('INSERT', function (payload) {
            _this7._liveScoreUpdate$.next(payload["new"]);
          }).subscribe();
        }
      }]);

      return SupabaseService;
    }();

    SupabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SupabaseService);
    /***/
  },

  /***/
  "./src/app/summery/summery.component.scss":
  /*!************************************************!*\
    !*** ./src/app/summery/summery.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSummerySummeryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".summary {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.item {\n  text-align: center;\n  color: #f3ecc2;\n}\n\n.item h1 > span {\n  color: #e8505b;\n}\n\n.item button {\n  text-transform: uppercase;\n  background-color: #e8505b;\n  color: #f3ecc2;\n  font-size: large;\n  padding: 10px;\n  font-family: \"Roboto Condensed\", sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhZmZpb3NvL0RvY3VtZW50cy9naXQvZ2VvcXVpei1rYmgvc3JjL2FwcC9zdW1tZXJ5L3N1bW1lcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N1bW1lcnkvc3VtbWVyeS5jb21wb25lbnQuc2NzcyIsIi9ob21lL2JhZmZpb3NvL0RvY3VtZW50cy9naXQvZ2VvcXVpei1rYmgvc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxjRWJXO0FEWWY7O0FER0k7RUFDSSxjRW5CTTtBRGtCZDs7QURJSTtFQUNJLHlCQUFBO0VBQ0EseUJFeEJNO0VGeUJOLGNFdEJPO0VGdUJQLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNEQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9zdW1tZXJ5L3N1bW1lcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuLnN1bW1hcnkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkZm91cnRoLWNvbG9yO1xuXG4gICAgaDEgPiBzcGFuIHtcbiAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICAgICBjb2xvcjogJGZvdXJ0aC1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbiIsIi5zdW1tYXJ5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLml0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZjNlY2MyO1xufVxuLml0ZW0gaDEgPiBzcGFuIHtcbiAgY29sb3I6ICNlODUwNWI7XG59XG4uaXRlbSBidXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg1MDViO1xuICBjb2xvcjogI2YzZWNjMjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59IiwiJG1haW4tY29sb3I6ICAjZTg1MDViO1xuJHNlY29uZC1jb2xvcjogI2Y5ZDU2ZTtcbiR0aGlyZC1jb2xvcjogIzE0YjFhYjtcbiRmb3VydGgtY29sb3I6ICNmM2VjYzI7XG5cbiRtYWluLWZvbnQ6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjsiXX0= */";
    /***/
  },

  /***/
  "./src/app/summery/summery.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/summery/summery.component.ts ***!
    \**********************************************/

  /*! exports provided: SummeryComponent */

  /***/
  function srcAppSummerySummeryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummeryComponent", function () {
      return SummeryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SummeryComponent = /*#__PURE__*/function () {
      function SummeryComponent() {
        _classCallCheck(this, SummeryComponent);

        this.replay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SummeryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "playAgain",
        value: function playAgain() {
          this.replay.emit();
        }
      }]);

      return SummeryComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SummeryComponent.prototype, "distance", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SummeryComponent.prototype, "replay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SummeryComponent.prototype, "scoreBoard$", void 0);
    SummeryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-summery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/summery/summery.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summery.component.scss */
      "./src/app/summery/summery.component.scss"))["default"]]
    })], SummeryComponent);
    /***/
  },

  /***/
  "./src/assets/tmf.ts":
  /*!***************************!*\
    !*** ./src/assets/tmf.ts ***!
    \***************************/

  /*! exports provided: tmf */

  /***/
  function srcAssetsTmfTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tmf", function () {
      return tmf;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var tmf = {
      "type": "FeatureCollection",
      "name": "tmf_centroid",
      "crs": {
        "type": "name",
        "properties": {
          "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
      },
      "features": [{
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Krogebjergparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.464967929424795, 55.696570152079417]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Utterslev Mose",
          "wikidata": "Q3375626",
          "name": "Utterslev Mose",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.505604273162316, 55.716293710179215]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Superkilen",
          "wikidata": "Q3466525",
          "name": "Superkilen",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.543134473535181, 55.701729087044313]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Kildevældsparken",
          "wikidata": "Q12321805",
          "name": "Kildevældsparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.566825100757175, 55.714728740303812]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Nørrebroparken",
          "wikidata": "Q4993439",
          "name": "Nørrebroparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5418252683313, 55.695837058449079]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Vigerslevparken",
          "wikidata": "Q16325001",
          "name": "Vigerslevparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.487183994484374, 55.653705052455038]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Vestvolden",
          "wikidata": "Q3375908",
          "name": "Vestvolden",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.433091296599631, 55.665996507060534]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Grøndalsparken",
          "wikidata": "Q28167845",
          "name": "Grøndalsparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.49667490002266, 55.683730525287572]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Christianshavns Vold",
          "wikidata": "Q5110643",
          "name": "Christianshavns Vold",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.598508925270995, 55.673268208260893]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Ørstedsparken",
          "wikidata": "Q2686981",
          "name": "Ørstedsparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.566422015180498, 55.681123794731789]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Botanisk Have (København)",
          "wikidata": "Q892711",
          "name": "Botanisk Have",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.573925981175682, 55.686875759990897]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Hørsholmparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.542796911512911, 55.691711177519963]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Filipsparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.61725582781842, 55.653843131923225]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Fredens Park",
          "wikidata": "Q12312487",
          "name": "Fredens Park",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.568237579251388, 55.693189216391353]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Amorparken",
          "wikidata": "Q12301306",
          "name": "Amorparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.564370912341067, 55.695532201151984]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Mindelunden i Ryvangen",
          "wikidata": "Q3359393",
          "name": "Mindelunden",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5657786791413, 55.725954483269462]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Gandhiparken",
          "wikidata": "Q57389607",
          "name": "Gandhiparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.523560908250067, 55.697730767731031]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Søborg Mose",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.519860720809747, 55.725092340595481]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q23754075",
          "name": "Lergravsparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.619035174497878, 55.661989086471671]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Amager Strandpark - Tiøren",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.643563580350193, 55.648564110548044]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Amager Strandpark - Femøren",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.646040324151995, 55.646722142908693]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Kastrup Strandpark",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.646847459435051, 55.643074400908823]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Lersøparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.543645243515707, 55.709829350630336]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Kildevældssøen",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.567122420822249, 55.71472464021096]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Classens Have",
          "wikidata": "Q10454587",
          "name": "Classens Have",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.588914251339549, 55.69781570954607]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Damhusengen",
          "wikidata": "Q12307087",
          "name": "Damhusengen",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.469630580172854, 55.685552065016815]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "en:Skydebanehaven",
          "wikidata": "Q16324474",
          "name": "Skydebanehaven",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.553706541982061, 55.670515105765368]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Enghaveparken (København)",
          "wikidata": "Q5377611",
          "name": "Enghaveparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.542140218908969, 55.667076700105646]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Det Kongelige Biblioteks Have",
          "wikidata": "Q3375611",
          "name": "Bibliotekshaven",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.58129539833844, 55.674649868576395]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Høje Gladsaxe Park",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.49123690307886, 55.725449211615143]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Hulgårds Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.522168828311141, 55.705109096179434]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Enveloppeparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.592131876865489, 55.668250489038691]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Vestvolden",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.477761402931053, 55.716809995501855]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Guldbergs Plads",
          "wikidata": "Q22916523",
          "name": "Guldbergs Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.553952738936029, 55.697113847397588]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Ryvangens Naturpark",
          "wikidata": "Q12334065",
          "name": "Ryvangens Naturpark",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.565965348862147, 55.722892210705986]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Pistolskydebanen",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.563871419115733, 55.722603364396122]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Piosplænen",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.53321746135698, 55.64978654878982]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Byparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.576942166772325, 55.633666770500334]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q19373582",
          "name": "Hans Tavsens Park",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.547723464570652, 55.689131281034456]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Otto Krabbes Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.55264660595814, 55.670185110502366]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Sankt Pauls Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5866829, 55.6874112]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Churchillparken",
          "wikidata": "Q3375933",
          "name": "Churchillparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.59520506470545, 55.688441159354362]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Folkets Park (København)",
          "wikidata": "Q5464544",
          "name": "Folkets Park",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.554679921733953, 55.687522207421708]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Litauens Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.55218855, 55.6677056]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Hjalmar Brantings Plads",
          "wikidata": "Q55776578",
          "name": "Hjalmar Brantings Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.581590019156453, 55.692283726028322]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Valbyparken",
          "wikidata": "Q12008828",
          "name": "Valbyparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.518748638300679, 55.641174043253962]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Ågade Park",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.538391668059743, 55.689628956581323]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q78657951",
          "name": "Sundbyvesterparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.601987304234244, 55.6512100773528]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Skovbrynet",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.582020004166836, 55.632478689206984]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q78647357",
          "name": "Nordvestparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.523986402247276, 55.703583217766514]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Fremtidsskoven",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.601072955278905, 55.673245734605437]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Glyptotekshaven",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5712155495427, 55.672120228700742]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Højsager Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.483861116161172, 55.660898543900316]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Marie Christensens Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.494686790644566, 55.693449137771758]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:BaNanna Park",
          "wikidata": "Q12302697",
          "name": "BaNanna Park",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.549880781299692, 55.700108207296978]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Søndermarken",
          "wikidata": "Q7061127",
          "name": "Søndermarken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.524728061555823, 55.669160948464608]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Østre Anlæg (København)",
          "wikidata": "Q3089054",
          "name": "Østre Anlæg",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.580637956360576, 55.690212240593127]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Kongens Have",
          "wikidata": "Q1898947",
          "name": "Kongens Have",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.579646777675396, 55.685187742651443]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q12317328",
          "name": "Hothers Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.541205523189031, 55.701769259631014]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Mimersparken",
          "wikidata": "Q17259238",
          "name": "Mimersparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.540671443371346, 55.704331696306035]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Rødegårdsparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.611437909341758, 55.661061848683445]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Eidsvoll Plads",
          "wikidata": "Q17165570",
          "name": "Eidsvoll Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.587823300461197, 55.690884824803902]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Remiseparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.595977377914121, 55.651300863880081]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "en:J. C. Jacobsen Garden",
          "wikidata": "Q15229068",
          "name": "J.C. Jacobsens Have",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.533359854168211, 55.664371752686826]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Rødkildeparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.510469269789967, 55.698265784170253]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Heerup-Haven",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.596483716565045, 55.686582900064629]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Amaliehaven",
          "wikidata": "Q3434243",
          "name": "Amaliehaven",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.595141349860215, 55.68361353875332]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Valbyparkspejderne",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.52401517240399, 55.645798982219254]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Thors Have",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.547256485048127, 55.696539604676651]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Søholmslund",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.556007403933263, 55.723226173556128]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Fælledparken",
          "wikidata": "Q2562401",
          "name": "Fælledparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.568083532552606, 55.702264303660392]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Poul Henningsens Plads",
          "wikidata": "Q12332168",
          "name": "Poul Henningsens Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.577003871569982, 55.708607942628134]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Kildevældslegepladsen",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.565301404482605, 55.714227666868155]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Kastrup Fort",
          "wikidata": "Q11980380",
          "name": "Kastrup Fort",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.639698361469804, 55.648509737880048]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "kastanjetræer",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.565717050754023, 55.689776667716949]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Husum Bypark",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.478438515512902, 55.709925462233009]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q16985431",
          "name": "Brønshøjparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.508504409480787, 55.706673208855989]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Emaljehaven",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.53456513456312, 55.704392008216175]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Christianshavns Enveloppe",
          "wikidata": "Q28837098",
          "name": "Christianshavns Enveloppe",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.608499238173723, 55.675965179173652]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Beboerhusets park",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.600906521803505, 55.652364060560018]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Trondhjems Plads",
          "wikidata": "Q16324819",
          "name": "Trondhjems Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5884559, 55.6941791]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Pistolskydebanen",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.565513832373625, 55.724294357386782]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Havneparken",
          "wikidata": "Q3430665",
          "name": "Havneparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.575307665988559, 55.666203907512681]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Voldparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.479133893817204, 55.71408567192092]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Skotlandsplads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.604874736122952, 55.658120350875876]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "park",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.568460147798893, 55.659090105512099]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Stærepark",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.522555478657054, 55.702540277514387]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "One tree park",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5498948, 55.66807093333334]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Carl Jacobsens Have",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.530094641210223, 55.666660255538559]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Odins Lomme",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.550434911935996, 55.696982541567131]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Byfælleden",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.571433738355594, 55.62458825822327]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Teglholmens Grønne Kile",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.541843585343182, 55.652692576620666]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Den Grønne Kile",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.547581190630114, 55.651579994697819]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Dyrelegepladsen i Valby",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.500845327745312, 55.648752495786006]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Blegdamsfælleden",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.567585121921397, 55.700838506711975]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Klosterfælleden",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.569524405412645, 55.705444809126568]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Kulbaneparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.494499651872639, 55.65777503993273]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Hannemanns Park",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.578774561302428, 55.627026914732163]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Vesten for humlen",
          "wikidata": "Q91412496",
          "name": "Vesten for Humlen",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.537051112695643, 55.667121286734023]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Saxopark",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.551344068710295, 55.670804505661295]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Grønttorvsparken",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.50473733890116, 55.654898712617879]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Kofoeds Plads",
          "type": "park"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.618229184434243, 55.66611044784235]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q57543236",
          "name": "Drengen med svanen",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.579980159674301, 55.685150998999696]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Caritasbrønden",
          "wikidata": "Q3431282",
          "name": "Caritasbrønden",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.57234441555037, 55.678074510056888]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Gefionspringvandet",
          "wikidata": "Q952817",
          "name": "Gefionspringvandet",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.597572232277951, 55.689260213888403]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Spejlbassin",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.577173243362179, 55.676123338097078]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Storkespringvandet",
          "wikidata": "Q3428616",
          "name": "Storkespringvandet",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.57957006301706, 55.678836393943108]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Dragespringvandet",
          "wikidata": "Q2386053",
          "name": "Dragespringvandet",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.568578694779545, 55.675703517280304]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Enhjørningens Fontæne",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.537872713656119, 55.694385638730154]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Artemisspringvandet",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.548240790666494, 55.688954020509364]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Lille Gefionspringvand",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.540505981675897, 55.713257629607163]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Herakles springvand",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5549738, 55.6722258]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Amagerfolk",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.6065677, 55.6553139]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q57543771",
          "name": "Vandkunsten",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5741407, 55.6760886]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Herakles springvand",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5549738, 55.6722258]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Amagerfolk",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.6065677, 55.6553139]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q57543771",
          "name": "Vandkunsten",
          "type": "springvand"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5741407, 55.6760886]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q81614499",
          "name": "Bopa Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.581145971734697, 55.705261097358346]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Amagerbro Torv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.602941513754566, 55.663399245097395]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Gråbrødretorv",
          "wikidata": "Q4572693",
          "name": "Gråbrødretorv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.575918378730458, 55.679869791321508]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Balders Plads",
          "wikidata": "Q12302776",
          "name": "Balders Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.548794684578853, 55.701338247317373]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Kultorvet",
          "wikidata": "Q12323100",
          "name": "Kultorvet",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.574127943959148, 55.682463630838718]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Blågårds Plads",
          "wikidata": "Q4930917",
          "name": "Blågårds Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.557106212968765, 55.686419887480888]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Onkel Dannys Plads",
          "wikidata": "Q12330304",
          "name": "Onkel Dannys Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.560688135274294, 55.66985791476295]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q12068230",
          "name": "Sankt Jakobs Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.577910134961176, 55.703250511328356]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Victor Borges Plads",
          "wikidata": "Q7925740",
          "name": "Victor Borges Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.580875619683162, 55.701585334339413]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Amagertorv",
          "wikidata": "Q4572749",
          "name": "Amagertorv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.578612179210918, 55.678761855963465]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Nytorv",
          "wikidata": "Q3289863",
          "name": "Nytorv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.573055031699324, 55.67752642010948]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Trianglen (København)",
          "wikidata": "Q12339755",
          "name": "Trianglen",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.577445730370481, 55.699321233788311]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Sankt Hans Torv",
          "wikidata": "Q7418759",
          "name": "Sankt Hans Torv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.560651776172147, 55.690775420374031]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Gammeltorv (København)",
          "wikidata": "Q3289837",
          "name": "Gammeltorv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.572170868632183, 55.678133216742424]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q5110637",
          "name": "Christiansborg Slotsplads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.581051533133701, 55.676439649960159]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Bispetorvet (København)",
          "wikidata": "Q3378448",
          "name": "Bispetorvet",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.571726047238945, 55.679131402798774]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Trinitatis Kirkeplads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.576548088348668, 55.681558001801974]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q7923418",
          "name": "Vesterbro Torv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.555091613586857, 55.672058998453743]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Tove Ditlevsens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.5455485, 55.669249433333334]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Axeltorv (København)",
          "wikidata": "Q11959872",
          "name": "Axeltorv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.564140027196412, 55.676145753247859]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q21250772",
          "name": "Sankt Nikolaj Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.581643089728576, 55.67870334234054]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q8079249",
          "name": "Østerfælled Torv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.576057749975517, 55.705747834439698]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Møntmester Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.521723453436557, 55.707499895414834]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q12343225",
          "name": "Toftegårds Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.517321300110298, 55.662181114204841]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Prins Jørgens Gård",
          "wikidata": "Q12332361",
          "name": "Prins Jørgens Gård",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.579290575165199, 55.676648777045649]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Brønshøj Torv",
          "wikidata": "Q12304580",
          "name": "Brønshøj torv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.498338349340409, 55.704223767458984]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Magasins Torv",
          "wikidata": "Q11987737",
          "name": "Magasins Torv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.582712594543883, 55.679506492708718]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q11967560",
          "name": "Enghave Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.545484046311275, 55.666978820130176]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Porcelænstorvet",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.510043403157553, 55.664859665446258]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Thorkilds Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.600327515158606, 55.673196184767747]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Karl Madsens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.598818626122036, 55.673802566080958]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q24053218",
          "name": "Valby Tingsted",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.514089483800337, 55.665935613882091]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q12341895",
          "name": "Æggetorvet",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.571347948227517, 55.682608240754483]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Christianshavns Torv",
          "wikidata": "Q3366249",
          "name": "Christianshavns Torv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.591328240806929, 55.672092853026008]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q98658948",
          "name": "Den Røde Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.542450642840603, 55.699662481581477]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Frode Jakobsens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.49079223875043, 55.687103164147871]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Vanløse Torv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.490500238015221, 55.687605043706618]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Nyboder Plads",
          "wikidata": "Q20742907",
          "name": "Nyboder Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.586136572646742, 55.689374773646982]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Theodor Christensens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.605078867353765, 55.681161756013275]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Monrads Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.501173150762654, 55.667764274232368]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q98658520",
          "name": "Den Sorte Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.542678393626749, 55.701176771362746]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Det Genmodificerede Paradis",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.599626434833025, 55.698227167897144]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Israels Plads",
          "wikidata": "Q4964733",
          "name": "Israels Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.568402203247267, 55.682932532582022]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Grøndal Torv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.513041007170337, 55.693175282638677]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Liva Weels Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.546102809640209, 55.665443515720312]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q12317501",
          "name": "Husum Torv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.471658610406003, 55.711796297397925]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Yrsa Plads",
          "wikidata": "Q12341725",
          "name": "Yrsas Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.55807542506507, 55.665341687952811]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Cirkeline Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.543817179968661, 55.666090748356417]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Svend Aukens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.584710658347252, 55.664653013667035]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Franciska Clausens Plads",
          "wikidata": "Q99641204",
          "name": "Franciska Clausen Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.534030193252024, 55.666133766482965]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Kongens Nytorv",
          "wikidata": "Q1589941",
          "name": "Kongens Nytorv",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.585960232234896, 55.680486217200396]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Guldberg Byplads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.55300335608907, 55.693446758349019]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Boltens Gård",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.585221222535056, 55.68218775353558]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q62655222",
          "name": "Borups Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.539288515191698, 55.691395768527769]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Axel Larsens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.54170407929681, 55.698745894438417]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Amerika Plads",
          "wikidata": "Q11217949",
          "name": "Amerika Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.593971646891401, 55.699529847115421]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Halmtorvet",
          "wikidata": "Q5643290",
          "name": "Halmtorvet",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.560818294041479, 55.670421784372074]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q12315446",
          "name": "Hans Knudsens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.56074288343153, 55.712956620248406]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Melchiors Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.585492364292946, 55.703413606619151]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Sølvtorvet",
          "wikidata": "Q12338344",
          "name": "Sølvtorvet",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.574520879411613, 55.689431914292967]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "en:Dantes Plads",
          "wikidata": "Q12307746",
          "name": "Dantes Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.573540844065434, 55.673579872193642]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Göteborg Plads",
          "wikidata": "Q21853581",
          "name": "Göteborg Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.597073161799504, 55.706893172749375]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q12314642",
          "name": "Gunnar Nu Hansens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.575061701657326, 55.704926299720022]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q12340524",
          "name": "Vandkunsten",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.57422907177374, 55.676093387261524]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Sundbyøster Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.612540631200227, 55.651898649579465]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Sikeborg Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.58508492517632, 55.704902607568421]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Sankt Thomas Plads",
          "wikidata": "Q7418767",
          "name": "Sankt Thomas Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.546959339475798, 55.673274535517294]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Sundbyvester Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.613080263408101, 55.64641401715982]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q41529306",
          "name": "Anker Jørgensens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.536536056336926, 55.651191866128144]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Ofelia Plads",
          "wikidata": "Q12329915",
          "name": "Ofelia Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.59573493927382, 55.681654649835792]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Viggo Kampmanns Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.565259802086642, 55.654896980869985]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Rigsdagsgården",
          "wikidata": "Q12333473",
          "name": "Rigsdagsgården",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.580579547317416, 55.675459420902513]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q81614774",
          "name": "Jens Nielsens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.577959370492557, 55.715414847942675]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Højbro Plads",
          "wikidata": "Q3434130",
          "name": "Højbro Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.579878589771958, 55.678302259291314]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Frue Plads",
          "wikidata": "Q15221151",
          "name": "Frue Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.57263963890771, 55.679681021743178]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Rådhuspladsen",
          "wikidata": "Q2178686",
          "name": "Rådhuspladsen",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.568610152705249, 55.676071690706159]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Regnbuepladsen",
          "wikidata": "Q16335302",
          "name": "Regnbuepladsen",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.57103704412585, 55.675648162301179]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Bertel Thorvaldsens Plads",
          "wikidata": "Q3375895",
          "name": "Bertel Thorvaldsens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.577449592991687, 55.676270496786941]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Søren Kierkegaards Plads",
          "wikidata": "Q7666566",
          "name": "Søren Kierkegaards Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.580897509933164, 55.672992607415807]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Byparken",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.554750583293984, 55.64952038250884]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Sankt Annæ Plads",
          "wikidata": "Q3365803",
          "name": "Sankt Annæ Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.591591071907972, 55.681522131296326]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q88449768",
          "name": "Karen Blixens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.589127238882122, 55.661905609800527]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q57516692",
          "name": "Bryghuspladsen",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.578772722310811, 55.672433466345289]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q57547049",
          "name": "Georg Brandes Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.578484829497983, 55.687492218790645]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Kirkepladsen",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.593875521404803, 55.69139206088078]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Paradeplads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.595671430291908, 55.692097906135807]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q3359396",
          "name": "Søtorvet",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.565120870128052, 55.68616210421775]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q62606688",
          "name": "Mozarts Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.534052658455153, 55.648771999992761]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Købkes Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.535647849371394, 55.667158454235086]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q64519379",
          "name": "Lyngsies Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.537666179098013, 55.70141423288343]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q65007897",
          "name": "Sifs Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.557447737766074, 55.703464926007833]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q66363949",
          "name": "Nina Bangs Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.57768280444909, 55.681847242207617]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Gammel Strand",
          "wikidata": "Q3434140",
          "name": "Gammel Strand",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.578323209513393, 55.677514145259259]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Hauser Plads",
          "wikidata": "Q11974521",
          "name": "Hauser Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.575663486209535, 55.682762323901592]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q64152223",
          "name": "Staunings Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.563289682442855, 55.678160039674488]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Folmer Bendtsens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.53804217614314, 55.700129369869472]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Ove Rodes Plads",
          "wikidata": "Q12330678",
          "name": "Ove Rodes Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.572960473301524, 55.707412524845815]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Bryggernes Plads",
          "wikidata": "Q91353169",
          "name": "Bryggernes Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.532584435783551, 55.666724345409982]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Morten Grunwalds Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.582178672547629, 55.709906372725811]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Smedetoftens Plads",
          "type": "plads"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.522402926195213, 55.709533619059179]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Vestmosen",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.493435671502512, 55.713409766112441]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Damhus Sø",
          "wikidata": "Q12307086",
          "name": "Damhussøen",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.477298314284754, 55.676514495376381]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q7563773",
          "name": "Sortedams Sø",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.57126928198999, 55.692045956702955]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q31928189",
          "name": "Sankt Jørgens Sø",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.557830098165756, 55.677818573407095]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Grønjordssøen",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.58486556492406, 55.651668414497188]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q64706701",
          "name": "Tivolisøen",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.56968588919246, 55.673897452799586]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": "da:Emdrup Sø",
          "wikidata": "Q12309929",
          "name": "Emdrup Sø",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.549924613144043, 55.722748215843261]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q23754102",
          "name": "Minebådsgraven",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.611062651040211, 55.68572694703365]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Terneø",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.497794210727823, 55.71436559091552]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q60772947",
          "name": "Peblinge Sø",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.561467114188497, 55.684299720717405]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Fugle Ø",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.47564420522335, 55.67879839963372]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": "Q18229582",
          "name": "Pirateriet",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.569144033018725, 55.674119078682402]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Vagthussøen",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.569640923686942, 55.646865967476586]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Teglholm",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.491557016018062, 55.713340192444008]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Fugleøen",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.573792613117874, 55.694336282816835]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Fiskeøen",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.566506174668579, 55.689469522511139]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Utterslev gadekær",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.516446388472016, 55.71035828141855]
        }
      }, {
        "type": "Feature",
        "properties": {
          "wikipedia": null,
          "wikidata": null,
          "name": "Bademosen",
          "type": "sø"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [12.493430580362737, 55.72256616396696]
        }
      }]
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      mapboxToken: 'pk.eyJ1IjoiYmFmZmlvc28iLCJhIjoiT1JTS1lIMCJ9.f5ubY91Bi42yPnTrgiq-Gw',
      supabaseUrl: 'https://gwkpwfeokmoiieserdzv.supabase.co',
      supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODM5NTU2MywiZXhwIjoxOTUzOTcxNTYzfQ.TQTQVltISuOMjNzWYLppIglvLgAHOpsDqpZyB9SS3uM',
      quizName: 'KK Quiz'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/baffioso/Documents/git/geoquiz-kbh/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map