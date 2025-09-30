function quantoFaltaPara(m, d) {
    const dataAtual = new Date()
    let dataAniversario = new Date(dataAtual.getFullYear(),m-1,d)
    if(dataAniversario < dataAtual){
        dataAniversario.setFullYear(dataAtual.getFullYear() + 1)
    }
    let diferenca = dataAniversario - dataAtual
    const oneDay = 24 * 60 * 60 * 1000
    const dias = Math.ceil(diferenca / oneDay)
    return dias
}
// console.log(quantoFaltaPara("09","25"))

