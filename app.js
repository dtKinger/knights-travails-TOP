// import { Tree, Node, id } from './Tree.js';

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

class Node {
  constructor(row, col, distance){
    this.row = row // when processing a node, capture it's ID, assign that to anything enqueue'd by it
    this.col = col
    this.distance = distance
  }

  getPositionString () {
    return `${this.row}, ${this.col}`
  }
}

const knightMoves = [[1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2]]

const getLegalMoves = (row, col) => {
  const legalMoves = [];

  for (const knightMove of knightMoves){
    const [rowChange, colChange] = knightMove;

    const newRow = row + rowChange;
    const newCol = col + colChange;
    if (newRow >= 0 && newRow <= 7
      && newCol >= 0 && newCol <= 7)
      {
        legalMoves.push([newRow, newCol]);
      }
    }
  return legalMoves;
}

function knightsTravails (targetRow, targetCol, distance) {
  const queue = [];
  const startNode = new Node (7, 6, 0)

  queue.push(startNode);

  const visited = new Set();

  while (queue.length > 0){
    // Remove node
    const node = queue.shift()
    const { row, col, distance } = node;
    // Process
    if (row === targetRow && col === targetCol) return distance;
    else visited.add(node.getPositionString())

    // Add next-move nodes
    for (const legalMove of getLegalMoves(row, col)){
      const [newRow, newCol] = legalMove;
      const newNode = new Node(newRow, newCol, distance + 1)

      if (visited.has(newNode.getPositionString())) continue;
      queue.push(newNode)
  
    }

  }
  console.log('hello')
}
