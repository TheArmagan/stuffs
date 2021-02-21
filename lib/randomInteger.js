/**
 * @param {Number} min 
 * @param {Number} max 
 */
module.exports = function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}