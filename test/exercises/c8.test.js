const { 
  retryPrimitiveMultiply
} = require('../../src/exercises/c8');

test('primitiveMultiply is eventually successful', () => {
  expect(retryPrimitiveMultiply(2, 3)).toBe(6);
})
