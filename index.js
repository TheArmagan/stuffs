const accurateSleep = require("./lib/accurateSleep");
const chunkify = require("./lib/chunkify");
const defaultify = require("./lib/defaultify");
const getFileExtension = require("./lib/getFileExtension");
const hexToRgb = require("./lib/hexToRgb");
const intToRgba = require("./lib/intToRgba");
const isThenable = require("./lib/isThenable");
const makeSureFileExists = require("./lib/makeSureFileExists");
const makeSureFileExistsSync = require("./lib/makeSureFileExistsSync");
const makeSureFolderExists = require("./lib/makeSureFolderExists");
const makeSureFolderExistsSync = require("./lib/makeSureFolderExistsSync");
const percent = require("./lib/percent");
const randomFloat = require("./lib/randomFloat");
const randomInteger = require("./lib/randomInteger");
const randomPick = require("./lib/randomPick");
const randomString = require("./lib/randomString");
const rejectAfter = require("./lib/rejectAfter");
const rgbToHex = require("./lib/rgbToHex");
const rgbaToInt = require("./lib/rgbaToInt");
const sleep = require("./lib/sleep");
const threeDots = require("./lib/threeDots");



module.exports = {
    accurateSleep,
    chunkify,
    defaultify,
    getFileExtension,
    hexToRgb,
    intToRgba,
    isThenable,
    makeSureFileExists,
    makeSureFileExistsSync,
    makeSureFolderExists,
    makeSureFolderExistsSync,
    percent,
    randomFloat,
    randomInteger,
    randomPick,
    randomString,
    rejectAfter,
    rgbaToInt,
    rgbToHex,
    sleep,
    threeDots
}

