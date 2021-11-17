/**
 *
 * ES6 CLASSES
 *
 */

//Class declaration and instance of the Class

// class MyClass {}

// const firestInstance = new MyClass();

// console.log(firestInstance);

// console.log(firestInstance.__proto__ === MyClass.prototype);//true

// console.log(MyClass.prototype.constructor === MyClass); //true

// console.log(MyClass.prototype.__proto__ === Object.prototype);//true

// /**
//  * Hoisting (not hoistied)
//  * class can be acessed only after its declaration in the code
//  *
//  */

// const firestInstance = new Myclass();/**
//  * Cannot access 'Myclass' before initialization
//     at learn20.js:27
// (anonymous) @ learn20.js:27
//  */

// class Myclass {}

// /**
//  * Class expression
//  *
//  */

// const Myclass = class {};

// const firstInstance = new Myclass();

// console.log(firstInstance);

// console.log(firstInstance.__proto__ === Myclass.prototype); //true

/**
 * Constructor method in the class
 */

// class ComputerMouse {

//     constructor(props){
//         this.type = props.type1;
//         this.color = props.color;
//         this.interface = props.interface;
//     }
// }
// const propsForWirelessMouse = {
//     type1:"wireless",
//     color:"black",
//     interface:"bluetooth"
// }
// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

// console.log(wirelessMouse);

// console.log(wirelessMouse.__proto__ === ComputerMouse.prototype); //ture
//  console.log(ComputerMouse.prototype.constructor === ComputerMouse); //ture

// /**
//  * Class is not object literal
//  *
//  * and its methods are not shorthand method name
//  */

// class ComputerMouse {

//     title:"my title", //unexprected token:

//   constructor:function (props) { //unexpected token
//     this.type = props.type1;
//     this.color = props.color;
//     this.interface = props.interface;
//   }
// }

// //correct syntax
// class ComputerMouse {

//     constructor() {}
//     method1() {}
//     method2() {}
// }

//example 5

/**
 * Default values for properties
 */

// class ComputerMouse {

//     constructor(props){
//         this.type = props.type1 || "computer";
//         this.color = props.color;
//         this.interface = props.interface !== undefined ?props.interface : "not specifed";
//     }
// }
// const propsForWirelessMouse = {
//     type1:"wireless",
//     color:"black",
//     interface:"bluetooth"
// }
// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

// const propsForGenericMouse = {
//     color:"red",
//     type1:''

// }

// const genericMouse = new ComputerMouse(propsForGenericMouse);

// console.log(genericMouse);

// //example 5

// /**
//  * Class methods
//  */

// class ComputerMouse {

//     constructor(props){
//         this.type = props.type1;
//         this.color = props.color;
//         this.interface = props.interface;
//     }

//     mouseInfo() {
//         console.log(`Type of the mouse is ${this.type} and color is ${this.color}`);
//     }
//     changeMouseType(newType) {
//         this.type = newType;
//     }

// }
// const propsForWirelessMouse = {
//     type1:"wireless",
//     color:"black",
//     interface:"bluetooth"
// }
// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);
// console.log(wirelessMouse);

// wirelessMouse.mouseInfo(); //Type of the mouse is wireless and color is black

// wirelessMouse.changeMouseType('generic');

// console.log(wirelessMouse);
// wirelessMouse.mouseInfo();

// //example 7

// /**
//  * class extension (add new class to the prototype chain )
//  *
//  */

// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || ["PC", "Mac"];
//   }
// }

// //class ComputerMouse extends ComputerAccessories {} //consturctor of the compueraccessories will be called automatically
// class ComputerMouse extends ComputerAccessories {

//     constructor(...allprops){ //rest operator
//        super(...allprops); //must else error auxa //yo chai spread oprator and passed to parent jasatai vanumna to understanda

//     }
// }

// const myMouse = new ComputerMouse({ compatibility: ["PC"] });

// console.log(myMouse);

// //example 8

// /**
//  * Set properties in diffrent classes
//  */

// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || ["PC", "Mac"];
//   }
// }

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(props);//must
//     this.type = props.type;
//   }
// }

