
import { breathing} from "./scripts/circle.js";

let intervalId;
let interval = 2800/200;
let startTime;

function invokeFunction(interval) {
  breathing(interval);
}

intervalId = setInterval(invokeFunction, interval);

document.getElementById("hold").addEventListener("mousedown", function(event) {
  startTime = Date.now();
  clearInterval(intervalId);
});

document.getElementById("hold").addEventListener("mouseup", function(event) {
  clearInterval(intervalId);
  interval = Date.now() - startTime;
  intervalId = setInterval(invokeFunction, interval/200,interval);
//   console.log(interval)
});
















