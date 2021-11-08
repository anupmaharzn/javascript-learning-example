/**
 *
 * Rest and Spread Operator
 *
 */

//Rest Operator  ...

//In arrow function
// const sumNumbers =  ( /*a,b*/...nums) => {
//     //console.log(a);
//     //console.log(b);
//     console.log(nums);
//     //console.log(arguments); //Uncaught ReferenceError: arguments is not defined at sumNumbers
//     // only Rest parameter
//      return nums
//     .filter(num =>typeof num === "number")
//     .reduce((sum,num) => sum + num,0);

// }

// sumNumbers(1,2,3,4,5);
// console.log(sumNumbers("abc",4,5));

//regular function

// function sumNumbers   ( /*a,b*/...nums) {
//     //console.log(a);
//     //console.log(b);
//     //OPTION 1 - REST PARAMETER
//     // console.log(nums); // array
//     // return nums
//     // .filter(num =>typeof num === "number")
//     // .reduce((sum,num) => sum + num,0);

//     //OPTION 2 - araguments variable
//    // console.log(arguments); //object
//    // arguments.sort();  //Uncaught TypeError: arguments.sort is not a function at sumNumbers
//     // return Array.from(arguments)
//     // .filter(num =>typeof num === "number")
//     // .reduce((sum,num) => sum + num,0);

// }

//console.log(sumNumbers("abc",4,5));

/**
 *
 *
 * SPREAD OPERATOR
 *
 */

//EXAMPLE 1 - Function call

// const myGreeting = (name,city,age) => {
//     return `hello form ${name} who is ${age} years old and lives in ${city}`;

// };

// const myPerson =["alice","Boston",20];

// console.log(myGreeting(...myPerson));

// const anotherPerson = ["newyork","25"];

// console.log(myGreeting("bob", ...anotherPerson));

//example 2 - concatenate arrays

// const a=[1,2,3];
// const b = [4,5];

// const c = a.concat(b).concat(6);
// console.log(c); // array a and b will not be mutated

// const d = [...a, ...b,6];
// console.log(d);

//Example 3 create date

// const dateInfo = [2025,0,10];

// const date = new Date(...dateInfo);
// console.log(date);

//Example 4 - copy array

// const myArray = ['a',5,[],true];

// const newArray = [...myArray]; //shallow copy
// newArray.push(10); //myarray isn not mutated
// newArray[2].push(7); // myarray is nutated //coz only copy one level //refrenced typed + copy only pointer
// console.log(newArray);

//example  - copy objec (Es2018)

// const myObj = {
//     a:10,
//     b:'c',
//     d:[1,2]
// };

// const copiedobject = {...myObj}; //shallow copy

// copiedobject.a = 20; //myobj is not mutated

// copiedobject.d.pop(); //myobj is mutated

// console.log(copiedobject);
// console.log(myObj);

//Example 6 - spread string

// const myStr = "hello World";

// const letters = [...myStr];

// console.log(letters);

// const oldstyledletters = myStr.split(""); //splite is string helper method
// console.log(oldstyledletters);

//challenge 1

/**
 * 
 *create a function "meanscroe" that will accept any quantity of the arguments, gather them into single array and
 return mean value of all arguments rounded to 2 decimal places.

 If at least one element in the gatherd array is  not a number - throw dollowing eerro to the console;
  Type of the returned value must be a "number".

  
 */

// const scores1 = [0, 1.5, 2.5, 3.7];

// const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];

// const scores3 = [1.3, 2.5, 1.9];

// const scores4 = ["adc", 1.3, true, 2.5, 1.9];

// const meanscore = (...scores) => {
//  if(scores.every(score => typeof score === "number")){
//     return scores.reduce((avg,score)=>{
//         return avg + score/scores.length;
//     },0).toFixed(2);
//  } else{
//      throw new Error('Type of the returned value must be a "number".');
//  }
// };

// console.log(meanscore(...scores1));
// console.log(meanscore(...scores1,...scores2));
// console.log(meanscore(...scores1,...scores2,...scores3));
// console.log(meanscore(...scores4));
