//functions in javascript
//c programming padhyeko faida vo LOL thanks first semester

//example 1
//a b parameter of the fucntion
function add(a, b) {
    let x = a;
    let y = b;
    let sum = x + y;
    console.log("sum function answer=" + sum);
}
//function call
//a b value is passed as argument to the function
add(3, 3);
//or let a = 3 let b = 3 then call add(a,b); same thing

//example 2

function myfn(a, b) {
    let c; //local scope vairable ho within the function
    a = a + 1; //cant be access outside the function
    c = a + b;
    return c;
}
//function call
myfn(10, 3); // function return 14, but we see nothing in the console
console.log(myfn(10, 3));
console.log(myfn()); // NaN auxa coz blank argument


//exampel 3
function myFunction(a, b) {
    console.log(a);
    console.log(b);

}

myFunction(4, 3);
console.log(myFunction()); //first a ,b maa empty argument janxa tesle garda undefined hunxa
// undefined auxa coz function maa return keyword chaina 
// return type hunu paryo ni


//example 4
//scope ko example euta garumna

function scopefunciton(a, b) {
    console.log(a, b);
}
console.log(scopefunciton(3, 2)); //undefined ni auxa no return as we said

//console.log(a); // Uncaught ReferenceError: a is not defined


//example 5

function afterreturn(a) {
    console.log(a);
    return a; //fucntion stops here
    console.log(a);
}
console.log(afterreturn(10));


//challenge time
//1
function mult(a, b, c) {
    const d = a * b * c;
    console.log(d);
}
mult(2, 2, 2);
//2
function concatstring(a, b) {
    return a + " " + b;
}
const newstring = concatstring('anup', 'maharjan');
console.log(newstring);

//3

function outerFunction(a, b) {


    function innerFunction(d) {
        return d * d;

    }
    const c = a + b;
    console.log(innerFunction(c));
    //or to store result 
    //result = innerfunction (c);
    //console.log(result);


}

outerFunction(2, 3);

//function experssion example

//it is impossible to use function expression standalone 
//function() {} Function statements require a function name

// assign function experssion to the variable 
const myexpFunction = function() {};

console.log(myexpFunction()); //undefined
console.log(myexpFunction); // f () {}


//most common use case of annoymous function 
//call back function 

// setTimeout(function() { //settimeout global builtin function ho 
//     console.log("Delayed message");
// }, 3000);


//final example
// let i = 1;
// setInterval(function() {
//     console.log("message lgged each 1 second " + i);
//     i = i + 1;
// }, 1000);

//challenge

let i = 1;
const myInterval = setInterval(function() {
    console.log('here is the message number ' + i);
    i = i + 1;

}, 2000);

setTimeout(function() {
    clearInterval(myInterval);
}, 10000);