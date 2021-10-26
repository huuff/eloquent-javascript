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

module.exports = {
  MultiplicatorUnitFailure: MultiplicatorUnitFailure,
  primitiveMultiply: primitiveMultiply,
  retryPrimitiveMultiply
}
