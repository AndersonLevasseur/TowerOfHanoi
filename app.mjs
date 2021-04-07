import {solve} from './towerOfHanoi.mjs'


const diskHeight = 10;
const baseThickness = 10;
const x1loc = 240;
const x2loc = 480;
const x3loc = 720;
//mock what happens when the page reloads or whatever

function drawEverything(gameboard) {
    drawBoard();
    populatePin(gameboard.pin1, x1loc);
    populatePin(gameboard.pin2, x2loc);
    populatePin(gameboard.pin3, x3loc);
}

function populatePin(pin, pinXlocation) {
    let boardPinYLocation = baseThickness;
    for (const disk in pin) {
        drawDisk(disk.size, pinXlocation, boardPinYLocation);
        boardPinYLocation += diskHeight;
    }
}

function drawBoard() {
    // base

    var c = document.getElementById("Gameboard");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 25;
    ctx.strokeStyle = "black";
    ctx.rect(20, 720, 950, 10);
    ctx.stroke();

    // pin 1

    var c = document.getElementById("Gameboard");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 25;
    ctx.strokeStyle = "black";
    ctx.rect(240, 200, 10, 520);
    ctx.stroke();

    // pin 2

    var c = document.getElementById("Gameboard");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 25;
    ctx.strokeStyle = "black";
    ctx.rect(480, 200, 10, 520);
    ctx.stroke();
    
    //pin 3
    
    var c = document.getElementById("Gameboard");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 25;
    ctx.strokeStyle = "black";
    ctx.rect(720, 200, 10, 520);
    ctx.stroke();
}

// draw disks
function drawDisk(sizeOfDisk, pin, row) {

    var c = document.getElementById("Gameboard");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 25;
    ctx.strokeStyle = "black";
    ctx.rect(pin - (sizeOfDisk * 10), ((2 * row) * (-20)) + 701,  sizeOfDisk * 20, 20);
    ctx.stroke();
}