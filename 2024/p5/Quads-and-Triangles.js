function setup() {
    createCanvas(400,600);
    //background(0);
}

function draw() {
 strokeWeight(1);
 stroke(0); //black circle
 fill("white"); //resets the fill back to white
 circle(100,30,30); //circle
 
 stroke(255,243,163); //yellowish ellipse
 ellipse(20,32,30,60); //ellipse
 
 stroke(66, 245, 96); //green triangle
 triangle(100,150,100,70,170,110); //triangle
 
 //quad(x1,y1,x2,y2,x3,y3,x4,y4)
 strokeWeight(3); //thickness
 stroke(0,0,255); //blue color
 fill(128, 21, 173); //sets the fill to dark purple
 quad(10,150,35,100,90,100,120,150) //trapizoid (Quad)
 
 
 
 
    
}
