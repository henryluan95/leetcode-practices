/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

let result = 1
let i = 0
let j = 1
  while(j<nums.length){
    if(nums[i] === nums[j]){
      j++
    }else{
      i++
      nums[i] = nums[j]
      j++
      result++
    }
  }
  return result
};