/**
 * @param {Number} min 
 * @param {Number} max 
 */
module.exports = function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}