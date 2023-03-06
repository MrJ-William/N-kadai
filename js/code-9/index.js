/**
 * 目的：
 * 点がcanvas上ランダムに配置されていて、ランダムのスピードで移動、マウスを避けて、点同士近い場合は線で繋がれる
 */

/**
 * 1. canvas上に点をランダムで配置する
 *   点 = 色:ランダム, サイズ:半径5 の円, 数: 指定なし
 *
 * 2. 点をランダムのスピードで移動させる
 *   2.1 指定の方向に一定のスピードで移動させる
 *   2.2 2.1をランダムの方向に変える
 *   2.3 canvasの枠にぶつかった時90度で跳ね返るようにする
 *
 * 3. 点の軌跡を少しなぞらせる
 *
 * 4. マウスを避けさせる
 *   マウスに対して半径xの円を避けさせる
 *   マウスの初期値から円をもたせる
 *
 * 5. 指定した距離内の点同士は線で繋がれるようにする
 */

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.globalAlpha = 0.5;

setSize();
//描画
draw();

function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}

function draw() {
  requestAnimationFrame(draw);

  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);
}
