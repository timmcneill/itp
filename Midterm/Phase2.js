function setup() {
    createCanvas(40, 40);
    noStroke();
  }
  
  function draw() {
    fill(0);
    arc(20,20,40,40,0,PI);
    rect(17,0,3,20);
    triangle(20,0,20,15,40,15);
  }