/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    //Create a while loop with the condition of num.length is higher than 1
    while(String(num).length > 1){
    //In the loop, String the number, split the number, Num the individual number and add it together
     const numArray = String(num).split("").map(num => Number(num))
     num = numArray.reduce((acc,cur) => acc + cur, 0)   
    }
    return num
};