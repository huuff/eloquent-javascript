const { VillageState } = require("../../../src/projects/c7/village-state.js");

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
