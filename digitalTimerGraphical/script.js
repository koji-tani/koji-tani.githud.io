'use strict'
// Please don't delete the 'use strict' line above

test({ a: "A", b: "B" }, { b: "B", a: "A" });
console.log("◆basis◆");


setInterval(()=> {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hr_dot = document.querySelector('.hr_dot') ;
    let min_dot = document.querySelector('.min_dot') ;
    let sec_dot = document.querySelector('.sec_dot') ;
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    
    if (h > 12) {
        h = h - 12 ;
    }
    if (h < 10) {
        h =  "0" + h  ;
     } 
     if (m < 10) {
        m =  "0" + m  ;
     } 
     if (s < 10) {
        s =  "0" + s  ;
     } 
       
    
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = am ;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12 ;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60 ;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60 ;

    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    sec_dot.style.transform = `rotate(${s * 6}deg)`;

    })
