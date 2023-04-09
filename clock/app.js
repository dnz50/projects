let clock=document.querySelector(".clock");
let sec=document.querySelector("#sec");
let min=document.querySelector("#min");
let hours=document.querySelector("#hour");
let dot=document.querySelector(".watch");

function move(){
    let second=new Date().getSeconds();
    let minute=new Date().getMinutes();
    let hour=new Date().getHours();

    sec.style.transform=`rotate(${180+(second*6)}deg)`
    min.style.transform=`rotate(${180+(minute*6)}deg)`
    hours.style.transform=`rotate(${180+(hour*30)}deg)`

    second=(second<10) ? ("0" + second):second
    minute=(minute<10) ? ("0"+ minute):minute

    document.querySelector("#saat").innerHTML=(hour+" : "+minute+" : "+second);

}
setInterval(move,1000);
