"use strict";
// interface class 
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18;
    }
}
class God extends Manager {
    constructor(name, age) {
        super(name, age);
    }
}
const m = new Manager("harkirat", 21);
console.log(m.name);
console.log(m.age);
console.log(m.isLegal());
const G = new God("Rohit", 10);
console.log(G.name);
console.log(G.age);
console.log(G.isLegal());
