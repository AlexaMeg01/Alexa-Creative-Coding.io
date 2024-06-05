let img;
   
function preload(){
  img=loadImage("dog.jpg")
}

function setup() {
  createCanvas(700, 700);
  background(190,220,250);
  
  //image inside shape, using clip function - only works with one shape
  img.resize(200,200);//resizing of the img.
  
  let cnv7 = createGraphics(200,200);//creating a sub canvas inside the main canvas (circle canvas) aside from the main canvas
  
  //================================//
  
  cnv7.circle(100,100,190);
  
  
  cnv7.canvas.getContext("2d").clip();//getting the conditions/ all the things that we will put
  
  cnv7.image(img,0,0); //positioning the image 
  
  image(cnv7,350,225); // putting the sub canvas inside the main canvas 
  
  //================================//
  
  //image inside shape, using mask function - works with multiple shapes
  img.resize(200,200); // resizing the sunflower image 
  
  let cnv5 = createGraphics(200,200); // creating a sub canvas
  //x,y,size of the circle
  cnv5.circle(100,100,190);
  
  //size/poistion of the triangle 
  cnv5.triangle(0,0,100,200,200,0);
  img.mask(cnv5);
  image(img,300,25); // putting the sub canvas inside the main canvas 

  //===========================================//
  
  // show drawings inside of text using clip and erase functions
  // first what's behind the text:
  cnv4 = createGraphics(width, height); // creating sub canvas   - the same size of the main canvas 
  
  ctx2 = cnv4.canvas.getContext("2d");
  
  cnv4.rect(100, 200, 200); // size of the rectangle, the last value pertains to both the width & hight of the rect
  
  ctx2.clip(); // clipping or getting the conext 
  
  cnv4.fill(230,150,130); // circle color 
  
  cnv4.circle(200, 330, 150); // the position and size x,y,diameter
  
  image(cnv4, 0, 0); //putting the sub canvas inside the main canvas
  
//============================================//
  
  // and now for the text:
  cnv3 = createGraphics(width, height);
  cnv3.fill(230,50,0); //color
  cnv3.rect(100,200,200, 200 );  // x , y, width and height 
  cnv3.erase();
  cnv3.textSize(70);//size of the text
  cnv3.text('Dog', 120, 330); // txt, x, y
  image(cnv3, 0, 0); // putting the sub canvas inside the main canvas 
  
}