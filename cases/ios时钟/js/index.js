const oUl = document.getElementsByClassName("time")[0];
const oHour = document.getElementsByClassName("hour")[0];
const oMin = document.getElementsByClassName("min")[0];
const oSec = document.getElementsByClassName("sec")[0];

function creatEle() {
    let str = "";
    for (let i = 1; i<= 12;i++) {
        str += '<li class=num style="transform:rotate('+i*30+'deg)"><span style="transform:rotate('+i*-30+'deg)"> '+ i +'</span></li>';
    }
    oUl.innerHTML = str;
}
creatEle();
function rotate() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let millSec = time.getMilliseconds();

    let nowSec = sec + millSec / 1000;
    let rs = nowSec * 6;
    oSec.style.transform = 'rotate('+ rs +'deg)';

    let nowMin = min + nowSec / 60;
    let rm = nowMin * 6;
    oMin.style.transform = 'rotate('+ rm +'deg)';

    let nowHou = hour + nowMin / 60;
    let rh = nowHou * 30;
    oHour.style.transform = 'rotate('+ rh +'deg)';
    setTimeout(rotate,16.7);
}
rotate();