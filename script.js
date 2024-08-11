
//  let one = document.getElementById("one")
// //  input.innerText = "gfds"
//  let currentinp =""
// one.addEventListener("click",()=>{
//     let value1 = one.getAttribute("data-value")
//     input.value = value1
//     // console.log(currentinp)
//     input.innerText= input.value
//     // document.body.append(value)
// //    console.log("gfdcx")
// })
 let input1 = document.getElementById("input_container")
 let all_clear = document.getElementById("all_clear")
 ;let clear = document.getElementById("clear")
 let nums = document.querySelectorAll(".number")
 let currentinp = ""
 nums.forEach((num) => {
    num.addEventListener("click",()=>{
        let val = num.getAttribute("data-value")
        currentinp+= val
        input1.value = currentinp
        input1.innerText = input1.value
        // console.log(val)
    })
    // console.log(num)
 });
 
//  ALL CLEAR FUNCTION
 all_clear.addEventListener("click",()=>{
    currentinp = ""
    input1.value = currentinp
    input1.innerText = input1.value
 }
)

// CLAER FUNCTION
clear.addEventListener("click",()=>{
    currentinp = currentinp.slice(0,currentinp.length-1)
    input1.value = currentinp
    input1.innerText = input1.value
})

// OPERATORS
let ops = document.querySelectorAll("operator")
ops.forEach((num) => {
        num.addEventListener("click",()=>{
        let opt_val = num.getAttribute("data-value")
        console.log(opt_val)
        // let num1 = Number(currentinp)
        // currentinp = ""
        // let operator = opt_val
        // // console.log(operator)
    })
});
