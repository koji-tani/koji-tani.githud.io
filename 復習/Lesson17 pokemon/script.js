'use strict'
// Please don't delete the 'use strict' line above

console.log(allPokemon);

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

//   準備作業
//   まずはじめに、この ポケモンファイル をダウンロードします。ダウンロードした圧縮ファイルを解凍し、作業用フォルダに配置してください。
  
//   allPokemon.js ファイルには、ポケモンに関するオブジェクトが入った allPokemon という配列があります。今回の演習は、この配列を使って行います。いつも使っている script.js ファイル中の配列と同様に、allPokemon にもアクセスすることができるのを確かめてください。
  
//   なぜアクセスできるのでしょうか。 index.html ファイルの中に、allPokemon.js ファイルを参照する <script> タグが追加されていますね！
  
//   メモ： 以下の演習のテストケースで使われている期待値（ getNamesExpected や getPokemonByNameExpected など）は allPokemon.js で定義されています。
// 作業は、script.js で行いましょう。

// allPokemon をデペロッパーツールのコンソールに表示して、何が表示されるか確認してください。（これは既に実装されています。）
// allPokemon の要素数 (length) を表示させてください。
// 1 つめのポケモン・オブジェクトを表示させて、どんなデータが入っているか、どんな構造になっているかを確認してください。
// 基本演習
// データ中のすべてのポケモンの名前を要素に持つ配列を返す、関数 getNames を宣言してください。
function getNames() {
    const pokemonArray = allPokemon ;
    //const pokemonArray = JSON.stringify(allPokemon) ;  //undefinedになる
    const returns = [ ] ;

    for (let i = 0 ; i < pokemonArray.length ; i++) {
        let pokemonnobje  = pokemonArray[i]  ;
         returns.push(pokemonnobje["Name"]) ;
    }
    return returns ;
}
/**
 * @returns {Array<string>} データ中のすべてのポケモンの名前を要素に持つ配列
 */
//test(getNames(), getNamesExpected);

//与えられた名前を持つポケモンのオブジェクトを返す、関数 getPokemonByName を宣言してください。

/**
 * @param {string} name - ポケモンの名前
 * @returns {object} 与えられた名前を持つポケモンのオブジェクト
 */
function getPokemonByName(name) {
    let returns = { } ;
    for (let i = 0 ; i < allPokemon.length ; i++) {
        console.log("i :" + i );

         returns = allPokemon[i]  ;
        if (returns["Name"] === name ) {
            i = allPokemon.length ;  //同じ名前の場合、forループ終了
    }
} 
    return returns ;

}

//test(getPokemonByName("Pikachu"), getPokemonByNameExpected);

//全ポケモンの最大 CP (戦闘力) の平均値を返す、関数 getAvgMaxCP を宣言してください。

/**
 * @returns {number} 全ポケモンの最大CP（戦闘力）の平均値
 */

function getAvgMaxCP() {
    let returns = 0 ;
    let valueMaxCP = 0 ;
    for (let i = 0 ; i < allPokemon.length ; i++) {
        const objye = allPokemon[i] ;
                    console.log("objye:" + objye + ",");
        valueMaxCP = valueMaxCP + objye["MaxCP"] ;
    }
    returns = valueMaxCP / allPokemon.length ;
return returns ;
}

// このテストの値はおおよそ答と近ければ合格です。少し違っても問題ありません。
// 少しだけ違う場合は、テストをコメントアウトしてください
// それにしても、なぜ違ってもよいかわかりますか？🤔 //小数点以下の計算がにがて
//test(getAvgMaxCP(), getAvgMaxCPExpected);

//引数に文字列で attack（技）を取る getResistantPokemon という関数を宣言してください。この関数は、与えられた attack に耐性のあるすべてのポケモンのオブジェクトを要素に持つ配列を返します。

function getResistantPokemon(attack) {
    const returns = [ ] ;
    //let objArray = [ ] ;
    for (let i = 0 ; i < allPokemon.length ; i++) {
        //const object = JSON.stringify(allPokemon[i] );
        const object = allPokemon[i] ;
        //const object = JSON.parse(allPokemon[i]) ;  // "[object Object]" is not valid JSON
        //let objArray = Object["Resistant"] ;
        //objArray = Object.Resistant ;
        const objArray = [ ] ;
         objArray.push(Object["Resistant"]) ;
        //objArray.push(Object.Resistant) ;
        //objArray.push(JSON.parse(Object.Resistant)) ; //"undefined" is not valid JSON at JSON.parse (<anonymous>)
        
                    console.log("object:" + object + ",");
                    console.log("objArray:" + objArray + ",");
        for (let i2 = 0 ; i2 < objArray.length ; i2++) {
     
            if (objArray[i2] == attack) {
                returns.push(Object)

            }
        }
    }
    return returns ;
}

/**
 * @param {string} attack（技）
 * @returns {Array<object>} 与えられた技に耐性がある、すべてのポケモンのオブジェクトが入った配列
 */
test(getResistantPokemon("Fire"), getResistantPokemonExpected);

