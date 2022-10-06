/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
 //if the input array only has 1 letter, return it
  if(strs.length === 1){
    return strs[0]
  }
  
  
  // Create a function to find the shortest word
  const findShortestWord = (arrayOfwords) =>{
    let shortestWord = arrayOfwords[0]
    for (let letter of arrayOfwords){
      if(letter.length < shortestWord.length){
        shortestWord = letter
      }
    }
    return shortestWord
  }
  
  
    //track current prefix
    let prefix = ""
    //Using the length of the shortest word minus 1 to know check for the longest posible prefix
    for (let i = 1; i <= findShortestWord(strs).length; i++){
      // Track current prefix
      let currentPrefix = strs[0].slice(0,i)
      // Loop through the input array to matches prefix
      for (let j = 0; j < strs.length; j++){
      // if one doesn't, return the prefix
        // console.log(strs[j])
        // console.log(currentPrefix)
        // console.log(strs[j].includes(currentPrefix))
        if(strs[j].slice(0,i) !== currentPrefix){
          return prefix
        }
      }
       //If all does, change prefix
        prefix = currentPrefix
    }
    
   return prefix
};