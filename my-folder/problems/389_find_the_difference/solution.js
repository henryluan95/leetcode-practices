/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  //If s is empty, return t
  if (s.length === 0) {
    return t;
  }

  //sort string s and t
  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();
  //loop through string t
  //if there is one character that doesn't match, return it
  for (let i = 0; i < sortedT.length; i++) {
    if (sortedT[i] !== sortedS[i]) {
      return sortedT[i];
    }
  }
};
