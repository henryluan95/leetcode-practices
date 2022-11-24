var topKFrequent = function (nums, k) {
  const map = new Map();

  //set up key pair values
  for (let num of nums) {
    if (!map.get(num)) map.set(num, 0);
    map.set(num, map.get(num) + 1);
  }

  //put all entries into an array
  const keyValuePairs = [...map.entries()];

  //sort the array
  const sortedKeyPair = keyValuePairs.sort((a, b) => a[1] - b[1]);

  //get the top required key pairs
  const requiredValue = sortedKeyPair.splice(-k);

  const output = [];

  //return the output
  for (let item of requiredValue) {
    output.push(item[0]);
  }

  return output;
};
