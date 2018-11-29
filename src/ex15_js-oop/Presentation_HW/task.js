(function () {
  'use strict';
  var shape = {
    getType: function () {
      return this.type;
    },
    getPerimeter: function () {
      return Object.keys(this.sides).reduce((per, prop) => per + this.sides[prop], 0);
    },
    draw: function () {
      console.log(this.name + ' is drawn!');
    }
  };
  
  function Triangle(obj, name){
    this.name = name;
    this.sides = obj;    
    this.type = 'Triangle';
  }
  
  function Square(obj, name){
    this.name = name;
    this.sides = obj;
    this.type = 'Square';
  }
  
  function Rhombus(obj, rad, name){
    this.sides = obj;
    this.name = name;
    this.rad = rad;
    this.type = 'Rhombus';
  }
  
  Triangle.prototype = shape;
  Square.prototype = shape;
  Rhombus.prototype = Object.create(Square.prototype);
  Rhombus.prototype.area = function () {
    return (this.sides.a * this.sides.a * Math.sin(this.rad)).toFixed(1);
  };
  
  var tri = new Triangle ({a:1, b:2, c:3}, 'tri');
  var squ = new Square ({a:1, b:1, c:1, d:1}, 'squ');
  var rho = new Rhombus ({a:1, b:1, c:1, d:1}, 1.5708, 'rho');
  
  console.log(tri.getType());
  console.log(tri.getPerimeter());
  tri.draw();
  console.log(squ.getType());
  console.log(squ.getPerimeter());
  squ.draw();
  console.log(rho.getType());
  console.log(rho.getPerimeter());
  console.log(rho.area());
  rho.draw();
}());