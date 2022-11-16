import {clearCanvas, ctx} from "./canvas.js";
import { Timing } from "./timing.js";

const circle = {
    x: 300,
    y: 300,
    radius: 80,
    dr: 1,
    // change in radius
    text: "INHALE"
}
    
function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius,0,Math.PI*2);
    ctx.stroke();
}


export function breathing(time) {

    function draw(){


        clearCanvas();
        drawCircle();

        ctx.font = '20px serif';
        ctx.textAlign = 'center';
        ctx.fillText(circle.text, 300, 300);

        // change size
        circle.radius += circle.dr

        if (circle.radius >= 280) {
        circle.dr *= -1;
        circle.text = "EXHALE"
        
        }

        if (circle.radius <= 80) {
            circle.dr *= -1;
            circle.text = "INHALE"
        }


    }
    
    setInterval(draw,time/200)
    // divide time by # of frames in a full cycle
}

breathing(5000);


