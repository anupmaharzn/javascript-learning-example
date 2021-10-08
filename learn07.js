//Array in javascript

//array examples 1

// const myArray = [];

// console.log(myArray);


//example 2

// const myArray = [];

// myArray[0] = 1;
// myArray[1] = 2;
// console.log(myArray);

// myArray.push("third element of array"); //preferable 

// console.log(myArray);

//example 3
//modify elements

// const myArray = [3, true, "abc", {}];
// console.log(myArray);

// myArray[1] = "new value for second element";

// console.log(myArray);

// myArray[0] = "null";
// console.log(myArray);

// myArray[3].newprop = 10; // adding element in {} object

// console.log(myArray);

// console.log(myArray[3]);
// console.log(myArray[3].newprop); //10
// console.log(myArray[3]["newprop"]); //10

//example 4
//square baracket notation
// const myArray = [1, 2];
// console.log(myArray[0]); //1
//if property name in the object is numeric you can't use dot notation
//console.log(myArray .0); // Uncaught SyntaxError: missing ) after argument list

//example 5

//delete elements 

// const myArray = [true, null, 1, 2, 'abc'];

// console.log(myArray);
// delete myArray[2];
// console.log(myArray); //index 2 is empty but lenth chai  ani dekhako xa
// console.log(myArray[2]); //undefined if you try to access deleted array

// myArray.pop();
// console.log(myArray); //[true,null,empty,2]

// myArray.pop();
// console.log(myArray); //[true,null,empty]

// myArray.shift();

// console.log(myArray); //[null,empty]


//eample 6 

// //compare array

// const myArray1 = [1, 2, 3];
// const myArray2 = [1, 2, 3];

// console.log(myArray1 === myArray2); //false
// //becuse myarray1 and 2 contain pointer value which is different but it points to same value 1 2 3

// //copy of array 1 with is kinda of copying pointer fo array1
// const copyofmyarray1 = myArray1;

// console.log(myArray1 === copyofmyarray1); //true
// // works this type of comparision if order is same 
// console.log(myArray1.toString() === myArray2.toString()); // true coz myArray1.toString() = '1,2,3' dinxa

// //Challenge 1

// const myarray = [true, null];

// myarray.unshift('hello');
// myarray.unshift(100);
// console.log(myarray);

// //Challenge 2

// const myarray = [1, 2]; //yesko length 2

// myarray[10] = 'abc';
// console.log(myarray); //(11) [1, 2, empty × 8, 'abc']

//challenge 3

// const myarray = [{
//     carBrand: 'tyota',
//     price: 12000,
// }, {
//     carBrand: 'tesla',
//     price: 1000,
// }, {
//     carBrand: 'Bmw',
//     price: 2000,
// }, ];

// console.log(myarray);
// const newcar = {
//     carBrand: 'honda',
//     price: 12000,
// }
// myarray.push(newcar);
// console.log(myarray);