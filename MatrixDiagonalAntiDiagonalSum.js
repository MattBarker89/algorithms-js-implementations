let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

let left = 0;
let right = 0;

for (let i = 0; i < arr.length; i++){
  left += arr[i][i];
  right += arr[i][arr.length - i - 1];
}

console.log(`Left:${left} Right:${right}`);