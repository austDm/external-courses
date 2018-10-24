function symbolCounter(str) {
  var i;
  var j;
  var key;
  var obj = {};
  var count;
        
  for (i = 0; i < str.length; i++) {
    count = 1;
    if (!(str[i] in obj)) {
      for (j = i+1; j< str.length; j++) {
        if (str[j] === str [i]){ 
          count += 1;
        }
      }
      obj[str[i]] = count;
    }
  }
      
  for (key in obj) {
    console.log(key + ':' + obj[key] + ' раз(-а)');
  }
}
module.exports = symbolCounter;  