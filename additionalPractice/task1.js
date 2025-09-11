"use strict;"
const person = {
  name: "John",
  age: 26,
  job: "Developer",
  isWorkingRemote: true
};

console.log("Properties before any changes:");
console.log("Name: ", Object.getOwnPropertyDescriptor(person, "name"));
console.log("Age: ", Object.getOwnPropertyDescriptor(person, "age"));
console.log("Developer: ", Object.getOwnPropertyDescriptor(person, "job"));
console.log("Working remote: ", Object.getOwnPropertyDescriptor(person, "isWorkingRemote"));

["name", "age", "job", "isWorkingRemote"].forEach(prop => {
  Object.defineProperty(person, prop, {
    writable: false,
    enumerable: false,
    configurable: false
  });
});

console.log("After making changes:");
person.name = "Mark"; 
console.log("Tried to change name:", person.name); 
delete person.age;
console.log("Tried to delete age:", person.age);
console.log("Enumerating:");
for (let key in person) {
  console.log(key);
}
console.log("Object.keys:", Object.keys(person));

console.log("\nProperties after all changes:");
console.log("Name: ", Object.getOwnPropertyDescriptor(person, "name"));
console.log("Age: ", Object.getOwnPropertyDescriptor(person, "age"));
console.log("Developer: ", Object.getOwnPropertyDescriptor(person, "job"));
console.log("Working remote: ", Object.getOwnPropertyDescriptor(person, "isWorkingRemote"));