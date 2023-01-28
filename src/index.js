
import { breathing} from "./scripts/circle.js";
import {clearCanvas} from "./scripts/canvas.js";

let intervalId;
let interval = 2800/200;
let startTime;

function invokeFunction(interval) {
  breathing(interval);
}

intervalId = setInterval(invokeFunction, interval);

document.getElementById("hold").addEventListener("mousedown", function(event) {
  startTime = Date.now();
  clearCanvas();
  clearInterval(intervalId);
});

document.getElementById("hold").addEventListener("mouseup", function(event) {
  clearInterval(intervalId);
  interval = Date.now() - startTime;
  intervalId = setInterval(invokeFunction, interval/200,interval);
//   console.log(interval)
});

const modals = document.querySelectorAll("[data-modal]");

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});















