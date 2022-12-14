/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   const substringWithoutRepeat = (startIndex, endIndex, string) => {
    let substring = "";
    let uniqueChars = {};

    for (let i = startIndex; i < endIndex; i++) {
        if (uniqueChars[string[i]]) break;
        uniqueChars[string[i]] = true;
        substring += string[i];
    }

    return substring;
};

const longestSubstring = (string) => {
    let longestSubstring = "";

    for (let i = 0; i < string.length; i++) {
        const foundSubstring = substringWithoutRepeat(i, string.length, string);

        if (foundSubstring.length > longestSubstring.length) {
            longestSubstring = foundSubstring;
        }
    }

    return longestSubstring.length;
};
    return longestSubstring(s)
};