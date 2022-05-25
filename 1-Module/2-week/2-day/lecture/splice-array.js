console.log("-----------------------------------------------------------------------");
console.log("---------------------------Splice Array Demo---------------------------");
console.log("-----------------------------------------------------------------------");

// Important to remember, array.Splice() DOES MUTATE the original array.
// first argument is the target index (starting index), second argument is how many elements to remove.
let colors = ["red", "yellow", "blue", "green", "orange", "brown", "gray"];
console.log('before the splice', colors)
// let removedElements = colors.splice(1, 2);
// console.log(removedElements);

colors.splice(4, 2, 'purple', 'pink');
console.log('after the splice', colors)


// If you set it to a variable, it will return the item(s) that were removed.



// any additional arguments are elements to add to the array. Can add as many as you'd like.



