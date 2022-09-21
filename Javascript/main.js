window.addEventListener("load", () => {
    let burgerSPan = document.querySelector(".burger")
    let navUl = document.querySelector(".nav_ul")
    burgerSPan.addEventListener("click", () => {
        navUl.classList.toggle("active")
        burgerSPan.classList.add("shox")
        
    })
    window.addEventListener("scroll" ,() => {
        let header=  document.querySelector("header")
        header.classList.toggle("stick", window.scrollY > 0)
    })  
})
// let array = ['black', 'yellow', 'red', "green", 'grey', "white"]
// function bodyColor(arr){
//     setInterval(() => {
//         let tanla = arr[parseInt(Math.random()*10 % 6)]
//         document.body.style.background = tanla
//         document.body.style.transition = " all 1s ease"
//     }, 1000)
// }
// bodyColor(array)
// window.addEventListener("mousemove", (e) => {
//     document.body.style.background = "rgb " + "(" + e.offsetX + "," + " " + e.offsetY + " " + ","+" " +" " + 10 + ");"
//     console.log("rgb (" + e.offsetX + "," + " " + e.offsetY + " " + ","+" "  + 10 + ")")
// })