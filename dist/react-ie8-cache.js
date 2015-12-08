(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Reactie8Cache"] = factory();
	else
		root["Reactie8Cache"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _cache = __webpack_require__(2);

	var _cache2 = _interopRequireDefault(_cache);

	exports['default'] = _cache2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(5);
	var isArguments = __webpack_require__(4);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(1);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _reactLazyCache = __webpack_require__(6);

	var _reactLazyCache2 = _interopRequireDefault(_reactLazyCache);

	var _detectIE8 = __webpack_require__(3);

	var _detectIE82 = _interopRequireDefault(_detectIE8);

	var exportedCache = _reactLazyCache2['default'];
	if (_detectIE82['default']) {
	  exportedCache = function myFunc(component, calculators) {
	    var _this = this;

	    var allProps = [];
	    var cache = {};
	    var api = {};

	    var runFunc = function runFunc(props, fn, nextProps) {
	      var params = {};
	      if (nextProps) {
	        params = props.map(function (prop) {
	          return nextProps[prop] || api[prop];
	        });
	      } else {
	        params = props.map(function (prop) {
	          return component.props[prop] || api[prop];
	        });
	      }
	      var value = fn.apply(undefined, params);
	      return { value: value, props: props };
	    };

	    var uncache = function uncache(nextProps, changedProp) {
	      Object.keys(cache).forEach(function (key) {
	        if (~cache[key].props.indexOf(changedProp)) {
	          var _runFunc = runFunc(calculators[key].params, calculators[key].fn, nextProps);

	          var value = _runFunc.value;

	          api[key] = value;
	          uncache(key);
	        }
	      });
	    };

	    Object.keys(calculators).forEach(function (key) {
	      var fn = calculators[key].fn;
	      var props = calculators[key].params;
	      props.forEach(function (param) {
	        if (! ~allProps.indexOf(param)) {
	          allProps.push(param);
	        }
	      });
	      // we run it once (non lazy cache)
	      cache[key] = runFunc(props, fn);
	      api[key] = cache[key].value;
	    });
	    api.componentWillReceiveProps = function (nextProps) {
	      var diffProps = [];
	      allProps.forEach(function (prop) {
	        if (!_deepEqual2['default'](component.props[prop], nextProps[prop])) {
	          diffProps.push(prop);
	        }
	      });
	      diffProps.forEach(uncache.bind(_this, nextProps));
	    };
	    return api;
	  };
	}
	exports['default'] = exportedCache;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var isNode = false;
	var result = false;
	if (typeof module !== 'undefined' && module.exports) {
	  isNode = true;
	}
	if (!isNode && typeof document !== undefined) {
	  var div = document.createElement('div');
	  div.innerHTML = '<!--[if lt IE 9]><i></i><![endif]-->';
	  result = div.getElementsByTagName('i').length === 1;
	}
	exports['default'] = result;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lazyCache = __webpack_require__(7);

	var _lazyCache2 = _interopRequireDefault(_lazyCache);

	exports['default'] = _lazyCache2['default'];
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = lazyCache;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(1);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	function lazyCache(component, calculators) {
	  var allProps = [];
	  var cache = {};
	  var api = {};
	  var uncache = function uncache(changedProp) {
	    Object.keys(cache).forEach(function (key) {
	      if (~cache[key].props.indexOf(changedProp)) {
	        delete cache[key].value;
	        uncache(key);
	      }
	    });
	  };

	  Object.keys(calculators).forEach(function (key) {
	    var fn = calculators[key].fn;
	    var props = calculators[key].params;
	    props.forEach(function (param) {
	      if (! ~allProps.indexOf(param)) {
	        allProps.push(param);
	      }
	    });
	    cache[key] = { props: props };
	    Object.defineProperty(api, key, {
	      get: function get() {
	        var cached = cache[key];
	        if (cached && cached.value !== undefined) {
	          return cached.value;
	        }
	        var params = props.map(function (prop) {
	          return component.props[prop] || api[prop];
	        });
	        var value = fn.apply(undefined, params);
	        cache[key] = { props: props, value: value };
	        return value;
	      }
	    });
	  });
	  api.componentWillReceiveProps = function (nextProps) {
	    var diffProps = [];
	    allProps.forEach(function (prop) {
	      if (!_deepEqual2['default'](component.props[prop], nextProps[prop])) {
	        diffProps.push(prop);
	      }
	    });
	    diffProps.forEach(uncache);
	  };
	  return api;
	}

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;