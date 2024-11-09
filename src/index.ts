// let x: number  = 1; // in typescript // type inferencing

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




interface User {
    name:string,
    age:number
}


type UserType = {
    name:  string,
    age: number
}



type SumInput = string | number;


function sum(a:SumInput, b:SumInput){

        console.log (return a + b )
}