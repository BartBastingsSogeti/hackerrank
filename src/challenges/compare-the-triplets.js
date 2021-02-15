let currentLine = 0;
const inputString = `5 6 7
3 6 10`;
const inputArray = inputString.split('\n');

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function compareTriplets(a, b) {
  const arr = [0, 0];
  a.forEach((item, index) => {
    if (item > b[index]) {
      arr[0] += 1;
    } else if (item < b[index]) {
      arr[1] += 1;
    }
  });
  return arr;
}

function main() {
  const lineOne = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));
  console.log('compareTriplets :: lineOne ::', lineOne);
  const lineTwo = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((bTemp) => parseInt(bTemp, 10));
  console.log('compareTriplets :: lineOne ::', lineTwo);

  return compareTriplets(lineOne, lineTwo);
}

function mainCompareTheTriplets() {
  console.log('Compare the Triplets :: main :: invoked');
  const result = main();
  console.log('mainCompareTheTriplets :: main :: result ::', result);
  console.log('Compare the Triplets :: main :: end');
}

module.exports = {
  compareTriplets,
  mainCompareTheTriplets,
};
