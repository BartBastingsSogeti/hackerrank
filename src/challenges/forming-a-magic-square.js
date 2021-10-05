const { setup, validate, response } = require('../utils/setup');

const title = 'Forming a Magic Square';
const inputString = `4 9 2
3 5 7
8 1 5`;
const validateResult = 1;

const formingMagicSquare = (s) => {
  const result = [];
  const allPossibilities = [
    [
      [8, 1, 6], [3, 5, 7], [4, 9, 2],
    ],
    [
      [6, 1, 8], [7, 5, 3], [2, 9, 4],
    ],
    [
      [4, 9, 2], [3, 5, 7], [8, 1, 6],
    ],
    [
      [2, 9, 4], [7, 5, 3], [6, 1, 8],
    ],
    [
      [8, 3, 4], [1, 5, 9], [6, 7, 2],
    ],
    [
      [4, 3, 8], [9, 5, 1], [2, 7, 6],
    ],
    [
      [6, 7, 2], [1, 5, 9], [8, 3, 4],
    ],
    [
      [2, 7, 6], [9, 5, 1], [4, 3, 8],
    ],
  ];

  for (let x = 0; x < 8; x += 1) {
    const possibility = allPossibilities[x];
    let sum = 0;

    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        sum += Math.abs(possibility[i][j] - s[i][j]);
      }
    }

    result.push(sum);
  }

  return Math.min(...result);
};

const main = () => {
  const inputArr = setup(inputString);
  const s = inputArr.map((row) => row.split(' ')
    .map((item) => parseInt(item, 10)));

  const resultFormingMagicSquare = formingMagicSquare(s);

  return validate(resultFormingMagicSquare, validateResult, inputString);
};

const mainFormingMagicSquare = () => {
  response(title, main);
};

module.exports = {
  formingMagicSquare,
  mainFormingMagicSquare,
};
