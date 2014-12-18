/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board({n:n});
  var innerFunction = function(rowIndex){
    var tempArray = board.get(rowIndex);
    for (var i = 0; i < n; i++){
      board.get(rowIndex)[rowIndex] = 1;

      if (!board.hasColConflictAt(i)) {
        solution.push(board.get(rowIndex));
        break;
      } else {
        board.get(rowIndex)[rowIndex] = 0;
      }
    }
  }
  // want create a n*n matrix to represent the solution
  // need to check whether placing the rook at certain location will cause row or column conflicts
  // if so, we want backtrack and check the next possiable location.
  // repeat
  // check if the location where the next rook will be placed will cause conflict
  // recursion
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
  for (var i = 0; i < n; i++) {
    innerFunction(i);
  }
  if (solution.length === n) {
      return solution;
  }
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
