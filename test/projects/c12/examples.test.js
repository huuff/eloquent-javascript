const { parse } = require("../../../src/projects/c12/parse");

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
