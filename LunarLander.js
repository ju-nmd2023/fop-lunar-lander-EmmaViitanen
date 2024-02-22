let rocketY = innerHeight / 2;
let rocketX = innerWidth / 2;
let velocityX = 0;
let velocityY = 0;
let angle = 0;
let resultText = "";
let state = "start";
let gameIsRunning = true;
let mass = 1;
const acceleration = 0.2;
const rotationSpeed = 0.1;
let thrust = 0;
let gravity = 1.5;
let upforce = 0;
let downforce = 0;

function setup() {
  createCanvas(600, 800);
  frameRate(30);
  noStroke();
}

function draw() {
  clear();
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }
}
// ------- Start page --------- //
function startScreen() {
  push();
  textAlign(CENTER);
  fill(255);
  textSize(60);
  textStyle(BOLD);
  textFont("Courier New");
  text("LUNAR LANDER", width / 2, 200);
  textSize(20);
  textStyle(ITALIC);
  text("Press to start...", width / 2, 400);
  textStyle(NORMAL);
  text("Land on the landing pad softly", width / 2, 300);
  text("and try to avoid the stars", width / 2, 330);
  text("⬅️ Left | ⬇️ Fly | ➡️ Right", width / 2, 500);
  pop();
}

// ---------- Result page -------- //
function resultScreen() {
  push();
  textAlign(CENTER);
  fill(255);
  textSize(60);
  textStyle(BOLD);
  textFont("Courier New");
  text("RESULT", width / 2, 200);
  textStyle(ITALIC);
  textSize(20);
  text(resultText, width / 2, 300);
  text("Press To Try Again...", width / 2, 400);
  pop();
}

function gameScreen() {
  push();
  background(29, 41, 81);
  fill(255);
  textSize(20);
  textFont("Courier New");
  text("Speed: " + velocityY.toFixed(2), 50, 50);
  //moon
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

  rocket(rocketX, rocketY, angle);

  if (keyIsDown(DOWN_ARROW)) {
    thrust = 0.5;
  } else {
    thrust = 0;
  }
  if (keyIsDown(LEFT_ARROW)) {
    angle = angle - (Math.PI / 180) * 4;
  } else if (keyIsDown(RIGHT_ARROW)) {
    angle = angle + (Math.PI / 180) * 4;
  }
  upforce = thrust * mass;
  downforce = -gravity;

  velocityY = velocityY + upforce * Math.cos(angle) + 0.07 * downforce;
  velocityX = velocityX + upforce * Math.sin(angle);

  rocketY -= velocityY;
  rocketX += velocityX;

  if (
    rocketY < 0 ||
    rocketX < 0 ||
    rocketX > width ||
    (velocityY < -3 && rocketY >= 650)
  ) {
    state = "result";
    resultText = "You crashed!";
  } else if (rocketY >= 650 && rocketX > 250 && rocketX <= 350) {
    state = "result";
    resultText = "Congratulations! You landed on the moon!";
  }
}

// ----- // rocket
function rocket(rocketX, rocketY, angle) {
  push();
  translate(rocketX, rocketY);
  rotate(angle);

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
function fallingStar(starX, starY) {
  push();
  translate(starX, starY);
  fill(255, 255, 0);
  ellipse(0, 0, 30);
  stroke(255, 255, 0);
  strokeWeight(4);
  line(-15, -20, -15, -40);
  line(0, -10, 0, -30);
  line(15, -20, 15, -40);
  pop();
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "result") {
    gameIsRunning = true;
    rocketY = innerHeight / 2;
    rocketX = innerWidth / 2;
    angle = 0;
    velocityY = 0;
    velocityX = 0;
    upforce = 0;
    downforce = 0;
    thrust = 0;
    state = "game";
  }
}
