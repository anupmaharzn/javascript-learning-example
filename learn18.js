/**
 *
 * Array and Object destructuring in javascript
 */

/**
 *
 * Array Destructuring
 *
 */

//Example 1 - declarcation and assigmnet using array destructuring

// const myArray = [1,2,3];

// // let a,b,c;
// // a=myArray[0];
// // b=myArray[1];
// // c=myArray[3];

// let [a,b,c]=myArray;
// console.log(a,b,c);

// // example 2- assigment using array destructuring

// const myArray = [1,2,3];
// let a,b,c;

// [a,b,c] = myArray;

// const anotherArray = [4,5,6];

// [a,b,c] = anotherArray;

// console.log(a,b,c);

// //example 3 - more variables than elements in the array

// const myArray = ['a ho','b ho'];

// const [a,b,c]= myArray;

// console.log(a,b,c); //a ho b ho undefined

//example 4 - default values

// const myArray = ['a'];

// const [a,b, c = 'c'] = myArray;  //default value like default paramters

// console.log(a,b,c)

//example 5 - skip element during destructuring

// const myArray = [1, 2, 3, 4, 5];

// const [, , a, , b] = myArray;

// console.log(a,b);

// //example 6 - rest opertaor in array destructuring

// const myArray = [1,2,3,4,5];

// const [a,b,...c] = myArray; //rest operator

// console.log(a,b,c);

// const d = [...c]; //spread operator

// console.log(d);

//example 7 - delete first element

// let myArray = [1,2,3];

// const [, ...myanotherArray] = myArray; // by default mutate hunxa so , to not mutated orignal array yesari garyeko

// console.log(myanotherArray);

//EXAMPLE 8 -swap values
// let x= 5, y=10;

// [y1,x1] = [x,y];

// console.log(x1,y1);

//example 9 - destrucuting in the function

// const myPosts = [
//     ["post 1 ", 10],
//     ["post 2" , 20]
// ]

// myPosts.forEach(([title,likes])=>console.log(`${title} has ${likes} likes`)); //destructuring in parameter section

//example 10 - nested array destructuring

// const myArray = [1,2,[3,4]];

// const [a,b,[c,d]] = myArray;
// console.log(a,b,c,d);

/**
 * challenges array destructuring
 *
 *
 */

//challenge 1

/**
 * Modify paramters section in the "processQuantities " function to match console.log outputs
 *
 *
 *
 *
 */

// const   processQuantities = ([minQty,maxQty,defaultQty ='0']) =>
// {
//     console.log(minQty);

//     console.log(maxQty);
//     console.log(defaultQty);
//     return maxQty - minQty;
// }

// const qtyRange = [8,29];

// //[minQty,maxQty,defaultQty] =[8,29]; yo chees lie direct parameter maa garna milxa

// console.log(processQuantities(qtyRange));
//

//challenge 2

/**
 * Create a  function "minMax" that will accept any quantity of the argumnets
 *
 *
 * this functionshould return array of two elemts:
 *
 * 1.First element in the array is minimal value among all argumnets
 * 2.Second element in the array is maximal value among all arguments
 *
 * Use destructuring to prase results of the function calls.
 */

//done by me milxa
// let min, max;

// const minMax = (...values) =>{
//   const min = Math.min(...values);
//   const max = Math.max(...values);

//   return([min,max]);
// }

// /**
//  * call here "minmax" functino with arguments 24, 5,34,10
//  */
// const result = minMax(24,5,34,10);

// [min,max] = result;
// console.log(min,max);//5,34

// //call here minmax function with arugments 18,23,103,70,80,25
// const reult2 = minMax (18,23,108,79,80,25);
// [min,max] = reult2;
// console.log(min,max); //18,108

//done in tutroial// let min, max;

// const minMax = (...nums) =>{
//  return [
//      nums.reduce((min,num)=> num < min ? num : min), // no second argumnet
//      nums.reduce((max,num) =>num > max ? num: max)
//  ]
// }

// /**
//  * call here "minmax" functino with arguments 24, 5,34,10
//  */

// [min,max]  = minMax(24,5,34,10);
// console.log(min,max);//5,34

// //call here minmax function with arugments 18,23,103,70,80,25

// [min,max] = minMax (18,23,108,79,80,25);
// console.log(min,max); //18,108

/***
 *
 * object destructuring
 *
 */

//Example 1 - declaration and assignment using object destructuring

// const myObject = {
//     a:10,
//     b:true
// }

// // const a = myObject.a;
// // const b = myObject.b;

// const {a:a1,b:b1} = myObject;

// console.log(a1,b1);

//example 2 - declaration and assigmnet using object destructuring and shorthand properyname

// const myObject = {
//     a:10,
//     b:true
// }
// const {a,b} = myObject; //shorthand

// console.log(a,b);

