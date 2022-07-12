console.log('We are listening from tut - 4 files');

//Javascript Closure:
/**
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding 
   state (the lexical environment). In other words, a closure gives you access to an outer function’s scope 
   from an inner function. In JavaScript, closures are created every time a function is created,
   at function creation time
 */

function circumference() {
  const pi = 3.14;
  return function (r) {
    return 2 * pi * r;
  };
}
const r = circumference();
let result = r(7);
console.log(result);
/**
 * In above circumference function has below qualities,
 * 
 * Returning a function and that anonymous function
   keeping a reference to pi which is in the lexical environment.
 * Here, pi act as private property of circumference function and 
   Only can be accessed via privilege function. Here it is an 
   anonymous function.
 *
 *
 * So… circumference is a Closure.
 */

   /*
   *
    * Private methods aren’t just useful for restricting access to code.
    * They also provide a powerful way of managing your global namespace. 
    
   */
   function makeCounter() {
    let privateCounter = 0;
  
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function () {
        changeBy(1);
      },
  
      decrement: function () {
        changeBy(-1);
      },
  
      value: function () {
          return privateCounter;
      }
    };
  }

  /*
  *
   * In above code, privateCounter variable and changeBy function in makeCounter function 
     can’t be accessed from the outside of makeCounter function. But makeCounter function 
     is exposing three functions to outside from it: increment , decrement and value.
     Those 3 functions are closures that share the same lexical scope and privateCounter and 
     changeBy() can be accessed through those 3 functions.

   */

    // Now create two instances from makeCounter function and use increment , 
    // decrement and value functions as below and check how it behaves.

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value());  // 0

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2

counter1.decrement();
console.log(counter1.value()); // 1
console.log(counter2.value()); // 0
