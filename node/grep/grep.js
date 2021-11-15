const { readFile, stat, readdir } = require("fs").promises;
const { resolve } = require('path');

const FIRST_ARG_POSITION = 2;

const regex = new RegExp(".*" + process.argv[FIRST_ARG_POSITION] + ".*");
const args = process.argv.slice(FIRST_ARG_POSITION + 1);

async function grepDir(path) {
  for (const file of await readdir(path)) {
    grepFile(resolve(process.cwd() + `/${path}`, file)); 
  }
}

async function grepFile(path) {
    return readFile(path, "utf8")
      .then(text => {
        for (const line of text.split("\n")) {
          if (line.match(regex)) {
            console.log(`${path}: ${line}`);
          } 
        }
      });
}

for (const arg of args) {
  stat(arg)
    .then(stats => stats.isDirectory())
    .then(isDirectory => {
      if (!isDirectory) {
        grepFile(arg);
      } else {
        grepDir(arg);
      }
    })
}
