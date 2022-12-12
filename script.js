'use strict'
                    console.log(" ★koji-tani present 5 !★");
                    console.log("■■　JSONData展開  ■■");
//ワイヤーシャークで取得したデータ部を取り込む
let  datastring = "" ;
//JSONファイルの読み出し
//Form要素を取得する
const form = document.forms.myform;
//ファイルが読み込まれた時の処理
form.myfile.addEventListener( 'change',function(e) {
    //読み込んだファイル情報を取得
    const result = e.target.files[0];
    console.log("result:" + result + ".");

    //FilReaderのインスタンスを作成する
    const reader = new FileReader();
    //読み込んだファイルの中身を取得する
    reader.readAsText(result);
    //ファイルの中身を取得後に処理を行う
    reader.addEventListener('load',function() {
        //ファイルの中身をtextarea内に表示する
        form.output.textContent = reader.result;
        const jsonfile = JSON.parse(reader.result);
        console.log("jsonfile:" + jsonfile + ".");
        datastring = jsonfile[0]["_source"]["layers"]["cipio"]["cipio.data"] ;
        console.log(jsonfile[0]["_source"]["layers"]["cipio"]["cipio.data"]);
 
                    

// const JSONData = {
//     "cipio.data": "09:78:01:00:00:00:00:b0:07:00:f9:cb:00:00:05:02:35:32:32:31:37:20:20:20:20:35:31:37:20:20:20:20:20:20:20:20:03:00:01:00:df:cb:00:00:eb:01:35:32:31:39:31:20:20:20:20:34:39:31:20:20:20:20:20:20:20:20:15:00:00:00:00:00:00:00"
//     } ;  //JSONデータを貼り付け(ハンド）
// const datastring = JSONData["cipio.data"] ;  //オブジェクトの値を取出し配列に
                            console.log("datastring:" + datastring + ",");
                    
const dataArray = datastring.split( `:` ) ;  //配列の値を":"で区切りで分割
                            console.log("dataArray:" + dataArray + "," ) ;
                    
let bitOut = dataArray[7] ;  //出力テスト
                            console.log("bitOut:" + bitOut + ",");
                    
let binOut = dataArray[10] +  dataArray[11] ;  //出力テスト
                            console.log("binOut:" + binOut + ",");
                    
let ascOut = dataArray[16] + dataArray[17] + dataArray[18] + dataArray[19] + dataArray[20] ;  //出力テスト
                            console.log("ascOut:" + ascOut + ",");

console.log("■■ワイヤーシャークキャプチャデータ表示表出力■■");

const ind0 = document.getElementById('ind0') ;  //画面(html)のid指定（teble td)　読み出し
const ind1 = document.getElementById('ind1') ;
const ind2 = document.getElementById('ind2') ;
const ind3 = document.getElementById('ind3') ;
const ind4 = document.getElementById('ind4') ;
const ind5 = document.getElementById('ind5') ;
const ind6 = document.getElementById('ind6') ;
const ind7 = document.getElementById('ind7') ;
const ind8 = document.getElementById('ind8') ;
const ind9 = document.getElementById('ind9') ; 

const ind10 = document.getElementById('ind10') ;
const ind11 = document.getElementById('ind11') ;
const ind12 = document.getElementById('ind12') ;
const ind13 = document.getElementById('ind13') ;
const ind14 = document.getElementById('ind14') ;
const ind15 = document.getElementById('ind15') ;
const ind16 = document.getElementById('ind16') ;
const ind17 = document.getElementById('ind17') ;
const ind18 = document.getElementById('ind18') ;
const ind19 = document.getElementById('ind19') ; 

const ind20 = document.getElementById('ind20') ;
const ind21 = document.getElementById('ind21') ;
const ind22 = document.getElementById('ind22') ;
const ind23 = document.getElementById('ind23') ;
const ind24 = document.getElementById('ind24') ;
const ind25 = document.getElementById('ind25') ;
const ind26 = document.getElementById('ind26') ;
const ind27 = document.getElementById('ind27') ;
const ind28 = document.getElementById('ind28') ;
const ind29 = document.getElementById('ind29') ; 


//for (let i = 0 ; i < 10 ; i++) {
//    ind(i)  = dataArray[i] ;
//}
//console.log("ind0;" + ind0 + ",");

ind0.textContent = dataArray[0] ;  //データ画面表示 (teble td　id)
ind1.textContent = dataArray[1] ;
ind2.textContent = dataArray[2] ;
ind3.textContent = dataArray[3] ;
ind4.textContent = dataArray[4] ;
ind5.textContent = dataArray[5] ;
ind6.textContent = dataArray[6] ;
ind7.textContent = dataArray[7] ;
ind8.textContent = dataArray[8] ;
ind9.textContent = dataArray[9] ;

ind10.textContent = dataArray[10] ;
ind11.textContent = dataArray[11] ;
ind12.textContent = dataArray[12] ;
ind13.textContent = dataArray[13] ;
ind14.textContent = dataArray[14] ;
ind15.textContent = dataArray[15] ;
ind16.textContent = dataArray[16] ;
ind17.textContent = dataArray[17] ;
ind18.textContent = dataArray[18] ;
ind19.textContent = dataArray[19] ;

ind20.textContent = dataArray[20] ;
ind21.textContent = dataArray[21] ;
ind22.textContent = dataArray[22] ;
ind23.textContent = dataArray[23] ;
ind24.textContent = dataArray[24] ;
ind25.textContent = dataArray[25] ;
ind26.textContent = dataArray[26] ;
ind27.textContent = dataArray[27] ;
ind28.textContent = dataArray[28] ;
ind29.textContent = dataArray[29] ;
    })
})
                    
