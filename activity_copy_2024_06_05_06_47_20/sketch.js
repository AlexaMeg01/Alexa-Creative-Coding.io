var maxCol = 6; //vertical
var maxRow = 4; // horizontal
var circleD = 60; // diameter


function setup() {
  createCanvas(600, 400); // canva size
  noStroke();
  background(0); // canva color (black)
  ellipseMode(CORNER); //the origin of the is at the corner/0,0 of the circle in on the corner
  
//=============================
  for (var i=0; i < 10; i+=1) { 

    fill(36*i, 100, 100); // R,G,B

    rect(width/10*i, 0, width/10, height);}
  //====================================
  
  
  var xSpacing = (width / maxCol); //canvas width divided by 5
  var ySpacing = (height / maxRow); //canvas height divided by 5
  translate (30,20)
  
  for ( var x=0; x<maxCol ; x++){
    for(var y=0; y<maxRow; y++){
      
      if (x == 5 || y > 5){
        fill (405,200,104);}// yellow
      else{fill (0,60,120);}//blue
      ellipse(x*xSpacing,y*ySpacing,circleD,circleD)
      }
    }}

