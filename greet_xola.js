const greet = require("./greet")
const chalk = require("chalk")
const figlet = require("figlet")

const test = chalk.bgGreen.black(greet("Xola"))

console.log(test)

figlet("Hello world !!!", function(err, data) {
if (err) {
console.log("Something went wrong...");
console.dir(err);
return;
}


console.log(data)

});

figlet("Xola", function(err, data) {
if (err) {
console.log("Something went wrong...");
console.dir(err);
return;
}


console.log(chalk.bgRed.blue(data))

});
