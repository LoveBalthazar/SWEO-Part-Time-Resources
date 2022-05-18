/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  //add debugger keyword
  debugger;
  let cutest;
  let cutestObj;
  let i = 0;

  while (i < cats.length) {
    const cat = cats[i];
    if (cat > cutest) {
      cutest = cat.cuteness;
    }
    i++;
  }

  return cutestObj;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }