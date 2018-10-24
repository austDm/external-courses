'use strict'
function arrOutput(a) {
  var i;

  for (i = 0; i < a.length; ++i) {
      
    console.log(a[i]);
  }
  
  console.log('Число элементов: ' + a.length);  
}
module.exports = arrOutput; 