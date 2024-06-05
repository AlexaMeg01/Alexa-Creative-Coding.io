function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  
  fill("#272BD1");//outfit
  rect(169, 60, 55, 120, 88);
  fill("#3FF05C")//antenna and head
  ellipse(195, 65, 68, 68);
  rect(175, 20, 5, 20, 2, 2, 10, 5);
  rect(210, 20, 5, 20, 2, 2, 10, 5);
  fill("#F5EF9B");//eyes1
  rect(169, 65, 15, 6, 2, 2, 10, 5);
  rect(205, 65, 15, 6, 2, 2, 10, 5);
  fill("#EA3D3D");//eyes2
  rect(210, 65, 5, 5, 2, 2, 10, 5);
  rect(175, 65, 5, 5, 2, 2, 10, 5);
  fill("#000000");// mouth or nose
  rect(193, 78, 5, 2, 2, 2, 10, 5);
  fill("#3FF05C");//arms?
  rect(126, 110, 50, 6, 2, 2, 10, 5);
  rect(219, 110, 50, 6, 2, 2, 10, 5);
  fill("#3FF05C");
  rect(175, 165, 5, 50, 2, 2, 10, 5);
  rect(210, 165, 5, 50, 2, 2, 10, 5);
}
