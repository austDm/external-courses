'use strict'
function superRandomizer(min, max) {
 
    return min + Math.round(Math.random() * (max - min));
}
module.exports = superRandomizer; 