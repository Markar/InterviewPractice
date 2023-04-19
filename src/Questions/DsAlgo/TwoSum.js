import React from 'react';
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// input: array of numbers, unordered, find all pairs that add up to a given numbers, all numbers are unique
// input = [9, 2, 42, 4, -1, 6]
// sum = 8
// output =[ [9, -1], [2, 6] ]
  
export function TwoSum(props) {    
    const nums = [2,7,11,15,9,0]; // target 9
    const nums2 = [3,2,4];    // target 6
    const nums3 = [9, 2, 42, 4, -1, 6]; // target 8
    
    function twoSum(nums, target) {
      let result = [];
      let map = new Map();

      for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        
        if (map.has(target-cur)) {          
          result.push([cur, target-cur]);
        } else {
          map.set(cur, cur);
        }
      }
      
      return result.toString();
    }

    function twoSumIndices(nums, target) {
      let result = [];
      let map = new Map();

      for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];

        if (map.has(target-cur)) {
          result.push([map.get(target-cur), i ]);
        } else {
          map.set(cur, i);
        }
      }

      console.log('result', result);
      return result.toString();
    }

    return (
        <div>
            <h3>Two Sum:</h3>
            <div>
              {twoSum(nums3, 8)}
            </div>
        </div>    
    );
}