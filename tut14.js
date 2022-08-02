console.log('We are listening from tut -14');

// What is the purpose of a self executing function in javascript? - Closure

/**
 * (function(){
    //Bunch of code...
})();
 
*/

/**
 * It's all about variable scoping. Variables declared in the self executing function are, by default,
 * only available to code within the self executing function. 
 * This allows code to be written without concern of how variables are named in other blocks of JavaScript code.
 */

// Example:
(function() {
    let numberDefined = 3;
    console.log(numberDefined);
  })();
  
  console.log(foo);

// This will first log 3 and then throw an error on the next console.log because foo is not defined. for the particulare scope of the function

  
