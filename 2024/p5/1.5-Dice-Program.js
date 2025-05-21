function setup() {
    createCanvas(250,200); //creates an 400x200 canvas
    background(255,0,0); //makes the background red
}
function draw() {
    //debugging tools.
//     background(255,0,0); //this is important, without this the code will break.
//   fill(255);
//   text("(" + int(mouseX) + ", " + int(mouseY) + ")", mouseX, mouseY);
    
    //first dice
    strokeWeight(1); //resets the stroke Weight
    stroke(255); //resets the stroke color
    rect(20,30,50,50); //first dice
    
    stroke(255,0,0); //makes the point color red
    strokeWeight(10); //sets the stroke weight to 10
    point(45,55); //first dot of the first dice.
    
    //2nd dice
    stroke(255); //makes the dice color white
    strokeWeight(1); //resets the storke Weight
    rect(90,30,50,50); //2nd dice
    
    stroke(255,0,0); //makes the point color red
    strokeWeight(10); //sets the stroke weight to 10
    point(105,40); //first dot of the 2nd dice.
    point(125,70); //2nd dot of the 2nd dice.
    
    //3rd dice)
    stroke(255); //makes the dice color white
    strokeWeight(1); //resets the storke Weight
    rect(155,30,50,50); //3rd dice
    
    stroke(255,0,0); //makes the point color red
    strokeWeight(10); //sets the stroke weight to 10
    point(165,42); //first dot of the 3rd dice.
    point(179,59); //2nd dot of the 3rd dice.
    point(195,70); //3rd dot for the 3rd dice
    
    //4th dice
    stroke(255); //sets the dice color white
    strokeWeight(1); //resets the stroke weight
    rect(20,130,50,50); //4th dice
    
    stroke(255,0,0); //makes the point color red
    strokeWeight(10); //makes the stroke weight 10.
    point(29,142); //first dot of the 4th dice.
    point(62,142); //2nd dot of the 4th dice.
    point(29,168); //3rd dot for the 4th dice
    point(62,168); //4th dot for the 4th dice
    
    //5th dice
     stroke(255); //sets the dice color white
    strokeWeight(1); //resets the stroke weight
    rect(90,130,50,50); //5th dice
    
     stroke(255,0,0); //makes the point color red
    strokeWeight(10); //makes the stroke weight 10.
    point(99,142); //first dot of the 5th dice.
    point(110,157); //2nd dot of the 5th dice.
    point(99,172); //3rd dot for the 5th dice
    point(129,142); //4th dot for the 5th dice
    point(129,172); //5th dot for the 5th dice
    
    //6th dice
    stroke(255); //sets the dice color white
    strokeWeight(1); //resets the stroke weight
    rect(160,130,50,50); //6th dice
    
     stroke(255,0,0); //makes the point color red
    strokeWeight(10); //makes the stroke weight 10.
    point(170,140); //1st dot for the 6th dice
    point(170,156); //2nd dot for the 6th dice
    point(170,172); //3rd dot for the 6th dice
    point(198,140); //1st dot for the 6th dice
    point(198,156); //2nd dot for the 6th dice
    point(198,172); //3rd dot for the 6th dice
    
}
