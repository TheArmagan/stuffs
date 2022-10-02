const randomInteger = require("./randomInteger");
/** @type {<T extends any[]> (arr: T) => T[keyof T]} */
module.exports = function randomPick(arr) {
  return arr[randomInteger(0, arr.length - 1)];
};