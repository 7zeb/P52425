function draw() {
    fill(235, 64, 52); //fills the rest of the code. Except the no fill.
    strokeWeight(1);
    rect(0,0,20,20); //1st rectangle
    rect(100,0,20,20); //2nd rectangle
    stroke(52, 116, 235); //makes the border of a line a color.
    strokeWeight(1); //in order to reset the stroke weight on the circle/rectangle
    noFill(); //removes the fill.
    rect(100,100,100,30); //1st square
    rect(100,200,30,100); //2nd square
    fill(52, 235, 97); //makes the circles a seperate color.
    circle(300,200,30); //1st circle
    circle(200,100,50); //2nd circle
    
    //line(x1,x1,x2,x2)
    // x1 = starting x
    //y1 = starting y
    //x2 = ending x
    //y2 = ending y
    
    stroke(177, 52, 235); //changes the color of the line.
    strokeWeight(8);
    line(0,30,50,30); //the line
    //fill does not work with a line because it's a line.
    //you have to type stroke.
    stroke(140, 235, 52);
    strokeWeight(5);
    line(0,80,100,80); //if you want a straight line, make the same y.
    
}
