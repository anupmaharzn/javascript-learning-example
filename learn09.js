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



// Exection contects and Exection contexts stack