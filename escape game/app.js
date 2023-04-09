const escBtn = document.querySelector("#run");

escBtn.addEventListener("mouseenter",runfunc);

function runfunc() {
    let horizon = Math.random()*300;
    let vertical =Math.random()*300;

    escBtn.style.top = `${vertical}px`
    escBtn.style.left=`${horizon}px`
}

const showpoint = document.querySelector("#point");

 let point=0;

 escBtn.addEventListener("click", ()=>{
    point += 10
    showpoint.innerText = `Point: ${point}`;
    alert("Add: +10 point")
 })