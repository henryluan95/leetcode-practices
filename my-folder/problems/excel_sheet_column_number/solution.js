/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    //Create a letter - number matching object
    const letterArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const LETTEROBJECT = {}
    letterArray.forEach((letter, index) => {
        LETTEROBJECT[letter.toUpperCase()] = index + 1
    })
    
    //Split the columnTitle into an array
    const columnTitleArray = columnTitle.split("")
    
    //Create a sum variable
    let sum = 0
    //Create a distance variable from the current index to the end
    let distance = columnTitleArray.length - 1
    
    //If there is only one letter
    if(columnTitleArray.length === 1){
        return LETTEROBJECT[columnTitleArray[0]]
    }else{
        //We are using a base of 26 for our calculation
        //For example, base 10 ==> 250 = (2 * 10 * 10) + 5 * 10 + 0
        //We could follow the same logic to work with base of 26
        for (let i = 0; i <= columnTitleArray.length - 2; i++){
            sum += LETTEROBJECT[columnTitleArray[i]] * (26 ** distance)
            distance--
        }
        // return the sum of all previous letter + the value of the last letter
        return sum + LETTEROBJECT[columnTitleArray[columnTitleArray.length -1 ]]
    }
};