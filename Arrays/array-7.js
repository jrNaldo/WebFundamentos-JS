const numeros = [1,3,4,1,4,5,3,5,8,9]
const numUnicos = numeros.reduce(function(numerosUnicos, numAtual){
    if(numerosUnicos.indexOf(numAtual) < 0){
        numerosUnicos.push(numAtual)
    }
    return numerosUnicos
},[])

console.log(numUnicos)