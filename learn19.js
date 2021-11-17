/**
 *
 *  prototypes ,function constructors
 *
 */

// //EXAMPLE 1
// //propotyes and fucntion contructors

// /**
//  * Each funcition in JS (not arrow function)
//  *
//  has .prototype property and can be sued as constructor function.
//  */
// //function civilPlane () {}

// const civilPlane = function() {}

// console.log(civilPlane.prototype); //{constructor:f}
// console.log(civilPlane.prototype.constructor === civilPlane); //true

// console.log(civilPlane.prototype.__proto__ === Object.prototype); //true

// console.log(civilPlane.prototype.__proto__.__proto__ === null);//true

// //Example 2
// /**
//  *
//  * Create new instance of the prototype using "new syntax:
//   1.function constructor is called
//   2.New object {} is created
//   3.__proto__ is added
//   4.New props are added (optional)
//   5.Object is returned by consturctor function
// */

// function CivilPlane (props) {
//      console.log(this); // {__proto__: ...}
//      console.log(this.__proto__); //Civilplane prototype
//     this.numberOfseats1 = props.numberOfseats;
//     console.log(this);//{numberOfSeats:... , __proto__: ...}
// };

// const propsForSmallPlane = {
//     numberOfseats:4
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);//calls function's constructor of civilplane

// console.log(smallPlane);

// /**
//  * example 3
//  *
//  * DONT DO THIS
//  *
//  * Method "seatsInfo " will be added to every instance f the prototype
//  */

// function CivilPlane(props) {
//   this.numberOfseats1 = props.numberOfseats;

//   this.seatInfo = function () {
//     console.log(`Numver of seats in the plane is ${this.numberOfseats1}`);
//   };
// }

// const propsForSmallPlane = {
//   numberOfseats: 4,
// };

// const smallPlane = new CivilPlane(propsForSmallPlane); //calls function's constructor of civilplane

// const propesforLargePlane = {
//   numberOfseats: 250,
// };
// const largeplane = new CivilPlane(propesforLargePlane);

// /**
//  *
//  *  {example 4}
//  *
//  * correct - method is added to prototype
//  */

// function CivilPlane(props) {
//   this.numberOfseats1 = props.numberOfseats;
// }

// //dont use arrow function
// CivilPlane.prototype.seatInfo = function () {
//     //console.log(this);
//   console.log(`Numver of seats in the plane is ${this.numberOfseats1}`); //this = smallplane or largeplane based on call
// };

// CivilPlane.prototype.modifySeatnumber = function(newseatQty) {
//    this.numberOfseats1 = newseatQty;
// }

// const propsForSmallPlane = {
//   numberOfseats: 4,
// };

// const smallPlane = new CivilPlane(propsForSmallPlane); //calls function's constructor of civilplane

// const propesforLargePlane = {
//   numberOfseats: 250,
// };
// const largeplane = new CivilPlane(propesforLargePlane);

// smallPlane.seatInfo(); //4

// smallPlane.modifySeatnumber(10);//modifies proptery of small plane

// smallPlane.seatInfo(); //10

///object create for  object literal

// const Parent = {
//     type:"parnet",
//     typeInfo:function()
//     {
//         console.log(`Hello from ${this.type}`);
//     },
//     modifyType:function(newType)
//     {
//         this.type = newType;
//     }
// };

// console.log(Parent.type); //"parent"

// Parent.typeInfo(); //"hello from parent"

// console.log(Parent.prototype); //undefined

// const child = Object.create(Parent);

// console.log(child.__proto__ == Parent); //true

// //since parent is not function constructor ,it only has __proto__ property and you have to set property manually for child

// child.type = "Child";
// child.typeInfo();//hello from child

// child.modifyType("modifiedChild");
// console.log(child.type); // "Modified Child"
// child.typeInfo(); //"hilo from modified child"

// /**
//  *
//  * example 5
//  * Prototype chain
//  * civilPlane.prototype > Airplane.protoype >object.prototype
//  */

