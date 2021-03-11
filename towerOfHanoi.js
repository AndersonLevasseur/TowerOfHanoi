const Gameboard = require('./Gameboard');

// let gameboard = new Gameboard(10);
// console.log(gameboard.toString());
// gameboard.moveDisk(gameboard.pinOne, gameboard.pinTwo);
// console.log(gameboard.toString());
// gameboard.moveDisk(gameboard.pinOne, gameboard.pinThree);
// console.log(gameboard.toString());
// gameboard.moveDisk(gameboard.pinTwo, gameboard.pinThree);
// gameboard.moveDisk(gameboard.pinOne, gameboard.pinTwo);
// console.log(gameboard.toString());
let board = new Gameboard(6);
board.movePile(board.pinOne, board.pinThree, 6);
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