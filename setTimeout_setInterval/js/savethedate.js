(function () {
    const heroContent = document.getElementsByClassName("hero-content")[0]
    const title = heroContent.getElementsByTagName("h1")[0]
    const data = title.getElementsByTagName("span")[0].textContent
    const paragrafo =  document.createElement("p")
    // paragrafo.innerHTML = "Contagem Regressiva: "
    heroContent.appendChild(paragrafo)

    setInterval(function(){
        const [dataBruta, horas] = data.split(" ")
        const [dia, mes, ano] = dataBruta.split("/")
        const [horaPt1, horaPt2] = horas.split("H")
        const newDate = `${ano}-${mes}-${dia}T${horaPt1}:${horaPt2}`
        const cronometro = new Date(newDate)
        // console.log(cronometro)
        const dataAtual = new Date()
        if(+dataAtual < +cronometro){
            paragrafo.innerText = "Contagem atrasada"
        }
        let diferencaHoras = cronometro - dataAtual
        const days = Math.floor(diferencaHoras / (1000*60*60*24))
        diferencaHoras %= (1000 * 60 * 60 * 24)
        const hours = Math.floor(diferencaHoras / (1000*60*60))
        diferencaHoras %= (1000 *60 *60)
        const minutes = Math.floor(diferencaHoras / (1000 * 60))
        diferencaHoras %= (1000 * 60)
        const seconds = Math.floor(diferencaHoras / 1000)
        
        paragrafo.innerText = ` Contagem Regressiva: ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
         
        if(diferencaHoras < 0){
            // alert("oi")
            paragrafo.innerText = "Data atrasada"
        }
        
}, 1000)
})()