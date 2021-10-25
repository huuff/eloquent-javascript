class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2));
  }

  plus(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vector(this.x - other.x, this.y - other.y);
  }
}

class Group {

  static from(iterable) {
    const group = Object.create(Group.prototype);
    group.elems = [];

    for (let elem of iterable) {
      group.add(elem);
    }

    group[Symbol.iterator] = function* () {
      for (let elem of this.elems) {
        yield elem;
      }
    }

    return group;
  }
  
  has(elem) {
    return this.elems.includes(elem);
  }

  add(elem) {
    if (!this.has(elem))
      this.elems.push(elem);
  }

  delete(elem) {
    if (this.has(elem)) {
      this.elems.splice(this.elems.indexOf(elem), 1);
    }
  }

}


module.exports = {
  Vector: Vector,
  Group: Group
}
