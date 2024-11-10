"use strict";
// let x: number  = 1; // in typescript // type inferencing
Object.defineProperty(exports, "__esModule", { value: true });
class ASE_EMPLOYEE {
    constructor(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }
}
const m = new ASE_EMPLOYEE("Karthik", 23, "SE");
console.log(m.designation);
