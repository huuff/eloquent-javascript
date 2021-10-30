class PGroup {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }

  static empty = new PGroup(null, undefined);

  has(elem) {
    if (this === PGroup.empty)
      return false;

    if (this.value === elem) {
      return true;
    } else {
      return this.rest.has(elem);
    }
  }

  add(elem) {
    if (this.has(elem))
      return this;

    return new PGroup(elem, this);
  }

  delete(elem) {
    if (this === PGroup.empty)
      return this;


    if (this.value !== elem) {
      return new PGroup(this.value, this.rest.delete(elem));
    } else {
      return this.rest;
    }
  }
}

module.exports = {
  PGroup: PGroup
}
