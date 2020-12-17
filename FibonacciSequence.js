// Return an array with the the first n numbers in the
// fibonacci sequence.
// Big O(n)
const fibonacciSequenceUpTo = (n) => {
  // declare empty array
  let result = [];
  // return the empty array if n is zero
  if (n === 0 ) {
    return result;
  }
  result[0] = 0;
  // if n is 1, return [0]
  if (n === 1) {
    return result;
  }
  // add the 1 as the second index,
  result[1] = 1
  // return [0, 1] if n = 2
  if (n === 2) {
    return result;
  }
  // for n = 2 and up loop up with n = (n-1) + (n-2)
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}
console.log(fibonacciSequenceUpTo(10));
// [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
