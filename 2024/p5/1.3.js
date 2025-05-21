function setup() {
    createCanvas(400,400); //creates a canvas 400x400
    background(72, 177, 189); //makes a teal background for the project
}

function draw() {
    stroke(255); //color of the outline 
    fill(255); //the fill color is green because he's an alien
     ellipse(200, 100, 150, 150); //the first circle
     
     //the glasses
     stroke(0) //makes the outline of the glasses black
     line(127,80,150,80); //glasses line 1
     line(192,80,210,80); //glasses line 2
     line(251,80,274,80); //glasses line 3
     rect(150,60,40,40); //the left eye
     rect(210,60,40,40); //the right eye
     
     //making the mouth 
     fill(0);
    rect(160,130,80,10); //the mouth
    
    //making the body
    fill(255);
    stroke(0);
    triangle(202,175,108,325,303,315); //body
    circle(120,230,25); //left hand
    circle(280,230,25);
    
    // print(mouseX, ",", mouseY);
}
