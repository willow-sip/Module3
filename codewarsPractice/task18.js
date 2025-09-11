"use strict;" 
//FIXME:Get Full Name
class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    if (this.firstName === "") {
      return this.lastName
    } else if (this.lastName === "") {
      return this.firstName
    } else if (this.lastName === this.firstName === "") {
      return "";
    }
    return this.firstName + " " + this.lastName
  }
}