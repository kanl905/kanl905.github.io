let pos = {x: 100, y: 50};
let col = {r: 10, g: 30, b:50};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#FAE4F9");
  frameRate(8);
}

function draw() {
  background(col.r, col.g, col.b)
 
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(220, 255);
  fill(col.r, col.g,col.b);
}

