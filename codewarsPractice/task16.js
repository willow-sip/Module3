"use strict;" 
//Building blocks
class Block {
  constructor(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }
  getSurfaceArea() {
    const topBot = this.width * this.length;
    const frontBack = this.length * this.height;
    const side = this.width * this.height;
    return 2 * (topBot + side + frontBack);
  }

}