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

function redDiamond(topX, topY, side) {
  cx.beginPath();
  cx.save();
  cx.translate(topX + side/2, topY + side/2);
  cx.rotate(0.25 * Math.PI);
  cx.rect(-side/2, -side/2, side, side);
  cx.fillStyle = "red";
  cx.fill();
}

trapezoid(10, 30, 30, 40, 20);
redDiamond(80, 10, 20);
