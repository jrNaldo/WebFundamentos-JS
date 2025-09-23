function formatarNome(nomeCompleto){
    let nomeAsArray = nomeCompleto.split(" ")
    if(nomeAsArray.length === 1){
        return nomeCompleto
    }
    let primeiroNome = nomeAsArray.shift()
    return nomeAsArray.join(" ") + ", "+ primeiroNome
}

console.log(formatarNome("Naldo de Melo"))
console.log(formatarNome("Naldo"))
console.log(formatarNome("Naldo de Melo Silva"))
console.log(formatarNome("Daniel Tapias Morales"))