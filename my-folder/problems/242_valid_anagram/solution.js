/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sCount = {};
  const tCount = {};

  for (let i = 0; i < s.length; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 1;
    if (!tCount[t[i]]) tCount[t[i]] = 1;
    sCount[s[i]]++;
    tCount[t[i]]++;
  }

  for (const item in sCount) {
    if (sCount[item] !== tCount[item]) {
      return false;
    }
  }
  return true;
};
