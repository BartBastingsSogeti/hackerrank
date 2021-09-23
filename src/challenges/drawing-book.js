// Drawing Book
let currentLine = 0;
const inputString = `1
4`;
const inputArray = inputString.split('\n');

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function drawingBook(n, p) {
  let count = 0;
  let countTwo = 0;
  let page = 1;
  while (page < p) {
    count += 1;
    page += 2;
  }

  if (n % 2 !== 0) {
    page = n - 1;
  } else {
    page = n;
  }

  while (page > p) {
    countTwo += 1;
    page -= 2;
  }

  return count < countTwo ? count : countTwo;
}

function main() {
  const n = parseInt(readLine(), 10);
  const p = parseInt(readLine().trim(), 10);

  return drawingBook(n, p);
}

function mainDrawingBook() {
  console.log('Drawing Book :: main :: invoked');
  const result = main();
  console.log('drawingBook :: main :: result ::', result);
  console.log('Drawing Book :: main :: end');
}

module.exports = {
  drawingBook,
  mainDrawingBook,
};
