// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).

let A = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
function findOdd(A) {
  // For each unique number in the array
  for (let i = 0; i < A.length; i++) {
    let currentNum = A[i];
    let count = 0; // Count how many times currentNum appears
    for (let j = 0; j < A.length; j++) {
      if (A[j] === currentNum) {
        count++;
      }
    } // If count is odd, return this number
    if (count % 2 === 1) {
      return currentNum;
    }
  }
}

console.log(findOdd(A));

// 1. So what we are doing is adding the occurrence of the number and storing the occurrence in the variable count?

// 2. Then you use the remainder % to find any occurrence that has 1, then return the value of that occurrence (value if the respective key)?
