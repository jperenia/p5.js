let width = 400;
let height = 400;
let square = 50;
let addition = 0;

let redSquareX = (width / 2) - (square / 2);
let redSquareY = 0;

let blueSquareX = 0;
let blueSquareY = (height / 2) - (square / 2);

let spaceBar = "Press the space bar to reverse the blue rectangles movement";
let upArrow = "Press the up arrow to slowly move the blue rectangle up";
let downArrow = "Press the down arrow to slowly move the blue rectangle down";
let clickBlueRect = "Click the blue rectangle to pause the animation. Click it again to resume.";
let clickAnywhere = "Click the screen anywhere will move the blue rectangle to that height";

let spaceBarPressed = false;
let upArrowPressed = 1;
let downArrowPressed = -1;
let blueRectClicked = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(0);
  textSize(12);
  text(spaceBar, 10, height-20*5);
  text(upArrow, 10, height-20*4);
  text(downArrow, 10, height-20*3);
  text(clickBlueRect, 10, height-20*2);
  text(clickAnywhere, 10, height-20*1);
  
  if(!blueRectClicked) {
    blueSquareX += addition;

    if(blueSquareX == 0)
      addition = 1;
    else if(blueSquareX+square == width)
      addition = -1;
  }
  
  line(redSquareX+(square/2), redSquareY+(square/2), blueSquareX+(square/2), blueSquareY+(square/2));

  fill(255, 0, 0);
  rect(redSquareX, redSquareY, square, square);

  fill(0, 0, 255);
  rect(blueSquareX, blueSquareY, square, square);
}

function mousePressed() {
  if ((mouseX > blueSquareX) && (mouseX < (blueSquareX + square)) && (mouseY > blueSquareY) && (mouseY < (blueSquareY + square))) {
    blueRectClicked = !blueRectClicked;
  } else {
    blueSquareY = mouseY - (square/2);
  }
}

function keyPressed() {
  if (keyCode == 32) {
    addition *= -1;
  } else if (keyCode == 38) {
    blueSquareY -= 5;
  } else if (keyCode == 40) {
    blueSquareY += 5;
  }
}