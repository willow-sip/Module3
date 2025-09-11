"use strict;" 
//Basic subclasses - Adam and Eve
class Human {
  constructor(name) {
    this.name = name;
  }
}
class Man extends Human {
  constructor(name) {
    super(name);
    this.gender = "m";
  }
}
class Woman extends Human {
  constructor(name) {
    super(name);
    this.gender = "f";
  }
}
class God {
  static create() {
    let adam = new Man("Adam");
    let eve = new Woman("Eve");
    let firstPeople = [];
    firstPeople.push(adam);
    firstPeople.push(eve);
    return firstPeople;
  }
}