function setup () {
createCanvas(400,400); //my canvas is 200 x 200
background(252, 186, 3); //background is a yellow color.

}

function draw() {
    strokeWeight(1); //sets the thickness back to 1
    stroke(3, 252, 136); //sets the color to greenish-blue
    fill(255,0,0) //makes the rectangle color red.
    rect(0,0,50, 50); //makes a rectangle
    circle(175,25,50); //makes a circle
    noFill(); //makes our next shape have no fill.
    strokeWeight(10); //sets the thickness to 10
    stroke(123, 3, 252); //sets the stroke color.
    ellipse(100,50,25,50); //an ellipse.
    
    
    
    //color is (r,g,b) Red, Green, Blue
    //colors can go from 0 - 255
    //255,0,0 is RED, because there's only red.
    
    //triangle is (x1,y2,x2,y2,x3,y3)
    //ellipse is (x1,y1,lenght,height)
    
    //      ( A,     B,      C)
    triangle(50,150,100,80,150,150); //red triangle
    stroke(0,255,0); //r=0, g=full b=0
    strokeWeight(10);
    point(100,125); 
    
}
