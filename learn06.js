//scope in javascript

//global scope

// var a = 10;
// let b = true;
// const c = "abc";

// console.log(a); //10
// console.log(window.a); //10

// console.log(b); //true
// console.log(window.b); // undefined // ;let ra const ko value chai basdaina 


// console.log(c) //abc
// console.log(window.c); // undefined


// function myFunction(a) {
//     console.log(a);
// }
// console.log(window.myFunction) // global scope varaiable


// let e;

// function myfunction(a, b) {
//     const f = true;
//     console.log(f); // true
//     //console.log(d); // d is not defined at myfunction 

//     console.log(e); // undefined
//     console.log(a, b); //values of the parameter a and b
// }

// myfunction();

// myfunction(2, 3);
// //console.log(f); //local scope ko access garna khojda mildaina ni//f is not defined


// // another examples

// // scope chain

// const g = 2;

// function sum(a, b) {
//     //const c = 3; //yo varibale global vayo mult functin ko lagi

//     function mult(a, b) {
//         return a * b * g; //150

//     }
//     console.log(mult(a, b));
//     return a + b;
// }

// const result = sum(10, 5);

// console.log(result);


// //another example
// //yetekai a =10 matra declare garyo vani tyo global scope variable hunxa automatically

// const myanotherfunction = function() {
//     b = 5; //globle scope ho ni yo 
//     console.log(b); //5
// }
// myanotherfunction();
// console.log(b); //5 myanotherfunction ko b use garxa as b

//challenge

//scope vitra value xa but define chaina vani undefine hunxa otherwise globle maa herxa hia

//challenge 1

// const b = 2;
// let d = 15;

// function myFn1(a) {
//     let b;
//     d = 10;
//     myFn2(b);
// }

// function myFn2(a) {
//     let c = 5;
//     console.log(a, b, c, d);

// }
// myFn1();
// //answer: undefined,2,5,10

//challenge 2 

// setTimeout(function myFn() {
//     console.log("hello world");
// }, 2000);

// myFn(); //yo function delcare nai vako chaina global scope maa so error auxa