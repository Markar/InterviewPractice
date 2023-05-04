/**
 * @param {number[]} nums
 * @return {number}
 */
 const nums = [4,1,2,1,2];

 const singleNumberSet = function(nums) {
   let set = new Set();

   for (let i = 0; i < nums.length; i++) {
     console.log('num', nums[i]);
     set.add(nums[i]);
   }

   return Array.from(set);
 };

 let setResult = singleNumberSet(nums);
 console.log('set result: ', setResult);
 
 const nums2 = [4, 1, 2, 1, 2];

 const singleNumberMap = function(nums) {
   let map = new Map();

   for (let i = 0; i < nums.length; i++) {
     let cur = nums[i];
     if (!map.has(cur)) {
     	map.set(cur, 1);     
     }     
   }

   return [...map.keys()];
 };

 let mapResult = singleNumberMap(nums2);
 console.log('map result: ', mapResult);
