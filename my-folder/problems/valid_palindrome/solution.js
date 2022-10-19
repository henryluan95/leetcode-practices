/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const letterArray = s.match(/[a-zA-Z0-9]/g)
    
    if(!letterArray) return true
    
    const cleanedUpString = letterArray.join("").toLowerCase()
    
    return cleanedUpString === letterArray.reverse().join("").toLowerCase()
    
};