export class Timing {
    constructor(inhale = 2800){
        this.inhale = inhale;
   
        // this.inhale.addEventListener("keyup", this.setInhale(this))
    }


    
   //need 2 even listener key down to get start time. key up to get end time

   
}

let start = 0;
let end = 0;
let duration = 0;

window.onkeydown = function(e) {
    if (e.key === ' ') {
        start = Date.now();
    }
};

window.onkeyup = function(e) {
    if (e.key === ' ') {
        end = Date.now();
        duration = end - start;

        
        console.log("start: ",start)
        console.log("end: ",end)
        console.log("duration: ",(duration))
    }
    
};

  