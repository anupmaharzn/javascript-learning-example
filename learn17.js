/***
 *
 *
 * Enhanced Object Literals
 */

/**
 * object literals
 *
 * let myboject = {
 * prop1:10,
 * prop3:function(){
 * console.log(this.prop1);
 * }
 * }
 */

//example 1 - shorthand propety names

// const num =10 ;
// const str ="hello world";
// const bool = true;

// const myobject = {
//     num,
//     str,
//     bool
//     //missingVar // missingVar is not defined
// };

//example 2 - shorthhand method name //shorthand is of regular function , arrow maa this use garna mildaina

// const mycar = (make, year) => {
//   return {
//     make,
//     year,
//     info(price) {
//       return `${this.make} costs ${price}`;
//     },
//   };
// };

// const newCar = mycar("Tesla",2020);

// console.log(newCar.info(5000));

//example 3 - computed property names

// const BG_color = "bgcolorho";

// const btn = {
//     title:"button 1",
//     [BG_color]:'blue' //bgcolorho = blue vo print garda bgcolorho:blue set garyo
// };

// const list = {
//     options:["option 1" ,"option 2"],
//     [BG_color]:true //bgcolorho = true vo print garda
// }

// console.log(btn);
// console.log(list);

//challenge

/**
 * Modify object that is returend by "photoGallery" fucntion useing:
 * Shorthand propety names
 * shorthand method anems
 * computed property names. you need to add one computed property
 * Also correct all mistakes
 *
 * Log message in the console must be exactly the smae as at the end of this cahllenge
 *
 */

// const photoGallery = (title, dimesions, date) => {
//   return {
//     title,
//     dimesions,
//     date,
//     [dimesions]:true,
//     info() {
//       console.log(`Dimension of the foto '${title}' are ${dimesions}`);
//     },

//     publishInfo() {
//       console.log(
//         `Foto "${title}" was published ${
//           Math.floor(new Date().getTime() - date.getTime()) / 1000
//         } seconds ago`
//       );
//     },
//   };
// };
// const photo1 = photoGallery("my dog", "1920x1080", new Date());

// const testDimension1 = "1920x1080";
// const testDimension2 = "1080x720";

// photo1.info(); //Dimension of the foto 'my dog' are 1920x1080

// setTimeout(() => photo1.publishInfo(), 2000);
// //Foto "mydog" was published 2.433 seconds ago

// /**
//  * question : why "publishinfo method sitll has access to the parameters"
//  * (for example "date") of the "photoGrallery" function ?
//  *
//  *ANS:Closure
//  */

// console.log(photo1[testDimension1]); //true

// console.log(photo1[testDimension2]); //undefined
