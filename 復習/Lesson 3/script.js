'use strict'
// Please don't delete the 'use strict' line above

test({ a: "A", b: "B" }, { b: "B", a: "A" });
console.log("◆Lesson3◆");

//演習
//_lesson-template フォルダをコピーして、comparisons-intro フォルダを作りましょう。

//演習には script.js を使います。

//基礎演習
//比較
//1.以下のコードの expression（式） がどういう結果を導き出すか、まず頭で考えてみましょう。考えたら、コンソールにこのコードを打って、答えを確かめてください。

//"true" == true; //false
// 基本的に == は使わず、必ず === を使うようにしましょう。
// "true" === true; //false
// 3 >= 3; //true
// 3 !== 4; //true

//2.以下のコードを script.js にコピーして、それぞれの文が boolean 型の値を表示するよう、??? の部分を適切な比較演算子で埋めましょう。index.html を Chrome で開き、コンソールで結果をチェックしてください。

// console.log(1100 > 99) // => true を表示させる。

// console.log(1 === 21) // => false

// console.log(62 !== 63) // => true

// console.log("5" === 5) // => false

// console.log("6" !== "six") // => true

//3.script.js に以下のコードをコピーして、「算術演算子」を「１つだけ」変えましょう。そのとき、以下の expression（式） の結果が true になるようにしてください。expression（式） が算術演算子を評価する順番を確認しておきましょう！

//console.log(2 + 3 * 10 > 50); // 32 > 50 => false
//console.log(2 * 3 * 10 > 50); // 60 > 50 => true

//4.以下の関数を script.js にコピーして、expression（式） が true と評価されるように ??? の部分に、異なる 2 つの引数を渡してみましょう。
//  ヒント：=== は値とデータ型両方の一致を評価し、== は値の一致のみを評価します。

// function isEqual(valueOne, valueTwo) {
//   return valueOne == valueTwo;
// }

// console.log(isEqual(5, "5")); // true

//5.以下の関数を script.js に追加して、valueOne が valueTwo より大きいとき true を返すよう関数の中身を書いてください。

//関数の返り値をコンソールに表示させるには console.log を使いましょう。

// function isGreaterThan(valueOne, valueTwo) {
//     return valueOne > valueTwo ;
// } ;

// console.log(isGreaterThan( 5 , 3 ));
// //テストケースをいくつか書いてみましょう！ また、false が表示されるように２つの異なる引数を渡して isGreaterThan を呼び出してみましょう。
// console.log(isGreaterThan( 5 , 4 ));
// console.log(isGreaterThan( 5 , 5 ));

//6.日本では、20 歳以上になるとアルコールを飲めるようになります。script.js に 、数値 型の引数を 1 つ取り、与えられた年齢がアルコールを飲める年齢かどうかを boolean 型で返す（ return する）isOfAge という関数を declare（宣言） しましょう。

// function isofAge(num) {
//     return num >= 20 ; 
// } ;
// console.log(isofAge(20)); // true

//中級演習
//この演習では講義で説明されていないテクニックを自分で調べる必要があるかもしれません。

//1.先ほど作成した関数 isOfAge を「ブーリアンの値を返すだけではなく、飲める年齢なのかどうかを表す文字列をコンソールに表示する関数」になるよう修正しましょう。

// function isofAge(num) {
//     const value = num >= 20 ; 
//     if (value === true) {
//         return "あなたは" + num + "才、飲める年齢です！" ;
//     } else {
//         return "あなたは" + num + "才、飲める年齢ではありません!!" ;
//     }
// } ;
// console.log(isofAge(22)); 

//2.引数に数字 n をとる isEven という名前の関数を作成しましょう。引数が偶数であれば true を、そうでなければ false を返してください。

// function isEven (num) {
//     return num % 2 === 0 ;
// } ;

// console.log(isEven (10));

//3.2 つの引数 username と password をとる validCredentials という名前の関数を作成しましょう。両方の引数が十分な長さであれば true を、そうでなければ false を返してください。「十分な長さ」は自由に決めてください。

// function validCredentials (username , password) {
//     return username.length > 4 && password.length > 4 ;
// } ;

// console.log(validCredentials("maiku" , "aaaaa"));

//応用演習
//この演習では講義で説明されていないテクニックを自分で調べる必要があるかもしれません。

//1. ％ 演算子を使用しないで isEven 関数を書き換えてください。

// function isEven (num) {
//     const value = num / 2 ;
//     const valuefloor = Math.floor(value) ; //小数点以下を削除
//         console.log("value;" + value + ".");
//         console.log("valuefloor;" + valuefloor + ".");
// return value === valuefloor ; //偶数ならばture,奇数ならばfalse
// } ;

// console.log(isEven (3));

//2. 2 つの引数のうち大きい数字を返す getGreaterValue という名前の関数を作成してください。

// function getGreaterValue(num1 , num2 ) {
//     if (num1 > num2) {
//         return num1 ;
//     }else {
//         return num2 ;
//     }
// } ;

// console.log(getGreaterValue(10, 15)); // 15 を表示
// console.log(getGreaterValue(15, 10)); // 15 を表示

//3.与えられた引数のうち一番大きい数字を返すgetGreatestValue という名前の関数を作成してください。

function getGreatestValue(num1,num2,num3,num4,num5) {
    return Math.max(num1,num2,num3,num4,num5) ;
}


console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示
