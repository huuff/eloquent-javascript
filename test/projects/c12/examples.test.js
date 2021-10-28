const { parse } = require("../../../src/projects/c12/parse");
const { evaluate } = require("../../../src/projects/c12/evaluate");
const { topScope } = require("../../../src/projects/c12/top-scope");

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
  expect(evaluate(parse("if(true, false, true)"), topScope));
});
