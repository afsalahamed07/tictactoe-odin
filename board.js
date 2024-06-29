function createBoard() {
  const boardArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  let moves = 0;

  const play = (row, col) => {
    if (player1.turn) {
      boardArray[row][col] = "X";
      player1.turn = false;
      player2.turn = true;
      moves++;
    } else {
      boardArray[row][col] = "O";
      player2.turn = false;
      player1.turn = true;
      moves++;
    }

    if (moves >= 5) {
      if (isWin()) {
        // turn was switched before the win
        if (player1.turn) {
          player2.won = isWin();
        } else {
          player1.won = isWin();
        }

        return true;
      }
    }
  };

  function isWin() {
    const winPatterns = [
      // Horizontal
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      // Vertical
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      // // Diagonal
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];
      if (
        boardArray[a[0]][a[1]] !== " " &&
        boardArray[a[0]][a[1]] === boardArray[b[0]][b[1]] &&
        boardArray[a[0]][a[1]] === boardArray[c[0]][c[1]]
      ) {
        return true;
      }
    }
    return false;
  }

  const getMoves = () => moves;

  return { boardArray, play, getMoves };
}
