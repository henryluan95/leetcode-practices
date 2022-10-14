/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let output = 0
    let currentValue = 0
    //use while loop, starting from 0. 
    //for each time, check the currentValue (output to the power of itself) if it's higher than the target. 
    //return output after it meet the condition
    while(currentValue < x){
        output++
        currentValue = output * output
    }
    
    //If the currentValue equals x, return ouput
    if(currentValue ===x ){
        return output
    }
    //If the currentValue higher than x, return output - 1
    if(currentValue > x){
        return output -1
    }
};