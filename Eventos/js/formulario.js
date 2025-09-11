(function(){
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")
    const txtDescricao = document.getElementById("txtDescricao")
    const contadorCont = document.getElementById("contador")
    const resta = contadorCont.getElementsByTagName("span")[0]
    const max = parseInt(txtDescricao.maxLength)
    const chk = document.getElementById("chkAceito")
    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

    function mostrarNumero(n){
        resta.textContent = n
    }

    mostrarNumero(max)

    
    formCadastro.addEventListener("submit", function(e){
        if(!txtTitulo.value){
            showErrorMsg("Preencha esse campo", function(){
                txtTitulo.focus()
            })
            e.preventDefault() // Previne o comportamento padrão do browser
        }
    })
    
    function showErrorMsg(msg, cb){
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        function hideErrorMessage(){
            console.log("chamada...")
            feedbackMessage.classList.remove("show")
            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
        }

        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)
        if(typeof cb === "function"){
            cb()
        }
    }
    
    contadorCont.removeAttribute("style")
    // contadorCont.style.display = "block"

    // txtDescricao.addEventListener("input", function(){
    //     let numLetrasDigitados = this.value.length
    //     let caracteresRestantes = max - parseInt(numLetrasDigitados)
    //     resta.textContent = caracteresRestantes
    // })
    

    txtDescricao.addEventListener("input", ()=>{
        mostrarNumero(max - parseInt(txtDescricao.value.length))
    })

    btn.disabled = true

    chk.addEventListener("change", function(){
        btn.disabled = !this.checked
    })
})();