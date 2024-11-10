"use strict";
// let x: number  = 1; // in typescript // type inferencing
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18;
    }
}
const m = new Manager("harkirat", 21);
console.log(m.name);
console.log(m.age);
