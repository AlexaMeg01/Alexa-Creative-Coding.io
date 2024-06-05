var w;
var h;
var amplitude;
let particles = [];

function preload(){
  sound = loadSound('ELECTRIC.mp3');
}

function setup(){
  angleMode(DEGREES);
  let cnv = createCanvas(windowWidth,windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
  w=width / 64
  h=height / 40
  amplitude = new p5.Amplitude();
  
}




  function draw(){
    background(0,0,0);
    fill(random(255), random(255), random(255));
    var spectrum= fft.analyze();
    console.log(spectrum);
    //stroke(255);
    noStroke();
    for (var i=0; i < spectrum.length; i++){
      var amp= spectrum[i];
      var y= map(amp, 0,256, height, 0);
      rect(i * w, y ,  w-2 , height + y);
      
      amplitude.setInput(sound)
      
        let level = amplitude.getLevel();
    let size = map(level, 0, 2, 0, 1000);
      
    ellipse(width/7, height/5.8, size, size);
    ellipse(width/1.5, height/1.7, size, size);
    ellipse(width/2, height/3, size, size); 
    ellipse(width/1.5, height/5, size, size); 
      ellipse(width/4, height/3, size, size); 
      ellipse(width/1.10, height/3, size, size); 
      ellipse(width/2.30, height/2.10, size, size); 
  }

      
    //=========
    stroke(255);
    fill(50);
    text('tap to play', 20, 20);
  }




function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
