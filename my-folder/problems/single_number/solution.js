/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //Create a total sum
  let total = 0;
  let uniqueTotal = 0;
  //Create an array to track unique numbers
  const uniqueNumbersArray = [];
  //loop through the numbers array
  for (let number of nums) {
    //sum all the numbers
    total += number;
    //sum all the numbers that doesn't repeat
    if (uniqueNumbersArray.indexOf(number) === -1) {
      uniqueNumbersArray.push(number);
      uniqueTotal += number;
    }
  }
  //Find sum of repeat numbers
  const sumOfRepeatedNumber = total - uniqueTotal;

  // return sum unique numbers minus sum all repeated numbers
  return uniqueTotal - sumOfRepeatedNumber;
};
