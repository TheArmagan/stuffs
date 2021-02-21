/**
 * @param {String} urlOrFileName
 */
module.exports = function getFileExtension(urlOrFileName = "") {
  return urlOrFileName.split(/\?|#/)[0].split(".").pop().toLowerCase();
};
