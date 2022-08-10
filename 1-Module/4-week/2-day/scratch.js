/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array.forEach.

Examples:

make a plan
  iterate over our array
  save each element to a variable
  pass that element, the index, and the array as params to our callback that is passeed in as a param to our function
*******************************************************************************/

function myForEach(array, cb) {
  for(let i = 0; i<array.length;i++){
    let ele = array[i]
    cb(ele, i, array)
  }
}

// let arr = ['a', 'b', 'c']

// let callbackFunc = function (el, i) {
//   console.log(el + ' is at index ' + i);
// }

// myForEach(arr, callbackFunc); // prints
// // a is at index 0
// // b is at index 1
// // c is at index 2

// let test = [];
// myForEach(['laika', 'belka'], function (el) {
//     test.push(el.toUpperCase());
// });
// console.log(test); // ['LAIKA', 'BELKA']
/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.
Do not use the built in Array#map
// Examples

make a plan
create a newArr variable to an empty array
loop over our array
save a element variable
save a variable that is our cb passing in our elemnt
push our changed variable to our newArr
return our new Arrayy
*******************************************************************************/

let myMap = function (arr, cb) {
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    let ele = arr[i]
    let changed = cb(ele)
    newArr.push(changed)
  }
  // arr.forEach(function(ele){
  //   let changed = cb(ele)
  //   newArr.push(changed)
  // })
  return newArr
};

// let result1 = myMap([100, 25, 81, 64], Math.sqrt);
// console.log(result1);   // [ 10, 5, 9, 8 ]
// let result2 = myMap(['run', 'Forrest'], function (el) {
//     return el.toUpperCase() + '!';
// });
// console.log(result2);   // [ 'RUN!', 'FORREST!' ]
/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.
Examples:

iterate from 0 up to the number passed in
we will reassign our value to our callback passing in our value
return our value
*******************************************************************************/

let multiMap = function (val, num, cb) {
  for(let i = 0; i < num; i++){
    val = cb(val)
  }
  return val
};

// let result1 = multiMap(7, 2,  function(n) {
//   return n * 10;
// });
// console.log(result1); // 700
// let result2 = multiMap(7, 3, function(n) {
//     return n * 10;
// });
// console.log(result2); // 7000
// let result3 = multiMap("hi", 5, function(s) {
//   return s + "!";
// });
// console.log(result3); // hi!!!!!
/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array.filter.

Examples:

make a plan
create a newArr variable 
iterate over our array
  create element variable 
  check if passing our element to our callback is true
    push that element to the newArr

return our newArr
*******************************************************************************/

function myFilter(array, cb) {
  let newArr = []
  for(let i = 0; i< array.length; i++){
    let ele = array[i]
    // if(cb(ele) === true){ // same thing as below
    if(cb(ele)){
      newArr.push(ele)
    }
  }
  return newArr
}

// let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
//     return n % 2 === 0;
// });
// console.log(result1);       // [ 4, 8 ]

// let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
//     return s.length > 3;
// });
// console.log(result2);      // ['choose', 'words', 'only']
/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.
Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.
Examples:
function isEven(n) {
	return n % 2 === 0;
}
function isPositive(n) {
	return n > 0;
}
function square(n) {
	return n * n;
}
function flipSign(n) {
	return n * -1;
}
console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]
console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]
console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]
*******************************************************************************/

let selectiveMap = function (arr, cb1, cb2) {

};


/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

make newArr variable
loop througgh our array
check if array[i] passed into our callback is false
  push element into our newArr

  return neewArray

*******************************************************************************/


// function reject(array, cb) {
  const reject = (array, cb) => {
  let newArr = []

  // for(let i = 0; i < array.length; i++){
  //   let ele = array[i]
  // array.forEach(function(ele){
  //   if(cb(ele) === false){
  //     newArr.push(ele)
  //   }
  // })
  array.forEach((ele) => {
    if(cb(ele) === false) newArr.push(ele)
  })
  return newArr
}

let isEven = function(n) {
    return n % 2 === 0;
};
// console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

// let hasA = function(s) {
//     return s.toLowerCase().includes('a');
// };
// console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]

/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.
Examples:

make a plan
create a flag variable set to false
loop over our array using forEach
pass each element to our callback and check if its true
reassing our flag variable to true

return our flag variable
*******************************************************************************/

let mySome = function (array, cb) {
  let flag = false
  array.forEach(function(ele, i){
    if(cb(ele, i) === true){
      flag = true
    }
  })
  return flag
};

// let result1 = mySome([5, 1, 7, 9], function(ele, i) {
//     return ele === i;
// });
// console.log(result1);   // true
// let result2 = mySome([5, 3, 7, 9], function(ele, i) {
//     return ele === i;
// });
// console.log(result2);   // false
// let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
//     return ele.length === 4;
// });
// console.log(result3);   // true


/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

make a plan
use rest operator to take in any number of callbacks


*******************************************************************************/

let chainMap = function(val, ...callbacks) {
  for(let i = 0; i < callbacks.length; i++){
    let cb = callbacks[i]
    val = cb(val)
  }
  // callbacks.forEach(function(cb){
  //   val = cb(val)
  // })
  return val
};

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

// console.log(chainMap(25, add5));                // 30
// console.log(chainMap(25, add5, half));          // 15
// console.log(chainMap(25, add5, half, square));  // 225
// console.log(chainMap(4, square, half));         // 8
// console.log(chainMap(4, half, square));         // 4

/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

create a count variable
iterate over our array
check if our element being passed to our callback is true
  increment our count

check if our count and our number are the same
  and return true if they are

  return false

*******************************************************************************/

let exactly = function(arr, num, cb) {
  let count = 0
  arr.forEach(function(ele){
    if(cb(ele) === true){
      count++
    }
  })
  // if(count === num){
  //   return true
  // }
  // return false
  return count === num
};

// let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
//     return n % 2 === 0;
// });
// console.log(result1); // true

// let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
//     return n % 2 === 0;
// });
// console.log(result2); // false

// let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
//     return str.includes('x');
// });
// console.log(result3); // false

// let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
//     return str.includes('x');
// });
// console.log(result4); // true

/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.
Examples:
let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer
let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function (sent, obj) {

};

// Map

// let suffixCipherWithMap = function (sent, obj) {

// };