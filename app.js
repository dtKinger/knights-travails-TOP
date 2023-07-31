let chessBoard = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "WK1"],
  ["", "", "", "", "", "", "", ""]
]

// Print the board in console where WK1 = White Knight 1
let renderBoard = (() => {
  for (let row = 0; row < chessBoard.length; row += 1){
    console.log(chessBoard[row])
  }
})();

const knightMoves = {
  "ENN": {y: -2, x: 1},
  "EEN": {y: -1, x: 2},
  "EES": {y: 1, x: 2},
  "ESS": {y: 2, x: 1},
  "WSS": {y: 2, x: -1},
  "WWS": {y: 1, x: -2},
  "WWN": {y: -1, x: -2},
  "WNN": {y: -2, x: -1},
}

function buildTree () {

}

// Determine Legal Knight Moves based on position
function ohThePlacesYouCanGo(currentPosition){
  let legalMoves = [];
  let combinations = (Object.values(knightMoves)) // combinations[0].x == 1
  combinations.forEach((combo) => {
    let proposedY = currentPosition.y + combo.y
    let proposedX = currentPosition.x + combo.x
    if (0 <= proposedY &&
        proposedY <= 7 &&
        0 <= proposedX &&
        proposedX <= 7)
      {
      legalMoves.push([proposedX, proposedY])
    }
  })
  console.info(legalMoves)
  return legalMoves
}
ohThePlacesYouCanGo(getPosition('WK1'))

// Find WK1
function getPosition(token){
  for (let row = 0; row < chessBoard.length; row += 1){
    for (let col = 0; col < chessBoard[row].length; col += 1){
      if (chessBoard[row][col] == token){
        console.log(`${token}'s position is ${col}, ${row}.`)
        return {"y": row, "x": col}
      }
    }
  }
}