import {clearCanvas, ctx} from "./canvas.js";


const circle = {
    x: 300,
    y: 300,
    radius: 80,
    dr: 1
    // change in radius
}
    
function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius,0,Math.PI*2);
    ctx.stroke();
}

export function inhale() {

    function draw(){

        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        clearCanvas();
        drawCircle();

        ctx.font = '20px serif';
        ctx.textAlign = 'center';
        ctx.fillText('INHALE', 300, 300);

        // change size
        circle.radius += circle.dr

        if (circle.radius >= 280) {
        circle.radius = 80;
        }
    }
    
    setInterval(draw,40)
}

export function hold(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle.radius = 280
    drawCircle();
    
    ctx.font = '20px serif';
    ctx.textAlign = 'center'
    ctx.fillText('HOLD', 300, 300);
    
}

export function exhale(){
    function draw(){
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawCircle();

        ctx.font = '20px serif';
        ctx.textAlign = 'center';
        ctx.fillText('EXHALE', 300, 300);

        // change size
        circle.radius = circle.radius - circle.dr

        if (circle.radius <= 80) {
            circle.radius = 280;
        }
    }
    setInterval(draw,40)
}