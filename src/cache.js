import deepEqual from 'deep-equal';
import lazyCache from 'react-lazy-cache';
import isIE8 from './detectIE8';
let exportedCache = lazyCache;
if (isIE8) {
  exportedCache = function myFunc(component, calculators) {
    const allProps = [];
    const cache = {};
    const api = {};

    const runFunc = (props, fn, nextProps) => {
      let params = {};
      if (nextProps) {
        params = props.map(prop => nextProps[prop] || api[prop]);
      } else {
        params = props.map(prop => component.props[prop] || api[prop]);
      }
      const value = fn(...params);
      return { value, props };
    };

    const uncache = (nextProps, changedProp) => {
      Object.keys(cache).forEach(key => {
        if (~cache[key].props.indexOf(changedProp)) {
          const { value } = runFunc(calculators[key].params, calculators[key].fn, nextProps);
          api[key] = value;
          uncache(key);
        }
      });
    };

    Object.keys(calculators).forEach(key => {
      const fn = calculators[key].fn;
      const props = calculators[key].params;
      props.forEach(param => {
        if (!~allProps.indexOf(param)) {
          allProps.push(param);
        }
      });
      // we run it once (non lazy cache)
      cache[key] = runFunc(props, fn);
      api[key] = cache[key].value;
    });
    api.componentWillReceiveProps = nextProps => {
      const diffProps = [];
      allProps.forEach(prop => {
        if (!deepEqual(component.props[prop], nextProps[prop])) {
          diffProps.push(prop);
        }
      });
      diffProps.forEach(uncache.bind(this, nextProps));
    };
    return api;
  };
}
export default exportedCache;
