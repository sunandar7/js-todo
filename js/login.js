//UI
const background = document.getElementById('background');
const password = document.getElementById('password');
const eyeicon = document.getElementById('eye');
const loginbtn = document.getElementById('loginbtn');
const user = document.getElementById('user');
const form = document.getElementById('form');
const error = document.getElementById('error');
form.addEventListener('submit',(e)=>{

    const userval = user.value;
    // console.log(userval);
    const passwordval = password.value;
    // console.log(passwordval);
    if(userval === "Su Nandar" && passwordval === "12345678"){
        loginbtn.setAttribute('onclick','location.href="index.html"');
    }
    else if(userval !== "Su Nandar" && passwordval === "12345678"){
        error.innerText ="Username incorrect";
    }
    else if(userval === "Su Nandar" && passwordval !== "12345678"){
        error.innerText = "Password incorrect";
    }
    else{
        error.innerText = "Username and password incorrect!";
    }                       
    e.preventDefault();
})

password.addEventListener('input',e=>{
    
    const input = e.target.value;
    // console.log(input);
    const inlength = input.length;
    // console.log(inlength);
    const blurvlaue = 16 - inlength*2;
    // console.log(blurvlaue);
    background.style.filter = `blur(${blurvlaue}px)`;
})

eyeicon.addEventListener('click',()=>{
    if(eyeicon.classList.contains('fa-eye')){
        eyeicon.classList.replace('fa-eye','fa-eye-slash');
        password.setAttribute('type','text');
    }
    else{
        eyeicon.classList.replace('fa-eye-slash','fa-eye');
        password.setAttribute('type','password');
    }
})