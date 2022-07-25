console.log("We are listening from tut11")

/**
 * Array.filter() Method:
 * The filter() method creates a shallow copy of a portion of a given array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided function.
 * 
 * Example:-
 */

 const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

 const result = words.filter(word => word.length > 6);
 
 console.log(result);
 // expected output: Array ["exuberant", "destruction", "present"]

 /**
  * filter() calls a provided callbackFn function once for each element in an array,
  * and constructs a new array of all the values for which callbackFn returns a value
  * that coerces to true. callbackFn is invoked only for indexes of the array which have 
  * assigned values; it is not invoked for indexes which have been deleted or 
  * which have never been assigned values.
  * Array elements which do not pass the callbackFn test are skipped, 
  * and are not included in the new array.
  */

//   Filtering out all small values

function isBigEnough(value) {
    return value >= 10
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
  console.log(filtered);
  // filtered is [12, 130, 44]

//   Finding Prime numbers in an array:

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// Filtering invalid entry from JSON

let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ]
  
  let invalidEntries = 0
  
  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true
    }
    invalidEntries++
    return false;
  }
  
  let arrByID = arr.filter(filterByID)
  
  console.log('Filtered Array\n', arrByID)
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Number of Invalid Entries = ', invalidEntries)
  // Number of Invalid Entries = 5


  //   Searching in an array:

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']

// Affecting Initial Array (modifying, appending and deleting)
/**
 * The following example tests the behavior of the filter method when the array is modified.
 * 
 * 
 */ 

// Modifying each word
let wordsRe = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWords = wordsRe.filter((word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})

console.log(modifiedWords)
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
wordsRe = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = wordsRe.filter((word, index, arr) => {
  arr.push('new')
  return word.length < 6
})

console.log(appendedWords)
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
wordsRe = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = wordsRe.filter((word, index, arr) => {
  arr.pop()
  return word.length < 6
})

console.log(deleteWords)
// Notice 'elite' is not even obtained as it’s been popped off 'words' before filter can even get there
// ["spray" ,"limit"]


