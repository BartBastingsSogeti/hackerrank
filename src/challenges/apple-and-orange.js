let currentLine = 0;
const inputString = `7 11
5 15
3 2
-2 2 1
5 -6`;

const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const numberOfApples = apples
    .map((apple) => a + apple)
    .filter((apple) => apple >= s && apple <= t)
    .length;
  const numberOfOranges = oranges
    .map((orange) => b + orange)
    .filter((orange) => orange >= s && orange <= t)
    .length;

  return `${numberOfApples}\n${numberOfOranges}`;
}

function main() {
  const st = readLine().split(' ');
  const s = parseInt(st[0], 10);
  const t = parseInt(st[1], 10);
  const ab = readLine().split(' ');
  const a = parseInt(ab[0], 10);
  const b = parseInt(ab[1], 10);
  const mn = readLine().split(' ');
  const m = parseInt(mn[0], 10);
  console.log('countApplesAndOranges :: m :: amount of apples', m);
  const n = parseInt(mn[1], 10);
  console.log('countApplesAndOranges :: n :: amount of oranges', n);
  const apples = readLine().split(' ').map((applesTemp) => parseInt(applesTemp, 10));
  const oranges = readLine().split(' ').map((orangesTemp) => parseInt(orangesTemp, 10));

  return countApplesAndOranges(s, t, a, b, apples, oranges);
}

function mainCountApplesAndOranges() {
  console.log('Apple and Orange :: main :: invoked');
  const result = main();
  console.log('countApplesAndOranges :: main :: result ::', result);
  console.log('Apple and Orange :: main :: end');
}

module.exports = {
  countApplesAndOranges,
  mainCountApplesAndOranges,
};
