// let x: number  = 1; // in typescript // type inferencing

import { server } from "typescript";

// // int x = 1; // in java

// x = "harkirat"

// console.log(x);




// function greet(firstName: string | number){
//     console.log("hello" + " "+ firstName);
// }

// // number, string , any 

// // let x: any = 1;
// // x = true;
// // x = "harkirat"
// // x= "random"

// greet("harkirat");



// function sum(a: number, b:number){
//   return a+ b
// }

// let ans = sum(1,2);
// console.log(ans);



// function check(age:number){
//     if(age >= 18){
//         return true;
//     }else{
//         return false
//     }
// }

// console.log(check(55));




// function delayedCall(fn: () => void){
//     setTimeout(fn, 1000);
// }

// delayedCall(function()){
//     console.log("hello World");
// }



// function delayedCall(anotherFn: ()=>void){
// setTimeout(anotherFn, 1000)
// }


// function log(){
//     console.log("Hi there");

// }

// delayedCall(log)




// function delay(msg: ()=> void){
//     setTimeout(msg, 5000)
// }

// function msg(){
//     console.log("Hi Message");
// }

// delay(msg);

// let greet = () =>
// {
//     console.log("Hi There");
// }


// function greet(user: {
//     name:string, 
//     age: number
// }){
//     console.log("hello" + user.name)
// }


// greet({
//     name:"harkirat",
//     age:21
// })

// let user = {
//     name:"harkirat",
//     age:31
// }

// greet(user)






// let firstName: string = "harkirat"
// let age: number= 21


// function greet(user:{
//     firstname: string,
//     age:number,
//     lastname:string
// })




// let user : {
//     firstname:string,
//     age:number
// } = {
//     firstname: "harkiratr",
//     age:32
// }




// let firstname: string = "rohit"
// let age: number = 21


// interface UserType  {
//     firstname: string,
//     lastname:  string,
//     age: number
// }

// function greet(user: UserType) {

// }


// let user: UserType = {
//     firstname :  "Rohit",
//     age: 32,
//     lastname : "Sampannavar"
// } 




// interface User {
//     name:string,
//     age:number
// }


// type UserType = {
//     name:  string,
//     age: number
// }



// type SumInput = string | number;


// function sum(a:SumInput, b:SumInput){

//         console.log (return a + b )
// }


// function sum(a: number,  b: number):number{
// return a+b
// }


// function greet(name:String):string{
//     return "hello World" +name
// }

// var greeting = greet("rohit");
// console.log(greeting);


//interfaces and Types in TypeScript 

// function isEven(num: number):boolean {
//     if(num%2 == 0){
//     return true
//     } else {
//         return false
//     }
// }



// interfaces anf Types Class 11/10/2024


// interface Office {


//     city : string, 
//     country : string ;
//     pincode : number;
//     houseNumber :string;




// }


// interface User  {
//     name:string,
//     age:number,
//     address: Office // ? optional denoted
//     }





// interface office {
// address :  office
  
// }






// let user: User = {
//     name:"harkirat",
//     age:33,
//     address: {
//         city: "bangalore",
//         country:"india",
//         pincode:52441
//     }
// }




// function isLegal(user:User):boolean{
//     if(user.age >=18){
//         return true;
//     }else {
//             return false
//         }
//     }

//     let aging = isLegal(user)
//     console.log(aging)
 

//     //interface defined for custom type 





// interface People {
//     name: string, 
//     age: number,
//     greet: () => string,   /// functions 

// }



// interface Person {
//     name:string,
//     age:number;
//     address : {
//         pincode:number;
//         houseno:1244
//     }
// }



// let person: Person = {
//     name:"rohit",
//     age: 23,
//     greet:() => {
//         return "hi"
//     }
// }

// let greeting = person.greet()
// console.log(greeting)





// // objects == 
// let user = {
//     console.log= "big time"
// }




// class  Rectangle {
//     constructor() {}
//     area() {}
// }


// let rect = new Rectangle()





// interface People {
//     name:string;
//     age:number;
// }

// class Manager implements People{
//     name:string;
//     age:number;
//     number:string;

//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//         this.number("12334445");
//     }
// }

