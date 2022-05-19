const dablyat = document.querySelectorAll(".solevaya")
const dasuka = document.querySelectorAll(".geroin")
const oi = document.querySelector(".amfetamin")
let aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

dablyat.forEach((el, i) =>{
    el.addEventListener("click", ()=>{
 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa=el.textContent
 dasuka.forEach((element, i) => {
     element.addEventListener("click",()=>{
     if (element.textContent == "+"){
        el.addEventListener("click",()=> {
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa+el
             })
     } else if (element.textContent == "-"){
        el.addEventListener("click",()=> {
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-el
             })
     } else if (element.textContent == "*"){
        el.addEventListener("click",()=> {
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*el
             })
     } else if (element.textContent == ":"){
        el.addEventListener("click",()=> {
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/el
             })
     } else if (element.textContent == "="){
        oi.innerHTML =  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
     }
    })
 })
    })
})