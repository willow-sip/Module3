"use strict;" 
//Fun with ES6 Classes #4
class Cube {
  constructor(length) {
    this._length = length;
  }

  get length() {
    return this._length;
  }
  set length(value) {
    if (value <= 0) {
      throw new Error("Length can't be negative");
    }
    this._length = value;
  }


  get surfaceArea() {
    return 6 * this._length ** 2;
  }
  set surfaceArea(area) {
    if (area <= 0) {
      throw new Error("Surface can't be negative");
    }
    this._length = Math.sqrt(area / 6);
  }


  get volume() {
    return this._length ** 3;
  }
  set volume(vol) {
    if (vol <= 0) {
      throw new Error("Volume can't be negative");
    }
    this._length = Math.cbrt(vol);
  }
}