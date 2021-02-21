const randomInteger = require("./randomInteger");

module.exports = function randomPick(arr) {
  return arr[randomInteger(0, arr.length - 1)];
};
