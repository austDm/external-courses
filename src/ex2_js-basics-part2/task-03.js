'use strict'
function arrEvenOdd(a) {
  var sum = [0, 0, 0];
  var i;
    
  for (i = 0; i < a.length; i++) {
    if (a[i] === null) continue;
    if (a[i] === 0) { 
        
      sum[2] += 1;
    } else if (a[i] % 2 === 0) {
        
      sum[0] += 1;
    } else {
        
      sum[1] += 1;
    }
  }
  console.log('Количество чётных: ' + sum[0] + '  Количество нечётных: ' + sum[1]);

  if (sum[2]) console.log('Количество нулей: ' + sum[2]);

  console.log(sum);

  return sum;
}
module.exports = arrEvenOdd; 