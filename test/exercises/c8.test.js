const { 
  retryPrimitiveMultiply,
  box,
  withBoxUnlocked
} = require('../../src/exercises/c8');

test('primitiveMultiply is eventually successful', () => {
  expect(retryPrimitiveMultiply(2, 3)).toBe(6);
})

test('box stays locked', () => {
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });

  try {
    withBoxUnlocked(function() {
      throw new Error("Pirated on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }

  expect(box.locked).toBe(true);
})
