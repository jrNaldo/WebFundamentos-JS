function contagemRegressiva(){
  const futuro = Date.now() + 10000
  const timer = setInterval(() => {
    const agora = Date.now()
    const diferenca = futuro - agora
    // console.log(diferenca)
    if(diferenca <= 0){
        console.log("acabou ⏰")
        clearInterval(timer)
      }else{
        const segundos = Math.round(diferenca / 1000);
        console.log(segundos);
      }
  },1000)
}
contagemRegressiva();