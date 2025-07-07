const txtEmail = document.getElementById("txtEmail")
const msgFeed = document.getElementById("newsletterFeedback")

function cadastrarEmail(){
    let email = txtEmail.value
    msgFeed.innerHTML = `O email ${email} foi cadastrado com sucesso`
}