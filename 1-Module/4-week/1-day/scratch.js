// CALLBACKS
// A FUNCTION THAT IS PASSED TO ANOTHER FUNCTION AS AN ARGUMENT

// FOREACH
// problem: write a function that accepts an array of strings and prints the return value of the callback function on each string/element
const strings = ['hello', 'goodbye', "what's up"]

const myForEach = (stringsArr, cb) => {
    //iterate through stringsArr
    for(let string of stringsArr){
        //invoke callback and save value into a variable
        const stringResult = cb(string)
        //print the result
        console.log(stringResult)
    }
}

const printer = (string) => {
    return string
}

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

const myMap = (numsArr, cb) => {
    const resultArr = []
    //iterate through numsArr
    for(let num of numsArr){
        //invoke callback and store the value in a variable
        const newNum = cb(num)
        //push value into our resultArr
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

const myFilter = (numsArr, cb) => {
    const resultArr = []
    //iterate through our numsArr
    for(let num of numsArr){
        //store the true/false evaluation of our callback
        const metCondition = cb(num)
        //push the current num into the resultArr if our callback returned true
        if(metCondition){
            resultArr.push(num)
        }
        // if(metCondition === true){

        // }
    }
    return resultArr
}

const isEven = (num) => {
    // if(num % 2 === 0) return true
    return num % 2 === 0
    // return ((num % 2) === (0))
    // return false
}

const isOdd = (num) => {
    // if(num % 2 === 1) return true
    return num % 2 !== 0
    // return false
}

console.log(myFilter(nums2, isEven))
console.log(myFilter(nums2, isOdd))
