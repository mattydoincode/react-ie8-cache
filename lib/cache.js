'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _reactLazyCache = require('react-lazy-cache');

var _reactLazyCache2 = _interopRequireDefault(_reactLazyCache);

var _detectIE8 = require('./detectIE8');

var _detectIE82 = _interopRequireDefault(_detectIE8);

var exportedCache = _reactLazyCache2['default'];
if (_detectIE82['default']) {
  exportedCache = function (component, calculators) {
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