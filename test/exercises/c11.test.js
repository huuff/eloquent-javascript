const {
  bigOak,
  everywhere,
} = require('../../src/examples/c11/crow-tech')

const {
  findScalpel,
  allPromises,
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

test("all promises", async () => {
  const promises = [
    Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)
  ];

  const results = await allPromises(promises);

  expect(results.includes(1));
  expect(results.includes(2));
  expect(results.includes(3));
});
