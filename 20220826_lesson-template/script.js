'use strict'
// Please don't delete the 'use strict' line above

test({ a: "A", b: "B" }, { b: "B", a: "A" });
console.log("★0826★");

//indKeys という名前の関数を宣言してください。この関数は引数としてオブジェクトと “target” (文字列または数値) を受け取り、オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。

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

//buildObject という名前の関数を宣言してください。この関数は引数として 2 つの配列を受け取り、新しいオブジェクトを返します。リターンするオブジェクトは、第一引数の配列の要素をオブジェクトのキーとして設定し、第二引数の配列の要素をオブジェクトの値として設定します。

// ここにコードを書きましょう

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

//add という名前の関数を宣言してください。この関数は引数として 1 つの数値 x を受け取り、引数として 1 つの数値 y を受けとる関数を返します。リターンされた関数は、実行時に ‘x’ と ‘y’ の和を返します。

// ここにコードを書きましょう

function add(x,y) {
    
}

const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

const addOneHundred = add(100);
addOneHundred(3); // 103