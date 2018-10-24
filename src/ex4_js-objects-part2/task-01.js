'use strict'
var mainObj = Object.create({first:1});

mainObj.second = 2;

function trueSearch(prop, ob) {
  if (prop in ob && !ob.hasOwnProperty(prop)) return ob[prop];
  
  return undefined;
}
module.exports = trueSearch;