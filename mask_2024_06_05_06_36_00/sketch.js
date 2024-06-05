
let img;


function preload(){

  img=loadImage('dog.jpg')

}



function setup() {

  createCanvas(700, 700);

  background(190,220,250);


  

  img.resize(200,200);

  let cnv5 = createGraphics(200,200);

  cnv5.circle(100,100,190);

  cnv5.triangle(0,0,100,200,200,0);

  img.mask(cnv5);

  image(img,300,25);
}