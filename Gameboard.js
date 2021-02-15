const Disk = require('./Disk');
const LinkedList = require('./LinkedList');

module.exports = class Gameboard {
    constructor(numberOfDisks) {
        this.numberOfDisks = numberOfDisks;

        this.pinOne = new LinkedList();
        this.pinTwo = new LinkedList();
        this.pinThree = new LinkedList();

        for (let i = numberOfDisks; i > 0; i--) {
            this.pinOne.push(new Disk(i));
        }
    }
    movePile(fromPin, toPin) {

    }
    
    toString() {
        let result = "";
        for (let i = 0; i < pinOne.size; i++) {
            // TODO: assumes that pins are put on pinOne, what if on pinTwo?
            result += "|                    |                    | \n";
        }
        /* gameboard.pinOne.size determines start point of disk*/

        result

// logs gameboard
        // every location
            // sees disk one first but prints from top to bottom
            // use size to tell where to put first disk
    } 

    moveDisk(fromPin, toPin) {

    }
    
}