const leftBtn = document.querySelector(".leftbtn")
const rightBtn = document.querySelector(".rightbtn")
const apple =document.querySelector(".left")
const sam = document.querySelector(".right")
const main = document.querySelector(".main")

apple.addEventListener("mouseenter",()=>{
    main.classList.add("active-left")
})
apple.addEventListener("mouseleave",()=>{
    main.classList.remove("active-left")
})
 sam.addEventListener("mouseenter",()=>{
    main.classList.add("active-right")
 })
 sam.addEventListener("mouseleave",()=>{
    main.classList.remove("active-right")
})

