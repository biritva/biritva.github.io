var fc=0;
var X=320;
var Y=240;

function setup() {
  createCanvas(640,480);
  frameRate(30);
}

function draw() {
  if (fc>254){
    fc=0;
  }
  fc=fc+1;
  X=X+random(-10,10);
  Y=Y+random(-10,10);
  fill(fc);
  ellipse(X,Y,random(30,80),random(20,85));
}
