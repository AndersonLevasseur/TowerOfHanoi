const Gameboard = require('./Gameboard');

let gameboard = new Gameboard(10);
console.log(gameboard.toString());
gameboard.moveDisk(gameboard.pinOne, gameboard.pinTwo);

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