// function AirPlane(props) {
//   this.wingspan = props.wingspan;
//   this.maxRangeOfFlight = props.maxRangeOfFlight;
// }

// AirPlane.prototype.airPlaneInfo = function () {
//   console.log(
//     `Wingspan of the airplane is ${this.wingspan} and maxminal range of flight is ${this.maxRangeOfFlight}`
//   );
// };

// function CivilPlane(props) {
//     AirPlane.call(this,props);
//   this.numberOfseats1 = props.numberOfseats;
// };

// CivilPlane.prototype = Object.create(AirPlane.prototype);

// // console.log(CivilPlane.prototype.__proto__=== AirPlane.prototype)//ture

// // console.log(CivilPlane.prototype.constructor === CivilPlane); //false

// CivilPlane.prototype.constructor = CivilPlane;

// CivilPlane.prototype.seatInfo = function () {
//   //console.log(this);
//   console.log(`Numver of seats in the plane is ${this.numberOfseats1}`);
// };

// CivilPlane.prototype.modifySeatnumber = function (newseatQty) {
//   this.numberOfseats1 = newseatQty;
// };

// const propsForSmallPlane = {
//   numberOfseats: 4,
//   wingspan:20,
//   maxRangeOfFlight:1000
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);

// const propesforLargePlane = {
//   numberOfseats: 250,
//   wingspan:60,
//   maxRangeOfFlight:3500
// };

// const largeplane = new CivilPlane(propesforLargePlane);

//challenge 1
/**
 * 
 * upadate chain
 * CivilPlane.proptyope > Airplane.prototype> Vehicle.prototype > Object.prototype
 * 
 * Vechicle.prototype should set two additional propreties 
 * 
 * 1.maxspeed
 * 2.Weight
  3.It should also contain method "vehicleIndo " 
*/
// function Vechicle(props) {
//   this.maxspeed = props.maxspeed;
//   this.weight = props.weight;
// }
// Vechicle.prototype.vechicleInfo = function () {
//   console.log(
//     `Max speed of the vechile is ${this.maxspeed} and weight is ${this.weight}`
//   );
// };

// function AirPlane(props) {
//   Vechicle.call(this, props);
//   this.wingspan = props.wingspan;
//   this.maxRangeOfFlight = props.maxRangeOfFlight;
// }

// AirPlane.prototype = Object.create(Vechicle.prototype);

// AirPlane.prototype.constructor = AirPlane;
// //console.log(AirPlane.prototype.constructor === AirPlane);

// AirPlane.prototype.airplaneInfo = function () {
//   console.log(
//     `Wingspan of the airplane is ${this.wingspan} and maxminal range of flight is ${this.maxRangeOfFlight}`
//   );
// };

// function CivilPlane(props) {
//   AirPlane.call(this, props);
//   this.numberOfseats1 = props.numberOfseats;
// }

// CivilPlane.prototype = Object.create(AirPlane.prototype);

// // console.log(CivilPlane.prototype.__proto__=== AirPlane.prototype)//ture

// // console.log(CivilPlane.prototype.constructor === CivilPlane); //false

// CivilPlane.prototype.constructor = CivilPlane;

// CivilPlane.prototype.seatInfo = function () {
//   //console.log(this);
//   console.log(`Numver of seats in the plane is ${this.numberOfseats1}`);
// };

// CivilPlane.prototype.modifySeatnumber = function (newseatQty) {
//   this.numberOfseats1 = newseatQty;
// };

// const propsForSmallPlane = {
//   numberOfseats: 4,
//   wingspan: 20,
//   maxRangeOfFlight: 1000,
//   weight: 15,
//   maxspeed: 800,
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);

// const propesforLargePlane = {
//   numberOfseats: 250,
//   wingspan: 60,
//   maxRangeOfFlight: 3500,
//   weight: 40,
//   maxspeed: 900,
// };

// const largeplane = new CivilPlane(propesforLargePlane);

// smallPlane.vechicleInfo();

// largeplane.vechicleInfo();

