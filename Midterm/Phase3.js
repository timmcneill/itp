function setup() {
    createCanvas(400, 400);
    noStroke();
  }
  
  function drawObject(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    fill(0);
    arc(20,20,40,40,0,PI);
    rect(17,0,3,20);
    triangle(20,0,20,15,40,15);
    pop();
  }
  
  function draw() {
    drawObject(0, 0, 2);
    drawObject(200, 200, 5);
  }