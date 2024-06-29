const gameBoard = (() => {
  const boardArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  return { boardArray };
})();

function renderBoard() {
  const board = gameBoard.boardArray;
  const boardContainer = document.querySelector("#game-board");
  boardContainer.innerHTML = "";

  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row", "flex", "flex-row", "gap-4", "justify-center");
    boardContainer.appendChild(row);

    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell", "border", "border-black", "size-32");
      cell.textContent = board[i][j];
      row.appendChild(cell);
    }
  }
}

renderBoard();
