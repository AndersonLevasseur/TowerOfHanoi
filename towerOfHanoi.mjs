import Gameboard from "./Gameboard.mjs";
export default class Solution{
  constructor(numberOfDisksOnBoard) {
    this.numberOfDisksOnBoard = numberOfDisksOnBoard;
    this.board = new Gameboard(numberOfDisksOnBoard);
    
  }
  solve() {
    const timeStart = Date.now();
    this.board.movePile(this.board.pinOne, this.board.pinThree, this.numberOfDisksOnBoard);
    
    let intervalToken = setInterval(() => {
      console.log(this.board.pinOne);
      try {
        console.log(this.board.result.pop());

      } catch (error) {
        clearInterval(intervalToken);
        const timeEnd = Date.now();
        const timeElapsed = (timeEnd - timeStart) / 1000;
        console.log(`Time Elapsed : ${timeElapsed} seconds`);
      }
    }, 1000);
  }
}
const solution = new Solution(1);
solution.solve();

// let gameboard = new Gameboard(10);
// console.log(gameboard.toString());
// gameboard.moveDisk(gameboard.pinOne, gameboard.pinTwo);
// console.log(gameboard.toString());
// gameboard.moveDisk(gameboard.pinOne, gameboard.pinThree);
// console.log(gameboard.toString());
// gameboard.moveDisk(gameboard.pinTwo, gameboard.pinThree);
// gameboard.moveDisk(gameboard.pinOne, gameboard.pinTwo);
// console.log(gameboard.toString());
/*
input:
    Linked list of disks
    output:
          |                    |                   -+-
          |                    |                  --+--
          |                    |                 ---+---
          |                    |                ----+----
          |                    |               -----+-----
          |                    |              ------+------
          |                    |             -------+-------
          |                    |            --------+--------
          |                    |           ---------+---------
          |                    |          ----------+----------








       -+-                  |                  |
     --+--                  |                  |
   ---+---                  |                  |
 ----+----                  |                  |
-----+-----                 |                  |
------+------               |                  |
-------+-------             |                  |
--------+--------
*/