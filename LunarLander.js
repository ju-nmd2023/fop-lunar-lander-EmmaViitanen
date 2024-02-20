let rocketY = innerHeight / 2;
let rocketX = innerWidth / 2;
let velocity = 1;
const acceleration = 0.2;
let gameIsRunning = true;
let resultText = "";

function setup() {
  createCanvas(600, 800);
  background(29, 41, 81);
  noStroke();
}
// ------- Start page --------- //
function startScreen() {
  push();
  fill(255);
  textSize(60);
  textStyle(BOLD);
  textFont("Courier New");
  text("LUNAR LANDER", 85, 200);
  textStyle(ITALIC);
  textSize(20);
  text("Press to start...", 200, 400);
  pop();
}

// ---------- Result page -------- //
function resultScreen() {
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

function gameScreen() {
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

// ----- // rocket
function rocket(rocketX, rocketY) {
  push();
  translate(rocketX, rocketY);

  fill(255);
  rect(-40, 0, 30, 40);
  triangle(-25, -30, -10, 0, -40, 0);
  fill(192);
  triangle(-10, 20, -10, 40, 3, 40);
  triangle(-40, 20, -40, 40, -53, 40);
  fill(0);
  ellipse(-25, 10, 10);
  ellipse(-25, 30, 10);

  pop();
}

// ______ STAR ______ //
function star(x, y) {
  push();
  translate(x, y);
  fill(255, 255, 0);
  triangle(100, 90, 110, 115, 90, 115);
  pop();
}

let state = "start";

function draw() {
  setup();

  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    rocket(rocketX, rocketY);

    rocketY += velocity;
    velocity += acceleration;

    if (keyIsPressed) {
      if (keyCode === DOWN_ARROW) {
        velocity -= 0.5;
      } else if (keyCode === LEFT_ARROW) {
        rocketX -= 1;
      } else if (keyCode === RIGHT_ARROW) {
        rocketX += 1;
      }
    }

    if (rocketY >= 650 || rocketY < 0) {
      state = "result";
    }
  } else if (state === "result") {
    resultScreen();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "result") {
    state = "game";
    gameIsRunning = true;
    rocketY = 100;
    velocity = 1;
  }
}
