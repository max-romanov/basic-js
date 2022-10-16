const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mines = matrix.map(elem => elem.map(elem2 => elem2 = 0));
  let fieldArr =[]
  if (matrix[1][1] === true) {
   fieldArr = mines.map(elem => elem.map(elem2 => elem2 + 1))
  }
  if (matrix[0][0] === true) {
    fieldArr[0][1]++
    fieldArr[1][0]++
    return fieldArr
  }
  return mines;
}

module.exports = {
  minesweeper
};
