console.log("Here We are listening from tut -1 file");

/**
 * Let vs Var vs Const
 */

//1. Let is Block Scoped While var is function scoped.

function test() {
  var x = "x";
  let y = "y";

  console.log(x, y); // x y

  {
    var moo = "Mooo";
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}

test();

/**
 * As you see the baz declared in the block can not be reachable here.
 */

//Example - 2 with scope:
for (var i = 0; i < 3; i++) {
  var j = i * 2;
}
console.log(i); // 3
console.log(j); // 4

for (let k = 0; k < 3; k++) { // l and k are known in this block only so as we try to capture K and l outside the block scope it is giving us error. 
  let l = k * 2;
}
console.log(typeof k); // undefined
console.log(typeof l); // undefined

/**
 * Trying to do console.log(k) or console.log(l) here would throw a ReferenceError.
 */

//Next comparison let vs var:

/**
 2 * let does not allow redeclare variables
 */
// Variable declared with var can be redeclared:

var a = 3;
var a = 5; //runs smoothly

// Variable declared with let can not be redeclared
let a = 5;
let a = 3; // error

/**
 * Redeclaring the value of var in different scopes also changes the variable of the var in the outer scope.
 */

var a = 5;
console.log(a); // 5
{
  var a = 3;
  console.log(a); // 3
}
console.log(a); // 3

/**
 * Redeclaring let in the different scopes will not change the value. But don’t forget you can not redeclare
   the value with let more than once in the same block.
 */
let a = 5;
console.log(a); // 5
{
  let a = 3;
  console.log(a); // 3
}
console.log(a); // 5

/**
 3 * Let does not allow hoisting
 * A variable declared with var allows hoisting to the top of the scope of the script.
 */

console.log(a);
var a; // undefined

/**
 * but if we want to do the same with let:
 */
console.log(a);
let a; // Uncaught ReferenceError: a is not defined

//let does not allow hosting

/**
 * const:
 */
//    In JavaScript, const is used for declaring constant variables.

const language = "Javascript";
console.log(language); //Javascript
/**
 * Once you declare a constant value you can not change the const variable.
 */
