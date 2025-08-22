function setup() {
    createCanvas(800,800); //canvas size is 1600x1600px
    background(36, 27, 213); //sets the background to dark blue
}
function draw() {
    //sun
    fill(236, 240, 36); //sets the color to yellow
    circle(50,50,50); //circle that represents the sun
    
    //grass and road
    fill(47, 163, 71); //makes the grass color green
    rect(0,500,800,500); //grass
    fill(80, 89, 82); //makes the road color gray
    rect(0,700,800,700); //road
    
    //street lines
    fill(255);
     rect(20,750,100,10); //the lines 18-23 are road lines
     rect(150,750,100,10);
     rect(280,750,100,10);
     rect(410,750,100,10);
     rect(540,750,100,10);
     rect(670,750,100,10);
     
     //house
     fill(184, 126, 68); //sets the house color
     rect(350,450,200,200); //base of the house
     fill(224, 216, 49); //color for windows
     rect(370,470,50,50); //left window
     rect(475,470,50,50); //right window
     fill(204, 134, 53); //color for door
     rect(425,550,50,100); //door
     fill(135, 106, 73);
     triangle(550,450,450,250,350,450);
     
     //car
     fill(27, 224, 221); //color for the car
     noStroke();
     rect(160,600,80,80); //car top
     triangle(100,648,161,598,161,648);
     triangle(240,600,240,645,299,645);
     rect(100,650,200,80); //car base
     fill(0);
     circle(140,730,50);
     circle(250,730,50);
     
     
}
