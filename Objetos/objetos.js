const obj1 = {
    nome: "Daniel", 
    idade: 56
}

const obj2 = new Object()
obj2.nome = "Naldo"
obj2["idade"] = 27

console.log(obj1)
console.log(obj2)

const str = "Minha string"
console.log(`Caracteres de [${str}] é : ${str.length}`) // String é um object, onde o interpretador do browser usa para acessar os parametros de um dado primitivo(string, number, boolean), como usou o 'length'

const str2 = new String("Miinha string 2")
console.log(str2) 
console.log(str.valueOf()) // Maneira de capturar o valor verdadeiro da String
console.log(str2.length)

const num = new Number(20)
console.log(num)
console.log(num.valueOf())

const data1 = Date()
console.log(data1)
console.log(typeof data1)

const data2 = new Date()
console.log("Dia do Mês => "+  data2.getDate())
console.log("Mês => " + data2.getMonth()) // Volta um a menos por conta que Jan é 0
console.log(typeof data2)

