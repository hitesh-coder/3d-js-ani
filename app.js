// animation for movement card
const card = document.querySelector(".card");
const container = document.querySelector(".container");
// items
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const dis = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");

// moving card animation
container.addEventListener("mousemove", (e)=>{
    // console.log(e.pagex)
    let xaxis = (window.innerWidth/ 2 - e.pageX)/15;
    let yaxis = (window.innerHeight/ 2 - e.pageY)/15;
    card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`
})

// Animate in
container.addEventListener("mouseenter", (e)=>{
    card.style.transition = "all .08s ease";
    // pop-out
    sneaker.style.transform = "translateZ(75px) rotateZ(-10deg)"
    title.style.transform = "translateZ(50px)"
    dis.style.transform = "translateZ(25px)"
    sizes.style.transform = "translateZ(10px)"
    purchase.style.transform = "translateZ(10px)"
})
// Animate out
container.addEventListener("mouseleave", (e)=>{
    card.style.transition = "all 0.8s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    // pop-in
    sneaker.style.transform = "translateZ(0px)"
    title.style.transform = "translateZ(0px)"
    dis.style.transform = "translateZ(0px)"
    sizes.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"
})