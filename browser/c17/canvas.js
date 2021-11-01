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

trapezoid(10, 30, 30, 40, 20);
