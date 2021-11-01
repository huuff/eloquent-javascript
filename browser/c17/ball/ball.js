console.log("Test");

const cx = document.querySelector("canvas").getContext("2d");

const canvasSide = 100;
const radius = 10;
const bottomYLimit = canvasSide - radius;
let lastTime = null;
let centerY = bottomYLimit;
let speed = 0.2;

function animate(time) {
  cx.clearRect(0, 0, 1000, 1000);

  if (centerY <= radius || centerY >= bottomYLimit) {
    speed *= -1;
  }

  if (!lastTime) {
    centerY += speed;
  } else {
    centerY += (time - lastTime) * speed;
  }

  lastTime = time;

  cx.beginPath();
  cx.arc(canvasSide/2, centerY, radius, 0, 2 * Math.PI); 
  cx.fillStyle = "red";
  cx.fill();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
