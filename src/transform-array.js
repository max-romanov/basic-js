const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  let outArr = arr.reduce((acc, el, i, array) => {
    if (el === '--double-next') return array[i+1] ? [...acc, array[i+1]] : acc;
    if (el === '--double-prev') return acc[i-1] ? [...acc, acc[i-1]] : acc;
    if (acc[i-1] === '--discard-next') return [...acc, '--deleted'];
    if (array[i+1] === '--discard-prev') return [...acc, '--deleted'];
    return [...acc, el];
  }, [])
  return outArr.filter(el => !['--discard-prev', '--discard-next', '--deleted'].includes(el))
}

module.exports = {
  transform
};
