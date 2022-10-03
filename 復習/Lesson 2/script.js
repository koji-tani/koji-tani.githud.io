'use strict'
// Please don't delete the 'use strict' line above

test({ a: "A", b: "B" }, { b: "B", a: "A" });
console.log("◆ Lesson 2  ◆");

//ウォーミングアップ 💪🏼
//JavaScript の演算子 typeof を使ってみましょう。この演算子に関する情報は、ここ から手に入れることができます。

//最初の問題は解答例を載せてあります。

// const variableString = "I am a string";
// console.log(typeof variableString); // "string"と表示されましたか？

// const variableNumber = 777;         // "number"と表示させるにはどんな値を代入すればいいでしょう？
// console.log(typeof variableNumber); // "number"と表示されましたか？

// // ここにコードを書いて、"boolean"と表示されるようにしてください。
// const variableBoolean = true ;
// console.log(typeof variableBoolean);

// //ここにコードを書いて、"undefined"と表示されるようにしてください。
// const variableUndefined = undefined ;
// console.log(typeof variableUndefined);

// //2 つの number の 平均 を計算して変数に格納しましょう。

// const numberA = 4 ;
// const numberB = 5 ;

// const average = (numberA + numberB) / 2 ;
// console.log(average); // numberA と numberB の平均が表示される。

// //演習
// //_lesson-template フォルダをコピーして、functions-intro フォルダを作りましょう。

// //基礎演習
// //コンソールへの表示
// //以下の 2 行を script.js ファイルに書き加えてみましょう。そして index.html ファイルをブラウザで開き、デベロッパーコンソールを開いてみましょう。何が表示されますか？

// //5 + 6;
// //console.log(6 + 6);
// //どうしてそのように表示されるのでしょうか？

// //コンソールに直接コードを書くのではなく、JavaScript ファイルに記述してコンソールに値を表示させるには console.log を使用する必要があります。

// //Functions（関数）
// //以下のfunction（関数）を使って、２つの number の合計を計算しましょう。script.js ファイルに以下を入力してみてください。

// function add(numOne, numTwo) {
//   return numOne + numTwo;
// }

// // テスト
// console.log(add(4, 3)); // 7 を表示
// console.log(add(100, 42)); // => 142
// //注目： script.js で宣言された function（関数）は、コンソールでも使えます。コンソールで上記 2 つのテストを直接入力してみてください。本来テストも script.js に書くべきですが、これはデバッグで役に立つ知識なので知っておきましょう。

// //上記の関数に 1 つだけ値を渡すと何が起こるでしょうか？　もっとたくさんの値を渡したら何が起こるでしょうか？

// console.log(add(100)); // 何が起こる？ NaN 
// console.log(add(1, 4, 5)); // 何が起こる？ 5  3個目は計算されない

// //次のコードを全て実行すると何が表示されると思いますか？　何が起こるかを予想してみましょう。そして、なぜそうなるのか考えてみましょう。最後に記述された 2 つの console.log の出力結果を見ると、どのファイルのどの行で何が起こっているのか調べることができます。答えがわかったら次の問題に進みましょう。

// function simpleFunctionA() {
//   return "Hello simple function A";
// }

// function simpleFunctionB() {
//   console.log("Hello simple function B");  //Hello simple function B
// }

// console.log(simpleFunctionA(), "--> From running Simple Function A");
//    //Hello simple function A --> From running Simple Function A
// console.log(simpleFunctionB(), "--> From running Simple Function B");
//    //undefined '--> From running Simple Function B'

//  //  subtract という名前の関数を宣言しましょう。この関数は第一引数から第二引数を引き算する関数です。関数が正しく動いているかどうかテストするのも忘れずに。

//    function subtract(num1, num2) {
//      // ここにコードを書いてください
//      return num1 - num2 ;
//    }
//    テスト:
   
//    console.log(subtract(4, 3)); // => 1
//    console.log(subtract(100, 42)); // => 58
//    console.log(subtract(4,5)); //=> -1

// //   greeting という名前の関数を宣言しましょう。文字列型（string） のデータを引数に渡し、矢印（=>）の右側にある挨拶文をコンソールに表示してください。

