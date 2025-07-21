const threads = document.querySelectorAll(".thread");

const bulb = document.querySelector(".bulb-wrapper");

const body = document.querySelector("body");

window.addEventListener("mousemove", (e) => {
  //   if (isOn) {
  //     body.setAttribute(
  //       "style",
  //       `--background-position-x: calc(50% + ${
  //         e.movementX / 5
  //       }px); --background-position-y: calc(50% + 20px);`
  //     );
  //   }
  bulb.style.left = `${e.movementX / 5}px`;
  threads.forEach((thread, index) => {
    thread.style.left = `${e.movementX / 5}px`;
  });
});

const bulbTopPath = document.querySelector(".bulb-top svg path");

let isOn = false;
bulb.addEventListener("click", () => {
  if (isOn == false) {
    bulbTopPath.setAttribute("fill", "white");
    body.style.background =
      "radial-gradient(circle at var(--background-position-x) var(--background-position-y), white 3%, #333 50%, black)";
    isOn = true;
  } else if (isOn == true) {
    bulbTopPath.setAttribute("fill", "#ffffff4d");
    isOn = false;
    body.style.background =
      "radial-gradient(circle at 50% 50%, #333, black, black)";
  }
});
