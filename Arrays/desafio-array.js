function sum(){
    const numbers = [...arguments]
    return numbers.reduce(function(sum, atual){
        return sum + atual
    })
}
function avarage(){
    return sum(...arguments) / arguments.length
}
let soma = sum(1,2,3,4,5)
console.log(soma)

let m = avarage(1,2,3,4,5)
console.log(m)