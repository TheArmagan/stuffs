const fs = require("fs");

/**
 * @param {string} path 
 */
module.exports = function makeSureFolderExistsSync(path) {
  if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
}
