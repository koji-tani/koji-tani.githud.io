'use strict'
// Please don't delete the 'use strict' line above

test({ a: "A", b: "B" }, { b: "B", a: "A" });
    console.log("◆ assessment-followup  ◆");

//課題
//全部で11問あります。必要に応じてテストを書くのも忘れずに！
    console.log("<<<1>>>");
//evenOrOdd という名前の関数を宣言してください。この関数は引数として数値型の要素を持つ配列と、boolean を受け取ります。boolean が true の場合は、偶数のみの配列を返し、 false の場合は、奇数のみの配列を返します。

// ここにコードを書きましょう
function evenOrOdd(array,boolean) {
    const result = [ ] ;
    if (boolean === true ) {
        for (let i = 0 ; i < array.length ; i++) {
            let value = array[i] ;
            if (value % 2 === 0 ) {
                result.push(value) ;
            }
        }
    } else {
        for (let i2 = 0 ; i2 < array.length ; i2++) {
            let value2 = array[i2] ;
            if (value2 % 2 !== 0 ) {
                result.push(value2) ;
            }
        }
    }
    return result ;
}

test (evenOrOdd([1, 2, 3, 4, 5], true),[2, 4]) ;
test (evenOrOdd([0, 4, 36], false),[]) ;
test (evenOrOdd([-1, -2, 4, -5, -7], false),[-1, -5, -7]) ;

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

    console.log("<<<2>>>");

//findKeys という名前の関数を宣言してください。この関数は引数としてオブジェクトと “target” (文字列または数値) を受け取り、オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。

// ここにコードを書きましょう

function findKeys(obj,numst) {
    const resuit = [ ] ;
    const objkeyArray = Object.keys(obj) ;
                console.log("objkeyArray:" + objkeyArray + ",");
        for (let i = 0 ; i < objkeyArray.length ; i++) {
                    console.log("i:" + i + ",");
            const keyset = objkeyArray[i]        
            const value = obj[keyset] ;
                    console.log("value:" + value + ",");
            if (value === numst) {
                resuit.push(objkeyArray[i]) ;
            }
        }
    return resuit ;
}
test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2),["b", "e"]) ;
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"),["c", "d"]) ;


findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

    console.log("<<<3>>>");

// buildObject という名前の関数を宣言してください。この関数は引数として 2 つの配列を受け取り、新しいオブジェクトを返します。リターンするオブジェクトは、第一引数の配列の要素をオブジェクトのキーとして設定し、第二引数の配列の要素をオブジェクトの値として設定します。

// // ここにコードを書きましょう

function buildObject(array1,array2) {
    const resuit = { };
    for (let i = 0 ; i < 3 ; i++) {
        const key = array1[i] ;
        const value = array2[i] ;
        resuit[key] = value ;
    }
    return resuit ;
}
test(buildObject(["a", "b", "c"], [1, 2, 3]),{"a": 1, "b": 2, "c": 3}) ;  
test(buildObject(["cat", "dog", "duck"], ["meow", "woof", "quack"]),{"cat": "meow", "dog": "woof", "duck": "quack"}) ;  
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]),{"cat": null, "dog": 0, "duck": NaN}) ;  
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]),{"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}) ;  


buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["meow", "woof", "quack"]); // {"cat": "meow", "dog": "woof", "duck": "quack"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

    console.log("<<<4>>>");

//add という名前の関数を宣言してください。この関数は引数として 1 つの数値 x を受け取り、引数として 1 つの数値 y を受けとる関数を返します。リターンされた関数は、実行時に ‘x’ と ‘y’ の和を返します。

function add(x) {
    return function(y) {
        return x + y ;
    }
}


const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

const addOneHundred = add(100);
addOneHundred(3); // 103

test (addTwo(3),5) ;
    console.log(addTwo(3));
test (addTwo(70),72) ;
test (addOneHundred(3),103) ;

    console.log("<<<5>>>");

// このコードを実行すると、どの順番で何が表示されるでしょうか？もちろん、コードを実行する前に答えてください。なぜそうなるのか、わからない場合はわかるまで調べましょう！

function simpleHello() {
  console.log("Hello");  //表示順-1 ⇒ "Hello"
}

function anotherGreeting(name) {
  return "Hello, " + name;
}

const foo = simpleHello();
const bar = anotherGreeting("JavaScript");

console.log(foo);  //表示順-2 ⇒ undefined　returnが無い関数のため表示されない
console.log(bar);  //表示順-3 ⇒ "Hello, JavaScript"


// // あなたの回答と、なぜそうなるのかの説明をここに記載してください ⇒　上記！

    console.log("<<<6>>> \DIG-project-random-color  ");
// クリックしたらページの色が変わるボタンを作りましょう。色はボタンをクリックするたびにランダムで決まります。

// これが完成イメージです。

// example of button that changes background color randomly
// ここで使用する 基本となるコード は既に用意されています。必要な処理を記述するだけです。

// 手順
// このフォルダ からファイルをダウンロードし、それを作業用フォルダに配置してください。

// フォルダ内にあるファイルに注意してください。

// script.js - JavaScript ファイルです。ボタンを実装するためにこのファイルを変更する必要があります。
// index.html - ブラウザで表示するときに使用する HTML ファイルです。おそらくこのファイルを変更する必要は ありません。
// style.css - スタイルシートのファイルです。このファイルはページの見た目をコントロールしています。おそらくこのファイルを変更する必要は ありません。
// コードエディタでファイルを開いてください。

