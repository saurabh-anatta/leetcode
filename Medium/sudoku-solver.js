/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  getSudoKuBoardValues(board, 0, 0);

  return board;
};

var getSudoKuBoardValues = function (board, row, column) {
  // all rows are gone through, let's return true
  if (row === 9) {
    return true;
  }
  // all 9 column has been checked for the row, move to next row
  if (column === 9) {
    return getSudoKuBoardValues(board, row + 1, 0);
  }

  // if value is not . then move to next column
  if (board[row][column] !== ".") {
    return getSudoKuBoardValues(board, row, column + 1);
  }

  for (let i = 1; i <= 9; i++) {
    if (isValidSudoku(board, row, column, i.toString())) {
      board[row][column] = i.toString();
      if (getSudoKuBoardValues(board, row, column + 1)) return true;
    }
  }

  board[row][column] = ".";
  return false;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board, row, column, value) {
  if (board[row].includes(value)) {
    return false;
  }

  for (let i = 0; i < 9; i++) {
    if (board[i][column] === value) return false;
  }

  const rowTop = Math.floor(row / 3) * 3;
  const columnLeft = Math.floor(column / 3) * 3;
  for (let i = rowTop; i < rowTop + 3; i++) {
    for (let j = columnLeft; j < columnLeft + 3; j++) {
      if (board[i][j] == value) return false;
    }
  }

  return true;
};
