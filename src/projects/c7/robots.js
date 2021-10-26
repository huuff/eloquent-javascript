const { randomPick } = require('./random-pick.js');
const { roadGraph } = require('./road-graph');

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House", "Grete's House",
  "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  
  return { direction: memory[0], memory: memory.slice(1) };
}

function runRobot(state, robot, memory) {
  for (var turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.info(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.debug(`Moved to ${action.direction}`);
  }

  return {
    finalState: state,
    turns: turn
  };

}

module.exports = {
  runRobot: runRobot,
  randomRobot: randomRobot,
  routeRobot: routeRobot
}
