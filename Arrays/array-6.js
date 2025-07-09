let arr = [1,2,3,4]
//arr.reverse()
console.log(arr)
console.log("--------------------------------------")
let j = 0
let soma = arr.reduce( function(acumulador, atual, i, _arr){
    console.log("i: ",i)
    console.log("j:",j++)
    console.log("acumulador: ",acumulador ,"----", "atual:",atual)
    return acumulador + atual
},0)
console.log("--------------------------------------")
console.log(soma)
console.log(arr)
console.log("--------------------------------------")

const nomes = ["Daniel", "Maria", "Joana", "João"]
let nomesPorOrdem = nomes.reduce( function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }else{
        nomes[primeiraLetra] = 1
    }
    return nomes
},{})
console.log(nomesPorOrdem)