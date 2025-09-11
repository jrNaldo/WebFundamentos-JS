
(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")

    formCadastro.addEventListener("submit", function (e) {
        console.log(txtTitulo.value)
        if (!txtTitulo.value) {
            showErrorMessage("Preencha todos os campos", function () {
                txtTitulo.focus()
            })
            e.preventDefault()

        }
    })

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg, cb) {
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg


        function hideErrorMessage() {
            console.log("clicado close")
            feedbackMessage.classList.remove("show")
            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
        }
        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)

        if (typeof cb === "function") {
            cb()
        }
    }




    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength

    mostrarNumero(maxima)

    // contadorContainer.removeAttribute("style")
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