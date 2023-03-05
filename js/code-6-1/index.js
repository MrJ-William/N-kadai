const canvas = document.getElementById("cw");
// 二次元軸ででキャンバスを利用することを宣言
const context = canvas.getContext("2d");
//キャンバスに描画されるものの透明度を修正 >> globalAlpha
context.globalAlpha = 0.5;

//初期値の場所を決める
const cursor = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

//粒子
let particlesArray = [];

//粒子の数 と 位置 形状
generateParticles(101);
//キャンバスのサイズ
setSize();
anim();

addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    cursor.x = e.touches[0].clientX;
    cursor.y = e.touches[0].clientY;
  },
  { passive: false }
);

addEventListener("resize", () => setSize());

function generateParticles(amount) {
  for (let i = 0; i < amount; i++) {
    particlesArray[i] = new Particle(
      innerWidth / 2,
      innerHeight / 2,
      4,
      //色を決める
      generateColor(),
      0.02
    );
  }
}

//色をランダムで生成している
function generateColor() {
  //hexadecimal >> 16進数の >> hex(略)
  let hexSet = "0123456789ABCDEF";
  let finalHexString = "#";
  for (let i = 0; i < 6; i++) {
    /**
     * Math.ceil(Math.random() * 15)
     * Math >> 数学的な定数と関数を提供するプロパティとメソッドを持つ 組み込みオブジェクト
     * Math.ceil() >> 関数は、引数として与えた数以上の最小の  整数  を返します。 >> 小数点を消して整数にしてくれる
     * Math.random() >> 関数は、 0 以上 1 未満 (0 は含むが、 1 は含まない) の範囲で浮動小数点の擬似乱数(ランダム)を返します。
     * 疑似乱数 >> 見乱数のように規則性のない数の並びのように見えるが、一定の計算手順によって確定的に与えられる数値の列 >> 乱数の代わりに利用する
     *
     * hexSet[] >> 引数の値番目の数字を文字列として追加する >> 0〜15番目までの文字列を疑似乱数で取得する
     */
    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
  }
  return finalHexString;
}

function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}

function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
  this.x = x;
  this.y = y;
  this.particleTrailWidth = particleTrailWidth;
  this.strokeColor = strokeColor;
  //度数 0〜360° の中で
  this.theta = Math.random() * Math.PI * 2;

  this.rotateSpeed = rotateSpeed;
  this.t = Math.random() * 150;

  //無名関数
  this.rotate = () => {
    //初期値
    const ls = {
      x: this.x,
      y: this.y,
    };
    this.theta += this.rotateSpeed;

    //Math.cos() >>  静的関数で、指定された角度の余弦 (コサイン) を返します。
    this.x = cursor.x + Math.cos(this.theta) * this.t;
    this.y = cursor.y + Math.sin(this.theta) * this.t;

    context.beginPath();
    context.lineWidth = this.particleTrailWidth;
    context.strokeStyle = this.strokeColor;
    context.moveTo(ls.x, ls.y);
    context.lineTo(this.x, this.y);
    context.stroke();
  };
}

function anim() {
  /**
   * requestAnimationFrame() >> このメソッドは、ブラウザーにアニメーションを行いたいことを知らせ、
   * 指定した 関数 を呼び出して次の再描画の前にアニメーションを更新することを要求します。
   * このメソッドは、再描画の前に呼び出されるコールバック 1 個を引数として取ります。
   */
  requestAnimationFrame(anim);

  //キャンバスの描画
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //rotate >> 回転
  particlesArray.forEach((particle) => particle.rotate());
}

// Math.ceil(Math.random() * 15)
