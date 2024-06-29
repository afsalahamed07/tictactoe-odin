function createPlayer(playerName, playerTurn) {
  let name = playerName | "No name"
  let turn = playerTurn | false;
  let won = false;

  return { name, turn, won };
};

let player1 = createPlayer("Player 1", true);
let player2 = createPlayer("Player 2");
