'use strict'
function camelAss(str) {
  var i;
  var j;
  var strNew = '';
  
  for (i = 0; i < str.length; i ++) {
    
    if (str[i] !== ' ' && (str[i-1] === ' ' || str[i-1] === undefined)) {
      
      strNew += str[i].toLowerCase();
      break;
    }
  }

  for (j = i+1; j < str.length; j++) {
    if (str[j] !== ' ' && str[j-1] === ' ') {

      strNew += str[j].toUpperCase();
      continue;
    }
    if (str[j] !== ' ') {
      strNew += str[j].toLowerCase();}
  }
  
  return strNew;
}
module.exports = camelAss; 