const fs = require("fs");

/**
 * @param {string} path 
 * @param {any} content 
 * @param {string?} encoding 
 */
module.exports = async function makeSureFileExists(path, content, encoding = "utf8") {
  if (!fs.existsSync(path)) await fs.promises.writeFile(path, content, { encoding });
}