function formatarNome(nomeCompleto){
    let nomeFormatado =  nomeCompleto.split(" ")
    let primeiroNome = nomeFormatado.shift()
    nomeFormatado =  nomeFormatado.reverse().join(" ")
    return `${nomeFormatado}, ${primeiroNome}`
}

console.log(formatarNome("Naldo"))