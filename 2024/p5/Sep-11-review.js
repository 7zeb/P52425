function setup() {
    createCanvas(400,400);
    background(200);
}

function draw() {
   //first row
   fill("red");
   textSize(15);
   text("Complete",20,20);
   text("Arc",35,35); 
   
   //arc(x1,y2,width,height,start angle,stop angle *in radients*)
   arc(50,60,50,50,0,PI); //PI is half a circle.
   
   fill("blue");
   textSize(15);
   text("Right",125,20);
   text("Triangle",120,35);
   
   fill(0);
   textSize(15);
   text("Ellipse",220,20);
   //text("Triangle",220,20)
   
   //Tic Tac Toe
   fill(0,200,0);
   textSize(15);
   text("Tic Tac Toe",320,20);
}
