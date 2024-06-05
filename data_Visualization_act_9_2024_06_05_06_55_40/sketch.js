var table;
var Hourspent = [];
var activities = [];
var colors = [
	" #064385", 
	" #FBE3B6", 
	" #FA3D3D", 
	" #188C0E", 
	" #70F0A6",
    " #ED305C"
];



function preload() {
  table = loadTable("workhours.csv", "csv", "header");
}


function setup() {
	createCanvas(800,600);
	activities = table.getColumn("Days");
	Hourspent = table.getColumn("Working Hours");
}
									 
function draw() {
	background(200,200,200);
  fill(0);
	noStroke();
	textSize(50);
  textFont("Jersey 20");
  text("Hours Spent a Day", width/3, height/4-50);
  translate(width/3,height/4);
	
	
	for (var i = 0; i<Hourspent.length; i++){
		var mappedData = map(Hourspent[i],
											 min(Hourspent), 
											 max(Hourspent),100,400);
		fill(colors[i % colors.length]);
		rect(0,i*70, mappedData,45); 
		
	
		textFont("Jersey 20");
		fill(0);
		textSize(12);
		text(Hourspent[i],mappedData+10,(i*70)+20);
		push();
		
		
		translate(-100,0);
    fill(0);
		textSize(16);
		textAlign(RIGHT);
	  text(activities[i],70,(i*70)+25);
		pop();
	}
}