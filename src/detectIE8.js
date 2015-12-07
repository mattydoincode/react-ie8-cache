let isNode = false;
let result = false;
if (typeof module !== 'undefined' && module.exports) {
  isNode = true;
}
if (!isNode && typeof document !== undefined && typeof document !== null) {
  const div = document.createElement('div');
  div.innerHTML = '<!--[if lt IE 9]><i></i><![endif]-->';
  result = (div.getElementsByTagName('i').length === 1);
}
export default result;
