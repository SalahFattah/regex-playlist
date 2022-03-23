// validation script here
let reg={
    "username": /^\w{5,12}$/,
    "email":/^[\w\.-]+@[a-z\d-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/,
    "password":/^[\w@-]{8,20}$/,
    "telephone":/^\d{11}$/,
    "slug":/^[a-z\d-]{8,20}$/
};
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