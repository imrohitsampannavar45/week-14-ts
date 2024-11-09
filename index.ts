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

let greet = () =>
{
    console.log("Hi There");
}