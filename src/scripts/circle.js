import {clearCanvas, ctx} from "./canvas.js";
// import { Timing } from "./timing.js";

const circle = {
    x: 300,
    y: 300,
    radius: 80,
    dr: 1,
    // change in radius
    text: "INHALE"
}

    
function drawCircle(){
    // ctx.globalAlpha = 0.9
    
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
    
    ctx.font = '20px serif';
    ctx.textAlign = 'center';
    ctx.fillText(circle.text, 300, 600);
}


export function breathing(time) {

    clearCanvas();
    drawCircle();

    if(!time) time = 2800

    circle.radius += circle.dr;
    // change size

    if (circle.radius >= 280) {
        //change radius direction and text
        circle.dr *= -1;
        circle.text = "EXHALE FOR " + time/1000 + " SECONDS"
    }

    if (circle.radius <= 80) {
        //change radius direction and text
        circle.dr *= -1;
        circle.text = "INHALE FOR " + time/1000 + " SECONDS"
    }
    
}



