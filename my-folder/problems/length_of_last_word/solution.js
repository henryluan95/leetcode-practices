/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //split by space
    const words = s.split(' ');
    //create new array
    const newArray = [];
    //only push in new array if it isn't ("")
    words.forEach(item => item !== "" && newArray.push(item))
    //return the length of the last item
    return newArray[newArray.length - 1].length
};