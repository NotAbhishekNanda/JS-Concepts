// Flatten the array using reduce method
const arr = [[1,2,3],[4,5]]
const flattenArray = arr.reduce((accumulator, value)=>{
  return accumulator.concat(value); 
},[])
console.log(flattenArray);
// arr.flat(nested_level) is also an option
