function setup() {
  createCanvas(600, 500); //creates the sky background
  background(48,210,255); //makes the color blueish like a sky.
}
function draw() {
fill(240, 187, 12); //orangeish color for first part of the sun
circle(272,170,115); //first part of the sun

fill(236, 242, 48); //yellowish color for seccond part of the sun.
circle(272,170,94); //seccond part of the sun.

fill(256,256,256); //color for the eyes.
circle(255,150,17); //first eye
circle(295,150,17); //seccond eye

fill(0); //color for the pupils
circle(255,150,9); //first pupil
circle(295,150,9); //seccond pupil

fill(176, 137, 79); //brownish color for first block
rect(0,179,901,120); //first block

fill(237, 178, 130); //peachish color for 2nd block
rect(0,270,901,140); //2nd block

fill(138, 124, 112); //dark-brownish-grayish color for 4th block.
rect(0,370,901,140); //4th block

fill(92, 65, 47); //another darkish-brown color for 3th block
rect(0,370,901,80);//3rd block
}
