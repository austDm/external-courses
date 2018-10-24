'use strict'
function cutStr(str, l) {
  if (str.length > l) {
    
    return str.substring(0, l-1) + '…';
  }
  
  return str; 
}
module.exports = cutStr;