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
    ctx.globalAlpha = 0.9
    ctx.font = '20px serif';
    ctx.textAlign = 'center';
    ctx.fillText(circle.text, 300, 595);

    const gradient = ctx.createRadialGradient(circle.x,circle.y,20,circle.x,circle.y, 250)
    gradient.addColorStop(0, "black");
    gradient.addColorStop(0.25, "aqua");
    gradient.addColorStop(0.5, "white");
    gradient.addColorStop(1, "navy");

    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius,0,Math.PI*2);
    // ctx.stroke();

    ctx.fillStyle = gradient;
    ctx.fill()

}


export function breathing(time) {
    function draw(){
        clearCanvas();
        drawCircle();

        circle.radius += circle.dr;
        // change size

        if (circle.radius >= 280) {
            //change radius direction and text
            circle.dr *= -1;
            circle.text = "EXHALE"
        }

        if (circle.radius <= 80) {
            //change radius direction and text
            circle.dr *= -1;
            circle.text = "INHALE"
        }
    }
    
    setInterval(draw,time/200)
    // divide time by # of frames in a full cycle
}

// breathing(4000);


