const forgot = document.querySelector('.forgot-pass')
const create = document.querySelector('.create-account')
const cancels = document.querySelectorAll('.cancel')

const accountLogin = document.querySelector('.account__login')
const accountForgot = document.querySelector('.account__forgot')
const accountCreate = document.querySelector('.account__create')

forgot.addEventListener('click', function() {
    accountLogin.style.display = 'none';
    accountForgot.style.display = 'block';
    accountCreate.style.display = 'none';
})

for(const cancel of cancels){
    cancel.addEventListener('click', function() {
        accountLogin.style.display = 'block';
        accountForgot.style.display = 'none';
        accountCreate.style.display = 'none';
    })
}

create.addEventListener('click', function() {
    accountLogin.style.display = 'none';
    accountForgot.style.display = 'none';
    accountCreate.style.display = 'block';
})