// コードを修正して実装にとりかかりましょう。

// ページの色が変わるボタンの作成が終わったら、新しい要素やボタンを追加して何か面白い機能を追加してください。例えば…

// 段落のテキストを変更する

// 文字のサイズや色を変更する

// 色々な画像を表示する（imgbb に保存した画像を使用する）等々

// 想像力を働かせてみてください！🎉

// 提出物
// この問題では script.js を Gist にアップしてください。もし何かしら変更を加えた場合は index.html、 style.css もアップしてください。ファイル名はそのままで構いません。
console.log("<<<7>>>");

// map という名前の関数を宣言してください。この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、コレクション内の各要素に対してコールバック関数を実行した結果を要素に持つ新しい配列を返します。コールバック関数は、コレクション内のすべての要素に適用されます。
// ⚠️ 注意：ネイティブメソッド (.forEach, .map) は使用しないでください。

const map = function (arrayobj,action) {
    const result = [ ] ;

    for (let i = 0 ; i < arrayobj.length ; i++) {
         let value = arrayobj[ i ] ;
         result.push( addOne(value) ) ;
         console.log("result:" + result + ",");
    }
    return result ;
}

function addOne(num) {
  return num + 1;
}
//map([1, 2, 3], addOne); // [2, 3, 4]
//map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

test (map([1, 2, 3], addOne),[2, 3, 4])
test (map({ a: 1, b: 2, c: 3 }, addOne),[2, 3, 4])


console.log("<<<8>>>");
// changeMiddle という名前の関数を宣言してください。この関数は引数として「3 つの単語からなる文字列(スペースで区切られる)」「1 単語の文字列」を受け取り、第一引数の中央の単語を第二引数の文字列に置き換えた新しい文字列を返します。

function changeMiddle(string1 , string2) {
    const stringarray = string1.split( " " ) ;
      console.log("stringarray:" + stringarray + ",");
      const resuit = stringarray[0] + " " + string2 + " " +stringarray[2] ;
 return resuit ;
}

test (changeMiddle("I like cats", "love"),"I love cats")
test (changeMiddle("red green blue", "yellow"),"red yellow blue")

changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"

console.log("<<<9>>>");

// countSomething という名前の関数を宣言してください。この関数は引数として数値・文字列・ブーリアンを要素にもつ配列を受け取ります。要素の登場回数が最も多い型をチェックし、以下のいずれかの文字列を返してください。

// “BOOL COUNT: x” (ブーリアンが最も多い場合)
// “STRING COUNT: x” (文字列が最も多い場合)
// “NUMBER COUNT: x” （数値が最も多い場合）
// ※ x はその型の要素がが何回出現したかを表す。

function countSomething(array) {
    const countobj = { STRINGCOUNT : 0 , BOOLCOUNT : 0 , NUMBERCOUNT : 0 }
    for (let i = 0 ; i < array.length ; i++) {
        console.log("i:" + i + ",");
        console.log("array[i]:" + array[i] + ",");
        console.log("typeof array[i]:" + typeof array[i] + ",");
        let value = array[i];
        if (typeof value === "string" ) {
            countobj["STRINGCOUNT"] = countobj["STRINGCOUNT"] +1 ;
        } else if (typeof array[i] === "boolean" ) {
            countobj["BOOLCOUNT"] = countobj["BOOLCOUNT"] +1 ;
        } else {
            countobj["NUMBERCOUNT"] = countobj["NUMBERCOUNT"] +1 ;
        }
        console.log("countobj:" + JSON.stringify(countobj) + ",");
    }
    const result = Math.max(countobj["STRINGCOUNT"] , countobj["BOOLCOUNT"] , countobj["NUMBERCOUNT" ]);
    return result ;
}

test(countSomething(["a", "b", "c", true, false, 2]),"STRING COUNT: 3") ;
test(countSomething([true, true, false, true]),"BOOL COUNT: 4") ;
test(countSomething([true, true, 1, 0, 1, false, 1]),"NUMBER COUNT: 4") ;


// countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
// countSomething([true, true, false, true]); // "BOOL COUNT: 4"
// countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

console.log("<<<10>>>");

// each という名前の関数を宣言してください。この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、コレクション内の各要素に対してコールバック関数を一度だけ実行してください。この関数は何もリターンしません。
// ⚠️ 注意：ネイティブメソッド (.forEach, .map) は使用しないでください。

function each(arrayobj) {
    //let array = [ ] ;
     //array = Object.values(arrayobj);
     const array = Object.values(arrayobj);
     console.log(array);
 
     for (let i = 0 ; i < array.length ; i++) {
        console.log(array[i]);
    }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// // 上記を実行すると下記を表示するはずです
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6

console.log("<<<11>>>");

// compose という名前の関数を宣言してください。この関数は引数として funcA と funcB という 2 つの関数を受け取り、新しい関数を返します。リターンされた関数は引数 x を受け取ります。リターンされた関数を実行すると、funcA の実行結果を funcB の引数として渡した結果を返します。

function compose(funcA,funcB) {
    let y = funcA(num) ;
 return funcB(y) ;   
}

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
baz(5); // 20
baz(100); // 210

// 以上で全ての問題は終了です。お疲れ様でした！！ 🤟