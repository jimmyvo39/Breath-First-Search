export class Timing {
    constructor(inhale = 4000){
        this.inhale = inhale;
   
        // this.inhale.addEventListener("keyup", this.setInhale(this))
    }


    
   //need 2 even listener key down to get start time. key up to get end time

   
}

let start = 0;
let end = 0;
let duration = 0;

window.onkeydown = function(e) {
    if (e.key === " " ) {
        start = e.timeStamp;
    }
};

window.onkeyup = function(e) {
    if ( e.key === " " ) {
        end = e.timeStamp
        duration = end - start;

        console.log(duration)
    }
    
    // this.inhale = duration
};

