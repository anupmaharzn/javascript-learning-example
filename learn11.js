// Arrow Function

//Traditional javascript funtion overview

// 1.function declaration
 
// function fn(a,b) {
//     return a+b;
// }

// sum(2,5); //7

// //2. anonymous function expression 

//  //2.1 assignment to the variable

//  const fn1 = function (a,b) {
//      return a+b;
//  }
//  fn1(2,3); //5

//  //2.2 IIFE
//  (function(a,b) {
//      console.log("IIFE is executed");
//      return a+b;
//  }) (2,3);
 

//  //2.3 Callback function 

//  setTimeout(function(a,b){
//      console.log("callback function is executed");
//      return a +b;
// },2000);


//3. named function 

 //3.1 assignment to the variable

//  const fn2 = function sum(a,b) {
//     return a+b;
// }
// fn2(2,3); //5

// //3.2 IIFE
// (function sum(a,b) {
//     console.log("IIFE is executed");
//     return a+b;
// }) (2,3);


// //3.3 Callback function 

// setTimeout(function sum(a,b){
//     console.log("callback function is executed");
//     return a +b;
// },2000);


//ARROW FUNCTION
// they are anonymous function

// EXAMPLE 1
//console.log(sum(1,2)); // sum is not defined

// const sum = (a,b) => a+b;

// console.log(sum(1,2)); //3
// console.log(sum(5,7)); //12

//EXAMPLE 2

// const post = {
//     title: "sampel title",
//     Comment:3,
//     shared:true,
//     published: true,
//     postId:5123,
// }
// // //explicit return of the object
// // const processedPost = (post) => {
// //     return {
// //         title:post.title,
// //         Comment:post.Comment,
// //         popular: post.Comment > 5 ? true:false,

// //     }
// // }

// //implicit return of the object
// // yo can also remove () coz only one parameter
// const processedPost = post=> 
//     ({
//         title:post.title,
//         Comment:post.Comment,
//         popular: post.Comment > 5 ? true:false,

//     });

// console.log(processedPost(post));

//EXAMPLE 3
//IIFE
// (() => {
//    this.greet =  function greet() {
//         return "hey, what's up ?"
//     }
//     //console.log(this);//global window object
    
//     return this;
// }) ();

//changing this named function into anonomyous arrow function
// (() => {
//    this.greet =() => "hey, what's up ?";
    
//     //console.log(this);//global window object
    
//     return this;
// }) ();



//imp to understand
//ARROW FUNCTION AND THIS

 //Example 1

//  const num = {
//      value:100,
     
//      info:()=> {
//          console.log(this);// window object
//          return this.value;//undefined
//      }
 
//     //  info :function info() {
//     //      console.log(this); //num  object
//     //      return this.value; 
//     //  }
//  };

//  console.log(num.info() );

//Example 2

// const anotherNum = {
//     value:5,
    
//     info:()=> {
//         console.log(this);//  still window object
//         return this.value;//undefined
//     }

//     // info :function info() {
//     //     console.log(this); // aaba chai newNum  object vayo info.call() le garda
//     //     return this.value; 
//     // }
// };
// const newNum = {
//     value:17,
// }
// console.log(anotherNum.info.call(newNum));


//Example 3

//  const str= {
//      value:'Delayed greeting',
   
     
     
//      // "this" is lost in the callback function"
//     //  greet :function greet() {
//     //    setTimeout(function() {
//     //    console.log(this); // window object ho tei vayira undefined value vayo
//     //    console.log(this.value)
//     //      
//     //    },1000);
//     // }
    
//     //Option 1
//     // greet :function greet() {
//     //     //option 1 to keep track of this
//     //     const self = this;
//     //    setTimeout(function() {
//     //       console.log(self);
//     //       console.log(self.value); //"Delayed greeting"
//     //    },1000);
//     // }

//     //option 2
//     //   greet :function greet() {
//     //    setTimeout(function() {
//     //    console.log(this); //str 
//     //    console.log(this.value);//delayed greeting
         
//     //    }.bind(this),1000);
//     // }
    

//     //Option 3
//     // setimeout vitra ko function maa this chaina but by the help of arrow function it take this form surrounding which is str that we needed
//     greet :function greet() {
//         setTimeout( () => {
//         console.log(this); //str 
//         console.log(this.value);//delayed greeting
          
//         },1000);
//      }
//  };

//  str.greet();


//Example 2 -function constructor



// function GroceryItem (title,kind) {
//     this.title = title;
//     this.kind = kind;
// }

// //it is not possible to use arrow function as a constructor
// // groceryItem is not a constructor
// // const GroceryItem = (title,kind) => {
// //     this.title = title;
// //     this.kind = kind;
// // }

// //naya function which apple and brocolli has access
// GroceryItem.prototype.info = function () {
//     return this.title + " is " + this.kind;
// }

// // GroceryItem.prototype.info = () => {
// //     console.log(this); // this is window here and function always reture undefined is undedined
// //     return this.title + " is " + this.kind;
// // }
// const apple = new GroceryItem("Apple", "fruit");

// console.log(apple);

// const brocolli = new GroceryItem("Brocolli", "vegetable");

// console.log(brocolli);


// Regular vs arrow function 

//challenge
//used onclick
// const creteButton = () => {
//     const btn = document.createElement("button");
//     let clickednumber = 0;
//     btn.innerHTML = "click me";
//   btn.onclick = function() {
//       console.log("button was clicked");
//       btn.innerHTML = "button was clicked " + ++clickednumber + "times";
//   };
//    document.body.appendChild(btn);
// }

// creteButton();

//used addeventlistner
// const creteButton = () => {
//     const btn = document.createElement("button");
//     let clickednumber = 0;
//     btn.innerHTML = "click me";

//   btn.addEventListener("click" ,function(){
//     console.log("button was clicked");
//     btn.innerHTML = "button was clicked " + ++clickednumber + "times";
//   })
//    document.body.appendChild(btn);
// }

// creteButton();


// const creteButton = () => {
//     const btn = document.createElement("button");
//     let clickednumber = 0;
//     btn.innerHTML = "click me";
//  // regular function expression and also this can be used this.innerhtml
//   btn.addEventListener("click" ,function(){
//     console.log("button was clicked");
//     btn.innerHTML = "button was clicked " + ++clickednumber + "times";
//   });

//  // Arrow function expression
// //    btn.addEventListener("click" , () =>{
// //     console.log("button was clicked");
// //     btn.innerHTML = "button was clicked " + ++clickednumber + "times";
// //   });


//    document.body.appendChild(btn);
// }

// creteButton();


// argument in function

// regular function declaration
// function sum() {

//     console.log (arguments);
//     console.log (typeof arguments); // object
//     console.log (Array.isArray(arguments)); //false
//     const argumentsarray  = Array.from(arguments);
//     console.log(argumentsarray);
// }

// sum(1,2,3,4,5);


// // arrow function expression
// const sum2 = () => {

//     console.log (arguments);
//     console.log (typeof arguments); // object
//     console.log (Array.isArray(arguments)); // true
//     const argumentsarray  = Array.from(arguments);

//     console.log(argumentsarray); // argumets in not defined at sum2
// }
// sum2(1,2,4);

//