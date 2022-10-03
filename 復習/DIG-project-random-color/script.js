'use strict';
// please do not delete the 'use strict' line above
console.log("<<<6>>>");

document.getElementById('color-button').addEventListener('click', changeColor)
const body = document.getElementsByTagName("body") ; //bodyタグの読出し
function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
  let colorselect = [ ] ;
  for (let i = 0 ; i < 3 ; i++) {
    colorselect.push(Math.trunc(Math.random( ) * 256 )) ;  //ランダム値（0以上１未満の浮動小数点乱数を最大２５６の整数にする
  }
  console.log("colorselect:" + colorselect + ",");
  body[0].style.background = "rgb(" + colorselect + ")";  //背景色の設定

}


