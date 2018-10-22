(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("underscore"), require("react"), require("urijs"), require("react-dom"), require("tcomb-validation"), require("tcomb-react"), require("speakingurl"));
	else if(typeof define === 'function' && define.amd)
		define(["underscore", "react", "urijs", "react-dom", "tcomb-validation", "tcomb-react", "speakingurl"], factory);
	else if(typeof exports === 'object')
		exports["scrivito"] = factory(require("underscore"), require("react"), require("urijs"), require("react-dom"), require("tcomb-validation"), require("tcomb-react"), require("speakingurl"));
	else
		root["scrivito"] = factory(root["underscore"], root["react"], root["urijs"], root["react-dom"], root["tcomb-validation"], root["tcomb-react"], root["speakingurl"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__10__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function () {};

if (false) {}

module.exports = warning;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) { // Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())

var setTimeoutFunc = setTimeout;

function noop() {} // Polyfill for Function.prototype.bind


function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];
  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }

  if (self._state === 0) {
    self._deferreds.push(deferred);

    return;
  }

  self._handled = true;

  Promise._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }

    var ret;

    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }

    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;

      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }

    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function () {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }

  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}
/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */


function doResolve(fn, self) {
  var done = false;

  try {
    fn(function (value) {
      if (done) return;
      done = true;
      resolve(self, value);
    }, function (reason) {
      if (done) return;
      done = true;
      reject(self, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function (onFulfilled, onRejected) {
  var prom = new this.constructor(noop);
  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function (callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return constructor.resolve(callback()).then(function () {
      return constructor.reject(reason);
    });
  });
};

Promise.all = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;

          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }

        args[i] = val;

        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function (value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function (resolve) {
    resolve(value);
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
}; // Use polyfill for setImmediate for performance gains


Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
  setImmediate(fn);
} || function (fn) {
  setTimeoutFunc(fn, 0);
};

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11).setImmediate))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(12); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7), __webpack_require__(13)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var public_authentication_namespaceObject = {};
__webpack_require__.r(public_authentication_namespaceObject);
__webpack_require__.d(public_authentication_namespaceObject, "ERROR_CODE_CLIENT_VERIFICATION_REQUIRED", function() { return ERROR_CODE_CLIENT_VERIFICATION_REQUIRED; });
__webpack_require__.d(public_authentication_namespaceObject, "perform", function() { return perform; });
__webpack_require__.d(public_authentication_namespaceObject, "reset", function() { return public_authentication_reset; });
__webpack_require__.d(public_authentication_namespaceObject, "currentState", function() { return public_authentication_currentState; });
var attribute_deserializer_namespaceObject = {};
__webpack_require__.r(attribute_deserializer_namespaceObject);
__webpack_require__.d(attribute_deserializer_namespaceObject, "deserialize", function() { return deserialize; });
var infopark_integration_test_support_namespaceObject = {};
__webpack_require__.r(infopark_integration_test_support_namespaceObject);
__webpack_require__.d(infopark_integration_test_support_namespaceObject, "alwaysShowOptionMarkers", function() { return alwaysShowOptionMarkers; });
__webpack_require__.d(infopark_integration_test_support_namespaceObject, "isFetchingActive", function() { return isFetchingActive; });
__webpack_require__.d(infopark_integration_test_support_namespaceObject, "enableForceVerification", function() { return enableForceVerification; });
__webpack_require__.d(infopark_integration_test_support_namespaceObject, "currentPublicAuthorizationState", function() { return currentPublicAuthorizationState; });

// CONCATENATED MODULE: ./init/connect_to_ui.ts
// checks whether the UI is present
// if so, returns an instance of UiConnection
function connectToUi() {
    // check if there's a parent frame
    if (window.parent === window) {
        return;
    }
    var connectAppDocument;
    // try to access the parent frame
    try {
        connectAppDocument = window.parent.connectAppDocument;
    }
    catch (_a) {
        // if not possible, then it's not the UI
    }
    if (connectAppDocument) {
        return connectAppDocument(window.document);
    }
}

// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(0);
var external_underscore_default = /*#__PURE__*/__webpack_require__.n(external_underscore_);

// CONCATENATED MODULE: ./scrivito_sdk/common/pretty_print.js

function prettyPrint(input) {
  try {
    if (Object(external_underscore_["isFunction"])(input)) {
      return printFunction(input);
    }

    if (Object(external_underscore_["isObject"])(input)) {
      return printObject(input);
    }

    return printTruncated(input);
  } catch (_e) {
    return '';
  }
}

function printObject(object) {
  var basicContent = object._scrivitoPrivateContent;

  if (basicContent && Object(external_underscore_["isFunction"])(basicContent.toPrettyPrint)) {
    return basicContent.toPrettyPrint();
  }

  if (Object(external_underscore_["isElement"])(object)) {
    return "[object HTMLElement ".concat(printTruncated(object.outerHTML), "]");
  }

  return printTruncated(object);
}

function printFunction(fn) {
  var schema = fn._scrivitoPrivateSchema;

  if (schema) {
    return "[class ".concat(schema.name, "]");
  }

  if (fn.prototype && fn.prototype.isReactComponent) {
    var name = fn.displayName || fn.name;
    return "[class React.Component \"".concat(name, "\"]");
  }

  return truncate(fn.toString());
}

function printTruncated(input) {
  var stringified = JSON.stringify(input);

  if (stringified) {
    return truncate(stringified);
  }

  return stringified;
}

function truncate(string) {
  if (string.length > 100) {
    return "".concat(string.slice(0, 100), "...");
  }

  return string;
}
// CONCATENATED MODULE: ./scrivito_sdk/common/errors.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TRANSFORM_SOURCE_ERROR_PREFIX = 'binary.unprocessable.image.transform.source.';
var TRANSFORM_SOURCE_TOO_LARGE = 'binary.unprocessable.image.transform.source.too_large';
var ScrivitoError = /** @class */ (function (_super) {
    __extends(ScrivitoError, _super);
    function ScrivitoError(message, captureStackTrace) {
        var _newTarget = this.constructor;
        if (captureStackTrace === void 0) { captureStackTrace = true; }
        var _this = 
        // 'Error' breaks prototype chain here
        _super.call(this, message) || this;
        // restore prototype chain
        // see: https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        var correctPrototype = _newTarget.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_this, correctPrototype);
        }
        else {
            _this.__proto__ = correctPrototype;
        }
        // message should be set before capturing stacktrace
        // since it is featured in the stacktrace in some environments.
        _this._captureStackTrace = captureStackTrace;
        if (captureStackTrace) {
            if (Error.captureStackTrace) {
                Error.captureStackTrace(_this, _this.constructor);
            }
            else {
                var stack = void 0;
                try {
                    throw new Error();
                }
                catch (error) {
                    stack = error.stack;
                }
                Object.defineProperty(_this, 'stack', { value: stack });
            }
        }
        return _this;
    }
    Object.defineProperty(ScrivitoError.prototype, "name", {
        get: function () {
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrivitoError.prototype, "captureStackTrace", {
        // For test purpose only.
        get: function () {
            return !!this._captureStackTrace;
        },
        enumerable: true,
        configurable: true
    });
    return ScrivitoError;
}(Error));

var ClientError = /** @class */ (function (_super) {
    __extends(ClientError, _super);
    function ClientError(message, httpCode, backendCode) {
        var _this = _super.call(this, message) || this;
        _this.httpCode = httpCode;
        _this.backendCode = backendCode;
        return _this;
    }
    ClientError.for = function (message, httpCode, backendCode) {
        if (backendCode === TRANSFORM_SOURCE_TOO_LARGE) {
            return new TransformationSourceTooLargeError(message, httpCode, backendCode);
        }
        if (backendCode &&
            backendCode.indexOf(TRANSFORM_SOURCE_ERROR_PREFIX) !== -1) {
            return new TransformationSourceInvalidError(message, httpCode, backendCode);
        }
        return new ClientError(message, httpCode, backendCode);
    };
    return ClientError;
}(ScrivitoError));

var AccessDeniedError = /** @class */ (function (_super) {
    __extends(AccessDeniedError, _super);
    function AccessDeniedError(message, httpCode, backendCode) {
        return _super.call(this, message, httpCode, backendCode) || this;
    }
    return AccessDeniedError;
}(ClientError));

var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(message) {
        return _super.call(this, message) || this;
    }
    return ArgumentError;
}(ScrivitoError));

var InternalError = /** @class */ (function (_super) {
    __extends(InternalError, _super);
    function InternalError(message) {
        return _super.call(this, message) || this;
    }
    return InternalError;
}(ScrivitoError));

var MissingAuthError = /** @class */ (function (_super) {
    __extends(MissingAuthError, _super);
    function MissingAuthError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MissingAuthError;
}(ScrivitoError));

var RequestFailedError = /** @class */ (function (_super) {
    __extends(RequestFailedError, _super);
    function RequestFailedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RequestFailedError;
}(ScrivitoError));

// public API
var ResourceNotFoundError = /** @class */ (function (_super) {
    __extends(ResourceNotFoundError, _super);
    function ResourceNotFoundError(message) {
        return _super.call(this, message) || this;
    }
    return ResourceNotFoundError;
}(ScrivitoError));

var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message, httpCode, backendCode, details) {
        var _this = _super.call(this, message, httpCode, backendCode) || this;
        _this.details = details || {};
        return _this;
    }
    return UnauthorizedError;
}(ClientError));

var TransformationSourceTooLargeError = /** @class */ (function (_super) {
    __extends(TransformationSourceTooLargeError, _super);
    function TransformationSourceTooLargeError(message, httpCode, backendCode) {
        return _super.call(this, message, httpCode, backendCode) || this;
    }
    return TransformationSourceTooLargeError;
}(ClientError));

var TransformationSourceInvalidError = /** @class */ (function (_super) {
    __extends(TransformationSourceInvalidError, _super);
    function TransformationSourceInvalidError(message, httpCode, backendCode) {
        return _super.call(this, message, httpCode, backendCode) || this;
    }
    return TransformationSourceInvalidError;
}(ClientError));

var TranslationError = /** @class */ (function (_super) {
    __extends(TranslationError, _super);
    function TranslationError(message) {
        return _super.call(this, message) || this;
    }
    return TranslationError;
}(InternalError));

var InterpolationError = /** @class */ (function (_super) {
    __extends(InterpolationError, _super);
    function InterpolationError(message) {
        return _super.call(this, message) || this;
    }
    return InterpolationError;
}(TranslationError));

var InMemoryTenantUnsupportedOperationError = /** @class */ (function (_super) {
    __extends(InMemoryTenantUnsupportedOperationError, _super);
    function InMemoryTenantUnsupportedOperationError(description) {
        return _super.call(this, description + " is not supported when using the in-memory tenant") || this;
    }
    return InMemoryTenantUnsupportedOperationError;
}(ScrivitoError));

var MultiSiteModeOperationError = /** @class */ (function (_super) {
    __extends(MultiSiteModeOperationError, _super);
    function MultiSiteModeOperationError(message) {
        return _super.call(this, message) || this;
    }
    return MultiSiteModeOperationError;
}(ScrivitoError));


// EXTERNAL MODULE: external "tcomb-validation"
var external_tcomb_validation_ = __webpack_require__(5);

// CONCATENATED MODULE: ./scrivito_sdk/common/tcomb.ts

/* tslint:disable-next-line:no-any */
external_tcomb_validation_["struct"].strict = true;
/* tslint:disable-next-line:no-any */
external_tcomb_validation_["interface"].strict = true;
/* tslint:disable-next-line:no-any */
external_tcomb_validation_["fail"] = function (message) {
    // original displays `[tcomb] ${message}`
    throw new TypeError(message);
};


// CONCATENATED MODULE: ./scrivito_sdk/common/next_tick.ts

var capturedDelayedFunctions = [];
var captureEnabled;
function nextTick(delayedFunction) {
    if (captureEnabled) {
        capturedDelayedFunctions.push(delayedFunction);
    }
    else {
        setTimeout(delayedFunction, 0);
    }
}
function throwNextTick(error) {
    nextTick(function () {
        throw error;
    });
}
// For test purpose only.
function simulateNextTicks() {
    if (!captureEnabled) {
        return;
    }
    var exceptions = [];
    while (capturedDelayedFunctions.length) {
        var currentFunctions = external_underscore_["shuffle"](capturedDelayedFunctions);
        capturedDelayedFunctions = [];
        external_underscore_["each"](currentFunctions, function (delayedFunction) {
            try {
                delayedFunction();
            }
            catch (e) {
                exceptions.push(e);
            }
        });
    }
    if (exceptions.length > 0) {
        throw exceptions[0];
    }
}
// For test purpose only.
function enableNextTickCapture() {
    captureEnabled = true;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/check_arguments_for.ts





function checkArgumentsFor(functionName, argumentsDefinitions, _a) {
    var docPermalink = _a.docPermalink;
    return function () {
        var givenArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            givenArguments[_i] = arguments[_i];
        }
        var errorMessage;
        try {
            errorMessage = errorMessageForArguments(givenArguments, argumentsDefinitions);
        }
        catch (e) {
            // if the type checker crashes (e.g. due to a bug in the SDK),
            // we don't want to crash the application because of this!
            throwNextTick(e);
        }
        if (errorMessage) {
            var moreInfo = "Visit https://scrivito.com/" + docPermalink + " for more information.";
            throw new ArgumentError("Invalid arguments for '" + functionName + "': " + errorMessage + " " + moreInfo);
        }
    };
}
function errorMessageForArguments(givenArguments, argumentsDefinitions) {
    var numExpected = argumentsDefinitions.length;
    var numGiven = givenArguments.length;
    if (numGiven > numExpected) {
        return "Expected " + numExpected + " arguments, got " + numGiven;
    }
    var errors = Object(external_underscore_["flatten"])(argumentsDefinitions.map(function (_a, index) {
        var argumentName = _a[0], argumentType = _a[1];
        var givenArgument = givenArguments[index];
        var validation = external_tcomb_validation_.validate(givenArgument, argumentType);
        return validation.errors.map(function (error) {
            return messageForError(argumentName, error);
        });
    }));
    if (errors.length > 0) {
        return errors.join(' ');
    }
}
function messageForError(argumentName, error) {
    var subjectDescription = subjectDescriptionForError(argumentName, error);
    if (error.actual === undefined) {
        return "Missing required " + subjectDescription + ".";
    }
    if (error.expected === external_tcomb_validation_.Nil) {
        return "Unexpected " + subjectDescription + ".";
    }
    var typeName = external_tcomb_validation_.getTypeName(error.expected);
    var message = "got " + prettyPrint(error.actual) + ", expected type " + typeName + ".";
    return "Unexpected value for " + subjectDescription + ": " + message;
}
function subjectDescriptionForError(argumentName, error) {
    var argumentDescription = "argument '" + argumentName + "'";
    if (error.path.length === 0) {
        return argumentDescription;
    }
    return "key '" + error.path.join('/') + "' in " + argumentDescription;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/context_container.ts
var ContextContainer = /** @class */ (function () {
    function ContextContainer() {
    }
    ContextContainer.prototype.current = function () {
        return this.currentContext;
    };
    ContextContainer.prototype.runWith = function (valueForFunction, fn) {
        var before = this.currentContext;
        try {
            this.currentContext = valueForFunction;
            return fn();
        }
        finally {
            this.currentContext = before;
        }
    };
    return ContextContainer;
}());
/* harmony default export */ var context_container = (ContextContainer);

// CONCATENATED MODULE: ./scrivito_sdk/common/deferred.ts

var deferred_Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new ScrivitoPromise(function (resolveFn, rejectFn) {
            _this.resolve = function (value) {
                _this.settled = true;
                resolveFn(value);
            };
            _this.reject = function (error) {
                _this.settled = true;
                rejectFn(error);
            };
        });
    }
    Deferred.prototype.isPending = function () {
        return !this.settled;
    };
    return Deferred;
}());
/* harmony default export */ var common_deferred = (deferred_Deferred);

// CONCATENATED MODULE: ./scrivito_sdk/common/run_and_catch_exception.ts
function runAndCatchException(fn) {
    try {
        return {
            errorThrown: false,
            result: fn(),
        };
    }
    catch (e) {
        return { errorThrown: true, error: e };
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/common/error_logging.ts
var consoleErrorIsDisabled = false;
function logError() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a;
    if (window && window.console && !consoleErrorIsDisabled) {
        (_a = window.console).error.apply(_a, args);
    }
}
function disableConsoleError() {
    consoleErrorIsDisabled = true;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/get_scrivito_version.ts

function getScrivitoVersion() {
    var version = "1.2.0-rc1-2451-gb144f33c9b";
    if (!version) {
        throw new InternalError('version info missing');
    }
    return version;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/asset_loading.ts
function loadCss(url, targetDocument) {
    if (targetDocument === void 0) { targetDocument = window.document; }
    var link = targetDocument.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    targetDocument.head.appendChild(link);
}
function loadJs(url, targetDocument) {
    if (targetDocument === void 0) { targetDocument = window.document; }
    var script = targetDocument.createElement('script');
    script.src = url;
    targetDocument.head.appendChild(script);
}

// CONCATENATED MODULE: ./scrivito_sdk/common/attribute_inflection.ts
var CONVERT_TO_CAMELCASE = /(_+)(\w)/g;
var CONVERT_TO_UNDERSCORE = /([A-Z])/g;
var TEST_ABBR_OR_NUMBER = /[A-Z]+|\d+/g;
var TEST_CAMEL_CASE = /^_?(_+[A-Z0-9]|[^_])+$/;
var TEST_SEPARATOR = /[_\s]+/g;
var TEST_TITLE_CASE_WORD = /[A-Z][a-z]+/g;
var TEST_UNDERSCORE = /^[a-z0-9_:]+$/;
function isUnderscore(name) {
    return TEST_UNDERSCORE.test(name);
}
function isCamelCase(name) {
    return TEST_CAMEL_CASE.test(name);
}
function underscore(name) {
    return name.replace(CONVERT_TO_UNDERSCORE, function (_match, group) { return "_" + group.toLowerCase(); });
}
function camelCase(name) {
    return name.replace(CONVERT_TO_CAMELCASE, function (match, underscores, nextChar, index) {
        if (!index) {
            return match;
        }
        if (nextChar.toUpperCase() === nextChar) {
            return match;
        }
        return "" + underscores.substr(1) + nextChar.toUpperCase();
    });
}
function classify(name) {
    var camelCased = camelCase(name);
    return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}
function sentenceCase(name) {
    return name
        .replace(TEST_SEPARATOR, ' ')
        .replace(TEST_TITLE_CASE_WORD, function (word) { return " " + word.toLowerCase(); })
        .replace(TEST_ABBR_OR_NUMBER, function (word) { return " " + word; })
        .trim()
        .replace(/./, function (c) { return c.toUpperCase(); });
}

// CONCATENATED MODULE: ./scrivito_sdk/common/input_types.js

var BlobType = external_tcomb_validation_.interface({
  size: external_tcomb_validation_.Number,
  type: external_tcomb_validation_.String
}, {
  name: 'Blob',
  strict: false
});
var FileType = BlobType.extend({
  name: external_tcomb_validation_.String
}, {
  name: 'File',
  strict: false
});
// CONCATENATED MODULE: ./scrivito_sdk/common/is_system_attribute.ts
function isSystemAttribute(attributeName) {
    return attributeName[0] === '_';
}

// CONCATENATED MODULE: ./scrivito_sdk/common/iterable.ts
function arrayFromIterable(iterable, size) {
    var iterator = iterable.iterator();
    var result = [];
    while (result.length !== size) {
        var next = iterator.next();
        if (next.done) {
            return result;
        }
        result.push(next.value);
    }
    return result;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/random.ts
function randomHex() {
    var hex = Math.floor(Math.random() * Math.pow(16, 8)).toString(16);
    while (hex.length < 8) {
        hex = "0" + hex;
    }
    return hex;
}
function randomId() {
    return randomHex() + randomHex();
}


// CONCATENATED MODULE: ./scrivito_sdk/common/throttle.ts

var shouldBypassThrottle = false;
function throttle(fn, ms, options) {
    return shouldBypassThrottle ? fn : external_underscore_["throttle"](fn, ms, options);
}
function bypassThrottle() {
    shouldBypassThrottle = true;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/types.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var INTEGER_RANGE_START = -9007199254740991;
var INTEGER_RANGE_END = 9007199254740991;
var BACKEND_FORMAT_REGEXP = /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/;
function deserializeAsInteger(value) {
  if (external_underscore_default.a.isString(value)) {
    if (value.match(/^-?\d+$/)) {
      return convertToInteger(value);
    }

    return null;
  }

  return convertToInteger(value);
}
function isValidInteger(value) {
  return isInteger(value) && INTEGER_RANGE_START <= value && value <= INTEGER_RANGE_END;
}
function isValidFloat(value) {
  return external_underscore_default.a.isNumber(value) && external_underscore_default.a.isFinite(value);
}
function deserializeAsDate(value) {
  if (!external_underscore_default.a.isString(value)) {
    return null;
  }

  if (!isValidDateString(value)) {
    throw new InternalError("The value is not a valid ISO date time: \"".concat(value, "\""));
  }

  return parseStringToDate(value);
}
function parseStringToDate(dateString) {
  if (!dateString) {
    return null;
  }

  var _dateString$match = dateString.match(BACKEND_FORMAT_REGEXP),
      _dateString$match2 = _slicedToArray(_dateString$match, 7),
      _match = _dateString$match2[0],
      year = _dateString$match2[1],
      month = _dateString$match2[2],
      day = _dateString$match2[3],
      hours = _dateString$match2[4],
      minutes = _dateString$match2[5],
      seconds = _dateString$match2[6];

  return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
}
function formatDateToString(date) {
  var yearMonth = "".concat(date.getUTCFullYear()).concat(pad(date.getUTCMonth() + 1));
  var dateHours = "".concat(pad(date.getUTCDate())).concat(pad(date.getUTCHours()));
  var minutesSeconds = "".concat(pad(date.getUTCMinutes())).concat(pad(date.getUTCSeconds()));
  return "".concat(yearMonth).concat(dateHours).concat(minutesSeconds);
}
function isValidDateString(dateString) {
  return external_underscore_default.a.isString(dateString) && dateString.match(/^\d{14}$/);
}

function pad(number) {
  return number < 10 ? "0".concat(number) : number;
}

function isInteger(value) {
  return external_underscore_default.a.isNumber(value) && external_underscore_default.a.isFinite(value) && Math.floor(value) === value;
}

function convertToInteger(valueFromBackend) {
  var intValue = parseInt(valueFromBackend, 10);

  if (intValue === 0) {
    return 0; // otherwise -0 could be returned.
  } else if (isValidInteger(intValue)) {
    return intValue;
  }

  return null;
}
// CONCATENATED MODULE: ./scrivito_sdk/common/wait.ts

function wait(seconds) {
    return waitMs(seconds * 1000);
}
function waitMs(milliseconds) {
    return new ScrivitoPromise(function (resolve) {
        setTimeout(resolve, milliseconds);
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/common/equals.ts

function equals(a, b) {
    if (isComparableObject(a) && isComparableObject(b)) {
        return a.equals(b);
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }
        return Object(external_underscore_["every"])(Object(external_underscore_["zip"])(a, b), function (_a) {
            var value1 = _a[0], value2 = _a[1];
            return equals(value1, value2);
        });
    }
    if (a && b) {
        return a.valueOf() === b.valueOf();
    }
    return a === b;
}
function isComparableObject(val) {
    if (!val) {
        return false;
    }
    return typeof val.equals === 'function';
}

// CONCATENATED MODULE: ./scrivito_sdk/common/promise_and_finally.ts
function promiseAndFinally(promise, handler) {
    return promise.then(function (value) {
        handler();
        return value;
    }, function (error) {
        handler();
        throw error;
    });
}

// EXTERNAL MODULE: ../node_modules/promise-polyfill/lib/index.js
var lib = __webpack_require__(9);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./scrivito_sdk/common/scrivito_promise.ts

// Scrivito uses the browser's native `Promise` implementation by default (or a polyfill).
var ScrivitoPromise;
if (typeof Promise !== 'undefined') {
    ScrivitoPromise = Promise;
}
else {
    ScrivitoPromise = lib_default.a;
}
// The promise implementation can be switched for unit testing purposes,
function setScrivitoPromise(PromiseClass) {
    ScrivitoPromise = PromiseClass;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/batch_retrieval.ts


var batch_retrieval_BatchRetrieval = /** @class */ (function () {
    function BatchRetrieval(mget, _a) {
        var batchSize = (_a === void 0 ? {} : _a).batchSize;
        this.mget = mget;
        this.batchSize = batchSize || 100;
        this.deferreds = {};
    }
    BatchRetrieval.prototype.retrieve = function (id) {
        var _this = this;
        if (Object(external_underscore_["isEmpty"])(this.deferreds)) {
            nextTick(function () { return _this.performRetrieval(); });
        }
        if (!this.deferreds[id]) {
            var deferred = new common_deferred();
            this.deferreds[id] = deferred;
        }
        return this.deferreds[id].promise;
    };
    // For test purpose only.
    BatchRetrieval.prototype.reset = function () {
        this.deferreds = {};
    };
    BatchRetrieval.prototype.performRetrieval = function () {
        var _this = this;
        var ids = Object(external_underscore_["keys"])(this.deferreds).slice(0, this.batchSize);
        if (ids.length === 0) {
            return;
        }
        var currentRequestDeferreds = {};
        ids.forEach(function (id) {
            currentRequestDeferreds[id] = _this.deferreds[id];
            delete _this.deferreds[id];
        });
        this.mget(ids).then(function (results) {
            ids.forEach(function (id, index) {
                var deferred = currentRequestDeferreds[id];
                var result = results[index];
                if (index < results.length) {
                    deferred.resolve(result);
                }
                else {
                    _this.retrieve(id).then(deferred.resolve, deferred.reject);
                }
            });
        }, function (error) {
            Object(external_underscore_["each"])(currentRequestDeferreds, function (deferred) { return deferred.reject(error); });
        });
        this.performRetrieval();
    };
    return BatchRetrieval;
}());
/* harmony default export */ var batch_retrieval = (batch_retrieval_BatchRetrieval);

// CONCATENATED MODULE: ./scrivito_sdk/common/index.ts
























// EXTERNAL MODULE: external "speakingurl"
var external_speakingurl_ = __webpack_require__(10);

// CONCATENATED MODULE: ./scrivito_sdk/models/convert_to_slug.ts

function convertToSlug(input) {
    if (typeof input !== 'string') {
        return '';
    }
    return external_speakingurl_(input);
}

// EXTERNAL MODULE: external "urijs"
var external_urijs_ = __webpack_require__(2);

// CONCATENATED MODULE: ./scrivito_sdk/models/parse_query.ts

function parseQuery(query) {
    // @types/urijs declares return value to be `Object` - unusable
    return external_urijs_["parseQuery"](query);
}

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_link.ts
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var basic_link_BasicLink = /** @class */ (function () {
    function BasicLink(attributes) {
        this.attributes = __assign({}, attributes);
    }
    BasicLink.prototype.title = function () {
        return this.attributes.title || null;
    };
    BasicLink.prototype.query = function () {
        return this.attributes.query || null;
    };
    BasicLink.prototype.hash = function () {
        return this.attributes.hash || null;
    };
    BasicLink.prototype.rel = function () {
        return this.attributes.rel || null;
    };
    BasicLink.prototype.target = function () {
        return this.attributes.target || null;
    };
    BasicLink.prototype.url = function () {
        return this.attributes.url || null;
    };
    BasicLink.prototype.objId = function () {
        return this.attributes.objId || null;
    };
    BasicLink.prototype.obj = function () {
        var objId = this.objId();
        if (!objId) {
            return null;
        }
        return basic_obj.get(objId);
    };
    BasicLink.prototype.queryParameters = function () {
        return parseQuery(this.query() || '');
    };
    BasicLink.prototype.isExternal = function () {
        return !!this.url();
    };
    BasicLink.prototype.isInternal = function () {
        return !this.isExternal();
    };
    BasicLink.prototype.equals = function (otherLink) {
        if (!(otherLink instanceof BasicLink)) {
            return false;
        }
        if (this.isExternal()) {
            return (this.hash() === otherLink.hash() &&
                this.query() === otherLink.query() &&
                this.rel() === otherLink.rel() &&
                this.target() === otherLink.target() &&
                this.title() === otherLink.title() &&
                this.url() === otherLink.url());
        }
        return (this.objId() === otherLink.objId() && this.title() === otherLink.title());
    };
    BasicLink.prototype.copy = function (attributes) {
        var newAttributes = __assign({}, this.attributes, attributes);
        if (attributes.objId && attributes.url) {
            throw new ArgumentError('Link#copy refused: both "objId" and "url" have been' +
                ' specified with truthy values');
        }
        if (attributes.objId) {
            newAttributes.url = null;
        }
        else if (attributes.url) {
            newAttributes.objId = null;
        }
        return new BasicLink(newAttributes);
    };
    BasicLink.prototype.isBroken = function () {
        if (this.isExternal()) {
            return false;
        }
        return !this.obj();
    };
    BasicLink.prototype.toPrettyPrint = function () {
        if (this.isInternal()) {
            return "[object Link objId=\"" + this.objId() + "\"]";
        }
        return "[object Link url=\"" + this.url() + "\"]";
    };
    return BasicLink;
}());
/* harmony default export */ var basic_link = (basic_link_BasicLink);

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_obj_facet_value.ts


var basic_obj_facet_value_BasicObjFacetValue = /** @class */ (function () {
    function BasicObjFacetValue(_a) {
        var name = _a.name, count = _a.count, includedObjIds = _a.includedObjIds;
        this._name = name;
        this._count = count;
        this._includedObjIds = includedObjIds;
    }
    BasicObjFacetValue.prototype.name = function () {
        return this._name;
    };
    BasicObjFacetValue.prototype.count = function () {
        return this._count;
    };
    BasicObjFacetValue.prototype.includedObjs = function () {
        return Object(external_underscore_["compact"])(this._includedObjIds.map(function (id) { return basic_obj.get(id); }));
    };
    return BasicObjFacetValue;
}());
/* harmony default export */ var basic_obj_facet_value = (basic_obj_facet_value_BasicObjFacetValue);

// CONCATENATED MODULE: ./scrivito_sdk/state/listener_collection.ts
var ListenerCollection = /** @class */ (function () {
    function ListenerCollection() {
        this.listeners = [];
    }
    ListenerCollection.prototype.subscribe = function (listener) {
        var _this = this;
        var active = true;
        var guardedListener = function () {
            if (active) {
                listener();
            }
        };
        this.ensureCanMutateListeners();
        this.listeners.push(guardedListener);
        return function () {
            active = false;
            var index = _this.listeners.indexOf(guardedListener);
            _this.ensureCanMutateListeners();
            _this.listeners.splice(index, 1);
        };
    };
    ListenerCollection.prototype.count = function () {
        return this.listeners.length;
    };
    ListenerCollection.prototype.clear = function () {
        this.listeners = [];
    };
    ListenerCollection.prototype.notify = function () {
        this.listenersToNotify = this.listeners;
        this.listenersToNotify.forEach(function (listener) { return listener(); });
    };
    ListenerCollection.prototype.ensureCanMutateListeners = function () {
        if (this.listenersToNotify === this.listeners) {
            // make shallow copy to avoid messing up a running notification loop
            this.listeners = this.listeners.slice();
        }
    };
    return ListenerCollection;
}());
/* harmony default export */ var listener_collection = (ListenerCollection);

// CONCATENATED MODULE: ./scrivito_sdk/state/primitive_value.ts
function isPrimitiveObject(value) {
    return (value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        !instanceOfClass(value));
}
function instanceOfClass(object) {
    // Instances of class have a prototype chain of length 2 or more, e.g.
    // Instance --> SomeClass --> Object
    //
    // A primitive object has a prototype chain of length 1:
    // Instance --> Object
    //
    // Note that it would be unwise to hardcode a check for `Object`, as there are
    // multiple `Object` classes, one for each iFrame.
    var proto = Object.getPrototypeOf(object);
    if (proto === null) {
        // no prototype chain? does not happen usually, but who knows...
        return false;
    }
    // if prototype chain has length 1,
    // we assume that it's a direct instance of Object and not from some class.
    return Object.getPrototypeOf(proto) !== null;
}

// CONCATENATED MODULE: ./scrivito_sdk/state/conservative_update.ts

// Given a primitive value `current` and a primitive value `next`,
// this method produces a result primitive value, which is
// * equal to next
// * independent from `next`
//   -> it does not reuse any Objects or Arrays from `next`
// * as identical to `current` as possible
//   -> it reuses as many Objects and Arrays of `current` as possible
//   -> but it mutates neither `current` nor `next`
// * frozen (as in Object.freeze)
//   -> Any newly created Objects and Arrays are frozen, so the result is deep-frozen,
//      assuming that all Objects and Arrays inside `current` are frozen already.
function conservativeUpdate(current, next) {
    // this method works on the assumption that you pass in primitive data, i.e.
    // * plain Objects, not instances of classes
    // * plain Arrays, not some crazy subtypes of Array
    //
    // TS, however, cannot express that effectively,
    // therefore using `any` to turn off type check.
    // tslint:disable-next-line
    return updateValue(current, next);
}
function updateValue(current, next) {
    if (current === next) {
        // performance optimization, avoid deep comparison
        return next;
    }
    if (isPrimitiveObject(next)) {
        return updateObject(isPrimitiveObject(current) ? current : undefined, next);
    }
    if (Array.isArray(next)) {
        return updateArray(Array.isArray(current) ? current : undefined, next);
    }
    return next;
}
function updateObject(current, next) {
    var updated = {};
    var foundDiff = false;
    if (current === undefined) {
        foundDiff = true;
    }
    var nextKeys = Object.keys(next);
    var currentKeys = new Set();
    if (current) {
        Object.keys(current).forEach(function (key) { return currentKeys.add(key); });
    }
    if (currentKeys.size !== nextKeys.length) {
        foundDiff = true;
    }
    nextKeys.forEach(function (key) {
        if (!currentKeys.has(key)) {
            foundDiff = true;
        }
        var currentValue = current ? current[key] : undefined;
        var updatedValue = updateValue(currentValue, next[key]);
        if (updatedValue !== currentValue) {
            foundDiff = true;
        }
        updated[key] = updatedValue;
    });
    var result = foundDiff ? Object.freeze(updated) : current;
    // since result has every key in next, it is now T, not just Partial<T>
    // (assuming that T is a primitive Object, not some subtype of Object)
    return result;
}
function updateArray(current, next) {
    var foundDiff = false;
    if (current === undefined || current.length !== next.length) {
        foundDiff = true;
    }
    var updated = next.map(function (nextValue, index) {
        var currentValue = current ? current[index] : undefined;
        var updatedValue = updateValue(currentValue, nextValue);
        if (updatedValue !== currentValue) {
            foundDiff = true;
        }
        return updatedValue;
    });
    var result = foundDiff ? Object.freeze(updated) : current;
    // since result now has the same content as `next`, it is T
    // (assuming that T is a primitive Array, not some subtype of Array)
    return result;
}

// CONCATENATED MODULE: ./scrivito_sdk/state/state_tree.ts
var state_tree_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var treeIdCounter = 0;
// use native assign where available, since it's faster
var state_tree_assign = Object.assign || external_underscore_["extend"];
// abstract interface for managing state
var state_tree_AbstractStateStore = /** @class */ (function () {
    function AbstractStateStore() {
    }
    // return current state
    AbstractStateStore.prototype.get = function () {
        var _this = this;
        var valueWhenAccessed = this.untrackedGet();
        this.recordDetector(function () { return valueWhenAccessed !== _this.untrackedGet(); });
        return valueWhenAccessed;
    };
    AbstractStateStore.prototype.recordDetector = function (detector) {
        this.getTree().recordDetector(detector);
    };
    AbstractStateStore.prototype.set = function (newState) {
        var currentState = this.untrackedGet();
        var updatedState = conservativeUpdate(currentState, newState);
        if (updatedState === currentState) {
            return;
        }
        this.uncheckedSet(updatedState);
    };
    // reset the state back to undefined
    AbstractStateStore.prototype.clear = function () {
        this.set(undefined);
    };
    // this method may only be called when StateType is fully partial,
    // i.e. all properties defined by StateType are optional.
    AbstractStateStore.prototype.subState = function (key) {
        return new StateTreeNode(this, key);
    };
    AbstractStateStore.prototype.reader = function () {
        // identical implementation, different type
        return this;
    };
    // this method may only be called when StateType is fully partial,
    // i.e. all properties defined by StateType are optional (= may be undefined).
    AbstractStateStore.prototype.setSubState = function (key, newSubState) {
        var _a;
        var priorState = this.untrackedGet();
        if (priorState === undefined) {
            var newState = Object.freeze((_a = {}, _a[key] = newSubState, _a));
            // Since StateType is fully partial, newState is a valid StateType.
            // No way to tell TypeScript this, though, therefore using `any`.
            // tslint:disable-next-line:no-any
            this.uncheckedSet(newState);
        }
        else {
            var duplicate = state_tree_assign({}, priorState);
            // Since StateType is fully partial, this is true:
            // (StateType[K] | undefined) == StateType[K]
            duplicate[key] = newSubState;
            this.uncheckedSet(Object.freeze(duplicate));
        }
    };
    AbstractStateStore.prototype.getSubState = function (key) {
        var state = this.untrackedGet();
        if (state) {
            return state[key];
        }
    };
    return AbstractStateStore;
}());
// a state tree, which can be used to store state.
// this is the root of the tree, which keeps the state of the entire tree.
var state_tree_StateTree = /** @class */ (function (_super) {
    state_tree_extends(StateTree, _super);
    function StateTree() {
        var _this = _super.call(this) || this;
        _this.treeId = (treeIdCounter++).toString();
        _this.listeners = new listener_collection();
        _this.detectorRecording = new context_container();
        _this.batchUpdates = new context_container();
        _this.version = 0;
        _this.frozenContextContainer = new context_container();
        return _this;
    }
    StateTree.prototype.untrackedGet = function () {
        return this.state;
    };
    StateTree.prototype.withFrozenState = function (frozenContext, fn) {
        return this.frozenContextContainer.runWith(frozenContext, fn);
    };
    StateTree.prototype.failIfTracking = function (message) {
        if (this.detectorRecording.current()) {
            throw new InternalError(message);
        }
    };
    StateTree.prototype.failIfFrozen = function (operationName) {
        var frozenContext = this.frozenContextContainer.current();
        if (frozenContext) {
            var message = operationName + " is not permitted " +
                ("inside '" + frozenContext.contextName + "'. ") +
                (frozenContext.message || '');
            throw new StateChangePreventedError(message);
        }
    };
    StateTree.prototype.uncheckedSet = function (newState) {
        this.failIfFrozen('Changing state');
        this.state = newState;
        this.version++;
        if (!this.insideBatchUpdate()) {
            this.notifyListeners();
        }
    };
    /**
     * Executes the given function and tracks read access to this tree.
     * All substates that are accessed while the function runs are considered "relevant".
     *
     * Returns a change detector function. The detector function returns:
     * - truthy if any relevant state has changed in the meantime
     * - falsey if all relevant state is still as it was
     *
     * The detector function can be used for cache invalidation:
     * If the detector returns false, then running the function again
     * will yield the same result - provided that all relevant data is stored inside this tree.
     */
    StateTree.prototype.trackChanges = function (fn) {
        var _this = this;
        var versionBefore = this.version;
        var _a = this.recordDetectors(fn), result = _a.result, detectors = _a.detectors;
        // checking the version first, to avoid running all detectors
        // when the tree is unchanged
        var overallDetector = function () {
            _this.forwardDetectors(detectors);
            return (_this.version !== versionBefore &&
                !!Object(external_underscore_["find"])(detectors, function (detector) { return detector(); }));
        };
        return { result: result, detector: overallDetector };
    };
    StateTree.prototype.recordDetector = function (detector) {
        var recording = this.detectorRecording.current();
        if (recording !== undefined) {
            recording.push(detector);
        }
    };
    StateTree.prototype.getTree = function () {
        return this;
    };
    StateTree.prototype.id = function () {
        return this.treeId;
    };
    StateTree.prototype.subscribe = function (listener) {
        return this.listeners.subscribe(listener);
    };
    StateTree.prototype.withBatchedUpdates = function (fn) {
        var stateBefore = this.state;
        try {
            this.batchUpdates.runWith(true, fn);
        }
        finally {
            if (!this.insideBatchUpdate() && stateBefore !== this.state) {
                this.notifyListeners();
            }
        }
    };
    // For test purpose only.
    StateTree.prototype.listenerCount = function () {
        return this.listeners.count();
    };
    // public for test purpose only.
    StateTree.prototype.clearListeners = function () {
        this.listeners.clear();
    };
    StateTree.prototype.forwardDetectors = function (detectors) {
        var recording = this.detectorRecording.current();
        if (recording !== undefined) {
            recording.push.apply(recording, detectors);
        }
    };
    StateTree.prototype.recordDetectors = function (fn) {
        var detectors = [];
        var result = this.detectorRecording.runWith(detectors, fn);
        var outerRecording = this.detectorRecording.current();
        if (outerRecording !== undefined) {
            outerRecording.push.apply(outerRecording, detectors);
        }
        return { result: result, detectors: detectors };
    };
    StateTree.prototype.notifyListeners = function () {
        var _this = this;
        // listeners should not change state, at least not synchronously,
        // since that would create chaos, e.g. race condition between listeners,
        // breaking the one-way-flow of a reactive application, stack overflow etc.
        // you may use nextTick to make a state change asynchronously, though.
        this.withFrozenState({ contextName: 'state listeners' }, function () {
            _this.listeners.notify();
        });
    };
    StateTree.prototype.insideBatchUpdate = function () {
        return !!this.batchUpdates.current();
    };
    return StateTree;
}(state_tree_AbstractStateStore));
/* harmony default export */ var state_tree = (state_tree_StateTree);
var StateChangePreventedError = /** @class */ (function (_super) {
    state_tree_extends(StateChangePreventedError, _super);
    function StateChangePreventedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StateChangePreventedError;
}(ScrivitoError));

// a node of a state tree.
// does not actually keep state, but provides
// access scoped to a subtree of a StateTree.
var StateTreeNode = /** @class */ (function (_super) {
    state_tree_extends(StateTreeNode, _super);
    function StateTreeNode(parentState, key) {
        var _this = _super.call(this) || this;
        _this.parentState = parentState;
        _this.key = key;
        // cache tree locally (performance)
        _this.tree = parentState.getTree();
        return _this;
    }
    StateTreeNode.prototype.getTree = function () {
        return this.tree;
    };
    StateTreeNode.prototype.untrackedGet = function () {
        return this.parentState.getSubState(this.key);
    };
    StateTreeNode.prototype.uncheckedSet = function (newState) {
        this.parentState.setSubState(this.key, newState);
    };
    StateTreeNode.prototype.id = function () {
        if (typeof this.key !== 'string') {
            return '';
        }
        // first convert backslash to double-backslash
        // then convert slash to backslash-slash
        var escapedKey = this.key.replace(/\\/g, '\\\\').replace(/\//g, '\\/');
        return this.parentState.id() + "/" + escapedKey;
    };
    return StateTreeNode;
}(state_tree_AbstractStateStore));

// CONCATENATED MODULE: ./scrivito_sdk/state/global_state.ts
/* tslint:disable:no-empty-interface */


var globalState;
var stateController;
var appState;
var cmsState;
var uiState;
function initializeGlobalState(ui) {
    if (!ui) {
        // we are the top-level window, so we own the globalState.
        globalState = new state_tree();
        stateController = globalState;
        appState = createAppState();
        cmsState = globalState.subState('cms');
        uiState = globalState.subState('ui');
    }
    else {
        // we are inside an iFrame, so we don't own the globalState,
        // but rely on the UI instead.
        globalState = undefined;
        stateController = ui.stateController();
        appState = ui.createAppState();
        cmsState = ui.cmsState();
    }
}
var appStateCounter = 0;
function createAppState() {
    if (!globalState) {
        // createAppState should never be called inside an iFrame
        throw new InternalError();
    }
    var id = (appStateCounter++).toString();
    var apps = globalState.subState('apps');
    return apps.subState(id);
}
function withBatchedUpdates(fn) {
    return stateController.withBatchedUpdates(fn);
}
function subscribe(fn) {
    return stateController.subscribe(fn);
}
function trackChanges(fn) {
    return stateController.trackChanges(fn);
}
function withFrozenState(context, fn) {
    return stateController.withFrozenState(context, fn);
}
function failIfFrozen(operationName) {
    return stateController.failIfFrozen(operationName);
}
function failIfTracking(message) {
    return stateController.failIfTracking(message);
}
// for test purposes only
function global_state_listenerCount() {
    if (!globalState) {
        throw new InternalError();
    }
    return globalState.listenerCount();
}
// for test purposes only
function global_state_reset() {
    if (!globalState) {
        throw new InternalError();
    }
    globalState.clearListeners();
    globalState.clear();
}

// CONCATENATED MODULE: ./scrivito_sdk/state/batched_state_updater.ts


var bufferedUpdates = [];
var isUpdateScheduled = function () { return bufferedUpdates.length; };
function addBatchUpdate(callback) {
    if (!isUpdateScheduled()) {
        nextTick(function () { return withBatchedUpdates(function () { return performUpdate(bufferedUpdates); }); });
    }
    bufferedUpdates.push(callback);
}
function performUpdate(callbacks) {
    bufferedUpdates = [];
    try {
        callbacks.forEach(function (callback) { return callback(); });
    }
    finally {
        if (isUpdateScheduled()) {
            performUpdate(bufferedUpdates);
        }
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/state/observe.ts


/**
 * observe an expression, which calculates a value based on state.
 *
 * `observedExpression` will be executed once initially
 * and re-executed whenever the global state changes in a relevant way.
 *
 * `observedExpression` is expected to be a pure function,
 * i.e. it should be deterministic and not have side-effects.
 *
 * whenever `observedExpression` is executed, `listener` is invoked with the returned value.
 */
function observe(observedExpression, listener) {
    var active = true;
    var detectChange;
    function scheduleRun() {
        nextTick(function () {
            if (!active) {
                return;
            }
            if (detectChange === undefined || detectChange()) {
                var run = trackChanges(function () {
                    return withFrozenState({
                        contextName: 'observe',
                        message: 'Extract all side-effects into the listener function',
                    }, observedExpression);
                });
                detectChange = run.detector;
                listener(run.result);
            }
        });
    }
    scheduleRun();
    var unsubscribe = subscribe(scheduleRun);
    return {
        unsubscribe: function () {
            active = false;
            unsubscribe();
        },
        forceRefresh: function () {
            detectChange = undefined;
            scheduleRun();
        },
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/state/index.ts






// CONCATENATED MODULE: ./scrivito_sdk/data/content_state_id.ts

function getContentStateId() {
    return getState().get();
}
function setContentStateId(value) {
    getState().set(value);
}
function getState() {
    return cmsState.subState('contentStateId');
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_all_until.ts

function loadAllUntil(iterator, size, objs) {
    if (objs === void 0) { objs = []; }
    var run = runAndCatchErrorsWhileLoading(function () { return iterator.next(); });
    if (!run.allDataLoaded) {
        return { done: false, objs: objs };
    }
    var next = run.result;
    if (next.done || size === 0) {
        return { done: next.done, objs: objs };
    }
    return loadAllUntil(iterator, size - 1, objs.concat([next.value]));
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_handler.ts

var captureContextContainer = new context_container();
var currentCaptureList = function () { return captureContextContainer.current(); };
function capture(fn) {
    var captureList = {
        subscribes: [],
        missing: false,
        outdated: false,
    };
    var result = captureContextContainer.runWith(captureList, fn);
    return new CaptureReport(captureList, result);
}
function isCurrentlyCapturing() {
    return currentCaptureList() !== undefined;
}
function notifyMissing() {
    var captureList = currentCaptureList();
    if (captureList) {
        captureList.missing = true;
    }
}
function notifyDataRequired(subscribe) {
    var captureList = currentCaptureList();
    if (captureList) {
        captureList.subscribes.push(subscribe);
    }
}
function notifyOutdated() {
    var captureList = currentCaptureList();
    if (captureList) {
        captureList.outdated = true;
    }
}
var CaptureReport = /** @class */ (function () {
    function CaptureReport(captureList, result) {
        this.captureList = captureList;
        this.result = result;
    }
    CaptureReport.prototype.forwardToCurrent = function () {
        var currentList = currentCaptureList();
        if (currentList) {
            extendList(currentList, this.captureList);
        }
    };
    /** returns true iff no data is missing, doesn't care about outdated  */
    CaptureReport.prototype.isAllDataLoaded = function () {
        return !this.captureList.missing;
    };
    /** returns true iff no data is missing or outdated */
    CaptureReport.prototype.isAllDataUpToDate = function () {
        return !this.captureList.missing && !this.captureList.outdated;
    };
    /** subscribes to the loading of all data that was captured, using the provided subscription.
     * all subscribed data is loaded automatically, and reloaded when outdated.
     * the subscription is automatically updated to reflect the data captured in this report,
     * i.e. any data that is no longer present in the capture is unsubscribed.
     */
    CaptureReport.prototype.subscribeLoading = function (subscriber) {
        var unsubscribes = this.captureList.subscribes.map(function (subscribe) {
            return subscribe();
        });
        subscriber.unsubscribe();
        subscriber.storeUnsubscribe(function () {
            unsubscribes.forEach(function (unsubscribe) { return unsubscribe(); });
        });
    };
    return CaptureReport;
}());

/** keeps track of subscriptions to LoadableData */
var LoadingSubscriber = /** @class */ (function () {
    function LoadingSubscriber() {
    }
    /** used internally, do not call from outside 'loadable' */
    LoadingSubscriber.prototype.storeUnsubscribe = function (unsubscribe) {
        this.unsubscribeCallback = unsubscribe;
    };
    /** unsubscribe any previously subscribed data */
    LoadingSubscriber.prototype.unsubscribe = function () {
        if (this.unsubscribeCallback) {
            this.unsubscribeCallback();
        }
    };
    return LoadingSubscriber;
}());

function extendList(target, source) {
    target.subscribes = target.subscribes.concat(source.subscribes);
    target.missing = target.missing || source.missing;
    target.outdated = target.outdated || source.outdated;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/load.ts



// load triggers the loading of all resource that the passed in
// function needs and returns a Promise to the result of the function.
//
// It can be used to convert synchronous code (the loadable function)
// into asynchronous code (Promise to the return value).
//
// A loadable function is a function that:
// * is pure, i.e. idempotent, doesn't perform I/O, is free of side-effects
//
// load will run the provided function as many times as needed,
// and trigger loading of any NotLoadedError that should occur.
//
// It returns a Promise that fulfills once the function returns a value.
// If the function throws an Exception (other than NotLoadedError),
// the Promise is rejected.
function load(loadableFunction) {
    checkLoad(loadableFunction);
    var deferred = new common_deferred();
    var observer = observeAndLoad(function () {
        return runAndCatchException(function () {
            return withFrozenState({
                contextName: 'Scrivito.load',
                message: 'Use an async callback: Scrivito.load(/* ... */).then(/* ... */).',
            }, loadableFunction);
        });
    }, function (observed) {
        if (!observed.allDataUpToDate) {
            // keep observing
            return;
        }
        observer.unsubscribe();
        var outcome = observed.result;
        if (outcome.errorThrown) {
            deferred.reject(outcome.error);
        }
        else {
            deferred.resolve(outcome.result);
        }
    });
    return deferred.promise;
}
var checkLoad = checkArgumentsFor('load', [['loadableFunction', external_tcomb_validation_.Function]], {
    docPermalink: 'js-sdk/load',
});

// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_value.ts
// A wrapper around a value that is retrieved asynchronously.
// This class is stateless and (almost) pure:
// * it does not perform any I/O
// * the only side-effect it has is changing the provided state container
// * it does not keep any state itself
// * state is replaced, not mutated
// * it does not use Promises
var LoadableValue = /** @class */ (function () {
    // stateContainer is where the LoadableValue should store its state.
    function LoadableValue(stateContainer) {
        this.container = stateContainer;
    }
    LoadableValue.prototype.reader = function () {
        // subState takes care of `undefined`, TS cannot (yet) express that though
        return this.container.reader().subState('value');
    };
    LoadableValue.prototype.status = function () {
        return this.getStateKey('status') || 'MISSING';
    };
    LoadableValue.prototype.value = function () {
        return this.getStateKey('value');
    };
    LoadableValue.prototype.error = function () {
        return this.getStateKey('error');
    };
    LoadableValue.prototype.version = function () {
        return this.getStateKey('version');
    };
    LoadableValue.prototype.transitionToMissing = function () {
        this.setState({ status: undefined });
    };
    LoadableValue.prototype.transitionToAvailable = function (value, version) {
        this.setState({ status: 'AVAILABLE', value: value, version: version });
    };
    LoadableValue.prototype.transitionToError = function (error, version) {
        this.setState({ status: 'ERROR', error: error, version: version });
    };
    LoadableValue.prototype.setState = function (state) {
        this.container.set(state);
    };
    LoadableValue.prototype.getStateKey = function (key) {
        return this.container.subState(key).get();
    };
    return LoadableValue;
}());
/* harmony default export */ var loadable_value = (LoadableValue);

// CONCATENATED MODULE: ./scrivito_sdk/loadable/loading_registry.ts

var loadingState = {};
var loadingSubscriptions = {};
var loadIdCounter = 0;
function loading_registry_reset() {
    loadingState = {};
    loadingSubscriptions = {};
}
// for test purposes
function subscriberCountForLoading(dataId) {
    return loadingSubscriptions[dataId] || 0;
}
function subscribeLoading(dataId) {
    var subscriptionActive = true;
    changeSubscriptionsFor(dataId, 1);
    return function () {
        if (!subscriptionActive) {
            return;
        }
        subscriptionActive = false;
        changeSubscriptionsFor(dataId, -1);
    };
}
function changeSubscriptionsFor(dataId, amount) {
    var currentNumber = loadingSubscriptions[dataId] || 0;
    loadingSubscriptions[dataId] = currentNumber + amount;
}
function isLoading(dataId) {
    return loadingState[dataId] !== undefined;
}
function stopLoading(dataId) {
    delete loadingState[dataId];
}
function startLoading(dataId, loader, onSuccess, onError) {
    if (isLoading(dataId)) {
        return;
    }
    var loadId = loadIdCounter++;
    var isUnchanged = function () { return loadingState[dataId] === loadId; };
    function ifUnchanged(fn) {
        if (isUnchanged()) {
            fn();
        }
    }
    var pushCallbacks = [];
    var addPushCallback = function (callback) {
        return pushCallbacks.push(callback);
    };
    var runPushCallbacks = function () { return pushCallbacks.forEach(function (callback) { return callback(); }); };
    loader({ push: addPushCallback, wasCancelled: function () { return !isUnchanged(); } }).then(function (result) {
        return ifUnchanged(function () {
            return addBatchUpdate(function () {
                stopLoading(dataId);
                onSuccess(result);
                runPushCallbacks();
            });
        });
    }, function (error) {
        return ifUnchanged(function () {
            return addBatchUpdate(function () {
                stopLoading(dataId);
                onError(error);
                runPushCallbacks();
            });
        });
    });
    loadingState[dataId] = loadId;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/not_loaded_error.ts
var not_loaded_error_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A `NotLoadedError` is a legacy technique, only still used by the Scrivito UI.
 * It is thrown when data is accessed in a synchronous fashion but is not yet
 * available locally.
 */
var NotLoadedError = /** @class */ (function (_super) {
    not_loaded_error_extends(NotLoadedError, _super);
    function NotLoadedError() {
        return _super.call(this, 'Data is not yet loaded.', false) || this;
    }
    return NotLoadedError;
}(ScrivitoError));
/* harmony default export */ var not_loaded_error = (NotLoadedError);

// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_data.ts





var loadable_data_LoadableData = /** @class */ (function () {
    // state is the stateContainer where the LoadableData should store its state.
    function LoadableData(_a) {
        var state = _a.state, loader = _a.loader, invalidation = _a.invalidation, throwNotLoaded = _a.throwNotLoaded;
        if (!state) {
            throw new InternalError('LoadableData needs state');
        }
        this.value = new loadable_value(state);
        this.loader = loader;
        this.invalidation = invalidation;
        this.throwNotLoaded = throwNotLoaded || false;
        this.id = state.id();
    }
    // Access the LoadableData synchronously, assuming it is available.
    // If the LoadableData is an error, the error is thrown.
    // If the LoadableData is missing or loading, undefined will be returned.
    // if `throwNotLoaded` has been configured, a NotLoadedError is thrown instead.
    LoadableData.prototype.ensureAvailable = function () {
        this.notifyDataRequired();
        if (this.isAvailable()) {
            this.notifyIfOutdated();
            return true;
        }
        if (this.isError()) {
            this.notifyIfOutdated();
            throw this.value.error();
        }
        if (!isCurrentlyCapturing()) {
            this.triggerLoading();
            throw new ScrivitoError('Content not yet loaded. ' +
                'Forgot to use Scrivito.load or Scrivito.connect? ' +
                'See https://scrivito.com/content-not-yet-loaded-error');
        }
        notifyMissing();
        if (this.throwNotLoaded) {
            throw new not_loaded_error();
        }
        return false;
    };
    LoadableData.prototype.get = function () {
        if (this.ensureAvailable()) {
            notifyUsage(this.id, this);
            return this.value.value();
        }
    };
    LoadableData.prototype.reader = function () {
        notifyUsage(this.id, this);
        return this.value.reader();
    };
    // set the data to a value. this makes the value available.
    LoadableData.prototype.set = function (value) {
        this.value.transitionToAvailable(value, this.currentVersion());
        stopLoading(this.id);
    };
    // set the data to an error.
    LoadableData.prototype.setError = function (error) {
        this.transitionToError(error);
        stopLoading(this.id);
    };
    // transition back to missing, removes any value or errors.
    LoadableData.prototype.reset = function () {
        this.value.transitionToMissing();
        stopLoading(this.id);
    };
    // returns true iff the value is missing
    LoadableData.prototype.isMissing = function () {
        return this.value.status() === 'MISSING';
    };
    // returns true iff the value not available and not an error, but
    // has started loading.
    LoadableData.prototype.isLoading = function () {
        return isLoading(this.id);
    };
    // return true iff value is available.
    LoadableData.prototype.isAvailable = function () {
        return this.value.status() === 'AVAILABLE';
    };
    // return true iff an error was set.
    LoadableData.prototype.isError = function () {
        return this.value.status() === 'ERROR';
    };
    // trigger loading the data. does nothing if the data is already loading.
    LoadableData.prototype.triggerLoading = function () {
        var _this = this;
        var versionWhenLoadingStarted = this.currentVersion();
        startLoading(this.id, function (_a) {
            var wasCancelled = _a.wasCancelled, push = _a.push;
            return _this.loader({
                push: push,
                isReload: function () { return _this.hasBeenInvalidated(); },
                wasCancelled: wasCancelled,
            });
        }, function (result) {
            _this.value.transitionToAvailable(result, versionWhenLoadingStarted);
        }, function (error) {
            _this.transitionToError(error, versionWhenLoadingStarted);
        });
    };
    // for test purposes only
    LoadableData.prototype.numSubscribers = function () {
        return subscriberCountForLoading(this.id);
    };
    LoadableData.prototype.transitionToError = function (error, version) {
        if (version === void 0) { version = this.currentVersion(); }
        this.value.transitionToError(error, version);
    };
    LoadableData.prototype.notifyIfOutdated = function () {
        if (this.hasBeenInvalidated()) {
            notifyOutdated();
        }
    };
    LoadableData.prototype.notifyDataRequired = function () {
        var _this = this;
        notifyDataRequired(function () {
            if (_this.hasBeenInvalidated() || _this.isMissing()) {
                _this.triggerLoading();
            }
            return subscribeLoading(_this.id);
        });
    };
    LoadableData.prototype.hasBeenInvalidated = function () {
        if (!this.invalidation) {
            return false;
        }
        if (this.isMissing()) {
            return false;
        }
        return this.currentVersion() !== this.value.version();
    };
    LoadableData.prototype.currentVersion = function () {
        var callback = this.invalidation;
        if (!callback) {
            return;
        }
        var version = callback();
        // protect against "crazy" objects like NaN
        if (typeof version === 'number' && isNaN(version)) {
            var message = "invalidation callback returned unsuitable version " + version;
            throw new InternalError(message);
        }
        return version;
    };
    return LoadableData;
}());
/* harmony default export */ var loadable_data = (loadable_data_LoadableData);
var usageContext = new context_container();
function notifyUsage(id, data) {
    var store = usageContext.current();
    if (store) {
        store[id] = data;
    }
}
/** runs fn(), and reports all LoadableData that is used */
function reportUsedData(fn) {
    var store = {};
    var result = usageContext.runWith(store, fn);
    return {
        result: result,
        usedData: loadable_data_values(store),
    };
}
// Object.values replacement (IE11 doesn't have it)
function loadable_data_values(objekt) {
    return Object.keys(objekt).map(function (key) { return objekt[key]; });
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_with_default.ts

function loadableWithDefault(theDefault, loadableFunction) {
    var run = runAndCatchErrorsWhileLoading(loadableFunction);
    return run.allDataLoaded ? run.result : theDefault;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/map_and_load_parallel.js


function mapAndLoadParallel(list, iteratee) {
  var results = [];

  external_underscore_default.a.each(list, function (item) {
    var run = runAndCatchErrorsWhileLoading(function () {
      return iteratee(item);
    });

    if (run.success) {
      results.push(run.result);
    }
  });

  if (results.length < list.length) {
    throw new not_loaded_error();
  }

  return results;
}
// CONCATENATED MODULE: ./scrivito_sdk/loadable/run_and_catch_errors_while_loading.ts


function runAndCatchErrorsWhileLoading(loadableFunction) {
    var captured = capture(function () { return runAndCatchException(loadableFunction); });
    captured.forwardToCurrent();
    var outcome = captured.result;
    var allDataLoaded = captured.isAllDataLoaded();
    if (!outcome.errorThrown) {
        return {
            success: true,
            result: outcome.result,
            allDataLoaded: allDataLoaded,
        };
    }
    if (!allDataLoaded) {
        return {
            success: false,
            allDataLoaded: false,
        };
    }
    throw outcome.error;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/compute_cache_key.ts

function computeCacheKey(data) {
    var normalizedData = normalizeData(data);
    return JSON.stringify(normalizedData);
}
function normalizeData(data) {
    if (Array.isArray(data)) {
        return data.map(normalizeData);
    }
    if (data !== null && external_underscore_["isObject"](data)) {
        return external_underscore_["sortBy"](external_underscore_["pairs"](external_underscore_["mapObject"](data, normalizeData)), external_underscore_["first"]);
    }
    return data;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_collection.ts



/** a collection of LoadableData, indexed by key */
var loadable_collection_LoadableCollection = /** @class */ (function () {
    function LoadableCollection(_a) {
        var name = _a.name, state = _a.state, loader = _a.loader, invalidation = _a.invalidation;
        this.name = name;
        this.state = state;
        this.loader = loader;
        this.invalidation = invalidation;
        register(name, this);
    }
    /** get a LoadableData instance from this collection */
    LoadableCollection.prototype.get = function (key, loaderHint) {
        var _this = this;
        var stringifiedKey = stringifyKey(key);
        var invalidation = this.invalidation;
        var data = new loadable_data({
            state: this.state().subState(stringifiedKey),
            loader: function (api) { return _this.loader(key, api, loaderHint); },
            invalidation: invalidation ? function () { return invalidation(key); } : undefined,
        });
        setAffiliation(data, { collectionName: this.name, key: key });
        return data;
    };
    return LoadableCollection;
}());

function stringifyKey(key) {
    if (typeof key === 'string') {
        return key;
    }
    return computeCacheKey(key);
}
var namedCollections = {};
function register(name, collection) {
    if (namedCollections[name]) {
        throw new InternalError("collection name registered twice: " + name);
    }
    namedCollections[name] = collection;
}
function getCollection(name) {
    var found = namedCollections[name];
    if (!found) {
        throw new InternalError("collection with name " + name + " not found");
    }
    return found;
}
function setAffiliation(data, affiliation) {
    data.affiliation = affiliation;
}
function getAffiliation(data) {
    return data.affiliation;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/data_recorder.ts



/** load the data stored in the recording */
function loadRecording(recording) {
    withBatchedUpdates(function () { return recording.forEach(loadDataFromRecord); });
}
function loadDataFromRecord(_a) {
    var name = _a[0], key = _a[1], value = _a[2];
    var loadableData = getCollection(name).get(key);
    loadableData.set(value);
}
function generateRecording(datas) {
    return datas.map(generateRecord);
}
function generateRecord(data) {
    var affiliation = getAffiliation(data);
    if (!affiliation) {
        throw new InternalError('Tried to record a LoadableData without affiliation');
    }
    return [affiliation.collectionName, affiliation.key, data.get()];
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/observe_and_load.ts



function observeAndLoad(loadableExpression, listener) {
    var loadingSubscriber = new LoadingSubscriber();
    var observation = observe(function () { return capture(function () { return runAndCatchException(loadableExpression); }); }, function (captured) {
        captured.subscribeLoading(loadingSubscriber);
        var outcome = captured.result;
        if (outcome.errorThrown) {
            if (!captured.isAllDataUpToDate()) {
                return;
            }
            throw outcome.error;
        }
        listener({
            result: outcome.result,
            allDataLoaded: captured.isAllDataLoaded(),
            allDataUpToDate: captured.isAllDataUpToDate(),
        });
    });
    return {
        forceRefresh: function () { return observation.forceRefresh(); },
        unsubscribe: function () {
            observation.unsubscribe();
            loadingSubscriber.unsubscribe();
        },
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/index.ts












// CONCATENATED MODULE: ./scrivito_sdk/data/in_memory_tenant.ts

var IN_MEMORY_TENANT = 'inMemory';
var inMemoryTenant = false;
function isUsingInMemoryTenant() {
    return inMemoryTenant;
}
function useInMemoryTenant() {
    inMemoryTenant = true;
}
function assertNotUsingInMemoryTenant(operationDescription) {
    if (inMemoryTenant) {
        throw new InMemoryTenantUnsupportedOperationError(operationDescription);
    }
}
// For test purpose only.
function resetInMemoryTenant() {
    inMemoryTenant = false;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/current_workspace.ts
var PUBLISHED_WORKSPACE_ID = 'published';
var current_workspace_workspaceId;
function current_workspace_currentWorkspaceId() {
    return current_workspace_workspaceId || PUBLISHED_WORKSPACE_ID;
}
function setCurrentWorkspaceId(id) {
    current_workspace_workspaceId = id;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/assert_valid_current_workspace_id.ts


function assertValidCurrentWorkspaceId(expectedCurrentWorkspaceId) {
    var actualCurrentWorkspaceId = current_workspace_currentWorkspaceId();
    // This should never happen!
    if (expectedCurrentWorkspaceId !== actualCurrentWorkspaceId) {
        throw new InternalError('Requested and the actual current workspace differ! ' +
            ("Expected " + actualCurrentWorkspaceId + ", but saw " + expectedCurrentWorkspaceId + "."));
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/client/auth_failure_counter.ts
var FRAGMENT_VALUE_LOCATOR = '&scrivito.authFailedCount=';
var failureCount;
function init(addressWindow) {
    auth_failure_counter_reset();
    var location = addressWindow.location;
    var fragment = location.hash;
    var offset = fragment.indexOf(FRAGMENT_VALUE_LOCATOR);
    if (offset < 0) {
        return;
    }
    var countAsString = fragment.substr(offset + FRAGMENT_VALUE_LOCATOR.length, 3);
    var remainingFragment = fragment.substring(0, offset);
    if (remainingFragment === '#') {
        remainingFragment = '';
    }
    var newLocation = location.href
        .toString()
        .replace(fragment, remainingFragment);
    failureCount = parseInt(countAsString, 10) || 0;
    addressWindow.history.replaceState({}, '', newLocation);
}
function auth_failure_counter_reset() {
    failureCount = 0;
}
function augmentedRedirectUrl(currentLocation) {
    var returnTo = currentLocation.toString();
    if (!currentLocation.hash) {
        returnTo = returnTo + "#";
    }
    return "" + returnTo + FRAGMENT_VALUE_LOCATOR + (failureCount + 1);
}
function currentFailureCount() {
    return failureCount;
}
/* harmony default export */ var auth_failure_counter = ({
    init: init,
    augmentedRedirectUrl: augmentedRedirectUrl,
    reset: auth_failure_counter_reset,
    currentFailureCount: currentFailureCount,
});

// CONCATENATED MODULE: ./scrivito_sdk/client/fetch.ts


var isDisabled = false;
var connectionCounter = 0;
// For test purpose only
function isFetchingActive() {
    return connectionCounter > 0;
}
// For test purpose only
function disableFetching() {
    isDisabled = true;
}
// For test purpose only
function enableFetching() {
    isDisabled = false;
}
function fetch(method, url, _a) {
    var params = _a.params, authorization = _a.authorization, forceVerification = _a.forceVerification;
    if (isDisabled) {
        return ScrivitoPromise.resolve(new XMLHttpRequest());
    }
    connectionCounter += 1;
    return new ScrivitoPromise(function (resolve, reject) {
        var request = createRequestObj(method, url, resolve, reject);
        if (authorization) {
            request.setRequestHeader('Authorization', authorization);
        }
        request.setRequestHeader('Scrivito-Client', "jssdk/" + getScrivitoVersion());
        if (forceVerification) {
            request.setRequestHeader('Scrivito-Force-Verification', 'true');
        }
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(JSON.stringify(params));
    });
}
function createRequestObj(method, url, resolve, reject) {
    var request = new XMLHttpRequest();
    request.open(method === 'POST' ? 'POST' : 'PUT', url);
    request.timeout = 15000;
    request.withCredentials = true;
    request.onload = function () { return onAjaxLoad(request, resolve, reject); };
    function handleError(message) {
        onAjaxError(new RequestFailedError(message), reject);
    }
    request.onerror = function () { return handleError('XMLHttpRequest Error'); };
    request.ontimeout = function () { return handleError('XMLHttpRequest Timeout'); };
    request.onabort = function () { return handleError('XMLHttpRequest Aborted'); };
    return request;
}
function onAjaxLoad(request, resolve, reject) {
    connectionCounter -= 1;
    var status = request.status;
    if (!status || !Object(external_underscore_["isNumber"])(status)) {
        var message = "Unexpected response status: " + status + ";" +
            (" body: " + (status === 0 ? request.statusText : request.responseText));
        reject(new RequestFailedError(message));
    }
    resolve(request);
}
function onAjaxError(error, reject) {
    connectionCounter -= 1;
    reject(error);
}

// CONCATENATED MODULE: ./scrivito_sdk/client/verificator_functions.js

var verificator_functions_registry;
function verificator_functions_reset() {
  verificator_functions_registry = {};
}
function verificator_functions_fetch(verificatorId, verificatorUrl) {
  var deferred = verificator_functions_registry[verificatorId];

  if (!deferred) {
    deferred = new common_deferred();
    verificator_functions_registry[verificatorId] = deferred;
    loadJs(verificatorUrl);
  }

  return deferred.promise;
}
verificator_functions_reset();

window._scrivitoRegisterVerificator = function (verificatorId, verificatorFunction) {
  verificator_functions_registry[verificatorId].resolve(verificatorFunction);
};
// CONCATENATED MODULE: ./scrivito_sdk/client/public_authentication.ts
var public_authentication_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ERROR_CODE_CLIENT_VERIFICATION_REQUIRED = 'client_verification_required';
var VerificationRequiredError = /** @class */ (function (_super) {
    public_authentication_extends(VerificationRequiredError, _super);
    function VerificationRequiredError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VerificationRequiredError;
}(UnauthorizedError));
var computation;
var verification;
function perform(sendRequest) {
    function handleError(error) {
        if (!isVerificationRequiredError(error)) {
            throw error;
        }
        return computeVerification(error.details).then(sendRequest);
    }
    return sendRequest(currentAuthorization()).catch(handleError);
}
function computeVerification(challenge) {
    if (!computation) {
        // note that further request's challenges are ignored (intentionally)
        var verificator = challenge.verificator, data_1 = challenge.data;
        var promise = verificator_functions_fetch(verificator.id, verificator.url).then(function (compute) {
            return new ScrivitoPromise(function (resolve) {
                function captureVerification(computedVerification) {
                    verification = computedVerification;
                    resolve(verification.authorization);
                }
                compute(data_1, captureVerification);
            });
        });
        computation = {
            challenge: { verificator: verificator, data: data_1 },
            promise: promiseAndFinally(promise, function () {
                computation = undefined;
            }),
        };
    }
    return computation.promise;
}
function public_authentication_reset() {
    computation = undefined;
    verification = undefined;
}
function currentAuthorization() {
    if (!verification) {
        return;
    }
    if (verification.expiresAfter < new Date()) {
        verification = undefined;
        return;
    }
    return verification.authorization;
}
function isVerificationRequiredError(error) {
    return (error instanceof UnauthorizedError &&
        error.backendCode === ERROR_CODE_CLIENT_VERIFICATION_REQUIRED);
}
// integration test support
function public_authentication_currentState() {
    var authorization = currentAuthorization();
    if (authorization) {
        return "Authorization: " + authorization;
    }
    if (computation) {
        var challenge = computation.challenge;
        return "Pending computation: " + challenge.verificator.id + " with " + challenge.data;
    }
    return null;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/window_proxy.js
function devicePixelRatio() {
  var windowObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return windowObject.devicePixelRatio || 1;
}
function window_proxy_location() {
  return window.location;
}
function window_proxy_navigator() {
  return window.navigator;
}
function redirectTo(newLocation) {
  window.location.assign(newLocation);
}
function window_proxy_history() {
  return window.history;
}
function onpopstate() {
  return window.onpopstate;
}
function setOnpopstate(value) {
  window.onpopstate = value;
}
function screen() {
  return window.screen;
}
function getDocument() {
  return document;
}
function proxiedWindow() {
  return window;
}
// CONCATENATED MODULE: ./scrivito_sdk/client/cms_rest_api.ts







var limitedRetries;
var retriesAreDisabled;
var cms_rest_api_CmsRestApi = /** @class */ (function () {
    function CmsRestApi() {
        this.initDeferred = new common_deferred();
        this.authHeaderValueProvider = public_authentication_namespaceObject;
    }
    CmsRestApi.prototype.init = function (endpoint, tenant, authorizationProvider) {
        if (tenant) {
            this.tenant = tenant;
            this.endpoint = endpoint;
            this.url = external_urijs_(endpoint + "/tenants/" + tenant + "/perform")
                .scheme('https')
                .toString();
            this.initDeferred.resolve(undefined);
        }
        if (authorizationProvider) {
            this.authHeaderValueProvider = authorizationProvider;
        }
    };
    CmsRestApi.prototype.get = function (path, requestParams) {
        return this._perform('GET', path, requestParams);
    };
    CmsRestApi.prototype.put = function (path, requestParams) {
        return this._perform('PUT', path, requestParams);
    };
    CmsRestApi.prototype.post = function (path, requestParams) {
        return this._perform('POST', path, requestParams);
    };
    CmsRestApi.prototype.delete = function (path, requestParams) {
        return this._perform('DELETE', path, requestParams);
    };
    CmsRestApi.prototype.requestBuiltInUserSession = function (sessionId) {
        var _this = this;
        return this._ensureInitialized()
            .then(function () { return _this._ajax('PUT', "sessions/" + sessionId); })
            .then(function (response) {
            auth_failure_counter.reset();
            return response;
        });
    };
    // For test purpose only.
    CmsRestApi.prototype.enableForceVerification = function () {
        this.forceVerification = true;
    };
    // For test purpose only.
    CmsRestApi.prototype.currentPublicAuthorizationState = function () {
        if (this.authHeaderValueProvider) {
            if (this.authHeaderValueProvider.currentState) {
                return "[API] " + this.authHeaderValueProvider.currentState();
            }
            return '[API]: authorization provider without currentState()';
        }
        return '[API]: no authorization provider';
    };
    CmsRestApi.prototype._ensureInitialized = function () {
        return this.initDeferred.promise;
    };
    CmsRestApi.prototype._perform = function (method, path, requestParams) {
        var _this = this;
        return this._ensureInitialized().then(function () {
            return _this._send(method, path, requestParams).then(function (result) {
                if (isTask(result)) {
                    return _this._handleTask(result.task);
                }
                return result;
            });
        });
    };
    CmsRestApi.prototype._send = function (method, path, requestParams) {
        var _this = this;
        return this.authHeaderValueProvider.perform(function (authorization) {
            return _this._ajax(method, path, requestParams, authorization);
        });
    };
    CmsRestApi.prototype._ajax = function (method, path, requestParams, authorization) {
        var url = this.url;
        var forceVerification = this.forceVerification;
        var params = {
            path: path,
            verb: method,
            params: requestParams || {},
        };
        var options = { params: params, authorization: authorization, forceVerification: forceVerification };
        function performRequest() {
            return retryOnRateLimit(function () { return fetch(method, url, options); }).then(handleAjaxResponse);
        }
        if (method === 'POST') {
            return performRequest();
        }
        return retryOnError(performRequest);
    };
    CmsRestApi.prototype._handleTask = function (task) {
        var myself = this;
        switch (task.status) {
            case 'success':
                return task.result;
            case 'error':
                throw ClientError.for(task.message, 412, task.code);
            case 'open':
                return wait(2).then(function () {
                    return myself
                        .get("tasks/" + task.id)
                        .then(function (result) { return myself._handleTask(result); });
                });
            default:
                throw new RequestFailedError('Invalid task response (unknown status)');
        }
    };
    return CmsRestApi;
}());
function retryOnError(requestCallback, retryCount) {
    if (retryCount === void 0) { retryCount = 0; }
    if (retriesAreDisabled) {
        return new ScrivitoPromise(function (resolve) { return resolve(requestCallback()); });
    }
    return requestCallback().catch(function (error) {
        if (error instanceof RequestFailedError) {
            if (limitedRetries && retryCount > 5) {
                throw error;
            }
            var retryDelay = calculateDelay(retryCount);
            return waitMs(retryDelay).then(function () {
                return retryOnError(requestCallback, retryCount + 1);
            });
        }
        throw error;
    });
}
function retryOnRateLimit(requestCallback, retryCount) {
    if (retryCount === void 0) { retryCount = 0; }
    if (retriesAreDisabled) {
        return new ScrivitoPromise(function (resolve) { return resolve(requestCallback()); });
    }
    return requestCallback().then(function (response) {
        if (response.status !== 429) {
            return response;
        }
        // The value for the retry count limit should be high enough to show that the integer overflow
        // protection of the calculated timeout (currently: exponent limited to 16) is working.
        if (limitedRetries && retryCount > 19) {
            throw new Error('Maximum number of rate limit retries reached');
        }
        var retryAfter = Number(response.getResponseHeader('Retry-After')) || 0;
        var retryDelay = Math.max(retryAfter * 1000, calculateDelay(retryCount));
        return waitMs(retryDelay).then(function () {
            return retryOnRateLimit(requestCallback, retryCount + 1);
        });
    });
}
function calculateDelay(retryCount) {
    return Math.pow(2, Math.min(retryCount, 16)) * 500;
}
function handleAjaxResponse(request) {
    var httpStatus = request.status;
    var responseData;
    try {
        responseData = JSON.parse(request.responseText);
    }
    catch (error) {
        throw new RequestFailedError(request.responseText);
    }
    if (httpStatus >= 200 && httpStatus < 300) {
        return responseData;
    }
    if (responseData.code === 'auth_missing') {
        var details = responseData.details;
        if (details && isJSONObject(details)) {
            var visit = details.visit;
            if (typeof visit === 'string') {
                var target = authenticationUrlFor(visit);
                redirectTo(target);
                throw new MissingAuthError("Insufficient authorization - please visit " + target);
            }
        }
    }
    throw errorForResponse(httpStatus, responseData, request.responseText);
}
function authenticationUrlFor(visit) {
    var returnTo = auth_failure_counter.augmentedRedirectUrl(window_proxy_location());
    return visit
        .replace('retry=RETRY', "retry=" + auth_failure_counter.currentFailureCount())
        .replace(/\$RETURN_TO/, encodeURIComponent(returnTo));
}
function errorForResponse(httpStatus, responseData, responseText) {
    if (httpStatus === 401) {
        var errorData = asErrorResponseData(responseData);
        return new UnauthorizedError(errorData.error, httpStatus, errorData.code, errorData.details);
    }
    if (httpStatus === 403) {
        var errorData = asErrorResponseData(responseData);
        var code = errorData.code;
        if (!code || !isString(code)) {
            throw new RequestFailedError('Authentication failure response no string value for code');
        }
        return new AccessDeniedError(errorData.error, httpStatus, code);
    }
    if (responseData.error && httpStatus.toString()[0] === '4') {
        var errorData = asErrorResponseData(responseData);
        return ClientError.for(errorData.error, httpStatus, errorData.code);
    }
    if (httpStatus === 500) {
        if (isString(responseData.error)) {
            return new RequestFailedError(responseData.error);
        }
        return new RequestFailedError(responseText);
    }
    return new RequestFailedError(responseText);
}
function isJSONObject(o) {
    return typeof o === 'object' && !Array.isArray(o);
}
function isString(x) {
    return typeof x === 'string';
}
function isTask(result) {
    return !!result && !!result.task && Object(external_underscore_["size"])(result) === 1;
}
function asErrorResponseData(responseData) {
    var error = responseData.error;
    if (typeof error !== 'string') {
        throw new RequestFailedError('Malformed error response (key error is not a string)');
    }
    var code = responseData.code;
    if (code !== undefined && !isString(code)) {
        throw new RequestFailedError('Malformed error response (optional key code is not a string)');
    }
    var details = responseData.details;
    if (details !== undefined && !isJSONObject(details)) {
        throw new RequestFailedError('Malformed error response (optional key details is not an object');
    }
    return { code: code, error: error, details: details };
}
var cmsRestApi = new cms_rest_api_CmsRestApi();
// For test purpose only.
function cms_rest_api_reset() {
    cmsRestApi = new cms_rest_api_CmsRestApi();
    limitedRetries = true;
    retriesAreDisabled = undefined;
}
function disableRetries() {
    retriesAreDisabled = true;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/binary_metadata_retrieval.ts

function retrieveBinaryMetadata(binaryId) {
    return cmsRestApi.get("blobs/" + encodeURIComponent(binaryId || '') + "/meta_data");
}

// CONCATENATED MODULE: ./scrivito_sdk/client/obj_retrieval.ts



function mget(ids) {
    var workspaceId = current_workspace_currentWorkspaceId();
    return cmsRestApi
        .get("workspaces/" + workspaceId + "/objs/mget", {
        ids: ids,
        include_deleted: true,
    })
        .then(function (response) { return response.results; });
}
// Question: Why the magic batchSize: 17?
// Answer: Retrieval of up to 100 Objs is a common use-case (see ObjSearch)
// With a batchSize of 17, this leads to 6 concurrent requests, which is
// the concurrent request limit in many browsers for HTTP/1.
// This ensures maximum parallel loading.
var batchRetrieval = new batch_retrieval(mget, { batchSize: 17 });
function retrieveObj(id) {
    return batchRetrieval.retrieve(id).then(function (value) {
        if (value) {
            return value;
        }
        return { _deleted: id };
    });
}
// For test purpose only.
function obj_retrieval_reset() {
    batchRetrieval.reset();
}

// CONCATENATED MODULE: ./scrivito_sdk/client/obj_query_retrieval.ts
var obj_query_retrieval_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function retrieve(params) {
    var workspaceId = current_workspace_currentWorkspaceId();
    var consistentParams = obj_query_retrieval_assign({ consistent: true }, params);
    return cmsRestApi
        .get("workspaces/" + workspaceId + "/objs/search", consistentParams)
        .then(function (backendResponse) {
        var response = asBackendQueryResponse(backendResponse);
        return {
            results: response.results.map(function (result) { return result.id; }),
            continuation: response.continuation,
            total: response.total,
            objs: response.objs,
        };
    });
}
function asBackendQueryResponse(backendResponse) {
    var queryResponse = {
        results: backendResponse.results,
        total: backendResponse.total,
    };
    var continuation = backendResponse.continuation;
    if (continuation !== undefined) {
        queryResponse.continuation = continuation;
    }
    var objs = backendResponse.objs;
    if (objs !== undefined) {
        queryResponse.objs = objs;
    }
    return queryResponse;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/facet_query_retrieval.ts

function retrieveFacetQuery(currentWorkspaceId, params) {
    return cmsRestApi
        .get("workspaces/" + currentWorkspaceId + "/objs/search", params)
        .then(function (response) {
        var facets = response.facets;
        return {
            facets: facets.map(function (facetArray) {
                return facetArray.map(function (facet) {
                    return {
                        total: facet.total,
                        value: facet.value,
                        results: facet.results,
                    };
                });
            }),
        };
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/client/binary_urls_retrieval.ts


function retrieveBinaryUrls(binaryId, transformation) {
    var path = "blobs/" + encodeURIComponent(binaryId);
    var params;
    if (transformation) {
        path = path + "/optimize";
        params = { transformation: transformation };
    }
    return cmsRestApi
        .get(path, params)
        .then(function (response) { return parseBackendResponse(binaryId, response); });
}
function parseBackendResponse(binaryId, response) {
    var publicAccessData = response.public_access;
    var getPublicAccessData = publicAccessData.get;
    if (!getPublicAccessData.url) {
        throw new InternalError("Missing public access URL for binary \"" + binaryId + "\"");
    }
    var binaryData = {
        public_access: {
            get: {
                url: getPublicAccessData.url,
            },
        },
    };
    var privateAccessData = response.private_access;
    if (privateAccessData) {
        var getPrivateAccessData = privateAccessData.get;
        if (getPrivateAccessData.url) {
            binaryData.private_access = {
                get: {
                    url: getPrivateAccessData.url,
                },
            };
        }
    }
    return binaryData;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/cms_retrieval.ts






var cmsRetrieval = {
    retrieveObj: function (currentWorkspaceId, id) {
        assertValidCurrentWorkspaceId(currentWorkspaceId);
        return retrieveObj(id);
    },
    retrieveObjQuery: function (currentWorkspaceId, params) {
        assertValidCurrentWorkspaceId(currentWorkspaceId);
        return retrieve(params);
    },
    retrieveFacetQuery: function (currentWorkspaceId, params) {
        assertValidCurrentWorkspaceId(currentWorkspaceId);
        return retrieveFacetQuery(currentWorkspaceId, params);
    },
    retrieveBinaryMetadata: function (binaryId) {
        return retrieveBinaryMetadata(binaryId);
    },
    retrieveBinaryUrls: function (binaryId, transformation) {
        return retrieveBinaryUrls(binaryId, transformation);
    },
};
function replaceCmsRetrieval(newCmsRetrieval) {
    cmsRetrieval = newCmsRetrieval;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/obj_json.ts
function isExistentObjJson(data) {
    return !data._deleted;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/index.ts








// CONCATENATED MODULE: ./scrivito_sdk/data/facet_query.ts






var loadableCollection = new loadable_collection_LoadableCollection({
    name: 'facetquery',
    state: function () { return cmsState.subState('facetQuery'); },
    loader: function (params) {
        return cmsRetrieval.retrieveFacetQuery(current_workspace_currentWorkspaceId(), params);
    },
    invalidation: function () { return getContentStateId() || ''; },
});
var facet_query_FacetQuery = /** @class */ (function () {
    function FacetQuery(attribute, options, query) {
        this._requestParams = buildRequestParams(attribute, options, query);
        this._loadableData = loadableCollection.get(this._requestParams);
    }
    // For test purpose only.
    FacetQuery.store = function (attribute, options, query, response) {
        var requestParams = buildRequestParams(attribute, options, query);
        loadableCollection.get(requestParams).set(response);
    };
    FacetQuery.prototype.result = function () {
        assertNotUsingInMemoryTenant('Search API');
        var response = this._loadableData.get();
        if (!response) {
            return [];
        }
        return response.facets[0].map(function (facet) {
            var name = facet.value;
            var count = facet.total;
            var includedObjIds = facet.results.map(function (result) { return result.id; });
            return { name: name, count: count, includedObjIds: includedObjIds };
        });
    };
    return FacetQuery;
}());
/* harmony default export */ var facet_query = (facet_query_FacetQuery);
function buildRequestParams(attribute, options, query) {
    var params = {
        facets: [
            {
                attribute: attribute,
                limit: options.limit || 10,
                include_objs: options.includeObjs || 0,
            },
        ],
        size: 0,
    };
    if (!Object(external_underscore_["isEmpty"])(query)) {
        params.query = query;
    }
    return params;
}

// CONCATENATED MODULE: ./scrivito_sdk/data/find_widget_placement.ts


function findWidgetPlacement(objData, widgetId) {
    var placement = findWidgetPlacementIn(objData, widgetId);
    if (placement) {
        return placement;
    }
    var widgetPool = objData._widget_pool;
    if (widgetPool) {
        external_underscore_["find"](widgetPool, function (parentWidgetData, parentWidgetId) {
            if (parentWidgetData) {
                placement = findWidgetPlacementIn(parentWidgetData, widgetId);
                if (placement) {
                    placement.parentWidgetId = parentWidgetId;
                    return true;
                }
            }
        });
    }
    return placement;
}
function findWidgetPlacementIn(objOrWidgetData, widgetId) {
    var placement;
    external_underscore_["find"](objOrWidgetData, function (attributeDict, attributeName) {
        if (!attributeDict) {
            return;
        }
        if (isSystemAttribute(attributeName)) {
            return;
        }
        var _a = attributeDict, attributeType = _a[0], attributeValue = _a[1];
        if (attributeValue && attributeType === 'widgetlist') {
            var widgetlistValue = attributeValue;
            var index = widgetlistValue.indexOf(widgetId);
            if (index !== -1) {
                placement = { attributeName: attributeName, index: index };
                return true;
            }
        }
    });
    return placement;
}

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_patch.js
function obj_patch_slicedToArray(arr, i) { return obj_patch_arrayWithHoles(arr) || obj_patch_iterableToArrayLimit(arr, i) || obj_patch_nonIterableRest(); }

function obj_patch_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function obj_patch_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function obj_patch_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function patchObjJson(primitiveObj, patch) {
  if (!primitiveObj) {
    return patch;
  }

  if (!patch) {
    return null;
  }

  var updatedPrimitiveObj = {};
  eachKeyFrom(primitiveObj, patch, function (attribute, objValue, patchValue) {
    if (attribute === '_widget_pool') {
      updatedPrimitiveObj._widget_pool = buildUpdatedWidgetPool(objValue, patchValue);
    } else if (Object.prototype.hasOwnProperty.call(patch, attribute)) {
      if (patchValue) {
        updatedPrimitiveObj[attribute] = patchValue;
      }
    } else {
      updatedPrimitiveObj[attribute] = primitiveObj[attribute];
    }
  });
  return updatedPrimitiveObj;
}
function diffObjJson(primitiveObjA, primitiveObjB) {
  if (!primitiveObjA) {
    return primitiveObjB;
  }

  if (!primitiveObjB) {
    return null;
  }

  var patch = {};
  eachKeyFrom(primitiveObjA, primitiveObjB, function (attribute, valueInA, valueInB) {
    if (attribute === '_widget_pool') {
      var widgetPoolPatch = buildWidgetPoolPatch(valueInA, valueInB);

      if (!external_underscore_default.a.isEmpty(widgetPoolPatch)) {
        patch._widget_pool = widgetPoolPatch;
      }
    } else {
      var patchValue = buildPatchEntry(valueInA, valueInB, function () {
        if (!external_underscore_default.a.isEqual(valueInA, valueInB)) {
          return valueInB;
        }
      });

      if (patchValue !== undefined) {
        patch[attribute] = patchValue;
      }
    }
  });
  return patch;
}

function eachKeyFrom(objectA, objectB, handler) {
  external_underscore_default.a.union(external_underscore_default.a.keys(objectA), external_underscore_default.a.keys(objectB)).forEach(function (key) {
    return handler(key, workspaceAwareObject(objectA[key]), workspaceAwareObject(objectB[key]));
  });
}

function workspaceAwareObject(object) {
  if (external_underscore_default.a.isArray(object)) {
    var _object = obj_patch_slicedToArray(object, 2),
        type = _object[0],
        value = _object[1]; // Ignore binary URLs, since they are different across workspaces.
    // However, a binary ID identifies a binary unambiguously.


    if (type === 'binary' && value) {
      return [type, external_underscore_default.a.omit(value, 'url')];
    }

    return object;
  }

  return object;
}

function buildUpdatedWidgetPool(widgetPool, widgetPoolPatch) {
  if (!widgetPoolPatch || external_underscore_default.a.isEmpty(widgetPoolPatch)) {
    return widgetPool;
  }

  var updatedWidgetPool = {};
  eachKeyFrom(widgetPool || {}, widgetPoolPatch || {}, function (id, widget, widgetPatch) {
    if (Object.prototype.hasOwnProperty.call(widgetPoolPatch, id)) {
      if (widgetPatch && !widget) {
        updatedWidgetPool[id] = widgetPatch;
      } else if (widgetPatch) {
        updatedWidgetPool[id] = patchObjJson(widget, widgetPatch);
      }
    } else {
      updatedWidgetPool[id] = widget;
    }
  });
  return updatedWidgetPool;
}

function buildPatchEntry(valueA, valueB, fnHandleBoth) {
  if (!valueA && valueB) {
    return valueB;
  }

  if (valueA && !valueB) {
    return null;
  }

  if (valueA && valueB) {
    return fnHandleBoth();
  }
}

function buildWidgetPoolPatch(widgetPoolA, widgetPoolB) {
  if (widgetPoolA === widgetPoolB) {
    return {};
  }

  var patch = {};
  eachKeyFrom(widgetPoolA, widgetPoolB, function (widgetId, widgetA, widgetB) {
    var widgetValue = buildPatchEntry(widgetA, widgetB, function () {
      var widgetPatch = diffObjJson(widgetA, widgetB);

      if (!external_underscore_default.a.isEmpty(widgetPatch)) {
        return widgetPatch;
      }
    });

    if (widgetValue !== undefined) {
      patch[widgetId] = widgetValue;
    }
  });
  return patch;
}
// CONCATENATED MODULE: ./scrivito_sdk/data/obj_replication.js
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var obj_replication_ObjReplication =
/*#__PURE__*/
function () {
  function ObjReplication(id) {
    var _this = this;

    _classCallCheck(this, ObjReplication);

    this._id = id;
    this._replicationActive = false;
    this._scheduledReplication = false;
    this._currentRequestDeferred = null;
    this._nextRequestDeferred = null;
    this._performThrottledReplication = throttle(function () {
      return _this._performReplication();
    }, 1000);
  }

  _createClass(ObjReplication, [{
    key: "notifyLocalState",
    value: function notifyLocalState(localState) {
      if (objReplicationPool.isDisabled()) {
        return;
      }

      if (this._backendState === undefined) {
        throw new InternalError('Can not set local state before backend state.');
      }

      if (this._backendState && this._backendState._deleted) {
        throw new InternalError('Can not update a fully deleted obj.');
      }

      this._localState = localState;

      this._startReplication();
    }
  }, {
    key: "notifyBackendState",
    value: function notifyBackendState(newBackendState) {
      if (this._backendState === undefined) {
        this._backendState = newBackendState;

        this._updateLocalState(newBackendState);

        return;
      }

      var newestKnownBackendState = this._bufferedBackendState || this._backendState;

      if (compareStates(newBackendState, newestKnownBackendState) > 0) {
        if (this._replicationActive) {
          this._bufferedBackendState = newBackendState;
        } else {
          if (newBackendState._deleted) {
            this._updateLocalState(null);
          } else {
            var patch = diff(this._backendState, newBackendState);

            this._updateLocalState(apply(this.localState, patch));
          }

          this._backendState = newBackendState;
        }
      }
    }
  }, {
    key: "finishSaving",
    value: function finishSaving() {
      var finishSavingPromise;

      if (this._nextRequestDeferred) {
        finishSavingPromise = this._nextRequestDeferred.promise;
      } else if (this._currentRequestDeferred) {
        finishSavingPromise = this._currentRequestDeferred.promise;
      } else {
        return ScrivitoPromise.resolve();
      }

      return finishSavingPromise.catch(function () {
        return ScrivitoPromise.reject();
      });
    }
  }, {
    key: "_startReplication",
    value: function _startReplication() {
      var _this2 = this;

      if (!external_underscore_default.a.isEmpty(diff(this._backendState, this._localState))) {
        if (!this._replicationActive) {
          if (!this._scheduledReplication) {
            this._scheduledReplication = true;

            this._initDeferredForRequest();

            objReplicationPool.writeStarted(this._currentRequestDeferred.promise);
            nextTick(function () {
              return _this2._performThrottledReplication();
            });
          }
        } else if (!this._nextRequestDeferred) {
          this._nextRequestDeferred = new common_deferred();
        }
      } else if (this._nextRequestDeferred) {
        this._nextRequestDeferred.resolve();

        this._nextRequestDeferred = null;
      }
    }
  }, {
    key: "_performReplication",
    value: function _performReplication() {
      var _this3 = this;

      var localState = this._localState;
      var patch = diff(this._backendState, this._localState);
      this._scheduledReplication = false;
      this._replicationActive = true;

      this._replicatePatchToBackend(patch).then(function (backendState) {
        _this3._handleBackendUpdate(localState, backendState);

        _this3._currentRequestDeferred.resolve(_this3._id);

        _this3._currentRequestDeferred = null;
        _this3._replicationActive = false;

        _this3._startReplication();
      }, function (error) {
        _this3._currentRequestDeferred.reject(error);

        _this3._currentRequestDeferred = null;
        _this3._replicationActive = false;
      });
    }
  }, {
    key: "_replicatePatchToBackend",
    value: function _replicatePatchToBackend(patch) {
      if (external_underscore_default.a.isEmpty(patch)) {
        return ScrivitoPromise.resolve(this._backendState);
      }

      var workspaceId = current_workspace_currentWorkspaceId();
      var path = "workspaces/".concat(workspaceId, "/objs/").concat(this._id);
      return cmsRestApi.put(path, {
        obj: patch
      });
    }
  }, {
    key: "_initDeferredForRequest",
    value: function _initDeferredForRequest() {
      if (this._nextRequestDeferred) {
        var currentDeferred = this._nextRequestDeferred;
        this._nextRequestDeferred = null;
        this._currentRequestDeferred = currentDeferred;
      } else {
        this._currentRequestDeferred = new common_deferred();
      }
    }
  }, {
    key: "_handleBackendUpdate",
    value: function _handleBackendUpdate(replicatedState, backendState) {
      var bufferedLocalChanges = diff(replicatedState, this._localState);
      this._backendState = newerState(backendState, this._bufferedBackendState);
      this._bufferedBackendState = undefined;

      this._updateLocalState(apply(this._backendState, bufferedLocalChanges));
    }
  }, {
    key: "_updateLocalState",
    value: function _updateLocalState(localState) {
      this._localState = localState;
      setObjData(this._id, this._localState);
    } // For test purpose only.

  }, {
    key: "isNotStoredInBackend",
    // For test purpose only.
    value: function isNotStoredInBackend() {
      return this._backendState === null;
    } // For test purpose only.

  }, {
    key: "isRequestInFlight",
    value: function isRequestInFlight() {
      return this._replicationActive;
    }
  }, {
    key: "backendState",
    get: function get() {
      return this._backendState;
    } // For test purpose only.

  }, {
    key: "localState",
    get: function get() {
      return this._localState;
    }
  }]);

  return ObjReplication;
}();



function diff(stateA, stateB) {
  return diffObjJson(stateA, stateB);
}

function apply(stateA, patch) {
  return patchObjJson(stateA, patch);
}

function newerState(stateA, stateB) {
  if (compareStates(stateA, stateB) > 0) {
    return stateA;
  }

  return stateB;
}

function compareStates(stateA, stateB) {
  if (!stateA) {
    return -1;
  }

  if (!stateB) {
    return 1;
  }

  return strCompare(stateA._version, stateB._version);
}

function strCompare(str1, str2) {
  if (str1 > str2) {
    return 1;
  }

  if (str2 > str1) {
    return -1;
  }

  return 0;
}
// CONCATENATED MODULE: ./scrivito_sdk/data/obj_replication_pool.ts


var obj_replication_pool_ObjReplicationPool = /** @class */ (function () {
    function ObjReplicationPool() {
        this._replicationCache = {};
        this._disabled = false;
        this._writeWriteCallbacks = {};
        this._subscriptionToken = 0;
    }
    ObjReplicationPool.prototype.get = function (id) {
        if (!this._replicationCache[id]) {
            this._replicationCache[id] = new obj_replication_ObjReplication(id);
        }
        return this._replicationCache[id];
    };
    ObjReplicationPool.prototype.subscribeWrites = function (callback) {
        this._subscriptionToken += 1;
        this._writeWriteCallbacks[this._subscriptionToken] = callback;
        return this._subscriptionToken;
    };
    ObjReplicationPool.prototype.unsubscribeWrites = function (token) {
        delete this._writeWriteCallbacks[token];
    };
    ObjReplicationPool.prototype.isDisabled = function () {
        return this._disabled;
    };
    ObjReplicationPool.prototype.writeStarted = function (promise) {
        Object(external_underscore_["each"])(this._writeWriteCallbacks, function (callback) {
            callback(promise);
        });
    };
    ObjReplicationPool.prototype.disableReplication = function () {
        this._disabled = true;
    };
    // For test purpose only.
    ObjReplicationPool.prototype.enableReplication = function () {
        this._disabled = false;
    };
    // For test purpose only.
    ObjReplicationPool.prototype.clearWriteCallbacks = function () {
        this._writeWriteCallbacks = {};
    };
    // For test purpose only.
    ObjReplicationPool.prototype.clearCache = function () {
        this._replicationCache = {};
    };
    return ObjReplicationPool;
}());
var objReplicationPool = new obj_replication_pool_ObjReplicationPool();
function replaceObjReplicationPool(newObjReplicationPool) {
    objReplicationPool = newObjReplicationPool;
}

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_data.ts






function clearObjDataCache() {
    cacheStore().clear();
}
function cacheStore() {
    return cmsState.subState('objData');
}
var obj_data_loadableCollection = new loadable_collection_LoadableCollection({
    name: 'objdata',
    state: cacheStore,
    loader: function (id, _a) {
        var push = _a.push;
        return cmsRetrieval.retrieveObj(current_workspace_currentWorkspaceId(), id).then(function (data) {
            push(function () { return objReplicationPool.get(id).notifyBackendState(data); });
            return data;
        });
    },
});
var obj_data_ObjData = /** @class */ (function () {
    function ObjData(id) {
        this._loadableData = obj_data_loadableCollection.get(id);
        this._id = id;
    }
    ObjData.prototype.get = function () {
        failIfTracking('for performance reasons, avoid this method when rendering');
        return this._loadableData.get();
    };
    ObjData.prototype.getWidget = function (id) {
        failIfTracking('for performance reasons, avoid this method when rendering');
        return this.getWidgetState(id).get();
    };
    ObjData.prototype.getAttribute = function (key) {
        if (key === '_widget_pool') {
            throw new InternalError('_widget_pool is not an attribute, use getWidget or getWidgetAttribute');
        }
        return this.getSubReader(key).get();
    };
    ObjData.prototype.getWidgetAttribute = function (id, key) {
        return this.getWidgetState(id)
            .subState(key)
            .get();
    };
    ObjData.prototype.isNonExistent = function () {
        return (!!this.getSubReader('_deleted').get() || !this.getSubReader('_id').get());
    };
    ObjData.prototype.set = function (newState) {
        failIfFrozen('Changing CMS content');
        this._loadableData.set(newState);
    };
    ObjData.prototype.setError = function (error) {
        this._loadableData.setError(error);
    };
    ObjData.prototype.ensureAvailable = function () {
        return this._loadableData.ensureAvailable();
    };
    ObjData.prototype.isAvailable = function () {
        return this._loadableData.isAvailable();
    };
    ObjData.prototype.update = function (objPatch) {
        var newState = patchObjJson(this.get(), objPatch);
        this.set(newState);
        this._replication().notifyLocalState(newState);
    };
    ObjData.prototype.finishSaving = function () {
        return this._replication().finishSaving();
    };
    ObjData.prototype._replication = function () {
        return objReplicationPool.get(this._id);
    };
    ObjData.prototype.getWidgetState = function (id) {
        var widgetPoolState = this.getSubReader('_widget_pool');
        // subState takes care of `undefined` but TS cannot yet express that
        return widgetPoolState.subState(id);
    };
    ObjData.prototype.getSubReader = function (key) {
        var reader = this._loadableData.reader();
        // subState takes care of `null` and `undefined` but TS cannot yet express that
        return reader.subState(key);
    };
    return ObjData;
}());
/* harmony default export */ var obj_data = (obj_data_ObjData);

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_data_store.js




function preloadObjData(id) {
  load(function () {
    return getObjData(id);
  });
}
function createObjData(id) {
  var objData = objDataFor(id);
  objData.set(null);
  objReplicationPool.get(id).notifyBackendState(null);
  return objData;
}
function storeObjData(primitiveObj) {
  var id = primitiveObj._id;

  if (!objDataFor(id).isAvailable()) {
    setObjData(id, primitiveObj);
  }

  objReplicationPool.get(id).notifyBackendState(primitiveObj);
} // For test purpose only.

function setObjDataNonexistent(id) {
  setObjData(id, {
    _deleted: true
  });
}
function setObjData(id, primitiveObj) {
  objDataFor(id).set(primitiveObj);
} // For test purpose only.

function setObjDataError(id, error) {
  objDataFor(id).setError(error);
}
function getObjData(id) {
  var objData = objDataFor(id);

  if (!objData.ensureAvailable()) {
    return;
  }

  return objData;
}

function objDataFor(id) {
  return new obj_data(id);
}
// CONCATENATED MODULE: ./scrivito_sdk/data/obj_id_query_batch.ts
var obj_id_query_batch_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







var FALLBACK_RESPONSE = {
    results: [],
    total: 0,
};
var obj_id_query_batch_loadableCollection = new loadable_collection_LoadableCollection({
    name: 'objquery',
    state: function () { return objQueryStateContainer(); },
    loader: obj_id_query_batch_loader,
    invalidation: function () { return getContentStateId() || ''; },
});
var ObjIdQueryBatch = /** @class */ (function () {
    // the constructor should only be called internally,
    // i.e. by ObjIdQueryBatch itself
    function ObjIdQueryBatch(params, batchSize, index) {
        if (index === void 0) { index = 0; }
        this._params = params;
        this._batchSize = batchSize;
        this._index = index;
    }
    ObjIdQueryBatch.store = function (params, objIds, total) {
        if (total === void 0) { total = objIds.length; }
        var loadableData = obj_id_query_batch_loadableCollection.get([
            backendOrderedHitsParams(params),
            0,
        ]);
        loadableData.set({ results: objIds, total: total });
    };
    ObjIdQueryBatch.firstBatchFor = function (params, batchSize) {
        return new ObjIdQueryBatch(backendOrderedHitsParams(params), batchSize);
    };
    ObjIdQueryBatch.countFor = function (params) {
        return this.firstBatchFor(params, 0).count();
    };
    ObjIdQueryBatch.prototype.objIds = function () {
        return this._response().results;
    };
    ObjIdQueryBatch.prototype.count = function () {
        return this._response().total || 0;
    };
    // returns the next batch or undefined if this is the last batch
    // throws NotLoadedError if not available
    ObjIdQueryBatch.prototype.nextBatch = function () {
        if (this.continuationForNextBatch()) {
            return new ObjIdQueryBatch(this._params, this._batchSize, this._index + 1);
        }
    };
    Object.defineProperty(ObjIdQueryBatch.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    ObjIdQueryBatch.prototype.continuationForNextBatch = function () {
        return this._response().continuation;
    };
    ObjIdQueryBatch.prototype._response = function () {
        return this._data().get() || FALLBACK_RESPONSE;
    };
    ObjIdQueryBatch.prototype._data = function () {
        return obj_id_query_batch_loadableCollection.get([this._params, this._index], this._batchSize);
    };
    return ObjIdQueryBatch;
}());
/* harmony default export */ var obj_id_query_batch = (ObjIdQueryBatch);
function obj_id_query_batch_loader(_a, _b, batchSize) {
    var params = _a[0], index = _a[1];
    var push = _b.push, isReload = _b.isReload, wasCancelled = _b.wasCancelled;
    return fetchContinuation(params, batchSize, index).then(function (continuation) {
        if (wasCancelled()) {
            // if the load was cancelled, this error will never surface anywhere
            throw new Error();
        }
        var batchSpecificParams = {
            size: batchSize,
            continuation: continuation,
            include_objs: !isReload(),
        };
        var requestParams = obj_id_query_batch_assign({}, params, batchSpecificParams);
        return cmsRetrieval
            .retrieveObjQuery(current_workspace_currentWorkspaceId(), requestParams)
            .then(function (response) {
            var objs = response.objs;
            if (objs) {
                push(function () {
                    return objs.forEach(function (objJson) { return storeObjData(objJson); });
                });
            }
            obj_id_query_batch_preloadObjData(response.results);
            return {
                results: response.results,
                total: response.total,
                continuation: response.continuation,
            };
        });
    });
}
function fetchContinuation(params, batchSize, index) {
    if (index > 0) {
        var previousBatch_1 = new ObjIdQueryBatch(params, batchSize, index - 1);
        return load(function () { return previousBatch_1.continuationForNextBatch(); });
    }
    return ScrivitoPromise.resolve();
}
function obj_id_query_batch_preloadObjData(ids) {
    ids.forEach(function (id) { return preloadObjData(id); });
}
function backendOrderedHitsParams(params) {
    var backendParams = Object(external_underscore_["omit"])({
        query: params.query,
        offset: params.offset,
        sort_by: params.sortBy,
        sort_order: params.sortDirection,
    }, external_underscore_["isUndefined"]);
    if (params.includeDeleted) {
        backendParams.options = { include_deleted: true };
    }
    return backendParams;
}

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_id_query.js
function obj_id_query_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function obj_id_query_classCallCheck(instance, Constructor) { if (!obj_id_query_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function obj_id_query_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function obj_id_query_createClass(Constructor, protoProps, staticProps) { if (protoProps) obj_id_query_defineProperties(Constructor.prototype, protoProps); if (staticProps) obj_id_query_defineProperties(Constructor, staticProps); return Constructor; }



var obj_id_query_ObjIdQuery =
/*#__PURE__*/
function () {
  obj_id_query_createClass(ObjIdQuery, null, [{
    key: "store",
    value: function store(params, objIds, total) {
      obj_id_query_batch.store(params, objIds, total);
    }
  }, {
    key: "count",
    value: function count(params) {
      return obj_id_query_batch.countFor(params);
    }
  }]);

  function ObjIdQuery(params, batchSize) {
    obj_id_query_classCallCheck(this, ObjIdQuery);

    this._params = params;
    this._batchSize = batchSize;
  }

  obj_id_query_createClass(ObjIdQuery, [{
    key: "iterator",
    value: function iterator() {
      var priorObjIds = {};
      var currentBatch = obj_id_query_batch.firstBatchFor(this._params, this._batchSize);
      var currentIndex = 0;

      function next() {
        if (!currentBatch) {
          return {
            done: true
          };
        }

        var currentObjIds = currentBatch.objIds();

        if (currentIndex < currentObjIds.length) {
          var objId = currentObjIds[currentIndex];
          currentIndex++;

          if (priorObjIds[objId]) {
            return next();
          }

          priorObjIds[objId] = true;
          return {
            value: objId,
            done: false
          };
        }

        currentBatch = currentBatch.nextBatch();
        currentIndex = 0;
        return next();
      }

      return {
        next: next
      };
    }
  }]);

  return ObjIdQuery;
}();


// CONCATENATED MODULE: ./scrivito_sdk/data/obj_data_query.js
function obj_data_query_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function obj_data_query_classCallCheck(instance, Constructor) { if (!obj_data_query_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function obj_data_query_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function obj_data_query_createClass(Constructor, protoProps, staticProps) { if (protoProps) obj_data_query_defineProperties(Constructor.prototype, protoProps); if (staticProps) obj_data_query_defineProperties(Constructor, staticProps); return Constructor; }




var obj_data_query_ObjDataQuery =
/*#__PURE__*/
function () {
  function ObjDataQuery(params, batchSize) {
    obj_data_query_classCallCheck(this, ObjDataQuery);

    this._params = params;
    this._batchSize = batchSize;
  }

  obj_data_query_createClass(ObjDataQuery, [{
    key: "count",
    value: function count() {
      return obj_id_query_ObjIdQuery.count(this._params);
    }
  }, {
    key: "iterator",
    value: function iterator() {
      return new obj_data_query_ObjDataQueryIterator(this._params, this._batchSize);
    }
  }]);

  return ObjDataQuery;
}();



var obj_data_query_ObjDataQueryIterator =
/*#__PURE__*/
function () {
  function ObjDataQueryIterator(params, batchSize) {
    obj_data_query_classCallCheck(this, ObjDataQueryIterator);

    this._iterator = new obj_id_query_ObjIdQuery(params, batchSize).iterator();
  }

  obj_data_query_createClass(ObjDataQueryIterator, [{
    key: "next",
    value: function next() {
      if (!this._iterator) {
        return {
          done: true
        };
      }

      var id = this._iterator.next().value;

      if (!id) {
        return {
          done: true
        };
      }

      var objData = getObjData(id);

      if (objData === undefined) {
        this._iterator = undefined;
        return {
          done: true
        };
      }

      if (objData.isNonExistent()) {
        return this.next();
      }

      return {
        value: objData,
        done: false
      };
    }
  }]);

  return ObjDataQueryIterator;
}();
// CONCATENATED MODULE: ./scrivito_sdk/data/obj_query_store.ts




function storeObjQuery(params, objIds, total) {
    obj_id_query_ObjIdQuery.store(params, objIds, total);
}
function getObjQuery(params, batchSize) {
    assertNotUsingInMemoryTenant('Search API');
    return new obj_data_query_ObjDataQuery(params, batchSize);
}
function objQueryStateContainer() {
    return cmsState.subState('objQuery');
}
function clearObjQueryCache() {
    objQueryStateContainer().clear();
}

// CONCATENATED MODULE: ./scrivito_sdk/data/index.ts










// CONCATENATED MODULE: ./scrivito_sdk/models/basic_obj_search.ts





var OPERATORS = [
    'contains',
    'containsPrefix',
    'equals',
    'startsWith',
    'isGreaterThan',
    'isLessThan',
    'linksTo',
    'refersTo',
];
var NEGATABLE_OPERATORS = [
    'equals',
    'startsWith',
    'isGreaterThan',
    'isLessThan',
];
var BOOSTABLE_OPERATORS = ['contains', 'containsPrefix'];
var DEFAULT_BATCH_SIZE = 100;
var DEFAULT_PARAMS = { query: [] };
var basic_obj_search_BasicObjSearch = /** @class */ (function () {
    function BasicObjSearch(params) {
        if (params === void 0) { params = DEFAULT_PARAMS; }
        var query = [];
        this._query = query.concat(params.query);
        this._batchSize = params.batchSize;
        this._offset = params.offset;
        this._sortBy = params.sortBy;
        this._sortDirection = params.sortDirection;
        this._includeDeleted = params.includeDeleted;
    }
    BasicObjSearch.prototype.and = function (attributeOrSearch, operator, value, boost) {
        if (attributeOrSearch instanceof BasicObjSearch) {
            this._query = this._query.concat(attributeOrSearch._query);
        }
        else {
            if (operator === undefined) {
                throw new ArgumentError('Missing operator to search with');
            }
            if (value === undefined) {
                throw new ArgumentError('Missing value to search (specify "null" for missing)');
            }
            var field = attributeOrSearch;
            var subQuery = buildSubQuery(field, operator, value);
            if (boost) {
                assertBoostableOperator(operator);
                subQuery.boost = underscoreBoostAttributes(boost);
            }
            this._query.push(subQuery);
        }
        return this;
    };
    BasicObjSearch.prototype.andNot = function (attribute, operator, value) {
        var subQuery = buildSubQuery(attribute, operator, value);
        assertNegatableOperator(operator);
        subQuery.negate = true;
        this._query.push(subQuery);
        return this;
    };
    BasicObjSearch.prototype.offset = function (offset) {
        this._offset = offset;
        return this;
    };
    BasicObjSearch.prototype.order = function (attribute, direction) {
        if (direction === void 0) { direction = 'asc'; }
        this._sortBy = underscoreAttribute(attribute);
        this._sortDirection = direction;
        return this;
    };
    BasicObjSearch.prototype.batchSize = function (batchSize) {
        this._batchSize = batchSize;
        return this;
    };
    BasicObjSearch.prototype.includeDeleted = function () {
        this._includeDeleted = true;
        return this;
    };
    BasicObjSearch.prototype.count = function () {
        return this.getObjDataQuery().count();
    };
    BasicObjSearch.prototype.first = function () {
        return this.take(1)[0] || null;
    };
    BasicObjSearch.prototype.take = function (count) {
        var oldBatchSize = this._batchSize;
        try {
            this._batchSize = count === undefined ? 1000 : count;
            return arrayFromIterable(this, count);
        }
        finally {
            this._batchSize = oldBatchSize;
        }
    };
    BasicObjSearch.prototype.iterator = function () {
        var queryIterator = this.getObjDataQuery().iterator();
        return {
            next: function () {
                var _a = queryIterator.next(), done = _a.done, value = _a.value;
                if (done) {
                    return { done: true };
                }
                return { done: false, value: new basic_obj(value) };
            },
        };
    };
    BasicObjSearch.prototype.getObjDataQuery = function () {
        return getObjQuery(this.params(), this.getBatchSize());
    };
    BasicObjSearch.prototype.getBatchSize = function () {
        return this._batchSize || DEFAULT_BATCH_SIZE;
    };
    BasicObjSearch.prototype.facet = function (attribute, options) {
        var facetOptions;
        if (options === undefined) {
            facetOptions = {};
        }
        else {
            facetOptions = assertValidFacetOptions(options);
        }
        var facetQuery = new facet_query(underscoreAttribute(attribute), facetOptions, this._query);
        return facetQuery
            .result()
            .map(function (facetData) { return new basic_obj_facet_value(facetData); });
    };
    BasicObjSearch.prototype.store = function (objIds, total) {
        storeObjQuery(this.params(), objIds, total);
    };
    BasicObjSearch.prototype.params = function () {
        return Object(external_underscore_["omit"])({
            query: this._query,
            offset: this._offset,
            sortBy: this._sortBy,
            sortDirection: this._sortDirection,
            includeDeleted: this._includeDeleted,
            batchSize: this._batchSize,
        }, external_underscore_["isUndefined"]);
    };
    return BasicObjSearch;
}());
/* harmony default export */ var basic_obj_search = (basic_obj_search_BasicObjSearch);
function buildSubQuery(fieldInput, operatorInput, valueInput) {
    var field = convertAttribute(fieldInput);
    var operator = convertOperator(operatorInput);
    var value = convertValue(valueInput);
    return { field: field, operator: operator, value: value };
}
function assertBoostableOperator(operator) {
    if (!Object(external_underscore_["contains"])(BOOSTABLE_OPERATORS, operator)) {
        throw new ArgumentError("Boosting operator \"" + operator + "\" is invalid.");
    }
}
function assertNegatableOperator(operator) {
    if (!Object(external_underscore_["contains"])(NEGATABLE_OPERATORS, operator)) {
        throw new ArgumentError("Negating operator \"" + operator + "\" is invalid.");
    }
}
function convertValue(value) {
    if (Object(external_underscore_["isArray"])(value)) {
        return Object(external_underscore_["map"])(value, convertSingleValue);
    }
    return convertSingleValue(value);
}
function convertSingleValue(value) {
    if (Object(external_underscore_["isDate"])(value)) {
        return formatDateToString(value);
    }
    if (value instanceof basic_obj) {
        return value.id();
    }
    return value;
}
function convertOperator(operator) {
    if (!isValidOperator(operator)) {
        throw new ArgumentError("Operator \"" + operator + "\" is invalid.");
    }
    return underscore(operator);
}
function isValidOperator(operator) {
    return Object(external_underscore_["contains"])(OPERATORS, operator);
}
function convertAttribute(attribute) {
    if (Object(external_underscore_["isArray"])(attribute)) {
        return Object(external_underscore_["map"])(attribute, underscoreAttribute);
    }
    return underscoreAttribute(attribute);
}
function underscoreBoostAttributes(boost) {
    var boostWithUnderscoreAttributes = {};
    Object(external_underscore_["each"])(boost, function (value, attributeName) {
        var underscoredAttributeName = underscoreAttribute(attributeName);
        boostWithUnderscoreAttributes[underscoredAttributeName] = value;
    });
    return boostWithUnderscoreAttributes;
}
function underscoreAttribute(attributeName) {
    if (!isCamelCase(attributeName)) {
        throw new ArgumentError("Attribute name \"" + attributeName + "\" is not camel case.");
    }
    return underscore(attributeName);
}
var VALID_FACET_OPTIONS = ['limit', 'includeObjs'];
function assertValidFacetOptions(options) {
    var invalidOptions = external_underscore_["without"].apply(void 0, [Object.keys(options)].concat(VALID_FACET_OPTIONS));
    if (invalidOptions.length) {
        throw new ArgumentError('Invalid facet options: ' +
            (prettyPrint(invalidOptions) + ". Valid options: " + VALID_FACET_OPTIONS));
    }
    return options;
}

// CONCATENATED MODULE: ./scrivito_sdk/models/model_types.ts






var ObjType = external_tcomb_validation_.irreducible('Obj', function (maybeObj) {
    return isWrapping(maybeObj, basic_obj);
});
var WidgetType = external_tcomb_validation_.irreducible('Widget', function (maybeWidget) {
    return isWrapping(maybeWidget, basic_widget_BasicWidget);
});
var LinkType = external_tcomb_validation_.irreducible('Link', function (maybeLink) {
    return isWrapping(maybeLink, basic_link);
});
var ObjSearchType = external_tcomb_validation_.irreducible('ObjSearch', function (maybeSearch) { return isWrapping(maybeSearch, basic_obj_search); });
var BinaryType = external_tcomb_validation_.irreducible('Binary', function (maybeBinary) { return maybeBinary instanceof models_binary; });
function isWrapping(maybeWrapped, basicClass) {
    if (!maybeWrapped) {
        return false;
    }
    return (maybeWrapped
        ._scrivitoPrivateContent instanceof basicClass);
}

// CONCATENATED MODULE: ./scrivito_sdk/models/future_binary.ts




var binaryHandler;
function setBinaryHandler(handler) {
    binaryHandler = handler;
}
var future_binary_FutureBinary = /** @class */ (function () {
    function FutureBinary(sourceSpec, options) {
        if (options === void 0) { options = {}; }
        var filename = options.filename;
        this.contentType = options.contentType;
        if (isIdToCopySource(sourceSpec)) {
            this.idToCopy = sourceSpec.idToCopy;
        }
        else {
            var source = sourceSpec.source;
            this.source = source;
            if (!this.contentType) {
                this.contentType = source.type;
            }
            if (!filename) {
                filename = source.name;
            }
        }
        if (filename) {
            this.filename = filename.replace(/[^\w\-_\.$]/g, '-');
        }
    }
    // public API
    FutureBinary.prototype.into = function (target) {
        checkInto(target);
        failIfFrozen('Changing CMS content');
        return this.intoId(target._scrivitoPrivateContent.id());
    };
    FutureBinary.prototype.intoId = function (targetId) {
        if (!binaryHandler) {
            throw new InternalError('No binaryHandler defined!');
        }
        var binaryPromise;
        if (this.idToCopy) {
            binaryPromise = binaryHandler.copyBinary(this.idToCopy, targetId, this.filename, this.contentType);
        }
        else {
            if (!this.source) {
                throw new InternalError('Source is not defined!');
            }
            binaryPromise = binaryHandler.uploadBinary(targetId, this.source, this.filename, this.contentType);
        }
        return binaryPromise.then(function (_a) {
            var id = _a.id;
            return new models_binary(id, false);
        });
    };
    return FutureBinary;
}());
var checkInto = checkArgumentsFor('FutureBinary#into', [['target', ObjType]], {
    docPermalink: 'js-sdk/FutureBinary-into',
});
function isIdToCopySource(toCheck) {
    return !!toCheck.idToCopy;
}
/* harmony default export */ var future_binary = (future_binary_FutureBinary);

// CONCATENATED MODULE: ./scrivito_sdk/models/metadata_collection.ts






var BackendBinaryMetadataType;
(function (BackendBinaryMetadataType) {
    BackendBinaryMetadataType["Date"] = "date";
    BackendBinaryMetadataType["Number"] = "number";
    BackendBinaryMetadataType["String"] = "string";
    BackendBinaryMetadataType["Stringlist"] = "stringlist";
})(BackendBinaryMetadataType || (BackendBinaryMetadataType = {}));
var metadata_collection_loadableCollection = new loadable_collection_LoadableCollection({
    name: 'metadata',
    state: function () { return cmsState.subState('metadataCollection'); },
    loader: function (id) { return cmsRetrieval.retrieveBinaryMetadata(id); },
});
// public API
var metadata_collection_MetadataCollection = /** @class */ (function () {
    function MetadataCollection(binaryId) {
        this._binaryId = binaryId;
        if (binaryId) {
            this._loadableData = metadata_collection_loadableCollection.get(binaryId);
        }
    }
    MetadataCollection.store = function (binaryId, response) {
        // deserialize once, as a sanity check
        deserializeMetadata(response);
        metadata_collection_loadableCollection.get(binaryId).set(response);
    };
    // public API
    MetadataCollection.prototype.get = function (key) {
        assertNotUsingInMemoryTenant('MetadataCollection#get');
        assertCamelCase(key);
        var data = this._getData();
        if (data) {
            var underscoredKey = underscore(key);
            if (data.hasOwnProperty(underscoredKey)) {
                return data[underscoredKey];
            }
            return null;
        }
        return null;
    };
    MetadataCollection.prototype.keys = function () {
        var data = this._getData();
        if (data) {
            return Object(external_underscore_["map"])(Object(external_underscore_["keys"])(data), camelCase);
        }
        return [];
    };
    Object.defineProperty(MetadataCollection.prototype, "binaryId", {
        // For test purpose only.
        get: function () {
            return this._binaryId;
        },
        enumerable: true,
        configurable: true
    });
    MetadataCollection.prototype._getData = function () {
        if (this._loadableData) {
            var metadata = this._loadableData.get();
            if (metadata) {
                return deserializeMetadata(metadata);
            }
        }
    };
    return MetadataCollection;
}());
/* harmony default export */ var metadata_collection = (metadata_collection_MetadataCollection);
function deserializeMetadata(response) {
    var backendMetadata = response.meta_data;
    var metadata = {};
    for (var _i = 0, _a = Object.keys(backendMetadata); _i < _a.length; _i++) {
        var key = _a[_i];
        var _b = backendMetadata[key], backendType = _b[0], backendValue = _b[1];
        if (backendValue === null || backendValue === undefined) {
            throw new InternalError("Invalid backend value \"null\" or \"undefined\" for metadata \"" + key + "\"");
        }
        var value = void 0;
        if (backendType === BackendBinaryMetadataType.Date) {
            if (typeof backendValue === 'string') {
                value = deserializeAsDate(backendValue);
            }
            else {
                throw new InternalError("Invalid non-string backend value for a date metadata \"" + key + "\"");
            }
        }
        else {
            value = backendValue;
        }
        metadata[key] = value;
    }
    return metadata;
}
function assertCamelCase(key) {
    if (!isCamelCase(key)) {
        throw new ArgumentError("Metadata key \"" + key + "\" is not in camel case.");
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/models/binary.ts









var binary_loadableCollection = new loadable_collection_LoadableCollection({
    name: 'binary',
    state: function () { return cmsState.subState('binary'); },
    loader: function (_a) {
        var binaryId = _a[0], transformation = _a[1];
        return cmsRetrieval.retrieveBinaryUrls(binaryId, transformation);
    },
});
// this is a small, 1x1 pixel, fully transparent GIF image
var PLACEHOLDER_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
var binary_Binary = /** @class */ (function () {
    function Binary(binaryId, isPublic, transformation) {
        if (isPublic === void 0) { isPublic = true; }
        if (transformation === void 0) { transformation = {}; }
        this._id = binaryId;
        this._isPublic = !!isPublic;
        this._transformation = transformation || undefined;
        this._loadableData = binary_loadableCollection.get([
            binaryId,
            this._transformation,
        ]);
    }
    // public API
    Binary.upload = function (source, options) {
        checkUpload(source, options);
        if (!FileType.is(source)) {
            if (!(options && options.filename)) {
                throw new ArgumentError('Expected a filename to be passed with Blob as the source.');
            }
        }
        return new future_binary({ source: source }, options);
    };
    // For test purpose only.
    Binary.store = function (binaryId, options, response) {
        var transformation = options.transformation;
        binary_loadableCollection.get([binaryId, transformation]).set(response);
        var raw = new Binary(binaryId).raw();
        if (transformation) {
            return raw.optimizeFor(transformation);
        }
        return raw;
    };
    // For test purpose only.
    Binary.storeMetadata = function (binaryId, response) {
        metadata_collection.store(binaryId, response);
    };
    Binary.prototype.id = function () {
        return this._id;
    };
    // public API
    Binary.prototype.copy = function (options) {
        return new future_binary({ idToCopy: this._id }, options);
    };
    // public API
    Binary.prototype.isPrivate = function () {
        return !this._isPublic;
    };
    // public API
    Binary.prototype.optimizeFor = function (transformation) {
        return new Binary(this._id, this._isPublic, Object(external_underscore_["extend"])({}, this._transformation, transformation));
    };
    // public API
    Binary.prototype.original = function () {
        return new Binary(this._id, this._isPublic, {});
    };
    // public API
    Binary.prototype.raw = function () {
        return new Binary(this._id, this._isPublic, null);
    };
    Binary.prototype.isExplicitlyTransformed = function () {
        return this.isTransformed() && !Object(external_underscore_["isEmpty"])(this._transformation);
    };
    Binary.prototype.isRaw = function () {
        return !this.isTransformed();
    };
    // public API
    Binary.prototype.url = function () {
        assertNotUsingInMemoryTenant('Binary#url');
        return this.urlWithoutPlaceholder() || PLACEHOLDER_URL;
    };
    Binary.prototype.urlWithoutPlaceholder = function () {
        var data = this._loadableData.get();
        if (!data) {
            return;
        }
        var accessData = data[this.accessType()];
        if (!accessData) {
            throw new InternalError("Missing key " + this.accessType + " in binary data");
        }
        return accessData.get.url;
    };
    // public API
    Binary.prototype.filename = function () {
        var url = this.url();
        if (!url || url.match(/^data:/)) {
            return '';
        }
        return (external_urijs_(url)
            .path()
            .split('/')
            .pop() || '');
    };
    // public API
    Binary.prototype.metadata = function () {
        this.assertNotTransformed('Metadata');
        return new metadata_collection(this._id);
    };
    // public API
    Binary.prototype.contentType = function () {
        this.assertNotTransformed('Content type');
        var type = this.metadata().get('contentType');
        if (typeof type !== 'string') {
            return '';
        }
        return type;
    };
    // public API
    Binary.prototype.contentLength = function () {
        this.assertNotTransformed('Content length');
        var length = this.metadata().get('contentLength');
        if (typeof length !== 'number') {
            return 0;
        }
        return length;
    };
    Binary.prototype.extname = function () {
        if (this.raw()
            .filename()
            .indexOf('.') > -1) {
            var matches = /[^.\\]*$/.exec(this.raw().filename());
            if (matches) {
                return matches[0].toLowerCase();
            }
        }
        return '';
    };
    Binary.prototype.equals = function (binary) {
        return (binary instanceof Binary &&
            binary.id() === this.id() &&
            binary.isPrivate() === this.isPrivate() &&
            Object(external_underscore_["isEqual"])(binary.definition(), this.definition()));
    };
    Binary.prototype.isImage = function () {
        var contentType = this.raw().contentType();
        if (contentType) {
            return contentType.split('/')[0] === 'image';
        }
        return false;
    };
    // For test purpose only.
    Binary.prototype.definition = function () {
        return this._transformation || null;
    };
    Binary.prototype.accessType = function () {
        if (this.isPrivate()) {
            return 'private_access';
        }
        return 'public_access';
    };
    Binary.prototype.assertNotTransformed = function (fieldName) {
        if (this.isTransformed()) {
            throw new ScrivitoError("\"" + fieldName + "\" is not available for transformed images." +
                ' Use "Scrivito.Binary#raw" to access the untransformed version of the image.');
        }
    };
    Binary.prototype.isTransformed = function () {
        return !!this._transformation;
    };
    return Binary;
}());
/* harmony default export */ var models_binary = (binary_Binary);
var BinaryOptionsType = external_tcomb_validation_.struct({
    contentType: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    filename: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
});
var SourceType = external_tcomb_validation_.refinement(external_tcomb_validation_.Object, function (value) { return BlobType.is(value) || FileType.is(value); }, 'Blob or File');
var checkUpload = checkArgumentsFor('Binary.upload', [['source', SourceType], ['options', external_tcomb_validation_.maybe(BinaryOptionsType)]], {
    docPermalink: 'js-sdk/Binary-static-upload',
});

// CONCATENATED MODULE: ./scrivito_sdk/models/attribute_deserializer.js
function attribute_deserializer_slicedToArray(arr, i) { return attribute_deserializer_arrayWithHoles(arr) || attribute_deserializer_iterableToArrayLimit(arr, i) || attribute_deserializer_nonIterableRest(); }

function attribute_deserializer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function attribute_deserializer_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function attribute_deserializer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function deserialize(model, rawValue, type, options) {
  var _rawValue = attribute_deserializer_slicedToArray(rawValue, 2),
      typeFromBackend = _rawValue[0],
      valueFromBackend = _rawValue[1];

  switch (type) {
    case 'binary':
      return deserializeBinaryValue(typeFromBackend, valueFromBackend);

    case 'date':
      return deserializeDateValue(typeFromBackend, valueFromBackend);

    case 'float':
      return deserializeFloatValue(typeFromBackend, valueFromBackend);

    case 'enum':
      return deserializeEnumValue(typeFromBackend, valueFromBackend, options);

    case 'html':
      return deserializeHtmlValue(typeFromBackend, valueFromBackend);

    case 'integer':
      return deserializeIntegerValue(typeFromBackend, valueFromBackend);

    case 'link':
      return deserializeLinkValue(typeFromBackend, valueFromBackend);

    case 'linklist':
      return deserializeLinklistValue(typeFromBackend, valueFromBackend);

    case 'multienum':
      return deserializeMultienumValue(typeFromBackend, valueFromBackend, options);

    case 'reference':
      return deserializeReferenceValue(typeFromBackend, valueFromBackend);

    case 'referencelist':
      return deserializeReferencelistValue(typeFromBackend, valueFromBackend);

    case 'string':
      return deserializeStringValue(typeFromBackend, valueFromBackend);

    case 'stringlist':
      return deserializeStringlistValue(typeFromBackend, valueFromBackend);

    case 'widgetlist':
      return deserializeWidgetlistValue(typeFromBackend, valueFromBackend, model);

    default:
      return null;
  }
}

function deserializeBinaryValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend === 'binary' && valueFromBackend) {
    var binaryId = valueFromBackend.id;
    var isPublic = current_workspace_currentWorkspaceId() === 'published';
    return new models_binary(binaryId, isPublic);
  }

  return null;
}

function deserializeDateValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'date') {
    return null;
  }

  return deserializeAsDate(valueFromBackend);
}

function deserializeHtmlValue(typeFromBackend, valueFromBackend) {
  if (external_underscore_default.a.contains(['html', 'string'], typeFromBackend) && external_underscore_default.a.isString(valueFromBackend)) {
    return valueFromBackend;
  }

  return '';
}

function deserializeEnumValue(typeFromBackend, valueFromBackend, _ref) {
  var values = _ref.values;

  if (typeFromBackend === 'string' && external_underscore_default.a.contains(values, valueFromBackend)) {
    return valueFromBackend;
  }

  return null;
}

function deserializeMultienumValue(typeFromBackend, valueFromBackend, _ref2) {
  var values = _ref2.values;

  if (typeFromBackend !== 'stringlist' || !Array.isArray(valueFromBackend)) {
    return [];
  }

  return external_underscore_default.a.intersection(valueFromBackend, values);
}

function deserializeFloatValue(typeFromBackend, valueFromBackend) {
  switch (typeFromBackend) {
    case 'string':
      if (valueFromBackend.match(/^-?\d+(\.\d+)?$/)) {
        return convertToFloat(valueFromBackend);
      }

      return null;

    case 'number':
      return convertToFloat(valueFromBackend);

    default:
      return null;
  }
}

function convertToFloat(valueFromBackend) {
  var floatValue = parseFloat(valueFromBackend);

  if (isValidFloat(floatValue)) {
    return floatValue;
  }

  return null;
}

function deserializeIntegerValue(typeFromBackend, valueFromBackend) {
  switch (typeFromBackend) {
    case 'string':
    case 'number':
      return deserializeAsInteger(valueFromBackend);

    default:
      return null;
  }
}

function deserializeLinkValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'link' || !external_underscore_default.a.isObject(valueFromBackend)) {
    return null;
  }

  return convertToLink(valueFromBackend);
}

function deserializeLinklistValue(_typeFromBackend, valueFromBackend) {
  if (!external_underscore_default.a.isArray(valueFromBackend)) {
    return [];
  }

  return external_underscore_default.a.compact(valueFromBackend.map(convertToLink));
}

function convertToLink(valueFromBackend) {
  var linkParams = external_underscore_default.a.pick(valueFromBackend, 'query', 'rel', 'target', 'title', 'url');

  if ('fragment' in valueFromBackend) {
    linkParams.hash = valueFromBackend.fragment;
  }

  if ('obj_id' in valueFromBackend) {
    linkParams.objId = valueFromBackend.obj_id;
  }

  var link = new basic_link(linkParams);

  if (link.isBroken()) {
    return null;
  }

  return link;
}

function convertReferenceToBasicObj(valueFromBackend) {
  var obj = basic_obj.get(valueFromBackend);

  if (obj) {
    return obj;
  }

  return null;
}

function deserializeReferenceValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend === 'reference' && valueFromBackend) {
    return convertReferenceToBasicObj(valueFromBackend);
  }

  return null;
}

function deserializeReferencelistValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'referencelist') {
    return [];
  }

  if (!valueFromBackend) {
    return [];
  }

  var objs = valueFromBackend.map(convertReferenceToBasicObj);
  return external_underscore_default.a.compact(objs);
}

function deserializeStringValue(typeFromBackend, valueFromBackend) {
  if (external_underscore_default.a.contains(['html', 'string'], typeFromBackend) && external_underscore_default.a.isString(valueFromBackend)) {
    return valueFromBackend;
  }

  return '';
}

function deserializeStringlistValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'stringlist' || !Array.isArray(valueFromBackend)) {
    return [];
  }

  return valueFromBackend;
}

function deserializeWidgetlistValue(typeFromBackend, valueFromBackend, model) {
  if (typeFromBackend !== 'widgetlist') {
    return [];
  }

  return external_underscore_default.a.map(valueFromBackend, function (widgetId) {
    return model.widget(widgetId);
  });
}
// CONCATENATED MODULE: ./scrivito_sdk/models/basic_attribute_content.ts



var basic_attribute_content_BasicAttributeContent = /** @class */ (function () {
    function BasicAttributeContent() {
    }
    BasicAttributeContent.prototype.get = function (attributeName, typeInfo) {
        if (!isCamelCase(attributeName)) {
            throw new ArgumentError('Attribute names have to be in camel case.');
        }
        var internalAttributeName = underscore(attributeName);
        var rawValue = this.getAttributeData(internalAttributeName);
        if (!rawValue || !external_underscore_["isArray"](rawValue)) {
            rawValue = [];
        }
        if (typeof typeInfo === 'string') {
            return deserialize(this, rawValue, typeInfo);
        }
        else {
            return deserialize.apply(attribute_deserializer_namespaceObject, [this, rawValue].concat(typeInfo));
        }
    };
    BasicAttributeContent.prototype.serializeAttributes = function (data) {
        var _this = this;
        return external_underscore_["mapObject"](data, function (value, name) {
            if (isWidgetlistJsonAttributeValue(value)) {
                var publicAttrName = camelCase(name);
                var serializedAttributes = external_underscore_["invoke"](_this.get(publicAttrName, ['widgetlist']), 'serializeAttributes');
                return ['widgetlist', serializedAttributes];
            }
            return value;
        });
    };
    BasicAttributeContent.prototype.persistWidgets = function (obj, attributes) {
        external_underscore_["each"](attributes, function (valueAndType) {
            if (isWidgetlistAttributeValueAndType(valueAndType)) {
                var value = valueAndType[0];
                if (value) {
                    var widgets = external_underscore_["isArray"](value)
                        ? value
                        : [value];
                    external_underscore_["each"](widgets, function (widget) {
                        if (!widget.isPersisted()) {
                            widget.persistInObj(obj);
                        }
                    });
                }
            }
        });
    };
    return BasicAttributeContent;
}());
/* harmony default export */ var basic_attribute_content = (basic_attribute_content_BasicAttributeContent);
function isWidgetlistJsonAttributeValue(value) {
    return external_underscore_["isArray"](value) && value[0] === 'widgetlist';
}
function isWidgetlistAttributeValueAndType(valueAndType) {
    if (!valueAndType) {
        return false;
    }
    if (!external_underscore_["isArray"](valueAndType)) {
        return false;
    }
    if (valueAndType.length < 2) {
        return false;
    }
    var typeInfo = valueAndType[1];
    return (external_underscore_["isArray"](typeInfo) && typeInfo.length > 0 && typeInfo[0] === 'widgetlist');
}
function normalizeAttributes(attributes) {
    return external_underscore_["mapObject"](attributes, function (attributeValue, name) {
        if (isSystemAttribute(name)) {
            if (external_underscore_["isArray"](attributeValue)) {
                return attributeValue;
            }
            return [attributeValue];
        }
        if (!external_underscore_["isArray"](attributeValue)) {
            throw new InternalError("Value for " + name + " should be a tuple: [value, typeInfo]");
        }
        var value = attributeValue[0], typeInfo = attributeValue[1];
        if (typeof typeInfo === 'string') {
            return [value, [typeInfo]];
        }
        return [value, typeInfo];
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_widget.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function basic_widget_slicedToArray(arr, i) { return basic_widget_arrayWithHoles(arr) || basic_widget_iterableToArrayLimit(arr, i) || basic_widget_nonIterableRest(); }

function basic_widget_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function basic_widget_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function basic_widget_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function basic_widget_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function basic_widget_classCallCheck(instance, Constructor) { if (!basic_widget_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function basic_widget_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function basic_widget_createClass(Constructor, protoProps, staticProps) { if (protoProps) basic_widget_defineProperties(Constructor.prototype, protoProps); if (staticProps) basic_widget_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var basic_widget_BasicWidget =
/*#__PURE__*/
function (_BasicAttributeConten) {
  _inherits(BasicWidget, _BasicAttributeConten);

  basic_widget_createClass(BasicWidget, null, [{
    key: "build",
    value: function build(id, obj) {
      var instance = Object.create(BasicWidget.prototype);
      instance._obj = obj;
      instance._id = id;
      return instance;
    }
  }, {
    key: "newWithSerializedAttributes",
    value: function newWithSerializedAttributes(attributes) {
      var unserializedAttributes = {};
      var serializedAttributes = {};

      external_underscore_default.a.each(attributes, function (value, name) {
        if (name === '_obj_class') {
          unserializedAttributes._objClass = [value];
          return;
        }

        if (external_underscore_default.a.isArray(value) && external_underscore_default.a.first(value) === 'widgetlist') {
          var newWidgets = external_underscore_default.a.map(external_underscore_default.a.last(value), function (serializedWidget) {
            return BasicWidget.newWithSerializedAttributes(serializedWidget);
          });

          var attrName = camelCase(name);
          unserializedAttributes[attrName] = [newWidgets, ['widgetlist']];
          return;
        }

        serializedAttributes[name] = value;
      });

      var widget = new BasicWidget(unserializedAttributes);
      widget.preserializedAttributes = serializedAttributes;
      return widget;
    }
  }]);

  function BasicWidget(attributes) {
    var _this;

    basic_widget_classCallCheck(this, BasicWidget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BasicWidget).call(this));
    _this._attributesToBeSaved = normalizeAttributes(attributes);
    assertWidgetClassExists(attributes._objClass);
    return _this;
  }

  basic_widget_createClass(BasicWidget, [{
    key: "id",
    value: function id() {
      this._failIfNotPersisted();

      return this._id;
    }
  }, {
    key: "objClass",
    value: function objClass() {
      if (this.isPersisted()) {
        return this.getAttributeData('_obj_class');
      }

      return this._attributesToBeSaved._objClass[0];
    }
  }, {
    key: "obj",
    value: function obj() {
      this._failIfNotPersisted();

      return this._obj;
    }
  }, {
    key: "widget",
    value: function widget(id) {
      return this.obj().widget(id);
    }
  }, {
    key: "update",
    value: function update(attributes) {
      var _this2 = this;

      var normalizedAttributes = normalizeAttributes(attributes);
      withBatchedUpdates(function () {
        _this2.persistWidgets(_this2.obj(), normalizedAttributes);

        var patch = serialize(normalizedAttributes);

        _this2._updateSelf(patch);
      });
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(widget) {
      widget.obj().insertWidget(this, {
        before: widget
      });
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(widget) {
      widget.obj().insertWidget(this, {
        after: widget
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      this.obj().removeWidget(this);
    }
  }, {
    key: "copy",
    value: function copy() {
      if (this.isPersisted()) {
        return this._copyPersisted();
      }

      return this._copyUnpersisted();
    }
  }, {
    key: "persistInObj",
    value: function persistInObj(obj) {
      this.persistWidgets(obj, this._attributesToBeSaved);
      var patch = serialize(this._attributesToBeSaved);

      external_underscore_default.a.extend(patch, this.preserializedAttributes || {});

      this._obj = obj;
      this._id = obj.generateWidgetId();

      this._updateSelf(patch);

      this._executeDidPersistCallback();
    }
  }, {
    key: "isPersisted",
    value: function isPersisted() {
      return !!this._obj;
    }
  }, {
    key: "onDidPersist",
    value: function onDidPersist(callback) {
      if (this.isPersisted()) {
        throw new ScrivitoError('Cannot call "onDidPersist" of an already persisted widget');
      }

      this._onDidPersistCallback = callback;
    } // For test purpose only.

  }, {
    key: "hasOnDidPersistCallback",
    value: function hasOnDidPersistCallback() {
      return !!this._onDidPersistCallback;
    }
  }, {
    key: "finishSaving",
    value: function finishSaving() {
      return this.obj().finishSaving();
    }
  }, {
    key: "equals",
    value: function equals(otherWidget) {
      if (!basic_widget_instanceof(otherWidget, BasicWidget)) {
        return false;
      }

      return this.id() === otherWidget.id() && this.obj().id() === otherWidget.obj().id();
    }
  }, {
    key: "containingField",
    value: function containingField() {
      return this.obj().fieldContainingWidget(this);
    }
  }, {
    key: "toPrettyPrint",
    value: function toPrettyPrint() {
      return "[object ".concat(this.objClass(), " id=\"").concat(this.id(), "\" objId=\"").concat(this.obj().id(), "\"]");
    }
  }, {
    key: "getAttributeData",
    value: function getAttributeData(attributeName) {
      return this.obj().getWidgetAttribute(this.id(), attributeName);
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.obj().getWidgetData(this.id());
    }
  }, {
    key: "serializeAttributes",
    value: function serializeAttributes() {
      return _get(_getPrototypeOf(BasicWidget.prototype), "serializeAttributes", this).call(this, this.getData());
    }
  }, {
    key: "_failIfNotPersisted",
    value: function _failIfNotPersisted() {
      if (!this.isPersisted()) {
        throw new ScrivitoError('Can not access a new widget before it has been saved.');
      }
    }
  }, {
    key: "_updateSelf",
    value: function _updateSelf(patch) {
      var widgetPoolPatch = {
        _widgetPool: [_defineProperty({}, this.id(), patch)]
      };
      this.obj().update(widgetPoolPatch);
    }
  }, {
    key: "_executeDidPersistCallback",
    value: function _executeDidPersistCallback() {
      if (this._onDidPersistCallback) {
        this._onDidPersistCallback(this);

        delete this._onDidPersistCallback;
      }
    }
  }, {
    key: "_copyPersisted",
    value: function _copyPersisted() {
      var serializedAttributes = this.serializeAttributes();
      return BasicWidget.newWithSerializedAttributes(serializedAttributes);
    }
  }, {
    key: "_copyUnpersisted",
    value: function _copyUnpersisted() {
      var attributes = external_underscore_default.a.mapObject(this._attributesToBeSaved, function (_ref2) {
        var _ref3 = basic_widget_slicedToArray(_ref2, 2),
            value = _ref3[0],
            typeInfo = _ref3[1];

        if (typeInfo && typeInfo[0] === 'widgetlist') {
          return [external_underscore_default.a.invoke(value, 'copy'), typeInfo];
        }

        return [value, typeInfo];
      });

      var copy = new BasicWidget(attributes);

      if (this._onDidPersistCallback) {
        copy.onDidPersist(this._onDidPersistCallback);
      }

      return copy;
    }
  }, {
    key: "attributesToBeSaved",
    get: function get() {
      return this._attributesToBeSaved;
    }
  }]);

  return BasicWidget;
}(basic_attribute_content);



function assertWidgetClassExists(attrInfoAndValue) {
  if (!attrInfoAndValue) {
    throw new ArgumentError('Please provide a widget class as the "_objClass" property.');
  }
}
// CONCATENATED MODULE: ./scrivito_sdk/models/attribute_serializer/link.ts


function isValidLinkInputValue(value) {
    if (value instanceof basic_link) {
        return true;
    }
    // check if value is backend compatible
    if (!external_underscore_["isObject"](value)) {
        return false;
    }
    var invalidKeys = external_underscore_["without"](external_underscore_["keys"](value), 'hash', 'obj_id', 'query', 'rel', 'target', 'title', 'url');
    return external_underscore_["isEmpty"](invalidKeys);
}
function convertLinkToCmsApi(value) {
    var cmsApiValue = value instanceof basic_link
        ? convertBasicLinkToCmsApi(value)
        : convertLinkObjectToCmsApi(value);
    if (!cmsApiValue.rel) {
        delete cmsApiValue.rel;
    }
    return cmsApiValue;
}
function convertBasicLinkToCmsApi(basicLink) {
    return {
        rel: basicLink.rel() || undefined,
        query: basicLink.query(),
        target: basicLink.target(),
        title: basicLink.title(),
        url: basicLink.url(),
        // lowercased property method
        obj_id: basicLink.objId(),
        // different property method
        fragment: basicLink.hash(),
    };
}
function convertLinkObjectToCmsApi(value) {
    return {
        obj_id: value.obj_id || null,
        query: value.query || null,
        rel: value.rel || undefined,
        target: value.target || null,
        title: value.title || null,
        url: value.url || null,
        // different property key
        fragment: value.hash || null,
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/models/attribute_serializer.js
function attribute_serializer_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function attribute_serializer_slicedToArray(arr, i) { return attribute_serializer_arrayWithHoles(arr) || attribute_serializer_iterableToArrayLimit(arr, i) || attribute_serializer_nonIterableRest(); }

function attribute_serializer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function attribute_serializer_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function attribute_serializer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function serialize(attributes) {
  var serializedAttributes = {};

  external_underscore_default.a.each(attributes, function (_ref, name) {
    var _ref2 = attribute_serializer_slicedToArray(_ref, 2),
        value = _ref2[0],
        attrInfo = _ref2[1];

    var serializedName = convertCamelCasedAttributeName(name);

    if (isSystemAttribute(serializedName)) {
      serializedAttributes[serializedName] = value;
    } else {
      var _attrInfo = attribute_serializer_slicedToArray(attrInfo, 2),
          attrType = _attrInfo[0],
          attrOptions = _attrInfo[1];

      serializedAttributes[serializedName] = [serializeAttributeType(attrType, name), valueOrNull(serializeAttributeValue(attrType, attrOptions, value, name))];
    }
  });

  return serializedAttributes;
}

function convertCamelCasedAttributeName(name) {
  if (!isCamelCase(name)) {
    throw new ArgumentError('Attribute names have to be in camel case.');
  }

  return underscore(name);
}

function serializeAttributeType(type, name) {
  switch (type) {
    case 'enum':
      return 'string';

    case 'float':
    case 'integer':
      return 'number';

    case 'multienum':
      return 'stringlist';

    case 'binary':
    case 'date':
    case 'html':
    case 'link':
    case 'linklist':
    case 'reference':
    case 'referencelist':
    case 'string':
    case 'stringlist':
    case 'widgetlist':
      return type;

    default:
      throw new ArgumentError("Attribute \"".concat(name, "\" is of unsupported type \"").concat(type, "\"."));
  }
}

function serializeAttributeValue(type, options, value, name) {
  if (value === null) {
    return value;
  }

  switch (type) {
    case 'binary':
      return serializeBinaryAttributeValue(value, name);

    case 'date':
      return serializeDateAttributeValue(value, name);

    case 'enum':
      return serializeEnumAttributeValue(options, value, name);

    case 'float':
      return serializeFloatAttributeValue(value, name);

    case 'html':
      return serializeHtmlAttributeValue(value, name);

    case 'integer':
      return serializeIntegerAttributeValue(value, name);

    case 'link':
      return serializeLinkAttributeValue(value, name);

    case 'linklist':
      return serializeLinklistAttributeValue(value, name);

    case 'multienum':
      return serializeMultienumAttributeValue(options, value, name);

    case 'reference':
      return serializeReferenceAttributeValue(value, name);

    case 'referencelist':
      return serializeReferencelistAttributeValue(value, name);

    case 'string':
      return serializeStringAttributeValue(value, name);

    case 'stringlist':
      return serializeStringlistAttributeValue(value, name);

    case 'widgetlist':
      return serializeWidgetlistAttributeValue(value, name);

    default:
      throw new InternalError("serializeAttributeValue is not implemented for \"".concat(type, "\"."));
  }
}

function valueOrNull(value) {
  if ((external_underscore_default.a.isString(value) || external_underscore_default.a.isArray(value)) && external_underscore_default.a.isEmpty(value)) {
    return null;
  }

  return value;
}

function throwInvalidAttributeValue(value, name, expected) {
  throw new ArgumentError("Unexpected value ".concat(prettyPrint(value), " for") + " attribute \"".concat(name, "\". Expected: ").concat(expected));
}

function serializeBinaryAttributeValue(value, name) {
  if (attribute_serializer_instanceof(value, models_binary)) {
    return {
      id: value.id()
    };
  }

  throwInvalidAttributeValue(value, name, 'A Binary.');
}

function serializeDateAttributeValue(value, name) {
  if (external_underscore_default.a.isDate(value)) {
    return formatDateToString(value);
  }

  if (isValidDateString(value)) {
    return value;
  }

  throwInvalidAttributeValue(value, name, 'A Date.');
}

function serializeEnumAttributeValue(_ref3, value, name) {
  var values = _ref3.values;

  if (external_underscore_default.a.contains(values, value)) {
    return value;
  }

  var e = "Valid attribute values are contained in its \"values\" array [".concat(values, "].");
  throwInvalidAttributeValue(value, name, e);
}

function serializeFloatAttributeValue(value, name) {
  if (isValidFloat(value)) {
    return value;
  }

  var invalidValue = value;

  if (external_underscore_default.a.isNumber(value)) {
    invalidValue = String(value);
  }

  throwInvalidAttributeValue(invalidValue, name, 'A Number, that is #isFinite().');
}

function serializeHtmlAttributeValue(value, name) {
  if (external_underscore_default.a.isString(value)) {
    return value;
  }

  throwInvalidAttributeValue(value, name, 'A String.');
}

function serializeIntegerAttributeValue(value, name) {
  if (isValidInteger(value)) {
    return value;
  }

  throwInvalidAttributeValue(value, name, 'A Number, that is #isSafeInteger().');
}

function serializeLinkAttributeValue(value, name) {
  if (isValidLinkInputValue(value)) {
    return convertLinkToCmsApi(value);
  }

  throwInvalidAttributeValue(value, name, 'A Link instance.');
}

function serializeLinklistAttributeValue(value, name) {
  if (external_underscore_default.a.isArray(value) && external_underscore_default.a.every(value, isValidLinkInputValue)) {
    return external_underscore_default.a.map(value, convertLinkToCmsApi);
  }

  throwInvalidAttributeValue(value, name, 'An array of Link instances.');
}

function serializeMultienumAttributeValue(_ref4, value, name) {
  var values = _ref4.values;
  var errorMessage = "An array with values from ".concat(prettyPrint(values), ".");

  if (!external_underscore_default.a.isArray(value) || !external_underscore_default.a.every(value, external_underscore_default.a.isString)) {
    throwInvalidAttributeValue(value, name, errorMessage);
  }

  var forbiddenValues = external_underscore_default.a.difference(value, values);

  if (forbiddenValues.length) {
    var e = "".concat(errorMessage, " Forbidden values: ").concat(prettyPrint(forbiddenValues), ".");
    throwInvalidAttributeValue(value, name, e);
  }

  return value;
}

function serializeReferenceAttributeValue(value, name) {
  if (isValidReference(value)) {
    return serializeSingleReferenceValue(value);
  }

  throwInvalidAttributeValue(value, name, 'A BasicObj or a String ID.');
}

function serializeReferencelistAttributeValue(value, name) {
  if (isValidReferencelistValue(value)) {
    return external_underscore_default.a.map(value, serializeSingleReferenceValue);
  }

  throwInvalidAttributeValue(value, name, 'An array with BasicObjs or String IDs.');
}

function serializeSingleReferenceValue(value) {
  if (attribute_serializer_instanceof(value, basic_obj)) {
    return value.id();
  }

  return value;
}

function isValidReference(value) {
  return external_underscore_default.a.isString(value) || attribute_serializer_instanceof(value, basic_obj);
}

function isValidReferencelistValue(value) {
  return external_underscore_default.a.isArray(value) && external_underscore_default.a.every(value, function (v) {
    return isValidReference(v);
  });
}

function serializeStringAttributeValue(value, name) {
  if (isValidString(value)) {
    return value.toString();
  }

  throwInvalidAttributeValue(value, name, 'A String.');
}

function serializeStringlistAttributeValue(value, name) {
  if (external_underscore_default.a.isArray(value) && external_underscore_default.a.every(value, function (v) {
    return isValidString(v);
  })) {
    return external_underscore_default.a.invoke(value, 'toString');
  }

  throwInvalidAttributeValue(value, name, 'An array of strings.');
}

function isValidString(value) {
  return external_underscore_default.a.isString(value) || external_underscore_default.a.isNumber(value);
}

function serializeWidgetlistAttributeValue(value, name) {
  if (attribute_serializer_instanceof(value, basic_widget_BasicWidget)) {
    return serializeWidgetlistAttributeValue([value], name);
  }

  if (external_underscore_default.a.isArray(value) && external_underscore_default.a.every(value, function (v) {
    return attribute_serializer_instanceof(v, basic_widget_BasicWidget);
  })) {
    return external_underscore_default.a.invoke(value, 'id');
  }

  throwInvalidAttributeValue(value, name, 'An array of BasicWidget instances.');
}
// CONCATENATED MODULE: ./scrivito_sdk/models/basic_obj.ts
var basic_obj_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();














var basic_obj_BasicObj = /** @class */ (function (_super) {
    basic_obj_extends(BasicObj, _super);
    function BasicObj(objData) {
        var _this = _super.call(this) || this;
        _this.objData = objData;
        return _this;
    }
    BasicObj.get = function (id) {
        var obj = this.getIncludingDeleted(id);
        if (!obj || obj.isDeleted()) {
            return null;
        }
        return obj;
    };
    BasicObj.getIncludingDeleted = function (id) {
        var objData = getObjData(id);
        if (!objData) {
            return null;
        }
        var obj = new BasicObj(objData);
        if (obj.isFinallyDeleted()) {
            return null;
        }
        return obj;
    };
    BasicObj.create = function (attributes) {
        var normalizedAttributes = normalizeAttributes(attributes);
        assertObjClassExists(normalizedAttributes._objClass);
        if (!normalizedAttributes._id) {
            normalizedAttributes._id = [this.generateId()];
        }
        var serializedAttributes = {
            _id: normalizedAttributes._id,
            _obj_class: normalizedAttributes._objClass,
        };
        return this.createWithSerializedAttributes(external_underscore_["mapObject"](serializedAttributes, function (_a) {
            var value = _a[0];
            return value;
        }), external_underscore_["omit"](attributes, '_objClass', '_id'));
    };
    BasicObj.createFromFile = function (file, attributes) {
        var basicObj = this.create(attributes);
        var futureBinary = models_binary.upload(file);
        return futureBinary.intoId(basicObj.id()).then(function (binary) {
            basicObj.update({ blob: [binary, ['binary']] });
            return basicObj.finishSaving().then(function () { return basicObj; });
        });
    };
    BasicObj.addChildWithSerializedAttributes = function (parentPath, serializedAttributes) {
        var objId = BasicObj.generateId();
        return this.createWithSerializedAttributes(external_underscore_["extend"]({}, serializedAttributes, {
            _id: objId,
            _path: parentPath + "/" + objId,
        }));
    };
    BasicObj.createWithSerializedAttributes = function (serializedAttributes, attributeDict) {
        if (!attributeDict) {
            var _a = extractAttributeDict(serializedAttributes), a = _a[0], b = _a[1];
            return this.createWithSerializedAttributes(a, b);
        }
        var objData = createObjData(serializedAttributes._id);
        objData.update(serializedAttributes);
        var obj = new BasicObj(objData);
        obj.update(attributeDict);
        return obj;
    };
    BasicObj.generateId = function () {
        return randomId();
    };
    BasicObj.all = function () {
        return new basic_obj_search().batchSize(1000);
    };
    BasicObj.root = function () {
        return BasicObj.getByPath('/');
    };
    BasicObj.where = function (fields, operator, value, boost) {
        return new basic_obj_search().and(fields, operator, value, boost);
    };
    BasicObj.getByPath = function (path) {
        var obj = this.where('_path', 'equals', path).first();
        if (!obj) {
            return null;
        }
        return obj;
    };
    BasicObj.getByPermalink = function (permalink) {
        var obj = this.where('_permalink', 'equals', permalink).first();
        if (!obj) {
            return null;
        }
        return obj;
    };
    BasicObj.getAllByPermalink = function (permalink) {
        return this.where('_permalink', 'equals', permalink).take();
    };
    BasicObj.prototype.id = function () {
        return this.getAttributeData('_id');
    };
    BasicObj.prototype.objClass = function () {
        return this.getAttributeData('_obj_class');
    };
    BasicObj.prototype.obj = function () {
        return this;
    };
    BasicObj.prototype.createdAt = function () {
        return parseStringToDate(this.getAttributeData('_created_at'));
    };
    BasicObj.prototype.createdBy = function () {
        return this.getAttributeData('_created_by') || null;
    };
    BasicObj.prototype.lastChanged = function () {
        var data = this.getAttributeData('_last_changed');
        if (!data) {
            return null;
        }
        return parseStringToDate(data);
    };
    BasicObj.prototype.lastChangedBy = function () {
        return this.getAttributeData('_last_changed_by') || null;
    };
    BasicObj.prototype.version = function () {
        return this.getAttributeData('_version');
    };
    BasicObj.prototype.path = function () {
        return this.getAttributeData('_path') || null;
    };
    BasicObj.prototype.permalink = function () {
        return this.getAttributeData('_permalink') || null;
    };
    BasicObj.prototype.parentPath = function () {
        var path = this.path();
        if (!path || path === '/') {
            return null;
        }
        return computeParentPath(path);
    };
    BasicObj.prototype.parent = function () {
        var parentPath = this.parentPath();
        if (!parentPath) {
            return null;
        }
        return BasicObj.getByPath(parentPath);
    };
    BasicObj.prototype.hasConflicts = function () {
        return !!this.getAttributeData('_conflicts');
    };
    BasicObj.prototype.modification = function () {
        if (this.isFinallyDeleted() || this.getAttributeData('_marked_deleted')) {
            return 'deleted';
        }
        return this.getAttributeData('_modification') || null;
    };
    BasicObj.prototype.isModified = function () {
        return !!this.modification();
    };
    BasicObj.prototype.isNew = function () {
        return this.modification() === 'new';
    };
    BasicObj.prototype.isEdited = function () {
        return this.modification() === 'edited';
    };
    BasicObj.prototype.isDeleted = function () {
        return this.modification() === 'deleted';
    };
    BasicObj.prototype.isFinallyDeleted = function () {
        return this.objData.isNonExistent();
    };
    BasicObj.prototype.contentLength = function () {
        var raw = this.rawBlob();
        if (!raw) {
            return 0;
        }
        return raw.contentLength();
    };
    BasicObj.prototype.contentType = function () {
        var raw = this.rawBlob();
        if (!raw) {
            return '';
        }
        return raw.contentType();
    };
    BasicObj.prototype.contentUrl = function () {
        var raw = this.rawBlob();
        if (!raw) {
            return '';
        }
        return raw.url();
    };
    BasicObj.prototype.metadata = function () {
        var raw = this.rawBlob();
        if (!raw) {
            return new metadata_collection();
        }
        return raw.metadata();
    };
    BasicObj.prototype.children = function () {
        var path = this.path();
        if (!path) {
            return [];
        }
        return searchAllChildren(path).take();
    };
    BasicObj.prototype.hasChildren = function () {
        var path = this.path();
        if (!path) {
            return false;
        }
        var search = searchAllChildren(path).batchSize(0);
        return search.count() > 0;
    };
    BasicObj.prototype.orderedChildren = function () {
        var children = this.children();
        var childOrder = this.get('childOrder', 'referencelist');
        if (external_underscore_["isArray"](childOrder)) {
            return external_underscore_["sortBy"](children, function (child) {
                var childOrderIds = external_underscore_["invoke"](childOrder, 'id');
                var childIndex = childOrderIds.indexOf(child.id());
                if (childIndex === -1) {
                    return childOrder.length;
                }
                return childIndex;
            });
        }
        return children;
    };
    BasicObj.prototype.backlinks = function () {
        return BasicObj.where('*', 'linksTo', this).take();
    };
    BasicObj.prototype.ancestors = function () {
        var parentPath = this.parentPath();
        if (!parentPath) {
            return [];
        }
        return computeAncestorPaths(parentPath).map(function (ancestorPath) {
            return BasicObj.getByPath(ancestorPath);
        });
    };
    BasicObj.prototype.update = function (attributes) {
        var _this = this;
        var normalizedAttributes = normalizeAttributes(attributes);
        withBatchedUpdates(function () {
            _this.persistWidgets(_this, normalizedAttributes);
            var patch = serialize(normalizedAttributes);
            _this.objData.update(patch);
        });
        this.startLinkResolution();
    };
    BasicObj.prototype.destroy = function () {
        this.update({ _markedDeleted: [true] });
    };
    BasicObj.prototype.insertWidget = function (widget, anchor) {
        var _a;
        var id = widgetIdFromWidgetInsertionAnchor(anchor);
        var placement = this._widgetPlacementFor(id);
        if (placement) {
            var attributeValue = placement.attributeValue, attributeName = placement.attributeName, container = placement.container, index = placement.index;
            var newIndex = anchor.before ? index : index + 1;
            var newAttributeValue = attributeValue.slice(0, newIndex).concat([
                widget
            ], attributeValue.slice(newIndex));
            container.update((_a = {},
                _a[attributeName] = [newAttributeValue, ['widgetlist']],
                _a));
        }
    };
    BasicObj.prototype.removeWidget = function (widget) {
        var field = this.fieldContainingWidget(widget);
        if (field) {
            var value = field.get();
            var newValue = external_underscore_["reject"](value, function (curWidget) { return curWidget.equals(widget); });
            field.update(newValue);
        }
    };
    BasicObj.prototype.copyAsync = function (copyOptions) {
        if (copyOptions === void 0) { copyOptions = {}; }
        assertValidCopyOptions(copyOptions);
        return this._copyAttributes().then(function (copiedAttributes) {
            var serializedAttributes = external_underscore_["extend"](copiedAttributes, copyOptions);
            var obj = BasicObj.createWithSerializedAttributes(serializedAttributes);
            return obj.objData.finishSaving().then(function () { return obj; });
        });
    };
    BasicObj.prototype.moveToAsync = function (parentPath) {
        this.update({ _path: [parentPath + "/" + this.id()] });
        return this.finishSaving();
    };
    BasicObj.prototype.markResolvedAsync = function () {
        this.update({ _conflicts: [null] });
        return this.finishSaving();
    };
    BasicObj.prototype.finishSaving = function () {
        var _this = this;
        return this.finishLinkResolution().then(function () { return _this.objData.finishSaving(); });
    };
    BasicObj.prototype.equals = function (otherObj) {
        if (!(otherObj instanceof BasicObj)) {
            return false;
        }
        return this.id() === otherObj.id();
    };
    BasicObj.prototype.widget = function (id) {
        if (this.getWidgetAttribute(id, '_obj_class')) {
            return basic_widget_BasicWidget.build(id, this);
        }
        return null;
    };
    BasicObj.prototype.getWidgetAttribute = function (id, attributeName) {
        return this.objData.getWidgetAttribute(id, attributeName);
    };
    BasicObj.prototype.widgets = function () {
        var _this = this;
        var data = this.getData();
        if (!isDataOfExistingObj(data)) {
            return [];
        }
        var widgetPool = data._widget_pool || {};
        var widgets = [];
        Object.keys(widgetPool).forEach(function (id) {
            var widget = _this.widget(id);
            if (widget) {
                widgets.push(widget);
            }
        });
        return widgets;
    };
    BasicObj.prototype.fieldContainingWidget = function (widget) {
        var widgetId = widget.id();
        var placement = this._widgetPlacementFor(widgetId);
        if (placement) {
            var container = placement.container, attributeName = placement.attributeName;
            return new basic_field_BasicField(container, attributeName, ['widgetlist']);
        }
    };
    BasicObj.prototype.generateWidgetId = function () {
        for (var i = 0; i < 10; i++) {
            var id = randomHex();
            if (!this.widget(id)) {
                return id;
            }
        }
        throw new InternalError('Could not generate a new unused widget id.');
    };
    BasicObj.prototype.serializeAttributes = function () {
        var serializedAttributes = _super.prototype.serializeAttributes.call(this, this.getData());
        delete serializedAttributes._conflicts;
        delete serializedAttributes._modification;
        delete serializedAttributes._created_at;
        delete serializedAttributes._created_by;
        delete serializedAttributes._last_changed;
        delete serializedAttributes._last_changed_by;
        return serializedAttributes;
    };
    BasicObj.prototype.slug = function () {
        var title = this.get('title', 'string');
        return convertToSlug(title);
    };
    BasicObj.prototype.getWidgetData = function (id) {
        return this.objData.getWidget(id);
    };
    BasicObj.prototype.startLinkResolution = function () {
        if (!isUsingInMemoryTenant()) {
            getLinkHandler().startLinkResolutionFor(current_workspace_currentWorkspaceId(), this.id());
        }
    };
    BasicObj.prototype.finishLinkResolution = function () {
        return getLinkHandler().finishLinkResolutionFor(current_workspace_currentWorkspaceId(), this.id());
    };
    BasicObj.prototype.toPrettyPrint = function () {
        return "[object " + this.objClass() + " id=\"" + this.id() + "\"]";
    };
    BasicObj.prototype.getAttributeData = function (attributeName) {
        return this.objData.getAttribute(attributeName);
    };
    BasicObj.prototype.getData = function () {
        return this.objData.get();
    };
    BasicObj.prototype.rawBlob = function () {
        var blob = this.get('blob', ['binary']);
        return blob && blob.raw();
    };
    BasicObj.prototype._copyAttributes = function () {
        var objId = BasicObj.generateId();
        var serializedAttributes = this.serializeAttributes();
        var uploadPromises = [];
        external_underscore_["each"](serializedAttributes, function (typeAndValue, name) {
            if (name[0] === '_') {
                delete serializedAttributes[name];
                return;
            }
            if (isBinaryTypeAndValue(typeAndValue)) {
                var value = typeAndValue[1];
                var futureBinary = new future_binary({ idToCopy: value.id });
                var promise = futureBinary
                    .intoId(objId)
                    .then(function (binary) { return ({ name: name, binary: binary }); });
                uploadPromises.push(promise);
            }
        });
        serializedAttributes._id = objId;
        serializedAttributes._obj_class = this.objClass();
        if (this.path()) {
            serializedAttributes._path = this.parentPath() + "/" + objId;
        }
        return ScrivitoPromise.all(uploadPromises).then(function (binaries) {
            external_underscore_["each"](binaries, function (_a) {
                var name = _a.name, binary = _a.binary;
                var binaryValue = { id: binary.id() };
                serializedAttributes[name] = ['binary', binaryValue];
            });
            return serializedAttributes;
        });
    };
    BasicObj.prototype._widgetPlacementFor = function (widgetId) {
        var data = this.getData();
        if (!isDataOfExistingObj(data)) {
            return;
        }
        var placement = findWidgetPlacement(data, widgetId);
        if (!placement) {
            return;
        }
        var attributeName = camelCase(placement.attributeName);
        var parentWidgetId = placement.parentWidgetId;
        var container;
        if (parentWidgetId) {
            container = this.widget(parentWidgetId);
            if (!container) {
                return;
            }
        }
        else {
            container = this;
        }
        return {
            container: container,
            attributeName: attributeName,
            attributeValue: container.get(attributeName, ['widgetlist']),
            index: placement.index,
            parentWidgetId: parentWidgetId,
        };
    };
    return BasicObj;
}(basic_attribute_content));
/* harmony default export */ var basic_obj = (basic_obj_BasicObj);
function assertObjClassExists(attrInfoAndValue) {
    if (!attrInfoAndValue) {
        throw new ArgumentError('Please provide an obj class as the "_objClass" property.');
    }
}
function extractAttributeDict(attributes) {
    var serializedAttributes = {};
    var attributeDict = {};
    external_underscore_["each"](attributes, function (serializedValue, name) {
        if (isSerializedWidgetlistValue(serializedValue)) {
            var widgets = external_underscore_["map"](serializedValue[1], createWidget);
            var attrName = camelCase(name);
            attributeDict[attrName] = [widgets, ['widgetlist']];
        }
        else {
            serializedAttributes[name] = serializedValue;
        }
    });
    if (!serializedAttributes._id) {
        serializedAttributes._id = basic_obj_BasicObj.generateId();
    }
    return [serializedAttributes, attributeDict];
}
function createWidget(serializedWidgetAttributes) {
    return basic_widget_BasicWidget.newWithSerializedAttributes(serializedWidgetAttributes);
}
function searchAllChildren(path) {
    return basic_obj_BasicObj.all().and('_parentPath', 'equals', path);
}
function computeAncestorPaths(path) {
    var ancestorPaths = ['/'];
    if (path === '/') {
        return ancestorPaths;
    }
    var components = path.split('/').slice(1);
    var ancestorPath = '';
    components.forEach(function (component) {
        ancestorPath = ancestorPath + "/" + component;
        ancestorPaths.push(ancestorPath);
    });
    return ancestorPaths;
}
function computeParentPath(path) {
    var pathComponents = path.split('/');
    pathComponents.pop();
    if (pathComponents.length === 1) {
        return '/';
    }
    return pathComponents.join('/');
}
function assertValidCopyOptions(copyOptions) {
    var validCopyOptions = ['_path'];
    if (external_underscore_["difference"](external_underscore_["keys"](copyOptions), validCopyOptions).length) {
        throw new ArgumentError('Currently only "_path" copy option is supported.');
    }
}
var linkHandler;
function getLinkHandler() {
    if (!linkHandler) {
        throw new Error('No Link Handler');
    }
    return linkHandler;
}
function setLinkHandler(handler) {
    linkHandler = handler;
}
function widgetIdFromWidgetInsertionAnchor(anchor) {
    if (isWidgetInsertionBefore(anchor)) {
        return anchor.before.id();
    }
    return anchor.after.id();
}
function isWidgetInsertionBefore(anchor) {
    return !!anchor.before;
}
function isDataOfExistingObj(data) {
    if (!data) {
        return false;
    }
    return isExistentObjJson(data);
}
function isSerializedWidgetlistValue(value) {
    return external_underscore_["isArray"](value) && external_underscore_["first"](value) === 'widgetlist';
}
function isBinaryTypeAndValue(typeAndValue) {
    return typeAndValue[0] === 'binary' && !!typeAndValue[1];
}

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_field.js
function basic_field_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function basic_field_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function basic_field_classCallCheck(instance, Constructor) { if (!basic_field_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function basic_field_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function basic_field_createClass(Constructor, protoProps, staticProps) { if (protoProps) basic_field_defineProperties(Constructor.prototype, protoProps); if (staticProps) basic_field_defineProperties(Constructor, staticProps); return Constructor; }





var basic_field_BasicField =
/*#__PURE__*/
function () {
  function BasicField(container, attributeName, typeInfo) {
    basic_field_classCallCheck(this, BasicField);

    this._container = container;
    this._attributeName = attributeName;
    this._typeInfo = typeInfo;
    this._typeOptions = this._typeInfo[1] || {};
  }

  basic_field_createClass(BasicField, [{
    key: "get",
    value: function get() {
      return this._container.get(this.name(), this._typeInfo);
    }
  }, {
    key: "update",
    value: function update(newValue) {
      this._container.update(basic_field_defineProperty({}, this.name(), [newValue, this._typeInfo]));
    }
  }, {
    key: "container",
    value: function container() {
      return this._container;
    }
  }, {
    key: "obj",
    value: function obj() {
      return this.container().obj();
    }
  }, {
    key: "name",
    value: function name() {
      return this._attributeName;
    }
  }, {
    key: "type",
    value: function type() {
      return this._typeInfo[0];
    }
  }, {
    key: "equals",
    value: function equals(other) {
      if (!basic_field_instanceof(other, BasicField)) {
        return false;
      }

      return this.container().equals(other.container()) && this.name() === other.name();
    }
  }, {
    key: "values",
    value: function values() {
      this._assertValidTypes(['enum', 'multienum'], 'Only enum and multienum attributes can have values');

      return this._sortValuesByLocalization(this._typeOptions.values);
    }
  }, {
    key: "titleForValue",
    value: function titleForValue(value) {
      this._assertValidTypes(['enum', 'multienum'], 'Only enum and multienum attributes can have localized values');

      var localization = Object(external_underscore_["findWhere"])(this._typeOptions.valuesLocalization, {
        value: value
      });
      return localization && localization.title || value;
    }
  }, {
    key: "toString",
    value: function toString() {
      var _this$_dataForId = this._dataForId(),
          name = _this$_dataForId.name,
          objId = _this$_dataForId.objId,
          widgetId = _this$_dataForId.widgetId;

      var stringRepresentation = "<BasicField name=".concat(name, " objId=").concat(objId);

      if (widgetId) {
        stringRepresentation += " widgetId=".concat(widgetId, ">");
      } else {
        stringRepresentation += '>';
      }

      return stringRepresentation;
    }
  }, {
    key: "id",
    value: function id() {
      var _this$_dataForId2 = this._dataForId(),
          name = _this$_dataForId2.name,
          objId = _this$_dataForId2.objId,
          widgetId = _this$_dataForId2.widgetId;

      var id = "".concat(name, "|").concat(objId);

      if (widgetId) {
        id += "|".concat(widgetId);
      }

      return id;
    }
  }, {
    key: "_assertValidTypes",
    value: function _assertValidTypes(validTypes, errorMessage) {
      if (!Object(external_underscore_["include"])(validTypes, this.type())) {
        throw new InternalError(errorMessage);
      }
    }
  }, {
    key: "_dataForId",
    value: function _dataForId() {
      var jsonHash = {
        name: this.name()
      };
      var container = this.container();

      if (basic_field_instanceof(container, basic_obj)) {
        jsonHash.objId = container.id();
      } else {
        jsonHash.objId = container.obj().id();
        jsonHash.widgetId = container.id();
      }

      return jsonHash;
    }
  }, {
    key: "_sortValuesByLocalization",
    value: function _sortValuesByLocalization(values) {
      var _this = this;

      if (values) {
        if (this._typeOptions.valuesLocalization) {
          return Object(external_underscore_["sortBy"])(values, function (value) {
            var index = Object(external_underscore_["findIndex"])(_this._typeOptions.valuesLocalization, {
              value: value
            });

            if (index === -1) {
              return values.length;
            }

            return index;
          });
        }

        return values;
      }

      return [];
    }
  }]);

  return BasicField;
}();


// CONCATENATED MODULE: ./scrivito_sdk/models/index.ts












// CONCATENATED MODULE: ./scrivito_sdk/app_support/ui_adapter_compatible_value.js
function ui_adapter_compatible_value_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function ui_adapter_compatible_value_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ui_adapter_compatible_value_typeof = function _typeof(obj) { return typeof obj; }; } else { ui_adapter_compatible_value_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ui_adapter_compatible_value_typeof(obj); }

// Supported types must not exceed the supported types mentioned here:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm

 // (inner) values translated to undefined are removed from arrays and objects they are referred from

function uiAdapterCompatibleValue(value) {
  if (!value) {
    return value;
  }

  switch (ui_adapter_compatible_value_typeof(value)) {
    case 'string':
    case 'number':
    case 'boolean':
      return value;

    case 'object':
      if (ui_adapter_compatible_value_instanceof(value._scrivitoPrivateContent, basic_obj_search)) {
        return uiAdapterCompatibleValue(value._scrivitoPrivateContent.params());
      }

      if (Object(external_underscore_["isDate"])(value)) {
        return value;
      }

      if (Object(external_underscore_["isArray"])(value)) {
        return uiCompatibleArrayValue(value);
      }

      return uiCompatibleObjectValue(value);
  }
}

function uiCompatibleArrayValue(array) {
  var copy = [];
  array.forEach(function (item) {
    var compatibleItem = uiAdapterCompatibleValue(item);

    if (compatibleItem !== undefined) {
      copy.push(compatibleItem);
    }
  });
  return copy;
}

function uiCompatibleObjectValue(object) {
  var copy = {};
  Object(external_underscore_["each"])(object, function (value, key) {
    var compatibleValueForKey = uiAdapterCompatibleValue(value);

    if (compatibleValueForKey !== undefined) {
      copy[key] = compatibleValueForKey;
    }
  });
  return copy;
}
// CONCATENATED MODULE: ./scrivito_sdk/app_support/ui_adapter.ts
var ui_adapter_uiAdapter;
// For test purpose only.
// => allow undefined
function setUiAdapter(newUiAdapter) {
    ui_adapter_uiAdapter = newUiAdapter;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/configure_content_browser.js






var _filters;

function getContentBrowserConfiguration() {
  if (_filters) {
    return {
      filters: _filters
    };
  }
}
function resetContentBrowserConfiguration() {
  _filters = undefined;
} // public API

function configureContentBrowser(configuration) {
  if (!ui_adapter_uiAdapter) {
    return;
  }

  checkConfigure(configuration);

  if (configuration.filters) {
    _filters = configuration.filters;
  }

  var baseFilter = configuration.baseFilter;

  if (baseFilter) {
    var baseQuery = baseFilter.query;

    if (baseQuery) {
      ui_adapter_uiAdapter.configureContentBrowser(uiAdapterCompatibleValue({
        baseQuery: baseQuery
      }));
    }
  }
}
var SearchFieldType = external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.list(external_tcomb_validation_.String)]);
var SearchOperatorType = external_tcomb_validation_.enums.of(Object(external_underscore_["intersection"])(OPERATORS, ['contains', 'containsPrefix', 'equals', 'startsWith', 'isGreaterThan', 'isLessThan']));
var SearchValueType = external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.Date, external_tcomb_validation_.Nil, external_tcomb_validation_.Number, external_tcomb_validation_.list(external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.Nil])), external_tcomb_validation_.list(external_tcomb_validation_.union([external_tcomb_validation_.Date, external_tcomb_validation_.Nil])), external_tcomb_validation_.list(external_tcomb_validation_.union([external_tcomb_validation_.Number, external_tcomb_validation_.Nil]))], 'SearchValue');
var FilterNodeType = external_tcomb_validation_.struct({
  title: external_tcomb_validation_.maybe(external_tcomb_validation_.String)
});
var FilterCollectionNodeType = FilterNodeType.extend({
  field: external_tcomb_validation_.maybe(SearchFieldType),
  operator: external_tcomb_validation_.maybe(SearchOperatorType),
  expanded: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean)
});
var RadioOptionType = FilterNodeType.extend({
  value: external_tcomb_validation_.maybe(SearchValueType),
  query: external_tcomb_validation_.maybe(ObjSearchType),
  selected: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean)
});
var RadioFilterType = FilterCollectionNodeType.extend({
  type: external_tcomb_validation_.enums.of(['radioButton']),
  options: external_tcomb_validation_.dict(external_tcomb_validation_.String, RadioOptionType)
}, 'RadioFilterDefinition');
var CheckboxOptionType = FilterNodeType.extend({
  value: external_tcomb_validation_.maybe(SearchValueType),
  selected: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean)
});
var CheckboxFilterType = FilterCollectionNodeType.extend({
  type: external_tcomb_validation_.enums.of(['checkbox']),
  options: external_tcomb_validation_.dict(external_tcomb_validation_.String, CheckboxOptionType)
}, 'CheckboxFilterDefinition');
var TreeFilterType = external_tcomb_validation_.declare('TreeFilterDefinition');
TreeFilterType.define(FilterNodeType.extend({
  type: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of('tree')),
  icon: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
  query: external_tcomb_validation_.maybe(ObjSearchType),
  expanded: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
  value: external_tcomb_validation_.maybe(SearchValueType),
  field: external_tcomb_validation_.maybe(SearchFieldType),
  operator: external_tcomb_validation_.maybe(SearchOperatorType),
  selected: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
  options: external_tcomb_validation_.maybe(external_tcomb_validation_.dict(external_tcomb_validation_.String, TreeFilterType))
}));
var FilterDefinitionType = external_tcomb_validation_.union([TreeFilterType, CheckboxFilterType, RadioFilterType]);

FilterDefinitionType.dispatch = function (definition) {
  switch (definition.type || 'tree') {
    case 'tree':
      return TreeFilterType;

    case 'radioButton':
      return RadioFilterType;

    case 'checkbox':
      return CheckboxFilterType;
  }
};

var FiltersType = external_tcomb_validation_.dict(external_tcomb_validation_.String, FilterDefinitionType);
var BaseFilterType = external_tcomb_validation_.struct({
  query: ObjSearchType
});
var ConfigurationType = external_tcomb_validation_.struct({
  filters: external_tcomb_validation_.maybe(FiltersType),
  baseFilter: external_tcomb_validation_.maybe(BaseFilterType)
}, 'Configuration');
var checkConfigure = checkArgumentsFor('configureContentBrowser', [['configuration', ConfigurationType]], {
  docPermalink: 'js-sdk/configureContentBrowser'
});
// CONCATENATED MODULE: ./scrivito_sdk/app_support/open_content_browser.ts




function openContentBrowser(options) {
    if (!ui_adapter_uiAdapter) {
        throw new Error('Cannot open ContentBrowser without UI present');
    }
    return ui_adapter_uiAdapter.openContentBrowser(uiAdapterCompatibleValue(Object(external_underscore_["extend"])({}, getContentBrowserConfiguration(), Object(external_underscore_["pick"])(options, 'selection', 'selectionMode'))));
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/editor_registry.ts


var currentId = 0;
var editor_registry_registry = {};
function generateId() {
    currentId++;
    return currentId;
}
function registerEditor(editorClass) {
    var id = generateId();
    editor_registry_registry[id] = editorClass;
    var state = editor_registry_getState();
    var ids = state.get() || [];
    state.set(ids.concat([id]));
}
function editorRegistrationFor(_a) {
    var type = _a.type, tag = _a.tag;
    var ids = editor_registry_getState().get();
    if (ids) {
        var id = Object(external_underscore_["find"])(ids, function (i) { return editor_registry_registry[i] && editor_registry_registry[i].canEdit({ type: type, tag: tag }); });
        if (id) {
            var editorClass = editor_registry_registry[id];
            return { id: id, editorClass: editorClass };
        }
    }
}
function editor_registry_getState() {
    return appState.subState('editors');
}
// For test purpose only.
function clearEditorRegistry() {
    currentId = 0;
    editor_registry_registry = {};
    editor_registry_getState().clear();
}


// CONCATENATED MODULE: ./scrivito_sdk/realm/wrap_in_app_class.js
function wrap_in_app_class_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }




function wrap_in_app_class_wrapInAppClass(registry, internalValue) {
  if (Object(external_underscore_["isArray"])(internalValue)) {
    return Object(external_underscore_["map"])(internalValue, function (value) {
      return wrap_in_app_class_wrapInAppClass(registry, value);
    });
  }

  if (wrap_in_app_class_instanceof(internalValue, basic_obj)) {
    return buildAppClassInstance(internalValue, registry.objClassFor(internalValue.objClass()));
  }

  if (wrap_in_app_class_instanceof(internalValue, basic_widget_BasicWidget)) {
    var objClassName = internalValue.objClass();
    var appClass = registry.widgetClassFor(objClassName);
    return buildAppClassInstance(internalValue, appClass);
  }

  if (wrap_in_app_class_instanceof(internalValue, basic_link)) {
    var link = Object.create(registry.defaultClassForLinks.prototype);
    link._scrivitoPrivateContent = internalValue;
    return link;
  }

  return internalValue;
}
function buildAppClassInstance(internalValue, appClass) {
  var externalValue = Object.create(appClass.prototype);
  externalValue._scrivitoPrivateContent = internalValue;
  return externalValue;
}
function unwrapAppClass(value) {
  if (Object(external_underscore_["isArray"])(value)) {
    return Object(external_underscore_["map"])(value, unwrapAppClass);
  }

  if (value && value._scrivitoPrivateContent) {
    return value._scrivitoPrivateContent;
  }

  return value;
}
function unwrapAppAttributes(appAttributes, schema, appClassName) {
  return Object(external_underscore_["mapObject"])(appAttributes, function (value, name) {
    if (isSystemAttribute(name)) {
      return [value];
    }

    var typeInfo = schema.attributes[name];

    if (!typeInfo) {
      throw new ArgumentError("Attribute \"".concat(name, "\" is not defined for CMS object ") + "class \"".concat(appClassName, "\"."));
    }

    var unwrappedValue = unwrapAppClass(value);
    return [unwrappedValue, typeInfo];
  });
}
// CONCATENATED MODULE: ./scrivito_sdk/realm/link_factory.ts




function LinkFactory(registry) {
    // public API
    var Link = /** @class */ (function () {
        // public API
        function Link(attributes) {
            var basicAttributes = toBasicAttributes(attributes);
            this._scrivitoPrivateContent = new basic_link(basicAttributes);
        }
        // public API
        Link.prototype.title = function () {
            return this._scrivitoPrivateContent.title();
        };
        // public API
        Link.prototype.query = function () {
            return this._scrivitoPrivateContent.query();
        };
        // public API
        Link.prototype.hash = function () {
            return this._scrivitoPrivateContent.hash();
        };
        // public API
        Link.prototype.rel = function () {
            return this._scrivitoPrivateContent.rel();
        };
        // public API
        Link.prototype.target = function () {
            return this._scrivitoPrivateContent.target();
        };
        // public API
        Link.prototype.url = function () {
            return this._scrivitoPrivateContent.url();
        };
        // public API
        Link.prototype.obj = function () {
            var obj = this._scrivitoPrivateContent.obj();
            if (!obj) {
                return null;
            }
            return wrap_in_app_class_wrapInAppClass(registry, obj);
        };
        // public API
        Link.prototype.queryParameters = function () {
            return this._scrivitoPrivateContent.queryParameters();
        };
        // public API
        Link.prototype.copy = function (attributes) {
            var basicLink = this._scrivitoPrivateContent.copy(toBasicAttributes(attributes));
            var link = Object.create(registry.defaultClassForLinks.prototype);
            link._scrivitoPrivateContent = basicLink;
            return link;
        };
        // public API
        Link.prototype.isExternal = function () {
            return this._scrivitoPrivateContent.isExternal();
        };
        // public API
        Link.prototype.isInternal = function () {
            return this._scrivitoPrivateContent.isInternal();
        };
        return Link;
    }());
    return Link;
}
var ALLOWED_ATTRIBUTES = [
    'hash',
    'obj',
    'query',
    'rel',
    'target',
    'title',
    'url',
];
function assertValidPublicAttributes(attributes) {
    var unknownAttrs = external_underscore_["without"].apply(external_underscore_, [external_underscore_["keys"](attributes)].concat(ALLOWED_ATTRIBUTES));
    if (!external_underscore_["isEmpty"](unknownAttrs)) {
        throw new ArgumentError("Unexpected attributes " + prettyPrint(unknownAttrs) + "." +
            (" Available attributes: " + prettyPrint(ALLOWED_ATTRIBUTES)));
    }
}
function toBasicAttributes(attributes) {
    assertValidPublicAttributes(attributes);
    if (external_underscore_["has"](attributes, 'obj')) {
        return external_underscore_["extend"]({}, attributes, {
            objId: objIdFromObjValue(attributes.obj),
        });
    }
    return attributes;
}
function objIdFromObjValue(obj) {
    if (!obj) {
        return null;
    }
    return unwrapAppClass(obj).id();
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/schema.ts
var schema_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var schema_Schema = /** @class */ (function () {
    function Schema(definition, parent) {
        var attributes = {};
        if (parent._scrivitoPrivateSchema) {
            external_underscore_["extend"](attributes, parent._scrivitoPrivateSchema.attributes);
        }
        if (definition.attributes) {
            external_underscore_["each"](definition.attributes, function (attrDefinition, name) {
                attributes[name] = normalizeAttributeDefinition(attrDefinition);
            });
        }
        var onlyInside = definition.onlyInside;
        if (onlyInside) {
            this.definition = schema_assign({}, definition, { attributes: attributes, onlyInside: external_underscore_["isArray"](onlyInside) ? onlyInside : [onlyInside] });
        }
        else {
            this.definition = schema_assign({}, definition, { attributes: attributes });
        }
    }
    Schema.forInstance = function (model) {
        return this.forClass(model.constructor);
    };
    Schema.forClass = function (klass) {
        return klass._scrivitoPrivateSchema;
    };
    Schema.basicFieldFor = function (model, attributeName) {
        var schema = Schema.forInstance(model);
        if (!schema) {
            return;
        }
        var typeInfo = schema.attributes[attributeName];
        if (!typeInfo) {
            return;
        }
        return new basic_field_BasicField(model._scrivitoPrivateContent, attributeName, typeInfo);
    };
    Object.defineProperty(Schema.prototype, "attributes", {
        get: function () {
            return this.definition.attributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "name", {
        get: function () {
            return this.definition.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "onlyInside", {
        get: function () {
            return this.definition.onlyInside;
        },
        enumerable: true,
        configurable: true
    });
    Schema.prototype.isBinary = function () {
        var blobDefinition = this.definition.attributes.blob;
        if (!blobDefinition) {
            return false;
        }
        return blobDefinition[0] === 'binary';
    };
    return Schema;
}());
/* harmony default export */ var realm_schema = (schema_Schema);
function isAppClass(object) {
    return !!(object && object._scrivitoPrivateSchema);
}
function normalizeAttributeDefinition(attrDefinition) {
    if (typeof attrDefinition === 'string') {
        return [attrDefinition];
    }
    return attrDefinition;
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/app_model_accessor.js
function app_model_accessor_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function app_model_accessor_classCallCheck(instance, Constructor) { if (!app_model_accessor_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_model_accessor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_model_accessor_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_model_accessor_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_model_accessor_defineProperties(Constructor, staticProps); return Constructor; }






var app_model_accessor_AppModelAccessor =
/*#__PURE__*/
function () {
  function AppModelAccessor(registry) {
    app_model_accessor_classCallCheck(this, AppModelAccessor);

    this._registry = registry;
  }

  app_model_accessor_createClass(AppModelAccessor, [{
    key: "getObj",
    value: function getObj(modelClass, id) {
      var instance = basic_obj.get(id);
      return this._checkObjClassAndWrapInAppClass(modelClass, instance);
    }
  }, {
    key: "getObjIncludingDeleted",
    value: function getObjIncludingDeleted(modelClass, id) {
      var instance = basic_obj.getIncludingDeleted(id);
      return this._checkObjClassAndWrapInAppClass(modelClass, instance);
    }
  }, {
    key: "read",
    value: function read(model, attributeName) {
      var basicField = realm_schema.basicFieldFor(model, attributeName);

      if (!basicField) {
        return null;
      }

      var internalValue = basicField.get();
      return wrap_in_app_class_wrapInAppClass(this._registry, internalValue);
    }
  }, {
    key: "update",
    value: function update(model, attributes) {
      var appClassName = this._registry.objClassNameFor(model.constructor);

      if (!appClassName) {
        var baseClass;

        if (model.constructor === this._registry.defaultClassForObjs) {
          baseClass = 'Obj';
        } else {
          baseClass = 'Widget';
        }

        throw new ArgumentError("Updating is not supported on the base class \"".concat(baseClass, "\"."));
      }

      if (attributes.constructor !== Object) {
        throw new ArgumentError('The provided attributes are invalid. They have ' + 'to be an Object with valid Scrivito attribute values.');
      }

      var schema = realm_schema.forInstance(model);
      var attributesWithTypeInfo = unwrapAppAttributes(attributes, schema, appClassName);

      model._scrivitoPrivateContent.update(attributesWithTypeInfo);
    }
  }, {
    key: "wrapInAppClass",
    value: function wrapInAppClass(instance) {
      return wrap_in_app_class_wrapInAppClass(this._registry, instance);
    }
  }, {
    key: "_checkObjClassAndWrapInAppClass",
    value: function _checkObjClassAndWrapInAppClass(modelClass, instance) {
      if (!instance) {
        return null;
      }

      var objClassName = this._registry.objClassNameFor(modelClass);

      if (objClassName && objClassName !== instance.objClass()) {
        throw new ResourceNotFoundError("Obj with id \"".concat(instance.id(), "\" is not of type \"").concat(objClassName, "\"."));
      }

      return this.wrapInAppClass(instance);
    }
  }]);

  return AppModelAccessor;
}();


// CONCATENATED MODULE: ./scrivito_sdk/realm/attribute_content_factory.js
function attribute_content_factory_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function attribute_content_factory_classCallCheck(instance, Constructor) { if (!attribute_content_factory_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function attribute_content_factory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function attribute_content_factory_createClass(Constructor, protoProps, staticProps) { if (protoProps) attribute_content_factory_defineProperties(Constructor.prototype, protoProps); if (staticProps) attribute_content_factory_defineProperties(Constructor, staticProps); return Constructor; }

function AttributeContentFactory(appModelAccessor) {
  var AttributeContent =
  /*#__PURE__*/
  function () {
    function AttributeContent() {
      attribute_content_factory_classCallCheck(this, AttributeContent);
    }

    attribute_content_factory_createClass(AttributeContent, [{
      key: "id",
      // public API
      value: function id() {
        return this._scrivitoPrivateContent.id();
      } // public API

    }, {
      key: "objClass",
      value: function objClass() {
        return this._scrivitoPrivateContent.objClass();
      }
      /**
       * Resolves when all previous updates have been persisted.
       * If an update fails the promise is rejected.
       *
       * @returns {Promise}
       */

    }, {
      key: "finishSaving",
      value: function finishSaving() {
        return this._scrivitoPrivateContent.finishSaving();
      } // public API

    }, {
      key: "get",
      value: function get(attributeName) {
        return appModelAccessor.read(this, attributeName);
      } // public API

    }, {
      key: "update",
      value: function update(attributes) {
        appModelAccessor.update(this, attributes);
      }
    }]);

    return AttributeContent;
  }();

  return AttributeContent;
}
// CONCATENATED MODULE: ./scrivito_sdk/realm/initial_attributes_for.js
function initialAttributesFor(providedAttributes, registry, schema, appClassName) {
  var initialAttributes = {};
  Object.keys(schema.definition.attributes).forEach(function (attributeName) {
    if (!Object.prototype.hasOwnProperty.call(providedAttributes, attributeName)) {
      var initialValue = registry.initialContentFor(appClassName, attributeName);

      if (initialValue !== undefined) {
        initialAttributes[attributeName] = initialValue;
      }
    }
  });
  return initialAttributes;
}
// CONCATENATED MODULE: ./scrivito_sdk/realm/obj_factory.js
function obj_factory_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function obj_factory_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { obj_factory_typeof = function _typeof(obj) { return typeof obj; }; } else { obj_factory_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return obj_factory_typeof(obj); }

function obj_factory_classCallCheck(instance, Constructor) { if (!obj_factory_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function obj_factory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function obj_factory_createClass(Constructor, protoProps, staticProps) { if (protoProps) obj_factory_defineProperties(Constructor.prototype, protoProps); if (staticProps) obj_factory_defineProperties(Constructor, staticProps); return Constructor; }

function obj_factory_possibleConstructorReturn(self, call) { if (call && (obj_factory_typeof(call) === "object" || typeof call === "function")) { return call; } return obj_factory_assertThisInitialized(self); }

function obj_factory_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function obj_factory_getPrototypeOf(o) { obj_factory_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return obj_factory_getPrototypeOf(o); }

function obj_factory_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) obj_factory_setPrototypeOf(subClass, superClass); }

function obj_factory_setPrototypeOf(o, p) { obj_factory_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return obj_factory_setPrototypeOf(o, p); }









function ObjFactory(registry) {
  var appModelAccessor = new app_model_accessor_AppModelAccessor(registry);

  function buildObjSearch(objClassName, batchSize) {
    var search = new registry.ObjSearch();

    if (objClassName) {
      search.and('_objClass', 'equals', objClassName);
    }

    if (batchSize) {
      search._scrivitoPrivateContent.batchSize(batchSize);
    }

    return search;
  }

  function wrap(response) {
    return wrap_in_app_class_wrapInAppClass(registry, response);
  } // public API


  var Obj =
  /*#__PURE__*/
  function (_AttributeContentFact) {
    obj_factory_inherits(Obj, _AttributeContentFact);

    function Obj() {
      obj_factory_classCallCheck(this, Obj);

      return obj_factory_possibleConstructorReturn(this, obj_factory_getPrototypeOf(Obj).apply(this, arguments));
    }

    obj_factory_createClass(Obj, [{
      key: "lastChanged",
      // public API
      value: function lastChanged() {
        return this._scrivitoPrivateContent.lastChanged();
      } // public API

    }, {
      key: "path",
      value: function path() {
        return this._scrivitoPrivateContent.path();
      } // public API

    }, {
      key: "parent",
      value: function parent() {
        return wrap(this._scrivitoPrivateContent.parent());
      } // public API

    }, {
      key: "ancestors",
      value: function ancestors() {
        return wrap(this._scrivitoPrivateContent.ancestors());
      } // public API

    }, {
      key: "backlinks",
      value: function backlinks() {
        return wrap(this._scrivitoPrivateContent.backlinks());
      } // public API

    }, {
      key: "children",
      value: function children() {
        return wrap(this._scrivitoPrivateContent.children());
      }
    }, {
      key: "orderedChildren",
      value: function orderedChildren() {
        return wrap(this._scrivitoPrivateContent.orderedChildren());
      } // public API

    }, {
      key: "permalink",
      value: function permalink() {
        return this._scrivitoPrivateContent.permalink();
      } // public API

    }, {
      key: "slug",
      value: function slug() {
        return this._scrivitoPrivateContent.slug();
      } // public API

    }, {
      key: "isBinary",
      value: function isBinary() {
        var schema = realm_schema.forInstance(this);

        if (!schema) {
          return false;
        }

        return schema.isBinary();
      } // public API

    }, {
      key: "contentLength",
      value: function contentLength() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.contentLength();
        }

        return 0;
      } // public API

    }, {
      key: "contentType",
      value: function contentType() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.contentType();
        }

        return '';
      } // public API

    }, {
      key: "contentUrl",
      value: function contentUrl() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.contentUrl();
        }

        return '';
      } // public API

    }, {
      key: "metadata",
      value: function metadata() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.metadata();
        }

        return new metadata_collection();
      } // public API

    }, {
      key: "destroy",
      value: function destroy() {
        this._scrivitoPrivateContent.destroy();
      } // public API

    }, {
      key: "widget",
      value: function widget(id) {
        return wrap(this._scrivitoPrivateContent.widget(id));
      } // public API

    }, {
      key: "widgets",
      value: function widgets() {
        return wrap(this._scrivitoPrivateContent.widgets());
      }
    }], [{
      key: "get",
      // public API
      value: function get(id) {
        return appModelAccessor.getObj(this, id);
      } // public API

    }, {
      key: "getIncludingDeleted",
      value: function getIncludingDeleted(id) {
        return appModelAccessor.getObjIncludingDeleted(this, id);
      } // public API

    }, {
      key: "getByPath",
      value: function getByPath(path) {
        return wrap(basic_obj.getByPath(path));
      } // public API

    }, {
      key: "getByPermalink",
      value: function getByPermalink(permalink) {
        return wrap(basic_obj.getByPermalink(permalink));
      } // public API

    }, {
      key: "all",
      value: function all() {
        var objClassName = registry.objClassNameFor(this);
        return buildObjSearch(objClassName, 1000);
      } // public API

    }, {
      key: "root",
      value: function root() {
        return wrap(basic_obj.root());
      } // public API

    }, {
      key: "where",
      value: function where(attribute, operator, value) {
        var boost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var objClassName = registry.objClassNameFor(this);
        return buildObjSearch(objClassName).and(attribute, operator, value, boost);
      } // public API

    }, {
      key: "create",
      value: function create() {
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        assertValidCreateAttributes(attributes, this._appClassName());

        var attributesForCreate = this._prepareAttributesForCreate(attributes);

        var basicObj = basic_obj.create(attributesForCreate);
        return wrap(basicObj);
      } // public API

    }, {
      key: "createFromFile",
      value: function createFromFile(file) {
        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        assertValidFile(file);
        assertValidCreateFromFileAttributes(attributes, this._appClassName(), this._schema());

        var attributesForCreate = this._prepareAttributesForCreate(attributes);

        return basic_obj.createFromFile(file, attributesForCreate).then(function (basicObj) {
          return wrap(basicObj);
        });
      }
    }, {
      key: "_prepareAttributesForCreate",
      value: function _prepareAttributesForCreate(appAttributes) {
        var schema = this._schema();

        var appClassName = this._appClassName();

        var initialAttributes = initialAttributesFor(appAttributes, registry, schema, appClassName);
        var systemAttributes = {
          _objClass: appClassName
        };
        var createAttributes = Object(external_underscore_["extend"])({}, appAttributes, initialAttributes, systemAttributes);
        return unwrapAppAttributes(createAttributes, schema, appClassName);
      }
    }, {
      key: "_appClassName",
      value: function _appClassName() {
        return registry.objClassNameFor(this);
      }
    }, {
      key: "_schema",
      value: function _schema() {
        return realm_schema.forClass(this);
      }
    }]);

    return Obj;
  }(AttributeContentFactory(appModelAccessor));

  return Obj;
}

function assertValidCreateAttributes(attributes, appClassName) {
  if (!appClassName) {
    throw new ArgumentError('Creating CMS objects is not supported for the class Obj or abstract classes.');
  }

  if (attributes.constructor !== Object) {
    throw new ArgumentError('The provided attributes are invalid. They have ' + 'to be an Object with valid Scrivito attribute values.');
  }

  if (attributes._objClass) {
    throw new ArgumentError('Invalid attribute "_objClass". ' + "\"".concat(attributes._objClass, ".create\" will automatically set the CMS object class ") + 'correctly.');
  }
}

function assertValidCreateFromFileAttributes(attributes, appClassName, schema) {
  assertValidCreateAttributes(attributes, appClassName);

  if (Object.prototype.hasOwnProperty.call(attributes, 'blob')) {
    throw new ArgumentError('Setting attribute "blob" is not allowed when creating CMS objects from file, ' + 'because the file will be assigned to that attribute');
  }

  if (!schema.isBinary()) {
    throw new ArgumentError('Creating CMS objects from file is only available for classes with a binary attribute "blob"');
  }
}

function assertValidFile(file) {
  if (!FileType.is(file)) {
    if (BlobType.is(file)) {
      throw new ArgumentError('Creating CMS objects from file is only available with instances of "File", ' + 'but an instance of "Blob" is given');
    }

    throw new ArgumentError('Creating CMS objects from file is only available with instances of "File"');
  }
}
// CONCATENATED MODULE: ./scrivito_sdk/realm/obj_facet_value.ts

var obj_facet_value_ObjFacetValue = /** @class */ (function () {
    function ObjFacetValue(registry, basicObjFacetValue) {
        this._registry = registry;
        this._basicObjFacetValue = basicObjFacetValue;
    }
    // public API
    ObjFacetValue.prototype.name = function () {
        return this._basicObjFacetValue.name();
    };
    // public API
    ObjFacetValue.prototype.count = function () {
        return this._basicObjFacetValue.count();
    };
    // public API
    ObjFacetValue.prototype.includedObjs = function () {
        var response = this._basicObjFacetValue.includedObjs();
        return wrap_in_app_class_wrapInAppClass(this._registry, response);
    };
    return ObjFacetValue;
}());
/* harmony default export */ var obj_facet_value = (obj_facet_value_ObjFacetValue);

// CONCATENATED MODULE: ./scrivito_sdk/realm/obj_search_factory.js
function obj_search_factory_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function obj_search_factory_classCallCheck(instance, Constructor) { if (!obj_search_factory_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function obj_search_factory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function obj_search_factory_createClass(Constructor, protoProps, staticProps) { if (protoProps) obj_search_factory_defineProperties(Constructor.prototype, protoProps); if (staticProps) obj_search_factory_defineProperties(Constructor, staticProps); return Constructor; }





function ObjSearchFactory(registry) {
  // public API
  var ObjSearch =
  /*#__PURE__*/
  function () {
    function ObjSearch() {
      obj_search_factory_classCallCheck(this, ObjSearch);

      this._scrivitoPrivateContent = new basic_obj_search();
    } // public API


    obj_search_factory_createClass(ObjSearch, [{
      key: "and",
      value: function and(attributeOrSearch, operator, value) {
        var boost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        if (obj_search_factory_instanceof(attributeOrSearch, ObjSearch)) {
          this._scrivitoPrivateContent.and(attributeOrSearch._scrivitoPrivateContent);
        } else {
          var unwrappedValue = unwrapAppClass(value);

          this._scrivitoPrivateContent.and(attributeOrSearch, operator, unwrappedValue, boost);
        }

        return this;
      } // public API

    }, {
      key: "andNot",
      value: function andNot(attribute, operator, value) {
        var unwrappedValue = unwrapAppClass(value);

        this._scrivitoPrivateContent.andNot(attribute, operator, unwrappedValue);

        return this;
      } // public API

    }, {
      key: "facet",
      value: function facet(attribute) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var result = this._scrivitoPrivateContent.facet(attribute, options);

        return external_underscore_default.a.map(result, function (facetValue) {
          return new obj_facet_value(registry, facetValue);
        });
      } // public API

    }, {
      key: "first",
      value: function first() {
        var basicObj = this._scrivitoPrivateContent.first();

        if (!basicObj) {
          return null;
        }

        return wrap_in_app_class_wrapInAppClass(registry, basicObj);
      } // public API

    }, {
      key: "take",
      value: function take(count) {
        var basicObjs = this._scrivitoPrivateContent.take(count);

        return basicObjs.map(function (obj) {
          return wrap_in_app_class_wrapInAppClass(registry, obj);
        });
      } // public API

    }, {
      key: "offset",
      value: function offset(_offset) {
        this._scrivitoPrivateContent.offset(_offset);

        return this;
      } // public API

    }, {
      key: "order",
      value: function order(attribute, direction) {
        this._scrivitoPrivateContent.order(attribute, direction);

        return this;
      } // public API

    }, {
      key: "count",
      value: function count() {
        return this._scrivitoPrivateContent.count();
      }
    }]);

    return ObjSearch;
  }(); // check if the environment supports ES6 iterables
  // (either native or through some kind of polyfill)
  // if yes, make ObjSearch an ES6 iterable.


  if (typeof window.Symbol === 'function') {
    var iteratorSymbol = window.Symbol.iterator;

    if (iteratorSymbol) {
      var proto = ObjSearch.prototype; // public API

      proto[iteratorSymbol] = function iterator() {
        var basicObjsIterator = this._scrivitoPrivateContent.iterator();

        return {
          next: function next() {
            var _basicObjsIterator$ne = basicObjsIterator.next(),
                done = _basicObjsIterator$ne.done,
                value = _basicObjsIterator$ne.value;

            if (done) {
              return {
                done: done
              };
            }

            return {
              done: done,
              value: wrap_in_app_class_wrapInAppClass(registry, value)
            };
          }
        };
      };
    }
  }

  return ObjSearch;
}
// CONCATENATED MODULE: ./scrivito_sdk/realm/widget_factory.js
function widget_factory_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function widget_factory_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { widget_factory_typeof = function _typeof(obj) { return typeof obj; }; } else { widget_factory_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return widget_factory_typeof(obj); }

function widget_factory_classCallCheck(instance, Constructor) { if (!widget_factory_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function widget_factory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function widget_factory_createClass(Constructor, protoProps, staticProps) { if (protoProps) widget_factory_defineProperties(Constructor.prototype, protoProps); if (staticProps) widget_factory_defineProperties(Constructor, staticProps); return Constructor; }

function widget_factory_possibleConstructorReturn(self, call) { if (call && (widget_factory_typeof(call) === "object" || typeof call === "function")) { return call; } return widget_factory_assertThisInitialized(self); }

function widget_factory_getPrototypeOf(o) { widget_factory_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return widget_factory_getPrototypeOf(o); }

function widget_factory_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) widget_factory_setPrototypeOf(subClass, superClass); }

function widget_factory_setPrototypeOf(o, p) { widget_factory_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return widget_factory_setPrototypeOf(o, p); }

function widget_factory_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









function WidgetFactory(registry) {
  var appModelAccessor = new app_model_accessor_AppModelAccessor(registry); // public API

  var Widget =
  /*#__PURE__*/
  function (_AttributeContentFact) {
    widget_factory_inherits(Widget, _AttributeContentFact);

    // public API
    function Widget() {
      var _this;

      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      widget_factory_classCallCheck(this, Widget);

      _this = widget_factory_possibleConstructorReturn(this, widget_factory_getPrototypeOf(Widget).call(this));
      var schema = realm_schema.forInstance(widget_factory_assertThisInitialized(widget_factory_assertThisInitialized(_this)));
      var appClassName = registry.objClassNameFor(_this.constructor);

      var attributesForConstructor = _this._prepareAttributesForConstructor(attributes, schema, appClassName);

      var basicWidget = new basic_widget_BasicWidget(attributesForConstructor);
      basicWidget.onDidPersist(function (copiedWidget) {
        var appWidget = wrap_in_app_class_wrapInAppClass(registry, copiedWidget);
        var initialAttributes = initialAttributesFor(attributesForConstructor, registry, schema, appClassName);
        appWidget.update(initialAttributes);
      });
      _this._scrivitoPrivateContent = basicWidget;
      return _this;
    } // public API


    widget_factory_createClass(Widget, [{
      key: "obj",
      value: function obj() {
        var basicObj = this._scrivitoPrivateContent.obj();

        return wrap_in_app_class_wrapInAppClass(registry, basicObj);
      } // public API

    }, {
      key: "copy",
      value: function copy() {
        var appClass = registry.widgetClassFor(this.objClass());

        var basicWidget = this._scrivitoPrivateContent.copy();

        return buildAppClassInstance(basicWidget, appClass);
      } // public API

    }, {
      key: "destroy",
      value: function destroy() {
        this._scrivitoPrivateContent.remove();
      }
    }, {
      key: "_prepareAttributesForConstructor",
      value: function _prepareAttributesForConstructor(appAttributes, schema, appClassName) {
        assertValidConstructorAttributes(appClassName, appAttributes);
        var systemAttributes = {
          _objClass: appClassName
        };
        var constructorAttributes = Object(external_underscore_["extend"])({}, appAttributes, systemAttributes);
        return unwrapAppAttributes(constructorAttributes, schema, appClassName);
      }
    }]);

    return Widget;
  }(AttributeContentFactory(appModelAccessor));

  return Widget;
}

function assertValidConstructorAttributes(appClassName, attributes) {
  if (!appClassName) {
    throw new ArgumentError('Creating widgets is not supported for the class Widget or abstract classes.');
  }

  if (attributes.constructor !== Object) {
    throw new ArgumentError('The provided attributes are invalid. They have ' + 'to be an Object with valid Scrivito attribute values.');
  }

  if (attributes._objClass) {
    throw new ArgumentError('Invalid attribute "_objClass". ' + "\"new ".concat(attributes._objClass, "\" will automatically set the CMS object class correctly."));
  }
}
// CONCATENATED MODULE: ./scrivito_sdk/realm/registry.ts





var registry_Registry = /** @class */ (function () {
    function Registry() {
        this.mapping = {};
        this.defaultClassForObjs = ObjFactory(this);
        this.defaultClassForWidgets = WidgetFactory(this);
        this.defaultClassForLinks = LinkFactory(this);
        this.ObjSearch = ObjSearchFactory(this);
    }
    Registry.prototype.register = function (name, klass) {
        this.mapping[name] = klass;
    };
    Registry.prototype.getClass = function (name) {
        return this.mapping[name] || null;
    };
    Registry.prototype.allObjClasses = function () {
        var _this = this;
        return external_underscore_["pick"](this.mapping, function (modelClass) {
            return _this.defaultClassForObjs.isPrototypeOf(modelClass);
        });
    };
    Registry.prototype.allWidgetClasses = function () {
        var _this = this;
        return external_underscore_["pick"](this.mapping, function (modelClass) {
            return _this.defaultClassForWidgets.isPrototypeOf(modelClass);
        });
    };
    Registry.prototype.objClassFor = function (name) {
        return this.appClassFor(name, this.defaultClassForObjs);
    };
    Registry.prototype.widgetClassFor = function (name) {
        return this.appClassFor(name, this.defaultClassForWidgets);
    };
    Registry.prototype.objClassNameFor = function (modelClass) {
        return external_underscore_["findKey"](this.mapping, function (klass) { return klass === modelClass; });
    };
    Registry.prototype.setInitialContentFor = function (initialContentFor) {
        this.initialContentForFunction = initialContentFor;
    };
    Registry.prototype.initialContentFor = function (className, attributeName) {
        if (this.initialContentForFunction) {
            return this.initialContentForFunction(className, attributeName);
        }
    };
    Registry.prototype.appClassFor = function (name, baseClass) {
        var appClass = this.getClass(name);
        if (appClass && baseClass.isPrototypeOf(appClass)) {
            return appClass;
        }
        return baseClass;
    };
    return Registry;
}());
/* harmony default export */ var realm_registry = (registry_Registry);

// CONCATENATED MODULE: ./scrivito_sdk/realm/app_class_api.ts
var app_class_api_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function createObjClass(registry, definition) {
    if (definition.extend &&
        !isOrExtends(definition.extend, registry.defaultClassForObjs)) {
        throw new ArgumentError('Invalid value for "extend": not a Scrivito Obj class');
    }
    var baseClass = definition.extend || registry.defaultClassForObjs;
    var schema = new realm_schema(definition, baseClass);
    // we can only use the non-specific names `Obj` or `Widget` for AppClasses.
    // it's not possible to dynamically name a class in ES5 (or anything transpiled to ES5)
    // compare: // https://stackoverflow.com/questions/5871040
    return /** @class */ (function (_super) {
        app_class_api_extends(Obj, _super);
        function Obj() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Obj, "_scrivitoPrivateSchema", {
            get: function () {
                return schema;
            },
            enumerable: true,
            configurable: true
        });
        return Obj;
    }(baseClass));
}
function createWidgetClass(registry, definition) {
    if (definition.extend &&
        !isOrExtends(definition.extend, registry.defaultClassForWidgets)) {
        throw new ArgumentError('Invalid value for "extend": not a Scrivito Widget class');
    }
    var baseClass = definition.extend || registry.defaultClassForWidgets;
    var schema = new realm_schema(definition, baseClass);
    return /** @class */ (function (_super) {
        app_class_api_extends(Widget, _super);
        function Widget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Widget, "_scrivitoPrivateSchema", {
            get: function () {
                return schema;
            },
            enumerable: true,
            configurable: true
        });
        return Widget;
    }(baseClass));
}
function provideObjClass(registry, name, appClassOrDefinition) {
    var appClass = buildObjClassFrom(registry, name, appClassOrDefinition);
    registry.register(name, appClass);
    return appClass;
}
function buildObjClassFrom(registry, name, appClassOrDefinition) {
    if (isAppClass(appClassOrDefinition)) {
        return appClassOrDefinition;
    }
    var definition = Object(external_underscore_["extend"])({}, appClassOrDefinition, { name: name });
    return createObjClass(registry, definition);
}
function provideWidgetClass(registry, name, appClassOrDefinition) {
    var appClass = buildWidgetClassFrom(registry, name, appClassOrDefinition);
    registry.register(name, appClass);
    return appClass;
}
function buildWidgetClassFrom(registry, name, appClassOrDefinition) {
    if (isAppClass(appClassOrDefinition)) {
        return appClassOrDefinition;
    }
    var definition = Object(external_underscore_["extend"])({}, appClassOrDefinition, { name: name });
    return createWidgetClass(registry, definition);
}
function isOrExtends(maybeClass, klass) {
    if (!maybeClass) {
        return false;
    }
    if (maybeClass === klass) {
        return true;
    }
    return maybeClass.prototype instanceof klass;
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/app_class_api_check.ts


var ObjClassType = external_tcomb_validation_.refinement(external_tcomb_validation_.Function, isAppClass, 'ObjClass');
var ObjClassDefinitionType = external_tcomb_validation_.interface({
    attributes: external_tcomb_validation_.maybe(external_tcomb_validation_.dict(external_tcomb_validation_.refinement(external_tcomb_validation_.String, isCustomAttributeName, 'String (alphanumeric, starting with a lower-case character)'), external_tcomb_validation_.union([
        external_tcomb_validation_.enums.of([
            'binary',
            'date',
            'float',
            'html',
            'integer',
            'link',
            'linklist',
            'reference',
            'referencelist',
            'string',
            'stringlist',
            'widgetlist',
        ]),
        external_tcomb_validation_.union([
            external_tcomb_validation_.tuple([
                external_tcomb_validation_.enums.of(['enum', 'multienum']),
                external_tcomb_validation_.interface({
                    values: external_tcomb_validation_.list(external_tcomb_validation_.String),
                }),
            ]),
            external_tcomb_validation_.tuple([
                external_tcomb_validation_.enums.of(['widgetlist']),
                external_tcomb_validation_.interface({
                    only: external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.list(external_tcomb_validation_.String)]),
                }),
            ]),
        ]),
    ]), 'Attributes Specification')),
    extend: external_tcomb_validation_.maybe(ObjClassType),
});
var WidgetClassType = external_tcomb_validation_.refinement(external_tcomb_validation_.Function, isAppClass, 'WidgetClass');
var WidgetClassDefinitionType = external_tcomb_validation_.interface({
    attributes: ObjClassDefinitionType.meta.props.attributes,
    extend: external_tcomb_validation_.maybe(WidgetClassType),
    onlyInside: external_tcomb_validation_.maybe(external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.Array])),
});
var checkCreateObjClass = checkArgumentsFor('createObjClass', [['options', ObjClassDefinitionType]], {
    docPermalink: 'js-sdk/createObjClass',
});
var checkCreateWidgetClass = checkArgumentsFor('createWidgetClass', [['options', WidgetClassDefinitionType]], {
    docPermalink: 'js-sdk/createWidgetClass',
});
var ObjClassOrDefinitionType = external_tcomb_validation_.union([
    ObjClassDefinitionType,
    ObjClassType,
]);
var checkProvideObjClass = checkArgumentsFor('provideObjClass', [['name', external_tcomb_validation_.String], ['objClassOrDefinition', ObjClassOrDefinitionType]], {
    docPermalink: 'js-sdk/provideObjClass',
});
var WidgetClassOrDefinitionType = external_tcomb_validation_.union([
    WidgetClassDefinitionType,
    WidgetClassType,
]);
var checkProvideWidgetClass = checkArgumentsFor('provideWidgetClass', [
    ['name', external_tcomb_validation_.String],
    ['widgetClassOrDefinition', WidgetClassOrDefinitionType],
], {
    docPermalink: 'js-sdk/provideWidgetClass',
});
function isCustomAttributeName(name) {
    return /^[a-z](_+[A-Z0-9]|[A-Za-z0-9])*$/.test(name);
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/realm.ts




var realm_Realm = /** @class */ (function () {
    function Realm() {
        this._registry = new realm_registry();
        this.appModelAccessor = new app_model_accessor_AppModelAccessor(this._registry);
    }
    Realm.init = function (context) {
        var realm = new Realm();
        context.Obj = realm.Obj;
        context.Widget = realm.Widget;
        context.Link = realm.Link;
        context.ObjSearch = realm.ObjSearch;
        context.appModelAccessor = realm.appModelAccessor;
        context.provideObjClass = function (name, definition) { return realm.provideObjClass(name, definition); };
        context.provideWidgetClass = function (name, definition) { return realm.provideWidgetClass(name, definition); };
        context.createObjClass = function (definition) {
            return realm.createObjClass(definition);
        };
        context.createWidgetClass = function (definition) { return realm.createWidgetClass(definition); };
        context.getClass = function (name) { return realm.getClass(name); };
        context.allObjClasses = function () { return realm.allObjClasses(); };
        context.allWidgetClasses = function () { return realm.allWidgetClasses(); };
        context._privateRealm = realm;
        return realm;
    };
    Object.defineProperty(Realm.prototype, "Obj", {
        get: function () {
            return this._registry.defaultClassForObjs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Realm.prototype, "Widget", {
        get: function () {
            return this._registry.defaultClassForWidgets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Realm.prototype, "Link", {
        get: function () {
            return this._registry.defaultClassForLinks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Realm.prototype, "ObjSearch", {
        get: function () {
            return this._registry.ObjSearch;
        },
        enumerable: true,
        configurable: true
    });
    // public API
    Realm.prototype.provideObjClass = function (name, definition) {
        checkProvideObjClass(name, definition);
        return provideObjClass(this._registry, name, definition);
    };
    // public API
    Realm.prototype.provideWidgetClass = function (name, definition) {
        checkProvideWidgetClass(name, definition);
        return provideWidgetClass(this._registry, name, definition);
    };
    // public API
    Realm.prototype.createObjClass = function (definition) {
        checkCreateObjClass(definition);
        return createObjClass(this._registry, definition);
    };
    // public API
    Realm.prototype.createWidgetClass = function (definition) {
        checkCreateWidgetClass(definition);
        return createWidgetClass(this._registry, definition);
    };
    // public API
    Realm.prototype.getClass = function (name) {
        return this._registry.getClass(name);
    };
    Realm.prototype.allObjClasses = function () {
        return this._registry.allObjClasses();
    };
    Realm.prototype.allWidgetClasses = function () {
        return this._registry.allWidgetClasses();
    };
    Realm.prototype.setInitialContentFor = function (initialContentFor) {
        this._registry.setInitialContentFor(initialContentFor);
    };
    return Realm;
}());
/* harmony default export */ var realm_realm = (realm_Realm);

// CONCATENATED MODULE: ./scrivito_sdk/realm/index.ts


/* harmony default export */ var scrivito_sdk_realm = (realm_realm);




// CONCATENATED MODULE: ./scrivito_sdk/app_support/change_location.ts

function changeLocation(url) {
    if (ui_adapter_uiAdapter) {
        // change the location of the parent, to avoid CSP errors.
        ui_adapter_uiAdapter.navigateToExternalUrl(url);
    }
    else {
        setWindowLocation(url);
    }
}
function setWindowLocation(url) {
    window.location.assign(url);
}
function openLocation(url, target) {
    window.open(url, target);
}
function openInNewWindow(url) {
    openLocation(url, '_blank');
}

// EXTERNAL MODULE: ../node_modules/warning/browser.js
var browser = __webpack_require__(3);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ../node_modules/invariant/browser.js
var invariant_browser = __webpack_require__(6);
var invariant_browser_default = /*#__PURE__*/__webpack_require__.n(invariant_browser);

// CONCATENATED MODULE: ../node_modules/resolve-pathname/index.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';
  var hasTrailingSlash = void 0;

  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;

  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);
// CONCATENATED MODULE: ../node_modules/value-equal/index.js
var value_equal_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function valueEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : value_equal_typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : value_equal_typeof(b);
  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();
    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);
// CONCATENATED MODULE: ../node_modules/history/es/PathUtils.js
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};
var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};
var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};
var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};
var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};
var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};
var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;
  return path;
};
// CONCATENATED MODULE: ../node_modules/history/es/LocationUtils.js
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};




var LocationUtils_createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};
var LocationUtils_locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
};
// CONCATENATED MODULE: ../node_modules/history/es/createTransitionManager.js


var createTransitionManager_createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    browser_default()(prompt == null, 'A history supports only one prompt at a time');
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          browser_default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ var es_createTransitionManager = (createTransitionManager_createTransitionManager);
// CONCATENATED MODULE: ../node_modules/history/es/DOMUtils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};
var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};
var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
};
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};
// CONCATENATED MODULE: ../node_modules/history/es/createBrowserHistory.js
var createBrowserHistory_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var createBrowserHistory_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


var createBrowserHistory_createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  invariant_browser_default()(canUseDOM, 'Browser history needs a DOM');
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    browser_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return LocationUtils_createLocation(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createBrowserHistory_extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  var createHref = function createHref(location) {
    return basename + createPath(location);
  };

  var push = function push(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        browser_default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        browser_default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) addEventListener(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) removeEventListener(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ var es_createBrowserHistory = (createBrowserHistory_createBrowserHistory);
// CONCATENATED MODULE: ../node_modules/history/es/createHashHistory.js
var createHashHistory_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var createHashHistory_HashChangeEvent = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory_createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  invariant_browser_default()(canUseDOM, 'Hash history needs a DOM');
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());
    browser_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return LocationUtils_createLocation(path);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createHashHistory_extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && LocationUtils_locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }; // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  };

  var push = function push(path, state) {
    browser_default()(state === undefined, 'Hash history cannot push state; it is ignored');
    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        browser_default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    browser_default()(state === undefined, 'Hash history cannot replace state; it is ignored');
    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  };

  var go = function go(n) {
    browser_default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ var es_createHashHistory = (createHashHistory_createHashHistory);
// CONCATENATED MODULE: ../node_modules/history/es/createMemoryHistory.js
var createMemoryHistory_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var createMemoryHistory_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};
/**
 * Creates a history object that stores locations in memory.
 */


var createMemoryHistory_createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createMemoryHistory_extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? LocationUtils_createLocation(entry, undefined, createKey()) : LocationUtils_createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  var push = function push(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ var es_createMemoryHistory = (createMemoryHistory_createMemoryHistory);
// CONCATENATED MODULE: ../node_modules/history/es/index.js








// CONCATENATED MODULE: ./scrivito_sdk/app_support/browser_location.ts



var browser_location_history;
var unlistenToHistory;
var historyChangesCount = 0;
function useHistory(historyToUse) {
    if (historyToUse.createHref({ pathname: '/' }) !== '/') {
        throw new ArgumentError('Expected a history without a preconfigured basename.' +
            ' For further details, see: https://www.scrivito.com/js-sdk/useHistory');
    }
    if (historyToUse === browser_location_history) {
        return;
    }
    var isFirstHistory = !browser_location_history;
    listenToHistory(historyToUse);
    browser_location_history = historyToUse;
    if (!isFirstHistory) {
        historyHasChanged();
    }
}
function get() {
    var location = getHistory().location;
    return "" + location.pathname + location.search + location.hash;
}
function getHistoryChangesCount() {
    return historyChangesCountState().get() || 0;
}
function browser_location_push(path) {
    return getHistory().push(path);
}
function browser_location_replace(path) {
    return getHistory().replace(path);
}
// For test purpose only.
function browser_location_reset() {
    browser_location_history = undefined;
    unlistenToHistory = undefined;
    historyChangesCount = 0;
}
// For test purpose only.
function createInitialHistory() {
    return es_createBrowserHistory();
}
function ensureHistory() {
    if (!browser_location_history) {
        useHistory(createInitialHistory());
    }
}
function getHistory() {
    ensureHistory();
    return browser_location_history;
}
function listenToHistory(historyToListen) {
    if (unlistenToHistory) {
        unlistenToHistory();
    }
    unlistenToHistory = historyToListen.listen(historyHasChanged);
}
function historyHasChanged() {
    historyChangesCount++;
    historyChangesCountState().set(historyChangesCount);
}
function historyChangesCountState() {
    return appState.subState('historyChangesCount');
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/permalink_cache.ts


var cache = {};
var cacheContentStateId;
var cacheDisabled = new context_container();
function setObjIdForPermalink(objId, permalink) {
    if (cacheDisabled.current()) {
        return;
    }
    clearIfOutdated();
    cache[permalink] = objId;
}
function objIdForPermalink(permalink) {
    if (cacheDisabled.current()) {
        return;
    }
    clearIfOutdated();
    return cache[permalink];
}
function withDisabledPermalinkCache(fn) {
    return cacheDisabled.runWith(true, fn);
}
// For test purpose only.
function clearPermalinkCache() {
    cache = {};
    cacheContentStateId = undefined;
}
function clearIfOutdated() {
    var worldContentStateId = getContentStateId();
    if (worldContentStateId !== cacheContentStateId) {
        cache = {};
        cacheContentStateId = worldContentStateId;
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/provide_editing_config.ts


var editingConfigForClass = {};
function getEditingConfigFor(className, propertyName) {
    var config = editingConfigForClass[className];
    if (!config) {
        return;
    }
    return config[propertyName];
}
var EnumValueLocalizationType = external_tcomb_validation_.struct({
    value: external_tcomb_validation_.String,
    title: external_tcomb_validation_.String,
});
var AttributesConfigType = external_tcomb_validation_.dict(external_tcomb_validation_.String, external_tcomb_validation_.struct({
    title: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    description: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    values: external_tcomb_validation_.maybe(external_tcomb_validation_.list(EnumValueLocalizationType)),
}));
var PropertiesGroupsType = external_tcomb_validation_.list(external_tcomb_validation_.struct({
    title: external_tcomb_validation_.String,
    component: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    properties: external_tcomb_validation_.maybe(external_tcomb_validation_.list(external_tcomb_validation_.String)),
}));
var InitialContentType = external_tcomb_validation_.dict(external_tcomb_validation_.String, external_tcomb_validation_.union([
    LinkType,
    external_tcomb_validation_.Date,
    external_tcomb_validation_.Function,
    external_tcomb_validation_.Nil,
    external_tcomb_validation_.Number,
    external_tcomb_validation_.String,
    external_tcomb_validation_.list(LinkType),
    external_tcomb_validation_.list(WidgetType),
    external_tcomb_validation_.list(external_tcomb_validation_.String),
]));
var EditingConfigType = external_tcomb_validation_.struct({
    attributes: external_tcomb_validation_.maybe(AttributesConfigType),
    propertiesGroups: external_tcomb_validation_.maybe(PropertiesGroupsType),
    title: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    description: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    thumbnail: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    titleForContent: external_tcomb_validation_.maybe(external_tcomb_validation_.Function),
    descriptionForContent: external_tcomb_validation_.maybe(external_tcomb_validation_.Function),
    hideInSelectionDialogs: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
    properties: external_tcomb_validation_.maybe(external_tcomb_validation_.list(external_tcomb_validation_.String)),
    initialContent: external_tcomb_validation_.maybe(InitialContentType),
});
var checkProvideEditingConfig = checkArgumentsFor('provideEditingConfig', [['className', external_tcomb_validation_.String], ['editingConfig', EditingConfigType]], { docPermalink: 'js-sdk/provideEditingConfig' });
function provideEditingConfig(className, editingConfig) {
    checkProvideEditingConfig(className, editingConfig);
    editingConfigForClass[className] = editingConfig;
}


// CONCATENATED MODULE: ./scrivito_sdk/app_support/initialize_content.ts






function initialContentFor(className, attributeName) {
    var initialContent = getEditingConfigFor(className, 'initialContent');
    if (initialContent) {
        var attributeContent = initialContent[attributeName];
        if (Object(external_underscore_["isFunction"])(attributeContent)) {
            return attributeContent();
        }
        if (isWidgetlist(attributeContent)) {
            var registry_1 = getWindowRegistry();
            return attributeContent.map(function (widget) {
                var basicWidget = widget._scrivitoPrivateContent;
                var copy = basicWidget.copy();
                return wrap_in_app_class_wrapInAppClass(registry_1, copy);
            });
        }
        return attributeContent;
    }
}
function isWidgetlist(maybeWidgetlist) {
    return Object(external_underscore_["isArray"])(maybeWidgetlist) && Object(external_underscore_["every"])(maybeWidgetlist, isWidget);
}
function isWidget(maybeWidget) {
    return (maybeWidget._scrivitoPrivateContent &&
        maybeWidget._scrivitoPrivateContent instanceof basic_widget_BasicWidget);
}
function initializeContentForObj(objId) {
    var basicObj = basic_obj.get(objId);
    initializeContentFor(basicObj);
}
function initializeContentForWidget(objId, widgetId) {
    var basicObj = basic_obj.get(objId);
    var basicWidget = basicObj.widget(widgetId);
    initializeContentFor(basicWidget);
}
function initializeContentFor(basicContent) {
    var objClassName = basicContent.objClass();
    var objClass = getWindowContext().getClass(objClassName);
    var schema = objClass._scrivitoPrivateSchema;
    var initialAttributes = {};
    Object(external_underscore_["each"])(schema.attributes, function (typeInfo, attributeName) {
        var currentValue = basicContent.get(attributeName, typeInfo);
        if (Object(external_underscore_["isEmpty"])(currentValue)) {
            var initialValue = initialContentFor(objClassName, attributeName);
            if (initialValue) {
                initialAttributes[attributeName] = initialValue;
            }
        }
    });
    var attributesWithTypeInfo = unwrapAppAttributes(initialAttributes, schema, objClassName);
    basicContent.update(attributesWithTypeInfo);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/window_context.ts
// The iframe context is the `scrivito` object, available top-level in the application iframe and
// used as the public API for the client. Following indirection is used in the specs in order to
// not pollute the global `window` object with the public API properties.


var realmApi = {};
var window_context_realm = scrivito_sdk_realm.init(realmApi);
window_context_realm.setInitialContentFor(initialContentFor);
function getWindowContext() {
    return realmApi;
}
// For test purpose only.
function setWindowContext(newIframeContext) {
    realmApi = newIframeContext;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/window_registry.js

function getWindowRegistry() {
  return getWindowContext()._privateRealm._registry;
}
// CONCATENATED MODULE: ./scrivito_sdk/app_support/multi_site_mode.ts



var getSiteIdForObjCallback;
var multi_site_mode_selectedSiteId = null;
function setMultiSiteMode(callback) {
    getSiteIdForObjCallback = callback;
}
function useMultiSiteMode() {
    return !!getSiteIdForObjCallback;
}
function multi_site_mode_getSiteIdForObj(obj) {
    var siteId = getSiteIdForObjCallback(wrap_in_app_class_wrapInAppClass(getWindowRegistry(), obj));
    if (typeof siteId === 'string' && siteId.length > 0) {
        return siteId;
    }
    return null;
}
/** Selecting a site ID only makes sense in the multi-site mode */
function unstable_selectSiteId(siteId) {
    if (!getSiteIdForObjCallback) {
        throw new MultiSiteModeOperationError('Scrivito.unstable_selectSiteId is only available in the multi-site mode');
    }
    if (multi_site_mode_selectedSiteId) {
        throw new MultiSiteModeOperationError('Scrivito.unstable_selectSiteId can be called only once');
    }
    multi_site_mode_selectedSiteId = siteId;
}
/** Accessing the selected site ID only makes sense in the multi-site mode */
function getSelectedSiteId() {
    // This should never happen!
    if (!getSiteIdForObjCallback) {
        throw new InternalError('Calling getSelectedSiteId is only available in multi-site mode');
    }
    return multi_site_mode_selectedSiteId;
}
function assertSelectedSiteId(operationDescription) {
    if (!multi_site_mode_selectedSiteId) {
        throw new MultiSiteModeOperationError("Used " + operationDescription + " in the multi-site mode, but the site ID is not yet selected." +
            ' Forgot to use Scrivito.unstable_selectSiteId?');
    }
}
// For test purpose only.
function resetMultiSiteMode() {
    getSiteIdForObjCallback = undefined;
    multi_site_mode_selectedSiteId = null;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/routing_path.ts








var routing_path_homepageCallback;
function setHomepageCallback(callback) {
    routing_path_homepageCallback = callback;
}
function generateRoutingPath(obj) {
    if (!(obj instanceof basic_obj)) {
        throw new ArgumentError('Parameter obj needs to be a BasicObj.');
    }
    if (isHomepage(obj)) {
        return '/';
    }
    var permalink = obj.permalink();
    if (permalink) {
        if (useMultiSiteMode()) {
            assertSelectedSiteId('routing-related API (e.g. Scrivito.navigateTo)');
            if (isGlobalOrFromSelectedSite(obj)) {
                return generateUsingPermalink(obj, permalink);
            }
        }
        else {
            return generateUsingPermalink(obj, permalink);
        }
    }
    var slug = generateSlug(obj);
    if (slug) {
        return "/" + slug + "-" + obj.id();
    }
    return "/" + obj.id();
}
function recognizeRoutingPath(pathToRecognize) {
    var path = pathToRecognize.replace(new RegExp('^/+|/+$', 'g'), '');
    if (path === '') {
        return homepageFromCallback();
    }
    var objId = extractObjIdFromPath(path);
    if (objId) {
        return basic_obj.get(objId);
    }
    return recognizePermalink(path);
}
function isGlobalOrFromSelectedSite(obj) {
    var objSiteId = multi_site_mode_getSiteIdForObj(obj);
    var selectedSiteId = getSelectedSiteId();
    return !objSiteId || objSiteId === selectedSiteId;
}
function generateUsingPermalink(obj, permalink) {
    setObjIdForPermalink(obj.id(), permalink);
    return "/" + permalink;
}
function recognizePermalink(path) {
    var objId = objIdForPermalink(path);
    if (objId) {
        return basic_obj.get(objId);
    }
    if (useMultiSiteMode()) {
        return recognizeMultiSitePermalink(path);
    }
    return basic_obj.getByPermalink(path);
}
function recognizeMultiSitePermalink(path) {
    assertSelectedSiteId('routing-related API (e.g. Scrivito.currentPage, Scrivito.urlFor)');
    var siteId = getSelectedSiteId();
    var objs = basic_obj.getAllByPermalink(path);
    return (Object(external_underscore_["find"])(objs, function (obj) {
        var objSiteId = multi_site_mode_getSiteIdForObj(obj);
        if (objSiteId) {
            return objSiteId === siteId;
        }
        return true;
    }) || null);
}
// For test purpose only.
function getHomepageCallback() {
    return routing_path_homepageCallback;
}
function isHomepage(obj) {
    var homepage = loadableWithDefault(null, homepageFromCallback);
    if (!homepage) {
        return false;
    }
    return homepage.id() === obj.id();
}
function generateSlug(basicObj) {
    var registry = getWindowRegistry();
    var obj = wrap_in_app_class_wrapInAppClass(registry, basicObj);
    if (isObjWithSlug(obj)) {
        var slug = obj.slug();
        if (typeof slug === 'string') {
            return slug;
        }
    }
}
function extractObjIdFromPath(input) {
    if (input.length < 16) {
        return null;
    }
    if (input.length > 16 && input.slice(-17, -16) !== '-') {
        return null;
    }
    var id = input.slice(-16);
    if (id.match(/[^0-9a-f]/)) {
        return null;
    }
    return id;
}
function homepageFromCallback() {
    if (routing_path_homepageCallback) {
        return routing_path_homepageCallback();
    }
    return null;
}
function isObjWithSlug(obj) {
    var maybeObjWithSlug = obj;
    return maybeObjWithSlug.slug && typeof maybeObjWithSlug.slug === 'function';
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/routing.ts





var basePath = '';
var isInitialized = false;
function routing_init(_a) {
    var routingBasePath = (_a === void 0 ? {} : _a).routingBasePath;
    isInitialized = true;
    basePath = routingBasePath || '';
}
// For test purpose only.
function routing_reset() {
    basePath = '';
    isInitialized = false;
}
function generateUrl(_a) {
    var obj = _a.obj, queryParameters = _a.queryParameters, hash = _a.hash, origin = _a.origin;
    assertIsInitialized('generateUrl');
    var path = generateRoutingPath(obj);
    var uri = generatePathUri({ path: path, queryParameters: queryParameters, hash: hash });
    if (origin) {
        uri.origin(origin);
    }
    return uri.toString();
}
function generatePath(_a) {
    var path = _a.path;
    assertIsInitialized('generatePath');
    return generatePathUri({ path: path });
}
function recognize(url) {
    assertIsInitialized('recognize');
    var uri = external_urijs_(url);
    var path = recognizePath(uri);
    // @types/urijs fails and declares that query(true) returns Object
    var queryParameters = uri.query(true);
    var hash = extractHash(uri);
    if (!Object(external_underscore_["isString"])(path)) {
        return { path: path, obj: null, queryParameters: queryParameters, hash: hash };
    }
    return {
        path: path,
        obj: recognizeRoutingPath(path),
        queryParameters: queryParameters,
        hash: hash,
    };
}
function recognizePath(uri) {
    if (isLocalUri(uri)) {
        return extractPath(uri);
    }
    return null;
}
function isLocalUrl(url) {
    var uri = external_urijs_(url);
    return isLocalUri(uri);
}
function isLocalUri(uri) {
    if (!uri.is('absolute')) {
        return true;
    }
    if (uri.origin() !== currentOrigin()) {
        return false;
    }
    return true;
}
function assertIsInitialized(methodName) {
    if (!isInitialized) {
        logError('Error from Scrivito SDK: No application configured, cannot initialize routing.');
        throw new InternalError(methodName + " can't be called before init.");
    }
}
function extractPath(uri) {
    var path = uri.path();
    if (path.substring(0, basePath.length) !== basePath) {
        return null;
    }
    return path.substring(basePath.length);
}
function generatePathUri(_a) {
    var path = _a.path, queryParameters = _a.queryParameters, hash = _a.hash;
    var normalizedPath = ("/" + basePath + "/" + path).replace(/\/+/g, '/');
    var uri = external_urijs_('').pathname(normalizedPath);
    if (queryParameters) {
        uri.query(queryParameters);
    }
    if (hash) {
        uri.hash(hash);
    }
    return uri;
}
function extractHash(uri) {
    var hash = uri.hash();
    if (hash === '') {
        return null;
    }
    return hash;
}
function currentOrigin() {
    return external_urijs_(window_proxy_location()).origin();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/is_binary_basic_obj.ts


function isBinaryBasicObj(basicObj) {
    var objClassName = basicObj.objClass();
    if (!objClassName) {
        return false;
    }
    var objClass = getWindowContext().getClass(objClassName);
    if (!objClass) {
        return false;
    }
    var schema = realm_schema.forClass(objClass);
    return schema.isBinary();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/navigate_to.ts










var latestCallNumber = 0;
function navigateTo(target, options) {
    var currentCallNumber = getNextCallNumber();
    failIfFrozen('navigateTo');
    if (target === null) {
        nextTick(function () { return checkNavigateTo(target, options); });
        return;
    }
    checkNavigateTo(target, options);
    var queryParameters;
    var hash;
    if (options) {
        var convenienceParams = Object(external_underscore_["omit"])(options, 'hash', 'params');
        checkNavigateToConvenience(target, convenienceParams);
        queryParameters = Object(external_underscore_["extend"])(convenienceParams, options.params || {});
        hash = options.hash;
    }
    var providesTarget = function () { return (Object(external_underscore_["isFunction"])(target) ? target() : target); };
    load(providesTarget)
        .then(function (evaluatedTarget) {
        var targetPromise = routingTargetFromEvaluatedTarget(evaluatedTarget, queryParameters, hash);
        if (targetPromise) {
            return targetPromise.then(function (routingTarget) {
                if (latestCallNumber === currentCallNumber) {
                    navigateToRoutingTarget(routingTarget);
                }
            });
        }
    })
        .catch(function (e) {
        if (latestCallNumber === currentCallNumber) {
            throwNextTick(e);
        }
    });
}
function routingTargetFromEvaluatedTarget(evaluatedTarget, queryParameters, hash) {
    checkEvaluatedTarget(evaluatedTarget);
    var basicTarget = unwrapAppClass(evaluatedTarget);
    if (basicTarget instanceof basic_obj) {
        return load(function () {
            return extractRoutingTargetForObj(basicTarget, queryParameters, hash || null);
        });
    }
    if (basicTarget instanceof basic_link) {
        return load(function () {
            return extractRoutingTargetForLink(basicTarget, queryParameters, hash || null);
        }).then(forwardOnlyLocationRoutingTarget);
    }
}
function forwardOnlyLocationRoutingTarget(routingTarget) {
    if (isObjRoutingTarget(routingTarget) ||
        isUrlRoutingTarget(routingTarget) ||
        isObjIdRoutingTarget(routingTarget)) {
        return routingTarget;
    }
    throw new ArgumentError('The link provided to navigateTo has no destination.');
}
function navigateToRoutingTarget(routingTarget) {
    if (isObjRoutingTarget(routingTarget)) {
        navigateToPage(routingTarget);
    }
    else if (isUrlRoutingTarget(routingTarget)) {
        changeLocation(routingTarget.url);
    }
    else {
        navigateToObjId(routingTarget);
    }
}
function navigateToPage(target) {
    var resource = generateUrl(target);
    var currentResource = get();
    if (resource === currentResource) {
        browser_location_replace(resource);
    }
    else {
        browser_location_push(resource);
    }
}
function navigateToObjId(target) {
    var objId = target.objId;
    if (target.isBinary) {
        var error = new ArgumentError("The target provided to navigateTo leads to the binary obj " + objId + " which has no binary data.");
        throwNextTick(error);
    }
    else {
        var uri = generatePath({ path: objId });
        if (target.queryParameters) {
            uri.query(target.queryParameters);
        }
        if (target.hash) {
            uri.hash(target.hash);
        }
        browser_location_push(uri.resource());
    }
}
function getNextCallNumber() {
    latestCallNumber++;
    return latestCallNumber;
}
function extractRoutingTargetForObj(obj, queryParameters, hash) {
    if (isBinaryBasicObj(obj)) {
        var blob = obj.get('blob', ['binary']);
        if (!blob) {
            return {
                isBinary: true,
                objId: obj.id(),
                queryParameters: queryParameters,
                hash: hash,
            };
        }
        return { url: blob.url() };
    }
    return { obj: obj, queryParameters: queryParameters, hash: hash };
}
function extractRoutingTargetForLink(link, queryParametersToApply, hashToApply) {
    if (link.isExternal()) {
        return { url: link.url() };
    }
    var hash = hashToApply || link.hash();
    var queryParameters;
    if (queryParametersToApply && !Object(external_underscore_["isEmpty"])(queryParametersToApply)) {
        queryParameters = queryParametersToApply;
    }
    else {
        queryParameters = link.queryParameters();
    }
    var obj = link.obj();
    if (!obj) {
        var objId = link.objId();
        if (objId) {
            return {
                objId: objId,
                queryParameters: queryParameters,
                hash: hash,
            };
        }
        return {};
    }
    return extractRoutingTargetForObj(obj, queryParameters, hash);
}
function isObjRoutingTarget(routingTarget) {
    return !!routingTarget.obj;
}
function isObjIdRoutingTarget(routingTarget) {
    return !!routingTarget.objId;
}
function isUrlRoutingTarget(routingTarget) {
    return !!routingTarget.url;
}
var EvaluatedTargetType = external_tcomb_validation_.union([ObjType, LinkType]);
var TargetType = external_tcomb_validation_.union([external_tcomb_validation_.Function, EvaluatedTargetType]);
var ParamsValueType = external_tcomb_validation_.dict(external_tcomb_validation_.String, external_tcomb_validation_.maybe(external_tcomb_validation_.String));
var checkNavigateTo = checkArgumentsFor('navigateTo', [
    ['target', TargetType],
    [
        'options',
        external_tcomb_validation_.maybe(external_tcomb_validation_.struct({
            hash: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
            params: external_tcomb_validation_.maybe(ParamsValueType),
        }, { strict: false })),
    ],
], {
    docPermalink: 'js-sdk/navigateTo',
});
var checkNavigateToConvenience = checkArgumentsFor('navigateTo', [['target', TargetType], ['options', external_tcomb_validation_.maybe(ParamsValueType)]], {
    docPermalink: 'js-sdk/navigateTo',
});
var checkEvaluatedTarget = checkArgumentsFor('navigateTo', [['target', EvaluatedTargetType]], {
    docPermalink: 'js-sdk/navigateTo',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/invoke_editing_config_callback.js



function invokeEditingConfigCallback(className, callbackName) {
  var callback = getEditingConfigFor(className, callbackName);

  if (Object(external_underscore_["isFunction"])(callback)) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return callback.apply(void 0, args);
    } catch (error) {
      throwNextTick(error);
    }
  }
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./scrivito_sdk/app_support/loading_monitor.ts

var loadingCount = 0;
var loading_monitor_deferred;
function finishLoading() {
    if (!loading_monitor_deferred) {
        loading_monitor_deferred = new common_deferred();
        nextTick(updateLoadingState);
    }
    return loading_monitor_deferred.promise;
}
function registerLoadingActivity() {
    loadingCount += 1;
    return createUnregister();
}
// For test purpose only.
function loading_monitor_reset() {
    loading_monitor_deferred = undefined;
    loadingCount = 0;
}
function createUnregister() {
    var unregisterHasBeenCalled = false;
    return function unregister() {
        if (unregisterHasBeenCalled) {
            throw new InternalError('Unregister must not be called twice');
        }
        loadingCount -= 1;
        unregisterHasBeenCalled = true;
        if (loadingCount === 0) {
            nextTick(updateLoadingState);
        }
    };
}
function updateLoadingState() {
    if (loading_monitor_deferred && loadingCount === 0) {
        loading_monitor_deferred.resolve(undefined);
        loading_monitor_deferred = undefined;
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/react/display_name_from_component.js
function displayNameFrom(component) {
  return component.displayName || component.name;
}

/* harmony default export */ var display_name_from_component = (displayNameFrom);
// CONCATENATED MODULE: ./scrivito_sdk/react/global_state_subscription.tsx
var global_state_subscription_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SubscribeContext = external_react_["createContext"](subscribe);
var global_state_subscription_GlobalStateSubscription = /** @class */ (function (_super) {
    global_state_subscription_extends(GlobalStateSubscription, _super);
    function GlobalStateSubscription(props) {
        var _this = _super.call(this, props) || this;
        _this.childListeners = new listener_collection();
        _this.subscribeChild = _this.subscribeChild.bind(_this);
        _this.notifyListeners = _this.notifyListeners.bind(_this);
        return _this;
    }
    GlobalStateSubscription.prototype.render = function () {
        var _this = this;
        return (external_react_["createElement"](external_react_["Fragment"], null,
            external_react_["createElement"](SubscribeContext.Provider, { value: this.subscribeChild }, this.props.children),
            external_react_["createElement"](SubscribeContext.Consumer, null, function (subscribeViaParent) { return (external_react_["createElement"](SubscriptionHandler, { subscribe: subscribeViaParent, listener: _this.notifyListeners })); })));
    };
    GlobalStateSubscription.prototype.notifyListeners = function () {
        // notify parent first, to avoid updating a child component unnecessarily
        this.props.listener();
        this.childListeners.notify();
    };
    GlobalStateSubscription.prototype.subscribeChild = function (listener) {
        return this.childListeners.subscribe(listener);
    };
    return GlobalStateSubscription;
}(external_react_["Component"]));
/* harmony default export */ var global_state_subscription = (global_state_subscription_GlobalStateSubscription);
var SubscriptionHandler = /** @class */ (function (_super) {
    global_state_subscription_extends(SubscriptionHandler, _super);
    function SubscriptionHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionHandler.prototype.render = function () {
        return null;
    };
    SubscriptionHandler.prototype.componentDidMount = function () {
        this.unsubscribe = this.props.subscribe(this.props.listener);
    };
    SubscriptionHandler.prototype.componentWillUnmount = function () {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    };
    return SubscriptionHandler;
}(external_react_["Component"]));

// CONCATENATED MODULE: ./scrivito_sdk/react/get_element_type.ts

function getElementType(node) {
    if (external_react_["isValidElement"](node)) {
        var forwardedType = node.props
            .__scrivitoForwardElementType;
        return forwardedType || node.type;
    }
}
function forwardElementTypeProps(node) {
    return { __scrivitoForwardElementType: getElementType(node) };
}

// CONCATENATED MODULE: ./scrivito_sdk/react/connect.tsx
var connect_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var connect_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








function connect(component) {
    if (typeof component !== 'function') {
        throw new ArgumentError('Scrivito.connect expects either a plain function or a subclass of React.Component');
    }
    if (isConnectedComponent(component)) {
        return component;
    }
    if (isClassComponent(component)) {
        return connectClassComponent(component);
    }
    return connectClassComponent(wrapInClassComponent(component));
}
function connectClassComponent(classComponent) {
    var _a;
    var connectedComponent = (_a = /** @class */ (function (_super) {
            connect_extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                _this._scrivitoPrivateConnector = new connect_ComponentConnector(_this);
                return _this;
            }
            class_1.prototype.componentDidMount = function () {
                this._scrivitoPrivateConnector.componentDidMount();
                if (_super.prototype.componentDidMount) {
                    _super.prototype.componentDidMount.call(this);
                }
            };
            class_1.prototype.componentWillUnmount = function () {
                this._scrivitoPrivateConnector.componentWillUnmount();
                if (_super.prototype.componentWillUnmount) {
                    _super.prototype.componentWillUnmount.call(this);
                }
            };
            class_1.prototype.render = function () {
                var _this = this;
                return this._scrivitoPrivateConnector.render(function () { return _super.prototype.render.call(_this); });
            };
            return class_1;
        }(classComponent)),
        _a._isScrivitoConnectedComponent = true,
        _a);
    connectedComponent.displayName = display_name_from_component(classComponent);
    return connectedComponent;
}
function wrapInClassComponent(functionalComponent) {
    var classComponent = /** @class */ (function (_super) {
        connect_extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.render = function () {
            return functionalComponent(this.props);
        };
        return class_2;
    }(external_react_["Component"]));
    classComponent.displayName = display_name_from_component(functionalComponent);
    return classComponent;
}
function isClassComponent(component) {
    return (typeof component === 'function' &&
        component.prototype &&
        component.prototype.isReactComponent);
}
function isConnectedComponent(component) {
    return (component
        ._isScrivitoConnectedComponent === true);
}
var connect_ComponentConnector = /** @class */ (function () {
    function ComponentConnector(component) {
        this.component = component;
        this.isMounted = false;
        this.updateIfNecessary = this.updateIfNecessary.bind(this);
        this.loadingSubscriber = new LoadingSubscriber();
    }
    ComponentConnector.prototype.componentDidMount = function () {
        this.isMounted = true;
        if (this.onMount) {
            var onMount = this.onMount.bind(this);
            delete this.onMount;
            onMount();
        }
        this.updateIfNecessary();
    };
    ComponentConnector.prototype.componentWillUnmount = function () {
        this.unregisterLoadingActivity();
        this.isMounted = false;
        this.loadingSubscriber.unsubscribe();
    };
    ComponentConnector.prototype.render = function (originalRender) {
        var _this = this;
        var trackedChanges = trackChanges(function () {
            return _this.renderLoadingAware(originalRender);
        });
        this.isStateChangeDetected = trackedChanges.detector;
        var reactElement = trackedChanges.result;
        return (external_react_["createElement"](global_state_subscription, connect_assign({ listener: this.updateIfNecessary }, forwardElementTypeProps(reactElement)), reactElement));
    };
    ComponentConnector.prototype.renderLoadingAware = function (originalRender) {
        var _this = this;
        if (isCurrentlyCapturing()) {
            // we are inside a capture - no need to load anything ourselves
            // (this usually means the caller is prerendering, e.g. renderToString)
            return runWithFrozenState(originalRender);
        }
        else {
            var captured_1 = capture(function () { return runWithFrozenState(originalRender); });
            this.whenMounted(function () {
                captured_1.subscribeLoading(_this.loadingSubscriber);
                if (captured_1.isAllDataLoaded()) {
                    _this.unregisterLoadingActivity();
                }
                else {
                    if (!_this.unregisterLoadingActivityCallback) {
                        _this.unregisterLoadingActivityCallback = registerLoadingActivity();
                    }
                }
            });
            if (!captured_1.isAllDataLoaded()) {
                return this.handleLoading(captured_1.result);
            }
            return captured_1.result;
        }
    };
    ComponentConnector.prototype.whenMounted = function (fn) {
        if (this.isMounted) {
            fn();
        }
        else {
            this.onMount = fn;
        }
    };
    ComponentConnector.prototype.handleLoading = function (preliminaryResult) {
        if (hasRenderWhileLoadingCallback(this.component)) {
            return this.component._scrivitoRenderWhileLoading();
        }
        return preliminaryResult;
    };
    ComponentConnector.prototype.unregisterLoadingActivity = function () {
        var unregister = this.unregisterLoadingActivityCallback;
        if (unregister) {
            delete this.unregisterLoadingActivityCallback;
            unregister();
        }
    };
    ComponentConnector.prototype.updateIfNecessary = function () {
        if (this.isStateChangeDetected && this.isStateChangeDetected()) {
            this.component.forceUpdate();
        }
    };
    return ComponentConnector;
}());
function hasRenderWhileLoadingCallback(component) {
    return !!component
        ._scrivitoRenderWhileLoading;
}
function runWithFrozenState(originalRender) {
    var run = runAndCatchErrorsWhileLoading(function () {
        return withFrozenState({
            contextName: 'React.Component#render',
            message: 'Use one of the React lifecycle hooks.',
        }, originalRender);
    });
    return run.success ? run.result : null;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/key_for_basic_content.js
function key_for_basic_content_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }



function keyForBasicContent(content) {
  if (key_for_basic_content_instanceof(content, basic_obj)) {
    return content.id();
  }

  if (key_for_basic_content_instanceof(content, basic_widget_BasicWidget)) {
    return "".concat(content.obj().id(), "|").concat(content.id());
  }

  var formattedContent = prettyPrint(content).substr(0, 100);
  throw new InternalError("keyForBasicContent called with \"".concat(formattedContent, "\". Expected an instance of") + ' BasicObj or BasicWidget.');
}
// CONCATENATED MODULE: ./scrivito_sdk/react/component_registry.js
var component_registry_registry = {};

function registerComponentForId(componentId, componentClass) {
  component_registry_registry[componentId] = componentClass;
}

function getComponentForId(componentId) {
  return component_registry_registry[componentId] || null;
}

function registerComponentForAppClass(className, componentClass) {
  registerComponentForId(appClassId(className), componentClass);
}

function getComponentForAppClass(className) {
  return getComponentForId(appClassId(className));
}

function appClassId(className) {
  return "appClass-".concat(className);
} // For test purpose only.


function clearComponentRegistry() {
  component_registry_registry = {};
}


// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(4);

// CONCATENATED MODULE: ./scrivito_sdk/react/widget_focus.ts
var currentFocus;
var currentToken = 0;
var handlers = {};
function widget_focus_subscribe(handler) {
    var token = currentToken;
    handlers[token] = handler;
    currentToken += 1;
    return token;
}
function widget_focus_unsubscribe(token) {
    delete handlers[token];
}
function notifyFocus(token) {
    currentFocus = token;
    var handler = handlers[currentFocus];
    if (handler) {
        handler.onFocus();
    }
}
function notifyBlur(token) {
    // Performance optimization: Only re-render the widget, which lost the focus.
    if (token === currentFocus) {
        var handler = handlers[token];
        if (handler) {
            handler.onBlur();
        }
    }
}
// For test purpose only.
function getHandlers() {
    return handlers;
}
// For test purpose only.
function widget_focus_reset() {
    currentFocus = undefined;
    currentToken = 0;
    handlers = {};
}

// CONCATENATED MODULE: ./scrivito_sdk/react/extract_ids_from_content.js
function extract_ids_from_content_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }


function extractIdsFromContent(basicContent) {
  if (extract_ids_from_content_instanceof(basicContent, basic_obj)) {
    return {
      objId: basicContent.id()
    };
  }

  return {
    objId: basicContent.obj().id(),
    widgetId: basicContent.id()
  };
}
// CONCATENATED MODULE: ./scrivito/setup_dragstart_event.js
function setupDragstartEvent(e) {
  e.dataTransfer.effectAllowed = 'move'; // Is required in order to dragover event is triggered in FF and Safari.
  // http://stackoverflow.com/questions/21507189/dragenter-dragover-and-drop-events-not-working-in-firefox
  // IE 11 however does not allow to set the data, which results in a security exception.

  try {
    e.dataTransfer.setData('text/plain', e.target.id);
  } catch (error) {// Ignore.
  }
}

/* harmony default export */ var setup_dragstart_event = (setupDragstartEvent);
// CONCATENATED MODULE: ./scrivito_sdk/app_support/title_for_widget.ts






function titleForWidget(objId, widgetId) {
    var basicObj = basic_obj.getIncludingDeleted(objId);
    if (basicObj === null) {
        return;
    }
    var basicWidget = basicObj.widget(widgetId);
    if (basicWidget === null) {
        return;
    }
    return titleForContent(basicWidget) || titleForClass(basicWidget.objClass());
}
function titleForContent(basicWidget) {
    var appWidget = wrap_in_app_class_wrapInAppClass(getWindowRegistry(), basicWidget);
    var className = basicWidget.objClass();
    return invokeEditingConfigCallback(className, 'titleForContent', appWidget);
}
function titleForClass(className) {
    return getEditingConfigFor(className, 'title') || sentenceCase(className);
}

// CONCATENATED MODULE: ./scrivito_sdk/react/is_handheld.ts

// https://stackoverflow.com/a/3540295/5887673
function isHandheld() {
    var userAgent = window_proxy_navigator().userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/menu_marker.tsx
var menu_marker_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var menu_marker_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







var menu_marker_MenuMarker = /** @class */ (function (_super) {
    menu_marker_extends(MenuMarker, _super);
    function MenuMarker(props) {
        var _this = _super.call(this, props) || this;
        _this._onClick = _this._onClick.bind(_this);
        _this._onDragStart = _this._onDragStart.bind(_this);
        _this._onDragEnd = _this._onDragEnd.bind(_this);
        _this._onTouchStart = _this._onTouchStart.bind(_this);
        _this._onTouchEnd = _this._onTouchEnd.bind(_this);
        _this._startDrag = _this._startDrag.bind(_this);
        _this._finishDrag = _this._finishDrag.bind(_this);
        return _this;
    }
    MenuMarker.prototype.render = function () {
        var _this = this;
        var eventHandlerProps = {
            onTouchStart: this._onTouchStart,
            onTouchEnd: this._onTouchEnd,
        };
        if (!isHandheld()) {
            eventHandlerProps.onDragStart = this._onDragStart;
            eventHandlerProps.onDragEnd = this._onDragEnd;
        }
        return (external_react_["createElement"]("span", menu_marker_assign({ ref: function (menuMarker) { return (_this._menuMarker = menuMarker); }, className: "scrivito_editing_marker", onClick: this._onClick, onMouseOver: this.props.onMouseOver, onMouseOut: this.props.onMouseOut, draggable: true }, eventHandlerProps),
            external_react_["createElement"]("i", { className: "scrivito_icon" }),
            external_react_["createElement"]("span", { className: "scrivito_editing_marker_title" }, this._title())));
    };
    MenuMarker.prototype._onClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (this._menuMarker) {
            var _a = extractIdsFromContent(this.props.widget), objId = _a.objId, widgetId = _a.widgetId;
            presentUiAdapter().showWidgetMenu(this._menuMarker, objId, widgetId);
        }
    };
    MenuMarker.prototype._onDragStart = function (e) {
        setup_dragstart_event(e);
        this._startDrag();
    };
    MenuMarker.prototype._onDragEnd = function () {
        this._finishDrag();
    };
    MenuMarker.prototype._onTouchStart = function () {
        this._startDrag();
    };
    MenuMarker.prototype._onTouchEnd = function (e) {
        e.stopPropagation();
        e.preventDefault();
        this._finishDrag();
    };
    MenuMarker.prototype._title = function () {
        var _a = extractIdsFromContent(this.props.widget), objId = _a.objId, widgetId = _a.widgetId;
        return titleForWidget(objId, widgetId);
    };
    MenuMarker.prototype._startDrag = function () {
        var _a = extractIdsFromContent(this.props.widget), objId = _a.objId, widgetId = _a.widgetId;
        presentUiAdapter().onDragStart(objId, widgetId);
        this.props.setDragState(true);
    };
    MenuMarker.prototype._finishDrag = function () {
        presentUiAdapter().onDragEnd();
        this.props.setDragState(false);
    };
    MenuMarker.displayName = 'Scrivito.ContentTag.MenuMarker';
    return MenuMarker;
}(external_react_["Component"]));
function presentUiAdapter() {
    if (!ui_adapter_uiAdapter) {
        throw new Error('MenuMarker is not expected to be rendered without UI');
    }
    return ui_adapter_uiAdapter;
}
/* harmony default export */ var menu_marker = (connect(menu_marker_MenuMarker));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/option_marker.jsx
function option_marker_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function option_marker_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { option_marker_typeof = function _typeof(obj) { return typeof obj; }; } else { option_marker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return option_marker_typeof(obj); }

function option_marker_classCallCheck(instance, Constructor) { if (!option_marker_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function option_marker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function option_marker_createClass(Constructor, protoProps, staticProps) { if (protoProps) option_marker_defineProperties(Constructor.prototype, protoProps); if (staticProps) option_marker_defineProperties(Constructor, staticProps); return Constructor; }

function option_marker_possibleConstructorReturn(self, call) { if (call && (option_marker_typeof(call) === "object" || typeof call === "function")) { return call; } return option_marker_assertThisInitialized(self); }

function option_marker_getPrototypeOf(o) { option_marker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return option_marker_getPrototypeOf(o); }

function option_marker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) option_marker_setPrototypeOf(subClass, superClass); }

function option_marker_setPrototypeOf(o, p) { option_marker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return option_marker_setPrototypeOf(o, p); }

function option_marker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var option_marker_OptionMarker =
/*#__PURE__*/
function (_React$Component) {
  option_marker_inherits(OptionMarker, _React$Component);

  function OptionMarker(props) {
    var _this;

    option_marker_classCallCheck(this, OptionMarker);

    _this = option_marker_possibleConstructorReturn(this, option_marker_getPrototypeOf(OptionMarker).call(this, props));
    _this._onClick = _this._onClick.bind(option_marker_assertThisInitialized(option_marker_assertThisInitialized(_this)));
    return _this;
  }

  option_marker_createClass(OptionMarker, [{
    key: "render",
    value: function render() {
      var className = "scrivito_option_marker scrivito_".concat(this.props.position);

      if (this.props.isAlwaysShown) {
        className += ' scrivito_visible';
      }

      return external_react_default.a.createElement("span", {
        className: className,
        onClick: this._onClick,
        onMouseOver: this.props.onMouseOver,
        onMouseOut: this.props.onMouseOut
      }, external_react_default.a.createElement("i", {
        className: "scrivito_icon scrivito_icon_marker_plus"
      }));
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.insertWidget(this.props.widget, this.props.position);
    }
  }]);

  return OptionMarker;
}(external_react_default.a.Component);

option_marker_OptionMarker.displayName = 'Scrivito.OptionMarker';
/* harmony default export */ var option_marker = (connect(option_marker_OptionMarker));
// CONCATENATED MODULE: ./scrivito_sdk/app_support/is_editing_mode.ts

function isEditingMode() {
    if (ui_adapter_uiAdapter) {
        return ui_adapter_uiAdapter.isEditingMode();
    }
    return false;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/always_show_option_markers.js
// For test purpose only.
// eslint-disable-next-line import/no-mutable-exports
var shouldAlwaysShowOptionMarkers = false;
function alwaysShowOptionMarkers() {
  shouldAlwaysShowOptionMarkers = true;
}
// CONCATENATED MODULE: ./scrivito_sdk/react/components/widget_tag.tsx
var widget_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var widget_tag_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};














var WidgetTagContext = external_react_["createContext"](undefined);
var WidgetTagContextConsumer = function (props) {
    return (external_react_["createElement"](WidgetTagContext.Consumer, null, function (widget) { return (external_react_["createElement"](widget_tag_WidgetTag, widget_tag_assign({ widget: widget }, Object(external_underscore_["omit"])(props, 'widget')))); }));
};
var widget_tag_WidgetTag = /** @class */ (function (_super) {
    widget_tag_extends(WidgetTag, _super);
    function WidgetTag(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasFocus: false,
            isDragging: false,
            isFocusFadedOut: true,
        };
        _this.onMouseOver = _this.onMouseOver.bind(_this);
        _this.onMouseOut = _this.onMouseOut.bind(_this);
        _this.onWidgetFocus = _this.onWidgetFocus.bind(_this);
        _this.onWidgetBlur = _this.onWidgetBlur.bind(_this);
        _this.lockFocus = _this.lockFocus.bind(_this);
        _this.unlockFocus = _this.unlockFocus.bind(_this);
        _this.setDragState = _this.setDragState.bind(_this);
        return _this;
    }
    WidgetTag.prototype.componentDidMount = function () {
        this.registerDropZone();
        this.focusToken = widget_focus_subscribe({
            onFocus: this.onWidgetFocus,
            onBlur: this.onWidgetBlur,
        });
    };
    WidgetTag.prototype.componentDidUpdate = function () {
        if (this.widgetRef !== this.dropZoneWidgetRef) {
            this.registerDropZone();
        }
    };
    WidgetTag.prototype.componentWillUnmount = function () {
        widget_focus_unsubscribe(this.focusToken);
    };
    WidgetTag.prototype.render = function () {
        var _this = this;
        if (!this.props.widget) {
            throw new ScrivitoError('Detected inappropriate placing of Scrivito.WidgetTag: ' +
                'It is intended to be used exclusively as top-level element inside a Widget component.');
        }
        if (!isEditingMode()) {
            return external_react_["createElement"](this.props.tag, this.forwardedProps());
        }
        return external_react_["createElement"](this.props.tag, Object(external_underscore_["extend"])(this.editingModeForwardedProps(), {
            ref: function (widgetDomElement) {
                return (_this.widgetRef = widgetDomElement);
            },
            className: this.className(),
            style: this.style(),
            onMouseOver: this.onMouseOver,
            onMouseOut: this.onMouseOut,
            children: [
                external_react_["createElement"](menu_marker, { key: "menuMarker", widget: this.props.widget, setDragState: this.setDragState, onMouseOver: this.lockFocus, onMouseOut: this.unlockFocus })
            ].concat(external_react_["Children"].toArray(this.props.children), [
                this.renderOptionMarker('top'),
                this.renderOptionMarker('bottom'),
            ]),
        }, this.dataProps()));
    };
    WidgetTag.prototype.forwardedProps = function () {
        return Object(external_underscore_["omit"])(this.props, 'tag', 'widget');
    };
    WidgetTag.prototype.editingModeForwardedProps = function () {
        return Object(external_underscore_["omit"])(this.forwardedProps(), 'className', 'style');
    };
    WidgetTag.prototype.setDragState = function (isDragging) {
        this.setState({ isDragging: isDragging });
    };
    WidgetTag.prototype.className = function () {
        if (this.hasVisibleFocus()) {
            if (this.props.className) {
                return this.props.className + " scrivito_active scrivito_entered";
            }
            return 'scrivito_active scrivito_entered';
        }
        return this.props.className;
    };
    WidgetTag.prototype.hasVisibleFocus = function () {
        return this.state.hasFocus && !this.state.isFocusFadedOut;
    };
    WidgetTag.prototype.dataProps = function () {
        var dataProps = {
            'data-scrivito-private-widget': 'true',
            'data-scrivito-private-dropzone': 'true',
        };
        if (this.isStructureMarker()) {
            dataProps['data-scrivito-private-structure-widget'] = 'true';
        }
        if (this.state.isDragging) {
            dataProps['data-scrivito-private-dropback'] = 'true';
        }
        return dataProps;
    };
    WidgetTag.prototype.style = function () {
        if (this.state.isDragging) {
            if (this.props.style) {
                return Object(external_underscore_["extend"])(this.props.style, { opacity: 0.5 });
            }
            return { opacity: 0.5 };
        }
        return this.props.style;
    };
    WidgetTag.prototype.isStructureMarker = function () {
        var registry = getWindowRegistry();
        var widget = this.props.widget;
        if (widget) {
            var appClass = registry.widgetClassFor(widget.objClass());
            var schema = realm_schema.forClass(appClass);
            if (schema) {
                return Object(external_underscore_["some"])(schema.attributes, function (definition, _) {
                    return definition[0] === 'widgetlist';
                });
            }
        }
        return false;
    };
    WidgetTag.prototype.onMouseOver = function (e) {
        e.stopPropagation();
        notifyFocus(this.focusToken);
    };
    WidgetTag.prototype.onMouseOut = function (e) {
        e.stopPropagation();
        notifyBlur(this.focusToken);
    };
    WidgetTag.prototype.onWidgetFocus = function () {
        var _this = this;
        this.setState({
            hasFocus: true,
            isFocusFadedOut: false,
        });
        if (this.fadeOutFocusTimeout) {
            window.clearTimeout(this.fadeOutFocusTimeout);
        }
        if (!this.isStructureMarker()) {
            this.fadeOutFocusTimeout = window.setTimeout(function () { return _this.fadeOutFocus(); }, 1000);
        }
    };
    WidgetTag.prototype.fadeOutFocus = function () {
        if (!this.state.isFocusFadedOut && !this.isFocusLocked) {
            this.setState({ isFocusFadedOut: true });
        }
    };
    WidgetTag.prototype.lockFocus = function () {
        this.isFocusLocked = true;
    };
    WidgetTag.prototype.unlockFocus = function () {
        this.isFocusLocked = false;
    };
    WidgetTag.prototype.onWidgetBlur = function () {
        this.setState({ hasFocus: false });
    };
    WidgetTag.prototype.renderOptionMarker = function (position) {
        return (external_react_["createElement"](option_marker, { key: "optionMarker-" + position, position: position, widget: this.props.widget, insertWidget: insertWidget, isAlwaysShown: shouldAlwaysShowOptionMarkers, onMouseOver: this.lockFocus, onMouseOut: this.unlockFocus }));
    };
    WidgetTag.prototype.registerDropZone = function () {
        if (isEditingMode() && this.widgetRef) {
            var _a = extractIdsFromContent(this.props.widget), objId = _a.objId, widgetId = _a.widgetId;
            var domNode = external_react_dom_["findDOMNode"](this.widgetRef);
            ui_adapter_uiAdapter.registerWidgetDropZoneInDom(domNode, objId, widgetId);
            this.dropZoneWidgetRef = this.widgetRef;
        }
    };
    WidgetTag.displayName = 'Scrivito.WidgetTag';
    WidgetTag.defaultProps = {
        tag: 'div',
    };
    return WidgetTag;
}(external_react_["Component"]));
function insertWidget(widget, position) {
    var _a = extractIdsFromContent(widget), objId = _a.objId, widgetId = _a.widgetId;
    ui_adapter_uiAdapter.insertWidget(objId, widgetId, position);
}
/* harmony default export */ var widget_tag = (connect(WidgetTagContextConsumer));

// CONCATENATED MODULE: ./scrivito_sdk/react/provide_component.js
function provide_component_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function provide_component_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { provide_component_typeof = function _typeof(obj) { return typeof obj; }; } else { provide_component_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return provide_component_typeof(obj); }

function provide_component_classCallCheck(instance, Constructor) { if (!provide_component_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function provide_component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function provide_component_createClass(Constructor, protoProps, staticProps) { if (protoProps) provide_component_defineProperties(Constructor.prototype, protoProps); if (staticProps) provide_component_defineProperties(Constructor, staticProps); return Constructor; }

function provide_component_possibleConstructorReturn(self, call) { if (call && (provide_component_typeof(call) === "object" || typeof call === "function")) { return call; } return provide_component_assertThisInitialized(self); }

function provide_component_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function provide_component_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { provide_component_get = Reflect.get; } else { provide_component_get = function _get(target, property, receiver) { var base = provide_component_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return provide_component_get(target, property, receiver || target); }

function provide_component_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = provide_component_getPrototypeOf(object); if (object === null) break; } return object; }

function provide_component_getPrototypeOf(o) { provide_component_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return provide_component_getPrototypeOf(o); }

function provide_component_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) provide_component_setPrototypeOf(subClass, superClass); }

function provide_component_setPrototypeOf(o, p) { provide_component_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return provide_component_setPrototypeOf(o, p); }







 // public API

function provideComponent(className, component) {
  assertValidComponent(component);

  if (isComponentMissingName(component)) {
    component.displayName = className;
  }

  var connectedComponent = connect(component);
  var wrappedComponent = ensureWidgetWrappedInWidgetTag(connectedComponent);
  registerComponentForAppClass(className, wrappedComponent);
}

function assertValidComponent(component) {
  if (typeof component !== 'function') {
    throw new ArgumentError('Scrivito.provideComponent expected a valid React component' + ", but received ".concat(prettyPrint(component)));
  }
}

function ensureWidgetWrappedInWidgetTag(component) {
  var wrappedComponent =
  /*#__PURE__*/
  function (_component) {
    provide_component_inherits(wrappedComponent, _component);

    function wrappedComponent() {
      provide_component_classCallCheck(this, wrappedComponent);

      return provide_component_possibleConstructorReturn(this, provide_component_getPrototypeOf(wrappedComponent).apply(this, arguments));
    }

    provide_component_createClass(wrappedComponent, [{
      key: "render",
      value: function render() {
        if (this.props.widget) {
          var value = provide_component_get(provide_component_getPrototypeOf(wrappedComponent.prototype), "render", this).call(this);

          if (getElementType(value) !== widget_tag) {
            return external_react_default.a.createElement(widget_tag, {
              children: value
            });
          }

          return value;
        }

        return provide_component_get(provide_component_getPrototypeOf(wrappedComponent.prototype), "render", this).call(this);
      }
    }]);

    return wrappedComponent;
  }(component);

  wrappedComponent.displayName = display_name_from_component(component);
  return wrappedComponent;
}

function isComponentMissingName(component) {
  // In some browsers functional components are missing the `name` property.
  // In some other browsers they have that property, but the value is meaningless: `_class`.
  return !component.displayName && (!component.name || component.name === '_class');
}
// CONCATENATED MODULE: ./scrivito_sdk/react/register_component.js


function registerComponent(componentId, component) {
  registerComponentForId(componentId, connect(component));
}
// CONCATENATED MODULE: ./scrivito_sdk/react/is_ie.ts
function isIE() {
    var userAgent = window.navigator.userAgent;
    return userAgent.indexOf('MSIE') >= 0 || userAgent.indexOf('Trident') >= 0;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/on_element_resize.js

function onElementResize(element, fn) {
  if (!element._scrivitoResizeListeners) {
    element._scrivitoResizeListeners = []; // The element has to have relative position, otherwise the object won't span the whole height.
    //
    // Unfortunately Firefox cannot compute styles of elements inside an iframe with `display:none`
    // and it reports such elements to have no styles even _after_ the iframe became visible. So we
    // cannot set position to `relative` only if it was previously `static`.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=548397.
    //
    // We always have to enforce the relative position, regardless of the previous position.

    element.style.position = 'relative';
    var object = createObject();
    object.resizeElement = element;
    element._scrivitoResizeTrigger = object;

    if (isIE()) {
      element.appendChild(object);
    }

    object.data = 'about:blank';

    if (!isIE()) {
      element.appendChild(object);
    }
  }

  element._scrivitoResizeListeners.push(fn);
}

function createObject() {
  var object = document.createElement('object');
  object.type = 'text/html';
  object.onload = onObjectLoad;
  object.style.display = 'block';
  object.style.position = 'absolute';
  object.style.top = 0;
  object.style.left = 0;
  object.style.height = '100%';
  object.style.width = '100%';
  object.style.overflow = 'hidden';
  object.style.pointerEvents = 'none';
  object.style.zIndex = -1;
  return object;
}

function onObjectLoad() {
  this.contentDocument.defaultView._scrivitoResizeTrigger = this.resizeElement;
  this.contentDocument.defaultView.addEventListener('resize', onResize);
}

function onResize(e) {
  var targetWindow = e.target || e.srcElement;
  var trigger = targetWindow._scrivitoResizeTrigger;

  trigger._scrivitoResizeListeners.forEach(function (fn) {
    return fn(trigger, e);
  });
}
// CONCATENATED MODULE: ./scrivito_sdk/react/show_custom_component.js










var show_custom_component_element;

function showCustomComponent(componentId, props) {
  var component = getComponentForId(componentId);
  assertComponentExists(component, componentId);
  var componentProps = getComponentProps(props);

  if (show_custom_component_element) {
    Object(external_react_dom_["render"])(external_react_default.a.createElement(component, componentProps), show_custom_component_element);
  } else {
    show_custom_component_element = replaceDOMWithComponent(getDocument(), component, componentProps);
    onElementResize(show_custom_component_element, function () {
      return ui_adapter_uiAdapter.notifyDocumentResize();
    });
    ui_adapter_uiAdapter.notifyDocumentResize();
  }
}

function assertComponentExists(component, componentId) {
  if (!component) {
    throw new ArgumentError("Component with ID \"".concat(componentId, "\" not found. ") + 'Please make sure you registered it using "Scrivito.registerComponent".');
  }
}

function replaceDOMWithComponent(doc, component, props) {
  var div = doc.createElement('div');
  doc.body.innerHTML = '';
  doc.body.appendChild(div);
  Object(external_react_dom_["render"])(external_react_default.a.createElement(component, props), div);
  return div;
}

function getComponentProps(props) {
  if (props.widgetId) {
    return getComponentPropsForWidget(props);
  }

  if (props.objId) {
    return getComponentPropsForObj(props);
  }
}

function getComponentPropsForWidget(props) {
  var basicObj = basic_obj.get(props.objId);
  var basicWidget = basicObj.widget(props.widgetId);
  var widget = wrap_in_app_class_wrapInAppClass(getWindowRegistry(), basicWidget);
  return {
    widget: widget
  };
}

function getComponentPropsForObj(props) {
  var basicObj = basic_obj.get(props.objId);
  var obj = wrap_in_app_class_wrapInAppClass(getWindowRegistry(), basicObj);
  return {
    obj: obj,
    page: obj
  };
}

function show_custom_component_reset() {
  show_custom_component_element = undefined;
}


// CONCATENATED MODULE: ./scrivito_sdk/app_support/check_if_image_loaded.ts
function checkIfImageLoaded(src) {
    var image = new Image();
    image.src = src;
    return image.complete;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/scale_down_binary.ts




var prerenderContext = new context_container();
var prerenderWidth = 1448;
function setPrerenderWidth(width) {
    prerenderWidth = width;
}
function usePrerenderScaling(fn) {
    return prerenderContext.runWith(true, fn);
}
function scaleDownBinary(binary) {
    if (binary.isRaw() || binary.isExplicitlyTransformed()) {
        return binary.url();
    }
    if (prerenderContext.current()) {
        return optimizeForPrerender(binary).url();
    }
    // if the prerendered image is already loaded, we can no longer switch
    // it for a matching image, since that would lead to visible image flicker.
    return prerenderUrlIfLoaded(binary) || matchingUrl(binary);
}
function optimizeForPrerender(binary) {
    return binary.optimizeFor({ width: prerenderWidth });
}
function matchingUrl(binary) {
    // The binary service never scales up, so we transform all images, regardless of their width.
    return binary
        .optimizeFor({ width: screen().width * devicePixelRatio() })
        .url();
}
function prerenderUrlIfLoaded(binary) {
    var url = runWithoutLoading(function () {
        return optimizeForPrerender(binary).urlWithoutPlaceholder();
    });
    if (url && isImageLoaded(url)) {
        return url;
    }
}
function runWithoutLoading(fn) {
    return capture(fn).result;
}
var loadCheckCache = {};
// for test purposes only
function resetLoadCheckCache() {
    loadCheckCache = {};
}
function isImageLoaded(src) {
    var complete = loadCheckCache[src];
    if (complete === undefined) {
        complete = checkIfImageLoaded(src);
        // if an image is not yet loaded, we switch to a different url,
        // effectively aborting the image load (see above).
        // therefore cache invalidation is not necessary.
        loadCheckCache[src] = complete;
    }
    return complete;
}

// EXTERNAL MODULE: external "tcomb-react"
var external_tcomb_react_ = __webpack_require__(8);

// CONCATENATED MODULE: ./scrivito_sdk/react/tcomb.ts



// CONCATENATED MODULE: ./scrivito_sdk/react/components/background_image_tag.tsx
var background_image_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var background_image_tag_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};










var ValidPlainBackground = external_tcomb_validation_.struct({
    image: external_tcomb_validation_.String,
    attachment: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    clip: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    color: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    origin: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    position: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    repeat: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    size: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
});
var ValidScrivitoBackground = external_tcomb_validation_.struct({
    image: external_tcomb_validation_.union([BinaryType, ObjType, external_tcomb_validation_.String, external_tcomb_validation_.Nil]),
    attachment: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['fixed', 'scroll'])),
    clip: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['border-box'])),
    color: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['transparent'])),
    origin: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['padding-box'])),
    position: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['center', 'left', 'right', 'top', 'bottom'])),
    repeat: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['no-repeat'])),
    size: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['contain', 'cover'])),
});
var ValidBackground = external_tcomb_validation_.union([
    ValidPlainBackground,
    ValidScrivitoBackground,
]);
ValidBackground.dispatch = function (background) {
    return isPlainBackground(background)
        ? ValidPlainBackground
        : ValidScrivitoBackground;
};
var ValidBackgroundList = external_tcomb_validation_.list(ValidBackground);
var ValidBackgroundOrBackgroundList = external_tcomb_validation_.union([
    ValidBackground,
    ValidBackgroundList,
]);
ValidBackgroundOrBackgroundList.dispatch = function (background) {
    return Object(external_underscore_["isArray"])(background) ? ValidBackgroundList : ValidBackground;
};
var background_image_tag_BackgroundImageTag = /** @class */ (function (_super) {
    background_image_tag_extends(BackgroundImageTag, _super);
    function BackgroundImageTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundImageTag.prototype.render = function () {
        var Tag = this.props.tag;
        var passThroughProps = Object(external_underscore_["omit"])(this.props, 'style', 'tag');
        var style = this.props.style;
        assertNoBackgroundRelatedProperties(style);
        return external_react_["createElement"](Tag, background_image_tag_assign({}, passThroughProps, { style: calculateCSSProperties(style) }));
    };
    BackgroundImageTag.displayName = 'Scrivito.BackgroundImageTag';
    BackgroundImageTag.propTypes = Object(external_tcomb_react_["propTypes"])({
        tag: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
        style: external_tcomb_validation_.maybe(external_tcomb_validation_.interface({
            background: external_tcomb_validation_.maybe(ValidBackgroundOrBackgroundList),
        }, { strict: false })),
    }, { strict: false });
    BackgroundImageTag.defaultProps = {
        tag: 'div',
        style: {},
    };
    return BackgroundImageTag;
}(external_react_["Component"]));
/* harmony default export */ var background_image_tag = (connect(background_image_tag_BackgroundImageTag));
function calculateCSSProperties(style) {
    return Object(external_underscore_["extend"])(Object(external_underscore_["omit"])(style, 'background'), calculateBackgroundCSSProperties(style.background));
}
function calculateBackgroundCSSProperties(background) {
    if (background === undefined) {
        return {};
    }
    if (Object(external_underscore_["isArray"])(background)) {
        return mergeBackgroundCSSProperties(background.map(cssPropertiesFor));
    }
    return cssPropertiesFor(background);
}
function mergeBackgroundCSSProperties(properties) {
    return {
        backgroundImage: mergeCSSProperty(properties, 'backgroundImage'),
        backgroundAttachment: mergeCSSProperty(properties, 'backgroundAttachment'),
        backgroundClip: mergeCSSProperty(properties, 'backgroundClip'),
        backgroundOrigin: mergeCSSProperty(properties, 'backgroundOrigin'),
        backgroundPosition: mergeCSSProperty(properties, 'backgroundPosition'),
        backgroundRepeat: mergeCSSProperty(properties, 'backgroundRepeat'),
        backgroundSize: mergeCSSProperty(properties, 'backgroundSize'),
        backgroundColor: lastBackgroundColor(properties),
    };
}
function mergeCSSProperty(properties, name) {
    return Object(external_underscore_["pluck"])(properties, name).join(', ');
}
function lastBackgroundColor(properties) {
    var lastBackground = Object(external_underscore_["last"])(properties);
    if (lastBackground) {
        return lastBackground.backgroundColor;
    }
}
function cssPropertiesFor(background) {
    if (isPlainBackground(background)) {
        return cssPropertiesForPlainBackground(background);
    }
    return cssPropertiesForScrivitoBackground(background);
}
function cssPropertiesForPlainBackground(background) {
    return {
        backgroundImage: background.image,
        backgroundAttachment: background.attachment || 'scroll',
        backgroundClip: background.clip || 'border-box',
        backgroundColor: background.color || 'transparent',
        backgroundOrigin: background.origin || 'padding-box',
        backgroundPosition: background.position || '0% 0%',
        backgroundRepeat: background.repeat || 'repeat',
        backgroundSize: background.size || 'auto',
    };
}
function cssPropertiesForScrivitoBackground(background) {
    var image = background.image;
    if (image instanceof models_binary) {
        return cssPropertiesForBinary(image, background);
    }
    if (image instanceof getWindowContext().Obj) {
        var basicObj = unwrapAppClass(image);
        if (isBinaryBasicObj(basicObj)) {
            var blob = basicObj.get('blob', ['binary']);
            if (blob) {
                return cssPropertiesForBinary(blob, background);
            }
        }
    }
    return cssPropertiesForPlainBackground({ image: 'none' });
}
function cssPropertiesForBinary(binary, background) {
    return {
        backgroundImage: "url(" + scaleDownBinary(binary) + ")",
        backgroundAttachment: background.attachment || 'scroll',
        backgroundClip: background.clip || 'border-box',
        backgroundColor: background.color || 'transparent',
        backgroundOrigin: background.origin || 'padding-box',
        backgroundPosition: background.position || 'center center',
        backgroundRepeat: background.repeat || 'no-repeat',
        backgroundSize: background.size || 'cover',
    };
}
function isPlainBackground(background) {
    return Object(external_underscore_["isString"])(background.image);
}
function assertNoBackgroundRelatedProperties(style) {
    if (Object(external_underscore_["isObject"])(style)) {
        for (var _i = 0, _a = Object.keys(style); _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.match(/^background.+/)) {
                throw new ArgumentError("Invalid background related CSS property \"" + key + "\". " +
                    'Expected property "background" alongside with any non-background properties' +
                    'For further details, see https://www.scrivito.com/js-sdk/background-image-tag');
            }
        }
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/current_page_state.ts







var NOT_FOUND = {
    type: 'not found',
    page: null,
};
var NOT_RESPONSIBLE = {
    type: 'not responsible',
};
function getCurrentPageState() {
    var state = loadableWithDefault(undefined, function () { return loadablePage().get(); });
    if (state && isScrivitoPage(state)) {
        var basicObj = basic_obj.get(state.objId);
        if (!basicObj) {
            // Not found (page disappeared meanwhile)
            return NOT_FOUND;
        }
    }
    return state;
}
function isScrivitoPage(state) {
    return state.type === 'page';
}
function isNotFound(state) {
    return state.type === 'not found';
}
function loadablePage() {
    return new loadable_data({
        state: appState.subState('currentPage'),
        invalidation: function () { return getHistoryChangesCount(); },
        loader: recognizePage,
    });
}
function recognizePage() {
    return load(function () { return recognizeLocation(); }).then(stateForRouteAndLocation);
}
function recognizeLocation() {
    var location = get();
    var route = recognize(location);
    return {
        route: route,
        location: location,
    };
}
function stateForRouteAndLocation(_a) {
    var route = _a.route, location = _a.location;
    var path = route.path;
    if (path === null) {
        return NOT_RESPONSIBLE;
    }
    var obj = route.obj;
    if (!obj) {
        return NOT_FOUND;
    }
    if (!isBinaryBasicObj(obj)) {
        return {
            type: 'page',
            objId: obj.id(),
            queryParameters: route.queryParameters,
            location: location,
        };
    }
    var binaryPromise = load(function () { return recognizeBinary(obj); });
    binaryPromise.then(changeLocationIfBinary);
    return binaryPromise;
}
function recognizeBinary(obj) {
    var blob = obj.get('blob', ['binary']);
    var url = blob ? blob.url() : null;
    if (!url) {
        return NOT_FOUND;
    }
    return {
        type: 'binary',
        objId: obj.id(),
        url: url,
        page: false,
    };
}
function changeLocationIfBinary(current) {
    if (current.type === 'binary') {
        changeLocation(current.url);
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/current_page.ts






var FALLBACK_PARAMS = Object.freeze({});
var currentPageContextContainer = new context_container();
function currentPage() {
    assertNotUsingInMemoryTenant('Scrivito.currentPage');
    var pageAndParams = getPageAndParams();
    if (!pageAndParams.page) {
        return null;
    }
    return wrap_in_app_class_wrapInAppClass(getWindowRegistry(), pageAndParams.page);
}
function currentPageParams() {
    assertNotUsingInMemoryTenant('Scrivito.currentPageParams');
    var pageAndParams = getPageAndParams();
    return pageAndParams.queryParameters || FALLBACK_PARAMS;
}
function withCurrentPage(page, fn) {
    return currentPageContextContainer.runWith({ page: page, queryParameters: FALLBACK_PARAMS }, fn);
}
function currentPageIsNotFound() {
    var pageAndParams = getPageAndParams();
    return pageAndParams.page === null;
}
function getPageAndParams() {
    return (currentPageContextContainer.current() ||
        getPageAndParamsFromAppState() ||
        {});
}
function getPageAndParamsFromAppState() {
    var state = getCurrentPageState();
    if (state === undefined) {
        return undefined;
    }
    if (!isScrivitoPage(state)) {
        return { page: state.page };
    }
    var page = basic_obj.get(state.objId);
    return {
        page: page,
        queryParameters: state.queryParameters,
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/is_modifier_click.js
// IE11 is the only browser triggering a click event on middle click, so we must take care of it.
// Chrome, FF, Edge handle the middle click without triggering an event.
var IE11_MIDDLE_MOUSE_BUTTON = 2;
function isModifierClick(event) {
  return event.ctrlKey || event.metaKey || event.shiftKey || event.which === IE11_MIDDLE_MOUSE_BUTTON;
}
// CONCATENATED MODULE: ./scrivito_sdk/app_support/basic_url_for.ts




function basicUrlWithOriginFor(target, options) {
    if (options === void 0) { options = {}; }
    assertValidTarget(target);
    return urlFor(target, {
        origin: options.origin || currentOrigin(),
        query: options.query,
        hash: options.hash,
    });
}
function basicUrlFor(target) {
    assertValidTarget(target);
    return urlFor(target);
}
function urlFor(target, options) {
    if (target instanceof basic_link) {
        return urlForLink(target, options);
    }
    if (target instanceof models_binary) {
        return urlForBinary(target);
    }
    return urlForObj(target, options);
}
function urlForObj(obj, options) {
    if (isBinaryBasicObj(obj)) {
        return urlForBinaryObj(obj, options);
    }
    return urlForNonBinaryObj(obj, options);
}
function assertValidTarget(target) {
    if (!target) {
        throw new ArgumentError('Missing target.');
    }
    if (target instanceof basic_link) {
        return;
    }
    if (target instanceof basic_obj) {
        return;
    }
    if (target instanceof models_binary) {
        return;
    }
    throw new ArgumentError('Target is invalid. Valid targets are instances of Obj or Link.');
}
function urlForBinary(binary) {
    return binary.url();
}
function urlForBinaryObj(obj, options) {
    var blob = obj.get('blob', ['binary']);
    if (blob) {
        return urlForBinary(blob);
    }
    return urlForNonBinaryObj(obj, options);
}
function urlForLink(link, options) {
    if (options === void 0) { options = {}; }
    if (link.isExternal()) {
        return link.url();
    }
    var obj = link.obj();
    if (!obj) {
        throw new ArgumentError('Missing link target.');
    }
    var origin = options.origin, query = options.query, hash = options.hash;
    return urlForObj(obj, {
        origin: origin,
        query: typeof query === 'string' ? query : link.query() || undefined,
        hash: typeof hash === 'string' ? hash : link.hash() || undefined,
    });
}
function urlForNonBinaryObj(obj, options) {
    if (options === void 0) { options = {}; }
    return generateUrl({
        obj: obj,
        origin: options.origin,
        queryParameters: options.query ? parseQuery(options.query) : undefined,
        hash: options.hash,
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/react/components/link_tag.tsx
var link_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var link_tag_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};











// public API
var link_tag_LinkTag = /** @class */ (function (_super) {
    link_tag_extends(LinkTag, _super);
    function LinkTag(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    LinkTag.prototype.render = function () {
        return external_react_["createElement"]("a", link_tag_assign({}, this.linkProps()), this.props.children);
    };
    LinkTag.prototype.linkProps = function () {
        var linkProps = Object(external_underscore_["omit"])(this.props, 'to');
        linkProps.href = this.href();
        linkProps.onClick = this.onClick;
        linkProps.target = this.target();
        return linkProps;
    };
    LinkTag.prototype.href = function () {
        return this.url() || '#';
    };
    LinkTag.prototype.onClick = function (e) {
        e.preventDefault();
        var to = this.props.to;
        if (!to) {
            return;
        }
        if (typeof to === 'string') {
            openInNewWindow(to);
            return;
        }
        var url = this.url();
        if (!url) {
            return;
        }
        var target = this.target();
        if (target === '_blank' || isModifierClick(e)) {
            this.openLinkInNewWindow(url);
        }
        else if (target) {
            openLocation(url, target);
        }
        else {
            navigateTo(to);
        }
    };
    LinkTag.prototype.openLinkInNewWindow = function (url) {
        if (ui_adapter_uiAdapter) {
            ui_adapter_uiAdapter.openInNewWindow(url);
        }
        else {
            openInNewWindow(url);
        }
    };
    LinkTag.prototype.target = function () {
        if (this.props.target) {
            return this.props.target;
        }
        var to = this.props.to;
        if (to) {
            var basicTo = unwrapAppClass(to);
            if (basicTo instanceof basic_link) {
                return basicTo.target();
            }
        }
    };
    LinkTag.prototype.url = function () {
        var to = this.props.to;
        if (!to) {
            return;
        }
        if (typeof to === 'string') {
            return to;
        }
        var basicTo = unwrapAppClass(to);
        if (basicTo instanceof basic_obj || basicTo instanceof basic_link) {
            return basicUrlFor(basicTo);
        }
    };
    LinkTag.displayName = 'Scrivito.LinkTag';
    LinkTag.propTypes = Object(external_tcomb_react_["propTypes"])({
        to: external_tcomb_validation_.maybe(external_tcomb_validation_.union([ObjType, LinkType, external_tcomb_validation_.String])),
    }, { strict: false });
    return LinkTag;
}(external_react_["Component"]));
/* harmony default export */ var link_tag = (connect(link_tag_LinkTag));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/child_list_tag/child_item.jsx





function ChildItem(_ref) {
  var basicObj = _ref.child,
      renderChild = _ref.renderChild;
  var appObj = getWindowContext().appModelAccessor.wrapInAppClass(basicObj);

  if (renderChild) {
    return renderChild(appObj);
  }

  return external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_tag, {
    to: appObj
  }, basicObj.get('title', 'string')));
}

ChildItem.displayName = 'Scrivito.ChildListTag.ChildItem';
/* harmony default export */ var child_item = (connect(ChildItem));
// CONCATENATED MODULE: ./scrivito_sdk/react/components/child_list_tag/menu_marker.jsx
function menu_marker_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function menu_marker_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { menu_marker_typeof = function _typeof(obj) { return typeof obj; }; } else { menu_marker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return menu_marker_typeof(obj); }

function menu_marker_classCallCheck(instance, Constructor) { if (!menu_marker_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function menu_marker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function menu_marker_createClass(Constructor, protoProps, staticProps) { if (protoProps) menu_marker_defineProperties(Constructor.prototype, protoProps); if (staticProps) menu_marker_defineProperties(Constructor, staticProps); return Constructor; }

function menu_marker_possibleConstructorReturn(self, call) { if (call && (menu_marker_typeof(call) === "object" || typeof call === "function")) { return call; } return menu_marker_assertThisInitialized(self); }

function menu_marker_getPrototypeOf(o) { menu_marker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return menu_marker_getPrototypeOf(o); }

function menu_marker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) menu_marker_setPrototypeOf(subClass, superClass); }

function menu_marker_setPrototypeOf(o, p) { menu_marker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return menu_marker_setPrototypeOf(o, p); }

function menu_marker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var child_list_tag_menu_marker_MenuMarker =
/*#__PURE__*/
function (_React$Component) {
  menu_marker_inherits(MenuMarker, _React$Component);

  function MenuMarker(props) {
    var _this;

    menu_marker_classCallCheck(this, MenuMarker);

    _this = menu_marker_possibleConstructorReturn(this, menu_marker_getPrototypeOf(MenuMarker).call(this, props));
    _this._onClick = _this._onClick.bind(menu_marker_assertThisInitialized(menu_marker_assertThisInitialized(_this)));
    return _this;
  }

  menu_marker_createClass(MenuMarker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("span", {
        ref: function ref(menuMarker) {
          return _this2._menuMarker = menuMarker;
        },
        className: "scrivito_editing_marker",
        onClick: this._onClick
      }, external_react_default.a.createElement("i", {
        className: "scrivito_icon"
      }), external_react_default.a.createElement("span", {
        className: "scrivito_editing_marker_title"
      }, this.props.parent.objClass()));
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (this._menuMarker) {
        ui_adapter_uiAdapter.showChildListMenu(Object(external_react_dom_["findDOMNode"])(this._menuMarker), this.props.parent.id());
      }
    }
  }]);

  return MenuMarker;
}(external_react_default.a.Component);

child_list_tag_menu_marker_MenuMarker.displayName = 'Scrivito.ChildListTag.MenuMarker';
/* harmony default export */ var child_list_tag_menu_marker = (connect(child_list_tag_menu_marker_MenuMarker));
// CONCATENATED MODULE: ./scrivito_sdk/react/components/child_list_tag.jsx
function child_list_tag_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function child_list_tag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { child_list_tag_typeof = function _typeof(obj) { return typeof obj; }; } else { child_list_tag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return child_list_tag_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function child_list_tag_classCallCheck(instance, Constructor) { if (!child_list_tag_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function child_list_tag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function child_list_tag_createClass(Constructor, protoProps, staticProps) { if (protoProps) child_list_tag_defineProperties(Constructor.prototype, protoProps); if (staticProps) child_list_tag_defineProperties(Constructor, staticProps); return Constructor; }

function child_list_tag_possibleConstructorReturn(self, call) { if (call && (child_list_tag_typeof(call) === "object" || typeof call === "function")) { return call; } return child_list_tag_assertThisInitialized(self); }

function child_list_tag_getPrototypeOf(o) { child_list_tag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return child_list_tag_getPrototypeOf(o); }

function child_list_tag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) child_list_tag_setPrototypeOf(subClass, superClass); }

function child_list_tag_setPrototypeOf(o, p) { child_list_tag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return child_list_tag_setPrototypeOf(o, p); }

function child_list_tag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var child_list_tag_ChildListTag =
/*#__PURE__*/
function (_React$Component) {
  child_list_tag_inherits(ChildListTag, _React$Component);

  function ChildListTag(props) {
    var _this;

    child_list_tag_classCallCheck(this, ChildListTag);

    _this = child_list_tag_possibleConstructorReturn(this, child_list_tag_getPrototypeOf(ChildListTag).call(this, props));
    _this.state = {
      hasFocus: false
    };
    _this._onMouseOver = _this._onMouseOver.bind(child_list_tag_assertThisInitialized(child_list_tag_assertThisInitialized(_this)));
    _this._onMouseOut = _this._onMouseOut.bind(child_list_tag_assertThisInitialized(child_list_tag_assertThisInitialized(_this)));
    return _this;
  }

  child_list_tag_createClass(ChildListTag, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var parent = this.props.parent || currentPage();

      if (!parent) {
        return null;
      }

      parent = parent._scrivitoPrivateContent;
      var props = Object(external_underscore_["omit"])(this.props, 'parent', 'tag', 'renderChild');
      var menuMarker;

      if (isEditingMode()) {
        props.onMouseOver = this._onMouseOver;
        props.onMouseOut = this._onMouseOut;
        props['data-scrivito-private-child-list-path'] = true;

        if (this.state.hasFocus) {
          props.className = "scrivito_active scrivito_entered ".concat(props.className);
        }

        menuMarker = external_react_default.a.createElement(child_list_tag_menu_marker, {
          key: "menuMarker",
          parent: parent
        });
      }

      return external_react_default.a.createElement(this.props.tag, props, [menuMarker].concat(_toConsumableArray(parent.orderedChildren().map(function (child) {
        return external_react_default.a.createElement(child_item, {
          key: child.id(),
          child: child,
          renderChild: _this2.props.renderChild
        });
      }))));
    }
  }, {
    key: "_onMouseOver",
    value: function _onMouseOver(e) {
      e.stopPropagation();
      this.setState({
        hasFocus: true
      });
    }
  }, {
    key: "_onMouseOut",
    value: function _onMouseOut(e) {
      e.stopPropagation();
      this.setState({
        hasFocus: false
      });
    }
  }]);

  return ChildListTag;
}(external_react_default.a.Component);

child_list_tag_ChildListTag.displayName = 'Scrivito.ChildListTag';
child_list_tag_ChildListTag.defaultProps = {
  tag: 'ul'
};
/* harmony default export */ var child_list_tag = (connect(child_list_tag_ChildListTag));
// CONCATENATED MODULE: ./scrivito_sdk/app_support/replace_internal_links.ts




var INTERNAL_LINK_URL_PATTERN = /\bobjid:[a-f0-9]{16}\b[^"']*/g;
function replaceInternalLinks(htmlString) {
    return htmlString.replace(INTERNAL_LINK_URL_PATTERN, function (internalLinkUrl) {
        return uriForInternalLinkUrl(internalLinkUrl).toString();
    });
}
function uriForInternalLinkUrl(internalLinkUrl) {
    var objId = internalLinkUrl.slice(6, 22);
    var obj = basic_obj.get(objId);
    var uri;
    var extendUriWithQueryAndHash;
    if (obj) {
        uri = external_urijs_(basicUrlFor(obj));
        extendUriWithQueryAndHash = isLocalUri(uri);
    }
    else {
        uri = generatePath({ path: objId });
        extendUriWithQueryAndHash = true;
    }
    if (extendUriWithQueryAndHash) {
        var originalUri = external_urijs_(internalLinkUrl);
        uri.query(originalUri.query()).hash(originalUri.hash());
    }
    return uri;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/find_click_target.ts



function findClickTarget(e) {
    var innermostNode = e.target;
    var outermostNode = e.currentTarget;
    var isModifier = isModifierClick(e);
    return findLinkTarget(innermostNode, outermostNode, isModifier);
}
function findLinkTarget(currentNode, outermostNode, isModifier) {
    if (currentNode === outermostNode) {
        return null;
    }
    if (isHTMLAnchorElement(currentNode)) {
        var url = currentNode.href;
        var uri = external_urijs_(url);
        if (!isLocalUri(uri)) {
            return null;
        }
        if (isModifier || currentNode.getAttribute('target') === '_blank') {
            return { openInNewWindow: url };
        }
        return { openInCurrentWindow: uri.resource() };
    }
    if (!currentNode.parentNode) {
        return null;
    }
    return findLinkTarget(currentNode.parentNode, outermostNode, isModifier);
}
function isHTMLAnchorElement(node) {
    return node.nodeName === 'A';
}

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/widget_content.tsx
var widget_content_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var widget_content_WidgetContent = /** @class */ (function (_super) {
    widget_content_extends(WidgetContent, _super);
    function WidgetContent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasError: false,
        };
        return _this;
    }
    WidgetContent.prototype.componentDidCatch = function (e) {
        throwNextTick(e);
        this.setState({ hasError: true });
    };
    WidgetContent.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.widget.equals(nextProps.widget);
    };
    WidgetContent.prototype.render = function () {
        if (this.state.hasError) {
            if (isEditingMode()) {
                return withWidgetContext(this.props.widget, external_react_["createElement"](widget_tag, null,
                    external_react_["createElement"]("div", { className: "content_error" }, "Widget could not be rendered due to application error.")));
            }
            return withWidgetContext(this.props.widget, external_react_["createElement"](widget_tag, null));
        }
        return (external_react_["createElement"](widget_content_AppWidgetWrapper, { widget: this.props.widget, widgetProps: this.props.widgetProps }));
    };
    WidgetContent.displayName = 'Scrivito.ContentTag.WidgetContent';
    return WidgetContent;
}(external_react_["Component"]));
var widget_content_AppWidgetWrapper = /** @class */ (function (_super) {
    widget_content_extends(AppWidgetWrapper, _super);
    function AppWidgetWrapper(props) {
        return _super.call(this, props) || this;
    }
    AppWidgetWrapper.prototype.render = function () {
        return withWidgetContext(this.props.widget, external_react_["createElement"](this.getAppWidgetComponent(), this.getAppWidgetProps()));
    };
    AppWidgetWrapper.prototype.getAppWidgetComponent = function () {
        var widgetClass = this.props.widget.objClass();
        var widgetComponent = getComponentForAppClass(widgetClass);
        if (!widgetComponent) {
            throw new ArgumentError("No component registered for widget class \"" + widgetClass + "\"");
        }
        return widgetComponent;
    };
    AppWidgetWrapper.prototype.getAppWidgetProps = function () {
        var appWidget = wrap_in_app_class_wrapInAppClass(getWindowRegistry(), this.props.widget);
        var appWidgetProps = { widget: appWidget };
        var widgetProps = this.props.widgetProps;
        if (widgetProps && widgetProps.hasOwnProperty('widget')) {
            throwNextTick(new ArgumentError('The prop "widget" is not allowed inside "widgetProps"'));
            widgetProps = Object(external_underscore_["omit"])(widgetProps, 'widget');
        }
        Object(external_underscore_["extend"])(appWidgetProps, widgetProps);
        return appWidgetProps;
    };
    return AppWidgetWrapper;
}(external_react_["Component"]));
function withWidgetContext(widget, reactElement) {
    return external_react_["createElement"](WidgetTagContext.Provider, { value: widget, children: reactElement });
}
/* harmony default export */ var widget_content = (connect(widget_content_WidgetContent));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/widgetlist_placeholder.jsx
function widgetlist_placeholder_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function widgetlist_placeholder_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { widgetlist_placeholder_typeof = function _typeof(obj) { return typeof obj; }; } else { widgetlist_placeholder_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return widgetlist_placeholder_typeof(obj); }

function widgetlist_placeholder_classCallCheck(instance, Constructor) { if (!widgetlist_placeholder_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function widgetlist_placeholder_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function widgetlist_placeholder_createClass(Constructor, protoProps, staticProps) { if (protoProps) widgetlist_placeholder_defineProperties(Constructor.prototype, protoProps); if (staticProps) widgetlist_placeholder_defineProperties(Constructor, staticProps); return Constructor; }

function widgetlist_placeholder_possibleConstructorReturn(self, call) { if (call && (widgetlist_placeholder_typeof(call) === "object" || typeof call === "function")) { return call; } return widgetlist_placeholder_assertThisInitialized(self); }

function widgetlist_placeholder_getPrototypeOf(o) { widgetlist_placeholder_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return widgetlist_placeholder_getPrototypeOf(o); }

function widgetlist_placeholder_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) widgetlist_placeholder_setPrototypeOf(subClass, superClass); }

function widgetlist_placeholder_setPrototypeOf(o, p) { widgetlist_placeholder_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return widgetlist_placeholder_setPrototypeOf(o, p); }

function widgetlist_placeholder_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var widgetlist_placeholder_WidgetlistPlaceholder =
/*#__PURE__*/
function (_React$Component) {
  widgetlist_placeholder_inherits(WidgetlistPlaceholder, _React$Component);

  function WidgetlistPlaceholder(props) {
    var _this;

    widgetlist_placeholder_classCallCheck(this, WidgetlistPlaceholder);

    _this = widgetlist_placeholder_possibleConstructorReturn(this, widgetlist_placeholder_getPrototypeOf(WidgetlistPlaceholder).call(this, props));
    _this._onClick = _this._onClick.bind(widgetlist_placeholder_assertThisInitialized(widgetlist_placeholder_assertThisInitialized(_this)));
    return _this;
  }

  widgetlist_placeholder_createClass(WidgetlistPlaceholder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._widgetPlaceholder) {
        var domNode = Object(external_react_dom_["findDOMNode"])(this._widgetPlaceholder);

        var _extractIdsFromConten = extractIdsFromContent(this.props.field.container()),
            objId = _extractIdsFromConten.objId,
            widgetId = _extractIdsFromConten.widgetId;

        var attributeName = this.props.field.name();
        ui_adapter_uiAdapter.registerEmptyWidgetlistDropZoneInDom({
          domNode: domNode,
          objId: objId,
          widgetId: widgetId,
          attributeName: attributeName
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", {
        ref: function ref(widgetPlaceholder) {
          return _this2._widgetPlaceholder = widgetPlaceholder;
        },
        className: "scrivito_empty_widget_field",
        "data-scrivito-private-dropzone": "true",
        onClick: this._onClick
      });
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (this._widgetPlaceholder) {
        var attributeName = this.props.field.name();

        var _extractIdsFromConten2 = extractIdsFromContent(this.props.field.container()),
            objId = _extractIdsFromConten2.objId,
            widgetId = _extractIdsFromConten2.widgetId;

        ui_adapter_uiAdapter.showWidgetlistMenu(Object(external_react_dom_["findDOMNode"])(this._widgetPlaceholder), {
          objId: objId,
          widgetId: widgetId,
          attributeName: attributeName,
          mousePosition: {
            x: e.pageX,
            y: e.pageY
          }
        });
      }
    }
  }]);

  return WidgetlistPlaceholder;
}(external_react_default.a.Component);

widgetlist_placeholder_WidgetlistPlaceholder.displayName = 'Scrivito.ContentTag.WidgetlistPlaceholder';
/* harmony default export */ var widgetlist_placeholder = (connect(widgetlist_placeholder_WidgetlistPlaceholder));
// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/attribute_value.jsx
function attribute_value_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function attribute_value_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { attribute_value_typeof = function _typeof(obj) { return typeof obj; }; } else { attribute_value_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return attribute_value_typeof(obj); }

function attribute_value_classCallCheck(instance, Constructor) { if (!attribute_value_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function attribute_value_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function attribute_value_createClass(Constructor, protoProps, staticProps) { if (protoProps) attribute_value_defineProperties(Constructor.prototype, protoProps); if (staticProps) attribute_value_defineProperties(Constructor, staticProps); return Constructor; }

function attribute_value_possibleConstructorReturn(self, call) { if (call && (attribute_value_typeof(call) === "object" || typeof call === "function")) { return call; } return attribute_value_assertThisInitialized(self); }

function attribute_value_getPrototypeOf(o) { attribute_value_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return attribute_value_getPrototypeOf(o); }

function attribute_value_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) attribute_value_setPrototypeOf(subClass, superClass); }

function attribute_value_setPrototypeOf(o, p) { attribute_value_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return attribute_value_setPrototypeOf(o, p); }

function attribute_value_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var attribute_value_AttributeValue =
/*#__PURE__*/
function (_React$Component) {
  attribute_value_inherits(AttributeValue, _React$Component);

  function AttributeValue(props) {
    var _this;

    attribute_value_classCallCheck(this, AttributeValue);

    _this = attribute_value_possibleConstructorReturn(this, attribute_value_getPrototypeOf(AttributeValue).call(this, props));
    _this._onClick = _this._onClick.bind(attribute_value_assertThisInitialized(attribute_value_assertThisInitialized(_this)));
    return _this;
  }

  attribute_value_createClass(AttributeValue, [{
    key: "render",
    value: function render() {
      switch (this.props.field.type()) {
        case 'html':
          return this._renderHtml();

        case 'float':
        case 'integer':
        case 'string':
          return this._renderAsString();

        case 'widgetlist':
          return this._renderWidgetlist();

        default:
          return this._renderContent({
            children: this.props.children
          });
      }
    }
  }, {
    key: "_renderHtml",
    value: function _renderHtml() {
      if (this.props.children) {
        return this._renderContent({
          children: this.props.children
        });
      }

      var html = replaceInternalLinks(this._attributeValue());
      var props = {
        dangerouslySetInnerHTML: {
          __html: html
        },
        onClick: this._onClick
      };
      return this._renderContent({
        props: props
      });
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      var linkTarget = findClickTarget(e);

      if (!linkTarget) {
        return;
      }

      if (linkTarget.openInNewWindow) {
        this._openInNewWindow(e, linkTarget);
      } else {
        this._openInCurrentWindow(e, linkTarget);
      }
    }
  }, {
    key: "_openInNewWindow",
    value: function _openInNewWindow(e, _ref) {
      var url = _ref.openInNewWindow;

      if (ui_adapter_uiAdapter) {
        e.preventDefault();
        e.stopPropagation();
        ui_adapter_uiAdapter.openInNewWindow(url);
      }
    }
  }, {
    key: "_openInCurrentWindow",
    value: function _openInCurrentWindow(e, _ref2) {
      var resource = _ref2.openInCurrentWindow;
      e.preventDefault();
      e.stopPropagation();
      browser_location_push(resource);
    }
  }, {
    key: "_renderAsString",
    value: function _renderAsString() {
      var children = this.props.children || this._attributeValue();

      return this._renderContent({
        children: children
      });
    }
  }, {
    key: "_renderWidgetlist",
    value: function _renderWidgetlist() {
      var _this2 = this;

      var children;

      var widgets = this._attributeValue();

      if (widgets.length) {
        children = widgets.map(function (widget) {
          return external_react_default.a.createElement(widget_content, {
            key: widget.id(),
            widget: widget,
            widgetProps: _this2.props.widgetProps
          });
        });
      } else if (isEditingMode()) {
        children = external_react_default.a.createElement(widgetlist_placeholder, {
          field: this.props.field
        });
      }

      return this._renderContent({
        children: children
      });
    }
  }, {
    key: "_renderContent",
    value: function _renderContent(_ref3) {
      var props = _ref3.props,
          children = _ref3.children;
      var contentProps = Object(external_underscore_["extend"])({}, this.props.customProps, props, this._editingProps());
      return external_react_default.a.createElement(this.props.tag, contentProps, children);
    }
  }, {
    key: "_editingProps",
    value: function _editingProps() {
      if (this.props.onClick) {
        return {
          onClick: this.props.onClick,
          'data-scrivito-is-clickable': true
        };
      }

      return {};
    }
  }, {
    key: "_attributeValue",
    value: function _attributeValue() {
      return this.props.field.get();
    }
  }]);

  return AttributeValue;
}(external_react_default.a.Component);

attribute_value_AttributeValue.displayName = 'Scrivito.ContentTag.AttributeValue';
/* harmony default export */ var attribute_value = (connect(attribute_value_AttributeValue));
// CONCATENATED MODULE: ./scrivito_sdk/app_support/editor_event.ts
var EditorEvent = /** @class */ (function () {
    function EditorEvent(internalEvent) {
        this._internalEvent = internalEvent;
    }
    EditorEvent.prototype.preventDefault = function () {
        this._internalEvent.preventDefault();
    };
    EditorEvent.prototype.stopPropagation = function () {
        this._internalEvent.stopPropagation();
    };
    return EditorEvent;
}());
/* harmony default export */ var editor_event = (EditorEvent);

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/editor.tsx
var editor_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var editor_assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};










var editor_Editor = /** @class */ (function (_super) {
    editor_extends(Editor, _super);
    function Editor(props) {
        var _this = _super.call(this, props) || this;
        _this._field = _this.props.field;
        _this.state = { domMode: 'None' };
        _this._isPendingUpdate = false;
        _this._getContent = _this._getContent.bind(_this);
        _this._setContent = _this._setContent.bind(_this);
        _this._setDomMode = _this._setDomMode.bind(_this);
        var editorClass = _this.props.editorClass;
        if (editorClass) {
            var controller = {
                getContent: _this._getContent,
                setContent: _this._setContent,
                setDomMode: _this._setDomMode,
            };
            _this._editor = new editorClass({ controller: controller });
        }
        return _this;
    }
    Editor.prototype.componentDidMount = function () {
        var _this = this;
        this._editorWillBeActivated();
        var prevValue = this._getContent();
        this._unsubscribe = subscribe(function () {
            var nextValue = _this._getContent();
            if (equals(prevValue, nextValue)) {
                return;
            }
            prevValue = nextValue;
            if (_this._isPendingUpdate && _this._pendingUpdateValue === nextValue) {
                _this._isPendingUpdate = false;
                _this._pendingUpdateValue = undefined;
                return;
            }
            _this._contentDidChange();
        });
        if (this.state.domMode === 'Replace') {
            this._editorDomWasMounted();
        }
    };
    Editor.prototype.componentDidUpdate = function (_prevProps, prevState) {
        var prevDomMode = prevState.domMode;
        var curDomMode = this.state.domMode;
        if (prevDomMode !== curDomMode) {
            if (curDomMode === 'Replace') {
                this._editorDomWasMounted();
            }
            else {
                this._editorDomWasUnmounted();
            }
        }
    };
    Editor.prototype.componentWillUnmount = function () {
        this._editorWillBeDeactivated();
        if (this._unsubscribe) {
            this._unsubscribe();
        }
    };
    Editor.prototype.render = function () {
        var _this = this;
        if (this.state.domMode === 'Replace') {
            return external_react_["createElement"](this.props.tag, editor_assign({}, Object(external_underscore_["omit"])(this.props.customProps, 'children'), { ref: function (editorComponent) {
                    _this._editorComponent = editorComponent;
                } }));
        }
        var onClick;
        var editor = this._editor;
        if (editor && editor.onClick) {
            onClick = function (e) {
                return editor.onClick(new editor_event(e));
            };
        }
        var props = {
            ref: function (editorComponent) {
                _this._editorComponent = editorComponent;
            },
            children: this.props.children,
            widgetProps: this.props.widgetProps,
            customProps: this.props.customProps,
            field: this.props.field,
            key: this.state.domMode,
            tag: this.props.tag,
            onClick: onClick,
        };
        return external_react_["createElement"](attribute_value, props);
    };
    Editor.prototype._contentDidChange = function () {
        if (this._editor) {
            this._editor.contentDidChange();
        }
    };
    Editor.prototype._editorWillBeActivated = function () {
        if (this._editor) {
            this._editor.editorWillBeActivated();
        }
    };
    Editor.prototype._editorWillBeDeactivated = function () {
        if (this._editor) {
            this._editor.editorWillBeDeactivated();
        }
    };
    Editor.prototype._editorDomWasMounted = function () {
        if (this._editor && this._editorComponent) {
            var element = Object(external_react_dom_["findDOMNode"])(this._editorComponent);
            this._editor.editorDomWasMounted(element);
        }
    };
    Editor.prototype._editorDomWasUnmounted = function () {
        if (this._editor) {
            this._editor.editorDomWasUnmounted();
        }
    };
    Editor.prototype._setDomMode = function (domMode) {
        this.setState({ domMode: domMode });
    };
    Editor.prototype._getContent = function () {
        var _this = this;
        return capture(function () {
            var value = _this._field.get();
            if (_this._field.type() === 'html') {
                var htmlValue = value;
                value = replaceInternalLinks(htmlValue);
            }
            return value;
        }).result;
    };
    Editor.prototype._setContent = function (val) {
        this._isPendingUpdate = true;
        this._pendingUpdateValue = val;
        this._field.update(val);
    };
    Editor.displayName = 'Scrivito.ContentTag.Editor';
    return Editor;
}(external_react_["Component"]));
/* harmony default export */ var content_tag_editor = (connect(editor_Editor));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag.tsx
var content_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var content_tag_ContentTag = /** @class */ (function (_super) {
    content_tag_extends(ContentTag, _super);
    function ContentTag(props) {
        return _super.call(this, props) || this;
    }
    ContentTag.prototype.render = function () {
        if (!this.props.content) {
            return null;
        }
        var field = realm_schema.basicFieldFor(this.props.content, this.props.attribute);
        if (!field) {
            var attributeName = this.props.attribute;
            throwNextTick(new ArgumentError('Component "Scrivito.ContentTag" received prop "attribute" with invalid value: ' +
                ("Attribute \"" + attributeName + "\" is not defined for content specified in prop \"content\".")));
            return null;
        }
        var fieldType = field.type();
        var editorId;
        var editorClass;
        var editorRegistration = editorRegistrationFor({
            type: fieldType,
            tag: this.props.tag,
        });
        if (editorRegistration) {
            editorId = editorRegistration.id;
            editorClass = editorRegistration.editorClass;
            if (isEditingMode()) {
                return (external_react_["createElement"](content_tag_editor, { key: this.editorKey(editorId), field: field, editorClass: editorClass, tag: this.props.tag, widgetProps: this.widgetProps(fieldType), customProps: this.customProps(), content: this.props.content }, this.props.children));
            }
        }
        return (external_react_["createElement"](attribute_value, { field: field, tag: this.props.tag, widgetProps: this.widgetProps(fieldType), customProps: this.customProps() }, this.props.children));
    };
    ContentTag.prototype.customProps = function () {
        return Object(external_underscore_["omit"])(this.props, 'content', 'attribute', 'tag', 'widgetProps');
    };
    ContentTag.prototype.widgetProps = function (fieldType) {
        if (this.props.widgetProps) {
            if (fieldType === 'widgetlist') {
                return this.props.widgetProps;
            }
            throwNextTick(new ArgumentError('The prop "widgetProps" is only allowed for widgetlist attributes'));
        }
    };
    ContentTag.prototype.editorKey = function (editorId) {
        var content = unwrapAppClass(this.props.content);
        return [
            this.props.tag,
            keyForBasicContent(content),
            this.props.attribute,
            editorId,
        ].join('|');
    };
    ContentTag.displayName = 'Scrivito.ContentTag';
    ContentTag.defaultProps = { tag: 'div' };
    return ContentTag;
}(external_react_["Component"]));
/* harmony default export */ var content_tag = (connect(content_tag_ContentTag));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/current_page.jsx
function current_page_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function current_page_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { current_page_typeof = function _typeof(obj) { return typeof obj; }; } else { current_page_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return current_page_typeof(obj); }

function current_page_classCallCheck(instance, Constructor) { if (!current_page_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function current_page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function current_page_createClass(Constructor, protoProps, staticProps) { if (protoProps) current_page_defineProperties(Constructor.prototype, protoProps); if (staticProps) current_page_defineProperties(Constructor, staticProps); return Constructor; }

function current_page_possibleConstructorReturn(self, call) { if (call && (current_page_typeof(call) === "object" || typeof call === "function")) { return call; } return current_page_assertThisInitialized(self); }

function current_page_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function current_page_getPrototypeOf(o) { current_page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return current_page_getPrototypeOf(o); }

function current_page_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) current_page_setPrototypeOf(subClass, superClass); }

function current_page_setPrototypeOf(o, p) { current_page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return current_page_setPrototypeOf(o, p); }







var current_page_CurrentPage =
/*#__PURE__*/
function (_React$Component) {
  current_page_inherits(CurrentPage, _React$Component);

  function CurrentPage() {
    current_page_classCallCheck(this, CurrentPage);

    return current_page_possibleConstructorReturn(this, current_page_getPrototypeOf(CurrentPage).apply(this, arguments));
  }

  current_page_createClass(CurrentPage, [{
    key: "render",
    value: function render() {
      var page = currentPage();
      var params = currentPageParams();

      if (!page) {
        return null;
      }

      var pageClass = page.objClass();
      var pageComponent = getComponentForAppClass(pageClass);

      if (!pageComponent) {
        throw new ArgumentError("No component registered for obj class \"".concat(pageClass, "\""));
      }

      return external_react_default.a.createElement(pageComponent, {
        page: page,
        params: params
      });
    }
  }]);

  return CurrentPage;
}(external_react_default.a.Component);

current_page_CurrentPage.displayName = 'Scrivito.CurrentPage';
/* harmony default export */ var current_page = (connect(current_page_CurrentPage));
// CONCATENATED MODULE: ./scrivito_sdk/react/image_placeholder.js
/* eslint max-len: 0 */

/*
 * This is a base64 placeholder for the image component.
 *
 * The image component is actually styled via CSS in order to provide a scalable placeholder.
 * However, in order to set a background image, the tag must have content. In this case a
 * transparent image of an appropriate size.
 */
/* harmony default export */ var image_placeholder = ('data:image/gif;base64,R0lGODlhyADIAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDBEQjBEMDdFODMzMTFFNTg0QzY4MUNBMUVCQUU2MjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDBEQjBEMDhFODMzMTFFNTg0QzY4MUNBMUVCQUU2MjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMERCMEQwNUU4MzMxMUU1ODRDNjgxQ0ExRUJBRTYyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMERCMEQwNkU4MzMxMUU1ODRDNjgxQ0ExRUJBRTYyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAADIAMgAAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNBhw7eixTAAA7');
// CONCATENATED MODULE: ./scrivito_sdk/react/components/image_tag.jsx
function image_tag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { image_tag_typeof = function _typeof(obj) { return typeof obj; }; } else { image_tag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return image_tag_typeof(obj); }

function image_tag_extends() { image_tag_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return image_tag_extends.apply(this, arguments); }

function image_tag_instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function image_tag_classCallCheck(instance, Constructor) { if (!image_tag_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function image_tag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function image_tag_createClass(Constructor, protoProps, staticProps) { if (protoProps) image_tag_defineProperties(Constructor.prototype, protoProps); if (staticProps) image_tag_defineProperties(Constructor, staticProps); return Constructor; }

function image_tag_possibleConstructorReturn(self, call) { if (call && (image_tag_typeof(call) === "object" || typeof call === "function")) { return call; } return image_tag_assertThisInitialized(self); }

function image_tag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function image_tag_getPrototypeOf(o) { image_tag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return image_tag_getPrototypeOf(o); }

function image_tag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) image_tag_setPrototypeOf(subClass, superClass); }

function image_tag_setPrototypeOf(o, p) { image_tag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return image_tag_setPrototypeOf(o, p); }









 // public API

var image_tag_ImageTag =
/*#__PURE__*/
function (_React$Component) {
  image_tag_inherits(ImageTag, _React$Component);

  function ImageTag() {
    image_tag_classCallCheck(this, ImageTag);

    return image_tag_possibleConstructorReturn(this, image_tag_getPrototypeOf(ImageTag).apply(this, arguments));
  }

  image_tag_createClass(ImageTag, [{
    key: "render",
    value: function render() {
      if (!this.props.content) {
        return null;
      }

      var htmlOptions = Object(external_underscore_["omit"])(this.props, 'content', 'attribute');

      if (image_tag_instanceof(this.props.content, models_binary)) {
        return external_react_default.a.createElement("img", image_tag_extends({
          src: scaleDownBinary(this.props.content)
        }, htmlOptions));
      }

      var binary = this._getBinary();

      if (binary === undefined) {
        return null;
      }

      var src;

      if (binary === null) {
        src = image_placeholder;
        htmlOptions['data-scrivito-image-placeholder'] = true;
      } else {
        src = scaleDownBinary(binary);
      }

      return external_react_default.a.createElement(content_tag, image_tag_extends({
        attribute: this.props.attribute,
        content: this.props.content,
        tag: 'img',
        src: src
      }, htmlOptions));
    }
  }, {
    key: "_getBinary",
    value: function _getBinary() {
      var schema = realm_schema.forInstance(this.props.content);

      if (!schema) {
        return;
      }

      var definition = schema.attributes[this.props.attribute];

      if (!definition) {
        throwNextTick(new ArgumentError('Component "Scrivito.ImageTag" received prop "content"' + " with an object missing attribute \"".concat(this.props.attribute, "\".")));
        return;
      }

      var attributeType = definition[0];

      if (attributeType === 'binary') {
        return this.props.content.get(this.props.attribute);
      }

      if (attributeType === 'reference') {
        return this._getReferencedBinary();
      }

      throwNextTick(new ArgumentError('Component "Scrivito.ImageTag" received prop "content"' + " with an object, whose attribute \"".concat(this.props.attribute, "\"") + " is of unexpected type \"".concat(attributeType, "\".") + ' Valid attribute types are "binary" and "reference".'));
    }
  }, {
    key: "_getReferencedBinary",
    value: function _getReferencedBinary() {
      var referencedObj = this.props.content.get(this.props.attribute);

      if (referencedObj) {
        var blob = referencedObj.get('blob');

        if (blob) {
          return blob;
        }
      }

      return null;
    }
  }]);

  return ImageTag;
}(external_react_default.a.Component);

image_tag_ImageTag.displayName = 'Scrivito.ImageTag';
image_tag_ImageTag.defaultProps = {
  attribute: 'blob'
};
/* harmony default export */ var image_tag = (connect(image_tag_ImageTag));
// CONCATENATED MODULE: ./scrivito_sdk/react/components/not_found_error_page.tsx



// public API
var NotFoundErrorPage = function (_a) {
    var children = _a.children;
    if (currentPageIsNotFound()) {
        if (children) {
            return external_react_["createElement"]("div", null, children);
        }
        return (external_react_["createElement"]("div", null,
            external_react_["createElement"]("h1", null, "The page you were looking for doesn't exist."),
            external_react_["createElement"]("p", null, "You may have mistyped the address or the page may have moved.")));
    }
    return null;
};
NotFoundErrorPage.displayName = 'Scrivito.NotFoundErrorPage';
/* harmony default export */ var not_found_error_page = (connect(NotFoundErrorPage));

// CONCATENATED MODULE: ./scrivito_sdk/react/index.ts

















// CONCATENATED MODULE: ./scrivito_sdk/app_support/url_for.ts





var url_for_origin;
// public API
function url_for_urlFor(target, options) {
    assertNotUsingInMemoryTenant('Scrivito.urlFor');
    checkUrlFor(target, options);
    var query;
    var hash;
    if (options) {
        query = options.query;
        hash = options.hasOwnProperty('hash') ? options.hash : options.fragment;
    }
    var basicTarget = unwrapAppClass(target);
    return basicUrlWithOriginFor(basicTarget, {
        origin: url_for_origin,
        query: query,
        hash: hash,
    });
}
function configureOrigin(originToUse) {
    url_for_origin = originToUse;
}
var url_for_TargetType = external_tcomb_validation_.union([ObjType, LinkType, BinaryType]);
var OptionsType = external_tcomb_validation_.struct({
    query: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    hash: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    fragment: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
});
var checkUrlFor = checkArgumentsFor('urlFor', [['target', url_for_TargetType], ['options', external_tcomb_validation_.maybe(OptionsType)]], {
    docPermalink: 'js-sdk/urlFor',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/configure.ts











var _isConfigured = false;
var OriginValue = external_tcomb_validation_.refinement(external_tcomb_validation_.String, function (v) { return external_urijs_(v).origin() === v; });
var AllowedConfiguration = external_tcomb_validation_.struct({
    tenant: external_tcomb_validation_.String,
    endpoint: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    homepage: external_tcomb_validation_.maybe(external_tcomb_validation_.Function),
    origin: external_tcomb_validation_.maybe(OriginValue),
    routingBasePath: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    unstable: external_tcomb_validation_.maybe(external_tcomb_validation_.Object),
});
var configure_checkConfigure = checkArgumentsFor('configure', [['configuration', AllowedConfiguration]], {
    docPermalink: 'js-sdk/configure',
});
function configure(configuration) {
    configure_checkConfigure(configuration);
    var tenant = configuration.tenant, homepage = configuration.homepage, routingBasePath = configuration.routingBasePath, unstable = configuration.unstable, origin = configuration.origin;
    var endpoint = configuration.endpoint || 'api.scrivito.com';
    if (tenant === IN_MEMORY_TENANT) {
        useInMemoryTenant();
        objReplicationPool.disableReplication();
    }
    else {
        if (ui_adapter_uiAdapter) {
            var tenantConfiguration = { tenant: tenant, endpoint: endpoint };
            if (unstable) {
                var useRailsAuth = unstable.useRailsAuth;
                if (useRailsAuth) {
                    tenantConfiguration.useRailsAuth = useRailsAuth;
                }
                var getSiteIdForObj = unstable.getSiteIdForObj;
                if (getSiteIdForObj) {
                    setMultiSiteMode(getSiteIdForObj);
                }
            }
            ui_adapter_uiAdapter.configureTenant(tenantConfiguration);
        }
        else {
            cmsRestApi.init(endpoint, tenant);
        }
    }
    var homepageCallback = homepage
        ? function () { return unwrapAppClass(homepage()); }
        : function () { return basic_obj.root(); };
    setHomepageCallback(homepageCallback);
    routing_init({ routingBasePath: routingBasePath });
    configureOrigin(origin || undefined);
    _isConfigured = true;
}
function isConfigured() {
    return _isConfigured;
}
// for test purpose only
function resetIsConfigured() {
    _isConfigured = false;
}


// CONCATENATED MODULE: ./scrivito_sdk/app_support/resolve_url.ts






function resolveUrl(url) {
    var parsedUrlToResolve = external_urijs_(url);
    if (!isConfigured()) {
        return ScrivitoPromise.resolve(null);
    }
    return load(function () { return recognize(url); }).then(function (target) {
        if (!target.path) {
            return null;
        }
        if (Object(external_underscore_["include"])(['/', ''], target.path)) {
            return null;
        }
        return { obj: target.obj, url: parsedUrlToResolve };
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/menu_registry.ts
var menuCallbacks = [];
function registerMenuCallback(menuCallback) {
    menuCallbacks.push(menuCallback);
}
function getMenuCallbacks() {
    return menuCallbacks;
}
// For test purpose only.
function resetMenuRegistry() {
    menuCallbacks.length = 0;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/compute_on_click_handler.ts

function computeOnClickHandler(id) {
    var onClickScan = new OnClickScan(id);
    getMenuCallbacks().forEach(function (menuCallback) {
        return menuCallback.call(null, onClickScan);
    });
    return onClickScan.onClickHandler();
}
var OnClickScan = /** @class */ (function () {
    function OnClickScan(id) {
        this.id = id;
    }
    OnClickScan.prototype.insert = function (customMenuItem) {
        if (customMenuItem && customMenuItem.id === this.id) {
            this.onClick = customMenuItem.onClick;
        }
    };
    OnClickScan.prototype.remove = function () {
        // do nothing
    };
    OnClickScan.prototype.onClickHandler = function () {
        return this.onClick;
    };
    return OnClickScan;
}());

// CONCATENATED MODULE: ./scrivito_sdk/app_support/app_adapter.ts




















/* The AppAdapter is provided to the UI by the App.
 * The UI uses it as a communication channel to the App.
 * It is the counterpart of the UiAdapter.
 *
 * Communication should use only built-in datatypes,
 * i.e. communicate using `string` and `array`, not `BasicObj`.
 */
var app_adapter_AppAdapter = /** @class */ (function () {
    function AppAdapter() {
    }
    AppAdapter.prototype.contentBrowserConfiguration = function () {
        return uiAdapterCompatibleValue(getContentBrowserConfiguration());
    };
    AppAdapter.prototype.titleForObj = function (objId) {
        return invokeUiConfigCallbackForObjId('titleForContent', objId);
    };
    AppAdapter.prototype.descriptionForObj = function (objId) {
        return invokeUiConfigCallbackForObjId('descriptionForContent', objId);
    };
    AppAdapter.prototype.executeCustomCommand = function (id) {
        var onClickHandler = computeOnClickHandler(id);
        if (onClickHandler) {
            onClickHandler.call(null);
        }
    };
    AppAdapter.prototype.titleForWidget = function (objId, widgetId) {
        return titleForWidget(objId, widgetId);
    };
    AppAdapter.prototype.initializeContentForObj = function (objId) {
        initializeContentForObj(objId);
    };
    AppAdapter.prototype.initializeContentForWidget = function (objId, widgetId) {
        initializeContentForWidget(objId, widgetId);
    };
    AppAdapter.prototype.getClasses = function () {
        var realm = getWindowContext();
        var classDatas = [];
        Object(external_underscore_["each"])(realm.allObjClasses(), function (modelClass, name) {
            return classDatas.push(buildObjClassData(name, modelClass));
        });
        Object(external_underscore_["each"])(realm.allWidgetClasses(), function (modelClass, name) {
            return classDatas.push(buildWidgetClassData(name, modelClass));
        });
        return classDatas;
    };
    AppAdapter.prototype.navigateTo = function (objId) {
        load(function () {
            var basicObj = basic_obj.get(objId);
            if (basicObj) {
                return wrap_in_app_class_wrapInAppClass(getWindowRegistry(), basicObj);
            }
        }).then(function (result) {
            if (result) {
                navigateTo(result);
            }
        });
    };
    AppAdapter.prototype.showCustomComponent = function (componentId, props) {
        showCustomComponent(componentId, props);
    };
    AppAdapter.prototype.urlFor = function (objId) {
        return load(function () {
            var basicObj = basic_obj.getIncludingDeleted(objId);
            if (basicObj) {
                return basicUrlWithOriginFor(basicObj);
            }
            return null;
        });
    };
    AppAdapter.prototype.resolveUrl = function (url) {
        return resolveUrl(url).then(function (resolvedUrl) {
            if (!resolvedUrl || !resolvedUrl.obj) {
                return null;
            }
            var obj = resolvedUrl.obj;
            var fragment = resolvedUrl.url.fragment();
            var search = resolvedUrl.url.search();
            var recognizedUrl = { obj_id: obj.id() };
            if (fragment) {
                recognizedUrl.fragment = fragment;
            }
            if (search) {
                recognizedUrl.query = search;
            }
            return recognizedUrl;
        });
    };
    AppAdapter.prototype.getDocumentHeight = function () {
        var html = getDocument().querySelector('html');
        return html.getBoundingClientRect().height;
    };
    AppAdapter.prototype.replaceInternalLinks = function (htmlString) {
        return replaceInternalLinks(htmlString);
    };
    AppAdapter.prototype.getSiteIdForObj = function (objId) {
        var obj = basic_obj.get(objId);
        if (obj) {
            return multi_site_mode_getSiteIdForObj(obj);
        }
        return null;
    };
    return AppAdapter;
}());
/* harmony default export */ var app_adapter = (app_adapter_AppAdapter);
function buildObjClassData(name, modelClass) {
    var schema = realm_schema.forClass(modelClass);
    return Object(external_underscore_["pick"])({
        name: name,
        type: 'Obj',
        attributes: buildAttributesData(schema.attributes, getEditingConfigFor(name, 'attributes')),
        description: getEditingConfigFor(name, 'description'),
        hideInSelectionDialogs: getEditingConfigFor(name, 'hideInSelectionDialogs'),
        properties: getEditingConfigFor(name, 'properties'),
        propertiesGroups: getEditingConfigFor(name, 'propertiesGroups'),
        thumbnail: getEditingConfigFor(name, 'thumbnail'),
        title: getEditingConfigFor(name, 'title'),
    }, external_underscore_["identity"]);
}
function buildAttributesData(attributes, attributeEditConfigs) {
    var attributesData = Object(external_underscore_["map"])(attributes, function (definition, name) {
        var type = definition[0];
        var attributeData = { name: name, type: type };
        if (definition.length > 1) {
            var options = definition[1];
            if ('only' in options && options.only) {
                attributeData.only = options.only;
            }
            if ('values' in options && options.values) {
                attributeData.values = options.values;
            }
        }
        return attributeData;
    });
    if (attributeEditConfigs) {
        Object.keys(attributeEditConfigs).forEach(function (name) {
            var attributeDefinition = Object(external_underscore_["findWhere"])(attributesData, { name: name });
            if (attributeDefinition) {
                var _a = attributeEditConfigs[name], title = _a.title, description = _a.description, valuesLocalization = _a.values;
                if (valuesLocalization) {
                    Object(external_underscore_["extend"])(attributeDefinition, {
                        title: title,
                        description: description,
                        valuesLocalization: valuesLocalization,
                    });
                }
                else {
                    Object(external_underscore_["extend"])(attributeDefinition, { title: title, description: description });
                }
            }
        });
    }
    return attributesData;
}
function buildWidgetClassData(name, modelClass) {
    var schema = realm_schema.forClass(modelClass);
    return Object(external_underscore_["pick"])({
        name: name,
        type: 'Widget',
        attributes: buildAttributesData(schema.attributes, getEditingConfigFor(name, 'attributes')),
        onlyInside: schema.onlyInside,
        description: getEditingConfigFor(name, 'description'),
        hideInSelectionDialogs: getEditingConfigFor(name, 'hideInSelectionDialogs'),
        properties: getEditingConfigFor(name, 'properties'),
        propertiesGroups: getEditingConfigFor(name, 'propertiesGroups'),
        thumbnail: getEditingConfigFor(name, 'thumbnail'),
        title: getEditingConfigFor(name, 'title'),
    }, external_underscore_["identity"]);
}
function invokeUiConfigCallbackForObjId(callbackName, objId) {
    var basicObj = basic_obj.getIncludingDeleted(objId);
    if (!basicObj) {
        return undefined;
    }
    var appObj = wrap_in_app_class_wrapInAppClass(getWindowRegistry(), basicObj);
    return invokeEditingConfigCallback(basicObj.objClass(), callbackName, appObj);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/on_current_page_change.ts



function onCurrentPageChange(callback) {
    var lastState;
    observe(function () { return capture(getCurrentPageState).result; }, function (currentState) {
        if (currentState === undefined) {
            return;
        }
        if (lastState !== undefined &&
            isSamePageIdAndPageLocation(lastState, currentState)) {
            return;
        }
        lastState = currentState;
        callback(currentState);
    });
}
function isSamePageIdAndPageLocation(leftState, rightState) {
    if (isScrivitoPage(leftState)) {
        if (isScrivitoPage(rightState)) {
            return (leftState.objId === rightState.objId &&
                leftState.location === rightState.location);
        }
        return false;
    }
    if (isScrivitoPage(rightState)) {
        return false;
    }
    return isNotFound(leftState) === isNotFound(rightState);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/canonical_url.ts







function canonical_url_init() {
    onCurrentPageChange(switchToCanonicalUrl);
}
function switchToCanonicalUrl(state) {
    if (!isScrivitoPage(state)) {
        return;
    }
    var location = state.location;
    load(function () {
        if (get() !== location) {
            return;
        }
        var page = basic_obj.get(state.objId);
        var canonicalPath = generateUrl({ obj: page });
        return external_urijs_(location)
            .path(canonicalPath)
            .toString();
    }).then(function (canonicalUrl) {
        if (!canonicalUrl) {
            return;
        }
        var browserLocation = get();
        if (location !== browserLocation) {
            return;
        }
        if (canonicalUrl === browserLocation) {
            return;
        }
        browser_location_replace(canonicalUrl);
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/notify_page_id_to_ui.ts



var previousPageId;
function notify_page_id_to_ui_init() {
    previousPageId = undefined;
    onCurrentPageChange(uiAdapterSetCurrentPageId);
}
function uiAdapterSetCurrentPageId(state) {
    if (!ui_adapter_uiAdapter) {
        return;
    }
    var pageId = isScrivitoPage(state) ? state.objId : null;
    if (previousPageId === pageId) {
        return;
    }
    previousPageId = pageId;
    ui_adapter_uiAdapter.setCurrentPageId(pageId);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/scroll_window_to_top.ts
function scrollWindowToTop() {
    window.scrollTo(0, 0);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/scroll_window.ts



function scroll_window_init() {
    onCurrentPageChange(scrollWindow);
}
function scrollWindow(state) {
    var willBeRendered = isScrivitoPage(state) || isNotFound(state);
    if (willBeRendered) {
        scrollWindowToTop();
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/index.js













if (!window.scrivito) {
  window.scrivito = {};
}

window.scrivito.registerEditor = registerEditor;
window.scrivito.openContentBrowser = openContentBrowser;
function initializeSdk(ui) {
  if (ui) {
    ui.setAppAdapter(getScrivitoVersion(), new app_adapter());
    var uiAdapter = ui.uiAdapter();
    setUiAdapter(uiAdapter);
    replaceCmsRetrieval(uiAdapter);
    setCurrentWorkspaceId(uiAdapter.currentWorkspaceId());
    setBinaryHandler(uiAdapter);
    setLinkHandler(uiAdapter);
    replaceObjReplicationPool(ui.getObjReplicationPool());
  }

  initializeGlobalState(ui);
  canonical_url_init();
  notify_page_id_to_ui_init();
  scroll_window_init();
}
// CONCATENATED MODULE: ./scrivito_sdk/app_support/load_editing_assets.ts

function loadEditingAssets(assetUrlBase, targetDocument) {
    loadCss(assetUrlBase + "/scrivito_editing.css", targetDocument);
    loadJs(assetUrlBase + "/scrivito_editing.js", targetDocument);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/menu_patch_builder.ts


var menu_patch_builder_MenuPatchBuilder = /** @class */ (function () {
    function MenuPatchBuilder() {
        this.patch = {
            insertIds: [],
            removeIds: [],
            items: {},
        };
    }
    MenuPatchBuilder.prototype.insert = function (customMenuItem) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkMenuInsertArguments.apply(void 0, [customMenuItem].concat(excessArgs));
        this.patch.insertIds.push(customMenuItem.id);
        this.patch.items[customMenuItem.id] = Object(external_underscore_["pick"])(customMenuItem, 'description', 'enabled', 'icon', 'title');
    };
    MenuPatchBuilder.prototype.remove = function (id) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkMenuRemoveArguments.apply(void 0, [id].concat(excessArgs));
        this.patch.removeIds.push(id);
    };
    MenuPatchBuilder.prototype.getPatch = function () {
        return this.patch;
    };
    return MenuPatchBuilder;
}());
/* harmony default export */ var menu_patch_builder = (menu_patch_builder_MenuPatchBuilder);
var checkMenuInsertArguments = checkArgumentsFor('menu.insert', [
    [
        'options',
        external_tcomb_validation_.struct({
            id: external_tcomb_validation_.String,
            description: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
            enabled: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
            icon: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
            onClick: external_tcomb_validation_.maybe(external_tcomb_validation_.Function),
            title: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
        }),
    ],
], {
    docPermalink: 'js-sdk/extendMenu',
});
var checkMenuRemoveArguments = checkArgumentsFor('menu.remove', [['id', external_tcomb_validation_.String]], {
    docPermalink: 'js-sdk/extendMenu',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/compute_menu_patch.ts


function computeMenuPatch() {
    var patchBuilder = new menu_patch_builder();
    getMenuCallbacks().forEach(function (menuCallback) {
        return menuCallback.call(null, patchBuilder);
    });
    return patchBuilder.getPatch();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/menu_observer.ts



var menu_observer_observation;
function observeMenu() {
    if (menu_observer_observation) {
        return;
    }
    menu_observer_observation = observeAndLoad(computeMenuPatch, function (observed) {
        if (observed.allDataLoaded) {
            if (ui_adapter_uiAdapter) {
                ui_adapter_uiAdapter.updateMenu(observed.result);
            }
        }
    });
}
function notifyMenuUpdate() {
    if (menu_observer_observation) {
        menu_observer_observation.forceRefresh();
    }
}
// for test purposes only
function resetObserveMenu() {
    menu_observer_observation = undefined;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extend_menu.ts




function extendMenu(menuCallback) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkExtendMenuArguments.apply(void 0, [menuCallback].concat(excessArgs));
    if (!ui_adapter_uiAdapter) {
        return;
    }
    observeMenu();
    registerMenuCallback(menuCallback);
    notifyMenuUpdate();
}
var checkExtendMenuArguments = checkArgumentsFor('extendMenu', [['menuCallback', external_tcomb_validation_.Function]], {
    docPermalink: 'js-sdk/extendMenu',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/content_dump.ts


/** dump the content of all provided LoadableData instances */
function generateContentDump(data) {
    return stringify({
        version: getScrivitoVersion(),
        recording: generateRecording(data),
    });
}
/** load the data from the content dump string into the SDK */
function loadContentDump(contentDump) {
    var parsed = parse(contentDump);
    if (!parsed) {
        logError('could not preload: parsing dump failed');
        return;
    }
    if (!isContentDumpFromThisVersion(parsed)) {
        logError("could not preload: " +
            ("dump is from version " + parsed.version) +
            (", this is version " + getScrivitoVersion()));
        return;
    }
    loadRecording(parsed.recording);
}
function stringify(contentDump) {
    return JSON.stringify(contentDump);
}
function parse(stringifiedContentDump) {
    var parsed = parseJSON(stringifiedContentDump);
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
        return;
    }
    if (isMaybeContentDump(parsed)) {
        return parsed;
    }
}
function parseJSON(text) {
    try {
        // JSON.parse returns `any`
        // we want to be more careful and therefore convert to `unkown`
        return JSON.parse(text);
    }
    catch (error) {
        return undefined;
    }
}
function isMaybeContentDump(parsed) {
    return !!parsed.version;
}
function isContentDumpFromThisVersion(dump) {
    return dump.version === getScrivitoVersion();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/render_page.ts










function renderPage(page, render) {
    assertNotUsingInMemoryTenant('Scrivito.renderPage');
    checkRenderPage(page, render);
    var basicPage = unwrapAppClass(page);
    return load(function () {
        return reportUsedData(function () {
            ensureRoutingDataAvailable(basicPage);
            return withCurrentPage(basicPage, function () { return usePrerenderScaling(render); });
        });
    }).then(function (_a) {
        var result = _a.result, usedData = _a.usedData;
        return ({
            result: result,
            preloadDump: generateContentDump(usedData),
        });
    });
}
function ensureRoutingDataAvailable(basicPage) {
    withDisabledPermalinkCache(function () {
        return recognizeRoutingPath(generateRoutingPath(basicPage));
    });
}
var checkRenderPage = checkArgumentsFor('renderPage', [['page', ObjType], ['render', external_tcomb_validation_.Function]], {
    docPermalink: 'js-sdk/renderPage',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/preload.ts





/** tries to pre-warm the CMS cache using a preloadDump. */
function preload(preloadDump) {
    checkPreload(preloadDump);
    return ScrivitoPromise.resolve().then(function () {
        if (!ui_adapter_uiAdapter) {
            loadContentDump(preloadDump);
        }
        return preloadCurrentPage();
    });
}
function preloadCurrentPage() {
    return load(function () {
        currentPage();
    });
}
var checkPreload = checkArgumentsFor('preload', [['preloadDump', external_tcomb_validation_.String]], {
    docPermalink: 'js-sdk/preload',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/open_dialog.ts


function openDialog(name) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkOpenDialogArguments.apply(void 0, [name].concat(excessArgs));
    if (ui_adapter_uiAdapter) {
        ui_adapter_uiAdapter.openCustomDialog(name);
    }
}
var checkOpenDialogArguments = checkArgumentsFor('openDialog', [['name', external_tcomb_validation_.String]], {
    docPermalink: 'js-sdk/openDialog',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/is_in_place_editing_active.ts


// public API
function isInPlaceEditingActive() {
    return isEditingMode() && current_workspace_currentWorkspaceId() !== 'published';
}

// CONCATENATED MODULE: ./scrivito_sdk/infopark_integration_test_support.js



function enableForceVerification() {
  cmsRestApi.enableForceVerification();
}
function currentPublicAuthorizationState() {
  return cmsRestApi.currentPublicAuthorizationState();
}
// CONCATENATED MODULE: ./scrivito_sdk/public_api.ts
// If imported, this file provides a namespace object for the public API, e.g.:
//
//   import * as Scrivito from 'scrivito_sdk/public_api';
//
//   Scrivito.configure({ ... });
//   Scrivito.provideComponent({ ... });
// Client





// App support














// React












var public_api_realmApi = getWindowContext();
var public_api_Link = public_api_realmApi.Link;
var public_api_Obj = public_api_realmApi.Obj;
var public_api_ObjSearch = public_api_realmApi.ObjSearch;
var public_api_Widget = public_api_realmApi.Widget;
var public_api_createObjClass = public_api_realmApi.createObjClass;
var public_api_createWidgetClass = public_api_realmApi.createWidgetClass;
var getClass = public_api_realmApi.getClass;
var public_api_provideObjClass = public_api_realmApi.provideObjClass;
var public_api_provideWidgetClass = public_api_realmApi.provideWidgetClass;
// public for tests



// CONCATENATED MODULE: ./scrivito_npm.js
/* concated harmony reexport Binary */__webpack_require__.d(__webpack_exports__, "Binary", function() { return models_binary; });
/* concated harmony reexport FutureBinary */__webpack_require__.d(__webpack_exports__, "FutureBinary", function() { return future_binary; });
/* concated harmony reexport ObjFacetValue */__webpack_require__.d(__webpack_exports__, "ObjFacetValue", function() { return obj_facet_value; });
/* concated harmony reexport load */__webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* concated harmony reexport ArgumentError */__webpack_require__.d(__webpack_exports__, "ArgumentError", function() { return ArgumentError; });
/* concated harmony reexport ScrivitoError */__webpack_require__.d(__webpack_exports__, "ScrivitoError", function() { return ScrivitoError; });
/* concated harmony reexport configure */__webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* concated harmony reexport configureContentBrowser */__webpack_require__.d(__webpack_exports__, "configureContentBrowser", function() { return configureContentBrowser; });
/* concated harmony reexport currentPage */__webpack_require__.d(__webpack_exports__, "currentPage", function() { return currentPage; });
/* concated harmony reexport currentPageParams */__webpack_require__.d(__webpack_exports__, "currentPageParams", function() { return currentPageParams; });
/* concated harmony reexport extendMenu */__webpack_require__.d(__webpack_exports__, "extendMenu", function() { return extendMenu; });
/* concated harmony reexport renderPage */__webpack_require__.d(__webpack_exports__, "renderPage", function() { return renderPage; });
/* concated harmony reexport preload */__webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* concated harmony reexport finishLoading */__webpack_require__.d(__webpack_exports__, "finishLoading", function() { return finishLoading; });
/* concated harmony reexport openDialog */__webpack_require__.d(__webpack_exports__, "openDialog", function() { return openDialog; });
/* concated harmony reexport isInPlaceEditingActive */__webpack_require__.d(__webpack_exports__, "isInPlaceEditingActive", function() { return isInPlaceEditingActive; });
/* concated harmony reexport navigateTo */__webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* concated harmony reexport provideEditingConfig */__webpack_require__.d(__webpack_exports__, "provideEditingConfig", function() { return provideEditingConfig; });
/* concated harmony reexport urlFor */__webpack_require__.d(__webpack_exports__, "urlFor", function() { return url_for_urlFor; });
/* concated harmony reexport useHistory */__webpack_require__.d(__webpack_exports__, "useHistory", function() { return useHistory; });
/* concated harmony reexport unstable_selectSiteId */__webpack_require__.d(__webpack_exports__, "unstable_selectSiteId", function() { return unstable_selectSiteId; });
/* concated harmony reexport BackgroundImageTag */__webpack_require__.d(__webpack_exports__, "BackgroundImageTag", function() { return background_image_tag; });
/* concated harmony reexport ChildListTag */__webpack_require__.d(__webpack_exports__, "ChildListTag", function() { return child_list_tag; });
/* concated harmony reexport ContentTag */__webpack_require__.d(__webpack_exports__, "ContentTag", function() { return content_tag; });
/* concated harmony reexport CurrentPage */__webpack_require__.d(__webpack_exports__, "CurrentPage", function() { return current_page; });
/* concated harmony reexport ImageTag */__webpack_require__.d(__webpack_exports__, "ImageTag", function() { return image_tag; });
/* concated harmony reexport LinkTag */__webpack_require__.d(__webpack_exports__, "LinkTag", function() { return link_tag; });
/* concated harmony reexport NotFoundErrorPage */__webpack_require__.d(__webpack_exports__, "NotFoundErrorPage", function() { return not_found_error_page; });
/* concated harmony reexport WidgetTag */__webpack_require__.d(__webpack_exports__, "WidgetTag", function() { return widget_tag; });
/* concated harmony reexport connect */__webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* concated harmony reexport provideComponent */__webpack_require__.d(__webpack_exports__, "provideComponent", function() { return provideComponent; });
/* concated harmony reexport registerComponent */__webpack_require__.d(__webpack_exports__, "registerComponent", function() { return registerComponent; });
/* concated harmony reexport Link */__webpack_require__.d(__webpack_exports__, "Link", function() { return public_api_Link; });
/* concated harmony reexport Obj */__webpack_require__.d(__webpack_exports__, "Obj", function() { return public_api_Obj; });
/* concated harmony reexport ObjSearch */__webpack_require__.d(__webpack_exports__, "ObjSearch", function() { return public_api_ObjSearch; });
/* concated harmony reexport Widget */__webpack_require__.d(__webpack_exports__, "Widget", function() { return public_api_Widget; });
/* concated harmony reexport createObjClass */__webpack_require__.d(__webpack_exports__, "createObjClass", function() { return public_api_createObjClass; });
/* concated harmony reexport createWidgetClass */__webpack_require__.d(__webpack_exports__, "createWidgetClass", function() { return public_api_createWidgetClass; });
/* concated harmony reexport getClass */__webpack_require__.d(__webpack_exports__, "getClass", function() { return getClass; });
/* concated harmony reexport provideObjClass */__webpack_require__.d(__webpack_exports__, "provideObjClass", function() { return public_api_provideObjClass; });
/* concated harmony reexport provideWidgetClass */__webpack_require__.d(__webpack_exports__, "provideWidgetClass", function() { return public_api_provideWidgetClass; });
/* concated harmony reexport _internal */__webpack_require__.d(__webpack_exports__, "_internal", function() { return infopark_integration_test_support_namespaceObject; });
/*
 * This is the webpack entry file used by the NPM module
 */





var scrivito_npm_ui = connectToUi();
initializeSdk(scrivito_npm_ui);

if (scrivito_npm_ui) {
  loadEditingAssets(ui_adapter_uiAdapter.assetUrlBase());
}

/***/ })
/******/ ]);
});