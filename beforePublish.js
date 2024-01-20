const cp = require("child_process");
const fs = require("fs");

const readdir = require("recursive-readdir");

(async () => {
  console.log("clearing old d.ts");
  let files = await readdir("./lib");
  files.filter(i => i.endsWith(".d.ts")).forEach(file => {
    fs.unlinkSync(file);
    console.log("unlinked", file);
  });
  console.log("generating fresh d.ts");
  try {
    cp.execSync(`npx tsc --allowJs -m commonjs --emitDeclarationOnly -d ./index.js`, { cwd: process.cwd() });
  } catch (error) { }
  console.log("done");
  setTimeout(() => { }, 2000);
})();