//    // ここにコードを書いてください
//    function greeting(name){
//     return "Hello, " + name + "!" ;
//    }
   
//    console.log(greeting("Alex")); // => "Hello, Alex!"
//    console.log(greeting("Beau")); // => "Hello, Beau!"  
   
//  //  average という名前の関数を宣言しましょう。２つの数値型のデータを引数に取り、それらの数値の平均を出力します。この関数に関しては、テストも自分で考えて書いてみましょう！

//    function average2( num1 , num2 ) {
//     return ( num1 + num2 ) / 2 ;
//    }

//    console.log(average2( 4 , 5 )) ; // 4.5

//  //  次の関数には誤りがあります。何が間違っているのでしょうか。

// //   function square(5) {  //仮引数になってない　=>　num
// //     return 5 * 5;
// //   }
// //   function square("x") {  //仮引数になってない　=>　x
// //    return "x" * "x";
// //   } 

// //一方こちらは問題なく動きます。さらに良い書き方はないでしょうか？

// function Square(monkey) {  //データ型、意図が分かるものにする=>　num
//   return monkey * monkey;
// }

// //cube という名前の関数を宣言しましょう。x の 3 乗を出力してください。

// function cube(x) {
//     return x ** 3 ;
// }
// console.log(cube(2));  // 8

// //解説
// //次のコードを実行した時、undefined と表示されるのはなぜでしょうか。

// function simpleFunctionA() {
//   return "Hello simple function A";
// }

// function simpleFunctionB() {
//   console.log("Hello simple function B");
// }

// console.log(simpleFunctionA(), "--> From running Simple Function A"); //Hello simple function A --> From running Simple Function A
// console.log(simpleFunctionB(), "--> From running Simple Function B"); //undefined '--> From running Simple Function B'

// //関数は 出力 を持たない場合（つまり、return 値を持たない場合）、undefined を返します。

// //console.log は（）内の値、つまり、渡された値をコンソールに表示します。console.log(simpleFunctionA())とすると、関数 simpleFunctionAが呼ばれ "Hello simple function A" という文字列が返ってくるので、これが console.log に渡されて表示されます。

// //一方、console.log(simpleFunctionB())とすると、関数 simpleFunctionBが呼ばれます。simpleFunctionBはコンソールに文字列を表示しますが、return キーワードがないため、undefinedを返し、これが console.log に渡され、表示されます。

// //コンソールに表示されているものと関数の返り値を混同しないようにしましょう。console.log はコンソールに値を表示するものであり、それ以上の機能はありません。

// //中級演習
// //次のコードを実行したら何が表示されますか？なぜそうなるのでしょうか？

// function simpleHelloA() {
//   console.log("hello");  //hello
// }

// function simpleHelloB() {
//   return "hello";
// }

// const a = simpleHelloA();
// const b = simpleHelloB();
// console.log(a, b);  //undefined 'hello'

// //下の関数を 3 回呼び出し、それぞれの返り値を変数に代入するようコードを書き足して、コメントにある表示が出るようにしてください。

// function createGreeting(greetingPhrase, instructorName) {
//   return greetingPhrase + ", " + instructorName + "!";
// }

// const morningGreeting = createGreeting("Good morning" , "Mike") ;
// const dayGreeting = createGreeting("Hello", "Beau") ;
// const eveningGreeting = createGreeting("Good evening", "Alex") ;

// console.log(morningGreeting); //"Good morning, Mike!" を表示
// console.log(dayGreeting); // "Hello, Beau!" を表示
// console.log(eveningGreeting); // "Good evening, Alex!" を表示

//応用演習
//この演習では、講義で説明されたことのないテクニックを使用する必要があるかもしれません。

//functions-intro フォルダに advanced.js という名前のファイルを作成しましょう。script.js と advanced.js の 両方 が使えるように functions-intro フォルダの index.html を修正してください。そして、新しく作成したファイルに次のコードを追加します。コンソールにはどのように表示されますか？

//ヒント： index.html のコードを見てください。index.html ファイルと script.js ファイルはどのように紐づけられていますか？

//console.log("hello advanced.js!");
//　以下　応用演習は　”advanced.js”　に展開実施済