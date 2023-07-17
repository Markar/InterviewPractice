/* Problem Statement: There is a new barn with N stalls and C cows. The stalls are located on a straight line at positions x1,….,xN (0 <= xi <= 1,000,100,000). We want to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance? */

/* Input: No of stalls = 5 
Array: {1,2,8,4,9}
And number of cows: 3 */

//[1,2,4,8,9]
// 1, 2, 4, 1
function solve(stalls, array, cowsx) {
  let arr = array.sort();
  let cows = cowsx - 1;
  let minDistance = 1;
  let solved = false;

  while (!solved) {
    for (let i = 1; i < stalls; i++) {
      let distance = arr[i] - arr[i - 1];
      console.log("d", distance, arr[i]);

      if (distance > minDistance) {
        cows--;
      }

      if (cows < 0) {
        cows = cowsx;
        return;
      } else {
        solved = true;
      }
      console.log("cows", cows);
    }
  }
}

let res = solve(5, [1, 2, 8, 4, 9], 3);
console.log("res", res);
