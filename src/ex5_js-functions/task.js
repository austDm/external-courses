'use strict'
function wrapCalc() {
  var result = 0;
      
  return {
    add: add = function (sum) {
      if (sum) {
        result += sum;
      }
      return add;
    },
    subtract: subtract = function (sub) {
      if (sub) {
        result -= sub;
      }
      return subtract;
    },
    divide: divide = function (div) {
      if (div) {
        result /= div;
      }
      return divide;
    },
    multiply: multiply = function (mul) {
      if (mul) {
        result *= mul;
      }
      return multiply;
    },
    reset: function () {
      result = 0;
      return result; 
    },    
    getResult: function (){
        
      return result; 
    }
  }
}
var Calculator = wrapCalc();
module.exports = Calculator  