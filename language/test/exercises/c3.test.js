const chapter2 = require("../../src/exercises/c3");

test("gets minimum", () => {
  expect(chapter2.min(-2, 3)).toBe(-2);
});

test("even detected", () => {
  expect(chapter2.isEven(50)).toBe(true);
})

test("odd detected", () => {
  expect(chapter2.isEven(75)).toBe(false);
})

test("counts number of chars", () => {
  expect(chapter2.countChar("XXasdmXkk", "X")).toBe(3);
})

test("counts number of Bs", () => {
  expect(chapter2.countBs("BaBaBa")).toBe(3);
})
