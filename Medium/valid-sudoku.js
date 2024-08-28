/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function (board) {
    // Initialize arrays to store values for columns and 3x3 sub-grids
    let colValues = Array.from({ length: 9 }, () => []);
    let cellValues = Array.from({ length: 9 }, () => []);
  
    for (let i = 0; i < 9; i++) {
      let rowValues = new Set();  // Use Set to store row values for constant time lookup
  
      for (let j = 0; j < 9; j++) {
        const currentVal = board[i][j];
  
        // If the current cell is not empty
        if (currentVal !== '.') {
          // Calculate the index for the 3x3 sub-grid
          const cellIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  
          // Check for duplicates in the current row, column, and 3x3 sub-grid
          if (rowValues.has(currentVal) || colValues[j].includes(currentVal) || cellValues[cellIndex].includes(currentVal)) {
            return false;
          }
  
          // Add the current value to the row, column, and 3x3 sub-grid
          rowValues.add(currentVal);
          colValues[j].push(currentVal);
          cellValues[cellIndex].push(currentVal);
        }
      }
    }
  
    return true;
  };