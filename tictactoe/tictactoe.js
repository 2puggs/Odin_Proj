function Gameboard() {
  const rows = 3;
  const squares = 3;
  const board = [];


  for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < squares; j++) {
          board[i].push(Cell());
          
      }
  }
  console.log("func Gameboard()");
  console.log(board);

  const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue())) // gets the cell's value 
      console.log(boardWithCellValues);
  };

  const isValid = (square, player) => {
      //what is the logic to check if the value is 0? at square provided? 
      console.log(`sqaure validation: ${square} `); // checks if the passed value matches game.playRound(sqaure);
      for (let i=0; i < rows; i++){
          for (let j=0; j < squares; j++) {
              if (board[i][j] == 'X' || board[i][j] == 'O') {
                  return false;
              }
          }

      }
      return true;
  }; // end is valid;

  const dropToken = (square,player) => {
      let count = 0;
      for (let i=0; i < rows; i++){
          for (let j=0; j < squares; j++) {
              if (count == square) {
                  //change the token value out
                  board[i][j].addToken(player); 
              }
              count++;
          }
      }// end outer for 
  };
  return {printBoard, isValid, dropToken};
}

function Cell() {
  let value = 0;

  // Accept a player's token to change the value of the cell
  const addToken = (player) => {
    value = player;
  };

  // How we will retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}

function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();  // gets the game board

  const players = [
    {
      name: playerOneName,
      token: 'X'
    },
    {
      name: playerTwoName,
      token: 'O'
    }
  ];
  let activePlayer = players[0];

  const switchPlayerTurn = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn. Select Square to drop token in: 0-8`);
  };

  const playRound = (square) => {
      // Drop a token for the current player
      console.log(
        `Dropping ${getActivePlayer().name}'s token into square ${square}...`
      );
      if (board.isValid(square, getActivePlayer().token) == true) {
          //call function to drop the token else tell player to pick a different tile
          board.dropToken(square, getActivePlayer().token);
          switchPlayerTurn();
          printNewRound();

      }
      else {
          console.log("Pick a different square to play");
      }
      // return boolean
      // Switch player turn

  };
  printNewRound();
  return {playRound, getActivePlayer};
} // end GameController

const game = GameController();