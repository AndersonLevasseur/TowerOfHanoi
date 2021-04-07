import Gameboard from "./Gameboard.mjs";
export function solve() {
let numberOfDisksOnBoard = 1;
const board = new Gameboard(numberOfDisksOnBoard);

const timeStart = Date.now();

board.movePile(board.pinOne, board.pinThree, numberOfDisksOnBoard);


let intervalToken = setInterval(() => {
  try {
    console.log(board.result.pop());
  } catch (error) {
    clearInterval(intervalToken);
    const timeEnd = Date.now();
    const timeElapsed = (timeEnd - timeStart) / 1000;
    console.log(`Time Elapsed : ${timeElapsed} seconds`);
  }
}, 1000);
}
solve();

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