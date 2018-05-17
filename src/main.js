var fc=0;

function setup() {
  createCanvas(640,480);
  frameRate(30);
}

function draw() {
  if (fc>254){
    fc=0;
  }
  fill(fc);
  ellipse(mouseX,mouseY,80,80);
}
