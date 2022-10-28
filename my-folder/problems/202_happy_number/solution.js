var isHappy = function (num) {
  const sumTracker = [];
  while (num !== 1) {
    if (sumTracker.includes(num)) return false;
    const tempNums = String(num)
      .split("")
      .map((n, index) => {
        return +n * +n;
      });
    sumTracker.push(num);
    num = tempNums.reduce((acc, cur) => acc + cur);
  }
  return true;
};
