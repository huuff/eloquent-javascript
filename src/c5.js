function flatten(array) {
  return array.reduce((acc, elem) => acc.concat(elem), [])
}

function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

function everyLoop(arr, predicate) {
  for (let x of arr) {
    if (!predicate(x))
      return false;
  }

  return true;
}

function everySome(arr, predicate) {
  return !arr.some(x => !predicate(x));
}

module.exports = {
  flatten: flatten,
  loop: loop,
  everyLoop: everyLoop,
  everySome: everySome
}
