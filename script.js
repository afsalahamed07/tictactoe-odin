const boardDOM = document.querySelector("#game-board");

boardDOM.addEventListener("click", (e) => {
  if (e.target.classList.contains("cell")) {
    const row = e.target.parentNode;
    const rowIndex = Array.from(row.parentNode.children).indexOf(row);
    const cellIndex = Array.from(row.children).indexOf(e.target);
    gameBoard.play(rowIndex, cellIndex);
    renderBoard();
  }
});

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
      cell.classList.add(
        "cell",
        "flex",
        "flex-col",
        "justify-center",
        "border",
        "border-black",
        "size-32",
        "p-4",
        "text-center",
        "font-bold",
        "text-2xl",
      );
      const marker = document.createElement("p");
      marker.textContent = board[i][j];
      cell.appendChild(marker);
      row.appendChild(cell);
    }
  }
}

renderBoard();
