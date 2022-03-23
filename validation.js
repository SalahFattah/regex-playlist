// validation script here
let reg={
    "username": /^\w{5,12}$/,
    "email":/^[\w\.-]+@[a-z\d-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/,
    "password":/^[\w@-]{8,20}$/,
    "telephone":/^\d{11}$/,
    "slug":/^[a-z\d-]{8,20}$/
};
let inputs =document.getElementsByTagName("input");
// console.log(inputs);
let tel=document.getElementById("tel");
// console.log(tel);
for (let i of inputs){
    i.addEventListener("keyup",(e)=>{
        console.log(e.target.attributes.name.value);

    });
}
tel.addEventListener("keyup",()=>{
    // console.log(tel.value);
    console.log(reg);
    if(reg.test(tel.value)){ 
        tel.classList.add("validated");
    }else{
        tel.classList.remove("validated");
    }
});