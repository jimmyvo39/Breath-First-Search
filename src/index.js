
import { breathing} from "./scripts/circle.js";
// import {Timing} from "./scripts/timing.js";

const button = document.getElementById("hold");

let time = new Timing(button);
//default time is 2800ms




// breathing(time.inhale)

class Timing {
    
    constructor(button){
        this.button = button;
        this.inhale = 2800;
        this.start = 0;
        this.end = 0;
        this.duration = 0;
        
        this.button.addEventListener("mousedown", this.onmousedown.bind(this));
        this.button.addEventListener("mouseup", this.onmouseup.bind(this))
    }

    
    onmousedown() {
        this.start = Date.now();
    };
    
    onmouseup() {

        this.end = Date.now();
        this.duration = this.end - this.start;
        // this.inhale = this.duration

        // console.log("start: ",this.start)
        // console.log("end: ",this.end)
        // console.log("duration: ", this.duration)
        
        breathing(this.duration)
        
    };
}