console.log("<<<< ﾋﾞｯﾄ変換出力0 >>>>");

const inputHex = document.getElementById('inputHex') ;
const btn = document.getElementById('btn') ;
const resuit = document.getElementById('result') ;
const bitout0 = document.getElementById('bitout0') ;
const bitout1 = document.getElementById('bitout1') ;
const bitout2 = document.getElementById('bitout2') ;
const bitout3 = document.getElementById('bitout3') ;

                    console.log("----  HexBincheng ----"); //16進数から2進数に変換

const f = 15 ;  //テスト用　変数宣言Hex

function HexBinchang(inputHexValue) {
    let value = inputHexValue ;
    const result = [];
                    console.log("value【引数】" + value + ",");
                    console.log("resuit【初期化】: " + result + ",");
    for (let i = 0 ; i < 4 ; i++ ) {  //4回for loop  
        result.unshift(value % 2) ;  //余りを配列に先頭から
                    console.log("resuit2【value % 2】: " + result + ",");
                    console.log("i【ForLoop】: " + i + ",");
        value = Math.trunc( value / 2 );   //除算結果を整数で戻す
                    console.log("value【value / 2】: " + value  + ",");
    }
return result;
}


btn.addEventListener('click' , () => {
                    console.log("==== 1/2byte上位 click 変換実行 ====");
    let inputHexValue = parseInt( inputHex.value , 16 ) ;  //16進で整数を返す
//resuit.textContent = HexBinchang(inputHexValue) ;
let bitArray = HexBinchang(inputHexValue) ;
resuit.textContent = inputHexValue ;
bitout0.textContent = bitArray[0]
bitout1.textContent = bitArray[1]
bitout2.textContent = bitArray[2]
bitout3.textContent = bitArray[3]


});

    test(HexBinchang(f),[1,1,1,1]);  //起動時初期テスト

    console.log("<<<< ﾋﾞｯﾄ変換出力1 >>>>");

    const inputHex1 = document.getElementById('inputHex1') ;
    const btn1 = document.getElementById('btn1') ;
    const resuit1 = document.getElementById('result1') ;
    const bitout4 = document.getElementById('bitout4') ;
    const bitout5 = document.getElementById('bitout5') ;
    const bitout6 = document.getElementById('bitout6') ;
    const bitout7 = document.getElementById('bitout7') ;
    
                        console.log("----  HexBincheng ----"); //16進数から2進数に変換
    
    const a = 10 ;  //テスト用　変数宣言Hex
    
    function HexBinchang1(inputHexValue1) {
        let value = inputHexValue1 ;
        const result = [];
                        console.log("value【引数】" + value + ",");
                        console.log("resuit【初期化】: " + result + ",");
        for (let i = 0 ; i < 4 ; i++ ) {  //4回for loop  
            result.unshift(value % 2) ;  //余りを配列に先頭から
                        console.log("resuit2【value % 2】: " + result + ",");
                        console.log("i【ForLoop】: " + i + ",");
            value = Math.trunc( value / 2 );   //除算結果を整数で戻す
                        console.log("value【value / 2】: " + value  + ",");
        }
    return result;
    }
    
    
    btn1.addEventListener('click' , () => {
                        console.log("==== 1/2byte下位 click 変換実行 ====");
        let inputHexValue1 = parseInt( inputHex1.value , 16 ) ;  //16進で整数を返す
    //resuit.textContent = HexBinchang(inputHexValue) ;
    let bitArray1 = HexBinchang1(inputHexValue1) ;
    resuit1.textContent = inputHexValue1 ;
    bitout4.textContent = bitArray1[0]
    bitout5.textContent = bitArray1[1]
    bitout6.textContent = bitArray1[2]
    bitout7.textContent = bitArray1[3]
    
    
    });
    
        test(HexBinchang1(a),[1,0,1,0]);  //起動時初期テスト
    
    


console.log("<<<< バイナリ10進表記 >>>>");

const inputHex2a = document.getElementById('inputHex2a') ;
const inputHex2b = document.getElementById('inputHex2b') ;
const inputHex2c = document.getElementById('inputHex2c') ;
const inputHex2d = document.getElementById('inputHex2d') ;
const btn2 = document.getElementById('btn2') ;
const resuit2 = document.getElementById('result2') ;
const bodyNoDec = document.getElementById('bodyNoDec') ;
                
                    console.log("----  HexByteChange  ----");  //16進数　上位バイト下位バイト　入替
