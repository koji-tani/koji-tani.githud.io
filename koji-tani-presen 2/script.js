'use strict'
// 1行目に記載している 'use strict' は削除しないでください

                console.log(" ★koji-tani present!★");

console.log("////////// ﾋﾞｯﾄ変換出力 //////////");

const inputHex = document.getElementById('inputHex') ;
const btn = document.getElementById('btn') ;
const resuit = document.getElementById('result') ;

                console.log("/////////  HexBincheng//////////");
//配列に書けるよう変数宣言Hex
const a = 10 ;
const b = 11 ;
const c = 12 ;
const d = 13 ;
const e = 14 ;
const f = 15 ;

function HexBinchang(inputHexValue) {
    let value = inputHexValue ;
    const result = [];
                    console.log("resuit: " + result + ",");
                    console.log("value;" + value + ",");
                    console.log("inputHexValue2;" + inputHexValue + ",");

    //while (value > 0) {
    for (let i = 0 ; i < 4 ; i++ ) {    
        result.unshift(value % 2) ;
                    console.log("resuit2: " + result + ",");
                    console.log("i: " + i + ",");

        value = Math.trunc( value / 2 );
                    console.log("value: " + value  + ",");

    }
return result;
}



btn.addEventListener('click' , () => {
                console.log("///////// 1 click 変換実行 //////////");

    //let inputHexValue = parseInt( inputHex.value , 16 ) ;  //16進で整数を返す
    let inputHexValue = inputHex.value  ;  

                console.log("inputHexValue; " + inputHexValue + ",");
                console.log("typeof;" +  typeof inputHexValue);

    //test(HexBinchang(f),[1,1,1,1]);  //変換起動動作前テスト

resuit.textContent = HexBinchang() ;

    //test(HexBinchang(1),[0,0,0,1]);  //変換起動動作後テスト

});

    test(HexBinchang(f),[1,1,1,1]);  //起動時初期テスト


console.log("////////// バイナリ10進表記 //////////");

const inputHex2a = document.getElementById('inputHex2a') ;
const inputHex2b = document.getElementById('inputHex2b') ;
const inputHex2c = document.getElementById('inputHex2c') ;
const inputHex2d = document.getElementById('inputHex2d') ;
const btn2 = document.getElementById('btn2') ;
const resuit2 = document.getElementById('result2') ;
                




                console.log("/////////  HexByteChange  //////////");
const InputHexArray = [f,9,c,b] ;
function HexByteChange(InputHexArray) {
    const resultarray = InputHexArray ;
    for (let i = 0 ; i < 2 ; i++ ) {
        let value = resultarray.shift() ;
        resultarray.push(value);
    }
return resultarray ;
}
    
    test(HexByteChange([f, 9 ,c,b ]) , [c,b,f, 9 ]);
    //test(HexByteChange([1,2,3,4 ]) , [3,4,1,2]);
                
                
                
                console.log("/////////  DForeBinary  //////////");
                
                //const DFourArray = [12,11,15,9] ;
                
function DForeBinary(Arrays) {
    let resuit = 0;
    let beki = Arrays.length - 1 ;
    for ( let i = 0 ; i < Arrays.length ; i++ ) {
                console.log("i : " + i + ",");
    let Array = Arrays[i];
                console.log("Array:" + Array + ",");
    resuit = resuit + ( Array * ( 16 ** (beki - i )))
                console.log("resuit: " + resuit  + ",");
            }
return resuit ;
}
    
    //test (DForeBinary([12,11,15,9]),52217);
    test (DForeBinary([c,b,f,9]),52217);
    
//let HexWardArray = HexByteChange(InputHexArray2) ;   //　バイト入替関数　連結テスト
                        //console.log("HexWardArray: " + HexWardArray + ",");
    //test (DForeBinary(HexWardArray),52217);     //　バイト入替関数　連結テスト 
    
    //test (DForeBinary([7,5,3,0]),30000);

btn2.addEventListener('click' , () => {
                        console.log("///////// 2 click 変換実行 //////////");

        const InputHexArray2 = [];
    
        InputHexArray2.push( inputHex2a.value )  
        InputHexArray2.push( inputHex2b.value )       
        InputHexArray2.push( inputHex2c.value )    
        InputHexArray2.push( inputHex2d.value ) 
                        console.log("InputHexArray2; " + InputHexArray2 + ",")
                        console.log("typeof;" +  typeof InputHexArray2)
        
        
        const  HexWardArray = HexByteChange(InputHexArray2) ;
resuit2.textContent = DForeBinary(HexWardArray) ;
        
        
});    





                
console.log("////////// アスキーコード　10進表記 //////////");

const inputHex3a = document.getElementById('inputHex3a') ;
const inputHex3b = document.getElementById('inputHex3b') ;
const inputHex3c = document.getElementById('inputHex3c') ;
const inputHex3d = document.getElementById('inputHex3d') ;
const inputHex3e = document.getElementById('inputHex3e') ;
const btn3 = document.getElementById('btn3') ;
const resuit3 = document.getElementById('result3') ;


                    console.log("/////////  Asscii//////////");

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
                            console.log("Element:" + Element + "," );
                            console.log("AscDecimalArray:" +AscDecimalArray + ",");
return AscDecimalArray ;
}

    test(AscDecimal([35,32,32,31,37]),[5,2,2,1,7]);
    //test(AscDecimal([30,31,32,33,34]),[0,1,2,3,4]);

btn3.addEventListener('click' , () => {
                    console.log("///////// 3 click 変換実行 //////////");

    const asciiaray3 = [];

    asciiaray3.push( inputHex3a.value )  
    asciiaray3.push( inputHex3b.value )       
    asciiaray3.push( inputHex3c.value )    
    asciiaray3.push( inputHex3d.value ) 
    asciiaray3.push( inputHex3e.value )   
                    console.log("asciiaray3; " + asciiaray3 + ",")
                    console.log("typeof;" +  typeof asciiaray3)
    
    
resuit3.textContent = AscDecimal(asciiaray3) ;
    
    
});
    


