let width = 400;
let height = 400;
let square = 50;

let redSquareX = (width / 2) - (square / 2);
let redSquareY = 0;

let blueSquareX = 0;
let blueSquareY = (height / 2) - (square / 2);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  line(redSquareX+(square/2), redSquareY+(square/2), blueSquareX+(square/2), blueSquareY+(square/2));

  fill(255, 0, 0);
  rect(redSquareX, redSquareY, square, square);

  fill(0, 0, 255);
  rect(blueSquareX, blueSquareY, square, square);
}