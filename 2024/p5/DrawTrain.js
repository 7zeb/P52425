function setup () {
createCanvas(400, 400);
  background(255);  // White background
  stroke(0,0,0,80);        // Black grid lines
  strokeWeight(1);  // 1 pixel thick lines

  let gridSize = 10;

  // Draw vertical lines
  for (let x = 0; x <= width; x += gridSize) {
    line(x, 0, x, height);
  }

  // Draw horizontal lines
  for (let y = 0; y <= height; y += gridSize) {
    line(0, y, width, y);
  }
}
function draw () {
    textSize(10);
    text("0,0",20,20);
    stroke(100);
    stroke("blue");
    circle(200,10,10);
    fill(0); //black color
    //creating an Arc
    arc(120, 95, 25, 50, PI / 2, 3 * PI / 2)
    stroke("black")
    strokeWeight(3);
    triangle(75,130,100,110); 
    
    fill(237,18,38); //red color
    rect(220,0,80,120); //bigger rect
    
    //y value of rect is 120
    fill("orange"); //makes the color orange
    noStroke(); //makes no stroke appear
    rect(120,70,150,50); //smaller rect
    
    //big circle
    fill(0); //black color
    stroke(255,255,255); //makes white color outline
    strokeWeight(5); //sets the stroke weight to 5
    
    //wheels for the train
    circle(260,130,50); //big circle
    circle(260,130,25); //smaller circle
    circle(210,130,25); //even smaller circle
    circle(160,130,25); //smaller circle
    
}
