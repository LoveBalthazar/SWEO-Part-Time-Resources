// SPREAD AND REST OPERATOR: ...

// REST OPERATOR: ...
// accept an indefinite amount of arguments as a function parameter, and condense it into a single array
// rest operator has to be at the end of the function parameters
// const adder = (num1, num2, ...nums) => {
//     console.log(num1)
//     console.log(num2)
//     console.log(nums)
// }
// adder(1,2,4,4,6,7)

// SPREAD

// you can use the spread operator in 3 places
// you can spread arrays, objects, strings

// const str = 'hello world'

// console.log(str.split(""))
// const nums = [1,2,3,4]
// const nums2 =[1,2,...nums,5,6]
// const nums3 = [...nums, ...nums2]
// console.log(nums3)

// const obj = {a: 1, b: 2, c: 3}
// const keyValues = [...Object.keys(obj), ...Object.values(obj)]
// console.log(keyValues)
// const obj2 = {d: 4, e: 5, f: 6}
// const obj3 = [...obj, ...obj2]
// console.log(obj3)

// DESTRUCTURING
// const nums = [3,10,7]

// const [firstVal, secondValue] = nums
// const firstVal = nums[0]
// console.log(firstVal)
// console.log(secondValue)

// const obj = {a: 1, b: 2, c: 3, isClassOver: false}

// destructure object

// const {a: value} = obj
// const {isClassOver} = obj
// console.log(a)
// console.log(value)
// console.log(isClassOver)
// const key = 'isClassOver'
// const {[key]: isClassOver} = obj
// console.log(isClassOver)

// console.log(obj)
// delete obj.a
// console.log(obj)

// ADVANCED FOR LOOPS
// MAP, FOREACH, FILTER, FIND, REDUCE
// THESE METHODS ARE MEANT TO "REPLACE" TRADITIONAL FOR LOOPS, TO IMPROVE READABILITY AND DEVELOPMENT SPEED

// const arr = ['hello', 'world']
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// MAP
// RETURNS A NEW ARRAY
// PERFORM SOME OPERATION ON EACH ELEMENT OF THE ARRAY
// const nums = [1,2,3]
// problem: use nums array, and return a new array containing every value increased by 5
// const newArr = []
// for(let i = 0; i < nums.length; i++){
//     newArr.push(nums[i] + 5)
// }
// console.log(newArr)
// const addFive = (num) => {
//     return num + 5
// }

// const resultArr = nums.map((num) => true)
// console.log(addFive)
// const resultArr = nums.map(addFive)
// console.log(resultArr)

// FOREACH
// DOES NOT RETURN ANYTHING
// A CALLBACK FUNCTION GETS CALLED FOR EACH ELEMENT OF THE ARRAY
// const strArr = ['hello', 'world', 'my', 'name', 'is', 'jesse']
// console.log(strArr)
// strArr.forEach((string, index) => {
//     // console.log(string)
//     strArr[index] = string.toUpperCase()
//     // console.log(anything)
// })
// console.log(strArr)

// FILTER
// RETURNS A NEW ARRAY, CONTAINING ONLY THE ELEMENTS THAT PASSED THE CONDITION IN THE CALLBACK FUNCTION
// problem: iterate through the array and return every element that has a length under 3
// const strArr = ['hello', 'world', 'my', 'name', 'is', 'jesse']
// const resultArr = strArr.filter((string) => {
//     if(string.length < 3) {
//         return string
//     }
// })
// const resultArr = strArr.filter((string) => string.length < 3)
// console.log(resultArr)

// FIND
// RETURN THE ELEMENT THAT MATCHES THE SEARCH CRITERIA
// problem: iterate through nums array and return the element that equals the number 6 and multiply it by 5
// const nums = [1,6,3,8,2,6]

// const myFilterFunc = (nums, value) => {
//     const result = nums.find((num) => {
//         if(num === value) return true
//     })
//     return result * 5
// }

// console.log(myFilterFunc(nums, 6))

// console.log(result)

// REDUCE
// REDUCES AN ARRAY TO A SINGLE VALUE, then returns that value
// problem: iterate through nums and get the sum of all nums
// const nums = [1,2,3,4]
// const accumulator = 0
// const value = nums.reduce((accumulator, num) => {
//     if(num < 3) return accumulator + num
//     return accumulator
// })
// console.log(value)

const arr = [1,2,3]
const obj = {a:1}

obj['a'] = obj['a'] + 3
console.log(obj)
