const { setup, validate, response } = require('../utils/setup');

const title = 'Cats and a Mouse';
const inputString = `2
1 2 3
1 3 2`;
const validateResult = `Cat B
Mouse C`;

const catAndMouse = (x, y, z) => {
  // const catA = x;
  // const catB = y;
  const posCatA = Math.abs(x - z);
  const posCatB = Math.abs(y - z);

  // while (catA !== z) {
  //   if (x < z) {
  //     catA += 1;
  //   } else {
  //     catA -= 1;
  //   }
  //   posCatA += 1;
  // }

  // while (catB !== z) {
  //   if (y < z) {
  //     catB += 1;
  //   } else {
  //     catB -= 1;
  //   }
  //   posCatB += 1;
  // }

  if (posCatA === posCatB) {
    return 'Mouse C';
  }

  return posCatA < posCatB ? 'Cat A' : 'Cat B';
};

const main = () => {
  const inputArr = setup(inputString);
  const lines = parseInt(inputArr[0], 10);
  const result = [];

  for (let qItr = 0; qItr < lines; qItr += 1) {
    const xyz = inputArr[qItr + 1].split(' ');
    const x = parseInt(xyz[0], 10);
    const y = parseInt(xyz[1], 10);
    const z = parseInt(xyz[2], 10);

    result.push(catAndMouse(x, y, z));
  }

  const resultCatAndMouse = result.join('\n');
  return validate(resultCatAndMouse, validateResult, inputString);
};

const mainCatAndMouse = () => {
  response(title, main);
};

module.exports = {
  catAndMouse,
  mainCatAndMouse,
};
