const chapter5 = require('../src/c5');

test('Array is flattened', () => {
  expect(chapter5.flatten([1, [2, 3, 4], [5, 6], 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('loops 5 times', () => {
  const consoleMock = jest.spyOn(console, 'log').mockImplementation();
  chapter5.loop(0, (x) => x < 5, (x) => x + 1, (x) => console.log(`Iteration ${x}`));
  for (let i = 0; i < 5; i++) {
    expect(consoleMock.mock.calls[i][0]).toBe(`Iteration ${i}`);
  }
  consoleMock.mockRestore();
});

test('everyLoop matches', () => {
  expect(chapter5.everyLoop([2, 4, 6], (x) => x % 2 === 0)).toBe(true);
});

test('everyLoop does not match', () => {
  expect(chapter5.everyLoop([1, 3, 5], (x) => x % 2 === 0)).toBe(false);
});

test('everySome matches', () => {
  expect(chapter5.everySome([2, 4, 6], (x) => x % 2 === 0)).toBe(true);
});

test('everySome does not match', () => {
  expect(chapter5.everySome([1, 3, 5], (x) => x % 2 === 0)).toBe(false);
});

