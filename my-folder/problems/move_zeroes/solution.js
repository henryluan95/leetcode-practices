/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointer = 0;
    //Loop through the array
    for(let i = 0; i < nums.length; i++){
        //if the value of current index isn't 0, we swap, than increase pointer by 1
        if(nums[i] !== 0){
          [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
          pointer++
        }
    }
};