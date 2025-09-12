
(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const txtDescricao = document.getElementById("txtDescricao")
    const maxima = txtDescricao.maxLength
    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]
    mostrarNumero(maxima)
    
    formCadastro.addEventListener("submit", function (e) {
        console.log(txtTitulo.value)
        if (!txtTitulo.value) {
            showErrorMessage("Preencha todos os campos", function () {
                txtTitulo.focus()
            })
            e.preventDefault()

        }
    })


    function showErrorMessage(msg, cb) {
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg
        feedbackMessageCloseBtn.focus()
        function hideErrorMessage() {
            console.log("clicado close")
            feedbackMessage.classList.remove("show")
            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn)
            if(typeof cb === "function"){
                cb()
            }
        }

        function pressedKeyboardOnBtn(e){
            if(e.keyCode === 27){
                hideErrorMessage()
            }
        }

        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)

        feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn)
    }
    
    contadorContainer.style.display = "block"

    function checkLength() {
        let numeroLetrasDigitdas = this.value.length
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitdas)
        mostrarNumero(caractersRestantes)
    }

    function mostrarNumero(n) {
        resta.textContent = n
    }


    txtDescricao.addEventListener("input", checkLength)

    btn.disabled = true

    const chkAceito = document.getElementById("chkAceito")
    chkAceito.addEventListener("change", function () {
        btn.disabled = !this.checked
    })
})()