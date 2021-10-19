//Advance topics in javascript


// mutuable vs immutable values

// // const newarray = [];

// // newarray.push(5);
// // newarray.push("abc");
// // newarray.push(-5);
// // console.log(newarray);

// // newarray.pop();

// // console.log(newarray);
// // // we have mutated the value of array  //change the value not the ponter of newarray
// // // valarable is not mutuable or immutable
// // // immutable is cant be changed eg string number etc







/** typeof and instanceof  operator */

//typeof 10;

//use case of typeof operator

// const a = 10;

// if (typeof a === "number") {
//     alert('it is number!');
// }

// const b = [];

// if (typeof b === 'Object') {
//     //yo truth hunxa even if b is empty or has a value so we need other type of check which is instanceof operator;
// }



//instanceof

// const c = [];

// c instanceof Array; // true
// c instanceof Object; // true

// const d = {};

// d instanceof Array; // false
// d instanceof Object; // true
//example
// const myarray = [1, 2];

// if (myarray instanceof Array) {
//     console.log("it is aray");
// }





/** new Array new String */

// const array = [1, 2, 4];

// const newarray = new Array(1, 2, 4);

// console.log(array);
// console.log(newarray);



// const string = "abc";
// const newstring = new String("abc");

// console.log(string);
// console.log(newstring);

/** New Object New Function */
//done same as above but function ko lagi halka diff

// const newfunction = new Function("a", "console.log(a);"); // a chai parameter ho fucntion ko ani helloworld argument chai pass garyeko 


// newfunction("helloworld");



// Exection contexts and Exection contexts stack

// Global execution context

// // console.log("this is global exection context");

// // const a = 10;

// // console.log(a);

// // function myFunctino (a,b) {
// //     console.log("this is functino exection context");

// //     return a +b;

// // }
// // console.log(myFunctino(5,200)); //new function exection context is created

// // console.log(myFunctino(2,3)); // new function exection context is created

//exection contexts stack

// console.log("globa exection context - root level in stack");

// function firstlevel() {
//     console.log("function ecextion context - second levvel in the stack");

//     function secondlevel() {
//         console.log("function ecextion context - third levvel in the stack");

//         function thridlevel(){
//             console.log("function ecextion context - forth levvel in the stack");
//         }
//       thridlevel();
//     }

//     secondlevel();

// }

// firstlevel();


//This special keyword/varibale


//example 1
// console.log(this); // window //  means we can access gobale properties 
// console.log(this === window); // true

// this.console.log('method of this');

//exampel 2
// this inside of the functon
// function myFunction() {
//     console.log(this);
// }

// myFunction();

// window.myFunction();

//example 3
// this inside of the function in strict mode

//"use strict";
// function myFunction() {
//     console.log(this);
// }

// myFunction(); //aba chai yo undefined auxa

// window.myFunction();// this is equal to window in strict mode


//example 4
//this indide of the methods of the object
// const myobject = 
// {
//     name:"alice",
//     age:20,
//     greeting: function() {
//         console.log(this); //this is equal to {name:'alice ,age:20, greeting: ....}
//         console.log("name of the person is " + this.name + " and age is " + this.age);
//     }
// };

// myobject.greeting();

//example 4
//index.html maa xa hai






/** apply bind call method of the function 
 * 
 * 
*/

// //call method - custom this
// const myobject = {
//     a:10,
//     b:null
// }

// function myFunction() {
//     console.log(this);
// }
// myFunction(); //"this " is window

// myFunction.call(myobject);//"this" is { a:10,b:null}




//example 2


// //call method - custom 'this' and arguments
// const myobject = {
//     a:10,
//     b:null
// }

// function myFunction(a,b) {
//     console.log(a+b);
//     console.log(this);
// }
// //myFunction(); //"this " is window

// myFunction.call(myobject,10,3);  //"this" is { a:10,b:null}


//example 3 - Call - call method of the object with other object as 'this'

// const mynumber= {
//     a:10,
//     b:null,
//     info : function (){
//         console.log(this.a + " is not " + this.b + ' value');
// }
// };

// const mynumber2 = {
//     a:20,
//     b: null,
// }
// mynumber.info(); // 10 is not null value// we are calling info method of mynumber object

// mynumber.info.call(mynumber2); // 20 is not null value // info method of mynumber is used by mynumber2 using call method


/**
 * APPLY METHOD
 * 
 */

// appy - custom 'this' and arguments
// const myobject = {
//     a:10,
//     b:null
// }

// function myFunction(a,b) {
//     console.log(a+b);
//     console.log(this);
// }
// //myFunction(); //"this " is window

// myFunction.apply(myobject,[10,3]);  //"this" is { a:10,b:null}

