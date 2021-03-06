const { VillageState } = require('../../../src/projects/c7/village-state');
const { runRobot, randomRobot, routeRobot, goalOrientedRobot, bestRobot } = require("../../../src/projects/c7/robots");

test("random robot solves the problem", () => {
  const result = runRobot(VillageState.random(), randomRobot); 
  
  expect(result.finalState.parcels.length).toBe(0);
});


test("route robot solves the problem", () => {
  const result = runRobot(VillageState.random(), routeRobot, []);
  
  expect(result.finalState.parcels.length).toBe(0);
});

test("goal oriented robot solves the problem", () => {
  const result = runRobot(VillageState.random(), goalOrientedRobot, []);

  expect(result.finalState.parcels.length).toBe(0);
});

test("best robot solves the problem", () => {
  const result = runRobot(VillageState.random(), bestRobot, []);

  expect(result.finalState.parcels.length).toBe(0);
});
