const VillageState = require("../../../src/projects/c7/village-state.js").VillageState;
const { randomRobot } = require("../../../src/projects/c7/random.js");
const { runRobot } = require("../../../src/projects/c7/run-robot.js");

test("package is delivered and state is not mutated", () => {
  let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
  );

  let next = first.move("Alice's House");

  expect(next.place).toBe("Alice's House");
  expect(next.parcels).toEqual([]);
  expect(first.place).toBe("Post Office");
})


test("random robot solves the problem", () => {
  const result = runRobot(VillageState.random(), randomRobot); 
  
  expect(result.finalState.parcels.length).toBe(0);
  console.log(`Done in ${result.turns} turns`);
});
