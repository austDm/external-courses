'use strict'
function spaceAnnihilator(str) {
  var first = str.indexOf(' ');
  var last = str.lastIndexOf(' ');
  
  if (first === -1) {
    
    return str;
  } else if (first === last) {
    
    return str.substring(0 , first) + str.substring(first + 1); 
  }
  
  return str.substring(0 , first) + str.substring(first + 1, last) +
  str.substring(last + 1); 
}
module.exports = spaceAnnihilator;