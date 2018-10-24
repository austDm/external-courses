'use strict'
function dataType(a) {
    
  if (typeof a === 'string') {
        
    return typeof a;
  } else if (typeof a === 'number') {

    return typeof a;
  } 
  return undefined;
} 
module.exports = dataType; 