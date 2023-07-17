/* Input: nums1 = [1,3], nums2 = [2]

Output: 2.00000

Explanation: merged array = [1,2,3] and median is 2. */

var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [...nums1, ...nums2];
  let res = 0;
  let middle = nums.length / 2;

  nums = nums.sort();
  console.log("nums", nums);

  if (nums.length % 2 === 0) {
    console.log("test", nums, nums[middle], nums[middle - 1]);
    res = nums[middle] + nums[middle - 1];
    res = res / 2;
    console.log("res", res);
  } else {
    let mid = Math.floor(middle);
    res = nums[mid];
    return res;
  }

  return res;
};

let nums1 = [3];
let nums2 = [-2, -1];

// [-1, -2, 3]

let res = findMedianSortedArrays(nums1, nums2);
console.log("res", res);
