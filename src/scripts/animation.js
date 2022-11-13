let stage = document.getElementById("stage");
let ctx = stage.getContext(("2d"));

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

class Animation {
    constructor(ele) {
      this.ele = ele
      this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>"
  
      this.ele.addEventListener("click", this.handleClick.bind(this))
    }

  }
  
  export default Animation;

  