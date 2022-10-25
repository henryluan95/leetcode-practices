/* 
take the str parameter and determine if exactly three unique, single-digit integers occur within each word in the string.

the integers can appear anywhere in the word, but cannot be adjacent to each other. 

if every word contains exactly 3 unique integers somewhere within it, then return the string true,

otherwise return false


 str = "21aa35a ggg4g4g6ggg g568rth" // false
 str1 = "2a3b5 w1o2rl3d g1gg92" // true

*/

const isValid = (string) => {
  //Split the string into an array or words
  const wordArray = string.split(" ");
  //create a word with Unique Number array to track it
  const wordWithUniqueNumber = [];
  //Loop through the array to find non-repeated numbers word
  //use regex to find all the number in each word
  wordArray.forEach((word) => {
    const wordWithNumberOnly = word.replace(/\D/g, "");
    //Split the word with numbers only into an array
    const numbersArray = wordWithNumberOnly.split("");
    //Create new set
    const numbersSet = [...new Set(numbersArray)];
    //Sum up the regular array and new set array to determind if they are unique
    const regularSum = numbersArray.reduce((a, b) => +a + +b, 0);
    const uniqueSum = numbersSet.reduce((a, b) => +a + +b, 0);
    //immidiately return false if it isn't unique
    if (regularSum !== uniqueSum) {
      return false;
    } else {
      wordWithUniqueNumber.push(word);
    }
  });
  //check if the numbers in the word is adjacent to each other or not
  //Create isValid variable
  let isValidTracker = false;
  wordWithUniqueNumber.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      console.log(word);
      if (
        isNaN(word[i]) === false &&
        isNaN(word[i + 1]) === false &&
        isNaN(word[i + 2]) === false
      ) {
        isValidTracker = false;
        return;
      } else {
        isValidTracker = true;
      }
    }
  });

  return isValidTracker;
};

console.log(isValid("2a3b5 w1o2rl3d g1gg92"));

/*
Given a collection of names where each name consists of one or more first / middle names followed by one last name all separated by spaces, sort them as specified below

names with last names with most repeated character appear last
 ex: moon appears after zhang because the count of character repeated the most in moon is 2 vs zhang with 1
 
 
 where the number of most repeated character is the same, they appear in alphabetical order of the last name
 ex: irmotti appears before moon
 
 where the last names are the same, the names appear in the alphabetical order of first name followed by middle name etc... in that order
 
 you can use any built in library functions and data structures to implement the sort

 */
