const accurateSleep = require("./lib/accurateSleep");
const chunkify = require("./lib/chunkify");
const defaultify = require("./lib/defaultify");
const escapeRegex = require("./lib/escapeRegex");
const execAsync = require("./lib/execAsync");
const fillGaps = require("./lib/fillGaps");
const formatSeconds = require("./lib/formatSeconds");
const getFileExtension = require("./lib/getFileExtension");
const getValueType = require("./lib/getValueType");
const hexToRgb = require("./lib/hexToRgb");
const intToRgba = require("./lib/intToRgba");
const isThenable = require("./lib/isThenable");
const makeSureFileExists = require("./lib/makeSureFileExists");
const makeSureFileExistsSync = require("./lib/makeSureFileExistsSync");
const makeSureFolderExists = require("./lib/makeSureFolderExists");
const makeSureFolderExistsSync = require("./lib/makeSureFolderExistsSync");
const mapReplace = require("./lib/mapReplace");
const parseDuration = require("./lib/parseDuration");
const percent = require("./lib/percent");
const randomFloat = require("./lib/randomFloat");
const randomInteger = require("./lib/randomInteger");
const randomPick = require("./lib/randomPick");
const randomString = require("./lib/randomString");
const rejectAfter = require("./lib/rejectAfter");
const rgbaToInt = require("./lib/rgbaToInt");
const rgbToHex = require("./lib/rgbToHex");
const sleep = require("./lib/sleep");
const threeDots = require("./lib/threeDots");
const validateShape = require("./lib/validateShape");

module.exports = {
    accurateSleep,
    chunkify,
    defaultify,
    escapeRegex,
    execAsync,
    fillGaps,
    formatSeconds,
    getFileExtension,
    getValueType,
    hexToRgb,
    intToRgba,
    isThenable,
    makeSureFileExists,
    makeSureFileExistsSync,
    makeSureFolderExists,
    makeSureFolderExistsSync,
    mapReplace,
    parseDuration,
    percent,
    randomFloat,
    randomInteger,
    randomPick,
    randomString,
    rejectAfter,
    rgbaToInt,
    rgbToHex,
    sleep,
    threeDots,
    validateShape,
}