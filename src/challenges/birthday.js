let currentLine = 0;
const inputString = `5
1 2 1 3 2
3 2`;
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function birthday(s, d, m) {
  const n = s.length - m;
  let amount = 0;
  for (let i = 0; i <= n; i += 1) {
    const num = s.slice(i, i + m)
      .reduce((prev, current) => prev + current);
    if (num === d) {
      amount += 1;
    }
  }

  return amount;
}

function main() {
  const n = parseInt(readLine(), 10);
  console.log('birthday :: n ::', n);
  const s = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const firstMultipleInput = readLine()
    .split(' ');

  const d = parseInt(firstMultipleInput[0], 10);
  const m = parseInt(firstMultipleInput[1], 10);

  return birthday(s, d, m);
}

function mainBirthday() {
  console.log('birthday :: main :: invoked');
  const result = main();
  console.log('birthday :: main :: result ::', result);
  console.log('birthday :: main :: end');
}

module.exports = {
  birthday,
  mainBirthday,
};
