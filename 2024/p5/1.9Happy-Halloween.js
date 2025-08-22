function setup() {
    createCanvas(600,600);
    background("gray");
}
function draw() {
    stroke(0);
    strokeWeight(3); //sets the strokeWeight to 3
    line(300,0,300,600); //start of the web
line(0,300,600,300);
   line(0,0,600,600);
    line(600,0,0,600);
    //web 1
    line(50,48,37,300);
    line(93,91,87,300);
   line(140,146,143,301);
    line(186,184,197,295);
    
    //web 2
    line(50,48,301,20);
    line(93,91,301,62);
   line(140,146,301,109);
    line(186,184,301,164);
    
    //web 3
     line(301,20,576,25);
    line(301,62,539,64);
   line(301,109,499,103);
    line(301,164,435,168);
    
    //web 4
     line(576,25,571,300);
    line(539,64,533,296);
   line(499,103,475,299);
    line(435,168,415,297);
    
    //web 5
    line(571,300,561,554);
    line(533,296,500,496);
   line(475,299,437,434);
    line(415,297,387,383);
    
    //web 6
    line(561,554,302,582);
    line(500,496,299,554);
   line(437,434,302,459);
    line(387,383,303,394);
    
    //web 7
    line(302,582,43,559);
    line(299,554,80,522);
   line(302,459,160,440);
    line(303,394,221,376);
    
    //web 8
    line(43,559,37,300);
    line(80,522,87,300);
   line(160,440,143,301);
    line(221,376,197,295);
    
    //spider legs
    fill(0);
    line(370,223,323,214); //first leg
    line(366,244,309,255); //2nd leg
    line(361,277,323,293); //3rd leg
    line(367,307,340,324); //4th leg
    line(457,217,506,203); //5th leg
    line(480,243,509,246); //6th leg
    line(480,282,510,281); //7th leg
    line(474,303,484,333); //8th leg
    
    //spider face
     fill(0); //changes color to black for the face
     strokeWeight(1); //sets strokeWeight back to 1.
    ellipse(421,269,125); //the face is an ellipse
    fill(255); //color for the eyes
    circle(400,240,30); //left eye
    circle(450,240,30); //right eye
    fill(0); //pupil color
    circle(400,240,15); //left pupil
    circle(450,240,15); //right pupil
    fill(230, 133, 37); //make color for mouth
    stroke(230, 133, 37); //make color for mouth
    circle(395,280,30); //left circle for mouth
    circle(450,280,30); //right circle for mouth
    fill(0); //do this in order for the trick to work.
    arc(420,300,50,50,50,PI);
    
    //Happy Halloween Text
    stroke(255);
    fill(255);
    textSize(40); //sets the TextFont to 20
    textFont('Comic Sans') //sets the font to Comic Sans
    text("Happy Halloween",150,500);
    
    
//   print(mouseX, ",", mouseY);
}
