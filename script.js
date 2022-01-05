let contain = document.querySelector(".contain")
let value = document.getElementById("value")



   
for(let i=0;i<200;i++){
    let randomLeft= Math.floor(Math.random()*contain.clientWidth)+"px"
    let randomTop= Math.floor(Math.random()*contain.clientWidth)+"px"
    let randomSize= Math.floor(Math.random()* 5)+"vmin"
    contain.innerHTML +=`<div class="star"></div>`
    let star = document.querySelectorAll(".star")

    star[i].style.left=randomLeft
    star[i].style.top=randomTop
    star[i].style.width=randomSize
    star[i].style.height=randomSize
    star[i].style.animationDelay=`${0.1 * i}s`
    window.addEventListener("input",(e)=>{
    star[i].style.animation=` ${e.target.value}ms`
    console.log(`${e.target.value}ms`)
        
     })
}
