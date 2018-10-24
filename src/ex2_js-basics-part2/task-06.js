'use strict'
function typeNumber(a) {
  var i;  
  
  if (!(a < 1000 && a > 0)) {

    return 'Данные неверны';
  } 
    
  for (i = 2; i <= parseInt(Math.sqrt(a), 10); i++) {
    if (a % i === 0) {
      
      return 'Число ' + a + ' - составное число';     
    } 
  }
  
  return 'Число ' + a + ' - простое число';
}
module.exports = typeNumber; 