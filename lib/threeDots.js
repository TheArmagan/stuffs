/** @type {<T extends string>(t: T, ml: number) => `${string}...` | T} */
module.exports = function threeDots(t, ml) {
  return t.length > ml ? t.slice(0, ml - 1) + "…" : t;
}