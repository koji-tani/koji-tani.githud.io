'use strict'
// Please don't delete the 'use strict' line above

test({ a: "A", b: "B" }, { b: "B", a: "A" });
console.log("◆競技用タイマーSTD◆");

let statuscase = 0 ;  //ケース０設定
let currentTime = 5;  //カウントダウン値（初期値　カウントダウン　５秒）
let startTime;  //スタート時間記録　　現在時間ースタート時間＝タイマーカウント値
let timerID;
let audio_sec;
let audio_start;
let audio_ana;
const timerTxt = document.getElementById("timer") ;  //id timer テキスト読み込み
const btn = document.getElementById("btn") ;
const calltime1 = document.getElementById("calltime1");
const calltime2 = document.getElementById("calltime2");
const calltime3 = document.getElementById("calltime3");
const calltime4 = document.getElementById("calltime4");
const calltime5 = document.getElementById("calltime5");

window.onload = ()=>{
    audio_sec = new Audio();
    audio_sec.src = 'sound/Countdown06-5.mp3';  //音源ソース名（カウントダウン秒）
    audio_sec.preload = 'auto';  //音源の事前読み込み

    audio_start = new Audio();
    audio_start.src = 'sound/Countdown06-6.mp3';  //音源ソース名（スタート号令）
    audio_start.preload = 'auto';  //音源の事前読み込み

    audio_ana = new Audio();
    audio_ana.src = 'sound/Countdown06-2.mp3';  //音源ソース名（時報）
    audio_ana.preload = 'auto';  //音源の事前読み込み 

}

//window.onclick = ()=>{   //画面クリック操作
btn.addEventListener('click' , () => {    //BTNクリック操作
    switch(statuscase){
            //スタート待ち（ケース０）
            case 0:   //click-1st 
            default:   //初期化
                statuscase = 1;  //ケース切替０⇒１
                currentTime = 5;  //スタートカウント５秒
                count();          //計測開始
                break;
            //動作中（ケース１）
            case 1:  //click-2nd
                statuscase = 2;  //ケース切替１⇒２
                clearTimeout(timerID);  //タイマー停止
                timerID = 0 ;  //タイマー値クリア
                break;
            //終了
            case 2:  //click-3rd
                statuscase = 0;   //ケース切替２⇒０
                timerTxt.textContent = "READY" ;  //start字準備
                break;
    }
}) ;

function count() {
            //テキスト書き換え
    let nowtime = document.getElementById('nowtime');  //現在時間ＨＴＭＬ読み込み
    let nowtimeValue =  new Date();                    //現在時間セット
                //console.log("nowtimeValue:" + nowtimeValue + ",");
    
    let nowhours = String(nowtimeValue.getHours()).padStart(2,'0');            //現在時間　Ｈ
    let nowminutes = String(nowtimeValue.getMinutes()).padStart(2,'0');            //現在時間　Ｍ
    let nowseconds = String(nowtimeValue.getSeconds()).padStart(2,'0');            //現在時間  Ｓ
    nowtime.textContent = nowhours + ":" + nowminutes + ":" + nowseconds;  //現在時間表示
                //console.log(nowhours + ":" + nowminutes + ":" + nowseconds);        


    if(currentTime > 0){
        audio_sec.pause();  //Audio_secが1秒以上で音飛びするので、途中停止
        audio_sec.currentTime = 0;  //Audio_sec 巻き戻し
        timerTxt.textContent = String(currentTime) ;  //カウントダウン値が０以上でカウント値を表示
        audio_sec.play();  //カウントダウン秒　音起動
    } else if(currentTime === 0) {
        timerTxt.textContent = "START" ;  //カウントダウン値が０でSTART表示
        startTime = new Date();  //スタート時間を格納
                //console.log("startTime:" + startTime + ",");

    let starttime = document.getElementById('starttime');  //ＳＴＡＲＴ時間ＨＴＭＬ読み込み                
    let starthours = String(startTime.getHours()).padStart(2,'0');            //ＳＴＡＲＴ時間　Ｈ
    let startminutes = String(startTime.getMinutes()).padStart(2,'0');            //ＳＴＡＲＴ時間　Ｍ
    let startseconds = String(startTime.getSeconds()).padStart(2,'0');            //ＳＴＡＲＴ時間  Ｓ
    starttime.textContent = starthours + ":" + startminutes + ":" + startseconds;  //現在時間表示
    let starttimevalue = starthours + ":" + startminutes + ":" + startseconds;        

        audio_start.play();  //スタート号令
    } else {
        const time = new Date(Date.now() - startTime) ;  //計測時間
        const min = String(time.getMinutes()).padStart(2,'0') ;  //計測時間（分）2桁　空きは０で埋める
        const sec = String(time.getSeconds()).padStart(2,'0') ;  //計測時間（秒）2桁
                                                                 //00:00
                timerTxt.textContent = `${min}:${sec}` ;  //計測時間　表示
                let calltimevalue = `00:${min}:${sec}` ;  //コール用現在時間   

        const calltime1value = calltime1.value ;
        const calltime2value = calltime2.value ;
        const calltime3value = calltime3.value ;
        const calltime4value = calltime4.value ;
        const calltime5value = calltime5.value ;

        function calltimeStartArray(timevalue) {  //関数宣言　Id "calltime*(時：分)"から時報発動時間算出
            const resultArray = timevalue.split(':');  //”：”で区切って配列に
            if (resultArray[0] === "01" && resultArray[1] === "00") {  //01:00設定の場合、00:60に置換
                resultArray[0] = "00" ;
                resultArray[1] = "60" ;
            }
            const minutesV = resultArray.pop();  //配列より分を取出し
            const minutesNum = Number(minutesV);  //文字から数値に変換
            const minutesNumStart = minutesNum - 1 ;  //－1分減算
            const minutesStrStart = minutesNumStart.toString().padStart(2,'0'); //数値から文字に変換、2桁標示にする
            resultArray.push(minutesStrStart);  //配列に再投入
            resultArray.push("57");  //配列に秒を追加（時報発動時間）
            const result = resultArray[0] + ":" + resultArray[1] + ":" + resultArray[2] ;  //文字列で時報発動時間を配列から取り出し
        return result;   //関数出力 
        }

        const calltime1StartArray = calltimeStartArray(calltime1value);
        const calltime2StartArray = calltimeStartArray(calltime2value);
        const calltime3StartArray = calltimeStartArray(calltime3value);
        const calltime4StartArray = calltimeStartArray(calltime4value);
        const calltime5StartArray = calltimeStartArray(calltime5value);

        if(calltimevalue === calltime1StartArray ) {  //コール１起動　設定値ー３秒
            audio_ana.play() ;                           //コール１サウンド起動　時報
        }
        if(calltimevalue === calltime2StartArray ) {  
            audio_ana.play() ;                           
        }
        if(calltimevalue === calltime3StartArray ) {
            audio_ana.play() ;
        }
        if(calltimevalue === calltime4StartArray ) {
            audio_ana.play() ;
        }
        if(calltimevalue === calltime5StartArray ) {
            audio_ana.play() ;
        }

    }
    currentTime--;  //カウント減算                             

            //タイマースタート
    timerID = setTimeout(()=>{
        count() ;
    },1000);  //1秒間隔
}








