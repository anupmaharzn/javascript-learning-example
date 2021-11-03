//Array helper Methods

//forEach()

// const myArrray = [1,true,"abc"];
// myArrray.forEach(element => console.log(element));
//const result = myArrray.forEach(element => console.log(element));
//console.log(result); // undefined foreach always return undefined

//challenge

// const myCities = ['London','New York','singapore'];

// const arrayInfo = (element ,index) =>element + "is located at the index " + index + " in the myCities array";

// // for(let i=0; i<myCities.length ; i++)
// // {
// //    console.log(arrayInfo(myCities[i],i));
// // }

// //using foreach

// myCities.forEach((element , index)=>console.log(arrayInfo(element,index)));

//Map()

// const myNumbers = [1,5,7,8];

//for loop
// let mySquareNumber = [];

// for (let i = 0; i<myNumbers.length; i++) {
//     mySquareNumber.push(myNumbers[i] * myNumbers[i]);
// }
// console.log (mySquareNumber);
// console.log(myNumbers);

//using map()
// let mySquareNumber = myNumbers.map((element)=> element * element);
// console.log (mySquareNumber);
// console.log(myNumbers);

//map() with external function
// const squarenumber = element => element * element;

// let mySquareNumber = myNumbers.map(
//     squarenumber
// );
// console.log (mySquareNumber);
// console.log(myNumbers);

// map() with external function with index

// const squarenumber = (element,index) =>
// {
//     console.log("Element at the index " + index + " is " + element);
//  return element * element;
// }
// let mySquareNumber = myNumbers.map(
//     squarenumber
// );
// console.log (mySquareNumber);
// console.log(myNumbers);

//map() with Math.pow()

// let mySquareNumber = myNumbers.map(
//   element => Math.pow(element,2)
// );

// console.log(mySquareNumber);
// console.log(myNumbers);

//map() with direct call to math.pow()
// let mySquareNumber = myNumbers.map(Math.pow); //yetkai execute garyo vani 1st parameter as element janxa second index as power janxa

// console.log(mySquareNumber);
// console.log(myNumbers);

//challenge
//map() Json to objects

// const postsJSON =[

//     '{"postId":1234,"commentsQuantity" :5}',
//     '{"postId":1244,"commentsQuantity" :13}',
//     '{"postId":4454,"commentsQuantity" :2}'

// ]

//from the "postJSON" array create "posts" array that will consist of javascript objects

//using for loop
// var posts = [];
// for(let i =0; i<postsJSON.length;i++)
// {
//     posts.push(JSON.parse(postsJSON[i]));
// }

// console.log(posts);
// console.log(posts[0].postId); //1234

// //using Map()
// //option1
// const posts = postsJSON.map(JSON.parse);
// // //option2
// // const posts = postsJSON.map(post => JSON.parse(post));
// console.log(posts);
// console.log(posts[0].postId); //1234

//

//filter()

// const myNumbers = [10,35,56,100,5];

// const filtredNumbers = myNumbers.filter(num=> num > 10 );

// console.log(filtredNumbers);

// console.log(myNumbers);

//find()

// const myArrray = [10,[],{},"abc",true,15];

// const result = myArrray.find(element => typeof element === "number");

// console.log(result);

//challenge

// const posts=[

//     '{"postId":1234,"commentsQuantity" :5}',
//     '{"postId":1244,"commentsQuantity" :13}',
//     '{"postId":4454,"commentsQuantity" :2}'

// ];

/** 
 create a function "findsinglePost" that will 
 have two parameters - "postId" and "posts" and 
 wil return object with matched "postId".
 If post wasn't found - return "undefined"
 */
//maile garyeko
// function findSinglePost (postid,posts){
//   let newpostobject = posts.map(JSON.parse);
//   const result = newpostobject.find(element => element.postId === postid);
//   console.log(result);
// }

// console.log(findSinglePost(1244,posts));

//tutorail maa

// const findSinglePost = (postId,posts) =>
// posts.find(post=> post.postId === postId);

// console.log(findSinglePost(1244,posts)); // kina milyena ta

// console.log(findSinglePost(4511,posts));// undfined

// some and every array helper function

// Example 1
// const myNumbers =[3,-5,1,10,-7];
// const isPostiveNumber = element => typeof element === "number" && element > 0;

