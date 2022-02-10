const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

// const aShortestPath = (start, end) => {
//   let queue = [[start]];
//   let visited = new Set().add(start);

//   while(queue.length){
//     // console.log(queue);
//     let curpath = queue.shift();
//     let lastNode = curpath[curpath.length - 1];

//     if(lastNode === end) return curpath;

//     adjList[lastNode].forEach(el => {
//       if(!visited.has(el)){
//         visited.add(el);
//         queue.push([...curpath, el]);
//       }
//     })
//   }
//   return false;
// }

// console.log("First Test:");
// console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false


const degreesOfSeparation = (start, end) => {
  let queue = [[start]];
  let visited = new Set().add(start);

  while(queue.length){
    // console.log(queue);
    let curpath = queue.shift();
    let lastNode = curpath[curpath.length - 1];

    if(lastNode === end) return curpath.length - 1;

    adjList[lastNode].forEach(el => {
      if(!visited.has(el)){
        visited.add(el);
        queue.push([...curpath, el]);
      }
    })
  }
  return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
