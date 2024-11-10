// // interface class 


// interface User{
//     name:string;
//     age: number;
//     isLegal():boolean;

// }

// class Manager implements User{
//     name: string;
//     age: number;
//     constructor(name:string, age:number){
//         this.name = name;
//         this.age= age;
    
//     }
//     isLegal(): boolean {
//         return this.age > 18
//     }
// }

// class God extends Manager {
//     constructor(name:string, age:number){
//         super(name, age)
//     }
// }





// const m = new Manager("harkirat",21);
// console.log(m.name);
// console.log(m.age);
// console.log(m.isLegal())


// const G = new God("Rohit", 10);
// console.log(G.name);
// console.log(G.age);
// console.log(G.isLegal())













// interface Employee{
//     name:string;
//     age:number;
//     designation:string;

// }

// class ASE_EMPLOYEE implements Employee {
//     name: string;
//     age: number;
//     designation: string;
//     constructor(name:string, age:number, designation: string){
//         this.name = name;
//         this.age = age;
//         this.designation = designation;

//     }
// }



// const m = new ASE_EMPLOYEE("Karthik", 23, "SE");
// console.log(m.designation);