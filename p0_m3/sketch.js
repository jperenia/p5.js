let square = 50;
let addition = 0;
let thetaAddition = 0;
let width = 800;
let height = 400;

let redSquare = new p5.Vector((width / 2) - (square / 2), 0);
let blueSquare = new p5.Vector(0, (height / 2) - (square / 2));
let leftRightSquare = new p5.Vector(width - 200, 20);
let pendulumSquare = new p5.Vector(width - 100, 20);
let animationSquare = new p5.Vector(80, 25);

let spaceBar = "Press the space bar to reverse the blue rectangles movement";
let upArrow = "Press the up arrow to slowly move the blue rectangle up";
let downArrow = "Press the down arrow to slowly move the blue rectangle down";
let clickBlueRect = "Click the blue rectangle to pause the animation. Click it again to resume.";
let clickAnywhere = "Click the screen anywhere will move the blue rectangle to that height";

let spaceBarPressed = false;
let upArrowPressed = 1;
let downArrowPressed = -1;
let blueRectClicked = false;

let pendulumAnimation = false;
let reversePendulum = false;
let theta = -Math.PI/4;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  
  fill(0, 0, 255);
  rect(width - 200, 20, animationSquare.x, animationSquare.y);
  fill(255, 255, 255);
  text("left-right", width-185, 37);
  
  fill(0, 0, 255);
  rect(width - 100, 20, animationSquare.x, animationSquare.y);
  fill(255, 255, 255);
  text("pendulum", width-90, 37);  
  
  if(pendulumAnimation)
    pendulum();
  else  
    leftRight();
}

function leftRight() {
  fill(0);
  textSize(12);
  text(spaceBar, 10, 20);
  text(upArrow, 10, 20*2);
  text(downArrow, 10, 20*3);
  text(clickBlueRect, 10, 20*4);
  text(clickAnywhere, 10, 20*5);
  
  
  if(!blueRectClicked) {
    blueSquare.x += addition;
    
    if(blueSquare.x == 0)
      addition = 1;
    else if(blueSquare.x+square == width)
      addition = -1;
  }
    
  line(redSquare.x+(square/2), redSquare.y+(square/2), blueSquare.x+(square/2), blueSquare.y+(square/2));

  fill(255, 0, 0);
  rect(redSquare.x, redSquare.y, square, square);

  fill(0, 0, 255);
  rect(blueSquare.x, blueSquare.y, square, square);
}

function pendulum() {
  let lengthOfString = 300;
  let bluePendulumSquare = createVector(redSquare.x + lengthOfString*sin(theta), redSquare.y + lengthOfString*cos(theta));
  
  line(redSquare.x+(square/2), redSquare.y+(square/2), bluePendulumSquare.x+(square/2), bluePendulumSquare.y+(square/2));

  fill(255, 0, 0);
  rect(redSquare.x, redSquare.y, square, square);

  fill(0, 0, 255);
  rect(bluePendulumSquare.x, bluePendulumSquare.y, square, square);
  
  fill(0, 0, 0);
  text("X :" + bluePendulumSquare.x , bluePendulumSquare.x-15, bluePendulumSquare.y + square+20); 
  text("Y :" + bluePendulumSquare.y , bluePendulumSquare.x-15, bluePendulumSquare.y + square+35); 


  theta += thetaAddition;

  if(theta < -PI/4)
    reversePendulum = true;
  else if (theta > PI/4)
    reversePendulum = false;
 
  if(reversePendulum)
    thetaAddition = 0.01;
  else
    thetaAddition = -0.01;
}

function mousePressed() {
  if ((mouseX > blueSquare.x) && (mouseX < (blueSquare.x + square)) && (mouseY > blueSquare.y) && (mouseY < (blueSquare.y + square))) {
    blueRectClicked = !blueRectClicked;
  } else {
    blueSquare.y = mouseY - (square/2);
  }
  
  if ((mouseX > leftRightSquare.x) && (mouseX < leftRightSquare.x + animationSquare.x) && (mouseY > leftRightSquare.y) && (mouseY < (leftRightSquare.y + animationSquare.y))) {
    pendulumAnimation = false;
  } else if ((mouseX > pendulumSquare.x) && (mouseX < pendulumSquare.x + animationSquare.x) && (mouseY > pendulumSquare.y) && (mouseY < (pendulumSquare.y + animationSquare.y))) {
    pendulumAnimation = true;
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