n = 10
nObj = new Number(10)

console.log(n instanceof Number)
console.log(n instanceof Number || typeof n === "number")
console.log(nObj instanceof Number)
console.log(n.constructor)
console.log(nObj.constructor)
console.log("--------------------")

const arr1 = []
const arr2 = new Array()
console.log(arr1 instanceof Array) // Quando se trata de valores nao primitivos, mostra true
console.log(arr2 instanceof Array)
console.log("--------------------")

const regEx1 = /a/g
const regEx2 = new RegExp()

console.log(regEx1 instanceof RegExp)
console.log(regEx2 instanceof RegExp)

console.log(typeof function(){})