// const allpositiveCheck = myNumbers.every(isPostiveNumber);

// console.log(allpositiveCheck);

// const somepostiveCheck = myNumbers.some(isPostiveNumber);

// console.log(somepostiveCheck);

//example 2

// const items = [
//     {
//     title:"computer",
//     quantity:10
//     },
//     {
//         title:"Phone",
//         quantity:6
//     },
//     {
//         title:"headphone",
//         quantity:0
//     }

// ]
// // all items have quantity > 5

// if(items.every(item => item.quantity > 5))
// {
//     console.log("all items are available"); //false
// }

// //some items have quantity > 5

// if(items.some(item => item.quantity >5))
// {
//     console.log("some items are available"); //true //so print
// }

// //all item have quantity > 0 and some items have quantity <=5

// if(
//     items.every(item =>item.quantity >0 )
//      &&
//      items.some(item =>item.quantity <=5)
//  )
//  {
//      console.log("some items may be sold soon");
//  }

//  //some items have quantiy 0

//  if(items.some(item => item.quantity ===0)){
//      console.log("some items are sold out!");
//  }

//chanllenge

//1. is array of number is sorted

// const a =[5,"abc",10,1];

// const b = [4,10,14,25,35,50];

// const c = [150,132,80,40];

// const d =[15,26,10,23,85];

// const arraycheck = inputarray => {

//     if( inputarray.some(element => typeof element !== "number" ))
//     {
//     return "some elemets are not number";
//     }

//     if(
//         inputarray.every((element,index,array) => index > 0
//             ? element >= array[index - 1]
//             :true))
//     {
//         return "array is sorted in ascending order";
//     }
//     if(
//         inputarray.every((element,index,array)=> index > 0 ? element <= array[index - 1]: true))
//         {

//                 return "array is sorted in descending order";

//         }

//     else {
//         return "array is not sorted";
//     }

// };

// console.log(arraycheck(a));
// console.log(arraycheck(b));
// console.log(arraycheck(c));
// console.log(arraycheck(d));

//challenge 2
//comparing two arrays
//are array equal or not

// const a = [1,2,3];

// const b = [1,2,3];

// const c = [2,1,3];

// const d = [1,2,3,4];

// //console.log(a === b); //false

// // it is false because reference of the value is compared in a === b not exact value of the array

// const arrayAreEqual = (arrayOne ,arrayTwo) => arrayOne.length === arrayTwo.length && arrayOne.every ((element,index)=> element === arrayTwo[index]);

// console.log(arrayAreEqual(a,b)); //true
// console.log(arrayAreEqual(a,c)); //false
// console.log(arrayAreEqual(a,d)); // true

//challenge 3
//check if element is in array

// const transport = ["Bus","car" ,"Bicycle","airplane"];

// const elementFound = (inputarray , searchElement) =>{

//     if( inputarray.some((element,index)=> element === searchElement))
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(elementFound(transport ,"Bus"));
// console.log(elementFound(transport ,"Phone"));
// console.log(elementFound(transport ,"nepal"));

//include array helper method

// const myArrray = [10,"abc",true,undefined,null,[1,2],{}];

// console.log(myArrray.includes(true));
// console.log(myArrray.includes(10));
// console.log(myArrray.includes('ram'));
// console.log(myArrray.includes([1,2]));
// console.log(myArrray.includes({}));

//hamle include method chai primitive type maa matra garna milxa so ,yesok lagi solution chai tala garyeko json.stringfy garira
//tasks
//includes with array and object

// const tags = [
//     ['javascript','es6'],
//     ['css','flexbox'],
//     ['html','web-browser']
// ];

// const fruits =[
//     {title:'orange',quantity:10},
//     {title:'banana',quantity:5},
//     {title:'apple',quantity:25}
// ];

// const primitiveTypesArray =[
//     25,
//     "x",
//     true,
//     undefined,
//     null
// ];

// const elementIsIncluded = (searchElement,array) =>{

//     if(typeof searchElement === "object"){
//         return array.map(element => JSON.stringify(element)).includes(JSON.stringify(searchElement));
//     }

