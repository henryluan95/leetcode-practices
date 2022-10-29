/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x= 0;
  let y= 0;
    
    //Using closure to create a function that change variables within a function
function moveRobot(moves) {
    moves.split("").forEach(move => {
       switch(move){
    case "U":
      x++;
      break;
    case "D":
      x--;
      break;
    case "L":
      y--;
      break;
    case "R":
      y++;
      break;
  }
    })
}
    moveRobot(moves)
    return (x === 0 && y ===0)
}