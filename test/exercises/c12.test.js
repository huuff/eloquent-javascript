const { run } = require("../../src/projects/c12/run");
const { addArrays } = require("../../src/exercises/c12");

beforeAll(() => {
  addArrays();
})

test("array length", () => {
  expect(run(`
      do(
        define(arr, array(1, 2, 3, 4)),
        length(arr)
      )
    `)).toBe(4);
});

test("array element", () => {
  expect(run(`
      do(
        define(arr, array(1, 2, 3, 4)),
        element(arr, 1)
      )
    `)).toBe(2);
});


test("array element with comment", () => {
  expect(run(`
      do(
      # The parser should remove this comment
        define(arr, array(1, 2, 3, 4)),
        element(arr, 1)
      )
    `)).toBe(2);
});
