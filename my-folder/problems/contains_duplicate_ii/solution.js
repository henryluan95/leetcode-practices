/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    //Create a map
    const map = new Map()
    //Use map to track new key-value pair ( key: value of num , value: index of num)
    for (let i =0 ; i< nums.length; i++){
    //If map has a repeated key
    //Check if the absolute value of the subtraction between current iteration idex and key value 
     if(map.has(nums[i]) && Math.abs(i - map.get(nums[i])) <= k){
        return true
     }   
    //If map doesn't have the key, add it Or if the current two distinct indices don't match the requirements, reset j
    else{
        map.set(nums[i], i)
    }
    }
    //return false at the end
    return false
};