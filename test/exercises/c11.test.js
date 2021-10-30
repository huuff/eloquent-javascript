const {
  bigOak,
  everywhere,
} = require('../../src/examples/c11/crow-tech')

const {
  findScalpel,
} = require('../../src/exercises/c11');

const {
  exampleCode,
} = require('../../src/examples/c11/c11');

beforeEach(() => {
  jest.useFakeTimers();
  exampleCode();
  jest.runAllTimers();
});

test("scalpel is found", async () => {
  jest.useRealTimers();
  everywhere((nest) => nest.alwaysSucceed());

  const foundScalpel = await findScalpel(bigOak); 

  expect(foundScalpel).toBe("Butcher Shop");
});
