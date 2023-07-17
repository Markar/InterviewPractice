/* Problem Statement: There is a new barn with N stalls and C cows. The stalls are located on a straight line at positions x1,….,xN (0 <= xi <= 1,000,100,000). We want to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance? */

/* Input: No of stalls = 5 
Array: {1,2,8,4,9}
And number of cows: 3 */

function solve(stalls, arr, cowsx) {
  let cows = cowsx;
  let minDistance = 1;
  let solved = false;

  for (let j = 0; j < 2; j++) {
    console.log("0 min distance", minDistance);
    for (let i = 0; i < arr.length; i += 1 + minDistance) {
      cows--;
      console.log("iterator", (i += minDistance));
    }

    if (cows < 0) {
      console.log(`-1 cows less than 0 ${cows}`);
      console.log("1 min distance", minDistance);
      minDistance = +1;
      cows = cowsx;
    } else if (cows > 0) {
      minDistance -= 1;
      cows = cowsx;
      console.log("2 min distance", minDistance);
    } else {
      console.log(
        "=0solved with ",
        cows,
        "cows",
        "in min distance ",
        minDistance
      );
      solved = true;
      return minDistance;
    }
  }
}

let res = solve(5, [1, 2, 8, 4, 9], 3);
console.log("res", res);
