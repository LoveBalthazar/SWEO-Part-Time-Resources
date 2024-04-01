// CALLBACKS
// A FUNCTION THAT IS PASSED TO ANOTHER FUNCTION AS AN ARGUMENT

// FOREACH
// problem: write a function that accepts an array of strings and prints the return value of the callback function on each string/element
const strings = ['hello', 'goodbye', "what's up"]

const myForEach = (stringsArr, cb) => {
    for(let string of stringsArr){
        let printedString = cb(string)
        console.log(printedString)
    }
}

// let printer = (string) => {
//     return string
// }

const stringUpperCase = (string) => {
    return string.toUpperCase()
}

const addExclamations = (string) => {
    return string += '!!!'
}

// myForEach(strings, printer)
// myForEach(strings, stringUpperCase)
// myForEach(strings, addExclamations)

// MAP
// problem: write a function that accepts an array of numbers and returns a new array after modifying each element with a callback
const nums = [1,2,3,4,5]

const myMap = (nums, cb) => {
    const resultArr = []
    for(let num of nums){
        //invoke callback, save the value into a variable
        const newNum = cb(num)
        //add that value into our resultArr
        resultArr.push(newNum)
    }
    return resultArr
}

const addFive = (num) => {
    return num + 5
}

const multiplyFive = (num) => {
    return num * 5
}


// console.log(myMap(nums, addFive))
// console.log(myMap(nums, multiplyFive))


// FILTER
// problem: write a function that accepts an array of numbers and returns a new array containing only the numbers
// that satifsy the condition of the callback
const nums2 = [1,2,3,4,5,6]

const myFilter = (nums, cb) => {
    const resultArr = []
    for(let num of nums){
        //invoke the callback, save true/false into a variable
        const passedCondition = cb(num)
        //if callback returned true, push num into resultArr
        if(passedCondition){
            resultArr.push(num)
        }
        // if(passedCondition === true){

        // }
    }
    return resultArr
}

const isEven = (num) => {
    // if(num % 2 === 0) return true
    return (num % 2 === 0)
    // return false
}

const isOdd = (num) => {
    if(num % 2 === 1) return true
    return false
}

console.log(myFilter(nums2, isEven))
console.log(myFilter(nums2, isOdd))
