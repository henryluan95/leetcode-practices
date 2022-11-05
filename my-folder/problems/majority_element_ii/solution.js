/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  //Create a map
  const map = new Map();
  //find n/3
  const target = nums.length / 3;
  //Create a tracker array
  const trackerArray = [];  
  //Loop through the array to track all number
  for (const number of nums) {
    if (!map.get(number)) map.set(number, 0);
    map.set(number, map.get(number) + 1);
  }
  //Loop through map and return the key that has its value higher than n/2
  for (const [key, value] of map) {
    if (value > target) {
      trackerArray.push(key)
    }
  }
    
return trackerArray
};