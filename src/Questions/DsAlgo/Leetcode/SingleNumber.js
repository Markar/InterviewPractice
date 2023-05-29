
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [4, 1, 2, 1, 2];

const singleNumberSet = function(nums) {
  let set = new Set();

  nums.map(num => {
    if (!set.has(num)) {
      set.add(num)
    } else {
      set.delete(num)
    }
  })

  return Array.from(set)[0];
};

let setResult = singleNumberSet(nums);
console.log('set result: ', setResult);
