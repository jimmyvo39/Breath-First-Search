
import { breathing} from "./scripts/circle.js";
import {Timing} from "./scripts/timing.js";

const button = document.getElementById("hold");

let time = new Timing(button);
//default time is 2800ms


breathing(time.inhale)










