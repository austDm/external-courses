function reverseStr(str) {
  var revstr = '';
  var i;
 
  for (i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
    
  return revstr;  
}
module.exports = reverseStr; 