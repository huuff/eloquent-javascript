// Commenting logs to unnoise

function runRobot(state, robot, memory) {
  for (var turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      //console.log(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    //console.log(`Moved to ${action.direction}`);
  }

  return {
    finalState: state,
    turns: turn
  };

}

module.exports = {
  runRobot: runRobot
}
