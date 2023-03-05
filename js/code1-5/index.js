function draw() {
  var code_1 = document.getElementById("code_1");
  var code_2 = document.getElementById("code_2");
  var code_3 = document.getElementById("code_3");
  var code_4 = document.getElementById("code_4");
  var code_5 = document.getElementById("code_5");

  /**
   * code - 1
   */

  if (code_1.getContext) {
    console.log("呼び出されました");
    var ctx = code_1.getContext("2d");
    ctx.beginPath();
    ctx.arc(150, 75, 10, 0, Math.PI * 2, true);
    ctx.fill();
  }

  /**
   * code - 2
   */

  if (code_2.getContext) {
    var ctx = code_2.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(50, 75);
    ctx.lineTo(175, 75);
    ctx.stroke();
  }

  /**
   * code - 3
   */

  if (code_3.getContext) {
    var ctx = code_3.getContext("2d");
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI, false);
    ctx.moveTo(225, 75);
    ctx.arc(175, 75, 50, 0, Math.PI, true);
    ctx.stroke();
  }

  /**
   * code - 4
   */

  if (code_4.getContext) {
    var ctx = code_4.getContext("2d");

    ctx.fillRect(50, 50, 50, 50);
    ctx.strokeRect(25, 25, 100, 100);

    ctx.beginPath();
    ctx.arc(200, 75, 50, 0, Math.PI * 2, true);
    ctx.fill();
  }

  /**
   * code - 5
   */

  if (code_5.getContext) {
    var ctx = code_5.getContext("2d");

    // 矩形を canvas の原点で回転する
    ctx.save();
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(50, 50, 50, 50);
    ctx.rotate((Math.PI / 180) * 25);
    ctx.fillStyle = "#4D4E53";
    ctx.fillRect(50, 50, 50, 50);
    ctx.restore();

    //  矩形の中心で回転する
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(150, 30, 80, 80);

    ctx.translate(190, 70); // 矩形の中心に移動する
    ctx.rotate((Math.PI / 180) * 25);
    ctx.translate(-190, -70); // 元の位置に移動する

    ctx.fillStyle = "#4D4E53";
    ctx.fillRect(150, 30, 80, 80);
  }
}
