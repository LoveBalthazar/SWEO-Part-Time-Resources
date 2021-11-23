// const hashIt = (word) => {
//   return word
//     .split('')
//     .reduce((res, char) => Number(char.charCodeAt().toString(2)) + res, 0);
// };

// console.log(hashIt('listen'));
// console.log(hashIt('silent'))

/* 
Write a function called twoSum that intakes an array of numbers and a target.
The function should return an array with a length of two, that contains the 
first two indices of the passed in array that add up to the target. 
If there are no two numbers that match, return [-1, -1]

console.log(twoSum([1, 2, 3, 4, 5], 8)); // [2, 4]
console.log(twoSum([5, 3, 1, 2, 4], 8)); // [0,1]
console.log(twoSum([1, 2], 244)); // [-1, -1]
*/

const twoSum = (arr, target) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const diff = target - el;
    if (diff in hash) return [hash[diff], i];
    hash[el] = i;
  }
  return [-1, -1];
};

/* 
Iterate over the arr
Look at each num and add it to the hash table
with the key as the number and the value as the index it's located at.

{
  5: 0,
  3: 1...
}
*/

console.log(twoSum([1, 2, 3, 4, 5], 8)); // [2, 4]
console.log(twoSum([5, 3, 1, 2, 4], 8)); // [0,1]
console.log(twoSum([1, 2], 244)); // [-1, -1]
