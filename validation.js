// validation script here
let reg=/^\d{11}$/;
let tel=document.getElementById("tel");
console.log(tel);
tel.addEventListener("keyup",()=>{
    // console.log(tel.value);
    console.log(reg);
    if(reg.test(tel.value)){ 
        tel.classList.add("validated");
    }else{
        tel.classList.remove("validated");
    }
});