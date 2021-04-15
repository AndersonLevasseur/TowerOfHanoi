import Disk from './Disk.mjs';
import LinkedList from './LinkedList.mjs';

export default class Gameboard {
    constructor(numberOfDisks, pinOne, pinTwo, pinThree) {
        this.numberOfDisks = numberOfDisks;
        this.result = new LinkedList();
        this.gameboardInstances = new LinkedList();
        if (pinOne === undefined || pinOne.push() !== pinOne.pop()) {
            this.pinOne = new LinkedList();
        } else {
            this.pinOne = pinOne;
        }
        if (pinTwo === undefined || pinTwo.push() !== pinTwo.pop()) {
            this.pinTwo = new LinkedList();
        } else {
            this.pinTwo = pinTwo;
        }
        if (pinThree === undefined || pinThree.push() !== pinThree.pop()) {
            this.pinThree = new LinkedList();
        } else {
            this.pinThree = pinThree;
        }
        if ((this.pinOne.length + this.pinTwo.length + this.pinThree.length) === 0) {
            for (let i = 0; i < numberOfDisks; i++) {
                this.pinOne.push(new Disk(i + 1));
            }
            console.log(this.toString());
        }
        if (numberOfDisks !== (this.pinOne.length + this.pinTwo.length + this.pinThree.length)) {
            throw "numberOfDisks doesn't match disks on existing board";
        }
        console.log(this.toString());
    }

    movePile(fromPin, toPin, pileSize) {
        let sparePin;
        if (fromPin !== this.pinOne && toPin !== this.pinOne) {
            sparePin = this.pinOne;
        }
        if (fromPin !== this.pinTwo && toPin !== this.pinTwo) {
            sparePin = this.pinTwo;
        }
        if (fromPin !== this.pinThree && toPin !== this.pinThree) {
            sparePin = this.pinThree;
        }


        if (pileSize === 0) {
            return;
        } else {
            this.movePile(fromPin, sparePin, pileSize - 1);
            this.moveDisk(fromPin, toPin);
            this.movePile(sparePin, toPin, pileSize - 1);
        }
    }

    print(node) {
        if (node.done) {
            let result = "|";
            result = result.padStart(this.numberOfDisks + 1, " ").padEnd((2 * this.numberOfDisks) + 1, " ");
            return result;
        } else {
            let disk = node.value;
            let result = "+";
            result = result.padStart(disk.size + 1, "-").padEnd((2 * disk.size) + 1, "-");
            result = result.padStart((this.numberOfDisks - disk.size) + result.length, " ").padEnd((2 * this.numberOfDisks) + 1, " ");
            return result;
        }
    }

    instanceSave() {
        const currentInstance = new Gameboard(this.numberOfDisks, this.pinOne, this.pinTwo, this.pinThree);
        this.gameboardInstances.push(currentInstance);
    }

    toString() {
        const listOfRows = new LinkedList();
        let largestPinSize;
        let finalResult = "";
        let pin1Iter = this.pinOne[Symbol.iterator]();
        let pin2Iter = this.pinTwo[Symbol.iterator]();
        let pin3Iter = this.pinThree[Symbol.iterator]();

        if (this.pinOne.length >= this.pinTwo.length && this.pinOne.length >= this.pinThree.length) {
            largestPinSize = this.pinOne.length;
        } else if (this.pinTwo.length >= this.pinOne.length && this.pinTwo.length >= this.pinThree.length) {
            largestPinSize = this.pinTwo.length;
        } else {
            largestPinSize = this.pinThree.length;
        }

        for (let i = 0; i < largestPinSize + 1; i++) {
            let row = "";
            row += this.print(pin1Iter.next());
            row += this.print(pin2Iter.next());
            row += this.print(pin3Iter.next());
            listOfRows.push(row + "\n");
        }
        for (const row of listOfRows) {
            finalResult += row;
        }
        return finalResult;
    }

    moveDisk(fromPin, toPin) {
        if (toPin.peekTail() !== undefined && fromPin.peekTail() !== undefined && fromPin.peekTail().size > toPin.peekTail().size) {
            throw "fromPin disk larger";
        }

        if (fromPin === undefined) {
            throw "fromPin not found"
        }

        if (toPin === undefined) {
            throw "toPin not found";
        }

        if (fromPin.length < 1) {
            throw "fromPin has no disks";
        }

        if (fromPin === toPin) {
            throw "pins sre the same";
        }
        toPin.addToEnd(fromPin.removeFromTail());
        this.result.addToEnd(this.toString());
        /*Move Maybe VV*/
        return this.instanceSave();

    }
}
