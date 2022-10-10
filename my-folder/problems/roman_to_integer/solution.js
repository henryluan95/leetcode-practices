/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const cases = {
  "I":             1,
"V":             5,
"X"  :           10,
"L"   :          50,
"C"   :          100,
"D"  :           500,
"M"   :          1000
}
  
    //Create a sum tracker
    let total = 0
    //Loop through the string to compare
    for ( let i = 0; i < s.length; i++){
      //Check the current character and add the value to the tracker
      if(s[i] === "I"){
        if(s[i+1] === "V"){
          total += 4
          i++
          continue
        } else if (s[i+1] === "X"){
          total += 9
          i++
          continue
        } else{
        total += cases[s[i]]
      }
      }
      
      //Check the current character and add the value to the tracker
      if(s[i] === "X"){
        if(s[i+1] === "L"){
          total += 40
          i++
          continue
        } else if (s[i+1] === "C"){
          total += 90
          i++
          continue
        } else{
        total += cases[s[i]]
      }}
         //Check the current character and add the value to the tracker
      if(s[i] === "C"){
        if(s[i+1] === "D"){
          total += 400
          i++
          continue
        } else if (s[i+1] === "M"){
          total += 900
          i++
          continue
        } else{
        total += cases[s[i]]
      }
      }
    
      //if not the above cases
      if(s[i] !== "I" && s[i] !== "X" && s[i] !== "C"){
      total += cases[s[i]]
      }
      
    }
    //If the current character = I
    //Check the next character to see if it's V or X
    //If V add 5, if X add 10, then skill 1 character
    //Same for the other two
  return total
    // return tracker
};