function Gameboard() {
  const rows = 3;
  const squares = 3;
  const board = [];

  let seen = []; // keep track of what we've picked
  for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < squares; j++) {
          board[i].push(Cell());
          
      }
  }

  const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue())) // gets the cell's value 
      console.log(boardWithCellValues);
  };

  const isValid = (square) => {
      console.log(`sqaure validation: ${square} `);
      if (seen.length == 9) {
        console.log("TIE GAME OVER");
        return;
      }
      for(let i=0;i < seen.length; i++) {
        if (seen[i] == square){
          return false;
        }
      }
      return true;
  }; // end isValid;

  const dropToken = (square,player) => {
      seen.push(square);
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

  const gameWon = (player) => {
    //check rows
    const playerToken = player;
    for (let i=0; i <rows; i++) {
      if (
        board[i][0].getValue() === playerToken &&
        board[i][1].getValue() === playerToken &&
        board[i][2].getValue() === playerToken 
      ) {
        console.log(`${playerToken} win in row ${i}`);
        return true;
      }
    }
    //check columns 
  for (let j = 0; j < squares; j++) {
    if (
      board[0][j].getValue() === playerToken &&
      board[1][j].getValue() === playerToken &&
      board[2][j].getValue() === playerToken
    ) {
      console.log(`${playerToken} wins by column ${j}`);
      return true;
    }
  }

  // Check main diagonal (top-left to bottom-right)
  if (
    board[0][0].getValue() === playerToken &&
    board[1][1].getValue() === playerToken &&
    board[2][2].getValue() === playerToken
  ) {
    console.log(`${playerToken} wins by main diagonal`);
    return true;
  }

  // Check anti-diagonal (top-right to bottom-left)
  if (
    board[0][2].getValue() === playerToken &&
    board[1][1].getValue() === playerToken &&
    board[2][0].getValue() === playerToken
  ) {
    console.log(`${playerToken} wins by anti-diagonal`);
    return true;
  }

  return false; // No winner yet
};
  return {printBoard, isValid, dropToken, gameWon};
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
      if (board.isValid(square)) {
          //call function to drop the token else tell player to pick a different tile
          board.dropToken(square, getActivePlayer().token);
          //Logic for checking winner
          if (board.gameWon(getActivePlayer().token) == true) {
            board.printBoard();
            return; // end the game
          }
          switchPlayerTurn();
          printNewRound();

      }
      else {
          console.log("Pick a different square to play");
      }

  };
  printNewRound();
  return {playRound, getActivePlayer};
} // end GameController

const game = GameController();
//make player turn game.playRound('#square')