//     if(typeof searchElement !=="object"){
//         return array.includes(searchElement);
//     }
// }
// console.log(elementIsIncluded(['css','flexbox'],tags));
// console.log(elementIsIncluded({title:'banana',quantity:5},fruits));
// console.log(elementIsIncluded(25,primitiveTypesArray));

//challenge 2
//push element to array if not exists

// const myNumbers =[128,50,27];

// const pushIfUnique =(inputArray,newElement) => {

//     if(inputArray.includes(newElement)){
//         return "{newElement} is already in the array";
//     }
//     else {
//        inputArray.push(newElement);
//     } //ternary operator bata ni garna milxa
// }

// console.log(pushIfUnique(myNumbers,50));
// console.log(myNumbers);

// console.log(pushIfUnique(myNumbers,30));
// console.log(myNumbers);
// console.log(pushIfUnique(myNumbers,128));
// console.log(myNumbers);

//Reduce() array helper method

//example 1  sum number

// const myNumbers = [5, 10, 3, 15];

// const sum = (arrayOfNumbers) =>
//   arrayOfNumbers.reduce((accumulator, number) => {
//     console.log("accumulater is " + accumulator + " and number is " + number);
//     return accumulator + number;
//   },0);

// console.log(sum(myNumbers));

//example 2 reduce array of object to single array

// const persons = [
//   {
//     name: "anup",
//     age: 23,
//   },
//   {
//     name: "bimala",
//     age: 53,
//   },
//   {
//     name: "kreepa",
//     age: 24,
//   },
// ];

// const personsNames = (arrayOfPersons) =>
//   arrayOfPersons.reduce((names, person) => {
//       //console.log(names,person);
//     names.push(person.name);
//     return names;
//   }, []);

// console.log(personsNames(persons));

//example 3 remove duplicates

// const fruits = ["banana", "orange", "apple", "apple", "orange", "mango"];

// const uniqueFruits = (arrayOfFruits) =>
//   arrayOfFruits.reduce((uniqueElement, fruit) => {
//     // console.log(uniqueElement);
//     if (!uniqueElement.includes(fruit)) {
//       uniqueElement.push(fruit);
//     }
//     return uniqueElement;
//   }, []);

// console.log(uniqueFruits(fruits));

//challenges of Reduce array helperfucntion

//reduce array of object

// const posts = [
//   {
//     title: "how to find javascript developer job ?",
//     postId: 3421,
//     comments: 25,
//   },
//   {
//     title: "Is it hard to learn ES6 ?",
//     postId: 5216,
//     comments: 3,
//   },
//   {
//     title: "Should I learn React or Angular ?",
//     postId: 8135,
//     comments: 12,
//   },
// ];

// const minimalComentsQty = 10;

// /**
//  * create a function "popularPostsIds" with two parameters "posts" and "minimalComentsQty".
//  */
// /**
//  * This function "poularPostsIds" should return an array of postIds of post that have quatity of "comments" at least equal to "minimalcomentsQty"
//  *
//  */

// const popularPostsIds = (posts, minimalComentsQty) =>
//   posts.reduce((postIds, post) => {
//     if (post.comments >= minimalComentsQty) postIds.push(post.postId);
//     return postIds;
//   }, []);

// console.log(popularPostsIds(posts, minimalComentsQty)); //

//challenge 2

// const products = [
//   {
//     title: "Phone case",
//     price: 23,
//     quantity: 2,
//     category: "Accessories",
//   },
//   {
//     title: "Android phone",
//     price: 150,
//     quantity: 1,
//     category: "Phones",
//   },
//   {
//     title: "Headphones",
//     price: 78,
//     quantity: 1,
//     category: "Accessories",
//   },
//   {
//     title: "Sport Watch",
//     price: 55,
//     quantity: 2,
//     category: "Watches",
//   },
// ];

// /**
//  * Create a funcition "quantityByCategories" with one parameter "products"
//  *
//  *
//  * This function "quantityByCategories" should return an object with keys equal to categores and values equal to sum of all quaNtities in each category.
//  */

// const quantityByCategories = (products) =>
//   products.reduce((counts, product) => {
//     // console.log("counts is " + JSON.stringify(counts) + "and product is " + JSON.stringify(product))
//     counts[product.category] =
//       (counts[product.category] || 0) + product.quantity;
//     return counts;
//   }, {});

// console.log(quantityByCategories(products));
