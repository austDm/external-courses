'use strict'
var Calculator = function (){
  var result = 0;
      
  return {
    add: function (sum) {
      if (sum) {
        result += sum;
      }
      return this;
    },

    subtract: function (sub) {
      if (sub) {
        result -= sub;
      }
      return this;
    },

    divide: function (div) {
      if (div) {
        result /= div;
      }
      return this;
    },

    multiply: function (mul) {
      
      if (mul) {
        result *= mul;
      }
      return this;
    },

    reset: function () {
      
      result = 0;
      return result; 
    }, 

    getResult: function (){
        
      return result; 
    },

    reset: function (){
    
      result = 0;
      return this;
    },

    setState: function (state){
      
      if (state) {
        result = state;
      }
      return this;
    },

    fetchData: function (callback, arg){
      setTimeout(callback, 1000, arg);
      return this;
    }
  }
}();
module.exports = Calculator;