//example 3 - addigmnet using object destructuring and shorthand propety names

// const myObject = {
//     a:10,
//     b:true
// };

// let a , b;

// ({a,b} = myObject); // javascript interprete {} as a block so need to put ()

// console.log(a,b);

// const anotherObject = {
//     a:20,
//     b:5
// };

// ({a,b} = anotherObject);
// console.log(a,b);

// example 4 - destructure non - object value

/*const {a , b } = null; /**
learn18.js:260 Uncaught TypeError: Cannot destructure property 'a' of 'null' as it is null.
    at learn18.js:260
*/

// const val = undefined;
// const {a,b} = val || {};
// console.log(a,b);

// const myArray = [1,3];
// const {length,d} = myArray; //arrays are objects

// console.log(length,d); // 2 undefined

//example 5 - change order of the properties

// const myObject = {
//     a:10,
//     b:true
// }
// const {b,a} = myObject; //shorthand

// console.log(a,b); // order doesnt matter

//example 6 - rest operator in object destructuring

// const myObject = {
//     a:10,
//     b:true,
//     c:[],
//     d:"abc",
//     e:20
// }
// Object.prototype.newprop = 1;

// const {a,d, ...rest} = myObject; //a ,d is destrutured but remain propteries go to rest

// console.log(a,d,rest);

//example 7 - non-existing proprties

// const myObject = {
//     a:10,
//     b:true,

// }

// const {a,b,c} = myObject;
// console.log(a,b,c); //c is not defined so undefined auxa

//example 8 - default values

// const myObject = {
//     a:10,
//     b:true,

// }

// const {a,b =' deault value for b ',c= "default value"} = myObject;
// console.log(a,b,c);

//example 9 - default values and new variable names

// const myObject = {
//     a:10,
//     b:true,

// }

// const {a:newa,b:newb , c: newc = " default value"} = myObject;

// console.log(newa, newb, newc); //10 true ' default value'

//example 10 - newted object destructuring

// const myObject = {
//     a: 1,
//     b:2,
//     nestedObject : {
//         c:3,
//         d:4
//     }
// };

// const {a:a,b:b,nestedObject:{c:c,d:d}} = myObject; //can also use shorthand proptery

// console.log(a,b,c,d);

/**
 *
 * challenges
 *
 */

//challenges 1

/**
 *
 * modify "personInfo " functino to match console.log output at the end of the challenge
 *
 *
 * Object that is returned by "personInfo" function must caontain only shorthand property names
 *
 */

// const personInfo = ({name:name,age:personage,location:{country:origin,city:homecity},freindQty:freindQty = 0,recordCreatedAt: recordCreatedAt = new Date().getFullYear()}) => {
//   return {
//       name,
//       personage,
//       origin,
//       homecity,
//       freindQty,
//       recordCreatedAt,

//   }
// };

// const person = {
//     name:"Anup",
//     age: 23,
//     location: {
//         country:"nepal",
//         city:"lalitpur",

//     }
// };

// console.log(personInfo(person));

//challenge 2

/**
 * create "processposts" function that will return new array of posts.
 *
 * Notice that some popery names in each post are modified and each postid is incremneted by 1000
 *
 * Original array of post should not be mutated.
 *
 *
 */

// const posts = [
//   {
//     postId: 234,
//     author: "robd",
//     commetsQty: 5,
//   },
//   {
//     postId: 834,
//     author: "sady",
//   },
//   {
//     postId: 134,
//     author: "merryl",
//     commetsQty: 8,
//   },
// ];

// const processPosts = (posts) => {
//   return posts.map(
//     ({ postId, author: postAuthor, commetsQty: postCommentsQty = 0 }) => ({
//       postAuthor,
//       postCommentsQty,
//       postId: postId + 1000,
//     }) //{} new object maa map garira return garyeko so () so that js dont parse as block of statemnet
//   );
// };

// console.log(processPosts(posts));

//challenge 3

/**
 *
 * use object destructuring iwht rest object porperties to quickly remove spcecifie properties from the object.
 *
 * Ensure that variable that will be used for destructuring of the deletd properties wil not be accessible afther the destructuring operation.
 *
 */

// let person = {
//   _id: "asldfkldlaksfj12323123",
//   index: 4,
//   processed: false,
//   cart: ["item1", "item2", "item3"],
//   email: "anup123@gmail.com",
//   name: "anupmaharjan",
//   cartId: 435,
// };

// //delete person._id;
// // person = {
// //     _id:person._id

// // }

// { //block of statement banako so that -id,processed cart cant be accessed globally
//   let _id, processed, cart;
//   ({ _id, processed, cart, ...person } = person);//object ho vanira chinauna ()
// }
// /**let ({_id,processed,cart,...person} = person);person has already been declared
//  */
// console.log(person);
