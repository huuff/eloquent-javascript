const { readFile } = require("fs").promises;
const { stat } = require("fs").promises;

const FIRST_ARG_POSITION = 2;

const regex = new RegExp(".*" + process.argv[FIRST_ARG_POSITION] + ".*");
const args = process.argv.slice(FIRST_ARG_POSITION + 1);

function grepFile(path) {
    readFile(path, "utf8")
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
      }  
    })
}
