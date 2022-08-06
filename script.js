'use strict'
// Please don't delete the 'use strict' line above

test({ a: "A", b: "B" }, { b: "B", a: "A" });
console.log("★koji-presen★");

//console.log("value: " + value  + ",");

//let Dnum = 11;
console.log("/////////DBcheng//////////");
function DBcheng(Dnum) {
    let value = Dnum;
    const result = [];
                    console.log("resuit: " + result + ",");

    while (value > 0) {
        
        result.unshift(value % 2) ;
                    console.log("resuit: " + result + ",");
        value = Math.trunc( value / 2 );
                    console.log("value: " + value  + ",");

        }
return result;
}

test(DBcheng(11),[1,0,1,1]);
test(DBcheng(15),[1,1,1,1]);


console.log("/////////HDcheng//////////");

const ChangeCordObj = {
    0 : 0 ,
    1 : 1 ,
    2 : 2 ,
    3 : 3 ,
    4 : 4 ,
    5 : 5 ,
    6 : 6 ,
    7 : 7 ,
    8 : 8 ,
    9 : 9 ,
    a : 10 ,
    b : 11 ,
    c : 12 ,
    d : 13 ,
    e : 14 ,
    f : 15  } ;

function HDcheng(Hnum) {
    const result = ChangeCordObj[Hnum] ;
                console.log(Hnum);
                console.log("resuit :" + result + ",");

return result ;

}
test(HDcheng(5),5);
test(HDcheng("c"),12);

console.log("/////////DForeBinary//////////");

const DFourArray = [12,11,15,9] ;

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

test (DForeBinary([12,11,15,9]),52217);
test (DForeBinary([7,5,3,0]),30000);

console.log("/////////Asscii//////////");

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

function AscDecimal(AscCodoArray) {
    const AscDecimalArray =
             AscCodoArray.map(Element => AsciiCodeObj[Element]);
                            console.log("Element:" + Element + "," );
                            console.log("AscDecimalArray:" +AscDecimalArray + ",");
    return AscDecimalArray ;
}

test(AscDecimal([35,32,32,31,37]),[5,2,2,1,7]);
test(AscDecimal([30,31,32,33,34]),[0,1,2,3,4]);

