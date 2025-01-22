// Write a function that determines whether a string is a valid guess in a Boggle board, 
// as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

// [ ["I","L","A","W"],
//   ["B","N","G","E"],
//   ["I","U","A","O"],
//   ["A","S","R","L"] ]
// Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically,
//      or diagonally) without re-using any previously used cells.
// For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, 
// while "BUNGIE", "BINS", and "SINUS" would not.
// Your function should take two arguments (a 2D array and a string) and return true 
// or false depending on whether the string is found in the array as per Boggle rules.
// Test cases will provide various array and string sizes 
// (squared arrays up to 150x150 and strings up to 150 uppercase letters).
//  You do not have to check whether the string is a real word or not, only if it's a valid guess.

function checkWord(board, word) {
    const rows = board.length;
    const cols = board[0].length;
  
    // Helper function for Depth-First Search (DFS)
    function dfs(row, col, index, visited) {
      // If the entire word is found, return true
      if (index === word.length) return true;
  
      // If out of bounds, character mismatch, or cell already visited
      if (
        row < 0 || row >= rows || col < 0 || col >= cols ||
        board[row][col] !== word[index] || visited[row][col]
      ) {
        return false;
      }
  
      // Mark the current cell as visited
      visited[row][col] = true;
  
      // Explore all 8 possible directions (horizontal, vertical, diagonal)
      const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0], // right, down, left, up
        [1, 1], [1, -1], [-1, 1], [-1, -1] // diagonals
      ];
  
      for (const [dx, dy] of directions) {
        if (dfs(row + dx, col + dy, index + 1, visited)) {
          return true;
        }
      }
  
      // Backtrack: unmark the cell as visited
      visited[row][col] = false;
  
      return false;
    }
  
    // Iterate through the board to find the starting point
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (board[row][col] === word[0]) {
          // Create a visited array for tracking used cells
          const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
          if (dfs(row, col, 0, visited)) {
            return true;
          }
        }
      }
    }
  
    return false;
  }
  