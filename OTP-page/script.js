let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let Fourth = document.getElementById('Fourth');

function pageloaded(){
    let firstdigit = Math.floor(Math.random() * 10);
    let seconddigit = Math.floor(Math.random() * 10);
    let Thirddigit = Math.floor(Math.random() * 10);
    let fourthdigit = Math.floor(Math.random() * 10);
    otpsent = ('' + firstdigit + seconddigit + Thirddigit + fourthdigit);
    alert('OTP - ' + otpsent);
    first.focus();
}

function typeevent(initial,next) {
    let key = event.key //key entered listeining event
    if(key === 'Backspace' || key === 'Delete'){
        document.getElementById(initial).focus();
    } else if(first.value.length){
        document.getElementById(next).focus();
    }
}

function deleteevent(initial,next) {
    let key = event.key //key entered listeining event
    if(key === 'Backspace' || key === 'Delete'){
        Fourth.value = '';
        document.getElementById(next).focus();
    } else {
        document.getElementById(initial).focus();
    }
}

function editinput() {
    first.value = '';
    second.value = '';
    third.value = '';
    Fourth.value = '';
    first.focus();
}

function typefinished() {
    if(Fourth.value.length){
        let onetimepass = ('' + first.value + second.value + third.value + Fourth.value);
        if (onetimepass == otpsent) {
            alert('OTP CORRECT');
            window.location.replace('Reset-password.html');
        } else {
            alert('OTP INCORRECT. Enter correct OTP or click on resend OTP');
            first.value = '';
            second.value = '';
            third.value = '';
            Fourth.value = '';
            first.focus();
        }
    }
}

function resendotp() {
    location.reload()
}