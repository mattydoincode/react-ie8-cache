let result = false;
if (typeof document !== 'undefined') {
  const div = document.createElement('div');
  div.innerHTML = '<!--[if lt IE 9]><i></i><![endif]-->';
  result = (div.getElementsByTagName('i').length === 1);
}
export default result;
