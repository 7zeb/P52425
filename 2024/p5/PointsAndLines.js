function setup () {
    createCanvas(600,500);
    background(0);
}

function draw() {
   stroke(255,255,255); //color for the border of the circle.
    strokeWeight(7);
   noFill(); //means no fill, do not make the center of the circle colored. 
   circle(250,200,40); //main circle, white color. No fill.
   
  stroke(116, 29, 209); //purple color for the first line.
   strokeWeight(7);
   line(250,180,250,20);//purple line
   fill(116,29,209); //color for the circle at the end of the first line.
   circle(250,30,23); //circle at the end of the purple line.
   
 stroke(47, 255, 0); //green color for this line.
   strokeWeight(7);
  fill(47, 255, 0); //color for the circle at the end of the line
   circle(250,400,23); //circle at the end of the green line.
    line(250,400,250,220);//green line
    
    stroke(230, 107, 25); //orange color for this line
    strokeWeight(7);
   line(232,200,50,200);//orange line
  fill(230, 107, 25); //color for the circle at the end of the line.
  circle(50,200,23); //circle at the end of the orange line.
   
 stroke(9, 19, 217); //dark blue color for the line.
  strokeWeight(7);
  fill(9, 19, 217); //color for the circle at the end of the line.
   circle(450,200,23); //circle at the end of the dark blue line
 line(450,200,270,200);//dark blue line.
    
 stroke(245, 0, 0); //red color for the line.
 strokeWeight(7);
  fill(245, 0, 0); //color for the circle at the end of the line.
   circle(115,90,23); //circle at the end of the line
 line(115,90,235,185);//red line
 
 stroke(235, 242, 22); //yellow color for the line
 strokeWeight(7);
  fill(235, 242, 22); //color for the circle at the end of the line.
  circle(90,350,23); //circle at the end of the line
 line(90,350,235,220);//yellow line
 
 stroke(0, 246, 250); //cyan color for the line
 strokeWeight(7);
  fill(0, 246, 250); //color for the circle at the end of the line.
   circle(450,360,23); //circle at the end of the line
 line(270,220,450,360);//yellow line
 
 stroke(247, 15, 224); //pink color for the line
 strokeWeight(7);
  fill(247, 15, 224); //color for the circle at the end of the line.
  circle(450,75,23); //circle at the end of the line
 line(450,75,270,185);//pink line
 
   
}
