const counters = document.querySelectorAll(".counter")

counters.forEach((counter)=>{
counter.innerText = "0"

const upCounter =() => {
    const target = Number(counter.getAttribute("data-target"));

    const c= +counter.innerText;

    const increment = target/500;

if(c<target){
    counter.innerText=`${Math.ceil(c+increment)}`
    setTimeout(upCounter,1)
}
else{
    counter.innerText=target
}

}
upCounter()
})