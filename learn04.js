// //operators in javascript

// let a = "abc";
// let b = 5;
// let c = 10;


// console.log(b + c); //15
// console.log(a + b); //abc5 which is string
// console.log(a - b); //NaN coz string - number xa


// c = '1';

// //Unary Plus
// console.log(+c); //1
// console.log(Number(c)); //1 //explicit conversion jastai vayo 
// c = undefined;
// console.log(+c); //NaN

// //Unary minus 

// c = "5";
// console.log(-c); // -5
// c = "abc";

// console.log(-c); // NaN, if possbile it tries to ouput string to number

// // ++
// let d = 5;

// ++d;
// console.log(d); //6

// d++;
// console.log(d); //7
// //but
// console.log(++d); //8 
// console.log(d++); //8
// console.log(d); // aaba chai 9

// //comparision operator example


// a = 5;
// b = 7;
// c = 5;

// console.log(a < b); // true
// console.log(a > b); //false
// console.log(a <= c); //true

// let mystr1, mystr2;
// mystr1 = "abc";
// mystr2 = "bcd";

// console.log(mystr1 > mystr2); // false
// console.log(mystr1 < mystr2); //true charater by character compersaion hunxa so 


// //equality operator

// let myString = "0";
// let myNumber = 0;
// let myBoolean = false;

// // type of value may be different //avoid this operator
// console.log(myString == myNumber); //true auxa
// console.log(myNumber == myBoolean); // ture
// console.log(myString == myBoolean); // true

// //strictly type and value are compared
// console.log(myString === myNumber); //false
// console.log(myNumber === myBoolean); // false
// console.log(myString === myBoolean); //false

// // avoid this operator
// console.log(myString != myNumber); //  false
// console.log(myNumber != myBoolean); //  false
// console.log(myString != myBoolean); // false

// //use this one
// console.log(myString !== myNumber); //  true
// console.log(myNumber !== myBoolean); //  true
// console.log(myString !== myBoolean); // true


// console.log(null === undefined); //false coz of its types

// console.log(null == undefined); // true coz both value becomes zero 0 ==0 true

// console.log(0 === "" === null === undefined === false); //true coz associtivaty

// //logical operator
// // || or operator euta matra true vayo vani true hunxa

// //falsy values
// console.log("" || 0 || null || undefined || NaN || false);

// // &&
// //both true vayo vani matra true value return garxa otherwise false value return garxa
// console.log("abc" && 10 && false && '' && "abded"); //false
// console.log("abc" && 10 && NaN && '' && "abded"); //NaN
// console.log("abc" && 10 && '' && "abded"); // '' empty value chai false value ho so false valu return garxa AND operator le

// // all operands are truthy

// console.log("abc" && 10 && "abded"); // last value return hunxa ani or maa chai sab first wala

// //Not opertaor !

// console.log(!'abd'); //false

// console.log(!"") // true
// console.log(!0); // true

// //quickly truthy/falsy check
// //converty value of any type to boolean and check if its true or false
// myvariale = null;
// console.log(!!myvariale); //false null falsy value ho 

// myvariale = 10;
// console.log(!!myvariale); //true

// //challenges

// let myVariable1 = "20",
//     myVariable2 = 100;

// console.log(Number(myVariable1) <= Number(myVariable2));

// myVariable1 = 10;
// myVariable2 = 11;
// console.log(myVariable1 % myVariable2);

// //short form
// a += 1;
// a *= 3;
// a -= 5;
// a /= 2;