/**
 * @param {String} str
 */
function escapeRegex(str) {
  return str
    .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
    .replace(/-/g, '\\x2d');
}

module.exports = escapeRegex;