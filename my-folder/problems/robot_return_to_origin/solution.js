/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    
    const robot = {
  x: 0,
  y: 0,
  
  moveRobot: function moveRobot(input) {
    input.split("").forEach(move => {
       switch(move){
    case "U":
      this.x++;
      break;
    case "D":
      this.x--;
      break;
    case "L":
      this.y--;
      break;
    case "R":
      this.y++;
      break;
  }
    })
}
}
    
    robot.moveRobot(moves)
    return (robot.x === 0 && robot.y ===0)
      
};