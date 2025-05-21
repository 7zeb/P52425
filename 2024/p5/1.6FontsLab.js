function setup() {
    createCanvas(900,500); //this makes the canvas 800x600
    background(255); //makes the background white
}

function draw() {
     textFont('courierNew'); //changes font to Courier New.
     textSize(10); //sets the size of the text to 10.
     text('This line is written in Courier New 10',10,80); //I had to do the seccond line first because there was problems.
     
     textFont('arial'); //sets the font back for this line.
     text('This line is written in defualt font', 10, 50);
     
     textFont('Comic Sans MS'); //changes font to Comic Sans
     textSize(20); //sets to size of the text to 20.
     text('This line is written in Comic Sans 20', 10, 110); 
     
     textFont('Tahoma'); //changes font to Tahoma
     textSize(30); //changes the text size to 30
     text('This line is written in Tahoma 30',10,140);
     
     textFont('Times'); //changes the font to Times
     textSize(40); //changes the text size to 40
     text('This line is written in Times 40',10,180)
     
     textFont('Verdana'); //changes the font to Verdana.
     textSize(50); //changes the text size to 50
     text('This line is written in Verdana 50',10,230);
}
