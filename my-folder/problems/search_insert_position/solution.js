/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //If the target exists outside of the nums range
    if(nums[0] > target){
      return 0
    }
  
    //If the target exists within the nums range
    //If the target exists in the array, return the index of the target
  if(nums.indexOf(target) !== -1){
    return nums.indexOf(target)
  }else{
    //If the target doesn't exist
    //Create a while loop to find the next available number, then return it
    while(nums.indexOf(target) === -1){
      target--
    }
    return nums.indexOf(target) + 1
  }
};