function range(start, end, step = 1) {
  let result = [];
  for (let i = start; step > 0 ? i <= end: i >= end; i += step) {
    result.push(i);
  }
  return result;
}

function sum(arr) {
  return arr.reduce((x, y) => x + y);
}

function reverseArray(arr) {
  let reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
}

function reverseArrayInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [[arr[start], arr[end]]] = [[arr[end], arr[start]]];
    start++;
    end--;
  }
}

class List {
  constructor(arr) {
    this.value = arr[0];
    let restArr = arr.slice(1);
    if (restArr.length !== 0) {
      this.rest = new List(restArr);
    } else {
      this.rest = undefined;
    }
  }

  toArray() {
    if (this.rest === undefined) {
      return [ this.value ];
    } else {
      return [ this.value ].concat(this.rest.toArray());
    }
  }

  prepend(elem) {
    const newList = Object.create(List.prototype);

    newList.value = elem;
    newList.rest = this;

    return newList;
  }

  nth(n) {
    if (n === 0) {
      return this.value;
    } else {
      return this.rest.nth(n-1);
    }
  }
}

function arrayToList(arr) {
  return new List(arr); 
}

function listToArray(list) {
  return list.toArray();
}

function prepend(list, elem) {
  return list.prepend(elem);
}

function nth(list, n) {
  return list.nth(n);
}

function deepEquals(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    if (Object.keys(obj1).some(key => !Object.keys(obj2).includes(key))) {
      return false;
    }

    return Object.keys(obj1).every(key => deepEquals(obj1[key], obj2[key]));
  }

  return false;
}

module.exports = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace,
  List: List,
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth,
  deepEquals, deepEquals
}
