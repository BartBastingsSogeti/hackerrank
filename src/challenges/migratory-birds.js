let currentLine = 0;
const inputString = `11
1 2 3 4 5 4 3 2 1 3 4`;
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function migratoryBirds(ar) {
  const count = {};
  ar.forEach((id) => {
    if (count[id]) {
      count[id] += 1;
      return;
    }
    count[id] = 1;
  });

  return Object.entries(count).reduce((prev, current) => {
    if (prev[1] >= current[1] && prev[0] < current[0]) {
      return prev;
    }
    return current;
  })[0];
}

function main() {
  const nTemp = parseInt(readLine(), 10);
  console.log('migratoryBirds :: nTemp ::', nTemp);

  const ar = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  return migratoryBirds(ar);
}

function mainMigratoryBirds() {
  console.log('Migratory Birds :: main :: invoked');
  const result = main();
  console.log('migratoryBirds :: main :: result ::', result);
  console.log('Migratory Birds :: main :: end');
}

module.exports = {
  migratoryBirds,
  mainMigratoryBirds,
};
