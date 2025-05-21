function setup() {
    createCanvas(400,400); //creates a canvas 500x600
    background(107, 196, 255); //light blue color for the background
}

function draw() {
    fill(110, 86, 59); //color for the base of the house
    rect(80,150,250,200); //the base for the house
    
    fill("blue"); //color for the windows
    rect(100,180,50,50); //left window
    rect(250,180,50,50); //right window
    
    fill(97, 87, 61); //color for door
    rect(180,280,50,70); //door
    fill(217, 165, 24); //color for door knob
    circle(190,320,10); //door knob
    
    //now it's time to move on to the labeling.
    textSize(20); //the size of the text
    fill(60, 201, 28); //the text color
    text("The Windows",150,180 ); //the text that labels the windows
    text("House",120,140); //the text that labels the house
    text("The door and door knob",160,270)
}
