var word = "WHATS UP!"; // the 'word'
var font1, font2, font3; //the fonts


function setup() {
  textSize(50)
  createCanvas(600, 400); //canva size
  background(255); fill(0); //canva color
  textFont("Jacquard 12"); //text font size
  textAlign(CENTER); //text align
  text(word, width/2, height/2);//x,y of the text
}