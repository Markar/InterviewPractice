
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// F(5) = F(4) + F(3) = 

// 1 1 2 3 5 8 
let res = 0;
function fib(n) {
  if (n <= 1)
      return n;
  return fib(n-1) + fib(n-2);
}

let x = fib(10);
console.log('res', x);