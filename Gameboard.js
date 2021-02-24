const Disk = require('./Disk');
const LinkedList = require('./LinkedList');

module.exports = class Gameboard {
    constructor(numberOfDisks) {
        this.numberOfDisks = numberOfDisks;

        this.pinOne = new LinkedList();
        this.pinTwo = new LinkedList();
        this.pinThree = new LinkedList();

        for (let i = 0; i < numberOfDisks; i++) {
            this.pinOne.addToEnd(new Disk(i + 1));
            console.log(this.pinOne.toString());
        }
    }
    movePile(fromPin, toPin) {
        // check for size
        // make sure toPin, fromPin exists
        // make sure fromPin has disks
        // make sure fromPin and toPin are different

    }

    toString() {
        let finalResult = "";
        //FIX VVV
        let pinOne = this.pinOne;
        let pinTwo = this.pinTwo;
        let pinThree = this.pinThree;
        for (let i = 0; i < this.numberOfDisks; i++) {
            // look at pin1 if null make     |   
            // else make --+-- to disk size
            // adds pinOne to log
            if (pinOne.length === 0) {
                let result = "|";
                result = result.padStart(this.numberOfDisks + 1, " ").padEnd((2 * this.numberOfDisks) + 1, " ");
                finalResult += result;
            } else {
                let disk = pinOne.pop();
                let result = "+";
                result = result.padStart(disk.size + 1, "-").padEnd((2 * disk.size) + 1, "-");
                result = result.padStart((this.numberOfDisks - disk.size) + result.length, " ").padEnd((2 * this.numberOfDisks) + 1, " ");
                finalResult += result;
            }

            // adds pinTwo to log
            if (pinTwo.length === 0) {
                let result = "|";
                result = result.padStart(this.numberOfDisks + 1, " ").padEnd((2 * this.numberOfDisks) + 1, " ");
                finalResult += result;
            } else {
                let disk = pinTwo.pop();
                let result = "+";
                result = result.padStart(disk.size + 1, "-").padEnd(2 * disk.size + 1, "-");
                result = result.padStart(this.numberOfDisks + 1, " ").padEnd((2 * this.numberOfDisks) + 1, " ");
                finalResult += result;
            }

            // adds pinThree to log
            if (pinTwo.length === 0) {
                let result = "|";
                result = result.padStart(this.numberOfDisks + 1, " ").padEnd((2 * this.numberOfDisks) + 1, " ");
                result += "\n"
                finalResult += result;
            } else {
                let disk = pinThree.pop();
                let result = "+";
                result = result.padStart(disk.size + 1, "-").padEnd(2 * disk.size + 1, "-");
                result = result.padStart(this.numberOfDisks + 1, " ").padEnd((2 * this.numberOfDisks) + 1, " ");
                result += "\n"
                finalResult += result;
            }
        }
        return finalResult;
    }

    moveDisk(fromPin, toPin) {
        // what should it return?
        // check for size

        if (toPin.peek() !== undefined && fromPin.peek() !== undefined && fromPin.peek().size > toPin.peek().size) {
            throw "fromPin disk larger";
        } else if (fromPin === undefined) {
            throw "fromPin not found"
        } else if (toPin === undefined) {
            throw "toPin not found";
        } else if (fromPin.length < 1) {
            throw "fromPin has no disks";
        } else if (fromPin === toPin) {
            throw "pins sre the same";
        } else {
            let fromPinDisk = fromPin.pop();
            toPin.push(fromPinDisk);
            this.Gameboard.toString();
        }
    }

}