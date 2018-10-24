'use strict'
function noProto(ob) {
  
  return Object.create(null);
}
module.exports = noProto;