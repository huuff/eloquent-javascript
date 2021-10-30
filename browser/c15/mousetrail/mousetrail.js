const trailers = Array.from(document.querySelectorAll(".mousetrail"));

let index = 0;
window.addEventListener("mousemove", (event) => {
  const currentTrailer = trailers[index];
  currentTrailer.style.left = `${event.pageX}px`;
  currentTrailer.style.top = `${event.pageY}px`;
  index = (index + 1) % trailers.length;
});
