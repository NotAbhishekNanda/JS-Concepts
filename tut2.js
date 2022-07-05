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
