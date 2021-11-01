const results = [
  { name: "Satisfied", count: 1043, color: "lightblue" },
  { name: "Neutral", count: 563, color: "lightgreen"},
  { name: "Unsatisfied", count: 510, color: "pink" },
  { name: "No comment", count: 175, color: "silver"}
];

let cx = document.querySelector("canvas").getContext("2d");
let total = results.reduce((sum, {count}) => sum + count, 0);
let currentAngle = -0.5 * Math.PI;
cx.font = "30px Arial";
const radius = 100;
for (let result of results) {
  let sliceAngle = (result.count / total) * 2 * Math.PI;
  cx.beginPath();
  cx.arc(200, 200, radius, currentAngle, currentAngle + sliceAngle);
  currentAngle += sliceAngle;
  cx.lineTo(200, 200);
  cx.fillStyle = result.color;
  cx.fill();
}

currentAngle = -0.5 * Math.PI;
for (let result of results) {
  let sliceAngle = (result.count / total) * 2 * Math.PI;
  let midAngle = currentAngle + (sliceAngle / 2);
  cx.fillStyle = "black";
  cx.fillText(result.name, 200 + Math.cos(midAngle) * (radius), 200 + Math.sin(midAngle) * (radius));
  currentAngle += sliceAngle;
}
