/**
 * 
 * @param {Number} r (0-255)
 * @param {Number} g (0-255)
 * @param {Number} b (0-255)
 * @param {Number?} a (0-255)
 */
module.exports = function rgbaToInt(r, g, b, a = 1) {
  r = Math.round(r);
  b = Math.round(b);
  g = Math.round(g);
  a = Math.round(a);

  const i =
    r * Math.pow(256, 3) +
    g * Math.pow(256, 2) +
    b * Math.pow(256, 1) +
    a * Math.pow(256, 0);

  return i;
};