var isPowerOfTwo = function (n) {
  //Check case where n equal 1
  if (n === 1) {
    return true;
  }

  //If n isn't an even number, return false
  if (n % 2 !== 0) {
    return false;
  }

  //abs value of number is higher than 1, keep divide it by 2
  //return true if it's equal 1
  while (n >= 1) {
    if (n === 1) {
      return true;
    }
    n = n / 2;
  }

  return false;
};
