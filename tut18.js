console.log('We are listening from tut-18 files');

//Memoization :

const memoize = (fn) => {
	let cacheData = {}
  return (...args) => {
  	const argsToString = JSON.stringify(args)
    if (argsToString in cacheData) {
    	console.log(`Getting data from cache for key ${argsToString}`)
    	return cacheData[argsToString]
    } else {
    	const result = fn.apply(this, args)
      console.log(`Computing value and caching for key ${argsToString}`)
      cacheData[argsToString] = result
      return result
    }
  }
}

const addThreeNums = (a, b, c) => a+b+c
const memoisedAdd = memoize(addThreeNums)

console.log(memoisedAdd(1,2,3))
console.log(memoisedAdd(1,2,3))

const factorial = memoize((n) => {
	if (n === 0) return 1
  else return n * factorial(n-1)
})
console.log(factorial(10))
console.log(factorial(11))
