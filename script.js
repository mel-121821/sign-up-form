
const inputEmail = document.querySelector('#email');
const inputPwd1 = document.querySelector('#pwd1');
const inputPwd2 = document.querySelector('#pwd2');

const emailPara = document.querySelector('.email-req')
const reqPwdPara = document.querySelectorAll('.pwd-req');
const pwdMatch = document.querySelector('.pwd-match');


inputEmail.addEventListener('focus', () => {
    emailPara.style.display = "block";
})

inputEmail.addEventListener('focusout', () => {
    emailPara.style.display = "none";
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

inputPwd2.addEventListener('focus', () => {
    pwdMatch.style.display = "block"
})
