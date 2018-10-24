'use strict'
function searchStr(mainStr, str) {
  
  if (mainStr.indexOf(str) !== -1) {
    
    return true;
  }

  return false;
}
module.exports = searchStr; 