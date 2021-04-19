import Gameboard from "./Gameboard.mjs";

export default class Solution {
  constructor(numberOfDisksOnBoard) {
    this.numberOfDisksOnBoard = numberOfDisksOnBoard;
    this.board = new Gameboard(numberOfDisksOnBoard);
  }

  recursiveSolve() {

    const timeStart = Date.now();
    this.board.movePile(this.board.pinOne, this.board.pinThree, this.numberOfDisksOnBoard);
    const numberOfMoves = this.board.result.length;

    let intervalToken = setInterval(() => {
      try {
        console.log(this.board.result.pop());
      } catch (error) {
        clearInterval(intervalToken);
        const timeEnd = Date.now();
        const timeElapsed = (timeEnd - timeStart) / 1000;
        console.log(`Time Elapsed : ${timeElapsed} seconds`);
        console.log(` Number of Moves : ${numberOfMoves}`);
      }
    }, 1000);
  }

  iterativeSolve() {
    const timeStart = Date.now();
    this.board.iterativeSolve(this.board.pinOne, this.board.pinThree);
    const numberOfMoves = this.board.result.length;

    let intervalToken = setInterval(() => {
      try {
        console.log(this.board.result.pop());
      } catch (error) {
        clearInterval(intervalToken);
        const timeEnd = Date.now();
        const timeElapsed = (timeEnd - timeStart) / 1000;
        console.log(`Time Elapsed : ${timeElapsed} seconds`);
        console.log(` Number of Moves : ${numberOfMoves}`);
      }
    }, 250);
    
  }
}
let solution = new Solution(7);
solution.iterativeSolve(solution.board.pinOne, solution.board.pinThree);
// solution.board.iterativeSolve(solution.board.pinOne, solution.board.pinThree);
