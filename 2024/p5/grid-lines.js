function setup() {
  createCanvas(400,400); // Set the canvas size to 400x400
  background(92, 83, 83); //sets the color to gray
  let cellSize = 40; // Size of each grid cell
  let gridColor = color(0); // Color for the grid lines (black, and white)
   let pointColor = color(255); // Color for the points (white)
    let plusSize = 100; // Length of each arm of the plus sign
  let strokeWidth = 20; // Width of the plus sign lines
  
 // drawPlusSign(width / 2, height / 2, plusSize, strokeWidth);
   
  stroke(gridColor); // Set the stroke color for grid lines

  // Draw the grid with 'X' shapes
  for (let x = 0; x <= width; x += cellSize) {
      stroke(255);
    for (let y = 0; y <= height; y += cellSize) {
      drawX(x, y, cellSize);
    //   drawPoints(x, y, cellSize, pointColor); 
    }
  }

     drawPlusSign(width / 2, height / 2, plusSize, strokeWidth);
}

function drawX(x, y, size) {
  // Draw diagonal lines forming an 'X' in the cell
  stroke(0);
  line(x, y, x + size, y + size); // Main diagonal from top-left to bottom-right
  stroke(255);
  line(x + size, y, x, y + size); // Cross diagonal from top-right to bottom-left
}


function drawPlusSign(cx, cy, plusSize, strokeWidth) {
  stroke(255); // Set stroke color to white
  strokeWeight(1); // Set stroke weight for line thickness
  noFill(); // No fill for the lines
  
  // Draw the vertical line of the plus sign
  line(cx, cy - plusSize / 8, cx, cy + plusSize / 8);
  
  // Draw the horizontal line of the plus sign
  line(cx - plusSize / 8, cy, cx + plusSize / 8, cy);
}