const InputHexArray = [] ;
function HexByteChange(InputHexArray) {
    const resultarray = InputHexArray ;
    for (let i = 0 ; i < 2 ; i++ ) {
        let value = resultarray.shift() ;
        resultarray.push(value);
    }
                    console.log("resultarray【上位⇔下位入替】:" + resultarray + ",");
return resultarray ;
}

                    console.log("HexByteChange:([1,2,3,4])=>[" + HexByteChange([1,2,3,4 ]) + "],");

    test(HexByteChange([1,2,3,4 ]) , [3,4,1,2]);
                
                    console.log("----  DForeBinary  ----");  //16進数　1ワード　＝＞　2進数10進表記　変換
                
                
function DForeBinary(Arrays) {
    let resuit = 0;
    let beki = Arrays.length - 1 ;
    for ( let i = 0 ; i < Arrays.length ; i++ ) {
                console.log("i【For Loop】: " + i + ",");
    let Array = Arrays[i];
                console.log("Array【Array[i]】:" + Array + ",");
    resuit = resuit + ( Array * ( 16 ** (beki - i )))
                console.log("resuit【resuit+(Array*(16**(beki-i)))】: " + resuit  + ",");
            }
return resuit ;
}
    
    test (DForeBinary([12,11,15,9]),52217);

btn2.addEventListener('click' , () => {
                        console.log("==== １ワード入力 click 変換実行 ====");

        const InputHexArray2 = [];
    
        InputHexArray2.push(parseInt( inputHex2a.value , 16 )  )  
        InputHexArray2.push(parseInt( inputHex2b.value , 16 )  )       
        InputHexArray2.push(parseInt( inputHex2c.value , 16 )  )    
        InputHexArray2.push(parseInt( inputHex2d.value , 16 )  ) 
                        console.log("InputHexArray2:HTML=>[" + InputHexArray2 + "],")
                        console.log("typeof;" +  typeof InputHexArray2[0])
                
        const  HexWardArray = HexByteChange(InputHexArray2) ;
//resuit2.textContent = DForeBinary(HexWardArray) ;  
let bodyNoArray = DForeBinary(HexWardArray) ;
resuit2.textContent = HexWardArray ;
bodyNoDec.textContent = bodyNoArray ;
});    
  

console.log("<<<< アスキーコード　10進表記 >>>>");

const inputHex3a = document.getElementById('inputHex3a') ;
const inputHex3b = document.getElementById('inputHex3b') ;
const inputHex3c = document.getElementById('inputHex3c') ;
const inputHex3d = document.getElementById('inputHex3d') ;
const inputHex3e = document.getElementById('inputHex3e') ;
const btn3 = document.getElementById('btn3') ;
const resuit3 = document.getElementById('result3') ;
const decout0 = document.getElementById('decout0') ;
const decout1 = document.getElementById('decout1') ;
const decout2 = document.getElementById('decout2') ;
const decout3 = document.getElementById('decout3') ;
const decout4 = document.getElementById('decout4') ;

                    console.log("----  Asscii ----");  //アスキーコード　10進表記　変換

const AsciiCodeObj = { 20 : "SP" ,
                       30 : 0 ,
                       31 : 1 ,
                       32 : 2 ,
                       33 : 3 ,
                       34 : 4 ,
                       35 : 5 ,
                       36 : 6 ,
                       37 : 7 ,
                       38 : 8 ,
                       39 : 9 } ;

function AscDecimal(InputAscCodoArray) {
    const AscDecimalArray =
        InputAscCodoArray.map(Element => AsciiCodeObj[Element]);
                            console.log("AscDecimalArray:=>[" +AscDecimalArray + "],");
return AscDecimalArray ;
}
    test(AscDecimal([35,32,32,31,37]),[5,2,2,1,7]);

btn3.addEventListener('click' , () => {
                    console.log("==== ASC入力 click 変換実行 ====");

    const asciiaray3 = [];

    asciiaray3.push( inputHex3a.value )  
    asciiaray3.push( inputHex3b.value )       
    asciiaray3.push( inputHex3c.value )    
    asciiaray3.push( inputHex3d.value ) 
    asciiaray3.push( inputHex3e.value )   
                    console.log("asciiaray3:HTML=> " + asciiaray3 + ",")
                    console.log("typeof;" +  typeof asciiaray3)
    
//resuit3.textContent = AscDecimal(asciiaray3) ;
let decArray = AscDecimal(asciiaray3) ;
resuit3.textContent = decArray ;
decout0.textContent = decArray[0] ;
decout1.textContent = decArray[1] ;
decout2.textContent = decArray[2] ;
decout3.textContent = decArray[3] ;
decout4.textContent = decArray[4] ;

});
    


