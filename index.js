const chalk = require("chalk");
const boxen = require("boxen");
const processor = require("./processor");
const isValidInput = require("./validateInput");

const cronInput = process.argv[2];

if (!isValidInput(cronInput)) {
  console.log(chalk.red.bold("Missing cron expression"));
  return;
}

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};

const msgBox = boxen(processor(cronInput), boxenOptions);
console.log(msgBox);
