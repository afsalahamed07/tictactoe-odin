let gameBoard = createBoard();

const boardDOM = document.querySelector("#game-board");
const messageDOM = document.querySelector("#message");
const restartButton = document.querySelector("#restart-button");

boardDOM.addEventListener("click", (e) => {
  if (e.target.classList.contains("cell")) {
    if (e.target.children[0].textContent !== " ") return;

    if (player1.won || player2.won ) return;

    const row = e.target.parentNode;
    const rowIndex = Array.from(row.parentNode.children).indexOf(row);
    const cellIndex = Array.from(row.children).indexOf(e.target);
    let status = gameBoard.play(rowIndex, cellIndex);
    renderBoard();

    if (status) {
      if (player1.won) {
        messageDOM.textContent = "Player 1 won!";
      } else if (player2.won) {
        messageDOM.textContent = "Player 2 won!";
      }
    }
    else if (gameBoard.getMoves() === 9) {
      messageDOM.textContent = "It's a draw!";
    }
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
        "hover:cursor-pointer"
      );
      const marker = document.createElement("p");
      marker.textContent = board[i][j];
      cell.appendChild(marker);
      row.appendChild(cell);
    }
  }
}

renderBoard();

restartButton.addEventListener("click", () => {
  gameBoard = createBoard();
  player1 = createPlayer("Player 1", true);
  player2 = createPlayer("Player 2");
  messageDOM.textContent = "";
  renderBoard();
});
