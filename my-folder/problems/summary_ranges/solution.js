/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    //Create a tracker array
    const trackerArray = []
    //Create a temp array
    let tempArray = []
    //Create an output array
    const outputArray = []
    //Iterate through the array of numbs
    for (let i = 0; i< nums.length; i ++){
    //For each number, push the current number into the temp array
        tempArray.push(nums[i])
    //Check if the next number equal current number + 1
    //If it isn't
        if(nums[i + 1] !== nums[i] + 1){
    //Push the temp array into the tracker array
            trackerArray.push(tempArray)
    //Reset the temp array
            tempArray = []
        }
    }
    //After the iteration, Iterate through the tracker array
    //return the output as required using the first and last item of each array
    for(let i = 0; i < trackerArray.length; i++){
        if(trackerArray[i].length === 1){
            outputArray.push(`${trackerArray[i]}`)
        }else{
        outputArray.push(`${trackerArray[i][0]}->${trackerArray[i][trackerArray[i].length - 1]}`)  
        }
    }
    return outputArray
};