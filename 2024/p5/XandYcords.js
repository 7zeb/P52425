function setup() {
    createCanvas(400,400); //creates the canvas
}
 function draw() {
background(0); //this is important, without this the code will break.
  fill(255);
  text("(" + int(mouseX) + ", " + int(mouseY) + ")", mouseX, mouseY);
 }
