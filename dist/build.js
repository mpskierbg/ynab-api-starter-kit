/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



// Create our Vue App and replace the <div id="app"></div> with it
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "'production'" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "'production'" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "'production'" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(3).setImmediate))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 4 */
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
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
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
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
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
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
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
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
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
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
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
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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
};

// v8 likes predictible objects
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("Nav"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _vm.loading
            ? _c("h1", { staticClass: "display-4" }, [_vm._v("Loading...")])
            : _vm._e(),
          _vm._v(" "),
          _vm.error
            ? _c("div", [
                _c("h1", { staticClass: "display-4" }, [_vm._v("Oops!")]),
                _vm._v(" "),
                _c("p", { staticClass: "lead" }, [_vm._v(_vm._s(_vm.error))]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: { click: _vm.resetToken }
                  },
                  [_vm._v("Try Again >")]
                )
              ])
            : _c(
                "div",
                [
                  !_vm.ynab.token
                    ? _c("form", [
                        _c("h1", { staticClass: "display-4" }, [
                          _vm._v("Congrats!")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "lead" }, [
                          _vm._v(
                            "You have successfully started a new YNAB API Application!"
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(0),
                        _vm._v(" "),
                        _vm._m(1),
                        _vm._v(" "),
                        _c("p", [_vm._v(" ")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("h2", [_vm._v("Hello!")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "lead" }, [
                            _vm._v(
                              "If you would like to use this App, please authorize with YNAB!"
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: { click: _vm.authorizeWithYNAB }
                            },
                            [_vm._v("Authorize This App With YNAB >")]
                          )
                        ])
                      ])
                    : !_vm.budgetId
                    ? _c("Budgets", {
                        attrs: {
                          budgets: _vm.budgets,
                          selectBudget: _vm.selectBudget
                        }
                      })
                    : _c(
                        "div",
                        [
                          _c("Transactions", {
                            attrs: { transactions: _vm.transactions }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info",
                              on: {
                                click: function($event) {
                                  _vm.budgetId = null
                                }
                              }
                            },
                            [_vm._v("< Select Another Budget")]
                          )
                        ],
                        1
                      )
                ],
                1
              ),
          _vm._v(" "),
          _c("Footer")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v("Please go to your "),
        _c(
          "a",
          {
            attrs: {
              href: "https://app.youneedabudget.com/settings/developer",
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
          [_vm._v("YNAB Developer Settings")]
        ),
        _vm._v(" and create a new OAuth Application.")
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("Copy your client ID and redirect URI into "),
        _c("em", [_vm._v("src/config.json")]),
        _vm._v(".")
      ]),
      _vm._v(" "),
      _c("li", [_vm._v("Then build your amazing app!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("If you have any questions please reach out to us at "),
      _c("strong", [_vm._v("api@youneedabudget.com")]),
      _vm._v(".")
    ])
  }
]
render._withStripped = true



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ynab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(25, 1);
/* harmony import */ var _components_Nav_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _components_Budgets_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var _components_Transactions_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Hooray! Here comes YNAB!


// Import our config for YNAB


// Import Our Components to Compose Our App





/* harmony default export */ __webpack_exports__["default"] = ({
  // The data to feed our templates
  data () {
    return {
      ynab: {
        clientId: _config_json__WEBPACK_IMPORTED_MODULE_1__.clientId,
        redirectUri: _config_json__WEBPACK_IMPORTED_MODULE_1__.redirectUri,
        token: null,
        api: null,
      },
      loading: false,
      error: null,
      budgetId: null,
      budgets: [],
      transactions: [],
    }
  },
  // When this component is created, check whether we need to get a token,
  // budgets or display the transactions
  created() {
    this.ynab.token = this.findYNABToken();
    if (this.ynab.token) {
      this.api = new ynab__WEBPACK_IMPORTED_MODULE_0__["api"](this.ynab.token);
      if (!this.budgetId) {
        this.getBudgets();
      } else {
        this.selectBudget(this.budgetId);
      }
    }
  },
  methods: {
    // This uses the YNAB API to get a list of budgets
    getBudgets() {
      this.loading = true;
      this.error = null;
      this.api.budgets.getBudgets().then((res) => {
        this.budgets = res.data.budgets;
      }).catch((err) => {
        this.error = err.error.detail;
      }).finally(() => {
        this.loading = false;
      });
    },
    // This selects a budget and gets all the transactions in that budget
    selectBudget(id) {
      this.loading = true;
      this.error = null;
      this.budgetId = id;
      this.transactions = [];
      this.api.transactions.getTransactions(id).then((res) => {
        this.transactions = res.data.transactions;
      }).catch((err) => {
        this.error = err.error.detail;
      }).finally(() => {
        this.loading = false;
      });
    },
    // This builds a URI to get an access token from YNAB
    // https://api.youneedabudget.com/#outh-applications
    authorizeWithYNAB(e) {
      e.preventDefault();
      const uri = `https://app.youneedabudget.com/oauth/authorize?client_id=${this.ynab.clientId}&redirect_uri=${this.ynab.redirectUri}&response_type=token`;
      location.replace(uri);
    },
    // Method to find a YNAB token
    // First it looks in the location.hash and then sessionStorage
    findYNABToken() {
      let token = null;
      const search = window.location.hash.substring(1).replace(/&/g, '","').replace(/=/g,'":"');
      if (search && search !== '') {
        // Try to get access_token from the hash returned by OAuth
        const params = JSON.parse('{"' + search + '"}', function(key, value) {
          return key === '' ? value : decodeURIComponent(value);
        });
        token = params.access_token;
        sessionStorage.setItem('ynab_access_token', token);
        window.location.hash = '';
      } else {
        // Otherwise try sessionStorage
        token = sessionStorage.getItem('ynab_access_token');
      }
      return token;
    },
    // Clear the token and start authorization over
    resetToken() {
      sessionStorage.removeItem('ynab_access_token');
      this.ynab.token = null;
      this.error = null;
    }
  },
  // Specify which components we want to make available to our templates
  components: {
    Nav: _components_Nav_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Budgets: _components_Budgets_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Transactions: _components_Transactions_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _transactionsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_FORMATS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAPI", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["BaseAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequiredError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["RequiredError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["Account"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["Category"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveTransaction", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["SaveTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionSummary", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["ScheduledTransactionSummary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionSummary", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["TransactionSummary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HybridTransaction", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["HybridTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionDetail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["ScheduledTransactionDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionDetail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["TransactionDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsApiFetchParamCreator", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["AccountsApiFetchParamCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsApiFp", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["AccountsApiFp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["AccountsApiFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsApi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["AccountsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BudgetsApiFetchParamCreator", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["BudgetsApiFetchParamCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BudgetsApiFp", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["BudgetsApiFp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BudgetsApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["BudgetsApiFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BudgetsApi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["BudgetsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesApiFetchParamCreator", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["CategoriesApiFetchParamCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesApiFp", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["CategoriesApiFp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["CategoriesApiFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesApi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["CategoriesApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeprecatedApiFetchParamCreator", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["DeprecatedApiFetchParamCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeprecatedApiFp", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["DeprecatedApiFp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeprecatedApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["DeprecatedApiFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeprecatedApi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["DeprecatedApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthsApiFetchParamCreator", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["MonthsApiFetchParamCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthsApiFp", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["MonthsApiFp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthsApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["MonthsApiFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthsApi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["MonthsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayeeLocationsApiFetchParamCreator", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["PayeeLocationsApiFetchParamCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayeeLocationsApiFp", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["PayeeLocationsApiFp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayeeLocationsApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["PayeeLocationsApiFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayeeLocationsApi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["PayeeLocationsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayeesApiFetchParamCreator", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["PayeesApiFetchParamCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayeesApiFp", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["PayeesApiFp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayeesApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["PayeesApiFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayeesApi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["PayeesApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionsApiFetchParamCreator", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["ScheduledTransactionsApiFetchParamCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionsApiFp", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["ScheduledTransactionsApiFp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionsApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["ScheduledTransactionsApiFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionsApi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["ScheduledTransactionsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionsApiFetchParamCreator", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["TransactionsApiFetchParamCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionsApiFp", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["TransactionsApiFp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionsApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["TransactionsApiFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionsApi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["TransactionsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiFetchParamCreator", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["UserApiFetchParamCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiFp", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["UserApiFp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["UserApiFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["UserApi"]; });

// tslint:disable
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.youneedabudget.com
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */







/**
 * The YNAB API client
 */
var api = /** @class */ (function () {
    /**
     *
     * @param accessToken The access token used for authentication
     * @param endpointUrl The API endpoint URL (Optional)
     */
    function api(accessToken, endpointUrl) {
        if (endpointUrl === void 0) { endpointUrl = "https://api.youneedabudget.com/v1"; }
        this._configuration = new _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"](accessToken, endpointUrl);
    }
    Object.defineProperty(api.prototype, "user", {
        /**
         * /user endpoints interface
         */
        get: function () {
            if (!this._user) {
                this._user = new _api__WEBPACK_IMPORTED_MODULE_1__["UserApi"](this._configuration);
            }
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "budgets", {
        /**
         * /budgets endpoints interface
         */
        get: function () {
            if (!this._budgets) {
                this._budgets = new _api__WEBPACK_IMPORTED_MODULE_1__["BudgetsApi"](this._configuration);
            }
            return this._budgets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "accounts", {
        /**
         * /budgets/{budget_id}/accounts endpoints interface
         */
        get: function () {
            if (!this._accounts) {
                this._accounts = new _api__WEBPACK_IMPORTED_MODULE_1__["AccountsApi"](this._configuration);
            }
            return this._accounts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "categories", {
        /**
         * /budgets/{budget_id}/categories endpoints interface
         */
        get: function () {
            if (!this._categories) {
                this._categories = new _api__WEBPACK_IMPORTED_MODULE_1__["CategoriesApi"](this._configuration);
            }
            return this._categories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "months", {
        /**
         * /budgets/{budget_id}/months endpoints interface
         */
        get: function () {
            if (!this._months) {
                this._months = new _api__WEBPACK_IMPORTED_MODULE_1__["MonthsApi"](this._configuration);
            }
            return this._months;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "payees", {
        /**
         * /budgets/{budget_id}/payees endpoints interface
         */
        get: function () {
            if (!this._payees) {
                this._payees = new _api__WEBPACK_IMPORTED_MODULE_1__["PayeesApi"](this._configuration);
            }
            return this._payees;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "payeeLocations", {
        /**
         * /budgets/{budget_id}/payee_locations endpoints interface
         */
        get: function () {
            if (!this._payeeLocations) {
                this._payeeLocations = new _api__WEBPACK_IMPORTED_MODULE_1__["PayeeLocationsApi"](this._configuration);
            }
            return this._payeeLocations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "transactions", {
        /**
         * /budgets/{budget_id}/transactions endpoints interface
         */
        get: function () {
            if (!this._transactions) {
                this._transactions = new _transactionsApi__WEBPACK_IMPORTED_MODULE_2__["TransactionsApi"](this._configuration);
            }
            return this._transactions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "scheduledTransactions", {
        /**
         * /budgets/{budget_id}/scheduled_transactions endpoints interface
         */
        get: function () {
            if (!this._scheduledTransactions) {
                this._scheduledTransactions = new _api__WEBPACK_IMPORTED_MODULE_1__["ScheduledTransactionsApi"](this._configuration);
            }
            return this._scheduledTransactions;
        },
        enumerable: true,
        configurable: true
    });
    return api;
}());



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
// tslint:disable
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.youneedabudget.com
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var Configuration = /** @class */ (function () {
    function Configuration(accessToken, basePath) {
        this.apiKey = "Bearer " + accessToken;
        this.basePath = basePath;
    }
    return Configuration;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAPI", function() { return BaseAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredError", function() { return RequiredError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveTransaction", function() { return SaveTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionSummary", function() { return ScheduledTransactionSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionSummary", function() { return TransactionSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HybridTransaction", function() { return HybridTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionDetail", function() { return ScheduledTransactionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetail", function() { return TransactionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsApiFetchParamCreator", function() { return AccountsApiFetchParamCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsApiFp", function() { return AccountsApiFp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsApiFactory", function() { return AccountsApiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsApi", function() { return AccountsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetsApiFetchParamCreator", function() { return BudgetsApiFetchParamCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetsApiFp", function() { return BudgetsApiFp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetsApiFactory", function() { return BudgetsApiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetsApi", function() { return BudgetsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesApiFetchParamCreator", function() { return CategoriesApiFetchParamCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesApiFp", function() { return CategoriesApiFp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesApiFactory", function() { return CategoriesApiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesApi", function() { return CategoriesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeprecatedApiFetchParamCreator", function() { return DeprecatedApiFetchParamCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeprecatedApiFp", function() { return DeprecatedApiFp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeprecatedApiFactory", function() { return DeprecatedApiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeprecatedApi", function() { return DeprecatedApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthsApiFetchParamCreator", function() { return MonthsApiFetchParamCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthsApiFp", function() { return MonthsApiFp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthsApiFactory", function() { return MonthsApiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthsApi", function() { return MonthsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeeLocationsApiFetchParamCreator", function() { return PayeeLocationsApiFetchParamCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeeLocationsApiFp", function() { return PayeeLocationsApiFp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeeLocationsApiFactory", function() { return PayeeLocationsApiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeeLocationsApi", function() { return PayeeLocationsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeesApiFetchParamCreator", function() { return PayeesApiFetchParamCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeesApiFp", function() { return PayeesApiFp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeesApiFactory", function() { return PayeesApiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayeesApi", function() { return PayeesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionsApiFetchParamCreator", function() { return ScheduledTransactionsApiFetchParamCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionsApiFp", function() { return ScheduledTransactionsApiFp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionsApiFactory", function() { return ScheduledTransactionsApiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransactionsApi", function() { return ScheduledTransactionsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsApiFetchParamCreator", function() { return TransactionsApiFetchParamCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsApiFp", function() { return TransactionsApiFp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsApiFactory", function() { return TransactionsApiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsApi", function() { return TransactionsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiFetchParamCreator", function() { return UserApiFetchParamCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiFp", function() { return UserApiFp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiFactory", function() { return UserApiFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
// tslint:disable
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.youneedabudget.com
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// Requiring portable-fetch like this ensures that we have a global fetch function
// That makes it easier to override with modules like fetch-mock
__webpack_require__(21);
var USER_AGENT = "api_client/js/1.13.4";
function convertDateToFullDateStringFormat(date) {
    // Convert to RFC 3339 "full-date" format, like "2017-11-27"
    if (date instanceof Date) {
        return date.toISOString().substring(0, 10);
    }
    else {
        return date;
    }
}
/**
 *
 * @export
 */
var COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
var BaseAPI = /** @class */ (function () {
    function BaseAPI(configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
    }
    return BaseAPI;
}());

;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
var RequiredError = /** @class */ (function (_super) {
    __extends(RequiredError, _super);
    function RequiredError(field, msg) {
        var _this = _super.call(this, msg) || this;
        _this.field = field;
        return _this;
    }
    return RequiredError;
}(Error));

/**
 * @export
 * @namespace Account
 */
var Account;
(function (Account) {
    /**
     * @export
     * @enum {string}
     */
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Checking"] = 'checking'] = "Checking";
        TypeEnum[TypeEnum["Savings"] = 'savings'] = "Savings";
        TypeEnum[TypeEnum["Cash"] = 'cash'] = "Cash";
        TypeEnum[TypeEnum["CreditCard"] = 'creditCard'] = "CreditCard";
        TypeEnum[TypeEnum["LineOfCredit"] = 'lineOfCredit'] = "LineOfCredit";
        TypeEnum[TypeEnum["OtherAsset"] = 'otherAsset'] = "OtherAsset";
        TypeEnum[TypeEnum["OtherLiability"] = 'otherLiability'] = "OtherLiability";
        TypeEnum[TypeEnum["PayPal"] = 'payPal'] = "PayPal";
        TypeEnum[TypeEnum["MerchantAccount"] = 'merchantAccount'] = "MerchantAccount";
        TypeEnum[TypeEnum["InvestmentAccount"] = 'investmentAccount'] = "InvestmentAccount";
        TypeEnum[TypeEnum["Mortgage"] = 'mortgage'] = "Mortgage";
    })(TypeEnum = Account.TypeEnum || (Account.TypeEnum = {}));
})(Account || (Account = {}));
/**
 * @export
 * @namespace Category
 */
var Category;
(function (Category) {
    /**
     * @export
     * @enum {string}
     */
    var GoalTypeEnum;
    (function (GoalTypeEnum) {
        GoalTypeEnum[GoalTypeEnum["TB"] = 'TB'] = "TB";
        GoalTypeEnum[GoalTypeEnum["TBD"] = 'TBD'] = "TBD";
        GoalTypeEnum[GoalTypeEnum["MF"] = 'MF'] = "MF";
    })(GoalTypeEnum = Category.GoalTypeEnum || (Category.GoalTypeEnum = {}));
})(Category || (Category = {}));
/**
 * @export
 * @namespace SaveTransaction
 */
var SaveTransaction;
(function (SaveTransaction) {
    /**
     * @export
     * @enum {string}
     */
    var ClearedEnum;
    (function (ClearedEnum) {
        ClearedEnum[ClearedEnum["Cleared"] = 'cleared'] = "Cleared";
        ClearedEnum[ClearedEnum["Uncleared"] = 'uncleared'] = "Uncleared";
        ClearedEnum[ClearedEnum["Reconciled"] = 'reconciled'] = "Reconciled";
    })(ClearedEnum = SaveTransaction.ClearedEnum || (SaveTransaction.ClearedEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    var FlagColorEnum;
    (function (FlagColorEnum) {
        FlagColorEnum[FlagColorEnum["Red"] = 'red'] = "Red";
        FlagColorEnum[FlagColorEnum["Orange"] = 'orange'] = "Orange";
        FlagColorEnum[FlagColorEnum["Yellow"] = 'yellow'] = "Yellow";
        FlagColorEnum[FlagColorEnum["Green"] = 'green'] = "Green";
        FlagColorEnum[FlagColorEnum["Blue"] = 'blue'] = "Blue";
        FlagColorEnum[FlagColorEnum["Purple"] = 'purple'] = "Purple";
    })(FlagColorEnum = SaveTransaction.FlagColorEnum || (SaveTransaction.FlagColorEnum = {}));
})(SaveTransaction || (SaveTransaction = {}));
/**
 * @export
 * @namespace ScheduledTransactionSummary
 */
var ScheduledTransactionSummary;
(function (ScheduledTransactionSummary) {
    /**
     * @export
     * @enum {string}
     */
    var FrequencyEnum;
    (function (FrequencyEnum) {
        FrequencyEnum[FrequencyEnum["Never"] = 'never'] = "Never";
        FrequencyEnum[FrequencyEnum["Daily"] = 'daily'] = "Daily";
        FrequencyEnum[FrequencyEnum["Weekly"] = 'weekly'] = "Weekly";
        FrequencyEnum[FrequencyEnum["EveryOtherWeek"] = 'everyOtherWeek'] = "EveryOtherWeek";
        FrequencyEnum[FrequencyEnum["TwiceAMonth"] = 'twiceAMonth'] = "TwiceAMonth";
        FrequencyEnum[FrequencyEnum["Every4Weeks"] = 'every4Weeks'] = "Every4Weeks";
        FrequencyEnum[FrequencyEnum["Monthly"] = 'monthly'] = "Monthly";
        FrequencyEnum[FrequencyEnum["EveryOtherMonth"] = 'everyOtherMonth'] = "EveryOtherMonth";
        FrequencyEnum[FrequencyEnum["Every3Months"] = 'every3Months'] = "Every3Months";
        FrequencyEnum[FrequencyEnum["Every4Months"] = 'every4Months'] = "Every4Months";
        FrequencyEnum[FrequencyEnum["TwiceAYear"] = 'twiceAYear'] = "TwiceAYear";
        FrequencyEnum[FrequencyEnum["Yearly"] = 'yearly'] = "Yearly";
        FrequencyEnum[FrequencyEnum["EveryOtherYear"] = 'everyOtherYear'] = "EveryOtherYear";
    })(FrequencyEnum = ScheduledTransactionSummary.FrequencyEnum || (ScheduledTransactionSummary.FrequencyEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    var FlagColorEnum;
    (function (FlagColorEnum) {
        FlagColorEnum[FlagColorEnum["Red"] = 'red'] = "Red";
        FlagColorEnum[FlagColorEnum["Orange"] = 'orange'] = "Orange";
        FlagColorEnum[FlagColorEnum["Yellow"] = 'yellow'] = "Yellow";
        FlagColorEnum[FlagColorEnum["Green"] = 'green'] = "Green";
        FlagColorEnum[FlagColorEnum["Blue"] = 'blue'] = "Blue";
        FlagColorEnum[FlagColorEnum["Purple"] = 'purple'] = "Purple";
    })(FlagColorEnum = ScheduledTransactionSummary.FlagColorEnum || (ScheduledTransactionSummary.FlagColorEnum = {}));
})(ScheduledTransactionSummary || (ScheduledTransactionSummary = {}));
/**
 * @export
 * @namespace TransactionSummary
 */
var TransactionSummary;
(function (TransactionSummary) {
    /**
     * @export
     * @enum {string}
     */
    var ClearedEnum;
    (function (ClearedEnum) {
        ClearedEnum[ClearedEnum["Cleared"] = 'cleared'] = "Cleared";
        ClearedEnum[ClearedEnum["Uncleared"] = 'uncleared'] = "Uncleared";
        ClearedEnum[ClearedEnum["Reconciled"] = 'reconciled'] = "Reconciled";
    })(ClearedEnum = TransactionSummary.ClearedEnum || (TransactionSummary.ClearedEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    var FlagColorEnum;
    (function (FlagColorEnum) {
        FlagColorEnum[FlagColorEnum["Red"] = 'red'] = "Red";
        FlagColorEnum[FlagColorEnum["Orange"] = 'orange'] = "Orange";
        FlagColorEnum[FlagColorEnum["Yellow"] = 'yellow'] = "Yellow";
        FlagColorEnum[FlagColorEnum["Green"] = 'green'] = "Green";
        FlagColorEnum[FlagColorEnum["Blue"] = 'blue'] = "Blue";
        FlagColorEnum[FlagColorEnum["Purple"] = 'purple'] = "Purple";
    })(FlagColorEnum = TransactionSummary.FlagColorEnum || (TransactionSummary.FlagColorEnum = {}));
})(TransactionSummary || (TransactionSummary = {}));
/**
 * @export
 * @namespace HybridTransaction
 */
var HybridTransaction;
(function (HybridTransaction) {
    /**
     * @export
     * @enum {string}
     */
    var ClearedEnum;
    (function (ClearedEnum) {
        ClearedEnum[ClearedEnum["Cleared"] = 'cleared'] = "Cleared";
        ClearedEnum[ClearedEnum["Uncleared"] = 'uncleared'] = "Uncleared";
        ClearedEnum[ClearedEnum["Reconciled"] = 'reconciled'] = "Reconciled";
    })(ClearedEnum = HybridTransaction.ClearedEnum || (HybridTransaction.ClearedEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    var FlagColorEnum;
    (function (FlagColorEnum) {
        FlagColorEnum[FlagColorEnum["Red"] = 'red'] = "Red";
        FlagColorEnum[FlagColorEnum["Orange"] = 'orange'] = "Orange";
        FlagColorEnum[FlagColorEnum["Yellow"] = 'yellow'] = "Yellow";
        FlagColorEnum[FlagColorEnum["Green"] = 'green'] = "Green";
        FlagColorEnum[FlagColorEnum["Blue"] = 'blue'] = "Blue";
        FlagColorEnum[FlagColorEnum["Purple"] = 'purple'] = "Purple";
    })(FlagColorEnum = HybridTransaction.FlagColorEnum || (HybridTransaction.FlagColorEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Transaction"] = 'transaction'] = "Transaction";
        TypeEnum[TypeEnum["Subtransaction"] = 'subtransaction'] = "Subtransaction";
    })(TypeEnum = HybridTransaction.TypeEnum || (HybridTransaction.TypeEnum = {}));
})(HybridTransaction || (HybridTransaction = {}));
/**
 * @export
 * @namespace ScheduledTransactionDetail
 */
var ScheduledTransactionDetail;
(function (ScheduledTransactionDetail) {
    /**
     * @export
     * @enum {string}
     */
    var FrequencyEnum;
    (function (FrequencyEnum) {
        FrequencyEnum[FrequencyEnum["Never"] = 'never'] = "Never";
        FrequencyEnum[FrequencyEnum["Daily"] = 'daily'] = "Daily";
        FrequencyEnum[FrequencyEnum["Weekly"] = 'weekly'] = "Weekly";
        FrequencyEnum[FrequencyEnum["EveryOtherWeek"] = 'everyOtherWeek'] = "EveryOtherWeek";
        FrequencyEnum[FrequencyEnum["TwiceAMonth"] = 'twiceAMonth'] = "TwiceAMonth";
        FrequencyEnum[FrequencyEnum["Every4Weeks"] = 'every4Weeks'] = "Every4Weeks";
        FrequencyEnum[FrequencyEnum["Monthly"] = 'monthly'] = "Monthly";
        FrequencyEnum[FrequencyEnum["EveryOtherMonth"] = 'everyOtherMonth'] = "EveryOtherMonth";
        FrequencyEnum[FrequencyEnum["Every3Months"] = 'every3Months'] = "Every3Months";
        FrequencyEnum[FrequencyEnum["Every4Months"] = 'every4Months'] = "Every4Months";
        FrequencyEnum[FrequencyEnum["TwiceAYear"] = 'twiceAYear'] = "TwiceAYear";
        FrequencyEnum[FrequencyEnum["Yearly"] = 'yearly'] = "Yearly";
        FrequencyEnum[FrequencyEnum["EveryOtherYear"] = 'everyOtherYear'] = "EveryOtherYear";
    })(FrequencyEnum = ScheduledTransactionDetail.FrequencyEnum || (ScheduledTransactionDetail.FrequencyEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    var FlagColorEnum;
    (function (FlagColorEnum) {
        FlagColorEnum[FlagColorEnum["Red"] = 'red'] = "Red";
        FlagColorEnum[FlagColorEnum["Orange"] = 'orange'] = "Orange";
        FlagColorEnum[FlagColorEnum["Yellow"] = 'yellow'] = "Yellow";
        FlagColorEnum[FlagColorEnum["Green"] = 'green'] = "Green";
        FlagColorEnum[FlagColorEnum["Blue"] = 'blue'] = "Blue";
        FlagColorEnum[FlagColorEnum["Purple"] = 'purple'] = "Purple";
    })(FlagColorEnum = ScheduledTransactionDetail.FlagColorEnum || (ScheduledTransactionDetail.FlagColorEnum = {}));
})(ScheduledTransactionDetail || (ScheduledTransactionDetail = {}));
/**
 * @export
 * @namespace TransactionDetail
 */
var TransactionDetail;
(function (TransactionDetail) {
    /**
     * @export
     * @enum {string}
     */
    var ClearedEnum;
    (function (ClearedEnum) {
        ClearedEnum[ClearedEnum["Cleared"] = 'cleared'] = "Cleared";
        ClearedEnum[ClearedEnum["Uncleared"] = 'uncleared'] = "Uncleared";
        ClearedEnum[ClearedEnum["Reconciled"] = 'reconciled'] = "Reconciled";
    })(ClearedEnum = TransactionDetail.ClearedEnum || (TransactionDetail.ClearedEnum = {}));
    /**
     * @export
     * @enum {string}
     */
    var FlagColorEnum;
    (function (FlagColorEnum) {
        FlagColorEnum[FlagColorEnum["Red"] = 'red'] = "Red";
        FlagColorEnum[FlagColorEnum["Orange"] = 'orange'] = "Orange";
        FlagColorEnum[FlagColorEnum["Yellow"] = 'yellow'] = "Yellow";
        FlagColorEnum[FlagColorEnum["Green"] = 'green'] = "Green";
        FlagColorEnum[FlagColorEnum["Blue"] = 'blue'] = "Blue";
        FlagColorEnum[FlagColorEnum["Purple"] = 'purple'] = "Purple";
    })(FlagColorEnum = TransactionDetail.FlagColorEnum || (TransactionDetail.FlagColorEnum = {}));
})(TransactionDetail || (TransactionDetail = {}));
/**
 * AccountsApi - fetch parameter creator
 * @export
 */
var AccountsApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Returns a single account
         * @summary Single account
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} account_id - The id of the account
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getAccountById: function (budget_id, account_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getAccountById.');
            }
            // verify required parameter 'account_id' is not null or undefined
            if (account_id === null || account_id === undefined) {
                throw new RequiredError('account_id', 'Required parameter account_id was null or undefined when calling getAccountById.');
            }
            var localVarPath = "/budgets/{budget_id}/accounts/{account_id}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "account_id" + "}", encodeURIComponent(String(account_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all accounts
         * @summary Account list
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getAccounts: function (budget_id, last_knowledge_of_server, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getAccounts.');
            }
            var localVarPath = "/budgets/{budget_id}/accounts"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            if (last_knowledge_of_server !== undefined) {
                localVarQueryParameter['last_knowledge_of_server'] = last_knowledge_of_server;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * AccountsApi - functional programming interface
 * @export
 */
var AccountsApiFp = function (configuration) {
    return {
        /**
         * Returns a single account
         * @summary Single account
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} account_id - The id of the account
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getAccountById: function (budget_id, account_id, options) {
            var localVarFetchArgs = AccountsApiFetchParamCreator(configuration).getAccountById(budget_id, account_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns all accounts
         * @summary Account list
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getAccounts: function (budget_id, last_knowledge_of_server, options) {
            var localVarFetchArgs = AccountsApiFetchParamCreator(configuration).getAccounts(budget_id, last_knowledge_of_server, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
    };
};
/**
 * AccountsApi - factory interface
 * @export
 */
var AccountsApiFactory = function (configuration) {
    return {
        /**
         * Returns a single account
         * @summary Single account
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} account_id - The id of the account
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getAccountById: function (budget_id, account_id, options) {
            return AccountsApiFp(configuration).getAccountById(budget_id, account_id, options)();
        },
        /**
         * Returns all accounts
         * @summary Account list
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getAccounts: function (budget_id, last_knowledge_of_server, options) {
            return AccountsApiFp(configuration).getAccounts(budget_id, last_knowledge_of_server, options)();
        },
    };
};
/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
var AccountsApi = /** @class */ (function (_super) {
    __extends(AccountsApi, _super);
    function AccountsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a single account
     * @summary Single account
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} account_id - The id of the account
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    AccountsApi.prototype.getAccountById = function (budget_id, account_id, options) {
        return AccountsApiFp(this.configuration).getAccountById(budget_id, account_id, options)();
    };
    /**
     * Returns all accounts
     * @summary Account list
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    AccountsApi.prototype.getAccounts = function (budget_id, last_knowledge_of_server, options) {
        return AccountsApiFp(this.configuration).getAccounts(budget_id, last_knowledge_of_server, options)();
    };
    return AccountsApi;
}(BaseAPI));

/**
 * BudgetsApi - fetch parameter creator
 * @export
 */
var BudgetsApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Returns a single budget with all related entities.  This resource is effectively a full budget export.
         * @summary Single budget
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetById: function (budget_id, last_knowledge_of_server, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getBudgetById.');
            }
            var localVarPath = "/budgets/{budget_id}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            if (last_knowledge_of_server !== undefined) {
                localVarQueryParameter['last_knowledge_of_server'] = last_knowledge_of_server;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns settings for a budget
         * @summary Budget Settings
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetSettingsById: function (budget_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getBudgetSettingsById.');
            }
            var localVarPath = "/budgets/{budget_id}/settings"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns budgets list with summary information
         * @summary List budgets
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgets: function (options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/budgets";
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * BudgetsApi - functional programming interface
 * @export
 */
var BudgetsApiFp = function (configuration) {
    return {
        /**
         * Returns a single budget with all related entities.  This resource is effectively a full budget export.
         * @summary Single budget
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetById: function (budget_id, last_knowledge_of_server, options) {
            var localVarFetchArgs = BudgetsApiFetchParamCreator(configuration).getBudgetById(budget_id, last_knowledge_of_server, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns settings for a budget
         * @summary Budget Settings
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetSettingsById: function (budget_id, options) {
            var localVarFetchArgs = BudgetsApiFetchParamCreator(configuration).getBudgetSettingsById(budget_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns budgets list with summary information
         * @summary List budgets
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgets: function (options) {
            var localVarFetchArgs = BudgetsApiFetchParamCreator(configuration).getBudgets(options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
    };
};
/**
 * BudgetsApi - factory interface
 * @export
 */
var BudgetsApiFactory = function (configuration) {
    return {
        /**
         * Returns a single budget with all related entities.  This resource is effectively a full budget export.
         * @summary Single budget
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetById: function (budget_id, last_knowledge_of_server, options) {
            return BudgetsApiFp(configuration).getBudgetById(budget_id, last_knowledge_of_server, options)();
        },
        /**
         * Returns settings for a budget
         * @summary Budget Settings
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetSettingsById: function (budget_id, options) {
            return BudgetsApiFp(configuration).getBudgetSettingsById(budget_id, options)();
        },
        /**
         * Returns budgets list with summary information
         * @summary List budgets
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgets: function (options) {
            return BudgetsApiFp(configuration).getBudgets(options)();
        },
    };
};
/**
 * BudgetsApi - object-oriented interface
 * @export
 * @class BudgetsApi
 * @extends {BaseAPI}
 */
var BudgetsApi = /** @class */ (function (_super) {
    __extends(BudgetsApi, _super);
    function BudgetsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a single budget with all related entities.  This resource is effectively a full budget export.
     * @summary Single budget
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof BudgetsApi
     */
    BudgetsApi.prototype.getBudgetById = function (budget_id, last_knowledge_of_server, options) {
        return BudgetsApiFp(this.configuration).getBudgetById(budget_id, last_knowledge_of_server, options)();
    };
    /**
     * Returns settings for a budget
     * @summary Budget Settings
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof BudgetsApi
     */
    BudgetsApi.prototype.getBudgetSettingsById = function (budget_id, options) {
        return BudgetsApiFp(this.configuration).getBudgetSettingsById(budget_id, options)();
    };
    /**
     * Returns budgets list with summary information
     * @summary List budgets
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof BudgetsApi
     */
    BudgetsApi.prototype.getBudgets = function (options) {
        return BudgetsApiFp(this.configuration).getBudgets(options)();
    };
    return BudgetsApi;
}(BaseAPI));

/**
 * CategoriesApi - fetch parameter creator
 * @export
 */
var CategoriesApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
         * @summary List categories
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getCategories: function (budget_id, last_knowledge_of_server, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getCategories.');
            }
            var localVarPath = "/budgets/{budget_id}/categories"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            if (last_knowledge_of_server !== undefined) {
                localVarQueryParameter['last_knowledge_of_server'] = last_knowledge_of_server;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
         * @summary Single category
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} category_id - The id of the category
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getCategoryById: function (budget_id, category_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getCategoryById.');
            }
            // verify required parameter 'category_id' is not null or undefined
            if (category_id === null || category_id === undefined) {
                throw new RequiredError('category_id', 'Required parameter category_id was null or undefined when calling getCategoryById.');
            }
            var localVarPath = "/budgets/{budget_id}/categories/{category_id}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "category_id" + "}", encodeURIComponent(String(category_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
         * @summary Single category for a specific budget month
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
         * @param {string} category_id - The id of the category
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getMonthCategoryById: function (budget_id, month, category_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getMonthCategoryById.');
            }
            // verify required parameter 'month' is not null or undefined
            if (month === null || month === undefined) {
                throw new RequiredError('month', 'Required parameter month was null or undefined when calling getMonthCategoryById.');
            }
            // verify required parameter 'category_id' is not null or undefined
            if (category_id === null || category_id === undefined) {
                throw new RequiredError('category_id', 'Required parameter category_id was null or undefined when calling getMonthCategoryById.');
            }
            var localVarPath = "/budgets/{budget_id}/months/{month}/categories/{category_id}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "month" + "}", encodeURIComponent(convertDateToFullDateStringFormat(month)))
                .replace("{" + "category_id" + "}", encodeURIComponent(String(category_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a category for a specific month
         * @summary Update a category for a specific month
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
         * @param {string} category_id - The id of the category
         * @param {SaveMonthCategoryWrapper} data - The category to update
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        updateMonthCategory: function (budget_id, month, category_id, data, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling updateMonthCategory.');
            }
            // verify required parameter 'month' is not null or undefined
            if (month === null || month === undefined) {
                throw new RequiredError('month', 'Required parameter month was null or undefined when calling updateMonthCategory.');
            }
            // verify required parameter 'category_id' is not null or undefined
            if (category_id === null || category_id === undefined) {
                throw new RequiredError('category_id', 'Required parameter category_id was null or undefined when calling updateMonthCategory.');
            }
            // verify required parameter 'data' is not null or undefined
            if (data === null || data === undefined) {
                throw new RequiredError('data', 'Required parameter data was null or undefined when calling updateMonthCategory.');
            }
            var localVarPath = "/budgets/{budget_id}/months/{month}/categories/{category_id}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "month" + "}", encodeURIComponent(convertDateToFullDateStringFormat(month)))
                .replace("{" + "category_id" + "}", encodeURIComponent(String(category_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            localVarRequestOptions.body = JSON.stringify(data || {});
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * CategoriesApi - functional programming interface
 * @export
 */
var CategoriesApiFp = function (configuration) {
    return {
        /**
         * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
         * @summary List categories
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getCategories: function (budget_id, last_knowledge_of_server, options) {
            var localVarFetchArgs = CategoriesApiFetchParamCreator(configuration).getCategories(budget_id, last_knowledge_of_server, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
         * @summary Single category
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} category_id - The id of the category
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getCategoryById: function (budget_id, category_id, options) {
            var localVarFetchArgs = CategoriesApiFetchParamCreator(configuration).getCategoryById(budget_id, category_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
         * @summary Single category for a specific budget month
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
         * @param {string} category_id - The id of the category
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getMonthCategoryById: function (budget_id, month, category_id, options) {
            var localVarFetchArgs = CategoriesApiFetchParamCreator(configuration).getMonthCategoryById(budget_id, month, category_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Update a category for a specific month
         * @summary Update a category for a specific month
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
         * @param {string} category_id - The id of the category
         * @param {SaveMonthCategoryWrapper} data - The category to update
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        updateMonthCategory: function (budget_id, month, category_id, data, options) {
            var localVarFetchArgs = CategoriesApiFetchParamCreator(configuration).updateMonthCategory(budget_id, month, category_id, data, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
    };
};
/**
 * CategoriesApi - factory interface
 * @export
 */
var CategoriesApiFactory = function (configuration) {
    return {
        /**
         * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
         * @summary List categories
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getCategories: function (budget_id, last_knowledge_of_server, options) {
            return CategoriesApiFp(configuration).getCategories(budget_id, last_knowledge_of_server, options)();
        },
        /**
         * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
         * @summary Single category
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} category_id - The id of the category
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getCategoryById: function (budget_id, category_id, options) {
            return CategoriesApiFp(configuration).getCategoryById(budget_id, category_id, options)();
        },
        /**
         * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
         * @summary Single category for a specific budget month
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
         * @param {string} category_id - The id of the category
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getMonthCategoryById: function (budget_id, month, category_id, options) {
            return CategoriesApiFp(configuration).getMonthCategoryById(budget_id, month, category_id, options)();
        },
        /**
         * Update a category for a specific month
         * @summary Update a category for a specific month
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
         * @param {string} category_id - The id of the category
         * @param {SaveMonthCategoryWrapper} data - The category to update
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        updateMonthCategory: function (budget_id, month, category_id, data, options) {
            return CategoriesApiFp(configuration).updateMonthCategory(budget_id, month, category_id, data, options)();
        },
    };
};
/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
var CategoriesApi = /** @class */ (function (_super) {
    __extends(CategoriesApi, _super);
    function CategoriesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * @summary List categories
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    CategoriesApi.prototype.getCategories = function (budget_id, last_knowledge_of_server, options) {
        return CategoriesApiFp(this.configuration).getCategories(budget_id, last_knowledge_of_server, options)();
    };
    /**
     * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * @summary Single category
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} category_id - The id of the category
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    CategoriesApi.prototype.getCategoryById = function (budget_id, category_id, options) {
        return CategoriesApiFp(this.configuration).getCategoryById(budget_id, category_id, options)();
    };
    /**
     * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * @summary Single category for a specific budget month
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
     * @param {string} category_id - The id of the category
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    CategoriesApi.prototype.getMonthCategoryById = function (budget_id, month, category_id, options) {
        return CategoriesApiFp(this.configuration).getMonthCategoryById(budget_id, month, category_id, options)();
    };
    /**
     * Update a category for a specific month
     * @summary Update a category for a specific month
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
     * @param {string} category_id - The id of the category
     * @param {SaveMonthCategoryWrapper} data - The category to update
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    CategoriesApi.prototype.updateMonthCategory = function (budget_id, month, category_id, data, options) {
        return CategoriesApiFp(this.configuration).updateMonthCategory(budget_id, month, category_id, data, options)();
    };
    return CategoriesApi;
}(BaseAPI));

/**
 * DeprecatedApi - fetch parameter creator
 * @export
 */
var DeprecatedApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
         * @summary Bulk create transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {BulkTransactions} transactions - The list of transactions to create
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        bulkCreateTransactions: function (budget_id, transactions, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling bulkCreateTransactions.');
            }
            // verify required parameter 'transactions' is not null or undefined
            if (transactions === null || transactions === undefined) {
                throw new RequiredError('transactions', 'Required parameter transactions was null or undefined when calling bulkCreateTransactions.');
            }
            var localVarPath = "/budgets/{budget_id}/transactions/bulk"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            localVarRequestOptions.body = JSON.stringify(transactions || {});
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * DeprecatedApi - functional programming interface
 * @export
 */
var DeprecatedApiFp = function (configuration) {
    return {
        /**
         * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
         * @summary Bulk create transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {BulkTransactions} transactions - The list of transactions to create
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        bulkCreateTransactions: function (budget_id, transactions, options) {
            var localVarFetchArgs = DeprecatedApiFetchParamCreator(configuration).bulkCreateTransactions(budget_id, transactions, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
    };
};
/**
 * DeprecatedApi - factory interface
 * @export
 */
var DeprecatedApiFactory = function (configuration) {
    return {
        /**
         * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
         * @summary Bulk create transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {BulkTransactions} transactions - The list of transactions to create
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        bulkCreateTransactions: function (budget_id, transactions, options) {
            return DeprecatedApiFp(configuration).bulkCreateTransactions(budget_id, transactions, options)();
        },
    };
};
/**
 * DeprecatedApi - object-oriented interface
 * @export
 * @class DeprecatedApi
 * @extends {BaseAPI}
 */
var DeprecatedApi = /** @class */ (function (_super) {
    __extends(DeprecatedApi, _super);
    function DeprecatedApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
     * @summary Bulk create transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {BulkTransactions} transactions - The list of transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof DeprecatedApi
     */
    DeprecatedApi.prototype.bulkCreateTransactions = function (budget_id, transactions, options) {
        return DeprecatedApiFp(this.configuration).bulkCreateTransactions(budget_id, transactions, options)();
    };
    return DeprecatedApi;
}(BaseAPI));

/**
 * MonthsApi - fetch parameter creator
 * @export
 */
var MonthsApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Returns a single budget month
         * @summary Single budget month
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetMonth: function (budget_id, month, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getBudgetMonth.');
            }
            // verify required parameter 'month' is not null or undefined
            if (month === null || month === undefined) {
                throw new RequiredError('month', 'Required parameter month was null or undefined when calling getBudgetMonth.');
            }
            var localVarPath = "/budgets/{budget_id}/months/{month}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "month" + "}", encodeURIComponent(convertDateToFullDateStringFormat(month)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all budget months
         * @summary List budget months
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetMonths: function (budget_id, last_knowledge_of_server, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getBudgetMonths.');
            }
            var localVarPath = "/budgets/{budget_id}/months"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            if (last_knowledge_of_server !== undefined) {
                localVarQueryParameter['last_knowledge_of_server'] = last_knowledge_of_server;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * MonthsApi - functional programming interface
 * @export
 */
var MonthsApiFp = function (configuration) {
    return {
        /**
         * Returns a single budget month
         * @summary Single budget month
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetMonth: function (budget_id, month, options) {
            var localVarFetchArgs = MonthsApiFetchParamCreator(configuration).getBudgetMonth(budget_id, month, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns all budget months
         * @summary List budget months
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetMonths: function (budget_id, last_knowledge_of_server, options) {
            var localVarFetchArgs = MonthsApiFetchParamCreator(configuration).getBudgetMonths(budget_id, last_knowledge_of_server, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
    };
};
/**
 * MonthsApi - factory interface
 * @export
 */
var MonthsApiFactory = function (configuration) {
    return {
        /**
         * Returns a single budget month
         * @summary Single budget month
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetMonth: function (budget_id, month, options) {
            return MonthsApiFp(configuration).getBudgetMonth(budget_id, month, options)();
        },
        /**
         * Returns all budget months
         * @summary List budget months
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getBudgetMonths: function (budget_id, last_knowledge_of_server, options) {
            return MonthsApiFp(configuration).getBudgetMonths(budget_id, last_knowledge_of_server, options)();
        },
    };
};
/**
 * MonthsApi - object-oriented interface
 * @export
 * @class MonthsApi
 * @extends {BaseAPI}
 */
var MonthsApi = /** @class */ (function (_super) {
    __extends(MonthsApi, _super);
    function MonthsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a single budget month
     * @summary Single budget month
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {Date} month - The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof MonthsApi
     */
    MonthsApi.prototype.getBudgetMonth = function (budget_id, month, options) {
        return MonthsApiFp(this.configuration).getBudgetMonth(budget_id, month, options)();
    };
    /**
     * Returns all budget months
     * @summary List budget months
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof MonthsApi
     */
    MonthsApi.prototype.getBudgetMonths = function (budget_id, last_knowledge_of_server, options) {
        return MonthsApiFp(this.configuration).getBudgetMonths(budget_id, last_knowledge_of_server, options)();
    };
    return MonthsApi;
}(BaseAPI));

/**
 * PayeeLocationsApi - fetch parameter creator
 * @export
 */
var PayeeLocationsApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Returns a single payee location
         * @summary Single payee location
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_location_id - id of payee location
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeLocationById: function (budget_id, payee_location_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getPayeeLocationById.');
            }
            // verify required parameter 'payee_location_id' is not null or undefined
            if (payee_location_id === null || payee_location_id === undefined) {
                throw new RequiredError('payee_location_id', 'Required parameter payee_location_id was null or undefined when calling getPayeeLocationById.');
            }
            var localVarPath = "/budgets/{budget_id}/payee_locations/{payee_location_id}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "payee_location_id" + "}", encodeURIComponent(String(payee_location_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all payee locations
         * @summary List payee locations
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeLocations: function (budget_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getPayeeLocations.');
            }
            var localVarPath = "/budgets/{budget_id}/payee_locations"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all payee locations for the specified payee
         * @summary List locations for a payee
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_id - id of payee
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeLocationsByPayee: function (budget_id, payee_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getPayeeLocationsByPayee.');
            }
            // verify required parameter 'payee_id' is not null or undefined
            if (payee_id === null || payee_id === undefined) {
                throw new RequiredError('payee_id', 'Required parameter payee_id was null or undefined when calling getPayeeLocationsByPayee.');
            }
            var localVarPath = "/budgets/{budget_id}/payees/{payee_id}/payee_locations"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "payee_id" + "}", encodeURIComponent(String(payee_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * PayeeLocationsApi - functional programming interface
 * @export
 */
var PayeeLocationsApiFp = function (configuration) {
    return {
        /**
         * Returns a single payee location
         * @summary Single payee location
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_location_id - id of payee location
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeLocationById: function (budget_id, payee_location_id, options) {
            var localVarFetchArgs = PayeeLocationsApiFetchParamCreator(configuration).getPayeeLocationById(budget_id, payee_location_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns all payee locations
         * @summary List payee locations
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeLocations: function (budget_id, options) {
            var localVarFetchArgs = PayeeLocationsApiFetchParamCreator(configuration).getPayeeLocations(budget_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns all payee locations for the specified payee
         * @summary List locations for a payee
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_id - id of payee
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeLocationsByPayee: function (budget_id, payee_id, options) {
            var localVarFetchArgs = PayeeLocationsApiFetchParamCreator(configuration).getPayeeLocationsByPayee(budget_id, payee_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
    };
};
/**
 * PayeeLocationsApi - factory interface
 * @export
 */
var PayeeLocationsApiFactory = function (configuration) {
    return {
        /**
         * Returns a single payee location
         * @summary Single payee location
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_location_id - id of payee location
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeLocationById: function (budget_id, payee_location_id, options) {
            return PayeeLocationsApiFp(configuration).getPayeeLocationById(budget_id, payee_location_id, options)();
        },
        /**
         * Returns all payee locations
         * @summary List payee locations
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeLocations: function (budget_id, options) {
            return PayeeLocationsApiFp(configuration).getPayeeLocations(budget_id, options)();
        },
        /**
         * Returns all payee locations for the specified payee
         * @summary List locations for a payee
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_id - id of payee
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeLocationsByPayee: function (budget_id, payee_id, options) {
            return PayeeLocationsApiFp(configuration).getPayeeLocationsByPayee(budget_id, payee_id, options)();
        },
    };
};
/**
 * PayeeLocationsApi - object-oriented interface
 * @export
 * @class PayeeLocationsApi
 * @extends {BaseAPI}
 */
var PayeeLocationsApi = /** @class */ (function (_super) {
    __extends(PayeeLocationsApi, _super);
    function PayeeLocationsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a single payee location
     * @summary Single payee location
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} payee_location_id - id of payee location
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    PayeeLocationsApi.prototype.getPayeeLocationById = function (budget_id, payee_location_id, options) {
        return PayeeLocationsApiFp(this.configuration).getPayeeLocationById(budget_id, payee_location_id, options)();
    };
    /**
     * Returns all payee locations
     * @summary List payee locations
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    PayeeLocationsApi.prototype.getPayeeLocations = function (budget_id, options) {
        return PayeeLocationsApiFp(this.configuration).getPayeeLocations(budget_id, options)();
    };
    /**
     * Returns all payee locations for the specified payee
     * @summary List locations for a payee
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} payee_id - id of payee
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    PayeeLocationsApi.prototype.getPayeeLocationsByPayee = function (budget_id, payee_id, options) {
        return PayeeLocationsApiFp(this.configuration).getPayeeLocationsByPayee(budget_id, payee_id, options)();
    };
    return PayeeLocationsApi;
}(BaseAPI));

/**
 * PayeesApi - fetch parameter creator
 * @export
 */
var PayeesApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Returns single payee
         * @summary Single payee
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_id - The id of the payee
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeById: function (budget_id, payee_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getPayeeById.');
            }
            // verify required parameter 'payee_id' is not null or undefined
            if (payee_id === null || payee_id === undefined) {
                throw new RequiredError('payee_id', 'Required parameter payee_id was null or undefined when calling getPayeeById.');
            }
            var localVarPath = "/budgets/{budget_id}/payees/{payee_id}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "payee_id" + "}", encodeURIComponent(String(payee_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all payees
         * @summary List payees
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayees: function (budget_id, last_knowledge_of_server, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getPayees.');
            }
            var localVarPath = "/budgets/{budget_id}/payees"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            if (last_knowledge_of_server !== undefined) {
                localVarQueryParameter['last_knowledge_of_server'] = last_knowledge_of_server;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * PayeesApi - functional programming interface
 * @export
 */
var PayeesApiFp = function (configuration) {
    return {
        /**
         * Returns single payee
         * @summary Single payee
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_id - The id of the payee
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeById: function (budget_id, payee_id, options) {
            var localVarFetchArgs = PayeesApiFetchParamCreator(configuration).getPayeeById(budget_id, payee_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns all payees
         * @summary List payees
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayees: function (budget_id, last_knowledge_of_server, options) {
            var localVarFetchArgs = PayeesApiFetchParamCreator(configuration).getPayees(budget_id, last_knowledge_of_server, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
    };
};
/**
 * PayeesApi - factory interface
 * @export
 */
var PayeesApiFactory = function (configuration) {
    return {
        /**
         * Returns single payee
         * @summary Single payee
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_id - The id of the payee
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayeeById: function (budget_id, payee_id, options) {
            return PayeesApiFp(configuration).getPayeeById(budget_id, payee_id, options)();
        },
        /**
         * Returns all payees
         * @summary List payees
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getPayees: function (budget_id, last_knowledge_of_server, options) {
            return PayeesApiFp(configuration).getPayees(budget_id, last_knowledge_of_server, options)();
        },
    };
};
/**
 * PayeesApi - object-oriented interface
 * @export
 * @class PayeesApi
 * @extends {BaseAPI}
 */
var PayeesApi = /** @class */ (function (_super) {
    __extends(PayeesApi, _super);
    function PayeesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns single payee
     * @summary Single payee
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} payee_id - The id of the payee
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeesApi
     */
    PayeesApi.prototype.getPayeeById = function (budget_id, payee_id, options) {
        return PayeesApiFp(this.configuration).getPayeeById(budget_id, payee_id, options)();
    };
    /**
     * Returns all payees
     * @summary List payees
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeesApi
     */
    PayeesApi.prototype.getPayees = function (budget_id, last_knowledge_of_server, options) {
        return PayeesApiFp(this.configuration).getPayees(budget_id, last_knowledge_of_server, options)();
    };
    return PayeesApi;
}(BaseAPI));

/**
 * ScheduledTransactionsApi - fetch parameter creator
 * @export
 */
var ScheduledTransactionsApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Returns a single scheduled transaction
         * @summary Single scheduled transaction
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} scheduled_transaction_id - The id of the scheduled transaction
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getScheduledTransactionById: function (budget_id, scheduled_transaction_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getScheduledTransactionById.');
            }
            // verify required parameter 'scheduled_transaction_id' is not null or undefined
            if (scheduled_transaction_id === null || scheduled_transaction_id === undefined) {
                throw new RequiredError('scheduled_transaction_id', 'Required parameter scheduled_transaction_id was null or undefined when calling getScheduledTransactionById.');
            }
            var localVarPath = "/budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "scheduled_transaction_id" + "}", encodeURIComponent(String(scheduled_transaction_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all scheduled transactions
         * @summary List scheduled transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getScheduledTransactions: function (budget_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getScheduledTransactions.');
            }
            var localVarPath = "/budgets/{budget_id}/scheduled_transactions"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * ScheduledTransactionsApi - functional programming interface
 * @export
 */
var ScheduledTransactionsApiFp = function (configuration) {
    return {
        /**
         * Returns a single scheduled transaction
         * @summary Single scheduled transaction
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} scheduled_transaction_id - The id of the scheduled transaction
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getScheduledTransactionById: function (budget_id, scheduled_transaction_id, options) {
            var localVarFetchArgs = ScheduledTransactionsApiFetchParamCreator(configuration).getScheduledTransactionById(budget_id, scheduled_transaction_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns all scheduled transactions
         * @summary List scheduled transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getScheduledTransactions: function (budget_id, options) {
            var localVarFetchArgs = ScheduledTransactionsApiFetchParamCreator(configuration).getScheduledTransactions(budget_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
    };
};
/**
 * ScheduledTransactionsApi - factory interface
 * @export
 */
var ScheduledTransactionsApiFactory = function (configuration) {
    return {
        /**
         * Returns a single scheduled transaction
         * @summary Single scheduled transaction
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} scheduled_transaction_id - The id of the scheduled transaction
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getScheduledTransactionById: function (budget_id, scheduled_transaction_id, options) {
            return ScheduledTransactionsApiFp(configuration).getScheduledTransactionById(budget_id, scheduled_transaction_id, options)();
        },
        /**
         * Returns all scheduled transactions
         * @summary List scheduled transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getScheduledTransactions: function (budget_id, options) {
            return ScheduledTransactionsApiFp(configuration).getScheduledTransactions(budget_id, options)();
        },
    };
};
/**
 * ScheduledTransactionsApi - object-oriented interface
 * @export
 * @class ScheduledTransactionsApi
 * @extends {BaseAPI}
 */
var ScheduledTransactionsApi = /** @class */ (function (_super) {
    __extends(ScheduledTransactionsApi, _super);
    function ScheduledTransactionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a single scheduled transaction
     * @summary Single scheduled transaction
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} scheduled_transaction_id - The id of the scheduled transaction
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof ScheduledTransactionsApi
     */
    ScheduledTransactionsApi.prototype.getScheduledTransactionById = function (budget_id, scheduled_transaction_id, options) {
        return ScheduledTransactionsApiFp(this.configuration).getScheduledTransactionById(budget_id, scheduled_transaction_id, options)();
    };
    /**
     * Returns all scheduled transactions
     * @summary List scheduled transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof ScheduledTransactionsApi
     */
    ScheduledTransactionsApi.prototype.getScheduledTransactions = function (budget_id, options) {
        return ScheduledTransactionsApiFp(this.configuration).getScheduledTransactions(budget_id, options)();
    };
    return ScheduledTransactionsApi;
}(BaseAPI));

/**
 * TransactionsApi - fetch parameter creator
 * @export
 */
var TransactionsApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Creates a single transaction or multiple transactions.  If you provide a body containing a 'transaction' object, a single transaction will be created and if you provide a body containing a 'transactions' array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.
         * @summary Create a single transaction or multiple transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {SaveTransactionsWrapper} data - The transaction or transactions to create.  To create a single transaction you can specify a value for the 'transaction' object and to create multiple transactions you can specify an array of 'transactions'.  It is expected that you will only provide a value for one of these objects.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        createTransaction: function (budget_id, data, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling createTransaction.');
            }
            // verify required parameter 'data' is not null or undefined
            if (data === null || data === undefined) {
                throw new RequiredError('data', 'Required parameter data was null or undefined when calling createTransaction.');
            }
            var localVarPath = "/budgets/{budget_id}/transactions"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            localVarRequestOptions.body = JSON.stringify(data || {});
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single transaction
         * @summary Single transaction
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} transaction_id - The id of the transaction
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionById: function (budget_id, transaction_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getTransactionById.');
            }
            // verify required parameter 'transaction_id' is not null or undefined
            if (transaction_id === null || transaction_id === undefined) {
                throw new RequiredError('transaction_id', 'Required parameter transaction_id was null or undefined when calling getTransactionById.');
            }
            var localVarPath = "/budgets/{budget_id}/transactions/{transaction_id}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "transaction_id" + "}", encodeURIComponent(String(transaction_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns budget transactions
         * @summary List transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactions: function (budget_id, since_date, type, last_knowledge_of_server, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getTransactions.');
            }
            var localVarPath = "/budgets/{budget_id}/transactions"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            if (since_date !== undefined) {
                localVarQueryParameter['since_date'] = convertDateToFullDateStringFormat(since_date);
            }
            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (last_knowledge_of_server !== undefined) {
                localVarQueryParameter['last_knowledge_of_server'] = last_knowledge_of_server;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all transactions for a specified account
         * @summary List account transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} account_id - The id of the account
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionsByAccount: function (budget_id, account_id, since_date, type, last_knowledge_of_server, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getTransactionsByAccount.');
            }
            // verify required parameter 'account_id' is not null or undefined
            if (account_id === null || account_id === undefined) {
                throw new RequiredError('account_id', 'Required parameter account_id was null or undefined when calling getTransactionsByAccount.');
            }
            var localVarPath = "/budgets/{budget_id}/accounts/{account_id}/transactions"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "account_id" + "}", encodeURIComponent(String(account_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            if (since_date !== undefined) {
                localVarQueryParameter['since_date'] = convertDateToFullDateStringFormat(since_date);
            }
            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (last_knowledge_of_server !== undefined) {
                localVarQueryParameter['last_knowledge_of_server'] = last_knowledge_of_server;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all transactions for a specified category
         * @summary List category transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} category_id - The id of the category
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionsByCategory: function (budget_id, category_id, since_date, type, last_knowledge_of_server, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getTransactionsByCategory.');
            }
            // verify required parameter 'category_id' is not null or undefined
            if (category_id === null || category_id === undefined) {
                throw new RequiredError('category_id', 'Required parameter category_id was null or undefined when calling getTransactionsByCategory.');
            }
            var localVarPath = "/budgets/{budget_id}/categories/{category_id}/transactions"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "category_id" + "}", encodeURIComponent(String(category_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            if (since_date !== undefined) {
                localVarQueryParameter['since_date'] = convertDateToFullDateStringFormat(since_date);
            }
            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (last_knowledge_of_server !== undefined) {
                localVarQueryParameter['last_knowledge_of_server'] = last_knowledge_of_server;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all transactions for a specified payee
         * @summary List payee transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_id - The id of the payee
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionsByPayee: function (budget_id, payee_id, since_date, type, last_knowledge_of_server, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling getTransactionsByPayee.');
            }
            // verify required parameter 'payee_id' is not null or undefined
            if (payee_id === null || payee_id === undefined) {
                throw new RequiredError('payee_id', 'Required parameter payee_id was null or undefined when calling getTransactionsByPayee.');
            }
            var localVarPath = "/budgets/{budget_id}/payees/{payee_id}/transactions"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "payee_id" + "}", encodeURIComponent(String(payee_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            if (since_date !== undefined) {
                localVarQueryParameter['since_date'] = convertDateToFullDateStringFormat(since_date);
            }
            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (last_knowledge_of_server !== undefined) {
                localVarQueryParameter['last_knowledge_of_server'] = last_knowledge_of_server;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a transaction
         * @summary Updates an existing transaction
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} transaction_id - The id of the transaction
         * @param {SaveTransactionWrapper} data - The transaction to update
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        updateTransaction: function (budget_id, transaction_id, data, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling updateTransaction.');
            }
            // verify required parameter 'transaction_id' is not null or undefined
            if (transaction_id === null || transaction_id === undefined) {
                throw new RequiredError('transaction_id', 'Required parameter transaction_id was null or undefined when calling updateTransaction.');
            }
            // verify required parameter 'data' is not null or undefined
            if (data === null || data === undefined) {
                throw new RequiredError('data', 'Required parameter data was null or undefined when calling updateTransaction.');
            }
            var localVarPath = "/budgets/{budget_id}/transactions/{transaction_id}"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)))
                .replace("{" + "transaction_id" + "}", encodeURIComponent(String(transaction_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            localVarRequestOptions.body = JSON.stringify(data || {});
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates multiple transactions, by 'id' or 'import_id'.
         * @summary Update multiple transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {SaveTransactionsWrapper} data - The transactions to update.  Optionally, transaction 'id' value(s) can be specified as null and an 'import_id' value can be provided which will allow transaction(s) to updated by their import_id.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        updateTransactions: function (budget_id, data, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'budget_id' is not null or undefined
            if (budget_id === null || budget_id === undefined) {
                throw new RequiredError('budget_id', 'Required parameter budget_id was null or undefined when calling updateTransactions.');
            }
            // verify required parameter 'data' is not null or undefined
            if (data === null || data === undefined) {
                throw new RequiredError('data', 'Required parameter data was null or undefined when calling updateTransactions.');
            }
            var localVarPath = "/budgets/{budget_id}/transactions"
                .replace("{" + "budget_id" + "}", encodeURIComponent(String(budget_id)));
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'PATCH' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            localVarRequestOptions.body = JSON.stringify(data || {});
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * TransactionsApi - functional programming interface
 * @export
 */
var TransactionsApiFp = function (configuration) {
    return {
        /**
         * Creates a single transaction or multiple transactions.  If you provide a body containing a 'transaction' object, a single transaction will be created and if you provide a body containing a 'transactions' array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.
         * @summary Create a single transaction or multiple transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {SaveTransactionsWrapper} data - The transaction or transactions to create.  To create a single transaction you can specify a value for the 'transaction' object and to create multiple transactions you can specify an array of 'transactions'.  It is expected that you will only provide a value for one of these objects.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        createTransaction: function (budget_id, data, options) {
            var localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).createTransaction(budget_id, data, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns a single transaction
         * @summary Single transaction
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} transaction_id - The id of the transaction
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionById: function (budget_id, transaction_id, options) {
            var localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).getTransactionById(budget_id, transaction_id, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns budget transactions
         * @summary List transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactions: function (budget_id, since_date, type, last_knowledge_of_server, options) {
            var localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).getTransactions(budget_id, since_date, type, last_knowledge_of_server, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns all transactions for a specified account
         * @summary List account transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} account_id - The id of the account
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionsByAccount: function (budget_id, account_id, since_date, type, last_knowledge_of_server, options) {
            var localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).getTransactionsByAccount(budget_id, account_id, since_date, type, last_knowledge_of_server, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns all transactions for a specified category
         * @summary List category transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} category_id - The id of the category
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionsByCategory: function (budget_id, category_id, since_date, type, last_knowledge_of_server, options) {
            var localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).getTransactionsByCategory(budget_id, category_id, since_date, type, last_knowledge_of_server, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Returns all transactions for a specified payee
         * @summary List payee transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_id - The id of the payee
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionsByPayee: function (budget_id, payee_id, since_date, type, last_knowledge_of_server, options) {
            var localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).getTransactionsByPayee(budget_id, payee_id, since_date, type, last_knowledge_of_server, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Updates a transaction
         * @summary Updates an existing transaction
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} transaction_id - The id of the transaction
         * @param {SaveTransactionWrapper} data - The transaction to update
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        updateTransaction: function (budget_id, transaction_id, data, options) {
            var localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).updateTransaction(budget_id, transaction_id, data, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
        /**
         * Updates multiple transactions, by 'id' or 'import_id'.
         * @summary Update multiple transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {SaveTransactionsWrapper} data - The transactions to update.  Optionally, transaction 'id' value(s) can be specified as null and an 'import_id' value can be provided which will allow transaction(s) to updated by their import_id.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        updateTransactions: function (budget_id, data, options) {
            var localVarFetchArgs = TransactionsApiFetchParamCreator(configuration).updateTransactions(budget_id, data, options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
    };
};
/**
 * TransactionsApi - factory interface
 * @export
 */
var TransactionsApiFactory = function (configuration) {
    return {
        /**
         * Creates a single transaction or multiple transactions.  If you provide a body containing a 'transaction' object, a single transaction will be created and if you provide a body containing a 'transactions' array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.
         * @summary Create a single transaction or multiple transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {SaveTransactionsWrapper} data - The transaction or transactions to create.  To create a single transaction you can specify a value for the 'transaction' object and to create multiple transactions you can specify an array of 'transactions'.  It is expected that you will only provide a value for one of these objects.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        createTransaction: function (budget_id, data, options) {
            return TransactionsApiFp(configuration).createTransaction(budget_id, data, options)();
        },
        /**
         * Returns a single transaction
         * @summary Single transaction
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} transaction_id - The id of the transaction
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionById: function (budget_id, transaction_id, options) {
            return TransactionsApiFp(configuration).getTransactionById(budget_id, transaction_id, options)();
        },
        /**
         * Returns budget transactions
         * @summary List transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactions: function (budget_id, since_date, type, last_knowledge_of_server, options) {
            return TransactionsApiFp(configuration).getTransactions(budget_id, since_date, type, last_knowledge_of_server, options)();
        },
        /**
         * Returns all transactions for a specified account
         * @summary List account transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} account_id - The id of the account
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionsByAccount: function (budget_id, account_id, since_date, type, last_knowledge_of_server, options) {
            return TransactionsApiFp(configuration).getTransactionsByAccount(budget_id, account_id, since_date, type, last_knowledge_of_server, options)();
        },
        /**
         * Returns all transactions for a specified category
         * @summary List category transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} category_id - The id of the category
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionsByCategory: function (budget_id, category_id, since_date, type, last_knowledge_of_server, options) {
            return TransactionsApiFp(configuration).getTransactionsByCategory(budget_id, category_id, since_date, type, last_knowledge_of_server, options)();
        },
        /**
         * Returns all transactions for a specified payee
         * @summary List payee transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} payee_id - The id of the payee
         * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
         * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
         * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getTransactionsByPayee: function (budget_id, payee_id, since_date, type, last_knowledge_of_server, options) {
            return TransactionsApiFp(configuration).getTransactionsByPayee(budget_id, payee_id, since_date, type, last_knowledge_of_server, options)();
        },
        /**
         * Updates a transaction
         * @summary Updates an existing transaction
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {string} transaction_id - The id of the transaction
         * @param {SaveTransactionWrapper} data - The transaction to update
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        updateTransaction: function (budget_id, transaction_id, data, options) {
            return TransactionsApiFp(configuration).updateTransaction(budget_id, transaction_id, data, options)();
        },
        /**
         * Updates multiple transactions, by 'id' or 'import_id'.
         * @summary Update multiple transactions
         * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
         * @param {SaveTransactionsWrapper} data - The transactions to update.  Optionally, transaction 'id' value(s) can be specified as null and an 'import_id' value can be provided which will allow transaction(s) to updated by their import_id.
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        updateTransactions: function (budget_id, data, options) {
            return TransactionsApiFp(configuration).updateTransactions(budget_id, data, options)();
        },
    };
};
/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
var TransactionsApi = /** @class */ (function (_super) {
    __extends(TransactionsApi, _super);
    function TransactionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a single transaction or multiple transactions.  If you provide a body containing a 'transaction' object, a single transaction will be created and if you provide a body containing a 'transactions' array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.
     * @summary Create a single transaction or multiple transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {SaveTransactionsWrapper} data - The transaction or transactions to create.  To create a single transaction you can specify a value for the 'transaction' object and to create multiple transactions you can specify an array of 'transactions'.  It is expected that you will only provide a value for one of these objects.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    TransactionsApi.prototype.createTransaction = function (budget_id, data, options) {
        return TransactionsApiFp(this.configuration).createTransaction(budget_id, data, options)();
    };
    /**
     * Returns a single transaction
     * @summary Single transaction
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} transaction_id - The id of the transaction
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    TransactionsApi.prototype.getTransactionById = function (budget_id, transaction_id, options) {
        return TransactionsApiFp(this.configuration).getTransactionById(budget_id, transaction_id, options)();
    };
    /**
     * Returns budget transactions
     * @summary List transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
     * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    TransactionsApi.prototype.getTransactions = function (budget_id, since_date, type, last_knowledge_of_server, options) {
        return TransactionsApiFp(this.configuration).getTransactions(budget_id, since_date, type, last_knowledge_of_server, options)();
    };
    /**
     * Returns all transactions for a specified account
     * @summary List account transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} account_id - The id of the account
     * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
     * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    TransactionsApi.prototype.getTransactionsByAccount = function (budget_id, account_id, since_date, type, last_knowledge_of_server, options) {
        return TransactionsApiFp(this.configuration).getTransactionsByAccount(budget_id, account_id, since_date, type, last_knowledge_of_server, options)();
    };
    /**
     * Returns all transactions for a specified category
     * @summary List category transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} category_id - The id of the category
     * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
     * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    TransactionsApi.prototype.getTransactionsByCategory = function (budget_id, category_id, since_date, type, last_knowledge_of_server, options) {
        return TransactionsApiFp(this.configuration).getTransactionsByCategory(budget_id, category_id, since_date, type, last_knowledge_of_server, options)();
    };
    /**
     * Returns all transactions for a specified payee
     * @summary List payee transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} payee_id - The id of the payee
     * @param {Date} [since_date] - If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
     * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. 'uncategorized' and 'unapproved' are currently supported.
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    TransactionsApi.prototype.getTransactionsByPayee = function (budget_id, payee_id, since_date, type, last_knowledge_of_server, options) {
        return TransactionsApiFp(this.configuration).getTransactionsByPayee(budget_id, payee_id, since_date, type, last_knowledge_of_server, options)();
    };
    /**
     * Updates a transaction
     * @summary Updates an existing transaction
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {string} transaction_id - The id of the transaction
     * @param {SaveTransactionWrapper} data - The transaction to update
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    TransactionsApi.prototype.updateTransaction = function (budget_id, transaction_id, data, options) {
        return TransactionsApiFp(this.configuration).updateTransaction(budget_id, transaction_id, data, options)();
    };
    /**
     * Updates multiple transactions, by 'id' or 'import_id'.
     * @summary Update multiple transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     * @param {SaveTransactionsWrapper} data - The transactions to update.  Optionally, transaction 'id' value(s) can be specified as null and an 'import_id' value can be provided which will allow transaction(s) to updated by their import_id.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    TransactionsApi.prototype.updateTransactions = function (budget_id, data, options) {
        return TransactionsApiFp(this.configuration).updateTransactions(budget_id, data, options)();
    };
    return TransactionsApi;
}(BaseAPI));

/**
 * UserApi - fetch parameter creator
 * @export
 */
var UserApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Returns authenticated user information
         * @summary User info
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getUser: function (options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/user";
            var localVarUrlObj = url__WEBPACK_IMPORTED_MODULE_0__["parse"](localVarPath, true);
            var localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            localVarHeaderParameter["User-Agent"] = USER_AGENT;
            localVarHeaderParameter["Accept"] = "application/json";
            // authentication bearer required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url__WEBPACK_IMPORTED_MODULE_0__["format"](localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * UserApi - functional programming interface
 * @export
 */
var UserApiFp = function (configuration) {
    return {
        /**
         * Returns authenticated user information
         * @summary User info
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getUser: function (options) {
            var localVarFetchArgs = UserApiFetchParamCreator(configuration).getUser(options);
            return function (fetchFunction) {
                if (fetchFunction === void 0) { fetchFunction = fetch; }
                return fetchFunction(configuration.basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        return response.json().then(function (e) {
                            return Promise.reject(e);
                        });
                    }
                });
            };
        },
    };
};
/**
 * UserApi - factory interface
 * @export
 */
var UserApiFactory = function (configuration) {
    return {
        /**
         * Returns authenticated user information
         * @summary User info
         * @param {*} [options] - Override http request options.
         * @throws {RequiredError}
         */
        getUser: function (options) {
            return UserApiFp(configuration).getUser(options)();
        },
    };
};
/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns authenticated user information
     * @summary User info
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    UserApi.prototype.getUser = function (options) {
        return UserApiFp(this.configuration).getUser(options)();
    };
    return UserApi;
}(BaseAPI));



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(15);
var util = __webpack_require__(17);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(18);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)(module), __webpack_require__(2)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(19);
exports.encode = exports.stringify = __webpack_require__(20);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(22);
module.exports = self.fetch.bind(self);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsApi", function() { return TransactionsApi; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TransactionsApi = /** @class */ (function (_super) {
    __extends(TransactionsApi, _super);
    function TransactionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates multiple transactions. Provide a body containing a 'transactions' array, multiple transactions will be created.
     * @summary Create a single transaction or multiple transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can also be used to specify the last used budget)
     * @param {SaveTransactionsWrapper} data - An object containing transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    TransactionsApi.prototype.createTransactions = function (budget_id, data, options) {
        return _api__WEBPACK_IMPORTED_MODULE_0__["TransactionsApiFp"](this.configuration).createTransaction(budget_id, data, options)();
    };
    /**
     * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
     * @summary Bulk create transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can also be used to specify the last used budget)
     * @param {BulkTransactions} transactions - The list of transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     */
    TransactionsApi.prototype.bulkCreateTransactions = function (budget_id, transactions, options) {
        return _api__WEBPACK_IMPORTED_MODULE_0__["DeprecatedApiFp"](this.configuration).bulkCreateTransactions(budget_id, transactions, options)();
    };
    return TransactionsApi;
}(_api__WEBPACK_IMPORTED_MODULE_0__["TransactionsApi"]));



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    /**
     * Returns the current month (system timezone) in ISO 8601 format (i.e. '2015-12-01')
     */
    getCurrentMonthInISOFormat: function () {
        return this.getCurrentDateInISOFormat().substr(0, 7) + "-01";
    },
    /**
     * Returns the current date (system timezone) in ISO 8601 format (i.e. '2015-12-15')
     */
    getCurrentDateInISOFormat: function () {
        var currentDate = new Date();
        var isoLocalDateString = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60000).toISOString();
        return isoLocalDateString;
    },
    /**
     * Converts an ISO 8601 formatted string to a JS date object
     * @param {string} isoDateString - An ISO 8601 formatted date (i.e. '2015-12-30').  This date is assumed to be in UTC timezone
     */
    convertFromISODateString: function (isoDateString) {
        return new Date(new Date(isoDateString));
    },
    /**
     * Converts a milliunits amount to a currency amount
     * @param milliunits - The milliunits amount (i.e. 293294)
     * @param [currencyDecimalDigits] - The number of decimals in the currency (i.e. 2 for USD)
     */
    convertMilliUnitsToCurrencyAmount: function (milliunits, currencyDecimalDigits) {
        if (currencyDecimalDigits === void 0) { currencyDecimalDigits = 2; }
        var numberToRoundTo = Math.pow(10, 3 - Math.min(3, currencyDecimalDigits));
        numberToRoundTo = 1 / numberToRoundTo;
        var rounded = Math.round(milliunits * numberToRoundTo) / numberToRoundTo;
        var currencyAmount = rounded * (0.1 / Math.pow(10, 2));
        return Number(currencyAmount.toFixed(currencyDecimalDigits));
    }
});


/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = JSON.parse("{\"clientId\":\"1ee3eaa3ed21742cb6c59c935e229428e0b1734c3c12d9832eaa012db9866221\",\"redirectUri\":\"https://github.com/mpskierbg/ynab-api-starter-kit\"}");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav_vue_vue_type_template_id_65af85a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Nav_vue_vue_type_template_id_65af85a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Nav_vue_vue_type_template_id_65af85a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_65af85a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_65af85a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_65af85a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"
      },
      [
        _c("h5", { staticClass: "my-0 mr-md-auto font-weight-normal" }, [
          _vm._v("\n    Move From All\n  ")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_40ab164b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Footer_vue_vue_type_template_id_40ab164b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_40ab164b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_40ab164b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_40ab164b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_40ab164b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "pt-4 my-md-5 pt-md-5 border-top" }, [
      _c("div", [
        _c("h2", [_vm._v("Privacy Policy")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "This website does not store any information from you or your YNAB account. All data retrieved from the YNAB API is stored only in your browser and is never transmitted to any other location or third-party."
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-md" }, [
          _c("small", { staticClass: "text-muted" }, [_vm._v("MADE BY")]),
          _vm._v(" "),
          _c("h5", [_c("a", { attrs: { href: "#" } }, [_vm._v("You!")])])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Budgets_vue_vue_type_template_id_c6da5664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _Budgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Budgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Budgets_vue_vue_type_template_id_c6da5664___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Budgets_vue_vue_type_template_id_c6da5664___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Budgets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Budgets_vue_vue_type_template_id_c6da5664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Budgets_vue_vue_type_template_id_c6da5664___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Budgets_vue_vue_type_template_id_c6da5664___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "budgets container" },
    [
      _c("h5", [_vm._v("Select A Budget")]),
      _vm._v(" "),
      _vm._l(_vm.budgets, function(budget) {
        return _c("div", { staticClass: "row" }, [
          _c(
            "a",
            {
              staticClass: "col",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.selectBudget(budget.id, $event)
                }
              }
            },
            [_vm._v("\n      " + _vm._s(budget.name) + "\n    ")]
          )
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Budgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Budgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['budgets', 'selectBudget']
});


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transactions_vue_vue_type_template_id_77126b05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _Transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Transactions_vue_vue_type_template_id_77126b05___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Transactions_vue_vue_type_template_id_77126b05___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Transactions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_template_id_77126b05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_template_id_77126b05___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_template_id_77126b05___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("h5", [_vm._v("Transactions")]),
    _vm._v(" "),
    _c("table", { staticClass: "table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.transactions, function(transaction) {
          return _c("tr", { key: transaction.id }, [
            _c("td", [_vm._v(_vm._s(transaction.account_name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(transaction.date))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(transaction.payee_name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(transaction.category_name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(transaction.memo))]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                _vm._s(
                  _vm
                    .convertMilliUnitsToCurrencyAmount(transaction.amount)
                    .toFixed(2)
                )
              )
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Account")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Payee")]),
        _vm._v(" "),
        _c("th", [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", [_vm._v("Memo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ynab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Import utils from YNAB


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['transactions'],
  methods: {
    // Now we can make this method available to our template
    // So we can format this milliunits in the correct currency format
    convertMilliUnitsToCurrencyAmount: ynab__WEBPACK_IMPORTED_MODULE_0__["utils"].convertMilliUnitsToCurrencyAmount
  }
});


/***/ })
/******/ ]);