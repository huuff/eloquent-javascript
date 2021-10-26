class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(x, y) {
  if (Math.random < 0.8)
    throw new MultiplicatorUnitFailure();
  else
    return x * y;
}

function retryPrimitiveMultiply(x, y) {
  let result = undefined;

  while (result === undefined) {
    try {
      result = primitiveMultiply(x, y);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
  return result;
}

const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },

  lock() {
    this.locked = true;
  },

  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
}

function withBoxUnlocked(body) {
  const wasBoxLocked = box.locked;
  try {
    box.unlock();
    body();
  } finally {
    if (wasBoxLocked)
      box.lock();
  }
}

module.exports = {
  MultiplicatorUnitFailure: MultiplicatorUnitFailure,
  primitiveMultiply: primitiveMultiply,
  retryPrimitiveMultiply,
  box: box,
  withBoxUnlocked: withBoxUnlocked
}
