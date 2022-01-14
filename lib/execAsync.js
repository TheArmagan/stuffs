/** @type {(cmd: string)=>Promise<{stdout: string, stderr: string}>} */
module.exports = require("util").promisify(require("child_process").exec);