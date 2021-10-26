const { PGroup } = require('../../src/exercises/c7');

test("PGroup just werks", () => {
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");

  expect(b.has("b")).toBe(true);
  expect(a.has("b")).toBe(false);
  expect(b.has("a")).toBe(false);
});
