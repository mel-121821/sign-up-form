
// Inputs 
const inputEmail = document.querySelector('#email');
const inputPwd1 = document.querySelector('#pwd1');
const inputPwd2 = document.querySelector('#pwd2');

// Paragraphs 
const emailPara = document.querySelector('.email-req')
const reqPwdPara = document.querySelectorAll('.pwd-req');
const pwdMatchPara = document.querySelector('.pwd-match');

// Spans
const emailSpan = document.querySelector('.email-req > span');
const pwdSpanLength = document.querySelector('.req-length > span');
const pwdSpanNum = document.querySelector('.req-num > span');
const pwdSpanChar = document.querySelector('.req-char > span');
const pwdSpanMatch = document.querySelector('.pwd-match > span');

// Regex Patterns
const regExNum = /[0-9]/g;
const regExChar = /[!-\/:-@[-`{-~]/g



//__________________________________________________


// Email Input Functions
inputEmail.addEventListener('focus', () => {
    emailPara.style.display = "block";
})

inputEmail.addEventListener('focusout', () => {
    emailPara.style.display = "none";
})

inputEmail.addEventListener('input', (event)=> {
    if(inputEmail.validity.valid) {
        emailSpan.classList.add('valid'); 
    } else {
        emailSpan.classList.remove('valid')
    }  
})


// Pwd1 Input Functions
inputPwd1.addEventListener('focus', () => {
    for (pwd of reqPwdPara) {
        pwd.style.display = "block"; 
    }
})

inputPwd1.addEventListener('focusout', () => {
    for (pwd of reqPwdPara) {
        pwd.style.display = "none"
    }
})

inputPwd1.addEventListener('input', (e) => {
    let pwdVal = document.querySelector('#pwd1').value;
    if(pwdVal.length >= 8) {
        pwdSpanLength.classList.add('valid');
    } else {
        pwdSpanLength.classList.remove('valid');
    }
})

inputPwd1.addEventListener('input', (e) => {
    let pwdVal = document.querySelector('#pwd1').value;
    if(pwdVal.match(regExNum)) {
        pwdSpanNum.classList.add('valid');
    } else {
        pwdSpanNum.classList.remove('valid');
    }
})

inputPwd1.addEventListener('input', (e) => {
    let pwdVal = document.querySelector('#pwd1').value;
    if(pwdVal.match(regExChar)) {
        pwdSpanChar.classList.add('valid');
    } else {
        pwdSpanChar.classList.remove('valid');
    }
})


// Pwd2 Input Functions
inputPwd2.addEventListener('focus', () => {
    pwdMatchPara.style.display = "block"    
})

inputPwd2.addEventListener('focusout', () => {
    pwdMatchPara.style.display = "none"    
})

let paraVal = document.createTextNode("Passwords do not match");
pwdMatchPara.appendChild(paraVal);

function checkPasswords() {
    let pwd1 = document.getElementById('pwd1').value;
    let pwd2 = document.getElementById('pwd2').value;
    if (pwd2 === "") {
        inputPwd2.classList.add('invalid');
    } else {
        if(pwd1 === pwd2) {
            pwdSpanMatch.classList.add('valid');
            inputPwd2.classList.add('valid');
            inputPwd2.classList.remove('invalid')
            paraVal.textContent = "";
            paraVal.textContent = "Passwords match";
        } else {
            pwdSpanMatch.classList.remove('valid');
            inputPwd2.classList.add('invalid');
            inputPwd2.classList.remove('valid');
            paraVal.textContent = "";
            paraVal.textContent = "Passwords do not match";
        }        
    } 
}