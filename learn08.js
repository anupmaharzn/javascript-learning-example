// loops and conditional statements in javascript


//for loop 

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// //console.log(i); //i is not defined ,var vako vayi audaina theyo


//example 2
//regular for loop with array 

// const myarray = [0, true, 'abc', null];

// for (let i = 0; i < myarray.length; i++) {
//     console.log(myarray[i]);
// }


// //while loop

// let i = 0;

// while (i > -5) {
//     console.log(i);
//     i--;
// }

// do while loop 

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);


//for in loop with objects

// const myObject = {
//     a: "abc",
//     b: true,
//     c: null,
//     d: 150
// }

// for (let key in myObject) {
//     console.log(key);
//     console.log(myObject[key]);
//     console.log(myObject.a);

// }

//example 
// for in loop with objects with inherited properties
// const myObject = {
//     a: "abc",
//     b: true,
//     c: null,
//     d: 150
// };

// Object.prototype.globalProp = "Inherited property";

// for (let key in myObject) {
//     // console.log(key);
//     console.log(key, myObject[key]);
//     // console.log(myObject.a);

// }

//exampel 2
// for in loop with arrays
//array maa ta length proptery hunxa but yesle cahi dekhaudaina doesnt consider as emnurable
// const myarray = [true, {}, {}, 10];
// Object.prototype.globalProp = "global property";
// for (let key in myarray) {
//     console.log(key, myarray[key]);
// }

//example 3
// for of loop with arrays

// const persons = [{

//         name: 'Mike',
//         age: 23
//     },
//     {

//         name: 'bob',
//         age: 30
//     },
//     {

//         name: 'mace',
//         age: 40
//     },

// ]

// for (let person of persons) {
//     // console.log(person);
//     // console.log(person.name);
//     console.log(person.name + " is " + person.age + " years old");

//     //console.log(persons[person]); / / undefined
// }






// conditional statement

//Ternary operator ->expression ho 

//example of ternary operator

// // // let value = -5;

// // // let res = value > 0 ? value : -value;

// // // console.log(res) //5 // result is in res

// if statement

// let i = 10;
// if (i > 0) {
//     console.log(i);

// }

//if else satement


// const myarray = [1, 2, 3, 4, 5];

// if (myarray.length > 5) {
//     console.log("array is large");

// } else {
//     console.log('array is small');
// }



//chain if else if else statement

// let color = "pink";

// if (color === "green") {
//     console.log("It is green color");

// } else if (color === 'yellow') {
//     console.log("It is yellow color");
// } else if (color === 'red') {
//     console.log("It is yellow color");
// } else {
//     console.log("color is unknown");
// }

//switch statement
//break statement is necessary 


// let color = 'yellow';

// switch (color) {
//     case "green":
//         console.log("it is green color");
//         break;
//     case "yellow":
//         console.log("it is yellow color");
//         break;
//     case "red":
//         console.log("it is red color");
//         break;
//     default:
//         console.log("color is unknow");
// }

//ternary operator
// ; expersion statement garxa k 
// let i = 10;
// let j;

// j = i < 100 ? i : 0;

// i < 10 && j ?
//     console.log("condition is truthy") :
//     console.log("condition is falsy");

// console.log(j);


/************ challenges ********************/
//challenge 1
// // // const myObject = {
// // //     key1: true,
// // //     key5: 10,
// // //     key3: "abc",
// // //     key10: NaN,
// // //     key4: null
// // // }

// // // for (let key in myObject) {
// // //     if (key === "key1" || key === "key3") {
// // //         console.log(myObject[key]);
// // //     }
// // // }

//challenge 2

// const mynumber = [
//     4,
//     5,
//     6,
//     3,

// ];

// let newRandomNumber;

// function isNotUnique(newrandomnum) {
//     //comper num with numbers in the myNumbers array
//     for (let number of mynumber) {
//         if (number === newrandomnum) {
//             console.log("Number" + newrandomnum + " is not unique")
//             return true;
//         }
//     }

// }

// do {
//     newRandomNumber = Math.floor(1 + Math.random() * 9); //generate 2 digit random number
// } while (isNotUnique(newRandomNumber)); //true retrun vayipaxi feri do loop chalxa ani false wihich is undefind in this case stops the loop 
// //while ko condition ya do ko condtion maa fucntion call ni garna milxa
// mynumber.push(newRandomNumber);

// console.log(mynumber);


//for in loop 

// for in looop makr for in looop itertae only over own properties of the myobject

// // // const myObject = {
// // //     name: "Mike",
// // //     age: 30,
// // //     city: "london",
// // // };

// // // Object.prototype.country = "nepal";

// // // for (let key in myObject) {
// // //     if (myObject.hasOwnProperty(key)) {
// // //         console.log(myObject[key]); //mike 30 london
// // //     }
// // //     console.log(myObject[key]); // mike 30 london nepal
// // // }



/** ternary opertaion challenge **/

//rewrite "if....else" statement with ternary operator

function emptyArray(inputArray) {

    //inputArray.length > 0 ? console.log("array is not empty") : console.log("array is empty");
    return inputArray.length > 0 ?
        "array is not empty" :
        "array is empty ";
}

console.log(emptyArray([]));