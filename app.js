let chessBoard = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "WK1", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""]
]

const knightMoves = {
  "ENN": {x: 1, y: -2},
  "EEN": {x: 2, y: -1},
  "EES": {x: 2, y: 1},
  "ESS": {x: 1, y: 2},
  "WSS": {x: -1, y: 2},
  "WWS": {x: -2, y: 1},
  "WWN": {x: -2, y: -1},
  "WNN": {x: -1, y: -2},
}

function buildTree (legalMoves, ) {

}

// Determine Legal Knight Moves based on position
function ohThePlacesYouCanGo(){
  let currentPosition = getPosition('WK1');
  let legalMoves = [];
  let combinations = (Object.values(knightMoves)) // combinations[0].x == 1
  combinations.forEach((combo) => {
    let proposedX = currentPosition.x + combo.x
    let proposedY = currentPosition.y + combo.y
    if (0 <= proposedX &&
        proposedX <= 7 &&
        0 <= proposedY &&
        proposedY <= 7)
      {
      legalMoves.push([proposedX, proposedY])
    }
  })
  return legalMoves
}

// Print the board in console where WK1 = White Knight 1
let renderBoard = (() => {
  for (let i = 0; i < chessBoard.length; i += 1){
    console.log(chessBoard[i])
  }
})();

// Find WK1
function getPosition(token){
  for (let i = 0; i < chessBoard.length; i += 1){
    for (let j = 0; j < chessBoard[i].length; j += 1){
      if (chessBoard[i][j] == token){
        console.log(`${token}'s position is ${i}, ${j}.`)
        return {"x": i, "y": j}
      }
    }
  }
}
