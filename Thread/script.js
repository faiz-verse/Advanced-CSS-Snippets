const threads = document.querySelectorAll(".thread");
const mousePosition = document.querySelector(".mouse-position");

document.addEventListener("mousemove", (e) => {
  mousePosition.innerHTML = `X: ${e.clientX} Y: ${e.clientY}`;

  threads.forEach((thread, index) => {
    thread.style.background = "red";
    thread.style.left = `${e.movementX}px`;
  });
});
