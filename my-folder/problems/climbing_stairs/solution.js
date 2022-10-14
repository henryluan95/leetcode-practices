/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //Track first number
    let first = 0
    //Track current number
    let second = 1
    //Track temp to reassign head
    let temp = 0
    
    //Create a while loop to go through the sequence
    let i = 0
    while(i < n){
        //temp is the result of the current step
        temp = first + second
        //reassignments for the next step
        first = second
        second = temp
        //increase i to continue to loop
        i++
    }
    
    return temp
}; 

//1 = 1    
//2 = 2    
//3 = 3    
//4 = 5 
//5 = 8
//6 = 13

//Indication that this has a Fibonacci number pattern