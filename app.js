let chessBoard = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "WK1", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""]
]

// Print the board in console where WK1 = White Knight 1
let renderBoard = (() => {
  for (let row = 0; row < chessBoard.length; row += 1){
    console.log(chessBoard[row])
  }
})();

class Node {
  constructor(row, col, distance, parent){
    this.row = row // when processing a node, capture it's ID, assign that to anything enqueue'd by it
    this.col = col
    this.distance = distance
    this.parent = parent
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
    else console.log('Illegal Moves ignored')
    }
  return legalMoves;
}
// As a node is entering the queue - add it's parents.
// Is there an earlier point I can do this? I think while visiting the parent.
// when the newNode is initialized.


function knightsTravails (targetRow, targetCol, distance) {
  const queue = [];
  let startingPoint = getStartingPoint('WK1')
  const startNode = new Node (startingPoint[0], startingPoint[1], 0);

  queue.push(startNode);

  const visited = new Set();

  while (queue.length > 0){
    // Remove node
    const node = queue.shift()
    const { row, col, distance } = node;
    // Process
    if (row === targetRow && col === targetCol){  
      let path = rebuildPath(node);
      if (distance > 0){
        console.log(`The Knight Travailed thusly in ${distance} moves! `)
        console.log(`${[startingPoint[0], startingPoint[1]]}`)
        path.forEach((square,index) => {
        console.log(`${path[index]}`)
        })
      } else if (distance <= 0){
        console.log(`It looks like the Knight didn't have to move at all!
        Select a different start or end point.`)
        return;
      }
      
      return path;
    }
    
    else visited.add(node.getPositionString())

    // Add next-move nodes
    for (const legalMove of getLegalMoves(row, col)){
      const [newRow, newCol] = legalMove;
      const newNode = new Node(newRow, newCol, distance + 1, node) // node is the whole parent node, what was shifted (visited) out of the queue.

      if (visited.has(newNode.getPositionString())) continue;
      queue.push(newNode)
  
    }

  }
}

function rebuildPath (node) {
  const path = []
  while (node.parent){
    path.unshift([node.row, node.col]);
    node = node.parent // dynamic data structure classic traversal method
  }
  return path;
}

// Find WK1
function getStartingPoint(token){
  for (let row = 0; row < chessBoard.length; row += 1){
    for (let col = 0; col < chessBoard[row].length; col += 1){
      if (chessBoard[row][col] == token){
        console.log(`${token}'s position is ${row}, ${col}.`)
        let startingPoint = [row, col, 0]
        return startingPoint;
      }
    }
  }
}