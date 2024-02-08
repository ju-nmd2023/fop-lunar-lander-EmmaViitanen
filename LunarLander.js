// function setup() {
//   createCanvas(600, 800);
//   background(29, 41, 81);
// }

// rocket
fill(255);
rect(100, 100, 30, 40);
triangle(115, 70, 130, 100, 100, 100);
fill(192);
triangle(130, 120, 140, 140, 130, 140);
triangle(100, 120, 90, 140, 100, 140);
fill(0);
ellipse(115, 110, 10);
ellipse(115, 130, 10);

// moon
fill(255);
beginShape();
vertex(-100, 800);
bezierVertex(50, 700, 550, 700, 700, 800);
endShape();

// Landing pad
fill(192);
rect(250, 700, 100, 30);
triangle(250, 700, 250, 730, 220, 730);
triangle(350, 700, 380, 730, 350, 730);
fill(0);
ellipse(300, 700, 100, 20);
stroke(255, 255, 0);
strokeWeight(2);
ellipse(300, 700, 80, 10);
noStroke();
