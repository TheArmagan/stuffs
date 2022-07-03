let execAsync = require("util").promisify(require("child_process").exec)

/** @type {(cmd: string, cwd: string) => Promise<{stdout: string, stderr: string}>} */
module.exports = async (cmd, cwd) => {
  if (!cwd) cwd = process.cwd();
  return await execAsync(cmd, { cwd, maxBuffer: Infinity });
};