class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//this is a queue (enqueue and dequeue)
class LinkedList {
  constructor() {
    // Default to empty
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const returnValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return returnValue;
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

/*
Above is the given linked list based queue; it should not be modified
Below is the NumSorter class that is to be refactored
*/

//numList = [] //the number we push into this list if 10 is an considered an allowedNumber.

//allowedNum = [] // checks to see if the number that is being passed in, is included in allowedNum datatype.

//given the number 10. if it's included in allowedNums, then add it to numList.


class NumSorter {
  constructor() {
    //both are using arrays
    this.numList = new LinkedList(); //ordered list of numbers. We cannot use set because set is consired UNORDERED, we should avoid using it.

    // this.allowedNums = []; //collection of allowed numbers //allowedNums should not have any duplicates.
    this.allowedNums = new Set(); 
  }

  /*
  Add a number to the list of allowed numbers
  Should not have any duplicates in allowedNums
  */
  addAllowedNum(num) {
    //if it doesn't include the number, add it to the allowedNums datatype.
    //O(n) search time for the number. //
    // if (!this.allowedNums.includes(num)) {
    //   this.allowedNums.push(num); //push could be O(n) in the case where we are resizing, but in most cases O(1)
    //   return `${num} added to allowedNums`;
    // } else {
    //   return `${num} already in allowedNums`;
    // }

    //Maybe using a set for allowedNums might be better since it has a search time of O(1) using the .has method, whereas .includes from array has a O(n) search time.

    //O(1) on average
    if (!this.allowedNums.has(num)) {
      this.allowedNums.add(num); 
      return `${num} added to allowedNums`;
    } else {
      return `${num} already in allowedNums`;
    }
  }

  /* Returns true if the number is allowed, false otherwise */
  isNumAllowed(num) {
    // return this.allowedNums.includes(num); //O(n)
    
    //using set is better for searching for num. O(1) on average.
    return this.allowedNums.has(num); //O(1) on avereage
  }

  /*
  Add a new number to the back of the numList
  Returns value at the back of numList
  */
  addNumToBack(num) {
    //if `num` exists in `allowedNums` then add it to `numList`
    // if (this.isNumAllowed(num)) this.numList.push(num); //"O(1)" average to push an element to the end of an array.
    // return this.numList[this.numList.length - 1];


    if (this.isNumAllowed(num)){
      this.numList.enqueue(num); //o(1)  using enqueue
    } 
    //return the last element of our datatype
    return this.numList.tail.value
  }

  /*
  Remove and return the first number in the numList
  If numList is empty, return undefined
  */
  getFirstNum() {
    //take the front element and remove it.
    //since we are using shift, this whole function is O(n)
    // if (this.numList.length > 0) {
    //   return this.numList.shift(); 
    // } else {
    //   return undefined;
    // }

    //we know that we need a structure that can add to the back and remove the front. Is there a structure that allows us to have a O(1) removal of the first element?
    //a queue using a link list implementation can have a removeHead (similar to shift()) and this has a O(1) time complexity.
    if (this.numList.length > 0) {
      return this.numList.dequeue(); 
    } else {
      return undefined;
    }
  }

  /* Returns the count of nums in numList */
  numCount() {
    //O(n) time complexity... fairly slow to just get the length.
    // let count = 0; 
    // while (this.numList[count] !== undefined) {
    //   count++;
    // }

    // return count;


    return this.numList.length;
  }

  /*
  Resets numList, builds a numlist of integers from 0 to amount
  Only include allowed numbers; returns amount of nums in numList
  */
  buildNumList(amount) {
    this.numList = new LinkedList(); //creates a new numList

    //from 0 to amount, add it to our new numList above.
    for (let i = 0; i <= amount; i++) {
      if (this.allowedNums.has(i)) {
        this.numList.enqueue(i);
      }
    }

    return this.numCount();
  }
}

/* Comment in code below to run local test */
// const newNumSort = new NumSorter(3);
// console.log(newNumSort.addAllowedNum(0));   // '0 added to allowedNums'
// console.log(newNumSort.addAllowedNum(1));   // '1 added to allowedNums'
// console.log(newNumSort.addAllowedNum(1));   // '1 already in allowedNums'
// console.log(newNumSort.addAllowedNum(2));   // '2 added to allowedNums'

// console.log(newNumSort.isNumAllowed(1));    // true
// console.log(newNumSort.isNumAllowed(5));    // false

// console.log(newNumSort.addNumToBack(1));    // 1
// console.log(newNumSort.addNumToBack(2));    // 2
// console.log(newNumSort.addNumToBack(5));    // 2

// console.log(newNumSort.getFirstNum());      // 1
// console.log(newNumSort.getFirstNum());      // 2
// console.log(newNumSort.getFirstNum());      // undefined

// console.log(newNumSort.numCount());         // 0

// console.log(newNumSort.buildNumList(5));    // 3

// console.log(newNumSort.numCount());         // 3

module.exports = { NumSorter, LinkedList };