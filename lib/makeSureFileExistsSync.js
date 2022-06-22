const fs = require("fs");

/**
 * @param {string} path 
 * @param {any} content 
 * @param {string?} encoding 
 */
module.exports = function makeSureFileExistsSync(path, content, encoding = "utf8") {
  if (!fs.existsSync(path)) fs.writeFileSync(path, content, { encoding });
}