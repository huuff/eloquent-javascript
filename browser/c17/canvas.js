const canvas = document.querySelector("canvas");

let cx = canvas.getContext("2d");

function trapezoid(leftX, bottomY, topHeight, bottomHeight, width) {
  cx.beginPath();
  cx.moveTo(leftX, bottomY);
  cx.lineTo(leftX + bottomHeight, bottomY);
  cx.lineTo(leftX + topHeight, bottomY - width)
  cx.lineTo(leftX + (bottomHeight - topHeight), bottomY - width); 
  cx.lineTo(leftX, bottomY);
  cx.stroke();
}

function redDiamond(leftX, topY, side) {
  cx.beginPath();
  cx.save();
  cx.translate(leftX + side/2, topY + side/2);
  cx.rotate(0.25 * Math.PI);
  cx.rect(-side/2, -side/2, side, side);
  cx.fillStyle = "red";
  cx.fill();
  cx.restore();
}

function ziggy(leftX, topY, rightX, bottomY, lines) {
  const xChange = (rightX - leftX);
  const yChange = (bottomY - topY) / lines;
  let direction = 1;
  let nextX = leftX + xChange;
  let nextY = topY + yChange;
  cx.beginPath();
  cx.moveTo(leftX, topY);
  for (let i = 1; i < lines; i++) {
   cx.lineTo(nextX, nextY); 
    direction *= -1;
    nextX += (xChange * direction);
    nextY += yChange;
  }
  cx.stroke();
}

function spiral(centerX, centerY, strokes, radius) {
  const angleIncrements = (10 * Math.PI) / strokes;
  const radiusDecrements = radius / strokes;
  let angle = 0;
  cx.beginPath();
  cx.moveTo(centerX + (Math.cos(angle) * radius), centerY + (Math.sin(angle) * radius));
  for (let i = 0; i < strokes; i++) {  
    angle += angleIncrements;
    radius -= radiusDecrements;
    let xCoord = centerX + (Math.cos(angle) * radius);
    let yCoord = centerY + (Math.sin(angle) * radius);
    console.log(`Next coordinates: (${xCoord}, ${yCoord}), Next angle: ${angle}, Next radius: ${radius}`)
    cx.lineTo(xCoord, yCoord);
  }
  cx.stroke();
}


trapezoid(10, 30, 30, 40, 20);
redDiamond(80, 10, 20);
ziggy(120, 10, 140, 40, 10);
spiral(180, 20, 100, 20);
