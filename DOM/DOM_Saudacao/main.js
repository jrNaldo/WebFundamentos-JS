
(function(){
    const nomeUsuario = null
    const p1 = document.getElementById("p1")
    if(nomeUsuario){
        p1.innerHTML += "<b> "+ nomeUsuario +"</b>"
    }else{
       // p1.parentElement.style.display = "none"
       //p1.parentElement.remove() //Metodo que remove elemento - Nao funciona no Ie
       const elementoRemover = p1.parentElement
       elementoRemover.parentElement.removeChild(elementoRemover) // Funciona em Ie
    }
})()