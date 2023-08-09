const inputPwd1 = document.querySelector('#pwd1');

const reqPwdPara = document.querySelectorAll('.pwd-req')




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



// Adds back paragraphs without proper line breaks, also need to return to display: none when input is not focused