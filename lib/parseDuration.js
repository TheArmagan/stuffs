const REGEX = /(\d+)(mo|ms|m|s|y|h|d|w)/g;
/** @type {(str: string) => number} */
module.exports = function parseDuration(str) {
  let duration = 0;
  [...(str.matchAll(REGEX) || [])].forEach(([_, time, type]) => {
    time = Number(time);
    switch (type) {
      case "mo": {
        duration += time * 1000 * 60 * 60 * 24 * 30;
        break;
      };
      case "ms": {
        duration += time;
        break;
      };
      case "m": {
        duration += time * 1000 * 60;
        break;
      }
      case "s": {
        duration += time * 1000;
        break;
      }
      case "y": {
        duration += time * 1000 * 60 * 60 * 24 * 365;
        break;
      }
      case "h": {
        duration += time * 1000 * 60 * 60;
        break;
      }
      case "d": {
        duration += time * 1000 * 60 * 60 * 24;
        break;
      }
      case "w": {
        duration += time * 1000 * 60 * 60 * 24 * 7;
        break;
      }
    }
  });
  return duration;
}