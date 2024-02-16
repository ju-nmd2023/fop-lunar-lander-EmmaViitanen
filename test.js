fill(255);
textSize(60);
textStyle(BOLD);
textFont("Courier New");
text("RESULT", 200, 200);
textStyle(ITALIC);
textSize(20);
text("Press To Try Again...", 190, 400);
function setup() {
  createCanvas(600, 800);
  background(29, 41, 81);
  noStroke();
}

let rocketY = 100;
let rocketX = 300;
let velocity = 1;
const acceleration = 0.2;
let gameIsRunning = true;

// ------- Start page --------- //
function start() {
  push();
  fill(255);
  textSize(60);
  textStyle(BOLD);
  textFont("Courier New");
  text("LUNAR LANDER", 100, 200);
  textStyle(ITALIC);
  textSize(20);
  text("Press to start...", 250, 400);
  pop();
}

// ---------- Result page -------- //
function result() {
  push();
  fill(255);
  textSize(60);
  textStyle(BOLD);
  textFont("Courier New");
  text("RESULT", 200, 200);
  textStyle(ITALIC);
  textSize(20);
  text("Press To Try Again...", 190, 400);
  pop();
}

// ----- // rocket
// fill(255);
// rect(100, 100, 30, 40);
// triangle(115, 70, 130, 100, 100, 100);
// fill(192);
// triangle(130, 120, 140, 140, 130, 140);
// triangle(100, 120, 90, 140, 100, 140);
// fill(0);
// ellipse(115, 110, 10);
// ellipse(115, 130, 10);

// // moon
// fill(255);
// beginShape();
// vertex(-100, 800);
// bezierVertex(50, 700, 550, 700, 700, 800);
// endShape();

// // Landing pad
// fill(192);
// rect(250, 700, 100, 30);
// triangle(250, 700, 250, 730, 220, 730);
// triangle(350, 700, 380, 730, 350, 730);
// fill(0);
// ellipse(300, 700, 100, 20);
// stroke(255, 255, 0);
// strokeWeight(2);
// ellipse(300, 700, 80, 10);
// noStroke();

function background() {
  push();
  // moon
  fill(246, 241, 213);
  beginShape();
  vertex(-100, 800);
  bezierVertex(50, 700, 550, 700, 700, 800);
  endShape();
  fill(210, 180, 140);
  ellipse(110, 765, 100, 20);
  ellipse(270, 755, 100, 20);
  ellipse(460, 775, 100, 20);
  fill(171, 146, 115);
  ellipse(100, 760, 100, 20);
  ellipse(260, 750, 100, 20);
  ellipse(450, 770, 100, 20);

  // Landing pad
  fill(192);
  rect(250, 700, 100, 30);
  triangle(250, 700, 250, 730, 220, 730);
  triangle(350, 700, 380, 730, 350, 730);
  ellipse(300, 730, 160, 20);
  fill(0);
  ellipse(300, 700, 100, 20);
  stroke(255, 255, 0);
  strokeWeight(2);
  ellipse(300, 700, 80, 10);
  noStroke();
  pop();
}

function rocket(x, y) {
  push();
  translate(x, y);
  fill(255);
  rect(285, 100, 30, 40);
  triangle(300, 70, 315, 100, 285, 100);
  fill(192);
  triangle(315, 120, 325, 140, 315, 140);
  triangle(285, 120, 275, 140, 285, 140);
  fill(0);
  ellipse(300, 110, 10);
  ellipse(300, 130, 10);
  pop();
}

function draw() {
  setup();
  background();
  rocket(0, rocketY);

  if (gameIsRunning === true) {
    rocketY += velocity;
    velocity += acceleration;

    if (keyCode === UP_ARROW) {
      velocity -= 1;
    }
    if (rocketY > 550 && rocketX >= 250 && rocketX <= 350) {
      // if (rocketY > 610) {
      //   gameIsRunning = false;
      // }
      gameIsRunning = false;
    }
  }
}