//example 2
// const myobject = {
//     a:10,
//     b:null
// };
// function myFunction(a,b,c){
//     let sum = a+b+c;

//     for(let key in this) {
//         if( typeof this[key] === "number"){
//             sum +=this[key];
//         }
//     }
//     console.log(sum);
// }

// myFunction.apply(myobject,[10,3,5]);



// bind method

// const myobject = {
//     a:10,
//     b:null
// };

// function myFunction (a,b){
//     console.log(a+b);
//     console.log(this);
// }

// const coustomFunction1 = myFunction.bind(myobject,10,3); // preset "this" and both argumnets

// coustomFunction1();

// const customfunction2 = myFunction.bind(myobject); //preset only "this"

// customfunction2(20,6); //call with custom argumets

// const customfucntion3 = myFunction.bind(myobject,3);
// customfucntion3(4);


//PASS BY VALUE

//if variable that holds value of primitive value type is passed to the functino as argument,it's value can;t be cahnged inside of the function 
//immutable jastai 
// function myFunction(paramterA) {
//     paramterA = 20;
//     return paramterA;
// }

// const a = 10;

// console.log(myFunction(a)); //20

// console.log(a); //10


//PASS BY REFERENCE

// const myArray = [1,2,3];

// function myFunction(arr) {
//     console.log(arr === myArray); //true
//     arr.push(4);
//     console.log(arr);
//     return arr;
// }
// myFunction(myArray);

// console.log(myArray);


//challenge

// function addCustomGloabaMethod(globalObject){
// globalObject.customMethod = function () {
//     console.log("greeting from the custom method");
// };
// }
// addCustomGloabaMethod(this); 
// console.log(this === window); // true
// console.log(typeof window); // "object"

// this.customMethod(); //"reeeting from the custom method"

// window.customMethod(); // "greeting from the custom method"
// customMethod(); // "greeting form the custom method"



//Immediately ivoked function expression
//fucntion expression imidately get invoked

// (function (globalObject){
//     globalObject.customMethod = function () {
//         console.log("greeting from the custom method");
//     };
//     }) (this);

//     console.log(this === window); // true
//     console.log(typeof window); // "object"
    
//     this.customMethod(); //"reeeting from the custom method"
    
//     window.customMethod(); // "greeting from the custom method"
//     customMethod(); // "greeting form the custom method"

//option 2


// (function(){
//     this.customMethod = function () {
//         console.log("greeting from the custom method");
//     };
//     })();
    
//     console.log(this === window); // true
//     console.log(typeof window); // "object"
    
//     this.customMethod(); //"reeeting from the custom method"
    
//     window.customMethod(); // "greeting from the custom method"
//     customMethod(); // "greeting form the custom method"

//option 3


// (()=>{
//     this.customMethod = function () {
//         console.log("greeting from the custom method");
//     };
//     })();
    
//     console.log(this === window); // true
//     console.log(typeof window); // "object"
    
//     this.customMethod(); //"reeeting from the custom method"
    
//     window.customMethod(); // "greeting from the custom method"
//     customMethod(); // "greeting form the custom method"



//Synchronous code execution

// function waitingFn( timeInMs) {
//     const futureTime = Date.now() + timeInMs;
//     while(futureTime > Date.now()) {
//        //waiting...
//     }
// }

// waitingFn(3000);
// //after 3000 ms then only console.log will be printed coz javascript code execute synchronusly 
// console.log("function call has just ended");



//Events and Events queue
// function waitingFn( timeInMs) {
//     const futureTime = Date.now() + timeInMs;
//     while(futureTime > Date.now()) {
//        //waiting...
//     }
// }

// waitingFn(3000);
// //after 3000 ms then only console.log will be printed coz javascript code execute synchronusly 
// console.log("function call has just ended");


//CALLBACKS ,events ,events queue and execution contexts stack,web APIs
// function waitingFn( timeInMs) {
//     const futureTime = Date.now() + timeInMs;
//     while(futureTime > Date.now()) {
//        //waiting...
//     }
// }
// //this is placed in different exection stack call web apis 
// //after that placed is event queue but it is only be exected if exection stack is empty
//  setTimeout(() => {
//       console.log('callback is exectued')
//  },2000);

// waitingFn(5000);

//  console.log("last statement in the global execution context");


//Closure

// function outerfn(mult) {
//     const a= 10;

//     function innerfn(b){
//         console.dir(innerfn);
//         return (a+b) * mult;

//     } 
//     return innerfn;

// }

// const res1 = outerfn(2);
// console.log(res1(20)); 
// const res2 = outerfn(3);
// console.log(res2(20)); 