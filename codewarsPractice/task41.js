"use strict;" 
//How new Works
function MyObject() {
  this.greeting = "Hello from MyObject!";
  this.myOwnProperty = true;
}

const myObj = {};
myObj.__proto__ = MyObject.prototype;
MyObject.call(myObj);