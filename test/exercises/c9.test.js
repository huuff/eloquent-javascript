const regexes = require('../../src/exercises/c9');

test('exercise 1', () => {
  const regex1 = regexes.ex1;

  expect(regex1.test('cat')).toBe(true);
  expect(regex1.test('car')).toBe(true);
  expect(regex1.test('rat')).toBe(false);
});

test('exercise 2', () => {
  const regex2 = regexes.ex2;

  expect(regex2.test('pop')).toBe(true);
  expect(regex2.test('prop')).toBe(true);
  expect(regex2.test('bro')).toBe(false);
});

test('exercise 3', () => {
  const regex3 = regexes.ex3;

  expect(regex3.test('ferret')).toBe(true);
  expect(regex3.test('ferry')).toBe(true);
  expect(regex3.test('ferrari')).toBe(true);
  expect(regex3.test('furry')).toBe(false);
});

test('exercise 4', () => {
  const regex4 = regexes.ex4;

  expect(regex4.test('evious')).toBe(true);
  expect(regex4.test('furious')).toBe(true);
  expect(regex4.test('flavius')).toBe(false);
});

test('exercise 5', () => {
  const regex5 = regexes.ex5;

  expect(regex5.test(' ;')).toBe(true);
  expect(regex5.test("\n,")).toBe(true);
  expect(regex5.test("\t.")).toBe(true);
  expect(regex5.test(';,.')).toBe(false);
})

test('exercise 6', () => {
  const regex6 = regexes.ex6;

  expect(regex6.test("Supercalifragilisticexpialidocious")).toBe(true);
  expect(regex6.test("Megalomania")).toBe(true);
  expect(regex6.test('kitty')).toBe(false);
});

test('exercise 7', () => {
  const regex7 = regexes.ex7;

  expect(regex7.test('canvass')).toBe(true);
  expect(regex7.test('dogma')).toBe(true);
  expect(regex7.test('culprit')).toBe(true);
  expect(regex7.test('meior')).toBe(false);
});


