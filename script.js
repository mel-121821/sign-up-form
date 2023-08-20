
// Inputs 
const inputEmail = document.querySelector('#email');
const inputPwd1 = document.querySelector('#pwd1');
const inputPwd2 = document.querySelector('#pwd2');

// Paragraphs 
const emailPara = document.querySelector('.email-req')
const reqPwdPara = document.querySelectorAll('.pwd-req');
const pwdMatch = document.querySelector('.pwd-match');

// Spans
const emailSpan = document.querySelector('.email-req > span');
const pwdSpanLength = document.querySelector('.req-length > span');
const pwdSpanNum = document.querySelector('.req-num > span');
const pwdSpanChar = document.querySelector('.req-char > span');

// Regex Patterns
const regExLetter = /[a-zA-z]/g;
const regExNum = /[0-9]/g;
const regExChar = /[!-\/:-@[-`{-~]/g




//__________________________________________________


inputEmail.addEventListener('focus', () => {
    emailPara.style.display = "block";
})

inputEmail.addEventListener('focusout', () => {
    emailPara.style.display = "none";
})

inputEmail.addEventListener('input', (event)=> {
    if(inputEmail.validity.valid) {
        emailSpan.classList.add('valid'); 
        console.log("Valid");
    } else {
        emailSpan.classList.remove('valid')
        console.log("Not valid")
    }
    
})




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
    console.log(pwdVal);
    if(pwdVal.match(regExLetter)) {
        pwdSpanLength.classList.add('valid');
        console.log('valid')
    } else {
        pwdSpanLength.classList.remove('valid');
    }
})

inputPwd1.addEventListener('input', (e) => {
    let pwdVal = document.querySelector('#pwd1').value;
    console.log(pwdVal);
    if(pwdVal.match(regExNum)) {
        pwdSpanNum.classList.add('valid');
        console.log('valid')
    } else {
        pwdSpanNum.classList.remove('valid');
    }
})

inputPwd1.addEventListener('input', (e) => {
    let pwdVal = document.querySelector('#pwd1').value;
    console.log(pwdVal);
    if(pwdVal.match(regExChar)) {
        pwdSpanChar.classList.add('valid');
        console.log('valid')
    } else {
        pwdSpanChar.classList.remove('valid');
    }
})

inputPwd2.addEventListener('focus', () => {
    pwdMatch.style.display = "block"
})
