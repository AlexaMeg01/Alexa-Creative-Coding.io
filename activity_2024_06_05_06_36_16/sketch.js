function setup() {
  
  createCanvas(400, 400);
  //colorMode(HSB, 360, 250, 100) //(HSB, Hue, Saturation, Brightness)
  background(0);
  noStroke();
  
  // for loop starts at 0 and increases i by 1 until i is 9
  for (var i=0; i < 10; i++) { 
    fill(36*i, 100, 129); //(r, g, b)
    rect(width/10*i, 0, width/10, height); //rect position is considering the width of the canvas
}

}