/**
 * mapReplace("hello world", {"hello": "hey", "world": "guy"}) => "hey guy"
 * @param {string} text 
 * @param {object} map 
 * @returns {string}
 */
function mapReplace(text, map) {
  return Object.entries(map).reduce((all, current) => all.replaceAll(current[0], current[1]), text);
}

module.exports = mapReplace;