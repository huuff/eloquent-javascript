const chapter6 = require("../src/c6");

test("vectors are plused", () => {
  const vec1 = new chapter6.Vector(1, 2);
  const vec2 = new chapter6.Vector(2, 1);
  const vec3 = vec1.plus(vec2);

  expect(vec3.x).toBe(3);
  expect(vec3.y).toBe(3);
  
});

test("vectors are subtracted", () => {
  const vec1 = new chapter6.Vector(1, 2);
  const vec2 = new chapter6.Vector(2, 1);
  const vec3 = vec1.minus(vec2);

  expect(vec3.x).toBe(-1);
  expect(vec3.y).toBe(1);
});

test("length is correctly computer", () => {
  const vector = new chapter6.Vector(3, 3);

  expect(vector.length).toBeCloseTo(4.24);
});

test("element is added to group", () => {
  const group = chapter6.Group.from([1, 2, 3]);

  expect(group.has(4)).toBe(false);

  group.add(4);
  
  expect(group.has(4)).toBe(true);
});

test("element is removed from group", () => {
  const group = chapter6.Group.from([1, 2, 3]);

  expect(group.has(2)).toBe(true);

  group.delete(2);
  
  expect(group.has(2)).toBe(false);
});

test("group is iterable", () => {
  const consoleMock = jest.spyOn(console, 'log').mockImplementation();

  const group = chapter6.Group.from([1, 2, 3]);

  for (let elem of group) {
    console.log(elem);
  }

  expect(consoleMock.mock.calls).toEqual([ [1], [2], [3]]);
});
