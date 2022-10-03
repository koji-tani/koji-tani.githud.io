'use strict'
// Please don't delete the 'use strict' line above

test({ a: "A", b: "B" }, { b: "B", a: "A" });
console.log("◆ variables-intro ◆");

//name, age, isProgrammer, currentTask という変数を宣言し、テストケースを満たすように値を割り当てましょう。var ではなく let と const を使ってください。どの変数が再割り当て すべきではない かを考える必要があります。🤔

// 例
const school = "DIG college";
console.log(school); // "DIG college" を表示
let week = 1;
console.log(week); // "1" を表示

// ここにあなたのコードを書いてください
const name = "koji";
const age = 59;
const isProgrammer = true;
let currentTask = "1";

console.log(name); // あなたの名前を表示
console.log(age); // あなたの年齢を表示
console.log(isProgrammer); // "true" を表示
console.log(currentTask); // "1" を表示
//currentTask に 2 を割り当て直してください。
currentTask = "2";
console.log(currentTask); // "1" を表示

//基本的な数式を計算しましょう。 数式がわからない時は Google で調べましょう。

// 正方形の面積を計算して保存
const squareSideLength = 2;
// ここにあなたのコードを書いてください

let squareArea = squareSideLength ** 2 ;

console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
// ここにあなたのコードを書いてください
let rectangleArea = rectangleBaseLength * rectangleHeightLength;

console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
// ここにあなたのコードを書いてください
let triangleArea = triangleBaseLength * triangleHeightLength / 2 ;

console.log(triangleArea); // "10" を表示

//中級演習
//チャレンジ問題です。ここでは講義で説明されていないテクニックも使うかもしれません。

//あなたが予想した答えとは 少し 異なるかもしれませんが、心配しないでください。結果が予想した値と 近ければ 正解です。

// 円の円周と面積を計算して保存する
const circleDiameter = 10;
// ここにあなたのコードを書いてください
let circleCircumference = circleDiameter * 3.14 ;
let circleArea = (circleDiameter / 2 ) ** 2 * 3.14 ;

console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示

//値を直接再割り当てせずに a と b の値を入れ替えて、期待通りの値が出力されるようにしましょう。

//ヒント： データを一時的に保存するために別の変数を作成する必要があります。

let a = "B";
let b = "A";
let A = b ;
let B = a ;
a = A ;
b = B ;
console.log(a); // "A" を表示
console.log(b); // "B" を表示

//指数関数的成長 (Exponential growth) を実装してみましょう。変数 の値を変更して、2 のべき乗を求めましょう。

let value = 1;

console.log(value); // "1" を表示

// value に何かを行う
value =  value * 2 ;

console.log(value); // "2" を表示

// value に何かを行う
value =  value * 2 ;

console.log(value); // "4" を表示

// value に何かを行う
value =  value * 2 ;

console.log(value); // "8" を表示

// value に何かを行う
value =  value * 2 ;

console.log(value); // "16" を表示

// value に何かを行う
value =  value * 2 ;

console.log(value); // "32" を表示

// value に何かを行う
value =  value * 2 ;

console.log(value); // "64" を表示

//文字列結合に挑戦しましょう。いろいろな変数を連結して、期待している結果を表示してください。

const firstName = "Yan";
const lastName = "Fan";
const city = "Tokyo";
const aisatu = "Hello, my name is " + firstName + " " + lastName + ". I live in " + city + "." ;

console.log(aisatu); // "Hello, my name is Yan Fan. I live in Tokyo." を表示

//応用演習
//この演習では講義で説明されていないテクニックも使うかもしれません。

//counter という関数を宣言します。これが呼び出されたら、常に前回呼び出された時よりも 1 つ大きい数値を console.log で表示しましょう。

// ヒント： ここで何かする必要があるかもしれません
let i = 0 ;

function counter() {
  // ここにあなたのコードを書いてください
      i = i + 1 ;
  return i ;
}

//counter(); // => 1
console.log(counter());
//counter(); // => 2
console.log(counter());
//counter(); // => 3
console.log(counter());

// etc.

//isOdd という関数を宣言します。これが呼び出されたら、与えられた数値が奇数かどうかを console.log で表示しましょう。

function isOdd(givenNumber) {
  // ここにあなたのコードを書いてください
  let result = "" ;
  const vaiue = givenNumber % 2 ;
        console.log(vaiue);
  if ( vaiue === 0 ) {
          result = "Yes, it's odd" ;
  } else {
          result = "No, it's even" ;
  }
  console.log(result);

  return result ;
}
  // 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示
  console.log(isOdd( 4 ));
  console.log(isOdd( 5 ));

  //2022年8月15日完了
