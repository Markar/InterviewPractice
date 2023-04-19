/**
 * @param {number[]} nums
 * @return {number}
 */
 const nums = [4,1,2,1,2];
 
 var singleNumber = function(nums) {
     let map = new Map();
     
     for( let i = 0; i < nums.length; i++) {
         let cur = nums[i];
         if (map.has(cur)) {
             map.delete(cur);
         } else {
             map.set(cur, 1);
         }
     }        
     
     return [...map][0][0];    
 };
 
 singleNumber(nums);