// const login=document.getElementById('login')
// login.addEventListener('click',()=>{
//     navigation.navigate('/dashboard.html')
//     alert("Login request")
// })
const strength={0:'Too Weak',1:'Weak',2:'Medium',3:'Good',4:'Strong','success':'Too Strong'}
const colors={0:'red',1:'red',2:'orange',3:'orange',4:'green','success':'green'}
const messages={0:'Password must contain 8 characters!',1:'Password must contain 1 Capital letter!',2:'Password must contain 1 Small letter!',3:'Password must contain 1 number!',4:'Password must contain 1 special character!'}

function checkEmail(email) {
    const original_email = 'abdulahad443322@gmail.com'
    if (email === original_email)
        return true
    else {
        return false
    }
}

function validatePassword(password) {
    if (password.length < 8) {
        return 0
    }
    if (! /[A-Z]/.test(password)) {
        return 1
    }
    if (! /[a-z]/.test(password)) {
        return 2
    }
    if (! /[0-9]/.test(password)) {
        return 3
    }
    if (! /[^A-Za-z0-9]/.test(password)) {
        return 4
    }
    return 'success'

}
function checkPassword(password) {
    const original_password = 'Abdul@123'
    if (password === original_password)
        return true
    else {
        return false
    }
}
const password = document.getElementById("password");
password.addEventListener('input',()=>{
    const value=password.value;
    const password_strength = document.getElementById("strength");
    const x=validatePassword(value);
    password_strength.textContent = strength[x]
    password_strength.style.color=colors[x]
})



const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    if (!email || !password) {
        setTimeout(() => {
            message.textContent = "";
        }, 3000)
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }
    if (checkEmail(email)) {
        if (validatePassword(password) !== 'success') {
            setTimeout(()=>{
                message.textContent = ''
            },3000)
            message.style.color = "red";
            message.textContent = messages[validatePassword(password)]
            return
        }
        if (checkPassword(password)) {
            setTimeout(() => {
                message.textContent = "";
                navigation.navigate('/dashboard.html')

            }, 1000)
            message.style.color = "green";
            message.textContent = "Logged in successfully!";
            sessionStorage.setItem('loggedIn',true)
        }
        else{
            message.style.color = "red";
            message.textContent = "Password not matched!";

        }
    }
    else {
        setTimeout(() => {
            message.textContent = "";
        }, 3000)
        message.style.color = "green";
        message.textContent = "Email not found!";
    }
})

const toggle=document.querySelector('#toggle')
toggle.addEventListener('click',()=>{
    const password = document.getElementById("password");
    const svg = document.getElementById("svg");
    let att=svg.getAttribute('src')
    if(att==='show.svg'){
        svg.setAttribute('src','hide.svg')
        password.type='text'
    }
    else{
        svg.setAttribute('src','show.svg')
        password.type='password'
    }
})