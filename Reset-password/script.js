let pass = document.getElementById('pass');
let confirmpass = document.getElementById('confirmpass');
let passerror = document.getElementById('passerror');
let confirmpasserror = document.getElementById('confirmpasserror');
let showpass = document.getElementById('showpass');
let showconpass = document.getElementById('showconpass');

//clear all error messages on click of password input fiels
function passclicked() {
    confirmpasserror.innerHTML = '';
        passerror.innerHTML = '';
}
//checking password inputed once user move to reconfrim password
function conpassclicked() {
    if(pass.value.length == 0){
        passerror.innerHTML = 'Kindly enter you new password first';
    } else if (pass.value.length < 8) {
        passerror.innerHTML = 'Password must be at least 8 characters long';
    }
}
//checking if both passwords entered are the same thing
function submit() {
    if (pass.value !== confirmpass.value) {
        confirmpasserror.innerHTML = 'Passwords do not Match';
    } else {
        confirmpasserror.innerHTML = '';
        alert('Password Change SUCCESS');
        window.location.replace('Password-Changed.html')
    }
}
//password visibility for password input field
function showpassclicked() {
    if (pass.type === 'password') {
        pass.type = 'text';
        showpass.setAttribute('src','Reset-password/eye.svg');
     } else {
        pass.type = 'password';
        showpass.setAttribute('src','Reset-password/closedeye.svg');
    }
}
//password visibility for confirm password input field
function showconpassclicked() {
    if (confirmpass.type === 'password') {
        confirmpass.type = 'text';
        showconpass.setAttribute('src','Reset-password/eye.svg');
     } else {
        confirmpass.type = 'password';
        showconpass.setAttribute('src','Reset-password/closedeye.svg');
    }
}