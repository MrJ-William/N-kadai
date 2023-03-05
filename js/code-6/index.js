var box = document.getElementById("box");

document.addEventListener("mousemove", function (event) {
  var x = event.clientX;
  var y = event.clientY;
  box.style.left = x + "px";
  box.style.top = y + "px";
});
