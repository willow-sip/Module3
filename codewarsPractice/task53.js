"use strict;" 
//Defining getters and setters on an existing class
Object.defineProperty(Person.prototype, 'name', {
  get: function() {
    return this.firstName + ' ' + this.lastName;
  },
  set: function(fullName) {
    const parts = fullName.split(' ');
    this.firstName = parts[0] || '';
    this.lastName = parts[1] || '';
  }
})