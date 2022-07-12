console.log("We are listening from tut -3 files");

/**
 * For - of loop - That loop can be used to iterate directly with iterated elements.
 */

//Syntax:

/**
 * for (element of iterable) {
       body of for...of
}
 */

/**
 * In this example above we have defined an iterable, that variable can be an iterable object like arrays, string, map, set etc.

 * The element is the value of each iterable property. In every iteration, the element value is updated regarding the iterable value.

 * That means every element in the iterable, runs once the body of for-of loop.

*/

// For - of Loop with Arrays

// array
const numbers = [1, 2, 3];

// using for...of
for ( let element of numbers ) {

    // log the values
    console.log(element * 2);
}
// 2
// 4 
// 6

// For - of Loop with Strings

// string
const text = "ABHISHEK";

// using for...of
for ( let element of text ) {

    // log the values
    console.log(element);
}
/*
* Output :
A
B
H
I
S
H
E
K
*/

// How can we get index in for - of loops?
const letters = ['a','b','c']
for (const [index, value] of letters.entries()) {
  console.log(index, value);
}
// 1,a
// 2,b
// 3,c

/**
 * If we want to get the index value in the for-of loop we need to 
   iterate the element with .entries() and we can use destructuring to get index and value.
 */
