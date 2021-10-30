const balloonElement = document.querySelector("#balloon");
let size = 12;
balloonElement.style.fontSize = `${size}px`;

function changeBalloonSize(event) {
  event.preventDefault();
  if (event.key === "ArrowUp") {
    size += (size / 10);
  } else if (event.key === "ArrowDown") {
    size -= (size / 10);
  }

  if (size >= 500) {
    balloonElement.innerHTML = "&#x1f4a5;";
    window.removeEventListener("keydown", changeBalloonSize);
  }

  balloonElement.style.fontSize = `${size}px`;
}

window.addEventListener("keydown", changeBalloonSize);
