var missingNumber = function (nums) {
  //find the highest number in nums
  const highestNumber = Math.max(...nums);
  //Check if the missing number is included in nums
  //If not, return the length as highest + missing number
  if (nums.length > highestNumber) {
    return nums.length;
  }

  //If it already included
  //find the sum of 0 to the highest number in nums
  let sumOfNoMissingNumber = 0;
  for (let i = 0; i <= highestNumber; i++) {
    sumOfNoMissingNumber += i;
  }
  //find the sum of all numbers in sum
  const sumOfMissingNumber = nums.reduce((acc, cur) => cur + acc, 0);
  //return the difference
  return sumOfNoMissingNumber - sumOfMissingNumber;
};
