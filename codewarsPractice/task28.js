"use strict;" 
//Fun with ES6 Classes #3
class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get surfaceArea() {
    const topBot = this.width * this.length;
    const frontBack = this.length * this.height;
    const side = this.width * this.height;
    return 2 * (topBot + side + frontBack);
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}