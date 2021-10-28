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

test("plus one function", () => {
  expect(run(`
    do(define(plusOne, fun(a, +(a, 1))),
      print(plusOne(10)))
  `)).toBe(11);
});

test("tenth power of 2 is 1024", () => {
  run(`
    do(define(pow, fun(base, exp,
      if(==(exp, 0),
        1,
        *(base, pow(base, -(exp, 1)))))),
        print(pow(2, 10)))
    `);
});
