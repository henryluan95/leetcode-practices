var switchCases = (string) => {
  //replace space by #
  const text = string.replace(/\s/g, "#");
  const stringArray = text.split("");
  //Upper Lower tracker
  let tracker = "upper";

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "#") {
      continue;
    }

    if (tracker === "upper") {
      stringArray[i] = stringArray[i].toUpperCase();
      tracker = "lower";
    } else {
      stringArray[i] = stringArray[i].toLowerCase();
      tracker = "upper";
    }
  }

  return stringArray.reduce((a, b) => a + b).replace(/#/g, " ");
};
console.log(switchCases("Hell   o World"));
