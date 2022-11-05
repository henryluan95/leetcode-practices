/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    //check if n < 0, return false immediately
    if( n < 1) return false
    //if not, continuously devide n by 2, 3 and 5
    while(n % 2 === 0) { n /= 2}
    while(n % 3 === 0) { n /= 3}
    while(n % 5 === 0) { n /= 5}
    // return true if n equal 1 eventually
    // return false if it isn't
    return n === 1
};