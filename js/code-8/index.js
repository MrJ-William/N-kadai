const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let mouseX = 0;
let mouseY = 0;

//軌跡を保存する配列
let path = [];

setSize();

function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}

canvas.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  path.push({ x: mouseX, y: mouseY });
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //描き始めたら
  if (path.length > 0) {
    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);

    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(path[i].x, path[i].y);
    }

    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  requestAnimationFrame(draw);
}

draw();
