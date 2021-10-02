// Expressions vs Statements

//first expression
10
5 + 3
    //()yo parenthesis grouping opertator ho 
;
(function(a) {
    console.log(a);
}) //function expression embedded in to  parenthesis

//immediately invoke function expression

;
(function() {
    console.log("hello world");
})() // function call is expression

let a;
a = 10 // assignment expression


// 5 = true; // Invalid left-hand side in assignment

4 <= 10 <= 20 || 5 // logical expression ho return value true

// Time for Statements

let b; //statement


b = 3

function myfunction(b) {
    // console.log(
    //     return b);  //Unexpected token 'return' coz return b is not expression its statemnet 
    return b;
}

myfunction(b)

if (true) {
    console.log('hello form if statement');
} // 'if'statement

// console.log(
//     if (true) {
//         console.log('hello form if statement');
//     }); // Unexpected token 'if'




//Expression statement



// expression can be used as function argument but  statment cannout be used as argument
console.log(4 + 3);

// console.log(console.log(4 + 3);); //missing ) after argument list,ani tyo ta statemnet ho ni cannot be passed as argument

console.log(console.log(4 + 3)); //undefined // innner value chai expression nai ho tara


/* challenges */

const myObject = {
    x: 10,
    y: true
};

delete myObject.x; //delete is expression and whole is expression statement

//2

function fn() {
    console.log("Greeting from the 'fn' function");
    return function(a) {
        console.log(a);
    };
}
//yadi ; after fn() garyeko vayi (true) wala exectionhudainatheyo coz indepent vanthalxa ni 
fn() //greeting from the 'fn' function
    (true) // "true" because this line will be interpreted as function call with argument true


function firstFunction(a, b) {
    return a + b;

} //function decelaration

const secondFunction = function(a, b) {
    return a + b;
}; //yeta chai kina semicolon vani const var let haru statement ho so semicolon hunxa