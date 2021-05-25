/**
 * @param {sting} t 
 * @param {number} ml 
 * @returns 
 */
module.exports = function threeDots(t, ml) {
  return t.length > ml ? t.slice(0, ml - 1) + "…" : t;
}