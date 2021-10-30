const { VillageState } = require('../../../src/projects/c7/village-state');
const { runRobot, randomRobot, routeRobot, goalOrientedRobot, bestRobot } = require("../../../src/projects/c7/robots");

const MAX_ITERATIONS = 100;

// Not really a test I guess

test("compare robots", () => {
  let totalTurnsRandom = 0;
  let totalTurnsRoute = 0;
  let totalTurnsGoalOriented = 0;
  let totalTurnsBestRobot = 0;

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const villageState = VillageState.random();

    totalTurnsRandom += runRobot(villageState, randomRobot).turns;
    totalTurnsRoute += runRobot(villageState, routeRobot, []).turns;
    totalTurnsGoalOriented += runRobot(villageState, goalOrientedRobot, []).turns;
    totalTurnsBestRobot += runRobot(villageState, bestRobot, []).turns;
  }

  console.info(`Average turns for Random Robot: ${totalTurnsRandom / MAX_ITERATIONS}`);
  console.info(`Average turns for Route Robot: ${totalTurnsRoute / MAX_ITERATIONS}`);
  console.info(`Average turns for Goal Oriented Robot: ${totalTurnsGoalOriented / MAX_ITERATIONS}`);
  console.info(`Average turns for Best Robot: ${totalTurnsBestRobot / MAX_ITERATIONS}`);
});
