'use strict'
function maxValue(a) {
  var max = a[0];
  var i;
  
  for (i = 1; i < a.length; ++i) {
    if (a[i] > max) {
        
      max = a[i];
    }
  }
    
  return max;
}
module.exports = maxValue;  