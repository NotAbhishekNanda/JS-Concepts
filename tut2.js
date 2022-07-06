console.log('Here we are listening from tut -2 files');

/**
 * Normal function vs Arrow Function
 */
 
// Regular function expression
 function multiply(x,y){
   return x * y;
 }
 multiply(3,5) // Call the function
 /*
 * Output: 15
 */

//Replica of arrow function of the same:
const multiply = (x,y) => x*y
multiply(3,5) // Call the function

/*
* Output : 15
*/

//Arrow Function Body
const functionName = (argument1, argument2, ...argumentN) => {
    return (
      // write your statements here with parameters
      argument1 * argument2 // as our first example
    )
  }

//   Arguments binding in arrow functions

/**
 * In regular functions, if we do not define any argument to the function when we define
   it, we can still access the arguments of the function:
 */

function testArguments() {
  console.log(arguments)
}
testArguments(1,2,3)
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

/**
 * If we try to use the same thing with the arrow functions
   we can not really do that.
*/

const testArguments = () => {
    console.log(arguments)
}
testArguments(1,2,3)
// Uncaught ReferenceError: arguments is not defined
// When we try to log the arguments here we will get ReferenceError

// There is a way to accomplish this with spread syntax.

const testArguments = (...n) => {
    console.log(n)
}
testArguments(1,2,3)
// [1, 2, 3]

/**
 * It is not exactly the same thing as arguments but if you want 
   to use n number of arguments in your function you can do it like above.
 */

   /**
    //Using This keyword in arrow functions:-
  
    * Using this keyword in regular function refers to the function where it's called.
    * On the other hand, arrow functions do not have this keyword and it always refers to the parent scope.
    */

function Person() {
  this.name = 'Jack',
  this.age = 25,
  this.sayHello = function () {
  // this is accessible
    console.log('Hello', this.name);
    function innerFunction() {
      // this refers to the global object
      console.log(this.age);
      console.log(this);
      }
  innerFunction(); 
 }
}
let x = new Person();
x.sayHello();

// Output:
// Hello Jack
// undefined
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

/**
 * Now if we change the innerFunction to an arrow function that will 
   have the capability to use the parent scope.
 */
   
   function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayHello = function () {
      // this is accessible
      console.log('Hello', this.name);
      const innerFunction = () => {
        // this refers to the global object
        console.log(this.age); // 25
        console.log(this); // References Person 
      }
      innerFunction(); 
   }
}
let xx = new Person();
xx.sayHello();

/**
 * Output:-
 * 
 * Hello Jack
 * 25
 * Person {name: 'Jack', age: 25, sayHello: ƒ}
 */


