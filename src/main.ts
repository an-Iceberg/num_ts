import chalk from "chalk";

const text = "|hello world|";

console.log(chalk.yellow(text));
console.log(chalk.bgCyan.bold.magenta(text));
console.log(chalk.hex("#00ff00").underline.overline(text));
console.log(chalk.hex("#aaffaa").visible(text));
