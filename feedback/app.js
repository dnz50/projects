const ratings = document.querySelectorAll(".rating")
const btn=document.getElementById("send")
const panel= document.querySelector("#panel")
let selected ="geri bildirim seçiniz"

ratings.forEach((rating)=>{
    rating.addEventListener("click",(e)=>{
        // console.log(e.target.parentElement)
     if(e.target.parentElement.classList.contains("rating")){
        removeActive();
        
        e.target.parentElement.classList.add("active")
        // console.log(e.target.nextElementSibling)
        // console.log(e.target.nextElementSibling.innerText)

        selected=e.target.innerHTML;
        // console.log(selected)
     }
    })
})
function removeActive(){
    for(let i=0; i<ratings.length; i++){
        ratings[i].classList.remove("active")
    }
    
}
btn.addEventListener("click",feedback)

function feedback(){
    if (selected.includes("geri")){
        alert("Geri bildirim seçiniz")

    }
    else{
        panel.innerHTML=`
        <i class="fas fa-heart"></i>
        <strong> Teşekkürler </strong>
        <strong> geri bildiriminiz ${selected} </strong>
        `
    }
}