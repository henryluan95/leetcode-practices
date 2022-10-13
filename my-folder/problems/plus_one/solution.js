/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
        let j = digits.length - 1
        // add one to the value at the last index
        digits[j] ++
         // use a while loop starting from the end, as long as the value is equal
        // to 10, replace with 0, add 1 to the next index, decrease j
        while(digits[j] === 10 && j > 0){
            digits[j] = 0
            digits[j - 1]++
            j--
        }
      
      if(digits[0] === 10){
        digits[0] = 1
        digits.push(0)
      }
        return digits
};
