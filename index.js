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
   */
  finalHexString += hexSet[Math.ceil(Math.random() * 15)];
}

console.log(finalHexString);
console.log(hexSet[15]);
console.log(Math.random() * (Math.PI * 2));
