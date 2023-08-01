
// Determine Legal Knight Moves based on position
// function getLegalMoves(node){

//   let moves = (Object.values(knightMoves)) // import all directions a Knight can move
//   moves.forEach((move) => {
//     let proposedY = currentPosition[0][1] + move.y
//     let proposedX = currentPosition[0][0] + move.x
//     if (0 <= proposedY && proposedY <= 7 &&
//         0 <= proposedX && proposedX <= 7){
//         legalMoves.push([proposedX, proposedY])
//       }
//     })
//   return legalMoves
// }

// let id = 10;
// let parent = null // staring position has no parent

// let startingPoint = getStartingPoint("WK1");
// // let currentPosition = startingPoint; // Initialize it here
// let targetPosition = [7, 4];
// let currentPosition = [];

// let legalMoves = [];
// let queue = [];


// // Find WK1
// function getStartingPoint(token){
//   for (let row = 0; row < chessBoard.length; row += 1){
//     for (let col = 0; col < chessBoard[row].length; col += 1){
//       if (chessBoard[row][col] == token){
//         console.log(`${token}'s position is ${col}, ${row}.`)
//         let startingPoint = [[col, row, id, parent]]
//         console.log(startingPoint)
//         return startingPoint;
//       }
//     }
//   }
// }

