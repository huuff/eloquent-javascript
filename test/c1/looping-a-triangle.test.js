const triangle = require("../../src/c1/looping-a-triangle");

test('prints triangle', () => {
  console.log = jest.fn();
  triangle();
  expect(console.log.mock.calls[0][0]).toBe('#');
  expect(console.log.mock.calls[1][0]).toBe('##');
  expect(console.log.mock.calls[2][0]).toBe('###');
  expect(console.log.mock.calls[3][0]).toBe('####');
  expect(console.log.mock.calls[4][0]).toBe('#####');
  expect(console.log.mock.calls[5][0]).toBe('######');
  expect(console.log.mock.calls[6][0]).toBe('#######');
});
