const randomPick = require("./randomPick");

const STRING_MAP_HEX = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
const STRING_MAP_NUMERIC = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const STRING_MAP_ALPHABET_LOWER = ["q", "w", "e", "r", "t", "y", "u", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "i", "z", "x", "c", "v", "b", "n", "m"];
const STRING_MAP_ALPHABET_UPPER = ["Q", "W", "E", "R", "T", "Y", "U", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "I", "Z", "X", "C", "V", "B", "N", "M"];
const STRING_MAP_ALPHANUMERIC = [...STRING_MAP_NUMERIC,...STRING_MAP_ALPHABET_LOWER, ...STRING_MAP_ALPHABET_UPPER];

/**
 * @param {Number} length 
 * @param {Array<String>|String} map 
 */
module.exports = function randomString(length = 16, map = STRING_MAP_ALPHANUMERIC) {
  if (typeof map == "string") map = map.split("");

  return Array(length).fill(0).map(() => randomPick(map)).join("");
}

module.exports.STRING_MAP_HEX = STRING_MAP_HEX;
module.exports.STRING_MAP_NUMERIC = STRING_MAP_NUMERIC;
module.exports.STRING_MAP_ALPHABET_LOWER = STRING_MAP_ALPHABET_LOWER;
module.exports.STRING_MAP_ALPHABET_UPPER = STRING_MAP_ALPHABET_UPPER;
module.exports.STRING_MAP_ALPHANUMERIC = STRING_MAP_ALPHANUMERIC;