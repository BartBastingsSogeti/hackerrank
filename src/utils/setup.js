/**
 * Description
 *
 * @param {*} inputString
 * @returns
 */
const setup = (inputString) => inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

/**
 * Description
 *
 * @param {*} resultCb
 * @param {*} result
 * @param {*} input
 * @returns
 */
const validate = (resultCb, result, input) => {
  if (resultCb === result) {
    return result;
  }
  return `Wrong Answer :(
    Input: ${input}
    Output: ${resultCb}
    Expected: ${result}`;
};

/**
 * Description
 *
 * @param {*} title
 * @param {*} cb
 */
const response = (title, cb) => {
  console.log(`${title} :: invoked`);
  console.log('-------------------');
  const result = cb();
  console.log(`${title} :: result ::`, result);
  console.log('-------------------');
  console.log(`${title} :: end`);
};

module.exports = {
  setup,
  validate,
  response,
};
