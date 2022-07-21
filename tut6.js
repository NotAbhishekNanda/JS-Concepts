console.log("We are listening from tut6 file");

/**
 * Split Method in Javascript
 */
/**
 * The split() method takes a pattern and divides a String into an ordered list of substrings by
 * searching for the pattern, puts these substrings into an array, and returns the array.
 */

 const str = 'The quick brown fox jumps over the lazy dog.';

 const words = str.split(' ');
 console.log(words);
 console.log(words[3]);
 // expected output: "fox"
 
 const chars = str.split('');
 console.log(chars[8]);
 // expected output: "k"
 
 const strCopy = str.split();
 console.log(strCopy);
 // expected output: Array ["The quick brown fox jumps over the lazy dog."]

 function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator)
  
    console.log('The original string is: ', stringToSplit)
    console.log('The separator is: ', separator)
    console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
  }
  
  const tempestString = 'Oh brave new world that has such people in it.'
  const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'
  
  const space = ' '
  const comma = ','
  
  splitString(tempestString, space)
  splitString(tempestString)
  splitString(monthString, comma)


