/**
 *
 * SORTING IN JAVASCRIPT
 *
 */
//sort maa mutated input array
//example

// const myNumbers = [10,5,7,12,20];

// console.log(myNumbers.sort()); //deafult sort ko behaviour auxa
// console.log(myNumbers.sort((a,b)=> a-b)); //descending bata garnu xa vanye b-a

// console.log(myNumbers);//sorted array auxa

/**
 * Analyzing sorting algorithms
 *
 *
 */
/** Sorting alogrithm
 * 1.Insertion sort used- google chrome , Firefox,Node.js by default 
   Merge Sort - safari 
   
  */
// const myNumbers = [10,5,79,27,50,14,27];

// let i = 0;
// console.log(
//     myNumbers.sort((a,b)=>{
//         console.log(a,b);
//         i++;
//         return a- b;
//     })
// );

// console.log("Qty of iteration is " + i);

//CHALLENGE 1
// const products = [
//     {
//         title:"phone case",
//         price:23,
//         quantity:2,
//         category:"Accessories"
//     },
//     {
//         title:"Android phone",
//         price:150,
//         quantity:1,
//         category:"Phones"
//     },
//     {
//         title:"Headphones",
//         price:78,
//         quantity:1,
//         category:"Accessories"
//     },
//     {
//         title:"sport watch",
//         price:23,
//         quantity:2,
//         category:"Accessories"
//     },
// ];

// /**
//  * create a function "sortProductsByPrice" with one parameter "products".
//  *
//  * This function "sortProductsByPrice" should sort input array of productsby price of each product in ascending order and return resulting array
//  *
//  */

// const sortProductsByPrice = products =>{
//     products.sort((a,b)=>{
//         console.log(a.title,b.title);
//         return a.price - b.price;
//     })
// };

// sortProductsByPrice(products);
// console.log(products);
// //orginal products array was mutated because products is array which is object in javascript and it is reference type

//Challenge 2

// const persons = [
//   { name: "anup", friendsQty: 10, index: 1 },
//   { name: "kreepa", friendsQty: 5, index: 2 },
//   { name: "bimala", friendsQty: 10, index: 3 },
//   { name: "anu", friendsQty: 3, index: 4 },
//   { name: "saira", friendsQty: 10, index: 5},
//   { name: "rojesh", friendsQty: 8, index: 6 },
//   { name: "golu", friendsQty: 7, index: 7 },
//   { name: "arap", friendsQty: 2, index: 8 },
//   { name: "ashap", friendsQty: 9, index: 9 },
//   { name: "hari", friendsQty: 10, index: 10 },
//   { name: "abaa", friendsQty: 10, index: 11 },
//   { name: "abaade", friendsQty: 10, index: 12 },
// ];

// /**Create a function "sortPersonsByFriendsQty"
//  * with one paramter "persons".
//  * 
//  * This function "sortPersonsByFriendsQty" should sort input array of person by friendsQty of each person in ascending order and return resulting array
//  * 
//  */


// const sortPersonsByFriendsQty = persons => {
//     let it = 0;
//     persons.sort((a,b)=>{
//         console.log(a.name,b.name);
//         it++;
//         return(a.friendsQty - b.friendsQty);
//     });
//     console.log("qty fo iteration is " + it);
//     return persons;
// }

// sortPersonsByFriendsQty(persons);
// // insertionsort - firefox,chrome (stable)
// //mergesort - safari (stable)
// console.log(persons);