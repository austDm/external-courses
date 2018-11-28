'use strict';
var shape = {
  type:'Shape',
  getType: function () {
    return shape.type;
  },
  getPerimeter: function () {
    var per = 0;
    var i;
    for (i = 0; i < this.sides.length; i++) {
      per += this.sides[i];
    }
    return per;
  },
  draw: function () {
    console.log(this.name + ' is drawn!');
  }
};

function Triangle(a, b, c, name){
  this.name = name;
  this.a = a;
  this.b = b;
  this.c = c;
  this.sides = Array.from(arguments).slice(0, 3);
}

function Square(a, name){
  this.name = name;
  this.a = this.b = this.c = this.d = a;
  this.sides = [a,a,a,a];
}

function Rhombus(a, rad, name){
  Square.apply(this, arguments);
  this.name = name;
  this.rad = rad;
}

Triangle.prototype = shape;
Square.prototype = shape;
Rhombus.prototype = Object.create(Square.prototype);
Rhombus.prototype.area = function () {
  return (this.a * this.a * Math.sin(this.rad)).toFixed(1);
};

var tri = new Triangle (1, 2, 3, 'tri');
var squ = new Square (1, 'squ');
var rho = new Rhombus (1, 1.5708, 'rho');

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