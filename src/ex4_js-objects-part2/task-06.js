'use strict'
function globalUpcase(str) {
  var i;
  var strNew = '';
    
  for (i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && (str[i-1] === ' ' || str[i-1] === undefined)) {

      strNew += str[i].toUpperCase();
      continue;
    }
    strNew += str[i];
  }
  
  return strNew;
}
module.exports = globalUpcase;