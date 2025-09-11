"use strict;" 
//JavaScript class-like objects
//however, this task didn't have any sample tests and
//i'm not familiar how to write ones...
function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Object.defineProperty(Animal.prototype, 'name', {
  set: function (value) {
    this.name = value;
  }
});

Animal.prototype.toString = function () {
  return `${this._name} is a ${this.type}`;
};