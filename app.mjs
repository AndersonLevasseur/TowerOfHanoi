import Gameboard from './Gameboard.mjs'
const gameboardInstance = new Gameboard(100);



let pinHeight = 700;
let diskHeight = ((pinHeight - 20) / gameboardInstance.numberOfDisks) - 1;
let diskWidth = 265 / gameboardInstance.numberOfDisks;
let pinWidth = diskWidth / 2;
console.log(gameboardInstance.numberOfDisks);

let x1loc = 240;
let x2loc = 480;
let x3loc = 720;

let baseYLoc = 720;

let canvas = document.getElementById("Gameboard");
let ctx = canvas.getContext("2d");


if (gameboardInstance.numberOfDisks > 100) {
    gameboardInstance = new Gameboard(100);
    console.log("Number of disks too large : Reduced to 100");
}

drawEverything(gameboardInstance);


function drawEverything(gameboard) {
    drawBoard();
    populatePin(gameboard.pinOne, x1loc);
    populatePin(gameboard.pinTwo, x2loc);
    populatePin(gameboard.pinThree, x3loc);
}

function populatePin(pin, pinXlocation) {
    console.log("populatePin");
    console.log(pin);
    let row = 1;
    for (const disk of pin) {
        console.log("forLoop");
        console.log(disk.size);
        console.log(pinXlocation);
        console.log(row);
        drawDisk(disk.size, pinXlocation, row);
        row++;
    }
}


function drawBoard() {
    // base
    ctx.beginPath();
    ctx.rect(20, baseYLoc, 950, 50);
    ctx.fillStyle = "gray";
    ctx.fill();

    // pin 1
    ctx.fillStyle = "blue";
console.log(pinWidth);
    console.log(x1loc, baseYLoc - pinHeight, pinWidth, pinHeight)
    ctx.beginPath();
    ctx.rect(x1loc, baseYLoc - pinHeight, pinWidth, pinHeight);
    ctx.fill();

    // pin 2

    ctx.beginPath();
    ctx.rect(x2loc, baseYLoc - pinHeight, pinWidth, pinHeight);
    ctx.fill();

    //pin 3

    ctx.beginPath();
    ctx.rect(x3loc, baseYLoc - pinHeight, pinWidth, pinHeight);
    ctx.fill();
}

// draw disks
function drawDisk(sizeOfDisk, pinLocation, row) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    const xpos = pinLocation - (sizeOfDisk * (diskWidth / 2)) + (pinWidth / 2);
    const ypos = (baseYLoc + 1) - (row * (diskHeight + 1));
    const width = sizeOfDisk * diskWidth;
    ctx.rect(xpos, ypos, width, diskHeight);
    ctx.fill();
    console.log(xpos, ypos, width, diskHeight);
}
