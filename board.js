const gameBoard = (() => {
  const boardArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  const play = (row, col) => {

    boardArray[row][col] = "X";
  }

  return { boardArray, play };
})();
