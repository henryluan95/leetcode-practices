/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    //Loop nums1.length - 1 time 
    for (let i = nums1.length -1; i >= 0; i --){
    //Check if m -1 are higher or equal  0
    //Check the if the value at m - 1 is higher than n -1, bring it to the end of the array, reduce m
        if(m -1 >= 0 && nums1[m-1] >= nums2[n-1]){
            nums1[i] = nums1[m-1]
            m--                  
        } 
    //if not, as long as n is still positive, replace the value at i with the current n -1 position, reduce n    
        else if (n-1 >= 0){
            nums1[i] = nums2[n-1]
            n--
        }
    }
}