/**
 * @param {Number} r (0-255)
 * @param {Number} g (0-255)
 * @param {Number} b (0-255)
 */
module.exports = function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}