const { setup, validate, response } = require('../utils/setup');

const title = 'Picking Numbers';
const inputString = `73
4 2 3 4 4 9 98 98 3 3 3 4 2 98 1 98 98 1 1 4 98 2 98 3 9 9 3 1 4 1 98 9 9 2 9 4 2 2 9 98 4 98 1 3 4 9 1 98 98 4 2 3 98 98 1 99 9 98 98 3 98 98 4 98 2 98 4 2 1 1 9 2 4`;
const validateResult = 22;

const pickingNumbers = (a) => {
  const countArr = [];
  for (let i = 0; i < a.length; i += 1) {
    const tempArr = a.filter((item, index) => index !== i);

    let dif = 0;
    const count = tempArr.reduce((prev, current) => {
      let tempPrev = prev;

      if (dif === 0 && Math.abs(a[i] - current) <= 1) {
        dif = current;
      }

      if (current === dif || current === a[i]) {
        tempPrev += 1;
      }

      return tempPrev;
    }, 1);

    countArr.push(count);
  }

  return Math.max(...countArr);
};

const main = () => {
  const inputArr = setup(inputString);
  const a = inputArr[1]
    .replace(/\s+$/g, '')
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));

  const resultFormingMagicSquare = pickingNumbers(a);

  return validate(resultFormingMagicSquare, validateResult, inputString);
};

const mainPickingNumbers = () => {
  response(title, main);
};

module.exports = {
  pickingNumbers,
  mainPickingNumbers,
};
