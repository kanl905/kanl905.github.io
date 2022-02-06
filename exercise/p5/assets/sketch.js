function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#FAE4F9");
}

function draw() {
  fill(243, 45, 234);
  circle(mouseX, mouseY, 70);
  noStroke();
}

function mousePressed(){
  noStroke();
if (mouseButton==LEFT){
  fill(0, 15, 255);
  square(mouseX,mouseY, 130);}

  else if   (mouseButton==RIGHT){
    background("#FAE4F9");
}}

