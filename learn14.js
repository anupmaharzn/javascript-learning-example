// /**
//  *Pre-ES6 - Template Strings
//  *
//  */
// const myNumbers = 10; // "10"
// const myStr = "hello"; // hello
// const myArr = [1, 2]; // "1,2"
// const myObj = { X: 10 }; //[object Object]
// const myBool = true; //"true"

// const myGreeting = (name) => "hello " + name;
// const templateStr =
//   "number is " +
//   myNumbers +
//   "and string is " +
//   myStr +
//   "and array is " +
//   myArr +
//   "and object " +
//   myObj +
//   " and boolean is " +
//   myBool +
//   " and result of the function call is " +
//   myGreeting("anup");

// console.log(templateStr);

// //ES6
// /**
//  *
//  * Template literals  ``
//  */

// const templateLiteral = ` number is
// ${myNumbers}
// and string is
// ${myStr}
// and array is
// ${myArr}
// and object
// ${myObj}
// and boolean is
// ${myBool}
// and result of the function call is
// ${ ((name) => "hello " + name)("anup")} and ternary operator can also be used ${myBool ? 15 : "world"}`;

// console.log(templateLiteral);

// const btn1 = "button 1";

// const btn2 = "button 2";

// const mybutton = `
// <div>
//  <button> ${btn1} </button>
//  <button> ${btn2} </button>
// </div>
// `;
// document.body.innerHTML = mybutton;

// /**
//  *
//  * Tagged Literals
//  *
//  */

// const name1 = "sophia";
// const age = 20;

// const checkAge = (arrayofStrings , name1 , age) => {
//     console.log(arrayofStrings ,name1, age);
//     return age >=18 ? `${name1} is adult` : `${name1} is underage`;
// };

// //console.log (` ${name1} is ${age} year old `);

// //you can create custome tag function

// console.log(checkAge `${name1} is ${age} years old`);

// /**
//  *
//  * CHALLENGE
//  *
//  */

// /* create a function "templateLiteral"  with one parameter "num".

// function is expected to return template literal.
// sample function calls are below,

// **/

// //TEST 1

// const myNumbers = 9;

// const templateLiterals = num =>
// {
//     const a = 10;
//     return num <= a ? `Number is ${num}\nThis number is less than ${a} \nsquare root of this number is ${Math.sqrt(num)}`:`Number is ${num}\nThis number is greate than ${a}\nSquare root of this number is ${Math.sqrt(num)}`;
// }

// console.log(templateLiterals(myNumbers));

// /**
//  * Number is 9.
//  * This number is less than 10.
//  * square root of this number is 3.
//  */

// //Test 2
// const myAnotherNumber =25;

// console.log(templateLiterals(myAnotherNumber));
// /**
//  * Number is 25.
//  * This number is greater than 10.
//  * square root of this number is 5.
//  */

/**
 *
 * Challenge 2
 *
 *
 */

/*create a fucntion "taggedTemplate" that will return a regular 
string (not template literal)
*/

/**
 * User appropriate method fo the function definition 
 * and needed amount of argumnets
 
Use all knowledge gained in the previous sections.

IMPORTANT: Input template literal may hava *ANY* qunatity of the expressions.


*/
/*
solution
get all arguments and extract all result of the expressions to the 
separate array . "vals"
how to pull out all argumnet form function //argument is object to create array

 const vals = Array.from(arguments)
 .slice(1)  //coz first arugment is arrayofstrings by default
2. "arrayofString" - first parameters
3."arrayofStrings".length -1 = "vals".length
4.concatenate elements in "arrayofStrings" and "vals"
.reduce(,"")
*/

//First Test Case

// const a = 10;
// const b = 5;

// function taggedTemplate(arrayofString) {
//   const vals = Array.from(arguments).slice(1);
//   //  console.log(arrayofString);
//   //  console.log(vals);
//   return arrayofString.reduce((concatStr, str, index) => 
//     concatStr + str + (vals[index] !== undefined ? vals[index] : "")
//   , "");
// }

// const sum = taggedTemplate`Sum of the two variables a(${a}) and b(${b}) is ${
//   a + b
// }`;

// console.log(sum);
// /**
//  * Sum of the two variable a(10) and b(5) is 15
//  */

// //second test case
// const girl = "alicee";
// const boy = "Bob";

// const frindsInfo = taggedTemplate`${girl} and ${boy} are friends!`;
// console.log(frindsInfo);
