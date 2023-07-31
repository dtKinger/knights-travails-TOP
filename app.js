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
// WK1 = White Knight 1
for (let i = 0; i < chessBoard.length; i += 1){
  console.log(chessBoard[i])
}

// console.log(chessBoard[4][3])

// Find WK1
function getPosition(token){
  for (let i = 0; i < chessBoard.length; i += 1){
    for (let j = 0; j < chessBoard[i].length; j += 1){
      if (chessBoard[i][j] == token){
        return `${token}'s position is ${i}, ${j}.`
      }
    }
  }
}
