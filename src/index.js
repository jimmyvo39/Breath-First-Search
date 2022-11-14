import anime from 'animejs/lib/anime.es.js';

anime({
    targets: '#obj',
    scale: 20,
    backgroundColor: '#FFF',
    duration: 3000,
    loop: true,
    easing: 'linear'
});






// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// const circle = {
//     x: 300,
//     y: 300,
//     radius: 80,
//     dr: 2
//     // change in radius
// }
    
// function drawCircle(){
//     ctx.beginPath();
//     ctx.arc(circle.x,circle.y,circle.radius,0,Math.PI*2);
//     ctx.stroke();
// }


// function inhale() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   drawCircle();

//   ctx.font = '48px serif';
//     ctx.textAlign = 'center'
//     ctx.fillText('INHALE', 300, 300);

//   // change size
//   circle.radius += circle.dr
 
//   if (circle.radius >= 280) {
//     circle.radius = 80;
//   }


//   setInterval(inhale,500);
// }


// function hold(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     circle.radius = 280
//     drawCircle();
    
//     ctx.font = '48px serif';
//     ctx.textAlign = 'center'
//     ctx.fillText('HOLD', 300, 300);
    
// }


// function exhale(){
    
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawCircle();

//     ctx.font = '48px serif';
//     ctx.textAlign = 'center';
//     ctx.fillText('EXHALE', 300, 300);

//     // change size
//     circle.radius = circle.radius - circle.dr

//     if (circle.radius <= 80) {
//         circle.radius = 280;
//     }


//     setInterval(exhale,2000);
    
// }

// function breath() {
    
//     inhale();
//     hold();
//     exhale();

// }
