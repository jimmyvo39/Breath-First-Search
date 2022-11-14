import Canvas from "./scripts/canvas";



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const circle = {
    x: 300,
    y: 300,
    radius: 20,
    dr: 5 
    // change in radius
}
    
function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius,0,Math.PI*2);
    ctx.stroke();
}


function update() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
console.log(circle.radius)
  drawCircle();
  

  // change size
  circle.radius += circle.dr
 

  
  if (circle.radius >= 280) {
    circle.dr *= -1;
  }

  if (circle.radius <= 20) {
    circle.dr *= -1;
   
  }

}
setInterval(update,100);

// update();
