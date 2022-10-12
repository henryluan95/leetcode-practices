var removeElement = function(nums, val) {
    //Create trackers i and j. i is used to track current head. j is used to track current iteration. Both j and i start at 0
    let i = 0; let j =0; counter = 0
    //Loop through the array
    while(j < nums.length){
    //if the value at current index j equal val, increase j by 1
      if(nums[j] === val){
        j++
      }else{
    //if the value at current index j doesn't equal val, asign that value to index i of the array, increase i and increase j
        nums[i] = nums[j]
        i++
        j++
        counter++
      }
    }
    return counter
};