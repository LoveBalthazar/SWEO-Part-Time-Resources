/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
addToTwelve([]); // false

***********************************************************************/

// base case
// recursive case
// recursive step

function addToTwelve(arr){
	// base case
	if(arr.length < 2) return false
	if(arr[0] + arr[1] === 12) return true

	// recursive step
	return addToTwelve(arr.slice(1))
}

const addToTwelve = arr => arr.length < 2 ? false :
		arr[0] + arr[1] === 12 ? true :
		addToTwelve(arr.slice(1))

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
// try {
//   module.exports = addToTwelve;
// } catch (e) {
//   module.exports = null;
// }
