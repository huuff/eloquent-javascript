const { parse } = require("../../../src/projects/c12/parse");
const { run } = require("../../../src/projects/c12/run")

test("parses correctly", () => {
  expect(parse("+(a, 10)")).toEqual({
    type: "apply",
    operator: { type: "word", name: "+"},
    args: [
      { type: "word", name: "a" },
      { type: "value", value: 10 }
    ]
  });
});

test("negation works", () => {
  expect(run("if(true, false, true)")).toBe(false);
});

test("sum of 1 to 10", () => {
  expect(run(`
      do(define(total, 0),
        define(count, 1),
        while(<(count, 11),
        do(define(total, +(total, count)),
          define(count, +(count, 1)))),
        print(total))
    `)).toBe(55);
});
