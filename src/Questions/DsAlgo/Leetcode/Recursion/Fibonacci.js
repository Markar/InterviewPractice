// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// F(5) = F(4) + F(3) =

// 1 1 2 3 5 8

// Using array, wrap function
const fib = (n) => {
  let map = [1, 2];

  console.log("fib call");

  function fibMap(map, n) {
    if (n < 2) {
      return;
    } else {
      for (let i = 3; i < n; i++) {
        map.push(i - 1 + i - 2);
      }
      return map;
    }
  }
  console.log("map 1", fibMap(map, n));

  res = fibMap(map, n);
  return res[n];
};

let val = fib(5);
console.log("val", val);

// Using map
let map = new Map();
map.set(1, 1);
map.set(2, 2);
function fibMap(n) {
  if (n < 2) {
    return;
  } else {
    for (let i = 3; i < n; i++) {
      map.set(i, map.get(i - 1) + map.get(i - 2));
      console.log("get", map.get(i));
    }
  }
  return map.get(n-1);
}

let mapRes = fibMap(10);
console.log("map", [...map]);
console.log('res', mapRes);

let res = 0;
function fib(n) {
  if (n <= 1) return n;
  console.log(" test", fib(n - 1, fib(n - 2), fib(n - 1) + fib(n - 2)));
  return fib(n - 1) + fib(n - 2);
}

let x = fib(10);
console.log("res", x);


// using for loop
var fib = function(n) {
  let result = [0, 1, 2];
  if (n === 0)
  	return 0;
  if (n === 1)
  	return 1;
  if (n === 2)
  	return 1;

  function calc(n) {
    for (let i = 3; i < n; i++) {
      let val = result[i - 1] + result[i - 2];      
      console.log('val', val, i);
      result.push(val);
    }
    
    return result[n-1];
  }

  return calc(n);
}