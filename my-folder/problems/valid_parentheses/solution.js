/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const flipBrackets = {
      "{": "}",
      "[": "]",
      "(": ")"
    }
    
    //Create an array to track all the current openning brackets
    const openingTrackers = []
    //Create a loop, if it's an openning bracket, push to the tracker array
    for (let item of s){
      if(flipBrackets[item]){
        openingTrackers.push(flipBrackets[item])
      } else{
        //If not, Check if the closing bracket matches with the last item of the array
         //If not return false
        if(item !== openingTrackers.pop()){
           return false
         }
      }
    }
  
  return openingTrackers.length === 0
};