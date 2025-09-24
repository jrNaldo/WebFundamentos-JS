let numero = 123.4567

console.log(numero.toFixed(2)) // Quantidade de casas decimais que quer que mostre
console.log(numero.toPrecision(5)) // Num de digitos que eu quero em um numero 

numero = 12.34567
console.log(numero.toExponential())

numero = 11
console.log(numero.toString(16))

numero = 12345.67
console.log(numero.toLocaleString("pt-br"))
console.log(numero.toLocaleString("pt-pt", {style: "currency", currency: "EUR"}))

let numeroAsString = "3.456"
console.log(isNaN(numeroAsString))