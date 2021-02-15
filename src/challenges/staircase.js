let currentLine = 0;
const inputString = '6';
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function staircase(n) {
  const whiteSpace = '\x20';
  const symbol = '\x23';
  let str = '';
  for (let i = 1; i <= n; i += 1) {
    str += `${whiteSpace.repeat(n - i)}${symbol.repeat(i)}\n`;
  }
  return str;
}

function main() {
  const n = parseInt(readLine(), 10);
  console.log('staircase :: n ::', n);

  return staircase(n);
}

function mainStaircase() {
  console.log('Staircase :: main :: invoked');
  const result = main();
  console.log('Staircase :: main :: result ::', result);
  console.log('Staircase :: main :: end');
}

module.exports = {
  staircase,
  mainStaircase,
};
