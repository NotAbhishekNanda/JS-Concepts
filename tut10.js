console.log('We are listening from tut10 file');

/**
 * Array.reduce() Method:
 * 
 * The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order,
 * passing in the return value from the calculation on the preceding element. 
 * The final result of running the reducer across all elements of the array is a single value.
 * 
 */

 const array1 = [1, 2, 3, 4];

 // 0 + 1 + 2 + 3 + 4
 const initialValue = 0;
 const sumWithInitial = array1.reduce(
   (previousValue, currentValue) => previousValue + currentValue,
   initialValue
 );
 
 console.log(sumWithInitial);
 // expected output: 10

 /**
  * The reducer walks through the array element-by-element,
  * at each step adding the current array value to the result 
  * from the previous step (this result is the running sum of all the previous steps)
  * until there are no more elements to add.
  * 
  * callbackFn: A "reducer" function.
  * The function is called with the following arguments:
  * 
  * previousValue: the value resulting from the previous call to callbackFn.
  * On first call, initialValue if specified, otherwise the value of array[0].
  * 
  * currentValue: the value of the current element. On first call, the value of array[0]
  * if an initialValue was specified, otherwise the value of array[1].
  *
  *  currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
  * 
  * array: the array to traverse.
  */

//  JavaScript reduce behavior with/without an initial value

/**
 * https://stackoverflow.com/questions/50826718/javascript-reduce-behavior-with-without-an-initial-value
 */



