const roadGraph = require("./graph.js").graph;

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

module.exports = {
  randomPick: randomPick,
  randomRobot: randomRobot
}
