let input = document.getElementById("input")
 let one = document.getElementById("one")
//  input.innerText = "gfds"
 let currentinp =""
one.addEventListener("click",()=>{
    let value1 = one.getAttribute("data-value")
    input.value = value1
    // console.log(currentinp)
    input.innerText= input.value
    // document.body.append(value)
//    console.log("gfdcx")
})

 