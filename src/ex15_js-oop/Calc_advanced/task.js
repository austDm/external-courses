(function () {
  "use strict";
  var simpleOperations = {
    add: function (sum) {
      if (sum) {
        this.result += sum;
      }
      return this;
    },
    subtract: function (sub) {
      if (sub) {
        this.result -= sub;
      }
      return this;
    },
    divide: function (div) {
      if (div) {
        this.result /= div;
      }
      return this;
    },
    multiply: function (mul) {
      if (mul) {
        this.result *= mul;
      }
        return this;
    },   
    reset: function () {
      this.result = 0;
      return this; 
    },   
    setState: function (state){
      if (state) {
        this.result = state;
      }
      return this;
    }
  };
  
  var engOperations = {
    sin: function (rad) {
      if (rad) {
        this.result = Math.sin(rad);
      }
      return this;
    },
    cos: function (rad) {
      if (rad) {
        this.result = Math.cos(rad);
      }
      return this;
    }  
  };
  
  Object.setPrototypeOf(engOperations, simpleOperations); 
  
  var bookerOperations = {
    convertRuUsd: function (ru) {
      if (ru) {
        this.result = (ru / this.dollarRate).toFixed(2);
      }
      return this;
    }
  };
  
  Object.setPrototypeOf(bookerOperations, simpleOperations);
  
  var progOperations = {
    eval: function (code) {
      eval(code.toString());
      return this;
    }
  };
  
  Object.setPrototypeOf(progOperations, simpleOperations); 
  
  function SimpleCalc (type, brand) {
    this.result = 0;
    this.type = type;
    this.brand = brand;
  }
  function EngineerCalc (type, brand) {
    SimpleCalc.apply(this, arguments);
  }
  function BookerCalc (type, brand, dollarRate) {
    SimpleCalc.apply(this, arguments);
    this.dollarRate = dollarRate;
  }
  function ProgCalc (type, brand) {
    SimpleCalc.apply(this, arguments);
  }
  
  SimpleCalc.prototype = simpleOperations;
  EngineerCalc.prototype = engOperations;
  BookerCalc.prototype = bookerOperations;
  ProgCalc.prototype = progOperations;
  
  var sC = new SimpleCalc ('pocket', 'citizen');
  sC.add(100).multiply(2).divide(20).reset().subtract(1);
  console.log('Результат вычисления простого калькулятора: ' + sC.result);
  
  var eC = new EngineerCalc ('desktop', 'casio');
  eC.add(100).multiply(2).divide(20).reset().subtract(1);
  console.log('Результат вычисления инженерного калькулятора простыми методами: ' + eC.result);
  eC.sin(1);
  console.log('Синус угла = ' + eC.result);
  
  var bC = new BookerCalc ('printing', 'citizen', 2000);
  bC.add(100).multiply(2).divide(20).reset().subtract(1);
  console.log('Результат вычисления бухгалтерского калькулятора простыми методами: ' + bC.result);
  bC.convertRuUsd(1000);
  console.log('Конвертация рублей ' + bC.result + '$');
  
  var pC = new ProgCalc ('online', 'mail.ru');
  pC.add(100).multiply(2).divide(20).reset().subtract(1);
  console.log('Результат вычисления поехавшего калькулятора простыми методами: ' + pC.result);
  pC.eval('console.log("I can prog myself lol")');
}());