// const myMouse = new ComputerMouse({ compatibility: ["PC"], type: "optical" });

// console.log(myMouse);

// //example 9
// /**
//  *
//  */

// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || ["PC", "Mac"];
//   }

//   compatibilityinfo() {
//   this.compatibility.forEach(el=> console.log(`Accessory is compatible with ${el}`));
//   }
// }

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(props);//must
//     this.type = props.type;
//   }
//   mouseInfo() {
//     console.log(`Type of the mouse is ${this.type}`);
//   }
// }

// const myMouse = new ComputerMouse({ compatibility: ["PC","Tablet"], type: "Bluetooth" });

// console.log(myMouse);
// myMouse.compatibilityinfo();
// myMouse.mouseInfo();

// //example 10
// /**
//  * typeof and instance in classes
//  */

// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || ["PC", "Mac"];
//   }

//   compatibilityinfo() {
//     this.compatibility.forEach((el) =>
//       console.log(`Accessory is compatible with ${el}`)
//     );
//   }
// }

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(props); //must
//     this.type = props.type;
//   }
//   mouseInfo() {
//     console.log(`Type of the mouse is ${this.type}`);
//   }
// }

// const myMouse = new ComputerMouse({
//   compatibility: ["PC", "Tablet"],
//   type: "Bluetooth",
// });

// console.log(typeof ComputerMouse); //function
// console.log(typeof ComputerMouse.prototype); //Object
// console.log(typeof ComputerMouse.prototype.constructor);//function
// console.log(myMouse instanceof ComputerMouse); //true
// console.log(myMouse instanceof ComputerAccessories); //true
// console.log(myMouse instanceof Object); //true
// console.log(ComputerMouse instanceof ComputerAccessories); //false

// //example 11

// /**
//  * Static methods
//  */

// class ComputerMouse {
//   constructor(props) {
//     this.type = props.type;
//   }
//   static ownClassMethod() {
//     console.log("this class sets props for the Mouses");
//   }

//   mouseInfo() {
//     console.log(`Type of the mouse is ${this.type}`);
//   }
// }

// const myMouse = new ComputerMouse({ type: "gamming" });

// console.log(myMouse);

// myMouse.mouseInfo();

// //myMouse.ownClassMethod(); //typerror mymouse.oenclassmethod is not a function

// ComputerMouse.ownClassMethod();

//challenges

// //challenge 1

// /**create new class "ExtendedArray " that should extend built-in "Array"
//  *
//  * Add tow custom method to the new class:
//  * 1."sum"- it should return sum of all elemts in the array
//  *
//  *2."onlyNumbers "- it should return nre array that will contain only numbers from the source array

//   Create serval instance of the new "ExtenedArray " clas and test both methods "sum" and "onlyNumbers"
//  */

//   class ExtendedArray extends Array {

//       sum(){
//           return this.reduce((sum , el)=> sum +el);
//       }

//       onlyNumbers(){
//           return this.filter(el => typeof el === "number");
//       }
//   }

//   const customArray = new ExtendedArray(1,2,3,4,4.5);

//   console.log(customArray.sum());

//   console.log(customArray.onlyNumbers());

//   customArray.push("avc");

//   console.log(customArray);

//challenge 2

// /**
//  * create new class "CustomeArray" that should extend built-in "Array"
//   Add one custom method "customPush" to the new class/
//   This method will have one paramter "newElement"


//   It should perform following actions:
//   1.Add new element to the existing array (dont use "push " method for this)
//   2.Modify "lenght" property of the array (increment it)
//   3.Log following line to the console:
//   "New element <ELEMENT> was just added to the array "
//   create instance of the new "customArray " class and test new method "customPush" and compare it with "push"
//   */

// class CustomArray extends Array {
//   customPush(newElement) {
//     this[this.length] = newElement;
//     console.log(`New element ${newElement} was just added to the array`);
//   }
// }

// const firstInstance = new CustomArray();

// firstInstance.customPush(1);

// console.log(firstInstance);

// firstInstance.customPush(3);
// console.log(firstInstance);
