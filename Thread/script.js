const threads = document.querySelectorAll(".thread");

const bulb = document.querySelector(".bulb-wrapper");

document.addEventListener("mousemove", (e) => {
  bulb.style.left = `${e.movementX / 10}px`;
  threads.forEach((thread, index) => {
    thread.style.left = `${e.movementX / 10}px`;
  });
});
