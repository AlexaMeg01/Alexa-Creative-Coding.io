function setup() {
	createCanvas(1000,1000);
	frameRate(100)
   background(100)
}

function draw() {
  fill(255,0);
  noStroke()
  rect(0,0,2000,2000);
	
  let A = random(0,0255);
  let B = random(0,255,0);
  let C = random(255,0,0);
  fill(255);
  fill(A, B, C);
  rectMode(CENTER);
  rect(mouseX,mouseY,200);
  
	
}