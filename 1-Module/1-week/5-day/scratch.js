// what is Function Expression Declaration?


let greet = function (name) {
    console.log("Hello, " + name);
  };

  greet("andres");

 let nums = function (num1, num2) {
    return num1 + num2;
 }

 console.log(nums(2, 6))



//What is Mutability?



let arr1 = [1, 2, 3];

arr1[0] = 5;

console.log(arr1);



// // Pop Removes the last element from an array.

let colors = ['red', 'green', 'blue', 'yellow'];

// Remove the last color from the array
let removedColor = colors.pop();

console.log('Updated array:', colors);



let fruits = ['apple', 'banana'];

// Add a new fruit to the end of the array
fruits.push('orange');

console.log('Updated array:', fruits);

// let color = ['red', 'green', 'blue', 'yellow'];

// // Remove the first color from the array
// let removed = color.shift();


// console.log('Updated array:', color);


//Nested loops


// let arr3 = [1, 2, 3, 4];

// for(let i = 0; i < arr3.length; i++) {
    //console.log("------",i)
//     for(let j = i + 1; j < arr3.length; j++) {
//         console.log(j);

//     }

// };


// Pairs in loops
// Sample array
const pairs = ['a', 'b', 'c', 'd', 'e'];

// Nested loops to generate pairs
for (let i = 0; i < pairs.length; i++) {
    for (let j = 0; j < pairs.length; j++) {
        console.log(i, j)
    }
}




//Unique Pairs using nested loops


//const elements = ['a', 'b', 'c', 'd', 'e'];

// Nested loops to generate pairs
// for (let i = 0; i < elements.length; i++) {
//     for (let j = i + 1; j < elements.length; j++) {
//         console.log(elements[i], elements[j]);
//     }
// }


// What is a multidimensional array?



let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

console.log(twoDimensional[0]); // [ 'd', 'e' ]
console.log(twoDimensional[1]);


// What is a 2D array?



//1 grid is a 2D array with 3 rows and 3 columns.
//2 Each row of the grid is represented by an inner array.
//3 Elements are accessed using two indices: grid[rowIndex][columnIndex].

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(grid[1][1])
console.log(grid[0][0])






// Where can we see 2D arrays used in programming?

// Board Games:
// tic tac tow
// chess
