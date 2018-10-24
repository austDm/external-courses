'use strict'
function strInsert(mainStr, insertStr, pos) {
  var count = 0;
  var substr1 = '';
  var substr2 = '';
  var i;
    
  if (pos < 0) return 'Номер слова не может быть отрицательным!';
      
  for (i = 1; i < mainStr.length; i++) {

    if (mainStr[i-1] !== ' ' && (mainStr[i] === ' ' || mainStr[i] === undefined)) {
      
      count += 1;
      if (count - 1 === pos) break;
      } 
    }
   
  substr1 = mainStr.substring(0, i);
  substr2 = mainStr.substring(i + 1);
    
  return substr1 + ' ' + insertStr + ' ' + substr2;
}
module.exports = strInsert; 