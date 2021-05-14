const isThenable = require("./lib/isThenable");


console.log(isThenable(new Promise(r => r())), "true");
console.log(isThenable(function(){}), "false");