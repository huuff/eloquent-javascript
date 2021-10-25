const chapter4 = require("../src/c4");

test("range 1 to 10", () => {
  expect(chapter4.range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("range 1 to 10 step 2", () => {
  expect(chapter4.range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
});

test("range 5 to 2 step -1", () => {
  expect(chapter4.range(5, 2, -1)).toEqual([5, 4, 3, 2]);
});

test("sum 1 to 10", () => {
  expect(chapter4.sum(chapter4.range(1, 10))).toBe(55);
});

test("reverse array", () => {
  expect(chapter4.reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    .toEqual[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
});

test("reverse array in place", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  chapter4.reverseArrayInPlace(arr);
  expect(arr).toEqual[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
});

test("array converted to list", () => {
  const arr = [1, 2, 3];
  expect(chapter4.arrayToList(arr)).toEqual({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: undefined
      }
    }
  });
});

test("list converted to array", () => {
  const list = new chapter4.List([1, 2, 3]);

  expect(chapter4.listToArray(list)).toEqual([1, 2, 3]);
});

test("Element is prepended", () => {
  const list = new chapter4.List([2, 3, 4]);

  expect(chapter4.prepend(list, 1).toArray()).toEqual([1, 2, 3, 4]);
});

test("Third element is 3", () => {
  const list = chapter4.arrayToList([1, 2, 3, 4]);

  expect(chapter4.nth(list, 2)).toBe(3);
});

test("deep equals is equals", () => {
  const obj1 = { a:1, b: {c: "2", d: { e: 3}}}
  const obj2 = { a:1, b: {c: "2", d: { e: 3}}}

  expect(chapter4.deepEquals(obj1, obj2)).toBe(true);
});

test("not equal are not deep equal", () => {
  const obj1 = { a:1, b: {c: "2", d: { e: 3}}}
  const obj2 = { a:1, b: {c: "2", d: { e: 4}}}

  expect(chapter4.deepEquals(obj1, obj2)).toBe(false);
});
