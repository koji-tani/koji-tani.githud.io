'use strict'
                    console.log(" ★koji-tani present 4 !★");


console.log("<<<< ﾋﾞｯﾄ変換出力 >>>>");

const inputHex = document.getElementById('inputHex') ;
const btn = document.getElementById('btn') ;
const resuit = document.getElementById('result') ;

                    console.log("----  HexBincheng ----"); //16進数から2進数に変換

const f = 15 ;  //テスト用　変数宣言Hex

function HexBinchang(inputHexValue) {
    let value = inputHexValue ;
    const result = [];
                    console.log("value【引数】" + value + ",");
                    console.log("resuit【初期化】: " + result + ",");
    for (let i = 0 ; i < 4 ; i++ ) {    
        result.unshift(value % 2) ;
                    console.log("resuit2【value % 2】: " + result + ",");
                    console.log("i【ForLoop】: " + i + ",");
        value = Math.trunc( value / 2 );
                    console.log("value【value / 2】: " + value  + ",");
    }
return result;
}

btn.addEventListener('click' , () => {
                    console.log("==== 1 click 変換実行 ====");
    let inputHexValue = parseInt( inputHex.value , 16 ) ;  //16進で整数を返す
resuit.textContent = HexBinchang(inputHexValue) ;
});

    test(HexBinchang(f),[1,1,1,1]);  //起動時初期テスト


console.log("<<<< バイナリ10進表記 >>>>");

const inputHex2a = document.getElementById('inputHex2a') ;
const inputHex2b = document.getElementById('inputHex2b') ;
const inputHex2c = document.getElementById('inputHex2c') ;
const inputHex2d = document.getElementById('inputHex2d') ;
const btn2 = document.getElementById('btn2') ;
const resuit2 = document.getElementById('result2') ;
                
                    console.log("----  HexByteChange  ----");  //16進数　上位バイト下位バイト　入替
const InputHexArray = [] ;
function HexByteChange(InputHexArray) {
    const resultarray = InputHexArray ;
    for (let i = 0 ; i < 2 ; i++ ) {
        let value = resultarray.shift() ;
        resultarray.push(value);
    }
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
                        console.log("==== 2 click 変換実行 ====");

        const InputHexArray2 = [];
    
        InputHexArray2.push(parseInt( inputHex2a.value , 16 )  )  
        InputHexArray2.push(parseInt( inputHex2b.value , 16 )  )       
        InputHexArray2.push(parseInt( inputHex2c.value , 16 )  )    
        InputHexArray2.push(parseInt( inputHex2d.value , 16 )  ) 
                        console.log("InputHexArray2:HTML=>[" + InputHexArray2 + "],")
                        console.log("typeof;" +  typeof InputHexArray2[0])
                
        const  HexWardArray = HexByteChange(InputHexArray2) ;
resuit2.textContent = DForeBinary(HexWardArray) ;               
});    
  

console.log("<<<< アスキーコード　10進表記 >>>>");

const inputHex3a = document.getElementById('inputHex3a') ;
const inputHex3b = document.getElementById('inputHex3b') ;
const inputHex3c = document.getElementById('inputHex3c') ;
const inputHex3d = document.getElementById('inputHex3d') ;
const inputHex3e = document.getElementById('inputHex3e') ;
const btn3 = document.getElementById('btn3') ;
const resuit3 = document.getElementById('result3') ;

                    console.log("----  Asscii ----");  //アスキーコード　10進表記　変換

const AsciiCodeObj = { 30 : 0 ,
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
                    console.log("==== 3 click 変換実行 ====");

    const asciiaray3 = [];

    asciiaray3.push( inputHex3a.value )  
    asciiaray3.push( inputHex3b.value )       
    asciiaray3.push( inputHex3c.value )    
    asciiaray3.push( inputHex3d.value ) 
    asciiaray3.push( inputHex3e.value )   
                    console.log("asciiaray3:HTML=> " + asciiaray3 + ",")
                    console.log("typeof;" +  typeof asciiaray3)
    
resuit3.textContent = AscDecimal(asciiaray3) ;
});
    


