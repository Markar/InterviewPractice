import React, { useState, useEffect } from 'react';
// Return sum of all numbers in a given range (prefix sum)

export function PrefixSum(props) {
  const input = [10, 20, 10, 5, 15];
 //Output : prefixSum[] = {10, 30, 40, 45, 60}  

  const [result, setResult] = useState();

  function getPrefixSum(arr) {    
    let result = [];    
    let runningTotal = 0;

    for (let i = 0; i < arr.length; i++) {
      runningTotal += arr[i];      
      result.push(runningTotal);
    }

    return result;
  }

  useEffect(() => {
    setResult(getPrefixSum(input));
  }, []);

  return (
    <div>
      <h3>Prefix Sum for {input.toString()}</h3>
      <div>
        Result: {result ? result.toString() : null}
      </div>
    </div>
  );
}