function setup() {
    createCanvas(400,400); //creates canvas (800 pixels)
    background(0); //sets the background to black    
}
function draw() {
    //I'm Sad Text
    textSize(15); //sete the text size to 15pt
    fill(255); //sets the text color to white
    textFont('Arial'); //sete the text font to Arial
    text("I'm sad",40,70); //the "I'm sad" text
    
    //I'm sad face
    fill(226, 238, 51); //sets the color to yellow
    circle(305,70,120); //the sad circle
    strokeWeight(15); //sets the StrokeWeight to 15
    point(273,50); //left eye
    point(333,50); //right eye
    //arc(x1,y2,width,height,start angle,stop angle *in radients*)
    strokeWeight(1); //resets StrokeWeight
    fill("red");
    arc(305,110,50,50,PI,0); //sad mouth
    
    //I'm happy face
    fill(226,238,51); //sets the color to yellow
    circle(80,250,120); //the happy circle
    strokeWeight(15); //sets the StrokeWeight to 15
    point(50,229); //left eye
    point(100,229); //right eye
    strokeWeight(1); //resets the StrokeWeight back to 1
    fill("red"); //sets the mouth color to red.
    arc(80,270,50,50,0,PI); //happy mouth
    
    //I'm happy text
    textSize(15); //sete the text size to 15pt
    fill(255); //sets the text color to white
    textFont('Arial'); //sete the text font to Arial
    text("I'm happy",260,250); //the "I'm sad" text
}
