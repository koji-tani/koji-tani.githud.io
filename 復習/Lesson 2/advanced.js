'use strict'

console.log("hello advanced.js!");

//下記に guessMyNumber と randomNumber というコードがあります。これらのコードを読んで、コンソールで関数のテストを行いましょう。guess は推測する、あてるという意味です。
// 例題のコードの場合
// function guessMyNumber(n) {
//   if (n > 5) {
//     return "Please try a number between 0 and 5.";
//   } else if (n === randomNumber(5)) {
//     return "You guessed my number!";
//   }
//   return "Nope! Wrong number!";
// }

// function randomNumber(n) {
//   return Math.floor(Math.random() * (n + 1));
// }
// console.log(guessMyNumber(5));

//  改良版コード（randomNumber(5)の値を表示するコード）
// function guessMyNumber(n) {
//   const randomNumberRezult = randomNumber(5) ;
//   console.log("randomNumberRezult:" + randomNumberRezult + ",");
//   if (n > 5) {
//     return "Please try a number between 0 and 5.";
//   } else if (n === randomNumberRezult) {
//     return "You guessed my number!";
//   }
//   return "Nope! Wrong number!";
// }

// function randomNumber(n) {
//   return Math.floor(Math.random() * (n + 1));
// }
// console.log(guessMyNumber(3));

//上記のコードは、0 から 5 の間の数値をあてる関数です。
//5 が数値の上限だと考えることができますね。
//それでは、次の質問をクラスメイトと一緒に考えてみましょう。
//上限を 6 に変更するにはどのように変更すれば良いですか？
  
// function guessMyNumber(n) {
//   const randomNumberRezult = randomNumber(6) ;
//   console.log("randomNumberRezult:" + randomNumberRezult + ",");
//   if (n > 6) {
//     return "Please try a number between 0 and 6.";
//   } else if (n === randomNumberRezult) {
//     return "You guessed my number!";
//   }
//   return "Nope! Wrong number!";
// }

// function randomNumber(n) {
//   return Math.floor(Math.random() * (n + 1));
// }
// console.log(guessMyNumber(6));

//変更は何箇所、必要ですか？ 3箇所
//上限を入れる変数 upperBound を宣言し、5 という数字の代わりにその変数を引数として渡すように修正してください。こうすれば、上限をほかの数値（たとえば 7 ）に変更する場合、この変数を変更するだけ、つまり 1 ヶ所の変更だけで済みます。

// function guessMyNumber(n) {
//     const upperBound = 8 ;

//     if (n > upperBound ) {
//       return "Please try a number between 0 and " + upperBound + ".";
//     } else if (n === randomNumber(upperBound)) {
//       return "You guessed my number!";
//     }
//     return "Nope! Wrong number!";
//   }
  
//   function randomNumber(n) {
//     return Math.floor(Math.random() * (n + 1));
//   }
//   console.log(guessMyNumber(8));

  //  改良版コード（randomNumber(5)の値を表示するコード）
// function guessMyNumber(n) {
//   const upperBound = 8 ;
//   const randomNumberRezult = randomNumber(upperBound) ;
//   console.log("randomNumberRezult:" + randomNumberRezult + ",");
//   if (n > upperBound) {
//     return "Please try a number between 0 and " + upperBound + ".";
//   } else if (n === randomNumberRezult) {
//     return "You guessed my number!";
//   }
//   return "Nope! Wrong number!";
// }

// function randomNumber(n) {
//   return Math.floor(Math.random() * (n + 1));
// }
// console.log(guessMyNumber(9));

 
//  // guessMyNumberに渡した数値が間違っていた場合は、正しい答えと一緒にメッセージが出力されるようにguessMyNumber を編集しましょう。例: "違います！正しい数は: x でした。" （xに正解が入る。）

function guessMyNumber(n) {
  const upperBound = 8 ;
  const randomNumberRezult = randomNumber(upperBound) ;
  console.log("randomNumberRezult:" + randomNumberRezult + ",");
  if (n > upperBound) {
    return "Please try a number between 0 and " + upperBound + ".";
  } else if (n === randomNumberRezult) {
    return "You guessed my number!";
  }
  return "違います！正しい数は:" + randomNumberRezult + " でした。";
}

function randomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}
console.log(guessMyNumber(8));


  //理解度チェック
  //関数を実行するとき、仮引数より実引数の数が少ない、もしくは多い場合、何が起こりますか？ => 少ない=>エラー　多い=>無視
  //return キーワードは何をしますか？　関数の 外側 で使うことはできますか？ => 返り値を出力。　外では機能しない 

  //2022年8月16日　完了 10月2日見直し修正