'use strict';

exports.__esModule = true;
var isNode = false;
var result = false;
if (typeof module !== 'undefined' && module.exports) {
  isNode = true;
}
if (!isNode && typeof document !== undefined && typeof document !== null) {
  var div = document.createElement('div');
  div.innerHTML = '<!--[if lt IE 9]><i></i><![endif]-->';
  result = div.getElementsByTagName('i').length === 1;
}
exports['default'] = result;
module.exports = exports['default'];