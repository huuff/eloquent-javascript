const chapter1 = require("../src/c1");

test('prints triangle', () => {
  console.log = jest.fn();
  chapter1.triangle();
  expect(console.log.mock.calls[0][0]).toBe('#');
  expect(console.log.mock.calls[1][0]).toBe('##');
  expect(console.log.mock.calls[2][0]).toBe('###');
  expect(console.log.mock.calls[3][0]).toBe('####');
  expect(console.log.mock.calls[4][0]).toBe('#####');
  expect(console.log.mock.calls[5][0]).toBe('######');
  expect(console.log.mock.calls[6][0]).toBe('#######');
});

test('correctly FizzBuzzes', () => {
  console.log = jest.fn();
  chapter1.fizzBuzz();
  for (let i = 0; i < 100; i++) {
    let iteration = i + 1;
    if ((iteration % 15) === 0) {
      expect(console.log.mock.calls[i][0]).toBe('FizzBuzz');
    } else if ((iteration % 5) === 0) {
      expect(console.log.mock.calls[i][0]).toBe('Buzz');
    } else if ((iteration % 3) === 0) {
      expect(console.log.mock.calls[i][0]).toBe('Fizz');
    } else {
      expect(console.log.mock.calls[i][0]).toBe(iteration);
    }
  }
});
