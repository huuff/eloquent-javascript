function min(x, y) {
  return x > y ? y : x;
}

function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}

function countChar(str, charToCount) {
  let count = 0;
  for (let currentChar of str) {
    if (currentChar === charToCount) {
      count++;
    }
  }

  return count;
}

function countBs(str) {
  return countChar(str, "B");
}

module.exports = {
  min: min,
  isEven: isEven,
  countChar: countChar,
  countBs: countBs
}
