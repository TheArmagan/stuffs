const fs = require("fs");

/**
 * @param {string} path 
 */
module.exports = async function makeSureFolderExists(path) {
  if (!fs.existsSync(path)) await fs.promises.mkdir(path, { recursive: true });
}
