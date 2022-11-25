/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //Output Array
    const output = []
      //Check for number of zero
    const numberOfZero = nums.filter(num => num === 0).length
    //Check if all nums are 0
    if(numberOfZero > 1){
        nums.forEach(num => output.push(0))
        return output
    }
    
    //Find product of all
    const product = nums.reduce((cur,acc) =>  acc * cur, 1)
        nums.forEach(num =>{
        if(num !== 0){
           output.push(product / num) 
        } else{
        output.push(nums.filter(num => num !== 0).reduce((cur,acc) =>  acc * cur, 1))
        }
    })
    return output
};
