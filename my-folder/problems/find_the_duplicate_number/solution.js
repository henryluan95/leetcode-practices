/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    //Create a map to track new/existing key/value.
    const map = new Map()
    
    for(let i = 0; i < nums.length; i++){
        if(!map.get(nums[i])) map.set(nums[i], 0)
        map.set(nums[i], map.get(nums[i]) + 1)
    } 
    //Loop through  map and return key that has value equal 2
    for(const [key,value] of map){
        if(value >= 2){
            return key
        }
    }
};