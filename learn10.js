// variable lifecycle

//yesko basis maa  var let const seen
//scope
//reassign
//redeclare
//hoisting

//variable usage guideline

//1. Make code readable for toher developers
//bad code
// a = "mike";
// b="london";

// function test(x,y){
//     d=" hello " + x + " from " + y ;
//     return d;
// }

// var a,b,d;

// console.log(test(a,b));

//good code
// var personName= "mike";
// var personCity="london";

// function greet(personName,personCity){
//     var greetingPerson=(" hello " + personName + " from " + personCity);
//     return greetingPerson;
// }

// console.log(greet(personName,personCity));

//2.always declare variable before first usage
//not good
//a =10;
//var a;

//3. always add "use strict"  at the befinning of the Js file

//  "use strict";

//    b =10;

//   function fn() {
//      d = b;
//       return d;
//   }
//   fn();

//4. dont expose to the outer scope locally used  variable

//Exposed and its not a good practise
//  var myArray;
//  var i;

//  function fn2() {
//      myArray = [1,2,3];
//      for(i=0;i<myArray.length ; i++){
//          console.log(myArray[i]);
//      }
//  }
// fn2();

// //not exposed and cant be accessed outside the scope
// function fn2() {
//    var  myArray = [1,2,3];
//     for(var i=0;i<myArray.length ; i++){
//         console.log(myArray[i]);
//     }
// }
// fn2();

// var or let or const ?

//where to use CONST?

//example1
// function multiplier(a) {
//     const Mult = 10;
//     return a * Mult;

// }
// console.log(multiplier(3));
// console.log(multiplier(4));

//example 2 (Execute in Node.js)

// const path = require('path');
// console.log(path.resolve());

//example 3

// const sum = function (a,b) {
//     return a+b;

// }
// console.log(sum(2,5));

// where to use LET?
//example 1
// for (let i = 0; i<5;i++)
// {
//     console.log(i);

// }

//example 2
// function shortStr(str){
//     const Max_length = 15;
//     if(str.length > Max_length)
//     {
//         let newstr;
//         newstr = str.substring(0,Max_length) + "...";
//         console.log(newstr);
//     }
//     else{
//         console.log(str);
//     }
// }

// shortStr ("long string example");
// shortStr('short');

//where to sue VAR?

// var person = {
//   name: "anup",
//   age: 23,
// };

// function updatePerson(person) {
//   var updatedPerson = {};
//   if (person.name) {
//     updatedPerson.name = person.name;
//   }
//   updatedPerson.updatedAt = new Date();
//   return updatedPerson;
// }

// console.log(updatePerson(person));

//challenge 1

// "use strict";

// const number1 = [23, 87, 110, 11, 20, 5, 34];

// const number2 = [11, 21, 31];

// const onlyOddNumbers = function (arr) {
//   var oddNumbers = [];
//   var evenNumberQuantity = 0;
//   const LEN = arr.length;

//   for (let i = 0; i < LEN; i++) {
//     arr[i] % 2 ? oddNumbers.push(arr[i]) : evenNumberQuantity++;
//   }

//   if(evenNumberQuantity === 0){
//      let info = "Array contains only odd numbers";
//      console.log(info);
//   }
//   else{
//       let info = "There are " + evenNumberQuantity + "even numbers";
//       console.log(info);
//   }
//   return {
//       oddNumbers : oddNumbers,
//       evenNumberQuantity: evenNumberQuantity
//   };
// }

// console.log(onlyOddNumbers(number1));
// console.log(onlyOddNumbers(number2));

//challenge 2

// const menuItems = document.querySelectorAll(".nav-link");
// const LEN = menuItems.length;
// console.log(menuItems);

// // 0 maa click grada aru sab maa hatxa including o and paxi 0 euta matra add hunxa so on;
// for (let i =0; i< LEN ; i++){
//     menuItems[i].onclick = function(){
//         for (let j=0; j< LEN; j++)
//         {
//             menuItems[j].classList.remove('active');
//         }
//         menuItems[i].classList.add('active'); //jun maa click garyo tesma active halinxa
//         console.log(menuItems[i].innerHTML); //print garyeko click garyeko menu kun ho
//     };
// }

//variable lifecycle phase

//declaration initalization assignment

// var lifecycle

// //without assignmnet
// console.log(a); //undefined;
// var a;

// //with assignment
// var b;
// b = 20;
// console.log(b); //20

// //with function
// //declared and initalized inside function scope
// function fn() {
//   console.log(c); //undefined
//   var c;

//   d = 10;
//   console.log(d); // 10;
//   var d;
// }
// //console.log(c); // c is not defined coz c is in function scope
// fn();

//undeclared variable lifecycle
//why it is declared in global scope;

// function fn() {
//     function fn2() {
//        // console.log(a); // a is not defined
//         a = 10; //window property maa hunxa if you dont use strict mode
//        console.log(a);   // a is 10 aaba chai
//     }

//     fn2();
//     console.log(a); //10
// }
// fn();

// console.log(a); // a is 10 coz a is delcared in global scope

//Let lifecycle

// //console.log(a); // a is not defined
// let a; // a is initalized with 'undefined'
// console.log(a); // undefined
// a = 10; // a is assigned and has value 10
// console.log (a); //10
// //note scope maa ni same hai hunxa
// window.a access garda undefined auxa LET maa chaina main diff var vs let

//CONST LIFECYCLE
// const a;  // not allowed
// console.log(a); // a is not defined
// const a = 10;
// console.log(a); // 10

// {
//   const b = 1;
//   console.log(b);
// }



//Function lifecycle

//can be accessed any where top or bottom doesnt matter
//Function declaration
// console.log(simle); // function content in string format
// simle(); // declared ,initalized and assigned
// function simle () {
//     console.log("S");
// }
// simle(); // sucessfuly invoke

// function expression ko case maa

// console.log(sum(5,10)); // "sum in not defined" const has Temperal dead zone
// //if var sum = function " sum is not defined" 
// const sum = function(a,b) {
//     return a+b;
// }
// console.log(sum(5,10)); // success


//Hoisting 

//combination of compilation + exection is called hoisting

//challenges
//lekhna baki xa

