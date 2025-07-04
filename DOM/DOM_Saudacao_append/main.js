
(function(){
    const nomeUsuario = "Shophia"
    if(nomeUsuario){
        const topBar = document.createElement("div")
        topBar.className = "top-bar"
        topBar.innerHTML = `<p>Olá, <b> ${nomeUsuario}</b></p>`
        const pai = document.querySelector(".hero")
        const firstChild = pai.firstElementChild
        pai.insertBefore(topBar, firstChild)
    }
    
})()