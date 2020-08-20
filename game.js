/**
 * Tic Tac Toe Game Functionality:
 * 
 * 1. Generate the spaces
 * 2. When you click on a space a token appears
 * 3. It checks if the player has won
 * 4. It changes token depending on who's turn it is and shows who's turn it is
 * 5. Shows the winning container if a person has won
 * 6. When you click the play again button it clears the board and restarts for a new game
 * 
 */

const tokens = [
    {
        name: "EyeRoll",
        img: "roll.png",
    },
    {
        name: "Smirk",
        img: "smirk.png",
    }
]

let player1 = {
  token: 0
}

let player2 = {
  token: 1
}

let gameboard = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]; // array representation of gameboard
let currentPlayer = 1; // indicates who's turn it is
let numTurn = 0; // counts the num of turns made

populateSpace();
let againBtn = document.getElementById("again-btn");
againBtn.addEventListener("click", playAgain);


// Populates the spaces for the gameboard
function populateSpace() {
let rows = document.querySelectorAll(".row");
for(let i = 0; i < rows.length; i++) {
  let row = rows[i]
  for (let space = 0; space < 3; space++){
    let spaceDiv = document.createElement("div");
    spaceDiv.innerHTML = "&nbsp;";
    spaceDiv.classList.add("space");
    spaceDiv.id = i + "-" + space;
    spaceDiv.addEventListener("click", playerTurn);
    row.appendChild(spaceDiv);
  }
}
}

// Implements functionality when a player turn is made
function playerTurn(event) {
let spaceContent = event.target;
let location = spaceContent.id.split("-");
let row = location[0];
let col = location[1];
placeToken(row, col);
updateGameboard();
numTurn++;
let won = checkWon();
if(won){
  reportWinner();
  return
}
if(numTurn == 9){
  reportTie();
  return
}
updateTurn();
}

// Updates the gameboard variable to indicate a token was placed at a specific row, col
function placeToken(row, col) {
if(gameboard[row][col] == -1) {
  if (currentPlayer == 1) {
    gameboard[row][col] = 1;
  } else {
    gameboard[row][col] = 2;
  }
}
}

// Update who's turn it is
function updateTurn() {
 if (currentPlayer == 1) {
   currentPlayer = 2;
 } else {
   currentPlayer = 1;
 }
 let turn = document.querySelector("span");
 turn.textContent ="Player " +currentPlayer;
}


// Updates the gameboard generating the tokens based on the gameboard values
function updateGameboard() {
  for ( let row = 0; row < 3; row++) {
    for ( let col = 0; col < 3; col++) {
      let space = document.getElementById(row + "-" + col);
      space.innerHTML = "";
     if (gameboard[row] [col] == 1) {
        let token = makeToken(player1);
       space.appendChild(token);
      } else if (gameboard[row] [col] == 2) {
        let token = makeToken(player2);
         space.appendChild(token);
      } else {

      }
    }
  }
}


// Creates and returns the token DOM element of the given player
function makeToken(player) {
  let token = document.createElement("img");
  token.classList.add("token")
  token.src = "./img/tokens/" + tokens[player.token].img
  return token;
}

function reportTie() {
let winContainer = document.getElementById("win-container");
let gameContainer = document.getElementById("gameboard");
winContainer.classList.remove("hidden");
gameContainer.classList.add("hidden"); 
let h2 = document.querySelector("#win-container h2")
h2.textContent = "There was a tie!";
}

// Updates win-container reporting a win
function reportWinner() {
let winContainer = document.getElementById("win-container");
let gameContainer = document.getElementById("gameboard");
winContainer.classList.remove("hidden");
gameContainer.classList.add("hidden");
let h2 = document.querySelector("#win-container h2")
h2.textContent = "Congrats! Player "   + currentPlayer +    " has won! 🥳" ; 
}


// "Congrats! Player " + currentPlayer + " has won!!! 🥳"
// "There was a tie!"

// Restarts and shows the gameboard to play again
function playAgain() {
clearGameboard();
let winContainer = document.getElementById("win-container");
let gameContainer = document.getElementById("gameboard");
winContainer.classList.add("hidden");
gameContainer.classList.remove("hidden");
numTurn = 0;
}

// Clears the gameboard
function clearGameboard() {
let rows = document.querySelectorAll(".row")
for (let i = 0; i < rows.length; i++) {
  let row = rows [i];
  row.innerHTML = "";
}
gameboard = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
populateSpace();
}

// Returns true/false if the current player who just made a move won
function checkWon() {
    // Horizontal
    for (let row = 0; row < 3; row++) {
        let count = 0;
        for (let col = 0; col < 3; col++) {
            if (gameboard[row][col] == currentPlayer) {
                count++;
            }
        }
        if (count == 3) {
            return true;
        }
        count = 0;
    }

    // Vertical
    for (let col = 0; col < 3; col++) {
        let count = 0;
        for (let row = 0; row < 3; row++) {
            if (gameboard[row][col] == currentPlayer) {
                count++;
            }
        }
        if (count == 3) {
            return true;
        }
        count = 0;
    }

    // Diagonal
    if (gameboard[0][0] == currentPlayer && 
        gameboard[1][1] == currentPlayer &&
        gameboard[2][2] == currentPlayer) {
            return true;
    }

    if (gameboard[0][2] == currentPlayer && 
        gameboard[1][1] == currentPlayer &&
        gameboard[2][0] == currentPlayer) {
            return true;
    }

    return false
}