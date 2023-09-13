
let pic=document.querySelector(".pic")
let modal=document.querySelector(".modal")
let modalImg=document.getElementById("modal-img")
let modalBtn=document.getElementById("modal-btn")

pic.addEventListener("click",()=>{
        modal.style.display="block"
        modalImg.src=pic.src
})

modalBtn.addEventListener("click",()=>{
    modal.style.display="none"
})

