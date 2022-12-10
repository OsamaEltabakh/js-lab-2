const User = document.querySelector("#user");
const password = document.querySelector("#password");
const button = document.querySelector("button");
const dataLIsit={
    "user":"",
    "password":""
};
const admin={
    "user":"admin",
    "password":"123"
};
User.addEventListener("input",(e)=>{
    dataLIsit.user=e.target.value;
});
password.addEventListener("input",(e)=>{
    dataLIsit.password=e.target.value;
});
button.addEventListener("click",(e)=>{
    if(admin.user==dataLIsit.user&&admin.password==dataLIsit.password){
        console.log("Welcome")
    }
    else{
        console.log("Not Welcome")
    };
});
